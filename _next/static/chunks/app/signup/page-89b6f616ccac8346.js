(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{1708:function(e,s,r){Promise.resolve().then(r.bind(r,8920))},6463:function(e,s,r){"use strict";var t=r(1169);r.o(t,"useRouter")&&r.d(s,{useRouter:function(){return t.useRouter}}),r.o(t,"useSearchParams")&&r.d(s,{useSearchParams:function(){return t.useSearchParams}})},1365:function(e,s,r){"use strict";var t=r(7437);s.Z=function(e){let{children:s,type:r,onClick:o,className:a}=e;return(0,t.jsx)("button",{className:"button ".concat(a),type:r,onClick:o,children:s})}},2501:function(e,s,r){"use strict";var t=r(7437);s.Z=function(e){let{src:s,alt:r,className:o,width:a,height:n}=e;return(0,t.jsx)("img",{src:s,alt:r,className:o,width:a,height:n})}},3645:function(e,s,r){"use strict";var t=r(7437);r(2265);var o=r(2501);s.Z=function(e){let{className:s}=e;return(0,t.jsx)("div",{className:"logo ".concat(s),children:(0,t.jsx)(o.Z,{src:"https://syeongkim.github.io/madcamp_week4_front/images/logo.png",alt:"Logo"})})}},8920:function(e,s,r){"use strict";r.r(s);var t=r(7437),o=r(2265),a=r(6463),n=r(3645),l=r(1365);r(1470);let i={Gryffindor:1,Hufflepuff:2,Ravenclaw:3,Slytherin:4},u=()=>{let e=(0,a.useSearchParams)(),[s,r]=(0,o.useState)(""),[u,c]=(0,o.useState)(""),[d,m]=(0,o.useState)(""),[f,h]=(0,o.useState)("");(0,o.useEffect)(()=>{h(e.get("dorm")||"")},[e]);let p=async e=>{if(e.preventDefault(),u!==d){alert("Passwords do not match");return}let r={userName:s,userPassword:u,userDorm:i[f]};try{console.log("Creating user:",r);let e=await fetch("https://hogwart.paulupa.com/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(e.ok){let r=await e.json();console.log("User created successfully:",r),localStorage.setItem("username",s),localStorage.setItem("userDormId",i[f].toString()),window.location.href="/dorms/".concat(f)}else{let s=await e.json();console.error("Error creating user:",s)}}catch(e){console.error("Error:",e)}};return(0,t.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,t.jsxs)("div",{className:"p-8 rounded-lg shadow-md w-full max-w-md",children:[(0,t.jsx)("div",{className:"mb-6 text-center",children:(0,t.jsx)(n.Z,{})}),(0,t.jsxs)("form",{className:"space-y-6 font-Animales",onSubmit:p,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-white",children:"Username"}),(0,t.jsx)("input",{id:"username",name:"username",type:"text",autoComplete:"username",required:!0,value:s,onChange:e=>r(e.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-white",children:"Password"}),(0,t.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:u,onChange:e=>c(e.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"confirm_password",className:"block text-sm font-medium text-white",children:"Confirm Password"}),(0,t.jsx)("input",{id:"confirm_password",name:"confirm_password",type:"password",autoComplete:"current-password",required:!0,value:d,onChange:e=>m(e.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600",type:"submit",children:"Sign Up"})})]})]})})};s.default=()=>(0,t.jsx)(o.Suspense,{fallback:(0,t.jsx)("div",{children:"Loading..."}),children:(0,t.jsx)(u,{})})},1470:function(){}},function(e){e.O(0,[951,971,23,744],function(){return e(e.s=1708)}),_N_E=e.O()}]);