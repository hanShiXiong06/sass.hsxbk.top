import{d as I,n as A,h as m,c as v,e,w as a,i as s,s as y,B as c,a as C,U as n,K as N,L as P,au as E,av as x,M as k,E as T}from"./index-99f00cf3.js";/* empty css                  *//* empty css                *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 */import{g as z,s as B,a as U}from"./part-7bf5939d.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const S={class:"setting-form"},M={class:"operation-btn"},O=I({__name:"activityApply",setup(Y){const t=A({sid:localStorage.getItem("seafoxpay_sid"),merchantNo:"",appPayType:"",activityId:"",industryCode:"",remark:""}),f=()=>{if(!localStorage.getItem("seafoxpay_sid")){n({message:"请先点击商户进件",type:"error"});return}z({type:"activityApply",appPayType:t.appPayType,sid:localStorage.getItem("seafoxpay_sid")}).then(p=>{console.log(p),p=p.data,t.merchantNo=p.merchantNo})},g=()=>{if(!localStorage.getItem("seafoxpay_sid")){n({message:"请先点击商户进件",type:"error"});return}B(t).then(p=>{console.log(p),n({message:"设置成功",type:"success"})})},V=()=>{U(t).then(p=>{console.log(p),n({message:"设置成功",type:"success"})})};return f(),(p,l)=>{const u=N,i=P,d=E,r=x,b=k,_=T;return m(),v("div",S,[e(b,{model:t,"label-width":"120px"},{default:a(()=>[e(i,{label:"商户号"},{default:a(()=>[e(u,{modelValue:t.merchantNo,"onUpdate:modelValue":l[0]||(l[0]=o=>t.merchantNo=o),readonly:!0},null,8,["modelValue"])]),_:1}),e(i,{label:"活动标识",prop:"appPayType"},{default:a(()=>[e(r,{modelValue:t.appPayType,"onUpdate:modelValue":l[1]||(l[1]=o=>t.appPayType=o)},{default:a(()=>[e(d,{label:"WXPAY",size:"large"},{default:a(()=>[s("微信")]),_:1}),e(d,{label:"ALIPAY",size:"large"},{default:a(()=>[s("支付宝")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"活动标识",prop:"activityId"},{default:a(()=>[t.appPayType=="WXPAY"?(m(),y(r,{key:0,modelValue:t.activityId,"onUpdate:modelValue":l[2]||(l[2]=o=>t.activityId=o)},{default:a(()=>[e(d,{label:"SCHOOLCANTEEN_002",size:"large"},{default:a(()=>[s("教育行业学校主体食堂活动")]),_:1}),e(d,{label:"CAMPUSDINING_001",size:"large"},{default:a(()=>[s("教育行业非学校主体商户餐饮活动")]),_:1})]),_:1},8,["modelValue"])):c("",!0),t.appPayType=="ALIPAY"?(m(),y(r,{key:1,modelValue:t.activityId,"onUpdate:modelValue":l[3]||(l[3]=o=>t.activityId=o)},{default:a(()=>[e(d,{label:"ALISCHOOL_1",size:"large"},{default:a(()=>[s("支付宝未来校园活动")]),_:1}),e(d,{label:"MEDICAL_0",size:"large"},{default:a(()=>[s("医疗卫生活动")]),_:1})]),_:1},8,["modelValue"])):c("",!0)]),_:1}),e(i,{label:"支付宝行业code",prop:"industryCode"},{default:a(()=>[e(r,{modelValue:t.industryCode,"onUpdate:modelValue":l[4]||(l[4]=o=>t.industryCode=o)},{default:a(()=>[e(d,{label:"B0007",size:"large"},{default:a(()=>[s("校园团餐")]),_:1}),e(d,{label:"B0134",size:"large"},{default:a(()=>[s("高校和中职校园公立")]),_:1}),e(d,{label:"B0135",size:"large"},{default:a(()=>[s("高校和中职校园私立")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"备注/补充信息"},{default:a(()=>[e(u,{modelValue:t.remark,"onUpdate:modelValue":l[5]||(l[5]=o=>t.remark=o)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),C("div",M,[e(_,{type:"primary",onClick:g},{default:a(()=>[s("提交")]),_:1}),e(_,{type:"primary",onClick:V},{default:a(()=>[s("二次修改")]),_:1})])])}}});const K=L(O,[["__scopeId","data-v-43750c6a"]]);export{K as default};
