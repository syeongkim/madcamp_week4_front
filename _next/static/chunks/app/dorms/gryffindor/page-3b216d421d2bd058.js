(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{6325:function(e,t,s){Promise.resolve().then(s.bind(s,5034))},7291:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(7437),r=s(2265),i=s(8842),a=s(3149),o=s(7776);let l=e=>{let{texturePath:t}=e,s=(0,r.useRef)(null),a=(0,i.F)(o.TextureLoader,t),[l,c]=(0,r.useState)(1);return(0,r.useEffect)(()=>{let e=new Image;e.src=t,e.onload=()=>{c(e.width/e.height)};let n=new o.PlaneGeometry(30*l,30,60,40),r=new o.MeshLambertMaterial({map:a,side:o.DoubleSide,alphaTest:.5,transparent:!0});s.current&&(s.current.geometry=n,s.current.material=r)},[a,t,l]),(0,i.C)(()=>{let e=.001*Date.now();if(s.current&&s.current.geometry){let t=s.current.geometry.attributes.position,n=t.array;for(let t=0;t<=40;t++)for(let s=0;s<=60;s++)n[3*(s+61*t)+2]=.5*Math.sin(.5*s+e);t.needsUpdate=!0}}),(0,n.jsx)("mesh",{ref:s})};function c(e){let{texturePath:t}=e;return(0,n.jsx)("div",{className:"items-center justify-center text-center relative h-[700px]",children:(0,n.jsxs)(a.Xz,{style:{width:"auto",height:"100%"},camera:{position:[0,0,30],fov:60},children:[(0,n.jsx)("ambientLight",{}),(0,n.jsx)("pointLight",{position:[10,10,10]}),(0,n.jsx)(l,{texturePath:t})]})})}},5034:function(e,t,s){"use strict";s.r(t);var n=s(7437),r=s(2265),i=s(7138),a=s(4839),o=s(7291);s(3054),s(267),t.default=()=>{let[e,t]=(0,r.useState)({points:0,students:[]});return(0,r.useEffect)(()=>{(async()=>{try{let e=await fetch("https://hogwart.paulupa.com/api/dorms/1",{headers:{"Content-Type":"application/json"}});console.log(e);let s=await e.json();console.log(s),t({points:s.dorm_score||0,students:s.students||[]})}catch(e){console.log(e)}})()},[]),(0,n.jsxs)("div",{className:"h-screen bg-white relative",children:[(0,n.jsx)(i.default,{href:"/games/potion",children:(0,n.jsx)("div",{className:"h-1/3 w-full bg-potion-background bg-center bg-cover z-10",style:{position:"relative",pointerEvents:"auto"}})}),(0,n.jsx)(i.default,{href:"/games/magic",children:(0,n.jsx)("div",{className:"h-1/3 w-full -mt-1/3 bg-magic-background bg-bottom bg-cover z-10",style:{position:"relative",pointerEvents:"auto"}})}),(0,n.jsx)(i.default,{href:"/games/quidditch",children:(0,n.jsx)("div",{className:"h-1/3 w-full -mt-1/3 bg-quidditch-background bg-center bg-cover z-10",style:{position:"relative",pointerEvents:"auto"}})}),(0,n.jsx)("div",{className:"scrolling-names-container absolute top-0 left-0 w-full z-20",children:(0,n.jsx)("div",{className:"scrolling-names",children:e.students.concat(e.students).map((e,t)=>(0,n.jsx)("span",{children:e},t))})}),(0,n.jsxs)("div",{className:"absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-30 pointer-events-none",children:[(0,n.jsx)(o.Z,{texturePath:"https://syeongkim.github.io/madcamp_week4_front/images/gryffindor_banner.png"}),(0,n.jsx)("h1",{className:(0,a.Z)("text-4xl mt-8 dormtype","text-shadow-gryffindor"),children:"Gryffindor"}),(0,n.jsx)("div",{className:"dorm-detail my-6 text-center",children:(0,n.jsxs)("div",{className:"text-center mb-4",children:["Points: ",e.points]})})]})]})}},267:function(){},3054:function(){}},function(e){e.O(0,[141,818,689,138,351,971,23,744],function(){return e(e.s=6325)}),_N_E=e.O()}]);