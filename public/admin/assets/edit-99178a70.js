import{d as ee,x as te,r as y,n as U,cK as w,aJ as le,cn as ae,cL as ie,l as de,q as r,Q as g,ap as re,h as _,c as L,e as o,w as c,u as n,R as k,s as x,a as h,a0 as G,b_ as oe,F as B,T as N,i as Q,t as H,aQ as se,a7 as ne,av as ce,L as ue,K as pe,ab as _e,aC as me,M as fe,E as ve,Y as be}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                    *//* empty css                *//* empty css                   *//* empty css                       */import{g as ye,e as ge,a as he}from"./shop_address-a765be84.js";import{c as Ve,l as we,a as Le}from"./qqmap-011f3cfb.js";const ke={class:"main-container"},xe={class:"flex flex-col"},Ee={id:"container",class:"w-[800px] h-[520px] relative"},Pe={class:"fixed-footer-wrap"},Ae={class:"fixed-footer !z-[1000]"},He=ee({__name:"edit",setup(Ce){const D=te(),E=parseInt(D.query.id),m=y(!1),J=D.meta.title,p=U({province:[],city:[],district:[]}),P=y(),A=y(),C=y();w(0).then(a=>{p.province=a.data});let R="";le(()=>{const a=document.createElement("script");ae().then(t=>{R=t.data.key,a.type="text/javascript",a.src="https://map.qq.com/api/gljs?libraries=tools,service&v=1.exp&key="+t.data.key,document.body.appendChild(a)}),a.onload=()=>{setTimeout(()=>{Y()},500)}});let v,M;const F=y(!0),Y=()=>{const a=window.TMap,t=a.LatLng,l=new t(e.lat,e.lng);v=new a.Map("container",{center:l,zoom:14}),v.on("tilesloaded",()=>{F.value=!1}),M=Ve(v),v.on("click",d=>{v.setCenter(d.latLng),M.updateGeometries({id:"center",position:d.latLng}),j(d.latLng.lat,d.latLng.lng)}),j(l.lat,l.lng)},u=U({province_id:0,city_id:0,district_id:0}),j=(a,t)=>{we({mapKey:R,lat:a,lng:t}).then(({message:l,result:d})=>{l=="query ok"||l=="Success"?(e.lat=d.location.lat,e.lng=d.location.lng,e.address=d.formatted_addresses.recommend,ie(d.ad_info.adcode).then(({data:s})=>{u.province_id=s.province?s.province.id:0,u.city_id=s.city?s.city.id:0,u.district_id=s.district?s.district.id:0})):console.error(l,d)}).catch(l=>{console.log(l)})},I={id:0,contact_name:"",mobile:"",province_id:0,city_id:0,district_id:0,address:"",full_address:"",lat:39.908626,lng:116.39719,is_delivery_address:0,is_refund_address:0,is_default_delivery:0,is_default_refund:0},e=U({...I});E&&(async(a=0)=>{m.value=!0,Object.assign(e,I);const t=await(await ye(a)).data;Object.keys(e).forEach(l=>{t[l]!=null&&(e[l]=t[l])}),m.value=!1})(E);const K=y(),W=de(()=>({address_type:[{validator:(a,t,l)=>{!e.is_delivery_address&&!e.is_refund_address&&l(new Error(r("addressTypeRequire"))),l()}}],contact_name:[{required:!0,message:r("contactNamePlaceholder"),trigger:"blur"}],mobile:[{required:!0,message:r("mobilePlaceholder"),trigger:"blur"},{trigger:"blur",validator:(a,t,l)=>{t&&!/^1[3-9]\d{9}$/.test(t)&&l(new Error(r("mobileTips"))),l()}}],address_area:[{validator:(a,t,l)=>{e.province_id||l(new Error(r("provincePlaceholder"))),e.city_id||l(new Error(r("cityPlaceholder"))),p.district.length&&!e.district_id&&l(new Error(r("districtPlaceholder"))),l()}}],address:[{required:!0,message:r("addressPlaceholder"),trigger:"blur"}]}));g(()=>e.province_id,a=>{a?w(e.province_id).then(t=>{p.city=t.data;const l=e.city_id;if(l){let d=!1;for(let s=0;s<t.data.length;s++)if(l==t.data[s].id){d=!0;break}if(d){e.city_id=l;return}}e.city_id=0,T()}):e.city_id=0}),g(()=>e.city_id,a=>{a?w(e.city_id).then(t=>{p.district=t.data;const l=e.district_id;if(l){let d=!1;for(let s=0;s<t.data.length;s++)if(l==t.data[s].id){d=!0;break}if(d){e.district_id=l;return}}T(),e.district_id=0}):e.district_id=0}),g(()=>e.district_id,a=>{a&&T()});const T=re(()=>{setTimeout(()=>{const a=[e.province_id?P.value.states.selectedLabel:"",e.city_id?A.value.states.selectedLabel:"",e.district_id?C.value.states.selectedLabel:""];Le({mapKey:R,address:a.join("")}).then(({message:t,result:l})=>{if(t=="Success"||t=="query ok"){const d=new window.TMap.LatLng(l.location.lat,l.location.lng);v.setCenter(d),M.updateGeometries({id:"center",position:d}),e.lat=l.location.lat,e.lng=l.location.lng}else console.error(t,l)})},500)},500);g(()=>u.province_id,a=>{a&&w(u.province_id).then(t=>{p.city=t.data,e.province_id=u.province_id,e.city_id=u.city_id})}),g(()=>u.city_id,a=>{a&&w(u.city_id).then(t=>{p.district=t.data,e.city_id=u.city_id,e.district_id=u.district_id})}),g(()=>u.district_id,a=>{a&&(e.district_id=u.district_id)});const X=async a=>{m.value||!a||await a.validate(async t=>{if(t){m.value=!0;const l=e,d=[l.province_id?P.value.states.selectedLabel:"",l.city_id?A.value.states.selectedLabel:"",l.district_id?C.value.states.selectedLabel:"",l.address];l.full_address=d.join(""),(E?ge:he)(l).then(f=>{m.value=!1,history.back()}).catch(()=>{m.value=!1})}})},O=()=>{history.back()};return(a,t)=>{const l=se,d=ne,s=ce,f=ue,q=pe,b=_e,S=me,Z=fe,$=ve,z=be;return _(),L("div",ke,[o(d,{class:"card !border-none mb-[15px]",shadow:"never"},{default:c(()=>[o(l,{content:n(J),icon:a.ArrowLeft,onBack:O},null,8,["content","icon"])]),_:1}),k((_(),x(d,{class:"box-card !border-none",shadow:"never"},{default:c(()=>[o(Z,{model:e,"label-width":"90px",ref_key:"formRef",ref:K,rules:n(W),class:"page-form"},{default:c(()=>[o(f,{label:n(r)("addressType"),prop:"address_type"},{default:c(()=>[h("div",xe,[h("div",null,[o(s,{modelValue:e.is_delivery_address,"onUpdate:modelValue":t[0]||(t[0]=i=>e.is_delivery_address=i),label:n(r)("deliveryAddress"),"true-label":1,"false-label":0},null,8,["modelValue","label"]),k(o(s,{modelValue:e.is_default_delivery,"onUpdate:modelValue":t[1]||(t[1]=i=>e.is_default_delivery=i),label:n(r)("defaultDeliveryAddress"),"true-label":1,"false-label":0},null,8,["modelValue","label"]),[[G,e.is_delivery_address]])]),h("div",null,[o(s,{modelValue:e.is_refund_address,"onUpdate:modelValue":t[2]||(t[2]=i=>e.is_refund_address=i),label:n(r)("refundAddress"),"true-label":1,"false-label":0},null,8,["modelValue","label"]),k(o(s,{modelValue:e.is_default_refund,"onUpdate:modelValue":t[3]||(t[3]=i=>e.is_default_refund=i),label:n(r)("defaultRefundAddress"),"true-label":1,"false-label":0},null,8,["modelValue","label"]),[[G,e.is_refund_address]])])])]),_:1},8,["label"]),o(f,{label:n(r)("contactName"),prop:"contact_name"},{default:c(()=>[o(q,{modelValue:e.contact_name,"onUpdate:modelValue":t[4]||(t[4]=i=>e.contact_name=i),modelModifiers:{trim:!0},clearable:"",placeholder:n(r)("contactNamePlaceholder"),class:"input-width",maxlength:"10"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(f,{label:n(r)("mobile"),prop:"mobile"},{default:c(()=>[o(q,{modelValue:e.mobile,"onUpdate:modelValue":t[5]||(t[5]=i=>e.mobile=i),modelModifiers:{trim:!0},clearable:"",placeholder:n(r)("mobilePlaceholder"),class:"input-width",onKeyup:t[6]||(t[6]=i=>n(oe)(i)),onBlur:t[7]||(t[7]=i=>e.mobile=i.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(f,{label:n(r)("fullAddress"),prop:"address_area"},{default:c(()=>[o(S,{modelValue:e.province_id,"onUpdate:modelValue":t[8]||(t[8]=i=>e.province_id=i),"value-key":"id",clearable:"",class:"w-[200px]",ref_key:"provinceRef",ref:P},{default:c(()=>[o(b,{label:n(r)("provincePlaceholder"),value:0},null,8,["label"]),(_(!0),L(B,null,N(p.province,(i,V)=>(_(),x(b,{key:V,label:i.name,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(S,{modelValue:e.city_id,"onUpdate:modelValue":t[9]||(t[9]=i=>e.city_id=i),"value-key":"id",clearable:"",class:"w-[200px] ml-3",ref_key:"cityRef",ref:A},{default:c(()=>[o(b,{label:n(r)("cityPlaceholder"),value:0},null,8,["label"]),(_(!0),L(B,null,N(p.city,(i,V)=>(_(),x(b,{key:V,label:i.name,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(S,{modelValue:e.district_id,"onUpdate:modelValue":t[10]||(t[10]=i=>e.district_id=i),"value-key":"id",clearable:"",class:"w-[200px] ml-3",ref_key:"districtRef",ref:C},{default:c(()=>[o(b,{label:n(r)("districtPlaceholder"),value:0},null,8,["label"]),(_(!0),L(B,null,N(p.district,(i,V)=>(_(),x(b,{key:V,label:i.name,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(f,{prop:"address"},{default:c(()=>[o(q,{modelValue:e.address,"onUpdate:modelValue":t[11]||(t[11]=i=>e.address=i),modelModifiers:{trim:!0},clearable:"",placeholder:n(r)("addressPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1}),o(f,null,{default:c(()=>[k(h("div",Ee,null,512),[[z,F.value]])]),_:1})]),_:1},8,["model","rules"])]),_:1})),[[z,m.value]]),h("div",Pe,[h("div",Ae,[o($,{type:"primary",onClick:t[12]||(t[12]=i=>X(K.value))},{default:c(()=>[Q(H(n(r)("save")),1)]),_:1}),o($,{onClick:t[13]||(t[13]=i=>O())},{default:c(()=>[Q(H(n(r)("cancel")),1)]),_:1})])])])}}});export{He as default};
