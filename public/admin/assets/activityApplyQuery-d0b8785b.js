import{d as y,r as f,n as g,Q as I,h as i,c as d,e as t,w as e,i as a,F as E,T as A,s as x,U as C,at as N,au as b,L as h,K as L,M as S}from"./index-5a756a51.js";/* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{g as M}from"./part-ba2cbfd6.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"setting-form"},T=y({__name:"activityApplyQuery",setup(V){const s=f("SCHOOLCANTEEN_001"),p=g({list:[]}),c=()=>{if(!localStorage.getItem("seafoxpay_sid")){C({message:"请先点击商户进件",type:"error"});return}M({type:"activityApplyQuery",activityId:s.value,sid:localStorage.getItem("seafoxpay_sid")}).then(o=>{console.log(o),o=o.data,p.list=o})};return I(()=>s.value,()=>{c()},{immediate:!0}),(o,u)=>{const n=N,m=b,_=h,r=L,v=S;return i(),d("div",Q,[t(v,{"label-width":"120px"},{default:e(()=>[t(_,{label:"客户类型",prop:"activityId"},{default:e(()=>[t(m,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=l=>s.value=l)},{default:e(()=>[t(n,{label:"SCHOOLCANTEEN_002",size:"large"},{default:e(()=>[a("教育行业学校主体食堂活动(微信) ")]),_:1}),t(n,{label:"CAMPUSDINING_001",size:"large"},{default:e(()=>[a("教育行业非学校主体商户餐饮活动(微信)")]),_:1}),t(n,{label:"ALISCHOOL_1",size:"large"},{default:e(()=>[a("支付宝未来校园活动(支付宝)")]),_:1}),t(n,{label:"MEDICAL_0",size:"large"},{default:e(()=>[a("医疗卫生活动(支付宝)")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"第三方平台信息"},{default:e(()=>[(i(!0),d(E,null,A(p.list,l=>(i(),x(_,null,{default:e(()=>[t(_,{class:"tn-el-form-item--inline"},{default:e(()=>[t(r,{value:l.subMerchantNo,readonly:!0},{prepend:e(()=>[a(" 二级商户号 ")]),_:2},1032,["value"]),t(r,{value:l.activityApplyStatus,readonly:!0},{prepend:e(()=>[a(" 状态 ")]),_:2},1032,["value"]),t(r,{value:l.activeTime,readonly:!0},{prepend:e(()=>[a(" 审核通过时间 ")]),_:2},1032,["value"]),t(r,{value:l.channelRetMsg,readonly:!0},{prepend:e(()=>[a(" 渠道返回信息 ")]),_:2},1032,["value"]),t(r,{value:l,readonly:!0},{prepend:e(()=>[a(" 时间是否有效 ")]),_:2},1032,["value"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})])}}});const U=O(T,[["__scopeId","data-v-881d1030"]]);export{U as default};