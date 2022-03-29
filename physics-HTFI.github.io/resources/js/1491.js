"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1491],{1491:(t,s,i)=>{i.r(s),i.d(s,{spec:()=>r});var e=i(1550);class n{constructor(t,s){this.reset=()=>this.X=this.X0.clone(),this.proceed=(t,s)=>this.X=e.ME.RK4_collision(t,this.X,e.ME.dXdt_g,s,this.Gs),this.E=t=>(0,e.uZ)(this.X,this.m),this.dim=t.dim,this.r=t.r,this.m=t.m,2==t.dim?this.balls=[0,1].map((t=>e.ay.CollisionBall2D(this.r[t],.1*Math.pow(this.m[t],1/3),t))):this.balls=[0,1].map((t=>e.ay.CollisionBall3D(this.r[t],t))),this.X0=new e.V([...t.x0.flat(),...t.v0.flat()]),this.X=this.reset(),this.Gs={num_constraints:3,M:new e.V([this.m[0],this.m[0],this.m[0],this.m[1],this.m[1],this.m[1]]),G:(t,s,i)=>((t,s,i)=>{const n=s.split3();if(0==t){const t=n[0].minus(n[1]),s=t.clone().unit3();return{G:t.len3()-(i[0]+i[1]),G_t:0,G_x:e.V.concat(s,s.negate123())}}return 1==t?{G:2-i[0]-n[0].len3(),G_t:0,G_x:e.V.concat(n[0].unit3().negate123(),e.V.Zero(3))}:2==t?{G:2-i[1]-n[1].len3(),G_t:0,G_x:e.V.concat(e.V.Zero(3),n[1].unit3().negate123())}:void 0})(t,i,this.r)}}draw(t){this.balls[0].position=this.X.to_Vector3(0),this.balls[1].position=this.X.to_Vector3(3)}}const h=()=>{e.jG.set_2D(6),e.ay.Ground(2),e.ay.Circle(2)},o=()=>{e.jG.set_3D(5,.25,.4,!1,new e.V([0,0,-.7]).to_Vector3()),e.ay.SphereGround(2,.3,10,20)},r={title:"重力下でのボール同士の衝突",comment:"外球の半径: 2m",cases:[{title:"3次元（質量比1:1）",setup:o,init:[{x0:[[-.1,-.01,-1],[.01,.02,-.3]],v0:[[0,0,0],[0,0,0]],m:[1,1],r:[.3,.3],dim:3}]},{title:"同（質量比1:2）",setup:o,init:[{x0:[[-.1,-.01,-1],[.05,.02,-.3]],v0:[[0,0,0],[0,0,0]],m:[1,.5],r:[.3,.3*Math.pow(.5,1/3)],dim:3}]},{title:"2次元（質量比1:1）",setup:h,init:[{x0:[[-.01,0,-1],[0,0,0]],v0:[[0,0,0],[0,0,0]],m:[1,1],r:[.3,.3],dim:2}]},{title:"同（質量比1:2）",setup:h,init:[{x0:[[-.01,0,-1],[0,0,0]],v0:[[0,0,0],[0,0,0]],m:[1,.5],r:[.3,.3],dim:2}]}],screenshot:{case:0,first_frame_sec:0,end_sec:2,fps:20},generator:(t,s)=>new n(t,s)}}}]);