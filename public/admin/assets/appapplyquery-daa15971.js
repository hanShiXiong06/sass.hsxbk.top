import{d as v,n as y,Q as x,h as d,c as h,e,w as a,i as s,F as N,T,s as _,B as f,U as E,K as w,L as S,at as V,au as A,J as q,M as b,p as z,g as C,a as k}from"./index-5a756a51.js";/* empty css                *//* empty css                 *//* empty css                        *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 */import{g as R}from"./part-ba2cbfd6.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const B=u=>(z("data-v-78ee7588"),u=u(),C(),u),D={class:"setting-form"},L=B(()=>k("div",{class:"operation-btn"},null,-1)),X=v({__name:"appapplyquery",setup(u){const t=y({sid:localStorage.getItem("seafoxpay_sid"),merchantNo:"",appPayType:"WXPAY"}),c=y({list:[]}),g=()=>{if(!localStorage.getItem("seafoxpay_sid")){E({message:"请先点击商户进件",type:"error"});return}R({type:"appapplyquery",appPayType:t.appPayType,sid:localStorage.getItem("seafoxpay_sid")}).then(p=>{console.log(p),p=p.data,c.list=p.result.threePartnerNoData,c.list.map((l,r)=>{l.statusCn=p.authorizeStatusCn[l.authorizeStatus],l.qrcode=p.result.unionPayRecords?p.result.unionPayRecords[r].qrCode:""}),t.merchantNo=p.merchantNo,console.log(c)})};return x(()=>t.appPayType,()=>{g()},{immediate:!0}),(p,l)=>{const r=w,n=S,i=V,I=A,m=q,P=b;return d(),h("div",D,[e(P,{model:t,"label-width":"120px"},{default:a(()=>[e(n,{label:"商户号"},{default:a(()=>[e(r,{modelValue:t.merchantNo,"onUpdate:modelValue":l[0]||(l[0]=o=>t.merchantNo=o),readonly:!0},null,8,["modelValue"])]),_:1}),e(n,{label:"客户类型",prop:"appPayType"},{default:a(()=>[e(I,{modelValue:t.appPayType,"onUpdate:modelValue":l[1]||(l[1]=o=>t.appPayType=o)},{default:a(()=>[e(i,{label:"WXPAY",size:"large"},{default:a(()=>[s("微信")]),_:1}),e(i,{label:"ALIPAY",size:"large"},{default:a(()=>[s("支付宝")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"第三方平台信息"},{default:a(()=>[(d(!0),h(N,null,T(c.list,o=>(d(),_(n,null,{default:a(()=>[e(n,{class:"tn-el-form-item--inline"},{default:a(()=>[e(r,{value:o.channelShortId,readonly:!0},{prepend:a(()=>[s(" 渠道别名 ")]),_:2},1032,["value"]),e(r,{value:o.channelMerchantNo,readonly:!0},{prepend:a(()=>[s(" 第三方平台渠道号 ")]),_:2},1032,["value"]),e(r,{value:o.threePartnerNo,readonly:!0},{prepend:a(()=>[s(" 第三方交易识别码 ")]),_:2},1032,["value"]),e(r,{value:o.statusCn,readonly:!0},{prepend:a(()=>[s(" 授权状态 ")]),_:2},1032,["value"])]),_:2},1024),t.appPayType=="WXPAY"&&o.authorizeStatus!="AUTHORIZED"?(d(),_(m,{key:0,style:{width:"300px",height:"300px"},src:"http://qny.wdsp666.com/images/1/2022/10/eEfUhi23Ic237E7eC7IcQ17hVQ1hqz.jpg"})):f("",!0),t.appPayType=="ALIPAY"&&o.authorizeStatus!="AUTHORIZED"?(d(),_(m,{key:1,style:{width:"300px",height:"300px"},src:"http://qny.wdsp666.com/images/1/2022/10/NOGX1KoIfJ8354w4bjX48k1nwvzGix.jpg"})):f("",!0)]),_:2},1024))),256))]),_:1})]),_:1},8,["model"]),L])}}});const K=U(X,[["__scopeId","data-v-78ee7588"]]);export{K as default};
