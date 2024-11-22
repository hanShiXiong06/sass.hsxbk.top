import{d as t,r as e,L as i,bS as a,_ as c,bT as l,g as r,h as s,o,c as d,w as n,b as p,A as u,y as v,R as f,z as y,f as m,e as x,P as _,Q as h,a7 as k,v as C,i as g,a6 as b}from"./index-7bf68536.js";import{_ as w}from"./u-popup.be4bfacd.js";const j=t({__name:"area-select",props:{areaId:{type:Number,default:0}},emits:["complete"],setup(t,{expose:j,emit:z}){const I=t,T=e(!1),A=i({province:[],city:[],district:[]}),L=e("province"),N=i({province:null,city:null,district:null});a(0).then((({data:t})=>{A.province=t})).catch(),c((()=>I.areaId),((t,e)=>{t&&!e&&l(t).then((({data:t})=>{t.province&&(N.province=t.province),t.city&&(N.city=t.city),t.district&&(N.district=t.district)}))}),{immediate:!0}),c((()=>N.province),(()=>{a(N.province.id).then((({data:t})=>{if(A.city=t,L.value="city",N.city){let e=!1;for(let i=0;i<t.length;i++)if(N.city.id==t[i].id){e=!0;break}e||(N.city=null)}})).catch()}),{deep:!0}),c((()=>N.city),(t=>{t?a(N.city.id).then((({data:t})=>{if(A.district=t,L.value="district",N.district){let e=!1;for(let i=0;i<t.length;i++)if(N.district.id==t[i].id){e=!0;break}e||(N.district=null)}})).catch():(A.district=[],N.district=null)}),{deep:!0}),c((()=>N.district),(t=>{t&&(L.value="district",z("complete",N),T.value=!1)}),{deep:!0});return j({open:()=>{T.value=!0}}),(t,e)=>{const i=g,a=b,c=r(s("u-popup"),w);return o(),d(c,{show:T.value,onClose:e[4]||(e[4]=t=>T.value=!1),mode:"bottom",round:10},{default:n((()=>[p(i,{onTouchmove:e[3]||(e[3]=u((()=>{}),["prevent","stop"])),class:"popup-common"},{default:n((()=>[p(i,{class:"title"},{default:n((()=>[v("请选择地区")])),_:1}),p(i,{class:"flex p-[30rpx] pt-[0] text-sm font-500"},{default:n((()=>[A.province.length?(o(),d(i,{key:0,class:f(["flex-1 pr-[10rpx]",{"text-[var(--primary-color)]":"province"==L.value}]),onClick:e[0]||(e[0]=t=>L.value="province")},{default:n((()=>[N.province?(o(),d(i,{key:0},{default:n((()=>[v(y(N.province.name),1)])),_:1})):(o(),d(i,{key:1},{default:n((()=>[v("请选择")])),_:1}))])),_:1},8,["class"])):m("v-if",!0),A.city.length?(o(),d(i,{key:1,class:f(["flex-1 pr-[10rpx]",{"text-[var(--primary-color)]":"city"==L.value}]),onClick:e[1]||(e[1]=t=>L.value="city")},{default:n((()=>[N.city?(o(),d(i,{key:0},{default:n((()=>[v(y(N.city.name),1)])),_:1})):(o(),d(i,{key:1},{default:n((()=>[v("请选择")])),_:1}))])),_:1},8,["class"])):m("v-if",!0),A.district.length?(o(),d(i,{key:2,class:f(["flex-1 pr-[10rpx]",{"text-[var(--primary-color)]":"district"==L.value}]),onClick:e[2]||(e[2]=t=>L.value="district")},{default:n((()=>[N.district?(o(),d(i,{key:0},{default:n((()=>[v(y(N.district.name),1)])),_:1})):(o(),d(i,{key:1},{default:n((()=>[v("请选择")])),_:1}))])),_:1},8,["class"])):m("v-if",!0)])),_:1}),p(a,{"scroll-y":"true",class:"h-[50vh]"},{default:n((()=>[p(i,{class:"flex p-[30rpx] pt-0 text-sm"},{default:n((()=>[A.province.length?x((o(),d(i,{key:0},{default:n((()=>[(o(!0),_(h,null,k(A.province,(t=>(o(),d(i,{class:f(["h-[80rpx] flex items-center",{"text-[var(--primary-color)]":N.province&&N.province.id==t.id}]),onClick:e=>N.province=t},{default:n((()=>[v(y(t.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[C,"province"==L.value]]):m("v-if",!0),A.city.length?x((o(),d(i,{key:1},{default:n((()=>[(o(!0),_(h,null,k(A.city,(t=>(o(),d(i,{class:f(["h-[80rpx] flex items-center",{"text-[var(--primary-color)]":N.city&&N.city.id==t.id}]),onClick:e=>N.city=t},{default:n((()=>[v(y(t.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[C,"city"==L.value]]):m("v-if",!0),A.district.length?x((o(),d(i,{key:2},{default:n((()=>[(o(!0),_(h,null,k(A.district,(t=>(o(),d(i,{class:f(["h-[80rpx] flex items-center",{"text-[var(--primary-color)]":N.district&&N.district.id==t.id}]),onClick:e=>N.district=t},{default:n((()=>[v(y(t.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[C,"district"==L.value]]):m("v-if",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});export{j as _};