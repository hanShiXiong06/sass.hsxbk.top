import{d as Z,n as b,r as C,h as _,c as x,e as d,w as i,a as l,i as y,t as r,u as a,q as t,s as w,A as q,B as S,R as z,U as g,J as F,K as J,E as K,ac as M,ad as R,X,Y,p as H,g as Q}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                        */import{_ as N}from"./goods_default-995568ac.js";import{B as W,D as ee,A as te}from"./goods-6b98b344.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";const se=f=>(H("data-v-1d82d5c3"),f=f(),Q(),f),ae={class:"flex items-center mb-[10px]"},le={class:"min-w-[70px] h-[70px] flex items-center justify-center"},ne=se(()=>l("div",{class:"image-slot"},[l("img",{class:"w-[70px] h-[70px]",src:N})],-1)),ie={key:1,class:"w-[70px] h-[70px]",src:N,fit:"contain"},de={class:"ml-2"},ce=["title"],re={class:"text-primary text-[12px]"},pe={key:0,class:"batch-operation-sku"},me={class:"dialog-footer"},ue=Z({__name:"goods-stock-edit-popup",emits:["load"],setup(f,{expose:T,emit:B}){const n=b({}),h=C(0),p=C(!1),s=b({loading:!0,data:[]}),m=b({value:""}),$=()=>{if(m.value.length==0){g({type:"warning",message:`${t("stockPlaceholder")}`});return}if(!E.number.test(m.value)){g({type:"warning",message:`${t("stockTips")}`});return}if(m.value<0){g({type:"warning",message:`${t("stockNotZeroTips")}`});return}s.data.forEach(e=>{e.stock=m.value})},D=()=>{s.loading=!0,te({goods_id:n.goods_id}).then(e=>{s.loading=!1,s.data=e.data}).catch(()=>{s.loading=!1})},G=e=>{Object.assign(n,e),I(),D(),p.value=!0},I=()=>{W({goods_id:n.goods_id}).then(e=>{h.value=e.data})},E={number:/^\d{0,10}$/},P=()=>{let e=!0;for(let o=0;o<s.data.length;o++){let u=s.data[o];if(u.stock.length==0){e=!1,g({type:"warning",message:`${t("stockPlaceholder")}`});break}else if(isNaN(u.stock)||!E.number.test(u.stock)){e=!1,g({type:"warning",message:`${t("stockTips")}`});break}else if(u.stock<0){e=!1,g({type:"warning",message:`${t("stockNotZeroTips")}`});break}}return e},U=()=>{if(P()){const e=[];s.data.forEach(o=>{e.push({sku_id:o.sku_id,stock:o.stock})}),ee({goods_id:n.goods_id,sku_list:e}).then(o=>{B("load"),p.value=!1})}};return T({showDialog:p,show:G}),(e,o)=>{const u=F,V=J,k=K,v=M,A=R,L=X,O=Y;return _(),x("div",null,[d(L,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=c=>p.value=c),title:a(t)("editStockPopupTitle"),width:"600px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:i(()=>[l("span",me,[d(k,{onClick:o[1]||(o[1]=c=>p.value=!1)},{default:i(()=>[y(r(a(t)("cancel")),1)]),_:1}),d(k,{type:"primary",onClick:U},{default:i(()=>[y(r(a(t)("confirm")),1)]),_:1})])]),default:i(()=>[l("div",ae,[l("div",le,[n.goods_cover_thumb_small?(_(),w(u,{key:0,class:"w-[70px] h-[70px]",src:a(q)(n.goods_cover_thumb_small),fit:"contain"},{error:i(()=>[ne]),_:1},8,["src"])):(_(),x("img",ie))]),l("div",de,[l("span",{title:n.goods_name,class:"multi-hidden"},r(n.goods_name),9,ce),l("span",re,r(n.goods_type_name),1)])]),h.value==0&&s.data.length>1?(_(),x("div",pe,[l("label",null,r(a(t)("batchOperationSku")),1),d(V,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=c=>m.value=c),clearable:"",placeholder:a(t)("stock"),class:"set-input",maxlength:"8",autofocus:!0},null,8,["modelValue","placeholder"]),d(k,{type:"primary",onClick:$},{default:i(()=>[y(r(a(t)("confirm")),1)]),_:1})])):S("",!0),z((_(),w(A,{data:s.data,size:"large","max-height":"400"},{empty:i(()=>[l("span",null,r(s.loading?"":a(t)("emptyData")),1)]),default:i(()=>[s.data.length>1?(_(),w(v,{key:0,prop:"sku_name",label:a(t)("skuName"),"min-width":"120"},null,8,["label"])):S("",!0),d(v,{prop:"price",label:a(t)("price"),"min-width":"120"},null,8,["label"]),d(v,{prop:"stock",label:a(t)("stock"),"min-width":"120"},{default:i(({row:c})=>[d(V,{modelValue:c.stock,"onUpdate:modelValue":j=>c.stock=j,clearable:"",placeholder:"0",maxlength:"8",disabled:h.value>0},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"])]),_:1},8,["data"])),[[O,s.loading]])]),_:1},8,["modelValue","title"])])}}});const De=oe(ue,[["__scopeId","data-v-1d82d5c3"]]);export{De as default};
