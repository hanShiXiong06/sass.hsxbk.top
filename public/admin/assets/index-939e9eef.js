import{d as oe,l as le,r as V,n as se,h as X,c as L,a as m,b as ie,u as v,i as B,t as M,q as y,e as W,w as E,$ as O,A as ae,F as S,T as R,B as j,Z as N,U as q,aI as ne,E as fe,L as ce,M as pe,X as ue,p as de,g as re}from"./index-37fee5a0.js";/* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";import{_ as he}from"./index.vue_vue_type_script_setup_true_lang-165de32d.js";import{_ as me}from"./index.vue_vue_type_style_index_0_lang-c2556e37.js";/* empty css                  */import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                     *//* empty css                 */import"./diy-de985e7b.js";const ge=A=>(de("data-v-44b73213"),A=A(),re(),A),ve={key:0,class:"cursor-pointer"},xe={class:"text-primary p-[4px]"},ye={key:1,class:"cursor-pointer"},be={class:"flex"},we=["id","onMousedown"],ke=ge(()=>m("span",{class:"p-[4px]"},"|",-1)),Te=["onMousedown"],Me=["onMousedown"],He=["onMousedown"],Xe=["onMousedown"],Le={class:"mb-[10px] text-lg text-black"},Ye={class:"overflow-y-auto h-[300px]"},Ve={key:0,class:"mb-[16px]"},We={class:"flex items-center"},Ee={class:"dialog-footer"},Fe=oe({__name:"index",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(A,{expose:P,emit:Z}){const G=A,H=le({get(){return G.modelValue},set(h){Z("update:modelValue",h)}}),F=V(!1),b=V(400),g=V(400),u=se([]),$=V(1),J=V(.25),C=V(100),D=V(100),U=V(4),z=()=>{let h=u.length%U.value*C.value,a=Math.floor(u.length/U.value)*D.value,c=a+D.value/2;(a>=g.value||c>=g.value)&&(a=0,h=0),u.push({left:h,top:a,width:C.value,height:D.value,unit:"px",link:{name:""}})},K=(h,a)=>{const c=document.getElementById("box_"+a),o=h.clientX-c.offsetLeft,T=h.clientY-c.offsetTop;document.onmousemove=function(r){c.style.left=r.clientX-o+"px",c.style.top=r.clientY-T+"px",r.clientX-o<0&&(c.style.left=0),r.clientX-o>b.value-c.offsetWidth&&(c.style.left=b.value-c.offsetWidth+"px"),r.clientY-T<0&&(c.style.top=0),r.clientY-T>g.value-c.offsetHeight&&(c.style.top=g.value-c.offsetHeight+"px"),u[a].left=c.offsetLeft,u[a].top=c.offsetTop,u[a].width=c.offsetWidth,u[a].height=c.offsetHeight,u[a].unit="px"},document.onmouseup=function(r){document.onmousemove=null}},I=(h,a)=>{const c=h;c.stopPropagation();const o=document.getElementById("box_"+a),T=h.target.className,r=o.offsetWidth,Y=o.offsetHeight,x=c.clientX,p=c.clientY,f=o.offsetLeft,n=o.offsetTop,l=50,s=50;document.onmousemove=function(te){const d=te;if(T=="box1"){let e=r-(d.clientX-x);const w=b.value;let t=Y-(d.clientY-p);const k=g.value-n;let i=f+(d.clientX-x),_=n+(d.clientY-p);e<l&&(e=l),e>w&&(e=w),t<s&&(t=s),t>k&&(t=k),f==0&&n==0?e==l&&t==s?(i=l,_=s):e==l&&t>s?i=l:e>l&&t==s&&(_=s):f==0&&n>0?e==l&&t==s||e==l&&t>s?(i=l,_=o.offsetTop):e>l&&t==s&&(_=o.offsetTop):f>0&&n==0?e==l&&t==s?(i=o.offsetLeft,_=o.offsetTop):e==l&&t>s?(i=o.offsetLeft,_=0):e>l&&t==s&&(_=o.offsetTop):f>0&&n>0&&(e==l&&t==s||e==l&&t>s?(i=o.offsetLeft,_=o.offsetTop):e>l&&t==s&&(_=o.offsetTop)),i<0&&(i=0,e=r-(d.clientX-x)+(f+(d.clientX-x))),_<0&&(_=0,t=n+(d.clientY-p)+(Y-(d.clientY-p))),o.style.width=e+"px",o.style.height=t+"px",o.style.left=i+"px",o.style.top=_+"px"}else if(T=="box2"){let e=r+(d.clientX-x);const w=b.value-f;let t=Y-(d.clientY-p);const k=g.value-n;let i=n+(d.clientY-p);e<l&&(e=l),e>w&&(e=w),t<s&&(t=s),t>k&&(t=k),f==0&&n==0?e==l&&t==s?i=s:e==l&&t>s||e>l&&t==s&&(i=s):f==0&&n>0?(e==l&&t==s||e==l&&t>s||e>l&&t==s)&&(i=o.offsetTop):f>0&&n==0?e==l&&t==s?i=o.offsetTop:e==l&&t>s?i=0:e>l&&t==s&&(i=o.offsetTop):f>0&&n>0&&(e==l&&t==s||e==l&&t>s||e>l&&t==s)&&(i=o.offsetTop),i<0&&(i=0,t=n+(d.clientY-p)+(Y-(d.clientY-p))),o.style.width=e+"px",o.style.height=t+"px",o.style.top=i+"px"}else if(T=="box3"){let e=r-(d.clientX-x);const w=b.value;let t=Y+(d.clientY-p);const k=g.value-n;let i=f+(d.clientX-x);e<l&&(e=l),e>w&&(e=w),t<s&&(t=s),t>k&&(t=k),f==0&&n==0||f==0&&n>0?(e==l&&t==s||e==l&&t>s)&&(i=l):f>0&&n==0?(e==l&&t==s||e==l&&t>s)&&(i=o.offsetLeft):f>0&&n>0&&(e==l&&t==s||e==l&&t>s)&&(i=o.offsetLeft),i<0&&(i=0,e=r-(d.clientX-x)+(f+(d.clientX-x))),o.style.width=e+"px",o.style.height=t+"px",o.style.left=i+"px"}else if(T=="box4"){let e=r+(d.clientX-x);const w=b.value-f;let t=Y+(d.clientY-p);const k=g.value-n;e<l&&(e=l),e>w&&(e=w),t<s&&(t=s),t>k&&(t=k),o.style.width=e+"px",o.style.height=t+"px"}u[a].left=o.offsetLeft,u[a].top=o.offsetTop,u[a].width=o.offsetWidth,u[a].height=o.offsetHeight,u[a].unit="px"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}},Q=()=>{if(!H.value.imageUrl){q({type:"warning",message:`${y("imageUrlTip")}`});return}$.value=H.value.imgHeight/H.value.imgWidth,g.value=Math.floor(b.value*$.value),C.value=Math.floor(J.value*g.value),D.value=C.value,U.value=Math.floor(b.value/C.value),Object.keys(H.value.heatMapData).length?u.splice(0,u.length,...H.value.heatMapData):(u.splice(0,u.length),z()),F.value=!0},ee=()=>{let h=!0;for(let a=0;a<u.length;a++)if(!u[a].link.title){q({type:"warning",message:y("selectedHotArea")+(a+1)+y("hotAreaLink")}),h=!1;break}h&&(u.forEach((a,c)=>{const o=document.getElementById("box_"+c);a.width=parseFloat(o.offsetWidth/b.value*100).toFixed(2),a.height=parseFloat(o.offsetHeight/g.value*100).toFixed(2),a.left=parseFloat(o.offsetLeft/b.value*100).toFixed(2),a.top=parseFloat(o.offsetTop/g.value*100).toFixed(2),a.unit="%"}),H.value.heatMapData=ne(u),F.value=!1)};return P({showDialog:F}),(h,a)=>{const c=fe,o=me,T=he,r=ce,Y=pe,x=ue;return X(),L("div",null,[m("div",{onClick:Q},[ie(h.$slots,"default",{},()=>[v(H).heatMapData.length?(X(),L("div",ve,[B(M(v(y)("selected")),1),m("span",xe,M(v(H).heatMapData.length),1),B(M(v(y)("selectedAfterHotArea")),1)])):(X(),L("div",ye,M(v(y)("addHotArea")),1))],!0)]),W(x,{modelValue:F.value,"onUpdate:modelValue":a[1]||(a[1]=p=>F.value=p),title:v(y)("hotAreaSet"),width:"810px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:E(()=>[m("span",Ee,[W(c,{onClick:a[0]||(a[0]=p=>F.value=!1)},{default:E(()=>[B(M(v(y)("cancel")),1)]),_:1}),W(c,{type:"primary",onClick:ee},{default:E(()=>[B(M(v(y)("confirm")),1)]),_:1})])]),default:E(()=>[m("div",be,[m("div",{class:"hot-area-img-wrap content-box relative bg-gray-100 border border-dashed border-gray-500 bg-no-repeat",style:O({backgroundImage:"url("+v(ae)(v(H).imageUrl)+")",width:b.value+"px",height:g.value+"px"})},[(X(!0),L(S,null,R(u,(p,f)=>(X(),L("div",{id:"box_"+f,key:f,class:"area-box border border-solid border-[#ccc] w-[100px] h-[100px] absolute top-0 left-0 select-none p-[5px]",style:O({left:p.left+p.unit,top:p.top+p.unit,width:p.width+p.unit,height:p.height+p.unit}),onMousedown:n=>K(n,f)},[m("span",null,M(f+1),1),p.link.title?(X(),L(S,{key:0},[ke,m("span",null,M(p.link.title),1)],64)):j("",!0),m("span",{class:"box1",onMousedown:N(n=>I(n,f),["stop"])},null,40,Te),m("span",{class:"box2",onMousedown:N(n=>I(n,f),["stop"])},null,40,Me),m("span",{class:"box3",onMousedown:N(n=>I(n,f),["stop"])},null,40,He),m("span",{class:"box4",onMousedown:N(n=>I(n,f),["stop"])},null,40,Xe)],44,we))),128))],4),W(Y,{"label-width":"80px",class:"pl-[20px]"},{default:E(()=>[m("h3",Le,M(v(y)("hotAreaManage")),1),W(c,{type:"primary",plain:"",size:"small",class:"mb-[10px]",onClick:z},{default:E(()=>[B(M(v(y)("addHotArea")),1)]),_:1}),m("div",Ye,[(X(!0),L(S,null,R(u,(p,f)=>(X(),L(S,{key:f},[p?(X(),L("div",Ve,[W(r,{label:v(y)("hotArea")+(f+1)},{default:E(()=>[m("div",We,[W(o,{modelValue:p.link,"onUpdate:modelValue":n=>p.link=n},null,8,["modelValue","onUpdate:modelValue"]),W(T,{class:"del cursor-pointer mx-[10px]",name:"element CircleCloseFilled",color:"#bbb",size:"20px",onClick:n=>u.splice(f,1)},null,8,["onClick"])])]),_:2},1032,["label"])])):j("",!0)],64))),128))])]),_:1})])]),_:1},8,["modelValue","title"])])}}});const je=_e(Fe,[["__scopeId","data-v-44b73213"]]);export{je as default};
