"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1550,4969],{5897:(t,e,i)=>{i.d(e,{Z:()=>u});var s=i(8081),a=i.n(s),n=i(3645),o=i.n(n),r=i(1667),l=i.n(r),c=new URL(i(2301),i.b),d=o()(a()),h=l()(c);d.push([t.id,".noscroll{overflow:hidden}#simulation{visibility:hidden;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.6);z-index:100;display:flex;justify-content:center;align-items:center}#simulation_foreground{width:calc(100vmin - 20px);height:calc(100vmin - 20px);position:relative;background:#fff;color:gray;white-space:nowrap;font-family:sans-serif;user-select:none}@media screen and (max-width: 650px){#simulation_foreground{width:100vmin;height:100vmin}}#simulation_loading{position:absolute;top:45vmin;display:block;width:100%;text-align:center;font-size:5vmin}#simulation_canvas{width:100%;height:100%;display:block}#simulation_canvas:focus{outline:none}.simulation_label{cursor:pointer;pointer-events:auto}.simulation_label input{cursor:pointer}.simulation_controls_label{align-self:center;font-weight:bold;text-decoration:underline}#simulation_topleft{position:absolute;top:0;left:0;padding:0 0 0 5px;pointer-events:none}#simulation_title{display:none !important;font-size:100%;display:inline-block}@media screen and (max-width: 650px){#simulation_title{font-size:90%}}#simulation_selector{display:flex;flex-direction:column;align-items:baseline}@media screen and (max-width: 650px){#simulation_selector{line-height:40px}}.simulation_selector_button{margin:5px 5px 0 0;font-size:120%}.simulation_selector_button_current{font-style:italic;font-weight:bold;text-decoration:underline;color:red}.simulation_span,#simulation_title,#simulation_comment{margin:5px 0 0 5px;font-size:90%;background:#ffffffa0}@media screen and (max-width: 650px){.simulation_span,#simulation_title,#simulation_comment{font-size:80%}}#simulation_time{font-size:3vmin;position:absolute;bottom:0;left:0;padding:0 0 0 1.5vmin;background:#ffffffa0}#simulation_controls{display:flex;flex-direction:column;align-items:end;pointer-events:none;position:absolute;top:70px;right:3px;line-height:40px;text-align:right}#simulation_close{cursor:pointer;position:absolute;top:0;right:0;padding:0;border:0;width:50px;height:50px;background:url("+h+") no-repeat center}#simulation_close:hover{opacity:60%}#simulation_message{font-size:90%;position:absolute;bottom:0;right:0;padding:0 5px 5px 0;background:#ffffffa0}",""]);const u=d},2755:(t,e,i)=>{i.d(e,{j:()=>u});i(4012);var s=i(3339),a=i(4391),n=i(4808),o=i(8362),r=i(7659),l=i(3839),c=i(8259),d=(i(1762),i(786)),h=i(8363);const u=new class{constructor(){this.is_3D=!0,this.engine=new s.D(h.D.canvas,!0,{preserveDrawingBuffer:!0,stencil:!0}),this.scene=new a.x(this.engine),this.scene.useRightHandedSystem=!0,this.scene.clearColor=new o.HE(1,1,1,1),this.scene.ambientColor=o.Wo.White(),this.camera=new l.Y("camera",0,0,10,n.P.Zero(),this.scene),this.camera.upVector=new n.P(0,0,1),this.camera.panningInertia=0,this.camera.panningSensibility=0,this.camera.mode=r.V.PERSPECTIVE_CAMERA;const t=new c.O("light",new n.P(0,0,-1),this.scene);t.position=new n.P(0,0,10),t.intensity=0,this.shadow_generator=new d.u(1024,t),this.shadow_generator.useExponentialShadowMap=!0,this.shadow_generator.setDarkness(.9),this.engine.runRenderLoop((()=>{this.scene.render()})),window.addEventListener("resize",(()=>{this.engine.resize()}))}set_2D(t,e){this.camera.target=null!=e?e:n.P.Zero(),this.camera.detachControl(h.D.canvas),this.camera.minZ=.01*t,this.camera.maxZ=100*t,this.camera.radius=t,this.camera.alpha=Math.PI/2,this.camera.beta=Math.PI/2,this.camera.lowerRadiusLimit=this.camera.radius/3,this.camera.upperRadiusLimit=3*this.camera.radius,this.camera.useAutoRotationBehavior=!1,this.is_3D=!1}set_3D(t,e,i,s,a){this.camera.attachControl(h.D.canvas,!0),this.camera.inertia=0,this.camera.angularSensibilityX=300,this.camera.angularSensibilityY=300,this.camera.target=null!=a?a:n.P.Zero(),this.camera.minZ=.01*t,this.camera.maxZ=100*t,this.camera.radius=t,this.camera.alpha=e*Math.PI,this.camera.beta=i*Math.PI,this.camera.lowerRadiusLimit=this.camera.radius/3,this.camera.upperRadiusLimit=3*this.camera.radius,this.autoRotation(null!=s&&s),this.is_3D=!0}autoRotation(t,e){this.camera.useAutoRotationBehavior=!1,t&&(this.camera.useAutoRotationBehavior=!0,this.camera.autoRotationBehavior.idleRotationSpeed=null!=e?e:.2,this.camera.autoRotationBehavior.idleRotationWaitTime=Number.MAX_SAFE_INTEGER)}}},1008:(t,e,i)=>{i.d(e,{V:()=>a,M:()=>n,T:()=>o});var s=i(4808);class a{constructor(t){this.size=()=>this.dat.length,this.sq3=()=>this.dat[0]*this.dat[0]+this.dat[1]*this.dat[1]+this.dat[2]*this.dat[2],this.len3=()=>Math.sqrt(this.dat[0]*this.dat[0]+this.dat[1]*this.dat[1]+this.dat[2]*this.dat[2]),this.unit3=()=>{const t=1/this.len3();return new a([this.dat[0]*t,this.dat[1]*t,this.dat[2]*t])},this.cross3=t=>new a([this.dat[1]*t.dat[2]-this.dat[2]*t.dat[1],this.dat[2]*t.dat[0]-this.dat[0]*t.dat[2],this.dat[0]*t.dat[1]-this.dat[1]*t.dat[0]]),this.cross3x3=()=>new n(3,3,[0,-this.dat[2],this.dat[1],this.dat[2],0,-this.dat[0],-this.dat[1],this.dat[0],0]),this.outer3=()=>{const t=this.dat[0]*this.dat[1],e=this.dat[0]*this.dat[2],i=this.dat[1]*this.dat[2];return new n(3,3,[this.dat[0]*this.dat[0],t,e,t,this.dat[1]*this.dat[1],i,e,i,this.dat[2]*this.dat[2]])},this.slice3=t=>new a([this.dat[t],this.dat[t+1],this.dat[t+2]]),this.to3x3=t=>new n(3,3,[this.dat[t],this.dat[t+1],this.dat[t+2],this.dat[t+3],this.dat[t+4],this.dat[t+5],this.dat[t+6],this.dat[t+7],this.dat[t+8]]),this.to_Vector3=t=>s.P.FromArray(this.dat,null!=t?t:0),this.dat=t}get x(){return this.dat[0]}get y(){return this.dat[1]}get z(){return this.dat[2]}proj3(t){const e=(this.dat[0]*t.dat[0]+this.dat[1]*t.dat[1]+this.dat[2]*t.dat[2])/(t.dat[0]*t.dat[0]+t.dat[1]*t.dat[1]+t.dat[2]*t.dat[2]);return new a([this.dat[0]-t.dat[0]*e,this.dat[1]-t.dat[1]*e,this.dat[2]-t.dat[2]*e])}scale(t){if(3===this.dat.length)return new a([t*this.dat[0],t*this.dat[1],t*this.dat[2]]);const e=Array(this.dat.length);for(let i=0;i<e.length;i++)e[i]=t*this.dat[i];return new a(e)}plus(t){if(3===this.dat.length)return new a([this.dat[0]+t.dat[0],this.dat[1]+t.dat[1],this.dat[2]+t.dat[2]]);const e=Array(this.dat.length);for(let i=0;i<e.length;i++)e[i]=this.dat[i]+t.dat[i];return new a(e)}minus(t){if(3===this.dat.length)return new a([this.dat[0]-t.dat[0],this.dat[1]-t.dat[1],this.dat[2]-t.dat[2]]);const e=Array(this.dat.length);for(let i=0;i<e.length;i++)e[i]=this.dat[i]-t.dat[i];return new a(e)}negate123(){return 3===this.dat.length?new a([-this.dat[0],-this.dat[1],-this.dat[2]]):1===this.dat.length?new a([-this.dat[0]]):2===this.dat.length?new a([-this.dat[0],-this.dat[1]]):(console.assert(!1),new a([]))}inv36(){return 3===this.dat.length?new a([1/this.dat[0],1/this.dat[1],1/this.dat[2]]):6===this.dat.length?new a([1/this.dat[0],1/this.dat[1],1/this.dat[2],1/this.dat[3],1/this.dat[4],1/this.dat[5]]):(console.assert(!1),new a([]))}dot36(t){return 3===this.dat.length?this.dat[0]*t.dat[0]+this.dat[1]*t.dat[1]+this.dat[2]*t.dat[2]:6===this.dat.length?this.dat[0]*t.dat[0]+this.dat[1]*t.dat[1]+this.dat[2]*t.dat[2]+this.dat[3]*t.dat[3]+this.dat[4]*t.dat[4]+this.dat[5]*t.dat[5]:(console.assert(!1),0)}mult36(t){return 3===this.dat.length?new a([this.dat[0]*t.dat[0],this.dat[1]*t.dat[1],this.dat[2]*t.dat[2]]):6===this.dat.length?new a([this.dat[0]*t.dat[0],this.dat[1]*t.dat[1],this.dat[2]*t.dat[2],this.dat[3]*t.dat[3],this.dat[4]*t.dat[4],this.dat[5]*t.dat[5]]):(console.assert(!1),new a([]))}clone(){const t=Array(this.dat.length);for(let e=0;e<t.length;e++)t[e]=this.dat[e];return new a(t)}first_half(){return 6===this.dat.length?new a([this.dat[0],this.dat[1],this.dat[2]]):12===this.dat.length?new a([this.dat[0],this.dat[1],this.dat[2],this.dat[3],this.dat[4],this.dat[5]]):18===this.dat.length?new a([this.dat[0],this.dat[1],this.dat[2],this.dat[3],this.dat[4],this.dat[5],this.dat[6],this.dat[7],this.dat[8]]):(console.assert(!1),new a([]))}second_half(){return 6===this.dat.length?new a([this.dat[3],this.dat[4],this.dat[5]]):12===this.dat.length?new a([this.dat[6],this.dat[7],this.dat[8],this.dat[9],this.dat[10],this.dat[11]]):18===this.dat.length?new a([this.dat[9],this.dat[10],this.dat[11],this.dat[12],this.dat[13],this.dat[14],this.dat[15],this.dat[16],this.dat[17]]):(console.assert(!1),new a([]))}split3(){const t=Array(this.dat.length/3);for(let e=0;e<t.length;e++)t[e]=new a([this.dat[3*e],this.dat[3*e+1],this.dat[3*e+2]]);return t}static concat(...t){let e=0;for(let i=0;i<t.length;i++)e+=t[i].dat.length;const i=Array(e);let s=0;for(let e=0;e<t.length;e++)for(let a=0;a<t[e].dat.length;a++)i[s]=t[e].dat[a],++s;return new a(i)}static Zero(t){return 3===t?new a([0,0,0]):6===t?new a([0,0,0,0,0,0]):(console.assert(!1),new a([]))}}class n{constructor(t,e,i){this.toV9=()=>new a(this.dat),this.to_Matrix=()=>{const t=this.dat;return s.y3.FromArray([t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1])},this.inverse123=()=>{const t=this.dat;if(9===this.size){const e=1/(t[0]*t[4]*t[8]+t[3]*t[2]*t[7]+t[1]*t[5]*t[6]-t[0]*t[5]*t[7]-t[6]*t[4]*t[2]-t[3]*t[1]*t[8]);return new n(3,3,[(t[4]*t[8]-t[5]*t[7])*e,(t[2]*t[7]-t[1]*t[8])*e,(t[1]*t[5]-t[2]*t[4])*e,(t[5]*t[6]-t[3]*t[8])*e,(t[0]*t[8]-t[2]*t[6])*e,(t[2]*t[3]-t[0]*t[5])*e,(t[3]*t[7]-t[4]*t[6])*e,(t[1]*t[6]-t[0]*t[7])*e,(t[0]*t[4]-t[1]*t[3])*e])}if(4===this.size){const e=1/(t[0]*t[3]-t[1]*t[2]);return new n(2,2,[t[3]*e,-t[1]*e,-t[2]*e,t[0]*e])}return 1===this.size?new n(1,1,[1/t[0]]):(console.assert(!1),new n(0,0,[]))},this.row=t,this.col=e,this.dat=i,this.size=t*e}plus(t){const e=this.dat,i=t.dat;if(9===this.size)return new n(this.row,this.col,[e[0]+i[0],e[1]+i[1],e[2]+i[2],e[3]+i[3],e[4]+i[4],e[5]+i[5],e[6]+i[6],e[7]+i[7],e[8]+i[8]]);const s=Array(this.size);for(let t=0;t<s.length;t++)s[t]=e[t]+i[t];return new n(this.row,this.col,s)}minus3x3(t){const e=this.dat,i=t.dat;return new n(this.row,this.col,[e[0]-i[0],e[1]-i[1],e[2]-i[2],e[3]-i[3],e[4]-i[4],e[5]-i[5],e[6]-i[6],e[7]-i[7],e[8]-i[8]])}scale3x3(t){const e=this.dat;return new n(this.row,this.col,[t*e[0],t*e[1],t*e[2],t*e[3],t*e[4],t*e[5],t*e[6],t*e[7],t*e[8]])}vec(t){const e=this.dat;if(3===this.row&&3===this.col)return new a([e[0]*t.dat[0]+e[1]*t.dat[1]+e[2]*t.dat[2],e[3]*t.dat[0]+e[4]*t.dat[1]+e[5]*t.dat[2],e[6]*t.dat[0]+e[7]*t.dat[1]+e[8]*t.dat[2]]);const i=Array(this.row);for(let s=0;s<i.length;s++){i[s]=0;for(let a=0;a<this.col;a++)i[s]+=e[this.col*s+a]*t.dat[a]}return new a(i)}Tvec(t){const e=this.dat;if(3===this.row&&3===this.col)return new a([e[0]*t.dat[0]+e[3]*t.dat[1]+e[6]*t.dat[2],e[1]*t.dat[0]+e[4]*t.dat[1]+e[7]*t.dat[2],e[2]*t.dat[0]+e[5]*t.dat[1]+e[8]*t.dat[2]]);const i=Array(this.col);for(let s=0;s<i.length;s++){i[s]=0;for(let a=0;a<this.row;a++)i[s]+=e[this.col*a+s]*t.dat[a]}return new a(i)}mat(t){const e=this.dat,i=t.dat;if(3===this.row&&3===this.col)return new n(3,3,[e[0]*i[0]+e[1]*i[3]+e[2]*i[6],e[0]*i[1]+e[1]*i[4]+e[2]*i[7],e[0]*i[2]+e[1]*i[5]+e[2]*i[8],e[3]*i[0]+e[4]*i[3]+e[5]*i[6],e[3]*i[1]+e[4]*i[4]+e[5]*i[7],e[3]*i[2]+e[4]*i[5]+e[5]*i[8],e[6]*i[0]+e[7]*i[3]+e[8]*i[6],e[6]*i[1]+e[7]*i[4]+e[8]*i[7],e[6]*i[2]+e[7]*i[5]+e[8]*i[8]]);const s=this.row,a=this.col,o=t.col,r=Array(s*o);for(let t=0;t<s;t++)for(let s=0;s<o;s++){let n=0;for(let r=0;r<a;r++)n+=e[t*a+r]*i[r*o+s];r[t*o+s]=n}return new n(s,o,r)}matT(t){const e=this.dat,i=t.dat;if(3===this.row&&3===this.col)return new n(3,3,[e[0]*i[0]+e[1]*i[1]+e[2]*i[2],e[0]*i[3]+e[1]*i[4]+e[2]*i[5],e[0]*i[6]+e[1]*i[7]+e[2]*i[8],e[3]*i[0]+e[4]*i[1]+e[5]*i[2],e[3]*i[3]+e[4]*i[4]+e[5]*i[5],e[3]*i[6]+e[4]*i[7]+e[5]*i[8],e[6]*i[0]+e[7]*i[1]+e[8]*i[2],e[6]*i[3]+e[7]*i[4]+e[8]*i[5],e[6]*i[6]+e[7]*i[7]+e[8]*i[8]]);const s=this.row,a=this.col,o=t.row,r=Array(s*o);for(let t=0;t<s;t++)for(let s=0;s<o;s++){let n=0;for(let o=0;o<a;o++)n+=e[t*a+o]*i[s*a+o];r[t*o+s]=n}return new n(s,o,r)}Tmat(t){const e=this.dat,i=t.dat;if(3===this.row&&3===this.col)return new n(3,3,[e[0]*i[0]+e[3]*i[3]+e[6]*i[6],e[0]*i[1]+e[3]*i[4]+e[6]*i[7],e[0]*i[2]+e[3]*i[5]+e[6]*i[8],e[1]*i[0]+e[4]*i[3]+e[7]*i[6],e[1]*i[1]+e[4]*i[4]+e[7]*i[7],e[1]*i[2]+e[4]*i[5]+e[7]*i[8],e[2]*i[0]+e[5]*i[3]+e[8]*i[6],e[2]*i[1]+e[5]*i[4]+e[8]*i[7],e[2]*i[2]+e[5]*i[5]+e[8]*i[8]]);const s=this.col,a=this.row,o=t.col,r=Array(s*o);for(let t=0;t<s;t++)for(let n=0;n<o;n++){let l=0;for(let r=0;r<a;r++)l+=e[r*s+t]*i[r*o+n];r[t*o+n]=l}return new n(s,o,r)}diag(t){const e=this.dat;if(3===this.row&&3===this.col)return new n(3,3,[e[0]*t.dat[0],e[1]*t.dat[1],e[2]*t.dat[2],e[3]*t.dat[0],e[4]*t.dat[1],e[5]*t.dat[2],e[6]*t.dat[0],e[7]*t.dat[1],e[8]*t.dat[2]]);const i=this.row,s=this.col;console.assert(3===s||6===s);const a=Array(this.size);let o=0;for(let n=0;n<i;n++)for(let i=0;i<s;i++)a[o]=e[o]*t.dat[i],++o;return new n(i,s,a)}}n.Id3=()=>new n(3,3,[1,0,0,0,1,0,0,0,1]);class o{constructor(t,e,i,s){this.row=t,this.col=e,this.col2=i,this.dat=s}vec(t){const e=this.dat,i=this.row,s=this.col,a=this.col2,o=Array(i*s);let r=0;for(let n=0;n<i;n++)for(let i=0;i<s;i++){let l=0;for(let i=0;i<a;i++)l+=e[r]*t.dat[i],++r;o[n*s+i]=l}return new n(i,s,o)}}},1550:(t,e,i)=>{i.d(e,{Wo:()=>w.Wo,iO:()=>I,Q8:()=>j,M:()=>s.M,ay:()=>M,p2:()=>G,ME:()=>n,T:()=>s.T,V:()=>s.V,uZ:()=>R,xV:()=>W,NC:()=>D,g:()=>a,Rm:()=>F,hl:()=>B,fN:()=>z,CD:()=>O,L1:()=>L,jG:()=>g.j});var s=i(1008);const a=new s.V([0,0,-9.8]);class n{static RK4_free(t,e,i,s){const a=i(t,e),n=i(t+s/2,e.plus(a.scale(s/2))),o=i(t+s/2,e.plus(n.scale(s/2))),r=i(t+s,e.plus(o.scale(s)));return e.plus(a.plus(n.plus(o).scale(2)).plus(r).scale(s/6))}static RK4_collision(t,e,i,a,o){let r=t,l=e.clone();const c=r+a,d=n.RK4_free(r,l,i,a);for(let t=0;t<o.num_constraints;t++)if(o.G(t,c,d).G<0){if(0<o.G(t,r,l).G)for(let s=0;s<3;s++){const{G:s,G_t:a,G_x:c}=o.G(t,r,l),d=e.second_half(),h=-s/(a+c.dot36(d));l=n.RK4_free(r,l,i,h),r+=h}const{G_t:a,G_x:d}=o.G(t,r,l),h=o.M.inv36(),u=d.dot36(h.mult36(d)),m=l.second_half(),p=m.plus(h.mult36(d).scale(-2/u*(m.dot36(d)+a)));return 0<d.dot36(p)&&(l=s.V.concat(l.first_half(),p)),n.RK4_free(r,l,i,c-r)}return d}static RK4_constrained(t,e,i,a){const o=a.M.inv36();return n.RK4_free(t,e,((t,e)=>{const i=a.F_ext(t,e);let{G_x:n,ddt_G_t:r,ddt_G_x:l,G_tt:c,G_tx:d,G_xx:h}=a.diff_G(t,e);const u=e.second_half();void 0!==r&&void 0!==l||(r=c.plus(d.vec(u)),l=d.plus(h.vec(u)));const m=n.diag(o).matT(n).inverse123(),p=l.vec(u).plus(n.diag(o).vec(i)).plus(r),f=m.vec(p).negate123(),w=o.mult36(i.plus(n.Tvec(f)));return s.V.concat(u,w)}),i)}static F_constrained(t){const e=t.M.inv36();return(i,s)=>{const a=t.F_ext(i,s);let{G_x:n,ddt_G_t:o,ddt_G_x:r,G_tt:l,G_tx:c,G_xx:d}=t.diff_G(i,s);const h=s.second_half();void 0!==o&&void 0!==r||(o=l.plus(c.vec(h)),r=c.plus(d.vec(h)));const u=n.diag(e).matT(n).inverse123(),m=r.vec(h).plus(n.diag(e).vec(a)).plus(o),p=u.vec(m).negate123();return a.plus(n.Tvec(p))}}static dXdt_g(t,e){const i=Array(e.size());for(let t=0;t<i.length;t++)t<i.length/2?i[t]=e.dat[i.length/2+t]:i[t]=a.dat[t%3];return new s.V(i)}static dXdt_roll(t,e,i,n,o,r,l,c){return(d,h)=>{const u=h.slice3(0),m=h.to3x3(3),p=h.slice3(12),f=h.slice3(15),w=h.slice3(18),g=m.mat(e).matT(m),[_,v,x]=i,y=f.cross3x3(),b=y.mat(m),S=u.minus(w),M=S.negate123(),C=m.Tvec(M),P=n(w.x,w.y),V=o(w.x,w.y),E=new s.V([-P[0],-P[1],c?0:1]),T=new s.M(3,3,[-V[0],-V[1],0,-V[2],-V[3],0,0,0,0]),A=C.mult36(new s.V([2/(_*_),2/(v*v),2/(x*x)])),j=new s.M(3,3,[2/(_*_),0,0,0,2/(v*v),0,0,0,2/(x*x)]),k=m.vec(A),I=m.mat(j).matT(m),O=y.vec(m.vec(A)).minus(m.vec(j.vec(m.Tvec(y.vec(M).plus(p)))));let R;{const t=1/E.len3(),e=1/k.len3(),i=s.M.Id3().minus3x3(E.unit3().outer3()),a=i.mat(T.scale3x3(t).plus(I.scale3x3(e))).plus(E.outer3()).inverse123(),n=i.vec(O.scale(e));R=a.vec(n).negate123()}const L=T.vec(R),D=p.minus(R),F=l(E,S),W=s.V.concat(a.scale(t),s.V.Zero(3)),z=g.inverse123().dat,B=new s.M(6,6,[1/t,0,0,0,0,0,0,1/t,0,0,0,0,0,0,1/t,0,0,0,0,0,0,z[0],z[1],z[2],0,0,0,z[3],z[4],z[5],0,0,0,z[6],z[7],z[8]]),G=s.V.concat(s.V.Zero(3),y.vec(g.vec(f))),K=W.minus(G),H=s.V.concat(p,f),Z=F.Tmat(F.mat(B).matT(F).inverse123()),q=r(E,L,S,D).vec(H).plus(F.vec(B.vec(K))),$=B.vec(K.minus(Z.vec(q)));return s.V.concat(p,b.toV9(),$,R)}}}var o=i(4808),r=i(8823),l=i(128),c=i(6738),d=i(9140),h=i(5511),u=i(4542),m=i(6172),p=i(6344),f=i(7659),w=i(8362),g=i(2755);const _={0:w.Wo.FromHexString("#ff0000"),1:w.Wo.FromHexString("#00b700"),2:w.Wo.FromHexString("#3c3cff"),3:w.Wo.FromHexString("#ff9b38"),4:w.Wo.FromHexString("#0fec7e"),5:w.Wo.FromHexString("#b76eff"),6:w.Wo.FromHexString("#f1f100"),7:w.Wo.FromHexString("#00e8e8"),8:w.Wo.FromHexString("#ff63ff"),9:w.Wo.FromHexString("#99d858"),10:w.Wo.FromHexString("#69ace6"),11:w.Wo.FromHexString("#d75297"),12:w.Wo.FromHexString("#eeeeee")};var v=i(5016),x=i(6178),y=i(2906);const b=(t,e,i)=>{const s=t.clone().scale(e);return s.r+=i,s.g+=i,s.b+=i,s},S=(t,e,i,s,a,n)=>{const o=new m.D(t,g.j.scene);return o.gridRatio=e,o.majorUnitFrequency=i,o.mainColor=s,o.lineColor=a,o.opacity=null!=n?n:1,o.backFaceCulling=!1,o};class M{static Material(t,e){const i=new u.K(t,g.j.scene);return i.ambientColor="number"==typeof e?_[e]:"string"==typeof e?w.Wo.FromHexString(e):e,i}static Ball(t,e,i){const s=d.V.CreateSphere("ball",{diameter:t,segments:8});return void 0!==e&&(s.material=M.Material("mat_ball","number"==typeof e?_[e]:e)),0!=i&&M.ShadowOnOff(s,!0),s}static SetColor(t,e){t.material.ambientColor="number"==typeof e?_[e]:e}static SolidBall(t,e){const i=M.Material("mat_solid_ball_dark",_[t]),s=M.Material("mat_solid_ball_light",b(_[t],.05,.9)),a=[];for(let t=0;t<12;t++){const n=d.V.CreateSphere(`solid_ball_${t}`,{diameter:2*e,arc:1/12});n.rotation.y=2*Math.PI*t/12,n.material=t%2==0?i:s,a.push(n)}const n=r.Kj.MergeMeshes(a,!0,!0,void 0,!1,!0);return M.ShadowOnOff(n,!0),n}static SolidCuboid(t,e,i,s){const a=d.V.CreateBox("solid_cuboid",{width:t,height:e,depth:i});return a.material=S("mat_collision_ball_3d",.1,5,b(_[s],.05,.98),b(_[s],.8,0)),M.ShadowOnOff(a,!0),a}static SolidCross(t,e,i){const a=[0,1,2,3].map((t=>M.CollisionBall3D(.08,i,t%2==0)));a[0].position.x=-t/2,a[1].position.x=t/2,a[2].position.y=-e/2,a[3].position.y=e/2;const n=M.Tube(.008,[new s.V([-t/2,0,0]),new s.V([t/2,0,0])],i),o=M.Tube(.008,[new s.V([0,-e/2,0]),new s.V([0,e/2,0])],i),l=r.Kj.MergeMeshes([...a,n,o],!0,!0,void 0,!1,!0);return M.ShadowOnOff(l,!0),l}static SolidPendulum(t,e,i){const a=[0,1,2].map((s=>{const a=M.Ball(.07*Math.pow(e[s],1/3),i);return a.position=t[s].to_Vector3(),a})),n=M.Ball(.02,2);n.position.z=t[0].z;const o=M.FixedPoint(.05,!0),c=[s.V.Zero(3),...t],d=[];for(let t=0;t<c.length;t++)for(let e=t+1;e<c.length;e++)d.push(M.Tube(.005,[c[t],c[e]]));const u=new r.Kj("tetrahedron",g.j.scene);var m=new l.x;m.positions=c.map((t=>t.dat)).flat(),m.indices=[0,1,2,0,2,3,0,3,1,1,2,3],m.applyToMesh(u,!0),u.material=M.Material("mat_tetrahedron",new w.Wo(.9,.9,.9)),u.material.backFaceCulling=!1,M.ShadowOnOff(u,!0);const p=new h.Y("tetrahedron",g.j.scene);return[...a,n,o,...d,u].forEach((t=>t.parent=p)),p}static CollisionBall3D(t,e,i){const s=d.V.CreateSphere("collision_ball_3d",{diameter:2*t});return s.material=S("mat_collision_ball_3d",.05,5,i?_[e]:b(_[e],.05,.98),i?b(_[e],.05,.98):_[e]),M.ShadowOnOff(s,!0),s}static CollisionBall2D(t,e,i){const s=d.V.CreateSphere("ball_inner",{diameter:2*e});s.material=M.Material("mat_ball",_[i]);const a=M.Circle(t);a.color=_[i];const n=new h.Y("ball",g.j.scene);return s.parent=n,a.parent=n,n}static Ground(t){const e=new h.Y("ground",g.j.scene),i=d.V.CreatePlane("grid",{size:10,sideOrientation:r.Kj.DOUBLESIDE});if(i.parent=e,i.material=S("mat_grid",.25,4,w.Wo.Black(),w.Wo.Black(),2==t?.05:.1),3==t){const t=d.V.CreatePlane("shadow",{size:10,sideOrientation:r.Kj.DOUBLESIDE});t.parent=e,t.material=new p.O("mat_shadow",g.j.scene),t.receiveShadows=!0}else e.rotation.x=Math.PI/2;return e}static Surface(t,e,i,s){const a=[],n=[];for(let s=0;s<i[0];s++){const o=t[0]+(e[0]-t[0])*s/(i[0]-1);for(let r=0;r<i[1];r++){const l=t[1]+(e[1]-t[1])*r/(i[1]-1);if(a.push(o,l,0),0!=s&&0!=r){const t=(s-1)*i[1]+r-1;n.push(t,t+1,t+i[1]),n.push(t+1,t+i[1]+1,t+i[1])}}}var o=new l.x;o.positions=a,o.indices=n;const c=new r.Kj("shadow",g.j.scene);o.applyToMesh(c,!0);const d=null!=s?s:5;c.material=S("mat_grid",1/d,d,w.Wo.Black(),w.Wo.Black(),.2),c.convertToFlatShadedMesh();const u=c.clone("shadow");u.material=new p.O("mat_shadow",g.j.scene),u.receiveShadows=!0,u.material.backFaceCulling=!1;const m=new h.Y("surface",g.j.scene);return c.parent=m,u.parent=m,m}static SphereGround(t,e,i,s){const a=[],n=Math.PI*(e-.5);for(let e=0;e<i;e++){const s=-n+.5*(Math.PI+2*n)*e/i,r=new Array(100);for(let e=0;e<r.length;e++){const i=2*Math.PI*e/(r.length-1);r[e]=new o.P(t*Math.cos(s)*Math.cos(i),t*Math.cos(s)*Math.sin(i),-t*Math.sin(s))}a.push(r)}for(let e=0;e<s;e++){const i=Math.PI*e/s,r=new Array(50);for(let e=0;e<r.length;e++){const s=-n+(Math.PI+2*n)*e/(r.length-1);r[e]=new o.P(t*Math.cos(i)*Math.cos(s),t*Math.sin(i)*Math.cos(s),-t*Math.sin(s))}a.push(r)}const r=d.V.CreateLineSystem("wire",{lines:a},g.j.scene);r.color=new w.Wo(.9,.9,.9);const l=d.V.CreateSphere("shadow",{diameter:2*t,slice:e});l.rotation.x=-.501*Math.PI,l.material=new p.O("mat_shadow",g.j.scene),l.receiveShadows=!0,l.bakeCurrentTransformIntoVertices(),l.material.backFaceCulling=!1;const c=new h.Y("sphere",g.j.scene);return r.parent=c,l.parent=c,c}static CylinderGrid(t,e){const i=[],[s,a]=[100,Math.round(16*e/(2*Math.PI*t))],n=d.V.CreateCylinder("cylinder_back",{height:e,diameter:2.005*t,tessellation:32,cap:r.Kj.NO_CAP,sideOrientation:r.Kj.BACKSIDE});n.rotation.x=Math.PI/2,n.material=M.Material("","#FFFFFF");for(let n=0;n<a;n++){const r=-e/2+e*n/(a-1),l=new Array(s);for(let e=0;e<s;e++){const i=2*Math.PI*e/(s-1),a=t*Math.cos(i),n=t*Math.sin(i);l[e]=new o.P(a,n,r)}i.push(l)}for(let s=0;s<16;s++){const a=2*Math.PI*s/16,n=t*Math.cos(a),r=t*Math.sin(a);i.push([new o.P(n,r,-e/2),new o.P(n,r,e/2)])}const l=d.V.CreateLineSystem("cylinder_wire",{lines:i},g.j.scene);l.color=new w.Wo(.8,.8,.8);const c=new h.Y("cylinder");return n.setParent(c),l.setParent(c),c}static Circle(t){const e=new Array(100);for(let i=0;i<e.length;i++){const s=2*Math.PI*i/(e.length-1);e[i]=new o.P(t*Math.cos(s),0,t*Math.sin(s))}const i=d.V.CreateLines("circle",{points:e});return i.color=new w.Wo(.7,.7,.7),i}static Curve(t,e,i,s){const a=new Array(i);for(let i=0;i<a.length;i++)a[i]=new o.P(t+(e-t)*i/(a.length-1),0,0);const n=d.V.CreateLines("curve",{points:a,updatable:!0});return n.color=void 0===s?new w.Wo(.7,.7,.7):_[s],n}static UpdateCurve(t,e){t.updateVerticesData(c.o.PositionKind,Float32Array.from(e))}static Curves(t,e,i){const s=new Array(t);for(let i=0;i<t;i++){s[i]=new Array(e);for(let t=0;t<e;t++)s[i][t]=o.P.Zero()}const a=d.V.CreateLineSystem("curves",{lines:s,updatable:!0},g.j.scene);return a.color=_[i],a}static UpdateZ(t,e){for(var i=t.getVerticesData(c.o.PositionKind),s=i.length/3,a=0;a<s;a++)i[3*a+2]=e(i[3*a],i[3*a+1]);t.updateVerticesData(c.o.PositionKind,i)}static Tube(t,e,i){const s=d.V.CreateTube("tube",{path:"number"==typeof e?new Array(e).fill(o.P.Zero()):e.map((t=>t.to_Vector3())),radius:t,updatable:!0,tessellation:10,cap:r.Kj.CAP_ALL});return s.material=M.Material("mat_tube",void 0===i?new w.Wo(.7,.7,.7):_[i]),M.ShadowOnOff(s,!0),s}static UpdateTube(t,e,i){return d.V.CreateTube("tube",{path:e.map((t=>t.to_Vector3())),radius:i,instance:t})}static Arrow(t,e,i,s){const a=.15,n=d.V.CreateCylinder("head",{height:a,diameterTop:0,diameterBottom:i?8*i:.1,tessellation:null!=s?s:10});n.position.x+=.925,n.rotation.z=-Math.PI/2,n.bakeCurrentTransformIntoVertices();const o=d.V.CreateCylinder("line",{height:.925,diameter:null!=i?i:.02,tessellation:null!=s?s:10});o.position.x+=.4625,o.rotation.z=-Math.PI/2,o.bakeCurrentTransformIntoVertices();const l=r.Kj.MergeMeshes([n,o],!0,!0,void 0,!1,!0);return l.material=M.Material("mat_arrow",_[t]),null!=e&&e&&M.ShadowOnOff(l,!0),l}static Set_ArrowPosition(t,e,i,s,a){let n=s*i.len3();void 0!==a&&(n=Math.min(n,a));const r=i.unit3();t.scaling=new o.P(n,n,n),t.rotation=new o.P(0,-Math.atan2(r.z,r.x),Math.asin(r.y)),t.position=e.to_Vector3()}static Planes(t,e,i){const s=d.V.CreatePlane("plane",{size:t,sideOrientation:r.Kj.DOUBLESIDE});s.material=S("mat_plane",t/6,3,b(_[e],.05,.98),b(_[e],.8,0));const a=[s];for(let t=1;t<i;t++)a.push(s.createInstance("plane"+t));return a.forEach((t=>M.ShadowOnOff(t,!0))),a}static Plane(t,e,i,s,a){const n=d.V.CreatePlane("plane",{size:1,sideOrientation:r.Kj.DOUBLESIDE});n.scaling.x=t,n.scaling.y=e,n.position=a.to_Vector3(),n.bakeCurrentTransformIntoVertices();const o=new u.K("mat_plane",g.j.scene),l=new v.c("tex_plane",{width:i,height:s},g.j.scene,!1);return o.ambientColor=new w.Wo(1,1,1),o.diffuseTexture=l,n.material=o,{plane:n,texture:l,context:l.getContext()}}static SetColorByColorMap(t,e,i,s){const a=Math.max(0,Math.min(255,Math.floor(256*(e-i)/(s-i))));t.material.ambientColor=w.Wo.FromInts(a,a,a)}static RawTexturePlane(t,e,i,s,a,n,o){const l=d.V.CreatePlane("plane",{size:1,sideOrientation:r.Kj.DOUBLESIDE});l.scaling.x=e,l.scaling.y=i,l.position=n.to_Vector3(),l.bakeCurrentTransformIntoVertices();const c=new u.K("mat_plane",g.j.scene),h=o?x.l.CreateRGBATexture(t,s,a,g.j.scene,!1,!1,y.x.NEAREST_NEAREST):x.l.CreateRGBTexture(t,s,a,g.j.scene,!1,!1,y.x.NEAREST_NEAREST);return c.ambientColor=new w.Wo(1,1,1),c.diffuseTexture=h,l.material=c,o&&(h.hasAlpha=!0,c.useAlphaFromDiffuseTexture=!0),{plane:l,texture:h}}static UpdateTexture(t,e){t.update(e)}static FixedPoint(t,e){if(e)return M.Ball(t,w.Wo.Gray(),!0);{const e=d.V.CreateBox("cross_x",{size:2*t}),i=d.V.CreateBox("cross_z",{size:2*t});e.scaling=new o.P(1,.2,.2),i.scaling=new o.P(.2,.2,1);const s=r.Kj.MergeMeshes([e,i],!0,!0,void 0,!1,!0);return s.material=M.Material("mat_cross",w.Wo.Gray()),M.ShadowOnOff(s,!0),s}}static ShadowOnOff(t,e){var i,s;if(g.j.camera.mode==f.V.PERSPECTIVE_CAMERA)if(e){if(null===(s=null===(i=g.j.shadow_generator.getShadowMap())||void 0===i?void 0:i.renderList)||void 0===s?void 0:s.some((e=>e===t)))return;g.j.shadow_generator.addShadowCaster(t)}else g.j.shadow_generator.removeShadowCaster(t)}}i(5385);var C=i(8004),P=i(7243),V=i(7341),E=i(6411);const T=C.i.CreateFullscreenUI("UI"),A=[];V.c.push((()=>A.forEach((t=>T.removeControl(t)))));class j{static Label(t,e,i,s){var a=new P.a;a.text=t,a.fontSize=(null!=s?s:20)*E.SimulationWindow.canvas.width/700,T.addControl(a),A.push(a);const n=new h.Y(`node_${t}`);return n.position.x=e.x,n.position.y=e.y,n.position.z=e.z,a.linkWithMesh(n),a.color=i,a}}i(4969);const k=t=>"number"==typeof t?[t]:t,I=(t,e,i)=>{const a=k(i),n=Array(t.size());for(let i=0;i<n.length;i++)i<e.dat.length?n[i]=t.dat[i+e.dat.length]:n[i]=e.dat[i-e.dat.length]/a[Math.trunc((i-e.dat.length)/3)];return new s.V(n)},O=(t,e)=>t.second_half().split3().reduce(((t,i,s)=>t+.5*k(e)[s]*i.sq3()),0),R=(t,e)=>O(t,e)+t.first_half().split3().reduce(((t,i,s)=>t-k(e)[s]*i.dot36(a)),0),L=(t,e)=>-e/t.len3(),D=(t,e)=>t.scale(-e*Math.pow(t.len3(),-3)),F=(t,e,i,a)=>s.V.concat(t,e.toV9(),i,a),W=(t,e,i,s)=>{const{x:n,R:o,v:r,w:l,I:c}=z(t,e);return.5*l.dot36(c.vec(l))+.5*i*r.sq3()-i*(void 0===s?n:o.vec(s)).dot36(a)},z=(t,e)=>{const i=t.slice3(0),s=t.to3x3(3),a=t.slice3(12),n=t.slice3(15),o=s.mat(e).matT(s);return{x:i,R:s,v:a,w:n,I:o}},B=t=>({x:t.slice3(0),R:t.to3x3(3)});class G{constructor(t){this.dir=0,this.offset=s.V.Zero(3),this.frame=M.Curve(0,0,5),this.len=t,M.UpdateCurve(this.frame,[-t/2,-t/2,0,t/2,-t/2,0,t/2,t/2,0,-t/2,t/2,0,-t/2,-t/2,0])}setDirection(t){this.dir=t;const e=0===t?[0,Math.PI/2,Math.PI/2]:1===t?[Math.PI/2,0,0]:[0,0,0];this.frame.rotation=new s.V(e).to_Vector3(),this.mesh&&(this.mesh.rotation=this.frame.rotation)}setOffset(t){this.offset=new s.V(t),this.frame.position=this.offset.to_Vector3(),this.mesh&&(this.mesh.position=this.frame.position)}setEnabled(t){this.frame.setEnabled(t),this.mesh&&this.mesh.setEnabled(t)}getPos(t){const e=new Array(t*t);for(let i=0;i<t*t;i++){const a=0,n=-.5*this.len+this.len*(i%t)/(t-1),o=-.5*this.len+this.len*Math.floor(i/t)/(t-1),r=0===this.dir?[a,n,o]:1===this.dir?[n,a,o]:[n,o,a];e[i]=new s.V(r).plus(this.offset)}return e}getDat(t){if(!this.dat){this.dat=new Uint8Array(4*t*t);const{plane:e,texture:i}=M.RawTexturePlane(this.dat,this.len,this.len,t,t,s.V.Zero(3),!0);i.uScale=t/(t+1),i.vScale=t/(t+1),i.uOffset=.5/(t+1),i.vOffset=.5/(t+1),[this.mesh,this.texture]=[e,i],this.setDirection(this.dir),this.setOffset(this.offset.dat),this.setEnabled(this.frame.isEnabled())}return this.dat}updateDat(){this.texture&&this.dat&&this.texture.update(this.dat)}}},4969:(t,e,i)=>{i.r(e),i.d(e,{Scheduler:()=>s.b});var s=i(7341)},7341:(t,e,i)=>{i.d(e,{b:()=>d,c:()=>c});var s=i(2755);const a=()=>Date.now()/1e3;class n{constructor(t,e){this.t=0,this.then=a(),this.is_incremental=t,this.start_wait=e}update(){const t=this.then;this.then=a();const e=this.then-t;if(0<this.start_wait)return this.start_wait-=e,0;const i=this.is_incremental?Math.min(e,1/30):e;return this.t+=i,i}}var o=i(6411);const r={dt:.001,start_wait:0,time_multiplier:1,restart_time:void 0,shows_time:!0};function l(){for(;0!=s.j.scene.meshes.length;)s.j.scene.meshes[0].dispose();for(;0!=s.j.scene.materials.length;)s.j.scene.materials[0].dispose();c.map((t=>t()))}let c=[];class d{static Start(t,e){e&&s.j.scene.registerBeforeRender(this.Proceed),this.spec=t,void 0!==this.spec.init&&this.spec.init(),this.current=-1,this.Switch(0),this.stop=!1}static Switch(t){if(this.current!=t){this.current=t,l();const e=this.spec.cases[this.current];e.setup(),this.models=e.init.map(((t,e)=>this.spec.generator(t,e))),o.SimulationWindow.SetControls(this.spec,this.current,(t=>this.Switch(t)))}else this.models.map((t=>{t.reset&&t.reset()}));this.config=Object.assign(Object.assign(Object.assign({},r),this.spec.config),this.spec.cases[this.current].config),this.dt=void 0===this.models[0].proceed?void 0:this.config.dt*this.config.time_multiplier,this.timer=new n(void 0!==this.dt,this.config.start_wait),this.Draw(0)}static Stop(){s.j.scene.unregisterBeforeRender(this.Proceed),l(),this.stop=!0}static Restart(){this.Switch(this.current)}static Proceed(){if(d.stop)return;if(d.config.restart_time&&d.config.restart_time<d.timer.t)return void d.Restart();const t=d.timer.t*d.config.time_multiplier,e=d.timer.update()*d.config.time_multiplier;d.Proceed_by(t,e)}static Draw(t){this.models.forEach((e=>e.draw(t)))}static Proceed_by(t,e){if(void 0!==this.dt){const i=Math.ceil(e/this.dt),s=e/i;for(let e=0;e<i;e++)this.models.forEach((e=>e.proceed(t,s))),t+=s}if(this.Draw(t),this.config.shows_time){let e;if(this.config.time_multiplier&&this.config.time_multiplier<1e-8){const i=t.toFixed(12),s=i.length;e=`t = ${i.substring(0,s-9)} ${i.substring(s-9,s-6)} ${i.substring(s-6,s-3)} ${i.substring(s-3,s)} sec`}else e=`t = ${t.toFixed(2)} sec`;o.SimulationWindow.SetTime(e)}}}d.stop=!0},6411:(t,e,i)=>{i.r(e),i.d(e,{SimulationWindow:()=>s.D});var s=i(8363)},8363:(t,e,i)=>{i.d(e,{D:()=>b});var s=i(3379),a=i.n(s),n=i(7795),o=i.n(n),r=i(569),l=i.n(r),c=i(3565),d=i.n(c),h=i(9216),u=i.n(h),m=i(4589),p=i.n(m),f=i(5897),w={};w.styleTagTransform=p(),w.setAttributes=d(),w.insert=l().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=u();a()(f.Z,w);f.Z&&f.Z.locals&&f.Z.locals;var g,_=function(t,e,i,s){return new(i||(i=Promise))((function(a,n){function o(t){try{l(s.next(t))}catch(t){n(t)}}function r(t){try{l(s.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,r)}l((s=s.apply(t,e||[])).next())}))};const v=()=>{const t=document.createElement("label");return t.className="simulation_label",t},x=(t,e)=>{const i=document.createElement("span");return i.className="simulation_span",void 0!==e&&(i.style.color=e),i.textContent=t,i},y=t=>{const e=document.createElement("input");return e.type=t,e.name=t,e};class b{static Show(t){this.on_closed=t,document.querySelector("#simulation").style.visibility="visible",document.querySelector("#simulation_loading").style.visibility="visiblle",document.body.classList.add("noscroll")}static Loaded(){document.querySelector("#simulation_loading").style.visibility="hidden"}static SetControls(t,e,i){var s;b.selector.innerHTML="";for(let s=0;s<t.cases.length;s++){const a=v();{const t=y("button");t.value=(s+1).toString(),t.className="simulation_selector_button",t.addEventListener("click",(()=>i(s))),s==e&&(t.className+=" simulation_selector_button_current"),a.appendChild(t)}a.appendChild(x(t.cases[s].title)),b.selector.appendChild(a)}b.controls.innerHTML="",null===(s=t.controls)||void 0===s||s.forEach((t=>{const e=document.createElement("span");(Array.isArray(t)?t:[t]).forEach((t=>{var i;switch(t.type){case"label":const s=x(t.text);e.className="simulation_controls_label",s.className="",e.appendChild(s);break;case"check":{const i=v(),s=y("checkbox");s.addEventListener("change",(()=>t.change(s.checked))),s.checked=t.checked(),i.appendChild(x(t.text,t.color)),i.appendChild(s),e.appendChild(i);break}case"radio":{const i=v(),s=y("radio");s.checked=t.checked(),s.addEventListener("change",(()=>{s.checked&&t.changedToChecked()})),s.name=t.name,i.appendChild(x(t.text,t.color)),i.appendChild(s),e.appendChild(i);break}case"slider":{const s=Math.random().toFixed(5),a=v();{const e=y("range"),{value:n,min:o,max:r,step:l}=t.value();e.min=o.toString(),e.max=r.toString(),e.step=l.toString(),e.value=n.toString(),e.setAttribute("list",`${s}`),e.addEventListener("input",(()=>t.input(Number(e.value),e))),void 0!==t.change&&e.addEventListener("change",t.change),a.appendChild(x(null!==(i=t.text)&&void 0!==i?i:"",t.color)),a.appendChild(e)}b.controls.appendChild(a);const n=document.createElement("datalist");{n.id=`${s}`;const t=document.createElement("option");t.value="0",n.appendChild(t)}e.appendChild(n);break}}})),b.controls.appendChild(e)})),document.querySelector("#simulation_title").innerText=t.title,document.querySelector("#simulation_comment").innerHTML=t.comment}}g=b,b.SetTime=t=>g.time.innerText=t,b.SetMessage=t=>g.message.innerText=t;{const t=document.createElement("div");t.id="simulation",document.body.appendChild(t);const e="<span id='simulation_loading'>読み込み中...</span>",s=`<div id='simulation_topleft'>${"<div id='simulation_title'></div>"}${"<div id='simulation_selector'></div>"}${"<div id='simulation_comment'></div>"}</div>`,a="<canvas id='simulation_canvas' touch-action='none'></canvas>",n="<div id='simulation_time'></div>",o="<button id='simulation_close' type='button'></button>",r="<div id='simulation_controls'></div>",l="<div id='simulation_message'></div>";t.innerHTML=`<div id='simulation_foreground'>${e}${s}${a}${n}${o}${r}${l}</div>`,b.time=document.querySelector("#simulation_time"),b.message=document.querySelector("#simulation_message"),b.canvas=document.querySelector("#simulation_canvas"),b.selector=document.querySelector("#simulation_selector"),b.controls=document.querySelector("#simulation_controls"),b.comment=document.querySelector("#simulation_comment");const c=()=>_(void 0,void 0,void 0,(function*(){(yield Promise.all([i.e(9016),i.e(4969)]).then(i.bind(i,4969))).Scheduler.Stop(),t.style.visibility="hidden",document.body.classList.remove("noscroll"),b.selector.innerHTML="",b.controls.innerHTML="",b.comment.innerHTML="",b.SetTime(""),b.SetMessage(""),b.on_closed()}));document.querySelector("#simulation_close").addEventListener("click",c),document.querySelector("#simulation_foreground").addEventListener("click",(t=>{t.stopPropagation()}),!1),document.querySelector("#simulation_foreground").addEventListener("touchstart",(t=>{t.stopPropagation()}),!1),t.addEventListener("click",c,!1),t.addEventListener("touchstart",c,!1);const d=document.querySelector("#simulation_topleft"),h=document.querySelector("#simulation_close");b.canvas.addEventListener("pointerdown",(()=>{d.style.opacity=h.style.opacity=b.controls.style.opacity="0"})),b.canvas.addEventListener("pointerup",(()=>{d.style.opacity=h.style.opacity=b.controls.style.opacity="1.0"}))}},2301:t=>{t.exports="data:image/svg+xml,%3csvg width='41.329' height='41.329' viewBox='0 0 10.935 10.935' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.5 9.435 9.435 1.5M1.5 1.5l7.935 7.935' fill='none' stroke='gray' stroke-linecap='round' stroke-width='1.323'/%3e%3c/svg%3e"}}]);