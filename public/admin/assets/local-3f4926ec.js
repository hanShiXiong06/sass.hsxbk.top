import{d as le,x as re,f as oe,r as w,bX as N,l as se,q as t,H as C,aK as ie,co as de,cS as ue,h as k,c as q,e as r,w as d,u as l,R as T,s as $,i as p,t as u,a as n,B as ne,c9 as b,a0 as z,F as pe,T as me,v as _e,Z as G,aJ as ve,ap as ce,aR as fe,a7 as ye,aw as ge,c2 as be,L as xe,E as we,au as Ve,av as he,K as ke,M as Ee,V as Ce,Y as Me,p as Re,g as qe}from"./index-99f00cf3.js";/* empty css                   *//* empty css                     *//* empty css                *//* empty css                 *//* empty css                       *//* empty css                 *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                          *//* empty css                    *//* empty css                *//* empty css                   *//* empty css                       */import{c as Te,b as D,d as O,e as H,s as Ue}from"./qqmap-011f3cfb.js";import{k as De,l as Se}from"./delivery-8329da8a.js";import{c as Ae}from"./shop_address-46c67db7.js";import{_ as je}from"./_plugin-vue_export-helper-c27b6911.js";const Ke=M=>(Re("data-v-38f98d9f"),M=M(),qe(),M),Le={class:"main-container"},Pe={class:"flex flex-col"},Fe={class:"flex"},Ie={key:0,class:"text-error leading-none"},Be={class:"flex"},Ne={class:"w-[60px] mx-[5px]"},$e={class:"w-[60px] mx-[5px]"},ze={class:"w-[60px] mx-[5px]"},Ge={class:"w-[60px] mx-[5px]"},Oe={class:"flex"},He={class:"w-[60px] mx-[5px]"},Je={class:"w-[60px] mx-[5px]"},We={class:"w-[60px] mx-[5px]"},Xe={class:"relative w-full"},Ye=Ke(()=>n("div",{id:"container",class:"w-full h-[520px]"},null,-1)),Ze={class:"absolute bg-white w-[270px] h-[500px] top-[10px] left-[10px] region-list"},Qe=["onClick"],ea={class:"pb-[18px]"},aa={class:"pb-[18px]"},ta={class:"pb-[10px]"},la={class:"p-[10px] text-center"},ra={class:"fixed-footer-wrap"},oa={class:"fixed-footer"},sa=le({__name:"local",setup(M){const J=re(),S=oe(),x=w(!0),W=J.meta.title,A=w(),U=w(),m=w(null);(async()=>{await Ae().then(({data:s})=>{m.value=s}).catch()})();const a=w({center:{lat:"",lng:""},delivery_type:["business"],fee_type:"region",time_is_open:1,time_type:0,time_week:[],base_dist:"",base_price:"",grad_dist:"",grad_price:"",weight_start:0,weight_unit:0,weight_price:0,area:[{area_name:"",area_type:"radius",start_price:0,delivery_price:0,area_json:{key:N()}}]}),j=se(()=>({time_week:[{required:!0,message:t("timeWeekRequire"),trigger:"change"}],delivery_address:[{validator:(s,e,i)=>{m.value||i(new Error(t("defaultDeliveryAddressEmpty"))),i()}}],delivery_type:[{validator:(s,e,i)=>{a.value.delivery_type.length||i(new Error(t("deliveryTypeRequire"))),i()}}],distance:[{validator:(s,e,i)=>{a.value.fee_type=="distance"&&(C.require(a.value.base_dist)&&i(new Error(t("baseDistRequire"))),C.require(a.value.base_price)&&i(new Error(t("basePriceRequire"))),C.require(a.value.grad_dist)&&i(new Error(t("gradDistRequire"))),C.require(a.value.grad_price)&&i(new Error(t("gradPriceRequire")))),i()},trigger:"blur"}],area_name:[{required:!0,message:t("areaNameRequire"),trigger:"blur"}],start_price:[{required:!0,message:t("startPriceRequire"),trigger:"blur"},{validator:(s,e,i)=>{parseInt(e)<0&&i(new Error(t("startPriceMin"))),i()},trigger:"blur"}],delivery_price:[{required:a.value.fee_type=="region",message:t("deliveryPriceRequire"),trigger:"blur"},{validator:(s,e,i)=>{parseInt(e)<0&&i(new Error(t("deliveryPriceMin"))),i()},trigger:"blur"}],area:[{validator:(s,e,i)=>{C.empty(a.value.area)&&i(new Error(t("areaPlaceholder"))),i()},trigger:"blur"}]}));De().then(({data:s})=>{x.value=!1,s&&Object.assign(a.value,s),a.value.time_week=a.value.time_week?a.value.time_week.split(","):[]}).catch(()=>{x.value=!1}),ie(()=>{const s=document.createElement("script");de().then(e=>{s.type="text/javascript",s.src="https://map.qq.com/api/gljs?libraries=tools,service&v=1.exp&key="+e.data.key,document.body.appendChild(s)}),s.onload=()=>{setTimeout(()=>{X()},500)}});let y;const K=w(!0),X=()=>{const s=window.TMap,e=s.LatLng,i=new e(m.value?m.value.lat:39.980619,m.value?m.value.lng:116.321277);y=new s.Map("container",{center:i,zoom:14}),Te(y),y.on("tilesloaded",()=>{K.value=!1}),a.value.area.forEach(g=>{g.area_type=="radius"?D(y,g.area_json):O(y,g.area_json)})},L=w(0),Y=()=>{a.value.area.push({area_name:"",area_type:"radius",start_price:0,delivery_price:0,area_json:{key:N()}});const s=a.value.area.length-1;D(y,a.value.area[s].area_json)},Z=s=>{const e=a.value.area[s];H(e.area_json.key),a.value.area.splice(s,1)},Q=s=>{L.value=s;const e=a.value.area[s];Ue(e.area_json.key)},ee=s=>{const e=a.value.area[s];H(e.area_json.key),e.area_type=="radius"?D(y,e.area_json):O(y,e.area_json)};ue(()=>{y.destroy()});const ae=async s=>{x.value||!s||await s.validate(async e=>{var g;let i=!0;for(let V=0;V<((g=U.value)==null?void 0:g.length)&&(await U.value[V].validate(async c=>{i=c}),!!i);V++);i&&e&&(x.value=!0,a.value.center={lat:m.value.lat,lng:m.value.lng},await s.validate(async V=>{const h=ve(ce(a.value));h.time_week=h.time_week.toString(),Se(h).then(()=>{x.value=!1}).catch(()=>{x.value=!1})}))})},P=()=>{S.push({path:"/shop/order/delivery"})};return(s,e)=>{const i=fe,g=ye,V=ge,h=be,c=xe,E=we,R=Ve,F=he,f=ke,I=Ee,te=Ce,B=Me;return k(),q("div",Le,[r(g,{class:"card !border-none mb-[15px]",shadow:"never"},{default:d(()=>[r(i,{content:l(W),icon:s.ArrowLeft,onBack:P},null,8,["content","icon"])]),_:1}),r(g,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[T((k(),$(I,{"label-width":"120px",ref_key:"formRef",ref:A,rules:l(j),model:a.value,class:"page-form"},{default:d(()=>[r(c,{label:l(t)("deliveryType"),prop:"delivery_type"},{default:d(()=>[r(h,{modelValue:a.value.delivery_type,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.delivery_type=o)},{default:d(()=>[r(V,{label:"business"},{default:d(()=>[p(u(l(t)("business")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(c,{label:l(t)("deliveryAddress"),prop:"delivery_address"},{default:d(()=>[n("div",Pe,[n("div",Fe,[p(u(m.value?m.value.full_address:l(t)("defaultDeliveryAddressEmpty"))+" ",1),r(E,{type:"primary",onClick:e[1]||(e[1]=o=>l(S).push("/shop/order/address")),link:"",class:"ml-[10px]"},{default:d(()=>[p(u(m.value?l(t)("update"):l(t)("toSetting")),1)]),_:1})]),a.value.center.lat&&m.value&&(a.value.center.lat!=m.value.lat||a.value.center.lng!=m.value.lng)?(k(),q("div",Ie,u(l(t)("deliveryAddressChange")),1)):ne("",!0)])]),_:1},8,["label"]),r(c,{label:l(t)("feeType")},{default:d(()=>[r(F,{modelValue:a.value.fee_type,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.fee_type=o)},{default:d(()=>[r(R,{label:"region"},{default:d(()=>[p(u(l(t)("region")),1)]),_:1}),r(R,{label:"distance"},{default:d(()=>[p(u(l(t)("distance")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),T(r(c,{label:l(t)("feeSetting"),prop:"distance"},{default:d(()=>[n("div",Be,[n("div",Ne,[r(f,{modelValue:a.value.base_dist,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.base_dist=o),modelModifiers:{number:!0},type:"text",onKeyup:e[4]||(e[4]=o=>l(b)(o))},null,8,["modelValue"])]),p(" "+u(l(t)("feeSettingTextOne"))+" ",1),n("div",$e,[r(f,{modelValue:a.value.base_price,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value.base_price=o),modelModifiers:{trim:!0},type:"text",onKeyup:e[6]||(e[6]=o=>l(b)(o))},null,8,["modelValue"])]),p(" "+u(l(t)("feeSettingTextTwo"))+" ",1),n("div",ze,[r(f,{modelValue:a.value.grad_dist,"onUpdate:modelValue":e[7]||(e[7]=o=>a.value.grad_dist=o),modelModifiers:{number:!0},type:"text",onKeyup:e[8]||(e[8]=o=>l(b)(o))},null,8,["modelValue"])]),p(" "+u(l(t)("feeSettingTextThree"))+" ",1),n("div",Ge,[r(f,{modelValue:a.value.grad_price,"onUpdate:modelValue":e[9]||(e[9]=o=>a.value.grad_price=o),modelModifiers:{trim:!0},type:"text",onKeyup:e[10]||(e[10]=o=>l(b)(o))},null,8,["modelValue"])]),p(" "+u(l(t)("priceUnit")),1)])]),_:1},8,["label"]),[[z,a.value.fee_type=="distance"]]),r(c,{label:l(t)("weightFee"),prop:""},{default:d(()=>[n("div",Oe,[p(u(l(t)("weightFeeTextOne"))+" ",1),n("div",He,[r(f,{modelValue:a.value.weight_start,"onUpdate:modelValue":e[11]||(e[11]=o=>a.value.weight_start=o),modelModifiers:{trim:!0},type:"text",onKeyup:e[12]||(e[12]=o=>l(b)(o))},null,8,["modelValue"])]),p(" "+u(l(t)("weightFeeTextTwo"))+" ",1),n("div",Je,[r(f,{modelValue:a.value.weight_unit,"onUpdate:modelValue":e[13]||(e[13]=o=>a.value.weight_unit=o),modelModifiers:{trim:!0},type:"text",onKeyup:e[14]||(e[14]=o=>l(b)(o))},null,8,["modelValue"])]),p(" "+u(l(t)("weightFeeTextThree"))+" ",1),n("div",We,[r(f,{modelValue:a.value.weight_price,"onUpdate:modelValue":e[15]||(e[15]=o=>a.value.weight_price=o),modelModifiers:{trim:!0},type:"text",onKeyup:e[16]||(e[16]=o=>l(b)(o))},null,8,["modelValue"])]),p(" "+u(l(t)("priceUnit")),1)])]),_:1},8,["label"]),T((k(),$(c,{prop:"area"},{default:d(()=>[n("div",Xe,[Ye,n("div",Ze,[r(te,null,{default:d(()=>[(k(!0),q(pe,null,me(a.value.area,(o,v)=>(k(),q("div",{class:_e(["p-[10px] region-item pr-[50px] relative",{"!border-primary":v==L.value}]),key:v,onClick:_=>Q(v)},[r(I,{"label-width":"80px",model:o,rules:l(j),class:"page-form",ref_for:!0,ref_key:"areaFromRef",ref:U},{default:d(()=>[n("div",ea,[r(c,{label:l(t)("areaName"),prop:"area_name"},{default:d(()=>[r(f,{modelValue:a.value.area[v].area_name,"onUpdate:modelValue":_=>a.value.area[v].area_name=_,modelModifiers:{trim:!0},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),n("div",aa,[r(c,{label:l(t)("startPrice"),prop:"start_price"},{default:d(()=>[r(f,{modelValue:a.value.area[v].start_price,"onUpdate:modelValue":_=>a.value.area[v].start_price=_,modelModifiers:{trim:!0},type:"text",onKeyup:e[17]||(e[17]=_=>l(b)(_))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),T(n("div",ta,[r(c,{label:l(t)("deliveryPrice"),prop:"delivery_price"},{default:d(()=>[r(f,{modelValue:a.value.area[v].delivery_price,"onUpdate:modelValue":_=>a.value.area[v].delivery_price=_,modelModifiers:{trim:!0},type:"text",onKeyup:e[18]||(e[18]=_=>l(b)(_))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])],512),[[z,a.value.fee_type=="region"]]),r(c,{label:l(t)("areaType")},{default:d(()=>[r(F,{modelValue:a.value.area[v].area_type,"onUpdate:modelValue":_=>a.value.area[v].area_type=_,onClick:e[19]||(e[19]=G(()=>{},["stop"])),onChange:_=>ee(v)},{default:d(()=>[r(R,{label:"radius",size:"large",class:"!mr-[10px]"},{default:d(()=>[p(u(l(t)("radius")),1)]),_:1}),r(R,{label:"custom",size:"large",class:"!mr-[0px]"},{default:d(()=>[p(u(l(t)("custom")),1)]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["label"])]),_:2},1032,["model","rules"]),r(E,{type:"primary",link:"",class:"absolute z-1 top-[10px] right-[10px]",onClick:G(_=>Z(v),["stop"])},{default:d(()=>[p(u(l(t)("delete")),1)]),_:2},1032,["onClick"])],10,Qe))),128)),n("div",la,[r(E,{type:"default",plain:"",onClick:Y},{default:d(()=>[p(u(l(t)("addDeliveryArea")),1)]),_:1})])]),_:1})])])]),_:1})),[[B,K.value]])]),_:1},8,["rules","model"])),[[B,x.value]])]),_:1}),n("div",ra,[n("div",oa,[r(E,{type:"primary",onClick:e[20]||(e[20]=o=>ae(A.value)),disabled:x.value},{default:d(()=>[p(u(l(t)("save")),1)]),_:1},8,["disabled"]),r(E,{onClick:e[21]||(e[21]=o=>P())},{default:d(()=>[p(u(l(t)("cancel")),1)]),_:1})])])])}}});const Ca=je(sa,[["__scopeId","data-v-38f98d9f"]]);export{Ca as default};
