"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9148],{9148:(t,e,s)=>{s.r(e),s.d(e,{spec:()=>E});var a=s(1550),n=s(4088);let i,c,r,o,l=0;const h=.5,u=(t,e,s)=>{const i=Math.min(t,.8*e/(n.c*s)),c=-.4*e+n.c*s*i;return new a.V([c,0,0])},d=(t,e,s)=>{if(t>.8*e/(n.c*s))return a.V.Zero(3);{const t=n.c*s/1;return new a.V([t,0,0])}},f=(t,e,s,a,i,c)=>a*n.iC.Delta(t.minus(u(e,i,c)),s);class m{constructor(t,e){this.slices=[new a.p2(1),new a.p2(1)],this.orbit=a.ay.Curve(0,0,2,12),this.deviation=t.deviation,this.Q=t.Q,this.beta=t.beta,a.ay.UpdateCurve(this.orbit,[-.4,0,0,.4,0,0]);const s=a.ay.Ball(.02,0),m=[[],[]],p=[[],[]],_=[[],[]],E=a.ay.Arrow(0),b=a.ay.Arrow(1),w=a.ay.Arrow(5);for(let t=0;t<441;t++)for(let e=0;e<2;e++)m[e].push(0===t?E:E.createInstance("E"+t+e)),p[e].push(0===t?b:b.createInstance("B"+t+e)),_[e].push(0===t?w:w.createInstance("j"+t+e));this.draw=t=>{const e=l>=0;s.position=u(t,1,this.beta).to_Vector3(),this.slices[0].setEnabled(!0),this.slices[1].setEnabled(i),this.slices[0].setDirection(i||e?2:0),this.slices[1].setDirection(e?0:1),i?(this.slices[0].setOffset(e?[-.5+l,0,-l]:[0,-.5-l,l]),this.slices[1].setOffset(e?[l,0,h-l]:[0,-l,h+l])):this.slices[0].setOffset(e?[0,0,-l]:[l,0,0]),this.slices.forEach(((e,s)=>{e.getPos(21).forEach(((i,l)=>{if(m[s][l].setEnabled(e.frame.isEnabled()&&c),p[s][l].setEnabled(e.frame.isEnabled()&&r),_[s][l].setEnabled(e.frame.isEnabled()&&o),!e.frame.isEnabled())return;const[h,E]=((t,e,s,a,i,c)=>{const r=n.c*c,o=Math.min(e,.8*i/r),l=(o-0)/30,h=a/n.Zy,f=n.iC.E_static_Delta(t.minus(u(0,i,c)),s,a),[m,p]=n.iC.EB_Delta(t.minus(u(0,i,c)),e-0,s,d(0,i,c).scale(.5*-l*h)),[_,E]=n.iC.EB_Delta(t.minus(u(o,i,c)),e-o,s,d(o,i,c).scale(.5*-l*h));let b=f.plus(m).plus(_),w=p.plus(E);for(let a=1;a<30;a++){const r=o-a*l,[f,m]=n.iC.EB_Delta(t.minus(u(r,i,c)),e-o+a*l,s,d(r,i,c).scale(-l*h));b=b.plus(f),w=w.plus(m)}return[b,w]})(i,t,this.deviation,this.Q,1,this.beta);if(a.ay.Set_ArrowPosition(m[s][l],i,h,1),a.ay.Set_ArrowPosition(p[s][l],i,E,n.c),o){const e=((t,e,s,n,i,c)=>0===e?a.V.Zero(3):d(e,i,c).scale(f(t,e,s,n,i,c)))(i,t,this.deviation,this.Q,1,this.beta);a.ay.Set_ArrowPosition(_[s][l],i,e,2)}}))}));const E=1.5e-10;this.slices.forEach((e=>{if(!e.frame.isEnabled())return;const s=e.getPos(71),a=e.getDat(71);s.forEach(((e,s)=>{const i=f(e,t,this.deviation,this.Q,1,this.beta);n.iC.SetRGBA(a,s,(i+E)/3e-10)})),e.updateDat()}))}}}let p;const _=()=>{void 0!==p&&(p.value=l.toString())},E={title:"チェレンコフ放射",comment:"超光速で動く電荷はチェレンコフ放射を起こす<br>1辺の長さ: 1m",cases:[{title:"光速の10倍",setup:_,init:[{deviation:15,Q:15e-14,beta:10}],config:{restart_time:8}},{title:"光速の2倍",setup:_,init:[{deviation:15,Q:15e-14,beta:2}],config:{restart_time:9}},{title:"光速の0.9倍",setup:_,init:[{deviation:15,Q:15e-14,beta:.9}],config:{restart_time:9}}],config:{time_multiplier:5e-10,start_wait:.5},init:()=>{a.jG.set_3D(2,.9,.3,!0),l=0,i=!0,c=!0,r=!0,o=!1,p=void 0},controls:[{type:"label",text:"電磁場"},[{type:"radio",name:"EB",text:"電場",checked:()=>c&&!r,changedToChecked:()=>[c,r]=[!0,!1],color:"#ff0000"},{type:"radio",name:"EB",text:"磁場",checked:()=>!c&&r,changedToChecked:()=>[c,r]=[!1,!0],color:"#00b700"},{type:"radio",name:"EB",text:"両方",checked:()=>c&&r,changedToChecked:()=>[c,r]=[!0,!0]}],{type:"label",text:"スライス"},[{type:"radio",name:"slice",text:"1面",checked:()=>!i,changedToChecked:()=>i=!1},{type:"radio",name:"slice",text:"2面",checked:()=>i,changedToChecked:()=>i=!0}],{type:"slider",text:"位置",value:()=>({value:l,min:-.5,max:h,step:.025}),input:(t,e)=>{l=t,p=e},change:()=>{}}],screenshot:{case:0,first_frame_sec:0,end_sec:2,fps:20},generator:(t,e)=>new m(t,e)}},4088:(t,e,s)=>{s.d(e,{c:()=>i,Zy:()=>c,f7:()=>r,fC:()=>o,iC:()=>l});var a=s(1008),n=s(1550);const i=299792458,c=8854187817e-21,r=2*Math.PI,o=Math.sqrt(2);class l{static EB_Delta(t,e,s,n){const c=t.len3();if(c<1e-5){const t=Math.tanh(s*i*e);return[n.scale(-1/r*-s*s*s*(1+2*(1-3*t*t)*(1-t*t))/3),a.V.Zero(3)]}const o=Math.tanh(s*c),l=Math.tanh(s*(c+i*e)),h=Math.tanh(s*(c-i*e)),u=.5*s*(1-l*l),d=.5*s*(1-h*h),f=-s*s*o*(1-o*o),m=-s*s*l*(1-l*l),p=-s*s*h*(1-h*h),_=f/c,E=-(m-2*f+p)/(2*c),b=(.5*(1+l)-2*(.5*(1+o))+.5*(1+h))/(2*c*c*c)-(u-2*(.5*s*(1-o*o))+d)/(2*c*c);return[n.scale(_-E+b).plus(t.scale((E-3*b)*n.dot36(t)/(c*c))).scale(-1/r),t.cross3(n).scale(-1/i*-1/r*(-(u-d)/c+(m-p))/(2*c*c))]}static E_Delta_init(t,e,s){const a=t.len3(),n=Math.tanh(e*a);if(a<1e-5)return s.scale(e*e*e/r);{const t=-e*e*n*(1-n*n);return s.scale(-1/r/a*t)}}static E_Delta_infty(t,e,s){const a=t.len3();if(a<1e-5)return s.scale(-1/r*-e*e*e/3);const n=Math.tanh(e*a),i=-e*e*n*(1-n*n),c=((.5*(1+n)-.5)/a-.5*e*(1-n*n))/a;return t.scale(s.dot36(t)/(a*a)).scale((3*c+i)/a).minus(s.scale(c/a)).scale(-1/r)}static Delta_Rho(t,e,s){const a=t.len3();if(a<1e-5)return 0;if(a>3/e)return 0;const n=Math.tanh(e*a);return t.dot36(s)/(r*a*a)*(-e*e*n*(1-n*n)/a- -e*e*e*(1-3*n*n)*(1-n*n))}static Delta_Rho_max(t){const e=e=>{const s=1e-5,n=l.Delta_Rho(new a.V([0,0,e]),t,new a.V([0,0,1]));return(l.Delta_Rho(new a.V([0,0,e+s]),t,new a.V([0,0,1]))-n)/s};let s=0,n=3/t;for(let t=0;t<20;t++){const t=(s+n)/2;console.log(t,e(t)),e(t)>0?n=t:s=t}return-e(s)<e(n)?s:n}static Delta(t,e){const s=t.len3();if(s<1e-5)return 2/r*e*e*e;if(s>3/e)return 0;const a=Math.tanh(e*s);return-2*(-e*e*a*(1-a*a))/(r*s)}static E_static_Delta(t,e,s){const n=t.len3();if(n<1e-5)return a.V.Zero(3);{const a=Math.tanh(e*n),i=.5*(1+a),o=.5*e*(1-a*a);return t.scale(s/(r*c)*(i-.5-n*o)/(n*n*n))}}static EB_LienardWiechert(t,e,s,n,o){const l=1/(2*r*c),h=1/i,u=h*h,d=t.minus(e),f=d.len3();if(f<1e-5)return[a.V.Zero(3),a.V.Zero(3)];const m=d.scale(1/f),p=m.minus(s.scale(h)),_=1/(1-u*s.sq3()),E=_*f*f*Math.pow(1-h*s.dot36(m),3),b=p.minus(d.scale(_*u).cross3(n.cross3(p))).scale(o*l/E);return[b,m.cross3(b).scale(h)]}static EB_ByParticle(t,e,s,n,c,r){let o=0,h=0,u=e;for(let s=0;s<10&&(h=e-1e-10*Math.pow(10,s),o=t.minus(n(h)).len3()-i*(e-h),!(o<0));s++){if(9==s)return{E:a.V.Zero(3),B:a.V.Zero(3),G:0};u=h}for(let s=0;s<10;s++){const s=(u+h)/2;o=t.minus(n(s)).len3()-i*(e-s),o<0?h=s:u=s}h=(h+u)/2;for(let s=0;s<5;s++){const s=n(h);o=t.minus(s).len3()-i*(e-h),h+=-o/(-t.minus(s).unit3().dot36(c(h))+i)}const[d,f]=l.EB_LienardWiechert(t,n(h),c(h),r(h),s);return{E:d,B:f,G:Math.abs(o)}}}l.SetRGBA=(t,e,s)=>{const a=s<.5?2*s:1,n=s<.5?2*s:2-2*s,i=s<.5?1:2-2*s,c=t=>Math.max(0,Math.min(1,t)),r=t=>Math.floor(255*c(t));t[4*e+0]=r(a),t[4*e+1]=r(n),t[4*e+2]=r(i),t[4*e+3]=r(.5-.5*c(n))},l.SetBallColor=(t,e)=>{const s=e<.5?2*e:1,a=e<.5?2*e:2-2*e,i=e<.5?1:2-2*e,c=t=>Math.max(0,Math.min(1,t)),r=t.material;r.ambientColor=new n.Wo(c(s),c(a),c(i)),r.alpha=1-r.ambientColor.g}}}]);