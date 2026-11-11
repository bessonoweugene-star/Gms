(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uo="170",Mh=0,Yo=1,bh=2,fc=1,Sh=2,En=3,$n=0,Ne=1,_e=2,Rn=0,ki=1,Ln=2,jo=3,Ko=4,Eh=5,oi=100,wh=101,Th=102,Ah=103,Ch=104,Rh=200,Ph=201,Lh=202,Ih=203,Ma=204,ba=205,Dh=206,Uh=207,Nh=208,Fh=209,Oh=210,Bh=211,zh=212,kh=213,Hh=214,Sa=0,Ea=1,wa=2,Gi=3,Ta=4,Aa=5,Ca=6,Ra=7,dc=0,Vh=1,Gh=2,Wn=0,pc=1,mc=2,gc=3,fo=4,Wh=5,_c=6,vc=7,xc=300,Wi=301,Xi=302,Pa=303,La=304,vr=306,ur=1e3,ci=1001,Ia=1002,rn=1003,Xh=1004,Ts=1005,fn=1006,Dr=1007,hi=1008,In=1009,yc=1010,Mc=1011,ys=1012,po=1013,fi=1014,An=1015,an=1016,mo=1017,go=1018,$i=1020,bc=35902,Sc=1021,Ec=1022,sn=1023,wc=1024,Tc=1025,Hi=1026,qi=1027,Ac=1028,_o=1029,Cc=1030,vo=1031,xo=1033,sr=33776,rr=33777,ar=33778,or=33779,Da=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,$a=37814,qa=37815,Ya=37816,ja=37817,Ka=37818,Za=37819,Ja=37820,Qa=37821,lr=36492,to=36494,eo=36495,Rc=36283,no=36284,io=36285,so=36286,$h=3200,qh=3201,Pc=0,Yh=1,Vn="",ze="srgb",Qi="srgb-linear",xr="linear",ne="srgb",_i=7680,Zo=519,jh=512,Kh=513,Zh=514,Lc=515,Jh=516,Qh=517,tu=518,eu=519,ro=35044,Jo="300 es",Cn=2e3,fr=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cr=Math.PI/180,ao=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function nu(i,t){return(i%t+t)%t}function Ur(i,t,e){return(1-e)*i+e*t}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class tt{constructor(t=0,e=0){tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],_=n[8],v=s[0],m=s[3],h=s[6],x=s[1],y=s[4],g=s[7],C=s[2],M=s[5],T=s[8];return r[0]=a*v+o*x+l*C,r[3]=a*m+o*y+l*M,r[6]=a*h+o*g+l*T,r[1]=c*v+u*x+f*C,r[4]=c*m+u*y+f*M,r[7]=c*h+u*g+f*T,r[2]=d*v+p*x+_*C,r[5]=d*m+p*y+_*M,r[8]=d*h+p*g+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=e*f+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=f*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Ot;function Ic(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){const i=dr("canvas");return i.style.display="block",i}const Qo={};function ms(i){i in Qo||(Qo[i]=!0,console.warn(i))}function su(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ru(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function au(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const tl=[.64,.33,.3,.6,.15,.06],el=[.2126,.7152,.0722],nl=[.3127,.329],il=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Qi]:{primaries:tl,whitePoint:nl,transfer:xr,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:tl,whitePoint:nl,transfer:ne,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});let vi;class ou{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=dr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lu=0;class Dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fr(s[a].image)):r.push(Fr(s[a]))}else r=Fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cu=0;class Fe extends ts{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=ci,s=ci,r=fn,a=hi,o=sn,l=In,c=Fe.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Xn(),this.name="",this.source=new Dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ur:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ur:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=xc;Fe.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,s=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,g=(p+1)/2,C=(h+1)/2,M=(u+d)/4,T=(f+v)/4,R=(_+m)/4;return y>g&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=T/n):g>C?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=M/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=R/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hu extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $e extends hu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uc extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uu extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(f!==v||l!==d||c!==p||u!==_){let m=1-o;const h=l*d+c*p+u*_+f*v,x=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),M=Math.atan2(C,h*x);m=Math.sin(m*M)/C,o=Math.sin(o*M)/C}const g=o*x;if(l=l*m+d*g,c=c*m+p*g,u=u*m+_*g,f=f*m+v*g,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*f+l*p-c*d,t[e+1]=l*_+u*d+c*f-o*p,t[e+2]=c*_+u*p+o*d-l*f,t[e+3]=u*_-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new P,rl=new Ms;class bs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Cs.subVectors(this.max,as),xi.subVectors(t.a,as),yi.subVectors(t.b,as),Mi.subVectors(t.c,as),Nn.subVectors(yi,xi),Fn.subVectors(Mi,yi),Qn.subVectors(xi,Mi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!Br(e,xi,yi,Mi,Cs)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,xi,yi,Mi,Cs))?!1:(Rs.crossVectors(Nn,Fn),e=[Rs.x,Rs.y,Rs.z],Br(e,xi,yi,Mi,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new P,new P,new P,new P,new P,new P,new P,new P],tn=new P,As=new bs,xi=new P,yi=new P,Mi=new P,Nn=new P,Fn=new P,Qn=new P,as=new P,Cs=new P,Rs=new P,ti=new P;function Br(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const fu=new bs,os=new P,zr=new P;class es{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(zr)),this.expandByPoint(os.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new P,kr=new P,Ps=new P,On=new P,Hr=new P,Ls=new P,Vr=new P;class yr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kr.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),On.copy(this.origin).sub(kr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ps),o=On.dot(this.direction),l=-On.dot(Ps),c=On.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(kr).addScaledVector(Ps,d),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){Hr.subVectors(e,t),Ls.subVectors(n,t),Vr.crossVectors(Hr,Ls);let a=this.direction.dot(Vr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,t);const l=o*this.direction.dot(Ls.crossVectors(On,Ls));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(On));if(c<0||l+c>a)return null;const u=-o*On.dot(Vr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,l,c,u,f,d,p,_,v,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,d,p,_,v,m)}set(t,e,n,s,r,a,o,l,c,u,f,d,p,_,v,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),a=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*f,_=o*u,v=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*f,_=c*u,v=c*f;e[0]=d+v*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*f,_=c*u,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*f,_=o*u,v=o*f;e[0]=l*u,e[4]=_*c-p,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-d*f,e[8]=_*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+_,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+v,e[5]=a*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(du,t,pu)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Bn.crossVectors(n,Ge),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Bn.crossVectors(n,Ge)),Bn.normalize(),Is.crossVectors(Ge,Bn),s[0]=Bn.x,s[4]=Is.x,s[8]=Ge.x,s[1]=Bn.y,s[5]=Is.y,s[9]=Ge.y,s[2]=Bn.z,s[6]=Is.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],_=n[2],v=n[6],m=n[10],h=n[14],x=n[3],y=n[7],g=n[11],C=n[15],M=s[0],T=s[4],R=s[8],S=s[12],b=s[1],L=s[5],B=s[9],O=s[13],G=s[2],$=s[6],X=s[10],J=s[14],V=s[3],ot=s[7],dt=s[11],wt=s[15];return r[0]=a*M+o*b+l*G+c*V,r[4]=a*T+o*L+l*$+c*ot,r[8]=a*R+o*B+l*X+c*dt,r[12]=a*S+o*O+l*J+c*wt,r[1]=u*M+f*b+d*G+p*V,r[5]=u*T+f*L+d*$+p*ot,r[9]=u*R+f*B+d*X+p*dt,r[13]=u*S+f*O+d*J+p*wt,r[2]=_*M+v*b+m*G+h*V,r[6]=_*T+v*L+m*$+h*ot,r[10]=_*R+v*B+m*X+h*dt,r[14]=_*S+v*O+m*J+h*wt,r[3]=x*M+y*b+g*G+C*V,r[7]=x*T+y*L+g*$+C*ot,r[11]=x*R+y*B+g*X+C*dt,r[15]=x*S+y*O+g*J+C*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],_=t[3],v=t[7],m=t[11],h=t[15];return _*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+e*c*f-e*o*p-r*a*f+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-e*l*f+e*o*d+s*a*f-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],_=t[12],v=t[13],m=t[14],h=t[15],x=f*m*c-v*d*c+v*l*p-o*m*p-f*l*h+o*d*h,y=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,g=u*v*c-_*f*c+_*o*p-a*v*p-u*o*h+a*f*h,C=_*f*l-u*v*l-_*o*d+a*v*d+u*o*m-a*f*m,M=e*x+n*y+s*g+r*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=x*T,t[1]=(v*d*r-f*m*r-v*s*p+n*m*p+f*s*h-n*d*h)*T,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*h+n*l*h)*T,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*p-n*l*p)*T,t[4]=y*T,t[5]=(u*m*r-_*d*r+_*s*p-e*m*p-u*s*h+e*d*h)*T,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*h-e*l*h)*T,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*p+e*l*p)*T,t[8]=g*T,t[9]=(_*f*r-u*v*r-_*n*p+e*v*p+u*n*h-e*f*h)*T,t[10]=(a*v*r-_*o*r+_*n*c-e*v*c-a*n*h+e*o*h)*T,t[11]=(u*o*r-a*f*r-u*n*c+e*f*c+a*n*p-e*o*p)*T,t[12]=C*T,t[13]=(u*v*s-_*f*s+_*n*d-e*v*d-u*n*m+e*f*m)*T,t[14]=(_*o*s-a*v*s-_*n*l+e*v*l+a*n*m-e*o*m)*T,t[15]=(a*f*s-u*o*s+u*n*l-e*f*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,_=r*f,v=a*u,m=a*f,h=o*f,x=l*c,y=l*u,g=l*f,C=n.x,M=n.y,T=n.z;return s[0]=(1-(v+h))*C,s[1]=(p+g)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(p-g)*M,s[5]=(1-(d+h))*M,s[6]=(m+x)*M,s[7]=0,s[8]=(_+y)*T,s[9]=(m-x)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),o=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const c=1/r,u=1/a,f=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,e.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Cn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let p,_;if(o===Cn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===fr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Cn){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(a-r),d=(e+t)*c,p=(n+s)*u;let _,v;if(o===Cn)_=(a+r)*f,v=-2*f;else if(o===fr)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new P,en=new te,du=new P(0,0,0),pu=new P(1,1,1),Bn=new P,Is=new P,Ge=new P,al=new te,ol=new Ms;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mu=0;const ll=new P,Si=new Ms,yn=new te,Ds=new P,ls=new P,gu=new P,_u=new Ms,cl=new P(1,0,0),hl=new P(0,1,0),ul=new P(0,0,1),fl={type:"added"},vu={type:"removed"},Ei={type:"childadded",child:null},Gr={type:"childremoved",child:null};class ve extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new P,e=new pn,n=new Ms,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Ot}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(cl,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cl,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ls,Ds,this.up):yn.lookAt(Ds,ls,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vu),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,_u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new P(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new P,Mn=new P,Wr=new P,bn=new P,wi=new P,Ti=new P,dl=new P,Xr=new P,$r=new P,qr=new P,Yr=new Kt,jr=new Kt,Kr=new Kt;class Xe{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),Mn.subVectors(n,e),Wr.subVectors(t,e);const a=nn.dot(nn),o=nn.dot(Mn),l=nn.dot(Wr),c=Mn.dot(Mn),u=Mn.dot(Wr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Yr.setScalar(0),jr.setScalar(0),Kr.setScalar(0),Yr.fromBufferAttribute(t,e),jr.fromBufferAttribute(t,n),Kr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yr,r.x),a.addScaledVector(jr,r.y),a.addScaledVector(Kr,r.z),a}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),Mn.subVectors(t,e),nn.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),nn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;wi.subVectors(s,n),Ti.subVectors(r,n),Xr.subVectors(t,n);const l=wi.dot(Xr),c=Ti.dot(Xr);if(l<=0&&c<=0)return e.copy(n);$r.subVectors(t,s);const u=wi.dot($r),f=Ti.dot($r);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(wi,a);qr.subVectors(t,r);const p=wi.dot(qr),_=Ti.dot(qr);if(_>=0&&p<=_)return e.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Ti,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return dl.subVectors(r,s),o=(f-u)/(f-u+(p-_)),e.copy(s).addScaledVector(dl,o);const h=1/(m+v+d);return a=v*h,o=d*h,e.copy(n).addScaledVector(wi,a).addScaledVector(Ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=nu(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zr(a,r,t+1/3),this.g=Zr(a,r,t),this.b=Zr(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Xt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(we(Ce.r*255,0,255))*65536+Math.round(we(Ce.g*255,0,255))*256+Math.round(we(Ce.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ze){Xt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Us);const n=Ur(zn.h,Us.h,e),s=Ur(zn.s,Us.s,e),r=Ur(zn.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Tt;Tt.NAMES=Nc;let xu=0;class Yn extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Xn(),this.name="",this.blending=ki,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ba,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ue extends Yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new P,Ns=new tt;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ro,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ro&&(t.usage=this.usage),t}}class Fc extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oc extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yu=0;const je=new te,Jr=new ve,Ai=new P,We=new bs,cs=new bs,be=new P;class de extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?Oc:Fc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Jr.lookAt(t),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(We.min,cs.min),We.expandByPoint(be),be.addVectors(We.max,cs.max),We.expandByPoint(be)):(We.expandByPoint(cs.min),We.expandByPoint(cs.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)be.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),be.add(Ai)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new P,l[R]=new P;const c=new P,u=new P,f=new P,d=new tt,p=new tt,_=new tt,v=new P,m=new P;function h(R,S,b){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,b),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,b),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),o[R].add(v),o[S].add(v),o[b].add(v),l[R].add(m),l[S].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,S=x.length;R<S;++R){const b=x[R],L=b.start,B=b.count;for(let O=L,G=L+B;O<G;O+=3)h(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new P,g=new P,C=new P,M=new P;function T(R){C.fromBufferAttribute(s,R),M.copy(C);const S=o[R];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),g.crossVectors(M,S);const L=g.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,S=x.length;R<S;++R){const b=x[R],L=b.start,B=b.count;for(let O=L,G=L+B;O<G;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,f=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Le(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new te,ei=new yr,Fs=new es,ml=new P,Os=new P,Bs=new P,zs=new P,Qr=new P,ks=new P,gl=new P,Hs=new P;class Q extends ve{constructor(t=new de,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Qr.fromBufferAttribute(f,t),a?ks.addScaledVector(Qr,u):ks.addScaledVector(Qr.sub(e),u))}e.add(ks)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Fs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Fs,ml)===null||ei.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=x,C=y;g<C;g+=3){const M=o.getX(g),T=o.getX(g+1),R=o.getX(g+2);s=Vs(this,h,t,n,c,u,f,M,T,R),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const x=o.getX(m),y=o.getX(m+1),g=o.getX(m+2);s=Vs(this,a,t,n,c,u,f,x,y,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=x,C=y;g<C;g+=3){const M=g,T=g+1,R=g+2;s=Vs(this,h,t,n,c,u,f,M,T,R),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const x=m,y=m+1,g=m+2;s=Vs(this,a,t,n,c,u,f,x,y,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Mu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:i}}function Vs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Os),i.getVertexPosition(l,Bs),i.getVertexPosition(c,zs);const u=Mu(i,t,e,n,Os,Bs,zs,gl);if(u){const f=new P;Xe.getBarycoord(gl,Os,Bs,zs,f),s&&(u.uv=Xe.getInterpolatedAttribute(s,o,l,c,f,new tt)),r&&(u.uv1=Xe.getInterpolatedAttribute(r,o,l,c,f,new tt)),a&&(u.normal=Xe.getInterpolatedAttribute(a,o,l,c,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Xe.getNormal(Os,Bs,zs,d.normal),u.face=d,u.barycoord=f}return u}class Et extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function _(v,m,h,x,y,g,C,M,T,R,S){const b=g/T,L=C/R,B=g/2,O=C/2,G=M/2,$=T+1,X=R+1;let J=0,V=0;const ot=new P;for(let dt=0;dt<X;dt++){const wt=dt*L-O;for(let kt=0;kt<$;kt++){const se=kt*b-B;ot[v]=se*x,ot[m]=wt*y,ot[h]=G,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[m]=0,ot[h]=M>0?1:-1,u.push(ot.x,ot.y,ot.z),f.push(kt/T),f.push(1-dt/R),J+=1}}for(let dt=0;dt<R;dt++)for(let wt=0;wt<T;wt++){const kt=d+wt+$*dt,se=d+wt+$*(dt+1),Y=d+(wt+1)+$*(dt+1),it=d+(wt+1)+$*dt;l.push(kt,se,it),l.push(se,Y,it),V+=6}o.addGroup(p,V,S),p+=V,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Yi(i[e]);for(const s in n)t[s]=n[s]}return t}function bu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const ji={clone:Yi,merge:Ue};var Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xe extends Yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new P,_l=new tt,vl=new tt;class ke extends zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,vl),e.subVectors(vl,_l)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Ri=1;class wu extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(Ci,Ri,t,e);s.layers=this.layers,this.add(s);const r=new ke(Ci,Ri,t,e);r.layers=this.layers,this.add(r);const a=new ke(Ci,Ri,t,e);a.layers=this.layers,this.add(a);const o=new ke(Ci,Ri,t,e);o.layers=this.layers,this.add(o);const l=new ke(Ci,Ri,t,e);l.layers=this.layers,this.add(l);const c=new ke(Ci,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class kc extends Fe{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tu extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Et(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Rn});r.uniforms.tEquirect.value=e;const a=new Q(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=fn),new wu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ta=new P,Au=new P,Cu=new Ot;class Hn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ta.subVectors(n,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cu.getNormalMatrix(t),s=this.coplanarPoint(ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new es,Gs=new P;class Mo{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],_=s[9],v=s[10],m=s[11],h=s[12],x=s[13],y=s[14],g=s[15];if(n[0].setComponents(l-r,d-c,m-p,g-h).normalize(),n[1].setComponents(l+r,d+c,m+p,g+h).normalize(),n[2].setComponents(l+a,d+u,m+_,g+x).normalize(),n[3].setComponents(l-a,d-u,m-_,g-x).normalize(),n[4].setComponents(l-o,d-f,m-v,g-y).normalize(),e===Cn)n[5].setComponents(l+o,d+f,m+v,g+y).normalize();else if(e===fr)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ru(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ie extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,d=e/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const x=h*d-a;for(let y=0;y<c;y++){const g=y*f-r;_.push(g,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){const y=x+c*h,g=x+c*(h+1),C=x+1+c*(h+1),M=x+1+c*h;p.push(y,g,M),p.push(g,C,M)}this.setIndex(p),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,If=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ed=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ud=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_d=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ed=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ld=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Od=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Pu,alphahash_pars_fragment:Lu,alphamap_fragment:Iu,alphamap_pars_fragment:Du,alphatest_fragment:Uu,alphatest_pars_fragment:Nu,aomap_fragment:Fu,aomap_pars_fragment:Ou,batching_pars_vertex:Bu,batching_vertex:zu,begin_vertex:ku,beginnormal_vertex:Hu,bsdfs:Vu,iridescence_fragment:Gu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:ju,color_pars_fragment:Ku,color_pars_vertex:Zu,color_vertex:Ju,common:Qu,cube_uv_reflection_fragment:tf,defaultnormal_vertex:ef,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Sf,envmap_vertex:df,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:_f,gradientmap_pars_fragment:vf,lightmap_pars_fragment:xf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:Mf,lights_pars_begin:bf,lights_toon_fragment:Ef,lights_toon_pars_fragment:wf,lights_phong_fragment:Tf,lights_phong_pars_fragment:Af,lights_physical_fragment:Cf,lights_physical_pars_fragment:Rf,lights_fragment_begin:Pf,lights_fragment_maps:Lf,lights_fragment_end:If,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Nf,logdepthbuf_vertex:Ff,map_fragment:Of,map_pars_fragment:Bf,map_particle_fragment:zf,map_particle_pars_fragment:kf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Vf,morphinstance_vertex:Gf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:$f,morphtarget_vertex:qf,normal_fragment_begin:Yf,normal_fragment_maps:jf,normal_pars_fragment:Kf,normal_pars_vertex:Zf,normal_vertex:Jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:td,clearcoat_normal_fragment_maps:ed,clearcoat_pars_fragment:nd,iridescence_pars_fragment:id,opaque_fragment:sd,packing:rd,premultiplied_alpha_fragment:ad,project_vertex:od,dithering_fragment:ld,dithering_pars_fragment:cd,roughnessmap_fragment:hd,roughnessmap_pars_fragment:ud,shadowmap_pars_fragment:fd,shadowmap_pars_vertex:dd,shadowmap_vertex:pd,shadowmask_pars_fragment:md,skinbase_vertex:gd,skinning_pars_vertex:_d,skinning_vertex:vd,skinnormal_vertex:xd,specularmap_fragment:yd,specularmap_pars_fragment:Md,tonemapping_fragment:bd,tonemapping_pars_fragment:Sd,transmission_fragment:Ed,transmission_pars_fragment:wd,uv_pars_fragment:Td,uv_pars_vertex:Ad,uv_vertex:Cd,worldpos_vertex:Rd,background_vert:Pd,background_frag:Ld,backgroundCube_vert:Id,backgroundCube_frag:Dd,cube_vert:Ud,cube_frag:Nd,depth_vert:Fd,depth_frag:Od,distanceRGBA_vert:Bd,distanceRGBA_frag:zd,equirect_vert:kd,equirect_frag:Hd,linedashed_vert:Vd,linedashed_frag:Gd,meshbasic_vert:Wd,meshbasic_frag:Xd,meshlambert_vert:$d,meshlambert_frag:qd,meshmatcap_vert:Yd,meshmatcap_frag:jd,meshnormal_vert:Kd,meshnormal_frag:Zd,meshphong_vert:Jd,meshphong_frag:Qd,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:np,meshtoon_frag:ip,points_vert:sp,points_frag:rp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:cp},st={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ln={basic:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ue([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ue([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ue([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ue([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ue([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ue([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ue([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ue([st.lights,st.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};ln.physical={uniforms:Ue([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Ws={r:0,b:0,g:0},ii=new pn,hp=new te;function up(i,t,e,n,s,r,a){const o=new Tt(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const g=_(x);g===null?h(o,l):g&&g.isColor&&(h(g,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const g=_(y);g&&(g.isCubeTexture||g.mapping===vr)?(u===void 0&&(u=new Q(new Et(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Yi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ii.copy(y.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(ii)),u.material.toneMapped=Xt.getTransfer(g.colorSpace)!==ne,(f!==g||d!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Q(new Ie(2,2),new xe({name:"BackgroundMaterial",uniforms:Yi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(g.colorSpace)!==ne,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,y){x.getRGB(Ws,Bc(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(o,l)},render:v,addToRenderList:m}}function fp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,L,B,O,G){let $=!1;const X=f(O,B,L);r!==X&&(r=X,c(r.object)),$=p(b,O,B,G),$&&_(b,O,B,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,g(b,L,B,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,L,B){const O=B.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let $=G[L.id];$===void 0&&($={},G[L.id]=$);let X=$[O];return X===void 0&&(X=d(l()),$[O]=X),X}function d(b){const L=[],B=[],O=[];for(let G=0;G<e;G++)L[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:b,attributes:{},index:null}}function p(b,L,B,O){const G=r.attributes,$=L.attributes;let X=0;const J=B.getAttributes();for(const V in J)if(J[V].location>=0){const dt=G[V];let wt=$[V];if(wt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(wt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(wt=b.instanceColor)),dt===void 0||dt.attribute!==wt||wt&&dt.data!==wt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function _(b,L,B,O){const G={},$=L.attributes;let X=0;const J=B.getAttributes();for(const V in J)if(J[V].location>=0){let dt=$[V];dt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor));const wt={};wt.attribute=dt,dt&&dt.data&&(wt.data=dt.data),G[V]=wt,X++}r.attributes=G,r.attributesNum=X,r.index=O}function v(){const b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function m(b){h(b,0)}function h(b,L){const B=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;B[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),G[b]!==L&&(i.vertexAttribDivisor(b,L),G[b]=L)}function x(){const b=r.newAttributes,L=r.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==b[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function y(b,L,B,O,G,$,X){X===!0?i.vertexAttribIPointer(b,L,B,G,$):i.vertexAttribPointer(b,L,B,O,G,$)}function g(b,L,B,O){v();const G=O.attributes,$=B.getAttributes(),X=L.defaultAttributeValues;for(const J in $){const V=$[J];if(V.location>=0){let ot=G[J];if(ot===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor)),ot!==void 0){const dt=ot.normalized,wt=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const se=kt.buffer,Y=kt.type,it=kt.bytesPerElement,Mt=Y===i.INT||Y===i.UNSIGNED_INT||ot.gpuType===po;if(ot.isInterleavedBufferAttribute){const lt=ot.data,Lt=lt.stride,Ut=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<V.locationSize;Ht++)h(V.location+Ht,lt.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ht=0;Ht<V.locationSize;Ht++)m(V.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Ht=0;Ht<V.locationSize;Ht++)y(V.location+Ht,wt/V.locationSize,Y,dt,Lt*it,(Ut+wt/V.locationSize*Ht)*it,Mt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)h(V.location+lt,ot.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let lt=0;lt<V.locationSize;lt++)y(V.location+lt,wt/V.locationSize,Y,dt,wt*it,wt/V.locationSize*lt*it,Mt)}}else if(X!==void 0){const dt=X[J];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}x()}function C(){R();for(const b in n){const L=n[b];for(const B in L){const O=L[B];for(const G in O)u(O[G].object),delete O[G];delete L[B]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const B in L){const O=L[B];for(const G in O)u(O[G].object),delete O[G];delete L[B]}delete n[b.id]}function T(b){for(const L in n){const B=n[L];if(B[b.id]===void 0)continue;const O=B[b.id];for(const G in O)u(O[G].object),delete O[G];delete B[b.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function dp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];e.update(p,n,1)}function l(c,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==sn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==In&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:C,maxSamples:M}}function mp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Hn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,y=x*4;let g=h.clippingState||null;l.value=g,g=u(_,d,y,p);for(let C=0;C!==y;++C)g[C]=e[C];h.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,g=p;y!==v;++y,g+=4)a.copy(f[y]).applyMatrix4(x,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function gp(i){let t=new WeakMap;function e(a,o){return o===Pa?a.mapping=Wi:o===La&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pa||o===La)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class bo extends zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ni=4,xl=[.125,.215,.35,.446,.526,.582],li=20,ea=new bo,yl=new Tt;let na=null,ia=0,sa=0,ra=!1;const ai=(1+Math.sqrt(5))/2,Pi=1/ai,Ml=[new P(-ai,Pi,0),new P(ai,Pi,0),new P(-Pi,0,ai),new P(Pi,0,ai),new P(0,ai,-Pi),new P(0,ai,Pi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:an,format:sn,colorSpace:Qi,depthBuffer:!1},s=Sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(r)),this._blurMaterial=vp(r,t,e)}return s}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,s){const o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(yl),u.toneMapping=Wn,u.autoClear=!1;const p=new ue({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),_=new Q(new Et,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(yl),v=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):x===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;Xs(s,x*y,h>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Q(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ml[(s-r-1)%Ml.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Q(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const h=[];let x=0;for(let T=0;T<li;++T){const R=T/v,S=Math.exp(-R*R/2);h.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<h.length;T++)h[T]=h[T]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const g=this._sizeLods[s],C=3*g*(s>y-Ni?s-y+Ni:0),M=4*(this._cubeSize-g);Xs(e,C,M,3*g,2*g),l.setRenderTarget(e),l.render(f,ea)}}function _p(i){const t=[],e=[],n=[];let s=i;const r=i-Ni+1+xl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ni?l=xl[a-i+Ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,x=new Float32Array(v*_*p),y=new Float32Array(m*_*p),g=new Float32Array(h*_*p);for(let M=0;M<p;M++){const T=M%3*2/3-1,R=M>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(S,v*_*M),y.set(d,m*_*M);const b=[M,M,M,M,M,M];g.set(b,h*_*M)}const C=new de;C.setAttribute("position",new Le(x,v)),C.setAttribute("uv",new Le(y,m)),C.setAttribute("faceIndex",new Le(g,h)),t.push(C),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sl(i,t,e){const n=new $e(i,t,e);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vp(i,t,e){const n=new Float32Array(li),s=new P(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function El(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wl(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pa||l===La,u=l===Wi||l===Xi;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new bl(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new bl(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,h=v.length;m<h;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,h=v.length;m<h;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let y=0,g=x.length;y<g;y+=3){const C=x[y+0],M=x[y+1],T=x[y+2];d.push(C,M,M,T,T,C)}}else if(_!==void 0){const x=_.array;v=_.version;for(let y=0,g=x.length/3-1;y<g;y+=3){const C=y+0,M=y+1,T=y+2;d.push(C,M,M,T,T,C)}}else return;const m=new(Ic(d)?Oc:Fc)(d,1);m.version=v;const h=r.get(f);h&&t.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function bp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*a,_),e.update(p,n,_))}function u(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,n,1)}function f(d,p,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,_);let h=0;for(let x=0;x<_;x++)h+=p[x]*v[x];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Sp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,t,e){const n=new WeakMap,s=new Kt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let g=0;_===!0&&(g=1),v===!0&&(g=2),m===!0&&(g=3);let C=o.attributes.position.count*g,M=1;C>t.maxTextureSize&&(M=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*M*4*f),R=new Uc(T,C,M,f);R.type=An,R.needsUpdate=!0;const S=g*4;for(let L=0;L<f;L++){const B=h[L],O=x[L],G=y[L],$=C*M*4*L;for(let X=0;X<B.count;X++){const J=X*S;_===!0&&(s.fromBufferAttribute(B,X),T[$+J+0]=s.x,T[$+J+1]=s.y,T[$+J+2]=s.z,T[$+J+3]=0),v===!0&&(s.fromBufferAttribute(O,X),T[$+J+4]=s.x,T[$+J+5]=s.y,T[$+J+6]=s.z,T[$+J+7]=0),m===!0&&(s.fromBufferAttribute(G,X),T[$+J+8]=s.x,T[$+J+9]=s.y,T[$+J+10]=s.z,T[$+J+11]=G.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new tt(C,M)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function wp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Vc extends Fe{constructor(t,e,n,s,r,a,o,l,c,u=Hi){if(u!==Hi&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hi&&(n=fi),n===void 0&&u===qi&&(n=$i),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gc=new Fe,Tl=new Vc(1,1),Wc=new Uc,Xc=new uu,$c=new kc,Al=[],Cl=[],Rl=new Float32Array(16),Pl=new Float32Array(9),Ll=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Al[s];if(r===void 0&&(r=new Float32Array(s),Al[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mr(i,t){let e=Cl[t];e===void 0&&(e=new Int32Array(t),Cl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Ll.set(n),i.uniformMatrix2fv(this.addr,!1,Ll),Me(e,n)}}function Lp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),Me(e,n)}}function Ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Rl.set(n),i.uniformMatrix4fv(this.addr,!1,Rl),Me(e,n)}}function Dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=Lc,r=Tl):r=Gc,e.setTexture2D(t||r,s)}function Vp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xc,s)}function Gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$c,s)}function Wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wc,s)}function Xp(i){switch(i){case 5126:return Tp;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Pp;case 35675:return Lp;case 35676:return Ip;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Op;case 36294:return Bp;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Wp}}function $p(i,t){i.uniform1fv(this.addr,t)}function qp(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Yp(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Kp(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zp(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jp(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qp(i,t){i.uniform1iv(this.addr,t)}function t0(i,t){i.uniform2iv(this.addr,t)}function e0(i,t){i.uniform3iv(this.addr,t)}function n0(i,t){i.uniform4iv(this.addr,t)}function i0(i,t){i.uniform1uiv(this.addr,t)}function s0(i,t){i.uniform2uiv(this.addr,t)}function r0(i,t){i.uniform3uiv(this.addr,t)}function a0(i,t){i.uniform4uiv(this.addr,t)}function o0(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Gc,r[a])}function l0(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xc,r[a])}function c0(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$c,r[a])}function h0(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wc,r[a])}function u0(i){switch(i){case 5126:return $p;case 35664:return qp;case 35665:return Yp;case 35666:return jp;case 35674:return Kp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return Qp;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}class f0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xp(e.type)}}class d0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u0(e.type)}}class p0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Il(i,t){i.seq.push(t),i.map[t.id]=t}function m0(i,t,e){const n=i.name,s=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Il(e,c===void 0?new f0(o,i,t):new d0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new p0(o),Il(e,f)),e=f}}}class hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);m0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Dl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const g0=37297;let _0=0;function v0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ul=new Ot;function x0(i){Xt._getMatrix(Ul,Xt.workingColorSpace,i);const t=`mat3( ${Ul.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case xr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+v0(i.getShaderSource(t),a)}else return s}function y0(i,t){const e=x0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M0(i,t){let e;switch(t){case pc:e="Linear";break;case mc:e="Reinhard";break;case gc:e="Cineon";break;case fo:e="ACESFilmic";break;case _c:e="AgX";break;case vc:e="Neutral";break;case Wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new P;function b0(){Xt.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function E0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function w0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gs(i){return i!==""}function Fl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(T0,C0)}const A0=new Map;function C0(i,t){let e=zt[t];if(e===void 0){const n=A0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oo(e)}const R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(R0,P0)}function P0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function I0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function U0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Gh:t="ENVMAP_BLENDING_ADD";break}return t}function N0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function F0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=L0(e),c=I0(e),u=D0(e),f=U0(e),d=N0(e),p=S0(e),_=E0(r),v=s.createProgram();let m,h,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gs).join(`
`),h.length>0&&(h+=`
`)):(m=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),h=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?M0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,y0("linearToOutputTexel",e.outputColorSpace),b0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=oo(a),a=Fl(a,e),a=Ol(a,e),o=oo(o),o=Fl(o,e),o=Ol(o,e),a=Bl(a),o=Bl(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=x+m+a,g=x+h+o,C=Dl(s,s.VERTEX_SHADER,y),M=Dl(s,s.FRAGMENT_SHADER,g);s.attachShader(v,C),s.attachShader(v,M),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(M).trim();let $=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,M);else{const J=Nl(s,C,"vertex"),V=Nl(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+J+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||G==="")&&(X=!1);X&&(L.diagnostics={runnable:$,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:h}})}s.deleteShader(C),s.deleteShader(M),R=new hr(s,v),S=w0(s,v)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,g0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=M,this}let O0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new z0(t),e.set(t,n)),n}}class z0{constructor(t){this.id=O0++,this.code=t,this.usedTimes=0}}function k0(i,t,e,n,s,r,a){const o=new yo,l=new B0,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,L,B,O){const G=B.fog,$=O.geometry,X=S.isMeshStandardMaterial?B.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),V=J&&J.mapping===vr?J.image.height:null,ot=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,wt=dt!==void 0?dt.length:0;let kt=0;$.morphAttributes.position!==void 0&&(kt=1),$.morphAttributes.normal!==void 0&&(kt=2),$.morphAttributes.color!==void 0&&(kt=3);let se,Y,it,Mt;if(ot){const ee=ln[ot];se=ee.vertexShader,Y=ee.fragmentShader}else se=S.vertexShader,Y=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),Mt=l.getFragmentShaderID(S);const lt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,Ht=O.isBatchedMesh===!0,fe=!!S.map,$t=!!S.matcap,me=!!J,N=!!S.aoMap,qe=!!S.lightMap,Vt=!!S.bumpMap,Gt=!!S.normalMap,Ct=!!S.displacementMap,oe=!!S.emissiveMap,At=!!S.metalnessMap,A=!!S.roughnessMap,E=S.anisotropy>0,F=S.clearcoat>0,j=S.dispersion>0,Z=S.iridescence>0,q=S.sheen>0,bt=S.transmission>0,ct=E&&!!S.anisotropyMap,pt=F&&!!S.clearcoatMap,qt=F&&!!S.clearcoatNormalMap,et=F&&!!S.clearcoatRoughnessMap,mt=Z&&!!S.iridescenceMap,Rt=Z&&!!S.iridescenceThicknessMap,It=q&&!!S.sheenColorMap,gt=q&&!!S.sheenRoughnessMap,Wt=!!S.specularMap,Bt=!!S.specularColorMap,re=!!S.specularIntensityMap,I=bt&&!!S.transmissionMap,at=bt&&!!S.thicknessMap,H=!!S.gradientMap,K=!!S.alphaMap,ft=S.alphaTest>0,ht=!!S.alphaHash,Nt=!!S.extensions;let pe=Wn;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Te={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:Y,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:$t,envMap:me,envMapMode:me&&J.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:qe,bumpMap:Vt,normalMap:Gt,displacementMap:d&&Ct,emissiveMap:oe,normalMapObjectSpace:Gt&&S.normalMapType===Yh,normalMapTangentSpace:Gt&&S.normalMapType===Pc,metalnessMap:At,roughnessMap:A,anisotropy:E,anisotropyMap:ct,clearcoat:F,clearcoatMap:pt,clearcoatNormalMap:qt,clearcoatRoughnessMap:et,dispersion:j,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:Rt,sheen:q,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:Bt,specularIntensityMap:re,transmission:bt,transmissionMap:I,thicknessMap:at,gradientMap:H,opaque:S.transparent===!1&&S.blending===ki&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ht,combine:S.combine,mapUv:fe&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:qe&&v(S.lightMap.channel),bumpMapUv:Vt&&v(S.bumpMap.channel),normalMapUv:Gt&&v(S.normalMap.channel),displacementMapUv:Ct&&v(S.displacementMap.channel),emissiveMapUv:oe&&v(S.emissiveMap.channel),metalnessMapUv:At&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:ct&&v(S.anisotropyMap.channel),clearcoatMapUv:pt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:qt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(S.sheenRoughnessMap.channel),specularMapUv:Wt&&v(S.specularMap.channel),specularColorMapUv:Bt&&v(S.specularColorMap.channel),specularIntensityMapUv:re&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:at&&v(S.thicknessMap.channel),alphaMapUv:K&&v(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Gt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(fe||K),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Lt,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:kt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&Xt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_e,flipSided:S.side===Ne,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function h(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(b,S),y(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function g(S){const b=_[S.type];let L;if(b){const B=ln[b];L=ji.clone(B.uniforms)}else L=S.uniforms;return L}function C(S,b){let L;for(let B=0,O=u.length;B<O;B++){const G=u[B];if(G.cacheKey===b){L=G,++L.usedTimes;break}}return L===void 0&&(L=new F0(i,b,S,r),u.push(L)),L}function M(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:g,acquireProgram:C,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:R}}function H0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,p,_,v,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),t++,h}function o(f,d,p,_,v,m){const h=a(f,d,p,_,v,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,d,p,_,v,m){const h=a(f,d,p,_,v,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||V0),n.length>1&&n.sort(d||kl),s.length>1&&s.sort(d||kl)}function u(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function G0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Hl,i.set(n,[a])):s>=r.length?(a=new Hl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function W0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Tt};break;case"SpotLight":e={position:new P,direction:new P,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function X0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $0=0;function q0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Y0(i){const t=new W0,e=X0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new te,a=new te;function o(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,x=0,y=0,g=0,C=0,M=0,T=0;c.sort(q0);for(let S=0,b=c.length;S<b;S++){const L=c[S],B=L.color,O=L.intensity,G=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*O,f+=B.g*O,d+=B.b*O;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],O);T++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,V=e.get(L);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=L.shadow.matrix,x++}n.directional[p]=X,p++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(O),X.distance=G,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[v]=X;const J=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[v]=J.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=$,g++}v++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(O),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const J=L.shadow,V=e.get(L);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=L.shadow.matrix,y++}n.point[_]=X,_++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(O),X.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[h]=X,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==g||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=g+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,R.directionalLength=p,R.pointLength=_,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=g,R.numSpotMaps=C,R.numLightProbes=T,n.version=$0++)}function l(c,u){let f=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const y=c[h];if(y.isDirectionalLight){const g=n.directional[f];g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),f++}else if(y.isSpotLight){const g=n.spot[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const g=n.rectArea[_];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const g=n.point[d];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const g=n.hemi[v];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Vl(i){const t=new Y0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function j0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Vl(i),t.set(s,[o])):r>=a.length?(o=new Vl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class K0 extends Yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Z0 extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tm(i,t,e){let n=new Mo;const s=new tt,r=new tt,a=new Kt,o=new K0({depthPacking:qh}),l=new Z0,c={},u=e.maxTextureSize,f={[$n]:Ne,[Ne]:$n,[_e]:_e},d=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:J0,fragmentShader:Q0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new de;_.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Q(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let h=this.type;this.render=function(M,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Rn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=h!==En&&this.type===En,G=h===En&&this.type!==En;for(let $=0,X=M.length;$<X;$++){const J=M[$],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ot=V.getFrameExtents();if(s.multiply(ot),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,V.mapSize.y=r.y)),V.map===null||O===!0||G===!0){const wt=this.type!==En?{minFilter:rn,magFilter:rn}:{};V.map!==null&&V.map.dispose(),V.map=new $e(s.x,s.y,wt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const dt=V.getViewportCount();for(let wt=0;wt<dt;wt++){const kt=V.getViewport(wt);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),B.viewport(a),V.updateMatrices(J,wt),n=V.getFrustum(),g(T,R,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===En&&x(V,R),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,L)};function x(M,T){const R=t.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new $e(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,R,p,v,null)}function y(M,T,R,S){let b=null;const L=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=b.uuid,O=T.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let $=G[O];$===void 0&&($=b.clone(),G[O]=$,T.addEventListener("dispose",C)),b=$}if(b.visible=T.visible,b.wireframe=T.wireframe,S===En?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=i.properties.get(b);B.light=R}return b}function g(M,T,R,S,b){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===En)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const O=t.update(M),G=M.material;if(Array.isArray(G)){const $=O.groups;for(let X=0,J=$.length;X<J;X++){const V=$[X],ot=G[V.materialIndex];if(ot&&ot.visible){const dt=y(M,ot,S,b);M.onBeforeShadow(i,M,T,R,O,dt,V),i.renderBufferDirect(R,null,O,dt,M,V),M.onAfterShadow(i,M,T,R,O,dt,V)}}}else if(G.visible){const $=y(M,G,S,b);M.onBeforeShadow(i,M,T,R,O,$,null),i.renderBufferDirect(R,null,O,$,M,null),M.onAfterShadow(i,M,T,R,O,$,null)}}const B=M.children;for(let O=0,G=B.length;O<G;O++)g(B[O],T,R,S,b)}function C(M){M.target.removeEventListener("dispose",C);for(const R in c){const S=c[R],b=M.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const em={[Sa]:Ea,[wa]:Ca,[Ta]:Ra,[Gi]:Aa,[Ea]:Sa,[Ca]:wa,[Ra]:Ta,[Aa]:Gi};function nm(i,t){function e(){let I=!1;const at=new Kt;let H=null;const K=new Kt(0,0,0,0);return{setMask:function(ft){H!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),H=ft)},setLocked:function(ft){I=ft},setClear:function(ft,ht,Nt,pe,Te){Te===!0&&(ft*=pe,ht*=pe,Nt*=pe),at.set(ft,ht,Nt,pe),K.equals(at)===!1&&(i.clearColor(ft,ht,Nt,pe),K.copy(at))},reset:function(){I=!1,H=null,K.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,H=null,K=null,ft=null;return{setReversed:function(ht){if(at!==ht){const Nt=t.get("EXT_clip_control");at?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const pe=ft;ft=null,this.setClear(pe)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?lt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(ht){H!==ht&&!I&&(i.depthMask(ht),H=ht)},setFunc:function(ht){if(at&&(ht=em[ht]),K!==ht){switch(ht){case Sa:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ht}},setLocked:function(ht){I=ht},setClear:function(ht){ft!==ht&&(at&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){I=!1,H=null,K=null,ft=null,at=!1}}}function s(){let I=!1,at=null,H=null,K=null,ft=null,ht=null,Nt=null,pe=null,Te=null;return{setTest:function(ee){I||(ee?lt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ee){at!==ee&&!I&&(i.stencilMask(ee),at=ee)},setFunc:function(ee,Je,gn){(H!==ee||K!==Je||ft!==gn)&&(i.stencilFunc(ee,Je,gn),H=ee,K=Je,ft=gn)},setOp:function(ee,Je,gn){(ht!==ee||Nt!==Je||pe!==gn)&&(i.stencilOp(ee,Je,gn),ht=ee,Nt=Je,pe=gn)},setLocked:function(ee){I=ee},setClear:function(ee){Te!==ee&&(i.clearStencil(ee),Te=ee)},reset:function(){I=!1,at=null,H=null,K=null,ft=null,ht=null,Nt=null,pe=null,Te=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,x=null,y=null,g=null,C=null,M=null,T=new Tt(0,0,0),R=0,S=!1,b=null,L=null,B=null,O=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=J>=2);let ot=null,dt={};const wt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),se=new Kt().fromArray(wt),Y=new Kt().fromArray(kt);function it(I,at,H,K){const ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<H;Nt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(at+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}const Mt={};Mt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Gi),Vt(!1),Gt(Yo),lt(i.CULL_FACE),N(Rn);function lt(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Lt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ut(I,at){return f[I]!==at?(i.bindFramebuffer(I,at),f[I]=at,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=at),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Ht(I,at){let H=p,K=!1;if(I){H=d.get(at),H===void 0&&(H=[],d.set(at,H));const ft=I.textures;if(H.length!==ft.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Nt=ft.length;ht<Nt;ht++)H[ht]=i.COLOR_ATTACHMENT0+ht;H.length=ft.length,K=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,K=!0);K&&i.drawBuffers(H)}function fe(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const $t={[oi]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};$t[Ah]=i.MIN,$t[Ch]=i.MAX;const me={[Rh]:i.ZERO,[Ph]:i.ONE,[Lh]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Ih]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Hh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,at,H,K,ft,ht,Nt,pe,Te,ee){if(I===Rn){v===!0&&(Lt(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),I!==Eh){if(I!==m||ee!==S){if((h!==oi||g!==oi)&&(i.blendEquation(i.FUNC_ADD),h=oi,g=oi),ee)switch(I){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ln:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ln:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,y=null,C=null,M=null,T.set(0,0,0),R=0,m=I,S=ee}return}ft=ft||at,ht=ht||H,Nt=Nt||K,(at!==h||ft!==g)&&(i.blendEquationSeparate($t[at],$t[ft]),h=at,g=ft),(H!==x||K!==y||ht!==C||Nt!==M)&&(i.blendFuncSeparate(me[H],me[K],me[ht],me[Nt]),x=H,y=K,C=ht,M=Nt),(pe.equals(T)===!1||Te!==R)&&(i.blendColor(pe.r,pe.g,pe.b,Te),T.copy(pe),R=Te),m=I,S=!1}function qe(I,at){I.side===_e?Lt(i.CULL_FACE):lt(i.CULL_FACE);let H=I.side===Ne;at&&(H=!H),Vt(H),I.blending===ki&&I.transparent===!1?N(Rn):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){b!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),b=I)}function Gt(I){I!==Mh?(lt(i.CULL_FACE),I!==L&&(I===Yo?i.cullFace(i.BACK):I===bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),L=I}function Ct(I){I!==B&&(X&&i.lineWidth(I),B=I)}function oe(I,at,H){I?(lt(i.POLYGON_OFFSET_FILL),(O!==at||G!==H)&&(i.polygonOffset(at,H),O=at,G=H)):Lt(i.POLYGON_OFFSET_FILL)}function At(I){I?lt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+$-1),ot!==I&&(i.activeTexture(I),ot=I)}function E(I,at,H){H===void 0&&(ot===null?H=i.TEXTURE0+$-1:H=ot);let K=dt[H];K===void 0&&(K={type:void 0,texture:void 0},dt[H]=K),(K.type!==I||K.texture!==at)&&(ot!==H&&(i.activeTexture(H),ot=H),i.bindTexture(I,at||Mt[I]),K.type=I,K.texture=at)}function F(){const I=dt[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function gt(I){Y.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Wt(I,at){let H=c.get(at);H===void 0&&(H=new WeakMap,c.set(at,H));let K=H.get(I);K===void 0&&(K=i.getUniformBlockIndex(at,I.name),H.set(I,K))}function Bt(I,at){const K=c.get(at).get(I);l.get(at)!==K&&(i.uniformBlockBinding(at,K,I.__bindingPointIndex),l.set(at,K))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,dt={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,x=null,y=null,g=null,C=null,M=null,T=new Tt(0,0,0),R=0,S=!1,b=null,L=null,B=null,O=null,G=null,se.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Lt,bindFramebuffer:Ut,drawBuffers:Ht,useProgram:fe,setBlending:N,setMaterial:qe,setFlipSided:Vt,setCullFace:Gt,setLineWidth:Ct,setPolygonOffset:oe,setScissorTest:At,activeTexture:A,bindTexture:E,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:Bt,texStorage2D:qt,texStorage3D:et,texSubImage2D:q,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:It,viewport:gt,reset:re}}function Gl(i,t,e,n){const s=im(n);switch(e){case Sc:return i*t;case wc:return i*t;case Tc:return i*t*2;case Ac:return i*t/s.components*s.byteLength;case _o:return i*t/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case vo:return i*t*2/s.components*s.byteLength;case Ec:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case xo:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lr:case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rc:case no:return Math.ceil(i/4)*Math.ceil(t/4)*8;case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(i){switch(i){case In:case yc:return{byteLength:1,components:1};case ys:case Mc:case an:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case fi:case po:case An:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return p?new OffscreenCanvas(A,E):dr("canvas")}function v(A,E,F){let j=1;const Z=At(A);if((Z.width>F||Z.height>F)&&(j=F/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(j*Z.width),bt=Math.floor(j*Z.height);f===void 0&&(f=_(q,bt));const ct=E?_(q,bt):f;return ct.width=q,ct.height=bt,ct.getContext("2d").drawImage(A,0,0,q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+bt+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function h(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,E,F,j,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=E;if(E===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),E===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),E===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),E===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),E===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),E===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),E===i.RGBA){const bt=Z?xr:Xt.getTransfer(j);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=bt===ne?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function g(A,E){let F;return A?E===null||E===fi||E===$i?F=i.DEPTH24_STENCIL8:E===An?F=i.DEPTH32F_STENCIL8:E===ys&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fi||E===$i?F=i.DEPTH_COMPONENT24:E===An?F=i.DEPTH_COMPONENT32F:E===ys&&(F=i.DEPTH_COMPONENT16),F}function C(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function M(A){const E=A.target;E.removeEventListener("dispose",M),R(E),E.isVideoTexture&&u.delete(E)}function T(A){const E=A.target;E.removeEventListener("dispose",T),b(E)}function R(A){const E=n.get(A);if(E.__webglInit===void 0)return;const F=A.source,j=d.get(F);if(j){const Z=j[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(A),Object.keys(j).length===0&&d.delete(F)}n.remove(A)}function S(A){const E=n.get(A);i.deleteTexture(E.__webglTexture);const F=A.source,j=d.get(F);delete j[E.__cacheKey],a.memory.textures--}function b(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let Z=0;Z<E.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=A.textures;for(let j=0,Z=F.length;j<Z;j++){const q=n.get(F[j]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(A)}let L=0;function B(){L=0}function O(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function G(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function $(A,E){const F=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,A,E);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function X(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function J(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,E);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function V(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){it(F,A,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}const ot={[ur]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},dt={[rn]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},wt={[jh]:i.NEVER,[eu]:i.ALWAYS,[Kh]:i.LESS,[Lc]:i.LEQUAL,[Zh]:i.EQUAL,[tu]:i.GEQUAL,[Jh]:i.GREATER,[Qh]:i.NOTEQUAL};function kt(A,E){if(E.type===An&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===Dr||E.magFilter===Ts||E.magFilter===hi||E.minFilter===fn||E.minFilter===Dr||E.minFilter===Ts||E.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ot[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ot[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ot[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,wt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===rn||E.minFilter!==Ts&&E.minFilter!==hi||E.type===An&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function se(A,E){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",M));const j=E.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const q=G(E);if(q!==A.__cacheKey){Z[q]===void 0&&(Z[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[q].usedTimes++;const bt=Z[A.__cacheKey];bt!==void 0&&(Z[A.__cacheKey].usedTimes--,bt.usedTimes===0&&S(E)),A.__cacheKey=q,A.__webglTexture=Z[q].texture}return F}function Y(A,E,F){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);const Z=se(A,E),q=E.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+F);const bt=n.get(q);if(q.version!==bt.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const ct=Xt.getPrimaries(Xt.workingColorSpace),pt=E.colorSpace===Vn?null:Xt.getPrimaries(E.colorSpace),qt=E.colorSpace===Vn||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let et=v(E.image,!1,s.maxTextureSize);et=oe(E,et);const mt=r.convert(E.format,E.colorSpace),Rt=r.convert(E.type);let It=y(E.internalFormat,mt,Rt,E.colorSpace,E.isVideoTexture);kt(j,E);let gt;const Wt=E.mipmaps,Bt=E.isVideoTexture!==!0,re=bt.__version===void 0||Z===!0,I=q.dataReady,at=C(E,et);if(E.isDepthTexture)It=g(E.format===qi,E.type),re&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,It,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,mt,Rt,null));else if(E.isDataTexture)if(Wt.length>0){Bt&&re&&e.texStorage2D(i.TEXTURE_2D,at,It,Wt[0].width,Wt[0].height);for(let H=0,K=Wt.length;H<K;H++)gt=Wt[H],Bt?I&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,H,It,gt.width,gt.height,0,mt,Rt,gt.data);E.generateMipmaps=!1}else Bt?(re&&e.texStorage2D(i.TEXTURE_2D,at,It,et.width,et.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Rt,et.data)):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,mt,Rt,et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Bt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,Wt[0].width,Wt[0].height,et.depth);for(let H=0,K=Wt.length;H<K;H++)if(gt=Wt[H],E.format!==sn)if(mt!==null)if(Bt){if(I)if(E.layerUpdates.size>0){const ft=Gl(gt.width,gt.height,E.format,E.type);for(const ht of E.layerUpdates){const Nt=gt.data.subarray(ht*ft/gt.data.BYTES_PER_ELEMENT,(ht+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ht,gt.width,gt.height,1,mt,Nt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,It,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,gt.width,gt.height,et.depth,mt,Rt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,It,gt.width,gt.height,et.depth,0,mt,Rt,gt.data)}else{Bt&&re&&e.texStorage2D(i.TEXTURE_2D,at,It,Wt[0].width,Wt[0].height);for(let H=0,K=Wt.length;H<K;H++)gt=Wt[H],E.format!==sn?mt!==null?Bt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?I&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,H,It,gt.width,gt.height,0,mt,Rt,gt.data)}else if(E.isDataArrayTexture)if(Bt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,et.width,et.height,et.depth),I)if(E.layerUpdates.size>0){const H=Gl(et.width,et.height,E.format,E.type);for(const K of E.layerUpdates){const ft=et.data.subarray(K*H/et.data.BYTES_PER_ELEMENT,(K+1)*H/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,mt,Rt,ft)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Rt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,et.width,et.height,et.depth,0,mt,Rt,et.data);else if(E.isData3DTexture)Bt?(re&&e.texStorage3D(i.TEXTURE_3D,at,It,et.width,et.height,et.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Rt,et.data)):e.texImage3D(i.TEXTURE_3D,0,It,et.width,et.height,et.depth,0,mt,Rt,et.data);else if(E.isFramebufferTexture){if(re)if(Bt)e.texStorage2D(i.TEXTURE_2D,at,It,et.width,et.height);else{let H=et.width,K=et.height;for(let ft=0;ft<at;ft++)e.texImage2D(i.TEXTURE_2D,ft,It,H,K,0,mt,Rt,null),H>>=1,K>>=1}}else if(Wt.length>0){if(Bt&&re){const H=At(Wt[0]);e.texStorage2D(i.TEXTURE_2D,at,It,H.width,H.height)}for(let H=0,K=Wt.length;H<K;H++)gt=Wt[H],Bt?I&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,mt,Rt,gt):e.texImage2D(i.TEXTURE_2D,H,It,mt,Rt,gt);E.generateMipmaps=!1}else if(Bt){if(re){const H=At(et);e.texStorage2D(i.TEXTURE_2D,at,It,H.width,H.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Rt,et)}else e.texImage2D(i.TEXTURE_2D,0,It,mt,Rt,et);m(E)&&h(j),bt.__version=q.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function it(A,E,F){if(E.image.length!==6)return;const j=se(A,E),Z=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const q=n.get(Z);if(Z.version!==q.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const bt=Xt.getPrimaries(Xt.workingColorSpace),ct=E.colorSpace===Vn?null:Xt.getPrimaries(E.colorSpace),pt=E.colorSpace===Vn||bt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!qt&&!et?mt[K]=v(E.image[K],!0,s.maxCubemapSize):mt[K]=et?E.image[K].image:E.image[K],mt[K]=oe(E,mt[K]);const Rt=mt[0],It=r.convert(E.format,E.colorSpace),gt=r.convert(E.type),Wt=y(E.internalFormat,It,gt,E.colorSpace),Bt=E.isVideoTexture!==!0,re=q.__version===void 0||j===!0,I=Z.dataReady;let at=C(E,Rt);kt(i.TEXTURE_CUBE_MAP,E);let H;if(qt){Bt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Wt,Rt.width,Rt.height);for(let K=0;K<6;K++){H=mt[K].mipmaps;for(let ft=0;ft<H.length;ft++){const ht=H[ft];E.format!==sn?It!==null?Bt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ht.width,ht.height,It,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ht.width,ht.height,It,gt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Wt,ht.width,ht.height,0,It,gt,ht.data)}}}else{if(H=E.mipmaps,Bt&&re){H.length>0&&at++;const K=At(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,It,gt,mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,mt[K].width,mt[K].height,0,It,gt,mt[K].data);for(let ft=0;ft<H.length;ft++){const Nt=H[ft].image[K].image;Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Nt.width,Nt.height,It,gt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Wt,Nt.width,Nt.height,0,It,gt,Nt.data)}}else{Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,It,gt,mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,It,gt,mt[K]);for(let ft=0;ft<H.length;ft++){const ht=H[ft];Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,It,gt,ht.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Wt,It,gt,ht.image[K])}}}m(E)&&h(i.TEXTURE_CUBE_MAP),q.__version=Z.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Mt(A,E,F,j,Z,q){const bt=r.convert(F.format,F.colorSpace),ct=r.convert(F.type),pt=y(F.internalFormat,bt,ct,F.colorSpace),qt=n.get(E),et=n.get(F);if(et.__renderTarget=E,!qt.__hasExternalTextures){const mt=Math.max(1,E.width>>q),Rt=Math.max(1,E.height>>q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,pt,mt,Rt,E.depth,0,bt,ct,null):e.texImage2D(Z,q,pt,mt,Rt,0,bt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Gt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,et.__webglTexture,0,Vt(E)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,et.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){const j=E.depthTexture,Z=j&&j.isDepthTexture?j.type:null,q=g(E.stencilBuffer,Z),bt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Vt(E);Gt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,q,E.width,E.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,A)}else{const j=E.textures;for(let Z=0;Z<j.length;Z++){const q=j[Z],bt=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),pt=y(q.internalFormat,bt,ct,q.colorSpace),qt=Vt(E);F&&Gt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,pt,E.width,E.height):Gt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,pt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,pt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const Z=j.__webglTexture,q=Vt(E);if(E.depthTexture.format===Hi)Gt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(E.depthTexture.format===qi)Gt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ut(A){const E=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=j}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Lt(E.__webglFramebuffer,A)}else if(F){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),lt(E.__webglDepthbuffer[j],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),lt(E.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(A,E,F){const j=n.get(A);E!==void 0&&Mt(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ut(A)}function fe(A){const E=A.texture,F=n.get(A),j=n.get(E);A.addEventListener("dispose",T);const Z=A.textures,q=A.isWebGLCubeRenderTarget===!0,bt=Z.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let pt=0;pt<E.mipmaps.length;pt++)F.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else F.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)F.__webglFramebuffer[ct]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ct=0,pt=Z.length;ct<pt;ct++){const qt=n.get(Z[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Gt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const pt=Z[ct];F.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const qt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),mt=y(pt.internalFormat,qt,et,pt.colorSpace,A.isXRRenderTarget===!0),Rt=Vt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),kt(i.TEXTURE_CUBE_MAP,E);for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Mt(F.__webglFramebuffer[ct][pt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else Mt(F.__webglFramebuffer[ct],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(E)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,pt=Z.length;ct<pt;ct++){const qt=Z[ct],et=n.get(qt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),kt(i.TEXTURE_2D,qt),Mt(F.__webglFramebuffer,A,qt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(qt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),kt(ct,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Mt(F.__webglFramebuffer[pt],A,E,i.COLOR_ATTACHMENT0,ct,pt);else Mt(F.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,ct,0);m(E)&&h(ct),e.unbindTexture()}A.depthBuffer&&Ut(A)}function $t(A){const E=A.textures;for(let F=0,j=E.length;F<j;F++){const Z=E[F];if(m(Z)){const q=x(A),bt=n.get(Z).__webglTexture;e.bindTexture(q,bt),h(q),e.unbindTexture()}}}const me=[],N=[];function qe(A){if(A.samples>0){if(Gt(A)===!1){const E=A.textures,F=A.width,j=A.height;let Z=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(A),ct=E.length>1;if(ct)for(let pt=0;pt<E.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let pt=0;pt<E.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const qt=n.get(E[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,Z,i.NEAREST),l===!0&&(me.length=0,N.length=0,me.push(i.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(me.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<E.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const qt=n.get(E[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Vt(A){return Math.min(s.maxSamples,A.samples)}function Gt(A){const E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(A){const E=a.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function oe(A,E){const F=A.colorSpace,j=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Qi&&F!==Vn&&(Xt.getTransfer(F)===ne?(j!==sn||Z!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function At(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ht,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Gt}function rm(i,t){function e(n,s=Vn){let r;const a=Xt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return i.BYTE;if(n===Mc)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===sn)return i.RGBA;if(n===wc)return i.LUMINANCE;if(n===Tc)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Ac)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===Cc)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===$a||n===qa||n===Ya||n===ja||n===Ka||n===Za||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===to||n===eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lr)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class am extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class he extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const om={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(om)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xe({vertexShader:lm,fragmentShader:cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class um extends ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const v=new hm,m=e.getContextAttributes();let h=null,x=null;const y=[],g=[],C=new tt;let M=null;const T=new ke;T.viewport=new Kt;const R=new ke;R.viewport=new Kt;const S=[T,R],b=new am;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=y[Y];return it===void 0&&(it=new oa,y[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=y[Y];return it===void 0&&(it=new oa,y[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=y[Y];return it===void 0&&(it=new oa,y[Y]=it),it.getHandSpace()};function O(Y){const it=g.indexOf(Y.inputSource);if(it===-1)return;const Mt=y[it];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<y.length;Y++){const it=g[Y];it!==null&&(g[Y]=null,y[Y].disconnect(it))}L=null,B=null,v.reset(),t.setRenderTarget(h),p=null,d=null,f=null,s=null,x=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new $e(p.framebufferWidth,p.framebufferHeight,{format:sn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?qi:Hi,Mt=m.stencil?$i:fi);const Lt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new $e(d.textureWidth,d.textureHeight,{format:sn,type:In,depthTexture:new Vc(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(Y){for(let it=0;it<Y.removed.length;it++){const Mt=Y.removed[it],lt=g.indexOf(Mt);lt>=0&&(g[lt]=null,y[lt].disconnect(Mt))}for(let it=0;it<Y.added.length;it++){const Mt=Y.added[it];let lt=g.indexOf(Mt);if(lt===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=g.length){g.push(Mt),lt=Ut;break}else if(g[Ut]===null){g[Ut]=Mt,lt=Ut;break}if(lt===-1)break}const Lt=y[lt];Lt&&Lt.connect(Mt)}}const X=new P,J=new P;function V(Y,it,Mt){X.setFromMatrixPosition(it.matrixWorld),J.setFromMatrixPosition(Mt.matrixWorld);const lt=X.distanceTo(J),Lt=it.projectionMatrix.elements,Ut=Mt.projectionMatrix.elements,Ht=Lt[14]/(Lt[10]-1),fe=Lt[14]/(Lt[10]+1),$t=(Lt[9]+1)/Lt[5],me=(Lt[9]-1)/Lt[5],N=(Lt[8]-1)/Lt[0],qe=(Ut[8]+1)/Ut[0],Vt=Ht*N,Gt=Ht*qe,Ct=lt/(-N+qe),oe=Ct*-N;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(Ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Lt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const At=Ht+Ct,A=fe+Ct,E=Vt-oe,F=Gt+(lt-oe),j=$t*fe/A*At,Z=me*fe/A*At;Y.projectionMatrix.makePerspective(E,F,j,Z,At,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,Mt=Y.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),b.near=R.near=T.near=it,b.far=R.far=T.far=Mt,(L!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,B=b.far),T.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,b.layers.mask=T.layers.mask|R.layers.mask;const lt=Y.parent,Lt=b.cameras;ot(b,lt);for(let Ut=0;Ut<Lt.length;Ut++)ot(Lt[Ut],lt);Lt.length===2?V(b,T,R):b.projectionMatrix.copy(T.projectionMatrix),dt(Y,b,lt)};function dt(Y,it,Mt){Mt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ao*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let wt=null;function kt(Y,it){if(u=it.getViewerPose(c||a),_=it,u!==null){const Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let lt=!1;Mt.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let Ut=0;Ut<Mt.length;Ut++){const Ht=Mt[Ut];let fe=null;if(p!==null)fe=p.getViewport(Ht);else{const me=f.getViewSubImage(d,Ht);fe=me.viewport,Ut===0&&(t.setRenderTargetTextures(x,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(x))}let $t=S[Ut];$t===void 0&&($t=new ke,$t.layers.enable(Ut),$t.viewport=new Kt,S[Ut]=$t),$t.matrix.fromArray(Ht.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ht.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(fe.x,fe.y,fe.width,fe.height),Ut===0&&(b.matrix.copy($t.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push($t)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ut=f.getDepthInformation(Mt[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,s.renderState)}}for(let Mt=0;Mt<y.length;Mt++){const lt=g[Mt],Lt=y[Mt];lt!==null&&Lt!==void 0&&Lt.update(lt,it,c||a)}wt&&wt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),_=null}const se=new Hc;se.setAnimationLoop(kt),this.setAnimationLoop=function(Y){wt=Y},this.dispose=function(){}}}const si=new pn,fm=new te;function dm(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Bc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,x,y,g){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,g)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,x,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ne&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ne&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=t.get(h),y=x.envMap,g=x.envMapRotation;y&&(m.envMap.value=y,si.copy(g),si.x*=-1,si.y*=-1,si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(si)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=y*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ne&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const x=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const g=y.program;n.uniformBlockBinding(x,g)}function c(x,y){let g=s[x.id];g===void 0&&(_(x),g=u(x),s[x.id]=g,x.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(x,C);const M=t.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function u(x){const y=f();x.__bindingPointIndex=y;const g=i.createBuffer(),C=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,C,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,g),g}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],g=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,T=g.length;M<T;M++){const R=Array.isArray(g[M])?g[M]:[g[M]];for(let S=0,b=R.length;S<b;S++){const L=R[S];if(p(L,M,S,C)===!0){const B=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let $=0;$<O.length;$++){const X=O[$],J=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+G,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,g,C){const M=x.value,T=y+"_"+g;if(C[T]===void 0)return typeof M=="number"||typeof M=="boolean"?C[T]=M:C[T]=M.clone(),!0;{const R=C[T];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return C[T]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function _(x){const y=x.uniforms;let g=0;const C=16;for(let T=0,R=y.length;T<R;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,L=S.length;b<L;b++){const B=S[b],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,$=O.length;G<$;G++){const X=O[G],J=v(X),V=g%C,ot=V%J.boundary,dt=V+ot;g+=ot,dt!==0&&C-dt<J.storage&&(g+=C-dt),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=g,g+=J.storage}}}const M=g%C;return M>0&&(g+=C-M),x.__size=g,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const g=a.indexOf(y.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class mm{constructor(t={}){const{canvas:e=iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Wn,this.toneMappingExposure=1;const g=this;let C=!1,M=0,T=0,R=null,S=-1,b=null;const L=new Kt,B=new Kt;let O=null;const G=new Tt(0);let $=0,X=e.width,J=e.height,V=1,ot=null,dt=null;const wt=new Kt(0,0,X,J),kt=new Kt(0,0,X,J);let se=!1;const Y=new Mo;let it=!1,Mt=!1;const lt=new te,Lt=new te,Ut=new P,Ht=new Kt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function me(){return R===null?V:1}let N=n;function qe(w,D){return e.getContext(w,D)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){const D="webgl2";if(N=qe(D,w),N===null)throw qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,Gt,Ct,oe,At,A,E,F,j,Z,q,bt,ct,pt,qt,et,mt,Rt,It,gt,Wt,Bt,re,I;function at(){Vt=new yp(N),Vt.init(),Bt=new rm(N,Vt),Gt=new pp(N,Vt,t,Bt),Ct=new nm(N,Vt),Gt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),oe=new Sp(N),At=new H0,A=new sm(N,Vt,Ct,At,Gt,Bt,oe),E=new gp(g),F=new xp(g),j=new Ru(N),re=new fp(N,j),Z=new Mp(N,j,oe,re),q=new wp(N,Z,j,oe),It=new Ep(N,Gt,A),et=new mp(At),bt=new k0(g,E,F,Vt,Gt,re,et),ct=new dm(g,At),pt=new G0,qt=new j0(Vt),Rt=new up(g,E,F,Ct,q,p,l),mt=new tm(g,q,Gt),I=new pm(N,oe,Gt,Ct),gt=new dp(N,Vt,oe),Wt=new bp(N,Vt,oe),oe.programs=bt.programs,g.capabilities=Gt,g.extensions=Vt,g.properties=At,g.renderLists=pt,g.shadowMap=mt,g.state=Ct,g.info=oe}at();const H=new um(g,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(X,J,!1))},this.getSize=function(w){return w.set(X,J)},this.setSize=function(w,D,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,J=D,e.width=Math.floor(w*V),e.height=Math.floor(D*V),z===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(X*V,J*V).floor()},this.setDrawingBufferSize=function(w,D,z){X=w,J=D,V=z,e.width=Math.floor(w*z),e.height=Math.floor(D*z),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,D,z,k){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,D,z,k),Ct.viewport(L.copy(wt).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,D,z,k){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,D,z,k),Ct.scissor(B.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){Ct.setScissorTest(se=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(w=!0,D=!0,z=!0){let k=0;if(w){let U=!1;if(R!==null){const nt=R.texture.format;U=nt===xo||nt===vo||nt===_o}if(U){const nt=R.texture.type,ut=nt===In||nt===fi||nt===ys||nt===$i||nt===mo||nt===go,vt=Rt.getClearColor(),xt=Rt.getClearAlpha(),Dt=vt.r,Ft=vt.g,yt=vt.b;ut?(_[0]=Dt,_[1]=Ft,_[2]=yt,_[3]=xt,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=Dt,v[1]=Ft,v[2]=yt,v[3]=xt,N.clearBufferiv(N.COLOR,0,v))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),qt.dispose(),At.dispose(),E.dispose(),F.dispose(),q.dispose(),re.dispose(),I.dispose(),bt.dispose(),H.dispose(),H.removeEventListener("sessionstart",ko),H.removeEventListener("sessionend",Ho),Jn.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=oe.autoReset,D=mt.enabled,z=mt.autoUpdate,k=mt.needsUpdate,U=mt.type;at(),oe.autoReset=w,mt.enabled=D,mt.autoUpdate=z,mt.needsUpdate=k,mt.type=U}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const D=w.target;D.removeEventListener("dispose",Nt),pe(D)}function pe(w){Te(w),At.remove(w)}function Te(w){const D=At.get(w).programs;D!==void 0&&(D.forEach(function(z){bt.releaseProgram(z)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,z,k,U,nt){D===null&&(D=fe);const ut=U.isMesh&&U.matrixWorld.determinant()<0,vt=vh(w,D,z,k,U);Ct.setMaterial(k,ut);let xt=z.index,Dt=1;if(k.wireframe===!0){if(xt=Z.getWireframeAttribute(z),xt===void 0)return;Dt=2}const Ft=z.drawRange,yt=z.attributes.position;let jt=Ft.start*Dt,ae=(Ft.start+Ft.count)*Dt;nt!==null&&(jt=Math.max(jt,nt.start*Dt),ae=Math.min(ae,(nt.start+nt.count)*Dt)),xt!==null?(jt=Math.max(jt,0),ae=Math.min(ae,xt.count)):yt!=null&&(jt=Math.max(jt,0),ae=Math.min(ae,yt.count));const le=ae-jt;if(le<0||le===1/0)return;re.setup(U,k,vt,z,xt);let Be,Zt=gt;if(xt!==null&&(Be=j.get(xt),Zt=Wt,Zt.setIndex(Be)),U.isMesh)k.wireframe===!0?(Ct.setLineWidth(k.wireframeLinewidth*me()),Zt.setMode(N.LINES)):Zt.setMode(N.TRIANGLES);else if(U.isLine){let St=k.linewidth;St===void 0&&(St=1),Ct.setLineWidth(St*me()),U.isLineSegments?Zt.setMode(N.LINES):U.isLineLoop?Zt.setMode(N.LINE_LOOP):Zt.setMode(N.LINE_STRIP)}else U.isPoints?Zt.setMode(N.POINTS):U.isSprite&&Zt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Zt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const St=U._multiDrawStarts,_n=U._multiDrawCounts,Jt=U._multiDrawCount,Qe=xt?j.get(xt).bytesPerElement:1,gi=At.get(k).currentProgram.getUniforms();for(let Ve=0;Ve<Jt;Ve++)gi.setValue(N,"_gl_DrawID",Ve),Zt.render(St[Ve]/Qe,_n[Ve])}else if(U.isInstancedMesh)Zt.renderInstances(jt,le,U.count);else if(z.isInstancedBufferGeometry){const St=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,_n=Math.min(z.instanceCount,St);Zt.renderInstances(jt,le,_n)}else Zt.render(jt,le)};function ee(w,D,z){w.transparent===!0&&w.side===_e&&w.forceSinglePass===!1?(w.side=Ne,w.needsUpdate=!0,ws(w,D,z),w.side=$n,w.needsUpdate=!0,ws(w,D,z),w.side=_e):ws(w,D,z)}this.compile=function(w,D,z=null){z===null&&(z=w),h=qt.get(z),h.init(D),y.push(h),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const k=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const vt=nt[ut];ee(vt,z,U),k.add(vt)}else ee(nt,z,U),k.add(nt)}),y.pop(),h=null,k},this.compileAsync=function(w,D,z=null){const k=this.compile(w,D,z);return new Promise(U=>{function nt(){if(k.forEach(function(ut){At.get(ut).currentProgram.isReady()&&k.delete(ut)}),k.size===0){U(w);return}setTimeout(nt,10)}Vt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Je=null;function gn(w){Je&&Je(w)}function ko(){Jn.stop()}function Ho(){Jn.start()}const Jn=new Hc;Jn.setAnimationLoop(gn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){Je=w,H.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},H.addEventListener("sessionstart",ko),H.addEventListener("sessionend",Ho),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,D,R),h=qt.get(w,y.length),h.init(D),y.push(h),Lt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Lt),Mt=this.localClippingEnabled,it=et.init(this.clippingPlanes,Mt),m=pt.get(w,x.length),m.init(),x.push(m),H.enabled===!0&&H.isPresenting===!0){const nt=g.xr.getDepthSensingMesh();nt!==null&&Ir(nt,D,-1/0,g.sortObjects)}Ir(w,D,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ot,dt),$t=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,$t&&Rt.addToRenderList(m,w),this.info.render.frame++,it===!0&&et.beginShadows();const z=h.state.shadowsArray;mt.render(z,w,D),it===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(h.setupLights(),D.isArrayCamera){const nt=D.cameras;if(U.length>0)for(let ut=0,vt=nt.length;ut<vt;ut++){const xt=nt[ut];Go(k,U,w,xt)}$t&&Rt.render(w);for(let ut=0,vt=nt.length;ut<vt;ut++){const xt=nt[ut];Vo(m,w,xt,xt.viewport)}}else U.length>0&&Go(k,U,w,D),$t&&Rt.render(w),Vo(m,w,D);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(g,w,D),re.resetDefaultState(),S=-1,b=null,y.pop(),y.length>0?(h=y[y.length-1],it===!0&&et.setGlobalState(g.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ir(w,D,z,k){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){k&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);const ut=q.update(w),vt=w.material;vt.visible&&m.push(w,ut,vt,z,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const ut=q.update(w),vt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ht.copy(ut.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(vt)){const xt=ut.groups;for(let Dt=0,Ft=xt.length;Dt<Ft;Dt++){const yt=xt[Dt],jt=vt[yt.materialIndex];jt&&jt.visible&&m.push(w,ut,jt,z,Ht.z,yt)}}else vt.visible&&m.push(w,ut,vt,z,Ht.z,null)}}const nt=w.children;for(let ut=0,vt=nt.length;ut<vt;ut++)Ir(nt[ut],D,z,k)}function Vo(w,D,z,k){const U=w.opaque,nt=w.transmissive,ut=w.transparent;h.setupLightsView(z),it===!0&&et.setGlobalState(g.clippingPlanes,z),k&&Ct.viewport(L.copy(k)),U.length>0&&Es(U,D,z),nt.length>0&&Es(nt,D,z),ut.length>0&&Es(ut,D,z),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Go(w,D,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new $e(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?an:In,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const nt=h.state.transmissionRenderTarget[k.id],ut=k.viewport||L;nt.setSize(ut.z,ut.w);const vt=g.getRenderTarget();g.setRenderTarget(nt),g.getClearColor(G),$=g.getClearAlpha(),$<1&&g.setClearColor(16777215,.5),g.clear(),$t&&Rt.render(z);const xt=g.toneMapping;g.toneMapping=Wn;const Dt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),it===!0&&et.setGlobalState(g.clippingPlanes,k),Es(w,z,k),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let yt=0,jt=D.length;yt<jt;yt++){const ae=D[yt],le=ae.object,Be=ae.geometry,Zt=ae.material,St=ae.group;if(Zt.side===_e&&le.layers.test(k.layers)){const _n=Zt.side;Zt.side=Ne,Zt.needsUpdate=!0,Wo(le,z,k,Be,Zt,St),Zt.side=_n,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}g.setRenderTarget(vt),g.setClearColor(G,$),Dt!==void 0&&(k.viewport=Dt),g.toneMapping=xt}function Es(w,D,z){const k=D.isScene===!0?D.overrideMaterial:null;for(let U=0,nt=w.length;U<nt;U++){const ut=w[U],vt=ut.object,xt=ut.geometry,Dt=k===null?ut.material:k,Ft=ut.group;vt.layers.test(z.layers)&&Wo(vt,D,z,xt,Dt,Ft)}}function Wo(w,D,z,k,U,nt){w.onBeforeRender(g,D,z,k,U,nt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(g,D,z,k,w,nt),U.transparent===!0&&U.side===_e&&U.forceSinglePass===!1?(U.side=Ne,U.needsUpdate=!0,g.renderBufferDirect(z,D,k,U,w,nt),U.side=$n,U.needsUpdate=!0,g.renderBufferDirect(z,D,k,U,w,nt),U.side=_e):g.renderBufferDirect(z,D,k,U,w,nt),w.onAfterRender(g,D,z,k,U,nt)}function ws(w,D,z){D.isScene!==!0&&(D=fe);const k=At.get(w),U=h.state.lights,nt=h.state.shadowsArray,ut=U.state.version,vt=bt.getParameters(w,U.state,nt,D,z),xt=bt.getProgramCacheKey(vt);let Dt=k.programs;k.environment=w.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(w.isMeshStandardMaterial?F:E).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Nt),Dt=new Map,k.programs=Dt);let Ft=Dt.get(xt);if(Ft!==void 0){if(k.currentProgram===Ft&&k.lightsStateVersion===ut)return $o(w,vt),Ft}else vt.uniforms=bt.getUniforms(w),w.onBeforeCompile(vt,g),Ft=bt.acquireProgram(vt,xt),Dt.set(xt,Ft),k.uniforms=vt.uniforms;const yt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(yt.clippingPlanes=et.uniform),$o(w,vt),k.needsLights=yh(w),k.lightsStateVersion=ut,k.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ft,k.uniformsList=null,Ft}function Xo(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=hr.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function $o(w,D){const z=At.get(w);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function vh(w,D,z,k,U){D.isScene!==!0&&(D=fe),A.resetTextureUnits();const nt=D.fog,ut=k.isMeshStandardMaterial?D.environment:null,vt=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qi,xt=(k.isMeshStandardMaterial?F:E).get(k.envMap||ut),Dt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!z.morphAttributes.position,jt=!!z.morphAttributes.normal,ae=!!z.morphAttributes.color;let le=Wn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=g.toneMapping);const Be=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=Be!==void 0?Be.length:0,St=At.get(k),_n=h.state.lights;if(it===!0&&(Mt===!0||w!==b)){const Ye=w===b&&k.id===S;et.setState(k,w,Ye)}let Jt=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==_n.state.version||St.outputColorSpace!==vt||U.isBatchedMesh&&St.batching===!1||!U.isBatchedMesh&&St.batching===!0||U.isBatchedMesh&&St.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&St.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&St.instancing===!1||!U.isInstancedMesh&&St.instancing===!0||U.isSkinnedMesh&&St.skinning===!1||!U.isSkinnedMesh&&St.skinning===!0||U.isInstancedMesh&&St.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&St.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&St.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&St.instancingMorph===!1&&U.morphTexture!==null||St.envMap!==xt||k.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==et.numPlanes||St.numIntersection!==et.numIntersection)||St.vertexAlphas!==Dt||St.vertexTangents!==Ft||St.morphTargets!==yt||St.morphNormals!==jt||St.morphColors!==ae||St.toneMapping!==le||St.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,St.__version=k.version);let Qe=St.currentProgram;Jt===!0&&(Qe=ws(k,D,U));let gi=!1,Ve=!1,ss=!1;const ce=Qe.getUniforms(),on=St.uniforms;if(Ct.useProgram(Qe.program)&&(gi=!0,Ve=!0,ss=!0),k.id!==S&&(S=k.id,Ve=!0),gi||b!==w){Ct.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),ru(lt),au(lt),ce.setValue(N,"projectionMatrix",lt)):ce.setValue(N,"projectionMatrix",w.projectionMatrix),ce.setValue(N,"viewMatrix",w.matrixWorldInverse);const Dn=ce.map.cameraPosition;Dn!==void 0&&Dn.setValue(N,Ut.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ce.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Ve=!0,ss=!0)}if(U.isSkinnedMesh){ce.setOptional(N,U,"bindMatrix"),ce.setOptional(N,U,"bindMatrixInverse");const Ye=U.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ce.setValue(N,"boneTexture",Ye.boneTexture,A))}U.isBatchedMesh&&(ce.setOptional(N,U,"batchingTexture"),ce.setValue(N,"batchingTexture",U._matricesTexture,A),ce.setOptional(N,U,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",U._indirectTexture,A),ce.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",U._colorsTexture,A));const rs=z.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&It.update(U,z,Qe),(Ve||St.receiveShadow!==U.receiveShadow)&&(St.receiveShadow=U.receiveShadow,ce.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(on.envMap.value=xt,on.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(on.envMapIntensity.value=D.environmentIntensity),Ve&&(ce.setValue(N,"toneMappingExposure",g.toneMappingExposure),St.needsLights&&xh(on,ss),nt&&k.fog===!0&&ct.refreshFogUniforms(on,nt),ct.refreshMaterialUniforms(on,k,V,J,h.state.transmissionRenderTarget[w.id]),hr.upload(N,Xo(St),on,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(hr.upload(N,Xo(St),on,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ce.setValue(N,"center",U.center),ce.setValue(N,"modelViewMatrix",U.modelViewMatrix),ce.setValue(N,"normalMatrix",U.normalMatrix),ce.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ye=k.uniformsGroups;for(let Dn=0,Un=Ye.length;Dn<Un;Dn++){const qo=Ye[Dn];I.update(qo,Qe),I.bind(qo,Qe)}}return Qe}function xh(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function yh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,D,z){At.get(w.texture).__webglTexture=D,At.get(w.depthTexture).__webglTexture=z;const k=At.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const z=At.get(w);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,z=0){R=w,M=D,T=z;let k=!0,U=null,nt=!1,ut=!1;if(w){const xt=At.get(w);if(xt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(xt.__hasExternalTextures)A.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const yt=w.depthTexture;if(xt.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(w.width!==yt.image.width||w.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ut=!0);const Ft=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[D])?U=Ft[D][z]:U=Ft[D],nt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?U=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?U=Ft[z]:U=Ft,L.copy(w.viewport),B.copy(w.scissor),O=w.scissorTest}else L.copy(wt).multiplyScalar(V).floor(),B.copy(kt).multiplyScalar(V).floor(),O=se;if(Ct.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&Ct.drawBuffers(w,U),Ct.viewport(L),Ct.scissor(B),Ct.setScissorTest(O),nt){const xt=At.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,z)}else if(ut){const xt=At.get(w.texture),Dt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,Dt)}S=-1},this.readRenderTargetPixels=function(w,D,z,k,U,nt,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){Ct.bindFramebuffer(N.FRAMEBUFFER,vt);try{const xt=w.texture,Dt=xt.format,Ft=xt.type;if(!Gt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-k&&z>=0&&z<=w.height-U&&N.readPixels(D,z,k,U,Bt.convert(Dt),Bt.convert(Ft),nt)}finally{const xt=R!==null?At.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(w,D,z,k,U,nt,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){const xt=w.texture,Dt=xt.format,Ft=xt.type;if(!Gt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-k&&z>=0&&z<=w.height-U){Ct.bindFramebuffer(N.FRAMEBUFFER,vt);const yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.bufferData(N.PIXEL_PACK_BUFFER,nt.byteLength,N.STREAM_READ),N.readPixels(D,z,k,U,Bt.convert(Dt),Bt.convert(Ft),0);const jt=R!==null?At.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,jt);const ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await su(N,ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,nt),N.deleteBuffer(yt),N.deleteSync(ae),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,z=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-z),U=Math.floor(w.image.width*k),nt=Math.floor(w.image.height*k),ut=D!==null?D.x:0,vt=D!==null?D.y:0;A.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ut,vt,U,nt),Ct.unbindTexture()},this.copyTextureToTexture=function(w,D,z=null,k=null,U=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let nt,ut,vt,xt,Dt,Ft,yt,jt,ae;const le=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(nt=z.max.x-z.min.x,ut=z.max.y-z.min.y,vt=z.isBox3?z.max.z-z.min.z:1,xt=z.min.x,Dt=z.min.y,Ft=z.isBox3?z.min.z:0):(nt=le.width,ut=le.height,vt=le.depth||1,xt=0,Dt=0,Ft=0),k!==null?(yt=k.x,jt=k.y,ae=k.z):(yt=0,jt=0,ae=0);const Be=Bt.convert(D.format),Zt=Bt.convert(D.type);let St;D.isData3DTexture?(A.setTexture3D(D,0),St=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),St=N.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const _n=N.getParameter(N.UNPACK_ROW_LENGTH),Jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Qe=N.getParameter(N.UNPACK_SKIP_PIXELS),gi=N.getParameter(N.UNPACK_SKIP_ROWS),Ve=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,le.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);const ss=w.isDataArrayTexture||w.isData3DTexture,ce=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const on=At.get(w),rs=At.get(D),Ye=At.get(on.__renderTarget),Dn=At.get(rs.__renderTarget);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Un=0;Un<vt;Un++)ss&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(w).__webglTexture,U,Ft+Un),w.isDepthTexture?(ce&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(D).__webglTexture,U,ae+Un),N.blitFramebuffer(xt,Dt,nt,ut,yt,jt,nt,ut,N.DEPTH_BUFFER_BIT,N.NEAREST)):ce?N.copyTexSubImage3D(St,U,yt,jt,ae+Un,xt,Dt,nt,ut):N.copyTexSubImage2D(St,U,yt,jt,ae+Un,xt,Dt,nt,ut);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ce?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(St,U,yt,jt,ae,nt,ut,vt,Be,Zt,le.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(St,U,yt,jt,ae,nt,ut,vt,Be,le.data):N.texSubImage3D(St,U,yt,jt,ae,nt,ut,vt,Be,Zt,le):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,yt,jt,nt,ut,Be,Zt,le.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,yt,jt,le.width,le.height,Be,le.data):N.texSubImage2D(N.TEXTURE_2D,U,yt,jt,nt,ut,Be,Zt,le);N.pixelStorei(N.UNPACK_ROW_LENGTH,_n),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Qe),N.pixelStorei(N.UNPACK_SKIP_ROWS,gi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve),U===0&&D.generateMipmaps&&N.generateMipmap(St),Ct.unbindTexture()},this.copyTextureToTexture3D=function(w,D,z=null,k=null,U=0){return w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,z,k,U)},this.initRenderTarget=function(w){At.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Ct.unbindTexture()},this.resetState=function(){M=0,T=0,R=null,Ct.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class Eo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new Eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qc extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ro,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new P;class pr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yc extends Yn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const hs=new P,Ii=new P,Di=new P,Ui=new tt,us=new tt,jc=new te,qs=new P,fs=new P,Ys=new P,Wl=new tt,la=new tt,Xl=new tt;class _m extends ve{constructor(t=new Yc){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new de;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gm(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new pr(n,3,0,!1)),Li.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),jc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Di.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;js(qs.set(-.5,-.5,0),Di,a,Ii,s,r),js(fs.set(.5,-.5,0),Di,a,Ii,s,r),js(Ys.set(.5,.5,0),Di,a,Ii,s,r),Wl.set(0,0),la.set(1,0),Xl.set(1,1);let o=t.ray.intersectTriangle(qs,fs,Ys,!1,hs);if(o===null&&(js(fs.set(-.5,.5,0),Di,a,Ii,s,r),la.set(0,1),o=t.ray.intersectTriangle(qs,Ys,fs,!1,hs),o===null))return;const l=t.ray.origin.distanceTo(hs);l<t.near||l>t.far||e.push({distance:l,point:hs.clone(),uv:Xe.getInterpolation(hs,qs,fs,Ys,Wl,la,Xl,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function js(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(us.x=r*Ui.x-s*Ui.y,us.y=s*Ui.x+r*Ui.y):us.copy(Ui),i.copy(t),i.x+=us.x,i.y+=us.y,i.applyMatrix4(jc)}class Kc extends Yn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mr=new P,gr=new P,$l=new te,ds=new yr,Ks=new es,ca=new P,ql=new P;class Zc extends ve{constructor(t=new de,e=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)mr.fromBufferAttribute(e,s-1),gr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=mr.distanceTo(gr);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;$l.copy(s).invert(),ds.copy(t.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){const h=u.getX(v),x=u.getX(v+1),y=Zs(this,t,ds,l,h,x);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),h=Zs(this,t,ds,l,v,m);h&&e.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){const h=Zs(this,t,ds,l,v,v+1);h&&e.push(h)}if(this.isLineLoop){const v=Zs(this,t,ds,l,_-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zs(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(mr.fromBufferAttribute(a,s),gr.fromBufferAttribute(a,r),e.distanceSqToSegment(mr,gr,ca,ql)>n)return;ca.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ca);if(!(l<t.near||l>t.far))return{distance:l,point:ql.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Yl=new P,jl=new P;class Jc extends Zc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Yl.fromBufferAttribute(e,s),jl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yl.distanceTo(jl);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wo extends Yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kl=new te,lo=new yr,Js=new es,Qs=new P;class Qc extends ve{constructor(t=new de,e=new wo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Kl.copy(s).invert(),lo.copy(t.ray).applyMatrix4(Kl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,v=p;_<v;_++){const m=c.getX(_);Qs.fromBufferAttribute(f,m),Zl(Qs,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,v=p;_<v;_++)Qs.fromBufferAttribute(f,_),Zl(Qs,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zl(i,t,e,n,s,r,a){const o=lo.distanceSqToPoint(i);if(o<e){const l=new P;lo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class th extends Fe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new tt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,l=new te;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(we(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(we(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class To extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vm extends To{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ao(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const tr=new P,ha=new Ao,ua=new Ao,fa=new Ao;class eh extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(tr.subVectors(s[0],s[1]).add(s[0]),c=tr);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(tr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=tr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),ha.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,v,m),ua.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,v,m),fa.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),ua.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),fa.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(ha.calc(l),ua.calc(l),fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function xm(i,t){const e=1-i;return e*e*t}function ym(i,t){return 2*(1-i)*i*t}function Mm(i,t){return i*i*t}function _s(i,t,e,n){return xm(i,t)+ym(i,e)+Mm(i,n)}function bm(i,t){const e=1-i;return e*e*e*t}function Sm(i,t){const e=1-i;return 3*e*e*i*t}function Em(i,t){return 3*(1-i)*i*i*t}function wm(i,t){return i*i*i*t}function vs(i,t,e,n,s){return bm(i,t)+Sm(i,e)+Em(i,n)+wm(i,s)}class nh extends mn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tm extends mn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y),vs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ih extends mn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Am extends mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sh extends mn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(_s(t,s.x,r.x,a.x),_s(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cm extends mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(_s(t,s.x,r.x,a.x),_s(t,s.y,r.y,a.y),_s(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rh extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Jl(o,l.x,c.x,u.x,f.x),Jl(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new tt().fromArray(s))}return this}}var Ql=Object.freeze({__proto__:null,ArcCurve:vm,CatmullRomCurve3:eh,CubicBezierCurve:nh,CubicBezierCurve3:Tm,EllipseCurve:To,LineCurve:ih,LineCurve3:Am,QuadraticBezierCurve:sh,QuadraticBezierCurve3:Cm,SplineCurve:rh});class Rm extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ql[s.type]().fromJSON(s))}return this}}class Pm extends Rm{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ih(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new sh(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new nh(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new To(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Co extends de{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,f=new P,d=new tt,p=new P,_=new P,v=new P;let m=0,h=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,h=t[x+1].y-t[x].y,p.x=h*1,p.y=-m,p.z=h*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,h=t[x+1].y-t[x].y,p.x=h*1,p.y=-m,p.z=h*0,_.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(_)}for(let x=0;x<=e;x++){const y=n+x*u*s,g=Math.sin(y),C=Math.cos(y);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*g,f.y=t[M].y,f.z=t[M].x*C,a.push(f.x,f.y,f.z),d.x=x/e,d.y=M/(t.length-1),o.push(d.x,d.y);const T=l[3*M+0]*g,R=l[3*M+1],S=l[3*M+0]*C;c.push(T,R,S)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const g=y+x*t.length,C=g,M=g+t.length,T=g+t.length+1,R=g+1;r.push(C,M,R),r.push(T,R,M)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.points,t.segments,t.phiStart,t.phiLength)}}class ui extends Co{constructor(t=1,e=1,n=4,s=8){const r=new Pm;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ui(t.radius,t.length,t.capSegments,t.radialSegments)}}class di extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,u=new tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Re extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],p=[];let _=0;const v=[],m=n/2;let h=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function x(){const g=new P,C=new P;let M=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const S=[],b=R/r,L=b*(e-t)+t;for(let B=0;B<=s;B++){const O=B/s,G=O*l+o,$=Math.sin(G),X=Math.cos(G);C.x=L*$,C.y=-b*n+m,C.z=L*X,f.push(C.x,C.y,C.z),g.set($,T,X).normalize(),d.push(g.x,g.y,g.z),p.push(O,1-b),S.push(_++)}v.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const b=v[S][R],L=v[S+1][R],B=v[S+1][R+1],O=v[S][R+1];(t>0||S!==0)&&(u.push(b,L,O),M+=3),(e>0||S!==r-1)&&(u.push(L,B,O),M+=3)}c.addGroup(h,M,0),h+=M}function y(g){const C=_,M=new tt,T=new P;let R=0;const S=g===!0?t:e,b=g===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),_++;const L=_;for(let B=0;B<=s;B++){const G=B/s*l+o,$=Math.cos(G),X=Math.sin(G);T.x=S*X,T.y=m*b,T.z=S*$,f.push(T.x,T.y,T.z),d.push(0,b,0),M.x=$*.5+.5,M.y=X*.5*b+.5,p.push(M.x,M.y),_++}for(let B=0;B<s;B++){const O=C+B,G=L+B;g===!0?u.push(G,G+1,O):u.push(G+1,G,O),R+=3}c.addGroup(h,R,g===!0?1:2),h+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jn extends Re{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new jn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class br extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new P,g=new P,C=new P;for(let M=0;M<e.length;M+=3)p(e[M+0],y),p(e[M+1],g),p(e[M+2],C),l(y,g,C,x)}function l(x,y,g,C){const M=C+1,T=[];for(let R=0;R<=M;R++){T[R]=[];const S=x.clone().lerp(g,R/M),b=y.clone().lerp(g,R/M),L=M-R;for(let B=0;B<=L;B++)B===0&&R===M?T[R][B]=S:T[R][B]=S.clone().lerp(b,B/L)}for(let R=0;R<M;R++)for(let S=0;S<2*(M-R)-1;S++){const b=Math.floor(S/2);S%2===0?(d(T[R][b+1]),d(T[R+1][b]),d(T[R][b])):(d(T[R][b+1]),d(T[R+1][b+1]),d(T[R+1][b]))}}function c(x){const y=new P;for(let g=0;g<r.length;g+=3)y.x=r[g+0],y.y=r[g+1],y.z=r[g+2],y.normalize().multiplyScalar(x),r[g+0]=y.x,r[g+1]=y.y,r[g+2]=y.z}function u(){const x=new P;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const g=m(x)/2/Math.PI+.5,C=h(x)/Math.PI+.5;a.push(g,1-C)}_(),f()}function f(){for(let x=0;x<a.length;x+=6){const y=a[x+0],g=a[x+2],C=a[x+4],M=Math.max(y,g,C),T=Math.min(y,g,C);M>.9&&T<.1&&(y<.2&&(a[x+0]+=1),g<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,y){const g=x*3;y.x=t[g+0],y.y=t[g+1],y.z=t[g+2]}function _(){const x=new P,y=new P,g=new P,C=new P,M=new tt,T=new tt,R=new tt;for(let S=0,b=0;S<r.length;S+=9,b+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),g.set(r[S+6],r[S+7],r[S+8]),M.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),C.copy(x).add(y).add(g).divideScalar(3);const L=m(C);v(M,b+0,x,L),v(T,b+2,y,L),v(R,b+4,g,L)}}function v(x,y,g,C){C<0&&x.x===1&&(a[y]=x.x-1),g.x===0&&g.z===0&&(a[y]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.vertices,t.indices,t.radius,t.details)}}const er=new P,nr=new P,da=new P,ir=new Xe;class Lm extends de{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(cr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:m,c:h}=ir;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),ir.getNormal(da),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const y=(x+1)%3,g=f[x],C=f[y],M=ir[u[x]],T=ir[u[y]],R=`${g}_${C}`,S=`${C}_${g}`;S in d&&d[S]?(da.dot(d[S].normal)<=r&&(p.push(M.x,M.y,M.z),p.push(T.x,T.y,T.z)),d[S]=null):R in d||(d[R]={index0:c[x],index1:c[y],normal:da.clone()})}}for(const _ in d)if(d[_]){const{index0:v,index1:m}=d[_];er.fromBufferAttribute(o,v),nr.fromBufferAttribute(o,m),p.push(er.x,er.y,er.z),p.push(nr.x,nr.y,nr.z)}this.setAttribute("position",new Yt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class _r extends br{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _r(t.radius,t.detail)}}class Ro extends br{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ro(t.radius,t.detail)}}class Po extends de{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=t;const d=(e-t)/s,p=new P,_=new tt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const h=r+m/n*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}f+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let h=0;h<n;h++){const x=h+m,y=x,g=x+n+1,C=x+n+2,M=x+1;o.push(y,g,M),o.push(g,C,M)}}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Pe extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new P,d=new P,p=[],_=[],v=[],m=[];for(let h=0;h<=n;h++){const x=[],y=h/n;let g=0;h===0&&a===0?g=.5/e:h===n&&l===Math.PI&&(g=-.5/e);for(let C=0;C<=e;C++){const M=C/e;f.x=-t*Math.cos(s+M*r)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(s+M*r)*Math.sin(a+y*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(M+g,1-y),x.push(c++)}u.push(x)}for(let h=0;h<n;h++)for(let x=0;x<e;x++){const y=u[h][x+1],g=u[h][x],C=u[h+1][x],M=u[h+1][x+1];(h!==0||a>0)&&p.push(y,g,M),(h!==n-1||l<Math.PI)&&p.push(g,C,M)}this.setIndex(p),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dn extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new P,f=new P,d=new P;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const v=_/s*r,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const v=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,h=(s+1)*(p-1)+_,x=(s+1)*p+_;a.push(v,m,x),a.push(m,h,x)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Im extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Oe extends Yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sr extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Dm extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pa=new te,tc=new P,ec=new P;class ah{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nc=new te,ps=new P,ma=new P;class Um extends ah{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(ps),ma.copy(n.position),ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ma),n.updateMatrixWorld(),s.makeTranslation(-ps.x,-ps.y,-ps.z),nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc)}}class oh extends Sr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Um}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Nm extends ah{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fm extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Nm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lh extends Sr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Om{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ic(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ic();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ic(){return performance.now()}const sc=new te;class Bm{constructor(t,e,n=0,s=1/0){this.ray=new yr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(t,e=!0,n=[]){return co(t,this,n,e),n.sort(rc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)co(t[s],this,n,e);return n.sort(rc),n}}function rc(i,t){return i.distance-t.distance}function co(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)co(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);const ch={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zm=new bo(-1,1,1,-1,0,1);class km extends de{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const Hm=new km;class Lo{constructor(t){this._mesh=new Q(Hm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class hh extends is{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ji.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Lo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ac extends is{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Vm extends is{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Gm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hh(ch),this.copyPass.material.blending=Rn,this.clock=new Om}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ac!==void 0&&(a instanceof ac?n=!0:a instanceof Vm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wm extends is{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Xm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ki extends is{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(r,a,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new $e(r,a,{type:an});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new $e(r,a,{type:an});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=Xm;this.highPassUniforms=ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ch;this.copyUniforms=ji.clone(u.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ln,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new ue,this.fsQuad=new Lo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ki.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ki.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ki.BlurDirectionX=new tt(1,0);Ki.BlurDirectionY=new tt(0,1);const $m={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qm extends is{constructor(){super();const t=$m;this.uniforms=ji.clone(t.uniforms),this.material=new Im({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Lo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ym={uniforms:{tDiffuse:{value:null},uTime:{value:0},uMem:{value:0},uGlitch:{value:0},uFade:{value:0},uRes:{value:new tt(1,1)},uWet:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`};class jm{constructor(t,e,n){this.renderer=t;const s=t.getSize(new tt),r=new $e(s.x,s.y,{type:an,samples:0});this.composer=new Gm(t,r),this.renderPass=new Wm(e,n),this.bloom=new Ki(s.clone().multiplyScalar(.5),.6,.5,.9),this.final=new hh(Ym),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.final),this.composer.addPass(new qm)}composer;renderPass;bloom;final;get u(){return this.final.uniforms}setScene(t){this.renderPass.scene=t}resize(t,e,n){this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.u.uRes.value.set(t*n,e*n)}render(t){this.u.uTime.value+=t,this.composer.render(t)}}class Km{ctx;master;musicG;sfxG;ambG;rainG;humG;barG;roomF;dripT=0;started=!1;noiseBuf;chordI=0;nextChord=0;nextBell=0;nextKick=0;nextSiren=20;vol={master:.8,music:.6,sfx:.8};amb={rain:0,hum:0,bar:0,indoor:0,drip:0,mem:0,siren:!1};delay;start(){if(this.started){this.ctx.state==="suspended"&&this.ctx.resume();return}this.started=!0;const t=window.AudioContext||window.webkitAudioContext,e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination),this.musicG=e.createGain(),this.sfxG=e.createGain(),this.ambG=e.createGain(),this.roomF=e.createBiquadFilter(),this.roomF.type="lowpass",this.roomF.frequency.value=18e3,this.ambG.connect(this.roomF),this.roomF.connect(this.master),this.sfxG.connect(this.master),this.delay=e.createDelay(1.5),this.delay.delayTime.value=.46;const n=e.createGain();n.gain.value=.42;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=1800,this.delay.connect(s),s.connect(n),n.connect(this.delay),s.connect(this.musicG),this.musicG.connect(this.master);const r=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,r,e.sampleRate);const a=this.noiseBuf.getChannelData(0);let o=0;for(let _=0;_<r;_++){const v=Math.random()*2-1;o=(o+.02*v)/1.02,a[_]=v*.6+o*3}const l=e.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0;const c=e.createBiquadFilter();c.type="highpass",c.frequency.value=1400;const u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=9e3,this.rainG=e.createGain(),this.rainG.gain.value=0,l.connect(c),c.connect(u),u.connect(this.rainG),this.rainG.connect(this.ambG),l.start();const f=e.createBufferSource();f.buffer=this.noiseBuf,f.loop=!0,f.playbackRate.value=.5;const d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=260,this.humG=e.createGain(),this.humG.gain.value=0,f.connect(d),d.connect(this.humG),this.humG.connect(this.ambG),f.start();for(const _ of[55,55.4,82.6]){const v=e.createOscillator();v.type="sawtooth",v.frequency.value=_;const m=e.createGain();m.gain.value=.05;const h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=140,v.connect(h),h.connect(m),m.connect(this.humG),v.start()}this.barG=e.createGain(),this.barG.gain.value=0;const p=e.createBiquadFilter();p.type="lowpass",p.frequency.value=220,this.barG.connect(p),p.connect(this.ambG),this.applyVol()}applyVol(){this.started&&(this.master.gain.value=this.vol.master,this.musicG.gain.value=this.vol.music*.55,this.sfxG.gain.value=this.vol.sfx,this.ambG.gain.value=this.vol.sfx*.9)}tone(t,e,n,s,r,a=0,o,l=.005){const c=this.ctx,u=c.currentTime+a,f=c.createOscillator(),d=c.createGain();f.type=n,f.frequency.setValueAtTime(t,u),o&&f.frequency.exponentialRampToValueAtTime(o,u+e),d.gain.setValueAtTime(1e-4,u),d.gain.linearRampToValueAtTime(s,u+l),d.gain.exponentialRampToValueAtTime(1e-4,u+e),f.connect(d),d.connect(r),f.start(u),f.stop(u+e+.05)}noise(t,e,n,s=1,r="bandpass",a,o=0){const l=this.ctx,c=l.currentTime+o,u=l.createBufferSource();u.buffer=this.noiseBuf,u.playbackRate.value=.8+Math.random()*.4;const f=l.createBiquadFilter();f.type=r,f.frequency.setValueAtTime(n,c),f.Q.value=s,a&&f.frequency.exponentialRampToValueAtTime(a,c+t);const d=l.createGain();d.gain.setValueAtTime(e,c),d.gain.exponentialRampToValueAtTime(1e-4,c+t),u.connect(f),f.connect(d),d.connect(this.sfxG),u.start(c,Math.random()),u.stop(c+t+.05)}sfx(t,e=1){if(!this.started)return;const n=this.sfxG;switch(t){case"click":this.tone(880,.05,"square",.05,n);break;case"hover":this.tone(1320,.025,"sine",.03,n);break;case"open":this.tone(440,.12,"triangle",.08,n,0,880);break;case"close":this.tone(660,.1,"triangle",.07,n,0,330);break;case"pickup":this.tone(660,.09,"triangle",.12,n),this.tone(990,.16,"triangle",.12,n,.08);break;case"clue":this.tone(523,.14,"sine",.13,n),this.tone(784,.14,"sine",.13,n,.1),this.tone(1046,.3,"sine",.12,n,.2);break;case"deduce":for(let s=0;s<4;s++)this.tone([392,494,587,784][s],.5,"triangle",.09,this.delay,s*.09);break;case"error":this.tone(160,.22,"sawtooth",.1,n,0,90);break;case"ok":this.tone(520,.08,"square",.06,n),this.tone(780,.14,"square",.06,n,.07);break;case"door":this.noise(.5,.25,600,2,"bandpass",2400),this.tone(90,.3,"sine",.12,n,0,50);break;case"locked":this.tone(140,.08,"square",.09,n),this.tone(120,.1,"square",.09,n,.1);break;case"step":this.noise(.09,.1*e,300+Math.random()*200,1.2,"bandpass"),this.noise(.05,.03*e,3e3,1,"highpass");break;case"stepIn":this.noise(.08,.09*e,180+Math.random()*80,2,"bandpass");break;case"blip":this.tone(e,.03,"square",.018,n);break;case"dive":this.noise(1.8,.3,200,3,"bandpass",6e3),this.tone(60,1.8,"sawtooth",.12,n,0,900);break;case"surface":this.noise(1.2,.3,5e3,3,"bandpass",200),this.tone(700,1.2,"sine",.1,n,0,60);break;case"anomaly":this.tone(1200,.08,"sawtooth",.07,n,0,300),this.tone(300,.25,"sawtooth",.07,n,.08,1500);break;case"hack":this.tone(300+Math.random()*900,.04,"square",.04,n);break;case"coin":this.tone(1400,.06,"square",.05,n),this.tone(1900,.12,"square",.05,n,.06);break;case"travel":this.noise(2.2,.3,120,1,"lowpass",900),this.tone(50,2,"sine",.2,n,0,110);break;case"sting":for(const s of[110,164.8,207.6])this.tone(s,3.5,"sawtooth",.06,this.delay,0,void 0,.6);break}}update(t){if(!this.started)return;const e=this.ctx,n=this.amb,s=e.currentTime,r=1-Math.exp(-t*3),a=(o,l)=>{o.value+=(l-o.value)*r};if(a(this.rainG.gain,n.rain*(n.indoor>.5?.1:.34)*(1-n.mem)),a(this.humG.gain,n.hum*.5*(1-n.mem*.6)),a(this.barG.gain,n.bar),a(this.roomF.frequency,n.mem>.5?700:n.indoor>.5?1500:18e3),s>this.nextChord){const o=n.mem>.5?[[98,146.8,233.1,277.2],[92.5,138.6,220,293.7]]:[[110,164.8,261.6,329.6],[87.3,130.8,220,329.6],[73.4,146.8,220,349.2],[82.4,123.5,196,293.7]],l=o[this.chordI++%o.length];for(const c of l)this.tone(c,9,"triangle",.035,this.delay,0,void 0,3),this.tone(c*2.003,9,"sine",.014,this.delay,0,void 0,4);this.tone(l[0]/2,9,"sine",.07,this.musicG,0,void 0,2.5),this.nextChord=s+8}if(s>this.nextBell){const o=[440,523.3,587.3,659.3,784,880,1046.5],l=o[Math.random()*o.length|0]*(n.mem>.5?.5:1);this.tone(l,2.2,"sine",.035,this.delay),this.nextBell=s+2+Math.random()*6}if(n.bar>.01&&s>this.nextKick){const o=e.createOscillator(),l=e.createGain();o.frequency.setValueAtTime(120,s),o.frequency.exponentialRampToValueAtTime(42,s+.18),l.gain.setValueAtTime(.9,s),l.gain.exponentialRampToValueAtTime(.001,s+.3),o.connect(l),l.connect(this.barG),o.start(s),o.stop(s+.32),this.nextKick=s+.5}if(n.drip>0&&(this.dripT-=t,this.dripT<0&&(this.dripT=.6+Math.random()*3,this.tone(1500+Math.random()*900,.07,"sine",.04*n.drip,this.delay,0,500))),n.siren&&s>this.nextSiren){for(let o=0;o<5;o++)this.tone(620,.5,"sine",.012,this.delay,o*1,820),this.tone(820,.5,"sine",.012,this.delay,o*1+.5,620);this.nextSiren=s+35+Math.random()*50}}}function Kn(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}function qn(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function pi(i,t=!1){const e=new th(i);return e.colorSpace=ze,e.anisotropy=8,t&&(e.wrapS=e.wrapT=ur),e}const ga=new Map;function Zn(i,t){return ga.has(i)||ga.set(i,t()),ga.get(i)}const uh='"Exo 2", "Segoe UI", sans-serif',fh='"Russo One", "Exo 2", sans-serif',oc='"JetBrains Mono", monospace';function wn(i,t,e,n,s,r,a=2){for(let o=0;o<e;o+=a)for(let l=0;l<t;l+=a){const c=(r()-.5)*s;i.fillStyle=`rgb(${n[0]+c|0},${n[1]+c|0},${n[2]+c|0})`,i.fillRect(l,o,a,a)}}function Zm(i){return Zn("surf:"+i,()=>{const[t,e]=qn(256,256),n=Kn(i.length*977+i.charCodeAt(0));if(i==="concrete"){wn(e,256,256,[128,130,136],26,n);for(let s=0;s<30;s++)e.fillStyle=`rgba(0,0,0,${n()*.12})`,e.fillRect(n()*256,0,2+n()*10,256);e.strokeStyle="rgba(0,0,0,.35)",e.lineWidth=2,e.strokeRect(0,0,256,128),e.strokeRect(0,128,256,128)}else if(i==="metal"){wn(e,256,256,[120,126,136],14,n);for(let s=0;s<256;s+=2)e.fillStyle=`rgba(255,255,255,${n()*.04})`,e.fillRect(0,s,256,1);e.strokeStyle="rgba(0,0,0,.5)",e.lineWidth=3,e.strokeRect(1,1,254,254),e.fillStyle="rgba(20,20,24,.9)";for(const[s,r]of[[10,10],[246,10],[10,246],[246,246]])e.beginPath(),e.arc(s,r,3,0,7),e.fill()}else if(i==="tile"){wn(e,256,256,[160,170,180],10,n),e.strokeStyle="rgba(10,12,16,.8)",e.lineWidth=2;for(let s=0;s<=4;s++)e.beginPath(),e.moveTo(s*64,0),e.lineTo(s*64,256),e.moveTo(0,s*64),e.lineTo(256,s*64),e.stroke()}else if(i==="wood"){wn(e,256,256,[128,92,66],10,n);for(let s=0;s<256;s+=3)e.fillStyle=`rgba(0,0,0,${n()*.18})`,e.fillRect(0,s,256,1+n()*2);e.strokeStyle="rgba(0,0,0,.55)";for(let s=0;s<4;s++)e.beginPath(),e.moveTo(s*64,0),e.lineTo(s*64,256),e.stroke()}else if(i==="panel")wn(e,256,256,[118,124,136],8,n),e.strokeStyle="rgba(0,0,0,.6)",e.lineWidth=3,e.strokeRect(0,0,128,256),e.strokeRect(128,0,128,256),e.fillStyle="rgba(120,200,255,.10)",e.fillRect(8,120,112,3),e.fillRect(136,120,112,3);else if(i==="grime"){wn(e,256,256,[112,104,98],30,n);for(let s=0;s<60;s++)e.fillStyle=`rgba(${20+n()*30},${14+n()*20},10,${n()*.25})`,e.beginPath(),e.arc(n()*256,n()*256,4+n()*26,0,7),e.fill();for(let s=0;s<18;s++)e.fillStyle=`rgba(0,0,0,${n()*.25})`,e.fillRect(n()*256,0,1+n()*4,256)}else if(i==="carpet")wn(e,256,256,[96,54,70],16,n,1);else{wn(e,256,256,[190,198,206],6,n),e.strokeStyle="rgba(40,60,80,.5)",e.lineWidth=1;for(let s=0;s<=2;s++)e.beginPath(),e.moveTo(s*128,0),e.lineTo(s*128,256),e.moveTo(0,s*128),e.lineTo(256,s*128),e.stroke()}return pi(t,!0)})}function _t(i,t={}){const e=`mat:${i}:${t.color}:${t.rough}:${t.metal}:${t.rep}`;return Zn(e,()=>{let n=Zm(i);t.rep&&(n=n.clone(),n.repeat.set(t.rep[0],t.rep[1]),n.needsUpdate=!0);const s={concrete:[.85,.05],metal:[.45,.8],tile:[.25,.2],wood:[.6,.05],panel:[.5,.6],grime:[.9,.05],carpet:[.95,0],labfloor:[.2,.3]},[r,a]=s[i];return new Oe({map:n,color:t.color??16777215,roughness:t.rough??r,metalness:t.metal??a})})}function W(i,t=.7,e=.1,n=0,s=1){return Zn(`flat:${i}:${t}:${e}:${n}:${s}`,()=>new Oe({color:i,roughness:t,metalness:e,emissive:n,emissiveIntensity:s}))}function rt(i,t=2.2){return Zn(`glow:${i}:${t}`,()=>{const e=new ue({color:i});return e.color.multiplyScalar(t),e})}function Tn(i=8960989,t=.22){return Zn(`glass:${i}:${t}`,()=>new Oe({color:i,roughness:.05,metalness:.9,transparent:!0,opacity:t,depthWrite:!1,side:_e}))}function Er(i,t,e,n="warm",s=.35){const[r,a]=qn(512,1024),[o,l]=qn(512,1024),c=Kn(i*7919+13);wn(a,512,1024,n==="corp"?[52,60,74]:n==="slum"?[70,62,56]:[58,62,76],10,c,4),l.fillStyle="#000",l.fillRect(0,0,512,1024);const f=512/t,d=1024/e,p={warm:["#ffcf8a","#ffb060","#9fd8ff","#ff7ab0","#ffe6b8"],cold:["#9fd8ff","#6fb6ff","#c8f0ff","#b08cff","#ffcf8a"],corp:["#bfe9ff","#dff6ff","#8fd0ff"],slum:["#ffb060","#ff8a50","#a8ff9a","#ff5a7a","#ffd9a0"]}[n];for(let x=0;x<e;x++){a.fillStyle="rgba(0,0,0,.35)",a.fillRect(0,x*d,512,3);for(let y=0;y<t;y++){const g=y*f+f*.18,C=x*d+d*.24,M=f*.64,T=d*.5;if(a.fillStyle="#07090d",a.fillRect(g,C,M,T),a.strokeStyle="rgba(120,130,150,.25)",a.strokeRect(g,C,M,T),c()<s){const R=p[c()*p.length|0],S=.35+c()*.65;if(l.globalAlpha=S,l.fillStyle=R,l.fillRect(g,C,M,T),l.globalAlpha=1,l.fillStyle="rgba(0,0,0,.55)",c()<.5)for(let b=0;b<T;b+=3)l.fillRect(g,C+b,M,1);c()<.3&&l.fillRect(g+M*c()*.6,C+T*.35,M*.25,T*.65),c()<.25&&l.fillRect(g,C,M*(.3+c()*.4),T),a.fillStyle=R,a.globalAlpha=.25,a.fillRect(g,C,M,T),a.globalAlpha=1}}}if(n==="corp"){l.fillStyle="#7fd4ff";for(let x=0;x<t;x+=3)l.fillRect(x*f,0,2.5,1024)}const _=pi(r),v=pi(o),m=new Oe({map:_,emissiveMap:v,emissive:16777215,emissiveIntensity:1.05,roughness:.6,metalness:.35}),h=W(789777,.9,.1);return[m,m,h,h,m,m]}function Jm(i,t,e={}){const n=`sign:${i}:${t}:${JSON.stringify(e)}`;return Zn(n,()=>{const s=e.font??fh,r=96,[a,o]=qn(8,8);o.font=`${e.weight??400} ${r}px ${s}`;const l=e.vertical?i.split(""):i.split(`
`);let c=0;for(const h of l)c=Math.max(c,o.measureText(h).width);const u=r*1.15,f=46,d=Math.ceil(c+f*2),p=Math.ceil(l.length*u+f*2+(e.sub?44:0)),[_,v]=qn(d,p);e.bg&&(v.fillStyle=e.bg,v.fillRect(0,0,d,p)),v.font=`${e.weight??400} ${r}px ${s}`,v.textAlign="center",v.textBaseline="middle";for(let h=0;h<3;h++)v.shadowColor=t,v.shadowBlur=[40,18,0][h],v.fillStyle=h===2?"#ffffff":t,v.globalAlpha=h===2?.75:1,l.forEach((x,y)=>v.fillText(x,d/2,f+u*(y+.5)));v.globalAlpha=1,e.sub&&(v.shadowBlur=10,v.font=`600 30px ${uh}`,v.fillStyle=t,v.fillText(e.sub,d/2,p-f*.9)),e.border&&(v.shadowBlur=22,v.strokeStyle=t,v.lineWidth=6,v.strokeRect(14,14,d-28,p-28));const m=pi(_);return m.aspect=d/p,m})}function Io(i,t,e,n={}){const s=Jm(i,t,n),r=new ue({map:s,transparent:!n.bg,side:_e,depthWrite:!!n.bg});r.color.setScalar(n.k??1.45);const a=new Q(new Ie(e*s.aspect,e),r);return a.userData.neon=!0,a}function Qm(i,t="#6ff0ff",e="#03101a",n){const[s,r]=qn(512,320);r.fillStyle=e,r.fillRect(0,0,512,320),r.fillStyle=t,r.globalAlpha=.08;for(let o=0;o<320;o+=4)r.fillRect(0,o,512,1);r.globalAlpha=1,r.shadowColor=t,r.shadowBlur=8,r.fillStyle=t;let a=34;n&&(r.font=`700 26px ${oc}`,r.fillText(n,20,a),a+=16,r.fillRect(20,a,472,2),a+=30),r.font=`400 20px ${oc}`;for(const o of i)r.fillText(o,20,a),a+=27;return pi(s)}function dh(i,t,e,n="#6ff0ff",s,r){const a=new ue({map:Qm(e,n,r,s)});return a.color.setScalar(1.5),new Q(new Ie(i,t),a)}function tg(i,t,e,n,s){return Zn(`bb:${i}:${t}`,()=>{const[r,a]=qn(512,768),o=Kn(i),l=a.createLinearGradient(0,0,512,768);l.addColorStop(0,n),l.addColorStop(1,s),a.fillStyle="#04050a",a.fillRect(0,0,512,768),a.globalAlpha=.5,a.fillStyle=l,a.fillRect(0,0,512,768),a.globalAlpha=1,a.strokeStyle=n,a.lineWidth=3,a.shadowColor=n,a.shadowBlur=20;const c=256,u=300;for(let d=0;d<9;d++)a.globalAlpha=.2+d*.08,a.beginPath(),a.ellipse(c,u,190-d*20,110-d*11,0,0,7),a.stroke();a.globalAlpha=1,a.fillStyle="#fff",a.beginPath(),a.arc(c,u,26,0,7),a.fill();for(let d=0;d<70;d++)a.fillStyle=o()<.5?n:s,a.globalAlpha=o()*.6,a.fillRect(o()*512,o()*768,2+o()*50,2);a.globalAlpha=1,a.textAlign="center",a.fillStyle="#fff",a.shadowColor=s,a.shadowBlur=26,a.font=`400 62px ${fh}`;const f=t.split(`
`);f.forEach((d,p)=>a.fillText(d,256,540+p*66)),a.font=`600 26px ${uh}`,a.fillStyle=n,a.fillText(e,256,540+f.length*66+6),a.fillStyle="rgba(0,0,0,.25)";for(let d=0;d<768;d+=4)a.fillRect(0,d,512,1);return pi(r)})}function wr(){return Zn("soft",()=>{const[i,t]=qn(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),pi(i)})}function ho(i,t,e=.55){const n=new ue({map:wr(),color:i,transparent:!0,blending:Ln,depthWrite:!1,opacity:e}),s=new Q(new Ie(t*2,t*2),n);return s.rotation.x=-Math.PI/2,s.renderOrder=2,s}function Do(i,t,e,n=.07){const s=new ue({color:i,transparent:!0,opacity:n,blending:Ln,depthWrite:!1,side:_e,fog:!1}),r=new Re(.08,t,e,20,1,!0),a=new Q(r,s);return a.renderOrder=3,a}function mi(i){const t=new he,e=i.ghost?new ue({color:i.coat,transparent:!0,opacity:.55,wireframe:!1}):null,n=(S,b=.8,L=.05)=>e??new Oe({color:S,roughness:b,metalness:L}),s=n(i.coat,.75,.1),r=n(i.pants??1381915),a=n(i.skin??13214084,.6),o=n(i.hair??1709330,.5,.2),l=i.build??1,c=(S,b,L,B,O,G=t)=>{const $=new Q(S,b);return $.position.set(L,B,O),G.add($),$},u=S=>{const b=new he;return b.position.set(S*.095*l,.9,0),t.add(b),c(new ui(.078*l,.68,4,10),r,0,-.42,0,b),c(new Et(.13*l,.1,.28),n(723726,.5,.3),0,-.85,.04,b),b},f=u(-1),d=u(1),p=new he;p.position.y=1.18,t.add(p),c(new ui(.17,.4,6,14),s,0,0,0,p).scale.set(1.18*l,1,.78*l);const v=i.coatLen??.6;if(v>.1){const S=c(new Re(.2*l,(.2+v*.07)*l,.5+v*.7,14,1,!0),s,0,.12-(.5+v*.7)/2+.2,0,p);S.scale.z=.74,S.material.side=_e;const b=c(new Re(.1,.16,.12,12,1,!0),s,0,.33,0,p);b.scale.z=.85}const m=S=>{const b=new he;return b.position.set(S*.235*l,.22,0),p.add(b),c(new Pe(.072*l,10,8),s,0,0,0,b),c(new ui(.058*l,.5,4,8),s,0,-.3,0,b),c(new Pe(.05,8,6),a,0,-.62,0,b),b.rotation.z=S*.08,b},h=m(-1),x=m(1);c(new Re(.05,.06,.1,8),a,0,.36,0,p);const y=new he;y.position.y=1.18+.5,t.add(y),c(new Pe(.115,18,14),a,0,0,0,y).scale.set(.9,1.1,.98),c(new Et(.03,.045,.035),a,0,-.01,.11,y);const C=i.accent??6742271,M=new ue({color:C});M.color.multiplyScalar(i.ghost?1:1.6);const T=i.extra??[];if(T.includes("visor"))c(new Et(.2,.035,.06),M,0,.025,.085,y);else{const S=new ue({color:657930});c(new Et(.03,.012,.01),S,-.04,.03,.105,y),c(new Et(.03,.012,.01),S,.04,.03,.105,y),c(new Et(.008,.035,.03),M,.1,.02,.02,y)}if(T.includes("glasses")){const S=n(1118481,.2,.9);c(new Et(.2,.04,.012),S,0,.03,.112,y)}const R=i.hairStyle??"short";if(R==="short"||R==="long"||R==="bun")c(new Pe(.122,16,10,0,Math.PI*2,0,Math.PI*.52),o,0,.012,-.012,y).scale.set(.95,1.12,1.04),R==="long"&&c(new ui(.1,.22,4,10),o,0,-.1,-.05,y).scale.set(1.05,1,.6),R==="bun"&&c(new Pe(.055,10,8),o,0,.1,-.1,y);else if(R==="hood"){const S=c(new Pe(.15,16,12,0,Math.PI*2,0,Math.PI*.7),s,0,0,-.02,y);S.scale.set(1,1.15,1.1),S.material.side=_e}else R==="hat"?(c(new Re(.2,.2,.015,20),n(1184276,.6),0,.085,0,y),c(new Re(.11,.125,.11,16),n(1184276,.6),0,.14,0,y)):R==="mohawk"&&c(new Et(.03,.09,.2),M,0,.13,-.01,y);if(T.includes("scarf")){const S=c(new dn(.1,.04,8,14),n(C,.9),0,.33,0,p);S.rotation.x=Math.PI/2}if(T.includes("tie")&&c(new Et(.04,.26,.01),M,0,.12,.14*l,p),T.includes("apron")&&c(new Et(.34*l,.6,.02),n(9080726,.5,.2),0,-.2,.15*l,p),T.includes("armor")&&(c(new Et(.4*l,.34,.3*l),n(2237998,.35,.8),0,.08,0,p),c(new Et(.16,.03,.01),M,0,.14,.152*l,p)),T.includes("cane")&&c(new Re(.012,.012,.9,6),n(3355443,.3,.8),.3,.45,.12),T.includes("umbrella")){c(new Re(.01,.01,1,6),n(2236962),.26,1.5,.12);const S=c(new jn(.62,.22,10,1,!0),n(855314,.4,.3),.26,2.05,.12);S.material.side=_e,x.rotation.x=-1.1}if(!i.ghost){const S=new Q(new di(.42,16),new ue({color:0,transparent:!0,opacity:.45,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.position.y=.035,t.add(S)}return t.scale.setScalar(i.height??1),{group:t,head:y,armL:h,armR:x,legL:f,legR:d,torso:p}}class Tr extends Q{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new ke;const n=this,s=e.color!==void 0?new Tt(e.color):new Tt(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||Tr.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new Hn,f=new P,d=new P,p=new P,_=new te,v=new P(0,0,-1),m=new Kt,h=new P,x=new P,y=new Kt,g=new te,C=this.camera,M=new $e(r,a,{samples:c,type:an}),T=new xe({name:l.name!==void 0?l.name:"unspecified",uniforms:ji.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=M.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=g,this.material=T,this.onBeforeRender=function(R,S,b){if(d.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(b.matrixWorld),_.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(_),h.subVectors(d,p),h.dot(f)>0)return;h.reflect(f).negate(),h.add(d),_.extractRotation(b.matrixWorld),v.set(0,0,-1),v.applyMatrix4(_),v.add(p),x.subVectors(d,v),x.reflect(f).negate(),x.add(d),C.position.copy(h),C.up.set(0,1,0),C.up.applyMatrix4(_),C.up.reflect(f),C.lookAt(x),C.far=b.far,C.updateMatrixWorld(),C.projectionMatrix.copy(b.projectionMatrix),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(C.projectionMatrix),g.multiply(C.matrixWorldInverse),g.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const L=C.projectionMatrix;y.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],y.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],y.z=-1,y.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(y)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-o,L.elements[14]=m.w,n.visible=!1;const B=R.getRenderTarget(),O=R.xr.enabled,G=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(M),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(S,C),R.xr.enabled=O,R.shadowMap.autoUpdate=G,R.setRenderTarget(B);const $=b.viewport;$!==void 0&&R.state.viewport($),n.visible=!0},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()}}}Tr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const ph=`
float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*vnoise(p); p*=2.03; a*=0.5; } return s; }
`;function Ar(i,t,e){const n=i.size??200,s=new Ie(n,n),r=new Tt(i.base??723984);if(!t){const c=new Oe({color:r.clone().multiplyScalar(2.2),roughness:.22,metalness:.65}),u=new Q(s,c);return u.rotation.x=-Math.PI/2,u}const a={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uBase:{value:r},uPuddle:{value:i.puddle??.5},uTiles:{value:i.tiles??0},uReflect:{value:i.reflect??1},uFogColor:{value:e.color},uFogDensity:{value:e.density},uRain:{value:i.rain??1}},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW;
      void main(){ vUv=textureMatrix*vec4(position,1.0); vec4 wp=modelMatrix*vec4(position,1.0); vW=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }`,fragmentShader:`
      uniform sampler2D tDiffuse; uniform float uTime,uPuddle,uTiles,uReflect,uFogDensity,uRain; uniform vec3 uBase,uFogColor;
      varying vec4 vUv; varying vec3 vW;
      ${ph}
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
      }`},o=i.quality??.6,l=new Tr(s,{clipBias:.003,textureWidth:Math.floor(innerWidth*o),textureHeight:Math.floor(innerHeight*o),color:8947848,shader:a});return l.rotation.x=-Math.PI/2,l.isWetGround=!0,l}class eg{mesh;mat;constructor(t=5e3,e=[]){const n=new Float32Array(t*6),s=new Float32Array(t*2),r=Kn(4242);for(let c=0;c<t;c++){const u=r(),f=r(),d=r();n.set([u,f,d,u,f,d],c*6),s[c*2]=0,s[c*2+1]=1}const a=new de;a.setAttribute("position",new Le(n,3)),a.setAttribute("aEnd",new Le(s,1)),a.boundingSphere=new es(new P,1e6);const o=[],l=[];for(let c=0;c<8;c++){const u=e[c];o.push(u?new Kt(u.minX,u.maxX,u.minZ,u.maxZ):new Kt(1e6,1e6,1e6,1e6)),l.push(u?new tt(u.minY,u.maxY):new tt(0,0))}this.mat=new xe({transparent:!0,depthWrite:!1,blending:Ln,uniforms:{uTime:{value:0},uCam:{value:new P},uBox:{value:o},uBoxY:{value:l},uAmt:{value:1}},vertexShader:`attribute float aEnd; uniform float uTime,uAmt; uniform vec3 uCam; uniform vec4 uBox[8]; uniform vec2 uBoxY[8]; varying float vA;
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
        }`,fragmentShader:"varying float vA; void main(){ gl_FragColor=vec4(0.72,0.82,1.0,vA); }"}),this.mesh=new Jc(a,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}update(t,e){this.mat.uniforms.uTime.value+=t,this.mat.uniforms.uCam.value.copy(e)}}function Uo(i,t,e){const n=new xe({side:Ne,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Tt(i)},uHor:{value:new Tt(t)},uGlow:{value:new Tt(e)},uTime:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop,uHor,uGlow; uniform float uTime; varying vec3 vP; ${ph}
      void main(){ vec3 d=normalize(vP); float h=clamp(d.y,0.0,1.0);
        vec3 c=mix(uHor,uTop,pow(h,0.45));
        float cl=fbm(d.xz/(d.y+0.25)*1.4+uTime*0.01);
        c+=uGlow*cl*cl*(1.0-h)*0.55;
        c+=uGlow*pow(1.0-h,6.0)*0.6;
        gl_FragColor=vec4(c,1.0); }`}),s=new Q(new Pe(480,24,16),n);return s.renderOrder=-10,s.frustumCulled=!1,s}function No(i,t,e=95,n=260,s=70,r=40,a=190){const o=new he,l=Kn(i),c=[];for(let d=0;d<3;d++){const p=document.createElement("canvas");p.width=128,p.height=512;const _=p.getContext("2d");_.fillStyle="#05070c",_.fillRect(0,0,128,512);for(let m=0;m<128;m++)for(let h=0;h<16;h++)l()<.28&&(_.fillStyle=["#ffd9a0","#9fd8ff","#ff9ac0","#c8f0ff"][l()*4|0],_.globalAlpha=.25+l()*.6,_.fillRect(h*8+2,m*4+1,4,2));const v=new th(p);v.colorSpace=ze,c.push(v)}const u=c.map(d=>new ue({map:d,fog:!1,color:t})),f=new ue({color:263434,fog:!1});for(let d=0;d<s;d++){const p=l()*Math.PI*2,_=e+l()*(n-e),v=14+l()*26,m=14+l()*26,h=r+l()*(a-r)*(.4+.6*l()),x=u[l()*3|0],y=new Q(new Et(v,h,m),[x,x,f,f,x,x]);if(y.position.set(Math.cos(p)*_,h/2-2,Math.sin(p)*_),y.rotation.y=l()*.6,o.add(y),l()<.5){const g=new Q(new Pe(.9,6,6),new ue({color:16719920,fog:!1}));g.material.color.multiplyScalar(3),g.position.set(y.position.x,h+1,y.position.z),g.userData.blink=l()*6,o.add(g)}}return o}class ng{constructor(t,e,n,s=10465472,r=7,a=4,o=.6,l=.16){this.height=a,this.spread=o,this.opacity=l,this.group.position.set(t,e,n);for(let c=0;c<r;c++){const u=new Yc({map:wr(),color:s,transparent:!0,opacity:0,depthWrite:!1}),f=new _m(u);this.group.add(f),this.parts.push({s:f,t:c/r,sp:.12+Math.random()*.1})}}group=new he;parts=[];update(t){for(const e of this.parts){e.t+=t*e.sp,e.t>1&&(e.t=0,e.s.position.x=(Math.random()-.5)*this.spread,e.s.position.z=(Math.random()-.5)*this.spread),e.s.position.y=e.t*this.height;const n=.6+e.t*2.6;e.s.scale.set(n,n,1),e.s.material.opacity=Math.sin(e.t*Math.PI)*this.opacity}}}class Ss{constructor(t,e,n,s,r){this.id=t,this.name=e,this.sub=n,this.fog=new Eo(s,r),this.scene.fog=this.fog,this.scene.background=new Tt(s)}scene=new qc;colliders=[];targets=[];solids=[];npcs=[];updaters=[];spawns={};indoor=[];doors=[];fog;rain;ground;amb={rain:0,hum:.6,drip:0,siren:!1,bar:null};isMemory=!1;onEnter;add(t,e,n,s,r){return e!==void 0&&t.position.set(e,n,s),r!==void 0&&(t.rotation.y=r),this.scene.add(t),t}col(t,e,n,s,r=-1,a=300){const o={minX:t,maxX:e,minZ:n,maxZ:s,minY:r,maxY:a,on:!0};return this.colliders.push(o),o}box(t,e,n,s,r,a,o,l=!0){const c=new Q(new Et(t,e,n),o);return c.position.set(s,r+e/2,a),this.scene.add(c),l&&(this.col(s-t/2,s+t/2,a-n/2,a+n/2,r,r+e),this.solids.push(c)),c}cyl(t,e,n,s,r,a,o=!1,l=t){const c=new Q(new Re(l,t,e,14),a);return c.position.set(n,s+e/2,r),this.scene.add(c),o&&(this.col(n-t,n+t,r-t,r+t,s,s+e),this.solids.push(c)),c}sign(t,e,n,s,r,a,o=0,l={}){const c=Io(t,e,n,l);return c.position.set(s,r,a),c.rotation.y=o,this.scene.add(c),c}light(t,e,n,s,r,a){const o=new oh(t,e*1.9,n*1.25,1.5);return o.position.set(s,r,a),this.scene.add(o),o}pool(t,e,n,s,r,a=.5){const o=ho(t,e,a);return o.position.set(n,s,r),this.scene.add(o),o}interact(t,e){return t.userData.interact=e,this.targets.push(t),t}screen(t,e,n,s,r,a,o=0,l="#6ff0ff",c){const u=dh(t,e,n,l,c);return u.position.set(s,r,a),u.rotation.y=o,this.scene.add(u),u}steam(t,e,n,s=10465472,r=7,a=4,o=.6,l=.16){const c=new ng(t,e,n,s,r,a,o,l);return this.scene.add(c.group),this.updaters.push(u=>c.update(u)),c}lamp(t,e,n=16763024,s=6,r=!1,a=0){this.cyl(.07,s,t,a,e,W(1382172,.5,.7),!0),this.box(.9,.08,.25,t,a+s,e,W(1382172,.5,.7),!1);const o=this.box(.7,.05,.18,t,a+s-.05,e,rt(n,3),!1);this.pool(n,5.5,t,a+.04,e,.42);const l=Do(n,2.6,s-.2,.022);return l.position.set(t,a+s/2-.1,e),this.scene.add(l),r&&this.light(n,40,16,t,a+s-.4,e),o}room(t,e,n,s,r,a,o={}){const c=o.wall??_t("concrete"),u=[["n",!0,n,t,e],["s",!0,s,t,e],["w",!1,t,n,s],["e",!1,e,n,s]];for(const[v,m,h,x,y]of u){if(o.skip?.includes(v))continue;const g=(o.doors??[]).filter(T=>T.side===v).sort((T,R)=>T.at-R.at);let C=x-.3/2;const M=(T,R,S,b)=>{if(R-T<.02)return;const L=R-T,B=(T+R)/2;m?this.box(L,b,.3,B,S,h,c):this.box(.3,b,L,h,S,B,c)};for(const T of g){const R=T.w??1.5,S=T.h??2.5;M(C,T.at-R/2,r,a),a>S&&M(T.at-R/2,T.at+R/2,r+S,a-S),C=T.at+R/2}M(C,y+.3/2,r,a)}const f=e-t,d=s-n,p=(t+e)/2,_=(n+s)/2;if(o.floor!==null){const v=this.box(f,.06,d,p,r-.02,_,o.floor??_t("concrete"),!1);this.solids.push(v)}if(o.ceil!==null){const v=this.box(f+.3,.2,d+.3,p,r+a,_,o.ceil??W(1053206,.9),!1);this.solids.push(v)}o.indoor!==!1&&this.indoor.push({minX:t-.2,maxX:e+.2,minZ:n-.2,maxZ:s+.2,minY:r-.5,maxY:r+a+.4,on:!0})}door(t,e,n,s,r=1.5,a={}){const o=a.h??2.5,l=new Oe({color:a.color??2764602,roughness:.35,metalness:.85}),c=new Q(new Et(s==="x"?r:.12,o,s==="x"?.12:r),l);c.position.set(t,e+o/2,n),this.scene.add(c),this.solids.push(c);const u=new Q(new Et(s==="x"?r*.7:.14,.05,s==="x"?.14:r*.7),rt(5627391,1.6));u.position.y=.2,c.add(u);const f=s==="x"?this.col(t-r/2,t+r/2,n-.2,n+.2,e,e+o):this.col(t-.2,t+.2,n-r/2,n+r/2,e,e+o),d={panel:c,col:f,axis:s,w:r,open:0,target:0,base:c.position.clone(),timer:0};return this.doors.push(d),this.interact(c,{label:p=>{const _=a.locked?.(p);return(a.label??"Дверь")+(_?" — заперто":"")},use:p=>{const _=a.locked?.(p);if(_){p.audio.sfx("locked"),a.onLocked?a.onLocked(p):p.notify(_,"warn");return}d.target===0&&(d.target=1,d.timer=6,p.audio.sfx("door"),a.onOpen?.(p))},if:()=>d.open<.5}),d}npc(t,e,n,s,r,a,o,l){const c=mi(e);c.group.position.set(n,s,r),c.group.rotation.y=a,this.scene.add(c.group);const u=new Q(new Et(.7,1.9,.7),new ue({visible:!1}));u.position.y=.95,c.group.add(u);const f={id:t,h:c,pos:new P(n,s,r),yaw:a,cur:a,cond:o,hit:u,phase:Math.random()*10};this.npcs.push(f);const d=this.col(n-.3,n+.3,r-.3,r+.3,s,s+1.9);return f.col=d,this.interact(u,l??{label:p=>"Говорить: "+p.npcName(t),use:p=>p.talk(t),range:3.2}),f}enableRain(t=5e3){this.rain=new eg(t,this.indoor),this.scene.add(this.rain.mesh),this.amb.rain=1}update(t,e,n){for(const r of this.updaters)r(t,e,n);const s=n.player.pos;for(const r of this.doors){r.target===1&&(Math.hypot(s.x-r.base.x,s.z-r.base.z)>2.6||Math.abs(s.y-(r.base.y-1.25))>2?(r.timer-=t,r.timer<=0&&(r.target=0)):r.timer=2.5);const a=r.open;r.open+=Math.sign(r.target-r.open)*Math.min(Math.abs(r.target-r.open),t*2.2),a!==r.open&&(r.axis==="x"?r.panel.position.x=r.base.x+r.open*r.w*.96:r.panel.position.z=r.base.z+r.open*r.w*.96),r.col.on=r.open<.6}for(const r of this.npcs){const a=r.cond?!!r.cond(n):!0;if(r.h.group.visible=a,r.col.on=a,r.hit.userData.disabled=!a,!a)continue;const o=s.x-r.pos.x,l=s.z-r.pos.z,c=Math.hypot(o,l);let u=r.yaw;c<6&&Math.abs(s.y-r.pos.y)<2&&(u=Math.atan2(o,l));let f=u-r.cur;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;r.cur+=f*Math.min(1,t*3),r.h.group.rotation.y=r.cur;const d=e*1.3+r.phase;r.h.torso.scale.y=1+Math.sin(d)*.012,r.h.head.rotation.x=Math.sin(d*.5)*.04,r.h.head.rotation.z=Math.sin(d*.31)*.03,r.h.armL.rotation.x=Math.sin(d*.7)*.05,r.fixedArm||(r.h.armR.rotation.x=-Math.sin(d*.7)*.05),n.dialogueNpc===r.id&&(r.h.head.rotation.x=Math.sin(e*9)*.03,r.h.armR.rotation.x=-.25+Math.sin(e*3)*.15)}this.rain&&this.rain.update(t,n.camera.position),this.ground&&this.ground.material?.uniforms?.uTime&&(this.ground.material.uniforms.uTime.value=e)}isIndoor(t){for(const e of this.indoor)if(t.x>e.minX&&t.x<e.maxX&&t.z>e.minZ&&t.z<e.maxZ&&t.y>e.minY&&t.y<e.maxY)return!0;return!1}dispose(){this.scene.traverse(e=>{e.geometry?.dispose?.()}),this.ground?.dispose?.()}}const Pt={table(i,t,e,n,s=1.6,r=.8,a=_t("wood")){i.box(s,.06,r,t,e+.74,n,a,!1),i.col(t-s/2,t+s/2,n-r/2,n+r/2,e,e+.8);for(const[o,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.box(.06,.74,.06,t+o*(s/2-.08),e,n+l*(r/2-.08),W(1381914,.5,.6),!1)},crate(i,t,e,n,s=.8,r=_t("metal",{color:9075290})){return i.box(s,s,s,t,e,n,r)},barrel(i,t,e,n,s=3820090){return i.cyl(.32,.95,t,e,n,W(s,.6,.5),!0)},terminal(i,t,e,n,s,r,a,o="#6ff0ff"){const l=new he;l.position.set(t,e,n),l.rotation.y=s,i.scene.add(l);const c=new Q(new Et(.9,1.15,.4),_t("metal",{color:4870240}));c.position.y=.575,l.add(c);const u=new Q(new Et(.9,.62,.08),W(790034,.3,.8));u.position.set(0,1.5,-.1),u.rotation.x=-.18,l.add(u);const f=dh(.8,.52,r,o,a);f.position.set(0,1.5,-.05),f.rotation.x=-.18,l.add(f);const d=new Q(new Et(.7,.03,.25),rt(new Tt(o).getHex(),.5));d.position.set(0,1.17,.05),l.add(d),i.col(t-.5,t+.5,n-.5,n+.5,e,e+1.8),i.solids.push(c);const p=new oh(new Tt(o).getHex(),2.5,4,2);return p.position.set(0,1.5,.5),l.add(p),l},item(i,t,e,n,s,r,a,o=!0){const l=new Q(t,e);if(l.position.set(n,s,r),i.scene.add(l),o){const c=new Q(new Po(.1,.125,20),rt(16765040,1.6));c.rotation.x=-Math.PI/2,c.position.y=-0,l.add(c),c.material.side=_e,i.updaters.push((u,f)=>{c.scale.setScalar(1+Math.sin(f*3)*.15),c.lookAt(c.getWorldPosition(new P).add(new P(0,1,0)))})}return i.interact(l,a)},vending(i,t,e,n,s,r,a){const o=new he;o.position.set(t,e,n),o.rotation.y=s,i.scene.add(o);const l=new Q(new Et(1.1,2,.7),W(1316380,.4,.7));l.position.y=1,o.add(l);const c=new Q(new Ie(.9,1.2),rt(r,1.3));c.position.set(0,1.25,.36),o.add(c);const u=Io(a,"#ffffff",.22,{k:1.5});return u.position.set(0,1.3,.37),o.add(u),i.col(t-.6,t+.6,n-.6,n+.6,e,e+2),i.solids.push(l),i.pool(r,2.2,t+Math.sin(s)*1.2,e+.045,n+Math.cos(s)*1.2,.5),o},bench(i,t,e,n,s=!0){const r=s?1.8:.5,a=s?.5:1.8;i.box(r,.08,a,t,e+.42,n,W(2303534,.5,.6),!1),i.box(r*.9,.42,a*.5,t,e,n,W(1382172,.6,.5),!1),i.col(t-r/2,t+r/2,n-a/2,n+a/2,e,e+.5)},pipe(i,t,e,n,s,r,a=.12,o=2895928){const l=Math.hypot(s-t,r-n),c=new Q(new Re(a,a,l,8),W(o,.5,.7));return c.position.set((t+s)/2,e,(n+r)/2),c.rotation.z=Math.PI/2,c.rotation.y=-Math.atan2(r-n,s-t),i.scene.add(c),c},acUnit(i,t,e,n,s=0){const r=new he;r.position.set(t,e,n),r.rotation.y=s,i.scene.add(r);const a=new Q(new Et(1,.7,.45),W(3817030,.6,.5));r.add(a);const o=new Q(new di(.26,12),W(658189,.4,.8));return o.position.z=.23,r.add(o),r}},He={mira:{coat:11540520,coatLen:.95,hair:1313804,hairStyle:"long",accent:16732064,height:.96,skin:14202012},theo:{coat:3820074,coatLen:.4,hairStyle:"hood",accent:5963696,extra:["glasses","scarf"]},orlova:{coat:1844280,coatLen:.9,hair:2759700,hairStyle:"bun",accent:6982399,extra:["tie"]},wong:{coat:5921370,coatLen:0,hairStyle:"bald",extra:["apron"],build:1.15,skin:13148272},garth:{coat:4860442,coatLen:0,hairStyle:"bald",accent:16734762,build:1.3,height:1.06,extra:["apron"],skin:9068616},pixel:{coat:2759242,coatLen:.3,hairStyle:"mohawk",accent:16756800,extra:["visor"],height:.92,build:.9},soyka:{coat:12111044,coatLen:.85,hair:9080726,hairStyle:"short",accent:5963680,extra:["glasses"],skin:12095608},elias:{coat:3818576,coatLen:.3,hair:2761760,hairStyle:"short",skin:14207168,accent:5627391,build:.92},agnes:{coat:5917274,coatLen:.9,hair:11579568,hairStyle:"bun",accent:16756800,height:.88,extra:["cane","scarf"]},krane:{coat:15001324,coatLen:1,hair:13684952,hairStyle:"bun",accent:8377599,height:1.03,build:.95,pants:658190},bruno:{coat:2106926,coatLen:0,hairStyle:"bald",accent:3850495,build:1.25,height:1.04,extra:["armor","visor"]},junk:{coat:3354655,coatLen:.5,hairStyle:"hat",accent:5627391},cook:{coat:4858402,coatLen:0,hairStyle:"short",extra:["apron"],build:1.1},tenant:{coat:2502698,coatLen:.6,hairStyle:"hood",accent:16742970}},Fi={mira:{name:"Мира Вейн",role:"Клиентка",voice:520,bio:[[null,"Наняла меня искать брата. Красный плащ, упрямый подбородок, 400 кредитов аванса."],["mira_child2","Детство пересказывает слово в слово — как заученный текст."],["mira_confessed_gap","Не помнит ночь на 14-е: проснулась одетой, с грязью на ботинках."],["d_mira_m12","Субъект М-12. Единственная выжившая на Марлоу-стрит. «Сестра» — легенда прикрытия."]]},elias:{name:"Элиас Вейн",role:"Пропавший",voice:300,bio:[[null,"Мнемо-архитектор HYPERION, Лаб-7. Исчез в ночь на 14 ноября."],["c_mail_veil","Отказался уничтожать «оригиналы» перед запуском проекта «Вуаль»."],["mem_lab7_seen","Залил архив в собственную кору. Без охлаждения проживёт считаные дни."],["met_elias","Шесть лет был «братом» женщине, чью память сам переписал. По моей просьбе."]]},agnes:{name:"Агнес Вольф",role:"Соседка, кв. 7A",voice:610,bio:[[null,"Бывшая учительница. Видит всё, что происходит на этаже. Или думает, что видит."],["agnes_testified","Утверждает: Элиас ушёл в 23:40 с женщиной в красном плаще."],["agnes_cleaners_talk","К ней приходили «двое в сером» — «калибровать бэкап». После болела голова."]]},garth:{name:"Гарт «Ржавый»",role:"Бармен, «Последний байт»",voice:180,bio:[[null,"Ржавый протез, тяжёлый взгляд. Знает на ярусе всех. Сойку в обиду не даст."],["q_garth","Продал воспоминание о дне рождения дочери, чтобы оплатить протез."]]},pixel:{name:"Пиксель",role:"Торговец памятью",voice:760,bio:[[null,"Продаёт чужие жизни по прейскуранту. Трус, но память у него «хорошая — чужая, но хорошая»."]]},soyka:{name:"Док Сойка",role:"Подпольный хирург",voice:420,bio:[[null,"Лечит тех, кого наверху не считают людьми. Никому не верит — и правильно."],["c_coolant","Третий день скупает весь нейрохладагент на ярусе."]]},orlova:{name:"Инспектор Лена Орлова",role:"VCPD, бывшая напарница",voice:380,bio:[[null,"Мы вместе вели Марлоу-стрит. Она помнит обо мне больше, чем я сам."],["orlova_marlow_react","Побледнела, когда я упомянул Марлоу. Спросила: «Ты помнишь?»"],["d_orlova","Держала Элиасу лифт в ночь кражи. Она на его стороне — или на своей."]]},theo:{name:"Тео Замбрано",role:"Журналист, «Свободная частота»",voice:460,bio:[[null,"Пиратский эфир на четыре района. Шесть лет копает Марлоу-стрит. Спит на крыше."]]},krane:{name:"Августа Крейн",role:"Директор мнемо-архитектуры HYPERION",voice:340,bio:[[null,"Называет массовое стирание памяти «анестезией». Кажется, верит в это."],["krane_told_noah","Говорит, что я подписал согласие на коррекцию добровольно. «Выдохнул с облегчением»."]]},bruno:{name:"Бруно Хейл",role:"Охрана HYPERION",voice:230,bio:[[null,"Проходная комплекса. Дочь ждёт операции."],["know_bruno","Это он продал Пикселю воспоминание о Лаб-7."]]},noah:{name:"Ной Каррен",role:"Я",voice:250,bio:[[null,"Частный детектив. Бывший следователь отдела мнемо-преступлений."],["c_marlow_file","В деле Марлоу значусь как субъект К-01: «коррекция согласована добровольно»."]]}},ig={wong:{name:"Вонг",lines:["Лапша — три кредита. Память о вкусе лапши — тридцать. Мир сошёл с ума, бери лапшу.","Тот в капюшоне сидит тут каждую ночь. Платит. Пишет что-то. Хороший клиент.","Дождь четвёртый день. Говорят, это HYPERION охлаждает серверы."]},junk:{name:"Торговец",lines:["Руки, глаза, печень на кремнии. Всё снято с добровольцев. Ну, почти.","Ищешь Сойку? Зелёный крест. Только она не любит, когда ищут.","Память не беру. Этим Пиксель промышляет, тьфу."]},cook:{name:"Повар",lines:["Не спрашивай, из чего. Спрашивай, сколько.","Наверху дождь? Тут всегда капает. Привыкаешь.","Вчера серые ходили по ярусу. Спрашивали про какого-то инженера."]},tenant:{name:"Жилец",lines:["Третий месяц плачу за квартиру воспоминаниями. Школу уже не помню. Зато крыша есть.","Семь-бэ? Тихий мужик. К нему баба ходила по воскресеньям. Сестра, говорил.","Старуха Вольф всё про всех знает. Только последнее время путается."]},holo:{name:"Голо-администратор",lines:["Добро пожаловать в HYPERION. Ваш визит будет записан. И, при необходимости, скорректирован.","Лаборатории — по пропускам. Дирекция — по приглашению. Забвение — по тарифу.","Улыбнитесь. Мы запомним вас счастливым."]}},Oi={i_neuro:{name:"Портативный нейролинк",desc:"Потёртый обруч следователя. Позволяет погружаться в записанные воспоминания с любого шарда.",icon:"tool"},i_key:{name:"Ключ-карта, кв. 7B",desc:"Квартира Элиаса Вейна. Блок «Тессера», корпус C, этаж 7.",icon:"key"},i_photo:{name:"Фото Миры и Элиаса",desc:"Двое на мостках у озера. Он смеётся. На обороте штамп печати: 05.11.2091 — девять дней назад. Для «детского» снимка бумага слишком свежая.",icon:"photo"},i_badge:{name:"Старый жетон VCPD",desc:"Отдел мнемо-преступлений, №4471. Недействителен шесть лет. Но блестит как настоящий.",icon:"badge"},i_pass:{name:"Пропуск HYPERION",desc:"Вейн Э., уровень 2, Лаб-7. Аннулирован, но чип ещё отвечает считывателю.",icon:"key"},i_shard_agnes:{name:"Шард: вечер Агнес Вольф",desc:"Страховой бэкап памяти за 13.11.2091. Используйте, чтобы погрузиться.",icon:"shard",use:"dive:mem_agnes"},i_shard_lab7:{name:"Шард: «Лаб-7, первые руки»",desc:"Куплено у Пикселя. Чьё-то воспоминание о ночи на 14-е. Используйте, чтобы погрузиться.",icon:"shard",use:"dive:mem_lab7"},i_shard_garth:{name:"Шард: день рождения Лин",desc:"Семь свечей. Одна не задута. Это не ваше.",icon:"shard"},i_coolant:{name:"Нейрохладагент ×6",desc:"Ампулы для охлаждения перегруженных мнемо-имплантов. Суточная доза для очень горячей головы.",icon:"vial"},i_decryptor:{name:"Одноразовый дешифратор",desc:"Вскрывает две позиции кода при взломе. Сгорает после использования.",icon:"tool"},i_archive:{name:"Архив «ОРИГИНАЛЫ»",desc:"31 подлинная смерть, память выжившей и одна добровольная коррекция. Влажный на ощупь. Тёплый.",icon:"core"},i_shard_noah:{name:"Шард: Н. Каррен — оригинал",desc:"Марлоу-стрит, 02.03.2085. Ваша собственная память, которую вы просили стереть. Используйте, чтобы погрузиться.",icon:"shard",use:"dive:mem_noah"}},Ze={p_mira:{type:"person",title:"Мира Вейн",text:"Клиентка. Называет себя сестрой Элиаса."},p_elias:{type:"person",title:"Элиас Вейн",text:"Пропавший мнемо-архитектор HYPERION."},p_agnes:{type:"person",title:"Агнес Вольф",text:"Соседка Элиаса по этажу."},p_garth:{type:"person",title:"Гарт «Ржавый»",text:"Бармен на Нижнем ярусе."},p_pixel:{type:"person",title:"Пиксель",text:"Торговец воспоминаниями."},p_soyka:{type:"person",title:"Док Сойка",text:"Подпольный хирург. Клиника с зелёным крестом."},p_orlova:{type:"person",title:"Лена Орлова",text:"Инспектор VCPD. Моя бывшая напарница."},p_theo:{type:"person",title:"Тео Замбрано",text:"Журналист пиратского эфира."},p_krane:{type:"person",title:"Августа Крейн",text:"Директор мнемо-архитектуры HYPERION."},p_bruno:{type:"person",title:"Бруно Хейл",text:"Охранник на проходной HYPERION."},p_noah:{type:"person",title:"Ной Каррен (я)",text:"Почему моё имя всплывает в этом деле?"},l_apartment:{type:"place",title:"Квартира 7B",text:"Жильё Элиаса в блоке «Тессера». Обыскана до меня."},l_clinic:{type:"place",title:"Клиника Сойки",text:"Нижний ярус. Задняя комната за гермодверью."},l_lab7:{type:"place",title:"Лаб-7",text:"Лаборатория мнемо-архитектуры HYPERION. Место «инцидента»."},l_marlow:{type:"place",title:"Клиника «Марлоу»",text:"Сгорела в 2085-м. 31 погибший."},e_disappear:{type:"event",title:"Исчезновение, 14.11",text:"Ночь, когда Элиас Вейн не вернулся со смены."},e_marlow:{type:"event",title:"Пожар на Марлоу-стрит",text:"2085 год. 31 жертва. Дело закрыто за девять дней — мной."},c_photo:{type:"evidence",title:"Фото «у озера»",text:"Мира и Элиас в детстве. Отпечатано девять дней назад."},c_family_photo:{type:"evidence",title:"Семейное фото Вейнов",text:"«Вирен, 2063. Наш единственный, наш Эли». На снимке один ребёнок."},c_mira_loop:{type:"evidence",title:"Заученное детство",text:"Мира рассказывает о детстве слово в слово, с теми же паузами."},c_red_coat:{type:"evidence",title:"Красный плащ Миры",text:"Носит каждый день. Подарок Элиаса: «чтобы я мог найти тебя в толпе»."},c_injector:{type:"evidence",title:"Кейс инъектора «С»",text:"Пустой кейс из-под нейрохладагента с клеймом клиники Сойки."},c_note_soyka:{type:"evidence",title:"Записка Элиаса",text:"«Сойка. Нижний ярус. Спросить Ржавого. Хладагент — 6 амп./сутки, иначе не дотяну. НЕ ЗВОНИТЬ М.»"},c_pass:{type:"evidence",title:"Брошенный пропуск",text:"Пропуск HYPERION остался в куртке. Он знал, что его аннулируют."},c_mail_veil:{type:"evidence",title:"Переписка о «Вуали»",text:"Крейн приказала уничтожить «оригиналы» до аудита. Элиас отказался: «Я их верну»."},c_hidden_msg:{type:"evidence",title:"Послание в вентиляции",text:"Голос Элиаса: «Не верь тому, что помнишь о Марлоу-стрит». Он знал, что наймут именно меня."},c_agnes_testimony:{type:"evidence",title:"Показания Агнес",text:"23:40 — Элиас ушёл под руку с женщиной в красном плаще. Лица она не помнит."},c_mem_agnes:{type:"evidence",title:"Воспоминание Агнес",text:"Запись вечера 13.11 со страхового бэкапа."},c_cctv_empty:{type:"evidence",title:"Камера: 23:40 — пусто",text:"В 23:40 коридор седьмого этажа пуст. Никто не выходил из 7B."},c_cctv_cleaners:{type:"evidence",title:"Камера: 01:05 — двое в сером",text:"Двое с шевронами HYPERION входят в квартиру Агнес и проводят там 26 минут."},c_cctv_alone:{type:"evidence",title:"Камера: 02:14 — Элиас один",text:"Элиас выходит из 7B один, с медицинским кейсом, держась за стену."},c_coolant:{type:"evidence",title:"Закупки хладагента",text:"Сойка третьи сутки берёт по шесть ампул нейрохладагента — «как на живой сервер»."},c_mem_lab7:{type:"evidence",title:"Воспоминание из Лаб-7",text:"Шард с рынка: ночь на 14-е глазами очевидца."},c_cradle:{type:"evidence",title:"Пустая криоячейка",text:"«ОРИГИНАЛЫ • 31 + 1. Марлоу-стрит». Носитель извлечён, рядом — нейрошунт."},c_subjects:{type:"evidence",title:"Список субъектов",text:"М-12: женщина, выжила, полная коррекция, легенда «сестра». К-01: офицер, добровольно."},c_marlow_file:{type:"evidence",title:"Дело Марлоу (оригинал)",text:"Не пожар — сбой массовой коррекции. Следователь Н. Каррен. «Коррекция согласована субъектом К-01»."},c_archive:{type:"evidence",title:"Архив «Оригиналы»",text:"Подлинные записи Марлоу-стрит. У меня в кармане."},c_mem_noah:{type:"evidence",title:"Мой оригинал",text:"Что я на самом деле сделал в ночь пожара."}},lc={linked:{label:"связано с",color:"#6fe0ff"},contra:{label:"противоречит",color:"#ff5a5a"},hides:{label:"скрывает",color:"#b070ff"},forged:{label:"подделано / подделал",color:"#ff4fa0"},at:{label:"находится в / был в",color:"#5affb0"},guilty:{label:"виновен в",color:"#ffb040"}},Bi=[{id:"d_contra",rels:["contra"],pairs:[["c_agnes_testimony","c_cctv_alone"],["c_agnes_testimony","c_cctv_empty"],["c_mem_agnes","c_cctv_empty"],["c_mem_agnes","c_cctv_alone"]],title:"Камера против свидетеля",text:"Запись не оставляет места для «женщины в красном»: в 23:40 коридор пуст, а Элиас уходит в 02:14 — один. Либо врёт камера, либо память Агнес."},{id:"d_agnes_edited",rels:["forged","linked"],pairs:[["p_agnes","c_cctv_cleaners"],["c_mem_agnes","c_cctv_cleaners"],["c_agnes_testimony","c_cctv_cleaners"]],title:"Агнес «откалибровали»",text:"Двое с шевронами HYPERION провели у Агнес 26 минут — после этого у неё появилось воспоминание о женщине в красном. Ложный след вписали ей в голову."},{id:"f_red",rels:["linked"],pairs:[["c_red_coat","c_agnes_testimony"],["c_red_coat","c_mem_agnes"],["p_mira","c_agnes_testimony"]],title:"Женщина в красном — Мира",text:"Плащ приметный, и носит его ровно один человек в этом деле. Агнес видела с Элиасом Миру."},{id:"f_mira",rels:["guilty"],theory:"Мира Вейн причастна к исчезновению брата и наняла меня для отвода глаз.",pairs:[["p_mira","c_agnes_testimony"],["p_mira","c_mem_agnes"],["p_mira","p_elias"],["p_mira","e_disappear"],["c_red_coat","e_disappear"]],title:"Версия: Мира увела Элиаса",text:"Она была с ним в последнюю ночь, скрыла это и наняла меня, чтобы выглядеть безутешной сестрой."},{id:"f_soyka",rels:["guilty"],theory:"Док Сойка убила Элиаса ради его импланта и архива.",pairs:[["p_soyka","c_injector"],["p_soyka","p_elias"],["p_soyka","e_disappear"],["l_clinic","c_injector"],["l_clinic","e_disappear"]],title:"Версия: Сойка разобрала его на части",text:"Её кейс в его квартире. Подпольный хирург, которому достался пациент с бесценным имплантом. Живым он ей не нужен."},{id:"f_hyperion",rels:["guilty","at","hides"],theory:"HYPERION схватил Элиаса и держит его в комплексе.",pairs:[["p_krane","p_elias"],["p_krane","e_disappear"],["l_lab7","p_elias"],["l_lab7","e_disappear"],["p_krane","c_pass"]],title:"Версия: Элиас в руках HYPERION",text:"Он пошёл против Крейн — и исчез в ту же ночь. Корпорации не теряют людей. Они их убирают в подвал."},{id:"d_elias_hiding",rels:["at","hides","linked"],theory:"Элиас жив. Он унёс архив в собственной голове и прячется у Сойки.",pairs:[["p_soyka","c_coolant"],["l_clinic","c_coolant"],["p_elias","c_coolant"],["c_note_soyka","c_coolant"],["p_elias","l_clinic"],["p_soyka","c_note_soyka"],["p_elias","c_note_soyka"],["c_injector","c_coolant"],["c_cradle","c_coolant"]],need:i=>i.hasClue("c_coolant")||i.hasClue("c_note_soyka")&&i.hasClue("c_injector"),title:"Версия: Элиас прячется у Сойки",text:"Записка, кейс, закупки хладагента «как на живой сервер». Живой сервер — это он сам. Сойка не убийца: она держит его в живых."},{id:"d_mira_m12",rels:["linked","forged","contra","hides"],pairs:[["p_mira","c_subjects"],["p_mira","c_family_photo"],["c_photo","c_family_photo"],["c_mira_loop","c_subjects"],["c_mira_loop","c_family_photo"],["p_mira","c_mira_loop"]],need:i=>i.hasClue("c_subjects")||i.hasClue("c_family_photo")&&i.hasClue("c_mira_loop"),title:"У Элиаса нет сестры",text:"Единственный ребёнок на семейном фото. Свежая печать «детского» снимка. Заученные воспоминания. Мира — субъект М-12, а «сестра» — легенда, вписанная ей в память."},{id:"d_orlova",rels:["hides","linked","at"],pairs:[["p_orlova","c_mem_lab7"],["p_orlova","l_lab7"],["p_orlova","e_disappear"],["p_orlova","p_elias"]],need:i=>i.flag("mem_lab7_verdict")==="real"&&i.memFoundIn("mem_lab7","l_orlova"),title:"Орлова выпустила его",text:"Инспектор Орлова стояла на стрёме в Лаб-7. Она не закрыла дело «сверху» — она прикрывает Элиаса сама."},{id:"d_bruno",rels:["linked","hides"],pairs:[["p_bruno","c_mem_lab7"],["p_bruno","p_pixel"]],need:i=>i.memFoundIn("mem_lab7","l_self"),title:"Память с рынка — Хейла",text:"Запись Лаб-7 снята с охранника Бруно Хейла. Он всё видел, промолчал и продал."},{id:"d_marlow",rels:["linked","hides","guilty"],pairs:[["c_marlow_file","c_mail_veil"],["e_marlow","c_mail_veil"],["c_cradle","e_marlow"],["e_marlow","p_krane"],["c_marlow_file","p_krane"],["c_cradle","c_mail_veil"]],need:i=>i.hasClue("c_marlow_file")||i.hasClue("c_cradle")&&i.hasClue("c_mail_veil"),title:"«Вуаль» растёт из Марлоу",text:"Марлоу-стрит была не пожаром, а первым массовым стиранием — с 31 трупом. «Оригиналы» — единственное доказательство. «Вуаль» — то же самое, но на весь город."},{id:"d_noah",rels:["linked","hides","guilty"],pairs:[["p_noah","c_marlow_file"],["p_noah","e_marlow"],["p_noah","c_hidden_msg"],["p_noah","c_subjects"],["p_noah","l_marlow"]],title:"Я — субъект К-01",text:"Я вёл дело Марлоу, закрыл его как несчастный случай и добровольно лёг в кресло. «Плюс один» в архиве — это я."}],cc=[{id:"main",main:!0,title:"ДЕЛО ВЕЙНА",stages:[{text:"Поговорить с Мирой Вейн в офисе",done:i=>i.flag("mira_briefed")},{text:"Добраться до квартиры Элиаса: блок «Тессера», 7B (транзит — на площади за переулком)",done:i=>i.flag("apt_entered")},{text:"Обыскать квартиру 7B и опросить соседку",done:i=>i.hasClue("c_note_soyka")&&(i.hasClue("c_agnes_testimony")||i.flag("agnes_shut"))},{text:"Найти Сойку на Нижнем ярусе",done:i=>i.s.npc.soyka?.met},{text:"Выяснить, что произошло в Лаб-7 комплекса HYPERION",done:i=>i.hasClue("c_cradle")},{text:"Собрать версию на доске расследования [B] и выбрать рабочую гипотезу",done:i=>!!i.s.theory},{text:"Найти Элиаса Вейна",done:i=>i.flag("met_elias")},{text:"Решить судьбу архива «Оригиналы»: эфир, HYPERION, огонь — или закон",done:i=>i.flag("ended")}]},{id:"cctv",title:"ЧТО ВИДЕЛА КАМЕРА",visible:i=>i.hasClue("c_agnes_testimony")||i.flag("cctv_seen"),stages:[{text:"Получить доступ к пульту наблюдения в вестибюле «Тессеры»",done:i=>i.flag("cctv_seen")},{text:"Найти на записи момент, когда Элиас покинул квартиру",done:i=>i.hasClue("c_cctv_alone")}]},{id:"agnes",title:"ЧУЖОЙ ВЕЧЕР",visible:i=>i.has("i_shard_agnes")||!!i.flag("mem_agnes_verdict"),stages:[{text:"Погрузиться в воспоминание Агнес (инвентарь [I] → использовать шард)",done:i=>!!i.flag("mem_agnes_verdict")},{text:"Решить, говорить ли Агнес, что вы узнали",done:i=>i.flag("agnes_told")||i.flag("agnes_spared")||i.flag("mem_agnes_verdict")==="real"}]},{id:"garth",title:"ЧУЖОЕ ДЕТСТВО",visible:i=>i.flag("q_garth"),stages:[{text:"Добыть у Пикселя воспоминание Гарта о дне рождения дочери",done:i=>i.has("i_shard_garth")||i.flag("garth_done")},{text:"Вернуть шард Гарту",done:i=>i.flag("garth_done")}]},{id:"theo",title:"СВОБОДНАЯ ЧАСТОТА",visible:i=>i.s.npc.theo?.met,stages:[{text:"Убедить Тео Замбрано дать доступ к передатчику",done:i=>i.flag("theo_code")||i.flag("roof_open")}]},{id:"self",title:"К-01",visible:i=>i.has("i_shard_noah"),stages:[{text:"Посмотреть собственный оригинал (инвентарь [I] → использовать шард)",done:i=>!!i.flag("noah_recall")}]}],xs={mem_agnes:{title:"Вечер Агнес Вольф",verdict:!0,clue:"c_mem_agnes",total:7},mem_lab7:{title:"Лаб-7, ночь на 14-е",verdict:!0,clue:"c_mem_lab7",total:7},mem_noah:{title:"Марлоу-стрит, оригинал",verdict:!1,clue:"c_mem_noah",total:4}},mh={central:{name:"Центральный район",desc:"Проспект Аркадия. Офис, пост VCPD, лапшичная Вонга.",x:50,y:46},residential:{name:"Жилой сектор",desc:"Блок «Тессера». Квартира Элиаса Вейна.",x:22,y:30},underground:{name:"Нижний ярус",desc:"Чёрный рынок, бар «Последний байт», клиника Сойки.",x:34,y:74},hyperion:{name:"Комплекс HYPERION",desc:"Плаза Памяти. Лаб-7. Дирекция.",x:78,y:24}};function Se(i,t,e,n,s,r,a,o="warm",l=0,c=.35){const u=e-t,f=s-n,d=Er(a,Math.max(3,Math.round(Math.max(u,f)/1.5)),Math.max(2,Math.round((r-l)/2.6)),o,c);return i.box(u,r-l,f,(t+e)/2,l,(n+s)/2,d,!0)}function Gn(i,t,e,n,s,r,a,o,l,c,u,f){const d=new ue({map:tg(t,e,n,s,r)});d.color.setScalar(1.25);const p=new Q(new Ie(a,o),d);p.position.set(l,c,u),p.rotation.y=f,i.scene.add(p);const _=new Q(new Et(a+.4,o+.4,.3),W(658191,.5,.7));_.position.set(l-Math.sin(f)*.2,c,u-Math.cos(f)*.2),_.rotation.y=f,i.scene.add(_);const v=t*1.7;return i.updaters.push((m,h)=>{const x=Math.sin(h*.7+v)>.96?.5+Math.random()*.7:1.25;d.color.setScalar(x)}),i.pool(new Tt(s).getHex(),Math.max(a,6),l+Math.sin(f)*4,.045,u+Math.cos(f)*4,.22),p}function Cr(i,t,e,n){const s=Kn(n),r=[],a=[1843240,2759714,1714732,3354655,2366e3,3806232,1318958];for(let o=0;o<e;o++){const l=t[o%t.length],c={coat:a[s()*a.length|0],coatLen:.3+s()*.6,hairStyle:["short","hood","hat","long","bun"][s()*5|0],accent:[6742271,16732064,16760928][s()*3|0],height:.94+s()*.1,extra:s()<.55&&i.amb.rain?["umbrella"]:[]},u=mi(c);i.scene.add(u.group),r.push({h:u,p:l,pos:l.a+s()*(l.b-l.a),dir:s()<.5?1:-1,sp:.9+s()*.6,off:(s()-.5)*1.6,ph:s()*9,umb:c.extra.includes("umbrella")})}i.updaters.push((o,l,c)=>{for(const u of r){u.pos+=u.dir*u.sp*o,u.pos>u.p.b&&(u.pos=u.p.b,u.dir=-1),u.pos<u.p.a&&(u.pos=u.p.a,u.dir=1);const f=u.h.group.position,d=u.p.y??0;u.p.z!==void 0?(f.set(u.pos,d,u.p.z+u.off),u.h.group.rotation.y=u.dir>0?Math.PI/2:-Math.PI/2):(f.set(u.p.x+u.off,d,u.pos),u.h.group.rotation.y=u.dir>0?0:Math.PI);const p=Math.sin(l*5.2*u.sp+u.ph);u.h.legL.rotation.x=p*.5,u.h.legR.rotation.x=-p*.5,u.h.armL.rotation.x=-p*.35,u.umb||(u.h.armR.rotation.x=p*.35),f.y=d+Math.abs(Math.cos(l*5.2*u.sp+u.ph))*.025}})}function sg(i,t){const e=new he,n=new Q(new Et(4.4,.62,1.9),new Oe({color:i,roughness:.18,metalness:.9}));n.position.y=.55,e.add(n);const s=new Q(new Et(2.3,.5,1.66),new Oe({color:329482,roughness:.05,metalness:1}));s.position.set(-.25,1.08,0),e.add(s);const r=new Q(new Et(1.2,.3,1.86),n.material);r.position.set(1.7,.82,0),r.rotation.z=-.22,e.add(r);for(const u of[-1,1]){const f=new Q(new Et(.06,.1,.5),rt(15398143,4));f.position.set(2.21,.6,u*.62),e.add(f);const d=new Q(new Et(.06,.08,.6),rt(16717872,3));d.position.set(-2.21,.66,u*.58),e.add(d);for(const p of[-1.4,1.4]){const _=new Q(new Re(.34,.34,.24,12),W(328966,.8));_.rotation.x=Math.PI/2,_.position.set(p,.34,u*.88),e.add(_)}}const a=new Q(new Et(4,.03,.04),rt(t,2.5));a.position.set(0,.86,.96),e.add(a);const o=a.clone();o.position.z=-.96,e.add(o);const l=ho(13625087,5,.5);l.position.set(6,.05,0),l.scale.set(1.3,.6,1),e.add(l);const c=ho(16719920,2.4,.4);return c.position.set(-3.4,.05,0),e.add(c),e}function rg(i,t,e,n,s,r){const a=Kn(r),o=[],l=[1053724,1838868,989722,2105896,2755858,790564];for(let c=0;c<s;c++){const u=t[c%t.length],f=sg(l[a()*l.length|0],[5627391,16732064,16756800][a()*3|0]);f.rotation.y=u.dir>0?0:Math.PI,i.scene.add(f);const d=i.col(0,0,0,0,0,1.6);o.push({car:f,lane:u,x:e+(c+a()*.6)*((n-e)/s),v:9+a()*5,max:9+a()*5,c:d})}i.updaters.push((c,u,f)=>{const d=f.player.pos;for(const p of o){let _=p.max;const v=(d.x-p.x)*p.lane.dir;d.y<2&&Math.abs(d.z-p.lane.z)<2.4&&v>-1&&v<14&&(_=0);for(const m of o)if(m!==p&&m.lane===p.lane){const h=(m.x-p.x)*p.lane.dir;h>0&&h<9&&(_=Math.min(_,m.v*.8))}p.v+=(_-p.v)*Math.min(1,c*(_<p.v?5:1.2)),p.x+=p.v*p.lane.dir*c,p.x>n&&(p.x=e),p.x<e&&(p.x=n),p.car.position.set(p.x,0,p.lane.z),p.c.minX=p.x-2.3,p.c.maxX=p.x+2.3,p.c.minZ=p.lane.z-1,p.c.maxZ=p.lane.z+1}})}function Fo(i,t,e,n,s){const r=Kn(s),a=new Float32Array(t*3),o=new Float32Array(t*3),l=[];for(let d=0;d<t;d++){const p=r()<.5;l.push({alongX:p,off:(r()-.5)*300,y:e+r()*(n-e),p:(r()-.5)*500,v:(14+r()*22)*(r()<.5?1:-1)});const _=r()<.5?[1,.25,.2]:[.8,.9,1];o.set(_,d*3)}const c=new de;c.setAttribute("position",new Le(a,3)),c.setAttribute("color",new Le(o,3));const u=new wo({size:1.4,map:wr(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ln,fog:!1,sizeAttenuation:!0}),f=new Qc(c,u);f.frustumCulled=!1,i.scene.add(f),i.updaters.push(d=>{for(let p=0;p<t;p++){const _=l[p];_.p+=_.v*d,_.p>260&&(_.p=-260),_.p<-260&&(_.p=260),a[p*3]=_.alongX?_.p:_.off,a[p*3+1]=_.y,a[p*3+2]=_.alongX?_.off:_.p}c.attributes.position.needsUpdate=!0})}function Rr(i,t,e,n,s,r){i.scene.add(new Dm(t,e,n*2.2)),i.scene.add(new lh(11056336,n*1.5));const a=new Fm(s,r);a.position.set(-30,80,20),i.scene.add(a)}function Pr(i,t,e,n,s="МЕТРО • ЛИНИЯ 7"){const r=new he;r.position.set(t,0,e),r.rotation.y=n,i.scene.add(r);const a=W(1711396,.4,.8);for(const f of[-1,1]){const d=new Q(new Et(.5,3.6,.5),a);d.position.set(f*2.4,1.8,0),r.add(d)}const o=new Q(new Et(5.6,.7,.8),a);o.position.y=3.6,r.add(o);const l=new Q(new Et(4.4,3.3,.2),W(395276,.3,.6));l.position.set(0,1.65,-.5),r.add(l);const c=new Q(new Ie(4.2,3),rt(1731210,.9));c.position.set(0,1.6,-.38),r.add(c);for(let f=0;f<6;f++){const d=new Q(new Et(4.2,.04,.05),rt(5627391,2));d.position.set(0,.3+f*.5,-.36),r.add(d)}i.sign(s,"#55ddff",.5,t+Math.sin(n)*.45,3.6,e+Math.cos(n)*.45,n);const u=Math.abs(Math.cos(n))>.5;i.col(t-(u?2.8:.7),t+(u?2.8:.7),e-(u?.7:2.8),e+(u?.7:2.8),0,4),i.light(5627391,14,10,t+Math.sin(n)*1.5,2.4,e+Math.cos(n)*1.5),i.pool(5627391,4,t+Math.sin(n)*2,.045,e+Math.cos(n)*2,.5),i.interact(c,{label:"Транзит: выбрать район",use:f=>f.openTravel(),range:4}),i.solids.push(l)}function Ke(i,t,e,n,s,r,a,o,l=0){const c=Math.sin(n),u=Math.cos(n),f=new Q(new Ie(s,2.3),rt(r,.55));f.position.set(t+c*.03,l+1.45,e+u*.03),f.rotation.y=n,i.scene.add(f);const d=new Q(new Ie(s+.3,2.6),W(658190,.4,.7));d.position.set(t+c*.02,l+1.45,e+u*.02),d.rotation.y=n,i.scene.add(d);for(let p=1;p<Math.round(s/1.4);p++){const _=new Q(new Ie(.06,2.3),W(658190)),v=-s/2+p*(s/Math.round(s/1.4));_.position.set(t+c*.04+u*v,l+1.45,e+u*.04-c*v),_.rotation.y=n,i.scene.add(_)}a&&i.sign(a,o,.75,t+c*.25,l+3.3,e+u*.25,n),i.pool(r,s*.9,t+c*2.2,l+.045,e+u*2.2,.3)}function ag(i){const t=new Ss("central","ЦЕНТРАЛЬНЫЙ РАЙОН","Проспект Аркадия • Vesper City",724764,.0135);t.amb.siren=!0,t.amb.hum=.8,Rr(t,5925544,1182228,.55,7375048,.35),t.add(Uo(131850,1839672,8010378)),t.add(No(11,9081008)),t.ground=t.add(Ar({size:300,base:723985,puddle:.55,quality:i.quality,rain:i.rain},i.reflections,t.fog));for(let h=-60;h<60;h+=6)t.box(2.6,.012,.14,h,.012,0,rt(16765040,.5),!1);for(const h of[-5,5])t.box(124,.014,.12,0,.012,h,rt(5627391,.35),!1);for(let h=-4;h<=4;h++)t.box(.5,.012,3.2,h*1-0,.013,0,rt(14674175,.28),!1);[[-70,-52,58,"cold"],[-52,-34,34,"warm"],[-34,-20,72,"cold"],[-20,-4,44,"warm"],[-4,22,90,"corp"],[22,38,38,"warm"],[38,54,64,"cold"],[54,70,46,"warm"]].forEach(([h,x,y,g],C)=>Se(t,h,x,-32,-10,y,100+C,g)),Se(t,-70,-46,10,32,52,201,"warm"),Se(t,-46,-28,10,32,76,202,"cold"),Se(t,-28,-16,10,30,40,203,"warm",3.5),Se(t,-28,-16,20.3,30,3.5,204,"warm"),Se(t,-16,-3,10,30,60,205,"cold"),Se(t,3,25,10,30,44,206,"warm"),Se(t,25,46,10,32,82,207,"corp"),Se(t,46,70,10,32,48,208,"warm"),Se(t,-30,-14,30,52,56,210,"cold"),Se(t,14,30,30,52,66,211,"warm"),Se(t,-14,14,46,60,48,212,"cold");for(const h of[-1,1]){t.box(18,70,64,h*71,5.2,0,Er(300+h,8,20,"cold"),!1),t.col(h*62-.5,h*62+.5,-10,10),t.box(18,5.2,4.8,h*71,0,-7.5,_t("concrete"),!1),t.box(18,5.2,4.8,h*71,0,7.5,_t("concrete"),!1),t.box(.1,5.2,10,h*79,0,0,W(0),!1),t.sign(`ТРАНСПОРТНЫЙ ТОННЕЛЬ
ПЕШЕХОДАМ ВХОД ЗАПРЕЩЁН`,"#ff5a3a",.9,h*61.9,4.2,0,-h*Math.PI/2);for(let x=0;x<4;x++)t.box(.08,5,.08,h*62,0,-4.5+x*3,rt(16734778,1.5),!1)}for(let h=-54;h<=54;h+=18)t.lamp(h,-5.6,16763024,6.5,h===0||h===-36||h===36),t.lamp(h+9,5.6,10473727,6.5);t.lamp(-2.6,20,16751200,5,!0),t.lamp(-8,33,10473727,6),t.lamp(8,33,10473727,6),Ke(t,-61,-9.98,0,12,2788010,"MNEMOBANK","#55ddff"),Ke(t,-27,-9.98,0,10,11151978,"ИМПЛАНТЫ 24/7","#ff4fa0"),Ke(t,30,-9.98,0,11,11172394,"ЛОМБАРД ПАМЯТИ","#ffb040"),Ke(t,46,-9.98,0,10,2796154,"СИНТ-АПТЕКА","#5affb0"),Ke(t,-58,9.98,Math.PI,14,6957738,"КЛУБ «ЭХО»","#b070ff"),Ke(t,-37,9.98,Math.PI,12,11151930,"ТИР • VR","#ff5a5a"),Ke(t,-9.5,9.98,Math.PI,9,2779818,"КИБЕР-КАФЕ","#6fb6ff"),Ke(t,35,9.98,Math.PI,14,2792106,"HYPERION STORE","#bfe9ff"),Ke(t,58,9.98,Math.PI,14,11164202,"ОТЕЛЬ «КАПСУЛА»","#ff9a50"),t.sign("ПАМЯТЬ","#ff4fa0",7,-33.5,16,-9.6,0,{vertical:!0}),t.sign("СНЫ НА ЗАКАЗ","#55ddff",1.2,46,9,-9.7,0,{border:!0}),t.sign("24H","#ffb040",1.6,-20.3,7,-9.6,0),t.sign("ЭХО","#b070ff",6,-46.4,15,9.6,Math.PI,{vertical:!0}),t.sign("VESPER","#5affb0",5.5,25.4,18,9.6,Math.PI,{vertical:!0}),t.sign("ПРОДАЙ ПЛОХОЙ ДЕНЬ","#ffb040",.9,-61,6.2,-9.7,0,{border:!0,sub:"MNEMOBANK • ВЫКУП ВОСПОМИНАНИЙ"}),t.sign("НЕ ПОМНИШЬ — НЕ БЫЛО","#ff4fa0",.7,14,6,9.7,Math.PI),Gn(t,1,"HYPERION","ПАМЯТЬ — ЭТО ВЫБОР","#7fd4ff","#2a4aff",12,18,9,24,-9.7,0),Gn(t,2,`ЗАБУДЬ
ЕГО`,"СЕРВИС «ЧИСТЫЙ ЛИСТ» • ОТ 299₵","#ff4fa0","#7a1aff",9,13.5,-43,20,-9.7,0),Gn(t,3,`КУПИ
ДЕТСТВО`,"ПОДЛИННЫЕ ВОСПОМИНАНИЯ. ГАРАНТИЯ.","#ffb040","#ff3a5a",9,13.5,36,24,9.7,Math.PI),Gn(t,4,"VCPD","МЫ ПОМНИМ ЗА ВАС","#9fb6ff","#3a5aff",7,10,-55,18,9.7,Math.PI),Pt.vending(t,-14,0,-9.2,0,2788095,`SYNTH
COLA`),Pt.vending(t,20,0,9.2,Math.PI,16726650,`НУДЛС
BOX`),Pt.bench(t,-47,0,-8.6),Pt.bench(t,40,0,-8.6),Pt.bench(t,12,0,8.6),Pt.bench(t,-52,0,8.6);for(const[h,x]of[[-24,-9],[5,9],[50,9],[-50,-9]])t.cyl(.3,.8,h,0,x,W(1711136,.6,.5),!0);t.steam(-18,0,-6,11581640,7,5,.8,.2),t.steam(27,0,6.5,11581640,7,5,.8,.2),t.steam(-2,0,26,16756880,6,4,.6,.18);for(const h of[-40,-10,30,55])Pt.pipe(t,h,9+Math.sin(h)*1.5,-10,h+3,10,.03,328966);for(let h=0;h<10;h++)Pt.acUnit(t,-64+h*13.3,4.2+h%3*3,h%2?-9.75:9.75,h%2?0:Math.PI);t.box(4.4,1,.9,12,0,-8.6,_t("wood",{color:10518624})),t.box(5,.12,2.6,12,2.7,-8.4,W(8000536,.7),!1);for(const h of[-2.3,2.3])t.box(.1,2.7,.1,12+h,0,-7.3,W(1382172,.5,.7),!1);t.sign("ЛАПША ВОНГА","#ff5a3a",.6,12,3.25,-7.1,0,{border:!0});for(let h=0;h<5;h++){const x=t.add(new Q(new Pe(.16,10,8),rt(16730666,2.4)),10+h,2.45,-7.2);t.updaters.push((y,g)=>{x.position.y=2.45+Math.sin(g*1.5+h)*.02})}for(const h of[-1.3,0,1.3])t.cyl(.18,.62,12+h,0,-7.5,W(2763826,.5,.6),!0);t.light(16738874,26,11,12,2.3,-7.4),t.steam(11,1.1,-8.7,16769216,6,2.2,.5,.25),t.steam(13.2,1.1,-8.7,16769216,5,2,.4,.2),t.npc("wong",He.wong,12,0,-9.4,0,void 0,{label:"Вонг — повар",use:h=>h.bark("wong"),range:3.4}),t.npc("theo",He.theo,13.4,0,-6.8,Math.PI,h=>!h.flag("theo_arrested")),t.box(3.4,2.8,2.6,-41,0,-8.4,_t("panel",{color:10134720})),t.box(3.5,.12,2.7,-41,1.9,-8.4,rt(3828479,2),!1),t.sign("VCPD • ПОСТ 12","#9fb6ff",.42,-41,2.45,-7.05,0);const n=t.add(new Q(new Et(.5,.18,.3),rt(16719920,3)),-41.6,2.95,-8.4),s=t.add(new Q(new Et(.5,.18,.3),rt(2773247,3)),-40.4,2.95,-8.4),r=t.light(4878591,18,12,-41,3.3,-7.5);t.updaters.push((h,x)=>{const y=Math.sin(x*5)>0;n.visible=y,s.visible=!y,r.color.setHex(y?16724032:3825919)}),t.npc("orlova",He.orlova,-38.4,0,-7.2,0);const a=_t("panel",{color:10129288});t.room(-27,-17,10.3,20,0,3.3,{wall:a,floor:_t("wood"),ceil:W(921362,.9),doors:[{side:"n",at:-22}]}),t.door(-22,0,10.3,"x",1.5,{label:"Офис Каррена"}),t.box(.85,3.5,10.3,-27.575,0,15.15,a),t.box(.85,3.5,10.3,-16.425,0,15.15,a),t.sign(`Н. КАРРЕН
ЧАСТНЫЙ СЫСК`,"#ffb040",.7,-22,3.25,9.9,Math.PI,{sub:"ПАМЯТЬ • ПРОПАЖИ • ИЗМЕНЫ"}),Pt.table(t,-22,0,17.6,2.2,1),t.box(.6,.5,.6,-22,0,18.7,W(1709072,.8),!0),t.box(.6,.7,.1,-22,.5,19,W(1709072,.8),!1),t.cyl(.12,.02,-21.2,.8,17.5,W(2236962,.4,.8)),t.cyl(.015,.4,-21.2,.82,17.5,W(2236962,.4,.8)),t.add(new Q(new jn(.16,.18,12,1,!0),rt(16754784,1.6)),-21.2,1.3,17.5),t.light(16754784,9,8,-21.2,1.5,17.3),t.light(16732064,6,7,-22,2.4,11.4),t.light(16765088,5,10,-22,3,14.5),t.screen(.55,.36,["> входящих: 1","> М. ВЕЙН — СРОЧНО","> баланс: низкий","> аренда: просрочена"],-22.7,1.02,17.75,.3,"#ffb040","KARREN//OS"),t.box(.6,.4,.05,-22.7,.8,17.8,W(789776,.4,.7),!1),t.box(.9,.45,2.6,-26.3,0,14.5,W(2759194,.9)),t.box(.25,.9,2.6,-26.7,0,14.5,W(2759194,.9),!1),t.box(.9,1.5,.5,-18,0,19.5,_t("metal",{color:6975616})),t.box(.9,1.5,.5,-19,0,19.5,_t("metal",{color:6975616}));const o=t.add(new he,-22,3.15,15);for(let h=0;h<4;h++){const x=new Q(new Et(1.4,.02,.16),W(1710618,.6));x.position.x=.7;const y=new he;y.rotation.y=h*Math.PI/2,y.add(x),o.add(y)}t.updaters.push(h=>{o.rotation.y+=h*1.2});for(let h=0;h<9;h++)t.box(2.4,.05,.02,-25,1.2+h*.17,10.48,rt(16732064,.7),!1);for(let h=0;h<9;h++)t.box(2.4,.05,.02,-19,1.2+h*.17,10.48,rt(5627391,.6),!1);const l=t.box(.06,1.5,2.6,-17.2,.9,14.5,W(3812898,.9),!1);for(let h=0;h<7;h++)t.box(.01,.26,.2,-17.24,1.2+h%3*.4,13.5+h*.37%2.1,W([14209216,12634328,14731424][h%3],.9),!1);t.box(.02,.01,2.2,-17.25,1.75,14.5,rt(16724016,1.2),!1),t.interact(l,{label:"Доска расследования",use:h=>h.ui.openBoard(),range:3.5}),Pt.item(t,new Et(.1,.02,.14),W(9075258,.3,.9),-21.6,.83,17.9,{label:"Старый жетон",use:(h,x)=>{h.give("i_badge"),x.visible=!1,x.userData.disabled=!0,h.set("took_badge")},if:h=>!h.flag("took_badge")});const c=t.cyl(.04,.26,-22.9,.8,17.3,Tn(11168298,.6));t.interact(c,{label:"Бутылка",use:h=>h.examine("Синт-виски «Олд Вектор»","На треть пустая. Говорят, алкоголь портит мнемо-импланты. У меня нет импланта — только шрам за ухом, где он когда-то был. Не помню, зачем его вынули.")});const u=t.box(.5,.36,.03,-24.5,1.6,19.82,W(9075280,.4,.6),!1);t.interact(u,{label:"Грамота в рамке",use:h=>{h.examine("Благодарность департамента","«Детективу Н. Каррену — за образцовое завершение расследования пожара на Марлоу-стрит. Отдел мнемо-преступлений VCPD, 2085».<br><br>Шесть лет прошло. Я помню, как вешал эту рамку. Не помню, за что её дали — только запах гари и чувство, будто я что-то забыл выключить."),h.set("saw_commend")}}),t.npc("mira",He.mira,-23.6,0,15.2,.4,h=>!h.flag("mira_gone")),t.box(1.6,2.6,.2,3.05,0,22,W(2106412,.4,.8),!1);const f=t.box(.12,2.4,1.4,2.9,0,22,new Oe({color:3818064,roughness:.3,metalness:.9}),!1);t.solids.push(f),t.sign("СВОБОДНАЯ ЧАСТОТА","#5affb0",.28,2.8,2.75,22,-Math.PI/2),t.interact(f,{label:"Служебный лифт на крышу",range:3,use:h=>{if(h.flag("roof_open"))return h.teleport("roof");if(h.flag("theo_code"))return h.set("roof_open"),h.notify("Код Тео принят."),h.teleport("roof");h.choice("Лифт заблокирован кодовой панелью.",[["Взломать панель",()=>h.hack({title:"ЛИФТ • СВОБОДНАЯ ЧАСТОТА",level:2,onWin:()=>{h.set("roof_open"),h.teleport("roof")}})],["Уйти",()=>{}]])}}),Pt.crate(t,-2.2,0,14),Pt.crate(t,-2.3,.8,14.1,.6),Pt.barrel(t,2.3,0,16),t.box(1.6,1.3,1,-2.1,0,26,W(1849898,.7,.4)),t.sign("ВЫХОДА НЕТ","#ff3a3a",.4,-2.95,2.4,18,Math.PI/2),t.light(16732064,16,12,0,3.5,16),Pr(t,0,44.8,Math.PI),Pt.bench(t,-9,0,38,!1),Pt.bench(t,9,0,38,!1),Gn(t,5,`ЭЛИАС
ВЕЙН`,"РАЗЫСКИВАЕТСЯ • HYPERION SECURITY","#ff5a3a","#ffb040",6,9,-13.7,9,38,Math.PI/2),Ke(t,13.98,38,-Math.PI/2,10,11156106,"САЛОН «ВТОРАЯ ЖИЗНЬ»","#ff7ad0"),t.light(10473727,14,14,0,5,36);const d=44;t.box(22,.06,20,14,d,20,_t("metal",{color:4869720,rep:[6,6]}),!1);for(const[h,x,y,g]of[[3,25,10,10.3],[3,25,29.7,30],[3,3.3,10,30],[24.7,25,10,30]])t.col(h,x,y,g,d-1,d+3);for(const h of[10.15,29.85])t.box(22,.06,.06,14,d+1.1,h,rt(5963696,1.2),!1),t.box(22,.5,.1,14,d,h,W(1382172),!1);for(const h of[3.15,24.85])t.box(.06,.06,20,h,d+1.1,20,rt(5963696,1.2),!1),t.box(.1,.5,20,h,d,20,W(1382172),!1);t.box(2.4,2.8,2.4,5,d,22,_t("metal",{color:5922924}));const p=t.box(.1,2.3,1.3,6.25,d,22,new Oe({color:3818064,roughness:.3,metalness:.9}),!1);t.solids.push(p),t.interact(p,{label:"Лифт вниз",use:h=>h.teleport("alley")}),t.cyl(.25,14,18,d,14,W(1711396,.4,.8),!0,.08);for(let h=0;h<4;h++)t.box(3-h*.6,.06,.06,18,d+4+h*2.6,14,W(1711396,.4,.8),!1);const _=t.add(new Q(new Pe(.22,8,8),rt(16719920,4)),18,d+14.2,14);t.updaters.push((h,x)=>{_.visible=Math.sin(x*2.2)>-.2});const v=t.add(new Q(new Pe(1.3,16,10,0,Math.PI*2,0,Math.PI*.35),W(3817030,.4,.7)),21,d+1.7,25);v.rotation.set(-2.1,.6,0),v.material.side=_e,t.cyl(.08,1.4,21,d,25,W(1711396),!0);for(const[h,x]of[[9,12.5],[11.5,12.5],[22,18]])t.box(1.6,1.1,1.2,h,d,x,W(3356479,.6,.5));const m=Pt.terminal(t,16.2,d,15.4,0,["ПЕРЕДАТЧИК: ГОТОВ","ОХВАТ: 4 РАЙОНА","ПАКЕТ: ---","","> ВСТАВЬТЕ НОСИТЕЛЬ"],"СВОБОДНАЯ ЧАСТОТА","#5affb0");return t.interact(m.children[0],{label:"Пиратский передатчик",range:3.2,use:h=>h.story.transmitter(h)}),t.light(5963696,10,10,16,d+2.4,16.5),t.light(16732064,30,30,14,d+3,8),t.sign(`СВОБОДНАЯ
ЧАСТОТА`,"#5affb0",1.6,14,d+3.2,29.6,Math.PI,{border:!0}),Pt.crate(t,8,d,27),Pt.crate(t,9,d,27.4,.6),t.box(1.8,.4,.8,12,d,26,W(2761252,.9)),t.indoor.push({minX:3.9,maxX:6.1,minZ:20.9,maxZ:23.1,minY:d,maxY:d+3,on:!0}),Cr(t,[{z:-7.6,a:-56,b:56},{z:7.6,a:-56,b:56},{x:0,a:12,b:40},{z:-6.4,a:-50,b:50}],12,77),rg(t,[{z:-2.5,dir:1},{z:2.5,dir:-1}],-84,84,7,5),Fo(t,40,75,150,9),t.enableRain(Math.floor(6e3*i.rain)),t.spawns={start:{x:-22,y:0,z:12.6,yaw:Math.PI},office:{x:-22,y:0,z:12.6,yaw:Math.PI},metro:{x:0,y:0,z:41.5,yaw:0},roof:{x:8,y:d,z:22,yaw:-Math.PI/2},alley:{x:1.2,y:0,z:22,yaw:Math.PI/2},menu:{x:-6,y:0,z:3,yaw:-1.2}},t}const og=()=>new Oe({color:3818064,roughness:.3,metalness:.9});function zi(i,t,e,n,s,r,a,o,l=0){const c=i.box(s==="x"?1.5:.12,2.4,s==="x"?.12:1.5,t,e,n,og(),!1);i.solids.push(c);const u=new Q(new Et(s==="x"?.04:.14,2.3,s==="x"?.14:.04),rt(5627391,1.5));return c.add(u),o&&i.sign(o,"#9fe8ff",.26,t+Math.sin(l)*.1,e+2.75,n+Math.cos(l)*.1,l),i.interact(c,{label:r,use:a,range:3}),c}function lg(i){const t=new Ss("underground","НИЖНИЙ ЯРУС","Рынок под эстакадой • сектор 8",1182730,.028);t.amb.hum=.5,t.amb.drip=1,t.amb.bar=new P(-18,0,-14),Rr(t,6965818,656902,.42,9067066,.1),t.ground=t.add(Ar({size:120,base:986122,puddle:.6,quality:i.quality,rain:.25},i.reflections,t.fog));const e=_t("grime"),n=W(789001,.9);t.room(-32,32,-8,8,0,6.5,{wall:e,floor:null,ceil:n,doors:[{side:"n",at:-18,w:2.4,h:2.8},{side:"n",at:16,w:1.6}],indoor:!1});for(const[m,h,x]of[[-6.5,.28,3811874],[-5.6,.14,2767402],[6.4,.34,2895928],[5.2,.1,4860450],[.8,.2,2763824]])Pt.pipe(t,-32,6.1-h,m,32,m,h,x);for(let m=-28;m<=28;m+=8){const h=[16752704,16726586,5963680,16732064][(m+28)/8%4|0];t.box(.03,1.6,.03,m,4.7,m/8%2*2.4,W(328965),!1),t.add(new Q(new Pe(.2,10,8),rt(h,3)),m,4.6,m/8%2*2.4),t.pool(h,4.5,m,.045,m/8%2*2.4,.45),(m+28)/8%2===0&&t.light(h,22,13,m,4.2,m/8%2*2.4)}for(const m of[-26,-11,3,21])t.steam(m,5.6,-6.2,13154472,5,-2.2,.5,.2);t.steam(8,0,4,14207152,7,4,.8,.24);for(const m of[-24,-8,8,24])for(const h of[-7.3,7.3])t.box(.9,6.5,.9,m,0,h,_t("concrete",{color:9075312}));t.sign("ПОСЛЕДНИЙ БАЙТ","#ff3a5a",1,-18,4.1,-7.78,0,{border:!0,sub:"БАР • ЖИВАЯ ПАМЯТЬ • БЕЗ КАМЕР"}),t.sign("КЛИНИКА","#5affa0",.8,16,3.5,-7.78,0,{sub:"ИМПЛАНТЫ • БЕЗ ВОПРОСОВ"});const s=t.add(new he,13.2,3.4,-7.75);s.add(new Q(new Et(.9,.28,.05),rt(5963680,2.4)),new Q(new Et(.28,.9,.05),rt(5963680,2.4))),t.updaters.push((m,h)=>{s.visible=Math.sin(h*7)>-.92||Math.sin(h*1.3)>0}),t.sign(`ПАМЯТЬ
КУПЛЮ • ПРОДАМ`,"#ffb040",1.3,-6,4,7.78,Math.PI,{border:!0}),t.sign("ЗАПЧАСТИ ДЛЯ ЛЮДЕЙ","#55ddff",.5,-20,3.3,7.78,Math.PI),t.sign("ЕДА. НАВЕРНОЕ.","#ff7a3a",.5,8,3.3,7.78,Math.PI),t.sign("ДОЛГИ НЕ ЗАБЫВАЮТ","#ff3a3a",.45,26,3.6,-7.78,0),t.sign(`СЕКТОР 9
ЗАТОПЛЕН`,"#ff5a3a",.9,31.7,3.4,0,-Math.PI/2,{border:!0}),t.sign("ты помнишь, кто ты?","#b070ff",.42,0,2.6,-7.78,0,{font:'"Exo 2"',weight:600});for(let m=0;m<9;m++)t.box(.12,6,.12,30.6,0,-6+m*1.5,W(2102286,.6,.7),!1);t.col(30.2,31,-8,8);for(const[m,h,x]of[[28.5,-4,1.2],[29,3,1.5],[27.6,5.5,.9]])Pt.crate(t,m,0,h,x,_t("grime"));Pr(t,-31.2,0,Math.PI/2,"ТРАНЗИТ");const r=(m,h)=>{Pt.table(t,m,0,6.2,3.2,1,_t("metal",{color:6969930})),t.box(3.8,.08,2.4,m,2.7,6.4,W(h,.8),!1);for(const x of[-1.8,1.8])t.box(.07,2.7,.07,m+x,0,5.3,W(1380879,.5,.6),!1)};r(-20,1714746),r(-6,3811858),r(8,3807762);for(let m=0;m<6;m++)t.box(.3,.2+m%3*.1,.3,-21.2+m*.5,.8,6.1,W([4868690,6965818,3824218][m%3],.4,.8),!1);const a=t.add(new Q(new ui(.05,.5,4,8),W(9080726,.3,.9)),-19,.86,6.2);a.rotation.z=1.4,t.interact(a,{label:"Протез руки",use:m=>m.examine("Протез «Кронос-4», б/у","На запястье гравировка: «Папе. Чтобы обнимал крепче». Кто-то продал руку. Или за неё продали.")}),t.npc("junk",He.junk,-20,0,7.1,Math.PI,void 0,{label:"Торговец запчастями",use:m=>m.bark("junk"),range:3.2});for(let m=0;m<7;m++){const h=t.add(new Q(new Et(.1,.02,.16),rt([16756800,5627391,16732064][m%3],2)),-7.2+m*.4,.82,6.1);h.rotation.y=m*.5}t.light(16756800,12,8,-6,2.2,5.6),t.npc("pixel",He.pixel,-6,0,7.15,Math.PI),t.cyl(.35,.3,7.4,.8,6.2,W(2763306,.4,.8)),t.cyl(.3,.25,8.6,.8,6.2,W(2763306,.4,.8)),t.steam(7.4,1.1,6.2,16771280,5,1.8,.3,.3),t.light(16742970,10,7,8,2.2,5.6),t.npc("cook",He.cook,8,0,7.15,Math.PI,void 0,{label:"Уличная кухня",use:m=>m.bark("cook"),range:3.2});const o=Pt.terminal(t,24,0,6.9,Math.PI,["СКЛАД-8 // УЧЁТ","поставки: 14","долги: 231","","> ДОСТУП ЗАКРЫТ"],"ЧЁРНЫЙ РЕЕСТР","#ffb040");t.interact(o.children[0],{label:"Терминал чёрного рынка",range:3,use:m=>m.story.marketTerminal(m)}),Pt.barrel(t,-13,0,6.8,4860442),Pt.barrel(t,-12.2,0,7.1,2767402),Pt.crate(t,15,0,6.9,.9,_t("grime")),Pt.crate(t,15.9,0,6.8,.7,_t("grime")),Pt.crate(t,15.3,.9,6.9,.6,_t("grime")),Pt.barrel(t,2,0,-7,3807770),Pt.vending(t,-2,0,-7.2,0,16726586,`СТИМ
ДОЗА`),t.cyl(.32,.9,20,0,-1.5,W(1708560,.7,.5),!0);const l=t.light(16742954,24,10,20,1.5,-1.5),c=t.add(new Q(new jn(.22,.6,8),rt(16747050,3)),20,1.15,-1.5);t.updaters.push((m,h)=>{l.intensity=20+Math.sin(h*13)*5+Math.sin(h*7.3)*4,c.scale.y=1+Math.sin(h*11)*.25});for(const[m,h,x]of[[19,-.8,2.2],[21,-2.2,-1.2]]){const y=mi({coat:2761760,hairStyle:"hood",coatLen:.8});y.group.position.set(m,0,h),y.group.rotation.y=x,y.armL.rotation.x=-1,y.armR.rotation.x=-1,t.scene.add(y.group)}t.room(-28,-8,-22,-8,0,4,{wall:_t("wood",{color:8018512}),floor:_t("wood",{color:9072736}),ceil:W(657416,.9),skip:"s"}),t.box(10,1.1,.8,-18,0,-19.4,_t("wood",{color:5913136})),t.box(10.2,.06,1,-18,1.1,-19.4,W(1707277,.2,.6),!1),t.box(10,.04,.05,-18,.2,-18.98,rt(16726618,2.2),!1);for(let m=0;m<3;m++){t.box(9,.05,.35,-18,1.5+m*.6,-21.7,W(1380367,.5),!1);for(let h=0;h<16;h++)t.cyl(.04,.24,-22.2+h*.56,1.55+m*.6,-21.7,rt([16756800,5627391,16732064,5963680][(h+m)%4],.9))}for(let m=0;m<5;m++)t.cyl(.17,.7,-21.5+m*1.7,0,-18.4,W(2759194,.5,.6),!0);for(const[m,h]of[[-25,-12],[-25,-16],[-11,-12],[-11.5,-16.5]])t.cyl(.5,.74,m,0,h,W(1708562,.4,.6),!0,.08),t.cyl(.55,.04,m,.74,h,W(2759194,.3,.5)),t.add(new Q(new Pe(.07,8,6),rt(16752704,2)),m,.86,h);t.light(16726618,20,12,-18,3.2,-17),t.light(16752704,10,9,-24,2.6,-13),t.light(8010495,10,9,-11,2.6,-14);const u=t.box(1,1.7,.6,-27.3,0,-20.5,W(1708064,.4,.6)),f=t.box(.7,1,.02,-27.3,.5,-20.18,rt(8010495,1.6),!1);u.rotation.y=0,t.updaters.push((m,h)=>{f.material.color.setHSL(.75+Math.sin(h*.8)*.1,1,.5).multiplyScalar(1.8)}),t.interact(f,{label:"Музыкальный автомат",use:m=>m.examine("Автомат «Ностальгия»","Играет не музыку — чужие воспоминания о музыке. Трек №7: «Чей-то первый танец, 2064». Пять кредитов. Люди платят.")}),t.sign("ПЛАТИ ИЛИ ЗАБУДЬ","#ffb040",.36,-18,3.3,-21.84,0);for(const[m,h,x,y]of[[-25,-12.9,0,2760742],[-11,-11.1,Math.PI,2106922],[-24.1,-16,-1.5,2498586]]){const g=mi({coat:y,hairStyle:"short",coatLen:.4});g.group.position.set(m,-.28,h),g.group.rotation.y=x,g.legL.rotation.x=g.legR.rotation.x=-1.4,g.armL.rotation.x=-.9,t.scene.add(g.group)}t.npc("garth",He.garth,-18,0,-20.5,0);const d=_t("tile",{color:10141872});t.room(8,24,-20,-8,0,3.4,{wall:d,floor:_t("tile",{color:8030856,rep:[4,3]}),ceil:W(1053711,.9),skip:"s",doors:[{side:"n",at:19}]}),t.door(16,0,-8,"x",1.6,{label:"Клиника Сойки",color:2771514,locked:m=>m.flag("soyka_hostile")&&!m.has("i_coolant")&&m.player.pos.z>-8?"Заперто изнутри. Сойка не хочет вас видеть. Разве что вы придёте не с пустыми руками.":null}),t.door(19,0,-20,"x",1.5,{label:"Задняя комната",color:1714722,locked:m=>m.flag("backroom_open")?null:"Гермодверь. Замок биометрический — открывается только изнутри или рукой Сойки."}),t.box(.8,.5,2,12,0,-14.5,W(2767414,.5,.5)),t.box(.8,.12,2,12,.5,-14.5,W(4856346,.7),!1),t.box(.06,.06,1.4,12,2.9,-14.5,W(9080726,.3,.8),!1),t.add(new Q(new Re(.3,.4,.14,14),rt(13697e3,2.2)),12,2.5,-14.5);const p=Do(13697e3,1.2,2,.08);p.position.set(12,1.5,-14.5),t.scene.add(p),t.light(12648416,6,10,12,2.3,-14.5),t.light(5963680,4,9,20,2.6,-11),Pt.table(t,9.2,0,-12,.8,2,_t("metal",{color:10133672}));for(let m=0;m<6;m++)t.cyl(.03,.14,9.1+m%2*.2,.8,-12.7+m*.25,rt([5963680,5627391,16732064][m%3],1.2));t.box(.5,2,3,23.5,0,-11,_t("metal",{color:9083540})),t.screen(1.2,.75,["ПАЦИЕНТОВ: 0","ХЛАДАГЕНТ: ▓░░░░","КРЕДИТ: ОТКАЗ","","не трогай ничего"],8.2,2,-16,Math.PI/2,"#5affa0","КЛИНИКА//С"),t.box(1.4,1.8,.9,22,0,-19.3,_t("metal",{color:5917252}));const _=t.box(.7,.4,.02,22,.7,-18.84,rt(16734746,2.2),!1);t.updaters.push((m,h)=>{_.material.color.setRGB(2.2+Math.sin(h*9)*.5,.7,.2)}),t.sign("УТИЛИЗАТОР","#ff7a3a",.2,22,2,-18.8,0),t.interact(_,{label:"Утилизатор биоотходов",range:3,use:m=>m.story.incinerator(m)}),t.npc("soyka",He.soyka,14.4,0,-11.5,.3),t.room(13,24,-30,-20,0,3.2,{wall:_t("panel",{color:6982272}),floor:_t("tile",{color:4872792}),ceil:W(658700,.9),skip:"s"}),t.box(.9,.5,2.1,20.5,0,-27,W(2767414,.5,.5)),t.box(.9,.5,.7,20.5,.5,-27.9,W(2767414,.5,.5),!1),t.cyl(.5,2.2,22.8,0,-28.5,Tn(5627391,.35),!0),t.cyl(.36,1.9,22.8,.1,-28.5,rt(2792191,.9)),t.light(3842303,14,9,22,2,-27),t.light(16726586,5,6,15,2.4,-22);for(let m=0;m<5;m++)Pt.pipe(t,20.9,1.2+m*.07,-27.8,22.5,-28.4,.02,[5627391,16726586,1118481][m%3]);t.screen(1.4,.85,["Э. ВЕЙН // СОСТОЯНИЕ","t° коры: 41.3 ↑","нагрузка: 3200%","ёмкость: 32/32","прогноз: часы"],16.5,1.9,-29.82,0,"#ff5a5a","НЕЙРОМОНИТОР"),t.box(.8,.9,.8,14.2,0,-28.8,_t("metal",{color:6978164})),t.npc("elias",He.elias,20.5,0,-25.4,Math.PI,m=>!m.flag("elias_taken")&&!m.flag("elias_dead"));const v=t.add(new he);for(let m=0;m<6;m++){const h=new Q(new Et(.5+m*.1,.05,.4),W(9080726,.4,.7));h.position.set(16+m*1.1,.05,-23-m%3),h.rotation.y=m,v.add(h)}return t.updaters.push((m,h,x)=>{v.visible=!!x.flag("elias_taken")}),Cr(t,[{z:-2.6,a:-26,b:26},{z:2.4,a:-26,b:26},{z:0,a:-24,b:14}],7,31),t.indoor.push({minX:-40,maxX:40,minZ:-40,maxZ:12,minY:-1,maxY:8,on:!0}),t.spawns={metro:{x:-27,y:0,z:0,yaw:-Math.PI/2},menu:{x:0,y:0,z:0,yaw:1.2}},t}function cg(i){const t=new Ss("residential","ЖИЛОЙ СЕКТОР","Блок «Тессера» • корпус C",593170,.019);Rr(t,4872816,657928,.5,6979744,.3),t.add(Uo(132106,924194,2775642)),t.add(No(21,7372938,110,260,50)),t.ground=t.add(Ar({size:240,base:789774,puddle:.7,quality:i.quality,rain:i.rain},i.reflections,t.fog));const e=24,n=Er(401,30,26,"slum",.18);t.box(33,84,22,-23.65,0,-29,n,!1),t.box(33,84,22,23.65,0,-29,n,!1),t.box(14.3,80.2,22,0,3.8,-29,n,!1),t.col(-40.2,-7.15,-40,-18,0,20),t.col(7.15,40.2,-40,-18,0,20),t.col(-7.2,7.2,-40,-30.15,0,20),Se(t,-46,-24,-18,30,70,402,"slum",0,.18),Se(t,24,46,-18,30,76,403,"slum",0,.18),Se(t,-24,24,24,44,64,404,"slum",0,.18);for(let g=1;g<9;g++)for(let C=0;C<8;C++)if((g*7+C*3)%5!==0){const M=-34+C*9.6+g%2*2;if(Math.abs(M)<8&&g<2)continue;t.box(2.6,.1,1,M,g*5.6,-17.5,W(1841688,.8),!1),t.box(2.6,.9,.05,M,g*5.6,-17.02,W(2433567,.6,.5),!1),(g+C)%3===0&&t.box(1.4,.03,.03,M,g*5.6+2.2,-17.3,rt([16742970,5627391,16732064][(g+C)%3],1.6),!1)}for(let g=0;g<7;g++)Pt.acUnit(t,-23.75,4+g*4.4,-12+g%4*8,Math.PI/2),Pt.acUnit(t,23.75,5+g*4.1,-10+g%4*8,-Math.PI/2);for(const[g,C]of[[7,-8],[10.5,2],[8.5,12]]){Pt.pipe(t,-24,g,C,24,C,.012,328965);for(let M=0;M<9;M++){const T=t.add(new Q(new Ie(.8+M%3*.3,1+M%2*.4),new Oe({color:[5917258,4872794,6974042,3816010][M%4],side:_e,roughness:1})),-20+M*4.7+g%2,g-.6,C);t.updaters.push((R,S)=>{T.rotation.x=Math.sin(S*1.4+M)*.12})}}t.sign("ТЕССЕРА • C","#ffb040",.9,0,5,-17.7,0,{border:!0}),t.sign("ЖИЛЬЁ ЗА ПАМЯТЬ","#ff4fa0",.6,-15,4.4,-17.8,0,{sub:"ПРОГРАММА MNEMOBANK • 1 ГОД АРЕНДЫ = 1 ГОД ДЕТСТВА"}),t.sign("ПРАЧЕЧНАЯ","#55ddff",.5,23.7,3.4,4,-Math.PI/2),t.sign("РЕМОНТ ИМПЛАНТОВ","#5affa0",.5,-23.7,3.4,6,Math.PI/2),Ke(t,23.98,4,-Math.PI/2,7,2779786,"","#fff"),Ke(t,-23.98,6,Math.PI/2,7,2787930,"","#fff"),Gn(t,7,`ТЫ
ДОМА`,"HYPERION HOUSING • МЫ ПОМНИМ ТВОЙ АДРЕС","#7fd4ff","#2a8aaa",8,12,14,16,23.7,Math.PI),t.lamp(-12,-12,16756848,5.5,!0),t.lamp(12,-12,16756848,5.5),t.lamp(-14,12,10473727,5.5),t.lamp(14,12,10473727,5.5,!0),t.cyl(2.2,.5,0,0,2,_t("concrete"),!0),t.cyl(.18,3.4,0,.5,2,W(1709072,.9));for(let g=0;g<6;g++)t.add(new Q(new Re(.02,.07,1.8,5),W(1709072,.9)),Math.cos(g)*.5,3.6+g%3*.4,2+Math.sin(g)*.5).rotation.set(Math.sin(g*2)*.9,0,Math.cos(g*2)*.9);const s=t.add(new Q(new dn(2.25,.03,6,40),rt(5963680,1.6)),0,.52,2);s.rotation.x=Math.PI/2;const r=t.add(new he,-13,0,4);for(const g of[-1,1]){const C=new Q(new Et(.08,2.4,.08),W(2763824,.5,.7));C.position.set(g*1.2,1.2,0),r.add(C)}const a=new Q(new Et(2.5,.08,.08),W(2763824,.5,.7));a.position.y=2.4,r.add(a);const o=new Q(new Et(.5,.04,.2),rt(16732064,1.4));o.position.y=.6;const l=new he;l.position.y=2.4,l.add(o),o.position.y=-1.8,r.add(l),t.updaters.push((g,C)=>{l.rotation.x=Math.sin(C*1.1)*.25,o.visible=Math.sin(C*17)>-.6}),t.col(-14.4,-11.6,3.7,4.3,0,2.5),Pt.bench(t,6,0,-4),Pt.bench(t,-6,0,9),Pt.vending(t,20,0,-16.9,0,16756800,`ВОДА
2₵`);for(const[g,C]of[[-20,-15],[-19,-14.4],[18,16]])t.box(1.2,1.2,.9,g,0,C,W(1845794,.7,.4));t.cyl(.32,.9,13,0,3,W(1708560,.7,.5),!0);const c=t.light(16742954,26,11,13,1.5,3),u=t.add(new Q(new jn(.22,.6,8),rt(16747050,3)),13,1.15,3);t.box(3,.1,3,13,3.2,3,W(1711136,.8),!1);for(const[g,C]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])t.box(.08,3.2,.08,13+g,0,3+C,W(1711136),!1);t.indoor.push({minX:11.5,maxX:14.5,minZ:1.5,maxZ:4.5,minY:0,maxY:3.2,on:!0}),t.updaters.push((g,C)=>{c.intensity=22+Math.sin(C*13)*5+Math.sin(C*7.3)*4,u.scale.y=1+Math.sin(C*11)*.25}),t.npc("tenant",He.tenant,12.2,0,3.9,2.2,void 0,{label:"Жилец",use:g=>g.bark("tenant"),range:3.2});{const g=mi({coat:2763298,hairStyle:"hat",coatLen:.7});g.group.position.set(14,0,2.6),g.group.rotation.y=-1.2,g.armL.rotation.x=-1,g.armR.rotation.x=-1,t.scene.add(g.group)}Pr(t,0,22.6,Math.PI),t.room(-7,7,-30,-18,0,3.6,{wall:_t("grime",{color:10525328}),floor:_t("tile",{color:6974054,rep:[4,4]}),ceil:W(921100,.9),doors:[{side:"s",at:0,w:2.2}]});const f=t.light(14213312,14,12,0,3.1,-24);t.box(1.6,.05,.3,0,3.5,-24,rt(14213312,2),!1),t.updaters.push((g,C)=>{f.intensity=Math.sin(C*23)>.93||Math.sin(C*3.1)>.97?3:14});for(let g=0;g<12;g++)t.box(.02,.28,.4,-6.8,.9+(g/4|0)*.32,-22-g%4*.45,_t("metal",{color:8025192}),!1);t.sign("ПОЧТА","#ffb040",.2,-6.78,2.1,-22.7,Math.PI/2),t.box(2.6,1.1,.7,4.5,0,-22.5,_t("wood",{color:5917248}));const d=Pt.terminal(t,4.6,0,-24.6,Math.PI,["КАМЕРЫ: 12","ЭТАЖ 7: ЗАПИСЬ ЕСТЬ","АРХИВ: 72 ч","","> ТРЕБУЕТСЯ КОД VCPD"],"ТЕССЕРА//ОХРАНА","#9fe8a0");t.interact(d.children[0],{label:"Пульт видеонаблюдения",range:3,use:g=>g.story.cctvTerminal(g)}),t.sign("КОНСЬЕРЖ УВОЛЕН. ЖАЛОБЫ — В СТЕНУ.","#ff7a5a",.16,4.5,2.4,-29.8,0),zi(t,0,0,-29.8,"x","Лифт — этаж 7",g=>g.teleport("floor7"),"ЛИФТ",0);const p=_t("grime",{color:9077880});t.room(-14,14,-27,-24,e,3,{wall:p,floor:_t("carpet"),ceil:W(920844,.9),doors:[{side:"n",at:-6},{side:"n",at:6},{side:"e",at:-25.5,w:2.4,h:2.2}]}),t.box(.06,2.2,2.4,14,e,-25.5,Tn(6986416,.25),!0),t.light(16763024,8,9,-6,e+2.6,-25.5),t.light(16763024,8,9,6,e+2.6,-25.5);for(const g of[-6,6])t.box(.9,.05,.25,g,e+2.9,-25.5,rt(16763024,1.6),!1);t.sign("7","#ffb040",.6,-13.82,e+2,-25.5,Math.PI/2),zi(t,-13.8,e,-25.5,"z","Лифт — вестибюль",g=>g.teleport("lobby")),t.sign("7A","#d8d0c0",.22,-6,e+2.72,-26.82,0),t.sign("7B","#d8d0c0",.22,6,e+2.72,-26.82,0),t.door(-6,e,-27,"x",1.5,{label:"Квартира 7A",locked:()=>"Агнес не приглашала вас внутрь.",color:3812904}),t.door(6,e,-27,"x",1.5,{label:"Квартира 7B — Э. Вейн",color:3027512,locked:g=>g.has("i_key")?null:"Заперто. Нужен ключ.",onOpen:g=>g.story.enterApartment(g)}),t.box(1,.02,.6,6,e+.03,-26.4,W(3811874,1),!1),t.box(1,.02,.6,-6,e+.03,-26.4,W(4864586,1),!1);const _=t.box(.4,.5,.12,-4.4,e+1.2,-26.8,_t("metal",{color:8028296}),!1);t.box(.2,.06,.02,-4.4,e+1.5,-26.72,rt(16756800,1.8),!1),t.solids.push(_),t.interact(_,{label:"Мнемо-бэкап 7A",range:2.6,use:g=>g.story.agnesBackup(g)}),t.npc("agnes",He.agnes,-8.2,e,-26.2,.6,g=>!g.flag("agnes_shut")),Pt.item(t,new Et(.5,.5,.5),W(4866104,.9),11.5,e+.25,-26.3,{label:"Коробка",use:g=>g.examine("Коробка с вещами","Детские игрушки, выставленные к лифту. На боку маркером: «Отдам. Не помню, чьи».")},!1),t.room(1,13,-37,-27,e,3,{wall:_t("panel",{color:8028296}),floor:_t("wood",{color:6974064}),ceil:W(789776,.9),skip:"s",doors:[{side:"n",at:8.5,w:4.5,h:2.3}]}),t.box(4.5,2.3,.06,8.5,e,-37,Tn(9071280,.22),!0);for(let g=0;g<10;g++)t.box(4.4,.04,.04,8.5,e+.3+g*.2,-36.85,W(1381914,.5,.5),!1);t.light(16732064,10,11,8.5,e+1.6,-35.6),t.light(5627391,6,8,11,e+1.4,-30),t.light(16769216,6,12,6,e+2.7,-31),t.sign("HYPERION","#7fd4ff",2.2,20,e+5,-52,0),Pt.table(t,11.2,e,-31,1,2.4,_t("metal",{color:5922920}));const v=t.screen(.9,.56,["HYPERION REMOTE","user: e.vane","статус: ОТОЗВАН","","> _"],11.55,e+1.2,-31,-Math.PI/2,"#6ff0ff","ЛИЧНЫЙ ТЕРМИНАЛ");t.box(.05,.62,.96,11.6,e+.89,-31,W(789776,.4,.7),!1),t.interact(v,{label:"Терминал Элиаса",range:2.6,use:g=>g.story.eliasTerminal(g)});const m=t.box(.5,.5,.5,9.6,e,-30.2,W(1711138,.7),!1);m.rotation.set(0,.7,Math.PI/2),m.position.y=e+.26,t.box(2,.4,3,2.3,e,-35,W(2237740,.9)),t.box(1.9,.14,2.9,2.3,e+.4,-35,W(5921382,1),!1),t.box(1.4,.12,.5,2.3,e+.54,-36.1,W(9079440,1),!1);for(let g=0;g<3;g++)t.box(.35,.04,2.6,12.7,e+.7+g*.6,-34.5,W(1711138,.5,.5),!1);Pt.item(t,new Et(.22,.07,.34),W(10133672,.3,.8),12.65,e+1.37,-34.9,{label:"Кейс мнемо-инъектора",use:g=>{g.clue("c_injector"),g.examine("Пустой кейс инъектора","Медицинский кейс на шесть ампул. Пусто. На крышке — трафаретная птица и буква «С». Внутри запах озона: так пахнет нейрохладагент.")}}),Pt.item(t,new Et(.03,.26,.2),W(6969920,.5,.4),12.72,e+.87,-33.9,{label:"Фотография в рамке",use:g=>{g.clue("c_family_photo"),g.examine("Семейное фото Вейнов","Озеро. Мужчина, женщина и мальчик лет десяти с удочкой. На обороте, выцветшими чернилами: «Вирен, 2063. Наш единственный, наш Эли».<br><br><i>Единственный.</i>")}},!1);const h=t.box(.5,.9,.12,2.4,e+1,-27.3,W(1843240,.9),!1);t.interact(h,{label:"Куртка на крючке",range:2.6,if:g=>!g.flag("took_pass"),use:g=>{g.set("took_pass"),g.give("i_pass"),g.clue("c_pass"),g.examine("Пропуск HYPERION","Во внутреннем кармане — пропуск. «ВЕЙН Э. • Отдел мнемо-архитектуры • Уровень 2 • Лаб-7». Человек, который бежит, не оставляет пропуск. Если только не знает, что его уже аннулировали.")}});const x=t.cyl(.18,.4,10.4,e,-32.6,W(2763824,.5,.6));t.interact(x,{label:"Мусорная корзина",range:2.4,if:g=>!g.hasClue("c_note_soyka"),use:g=>{g.clue("c_note_soyka"),g.examine("Скомканная записка","Почерк торопливый, буквы прыгают:<br><br>«<b>Сойка. Нижний ярус. Спросить Ржавого.</b><br>Хладагент — 6 амп./сутки, иначе не дотяну.<br>НЕ ЗВОНИТЬ М.»")}});const y=t.box(.6,.3,.04,4.6,e+.25,-36.82,_t("metal",{color:5922406}),!1);for(let g=0;g<4;g++)t.box(.5,.02,.05,4.6,e+.16+g*.07,-36.8,W(657932),!1);t.interact(y,{label:"Вентиляционная решётка",range:2.2,use:g=>g.story.vent(g)});for(let g=0;g<8;g++)t.add(new Q(new Ie(.21,.3),W(13157560,1)),5+g*1.7%5,e+.045,-29-g*2.3%6).rotation.set(-Math.PI/2,0,g*1.3);return t.box(.8,1.9,.5,1.6,e,-30.5,W(1711138,.7)),Cr(t,[{z:-15,a:-20,b:20},{x:-18,a:-12,b:18},{z:17,a:-18,b:18}],5,91),Fo(t,24,70,150,19),t.enableRain(Math.floor(5500*i.rain)),t.spawns={metro:{x:0,y:0,z:19,yaw:0},lobby:{x:0,y:0,z:-27.8,yaw:Math.PI},floor7:{x:-12,y:e,z:-25.5,yaw:-Math.PI/2},menu:{x:0,y:0,z:10,yaw:.3}},t}function hg(i){const t=new Ss("hyperion","КОМПЛЕКС HYPERION","Плаза Памяти • охраняемая территория",659992,.0125);Rr(t,6983856,528404,.62,10141920,.45),t.add(Uo(132364,794672,2783898)),t.add(No(33,9482440,120,280,60,60,220)),t.ground=t.add(Ar({size:300,base:1185307,puddle:.35,tiles:3,reflect:1.1,quality:i.quality,rain:i.rain},i.reflections,t.fog));const e=30,n=90,s=Er(501,16,50,"corp",.55);t.box(40,200,26,0,6.2,-23,s,!1),t.box(5.85,6.2,26,-17.07,0,-23,s,!1),t.box(5.85,6.2,26,17.07,0,-23,s,!1),t.col(-20,-14.15,-36,-10,0,20),t.col(14.15,20,-36,-10,0,20),t.col(-20,20,-36,-30.15,0,20),t.sign("HYPERION","#bfe9ff",5,0,22,-9.8,0,{k:1.3}),t.sign("ПАМЯТЬ — ЭТО ВЫБОР","#7fd4ff",.9,0,17.5,-9.8,0);for(const M of[-19.9,19.9])t.box(.25,160,.25,M,6,-9.9,rt(8377599,1.6),!1);Se(t,-60,-32,-40,34,120,502,"corp",0,.5),Se(t,32,60,-40,34,140,503,"corp",0,.5),Se(t,-32,32,34,56,90,504,"corp",0,.5),t.col(-32,-20,-36,-10.5),t.col(20,32,-36,-10.5),t.box(12,9,.4,-26,0,-10.6,_t("panel",{color:9085104}),!1),t.box(12,9,.4,26,0,-10.6,_t("panel",{color:9085104}),!1);for(const M of[-18,-6,6,18])t.box(.14,.014,40,M,.012,10,rt(8377599,.8),!1);for(const[M,T]of[[-24,0],[24,0],[-24,20],[24,20],[-10,28],[10,28]])t.lamp(M,T,13626111,7,Math.abs(M)===24&&T===0);t.cyl(2.6,.4,0,0,12,_t("labfloor",{color:9083048}),!0);const r=t.add(new he,0,3.6,12),a=new Q(new dn(2.4,.06,8,60),rt(8377599,2.2)),o=new Q(new dn(1.8,.04,8,50),rt(16777215,1.6)),l=new Q(new dn(1.2,.03,8,40),rt(8377599,2.2)),c=new Q(new _r(.5,0),new Oe({color:659480,roughness:.05,metalness:1,emissive:2779802,emissiveIntensity:.6}));r.add(a,o,l,c),t.updaters.push((M,T)=>{a.rotation.set(T*.3,T*.2,0),o.rotation.set(-T*.4,0,T*.3),l.rotation.set(0,T*.6,-T*.5),c.rotation.y=T*.2}),t.light(8377599,40,20,0,4,12),t.pool(8377599,8,0,.42,12,.5);const u=t.box(1.2,.5,.06,0,.5,14.7,W(1711394,.3,.8),!1);t.interact(u,{label:"Мемориальная табличка",use:M=>{M.examine("«Кольцо Памяти»","«В память о 31 жертве пожара на Марлоу-стрит, 2085. HYPERION помнит — чтобы вы могли забыть».<br><br>Корпорация поставила памятник трагедии в собственном дворе. Либо совесть, либо реклама. В этом городе разницы нет."),M.set("saw_memorial")}}),Pt.bench(t,-12,0,12,!1),Pt.bench(t,12,0,12,!1),Pt.bench(t,-12,0,20,!1),Pt.bench(t,12,0,20,!1);for(const M of[-27,27])for(const T of[-4,8,20])t.box(1.6,.7,1.6,M,0,T,_t("labfloor",{color:6976640})),t.add(new Q(new jn(.6,2.2,6),W(928290,.9)),M,1.8,T);Gn(t,8,"ВУАЛЬ","СКОРО. ГОРОД БЕЗ ПЛОХИХ ВОСПОМИНАНИЙ.","#bfe9ff","#5a8aff",9,13.5,-31.7,14,10,Math.PI/2),Gn(t,9,`СПИ
СПОКОЙНО`,"HYPERION MNEMOCARE","#bfe9ff","#2ac0c0",9,13.5,31.7,14,10,-Math.PI/2),Pr(t,0,32.6,Math.PI,"МОНОРЕЛЬС");for(let M=0;M<2;M++){const T=t.add(new he),R=new Q(new Et(.7,.18,.7),W(1711396,.3,.8)),S=new Q(new Pe(.09,8,8),rt(16724016,3));S.position.y=-.12,T.add(R,S);const b=Do(13626111,2.2,7.5,.05);b.position.y=-3.9,T.add(b);const L=t.pool(13626111,3,0,.05,0,.5);t.updaters.push((B,O)=>{const G=O*.22+M*Math.PI;T.position.set(Math.cos(G)*20,8+Math.sin(O+M)*.3,10+Math.sin(G*(1+M*.5))*13),L.position.x=T.position.x,L.position.z=T.position.z,S.visible=Math.sin(O*6)>0})}t.room(-14,14,-30,-10,0,6,{wall:_t("labfloor",{color:9083560}),floor:_t("labfloor",{color:5924466,rep:[7,5]}),ceil:W(1053978,.95),doors:[{side:"s",at:0,w:3.2,h:3.4},{side:"s",at:10,w:1.5}]});const f=t.box(3.2,3.4,.05,0,0,-10,new ue({color:3850495,transparent:!0,opacity:.22,side:_e,blending:Ln,depthWrite:!1}),!1),d=t.col(-1.6,1.6,-10.25,-9.75,0,4);for(const M of[-1.75,1.75])t.box(.12,3.5,.3,M,0,-9.8,rt(3850495,2),!1);t.updaters.push((M,T,R)=>{const S=!!R.flag("hyp_access");f.visible=!S,d.on=!S,f.material.opacity=.16+Math.sin(T*20)*.03}),t.interact(f,{label:"Силовой барьер",if:M=>!M.flag("hyp_access"),use:M=>M.notify("Барьер. Охранник у стойки решает, кто войдёт.","warn")}),t.box(1.6,1.15,.8,3.4,0,-7.4,_t("panel",{color:10137792})),t.box(1.7,.05,.9,3.4,1.15,-7.4,rt(3850495,.8),!1);for(const M of[-3,5.5])for(let T=0;T<3;T++)t.cyl(.07,.9,M-T*1.4*Math.sign(M),0,-6.5,rt(3850495,1.2),!0);t.npc("bruno",He.bruno,2.4,0,-8.6,0),t.sign("КОНТРОЛЬ ДОСТУПА","#7fd4ff",.3,0,3.9,-9.75,0),t.sign("СЛУЖЕБНЫЙ ВХОД","#ffb040",.2,10,2.8,-9.78,0),t.door(10,0,-10,"x",1.5,{label:"Служебный вход",locked:M=>M.flag("hyp_access")||M.flag("service_open")?null:"Служебный шлюз заблокирован.",onLocked:M=>M.story.serviceDoor(M)}),t.light(13626111,12,22,0,5,-18),t.light(8377599,8,16,0,4,-27);for(const M of[-9,0,9])t.box(3,.06,.5,M,5.9,-20,rt(14677247,1.8),!1);t.box(6,1.1,1.2,0,0,-20,_t("labfloor",{color:10531008})),t.box(6.1,.05,1.3,0,1.1,-20,rt(8377599,.7),!1),t.sign("HYPERION","#bfe9ff",1.3,0,4.2,-29.7,0);const p=mi({coat:3850495,ghost:!0,hairStyle:"bun",coatLen:.7});p.group.position.set(0,.1,-21.2),t.scene.add(p.group);const _=t.box(.7,1.9,.7,0,0,-21.2,new ue({visible:!1}),!1);t.interact(_,{label:"Голо-администратор",use:M=>M.bark("holo"),range:4}),t.updaters.push((M,T)=>{p.group.visible=Math.sin(T*31)>-.97,p.group.rotation.y=Math.sin(T*.5)*.3});for(const M of[-11,11])t.box(1,.45,4,M,0,-15,W(1712168,.8)),t.box(.2,.9,4,M+Math.sign(M)*.6,0,-15,W(1712168,.8),!1);t.box(.5,2.6,.5,-8,0,-26,_t("labfloor",{color:10135734})),t.box(.5,2.6,.5,8,0,-26,_t("labfloor",{color:10135734})),zi(t,-5,0,-29.8,"x","Лифт — лаборатории",M=>M.story.labElevator(M),"ЛАБОРАТОРИИ • УР. 7",0),zi(t,5,0,-29.8,"x","Лифт — дирекция",M=>{M.teleport("krane")},"ДИРЕКЦИЯ",0),t.updaters.push((M,T,R)=>{const S=R.player.pos;!R.flag("intercom")&&S.y<2&&S.z<-11&&S.z>-30&&Math.abs(S.x)<14&&(R.set("intercom"),R.say("ИНТЕРКОМ — А. КРЕЙН","Детектив Каррен. Не утруждайтесь взломом — лифт в дирекцию открыт. Поднимайтесь. Я ждала вас дольше, чем вы думаете."))});const v=_t("labfloor",{color:12109008});t.room(-12,12,-34,-14,e,4,{wall:v,floor:_t("labfloor",{rep:[6,5]}),ceil:W(1712166,.95)}),zi(t,0,e,-14.2,"x","Лифт — вестибюль",M=>M.teleport("lobbyL"));for(const M of[-7,0,7])t.box(3.5,.05,.4,M,e+3.95,-24,rt(15267583,1),!1);t.light(14676223,6,18,0,e+3.4,-22),t.light(16726586,6,10,0,e+2,-31),t.light(3850495,5,10,-8,e+2,-28),t.box(24,.06,.06,0,e+3.2,-33.8,rt(16724016,1.6),!1),t.sign("ЛАБ-7 • МНЕМО-АРХИТЕКТУРА","#7fd4ff",.3,0,e+3.4,-14.25,Math.PI),t.sign("ИНЦИДЕНТ • ДОСТУП ОГРАНИЧЕН","#ff5a5a",.24,0,e+2.8,-33.78,0),t.cyl(1.3,.3,0,e,-27,_t("labfloor",{color:6977154}),!0);const m=t.cyl(.55,1.7,0,e+.3,-27,Tn(8377599,.28),!1);t.cyl(.6,.12,0,e+2,-27,W(1712168,.3,.8)),t.cyl(.1,.5,0,e+.3,-27,rt(16724016,1.2)),t.interact(m,{label:"Криоячейка архива",range:3.2,use:M=>{M.clue("c_cradle"),M.examine("Пустая криоячейка","Маркировка: «<b>ОРИГИНАЛЫ • 31 + 1</b>. Марлоу-стрит. Хранить вечно. Доступ: А. Крейн, Э. Вейн».<br><br>Ячейка вскрыта аккуратно, изнутри системы. Носитель извлечён. Рядом на полу — использованный нейрошунт: кто-то лил данные не на шард, а прямо в живую голову.<br><br>Тридцать один погибший. Кто тогда «плюс один»?")}}),t.box(.06,2.6,7,-5,e,-29.5,Tn(10477567,.16),!0),t.box(.06,2.6,7,5,e,-29.5,Tn(10477567,.16),!0),t.box(.8,.5,2,-8.5,e,-29,W(14673646,.4,.2)),t.box(.8,.9,.3,-8.5,e+.5,-29.9,W(14673646,.4,.2),!1);const h=t.add(new Q(new dn(.34,.04,8,30),rt(3850495,2)),-8.5,e+1.5,-29.6);t.interact(h,{label:"Кресло коррекции",use:M=>M.examine("Кресло мнемо-коррекции","Подголовник протёрт до блеска. На подлокотниках — мягкие фиксаторы. Табличка: «Процедура безболезненна. Вы не вспомните, что боялись».")});const x=t.screen(3.2,1.9,["М-09  ......  †","М-10  ......  †","М-11  ......  †","М-12  ЖЕНЩ. 24  ВЫЖИЛА","      → КОРРЕКЦИЯ ПОЛНАЯ","      → ЛЕГЕНДА: «СЕСТРА»","К-01  ОФИЦЕР  ДОБРОВОЛЬНО"],8.5,e+1.9,-33.82,0,"#bfe9ff","МАРЛОУ // СУБЪЕКТЫ");t.interact(x,{label:"Дисплей: список субъектов",range:4,use:M=>M.story.subjects(M)});const y=Pt.terminal(t,9.5,e,-20,-Math.PI/2,["АРХИВ ДЕЛ // ЗАЩИТА: ICE-3","MARLOW_2085.case","VEIL_rollout.plan","","> ДОСТУП ЗАКРЫТ"],"ЛАБ-7//ЯДРО","#7fd4ff");t.interact(y.children[0],{label:"Терминал ядра Лаб-7",range:3,use:M=>M.story.labTerminal(M)}),t.box(1.2,2,.6,-10.8,e,-18,_t("labfloor",{color:10135734}));const g=t.box(.9,1.2,.02,-10.8,e+.6,-17.68,rt(2792191,.8),!1);t.interact(g,{label:"Шкаф: нейрохладагент",range:2.8,use:M=>M.story.coolantCabinet(M)});for(const[M,T]of[[-3,-19],[3,-19]])Pt.table(t,M,e,T,2.2,.9,_t("labfloor",{color:13161180})),t.screen(.7,.42,["сеанс прерван","оператор: e.vane","02:07:44"],M,e+1.05,T,Math.PI,"#7fd4ff");t.room(-9,9,-30,-12,n,4.5,{wall:_t("panel",{color:10133674}),floor:_t("wood",{color:5921378,rough:.55}),ceil:W(790034,.95),doors:[{side:"n",at:0,w:15,h:3.6}]}),t.box(15,3.6,.06,0,n,-30,Tn(8368336,.12),!0);for(const M of[-7.5,-2.5,2.5,7.5])t.box(.08,3.6,.12,M,n,-30,W(790034,.3,.9),!1);zi(t,0,n,-12.2,"x","Лифт — вестибюль",M=>M.teleport("lobbyK")),t.box(4.2,.08,1.5,0,n+.78,-24,W(526604,.08,.9),!1),t.box(.3,.78,1.2,-1.7,n,-24,W(526604,.1,.9),!1),t.box(.3,.78,1.2,1.7,n,-24,W(526604,.1,.9),!1),t.col(-2.1,2.1,-24.75,-23.25,n,n+1),t.screen(.9,.5,["VEIL // развёртывание","готовность: 94%","аудит: через 3 дня","оригиналы: УТРАЧЕНЫ"],-1,n+1.14,-24.1,.25,"#bfe9ff","A.KRANE"),t.light(14674175,22,18,0,n+3.9,-20),t.light(16763024,12,12,-6,n+2.2,-15),t.light(5935359,5,12,6,n+3.6,-27),t.box(.5,1.4,.5,-7,n,-16,W(526604,.1,.9));const C=t.add(new Q(new _r(.32,0),new Oe({color:13148240,roughness:.15,metalness:1})),-7,n+1.8,-16);return t.updaters.push(M=>{C.rotation.y+=M*.4,C.rotation.x+=M*.2}),t.interact(C,{label:"Скульптура",use:M=>M.examine("«Забвение», золото","Табличка: «Дар благодарных семей Марлоу-стрит». Интересно, помнят ли семьи, за что благодарили.")}),t.box(2.4,.42,.9,6.6,n,-18,W(1316378,.6)),t.box(1.2,.03,.6,6.6,n+.5,-20,Tn(16777215,.3),!1),t.npc("krane",He.krane,0,n,-27,0),Cr(t,[{z:4,a:-22,b:22},{z:22,a:-22,b:22},{x:-20,a:-4,b:26}],6,55),Fo(t,50,115,190,29),t.enableRain(Math.floor(5e3*i.rain)),t.spawns={metro:{x:0,y:0,z:29,yaw:0},lobbyL:{x:-5,y:0,z:-27.6,yaw:Math.PI},lobbyK:{x:5,y:0,z:-27.6,yaw:Math.PI},lab:{x:0,y:e,z:-16.4,yaw:0},krane:{x:0,y:n,z:-14.4,yaw:0},menu:{x:6,y:0,z:22,yaw:.2}},t}function gh(i,t,e=1){return new xe({uniforms:{uBase:{value:new Tt(i)},uLine:{value:new Tt(t).multiplyScalar(e)},uTime:{value:0}},vertexShader:"varying vec3 vW; varying vec3 vN; void main(){ vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform vec3 uBase,uLine; varying vec3 vW; varying vec3 vN;
      float ln(float v){ float f=abs(fract(v)-0.5); return smoothstep(0.47,0.5,f); }
      void main(){ vec3 n=abs(vN); vec2 uv = n.y>0.5 ? vW.xz : (n.x>0.5 ? vW.zy : vW.xy);
        float g=max(ln(uv.x),ln(uv.y)); float g2=max(ln(uv.x*4.0),ln(uv.y*4.0))*0.18;
        float d=length(cameraPosition-vW); float fade=exp(-d*0.07);
        gl_FragColor=vec4((uBase+uLine*(g*0.55+g2))*fade,1.0); }`})}const _h=gh(663600,5949695),Zi=gh(398368,3838144,.8);function Lr(i,t=1.6){const e=new Kc({color:i});return e.color.multiplyScalar(t),e}const un=Lr(8380671),ug=Lr(16739024,1.4),Ji=Lr(5941448,1.5);function Qt(i,t,e,n,s,r,a,o=!0,l=Ji,c=_h){const u=i.box(t,e,n,s,r,a,c,o),f=new Jc(new Lm(u.geometry),l);return u.add(f),u}function cn(i,t,e,n,s,r,a){const o=mi({...t,ghost:!0});o.group.position.set(e,n,s),o.group.rotation.y=r,a?.(o),i.scene.add(o.group);const l=Math.random()*9;return i.updaters.push((c,u)=>{o.group.traverse(f=>{f.material?.opacity!==void 0&&f.material.transparent&&(f.material.opacity=.42+Math.sin(u*2.3+l)*.1+(Math.sin(u*37+l)>.96?-.3:0))})}),o}function Oo(i,t,e,n=10479871){const s=new Float32Array(t*3),r=[];for(let l=0;l<t;l++)s[l*3]=e[0]+Math.random()*(e[1]-e[0]),s[l*3+1]=e[2]+Math.random()*(e[3]-e[2]),s[l*3+2]=e[4]+Math.random()*(e[5]-e[4]),r.push(.05+Math.random()*.25);const a=new de;a.setAttribute("position",new Le(s,3));const o=new Qc(a,new wo({size:.09,map:wr(),color:n,transparent:!0,depthWrite:!1,blending:Ln,opacity:.8}));o.frustumCulled=!1,i.scene.add(o),i.updaters.push((l,c)=>{for(let u=0;u<t;u++)s[u*3+1]+=r[u]*l,s[u*3+1]>e[3]&&(s[u*3+1]=e[2]),s[u*3]+=Math.sin(c+u)*l*.05;a.attributes.position.needsUpdate=!0})}function Ee(i,t,e,n,s,r,a,o,l=.5){const c=new Q(new Ro(.11,0),rt(16777215,1.8));c.position.set(n,s,r),i.scene.add(c);const u=new Q(new Et(l,l,l),new ue({visible:!1}));c.add(u),i.updaters.push((f,d,p)=>{c.rotation.y=d*1.5,c.position.y=s+Math.sin(d*2+n)*.04;const _=p.memFound(t);c.scale.setScalar(_?.55:1+Math.sin(d*4+r)*.15),c.material=_?rt(16739024,1.2):rt(16777215,1.8)}),i.interact(u,{label:"Изучить: "+e,range:3.6,use:f=>f.memMark(t,a,o)})}function Bo(i,t,e,n,s){const r=new he;r.position.set(t,e,n),r.rotation.y=s,i.scene.add(r);const a=new Q(new dn(1,.04,8,40),rt(16777215,2.2));a.position.y=1.3,a.scale.y=1.25,r.add(a);const o=new Q(new di(.98,30),new ue({color:12578815,transparent:!0,opacity:.25,side:_e}));o.position.y=1.3,o.scale.y=1.25,r.add(o);const l=Io("ВСПЛЫТЬ","#ffffff",.26);l.position.y=2.85,r.add(l),i.updaters.push((c,u)=>{o.material.opacity=.2+Math.sin(u*3)*.08}),i.interact(o,{label:"Завершить погружение",range:3.4,use:c=>c.memExit()})}function zo(i,t,e){const n=new Ss(i,t,e,132877,.05);return n.isMemory=!0,n.amb.hum=.2,n.scene.add(new lh(8960989,1.2)),n}function fg(){const i=zo("mem_agnes","ПОГРУЖЕНИЕ // А. ВОЛЬФ","Запись: 13.11.2091 — коридор, этаж 7");Qt(i,30,.1,4,0,-.1,0,!1,Ji,Zi),Qt(i,30,3,.2,0,0,-2.1,!0),Qt(i,30,3,.2,0,0,2.1,!0),Qt(i,.2,3,4,-14.6,0,0,!0),Qt(i,30,.1,4,0,3,0,!1,Ji,Zi),Qt(i,.2,3,4,14.6,0,0,!0,un,new ue({color:13625584}));for(const n of[-6,6])Qt(i,1.5,2.5,.12,n,0,-1.96,!1,un);for(let n=-12;n<=12;n+=4)Qt(i,.9,.05,.25,n,2.9,0,!1,un,rt(10479871,.6));i.sign("7A","#bfefff",.22,-6,2.72,-1.92,0),i.sign("B7","#bfefff",.22,6,2.72,-1.92,0);const t=new Q(new di(.25,24),rt(12578815,.8));t.position.set(-14.45,2.2,0),t.rotation.y=Math.PI/2,i.scene.add(t),i.sign("23:40","#ffffff",.2,-14.44,1.75,0,Math.PI/2),cn(i,{coat:8377599,coatLen:.5,hairStyle:"short"},3.2,0,-.4,-Math.PI/2,n=>{n.legL.rotation.x=.4,n.legR.rotation.x=-.4}),cn(i,{coat:16726618,coatLen:1,hairStyle:"bald"},3.9,0,.35,-Math.PI/2,n=>{n.legL.rotation.x=-.4,n.legR.rotation.x=.4,n.armL.rotation.z=-.5});const e=new Q(new di(.5,20),new ue({color:0,transparent:!0,opacity:.8}));return e.rotation.x=-Math.PI/2,e.position.set(3.2,.012,-.4),e.scale.set(2.4,1,1),i.scene.add(e),Oo(i,220,[-14,14,0,3,-2,2]),Ee(i,"a_window","окно в торце",13.9,1.5,.9,"Окно","За стеклом — ровный белый свет, сухо, как в полдень. Запись помечена 23:40. В ту ночь над Тессерой стоял ливень: я сам промок, пока шёл сюда."),Ee(i,"a_plate","табличка на двери",6,2.3,-1.6,"Табличка квартиры","На двери Элиаса — «B7». Должно быть «7B». Агнес живёт напротив этой двери двадцать лет. Её собственная память так не ошибается. Чужой шаблон, собранный в спешке, — запросто."),Ee(i,"a_face","женщина в красном",4.1,1.75,.75,"Женщина в красном","У неё нет лица. Не скрыто капюшоном, не смазано движением — его просто нет, гладкая заготовка. Зато плащ проработан до строчки на поясе: красный, приметный. Кто-то хотел, чтобы запомнили именно плащ."),Ee(i,"a_shadow","пол под фигурами",3.5,.3,.9,"Тени","Элиас отбрасывает тень на ковёр. Женщина рядом с ним — нет. Свет один и тот же."),Ee(i,"a_hands","руки Элиаса",2.75,1.05,-.75,"Элиас","Идёт спокойно, руки пустые. Ни сумки, ни кейса. Лицо расслабленное — как на пропуске. Возможно, лицо и взято с пропуска."),Ee(i,"a_stain","пятно на ковре",-3,.25,.6,"Ковёр","Пятно от пролитого чая — точно такое же есть в настоящем коридоре. Основа записи подлинная: это действительно память Агнес, её коридор, её угол зрения."),Ee(i,"a_lamp","мерцающая лампа",-8,2.6,.4,"Лампа","Мерцает в том же сбивчивом ритме, что и наяву. Такие мелочи никто не подделывает — их просто не замечают. А вот то, что нарисовано поверх них, стоит перепроверить."),Bo(i,-11.5,0,0,Math.PI/2),i.spawns={start:{x:-9,y:0,z:0,yaw:-Math.PI/2}},i}function dg(){const i=zo("mem_lab7","ПОГРУЖЕНИЕ // НЕИЗВЕСТНЫЙ","Запись: 14.11.2091 02:07 — HYPERION, Лаб-7");Qt(i,24,.1,20,0,-.1,0,!1,Ji,Zi),Qt(i,24,.1,20,0,4,0,!1,Ji,Zi),Qt(i,24,4,.2,0,0,-10.1),Qt(i,24,4,.2,0,0,10.1),Qt(i,.2,4,20,-12.1,0,0),Qt(i,.2,4,20,12.1,0,0),i.cyl(1.3,.3,0,0,-3,_h,!0);const t=i.cyl(.5,1.7,0,.3,-3,rt(8380671,.9));i.updaters.push((s,r)=>{t.scale.x=t.scale.z=.6+Math.abs(Math.sin(r*2))*.4}),i.sign(`ОРИГИНАЛЫ 31+1
ВЫГРУЗКА 97%`,"#ffffff",.5,0,2.7,-3,0),i.sign(`ОРИГИНАЛЫ 31+1
ВЫГРУЗКА 97%`,"#ffffff",.5,0,2.7,-3.02,Math.PI),cn(i,{coat:8377599,coatLen:.9,hairStyle:"short"},1.6,0,-2.4,-1.9,s=>{s.head.rotation.x=.3,s.armR.rotation.x=-1.2});const e=[new P(.5,1.2,-3),new P(1,.6,-2.7),new P(1.55,1.62,-2.3)],n=new Zc(new de().setFromPoints(new eh(e).getPoints(20)),ug);i.scene.add(n),Qt(i,1.6,2.5,.2,0,0,9.9,!1,un),cn(i,{coat:10531071,coatLen:.9,hairStyle:"bun"},1.3,0,8.9,Math.PI+.5,s=>{s.armL.rotation.x=-1.4,s.armR.rotation.x=-.7,s.head.rotation.x=.35}),Qt(i,.06,2.6,7,-5,0,-5.5,!0,un,new ue({color:663600,transparent:!0,opacity:.5})),Qt(i,.06,2.6,7,5,0,-5.5,!0,un,new ue({color:663600,transparent:!0,opacity:.5})),Qt(i,3.2,1.9,.05,8.5,.95,-9.95,!1,un,rt(4885152,.5)),Qt(i,.9,1.6,.4,9.5,0,4,!0,un),Qt(i,2.2,.8,.9,-3,0,5,!0),Qt(i,2.2,.8,.9,3,0,5,!0),i.sign("02:07","#ffffff",.3,-11.95,3,0,Math.PI/2);for(let s=0;s<26;s++){const r=new Q(new Et(.02,.5,.02),rt(10479871,.8));r.position.set(-8+Math.random()*16,3.6,-8+Math.random()*16),i.scene.add(r)}return Oo(i,300,[-12,12,0,4,-10,10]),Ee(i,"l_cradle","криоячейка",0,1.3,-1.9,"Ячейка архива","«ОРИГИНАЛЫ 31+1 — выгрузка 97%». Он не копирует архив. Он его забирает: после выгрузки ячейка останется пустой."),Ee(i,"l_elias","человек у ячейки",1.9,1.75,-1.9,"Элиас Вейн","Шунт вставлен в затылочный порт. Он льёт тридцать два чужих оригинала прямо в собственную кору — ни один шард столько не вместит, а живой мозг вместит. Ненадолго. Без охлаждения — несколько суток."),Ee(i,"l_orlova","женщина у лифта",1,1.75,8.3,"Женщина у лифта","Инспектор Лена Орлова. В штатском, без жетона. Одной рукой держит створку лифта, другой — смотрит на часы. Она его не задерживает. Она стоит на стрёме."),Ee(i,"l_clock","часы и потолок",-11.3,2.7,.8,"Время и погода","02:07. По стеклянному фонарю ползут дождевые дорожки — ливень в ту ночь действительно шёл. Время сходится с остальной картиной, стыков монтажа не вижу."),Ee(i,"l_edge","рябь по краям",-9,1.5,7.5,"Рябь изображения","Стены на периферии крошатся в пиксели и собираются снова. Так выглядит сжатие с потерями: память снимали с человека второпях, на дешёвый шард. Монтаж обычно выглядит наоборот — слишком чисто."),Ee(i,"l_self","отражение в стекле",-4.6,1.5,-4,"Отражение наблюдателя","В перегородке отражается тот, чьими глазами я смотрю. Форма охраны HYPERION. Нашивка: «Б. ХЕЙЛ». Охранник с проходной видел всё — и промолчал. А потом продал память на рынке."),Ee(i,"l_list","настенный дисплей",8.5,1.9,-9.4,"Дисплей","Список субъектов Марлоу. В этой записи строка М-12 открыта: фото молодой женщины. Тёмные волосы, упрямый подбородок. Я видел это лицо сегодня — у себя в офисе."),Bo(i,0,0,7.4,0),i.spawns={start:{x:-2,y:0,z:6,yaw:0}},i}function pg(){const i=zo("mem_noah","ПОГРУЖЕНИЕ // Н. КАРРЕН — ОРИГИНАЛ","Запись: 02.03.2085 — клиника «Марлоу»");i.fog.density=.07;const t=Lr(16742986,1.6);Qt(i,8,.1,44,0,-.1,-18,!1,Ji,Zi),Qt(i,8,.1,44,0,3.4,-18,!1,t,Zi),Qt(i,.2,3.4,44,-4.1,0,-18,!0,t),Qt(i,.2,3.4,44,4.1,0,-18,!0,t),Qt(i,8,3.4,.2,0,0,4.1,!0),Qt(i,8,3.4,.2,0,0,-40.1,!0,t);for(let n=0;n<8;n++){const s=-3-n*4.2,r=n%2?1:-1;Qt(i,.8,.5,1.8,r*3.1,0,s,!0,t),n<6&&cn(i,{coat:16742986,coatLen:.2,hairStyle:"bald"},r*3.1,.25,s+.3,0,a=>{a.group.rotation.x=-1.2})}for(let n=0;n<14;n++){const s=new Q(new jn(.3+Math.random()*.3,1+Math.random()*1.6,5),rt(16747082,1.6));s.position.set((Math.random()<.5?-1:1)*(2.6+Math.random()),.6,-2-Math.random()*36),i.scene.add(s);const r=Math.random()*9;i.updaters.push((a,o)=>{s.scale.y=1+Math.sin(o*9+r)*.35,s.rotation.y=o+r})}Oo(i,400,[-4,4,0,3.4,-40,4],16756864),cn(i,{coat:12578815,coatLen:.9,hairStyle:"short"},.4,0,-9,0,n=>{n.armL.rotation.x=-1.3,n.armR.rotation.x=-1.3}),cn(i,{coat:16739024,coatLen:.2,hairStyle:"long",height:.9},.4,.95,-8.55,Math.PI/2,n=>{n.group.rotation.z=Math.PI/2}),cn(i,{coat:16777215,coatLen:.9,hairStyle:"bun"},-1.2,0,-21,.4,n=>{n.armR.rotation.x=-1.1}),Qt(i,.3,.4,.02,-.9,1.1,-20.6,!1,un,rt(16777215,.8)),Qt(i,.9,.5,2,0,0,-34,!0,un),cn(i,{coat:12578815,coatLen:.9,hairStyle:"short"},0,.3,-33.6,0,n=>{n.group.rotation.x=-1.1}),cn(i,{coat:8377599,coatLen:.9,hairStyle:"short"},1.1,0,-34.6,-.9,n=>{n.armL.rotation.x=-1.5,n.armR.rotation.x=-1.5});const e=new Q(new dn(.3,.03,8,30),rt(16777215,2));return e.position.set(0,1.25,-34.9),i.scene.add(e),i.updaters.push((n,s)=>{e.rotation.z=s*2}),Ee(i,"n_fire","ряды кресел",1.2,1.4,-3.5,"Фрагмент: зал","Клиника «Марлоу». Я вхожу в дым с фонарём. Кресла коррекции — в два ряда, и в каждом человек. Пристёгнутые. Тридцать один.<br><br>Они сгорели не в пожаре. У них спеклась кора — массовая процедура, сбой на пике нагрузки. Огонь пришёл позже. Чтобы было что написать в отчёте."),Ee(i,"n_girl","человек с ношей",1.3,1.5,-8.6,"Фрагмент: девушка","Это я. Шесть лет назад, ещё с жетоном. Я несу на руках девушку — живую, единственную живую. На браслете: «М-12».<br><br>Она цепляется за мой воротник и шепчет: «Я всё видела. Я всем расскажу». У неё упрямый подбородок. У Миры такой же.<br><br>У Миры — этот самый."),Ee(i,"n_deal","женщина с планшетом",-.3,1.5,-20.3,"Фрагмент: сделка","Августа Крейн. Моложе, без седины, в чужом пальто поверх халата. Протягивает планшет.<br><br>«Она не доживёт до суда, детектив, и вы это знаете. Совет не оставляет свидетелей. Либо она забудет — либо её не станет. Подпишите, что это был пожар, и я дам ей новую жизнь. А вам… вы ведь тоже не хотите это помнить, правда?»<br><br>Внизу договора — сумма. И пустая строка для подписи."),Ee(i,"n_chair","кресло в конце коридора",.8,1.6,-33.2,"Фрагмент: кресло","В кресле — я. Надо мной — молодой инженер, руки трясутся, на бейдже «Э. ВЕЙН, стажёр».<br><br>Мой голос, ровный, чужой: «Сотри. Всё. И ей тоже. И дай ей кого-нибудь… кого можно любить. Чтобы не была одна».<br><br>Он кивает. Он дал ей брата. Он шесть лет был ей братом — потому что я попросил."),Bo(i,0,0,2.6,0),i.spawns={start:{x:0,y:0,z:.5,yaw:0}},i}const Sn="noah",hc={mira:{start:i=>i.flag("mira_briefed")?i.flag("mira_detained")?"detained":i.flag("mira_accused")?"cold":"hub":"intro",nodes:{intro:{text:"Вы Каррен? Тот самый, из отдела мнемо-преступлений?.. Бывший. Простите. Меня зовут Мира Вейн. Мой брат пропал три дня назад, и никто — слышите, никто — не хочет его искать.",choices:[{t:"Сядьте. Расскажите по порядку.",tone:"friendly",go:"i_story",do:i=>i.trust("mira",1)},{t:"Полиция не ищет — значит, есть причина. Какая?",tone:"pressure",go:"i_press"},{t:"Мои расценки — четыреста вперёд.",go:"i_money"}]},i_story:{text:"Элиас Вейн. Мнемо-архитектор в HYPERION, Лаб-7. Тринадцатого он не вернулся с ночной смены. В корпорации говорят — уволился. В полиции — «взрослый человек имеет право исчезнуть». Но он бы не ушёл, не сказав мне. Мы… у нас никого больше нет.",go:"i_give"},i_press:{text:"(Она сжимает ремешок сумки.) Причина в том, что он работал на HYPERION. Вы лучше меня знаете, на кого работает полиция. Заявление даже не приняли. Инспектор… Орлова, кажется… сказала: «Не тратьте память на тех, кто хочет быть забытым».",go:"i_give"},i_money:{text:"Конечно. (Кладёт на стол чип.) Здесь четыреста. Всё, что я успела снять, пока не заморозили его счета. Найдите его — и я продам хоть детство.",go:"i_give"},i_give:{text:"Вот ключ от его квартиры — блок «Тессера», 7B. И фотография: единственная, где мы вместе. Озеро Вирен, наше детство. Он там смеётся. Он редко смеётся.",do:i=>{i.earn(400),i.give("i_key"),i.give("i_photo");for(const t of["p_mira","p_elias","c_photo","l_apartment","e_disappear"])i.clue(t,!0);i.set("mira_briefed"),i.log("Мира Вейн наняла меня найти её брата Элиаса. Аванс — 400₵.")},go:"i_end"},i_end:{who:Sn,text:"(Она держит фотографию так, будто боится, что та исчезнет. Что-то в этом деле уже не так — и я пока не понимаю что. Транзит — на площади за переулком.)"},hub:{text:i=>i.flag("mira_told")?"Я здесь. Я… привыкаю к тому, что не знаю, кто я. Спрашивайте.":"Я подожду здесь, если можно. Мне кажется, за моей квартирой следят. Есть новости?",choices:[{t:"Расскажите о брате.",once:!0,go:"t_elias"},{t:"Расскажите о вашем детстве.",go:i=>i.flag("mira_child")?"t_child2":"t_child",if:i=>!i.flag("mira_told")},{t:"Красивый плащ. Часто его носите?",once:!0,if:i=>i.hasClue("c_agnes_testimony"),go:"t_coat"},{t:"В квартире Элиаса есть фото: родители и один ребёнок.",once:!0,if:i=>i.hasClue("c_family_photo")&&!i.flag("mira_told"),go:"t_photo"},{t:"Соседка видела, как Элиас ушёл с женщиной в красном. С вами.",tone:"pressure",if:i=>i.s.theory==="f_mira",go:"accuse"},{t:"Мира. Я должен сказать вам кое-что о вас самой.",if:i=>i.ded("d_mira_m12")&&!i.flag("mira_told")&&!i.flag("mira_spared"),go:"truth"},{t:"Я нашёл Элиаса.",if:i=>i.flag("met_elias")&&!i.flag("mira_knows_elias"),go:"found"},{t:"Пока всё."}]},t_elias:{text:"Тихий. Упрямый. В детстве разбирал будильники, чтобы понять, куда уходит время. В последние месяцы почти не спал. Говорил: «Мира, я строю кое-что, чего не должно быть». Я спросила — что. Он ответил: «Забвение. Оптом».",go:"hub"},t_child:{text:"Лето на озере Вирен. Папа учил нас ловить окуней, Эли упал с мостков, я вытащила его за капюшон, и мы смеялись, пока не охрипли. Мама жарила рыбу на углях.",do:i=>i.set("mira_child"),go:"hub"},t_child2:{text:"Лето на озере Вирен. Папа учил нас ловить окуней, Эли упал с мостков, я вытащила его за капюшон, и мы смеялись, пока не охрипли. Мама жарила рыбу на углях.",go:"t_child3"},t_child3:{who:Sn,text:"(Слово в слово. Та же пауза перед «охрипли». Живые воспоминания так не звучат — они каждый раз чуть другие. Так звучит запись.)",do:i=>{i.set("mira_child2"),i.clue("c_mira_loop")},go:"hub"},t_coat:{text:"Этот? Каждый день. Эли подарил на день рождения. Сказал — «чтобы я всегда мог найти тебя в толпе». (Улыбается.) А что?",do:i=>i.clue("c_red_coat"),choices:[{t:"Ничего. Профессиональная наблюдательность.",go:"hub"},{t:"Где вы были в ночь на четырнадцатое, в 23:40?",tone:"pressure",go:"t_alibi"}]},t_alibi:{text:"Дома. Одна. Спала. (Пауза.) Вы… вы меня подозреваете? Я же сама вас наняла!",do:i=>i.trust("mira",-1),go:"hub"},t_photo:{text:"Один ребёнок? Нет, это… значит, меня не было в кадре. Я, наверное, снимала. (Она трёт висок.) Странно. Я не помню, чтобы у нас был фотоаппарат.",do:i=>i.set("mira_doubt"),go:"hub"},accuse:{text:"Что?.. Нет. Нет! Я не была там! Я… (Она отступает к двери.) Вы такой же, как они. Вам просто нужен виноватый.",choices:[{t:"Тогда объясните плащ.",tone:"pressure",go:"accuse2"},{t:"Простите. Я обязан был спросить.",tone:"friendly",go:"hub",do:i=>{i.trust("mira",-1),i.set("mira_shaken")}}]},accuse2:{text:"Я не могу объяснить! Я не помню ту ночь, ясно?! Я проснулась в одежде, с грязью на ботинках — и не помню! (Тише.) Я боюсь, детектив. Я боюсь, что вы правы.",do:i=>{i.set("mira_accused"),i.set("mira_confessed_gap"),i.trust("mira",-2),i.log("Я обвинил Миру. Она призналась, что не помнит ночь на 14-е.")},choices:[{t:"Я вызываю инспектора Орлову. Сядьте и ждите.",tone:"threat",go:"arrest"},{t:"Никуда не уходите. Я разберусь."}]},arrest:{text:"(Она опускается на диван и закрывает лицо руками.) Делайте что хотите. Только найдите его. Даже если это я…",do:i=>{i.set("mira_detained"),i.log("Мира ждёт в офисе. Осталось сообщить Орловой на посту VCPD.")},go:"arrest2"},arrest2:{who:Sn,text:"(Провал в памяти — это не признание. Но Орловой хватит. Пост VCPD — на проспекте, западнее офиса. Ещё не поздно передумать.)"},detained:{text:"(Она сидит на диване, обхватив колени, и не поднимает глаз.)",choices:[{t:"Я поторопился. Вы свободны. Простите.",tone:"friendly",do:i=>{i.set("mira_detained",!1),i.set("mira_accused",!1),i.set("mira_scarred")},go:"forgiven"},{t:"(Уйти.)"}]},cold:{text:"(Она не поднимает глаз.) Вы уже всё решили, детектив.",choices:[{t:"Я ошибся насчёт вас. Простите.",tone:"friendly",if:i=>i.s.theory!=="f_mira",do:i=>{i.set("mira_accused",!1),i.set("mira_scarred")},go:"forgiven"},{t:"Я вызываю инспектора Орлову.",tone:"threat",go:"arrest"},{t:"(Уйти.)"}]},forgiven:{text:"…Ошиблись. (Долгая пауза.) Найдите его. Потом извинитесь ещё раз — когда я смогу это слушать.",go:"hub"},truth:{text:"(Вы кладёте перед ней копию строки: «М-12. Коррекция полная. Легенда: „сестра“».) Что это?",choices:[{t:"У Элиаса нет сестры. Вашу память переписали шесть лет назад. Вы — единственная выжившая на Марлоу-стрит.",tone:"friendly",go:"truth_yes"},{t:"Ошибка в базе HYPERION. Забудьте.",tone:"lie",go:"truth_no"}]},truth_yes:{text:"(Она долго молчит. Потом смеётся — коротко, страшно.) Озеро. Окуни. Капюшон… Я ведь даже плавать не умею, детектив. Я всегда думала — как же я его вытащила? (Вытирает глаза.) Он мне не брат. Но шесть лет он приходил каждое воскресенье. Это — было. Это ведь было?",do:i=>{i.set("mira_told"),i.trust("mira",1),i.log("Я рассказал Мире, кто она на самом деле.")},choices:[{t:"Это было.",go:"truth_end"},{t:"Я не знаю, Мира. Я сам не знаю, что из моего — было.",go:"truth_end"}]},truth_end:{text:"Тогда найдите его. Мне есть что ему сказать. И… спасибо, что не соврали. Мне, кажется, врали всю жизнь — ту, которую я помню."},truth_no:{text:"(Она смотрит на вас дольше, чем нужно.) Хорошо. Ошибка. (Убирает листок в карман плаща.)",do:i=>i.set("mira_spared"),go:"hub"},found:{text:"Жив?! Где он? Я должна… (Она уже у двери.)",choices:[{t:"Он умирает, Мира. Он просил передать: воскресенья были настоящими.",tone:"friendly",do:i=>{i.set("mira_knows_elias"),i.trust("mira",1)},go:"found1"},{t:"Он уехал из города. Он в безопасности. Не ищите.",tone:"lie",do:i=>{i.set("mira_knows_elias"),i.set("mira_lied_elias")},go:"found2"}]},found1:{text:"(Она прижимает ладонь ко рту.) Воскресенья… Отведите меня к нему. Нет — сначала закончите то, что начали. Он бы так хотел. Я подожду. Я умею ждать, оказывается, — меня этому научили."},found2:{text:"Уехал… Не попрощавшись. (Она медленно садится.) Это на него похоже. Нет. Это на него совсем не похоже. Но я вам верю, детектив. Мне больше некому."}}},agnes:{start:i=>i.s.npc.agnes?.met?"hub":"intro",nodes:{intro:{text:"Вы к Вейну? Опоздали, молодой человек. Нету его. А вы кто — из корпорации? Те уже были.",do:i=>i.clue("p_agnes",!0),choices:[{t:"Частный детектив. Его ищет сестра. Вы, похоже, единственная, кто здесь что-то замечает.",tone:"friendly",go:"a_friendly",do:i=>i.trust("agnes",1)},{t:"Кто «те»? Когда были? Отвечайте по порядку.",tone:"pressure",go:"a_press",do:i=>i.trust("agnes",-1)},{t:"Управляющая компания. Проверка жалоб на шум.",tone:"lie",go:"a_lie",do:i=>i.trust("agnes",-1)}]},a_friendly:{text:"Сестра… Не знала, что у него сестра. Он один жил, тихий такой. (Поправляет шаль.) Замечаю, да. Сорок лет учительницей — глаз намётан. Спрашивайте.",go:"hub"},a_press:{text:"(Поджимает губы.) Тон смените. Я учила таких, как вы, не перебивать старших. …Двое. В сером. Вежливые. Когда — не помню.",go:"hub"},a_lie:{text:"На шум? В седьмом «Б»? Там тише, чем в морге. Врёте вы, молодой человек, и врёте плохо. Ну да ладно. Чего хотели-то?",go:"hub"},hub:{text:"Ну? Я слушаю.",choices:[{t:"Вы видели Элиаса в ночь на четырнадцатое?",once:!0,go:"testimony"},{t:"Что за люди из корпорации к вам приходили?",once:!0,go:"cleaners"},{t:"Можно скопировать вашу запись того вечера? Для дела.",tone:"friendly",if:i=>i.flag("agnes_testified")&&!i.flag("agnes_shard"),go:i=>i.trust("agnes")>=1?"give_shard":"refuse"},{t:"Сто кредитов за копию записи.",tone:"bribe",cost:100,if:i=>i.flag("agnes_testified")&&!i.flag("agnes_shard"),go:"give_shard2"},{t:"Мэм, препятствование следствию — это статья.",tone:"threat",if:i=>i.flag("agnes_testified")&&!i.flag("agnes_shard"),go:"shut"},{t:"Агнес. Вашу память о том вечере подделали.",if:i=>i.flag("mem_agnes_verdict")==="fake"&&!i.flag("agnes_told")&&!i.flag("agnes_spared"),go:"tell"},{t:"Берегите себя."}]},testimony:{text:"Видела, как же. Двадцать три сорок — я всегда в это время пью таблетки. Вышел из квартиры с женщиной. Красный плащ, с поясом. Под руку шли, к лифту. Он ещё дверь не запер. (Хмурится.) Лица её не помню. Странно. Плащ помню, а лица — нет.",do:i=>{i.clue("c_agnes_testimony"),i.set("agnes_testified"),i.log("Агнес Вольф: Элиас ушёл в 23:40 с женщиной в красном плаще.")},go:i=>i.flag("mira_briefed")?"testimony2":"hub"},testimony2:{who:Sn,text:"(Красный плащ с поясом. Я видел такой час назад — у себя в офисе.)",do:i=>i.clue("c_red_coat"),go:"hub"},cleaners:{text:"Двое, в сером, с планшетом. Сказали — плановая калибровка бэкапа. У меня ведь страховой бэкап памяти, сын настоял. Посидели полчаса, чаю не захотели. После них голова болела до утра.",do:i=>i.set("agnes_cleaners_talk"),go:"hub"},give_shard:{text:"Берите. Сын говорит, оно всё равно в облаке лежит. (Достаёт из кармана халата шард.) Только верните. Это всё-таки мой вечер.",do:i=>{i.give("i_shard_agnes"),i.set("agnes_shard"),i.clue("c_mem_agnes")},go:"hub"},give_shard2:{text:"(Она смотрит на чип, потом на вас — как на двоечника.) Пенсия у меня сорок в месяц. Берите свою запись. И не думайте, что я не заметила, как вы это провернули.",do:i=>{i.give("i_shard_agnes"),i.set("agnes_shard"),i.clue("c_mem_agnes")},go:"hub"},refuse:{text:"Копию? Моей головы? Нет уж. Вы мне пока никто.",go:"hub"},shut:{text:"(Она отступает в квартиру, и дверь захлопывается у вас перед носом. Щёлкает замок.) — Статья! Я вам покажу статью!",do:i=>{i.set("agnes_shut"),i.trust("agnes",-3)},go:"shut2"},shut2:{who:Sn,text:"(Блестяще, Каррен. Остаётся страховой бэкап-модуль у её двери — если не жалко совести.)"},tell:{text:"Подделали? (Она садится на коробку у стены.) То есть я… я не видела ту женщину?",choices:[{t:"Нет. К вам приходили двое в сером. Они вписали её в ваш вечер.",tone:"friendly",go:"tell_yes"},{t:"Забудьте. Просто сбой записи.",tone:"lie",go:"tell_no"}]},tell_yes:{text:"(Долгая пауза.) Сорок лет я говорила детям: память — это вы и есть. …Что ещё не моё, детектив? Сын — мой? (Пытается улыбнуться.) Идите. Найдите их. А я посижу, поперебираю, что у меня настоящее.",do:i=>{i.set("agnes_told"),i.trust("agnes",1)}},tell_no:{text:"Сбой… Ну, техника. Ладно. (Она смотрит на дверь напротив.) А всё-таки жалко. Красивая была пара.",do:i=>i.set("agnes_spared")}}},orlova:{start:i=>i.s.npc.orlova?.met?"hub":"intro",nodes:{intro:{text:"Каррен. (Она даже не оборачивается.) Шесть лет ни звонка, а теперь ты ходишь по моему участку с лицом человека, который взял дело. Дай угадаю: Вейн.",do:i=>i.clue("p_orlova",!0),choices:[{t:"Рад тебя видеть, Лена.",tone:"friendly",go:"o1",do:i=>i.trust("orlova",1)},{t:"Ты отказалась принять заявление его сестры. Почему?",tone:"pressure",go:"o2"}]},o1:{text:"Не ври. Ты не рад — ты не помнишь, за что должен быть рад. (Наконец смотрит на вас.) Ладно. Спрашивай.",go:"hub"},o2:{text:"Потому что у Элиаса Вейна нет… (осекается) …нет состава. Взрослый человек ушёл из дома. Дело закрыто сверху, Ной. Сверху — это оттуда, куда ты не дотянешься.",do:i=>i.set("orlova_slip"),go:"o2n"},o2n:{who:Sn,text:"(«У Элиаса Вейна нет…» — чего? Она хотела сказать что-то другое.)",go:"hub"},hub:{text:"Что ещё?",choices:[{t:"Что ты знаешь про Вейна?",once:!0,go:"vane"},{t:"Мне нужен код от камер «Тессеры». Ты мне должна — за Марлоу.",tone:"manip",once:!0,if:i=>!i.flag("cctv_access"),go:"code_manip"},{t:"По старой дружбе: код от камер «Тессеры».",tone:"friendly",once:!0,if:i=>!i.flag("cctv_access"),go:i=>i.trust("orlova")>=1?"code_ok":"code_no"},{t:"Сто пятьдесят за код от камер.",tone:"bribe",cost:150,if:i=>!i.flag("cctv_access"),go:"code_bribe"},{t:"Что случилось на Марлоу-стрит?",once:!0,if:i=>i.flag("saw_commend")||i.flag("saw_memorial")||i.flag("orlova_marlow_react")||i.hasClue("c_hidden_msg"),go:"marlow"},{t:"Я видел запись из Лаб-7. Ты держала ему лифт.",tone:"pressure",if:i=>i.ded("d_orlova")&&!i.flag("orlova_confronted"),go:"confront"},{t:"Дело раскрыто. Мира Вейн ждёт у меня в офисе.",if:i=>i.flag("mira_detained"),go:"handover"},{t:"Сойка с Нижнего яруса убила Вейна ради импланта. Нужен рейд.",if:i=>i.s.theory==="f_soyka"&&i.s.npc.soyka?.met,go:"raid"},{t:"Лена. У меня архив оригиналов. Давай сделаем это по закону.",if:i=>i.has("i_archive")&&i.flag("orlova_ally"),go:"law"},{t:"Бывай."}]},vane:{text:"Мнемо-архитектор. Лучший в Лаб-7. Тринадцатого ночью в HYPERION сработала тревога, через час её отменили и стёрли из сводки. Официально он уволился. Неофициально — служба безопасности Крейн даёт за его голову столько, сколько мы с тобой не заработали за всю службу.",go:"hub"},code_manip:{text:"(Она бледнеет.) Что ты сказал?.. Ты помнишь? (Вглядывается вам в лицо.) Нет. Не помнишь. Просто слово услышал. (Быстро пишет на карточке.) Вот код. И больше никогда не произноси при мне эту улицу.",do:i=>{i.set("cctv_access"),i.set("orlova_marlow_react"),i.log("Орлова дала код от камер «Тессеры». На слово «Марлоу» отреагировала так, будто я выстрелил.")},go:"hub"},code_ok:{text:"Четыре цифры, действует сутки. (Суёт карточку вам в карман.) Я тебе ничего не давала.",do:i=>i.set("cctv_access"),go:"hub"},code_no:{text:"Дружба кончилась, когда ты сдал жетон и перестал здороваться. Нет.",go:"hub"},code_bribe:{text:"(Берёт чип не глядя.) Раньше ты презирал таких, как я. Раньше ты много чего. Код на обороте.",do:i=>{i.set("cctv_access"),i.set("orlova_bribed")},go:"hub"},marlow:{text:"Пожар. Клиника памяти, тридцать один погибший. Ты вёл дело, я была напарницей. Ты закрыл его за девять дней: «замыкание, несчастный случай». Получил грамоту и через месяц ушёл из полиции. Всё есть в архиве. (Пауза.) Всё, кроме того, что было.",do:i=>{i.clue("e_marlow"),i.clue("l_marlow",!0),i.clue("p_noah",!0)},go:"hub"},confront:{text:"(Долго молчит. Мигалка красит её лицо то красным, то синим.) Держала. Он позвонил мне сам. Сказал: «Инспектор, я знаю, что вы подписали в восемьдесят пятом. Я могу это вернуть». Я шесть лет ждала, что кто-нибудь это скажет.",choices:[{t:"Что ты подписала?",tone:"friendly",go:"c_ally"},{t:"Соучастие в краже корпоративных данных. Тебе конец, если я заговорю.",tone:"threat",go:"c_hostile"}]},c_ally:{text:"То же, что и ты. Только ты попросил, чтобы тебя заставили забыть. А я отказалась. Кто-то должен был помнить, Ной. Я помню за двоих. Это… тяжелее, чем кажется.",do:i=>{i.set("orlova_confronted"),i.set("orlova_ally"),i.trust("orlova",2),i.clue("p_noah",!0),i.log("Орлова помнит Марлоу-стрит «за двоих». Она помогла Элиасу уйти.")},go:"c_ally2"},c_ally2:{text:"Найди его раньше Крейн. И когда найдёшь — реши наконец сам. В тот раз ты решил не решать. Если понадобится закон — настоящий, не корпоративный, — приходи. У меня ещё есть жетон.",go:"hub"},c_hostile:{text:"(Усмехается.) Вот теперь узнаю. Ты и тогда выбирал, на кого надавить, — вместо того чтобы выбрать, на чьей ты стороне. Иди, Каррен. Говори кому хочешь. Твой жетон я на всякий случай внесу в стоп-лист.",do:i=>{i.set("orlova_confronted"),i.set("orlova_hostile"),i.trust("orlova",-2)}},handover:{text:"Мира Вейн? (Листает планшет. Очень долго.) Показания соседки, красный плащ, провал в памяти. Красиво. Чисто. Крейн будет довольна — ей как раз не хватало виноватого. (Поднимает глаза.) Ты уверен, Ной? Закрою дело — обратно не открою.",choices:[{t:"Уверен. Закрывай.",do:i=>i.ending("scapegoat")},{t:"…Нет. Дай мне ещё время.",go:"handover_no"}]},handover_no:{text:"Думай быстрее. Она сидит у тебя в офисе и ждёт приговора. Это тоже пытка.",go:"hub"},raid:{text:"Сойка? Подпольный хирург? (Пожимает плечами.) Если ты прав — я герой сводки. Если нет — зачистить ярус всё равно давно просят сверху. Подтверждаешь наводку официально?",choices:[{t:"Подтверждаю. Берите клинику.",do:i=>i.ending("raid")},{t:"Подожди. Мне нужно ещё кое-что проверить.",go:"hub"}]},law:{text:"По закону. (Она смотрит на шард, как на гранату.) Это значит — я, ты, Крейн, все на одной скамье. Лет через пять. Если архив не «потеряется» в хранилище улик. …Я согласна. А ты?",choices:[{t:"Согласен. Оформляй явку с повинной — мою первой.",do:i=>i.ending("law")},{t:"Нет. Слишком медленно. Слишком много рук.",go:"hub"}]}}},theo:{start:i=>i.s.npc.theo?.met?"hub":"intro",nodes:{intro:{text:"(Не отрываясь от лапши.) Если ты из VCPD — я просто ем. Если из HYPERION — я просто ем, и у меня есть адвокат. Если ты Каррен — садись, я угощаю.",choices:[{t:"Откуда ты меня знаешь?",go:"i2"}]},i2:{text:"Я знаю всех, кто закрывал дела, которые пахнут. Тео Замбрано, «Свободная частота». Пиратское вещание, четыре района, ноль рекламы. Ты закрыл Марлоу-стрит. Я шесть лет пытаюсь его открыть.",do:i=>{i.clue("p_theo",!0),i.clue("p_noah",!0)},go:"hub"},hub:{text:"Лапша стынет. Говори.",choices:[{t:"Что ты знаешь про Марлоу-стрит?",once:!0,go:"marlow"},{t:"Элиас Вейн. Слышал?",once:!0,go:"vane"},{t:"У меня есть переписка Крейн о проекте «Вуаль».",tone:"friendly",once:!0,if:i=>i.hasClue("c_mail_veil")&&!i.flag("theo_code"),go:"code"},{t:"Мне нужен доступ к передатчику. Сейчас. Объясню потом.",tone:"manip",once:!0,if:i=>!i.flag("theo_code"),go:"no_manip"},{t:"Назови цену за доступ на крышу.",tone:"bribe",once:!0,if:i=>!i.flag("theo_code"),go:"no_bribe"},{t:"Крейн предлагает деньги за твой адрес. Я не взял. Пока.",once:!0,if:i=>i.flag("krane_asked_source")&&!i.flag("theo_sold"),go:"warned"},{t:"Бывай."}]},marlow:{text:"Тридцать один труп — и ни одного свидетеля. Вдумайся: клиника в жилом квартале, ночь, пожар — и никто ничего не помнит. Ни соседи, ни пожарные. Даже следователь. (Смотрит на вас.) Особенно следователь.",do:i=>{i.clue("e_marlow"),i.clue("l_marlow",!0)},go:"hub"},vane:{text:"Слышал, что он унёс из HYPERION что-то, от чего Крейн перестала спать. Если это то, о чём я думаю, — неси мне. Передатчик на крыше в переулке покрывает четыре района. За одну ночь это увидят все. А что увидел город — того уже не сотрёшь. Даже им.",go:"hub"},code:{text:"«Оригиналы уничтожить до аудита»… (Присвистывает.) Для эфира мало. Чтобы я тебе поверил — достаточно. Лифт в переулке за твоим офисом, код 0-2-0-3. Дата пожара. Крыша твоя, когда понадобится.",do:i=>{i.set("theo_code"),i.trust("theo",2),i.log("Тео дал код лифта к пиратскому передатчику.")},go:"hub"},no_manip:{text:"«Объясню потом» — девиз людей, которые никогда не объясняют. Нет.",go:"hub"},no_bribe:{text:"Я ем лапшу за три кредита и сплю на крыше под антенной. Угадай, что я думаю о твоих деньгах.",go:"hub"},warned:{text:"И ты пришёл предупредить, а не продать? (Долгий взгляд поверх очков.) Спасибо. Я сменю точку ночёвки. Передатчик не трону — он нужнее меня.",do:i=>{i.set("theo_warned"),i.trust("theo",1)},go:"hub"}}},garth:{start:i=>i.s.npc.garth?.met?"hub":"intro",nodes:{intro:{text:"(Протирает стакан железной рукой — протез рыжий от ржавчины.) Новое лицо. Новые лица платят вперёд. Что пьём?",do:i=>i.clue("p_garth",!0),choices:[{t:"Синт-виски. И разговор.",cost:10,go:"g1",do:i=>i.trust("garth",1)},{t:"Я ищу Сойку. Говори, где она.",tone:"pressure",go:"g2",do:i=>i.trust("garth",-1)},{t:"Ничего. Просто смотрю.",go:"hub"}]},g1:{text:"Виски — десять. Разговор — смотря о чём. (Наливает.) Ну?",go:"hub"},g2:{text:"(Ставит стакан. Медленно.) Здесь так не разговаривают. Здесь так разговаривают один раз.",go:"hub"},hub:{text:i=>i.flag("garth_done")&&!i.flag("garth_sold")?"Для тебя — за счёт заведения. Чего надо?":"Ну?",choices:[{t:"Мне сказали «спросить Ржавого» про Сойку.",once:!0,if:i=>i.hasClue("c_note_soyka"),go:"soyka"},{t:"Сотня. Что нового у Сойки?",tone:"bribe",cost:100,if:i=>!i.hasClue("c_coolant")&&i.trust("garth")<2,go:"coolant"},{t:"Что нового у Сойки? По-дружески.",tone:"friendly",if:i=>!i.hasClue("c_coolant")&&i.trust("garth")>=2,go:"coolant"},{t:"Я могу привести сюда VCPD. Камеры, штрафы, рейд.",tone:"threat",once:!0,go:"threat"},{t:"Ты выглядишь так, будто что-то потерял.",tone:"friendly",once:!0,if:i=>i.trust("garth")>=1&&!i.flag("q_garth"),go:"quest"},{t:"Вот. День рождения Лин. Это твоё.",tone:"friendly",if:i=>i.has("i_shard_garth"),go:"return"},{t:"Шард с днём рождения у меня. Сто пятьдесят.",tone:"bribe",if:i=>i.has("i_shard_garth"),go:"sell"},{t:"Мне кажется, за мной следят. Не видишь на мне ничего лишнего?",if:i=>i.flag("tracked")&&i.trust("garth")>=2,go:"bug"},{t:"Бывай, Ржавый."}]},soyka:{text:"Сойка — хирург. Клиника через рынок, зелёный крест. Латает тех, кого наверху не считают людьми. Меня собрала после обвала на девятом. (Стучит по протезу.) Обидишь её — я узнаю.",do:i=>{i.clue("p_soyka",!0),i.clue("l_clinic",!0)},go:"hub"},coolant:{text:"Нового? Она третий день скупает нейрохладагент. Весь, что есть на ярусе. Столько не нужно на операции. Столько нужно, чтобы держать живым того, у кого плавится голова. (Отводит взгляд.) Я тебе этого не говорил.",do:i=>{i.clue("c_coolant"),i.clue("p_soyka",!0),i.clue("l_clinic",!0)},go:"hub"},threat:{text:"(Смеётся, и полбара смеётся вместе с ним.) Сынок, VCPD здесь пьёт по четвергам. В долг. Иди проветрись.",do:i=>{i.trust("garth",-2),i.set("garth_threat")},go:"hub"},quest:{text:"(Долго молчит.) Дочка. Лин. Семь лет ей было, день рождения, торт со свечами. Я продал этот день Пикселю, когда нечем было платить за руку. Думал — выкуплю. А он задрал цену втрое. Теперь я знаю, что день был. Но не помню его. Это хуже, чем не знать.",do:i=>{i.set("q_garth"),i.log("Гарт продал воспоминание о дне рождения дочери. Шард у Пикселя.")},go:"hub"},return:{text:"(Он берёт шард двумя пальцами, как берут птенца.) …Свечи. Она задула не все, одну оставила — «папе на удачу». (Отворачивается к полкам.) За счёт заведения. Навсегда. Сойке я шепну, что ты человек.",do:i=>{i.take("i_shard_garth"),i.set("garth_done"),i.set("garth_vouch"),i.trust("garth",3),i.log("Я вернул Гарту его воспоминание. Он поручится за меня перед Сойкой.")},go:i=>i.flag("tracked")?"bug":"hub"},sell:{text:"(Желваки.) Справедливо. Здесь все торгуют. (Отсчитывает чипы, не глядя на вас.) Сто пятьдесят. Допивай и уходи.",do:i=>{i.take("i_shard_garth"),i.earn(150),i.set("garth_done"),i.set("garth_sold")},go:"hub"},bug:{text:"И слушай сюда. (Он перегибается через стойку и снимает что-то у вас из-под воротника.) Жучок. Корпоративный, свежий. Кто-то наверху очень хочет знать, куда ты ходишь. (Давит его протезом.) Уже не узнает.",do:i=>{i.set("tracked",!1),i.set("bug_removed"),i.log("Гарт снял с меня корпоративный жучок. Крейн.")},go:"hub"}}},pixel:{start:i=>i.s.npc.pixel?.met?"hub":"intro",nodes:{intro:{text:"Тсс-тсс-тсс. Не трогай витрину, дядя, тут чужие жизни. Первый поцелуй — сорок. Выпускной — шестьдесят. Смерть любимой собаки отдам даром, никто не берёт. Чего ищем?",do:i=>i.clue("p_pixel",!0),go:"hub"},hub:{text:i=>i.flag("pixel_snitch")?"(Он отодвигается.) Чего ещё, псих?":"Ну-ну-ну?",choices:[{t:"Что-нибудь свежее из HYPERION.",if:i=>!i.flag("lab7_got"),go:"offer"},{t:"Откуда у тебя запись из Лаб-7?",once:!0,if:i=>i.flag("lab7_got"),go:"source"},{t:"Воспоминание Гарта. День рождения дочери.",if:i=>i.flag("q_garth")&&!i.has("i_shard_garth")&&!i.flag("garth_done"),go:"garth"},{t:"Нейрохладагент, шесть ампул.",tone:"bribe",cost:200,if:i=>!i.has("i_coolant")&&!i.flag("coolant_given"),do:i=>i.give("i_coolant"),go:"sold"},{t:"Одноразовый дешифратор.",tone:"bribe",cost:180,if:i=>!i.has("i_decryptor"),do:i=>i.give("i_decryptor"),go:"sold"},{t:"Не сегодня."}]},sold:{text:"Приятно иметь дело. Чеков не даём, гарантий тоже.",go:"hub"},offer:{text:"(Оглядывается.) Есть одна штучка. Ночь на четырнадцатое, Лаб-7, вид из первых рук. Горячая, как реактор. Триста.",choices:[{t:"Беру.",tone:"bribe",cost:300,go:"bought"},{t:"На шарде метка службы безопасности. Тебя найдут по ней за сутки. Отдай мне — частника никто не ищет.",tone:"manip",go:i=>i.has("i_pass")||i.has("i_badge")?"manip_ok":"manip_no"},{t:"Отдай так. Или твоя витрина окажется на полу, а ты — под ней.",tone:"threat",go:"threat"},{t:"Дорого.",go:"hub"}]},bought:{text:"Наслаждайся. Только не в людном месте — там страшненько.",do:i=>{i.give("i_shard_lab7"),i.set("lab7_got"),i.clue("c_mem_lab7")},go:"hub"},manip_ok:{text:"(Он смотрит на корочку у вас в руке и бледнеет.) Метка?.. Чёрт. Чёрт-чёрт-чёрт! Забирай. Забирай, и я тебя не видел, и ты меня не видел!",do:i=>{i.give("i_shard_lab7"),i.set("lab7_got"),i.clue("c_mem_lab7")},go:"hub"},manip_no:{text:"Метка, ага. А ты, значит, эксперт? Корочку покажи, эксперт. Нету? Триста.",go:"offer"},threat:{text:"Ладно-ладно-ладно! Псих. (Швыряет шард.) Запомню, дядя. У меня память хорошая. Чужая — но хорошая. И друзья наверху у меня тоже есть.",do:i=>{i.give("i_shard_lab7"),i.set("lab7_got"),i.clue("c_mem_lab7"),i.set("pixel_snitch"),i.trust("pixel",-3)},go:"hub"},source:{text:"Источник не сдаю. Скажу так: человек в форме, долги за лечение дочки. Наверху все чистенькие, пока не прижмёт.",go:"hub"},garth:{text:"А, свечки. Хит продаж — три копии ушло богатым и бездетным. Оригинал — двести пятьдесят.",choices:[{t:"Держи.",tone:"bribe",cost:250,do:i=>i.give("i_shard_garth"),go:"sold"},{t:"Гарт знает, что ты продавал копии его дочери чужим людям?",tone:"manip",go:"garth_m"},{t:"Отдай. Сейчас.",tone:"threat",do:i=>{i.give("i_shard_garth"),i.set("pixel_snitch"),i.trust("pixel",-3)},go:"garth_t"},{t:"Потом.",go:"hub"}]},garth_m:{text:"(Сглатывает.) …Сто. И ты ему не скажешь. Никогда.",choices:[{t:"Сто. Договорились.",tone:"bribe",cost:100,do:i=>i.give("i_shard_garth"),go:"sold"},{t:"Подумаю.",go:"hub"}]},garth_t:{text:"Да подавись! (Шард летит вам в грудь.) Ржавому привет. И оглядывайся, дядя.",go:"hub"}}},soyka:{start:i=>i.flag("soyka_hostile")?"hostile":i.s.npc.soyka?.met?"hub":"intro",nodes:{intro:{text:"Клиника закрыта. Если истекаешь кровью — истекай в коридоре, там кафель лучше моется.",do:i=>{i.clue("p_soyka",!0),i.clue("l_clinic",!0)},choices:[{t:"Я не пациент. Я ищу человека, которому очень плохо. Думаю, вы тоже не хотите, чтобы ему стало хуже.",tone:"friendly",go:"s1",do:i=>i.trust("soyka",1)},{t:"Элиас Вейн. Где он?",tone:"pressure",go:"s2"},{t:"Ржавый сказал, вы лучший хирург яруса.",if:i=>i.s.npc.garth?.met,go:"s3"}]},s1:{text:"(Она впервые смотрит на вас.) Допустим. Здесь всем плохо. Конкретнее.",go:"hub"},s2:{text:"Не знаю никакого Вейна. Дверь у тебя за спиной.",go:"hub"},s3:{text:"Ржавый много говорит. (Но плечи у неё опускаются на сантиметр.) Чего надо?",go:"hub"},hub:{text:"Говори или уходи. У меня стерилизация.",choices:[{t:"Кейс инъектора с птицей и буквой «С». Ваш?",once:!0,if:i=>i.hasClue("c_injector"),go:"case"},{t:"Зачем вам столько нейрохладагента?",once:!0,if:i=>i.hasClue("c_coolant"),go:"cool"},{t:"Вот хладагент. Шесть ампул. Без условий.",tone:"friendly",if:i=>i.has("i_coolant")&&!i.flag("coolant_given"),go:"gift"},{t:"Я знаю, что Элиас у вас. Он унёс архив в собственной голове — и сгорает.",if:i=>i.s.theory==="d_elias_hiding"&&!i.flag("backroom_open"),go:i=>i.trust("soyka")>=2||i.flag("coolant_given")||i.flag("garth_vouch")?"open":"closed"},{t:"Откройте заднюю дверь, или сюда придёт служба безопасности HYPERION.",tone:"threat",if:i=>!i.flag("backroom_open"),go:"threat"},{t:"Ты разобрала Вейна на импланты. Кейс, хладагент — всё сходится.",tone:"pressure",once:!0,if:i=>i.s.theory==="f_soyka",go:"accused"},{t:"Как он?",if:i=>i.flag("met_elias")&&!i.flag("elias_taken"),go:"how"},{t:"Что здесь произошло?",if:i=>i.flag("elias_taken"),go:"taken"},{t:"Ухожу."}]},case:{text:"Мой. Я продаю инъекторы половине яруса. Пошарь по мусоркам — найдёшь ещё сорок таких. Это всё?",go:"hub"},cool:{text:"(Пауза — на полсекунды дольше, чем нужно.) Жаркое лето.",do:i=>i.set("soyka_slip"),go:"cool2"},cool2:{who:Sn,text:"(Ноябрь. Четвёртый день дождя. Она даже не старается.)",go:"hub"},gift:{text:"(Она взвешивает ампулы на ладони.) Без условий не бывает. Но… спасибо. Ему как раз… (осекается.) Спасибо.",do:i=>{i.take("i_coolant"),i.set("coolant_given"),i.trust("soyka",2),i.log("Я отдал Сойке хладагент. Она почти проговорилась.")},go:"hub"},open:{text:"(Она долго молчит. Потом стягивает перчатки.) Он сказал, что придёт человек с мёртвыми глазами и спросит именно так. Сказал — впустить. (Прикладывает ладонь к замку задней двери.) Десять минут. Он почти не говорит. И не вздумай его волновать.",do:i=>{i.set("backroom_open"),i.audio.sfx("door"),i.log("Сойка открыла заднюю комнату клиники.")}},closed:{text:"Красивая теория. Только я тебя не знаю. Ты для меня — ещё один нос с верхних ярусов. Докажи, что тебе можно верить, — тогда поговорим.",go:"closed2"},closed2:{who:Sn,text:"(Ей нужна причина мне поверить. Ржавый мог бы поручиться. Или ей самой что-то очень нужно.)",go:"hub"},threat:{text:"(Она берёт со стола скальпель — спокойно, как авторучку.) Вон.",do:i=>{i.set("soyka_hostile"),i.trust("soyka",-3)}},accused:{text:"(Она смеётся — устало, без звука.) На импланты. Конечно. Подпольный хирург — значит мясник. Знаешь, сколько раз я это слышала? Иди к своей полиции, детектив. Они любят простые ответы.",do:i=>{i.trust("soyka",-2),i.set("soyka_accused")},go:"hub"},how:{text:i=>i.flag("coolant_given")?"С твоим хладагентом — держится. Если архив уйдёт из его головы, я, может, вытащу то, что останется. Может.":"Плохо. Хладагент кончается, поставщики задрали цены. Считай сам.",go:"hub"},taken:{text:"Серые. Вошли через пять минут после тебя — как по маяку. Его унесли вместе с креслом. (Она прижимает к рёбрам окровавленную салфетку.) На тебе был жучок, идиот. Ты сам привёл их.",go:"hub"},hostile:{text:"(Скальпель всё ещё у неё в руке.) Я сказала — вон.",choices:[{t:"Я принёс хладагент. И извинения.",tone:"friendly",if:i=>i.has("i_coolant"),do:i=>{i.take("i_coolant"),i.set("coolant_given"),i.set("soyka_hostile",!1),i.s.npc.soyka.trust=0},go:"unhostile"},{t:"(Уйти.)"}]},unhostile:{text:"(Она смотрит на ампулы. Потом на вас.) …Положи на стол. И больше никогда не произноси при мне слово «HYPERION» как угрозу.",go:"hub"}}},elias:{start:i=>i.flag("met_elias")?"hub":"e1",nodes:{e1:{text:"(Человек в кресле открывает глаза. Они воспалены, зрачки разного размера.) Каррен. Ты постарел. …Нет. Это я помню тебя молодым. Ты меня — не помнишь вовсе.",do:i=>{i.set("met_elias"),i.log("Я нашёл Элиаса Вейна. Он жив. Пока.")},choices:[{t:"Мира ищет тебя.",go:"e_mira"},{t:"Что ты унёс из Лаб-7?",go:"e_arch"}]},e_mira:{text:"Мира. (Улыбается.) Я дал ей это имя. И озеро. И себя — в братья. Ты попросил: «дай ей кого-нибудь, кого можно любить». Я был стажёром, мне было двадцать три, и я решил — пусть это буду я. Шесть лет воскресений. Лучшее, что я построил.",go:"hub"},e_arch:{text:"Оригиналы. Тридцать одна настоящая смерть — как они умирали в креслах, а не «в пожаре». Память выжившей, М-12. И ещё одна запись: добровольная коррекция офицера полиции. Твоя. Тридцать один плюс один. Крейн хотела сжечь их перед запуском «Вуали». Я не дал.",go:"hub"},hub:{text:"(Он дышит часто и мелко. От кресла тянет холодом.)",choices:[{t:"Кто такая Мира на самом деле?",once:!0,go:"e_mira"},{t:"Что в архиве?",once:!0,go:"e_arch"},{t:"Что такое «Вуаль»?",once:!0,go:"veil"},{t:"Почему ты не пошёл в полицию? К журналистам?",once:!0,go:"why"},{t:"Отдай мне архив. И мою запись.",if:i=>!i.flag("got_archive"),go:"give"},{t:"Что будет с тобой?",once:!0,if:i=>i.flag("got_archive"),go:"fate"},{t:"Отдыхай."}]},veil:{text:"Марлоу-стрит, только без трупов. Коррекция через городскую сеть бэкапов — тихо, во сне, всем сразу. Сначала стереть сам пожар из тех, кто ещё что-то помнит. Потом… у Крейн длинный список того, что городу лучше не помнить. Она искренне считает это милосердием. Это самое страшное.",go:"hub"},why:{text:"Полиция — это Орлова, которая выпустила меня и теперь не спит. Журналисты — это один парень с антенной. А я — контейнер, который течёт. Мне нужен был тот, кто решит. Не я. Я шесть лет решал за Миру. Мне хватит.",go:"hub"},give:{text:"(Он вынимает из затылочного порта шард — пальцы оставляют на нём влажный след.) Здесь всё. Архив — и твой оригинал, отдельной дорожкой. Посмотри сначала себя. Потом решай за остальных. Передатчик Замбрано, сейф Крейн, печь Сойки, жетон Орловой — мне всё равно. Правда. Я слишком устал, чтобы хотеть.",do:i=>{i.give("i_archive"),i.give("i_shard_noah"),i.clue("c_archive"),i.clue("c_mem_noah",!0),i.clue("p_noah",!0),i.set("got_archive"),i.log("Элиас отдал мне архив «Оригиналы» и мою собственную стёртую память.")},go:"hub"},fate:{text:i=>i.flag("coolant_given")?"С хладагентом — недели. Может, Сойка вытащит остатки, раз архив ушёл из головы. Я бы хотел… ещё одно воскресенье.":"Часы. Не смотри так. Я знал цену, когда вставлял шунт.",go:"hub"}}},krane:{start:i=>i.s.npc.krane?.met?"hub":"k1",nodes:{k1:{text:i=>"(Она стоит у окна, спиной к вам. Город внизу — как плата под стеклом.) "+{bribe:"Вы купили моего охранника за двести пятьдесят. Я плачу ему больше — видимо, недостаточно.",badge:"Вы показали на проходной жетон, который сдали шесть лет назад. Трогательно.",threat:"Вы запугали Хейла. Он уже написал заявление об уходе. У него дочь, знаете?",service:"Вы вошли через служебный шлюз с аннулированным пропуском Вейна. Изящно."}[i.flag("via")||"service"]+" Садитесь, детектив. Или стойте — вы всегда предпочитали стоять.",do:i=>i.clue("p_krane",!0),go:"k2"},k2:{text:"Августа Крейн. Я руковожу тем, что здесь называют мнемо-архитектурой, а внизу — как-нибудь грубее. Вы ищете Элиаса Вейна. Я тоже. Разница в том, что я знаю, что именно он унёс. И ещё: мне известно, что у вас есть приятель в пиратском эфире. Его адрес стоит денег.",do:i=>i.set("krane_asked_source"),go:"hub"},hub:{text:i=>i.flag("alarm")?"Мои системы сообщают о попытке взлома. Я делаю вид, что не заметила. Пока.":"Я слушаю.",choices:[{t:"Что он унёс?",once:!0,go:"what"},{t:"Что такое «Вуаль»?",once:!0,go:"veil"},{t:"В деле Марлоу стоит моя фамилия.",once:!0,if:i=>i.hasClue("c_marlow_file")||i.hasClue("c_subjects"),go:"sig"},{t:"Вейн у вас. В этом здании. Где вы его держите?",tone:"pressure",once:!0,if:i=>i.s.theory==="f_hyperion",go:"tracker"},{t:"Я знаю, где Вейн. Но это стоит дороже, чем вы думаете.",tone:"lie",once:!0,if:i=>!i.flag("got_archive"),go:"bluff"},{t:"Сколько вы даёте за архив?",once:!0,if:i=>!i.flag("krane_offer"),go:"offer"},{t:"Адрес Замбрано. Сколько?",tone:"bribe",if:i=>i.s.npc.theo?.met&&!i.flag("theo_sold")&&!i.flag("theo_warned"),go:"sell"},{t:"Я отдам архив в эфир. Весь город увидит ваши кресла.",tone:"threat",once:!0,if:i=>i.flag("got_archive"),go:"threat"},{t:"Архив у меня. Забирайте.",if:i=>i.has("i_archive"),go:"final"},{t:"Мы закончили."}]},what:{text:"Тридцать две записи, которые не должны существовать. Чужое горе в чистом виде. Он называет это «оригиналы». Я называю это открытой раной, которую он собирается показать городу.",go:"hub"},veil:{text:"Анестезия. (Она наконец оборачивается.) Вы были на Марлоу-стрит, детектив, — нет, не помните, но были. Тридцать одна семья шесть лет живёт с версией «несчастный случай» и спит по ночам. Что им даст правда? Дату суда? «Вуаль» — это право города не помнить то, что его убивает.",go:"hub"},sig:{text:"И ваша подпись. Хотите взглянуть? (На столе вспыхивает документ.) «Процедура коррекции согласована субъектом К-01 добровольно». Я вас не заставляла, Ной. Я предложила — и вы выдохнули с облегчением. Я это запомнила. Кто-то же должен.",do:i=>{i.clue("p_noah",!0),i.set("krane_told_noah")},go:"hub"},tracker:{text:"(Лёгкая улыбка.) Значит, вы не знаете, где он. Благодарю, детектив, — это самое ценное, что вы могли мне сообщить. (Она проходит мимо, едва коснувшись вашего плеча.) Ищите. Я в вас верю.",do:i=>{i.set("tracked"),i.set("krane_played")},go:"tracker2"},tracker2:{who:Sn,text:"(Что-то не так. Она была слишком довольна. И зачем она до меня дотронулась?)",go:"hub"},bluff:{text:"Вы блефуете — при слове «знаю» у вас дёргается веко, это есть в вашем досье. Но направление мысли мне нравится. Пять тысяч за архив. И бонус: я верну вам спокойный сон. Вы ведь плохо спите после Марлоу? Даже не помня.",do:i=>i.set("krane_offer"),go:"hub"},offer:{text:"Пять тысяч. И процедура за счёт компании — для вас лично. Вы выйдете отсюда человеком, которого ничего не тяготит. Поверьте, это дороже денег. Вы уже однажды так решили.",do:i=>i.set("krane_offer"),go:"hub"},sell:{text:"Замбрано… Мы знали имя. Но не крышу. Восемьсот — за адрес и за то, что вы не станете его предупреждать.",choices:[{t:"Крыша в переулке за проспектом Аркадия. Лифт с вывеской.",do:i=>{i.earn(800),i.set("theo_sold"),i.set("theo_arrested"),i.log("Я продал Крейн адрес Тео Замбрано. 800₵.")},go:"sold"},{t:"Я передумал.",go:"hub"}]},sold:{text:"Приятно иметь дело с практичным человеком. Вы снова меня не разочаровали, Ной. Как и тогда.",go:"hub"},threat:{text:"Отдадите — и тридцать одна семья заново похоронит своих. А женщина, которую вы когда-то вынесли из огня, узнает, что её брат — легенда прикрытия, а спаситель — человек, продавший её память. Вы уверены, что это называется «правда»? По-моему, это называется «месть себе». За чужой счёт.",go:"hub"},final:{text:"(Впервые за разговор она выглядит уставшей.) Благодарю. Пять тысяч — уже на вашем счёте. И последнее предложение, Ной, — от чистого сердца, насколько оно у меня есть. Кресло свободно. Десять минут — и вы выйдете отсюда человеком, который просто закрыл скучное дело о пропавшем инженере.",choices:[{t:"Сотрите. (Сесть в кресло.)",do:i=>i.ending("veil_sleep")},{t:"Нет. Деньги возьму. Но помнить, что я сделал, буду сам.",do:i=>i.ending("veil_awake")},{t:"(Убрать шард обратно.) Я передумал.",go:"hub"}]}}},bruno:{start:i=>i.flag("hyp_access")?"pass":"gate",nodes:{gate:{text:i=>i.s.npc.bruno?.met?"Опять вы. Пропуск — или отойдите от барьера.":"Стоять. Территория HYPERION. Пропуск к считывателю, лицо к камере.",do:i=>i.clue("p_bruno",!0),choices:[{t:"Двести пятьдесят — и у тебя моргнула камера.",tone:"bribe",cost:250,go:"bribe"},{t:"VCPD, спецотдел. Внеплановая проверка мнемо-лицензий. (Показать жетон.)",tone:"lie",if:i=>i.has("i_badge"),go:i=>i.flag("orlova_hostile")?"lie_fail":"lie_ok"},{t:"Крейн знает, что ты торгуешь воспоминаниями о Лаб-7 на Нижнем ярусе?",tone:"threat",if:i=>i.flag("know_bruno"),go:"threat"},{t:"Открой. У меня нет времени.",tone:"pressure",go:"press"},{t:"Тяжёлая смена?",tone:"friendly",once:!0,go:"chat"},{t:"(Отойти.)"}]},bribe:{text:"(Смотрит на чип. На камеру. Снова на чип.) …У дочки операция в четверг. Проходите. Быстро. Вы меня не видели.",do:i=>{i.set("hyp_access"),i.set("via","bribe"),i.audio.sfx("ok")}},lie_ok:{text:"(Косится на жетон.) Спецотдел… Нас не предупреждали. Ладно. Проходите, инспектор. Отметьтесь у администратора.",do:i=>{i.set("hyp_access"),i.set("via","badge"),i.audio.sfx("ok")}},lie_fail:{text:"(Сверяется с планшетом.) Тут свежая пометка от инспектора Орловой: «Каррен Н. — жетон недействителен». Отойдите от барьера. Медленно.",do:i=>i.trust("bruno",-1),go:"gate"},threat:{text:"(Он белеет под визором.) Откуда… Это на лечение, клянусь. Ей семь лет. (Барьер гаснет.) Идите. Только не говорите ей. Пожалуйста.",do:i=>{i.set("hyp_access"),i.set("via","threat"),i.trust("bruno",-2),i.audio.sfx("ok")}},press:{text:"У меня тоже. Отойдите.",go:"gate"},chat:{text:"Двенадцать часов под дождём — чтобы люди в сухом могли стирать память людям в мокром. (Спохватывается.) Я этого не говорил. Отойдите от барьера.",do:i=>i.trust("bruno",1),go:"gate"},pass:{text:i=>i.flag("via")==="threat"?"(Он смотрит мимо вас.) Проходите.":"Проходите. И… не задерживайтесь там."}}}},mg=`
<div class="mail"><div class="mh">ОТ: A.KRANE // КОМУ: E.VANE // 11.11.2091 // ГРИФ: ЛИЧНО</div>
<p>Элиас.</p><p>Аудит совета — семнадцатого. К этому времени ячейка «Оригиналы» должна быть пуста. Мы не можем запускать «Вуаль», пока существует доказательство того, что именно она стирает и чем это кончилось в первый раз.</p>
<p>Уничтожьте. Это не просьба.</p><p>— А.К.</p></div>
<div class="mail draft"><div class="mh">ЧЕРНОВИК // НЕ ОТПРАВЛЕНО // 13.11.2091 22:51</div>
<p>Августа.</p><p>Я шесть лет говорю себе, что мы их спасли. Вчера М-12 спросила, почему я никогда не рассказываю про наших родителей. Я не смог придумать им лиц.</p>
<p>Я не уничтожу оригиналы. Я их верну. Тем, у кого их взяли. Начну с офицера — он, по крайней мере, сам выбрал не помнить, значит, сможет выбрать и обратное.</p></div>`,gg=`
<div class="mail"><div class="mh">HYPERION // ВНУТРЕННЕЕ ДЕЛО MARLOW_2085 // ОРИГИНАЛ</div>
<p><b>Объект:</b> клиника мнемо-терапии «Марлоу», Марлоу-стрит, 14.</p>
<p><b>Событие:</b> испытание групповой коррекции (прототип «ВУАЛЬ-0»). 32 субъекта, одновременная процедура. На 4-й минуте — каскадный перегрев коры у 31 субъекта. Летальный исход: 31. Выжила: М-12.</p>
<p><b>Легенда:</b> возгорание проводки. Здание подожжено в 03:20 сотрудниками СБ.</p>
<p><b>Следствие VCPD:</b> ведущий следователь — <b>дет. Н. Каррен</b>, напарник — дет. Л. Орлова. Дело закрыто на 9-е сутки: «несчастный случай».</p>
<p><b>Урегулирование:</b> М-12 — полная коррекция, легенда прикрытия, куратор Э. Вейн. Каррен Н. (К-01) — <b>процедура коррекции согласована субъектом добровольно</b>, компенсация выплачена. Орлова Л. — от коррекции отказалась, подписка о неразглашении.</p>
<p><b>Хранение оригиналов:</b> Лаб-7, криоячейка, «31 + 1».</p></div>`,_g=`
<div class="mail"><div class="mh">СКЛАД-8 // ЧЁРНЫЙ РЕЕСТР // ПОСТАВКИ</div>
<p>11.11 — Сойка / клиника — нейрохладагент, 6 амп. — нал.</p><p>12.11 — Сойка / клиника — нейрохладагент, 6 амп. — нал.</p><p>13.11 — Сойка / клиника — нейрохладагент, 6 амп. — в долг.</p><p>14.11 — Сойка / клиника — нейрохладагент, <b>12 амп.</b> — в долг.</p>
<p><i>Пометка кладовщика: «Берёт как на живой сервер. Не спрашивал. С 14-го — вдвое».</i></p></div>`,vg={enterApartment(i){i.flag("apt_entered")||(i.set("apt_entered"),i.say("КАРРЕН","Замок цел. Но здесь уже искали — быстро и не таясь. Значит, искали не воры."),i.log("Квартира Элиаса обыскана до меня."))},eliasTerminal(i){const t=()=>{i.clue("c_mail_veil"),i.set("heard_veil"),i.ui.doc("Личный терминал Э. Вейна",mg)};if(i.hasClue("c_mail_veil"))return t();i.hack({title:"ТЕРМИНАЛ Э. ВЕЙНА",level:1,onWin:t})},vent(i){if(i.hasClue("c_hidden_msg"))return i.notify("Пусто. Чип вы уже забрали.");i.clue("c_hidden_msg"),i.clue("p_noah",!0),i.audio.sfx("sting"),i.examine("Аудиочип за решёткой","Приклеен изолентой изнутри. Голос Элиаса — шёпотом, с одышкой:<br><br>«Если ты это слушаешь, Каррен, значит, она тебя наняла. Я знал, что наймёт именно тебя: я сам когда-то вписал ей твоё имя — как „человека, который помогает“. Прости.<br><br><b>Не верь тому, что помнишь о Марлоу-стрит. И не верь тому, что о себе помнит она.</b>»"),i.log("Элиас оставил послание лично мне. Откуда он знал, что Мира придёт ко мне?")},cctvTerminal(i){const t=()=>{i.set("cctv_seen"),i.ui.cctv()};if(i.flag("cctv_access")||i.flag("cctv_hacked"))return t();i.choice("Пульт требует служебный код VCPD. Такой есть у инспектора Орловой — пост на проспекте Аркадия.",[["Взломать пульт",()=>i.hack({title:"ТЕССЕРА // ВИДЕОАРХИВ",level:1,onWin:()=>{i.set("cctv_hacked"),t()}})],["Отойти",()=>{}]])},agnesBackup(i){if(i.flag("agnes_shard"))return i.notify("Запись того вечера у вас уже есть.");i.choice("Страховой бэкап-модуль квартиры 7A. Внутри — память Агнес Вольф за последние 72 часа. Скопировать без её согласия?",[["Взломать и скопировать",()=>i.hack({title:"БЭКАП 7A // А. ВОЛЬФ",level:1,onWin:()=>{i.give("i_shard_agnes"),i.set("agnes_shard"),i.set("agnes_hacked"),i.clue("c_mem_agnes"),i.log("Я украл вечер Агнес из её бэкапа.")}})],["Не трогать",()=>{}]])},marketTerminal(i){const t=()=>{i.clue("c_coolant"),i.clue("p_soyka",!0),i.clue("l_clinic",!0),i.ui.doc("Чёрный реестр, склад-8",_g)};if(i.hasClue("c_coolant")&&i.flag("ledger_open"))return t();i.hack({title:"ЧЁРНЫЙ РЕЕСТР // СКЛАД-8",level:2,onWin:()=>{i.set("ledger_open"),t()}})},serviceDoor(i){if(!i.has("i_pass"))return i.notify("Служебный шлюз. Нужен пропуск сотрудника HYPERION.","warn");i.choice("Считыватель: «ПРОПУСК ВЕЙН Э. — АННУЛИРОВАН». Но сервисный порт под панелью открыт.",[["Обойти через сервисный порт",()=>i.hack({title:"ШЛЮЗ HYPERION // СЕРВИС",level:2,onWin:()=>{i.set("service_open"),i.set("hyp_access"),i.set("via","service"),i.notify("Шлюз открыт.")},onFail:()=>{i.set("alarm"),i.notify("Система зафиксировала попытку взлома.","warn")}})],["Отойти",()=>{}]])},labElevator(i){if(i.flag("lab_open"))return i.teleport("lab");const t=i.has("i_pass")?2:3;i.choice(i.has("i_pass")?"Лифт в лаборатории. Пропуск Вейна аннулирован, но чип всё ещё отвечает — можно подменить сессию.":"Лифт в лаборатории. Без пропуска сотрудника защита максимальная.",[["Взломать панель лифта",()=>i.hack({title:"ЛИФТ // ЛАБОРАТОРИИ",level:t,onWin:()=>{i.set("lab_open"),i.teleport("lab")},onFail:()=>{i.set("alarm"),i.notify("Система зафиксировала попытку взлома.","warn")}})],["Отойти",()=>{}]])},subjects(i){i.clue("c_subjects"),i.clue("e_marlow",!0),i.clue("l_marlow",!0),i.clue("p_noah",!0),i.examine("Марлоу // субъекты","31 строка с крестом. И две — без:<br><br><b>М-12</b> — женщина, 24 года на момент инцидента. Единственная выжившая. Коррекция полная. Легенда прикрытия: «сестра» куратора Э. Вейна. Фото затёрто.<br><br><b>К-01</b> — офицер VCPD. Коррекция <i>добровольная</i>.<br><br>"+(i.flag("mira_briefed")?"Легенда «сестра». У Элиаса Вейна в этом городе ровно одна сестра — и она сидит у меня в офисе.":""))},labTerminal(i){const t=()=>{for(const e of["c_marlow_file"])i.clue(e);for(const e of["e_marlow","l_marlow","p_noah"])i.clue(e,!0);i.ui.doc("Дело MARLOW_2085",gg),i.log("Марлоу-стрит: не пожар, а сбой массовой коррекции. Я вёл дело. Я — К-01.")};if(i.hasClue("c_marlow_file"))return t();i.hack({title:"ЯДРО ЛАБ-7 // ICE-3",level:3,onWin:t,onFail:()=>{i.set("alarm"),i.notify("Система зафиксировала попытку взлома.","warn")}})},coolantCabinet(i){if(i.flag("stole_coolant"))return i.notify("Полка пуста.");i.set("stole_coolant"),i.give("i_coolant"),i.say("КАРРЕН","Шесть ампул. По описи здесь должно быть сорок восемь. Кто-то выносил хладагент неделями.")},incinerator(i){if(!i.has("i_archive"))return i.examine("Утилизатор биоотходов","Тысяча двести градусов. Сойка сжигает здесь то, что нельзя ни продать, ни похоронить.");i.choice("Архив «Оригиналы» у вас в руке. Тридцать одна подлинная смерть, память Миры, ваша собственная. Печь открыта.",[["Сжечь архив. Навсегда.",()=>i.ending("silence")],["Убрать шард",()=>{}]])},transmitter(i){if(!i.has("i_archive"))return i.examine("Пиратский передатчик","Самодельная стойка, армейский усилитель, антенна из рекламной фермы. Покрытие — четыре района. Ему нечего передавать. Пока.");const t=()=>i.choice("Передатчик готов. После запуска архив увидят все четыре района — и вернуть это будет невозможно.",[["Запустить архив в эфир",()=>i.ending("broadcast")],["Вынуть шард",()=>{}]]);if(i.flag("theo_arrested")&&!i.flag("tx_unsealed"))return i.choice("На стойке — пломба VCPD: «ИЗЪЯТО». Матрас Тео перевёрнут. Передатчик заблокирован.",[["Взломать блокировку",()=>i.hack({title:"ПЕРЕДАТЧИК // ПЛОМБА VCPD",level:3,onWin:()=>{i.set("tx_unsealed"),t()}})],["Отойти",()=>{}]]);t()},onTravel(i){i.flag("tracked")&&i.flag("met_elias")&&!i.flag("elias_taken")&&(i.set("elias_taken"),i.audio.sfx("sting"),i.say("СООБЩЕНИЕ — СОЙКА","Они пришли через пять минут после тебя. Серые. Забрали его вместе с креслом. На тебе был жучок, идиот.",9),i.log("HYPERION забрал Элиаса из клиники. Я сам привёл их — на мне был маяк Крейн.")),i.flag("pixel_snitch")&&!i.flag("tracked")&&!i.flag("bug_removed")&&i.flag("lab7_got")&&!i.flag("snitch_done")&&(i.set("snitch_done"),i.set("tracked"))}};function xg(i,t){const e=u=>t.flag(u),n=e("mira_told"),s=e("elias_taken"),r=e("coolant_given"),a=e("noah_recall"),o=[];e("agnes_told")?o.push("Агнес Вольф отключила страховой бэкап. Говорит: лучше помнить меньше — зато своё."):e("agnes_hacked")&&o.push("Агнес Вольф так и не узнала, что её вечер побывал в моей голове без спроса."),e("garth_done")&&!e("garth_sold")?o.push("В «Последнем байте» мне наливают бесплатно. Гарт иногда ставит на стойку семь свечей — и одну оставляет гореть."):e("garth_sold")&&o.push("Гарт выкупил свой день рождения. У меня. Он здоровается, но в глаза больше не смотрит.");const l=(u,f)=>s?"Элиаса Вейна к тому времени уже не было в клинике: я сам привёл к нему серых — на воротнике, жучком Крейн. Из комплекса HYPERION он не вышел.":r?u:f,c=a==="full"?"Свой оригинал я досмотрел до конца и сложил правильно: меня никто не заставлял. Я попросил сам.":a==="broken"?"Свой оригинал я видел, но сложил его так, как было удобнее: будто меня вынудили. Я до сих пор ищу в памяти кадр, где мне угрожают. Его там нет.":"Свой оригинал я так и не посмотрел. Шард лежит в ящике стола, под жетоном.";switch(i){case"broadcast":return{id:i,title:"СВОБОДНАЯ ЧАСТОТА",sub:"Концовка: ПРАВДА",color:"#5affb0",paras:["В 03:12 пиратский сигнал лёг на четыре района. Тридцать одно кресло. Тридцать одно лицо. Город смотрел не моргая — на рекламных фермах, в барах, в капсульных отелях. К утру акции HYPERION стоили дешевле лапши у Вонга, а «Вуаль» стала словом, которое пишут на стенах.",e("theo_arrested")?"Тео Замбрано эфира не увидел: его взяли на крыше по адресу, который продал я. Пломбу с передатчика я срывал сам. Сигнал ушёл в его честь. Он об этом не узнает.":"Тео вёл эфир сам — голосом человека, который шесть лет репетировал одну фразу: «Вы имеете право помнить».",n?"Мира смотрела трансляцию в моём офисе, уже зная, кого увидит. Она не плакала. Сказала: «Теперь это хотя бы моё».":"Мира увидела в эфире себя — девушку с браслетом М-12 на руках у полицейского. Потом узнала полицейского. Она ушла, не взяв плащ. Я не стал догонять: человек, укравший у неё жизнь, не вправе просить её остаться.",l("Элиас дожил до рассвета — и, вопреки прогнозам, до следующего воскресенья. Сойка вытащила из его головы всё лишнее. Формул он почти не помнит. Зато помнит, как зовут женщину в красном, которая к нему приходит.","Элиас Вейн умер под утро, не досмотрев эфир. Сойка сказала — улыбался. Мозг, вместивший тридцать две чужие жизни, не выдержал одной своей."),"Меня показали последним. К-01, добровольно. "+c+" Шесть лет назад я купил себе покой чужой памятью. Сегодня вернул долг с процентами. Это не искупление. Это счёт, наконец оплаченный.",...o]};case"veil_sleep":return{id:i,title:"СПОКОЙНЫЙ СОН",sub:"Концовка: ВУАЛЬ",color:"#7fd4ff",paras:["Кресло оказалось удобным. Крейн не соврала: я не вспомню, что боялся.","Я вышел из башни под дождь — с пятью тысячами на счёте и лёгкой головой. Дело о пропавшем инженере: уехал из города, клиентка уведомлена. Скучное дело. Таких у меня десяток в год.","Через три недели HYPERION запустил «Вуаль». Город проснулся отдохнувшим. Никто не мог вспомнить, зачем во дворе корпорации стоит кольцо из света — и в память о чём.","Женщина в красном плаще иногда останавливается у моей двери, смотрит на табличку и уходит. Мы не знакомы. Мне кажется, что не знакомы.",s?"Говорят, в Лаб-7 появился новый «живой архив». Я не знаю, что это значит. Мне и не нужно.":"В клинике на Нижнем ярусе умер какой-то инженер. Об этом не писали.","Я хорошо сплю. Только иногда просыпаюсь от запаха гари — и не могу вспомнить, что забыл выключить.",...o],truth:"Вы отдали единственное доказательство Марлоу-стрит и согласились забыть об этом — во второй раз."};case"veil_awake":return{id:i,title:"ЦЕНА ВОПРОСА",sub:"Концовка: ВУАЛЬ",color:"#ffb040",paras:["Я взял деньги и отказался от кресла. Крейн пожала плечами: «Как хотите. Помнить — тоже наказание. Просто более долгое».","Аудит прошёл гладко. «Вуаль» запустили в срок. Город забыл Марлоу-стрит — мягко, во сне, вместе со всем, что значилось в длинном списке Крейн.","Теперь нас трое, кто помнит: я, Орлова и Крейн. Мы не здороваемся.",n?"Мира знала правду ровно три недели. Потом проснулась — и снова спросила, нет ли новостей о брате. Я сказал, что ищу.":"Мира по-прежнему ждёт брата. По воскресеньям накрывает на двоих.",l("Элиас протянул ещё месяц — на моём хладагенте. Сойка говорит, в конце он звал сестру. Я не уточнял, знает ли он сам, что её нет.","Элиас умер через сутки после того, как я ушёл с его архивом в кармане."),"Пять тысяч кончились к весне. Память — нет. "+c,...o],truth:"Архив мог уйти в эфир, в суд или в огонь. Он ушёл тем, кто его боялся."};case"silence":return{id:i,title:"ТИШИНА",sub:"Концовка: МИЛОСЕРДИЕ",color:"#ff7a3a",paras:["Утилизатор Сойки берёт биоотходы при тысяче двухстах градусах. Архив горел четыре секунды. Тридцать одна настоящая смерть стала тем, чем её и так считали, — несчастным случаем.",n?"Мира знала, кто она, и была рядом. Сказала: «Сожгите. Я не хочу, чтобы меня показывали на всех экранах как экспонат. Я хочу свои воскресенья — пусть даже выдуманные».":"Мира так и не узнала, кто она. У неё есть брат — и детство у озера, в котором она умеет плавать. Я решил, что вправе оставить ей это. Тот же человек, что решил это шесть лет назад.",l("Без архива в голове Элиас пошёл на поправку. Через месяц они с Мирой уехали из города. Она прислала открытку: озеро, мостки. Подпись: «Учусь плавать».","Элиас умер через сутки. Мира похоронила брата. Настоящего — другого у неё не было."),"Без оригиналов аудит прошёл гладко, и «Вуаль» запустили в срок. Крейн прислала мне корзину фруктов. Я не понял, благодарность это или издёвка. Думаю, она тоже.","Правды больше нет нигде, кроме моей головы и головы Орловой. "+c,...o],truth:"Вы пощадили двоих — ценой того, что тридцать одна семья никогда не узнает, как умерли их близкие, а город получил «Вуаль»."};case"law":return{id:i,title:"ПО ЗАКОНУ",sub:"Концовка: ЯВКА С ПОВИННОЙ",color:"#9fb6ff",paras:["Явку с повинной Орлова оформляла четыре часа. Мою — первой. Свою — второй. Архив ушёл в хранилище улик под тремя печатями, и одна из них была настоящей.","Суд над HYPERION тянется второй год. Крейн приходит на заседания в белом. «Вуаль» заморожена «до выяснения» — это не победа, это пауза. Но в этом городе пауз не бывает, так что, может, и победа.",n?"Мира даёт показания как потерпевшая М-12. Говорит ровно, без бумажки. Впервые её слова — не запись.":"Миру вызвали повесткой — как потерпевшую М-12. Так она и узнала. Не от меня. Этого она мне не простила, и правильно.",l("Элиас выжил и проходит по делу свидетелем. На вопрос судьи «кем вы приходитесь потерпевшей» ответил: «Братом. Это единственное, что я не подделывал».","Элиас до суда не дожил. Его показания зачитали с шарда. В зале было очень тихо."),"Мне дали четыре года условно и пожизненный запрет на работу с памятью. Подменяю Вонга у лапшичной. Сплю плохо. Но это — мой сон. "+c,...o]};case"scapegoat":return{id:i,title:"КОЗЁЛ ОТПУЩЕНИЯ",sub:"Концовка: ЛОЖНЫЙ СЛЕД",color:"#ff4a4a",paras:["Миру Вейн арестовали у меня в офисе. Она не сопротивлялась — только спросила, можно ли взять плащ. Провал в памяти суд счёл признанием: в Vesper City тот, кто не помнит, виновен по умолчанию.","Через неделю ей назначили принудительную коррекцию. Красный плащ вернули мне как вещдок. Он до сих пор висит в шкафу.","Гонорар выплачен из конфискованных средств обвиняемой. Дело закрыто. Орлова при встрече смотрит сквозь меня.",...o],truth:"Элиас Вейн был жив. Он умирал в задней комнате клиники на Нижнем ярусе и ждал человека, который «решит». «Женщину в красном» вписали в память Агнес двое сотрудников HYPERION в 01:05 — это было на записи камеры. Мира той ночью искала брата по всему кварталу и не помнит этого, потому что её память правили уже не раз. HYPERION получил виноватую, а через три недели — город без плохих воспоминаний."};case"raid":return{id:i,title:"ЗАЧИСТКА",sub:"Концовка: ЛОЖНЫЙ СЛЕД",color:"#ff4a4a",paras:["Рейд VCPD вошёл в клинику в 04:40. Сойку взяли со скальпелем в руке — она стояла между спецназом и задней дверью. За дверью нашли человека в кресле. Живого. Через двадцать минут его «вернули работодателю».","Я был прав в одном: Элиас Вейн находился в клинике. Во всём остальном я ошибся настолько, насколько вообще можно ошибиться.","Нижний ярус зачистили «заодно». Рынок закрыт, бар опечатан. Никто на ярусе мне больше не наливает. Никто на ярусе больше не наливает никому.","Мира получила уведомление: «Ваш брат найден и проходит лечение в корпоративном стационаре. Посещения не предусмотрены».",...o],truth:"Сойка не резала Элиаса — она держала его в живых, скупая хладагент в долг. Архив «Оригиналы» был у него в голове; вместе с ним HYPERION получил и доказательства Марлоу-стрит. «Вуаль» запущена в срок."}}return{id:i,title:"КОНЕЦ",sub:"",color:"#fff",paras:[]}}function yg(i,t){const e=i.g,n=[{len:4,syms:5,tries:8,time:120,rep:!1},{len:4,syms:6,tries:8,time:110,rep:!1},{len:5,syms:6,tries:9,time:130,rep:!0}][Math.max(0,Math.min(2,t.level-1))],s=["Δ","Ω","Ψ","Σ","Φ","Ξ"].slice(0,n.syms),r=[];for(;r.length<n.len;){const x=Math.random()*n.syms|0;(n.rep||!r.includes(x))&&r.push(x)}const a=[];let o=[],l=n.time,c=!1;const u=r.map(()=>null),f=setInterval(()=>{if(c)return;l-=.25;const x=i.ov.querySelector(".hbar i");x&&(x.style.width=Math.max(0,l/n.time*100)+"%"),Math.floor(l*4)%4===0&&l<20&&e.audio.sfx("hack"),l<=0&&_(!1)},250);i.show("hack",`<div class="panel hk"><div class="phead"><h2><small>ВЗЛОМ • ЗАЩИТА ICE-${t.level}</small>${t.title}</h2><button class="x" data-a="close">ESC — ОТМЕНА</button></div><div class="hbar"><i style="width:100%"></i></div><div id="hkb"></div></div>`,{onClose:()=>clearInterval(f)});const d=i.ov.querySelector("#hkb"),p=()=>{d.innerHTML=`<div class="hrows">${a.map((x,y)=>`<div class="hrow"><span class="n">${String(y+1).padStart(2,"0")}</span>${x.gs.map(g=>`<span class="hc">${s[g]}</span>`).join("")}<span class="hfb">${'<i class="ex"></i>'.repeat(x.ex)}${'<i class="pa"></i>'.repeat(x.pa)}${"<i></i>".repeat(n.len-x.ex-x.pa)}</span></div>`).join("")}
      ${a.length<n.tries?`<div class="hrow"><span class="n">&gt;&gt;</span>${r.map((x,y)=>`<span class="hc cur ${u[y]!==null&&o[y]===void 0?"lock":""}">${o[y]!==void 0?s[o[y]]:u[y]!==null?s[u[y]]:""}</span>`).join("")}</div>`:""}</div>
      <div class="hkeys">${s.map((x,y)=>`<button data-a="k" data-i="${y}">${x}</button>`).join("")}<button class="w" data-a="bk">⌫</button><button class="w" data-a="go">ВВОД</button>${e.has("i_decryptor")?'<button class="w" data-a="dc" style="border-color:var(--a);color:var(--a)">ДЕШИФРАТОР</button>':""}</div>
      <p class="hint" style="margin-top:.9rem;font-family:'Exo 2'">Подберите ключ из ${n.len} символов${n.rep?" (символы могут повторяться)":" (без повторов)"}. <span style="color:var(--g)">●</span> — символ на своём месте, <span style="color:var(--a)">●</span> — есть в ключе, но не там. Попыток: ${n.tries-a.length}. Клавиши 1–${n.syms}, Backspace, Enter.</p>`},_=x=>{c||(c=!0,clearInterval(f),i.closeAll(),x?(e.audio.sfx("ok"),e.notify("Доступ получен.","item"),t.onWin()):(e.notify("Взлом провален. Защита сменила ключ.","warn"),t.onFail?.()))},v=x=>{o.length<n.len&&(o.push(x),e.audio.sfx("hack"),p())},m=()=>{o.pop(),p()},h=()=>{if(o.length<n.len)return;let x=0;const y=[...r],g=[...o];for(let M=0;M<n.len;M++)g[M]===y[M]&&(x++,y[M]=-1,g[M]=-2);let C=0;for(let M=0;M<n.len;M++)if(g[M]>=0){const T=y.indexOf(g[M]);T>=0&&(C++,y[T]=-1)}if(a.push({gs:o,ex:x,pa:C}),o=[],x===n.len)return _(!0);if(a.length>=n.tries)return _(!1);e.audio.sfx("error"),p()};i.acts={close:()=>{c=!0,i.closeAll()},k:x=>v(+x.dataset.i),bk:m,go:h,dc:()=>{e.take("i_decryptor");const x=u.map((y,g)=>y===null?g:-1).filter(y=>y>=0).sort(()=>Math.random()-.5).slice(0,2);for(const y of x)u[y]=r[y];e.notify("Дешифратор вскрыл две позиции и сгорел."),p()}},i.keyHook=x=>{if(/^Digit[1-9]$/.test(x.code)){const y=+x.code.slice(5)-1;return y<n.syms&&v(y),!0}return x.code==="Backspace"?(m(),!0):x.code==="Enter"?(h(),!0):(x.code==="Escape"&&(c=!0,i.closeAll()),!0)},p(),e.audio.sfx("open")}function Mg(i){const t=i.g;let e=0,n=0;i.show("cctv",`<div class="panel cc"><div class="phead"><h2><small style="color:#9fe8a0">ТЕССЕРА • КОРПУС C • АРХИВ 72 Ч</small>КАМЕРА 07 — ЭТАЖ 7</h2><button class="x" data-a="close">ESC — ЗАКРЫТЬ</button></div>
    <canvas width="640" height="360"></canvas>
    <div class="ctl">${[18,20,183,211,253,330].map(p=>`<i style="left:${p/360*100}%"></i>`).join("")}<input type="range" min="0" max="360" step="0.02" value="0"></div>
    <div class="cctl"><button data-a="sp" data-v="0">❚❚</button><button data-a="sp" data-v="0.25">▶</button><button data-a="sp" data-v="3">▶▶</button><button data-a="sp" data-v="16">▶▶▶</button>
      <span class="hint" style="flex:1;text-align:center">22:00 — 04:00 • риски на шкале — срабатывания датчика движения</span><button data-a="mark" style="border-color:var(--a);color:var(--a)">◉ ОТМЕТИТЬ КАДР</button></div></div>`,{onClose:()=>clearInterval(f)});const s=i.ov.querySelector("canvas"),r=s.getContext("2d"),a=i.ov.querySelector("input"),o=(p,_,v)=>p+(_-p)*v,l=p=>{const _=p/(p+.45)*1.45;return{xl:o(20,250,_),xr:o(620,390,_),fy:o(350,205,_),cy:o(10,115,_)}},c=(p,_,v,m="man")=>{const h=l(p),x=o(h.xl,h.xr,_),y=(h.fy-h.cy)*.62,g=y*.26;if(r.fillStyle="rgba(0,0,0,.5)",r.beginPath(),r.ellipse(x,h.fy,g*.9,g*.25,0,0,7),r.fill(),m==="drone"){r.fillStyle=v,r.fillRect(x-g,h.fy-y*.14,g*2,y*.12),r.fillStyle="#eaffea",r.fillRect(x-2,h.fy-y*.17,4,3);return}r.fillStyle=v,r.fillRect(x-g/2,h.fy-y*.84,g,y*.84),r.beginPath(),r.arc(x,h.fy-y*.92,g*.36,0,7),r.fill(),m==="grey"&&(r.fillStyle="#dfffe0",r.fillRect(x-g*.3,h.fy-y*.7,g*.6,y*.03)),m==="case"&&(r.fillStyle="#cfe8cf",r.fillRect(x+g*.55,h.fy-y*.36,g*.55,y*.16)),m==="bag"&&(r.fillStyle="#1a2a1a",r.beginPath(),r.arc(x+g*.7,h.fy-y*.22,g*.4,0,7),r.fill())},u=()=>{const p=l(0),_=l(1);r.fillStyle="#061008",r.fillRect(0,0,640,360),r.fillStyle="#0d1f10",r.beginPath(),r.moveTo(p.xl,p.fy),r.lineTo(p.xr,p.fy),r.lineTo(_.xr,_.fy),r.lineTo(_.xl,_.fy),r.fill(),r.fillStyle="#12281a",r.beginPath(),r.moveTo(p.xl,p.cy),r.lineTo(_.xl,_.cy),r.lineTo(_.xl,_.fy),r.lineTo(p.xl,p.fy),r.fill(),r.fillStyle="#16301e",r.beginPath(),r.moveTo(p.xr,p.cy),r.lineTo(_.xr,_.cy),r.lineTo(_.xr,_.fy),r.lineTo(p.xr,p.fy),r.fill(),r.fillStyle="#0a160c",r.fillRect(_.xl,_.cy,_.xr-_.xl,_.fy-_.cy),r.fillStyle="#1e3a24",r.fillRect(o(_.xl,_.xr,.3),o(_.cy,_.fy,.2),(_.xr-_.xl)*.4,(_.fy-_.cy)*.8);const v=e>=185&&e<=211;for(const[g,C]of[[.28,"7B"],[.7,"7A"]]){const M=l(g-.07),T=l(g+.07),R=S=>o(S.cy,S.fy,.24);r.fillStyle=C==="7A"&&v?"#9fe8a0":"#0a140c",r.beginPath(),r.moveTo(M.xr,R(M)),r.lineTo(T.xr,R(T)),r.lineTo(T.xr,T.fy),r.lineTo(M.xr,M.fy),r.fill(),r.fillStyle="#9fe8a0",r.font="11px monospace",r.fillText(C,(M.xr+T.xr)/2-8,R(M)-4)}for(let g=.1;g<1;g+=.3){const C=l(g);r.fillStyle="rgba(190,255,190,.5)",r.fillRect(o(C.xl,C.xr,.42),C.cy+2,(C.xr-C.xl)*.16,3)}if(e>=18&&e<=19.2&&c(o(.7,.97,(e-18)/1.2),.7,"#3a5a40","bag"),e>=19.9&&e<=21&&c(o(.97,.7,(e-19.9)/1.1),.7,"#3a5a40"),e>=183&&e<=185){const g=(e-183)/2;c(o(.97,.72,g),.62,"#6a8a6e","grey"),c(o(.99,.76,g),.8,"#6a8a6e","grey")}if(e>=211&&e<=213){const g=(e-211)/2;c(o(.72,.97,g),.62,"#6a8a6e","grey"),c(o(.76,.99,g),.8,"#6a8a6e","grey")}if(e>=253&&e<=256){const g=Math.max(0,(e-253.7)/2.3);c(o(.28,.97,g),o(.9,.78,Math.min(1,g*3)),"#4a7a52","case")}e>=330&&e<=334&&c(o(.97,.05,(e-330)/4),.4,"#5a8a60","drone");for(let g=0;g<500;g++)r.fillStyle=`rgba(160,255,170,${Math.random()*.1})`,r.fillRect(Math.random()*640,Math.random()*360,2,1);r.fillStyle="rgba(0,0,0,.22)";for(let g=0;g<360;g+=3)r.fillRect(0,g,640,1);const m=22*60+e,h=Math.floor(m/60)%24,x=Math.floor(m%60),y=Math.floor(m*60%60);r.fillStyle="#c8ffd0",r.font="14px monospace",r.fillText(`CAM-07 // ЭТ.7 // ${h>=22?"13":"14"}.11.2091  ${String(h).padStart(2,"0")}:${String(x).padStart(2,"0")}:${String(y).padStart(2,"0")}`,14,24),Math.floor(performance.now()/500)%2&&(r.fillStyle="#ff4040",r.beginPath(),r.arc(618,19,5,0,7),r.fill())},f=setInterval(()=>{n&&(e=Math.min(360,e+n*.05),a.value=String(e),e>=360&&(n=0)),u()},50);a.addEventListener("input",()=>{e=+a.value});const d=p=>{n=p,i.ov.querySelectorAll("[data-a=sp]").forEach(_=>_.classList.toggle("on",+_.dataset.v===p))};i.acts={close:()=>{t.audio.sfx("close"),i.closeAll()},sp:p=>d(+p.dataset.v),mark:()=>{if(d(0),e>=252.8&&e<=256.3){if(t.hasClue("c_cctv_alone"))return t.notify("Этот кадр уже в деле.");t.clue("c_cctv_alone"),t.log("Камера, 02:14: Элиас выходит из 7B один, с медицинским кейсом, держась за стену.")}else if(e>=183&&e<=213){if(t.hasClue("c_cctv_cleaners"))return t.notify("Этот кадр уже в деле.");t.clue("c_cctv_cleaners"),t.log("Камера, 01:05–01:31: двое в сером с шевронами HYPERION провели 26 минут в квартире Агнес.")}else if(e>=95&&e<=105){if(!t.hasClue("c_agnes_testimony"))return t.notify("Пустой коридор. Пока непонятно, чем этот кадр важен.");if(t.hasClue("c_cctv_empty"))return t.notify("Этот кадр уже в деле.");t.clue("c_cctv_empty"),t.log("Камера, 23:40: коридор пуст. Никакой женщины в красном.")}else e>=18&&e<=21?t.notify("Соседка выносит мусор. Ничего существенного."):e>=330&&e<=334?t.notify("Робот-уборщик. Ничего существенного."):t.notify("В кадре пусто. Отмечать нечего.")}},i.keyHook=p=>p.code==="Space"?(d(n?0:.25),!0):p.code==="ArrowRight"?(e=Math.min(360,e+.5),a.value=String(e),!0):p.code==="ArrowLeft"?(e=Math.max(0,e-.5),a.value=String(e),!0):!1,u(),t.audio.sfx("open")}const ri=i=>i.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),bg={doc:'<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h7"/></svg>',shard:'<svg viewBox="0 0 24 24"><path d="M12 2l6 7-6 13-6-13z"/><path d="M6 9h12M12 2v20"/></svg>',key:'<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="1"/><path d="M7 10h4v4H7zM14 11h4M14 14h3"/></svg>',tool:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/></svg>',badge:'<svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M12 8l1.2 2.6 2.8.3-2 2 .6 2.8L12 14.2 9.4 15.7l.6-2.8-2-2 2.8-.3z"/></svg>',vial:'<svg viewBox="0 0 24 24"><path d="M9 2h6M10 2v6l-5 10a3 3 0 003 4h8a3 3 0 003-4l-5-10V2"/><path d="M7.5 15h9"/></svg>',photo:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14"/><circle cx="9" cy="11" r="2"/><path d="M3 17l5-4 4 3 3-2 6 4"/></svg>',core:'<svg viewBox="0 0 24 24"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 2v20M3 7l18 10M21 7L3 17"/></svg>'},Sg={friendly:"дружелюбие",pressure:"давление",manip:"манипуляция",bribe:"подкуп",lie:"обман",threat:"угроза"},_a={person:"персона",evidence:"улика",place:"место",event:"событие"},va=i=>{const t=Math.floor(i/60);return(t>=60?Math.floor(t/60)+"ч ":"")+t%60+"м"};class Eg{constructor(t){this.g=t,this.root.innerHTML=`
      <div id="hud"><div class="cross"></div><div class="prompt"></div>
        <div class="hud-tl"><div class="hud-loc"></div><div class="hud-obj"></div></div>
        <div class="hud-tr"><div class="hud-cr"></div><div class="hud-keys">TAB журнал · I инвентарь · B доска · M карта · ESC меню</div></div>
        <div class="hud-mem"></div><div class="hud-lock">КЛИК — ЗАХВАТ МЫШИ</div>
        <div class="toasts"></div></div>
      <div class="sub"><b></b><span></span></div><div class="card"><i></i><h1></h1><p></p></div>
      <div id="dlg"></div><div id="overlay"></div>`;const e=n=>this.root.querySelector(n);this.hudEl=e("#hud"),this.ov=e("#overlay"),this.dlgEl=e("#dlg");for(const n of["cross","prompt","hud-loc","hud-obj","hud-cr","hud-mem","hud-lock","toasts","sub","card"])this.els[n]=e("."+n);this.ov.addEventListener("click",n=>{const s=n.target.closest("[data-a]");if(!s)return;const r=this.acts[s.dataset.a];r&&(this.g.audio.sfx("click"),r(s,n))}),this.ov.addEventListener("mouseover",n=>{n.target.closest(".btn,.ch,.li,.it,.tab")&&this.g.audio.sfx("hover")})}root=document.getElementById("ui");hudEl;ov;dlgEl;open=!1;name="";closable=!0;onClose=null;acts={};els={};subT=0;dirty=!1;dlgState=null;keyHook=null;hud(t){this.hudEl.classList.toggle("on",t)}update(t){const e=this.g,n=this.els,s=e.mode!=="play"||this.open;this.hudEl.classList.toggle("hide",s);const r=e.focus;if(n.cross.classList.toggle("hot",!!r),n.prompt.classList.toggle("on",!!r),r){const o=typeof r.def.label=="function"?r.def.label(e):r.def.label,l=`<span class="key">E</span>${ri(o)}`;n.prompt.innerHTML!==l&&(n.prompt.innerHTML=l)}if((this.subT-=t)<0&&n.sub.classList.remove("on"),e.mode==="play"){const o=e.level.name;n["hud-loc"].textContent!==o&&(n["hud-loc"].textContent=o);const l=e.s.credits+" ₵";n["hud-cr"].textContent!==l&&(n["hud-cr"].textContent=l);const c=cc[0].stages.find(f=>!f.done(e)),u=c?`<b>ДЕЛО ВЕЙНА</b>${ri(c.text)}`:"";n["hud-obj"].innerHTML!==u&&(n["hud-obj"].innerHTML=u),n["hud-obj"].style.display=e.dive?"none":"",n["hud-mem"].classList.toggle("on",!!e.dive),e.dive&&(n["hud-mem"].textContent=`MEMORY DIVE // деталей: ${e.s.mem[e.dive.id].length}/${xs[e.dive.id].total} // [Q] всплыть`),n["hud-lock"].classList.toggle("on",!e.locked&&!this.open&&e.fadeTo===0)}const a=this.dlgState;if(a&&!a.done){a.t+=t*62;const o=Math.min(a.full.length,Math.floor(a.t));o!==a.shown&&(a.shown=o,this.dlgEl.querySelector(".dtext").textContent=a.full.slice(0,o),o%3===0&&e.audio.sfx("blip",a.voice+a.full.charCodeAt(o-1)%7*12)),o>=a.full.length&&this.dlgFinish()}}toast(t,e="info"){const n=document.createElement("div");for(n.className="toast "+e,n.textContent=t,this.els.toasts.appendChild(n);this.els.toasts.children.length>5;)this.els.toasts.firstChild.remove();setTimeout(()=>n.remove(),5200)}subtitle(t,e,n=7){const s=this.els.sub;s.querySelector("b").textContent=t,s.querySelector("span").textContent=e,s.classList.add("on"),this.subT=n}titleCard(t,e){const n=this.els.card;n.querySelector("h1").textContent=t,n.querySelector("p").textContent=e,n.classList.remove("on"),n.offsetWidth,n.classList.add("on")}show(t,e,n={}){this.onClose?.(),this.onClose=n.onClose??null,this.keyHook=null,this.name=t,this.closable=n.closable!==!1,this.ov.innerHTML=e,this.ov.className="on"+(n.clear?" clear":""),this.open=!0,this.g.unlock()}closeAll(){if(!this.open)return;const t=this.onClose;this.onClose=null,t?.(),this.open=!1,this.name="",this.ov.className="",this.ov.innerHTML="",this.keyHook=null,this.acts={},this.g.mode==="play"&&this.g.lock()}close(){this.g.audio.sfx("close"),this.closeAll(),this.g.mode==="menu"&&this.mainMenu()}head(t,e){return`<div class="phead"><h2><small>${t}</small>${e}</h2>${this.closable?'<button class="x" data-a="close">ESC — ЗАКРЫТЬ</button>':""}</div>`}onKey(t){if(this.open){if(this.keyHook?.(t))return!0;const e={Tab:"journal",KeyJ:"journal",KeyI:"inventory",KeyB:"board",KeyM:"map"};return(t.code==="Escape"||e[t.code]===this.name)&&this.closable&&(this.name==="sub"?this.backFromSub():this.close()),!0}if(this.dlgState){const e=this.dlgState;if(t.code==="Space"||t.code==="Enter"||t.code==="KeyE")e.done?e.choices.length||e.next():this.dlgFinish();else if(e.done&&/^Digit[1-9]$/.test(t.code)){const n=e.choices[+t.code.slice(5)-1];n&&n.afford&&(this.g.audio.sfx("click"),n.pick())}return!0}return!1}subBack=null;backFromSub(){const t=this.subBack;this.subBack=null,this.g.audio.sfx("close"),t?t():this.close()}mainMenu(){const t=this.g,e=["auto","quick","1","2","3"].some(n=>t.saveMeta(n));this.show("main",`<div class="menu">
      <div class="logo">NEON<br><span>VEIL</span></div><div class="tagline">Vesper City • 2091 • детектив памяти</div>
      ${e?'<button class="btn pri" data-a="cont">Продолжить</button>':""}
      <button class="btn ${e?"":"pri"}" data-a="new">Новое дело</button>
      <button class="btn" data-a="load" ${e?"":"disabled"}>Загрузить</button>
      <button class="btn" data-a="set">Настройки</button><button class="btn" data-a="how">Управление</button>
      <div class="foot">Кампания ≈ 40 минут • 7 концовок • сохранение — в браузере<br>Рекомендуется играть в наушниках и в полноэкранном режиме (F11)</div></div>`,{closable:!1,clear:!0}),this.acts={new:()=>{t.audio.start(),this.closeAll(),t.newGame()},cont:()=>{t.audio.start();const n=["auto","quick","1","2","3"].map(s=>[s,t.saveMeta(s)]).filter(s=>s[1]).sort((s,r)=>r[1].time-s[1].time)[0];t.load(n[0])},load:()=>this.saves("load",()=>this.mainMenu()),set:()=>this.settings(()=>this.mainMenu()),how:()=>this.controls(()=>this.mainMenu())}}pause(){const t=this.g;t.mode==="play"&&(this.show("pause",`<div class="panel" style="width:24rem">${this.head("NEON VEIL","ПАУЗА")}
      <div style="display:flex;flex-direction:column;gap:.5rem">
      <button class="btn pri" data-a="close">Продолжить</button><button class="btn" data-a="save" ${t.dive?"disabled":""}>Сохранить</button><button class="btn" data-a="load">Загрузить</button>
      <button class="btn" data-a="set">Настройки</button><button class="btn" data-a="how">Управление</button><button class="btn" data-a="menu">Выйти в главное меню</button></div></div>`),this.acts={close:()=>this.close(),save:()=>this.saves("save",()=>this.pause()),load:()=>this.saves("load",()=>this.pause()),set:()=>this.settings(()=>this.pause()),how:()=>this.controls(()=>this.pause()),menu:()=>{t.save("auto"),t.toMenu()}})}controls(t){this.show("sub",`<div class="panel" style="width:36rem">${this.head("справка","УПРАВЛЕНИЕ")}<div class="kv">
      ${[["W A S D","движение"],["SHIFT","бег"],["МЫШЬ","обзор"],["E","взаимодействие / осмотр / разговор"],["TAB","журнал расследования"],["I","инвентарь (использование шардов)"],["B","доска расследования"],["M","карта города"],["Q","всплыть из воспоминания"],["1–9","выбор реплики"],["F5","быстрое сохранение"],["ESC","пауза / закрыть окно"]].map(([e,n])=>`<span class="key">${e}</span><span>${n}</span>`).join("")}
      </div><p class="hint" style="margin-top:1.2rem">Перемещение между районами — через станции транзита (метро / монорельс). Собирайте улики, связывайте их на доске и выбирайте рабочую гипотезу: от неё зависит, что вам скажут люди — и чем всё кончится. Игра не подсказывает, правы ли вы.</p></div>`),this.subBack=t,this.acts={close:()=>this.backFromSub()}}settings(t){const e=this.g,n=e.settings,s=JSON.stringify([n.quality,n.reflections]),r=(l,c,u,f,d,p)=>`<label>${c}</label><input type="range" data-k="${l}" min="${u}" max="${f}" step="${d}" value="${n[l]}"><output>${p(n[l])}</output>`,a=l=>Math.round(l*100)+"%",o=()=>{this.show("sub",`<div class="panel">${this.head("система","НАСТРОЙКИ")}<div class="set">
        ${r("master","Общая громкость",0,1,.05,a)}${r("music","Музыка",0,1,.05,a)}${r("sfx","Эффекты и среда",0,1,.05,a)}
        ${r("sens","Чувствительность мыши",.3,2.5,.1,l=>l.toFixed(1))}${r("fov","Угол обзора",55,95,1,l=>l+"°")}
        <label>Качество рендера</label><div class="seg">${["low","med","high"].map(l=>`<button data-a="q" data-v="${l}" class="${n.quality===l?"on":""}">${{low:"Низкое",med:"Среднее",high:"Высокое"}[l]}</button>`).join("")}</div><output></output>
        <label>Отражения на мокрых поверхностях</label><div class="seg"><button data-a="refl" data-v="1" class="${n.reflections?"on":""}">Вкл</button><button data-a="refl" data-v="" class="${n.reflections?"":"on"}">Выкл</button></div><output></output>
        <label>Свечение неона (bloom)</label><div class="seg"><button data-a="bloom" data-v="1" class="${n.bloom?"on":""}">Вкл</button><button data-a="bloom" data-v="" class="${n.bloom?"":"on"}">Выкл</button></div><output></output>
        </div><p class="hint" style="margin-top:1.2rem">Если игра идёт рывками — отключите отражения и понизьте качество.</p></div>`,{onClose:()=>{JSON.stringify([n.quality,n.reflections])!==s&&!e.dive&&e.rebuildZone()}}),this.subBack=t,this.ov.querySelectorAll("input[type=range]").forEach(l=>l.addEventListener("input",()=>{const c=l;n[c.dataset.k]=+c.value;const u={master:a,music:a,sfx:a,sens:f=>f.toFixed(1),fov:f=>f+"°"}[c.dataset.k];c.nextElementSibling.textContent=u(+c.value),e.applySettings()})),this.acts={close:()=>this.backFromSub(),q:l=>{n.quality=l.dataset.v,e.applySettings();const c=this.onClose;this.onClose=null,o(),this.onClose=c},refl:l=>{n.reflections=!!l.dataset.v,e.applySettings();const c=this.onClose;this.onClose=null,o(),this.onClose=c},bloom:l=>{n.bloom=!!l.dataset.v,e.applySettings();const c=this.onClose;this.onClose=null,o(),this.onClose=c}}};o()}saves(t,e){const n=this.g,s=t==="save"?["1","2","3"]:["auto","quick","1","2","3"],r={auto:"АВТО",quick:"БЫСТРОЕ",1:"СЛОТ 1",2:"СЛОТ 2",3:"СЛОТ 3"};this.show("sub",`<div class="panel">${this.head(t==="save"?"запись":"чтение",t==="save"?"СОХРАНИТЬ ДЕЛО":"ЗАГРУЗИТЬ ДЕЛО")}
      ${s.map(a=>{const o=n.saveMeta(a);return`<button class="slot" data-a="slot" data-s="${a}" ${t==="load"&&!o?"disabled":""}><b>${r[a]}</b><span>${o?ri(o.zone)+` • улик: ${o.clues}`:"— пусто —"}</span><small>${o?va(o.time)+" • "+o.date:""}</small></button>`}).join("")}</div>`),this.subBack=e,this.acts={close:()=>this.backFromSub(),slot:a=>{const o=a.dataset.s;t==="save"?n.save(o)&&(this.toast("Дело сохранено: "+r[o],"item"),n.audio.sfx("ok"),this.saves(t,e)):n.load(o)}}}jTab="tasks";jSel="";journal(t){const e=this.g;t&&(this.jTab=t);const n=this.jTab,s=[["tasks","Задачи"],["clues","Улики"],["people","Досье"],["log","Хроника"]];let r="";if(n==="tasks")r='<div class="scroll">'+cc.filter(a=>!a.visible||a.visible(e)).map(a=>{let o=!1;return`<div class="quest ${a.main?"":"side"}"><h4>${a.main?"":"ПОБОЧНОЕ • "}${a.title}</h4>${a.stages.map(l=>{const c=l.done(e);return!c&&o&&a.main?"":(c||(o=!0),`<div class="st ${c?"done":""}">${ri(l.text)}</div>`)}).join("")}</div>`}).join("")+`<p class="hint">Рабочая гипотеза: ${e.s.theory?ri(Bi.find(a=>a.id===e.s.theory).theory):"не выбрана — откройте доску [B]."}</p></div>`;else if(n==="clues"||n==="people"){const a=e.s.clues.filter(c=>Ze[c].type==="person"==(n==="people"));a.includes(this.jSel)||(this.jSel=a[0]??"");const o=this.jSel;let l='<p class="hint">Пока пусто.</p>';if(o){const c=Ze[o];if(n==="people"){const u=o.slice(2),f=Fi[u];l=`<h3>${f.name}</h3><div class="role">${f.role}${u!=="noah"&&e.s.npc[u]?" • доверие: "+["враждебно","холодно","настороженно","нейтрально","расположен","доверяет","доверяет","предан","предан"][Math.max(0,Math.min(8,e.s.npc[u].trust+3))]:""}</div>`+f.bio.filter(d=>!d[0]||e.knows(d[0])).map(d=>`<p class="${d[0]?"new":""}">${d[1]}</p>`).join("")}else{let u="";const f=Object.entries(xs).find(d=>d[1].clue===o);if(f){const d=e.flag(f[0]+"_verdict");u=`<p class="new">Изучено деталей: ${(e.s.mem[f[0]]??[]).length}/${f[1].total}.${d?" Мой вердикт: <b>"+(d==="fake"?"ПОДДЕЛКА":"ПОДЛИННОЕ")+"</b>.":f[0]==="mem_noah"?"":" Вердикт не вынесен."}</p>`}l=`<h3>${c.title}</h3><div class="role">${_a[c.type]}</div><p>${c.text}</p>${u}`}}r=`<div class="split"><div class="scroll">${a.map(c=>`<button class="li ${c===o?"on":""}" data-a="sel" data-id="${c}"><small>${n==="people"?Fi[c.slice(2)].role:_a[Ze[c].type]}</small>${Ze[c].title}</button>`).join("")}</div><div class="detail scroll">${l}</div></div>`}else r='<div class="scroll">'+(e.s.log.length?e.s.log.slice().reverse().map(a=>`<div class="logl">${ri(a)}</div>`).join(""):'<p class="hint">Записей нет.</p>')+"</div>";this.show("journal",`<div class="panel jr">${this.head(`дело № 2091-114 • ${va(e.s.time)} в игре`,"ЖУРНАЛ РАССЛЕДОВАНИЯ")}<div class="tabs">${s.map(a=>`<button class="tab ${a[0]===n?"on":""}" data-a="tab" data-t="${a[0]}">${a[1]}</button>`).join("")}<button class="tab" data-a="board" style="margin-left:auto;color:var(--m)">Доска [B] ▸</button></div>${r}</div>`),this.acts={close:()=>this.close(),tab:a=>this.journal(a.dataset.t),sel:a=>{this.jSel=a.dataset.id,this.journal()},board:()=>this.openBoard()},e.audio.sfx("open")}iSel="";inventory(){const t=this.g;t.s.inv.includes(this.iSel)||(this.iSel=t.s.inv[0]??"");const e=Oi[this.iSel];this.show("inventory",`<div class="panel jr">${this.head(`кредиты: ${t.s.credits} ₵`,"ИНВЕНТАРЬ")}<div class="split"><div class="scroll"><div class="inv">${t.s.inv.map(n=>`<button class="it ${n===this.iSel?"on":""} ${Oi[n].use?"use":""}" data-a="sel" data-id="${n}" title="${Oi[n].name}">${bg[Oi[n].icon]}</button>`).join("")}</div></div>
      <div class="detail scroll">${e?`<h3>${e.name}</h3><div class="role">${{doc:"документ",shard:"мнемо-шард",key:"доступ",tool:"оборудование",badge:"удостоверение",vial:"медикаменты",photo:"фотография",core:"носитель данных"}[e.icon]}</div><p>${e.desc}</p>${e.use?`<button class="btn pri" data-a="use" style="margin-top:1rem">${e.use.startsWith("dive")?"Погрузиться в воспоминание":"Использовать"}</button>`:""}`:""}</div></div></div>`),this.acts={close:()=>this.close(),sel:n=>{this.iSel=n.dataset.id,this.inventory()},use:()=>t.useItem(this.iSel)},t.audio.sfx("open")}bSel="";bScroll=[0,0];openBoard(){const t=this.g,e=t.s.board,n=Bi.filter(c=>c.theory&&t.ded(c.id)),s=this.bSel&&Ze[this.bSel],r=e.links.filter(c=>e.pos[c.a]&&e.pos[c.b]).map(c=>{const u=e.pos[c.a],f=e.pos[c.b],d=lc[c.rel],p=u[0]+84,_=u[1]+22,v=f[0]+84,m=f[1]+22;return`<line x1="${p}" y1="${_}" x2="${v}" y2="${m}" stroke="${d.color}" stroke-width="2" stroke-opacity=".85"/><text x="${(p+v)/2}" y="${(_+m)/2-4}" fill="${d.color}" text-anchor="middle" data-a="unlink" data-p="${c.a}|${c.b}">${d.label} ✕</text>`}).join("");this.show("board",`<div class="panel bd">${this.head("соединяйте факты • стройте версии • ошибаться можно, но дорого","ДОСКА РАССЛЕДОВАНИЯ")}<div class="bd-body">
      <div class="bd-wrap"><div class="bd-canvas"><svg>${r}</svg>${t.s.clues.map(c=>{const u=e.pos[c],f=Ze[c];return`<div class="nd ${f.type} ${c===this.bSel?"sel":""}" data-id="${c}" style="left:${u[0]}px;top:${u[1]}px"><small>${_a[f.type]}</small>${f.title}</div>`}).join("")}</div></div>
      <div class="bd-side"><div class="bd-info">${s?`<b>${s.title}</b>${s.text}<p class="hint" style="margin-top:.5rem">Теперь выберите вторую карточку, чтобы провести связь.</p>`:'<span class="hint">Нажмите на карточку, затем на вторую — и укажите тип связи. Карточки можно перетаскивать. Щелчок по подписи связи удаляет её.<br><br>Осмысленные связи рождают <b style="display:inline;color:var(--m)">версии</b>. Версии могут быть ложными.</span>'}</div>
        <div class="scroll" style="flex:1"><h4>ВЕРСИИ (${t.s.deds.length})</h4>${t.s.deds.length?t.s.deds.map(c=>{const u=Bi.find(f=>f.id===c);return`<div class="dd"><b>${u.title}</b>${u.text}</div>`}).join(""):'<p class="hint">Пока ни одной. Сопоставьте улики, которые подтверждают или опровергают друг друга.</p>'}
        <h4 style="margin-top:1rem;color:var(--a)">РАБОЧАЯ ГИПОТЕЗА: ЧТО СЛУЧИЛОСЬ С ЭЛИАСОМ?</h4>${n.length?n.map(c=>`<button class="th ${t.s.theory===c.id?"on":""}" data-a="theory" data-id="${c.id}">${c.theory}</button>`).join("")+'<p class="hint">Гипотеза открывает новые реплики и действия. Никто не скажет вам, верна ли она.</p>':'<p class="hint">Нужна хотя бы одна версия о судьбе Элиаса.</p>'}</div></div></div></div>`);const a=this.ov.querySelector(".bd-wrap"),o=this.ov.querySelector(".bd-canvas");a.scrollLeft=this.bScroll[0],a.scrollTop=this.bScroll[1];const l=()=>{this.bScroll=[a.scrollLeft,a.scrollTop]};this.acts={close:()=>{l(),this.bSel="",this.close()},unlink:c=>{const[u,f]=c.dataset.p.split("|");t.removeLink(u,f),l(),this.openBoard()},theory:c=>{t.setTheory(c.dataset.id),l(),this.openBoard()},rel:c=>{t.addLink(c.dataset.x,c.dataset.y,c.dataset.r),this.bSel="",l(),this.openBoard()},relx:()=>{this.bSel="",l(),this.openBoard()}},o.addEventListener("mousedown",c=>{const u=c.target.closest(".nd");if(!u)return;c.preventDefault();const f=u.dataset.id,d=e.pos[f],p=c.clientX,_=c.clientY,v=d[0],m=d[1];let h=!1;const x=g=>{const C=g.clientX-p,M=g.clientY-_;Math.abs(C)+Math.abs(M)>4&&(h=!0),h&&(d[0]=Math.max(0,Math.min(1330,v+C)),d[1]=Math.max(0,Math.min(1190,m+M)),u.style.left=d[0]+"px",u.style.top=d[1]+"px")},y=g=>{if(removeEventListener("mousemove",x),removeEventListener("mouseup",y),l(),h)return this.openBoard();if(t.audio.sfx("click"),!this.bSel||this.bSel===f)return this.bSel=this.bSel===f?"":f,this.openBoard();const C=a.getBoundingClientRect(),M=document.createElement("div");M.className="relpick",M.style.left=Math.min(g.clientX-C.left+a.scrollLeft,a.scrollLeft+C.width-240)+"px",M.style.top=Math.min(g.clientY-C.top+a.scrollTop,a.scrollTop+C.height-260)+"px",M.innerHTML=`<span class="hint" style="padding:.2rem .5rem">${Ze[this.bSel].title} ↔ ${Ze[f].title}</span>`+Object.entries(lc).map(([T,R])=>`<button data-a="rel" data-x="${this.bSel}" data-y="${f}" data-r="${T}" style="border-color:${R.color};color:${R.color}">${R.label}</button>`).join("")+'<button data-a="relx" style="border-color:#555;color:#888">отмена</button>',a.querySelector(".relpick")?.remove(),a.appendChild(M)};addEventListener("mousemove",x),addEventListener("mouseup",y)}),t.audio.sfx("open")}map(t){const e=this.g;if(e.dive)return;const n=Object.entries(mh),s=n.map(([a,o])=>a==="central"?"":`<line x1="50%" y1="46%" x2="${o.x}%" y2="${o.y}%" stroke="#6fe0ff" stroke-opacity=".45" stroke-dasharray="6 6"/>`).join("");let r="";for(let a=0;a<26;a++)r+=`<rect x="${a*37%100}%" y="${a*53%100}%" width="${4+a%4*3}%" height="${3+a%3*4}%" fill="none" stroke="#6fe0ff" stroke-opacity=".08"/>`;this.show("map",`<div class="panel mapw">${this.head(t?"транзитная сеть • выберите станцию":"перемещение — через станции транзита","VESPER CITY")}<div class="map"><svg>${r}${s}</svg>
      ${n.map(([a,o])=>{const l=a===e.s.zone;return`<${t&&!l?'button data-a="go"':"div"} class="zn ${l?"cur":""}" data-z="${a}" style="left:${o.x}%;top:${o.y}%"><b>${o.name}</b><small>${l?"● вы здесь":o.desc}</small></${t&&!l?"button":"div"}>`}).join("")}</div></div>`),this.acts={close:()=>this.close(),go:a=>e.travel(a.dataset.z)},e.audio.sfx("open")}doc(t,e){this.show("doc",`<div class="panel doc">${this.head("документ",t)}<div class="body scroll">${e}</div></div>`),this.acts={close:()=>this.close()}}examine(t,e){this.show("doc",`<div class="panel exm">${this.head("осмотр",t)}<div class="body scroll" style="font-size:1.05rem;line-height:1.65">${e}</div></div>`),this.acts={close:()=>this.close()}}choice(t,e){this.show("choice",`<div class="panel exm"><p style="font-size:1.08rem;line-height:1.6;margin-bottom:1.2rem">${t}</p><div style="display:flex;flex-direction:column;gap:.5rem">${e.map((n,s)=>`<button class="btn ${s===0?"pri":""}" data-a="o" data-i="${s}">${n[0]}</button>`).join("")}</div></div>`),this.acts={o:n=>{const s=e[+n.dataset.i][1];this.closeAll(),s()},close:()=>this.close()}}hack(t){yg(this,t)}cctv(){Mg(this)}verdict(t,e,n,s){this.show("verdict",`<div class="panel vd">${this.head("memory dive • экспертиза",xs[t].title.toUpperCase())}
      <p>Изучено деталей: <b>${e} из ${n}</b>. ${e<3?"Вы почти ничего не осмотрели — вердикт будет догадкой.":""}</p>
      <p>Воспоминания подделывают. Вердикт останется в деле и повлияет на то, каким версиям вы сможете доверять. Что это за запись?</p>
      <div class="row"><button class="btn" data-a="v" data-v="real">Подлинное воспоминание</button><button class="btn pri" data-a="v" data-v="fake">Подделка / монтаж</button><button class="btn" data-a="close">Вернуться и осмотреться</button></div></div>`),this.acts={v:r=>s(r.dataset.v),close:()=>{this.close(),s(null)}}}sequence(t){const e=[["n_chair","Я в кресле. Надо мной — молодой инженер."],["n_fire","Зал. Тридцать одно кресло. Дым."],["n_deal","Крейн протягивает планшет с договором."],["n_girl","Я несу на руках девушку с браслетом М-12."]];let n=[];const s=()=>{this.show("verdict",`<div class="panel vd" style="width:min(52rem,92vw)">${this.head("memory dive • реконструкция","ЧТО БЫЛО СНАЧАЛА?")}<p>Оригинал повреждён: фрагменты всплыли вперемешку. Восстановите порядок событий той ночи. От того, как вы их сложите, зависит, что вы будете помнить о себе.</p>
        <div class="seq">${e.map(r=>{const a=n.indexOf(r[0]);return`<button data-a="p" data-id="${r[0]}" class="${a>=0?"pk":""}">${a>=0?`<em>${a+1}</em>`:""}${r[1]}</button>`}).join("")}</div>
        <div class="row"><button class="btn pri" data-a="ok" ${n.length<4?"disabled":""}>Так всё и было</button><button class="btn" data-a="rs">Сбросить</button></div></div>`,{closable:!1}),this.acts={p:r=>{const a=r.dataset.id;n=n.includes(a)?n.filter(o=>o!==a):[...n,a],s()},rs:()=>{n=[],s()},ok:()=>t(n)}};s()}dialogue(t,e,n,s,r,a){this.dlgEl.className="on",this.root.classList.add("talk"),this.dlgEl.innerHTML=`<div class="dbox"><div class="dwho ${n?"in":""}">${t}</div><div class="dtext ${n?"in":""}"></div><div class="dch"></div></div>`,this.dlgState={full:e,shown:0,done:!1,choices:s,next:r,voice:a,t:0},this.dlgEl.querySelector(".dtext").onclick=()=>{const o=this.dlgState;o.done?o.choices.length||o.next():this.dlgFinish()}}dlgFinish(){const t=this.dlgState;t.done=!0,this.dlgEl.querySelector(".dtext").textContent=t.full;const e=this.dlgEl.querySelector(".dch");if(!t.choices.length){e.innerHTML='<div class="dnext">ПРОБЕЛ — ДАЛЕЕ ▸</div>';return}e.innerHTML=t.choices.map((n,s)=>`<button class="ch" data-i="${s}" ${n.afford?"":"disabled"}><i>${s+1}</i>${n.tone?`<span class="tone ${n.tone}">${Sg[n.tone]}${n.cost?" −"+n.cost+"₵":""}</span>`:n.cost?`<span class="tone bribe">−${n.cost}₵</span>`:""}<span>${ri(n.t)}</span></button>`).join(""),e.querySelectorAll(".ch").forEach(n=>{n.onclick=()=>{this.g.audio.sfx("click"),t.choices[+n.dataset.i].pick()},n.onmouseenter=()=>this.g.audio.sfx("hover")})}closeDialogue(){this.root.classList.remove("talk"),this.dlgEl.className="",this.dlgEl.innerHTML="",this.dlgState=null}ending(t){const e=this.g,n=Object.keys(Ze).length;this.hud(!1),this.show("end",`<div class="panel end scroll" style="display:block"><div class="es" style="color:${t.color}">${t.sub}</div><h1 style="color:${t.color};text-shadow:0 0 2rem ${t.color}">${t.title}</h1>
      ${t.paras.map((s,r)=>`<p style="animation-delay:${r*.5}s">${s}</p>`).join("")}
      ${t.truth?`<div class="truth"><b>ЧЕГО ВЫ НЕ УЗНАЛИ / ЧТО ВЫ СДЕЛАЛИ</b>${t.truth}</div>`:""}
      <div class="stats"><div><b>${va(e.s.time)}</b><small>время дела</small></div><div><b>${e.s.clues.length}/${n}</b><small>фактов на доске</small></div><div><b>${e.s.deds.length}/${Bi.length}</b><small>версий построено</small></div><div><b>${Object.values(e.s.mem).reduce((s,r)=>s+r.length,0)}/18</b><small>деталей памяти</small></div></div>
      <p class="hint">В этой истории семь развязок. Другие версии, другие союзники и другое отношение к собственной памяти приведут к иному финалу.</p>
      <div class="row" style="margin-top:1rem"><button class="btn pri" data-a="menu">В главное меню</button><button class="btn" data-a="load">Загрузить сохранение</button></div></div>`,{closable:!1}),this.acts={menu:()=>e.toMenu(),load:()=>this.saves("load",()=>this.ending(t))}}}const wg={central:ag,underground:lg,residential:cg,hyperion:hg},Tg={mem_agnes:fg,mem_lab7:dg,mem_noah:pg},xa="neonveil.save.",uc="neonveil.settings";function ya(){return{v:1,flags:{},inv:["i_neuro"],clues:[],credits:150,npc:{},board:{pos:{},links:[]},deds:[],theory:null,zone:"central",pos:[-22,0,12.6],yaw:Math.PI,time:0,log:[],mem:{},once:{},barks:{}}}class Ag{canvas=document.getElementById("game");renderer;camera;post;audio=new Km;ui;level;world=null;s=ya();story=vg;player={pos:new P,yaw:0,pitch:0,bob:0,stepT:0};mode="menu";dialogueNpc=null;started=!1;keys=new Set;locked=!1;t=0;fade=1;fadeTo=0;fadeCb=null;focus=null;ray=new Bm;dive=null;settings={master:.8,music:.6,sfx:.8,sens:1,quality:"med",reflections:!0,bloom:!0,fov:70};dlg=null;look=null;memAmt=0;glitch=0;constructor(){try{Object.assign(this.settings,JSON.parse(localStorage.getItem(uc)||"{}"))}catch{}this.renderer=new mm({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.toneMapping=fo,this.renderer.toneMappingExposure=1.25,this.camera=new ke(this.settings.fov,innerWidth/innerHeight,.08,700),this.camera.rotation.order="YXZ",this.post=new jm(this.renderer,new qc,this.camera),this.ui=new Eg(this),this.applySettings(),addEventListener("resize",()=>this.resize()),this.resize(),this.bindInput(),this.loadZone("central","menu",!0),this.ui.mainMenu();let t=performance.now();const e=n=>{const s=Math.min(.05,(n-t)/1e3);t=n,this.frame(s),requestAnimationFrame(e)};requestAnimationFrame(e)}applySettings(){const t=this.settings;this.audio.vol={master:t.master,music:t.music,sfx:t.sfx},this.audio.applyVol(),this.post.bloom.strength=t.bloom?.6:0,this.camera.fov=t.fov,this.camera.updateProjectionMatrix(),localStorage.setItem(uc,JSON.stringify(t)),this.resize()}resize(){const t=this.settings.quality==="low"?.7:this.settings.quality==="med"?1:Math.min(devicePixelRatio,2);this.renderer.setPixelRatio(t),this.renderer.setSize(innerWidth,innerHeight,!1),this.canvas.style.width="100vw",this.canvas.style.height="100vh",this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.post?.resize(innerWidth,innerHeight,t)}get buildOpts(){return{reflections:this.settings.reflections,quality:this.settings.quality==="high"?.75:this.settings.quality==="med"?.5:.35,rain:1}}bindInput(){document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,!this.locked&&this.autoPause&&this.mode==="play"&&!this.ui.open&&this.fadeTo===0&&this.ui.pause()}),this.canvas.addEventListener("click",()=>{this.audio.start(),this.mode==="play"&&!this.ui.open&&this.lock()});let t=!1;this.canvas.addEventListener("mousedown",()=>{t=!0}),addEventListener("mouseup",()=>{t=!1}),addEventListener("mousemove",e=>{if(this.mode!=="play"||this.ui.open||!this.locked&&!t)return;const n=.0022*this.settings.sens;this.player.yaw-=e.movementX*n,this.player.pitch=Math.max(-1.45,Math.min(1.45,this.player.pitch-e.movementY*n))}),addEventListener("keydown",e=>{if((e.code==="Tab"||e.code==="F5")&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),this.audio.start(),!this.ui.onKey(e)&&!(this.mode!=="play"||this.fadeTo>0)))switch(e.code){case"KeyE":this.interact();break;case"Tab":case"KeyJ":this.ui.journal();break;case"KeyI":this.ui.inventory();break;case"KeyB":this.dive||this.ui.openBoard();break;case"KeyM":this.ui.map(!1);break;case"Escape":this.ui.pause();break;case"F5":this.save("quick"),this.notify("Быстрое сохранение.");break;case"KeyQ":this.dive&&this.memExit();break}}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear())}lock(){try{this.canvas.requestPointerLock()?.catch?.(()=>{})}catch{}}unlock(){document.pointerLockElement&&document.exitPointerLock()}setLevel(t){this.level=t,this.post.setScene(t.scene),this.focus=null;const e=this.audio.amb;e.rain=t.amb.rain,e.hum=t.amb.hum,e.drip=t.amb.drip,e.siren=t.amb.siren,e.mem=t.isMemory?1:0}place(t){this.player.pos.set(t.x,t.y,t.z),this.player.yaw=t.yaw,this.player.pitch=0}loadZone(t,e="metro",n=!1){this.level&&!this.level.isMemory&&this.level.dispose();const s=wg[t](this.buildOpts);this.setLevel(s),this.s.zone=t,this.place(s.spawns[e]??s.spawns.metro),n||this.ui.titleCard(s.name,s.sub)}rebuildZone(){const t=this.player.pos.clone(),e=this.player.yaw;this.loadZone(this.s.zone,"metro",!0),this.player.pos.copy(t),this.player.yaw=e}fast=!1;autoPause=!0;fadeOut(t,e=2.6){if(this.fast){t();return}this.fadeTo=1,this.fadeSpeed=e,this.fadeCb=t}fadeSpeed=2.6;teleport(t){this.audio.sfx("door"),this.fadeOut(()=>{this.place(this.level.spawns[t])})}travel(t){t!==this.s.zone&&(this.ui.closeAll(),this.audio.sfx("travel"),this.fadeOut(()=>{this.loadZone(t,"metro"),this.story.onTravel(this),this.save("auto"),this.mode==="play"&&this.lock()},1.2))}openTravel(){this.ui.map(!0)}flag(t){return this.s.flags[t]}set(t,e=!0){this.s.flags[t]=e}has(t){return this.s.inv.includes(t)}give(t){this.has(t)||(this.s.inv.push(t),this.ui.toast("Получено: "+Oi[t].name,"item"),this.audio.sfx("pickup"))}take(t){this.s.inv=this.s.inv.filter(e=>e!==t)}hasClue(t){return this.s.clues.includes(t)}ded(t){return this.s.deds.includes(t)}knows(t){return!!this.flag(t)||this.hasClue(t)||this.ded(t)}clue(t,e=!1){if(this.hasClue(t)||!Ze[t])return;this.s.clues.push(t);const n=Ze[t],s={person:0,place:1,event:1,evidence:2}[n.type],r=this.s.clues.filter(l=>({person:0,place:1,event:1,evidence:2})[Ze[l].type]===s).length-1,a=[2,1,4][s],o=[40,420,640][s];this.s.board.pos[t]=[o+r%a*185+r*37%17,50+Math.floor(r/a)*104+r*53%23],e||(this.ui.toast({person:"Досье",place:"Место",event:"Событие",evidence:"Улика"}[n.type]+": "+n.title,"clue"),this.audio.sfx("clue")),this.checkDeductions()}pay(t){return this.s.credits<t?!1:(this.s.credits-=t,t&&this.audio.sfx("coin"),!0)}earn(t){this.s.credits+=t,this.ui.toast("+"+t+" ₵","item"),this.audio.sfx("coin")}trust(t,e){const n=this.s.npc[t]??={met:!1,trust:0};return e&&(n.trust=Math.max(-3,Math.min(5,n.trust+e))),n.trust}npcName(t){return this.s.npc[t]?.met?Fi[t].name:Fi[t].role}notify(t,e="info"){this.ui.toast(t,e),e==="warn"&&this.audio.sfx("error")}log(t){this.s.log.push(t)}say(t,e,n=7){this.ui.subtitle(t,e,n)}examine(t,e){this.audio.sfx("open"),this.ui.examine(t,e)}choice(t,e){this.ui.choice(t,e)}hack(t){this.ui.hack(t)}bark(t){const e=ig[t],n=this.s.barks[t]??0;this.s.barks[t]=n+1,this.say(e.name.toUpperCase(),e.lines[n%e.lines.length],6),this.audio.sfx("blip",300)}addLink(t,e,n){this.s.board.links=this.s.board.links.filter(s=>!(s.a===t&&s.b===e||s.a===e&&s.b===t)),this.s.board.links.push({a:t,b:e,rel:n}),this.checkDeductions()}removeLink(t,e){this.s.board.links=this.s.board.links.filter(n=>!(n.a===t&&n.b===e||n.a===e&&n.b===t))}checkDeductions(){for(const t of Bi){if(this.ded(t.id)||t.need&&!t.need(this))continue;this.s.board.links.some(n=>t.rels.includes(n.rel)&&t.pairs.some(s=>s[0]===n.a&&s[1]===n.b||s[0]===n.b&&s[1]===n.a))&&(this.s.deds.push(t.id),this.ui.toast("Новая версия: "+t.title,"ded"),this.audio.sfx("deduce"),this.log("Версия: "+t.title+"."))}}setTheory(t){this.s.theory=t;const e=Bi.find(n=>n.id===t);this.log("Рабочая гипотеза: "+e.theory),this.ui.toast("Рабочая гипотеза принята","ded"),this.audio.sfx("deduce")}talk(t){const e=hc[t];if(!e)return;const n=e.start(this);(this.s.npc[t]??={met:!1,trust:0}).met=!0,this.mode="dialogue",this.dialogueNpc=t,this.unlock();const s=this.level.npcs.find(r=>r.id===t);this.look=s?s.pos.clone().add(new P(0,1.62*s.h.group.scale.y,0)):null,this.enterNode(t,n)}enterNode(t,e){const n=hc[t].nodes[e];if(!n)return this.endDialogue();if(this.dlg={id:t,node:e},n.do?.(this),this.mode!=="dialogue")return;const s=typeof n.text=="function"?n.text(this):n.text,r=(n.choices??[]).map((o,l)=>({c:o,i:l})).filter(({c:o,i:l})=>(!o.if||o.if(this))&&!(o.once&&this.s.once[`${t}.${e}.${l}`])),a=n.who==="noah"?"КАРРЕН":Fi[t].name.toUpperCase();this.ui.dialogue(a,s,n.who==="noah",r.map(({c:o,i:l})=>({t:o.t,tone:o.tone,cost:o.cost,afford:!o.cost||this.s.credits>=o.cost,pick:()=>this.pick(t,e,o,l)})),()=>{const o=typeof n.go=="function"?n.go(this):n.go;o?this.enterNode(t,o):this.endDialogue()},Fi[t].voice*(n.who==="noah"?.6:1))}pick(t,e,n,s){if(n.cost&&!this.pay(n.cost)){this.notify("Недостаточно кредитов.","warn");return}if(n.once&&(this.s.once[`${t}.${e}.${s}`]=1),n.do?.(this),this.mode!=="dialogue")return;const r=typeof n.go=="function"?n.go(this):n.go;r?this.enterNode(t,r):this.endDialogue()}endDialogue(){this.ui.closeDialogue(),this.mode="play",this.dialogueNpc=null,this.dlg=null,this.look=null,this.lock()}useItem(t){const e=Oi[t].use;if(e&&e.startsWith("dive:")){if(this.dive)return this.notify("Вы уже в погружении.","warn");this.ui.closeAll(),this.startDive(e.slice(5))}}startDive(t){this.audio.sfx("dive"),this.glitch=1,this.fadeOut(()=>{this.dive={id:t,ret:{pos:this.player.pos.clone(),yaw:this.player.yaw,pitch:this.player.pitch}},this.world=this.level;const e=Tg[t]();this.setLevel(e),this.place(e.spawns.start),this.s.mem[t]??=[],this.ui.titleCard(e.name,e.sub),this.ui.toast("MEMORY DIVE: изучайте детали [E]. Выход — белые врата или [Q].","info"),this.lock()},1.2)}memFound(t){return!!this.dive&&(this.s.mem[this.dive.id]??[]).includes(t)}memFoundIn(t,e){return(this.s.mem[t]??[]).includes(e)}memMark(t,e,n){if(!this.dive)return;const s=this.s.mem[this.dive.id];s.includes(t)||(s.push(t),this.audio.sfx("anomaly"),this.glitch=.6,t==="l_self"&&(this.set("know_bruno"),this.clue("p_bruno",!0)),t==="l_list"&&this.set("saw_m12_face")),this.ui.examine(e,n)}memExit(){if(!this.dive)return;const t=this.dive.id,e=xs[t],n=this.s.mem[t].length;e.verdict?this.ui.verdict(t,n,e.total,s=>{s&&this.endDive(s)}):n<e.total?this.choice(`Собрано фрагментов: ${n} из ${e.total}. Всплыть сейчас — значит помнить обрывками.`,[["Остаться и досмотреть",()=>{}],["Всплыть",()=>this.endDive("broken")]]):this.ui.sequence(s=>this.endDive(s.join()==="n_fire,n_girl,n_deal,n_chair"?"full":"broken"))}endDive(t){const e=this.dive.id;this.audio.sfx("surface"),this.glitch=1,this.ui.closeAll(),this.fadeOut(()=>{const n=this.dive;this.level.dispose(),this.setLevel(this.world),this.world=null,this.dive=null,this.player.pos.copy(n.ret.pos),this.player.yaw=n.ret.yaw,this.player.pitch=n.ret.pitch,this.clue(xs[e].clue,!0),e==="mem_agnes"&&(this.set("mem_agnes_verdict",t),this.log("Воспоминание Агнес — мой вердикт: "+(t==="fake"?"ПОДДЕЛКА.":"подлинное.")),this.say("КАРРЕН",t==="fake"?"Основа настоящая, а поверх — заплатка. Кто-то вписал в вечер Агнес женщину в красном. Вопрос — кто и зачем.":"Запись как запись. Значит, женщина в красном существует — и она была с Элиасом последней.")),e==="mem_lab7"&&(this.set("mem_lab7_verdict",t),this.set("mem_lab7_seen"),this.log("Воспоминание из Лаб-7 — мой вердикт: "+(t==="fake"?"ПОДДЕЛКА.":"подлинное.")),this.say("КАРРЕН",t==="fake"?"Пиксель подсунул мне фальшивку. На это я опираться не буду.":"Это было на самом деле. Он унёс архив в собственной голове. И ему помогли выйти.")),e==="mem_noah"&&(this.set("noah_recall",t),this.clue("p_noah",!0),this.audio.sfx("sting"),this.log(t==="full"?"Я вспомнил. Меня никто не заставлял. Я попросил сам.":"Я видел обрывки. Крейн, договор, кресло. Кажется, меня вынудили."),this.say("КАРРЕН",t==="full"?"Тридцать один плюс один. Я не жертва этой истории. Я её соавтор. Теперь архив у меня — и решать снова мне.":"Обрывки. Крейн, планшет, кресло… Меня заставили. Наверное. Должны были заставить.",10)),this.checkDeductions(),this.save("auto"),this.lock()},1.2)}ending(t){this.set("ended"),this.ui.closeDialogue(),this.ui.closeAll(),this.mode="end",this.dialogueNpc=null,this.unlock(),this.audio.sfx("sting"),t.startsWith("veil")&&this.earn(5e3),this.fadeOut(()=>{this.ui.ending(xg(t,this))},.7)}save(t){if(this.dive||!this.started||this.mode==="end")return!1;const e=this.player.pos;this.s.pos=[e.x,e.y,e.z],this.s.yaw=this.player.yaw;const n={zone:mh[this.s.zone].name,time:this.s.time,date:new Date().toLocaleString("ru-RU"),clues:this.s.clues.length};try{return localStorage.setItem(xa+t,JSON.stringify({meta:n,s:this.s})),!0}catch{return!1}}saveMeta(t){try{return JSON.parse(localStorage.getItem(xa+t)||"null")?.meta??null}catch{return null}}load(t){let e;try{e=JSON.parse(localStorage.getItem(xa+t)||"null")}catch{}return e?(this.s=Object.assign(ya(),e.s),this.dive=null,this.world=null,this.started=!0,this.ui.closeAll(),this.ui.closeDialogue(),this.mode="play",this.fade=1,this.fadeTo=0,this.loadZone(this.s.zone,"metro"),this.player.pos.set(...this.s.pos),this.player.yaw=this.s.yaw,this.ui.hud(!0),this.lock(),!0):!1}newGame(){this.s=ya(),this.started=!0,this.mode="play",this.ui.closeAll(),this.fade=1,this.fadeTo=0,this.loadZone("central","start"),this.ui.hud(!0),this.lock(),this.say("14 НОЯБРЯ 2091 • 23:07","Четвёртый день дождя. В этом городе продаётся всё, включая вчерашний день. Ко мне пришла женщина, которой нечего продать, кроме тревоги.",9),setTimeout(()=>this.ui.toast("WASD — движение • мышь — обзор • E — действие • Tab — журнал • B — доска","info"),2500)}toMenu(){this.ui.closeAll(),this.ui.closeDialogue(),this.unlock(),this.mode="menu",this.started=!1,this.dive=null,this.world=null,this.ui.hud(!1),this.fade=1,this.fadeTo=0,this.loadZone("central","menu",!0),this.ui.mainMenu()}findFocus(){this.focus=null;const t=this.level;this.ray.setFromCamera(new tt(0,0),this.camera),this.ray.far=5;const e=this.ray.intersectObjects([...t.targets,...t.solids],!1);for(const n of e){const s=n.object,r=s.userData.interact;if(!r)return;if(!(s.userData.disabled||!s.visible||r.if&&!r.if(this))){n.distance<=(r.range??2.8)&&(this.focus={def:r,obj:s});return}}}interact(){this.focus&&this.focus.def.use(this,this.focus.obj)}collides(t,e,n,s){for(const a of this.level.colliders)if(!(!a.on||s?.has(a))&&!(a.minY>=n+1.7||a.maxY<=n+.25)&&t>a.minX-.34&&t<a.maxX+.34&&e>a.minZ-.34&&e<a.maxZ+.34)return a;return null}movePlayer(t){const e=this.keys,n=this.player,s=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),r=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0);let a=!1;if(s||r){const o=(e.has("ShiftLeft")?5.8:3.5)*(this.dive?.8:1),l=Math.hypot(s,r),c=Math.sin(n.yaw),u=Math.cos(n.yaw),f=(-c*s+u*r)/l*o*t,d=(-u*s-c*r)/l*o*t,p=new Set;for(const _ of this.level.colliders)_.on&&this.hit1(_,n.pos.x,n.pos.z,n.pos.y)&&p.add(_);this.collides(n.pos.x+f,n.pos.z,n.pos.y,p)||(n.pos.x+=f,a=!0),this.collides(n.pos.x,n.pos.z+d,n.pos.y,p)||(n.pos.z+=d,a=!0),a&&(n.stepT+=t*o,n.stepT>2.3&&(n.stepT=0,this.audio.sfx(this.level.isIndoor(n.pos)?"stepIn":"step",e.has("ShiftLeft")?1.3:1)))}n.bob+=((a?1:0)-n.bob)*Math.min(1,t*8)}hit1(t,e,n,s){return!(t.minY>=s+1.7||t.maxY<=s+.25)&&e>t.minX-.34&&e<t.maxX+.34&&n>t.minZ-.34&&n<t.maxZ+.34}frame(t){this.t+=t;const e=this.player,n=this.camera;if(this.fade!==this.fadeTo&&(this.fade+=Math.sign(this.fadeTo-this.fade)*Math.min(Math.abs(this.fadeTo-this.fade),t*this.fadeSpeed),this.fade>=1&&this.fadeTo===1)){const a=this.fadeCb;this.fadeCb=null,this.fadeTo=0,a?.()}const s=this.post.u;if(s.uFade.value=this.mode==="end"?Math.max(this.fade,.82):this.fade,this.memAmt+=((this.level.isMemory?1:0)-this.memAmt)*Math.min(1,t*4),s.uMem.value=this.memAmt,this.glitch=Math.max(0,this.glitch-t*1.2),s.uGlitch.value=this.glitch+(this.level.isMemory?.12:0),this.mode==="menu"||this.mode==="end"){const a=this.t*.03;n.position.set(-14+Math.sin(a)*24,2+Math.sin(a*1.7)*.5,7.4+Math.cos(a*.6)*.8),n.rotation.set(.14,-Math.PI/2+.25+Math.sin(a*.9)*.3,0),e.pos.set(n.position.x,0,n.position.z)}else{if(this.mode==="play"&&!this.ui.open&&this.fadeTo===0?(this.movePlayer(t),this.s.time+=t):e.bob+=(0-e.bob)*Math.min(1,t*8),this.mode==="dialogue"&&this.look){const l=this.look.clone().sub(new P(e.pos.x,e.pos.y+1.66,e.pos.z)),c=Math.atan2(-l.x,-l.z),u=Math.atan2(l.y,Math.hypot(l.x,l.z));let f=c-e.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;e.yaw+=f*Math.min(1,t*4),e.pitch+=(u-e.pitch)*Math.min(1,t*4)}const a=Math.sin(e.stepT*2.7)*.035*e.bob;n.position.set(e.pos.x,e.pos.y+1.66+a,e.pos.z),n.rotation.set(e.pitch,e.yaw,Math.sin(e.stepT*1.35)*.004*e.bob);const o=this.mode==="dialogue"?this.settings.fov-20:this.settings.fov+(this.keys.has("ShiftLeft")&&e.bob>.5?5:0);Math.abs(n.fov-o)>.05&&(n.fov+=(o-n.fov)*Math.min(1,t*5),n.updateProjectionMatrix())}this.level.update(t,this.t,this),this.mode==="play"&&!this.ui.open?this.findFocus():this.focus=null;const r=this.audio.amb;r.indoor=this.level.isIndoor(e.pos)?1:0,r.bar=this.level.amb.bar?Math.max(0,1-this.level.amb.bar.distanceTo(e.pos)/22)*.5:0,this.audio.update(t),this.ui.update(t),this.post.render(t)}}async function Cg(){const i="NEON VEIL Память Ж";try{await Promise.all([document.fonts.load('400 96px "Russo One"',i),document.fonts.load('400 20px "Exo 2"',i),document.fonts.load('600 30px "Exo 2"',i),document.fonts.load('400 20px "JetBrains Mono"',i),document.fonts.load('700 26px "JetBrains Mono"',i)])}catch{}try{window.__nv=new Ag}catch(t){console.error(t),document.getElementById("ui").innerHTML=`<div id="overlay" class="on"><div class="panel" style="width:min(44rem,90vw)">
      <div class="phead"><h2><small>ошибка запуска</small>ГРАФИКА НЕДОСТУПНА</h2></div>
      <p style="line-height:1.7;margin-bottom:1rem">Браузер не дал игре доступ к 3D-графике (WebGL отключён или не поддерживается). NEON VEIL без него не запустится.</p>
      <p class="hint" style="font-size:.95rem;line-height:1.8">1. Откройте <b>chrome://gpu</b> — в строке WebGL должно быть «Hardware accelerated».<br>
      2. Включите <b>chrome://flags/#ignore-gpu-blocklist</b> и перезапустите браузер.<br>
      3. Обновите драйвер видеокарты.<br>4. Не запускайте через удалённый рабочий стол или виртуальную машину.<br>5. Попробуйте другой браузер: Edge или Firefox.</p>
      <p class="hint" style="margin-top:1rem">Техническая причина: ${String(t?.message??t).replace(/[<>&]/g,"")}</p></div></div>`}}Cg();
