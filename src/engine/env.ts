import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import { rng, softSprite } from './gfx';

const NOISE = `
float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*vnoise(p); p*=2.03; a*=0.5; } return s; }
`;

export interface GroundOpts { size?: number; base?: number; puddle?: number; tiles?: number; reflect?: number; quality?: number; rain?: number; }

/** Wet reflective ground. Falls back to a plain glossy plane when reflections are disabled. */
export function makeGround(o: GroundOpts, reflections: boolean, fog: THREE.FogExp2) {
  const size = o.size ?? 200;
  const geo = new THREE.PlaneGeometry(size, size);
  const base = new THREE.Color(o.base ?? 0x0b0c10);
  if (!reflections) {
    const m = new THREE.MeshStandardMaterial({ color: base.clone().multiplyScalar(2.2), roughness: 0.22, metalness: 0.65 });
    const mesh = new THREE.Mesh(geo, m); mesh.rotation.x = -Math.PI / 2; return mesh;
  }
  const shader = {
    uniforms: {
      color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null },
      uTime: { value: 0 }, uBase: { value: base }, uPuddle: { value: o.puddle ?? 0.5 }, uTiles: { value: o.tiles ?? 0 },
      uReflect: { value: o.reflect ?? 1 }, uFogColor: { value: fog.color }, uFogDensity: { value: fog.density }, uRain: { value: o.rain ?? 1 },
    },
    vertexShader: `uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW;
      void main(){ vUv=textureMatrix*vec4(position,1.0); vec4 wp=modelMatrix*vec4(position,1.0); vW=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }`,
    fragmentShader: `
      uniform sampler2D tDiffuse; uniform float uTime,uPuddle,uTiles,uReflect,uFogDensity,uRain; uniform vec3 uBase,uFogColor;
      varying vec4 vUv; varying vec3 vW;
      ${NOISE}
      float ring(vec2 p, float t){ // rain ripples
        vec2 c=floor(p), f=fract(p)-0.5; float h=hash(c); float ph=fract(t*0.9+h*7.0);
        vec2 o=(vec2(hash(c+3.1),hash(c+7.7))-0.5)*0.5; float d=length(f-o);
        return smoothstep(0.035,0.0,abs(d-ph*0.38))*(1.0-ph)*step(0.35,h);
      }
      void main(){
        vec2 p=vW.xz;
        float n=fbm(p*0.22+3.0);
        float puddle=smoothstep(0.62-uPuddle*0.35,0.74-uPuddle*0.3,n);
        float grain=hash(floor(p*36.0))*0.6+vnoise(p*9.0)*0.4;
        vec3 base=uBase*(0.6+grain*0.9);
        float tl=0.0;
        if(uTiles>0.0){ vec2 g=abs(fract(p/uTiles)-0.5); tl=smoothstep(0.485,0.5,max(g.x,g.y)); base*=1.0-tl*0.6; }
        float rp=(ring(p*1.6,uTime)+ring(p*2.7+11.0,uTime*1.3))*uRain;
        vec2 dist=(vec2(vnoise(p*5.0+uTime*0.25),vnoise(p*5.0+9.0-uTime*0.25))-0.5)*mix(0.10,0.018,puddle);
        dist+=rp*0.03;
        vec4 uv=vUv; uv.xy+=dist*uv.w;
        vec3 refl=texture2DProj(tDiffuse,uv).rgb;
        float blur=mix(0.012,0.002,puddle);
        refl+=texture2DProj(tDiffuse,uv+vec4(blur,0,0,0)*uv.w).rgb+texture2DProj(tDiffuse,uv-vec4(blur,0,0,0)*uv.w).rgb
             +texture2DProj(tDiffuse,uv+vec4(0,blur*2.0,0,0)*uv.w).rgb+texture2DProj(tDiffuse,uv-vec4(0,blur*2.0,0,0)*uv.w).rgb;
        refl*=0.2;
        vec3 V=normalize(cameraPosition-vW); float fres=pow(1.0-max(V.y,0.0),2.5);
        float k=mix(0.22,0.92,puddle)*mix(0.45,1.0,fres)*uReflect*(1.0-tl*0.5);
        vec3 col=base*(0.5+0.5*(1.0-puddle))+refl*k+rp*vec3(0.05,0.06,0.08);
        float dd=length(cameraPosition-vW); float f=1.0-exp(-uFogDensity*uFogDensity*dd*dd);
        col=mix(col,uFogColor,f);
        gl_FragColor=vec4(col,1.0);
      }`,
  };
  const q = o.quality ?? 0.6;
  const refl = new Reflector(geo, {
    clipBias: 0.003, textureWidth: Math.floor(innerWidth * q), textureHeight: Math.floor(innerHeight * q), color: 0x888888, shader,
  });
  refl.rotation.x = -Math.PI / 2;
  (refl as any).isWetGround = true;
  return refl;
}

/* ---------------- rain ---------------- */
export class Rain {
  mesh: THREE.LineSegments; mat: THREE.ShaderMaterial;
  constructor(count = 5000, boxes: { minX: number; maxX: number; minZ: number; maxZ: number; minY: number; maxY: number }[] = []) {
    const pos = new Float32Array(count * 6), end = new Float32Array(count * 2);
    const r = rng(4242);
    for (let i = 0; i < count; i++) {
      const x = r(), y = r(), z = r();
      pos.set([x, y, z, x, y, z], i * 6); end[i * 2] = 0; end[i * 2 + 1] = 1;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aEnd', new THREE.BufferAttribute(end, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    const bx = [], by = [];
    for (let i = 0; i < 8; i++) {
      const b = boxes[i];
      bx.push(b ? new THREE.Vector4(b.minX, b.maxX, b.minZ, b.maxZ) : new THREE.Vector4(1e6, 1e6, 1e6, 1e6));
      by.push(b ? new THREE.Vector2(b.minY, b.maxY) : new THREE.Vector2(0, 0));
    }
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uBox: { value: bx }, uBoxY: { value: by }, uAmt: { value: 1 } },
      vertexShader: `attribute float aEnd; uniform float uTime,uAmt; uniform vec3 uCam; uniform vec4 uBox[8]; uniform vec2 uBoxY[8]; varying float vA;
        void main(){
          vec3 S=vec3(34.0,22.0,34.0);
          float sp=16.0+fract(position.x*91.7)*8.0;
          vec3 p=position*S; p.y=mod(p.y-uTime*sp,S.y);
          p.xz=mod(p.xz-uCam.xz,S.xz)-S.xz*0.5+uCam.xz; p.y+=uCam.y-S.y*0.4;
          p.y+=aEnd*(0.35+fract(position.z*37.0)*0.3); p.x+=aEnd*0.035;
          float inside=0.0;
          for(int i=0;i<8;i++){ vec4 b=uBox[i]; if(p.x>b.x&&p.x<b.y&&p.z>b.z&&p.z<b.w&&p.y>uBoxY[i].x&&p.y<uBoxY[i].y) inside=1.0; }
          float d=length(p-uCam);
          vA=(0.10+0.22*aEnd)*smoothstep(17.0,6.0,d)*step(fract(position.y*53.0),uAmt);
          gl_Position=projectionMatrix*viewMatrix*vec4(p,1.0);
          if(inside>0.5) gl_Position=vec4(2.0,2.0,2.0,1.0);
        }`,
      fragmentShader: `varying float vA; void main(){ gl_FragColor=vec4(0.72,0.82,1.0,vA); }`,
    });
    this.mesh = new THREE.LineSegments(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 5;
  }
  update(dt: number, cam: THREE.Vector3) { this.mat.uniforms.uTime.value += dt; this.mat.uniforms.uCam.value.copy(cam); }
}

/* ---------------- sky + skyline ---------------- */
export function makeSky(top: number, horizon: number, glow: number) {
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uTop: { value: new THREE.Color(top) }, uHor: { value: new THREE.Color(horizon) }, uGlow: { value: new THREE.Color(glow) }, uTime: { value: 0 } },
    vertexShader: `varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uTop,uHor,uGlow; uniform float uTime; varying vec3 vP; ${NOISE}
      void main(){ vec3 d=normalize(vP); float h=clamp(d.y,0.0,1.0);
        vec3 c=mix(uHor,uTop,pow(h,0.45));
        float cl=fbm(d.xz/(d.y+0.25)*1.4+uTime*0.01);
        c+=uGlow*cl*cl*(1.0-h)*0.55;
        c+=uGlow*pow(1.0-h,6.0)*0.6;
        gl_FragColor=vec4(c,1.0); }`,
  });
  const s = new THREE.Mesh(new THREE.SphereGeometry(480, 24, 16), m); s.renderOrder = -10; s.frustumCulled = false;
  return s;
}

export function makeSkyline(seed: number, tint: number, inner = 95, outer = 260, count = 70, minH = 40, maxH = 190) {
  const g = new THREE.Group(); const r = rng(seed);
  const texs: THREE.Texture[] = [];
  for (let k = 0; k < 3; k++) {
    const c = document.createElement('canvas'); c.width = 128; c.height = 512; const x = c.getContext('2d')!;
    x.fillStyle = '#05070c'; x.fillRect(0, 0, 128, 512);
    for (let yy = 0; yy < 128; yy++) for (let xx = 0; xx < 16; xx++) if (r() < 0.28) {
      x.fillStyle = ['#ffd9a0', '#9fd8ff', '#ff9ac0', '#c8f0ff'][(r() * 4) | 0]; x.globalAlpha = 0.25 + r() * 0.6; x.fillRect(xx * 8 + 2, yy * 4 + 1, 4, 2);
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; texs.push(t);
  }
  const mats = texs.map(t => { const m = new THREE.MeshBasicMaterial({ map: t, fog: false, color: tint }); return m; });
  const dark = new THREE.MeshBasicMaterial({ color: 0x04050a, fog: false });
  for (let i = 0; i < count; i++) {
    const a = r() * Math.PI * 2, d = inner + r() * (outer - inner);
    const w = 14 + r() * 26, dd = 14 + r() * 26, h = minH + r() * (maxH - minH) * (0.4 + 0.6 * r());
    const m = mats[(r() * 3) | 0];
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, dd), [m, m, dark, dark, m, m]);
    b.position.set(Math.cos(a) * d, h / 2 - 2, Math.sin(a) * d); b.rotation.y = r() * 0.6; g.add(b);
    if (r() < 0.5) {
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.9, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff2030, fog: false }));
      (l.material as any).color.multiplyScalar(3); l.position.set(b.position.x, h + 1, b.position.z); l.userData.blink = r() * 6; g.add(l);
    }
  }
  return g;
}

/* ---------------- steam / smoke ---------------- */
export class Steam {
  group = new THREE.Group(); parts: { s: THREE.Sprite; t: number; sp: number }[] = [];
  constructor(x: number, y: number, z: number, color = 0x9fb0c0, n = 7, public height = 4, public spread = 0.6, public opacity = 0.16) {
    this.group.position.set(x, y, z);
    for (let i = 0; i < n; i++) {
      const m = new THREE.SpriteMaterial({ map: softSprite(), color, transparent: true, opacity: 0, depthWrite: false });
      const s = new THREE.Sprite(m); this.group.add(s);
      this.parts.push({ s, t: i / n, sp: 0.12 + Math.random() * 0.1 });
    }
  }
  update(dt: number) {
    for (const p of this.parts) {
      p.t += dt * p.sp; if (p.t > 1) { p.t = 0; p.s.position.x = (Math.random() - 0.5) * this.spread; p.s.position.z = (Math.random() - 0.5) * this.spread; }
      p.s.position.y = p.t * this.height; const sc = 0.6 + p.t * 2.6; p.s.scale.set(sc, sc, 1);
      (p.s.material as THREE.SpriteMaterial).opacity = Math.sin(p.t * Math.PI) * this.opacity;
    }
  }
}
