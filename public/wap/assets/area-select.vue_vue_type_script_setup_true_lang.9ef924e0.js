import{d as t,r as e,q as i,bV as a,T as l,bW as c,g as s,h as r,o,c as d,w as n,b as u,Y as p,y as v,L as y,z as f,f as m,e as _,I as k,K as h,J as x,v as g,i as C,a2 as b}from"./index-d8a8f699.js";import{_ as w}from"./u-popup.0d48946e.js";const I=t({__name:"area-select",props:{areaId:{type:Number,default:0}},emits:["complete"],setup(t,{expose:I,emit:j}){const T=t,q=e(!1),z=i({province:[],city:[],district:[]}),J=e("province"),K=i({province:null,city:null,district:null});a(0).then((({data:t})=>{z.province=t})).catch(),l((()=>T.areaId),((t,e)=>{t&&!e&&c(t).then((({data:t})=>{t.province&&(K.province=t.province),t.city&&(K.city=t.city),t.district&&(K.district=t.district)}))}),{immediate:!0}),l((()=>K.province),(()=>{a(K.province.id).then((({data:t})=>{if(z.city=t,J.value="city",K.city){let e=!1;for(let i=0;i<t.length;i++)if(K.city.id==t[i].id){e=!0;break}e||(K.city=null)}})).catch()}),{deep:!0}),l((()=>K.city),(t=>{t?a(K.city.id).then((({data:t})=>{if(z.district=t,J.value="district",K.district){let e=!1;for(let i=0;i<t.length;i++)if(K.district.id==t[i].id){e=!0;break}e||(K.district=null)}})).catch():(z.district=[],K.district=null)}),{deep:!0}),l((()=>K.district),(t=>{t&&(J.value="district",j("complete",K),q.value=!1)}),{deep:!0});return I({open:()=>{q.value=!0}}),(t,e)=>{const i=C,a=b,l=s(r("u-popup"),w);return o(),d(l,{show:q.value,onClose:e[4]||(e[4]=t=>q.value=!1),mode:"bottom",round:10,closeable:!0},{default:n((()=>[u(i,{onTouchmove:e[3]||(e[3]=p((()=>{}),["prevent","stop"]))},{default:n((()=>[u(i,{class:"text-center p-[30rpx]"},{default:n((()=>[v("请选择地区")])),_:1}),u(i,{class:"flex p-[30rpx] text-sm font-semibold"},{default:n((()=>[z.province.length?(o(),d(i,{key:0,class:y(["flex-1",{"text-[var(--primary-color)]":"province"==J.value}]),onClick:e[0]||(e[0]=t=>J.value="province")},{default:n((()=>[K.province?(o(),d(i,{key:0},{default:n((()=>[v(f(K.province.name),1)])),_:1})):(o(),d(i,{key:1},{default:n((()=>[v("请选择")])),_:1}))])),_:1},8,["class"])):m("v-if",!0),z.city.length?(o(),d(i,{key:1,class:y(["flex-1",{"text-[var(--primary-color)]":"city"==J.value}]),onClick:e[1]||(e[1]=t=>J.value="city")},{default:n((()=>[K.city?(o(),d(i,{key:0},{default:n((()=>[v(f(K.city.name),1)])),_:1})):(o(),d(i,{key:1},{default:n((()=>[v("请选择")])),_:1}))])),_:1},8,["class"])):m("v-if",!0),z.district.length?(o(),d(i,{key:2,class:y(["flex-1",{"text-[var(--primary-color)]":"district"==J.value}]),onClick:e[2]||(e[2]=t=>J.value="district")},{default:n((()=>[K.district?(o(),d(i,{key:0},{default:n((()=>[v(f(K.district.name),1)])),_:1})):(o(),d(i,{key:1},{default:n((()=>[v("请选择")])),_:1}))])),_:1},8,["class"])):m("v-if",!0)])),_:1}),u(a,{"scroll-y":"true",class:"h-[50vh]"},{default:n((()=>[u(i,{class:"flex p-[30rpx] pt-0 text-sm"},{default:n((()=>[z.province.length?_((o(),d(i,{key:0},{default:n((()=>[(o(!0),k(h,null,x(z.province,(t=>(o(),d(i,{class:y(["leading-loose",{"text-[var(--primary-color)]":K.province&&K.province.id==t.id}]),onClick:e=>K.province=t},{default:n((()=>[v(f(t.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[g,"province"==J.value]]):m("v-if",!0),z.city.length?_((o(),d(i,{key:1},{default:n((()=>[(o(!0),k(h,null,x(z.city,(t=>(o(),d(i,{class:y(["leading-loose",{"text-[var(--primary-color)]":K.city&&K.city.id==t.id}]),onClick:e=>K.city=t},{default:n((()=>[v(f(t.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[g,"city"==J.value]]):m("v-if",!0),z.district.length?_((o(),d(i,{key:2},{default:n((()=>[(o(!0),k(h,null,x(z.district,(t=>(o(),d(i,{class:y(["leading-loose",{"text-[var(--primary-color)]":K.district&&K.district.id==t.id}]),onClick:e=>K.district=t},{default:n((()=>[v(f(t.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[g,"district"==J.value]]):m("v-if",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});export{I as _};
