import{d as le,x as re,f as oe,r as w,bX as B,l as se,q as l,H as k,aK as ie,co as de,cS as ne,h,c as T,e as r,w as d,u as t,R as U,s as N,a as u,i as p,t as n,B as ue,c9 as x,a0 as z,F as pe,T as _e,v as ve,Z as $,aR as me,a7 as ce,E as fe,L as ye,aw as ge,c2 as be,au as xe,av as we,K as Ve,M as he,V as ke,Y as Ee,p as Ce,g as Te}from"./index-99f00cf3.js";/* empty css                   *//* empty css                     *//* empty css                *//* empty css                 *//* empty css                       *//* empty css                 *//* empty css                          *//* empty css                    */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                *//* empty css                   *//* empty css                       */import{c as Ue,b as D,d as G,e as O,s as Re}from"./qqmap-011f3cfb.js";import{k as qe,l as De}from"./delivery-4012edce.js";import{c as Se}from"./shop_address-5839ec26.js";import{_ as Ae}from"./_plugin-vue_export-helper-c27b6911.js";const Me=E=>(Ce("data-v-46500c63"),E=E(),Te(),E),je={class:"main-container"},Ke={class:"flex flex-col"},Le={class:"flex"},Pe={key:0,class:"text-error leading-none"},Fe={class:"flex"},Ie={class:"w-[60px] mx-[5px]"},Be={class:"w-[60px] mx-[5px]"},Ne={class:"w-[60px] mx-[5px]"},ze={class:"w-[60px] mx-[5px]"},$e={class:"flex"},Ge={class:"w-[60px] mx-[5px]"},Oe={class:"w-[60px] mx-[5px]"},He={class:"w-[60px] mx-[5px]"},Xe={class:"relative w-full"},Ye=Me(()=>u("div",{id:"container",class:"w-full h-[520px]"},null,-1)),Ze={class:"absolute bg-white w-[270px] h-[500px] z-[1000] top-[10px] left-[10px] region-list"},Je=["onClick"],Qe={class:"pb-[18px]"},We={class:"pb-[18px]"},ea={class:"pb-[10px]"},aa={class:"p-[10px] text-center"},ta={class:"fixed-footer-wrap"},la={class:"fixed-footer"},ra=le({__name:"local",setup(E){const H=re(),S=oe(),V=w(!1),X=H.meta.title,A=w(),R=w(),_=w(null);(async()=>{await Se().then(({data:s})=>{_.value=s}).catch()})();const a=w({center:{lat:"",lng:""},delivery_type:["business"],fee_type:"region",base_dist:"",base_price:"",grad_dist:"",grad_price:"",weight_start:0,weight_unit:0,weight_price:0,area:[{area_name:"",area_type:"radius",start_price:0,delivery_price:0,area_json:{key:B()}}]}),M=se(()=>({delivery_address:[{validator:(s,e,i)=>{_.value||i(new Error(l("defaultDeliveryAddressEmpty"))),i()}}],delivery_type:[{validator:(s,e,i)=>{a.value.delivery_type.length||i(new Error(l("deliveryTypeRequire"))),i()}}],distance:[{validator:(s,e,i)=>{a.value.fee_type=="distance"&&(k.require(a.value.base_dist)&&i(new Error(l("baseDistRequire"))),k.require(a.value.base_price)&&i(new Error(l("basePriceRequire"))),k.require(a.value.grad_dist)&&i(new Error(l("gradDistRequire"))),k.require(a.value.grad_price)&&i(new Error(l("gradPriceRequire")))),i()},trigger:"blur"}],area_name:[{required:!0,message:l("areaNameRequire"),trigger:"blur"}],start_price:[{required:!0,message:l("startPriceRequire"),trigger:"blur"},{validator:(s,e,i)=>{parseInt(e)<0&&i(new Error(l("startPriceMin"))),i()},trigger:"blur"}],delivery_price:[{required:a.value.fee_type=="region",message:l("deliveryPriceRequire"),trigger:"blur"},{validator:(s,e,i)=>{parseInt(e)<0&&i(new Error(l("deliveryPriceMin"))),i()},trigger:"blur"}],area:[{validator:(s,e,i)=>{k.empty(a.value.area)&&i(new Error(l("areaPlaceholder"))),i()},trigger:"blur"}]}));qe().then(({data:s})=>{s&&Object.assign(a.value,s)}).catch(),ie(()=>{const s=document.createElement("script");de().then(e=>{s.type="text/javascript",s.src="https://map.qq.com/api/gljs?libraries=tools,service&v=1.exp&key="+e.data.key,document.body.appendChild(s)}),s.onload=()=>{setTimeout(()=>{Y()},500)}});let g;const j=w(!0),Y=()=>{const s=window.TMap,e=s.LatLng,i=new e(_.value?_.value.lat:39.980619,_.value?_.value.lng:116.321277);g=new s.Map("container",{center:i,zoom:14}),Ue(g),g.on("tilesloaded",()=>{j.value=!1}),a.value.area.forEach(b=>{b.area_type=="radius"?D(g,b.area_json):G(g,b.area_json)})},K=w(0),Z=()=>{a.value.area.push({area_name:"",area_type:"radius",start_price:0,delivery_price:0,area_json:{key:B()}});const s=a.value.area.length-1;D(g,a.value.area[s].area_json)},J=s=>{const e=a.value.area[s];O(e.area_json.key),a.value.area.splice(s,1)},Q=s=>{K.value=s;const e=a.value.area[s];Re(e.area_json.key)},W=s=>{const e=a.value.area[s];O(e.area_json.key),e.area_type=="radius"?D(g,e.area_json):G(g,e.area_json)};ne(()=>{g.destroy()});const ee=async s=>{V.value||!s||await s.validate(async e=>{var b;let i=!0;for(let f=0;f<((b=R.value)==null?void 0:b.length)&&(await R.value[f].validate(async q=>{i=q}),!!i);f++);i&&e&&(V.value=!0,a.value.center={lat:_.value.lat,lng:_.value.lng},await s.validate(async f=>{De(a.value).then(()=>{V.value=!1}).catch(()=>{V.value=!1})}))})},L=()=>{S.push({path:"/phone_shop/order/delivery"})};return(s,e)=>{const i=me,b=ce,f=fe,c=ye,q=ge,ae=be,C=xe,P=we,y=Ve,F=he,te=ke,I=Ee;return h(),T("div",je,[r(b,{class:"card !border-none mb-[15px]",shadow:"never"},{default:d(()=>[r(i,{content:t(X),icon:s.ArrowLeft,onBack:L},null,8,["content","icon"])]),_:1}),r(b,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[U((h(),N(F,{"label-width":"120px",ref_key:"formRef",ref:A,rules:t(M),model:a.value,class:"page-form"},{default:d(()=>[r(c,{label:t(l)("deliveryAddress"),prop:"delivery_address"},{default:d(()=>[u("div",Ke,[u("div",Le,[p(n(_.value?_.value.full_address:t(l)("defaultDeliveryAddressEmpty"))+" ",1),r(f,{type:"primary",onClick:e[0]||(e[0]=o=>t(S).push("/phone_shop/order/address")),link:"",class:"ml-[10px]"},{default:d(()=>[p(n(_.value?t(l)("update"):t(l)("toSetting")),1)]),_:1})]),a.value.center.lat&&_.value&&(a.value.center.lat!=_.value.lat||a.value.center.lng!=_.value.lng)?(h(),T("div",Pe,n(t(l)("deliveryAddressChange")),1)):ue("",!0)])]),_:1},8,["label"]),r(c,{label:t(l)("deliveryType"),prop:"delivery_type"},{default:d(()=>[r(ae,{modelValue:a.value.delivery_type,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.delivery_type=o)},{default:d(()=>[r(q,{label:"business"},{default:d(()=>[p(n(t(l)("business")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(c,{label:t(l)("feeType")},{default:d(()=>[r(P,{modelValue:a.value.fee_type,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.fee_type=o)},{default:d(()=>[r(C,{label:"region"},{default:d(()=>[p(n(t(l)("region")),1)]),_:1}),r(C,{label:"distance"},{default:d(()=>[p(n(t(l)("distance")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),U(r(c,{label:t(l)("feeSetting"),prop:"distance"},{default:d(()=>[u("div",Fe,[u("div",Ie,[r(y,{modelValue:a.value.base_dist,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.base_dist=o),modelModifiers:{number:!0},type:"text",onKeyup:e[4]||(e[4]=o=>t(x)(o))},null,8,["modelValue"])]),p(" "+n(t(l)("feeSettingTextOne"))+" ",1),u("div",Be,[r(y,{modelValue:a.value.base_price,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value.base_price=o),type:"text",onKeyup:e[6]||(e[6]=o=>t(x)(o))},null,8,["modelValue"])]),p(" "+n(t(l)("feeSettingTextTwo"))+" ",1),u("div",Ne,[r(y,{modelValue:a.value.grad_dist,"onUpdate:modelValue":e[7]||(e[7]=o=>a.value.grad_dist=o),modelModifiers:{number:!0},type:"text",onKeyup:e[8]||(e[8]=o=>t(x)(o))},null,8,["modelValue"])]),p(" "+n(t(l)("feeSettingTextThree"))+" ",1),u("div",ze,[r(y,{modelValue:a.value.grad_price,"onUpdate:modelValue":e[9]||(e[9]=o=>a.value.grad_price=o),type:"text",onKeyup:e[10]||(e[10]=o=>t(x)(o))},null,8,["modelValue"])]),p(" "+n(t(l)("priceUnit")),1)])]),_:1},8,["label"]),[[z,a.value.fee_type=="distance"]]),r(c,{label:t(l)("weightFee"),prop:""},{default:d(()=>[u("div",$e,[p(n(t(l)("weightFeeTextOne"))+" ",1),u("div",Ge,[r(y,{modelValue:a.value.weight_start,"onUpdate:modelValue":e[11]||(e[11]=o=>a.value.weight_start=o),type:"text",onKeyup:e[12]||(e[12]=o=>t(x)(o))},null,8,["modelValue"])]),p(" "+n(t(l)("weightFeeTextTwo"))+" ",1),u("div",Oe,[r(y,{modelValue:a.value.weight_unit,"onUpdate:modelValue":e[13]||(e[13]=o=>a.value.weight_unit=o),type:"text",onKeyup:e[14]||(e[14]=o=>t(x)(o))},null,8,["modelValue"])]),p(" "+n(t(l)("weightFeeTextThree"))+" ",1),u("div",He,[r(y,{modelValue:a.value.weight_price,"onUpdate:modelValue":e[15]||(e[15]=o=>a.value.weight_price=o),type:"text",onKeyup:e[16]||(e[16]=o=>t(x)(o))},null,8,["modelValue"])]),p(" "+n(t(l)("priceUnit")),1)])]),_:1},8,["label"]),U((h(),N(c,{prop:"area"},{default:d(()=>[u("div",Xe,[Ye,u("div",Ze,[r(te,null,{default:d(()=>[(h(!0),T(pe,null,_e(a.value.area,(o,m)=>(h(),T("div",{class:ve(["p-[10px] region-item pr-[50px] relative",{"!border-primary":m==K.value}]),key:m,onClick:v=>Q(m)},[r(F,{"label-width":"80px",model:o,rules:t(M),class:"page-form",ref_for:!0,ref_key:"areaFromRef",ref:R},{default:d(()=>[u("div",Qe,[r(c,{label:t(l)("areaName"),prop:"area_name"},{default:d(()=>[r(y,{modelValue:a.value.area[m].area_name,"onUpdate:modelValue":v=>a.value.area[m].area_name=v,modelModifiers:{trim:!0},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),u("div",We,[r(c,{label:t(l)("startPrice"),prop:"start_price"},{default:d(()=>[r(y,{modelValue:a.value.area[m].start_price,"onUpdate:modelValue":v=>a.value.area[m].start_price=v,type:"text",onKeyup:e[17]||(e[17]=v=>t(x)(v))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),U(u("div",ea,[r(c,{label:t(l)("deliveryPrice"),prop:"delivery_price"},{default:d(()=>[r(y,{modelValue:a.value.area[m].delivery_price,"onUpdate:modelValue":v=>a.value.area[m].delivery_price=v,type:"text",onKeyup:e[18]||(e[18]=v=>t(x)(v))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])],512),[[z,a.value.fee_type=="region"]]),r(c,{label:t(l)("areaType")},{default:d(()=>[r(P,{modelValue:a.value.area[m].area_type,"onUpdate:modelValue":v=>a.value.area[m].area_type=v,onClick:e[19]||(e[19]=$(()=>{},["stop"])),onChange:v=>W(m)},{default:d(()=>[r(C,{label:"radius",size:"large",class:"!mr-[10px]"},{default:d(()=>[p(n(t(l)("radius")),1)]),_:1}),r(C,{label:"custom",size:"large",class:"!mr-[0px]"},{default:d(()=>[p(n(t(l)("custom")),1)]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["label"])]),_:2},1032,["model","rules"]),r(f,{type:"primary",link:"",class:"absolute z-1 top-[10px] right-[10px]",onClick:$(v=>J(m),["stop"])},{default:d(()=>[p(n(t(l)("delete")),1)]),_:2},1032,["onClick"])],10,Je))),128)),u("div",aa,[r(f,{type:"default",plain:"",onClick:Z},{default:d(()=>[p(n(t(l)("addDeliveryArea")),1)]),_:1})])]),_:1})])])]),_:1})),[[I,j.value]])]),_:1},8,["rules","model"])),[[I,V.value]])]),_:1}),u("div",ta,[u("div",la,[r(f,{type:"primary",onClick:e[20]||(e[20]=o=>ee(A.value)),disabled:V.value},{default:d(()=>[p(n(t(l)("save")),1)]),_:1},8,["disabled"]),r(f,{onClick:e[21]||(e[21]=o=>L())},{default:d(()=>[p(n(t(l)("cancel")),1)]),_:1})])])])}}});const ka=Ae(ra,[["__scopeId","data-v-46500c63"]]);export{ka as default};
