"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1331],{1331:(t,o,s)=>{s.r(o),s.d(o,{spec:()=>x});var e=s(1550);const r=(t,o)=>new e.V([o*t.dat[0],0,0]);let i;class c{constructor(t,o){this.arrow=e.ay.Arrow(0),this.dXdt=(t,o)=>(0,e.iO)(o,r(o,this.k),this.m),this.reset=()=>this.X=this.X0.clone(),this.proceed=(t,o)=>this.X=e.ME.RK4_free(t,this.X,this.dXdt,o),this.E=t=>(0,e.CD)(this.X,this.m)-.5*this.k*Math.pow(this.X.dat[0],2),this.X0=new e.V([t.x0,0,t.y0,t.vx0,0,0]),this.k=t.k,this.m=t.m,this.ball=e.ay.Ball(.1*Math.pow(this.m,1/3),t.color),this.X=this.reset()}draw(t){const o=this.X.slice3(0);this.ball.position=o.to_Vector3(),this.arrow.setEnabled(i),e.ay.Set_ArrowPosition(this.arrow,o,r(this.X,this.k),.1)}}const x={title:"力が1次関数の場合",comment:"大きいものほど質量が大きい",cases:[{title:"初期速度が等しい場合",init:[{x0:0,vx0:2,m:.4,k:-5,color:4,y0:-1},{x0:0,vx0:2,m:.55,k:-5,color:3,y0:-.5},{x0:0,vx0:2,m:.7,k:-5,color:2,y0:0},{x0:0,vx0:2,m:.85,k:-5,color:1,y0:.5},{x0:0,vx0:2,m:1,k:-5,color:0,y0:1}],setup:()=>{e.jG.set_2D(4),e.ay.Ground(2)}},{title:"初期位置が等しい場合",init:[{x0:-1,vx0:0,m:.4,k:-5,color:4,y0:-1},{x0:-1,vx0:0,m:.55,k:-5,color:3,y0:-.5},{x0:-1,vx0:0,m:.7,k:-5,color:2,y0:0},{x0:-1,vx0:0,m:.85,k:-5,color:1,y0:.5},{x0:-1,vx0:0,m:1,k:-5,color:0,y0:1}],setup:()=>{e.jG.set_2D(4),e.ay.Ground(2)}},{title:"周期は初期値によらない",init:[{x0:0,vx0:.5,m:1,k:-5,color:0,y0:-1},{x0:0,vx0:1,m:1,k:-5,color:0,y0:-.5},{x0:0,vx0:1.5,m:1,k:-5,color:0,y0:0},{x0:0,vx0:2,m:1,k:-5,color:0,y0:.5},{x0:0,vx0:2.5,m:1,k:-5,color:0,y0:1}],setup:()=>{e.jG.set_2D(4),e.ay.Ground(2)}},{title:"反発する場合 (k>0)",init:[{x0:0,vx0:.2,m:.4,k:5,color:4,y0:-1},{x0:0,vx0:.2,m:.55,k:5,color:3,y0:-.5},{x0:0,vx0:.2,m:.7,k:5,color:2,y0:0},{x0:0,vx0:.2,m:.85,k:5,color:1,y0:.5},{x0:0,vx0:.2,m:1,k:5,color:0,y0:1}],setup:()=>{e.jG.set_2D(4,new e.V([1,0,0]).to_Vector3()),e.ay.Ground(2)},config:{restart_time:2}}],init:()=>i=!0,controls:[{type:"check",text:"力を表示",checked:()=>i,change:t=>i=t,color:"#f00"}],screenshot:{case:0,first_frame_sec:0,end_sec:.95,fps:20},generator:(t,o)=>new c(t,o)}}}]);