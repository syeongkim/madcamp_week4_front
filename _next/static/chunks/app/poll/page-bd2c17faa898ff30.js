(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{111:function(e,t,n){Promise.resolve().then(n.bind(n,3124))},1365:function(e,t,n){"use strict";var s=n(7437);t.Z=function(e){let{children:t,type:n,onClick:o,className:i}=e;return(0,s.jsx)("button",{className:"button ".concat(i),type:n,onClick:o,children:t})}},3124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var s=n(7437),o=n(2265),i=e=>{let{questionText:t,questionTextKr:n,options:o,optionsKr:i,onSelectOption:r}=e;return(0,s.jsxs)("div",{className:"box flex flex-col items-center justify-center",children:[(0,s.jsx)("h2",{className:"title",children:t}),(0,s.jsx)("h4",{className:"title-kr text-gradient-yellow",children:n}),(0,s.jsx)("ul",{className:"options",children:o.map((e,t)=>(0,s.jsxs)("li",{className:"option detail flex flex-col items-center justify-center text-center",onClick:()=>r(t),children:[e,(0,s.jsx)("div",{className:"option-kr",children:i[t]})]},e))})]})},r=n(7138);let a=[{resultType:"Gryffindor",resultDetail:"You are brave, courageous, and chivalrous.\nYou are a natural leader and are always willing to stand up for what is right."},{resultType:"Hufflepuff",resultDetail:"You are loyal, patient, and hardworking.\nYou are a kind and caring person who values friendship and fairness."},{resultType:"Ravenclaw",resultDetail:"You are intelligent, creative, and wise.\nYou have a thirst for knowledge and a love of learning."},{resultType:"Slytherin",resultDetail:"You are ambitious, cunning, and resourceful.\nYou are determined to achieve your goals and will do whatever it takes to succeed"}];var l=e=>{let{resultIndex:t}=e;return(0,s.jsxs)("div",{className:"box flex flex-col items-center justify-center font-Harry",children:[(0,s.jsx)("h2",{className:"title",children:a[t].resultType}),(0,s.jsx)("p",{className:"detail justify-center text-center mb-6",children:a[t].resultDetail}),(0,s.jsx)(r.default,{href:"/signup?dorm=".concat(a[t].resultType),children:(0,s.jsx)("p",{className:"text-white text-4xl font-large mt-6 hover:text-yellow-500",children:"Go to Sign Up"})})]})},u=()=>(0,s.jsxs)("div",{className:"box flex flex-col items-center justify-center",children:[(0,s.jsx)("p",{className:"detail text-center",children:"Hmm.. Difficult... Very difficult.\n Plenty of courage, I see. Not a bad mind either. There's talent, \n oh my goodness, yes - and a nice thirst to prove yourself.. \n So where shall I put you?\n"}),(0,s.jsx)("p",{className:"detail-kr text-center text-white",children:"음.. 어렵군... 아주 어려워.\n 용기가 많아. 머리도 나쁘지 않아. 재능도 있고, \n 맙소사, 그렇고말고 - 그리고 자신을 증명하려는 갈증도 있네..\n 그래서 어디에 배치할까?\n"})]}),c=n(1365);n(6326);let d=[{questionText:"How would you like to be remembered by others?",questionTextKr:"다른 사람들에게 당신이 어떻게 기억되길 바라나요?",options:["A brave and righteous person","A kind and trustworthy person","A smart and creative person","A successful and influential person"],optionsKr:["용감하고 정의로운 사람","친절하고 신뢰할 수 있는 사람","똑똑하고 창의적인 사람","성공적이고 영향력 있는 사람"]},{questionText:"What do you do when you witness cheating on a test?",questionTextKr:"당신이 시험 중 부정행위를 목격한다면, 어떻게 대처할 것인가요?",options:["Immediately report it to the teacher.","Discuss with friends and decide together.","Quietly overlook it but keep it in mind.","Decide what to do based on the situation."],optionsKr:["즉시 선생님께 말씀드린다.","친구들과 상의하고 함께 결정한다.","조용히 무시하지만 마음에 담아둔다.","상황에 따라 행동을 결정한다."]},{questionText:"What is your role when starting a new team project?",questionTextKr:"새로운 팀 프로젝트를 시작할 때, 당신의 역할은 무엇인가요?",options:["Lead the team and set the direction.","Encourage team members and promote cooperation.","Provide creative and innovative ideas.","Develop strategies and set plans to achieve goals."],optionsKr:["팀을 이끄고 방향을 설정한다.","팀원들을 격려하고 협력을 촉진한다.","창의적이고 혁신적인 아이디어를 제공한다.","목표를 달성하기 위한 전략을 개발하고 계획을 세운다."]},{questionText:"What type of protagonist do you admire most in a movie or book?",questionTextKr:"영화나 책에서 가장 존경하는 주인공 유형은 무엇인가요?",options:["A heroic leader","A loyal friend","An intellectual seeker","A successful strategist"],optionsKr:["영웅적인 리더","충실한 친구","지적인 탐구자","성공적인 전략가"]}],h={questionText:"What is your preferred learning method?",questionTextKr:"당신이 선호하는 학습 방법은 무엇인가요?",options:["Learning through practice","Studying together and discussing","Reading books and researching","Strategically planning and setting goals"],optionsKr:["꾸준한 반복을 통한 학습","함께 공부하고 토론하는 것","책을 읽고 연구는 것","전략적으로 계획하고 목표를 세우는 것"]};function p(){let[e,t]=(0,o.useState)(0),[n,r]=(0,o.useState)(Array(d.length).fill(-1)),[a,p]=(0,o.useState)(!1),[x,f]=(0,o.useState)(!1),[m,g]=(0,o.useState)(null),[y,v]=(0,o.useState)(null),[j,w]=(0,o.useState)(!1);return(0,s.jsxs)("div",{className:"poll min-h-screen flex flex-col items-center justify-center",children:[(0,s.jsx)("audio",{src:"https://syeongkim.github.io/madcamp_week4_front/musics/08_Mr_Longbottom_Flies.mp3",autoPlay:!0,loop:!0}),null===m?j?(0,s.jsxs)("div",{children:[(0,s.jsx)(u,{}),(0,s.jsx)(c.Z,{onClick:()=>{w(!1),p(!0)},children:"Give a hint to the Sorting Hat >>"})]}):(0,s.jsx)(i,{questionText:a?h.questionText:d[e].questionText,questionTextKr:a?h.questionTextKr:d[e].questionTextKr,options:a?h.options:d[e].options,optionsKr:a?h.optionsKr:d[e].optionsKr,onSelectOption:s=>{let o=[...n];if(a)f(!0),g("Bonus question answer: ".concat(s)),v(s),console.log("Bonus question answer:",s);else if(o[e]=s,r(o),e<d.length-1)t(e+1);else{let e=new Set(o),t=o.reduce((e,t)=>(e[t]=(e[t]||0)+1,e),{}),n=Object.values(t);if(4===e.size||n.includes(2)&&2===n.length)w(!0);else{let e=Object.keys(t).reduce((e,n)=>t[parseInt(e)]>t[parseInt(n)]?e:n);v(parseInt(e)),localStorage.setItem("dormId",e),g("Your answers are processed. Most common answer index: ".concat(e))}}x&&g("Your answers are processed. Most common answer index: ".concat(y))}}):(0,s.jsx)("div",{children:null!==y?(0,s.jsx)(l,{resultIndex:y}):(0,s.jsx)("div",{children:(0,s.jsx)(u,{})})})]})}},6326:function(){}},function(e){e.O(0,[39,138,971,23,744],function(){return e(e.s=111)}),_N_E=e.O()}]);