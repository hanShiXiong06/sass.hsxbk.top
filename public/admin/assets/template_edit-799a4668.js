import{d as ue,r as w,x as me,f as fe,n as ce,cO as ve,l as B,q as t,H as I,h as U,c as L,a as y,e as l,w as i,u as r,R as j,s as G,i as h,t as v,c8 as x,B as he,a0 as Q,F as ge,aQ as ye,a7 as be,K as Ve,L as ke,at as we,au as Se,ac as Ee,E as xe,ad as Ce,aS as Ue,M as De,aw as Be,V as Ae,X as Ne,Y as Te}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                     *//* empty css                *//* empty css                    *//* empty css                *//* empty css                  *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                  *//* empty css                        *//* empty css               *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{y as Pe,z as Re,A as ze}from"./delivery-d346ad15.js";import{_ as Ke}from"./_plugin-vue_export-helper-c27b6911.js";const Fe={class:"main-container"},Oe={class:"area-input"},Ie=["onClick"],Le={key:1},je={class:"mt-[10px]"},qe={class:"area-input"},We={class:"form-tip"},Ze={class:"mt-[10px]"},He={class:"area-input"},Me={class:"mt-[10px]"},Ge={class:"fixed-footer-wrap"},Qe={class:"fixed-footer"},Xe={class:"dialog-footer"},Ye=ue({__name:"template_edit",setup(Je){const C=w(!1),A=me(),q=fe(),b=w(!1),X={template_id:"",template_name:"",fee_type:"num",area:[],no_delivery:0,is_free_shipping:0,fee_data:[],free_shipping_data:[],no_delivery_data:[]},Y=A.meta.title,_=ce({...X}),W=w(),N=w([]);A.query.id&&(b.value=!0,Pe(A.query.id).then(({data:p})=>{p&&(Object.keys(_).forEach(e=>{p[e]!=null&&(_[e]=p[e])}),m.value=p.fee_data,V.value=p.no_delivery_data,f.value=p.free_shipping_data),b.value=!1}).catch(()=>{b.value=!1})),ve(2).then(p=>{N.value=p.data}).catch();const J=B(()=>({template_name:[{required:!0,message:t("templateNamePlaceholder"),trigger:"blur"}],fee_data:[{validator:$}],free_shipping_data:[{validator:ee}],no_delivery_data:[{validator:ae}]})),$=(p,e,d)=>{for(let u=0;u<m.value.length;u++){const o=m.value[u];if(!o.area_ids.length){d(new Error(t("areaPlaceholder")));break}if(I.empty(o.snum)||o.snum<0){d(new Error(D.value.first+t("notUnderZero")));break}if(I.empty(o.xnum)||o.snum<0){d(new Error(D.value.continue+t("notUnderZero")));break}}d()},ee=(p,e,d)=>{if(_.is_free_shipping){for(let u=0;u<f.value.length;u++){const o=f.value[u];if(!o.area_ids.length){d(new Error(t("freeShippingPlaceholder")));break}if(I.empty(o.free_shipping_num)||o.free_shipping_num<0){d(new Error(Z.value+t("notUnderZero")));break}}d()}else d()},ae=(p,e,d)=>{if(_.no_delivery){for(let u=0;u<V.value.length;u++)if(!V.value[u].area_ids.length){d(new Error(t("noDeliveryPlaceholder")));break}d()}else d()},D=B(()=>({num:{first:t("firstNum"),continue:t("continueNum")},weight:{first:t("firstWeight"),continue:t("continueWeight")},volume:{first:t("firstVolume"),continue:t("continueVolume")}})[_.fee_type]),Z=B(()=>({num:t("freeShippingNum"),weight:t("freeShippingWeight"),volume:t("freeShippingVolume")})[_.fee_type]),m=w([{area_ids:[0],fee_area_names:"全国",snum:1,sprice:0,xnum:1,xprice:0}]),f=w([]),V=w([]),T=p=>{switch(p){case"fee":m.value.push({area_ids:[],fee_area_names:"",snum:1,sprice:0,xnum:1,xprice:0});break;case"free_shipping":f.value.push({area_ids:[],free_shipping_area_names:"",free_shipping_num:0,free_shipping_price:0});break;case"no_delivery":V.value.push({area_ids:[],no_delivery_area_names:""});break}},P=(p,e)=>{switch(p){case"fee":m.value.splice(e,1);break;case"free_shipping":f.value.splice(e,1);break;case"no_delivery":V.value.splice(e,1);break}};let R=[];const z=w([]);let S={type:"",index:0};const K=(p,e)=>{S={type:p,index:e};let d=[];switch(p){case"fee":d=m.value;break;case"free_shipping":d=f.value;break;case"no_delivery":d=V.value;break}R=d[e].area_ids,z.value=[],d.forEach((u,o)=>{e!=o&&z.value.push(...u.area_ids)}),C.value=!0},le=B(()=>(N.value.forEach(p=>{p.child.forEach(e=>{e.disabled=z.value.includes(e.id)})}),N.value)),F=w(),te=()=>{const p=F.value.getCheckedNodes(!1,!1),e=[],d=[];switch(p.forEach(u=>{u.level==2&&(e.push(u.id),d.push(u.name))}),S.type){case"fee":m.value[S.index].area_ids=e,m.value[S.index].fee_area_names=d.toString();break;case"free_shipping":f.value[S.index].area_ids=e,f.value[S.index].free_shipping_area_names=d.toString();break;case"no_delivery":V.value[S.index].area_ids=e,V.value[S.index].no_delivery_area_names=d.toString();break}C.value=!1},re=()=>{F.value.setCheckedKeys(R,!1)},ne=async p=>{if(b.value||!p)return;const e=_.template_id?Re:ze;await p.validate(async d=>{if(d){b.value=!0;const u={template_id:_.template_id,template_name:_.template_name,fee_type:_.fee_type,no_delivery:_.no_delivery,is_free_shipping:_.is_free_shipping},o={};m.value.forEach(s=>{s.area_ids.forEach(c=>{o["city_"+c]={city_id:c,fee_area_ids:s.area_ids.toString(),fee_area_names:s.fee_area_names,snum:s.snum,sprice:s.sprice,xnum:s.xnum,xprice:s.xprice}})}),f.value.forEach(s=>{s.area_ids.forEach(c=>{o["city_"+c]?Object.assign(o["city_"+c],{free_shipping_area_ids:s.area_ids.toString(),free_shipping_area_names:s.free_shipping_area_names,free_shipping_num:s.free_shipping_num,free_shipping_price:s.free_shipping_price}):o["city_"+c]={city_id:c,free_shipping_area_ids:s.area_ids.toString(),free_shipping_area_names:s.free_shipping_area_names,free_shipping_num:s.free_shipping_num,free_shipping_price:s.free_shipping_price}})}),V.value.forEach(s=>{s.area_ids.forEach(c=>{o["city_"+c]?Object.assign(o["city_"+c],{no_delivery_area_ids:s.area_ids.toString(),no_delivery_area_names:s.no_delivery_area_names}):o["city_"+c]={city_id:c,no_delivery_area_ids:s.area_ids.toString(),no_delivery_area_names:s.no_delivery_area_names}})}),u.area=Object.values(o),e(u).then(()=>{b.value=!1,q.push({path:"/shop/order/shipping/template"})}).catch(()=>{b.value=!1})}})},H=()=>{q.push({path:"/shop/order/shipping/template"})};return(p,e)=>{const d=ye,u=be,o=Ve,s=ke,c=we,ie=Se,g=Ee,k=xe,O=Ce,M=Ue,oe=De,se=Be,pe=Ae,de=Ne,_e=Te;return U(),L(ge,null,[y("div",Fe,[l(u,{class:"card !border-none mb-[15px]",shadow:"never"},{default:i(()=>[l(d,{content:r(Y),icon:p.ArrowLeft,onBack:H},null,8,["content","icon"])]),_:1}),l(u,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[j((U(),G(oe,{model:_,"label-width":"120px",ref_key:"formRef",ref:W,rules:r(J),class:"page-form"},{default:i(()=>[l(s,{label:r(t)("templateName"),prop:"template_name"},{default:i(()=>[l(o,{modelValue:_.template_name,"onUpdate:modelValue":e[0]||(e[0]=a=>_.template_name=a),modelModifiers:{trim:!0},clearable:"",placeholder:r(t)("templateNamePlaceholder"),class:"input-width",maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(s,{label:r(t)("feeTypeName"),prop:"fee_type"},{default:i(()=>[l(ie,{modelValue:_.fee_type,"onUpdate:modelValue":e[1]||(e[1]=a=>_.fee_type=a)},{default:i(()=>[l(c,{label:"num",size:"large"},{default:i(()=>[h(v(r(t)("num")),1)]),_:1}),l(c,{label:"weight",size:"large"},{default:i(()=>[h(v(r(t)("weight")),1)]),_:1}),l(c,{label:"volume",size:"large"},{default:i(()=>[h(v(r(t)("volume")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(s,{label:r(t)("feeSetting"),prop:"fee_data"},{default:i(()=>[l(O,{data:m.value,style:{width:"100%"},size:"default"},{default:i(()=>[l(g,{label:r(t)("deliveryArea")},{default:i(({row:a,$index:n})=>[y("div",Oe,[n?(U(),L("span",{key:0,onClick:E=>K("fee",n),class:"cursor-pointer"},v(a.fee_area_names?a.fee_area_names:r(t)("areaPlaceholder")),9,Ie)):(U(),L("span",Le,v(a.fee_area_names?a.fee_area_names:r(t)("areaPlaceholder")),1))])]),_:1},8,["label"]),l(g,{label:r(D).first},{default:i(({$index:a})=>[l(o,{modelValue:m.value[a].snum,"onUpdate:modelValue":n=>m.value[a].snum=n,maxlength:"8",onKeyup:e[2]||(e[2]=n=>r(x)(n)),onBlur:n=>m.value[a].snum=n.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("fee")},{default:i(({$index:a})=>[l(o,{modelValue:m.value[a].sprice,"onUpdate:modelValue":n=>m.value[a].sprice=n,maxlength:"8",onKeyup:e[3]||(e[3]=n=>r(x)(n)),onBlur:n=>m.value[a].sprice=n.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(D).continue},{default:i(({$index:a})=>[l(o,{modelValue:m.value[a].xnum,"onUpdate:modelValue":n=>m.value[a].xnum=n,maxlength:"8",onKeyup:e[4]||(e[4]=n=>r(x)(n)),onBlur:n=>m.value[a].xnum=n.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("continueFee")},{default:i(({$index:a})=>[l(o,{modelValue:m.value[a].xprice,"onUpdate:modelValue":n=>m.value[a].xprice=n,onKeyup:e[5]||(e[5]=n=>r(x)(n)),maxlength:"8",onBlur:n=>m.value[a].xprice=n.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("operation"),align:"right",width:"150"},{default:i(({$index:a})=>[a?(U(),G(k,{key:0,type:"primary",onClick:n=>P("fee",a),link:""},{default:i(()=>[h(v(r(t)("delete")),1)]),_:2},1032,["onClick"])):he("",!0)]),_:1},8,["label"])]),_:1},8,["data"]),y("div",je,[l(k,{type:"primary",onClick:e[6]||(e[6]=a=>T("fee"))},{default:i(()=>[h(v(r(t)("addDeliveryArea")),1)]),_:1})])]),_:1},8,["label"]),l(s,{label:r(t)("freeShipping"),prop:"is_free_shipping"},{default:i(()=>[l(M,{modelValue:_.is_free_shipping,"onUpdate:modelValue":e[7]||(e[7]=a=>_.is_free_shipping=a),size:"small","inactive-value":0,"active-value":1},null,8,["modelValue"])]),_:1},8,["label"]),j(l(s,{prop:"free_shipping_data"},{default:i(()=>[l(O,{data:f.value,style:{width:"100%"},size:"default"},{default:i(()=>[l(g,{label:r(t)("freeShippingArea")},{default:i(({row:a,$index:n})=>[y("div",qe,[l(o,{modelValue:a.free_shipping_area_names,"onUpdate:modelValue":E=>a.free_shipping_area_names=E,placeholder:r(t)("areaPlaceholder"),readonly:"",onClick:E=>K("free_shipping",n)},null,8,["modelValue","onUpdate:modelValue","placeholder","onClick"])])]),_:1},8,["label"]),l(g,{label:r(Z)},{default:i(({$index:a})=>[l(o,{modelValue:f.value[a].free_shipping_num,"onUpdate:modelValue":n=>f.value[a].free_shipping_num=n,onKeyup:e[8]||(e[8]=n=>r(x)(n)),maxlength:"8",onBlur:n=>f.value[a].free_shipping_num=n.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("freeShippingPrice")},{default:i(({$index:a})=>[l(o,{modelValue:f.value[a].free_shipping_price,"onUpdate:modelValue":n=>f.value[a].free_shipping_price=n,onKeyup:e[9]||(e[9]=n=>r(x)(n)),maxlength:"8",onBlur:n=>f.value[a].free_shipping_price=n.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("operation"),align:"right",width:"150"},{default:i(({$index:a})=>[l(k,{type:"primary",onClick:n=>P("free_shipping",a),link:""},{default:i(()=>[h(v(r(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),y("div",We,v(r(t)("freeShippingAreaTips")),1),y("div",Ze,[l(k,{type:"primary",onClick:e[10]||(e[10]=a=>T("free_shipping"))},{default:i(()=>[h(v(r(t)("addFreeShippingArea")),1)]),_:1})])]),_:1},512),[[Q,_.is_free_shipping]]),l(s,{label:r(t)("noDelivery"),prop:"no_delivery"},{default:i(()=>[l(M,{modelValue:_.no_delivery,"onUpdate:modelValue":e[11]||(e[11]=a=>_.no_delivery=a),size:"small","inactive-value":0,"active-value":1},null,8,["modelValue"])]),_:1},8,["label"]),j(l(s,{prop:"no_delivery_data"},{default:i(()=>[l(O,{data:V.value,style:{width:"100%"},size:"default"},{default:i(()=>[l(g,{label:r(t)("noDelivery")},{default:i(({row:a,$index:n})=>[y("div",He,[l(o,{modelValue:a.no_delivery_area_names,"onUpdate:modelValue":E=>a.no_delivery_area_names=E,readonly:"",onClick:E=>K("no_delivery",n),placeholder:r(t)("areaPlaceholder")},null,8,["modelValue","onUpdate:modelValue","onClick","placeholder"])])]),_:1},8,["label"]),l(g,{label:r(t)("operation"),align:"right",width:"150"},{default:i(({$index:a})=>[l(k,{type:"primary",onClick:n=>P("no_delivery",a),link:""},{default:i(()=>[h(v(r(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),y("div",Me,[l(k,{type:"primary",onClick:e[12]||(e[12]=a=>T("no_delivery"))},{default:i(()=>[h(v(r(t)("addNoDelivery")),1)]),_:1})])]),_:1},512),[[Q,_.no_delivery]])]),_:1},8,["model","rules"])),[[_e,b.value]])]),_:1}),y("div",Ge,[y("div",Qe,[l(k,{type:"primary",onClick:e[13]||(e[13]=a=>ne(W.value)),disabled:b.value},{default:i(()=>[h(v(r(t)("save")),1)]),_:1},8,["disabled"]),l(k,{onClick:e[14]||(e[14]=a=>H())},{default:i(()=>[h(v(r(t)("cancel")),1)]),_:1})])])]),l(de,{modelValue:C.value,"onUpdate:modelValue":e[16]||(e[16]=a=>C.value=a),title:r(t)("selectArea"),width:"80%",class:"diy-dialog-wrap","destroy-on-close":!0,onOpened:re},{footer:i(()=>[y("span",Xe,[l(k,{onClick:e[15]||(e[15]=a=>C.value=!1)},{default:i(()=>[h(v(r(t)("cancel")),1)]),_:1}),l(k,{type:"primary",loading:b.value,onClick:te},{default:i(()=>[h(v(r(t)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[l(pe,{height:"50vh"},{default:i(()=>[l(se,{data:r(le),props:{children:"child",label:"name"},"default-expand-all":"","show-checkbox":"",ref_key:"areaTreeRef",ref:F,"default-checked-keys":r(R),"node-key":"id"},null,8,["data","default-checked-keys"])]),_:1})]),_:1},8,["modelValue","title"])],64)}}});const wa=Ke(Ye,[["__scopeId","data-v-76acc17b"]]);export{wa as default};