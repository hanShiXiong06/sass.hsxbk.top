import{d as X,x as Y,f as z,r as y,aQ as A,Y as G,P as B,h as s,c as d,a as c,t as l,u,F as S,Q as H,e as n,w as r,s as I,q as v,i as k,B as h,a$ as D,au as K,J as O,X as W,aU as Z,E as ee,a0 as te,U as oe,p as ae,g as se}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import{S as le}from"./sortable.esm-be94e56d.js";import{i as ne,s as re}from"./delivery-9c7fac72.js";import{_ as ie}from"./_plugin-vue_export-helper-c27b6911.js";const ue=g=>(ae("data-v-31e892b9"),g=g(),se(),g),ce={class:"main-container"},pe={class:"flex ml-[18px] justify-between items-center mt-[20px]"},de={class:"text-page-title"},ve={class:"flex items-center justify-between"},me={class:"flex items-center"},_e=ue(()=>c("i",{class:"iconfont icontuodong vues-rank mr-[5px]"},null,-1)),fe={key:1,class:"font-600 text-[14px]"},ye={class:"flex items-center justify-between"},ke={class:"text-[#666666] text-[14px]"},xe=X({__name:"config",setup(g){const R=Y(),N=z(),U=R.meta.title,x=y(!1),i=y([]),F=()=>{x.value=!0,ne().then(t=>{i.value=t.data,x.value=!1,D(()=>{C&&C()})}).catch(()=>{x.value=!1})};A(()=>{F()});const L={mounted:t=>t.querySelector("input").focus()},V=y(0),E=y(),C=()=>{le.create(E.value,{handle:".vues-rank",animation:300,onEnd({newIndex:t,oldIndex:e}){const w=i.value.splice(e,1)[0];i.value.splice(t,0,w),V.value+=1,D(()=>{C()}),b()}})},m=y(null),p=y(""),j=t=>{m.value=t,p.value=K(i.value[t].name)},P=()=>{if(p.value==""||i.value[m.value].name===p.value)return m.value=null,p.value="",!1;i.value[m.value].name=p.value,m.value=null,b()},b=()=>{re({value:i.value})},_=t=>{N.push({path:t})};return(t,e)=>{const w=O,T=G("EditPen"),q=W,Q=Z,f=ee,J=te,M=oe;return B((s(),d("div",ce,[c("div",pe,[c("span",de,l(u(U)),1)]),x.value?h("",!0):(s(),d("div",{class:"p-[18px] logistics-body",ref_key:"tableRef",ref:E,key:V.value},[(s(!0),d(S,null,H(i.value,(a,$)=>(s(),d("div",{key:a.key,class:"mb-[20px] bg-[#fff]"},[n(J,{shadow:"never"},{header:r(()=>[c("div",ve,[c("div",me,[_e,$===m.value?B((s(),I(w,{key:0,modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=o=>p.value=o),class:"w-[120px]",maxlength:"10",onBlur:P},null,8,["modelValue"])),[[L]]):(s(),d("span",fe,l(a.name),1)),n(q,{class:"text-color ml-[10px] cursor-pointer",onClick:o=>j($)},{default:r(()=>[n(T)]),_:2},1032,["onClick"])]),n(Q,{modelValue:a.status,"onUpdate:modelValue":o=>a.status=o,"active-value":"1","inactive-value":"2",onChange:o=>b(a)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),default:r(()=>[c("div",ye,[c("span",ke,l(u(v)(a.key)),1),c("div",null,[a.key==="local_delivery"?(s(),d(S,{key:0},[n(f,{type:"primary",link:"",onClick:e[1]||(e[1]=o=>_("/shop/order/delivery/staff"))},{default:r(()=>[k(l(u(v)("deliveryStaff")),1)]),_:1}),n(f,{type:"primary",link:"",onClick:e[2]||(e[2]=o=>_("/shop/order/delivery/local"))},{default:r(()=>[k(l(u(v)("localConfig")),1)]),_:1})],64)):h("",!0),a.key==="express"?(s(),d(S,{key:1},[n(f,{type:"primary",link:"",onClick:e[3]||(e[3]=o=>_("/shop/order/delivery/company"))},{default:r(()=>[k(l(u(v)("deliveryCompany")),1)]),_:1}),n(f,{type:"primary",link:"",onClick:e[4]||(e[4]=o=>_("/shop/order/shipping/template"))},{default:r(()=>[k(l(u(v)("deliveryTemplate")),1)]),_:1}),n(f,{type:"primary",link:"",onClick:e[5]||(e[5]=o=>_("/shop/order/delivery/search"))},{default:r(()=>[k(l(u(v)("deliverySearch")),1)]),_:1})],64)):h("",!0),a.key==="store"?(s(),I(f,{key:2,type:"primary",link:"",onClick:e[6]||(e[6]=o=>_("/shop/order/delivery/store"))},{default:r(()=>[k(l(u(v)("deliveryStore")),1)]),_:1})):h("",!0)])])]),_:2},1024)]))),128))]))])),[[M,x.value]])}}});const Ie=ie(xe,[["__scopeId","data-v-31e892b9"]]);export{Ie as default};
