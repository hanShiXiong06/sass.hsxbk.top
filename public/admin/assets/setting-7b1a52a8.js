import{d as K,x as z,r as g,n as P,h as y,c as S,a as p,t as r,u as l,e as t,w as o,R as B,s as D,q as d,b_ as w,i as n,c8 as V,K as N,L as k,at as F,au as j,a7 as I,M as L,E as $,Y as q}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 */import{$ as G,a0 as M}from"./tourism-df1c9cc5.js";const O={class:"main-container"},T={class:"flex ml-[18px] justify-between items-center mt-[20px] mb-[5px]"},Y={class:"text-page-title"},A={class:"panel-title !text-sm"},H={class:"panel-title !text-sm"},J={class:"panel-title !text-sm"},Q={class:"fixed-footer-wrap"},W={class:"fixed-footer"},ue=K({__name:"setting",setup(X){const h=z().meta.title,u=g(!0),v=g(),s=P({hotel:{order_close:"",is_allow_refund:"0",refund_rate:""},scenic:{order_close:"",is_allow_refund:"0",refund_rate:""},way:{order_close:"",is_allow_refund:"0",refund_rate:""}}),x=async()=>{const _=await(await G()).data;Object.keys(s).forEach(e=>{_[e]!=null&&(s[e]=_[e])}),u.value=!1},R=async _=>{u.value||!_||await _.validate(async e=>{e&&(u.value=!0,M(s).then(()=>{u.value=!1}).catch(()=>{u.value=!1}))})};return x(),(_,e)=>{const f=N,i=k,m=F,b=j,c=I,C=L,E=$,U=q;return y(),S("div",O,[p("div",T,[p("span",Y,r(l(h)),1)]),t(c,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[B((y(),D(C,{model:s,"label-width":"150px",ref_key:"formRef",ref:v,class:"page-form"},{default:o(()=>[t(c,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[p("h3",A,r(l(d)("hotelSetting")),1),t(i,{label:l(d)("orderClose")},{default:o(()=>[t(f,{modelValue:s.hotel.order_close,"onUpdate:modelValue":e[0]||(e[0]=a=>s.hotel.order_close=a),placeholder:l(d)("orderClosePlaceholder"),class:"input-width",onKeyup:e[1]||(e[1]=a=>l(w)(a))},{append:o(()=>[n(r(l(d)("second")),1)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:l(d)("isRefund")},{default:o(()=>[t(b,{modelValue:s.hotel.is_allow_refund,"onUpdate:modelValue":e[2]||(e[2]=a=>s.hotel.is_allow_refund=a),class:"ml-4"},{default:o(()=>[t(m,{label:0,size:"large"},{default:o(()=>[n(r(l(d)("no")),1)]),_:1}),t(m,{label:1,size:"large"},{default:o(()=>[n(r(l(d)("yes")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(i,{label:l(d)("refundRatio")},{default:o(()=>[t(f,{modelValue:s.hotel.refund_rate,"onUpdate:modelValue":e[3]||(e[3]=a=>s.hotel.refund_rate=a),placeholder:l(d)("refundRatioPlaceholder"),class:"input-width",onKeyup:e[4]||(e[4]=a=>l(V)(a))},{append:o(()=>[n("%")]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(c,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[p("h3",H,r(l(d)("scenicSetting")),1),t(i,{label:l(d)("orderClose")},{default:o(()=>[t(f,{modelValue:s.scenic.order_close,"onUpdate:modelValue":e[5]||(e[5]=a=>s.scenic.order_close=a),placeholder:l(d)("orderClosePlaceholder"),class:"input-width",onKeyup:e[6]||(e[6]=a=>l(w)(a))},{append:o(()=>[n(r(l(d)("second")),1)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:l(d)("isRefund")},{default:o(()=>[t(b,{modelValue:s.scenic.is_allow_refund,"onUpdate:modelValue":e[7]||(e[7]=a=>s.scenic.is_allow_refund=a),class:"ml-4"},{default:o(()=>[t(m,{label:0,size:"large"},{default:o(()=>[n(r(l(d)("no")),1)]),_:1}),t(m,{label:1,size:"large"},{default:o(()=>[n(r(l(d)("yes")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(i,{label:l(d)("refundRatio")},{default:o(()=>[t(f,{modelValue:s.scenic.refund_rate,"onUpdate:modelValue":e[8]||(e[8]=a=>s.scenic.refund_rate=a),placeholder:l(d)("refundRatioPlaceholder"),class:"input-width",onKeyup:e[9]||(e[9]=a=>l(V)(a))},{append:o(()=>[n("%")]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(c,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[p("h3",J,r(l(d)("waySetting")),1),t(i,{label:l(d)("orderClose")},{default:o(()=>[t(f,{modelValue:s.way.order_close,"onUpdate:modelValue":e[10]||(e[10]=a=>s.way.order_close=a),placeholder:l(d)("orderClosePlaceholder"),class:"input-width",onKeyup:e[11]||(e[11]=a=>l(w)(a))},{append:o(()=>[n(r(l(d)("second")),1)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:l(d)("isRefund")},{default:o(()=>[t(b,{modelValue:s.way.is_allow_refund,"onUpdate:modelValue":e[12]||(e[12]=a=>s.way.is_allow_refund=a),class:"ml-4"},{default:o(()=>[t(m,{label:0,size:"large"},{default:o(()=>[n(r(l(d)("no")),1)]),_:1}),t(m,{label:1,size:"large"},{default:o(()=>[n(r(l(d)("yes")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(i,{label:l(d)("refundRatio")},{default:o(()=>[t(f,{modelValue:s.way.refund_rate,"onUpdate:modelValue":e[13]||(e[13]=a=>s.way.refund_rate=a),placeholder:l(d)("refundRatioPlaceholder"),class:"input-width",onKeyup:e[14]||(e[14]=a=>l(V)(a))},{append:o(()=>[n("%")]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[U,u.value]]),p("div",Q,[p("div",W,[t(E,{type:"primary",loading:u.value,onClick:e[15]||(e[15]=a=>R(v.value))},{default:o(()=>[n(r(l(d)("save")),1)]),_:1},8,["loading"])])])]),_:1})])}}});export{ue as default};
