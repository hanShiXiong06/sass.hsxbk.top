import{d as w,n as C,dg as k,cK as o,Q as c,h as l,c as d,e as v,w as m,F as y,T as f,s as L,u as b,q as g,ab as D,aC as x}from"./index-37fee5a0.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */const B={class:"area-component"},F=w({__name:"index",props:{initData:{type:Object,default:{province:"",city:"",area:""}}},emits:["areaChange"],setup(V,{emit:h}){const s=V,e=C({provinceList:[],citiesList:[],areasList:[],province:"",city:"",area:""});k(async()=>{e.provinceList=(await o(0)).data}),c(()=>s.initData.province,async t=>{e.province=s.initData.province,e.city=s.initData.city,e.area=s.initData.area,e.citiesList=(await o(parseInt(e.province))).data,e.areasList=(await o(parseInt(e.city))).data,r()}),c(()=>e.area,t=>{t&&r()}),c(()=>e.province,t=>{t&&r()}),c(()=>e.city,t=>{t&&r()});const r=()=>{const t={province:{},city:{},area:{}};let a=e.provinceList.find(n=>n.id===e.province);t.province.name=a?a.name:"",t.province.id=a?a.id:"",a=e.citiesList.find(n=>n.id===e.city),t.city.name=a?a.name:"",t.city.id=a?a.id:"",a=e.areasList.find(n=>n.id===e.area),t.area.name=a?a.name:"",t.area.id=a?a.id:"",h("areaChange",t)},p=async t=>{if(t=="province"){if(e.city="",e.area="",!e.province)return r(),!1;e.citiesList=(await o(parseInt(e.province))).data}if(t=="city"){if(e.area="",!e.city)return r(),!1;e.areasList=(await o(parseInt(e.city))).data}if(t=="area"&&!e.area)return r(),!1};return(t,a)=>{const n=D,u=x;return l(),d("div",B,[v(u,{placeholder:b(g)("provincePlaceholder"),modelValue:e.province,"onUpdate:modelValue":a[0]||(a[0]=i=>e.province=i),clearable:"",onChange:a[1]||(a[1]=i=>p("province"))},{default:m(()=>[(l(!0),d(y,null,f(e.provinceList,i=>(l(),L(n,{key:i.id,label:i.name,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"]),v(u,{placeholder:b(g)("cityPlaceholder"),style:{margin:"0 10px"},disabled:!e.province,modelValue:e.city,"onUpdate:modelValue":a[2]||(a[2]=i=>e.city=i),clearable:"",onChange:a[3]||(a[3]=i=>p("city"))},{default:m(()=>[(l(!0),d(y,null,f(e.citiesList,i=>(l(),L(n,{key:i.id,label:i.name,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["placeholder","disabled","modelValue"]),v(u,{placeholder:b(g)("districtPlaceholder"),disabled:!e.province||!e.city,modelValue:e.area,"onUpdate:modelValue":a[4]||(a[4]=i=>e.area=i),clearable:"",onChange:a[5]||(a[5]=i=>p("area"))},{default:m(()=>[(l(!0),d(y,null,f(e.areasList,i=>(l(),L(n,{key:i.id,label:i.name,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["placeholder","disabled","modelValue"])])}}});export{F as default};
