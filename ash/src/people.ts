import * as THREE from 'three';
import { pbr } from './tex';

export interface PersonOpts {
  coat: number; pants?: number; skin?: number; hair?: number;
  hat?: 'beanie' | 'ushanka' | 'hood' | 'cap' | 'none'; hatColor?: number;
  mask?: boolean; scarf?: number; backpack?: boolean; beard?: boolean; glasses?: boolean; long?: boolean; guitar?: boolean;
  scale?: number; build?: number; pose?: 'stand' | 'sit' | 'lie' | 'guard'; coatLen?: number; rifle?: boolean;
}
export interface Person { group: THREE.Group; head: THREE.Object3D; torso: THREE.Object3D; armL: THREE.Object3D; armR: THREE.Object3D; legL: THREE.Object3D; legR: THREE.Object3D; }

const cloth = (c: number) => { const m = pbr('cloth', 3, 3, c).clone(); return m; };
const flatM = (c: number, r = 0.7, me = 0) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: me });

/** Smooth, rounded human built from lathe bodies and tapered limbs. */
export function makePerson(o: PersonOpts): Person {
  const g = new THREE.Group(); const b = o.build ?? 1; const pose = o.pose ?? 'stand';
  const coatM = cloth(o.coat), pantsM = cloth(o.pants ?? 0x26282c), skinM = flatM(o.skin ?? 0xc49a7c, 0.62), bootM = flatM(0x121212, 0.6);
  const add = (geo: THREE.BufferGeometry, m: THREE.Material, p: THREE.Object3D, x = 0, y = 0, z = 0) => { const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); me.castShadow = true; p.add(me); return me; };
  const limb = (r1: number, r2: number, len: number, m: THREE.Material, p: THREE.Object3D) => { // hangs down from parent origin
    const c = add(new THREE.CylinderGeometry(r1, r2, len, 14, 1), m, p, 0, -len / 2, 0); add(new THREE.SphereGeometry(r1, 14, 10), m, p); add(new THREE.SphereGeometry(r2, 12, 8), m, p, 0, -len, 0); return c;
  };
  const root = new THREE.Group(); g.add(root);
  const hipY = 0.92;
  // legs
  const mkLeg = (sx: number) => {
    const hip = new THREE.Group(); hip.position.set(sx * 0.1 * b, hipY, 0); root.add(hip); limb(0.085 * b, 0.07 * b, 0.44, pantsM, hip);
    const knee = new THREE.Group(); knee.position.y = -0.44; hip.add(knee); limb(0.068 * b, 0.055 * b, 0.4, pantsM, knee);
    const boot = add(new THREE.CapsuleGeometry(0.062, 0.16, 6, 12), bootM, knee, 0, -0.44, 0.05); boot.rotation.x = Math.PI / 2; boot.scale.set(1.1, 1, 0.9);
    return { hip, knee };
  };
  const LL = mkLeg(-1), LR = mkLeg(1);
  // torso: lathe profile → smooth jacket
  const torso = new THREE.Group(); torso.position.y = hipY; root.add(torso);
  const len = o.coatLen ?? 0.25;
  const pts = [[0.001, -0.02 - len], [0.2 + len * 0.12, -0.02 - len], [0.19, 0.0], [0.175, 0.16], [0.2, 0.36], [0.215, 0.47], [0.17, 0.55], [0.075, 0.6], [0.001, 0.61]].map(p => new THREE.Vector2(p[0] * b, p[1]));
  const body = add(new THREE.LatheGeometry(pts, 20), coatM, torso); body.scale.z = 0.72;
  // arms
  const mkArm = (sx: number) => {
    const sh = new THREE.Group(); sh.position.set(sx * 0.225 * b, 0.5, 0); torso.add(sh); limb(0.066 * b, 0.055 * b, 0.3, coatM, sh);
    const el = new THREE.Group(); el.position.y = -0.3; sh.add(el); limb(0.052 * b, 0.044 * b, 0.27, coatM, el);
    const hand = add(new THREE.SphereGeometry(0.045, 12, 10), skinM, el, 0, -0.31, 0); hand.scale.set(0.85, 1.15, 0.6);
    sh.rotation.z = sx * 0.1; return { sh, el };
  };
  const AL = mkArm(-1), AR = mkArm(1);
  // neck + head
  add(new THREE.CylinderGeometry(0.05, 0.062, 0.1, 12), skinM, torso, 0, 0.63, 0);
  const head = new THREE.Group(); head.position.y = 0.74; torso.add(head);
  const sk = add(new THREE.SphereGeometry(0.108, 22, 18), skinM, head); sk.scale.set(0.88, 1.06, 0.98);
  const jaw = add(new THREE.SphereGeometry(0.082, 16, 12), skinM, head, 0, -0.055, 0.018); jaw.scale.set(0.9, 0.85, 0.95);
  const nose = add(new THREE.ConeGeometry(0.017, 0.045, 8), skinM, head, 0, -0.008, 0.108); nose.rotation.x = Math.PI / 2 + 0.3;
  const eyeM = flatM(0x0c0c0e, 0.3);
  for (const s of [-1, 1]) { add(new THREE.SphereGeometry(0.011, 8, 6), eyeM, head, s * 0.038, 0.02, 0.094); const br = add(new THREE.BoxGeometry(0.036, 0.007, 0.012), flatM(o.hair ?? 0x2a211a), head, s * 0.038, 0.042, 0.097); br.rotation.z = -s * 0.12; const ear = add(new THREE.SphereGeometry(0.02, 8, 6), skinM, head, s * 0.096, 0.0, 0); ear.scale.set(0.5, 1.2, 0.8); }
  const hairM = flatM(o.hair ?? 0x2a211a, 0.9);
  if (o.beard) { const bd = add(new THREE.SphereGeometry(0.086, 16, 12, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.55), hairM, head, 0, -0.045, 0.02); bd.scale.set(0.95, 1.1, 1.02); }
  const hat = o.hat ?? 'none', hatM = cloth(o.hatColor ?? 0x2a2e36);
  if (hat === 'none' || hat === 'cap') { const h = add(new THREE.SphereGeometry(0.113, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.5), hairM, head, 0, 0.012, -0.012); h.scale.set(0.92, 1.05, 1.03); if (o.long) { const bk = add(new THREE.CapsuleGeometry(0.09, 0.16, 6, 12), hairM, head, 0, -0.07, -0.055); bk.scale.set(1.05, 1, 0.55); } }
  if (hat === 'cap') { const cp = add(new THREE.SphereGeometry(0.118, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.42), hatM, head, 0, 0.02, 0); const vz = add(new THREE.CylinderGeometry(0.075, 0.075, 0.012, 16, 1, false, 0, Math.PI), hatM, head, 0, 0.048, 0.085); vz.rotation.y = -Math.PI / 2; }
  if (hat === 'beanie') { const bn = add(new THREE.SphereGeometry(0.118, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), hatM, head, 0, 0.012, -0.004); bn.scale.set(0.95, 1.12, 1.02); add(new THREE.TorusGeometry(0.103, 0.02, 8, 24), hatM, head, 0, 0.02, -0.004).rotation.x = Math.PI / 2; }
  if (hat === 'ushanka') { const u = add(new THREE.SphereGeometry(0.125, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.5), hatM, head, 0, 0.03, -0.004); u.scale.set(1, 0.9, 1.05); for (const s of [-1, 1]) { const fl = add(new THREE.CapsuleGeometry(0.035, 0.09, 4, 8), hatM, head, s * 0.108, -0.03, -0.005); fl.scale.z = 1.4; } add(new THREE.BoxGeometry(0.2, 0.05, 0.03), hatM, head, 0, 0.055, 0.105); }
  if (hat === 'hood') { const hd = add(new THREE.SphereGeometry(0.145, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.72), coatM, head, 0, 0.005, -0.03); hd.scale.set(0.98, 1.12, 1.12); const hm = coatM.clone(); hm.side = THREE.DoubleSide; hd.material = hm; }
  if (o.glasses) { const gm = flatM(0x111111, 0.2, 0.8); for (const s of [-1, 1]) add(new THREE.TorusGeometry(0.024, 0.004, 6, 16), gm, head, s * 0.038, 0.02, 0.1); add(new THREE.BoxGeometry(0.03, 0.004, 0.004), gm, head, 0, 0.022, 0.102); }
  if (o.mask) {
    const rub = flatM(0x1a1c1a, 0.55); const fm = add(new THREE.SphereGeometry(0.1, 18, 14, 0, Math.PI * 2, 0, Math.PI), rub, head, 0, -0.012, 0.03); fm.scale.set(0.95, 1.12, 0.82);
    const lens = new THREE.MeshStandardMaterial({ color: 0x20262a, roughness: 0.08, metalness: 0.9 });
    for (const s of [-1, 1]) { const l = add(new THREE.CylinderGeometry(0.032, 0.032, 0.014, 16), lens, head, s * 0.04, 0.02, 0.108); l.rotation.x = Math.PI / 2; add(new THREE.TorusGeometry(0.033, 0.006, 6, 18), flatM(0x35382f, 0.4, 0.6), head, s * 0.04, 0.02, 0.112); }
    const can = add(new THREE.CylinderGeometry(0.045, 0.045, 0.07, 16), flatM(0x4a5038, 0.5, 0.5), head, 0, -0.085, 0.1); can.rotation.x = Math.PI / 2 - 0.5;
  }
  if (o.scarf !== undefined) { const s = add(new THREE.TorusGeometry(0.085, 0.036, 10, 20), cloth(o.scarf), torso, 0, 0.61, 0.005); s.rotation.x = Math.PI / 2; s.scale.set(1.1, 0.95, 1); add(new THREE.CapsuleGeometry(0.035, 0.2, 4, 8), cloth(o.scarf), torso, 0.06, 0.47, 0.13); }
  if (o.backpack) { const bp = add(new THREE.CapsuleGeometry(0.13, 0.22, 6, 14), cloth(0x3a3c30), torso, 0, 0.3, -0.2); bp.scale.set(1.15, 1, 0.75); add(new THREE.CapsuleGeometry(0.06, 0.22, 4, 10), cloth(0x55503a), torso, 0, 0.56, -0.2).rotation.z = Math.PI / 2; }
  // poses
  const dummy = () => new THREE.Object3D();
  let ret: Person = { group: g, head, torso, armL: AL.sh, armR: AR.sh, legL: LL.hip, legR: LR.hip };
  if (pose === 'sit') {
    root.position.y = -0.46; for (const L of [LL, LR]) { L.hip.rotation.x = -1.45; L.knee.rotation.x = 1.5; }
    AL.sh.rotation.x = -0.55; AL.el.rotation.x = -0.9; AR.sh.rotation.x = -0.55; AR.el.rotation.x = -0.9; torso.rotation.x = 0.16;
    ret = { ...ret, armL: dummy(), armR: dummy(), legL: dummy(), legR: dummy() };
  } else if (pose === 'lie') {
    root.rotation.x = -Math.PI / 2; root.position.set(0, 0.16, 0.9); ret = { ...ret, armL: dummy(), armR: dummy(), legL: dummy(), legR: dummy(), head: dummy(), torso: dummy() };
  } else if (pose === 'guard') {
    AR.sh.rotation.x = -0.5; AR.el.rotation.x = -1.1; AL.sh.rotation.x = -0.75; AL.el.rotation.x = -0.7; AL.sh.rotation.z = 0.45;
    ret = { ...ret, armL: dummy(), armR: dummy() };
  }
  if (o.rifle) { const rf = new THREE.Group(); torso.add(rf); rf.position.set(0.05, 0.3, 0.2); rf.rotation.set(0.1, 0.25, -0.5); const mt = flatM(0x15161a, 0.4, 0.8); add(new THREE.BoxGeometry(0.035, 0.06, 0.62), mt, rf); add(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 8), mt, rf, 0, 0.01, 0.44).rotation.x = Math.PI / 2; add(new THREE.BoxGeometry(0.03, 0.14, 0.05), mt, rf, 0, -0.09, 0.05); add(new THREE.BoxGeometry(0.034, 0.08, 0.2), pbr('wood', 1, 1, 0x8a6a4a), rf, 0, -0.01, -0.36); }
  if (o.guitar) { const gt = new THREE.Group(); torso.add(gt); gt.position.set(0.02, 0.22, 0.2); gt.rotation.set(0.1, 0, 0.95); const wd = pbr('wood', 1, 1, 0xb07a40); const bd = add(new THREE.CylinderGeometry(0.17, 0.17, 0.08, 24), wd, gt); bd.rotation.x = Math.PI / 2; bd.scale.y = 1; const b2 = add(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 24), wd, gt, 0, 0.2, 0); b2.rotation.x = Math.PI / 2; add(new THREE.BoxGeometry(0.045, 0.55, 0.025), flatM(0x2a1a10), gt, 0, 0.56, 0.02); add(new THREE.CylinderGeometry(0.05, 0.05, 0.085, 16), flatM(0x0a0806), gt, 0, 0.06, 0.004).rotation.x = Math.PI / 2; }
  g.scale.setScalar(o.scale ?? 1);
  return ret;
}
