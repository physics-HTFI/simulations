"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1640],{1640:(t,a,e)=>{e.r(a),e.d(a,{spec:()=>l});var s=e(1550),i=e(2866);const h=(t,a,e,s,h)=>{let r=0;return s.forEach((s=>r+=.5*s.h*(i.i.Delta(a-s.x+e*t,s.w)+i.i.Delta(a-s.x-e*t,s.w)))),h.forEach((s=>r+=.5*s.h/e*(i.i.Delta_i(a-s.x+e*t,s.w)-i.i.Delta_i(a-s.x-e*t,s.w)))),r};class r{constructor(t,a){this.dat=new Uint8Array(3*u*1),this.z=t.z,this.v=t.v,this.peak_u=t.peak_u,this.peak_dudt=t.peak_dudt,this.lines=s.ay.Curves(u,2,0),this.arrows=[];const e=s.ay.Arrow(2);for(let t=0;t<u;t++){const t=0===this.arrows.length?e:e.clone();s.ay.ShadowOnOff(t,!0),this.arrows.push(t)}const r=s.ay.Material("plus",0),n=s.ay.Material("minus",2),l=2*o/(u-1),{plane:c,texture:p}=s.ay.RawTexturePlane(this.dat,2*o+l,o/8,u,1,s.V.Zero(3));c.rotation.x=-Math.PI/2,c.position.z=this.z,c.visibility=.5;const[w,_]=[-.17,.17];this.draw=t=>{c.setEnabled(d);const a=[];for(let e=0;e<u;e++){const d=2*e*o/(u-1)-o,l=h(t,d,this.v,this.peak_u,this.peak_dudt);i.i.SetRGB(this.dat,e,(l-w)/(_-w)),a.push(d+.5*l,0,this.z+o/16,d+.5*l,0,this.z-o/16),s.ay.Set_ArrowPosition(this.arrows[e],new s.V([d,0,this.z+o/12]),new s.V([.5*l,0,0]),1);const c=l<0?n:r;this.arrows[e].material!==c&&(this.arrows[e].material=c)}s.ay.UpdateCurve(this.lines,a),p.update(this.dat)}}}const n=()=>{s.jG.set_2D(2*o+.15),s.ay.Ground(2)},o=.5,u=49;let d;const l={title:"縦波の伝播",comment:"赤は右向きの変位、青は左",cases:[{title:"初期変位のみ",setup:n,init:[{z:o/2,v:.1,peak_u:[{x:0,h:o/30,w:10/o}],peak_dudt:[]},{z:0,v:.1,peak_u:[{x:-o/2,h:o/30,w:10/o},{x:o/2,h:o/30,w:10/o}],peak_dudt:[]},{z:-o/2,v:.1,peak_u:[{x:-o/2,h:o/30,w:10/o},{x:o/2,h:-o/30,w:10/o}],peak_dudt:[]}]},{title:"初期速度のみ",setup:n,init:[{z:o/2,v:.1,peak_u:[],peak_dudt:[{x:0,h:o/30,w:10/o}]},{z:0,v:.1,peak_u:[],peak_dudt:[{x:-o/2,h:o/30,w:10/o},{x:o/2,h:o/30,w:10/o}]},{z:-o/2,v:.1,peak_u:[],peak_dudt:[{x:-o/2,h:o/30,w:10/o},{x:o/2,h:-o/30,w:10/o}]}]}],config:{start_wait:.2,restart_time:9},init:()=>{d=!0},controls:[{type:"check",text:"ヒートマップ",checked:()=>d,change:t=>d=t}],generator:(t,a)=>new r(t,a)}},2866:(t,a,e)=>{e.d(a,{i:()=>s});class s{}s.Delta_ii=(t,a)=>.5*(1/a*Math.log(Math.cosh(a*t))+t),s.Delta_i=(t,a)=>.5*(1+Math.tanh(a*t)),s.Delta=(t,a)=>{const e=Math.tanh(a*t);return a/2*(1-e*e)},s.Delta_d=(t,a)=>{const e=Math.tanh(a*t);return-a*a*e*(1-e*e)},s.Delta_dd=(t,a)=>{const e=Math.tanh(a*t);return-a*a*a*(1-3*e*e)*(1-e*e)},s.Delta_ddd=(t,a)=>{const e=Math.tanh(a*t);return 4*a*a*a*a*e*(2-3*e*e)*(1-e*e)},s.SetRGB=(t,a,e)=>{const s=e<.5?2*e:1,i=e<.5?2*e:2-2*e,h=e<.5?1:2-2*e,r=t=>Math.max(0,Math.min(255,Math.floor(256*t)));t[3*a+0]=r(s),t[3*a+1]=r(i),t[3*a+2]=r(h)}}}]);