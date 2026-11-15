#!/usr/bin/env bash
# СВОИ: full build. Originals in svoi/source are only read, never written.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p build ../out

[ -f build/video.mkv ] && [ "${1:-}" != "--force" ] || python3 render.py video
python3 audio.py

# master: limit true peak to -1.5 dBTP, then normalise to -14 LUFS (linear, two-pass)
ffmpeg -v error -y -i build/mix.wav -af "alimiter=limit=0.8:attack=3:release=60:level=false" -ar 48000 build/mix_lim.wav
read -r I TP LRA TH OFF < <(ffmpeg -hide_banner -nostats -i build/mix_lim.wav \
  -af loudnorm=I=-14:TP=-2.0:LRA=20:print_format=json -f null - 2>&1 |
  python3 -c "import sys,json,re; j=json.loads(re.search(r'\{[^{}]*\}', sys.stdin.read(), re.S).group(0)); print(j['input_i'], j['input_tp'], j['input_lra'], j['input_thresh'], j['target_offset'])")
ffmpeg -v error -y -i build/mix_lim.wav -af "loudnorm=I=-14:TP=-2.0:LRA=20:measured_I=$I:measured_TP=$TP:measured_LRA=$LRA:measured_thresh=$TH:offset=$OFF:linear=true" -ar 48000 build/mix_master.wav

ffmpeg -v error -y -i build/video.mkv -i build/mix_master.wav \
  -map 0:v -map 1:a -c:v libx264 -profile:v high -preset slow -crf 19 -tune grain -maxrate 20M -bufsize 40M -pix_fmt yuv420p -r 30 \
  -x264-params "keyint=60:min-keyint=30" -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart \
  -metadata title="СВОИ — тизер" ../out/svoi_trailer.mp4

ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,sample_rate:format=duration,size -of compact ../out/svoi_trailer.mp4
ffmpeg -hide_banner -nostats -i ../out/svoi_trailer.mp4 -af ebur128=peak=true -f null - 2>&1 | grep -A20 Summary | grep -E "I:|Peak:"
