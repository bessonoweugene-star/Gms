import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null }, uTime: { value: 0 }, uMem: { value: 0 }, uGlitch: { value: 0 },
    uFade: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) }, uWet: { value: 0 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime,uMem,uGlitch,uFade,uWet; uniform vec2 uRes; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
    void main(){
      vec2 uv=vUv;
      uv.x += uMem*sin(uv.y*38.0+uTime*1.7)*0.0014;
      float band = floor(uv.y*46.0);
      float gl = step(0.975, hash(vec2(band, floor(uTime*14.0)))) * uGlitch;
      uv.x += gl*0.06*(hash(vec2(band,uTime))-0.5);
      vec2 d=(uv-0.5)*(0.0022+uMem*0.007+uGlitch*0.012);
      vec3 col;
      col.r=texture2D(tDiffuse,uv+d).r; col.g=texture2D(tDiffuse,uv).g; col.b=texture2D(tDiffuse,uv-d).b;
      float l=dot(col,vec3(0.299,0.587,0.114));
      vec3 mem=mix(vec3(0.0015,0.005,0.014), vec3(0.50,0.92,1.0), smoothstep(0.0,0.9,l));
      mem+=vec3(0.65,0.15,0.75)*pow(l,2.5)*0.5;
      col=mix(col,mem,uMem*0.88);
      col*=1.0-uMem*0.10*(0.5+0.5*sin(uv.y*uRes.y*1.6));
      // teal/orange grade
      col=mix(col, col*vec3(0.92,1.02,1.12), 0.35);
      col=pow(col, vec3(1.06));
      float v=smoothstep(0.92,0.30,length((uv-0.5)*vec2(1.0,0.86)));
      col*=mix(0.30,1.0,v);
      col+=(hash(uv*uRes+fract(uTime)*91.0)-0.5)*0.028;
      col*=1.0-uFade;
      gl_FragColor=vec4(max(col,0.0),1.0);
    }`,
};

export class Post {
  composer: EffectComposer; renderPass: RenderPass; bloom: UnrealBloomPass; final: ShaderPass;
  constructor(public renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    const size = renderer.getSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 0 });
    this.composer = new EffectComposer(renderer, rt);
    this.renderPass = new RenderPass(scene, camera);
    this.bloom = new UnrealBloomPass(size.clone().multiplyScalar(0.5), 0.6, 0.5, 0.9);
    this.final = new ShaderPass(FinalShader);
    this.composer.addPass(this.renderPass); this.composer.addPass(this.bloom);
    this.composer.addPass(this.final); this.composer.addPass(new OutputPass());
  }
  get u() { return this.final.uniforms as any; }
  setScene(s: THREE.Scene) { this.renderPass.scene = s; }
  resize(w: number, h: number, pr: number) {
    this.composer.setPixelRatio(pr); this.composer.setSize(w, h);
    this.u.uRes.value.set(w * pr, h * pr);
  }
  render(dt: number) { this.u.uTime.value += dt; this.composer.render(dt); }
}
