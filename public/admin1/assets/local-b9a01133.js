import{d as le,x as re,f as oe,r as x,bW as z,l as se,q as l,H as k,aQ as ie,cm as de,cM as ne,h,c as E,a as n,t as u,u as t,e as o,w as d,P as U,s as B,i as p,B as ue,c6 as g,a6 as N,F as pe,Q as _e,v as ve,V as $,E as ce,K as me,aB as fe,c7 as ye,az as ge,aA as xe,J as be,L as we,S as Ve,a0 as he,U as ke,p as Ce,g as Ee}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                     *//* empty css                *//* empty css                 *//* empty css                       *//* empty css                 *//* empty css                          *//* empty css                    */import"./el-form-item-4ed993c7.js";/* empty css                  */import{c as Ue,b as q,d as G,e as O,s as Te}from"./qqmap-011f3cfb.js";import{j as qe,k as Re}from"./delivery-9c7fac72.js";import{c as De}from"./shop_address-a51b7e52.js";import{_ as je}from"./_plugin-vue_export-helper-c27b6911.js";const R=C=>(Ce("data-v-4b33e7a6"),C=C(),Ee(),C),Se={class:"main-container"},Ae={class:"detail-head"},Me=R(()=>n("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),Pe={class:"ml-[1px]"},Fe=R(()=>n("span",{class:"adorn"},"|",-1)),Ke={class:"right"},Le={class:"flex flex-col"},Ie={class:"flex"},ze={key:0,class:"text-error leading-none"},Be={class:"flex"},Ne={class:"w-[60px] mx-[5px]"},$e={class:"w-[60px] mx-[5px]"},Ge={class:"w-[60px] mx-[5px]"},Oe={class:"w-[60px] mx-[5px]"},Qe={class:"flex"},He={class:"w-[60px] mx-[5px]"},Je={class:"w-[60px] mx-[5px]"},We={class:"w-[60px] mx-[5px]"},Xe={class:"relative w-full"},Ye=R(()=>n("div",{id:"container",class:"w-full h-[520px]"},null,-1)),Ze={class:"absolute bg-white w-[270px] h-[500px] z-[1000] top-[10px] left-[10px] region-list"},ea=["onClick"],aa={class:"pb-[18px]"},ta={class:"pb-[18px]"},la={class:"pb-[10px]"},ra={class:"p-[10px] text-center"},oa={class:"fixed-footer-wrap"},sa={class:"fixed-footer"},ia=le({__name:"local",setup(C){const Q=re(),D=oe(),b=x(!1),H=Q.meta.title,j=x(),T=x(),v=x(null);(async()=>{await De().then(({data:s})=>{v.value=s}).catch()})();const a=x({center:{lat:"",lng:""},delivery_type:["business"],fee_type:"region",base_dist:"",base_price:"",grad_dist:"",grad_price:"",weight_start:0,weight_unit:0,weight_price:0,area:[{area_name:"",area_type:"radius",start_price:0,delivery_price:0,area_json:{key:z()}}]}),S=se(()=>({delivery_address:[{validator:(s,e,i)=>{v.value||i(new Error(l("defaultDeliveryAddressEmpty"))),i()}}],delivery_type:[{validator:(s,e,i)=>{a.value.delivery_type.length||i(new Error(l("deliveryTypeRequire"))),i()}}],distance:[{validator:(s,e,i)=>{a.value.fee_type=="distance"&&(k.require(a.value.base_dist)&&i(new Error(l("baseDistRequire"))),k.require(a.value.base_price)&&i(new Error(l("basePriceRequire"))),k.require(a.value.grad_dist)&&i(new Error(l("gradDistRequire"))),k.require(a.value.grad_price)&&i(new Error(l("gradPriceRequire")))),i()},trigger:"blur"}],area_name:[{required:!0,message:l("areaNameRequire"),trigger:"blur"}],start_price:[{required:!0,message:l("startPriceRequire"),trigger:"blur"},{validator:(s,e,i)=>{parseInt(e)<0&&i(new Error(l("startPriceMin"))),i()},trigger:"blur"}],delivery_price:[{required:a.value.fee_type=="region",message:l("deliveryPriceRequire"),trigger:"blur"},{validator:(s,e,i)=>{parseInt(e)<0&&i(new Error(l("deliveryPriceMin"))),i()},trigger:"blur"}],area:[{validator:(s,e,i)=>{k.empty(a.value.area)&&i(new Error(l("areaPlaceholder"))),i()},trigger:"blur"}]}));qe().then(({data:s})=>{s&&Object.assign(a.value,s)}).catch(),ie(()=>{const s=document.createElement("script");de().then(e=>{s.type="text/javascript",s.src="https://map.qq.com/api/gljs?libraries=tools,service&v=1.exp&key="+e.data.key,document.body.appendChild(s)}),s.onload=()=>{setTimeout(()=>{J()},500)}});let y;const A=x(!0),J=()=>{const s=window.TMap,e=s.LatLng,i=new e(v.value?v.value.lat:39.980619,v.value?v.value.lng:116.321277);y=new s.Map("container",{center:i,zoom:14}),Ue(y),y.on("tilesloaded",()=>{A.value=!1}),a.value.area.forEach(_=>{_.area_type=="radius"?q(y,_.area_json):G(y,_.area_json)})},M=x(0),W=()=>{a.value.area.push({area_name:"",area_type:"radius",start_price:0,delivery_price:0,area_json:{key:z()}});const s=a.value.area.length-1;q(y,a.value.area[s].area_json)},X=s=>{const e=a.value.area[s];O(e.area_json.key),a.value.area.splice(s,1)},Y=s=>{M.value=s;const e=a.value.area[s];Te(e.area_json.key)},Z=s=>{const e=a.value.area[s];O(e.area_json.key),e.area_type=="radius"?q(y,e.area_json):G(y,e.area_json)};ne(()=>{y.destroy()});const ee=async s=>{b.value||!s||await s.validate(async e=>{var _;let i=!0;for(let w=0;w<((_=T.value)==null?void 0:_.length)&&(await T.value[w].validate(async V=>{i=V}),!!i);w++);i&&e&&(b.value=!0,a.value.center={lat:v.value.lat,lng:v.value.lng},await s.validate(async w=>{Re(a.value).then(()=>{b.value=!1}).catch(()=>{b.value=!1})}))})},P=()=>{D.push({path:"/shop/order/delivery"})};return(s,e)=>{const i=ce,_=me,w=fe,F=ye,V=ge,K=xe,f=be,L=we,ae=Ve,te=he,I=ke;return h(),E("div",Se,[n("div",Ae,[n("div",{class:"left",onClick:P},[Me,n("span",Pe,u(t(l)("returnToPreviousPage")),1)]),Fe,n("span",Ke,u(t(H)),1)]),o(te,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[U((h(),B(L,{"label-width":"120px",ref_key:"formRef",ref:j,rules:t(S),model:a.value,class:"page-form"},{default:d(()=>[o(_,{label:t(l)("deliveryAddress"),prop:"delivery_address"},{default:d(()=>[n("div",Le,[n("div",Ie,[p(u(v.value?v.value.full_address:t(l)("defaultDeliveryAddressEmpty"))+" ",1),o(i,{type:"primary",onClick:e[0]||(e[0]=r=>t(D).push("/shop/order/address")),link:"",class:"ml-[10px]"},{default:d(()=>[p(u(v.value?t(l)("update"):t(l)("toSetting")),1)]),_:1})]),a.value.center.lat&&v.value&&(a.value.center.lat!=v.value.lat||a.value.center.lng!=v.value.lng)?(h(),E("div",ze,u(t(l)("deliveryAddressChange")),1)):ue("",!0)])]),_:1},8,["label"]),o(_,{label:t(l)("deliveryType"),prop:"delivery_type"},{default:d(()=>[o(F,{modelValue:a.value.delivery_type,"onUpdate:modelValue":e[1]||(e[1]=r=>a.value.delivery_type=r)},{default:d(()=>[o(w,{label:"business"},{default:d(()=>[p(u(t(l)("business")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(_,{label:t(l)("feeType")},{default:d(()=>[o(K,{modelValue:a.value.fee_type,"onUpdate:modelValue":e[2]||(e[2]=r=>a.value.fee_type=r)},{default:d(()=>[o(V,{label:"region"},{default:d(()=>[p(u(t(l)("region")),1)]),_:1}),o(V,{label:"distance"},{default:d(()=>[p(u(t(l)("distance")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),U(o(_,{label:t(l)("feeSetting"),prop:"distance"},{default:d(()=>[n("div",Be,[n("div",Ne,[o(f,{modelValue:a.value.base_dist,"onUpdate:modelValue":e[3]||(e[3]=r=>a.value.base_dist=r),modelModifiers:{number:!0},type:"text",onKeyup:e[4]||(e[4]=r=>t(g)(r))},null,8,["modelValue"])]),p(" "+u(t(l)("feeSettingTextOne"))+" ",1),n("div",$e,[o(f,{modelValue:a.value.base_price,"onUpdate:modelValue":e[5]||(e[5]=r=>a.value.base_price=r),type:"text",onKeyup:e[6]||(e[6]=r=>t(g)(r))},null,8,["modelValue"])]),p(" "+u(t(l)("feeSettingTextTwo"))+" ",1),n("div",Ge,[o(f,{modelValue:a.value.grad_dist,"onUpdate:modelValue":e[7]||(e[7]=r=>a.value.grad_dist=r),modelModifiers:{number:!0},type:"text",onKeyup:e[8]||(e[8]=r=>t(g)(r))},null,8,["modelValue"])]),p(" "+u(t(l)("feeSettingTextThree"))+" ",1),n("div",Oe,[o(f,{modelValue:a.value.grad_price,"onUpdate:modelValue":e[9]||(e[9]=r=>a.value.grad_price=r),type:"text",onKeyup:e[10]||(e[10]=r=>t(g)(r))},null,8,["modelValue"])]),p(" "+u(t(l)("priceUnit")),1)])]),_:1},8,["label"]),[[N,a.value.fee_type=="distance"]]),o(_,{label:t(l)("weightFee"),prop:""},{default:d(()=>[n("div",Qe,[p(u(t(l)("weightFeeTextOne"))+" ",1),n("div",He,[o(f,{modelValue:a.value.weight_start,"onUpdate:modelValue":e[11]||(e[11]=r=>a.value.weight_start=r),type:"text",onKeyup:e[12]||(e[12]=r=>t(g)(r))},null,8,["modelValue"])]),p(" "+u(t(l)("weightFeeTextTwo"))+" ",1),n("div",Je,[o(f,{modelValue:a.value.weight_unit,"onUpdate:modelValue":e[13]||(e[13]=r=>a.value.weight_unit=r),type:"text",onKeyup:e[14]||(e[14]=r=>t(g)(r))},null,8,["modelValue"])]),p(" "+u(t(l)("weightFeeTextThree"))+" ",1),n("div",We,[o(f,{modelValue:a.value.weight_price,"onUpdate:modelValue":e[15]||(e[15]=r=>a.value.weight_price=r),type:"text",onKeyup:e[16]||(e[16]=r=>t(g)(r))},null,8,["modelValue"])]),p(" "+u(t(l)("priceUnit")),1)])]),_:1},8,["label"]),U((h(),B(_,{prop:"area"},{default:d(()=>[n("div",Xe,[Ye,n("div",Ze,[o(ae,null,{default:d(()=>[(h(!0),E(pe,null,_e(a.value.area,(r,m)=>(h(),E("div",{class:ve(["p-[10px] region-item pr-[50px] relative",{"!border-primary":m==M.value}]),key:m,onClick:c=>Y(m)},[o(L,{"label-width":"80px",model:r,rules:t(S),class:"page-form",ref_for:!0,ref_key:"areaFromRef",ref:T},{default:d(()=>[n("div",aa,[o(_,{label:t(l)("areaName"),prop:"area_name"},{default:d(()=>[o(f,{modelValue:a.value.area[m].area_name,"onUpdate:modelValue":c=>a.value.area[m].area_name=c,modelModifiers:{trim:!0},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),n("div",ta,[o(_,{label:t(l)("startPrice"),prop:"start_price"},{default:d(()=>[o(f,{modelValue:a.value.area[m].start_price,"onUpdate:modelValue":c=>a.value.area[m].start_price=c,type:"text",onKeyup:e[17]||(e[17]=c=>t(g)(c))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),U(n("div",la,[o(_,{label:t(l)("deliveryPrice"),prop:"delivery_price"},{default:d(()=>[o(f,{modelValue:a.value.area[m].delivery_price,"onUpdate:modelValue":c=>a.value.area[m].delivery_price=c,type:"text",onKeyup:e[18]||(e[18]=c=>t(g)(c))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])],512),[[N,a.value.fee_type=="region"]]),o(_,{label:t(l)("areaType")},{default:d(()=>[o(K,{modelValue:a.value.area[m].area_type,"onUpdate:modelValue":c=>a.value.area[m].area_type=c,onClick:e[19]||(e[19]=$(()=>{},["stop"])),onChange:c=>Z(m)},{default:d(()=>[o(V,{label:"radius",size:"large",class:"!mr-[10px]"},{default:d(()=>[p(u(t(l)("radius")),1)]),_:1}),o(V,{label:"custom",size:"large",class:"!mr-[0px]"},{default:d(()=>[p(u(t(l)("custom")),1)]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["label"])]),_:2},1032,["model","rules"]),o(i,{type:"primary",link:"",class:"absolute z-1 top-[10px] right-[10px]",onClick:$(c=>X(m),["stop"])},{default:d(()=>[p(u(t(l)("delete")),1)]),_:2},1032,["onClick"])],10,ea))),128)),n("div",ra,[o(i,{type:"default",plain:"",onClick:W},{default:d(()=>[p(u(t(l)("addDeliveryArea")),1)]),_:1})])]),_:1})])])]),_:1})),[[I,A.value]])]),_:1},8,["rules","model"])),[[I,b.value]])]),_:1}),n("div",oa,[n("div",sa,[o(i,{type:"primary",onClick:e[20]||(e[20]=r=>ee(j.value)),disabled:b.value},{default:d(()=>[p(u(t(l)("save")),1)]),_:1},8,["disabled"]),o(i,{onClick:e[21]||(e[21]=r=>P())},{default:d(()=>[p(u(t(l)("cancel")),1)]),_:1})])])])}}});const Ca=je(ia,[["__scopeId","data-v-4b33e7a6"]]);export{Ca as default};
