import{d as Z,x as ee,f as le,r as q,n as S,aJ as te,cn as ae,l as oe,q as s,h as u,c as f,a as p,u as n,t as _,e as o,w as d,F as k,T as x,s as M,i as L,cO as se,cK as D,cP as ne,Q as ie,cQ as de,U as N,K as re,L as ce,ab as ue,aC as pe,E as me,M as _e,a7 as fe,p as ve,g as be}from"./index-5a756a51.js";/* empty css                *//* empty css                */import{_ as ge}from"./index.vue_vue_type_script_setup_true_lang-05cc8415.js";/* empty css                  */import he from"./index-92c2e799.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";import{M as ye,N as Ve,O as we}from"./tourism-df1c9cc5.js";import{j as ke}from"./poster-059b46b8.js";import{_ as xe}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";/* empty css                  *//* empty css                   */import"./attachment-a9811edd.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";/* empty css                        *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-75313763.js";import"./sortable.esm-be94e56d.js";const T=y=>(ve("data-v-476d27be"),y=y(),be(),y),Me={class:"main-container"},Pe={class:"detail-head"},Ce=T(()=>p("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),Se={class:"ml-[1px]"},Le=T(()=>p("span",{class:"adorn"},"|",-1)),Te={key:0,class:"right"},Ue={key:1,class:"right"},Ee={class:"ml-[10px]"},Fe=T(()=>p("div",{id:"TxMap",class:"w-[800px] h-[500px]"},null,-1)),Ie={class:"fixed-footer-wrap"},Ae={class:"fixed-footer"},Oe=Z({__name:"edit_scenic",setup(y){const B=ee(),U=le(),V=parseInt(B.query.id),w=q(!1),v=S({province:[],city:[],district:[]});(()=>{se(1).then(a=>{v.province=a.data})})();const E=a=>{Object.keys(a).length==0?a.id=e.province_id:(e.province_id=a.id,e.province_name=a.name),D(a.id).then(l=>{v.city=l.data})},F=a=>{Object.keys(a).length==0?a.id=e.city_id:(e.city_id=a.id,e.city_name=a.name),D(a.id).then(l=>{v.district=l.data})},G=a=>{e.district_id=a.id,e.district_name=a.name},R=()=>{e.province_id&&e.city_id&&e.district_id&&e.address&&ne({address:e.province_name+e.city_name+e.district_name+e.address}).then(a=>{e.latitude=a.data.result.location.lat,e.longitude=a.data.result.location.lng})};let b=null;const $=()=>{let a=e.latitude,l=e.longitude;e.latitude==0&&(a="39.90469"),e.longitude==0&&(l="116.40717");const r=new window.TMap.LatLng(a,l);b=new window.TMap.Map("TxMap",{center:r,zoom:17,viewMode:"2D",showControl:!0}),b.on("click",c=>{const m={lat:c.latLng.getLat().toFixed(6),lng:c.latLng.getLng().toFixed(6)};z(m.lat,m.lng,1),i.updateGeometries({id:"shop",position:c.latLng})});const i=new window.TMap.MultiMarker({id:"marker-layer",map:b,minimumClusterSize:1});i.updateGeometries({id:"shop",position:r}),b.on("idle",()=>{ie(()=>e.latitude,(c,m)=>{const g=new window.TMap.LatLng(e.latitude,e.longitude);b.panTo(g,1),i.updateGeometries({id:"shop",position:g})})})};te(()=>{const a=document.createElement("script");ae().then(l=>{a.type="text/javascript",a.src="https://map.qq.com/api/gljs?v=1.exp&key="+l.data.key,document.body.appendChild(a)}),a.onload=()=>{setTimeout(()=>{$()},500)}});const z=(a,l,r)=>{de({location:a+","+l}).then(i=>{i.data.result?(e.province_name=i.data.result.address_component.province,e.city_name=i.data.result.address_component.city,e.district_name=i.data.result.address_component.district,r==1&&(e.address=i.data.result.formatted_addresses.recommend,e.full_address=e.province_name+e.city_name+e.district_name+e.address,e.latitude=a,e.longitude=l)):N({type:"warning",message:i.data.message})})},I={scenic_id:0,scenic_name:"",latitude:0,longitude:0,province_id:0,province_name:"",city_id:0,city_name:"",district_id:0,district_name:"",address:"",scenic_level:"",open_time:"",telephone:"",scenic_desc:"",surround:"",scenic_cover:"",scenic_images:"",full_address:"",poster_id:""},e=S({...I});V&&(async(a=0)=>{Object.assign(e,I);const l=await(await ye(a)).data;Object.keys(e).forEach(r=>{l[r]!=null&&(e[r]=l[r])}),e.province_id>0&&E({}),e.city_id>0&&F({})})(V);const A=q(),K=oe(()=>({scenic_name:[{required:!0,message:s("scenicNamePlaceholder"),trigger:"blur"}],scenic_level:[{required:!0,message:s("scenicLevelPlaceholder"),trigger:"blur"}],scenic_cover:[{required:!0,message:s("scenicCoverPlaceholder"),trigger:"blur"}],addressId:[{required:!0,validator:Q,trigger:"blur"}]})),Q=(a,l,r)=>{(e.province_name==""||e.city_name==""||e.district_name=="")&&r(new Error(s("addressPlaceholder"))),r()},J=async a=>{w.value||!a||await a.validate(async l=>{l&&(w.value=!0,(V?Ve:we)(e).then(c=>{w.value=!1,history.back()}).catch(()=>{w.value=!1}))})},P=S([]),H=()=>{const a=U.resolve({path:"/poster/list"});window.open(a.href)},O=(a=!1)=>{ke({type:"tourism_scenic"}).then(l=>{const r=l.data;r&&(P.splice(0,P.length,...r),a&&N({message:s("refreshSuccess"),type:"success"}))})};O();const W=()=>{history.back()};return(a,l)=>{const r=re,i=ce,c=ue,m=pe,g=he,C=me,j=ge,X=_e,Y=fe;return u(),f("div",Me,[p("div",Pe,[p("div",{class:"left",onClick:l[0]||(l[0]=t=>n(U).push({path:"/tourism/product/scenic/scenic"}))},[Ce,p("span",Se,_(n(s)("returnToPreviousPage")),1),Le,n(V)?(u(),f("span",Te,_(n(s)("editScenic")),1)):(u(),f("span",Ue,_(n(s)("addScenic")),1))])]),o(Y,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[o(X,{model:e,"label-width":"90px",ref_key:"formRef",ref:A,rules:n(K),class:"page-form"},{default:d(()=>[o(i,{label:n(s)("scenicName"),prop:"scenic_name"},{default:d(()=>[o(r,{modelValue:e.scenic_name,"onUpdate:modelValue":l[1]||(l[1]=t=>e.scenic_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:n(s)("scenicNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(i,{label:n(s)("scenicLevel"),prop:"scenic_level"},{default:d(()=>[o(m,{modelValue:e.scenic_level,"onUpdate:modelValue":l[2]||(l[2]=t=>e.scenic_level=t),clearable:"",class:"input-width"},{default:d(()=>[o(c,{label:n(s)("oneStar"),value:1},null,8,["label"]),o(c,{label:n(s)("twoStar"),value:2},null,8,["label"]),o(c,{label:n(s)("threeStar"),value:3},null,8,["label"]),o(c,{label:n(s)("fourStar"),value:4},null,8,["label"]),o(c,{label:n(s)("fiveStar"),value:5},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(i,{label:n(s)("openTime"),class:"input-width"},{default:d(()=>[o(r,{modelValue:e.open_time,"onUpdate:modelValue":l[3]||(l[3]=t=>e.open_time=t),modelModifiers:{trim:!0},clearable:"",placeholder:n(s)("openTimePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(i,{label:n(s)("telephone")},{default:d(()=>[o(r,{modelValue:e.telephone,"onUpdate:modelValue":l[4]||(l[4]=t=>e.telephone=t),modelModifiers:{trim:!0},clearable:"",placeholder:n(s)("telephonePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(i,{label:n(s)("scenicCover"),prop:"scenic_cover"},{default:d(()=>[o(g,{modelValue:e.scenic_cover,"onUpdate:modelValue":l[5]||(l[5]=t=>e.scenic_cover=t)},null,8,["modelValue"])]),_:1},8,["label"]),o(i,{label:n(s)("scenicImgs"),prop:"scenic_images"},{default:d(()=>[o(g,{modelValue:e.scenic_images,"onUpdate:modelValue":l[6]||(l[6]=t=>e.scenic_images=t),limit:"10"},null,8,["modelValue"])]),_:1},8,["label"]),o(i,{label:n(s)("poster")},{default:d(()=>[o(m,{modelValue:e.poster_id,"onUpdate:modelValue":l[7]||(l[7]=t=>e.poster_id=t),placeholder:n(s)("posterPlaceholder"),clearable:""},{default:d(()=>[(u(!0),f(k,null,x(P,t=>(u(),M(c,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),p("div",Ee,[p("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:l[8]||(l[8]=t=>O(!0))},_(n(s)("refresh")),1),p("span",{class:"cursor-pointer text-primary",onClick:H},_(n(s)("addGoodsPoster")),1)])]),_:1},8,["label"]),o(i,{label:n(s)("address"),prop:"addressId"},{default:d(()=>[o(m,{modelValue:e.province_name,"onUpdate:modelValue":l[9]||(l[9]=t=>e.province_name=t),"value-key":"name",clearable:"",class:"input-width",onChange:E},{default:d(()=>[o(c,{label:n(s)("provincePlaceholder"),value:""},null,8,["label"]),(u(!0),f(k,null,x(v.province,(t,h)=>(u(),M(c,{key:h,label:t.name,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(m,{modelValue:e.city_name,"onUpdate:modelValue":l[10]||(l[10]=t=>e.city_name=t),"value-key":"id",clearable:"",class:"input-width ml-3",onChange:F},{default:d(()=>[o(c,{label:n(s)("cityPlaceholder"),value:""},null,8,["label"]),(u(!0),f(k,null,x(v.city,(t,h)=>(u(),M(c,{key:h,label:t.name,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(m,{modelValue:e.district_name,"onUpdate:modelValue":l[11]||(l[11]=t=>e.district_name=t),"value-key":"id",clearable:"",class:"input-width ml-3",onChange:G},{default:d(()=>[o(c,{label:n(s)("districtPlaceholder"),value:""},null,8,["label"]),(u(!0),f(k,null,x(v.district,(t,h)=>(u(),M(c,{key:h,label:t.name,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(i,{label:n(s)("detailAddress"),prop:"address"},{default:d(()=>[o(r,{modelValue:e.address,"onUpdate:modelValue":l[12]||(l[12]=t=>e.address=t),modelModifiers:{trim:!0},clearable:"",placeholder:n(s)("detailAddressPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),o(C,{class:"ml-3",onClick:R},{default:d(()=>[L(_(n(s)("search")),1)]),_:1})]),_:1},8,["label"]),o(i,null,{default:d(()=>[Fe]),_:1}),o(i,{label:n(s)("scenicDesc")},{default:d(()=>[o(j,{modelValue:e.scenic_desc,"onUpdate:modelValue":l[13]||(l[13]=t=>e.scenic_desc=t)},null,8,["modelValue"])]),_:1},8,["label"]),o(i,{label:n(s)("surround")},{default:d(()=>[o(j,{modelValue:e.surround,"onUpdate:modelValue":l[14]||(l[14]=t=>e.surround=t)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),p("div",Ie,[p("div",Ae,[o(C,{type:"primary",onClick:l[15]||(l[15]=t=>J(A.value))},{default:d(()=>[L(_(n(s)("save")),1)]),_:1}),o(C,{onClick:l[16]||(l[16]=t=>W())},{default:d(()=>[L(_(n(s)("cancel")),1)]),_:1})])])])}}});const Vl=xe(Oe,[["__scopeId","data-v-476d27be"]]);export{Vl as default};
