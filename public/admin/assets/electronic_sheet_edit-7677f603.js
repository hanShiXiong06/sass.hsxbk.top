import{d as K,r as f,x as Q,f as Y,n as J,l as W,q as a,h as m,c as g,e as s,w as n,u as o,R as U,s as V,a as i,t as d,F as T,T as k,i as h,a0 as I,aQ as X,a7 as Z,K as ee,L as te,ab as le,aC as ae,at as oe,au as se,aS as ne,M as ie,E as de,Y as re}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                  *//* empty css                       *//* empty css                 *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{c as ue,e as pe,f as me,h as ce}from"./electronic_sheet-8997bb91.js";import{j as _e}from"./delivery-9edc97e6.js";const fe={class:"main-container"},xe={class:"panel-title !text-sm"},ve={class:"text-[12px] text-[#999] mt-[3px] leading-[20px]"},he={class:"text-[12px] text-[#999] mt-[3px] leading-[20px]"},ye={class:"panel-title !text-sm"},be={class:"flex items-center mt-[5px] text-[12px] text-[#999] leading-[20px]"},ge={class:"ml-[3px] text-[var(--el-color-primary)]",target:"_blank",href:"https://www.yuque.com/kdnjishuzhichi/rg4owd"},Ve={class:"flex items-center mt-[3px] text-[12px] text-[#999] leading-[20px]"},we={class:"ml-[3px] text-[var(--el-color-primary)]",target:"_blank",href:"https://www.yuque.com/kdnjishuzhichi/dfcrg1/hrfw43"},Se={class:"mt-[5px] text-[12px] text-[#999] leading-[20px]"},Ee={class:"mt-[5px] text-[12px] text-[#999] leading-[20px]"},Te={class:"mt-[5px] text-[12px] text-[#999] leading-[20px]"},ke={class:"mt-[5px] text-[12px] text-[#999] leading-[20px]"},Ce={class:"mt-[5px] text-[12px] text-[#999] leading-[20px]"},Ue={class:"fixed-footer-wrap"},Ne={class:"fixed-footer"},Xe=K({__name:"electronic_sheet_edit",setup(Le){const w=f(!1),N=Q(),L=Y(),y=f(!1),z=N.meta.title,O={id:N.query.id||0,template_name:"",express_company_id:"",customer_name:"",customer_pwd:"",send_site:"",send_staff:"",month_code:"",pay_type:1,is_notice:0,status:1,exp_type:1,print_style:"",is_default:""},e=J({...O}),P=f(),$=W(()=>({template_name:[{required:!0,message:a("templateNamePlaceholder"),trigger:"blur"}],express_company_id:[{required:!0,message:a("expressCompanyPlaceholder"),trigger:"blur"}]})),x=f([]),_=f([]),v=f([]),R=f([]);(async()=>{ue().then(r=>{R.value=r.data}),await _e({electronic_sheet_switch:1}).then(r=>{x.value=r.data}),e.id&&(w.value=!0,pe(e.id).then(r=>{let l=r.data;l&&Object.keys(e).forEach(u=>{l[u]!=null&&(e[u]=l[u])}),w.value=!1,console.log("formData",e),console.log("expTypeList",_),M(e.express_company_id,!0)}))})();const M=(r,l=!1)=>{if(!r){_.value=[],v.value=[];return}for(let u=0;u<x.value.length;u++)if(x.value[u].company_id==r){_.value=x.value[u].exp_type,v.value=x.value[u].print_style,l||(_.value.length?e.exp_type=_.value[0].value:e.exp_type=1,v.value.length?e.print_style=v.value[0].value:e.print_style="");break}},A=async r=>{if(w.value||!r)return;let l=e.id?me:ce;await r.validate(async u=>{if(u){if(y.value)return;y.value=!0,l(e).then(c=>{y.value=!1,e.id||L.push("/phone_shop/delivery/electronic_sheet")}).catch(c=>{y.value=!1})}})},q=()=>{L.push("/phone_shop/delivery/electronic_sheet")};return(r,l)=>{const u=X,S=Z,c=ee,p=te,B=le,D=ae,E=oe,C=se,F=ne,G=ie,j=de,H=re;return m(),g("div",fe,[s(S,{class:"card !border-none mb-[15px]",shadow:"never"},{default:n(()=>[s(u,{content:o(z),icon:r.ArrowLeft,onBack:q},null,8,["content","icon"])]),_:1}),U((m(),V(G,{class:"page-form",model:e,rules:o($),"label-width":"150px",ref_key:"formRef",ref:P},{default:n(()=>[s(S,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[i("h3",xe,d(o(a)("basicSettings")),1),s(p,{label:o(a)("templateName"),prop:"template_name"},{default:n(()=>[s(c,{modelValue:e.template_name,"onUpdate:modelValue":l[0]||(l[0]=t=>e.template_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:o(a)("templateNamePlaceholder"),class:"input-width",maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(p,{label:o(a)("expressCompany"),prop:"express_company_id"},{default:n(()=>[s(D,{modelValue:e.express_company_id,"onUpdate:modelValue":l[1]||(l[1]=t=>e.express_company_id=t),placeholder:o(a)("expressCompanyPlaceholder"),clearable:"",onChange:M},{default:n(()=>[(m(!0),g(T,null,k(x.value,t=>(m(),V(B,{key:t.company_id,label:t.company_name,value:t.company_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),U(s(p,{label:o(a)("expType"),prop:"exp_type"},{default:n(()=>[s(C,{modelValue:e.exp_type,"onUpdate:modelValue":l[2]||(l[2]=t=>e.exp_type=t)},{default:n(()=>[(m(!0),g(T,null,k(_.value,(t,b)=>(m(),V(E,{key:b,value:t.value},{default:n(()=>[h(d(t.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[I,_.value.length]]),U(s(p,{label:o(a)("printStyle")},{default:n(()=>[i("div",null,[s(D,{modelValue:e.print_style,"onUpdate:modelValue":l[3]||(l[3]=t=>e.print_style=t),placeholder:o(a)("printStylePlaceholder"),clearable:""},{default:n(()=>[(m(!0),g(T,null,k(v.value,(t,b)=>(m(),V(B,{key:b,label:t.template_name,value:t.template_size},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),i("div",ve,d(o(a)("printStyleTips1")),1),i("div",he,d(o(a)("printStyleTips2")),1)])]),_:1},8,["label"]),[[I,v.value.length]])]),_:1}),s(S,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[i("h3",ye,d(o(a)("otherSettings")),1),s(p,{label:o(a)("customerName")},{default:n(()=>[i("div",null,[s(c,{modelValue:e.customer_name,"onUpdate:modelValue":l[4]||(l[4]=t=>e.customer_name=t),modelModifiers:{trim:!0},clearable:"",class:"input-width",maxlength:"50"},null,8,["modelValue"]),i("div",be,[i("span",null,d(o(a)("customerNameTips")),1),i("a",ge,d(o(a)("examine")),1)]),i("div",Ve,[i("span",null,d(o(a)("customerNameTips1")),1),i("a",we,d(o(a)("examine")),1)])])]),_:1},8,["label"]),s(p,{label:o(a)("customerPwd")},{default:n(()=>[i("div",null,[s(c,{modelValue:e.customer_pwd,"onUpdate:modelValue":l[5]||(l[5]=t=>e.customer_pwd=t),modelModifiers:{trim:!0},clearable:"",class:"input-width",maxlength:"50"},null,8,["modelValue"]),i("div",Se,d(o(a)("customerPwdTips")),1)])]),_:1},8,["label"]),s(p,{label:o(a)("sendSite")},{default:n(()=>[i("div",null,[s(c,{modelValue:e.send_site,"onUpdate:modelValue":l[6]||(l[6]=t=>e.send_site=t),modelModifiers:{trim:!0},clearable:"",class:"input-width",maxlength:"50"},null,8,["modelValue"]),i("div",Ee,d(o(a)("sendSiteTips")),1)])]),_:1},8,["label"]),s(p,{label:o(a)("sendStaff")},{default:n(()=>[i("div",null,[s(c,{modelValue:e.send_staff,"onUpdate:modelValue":l[7]||(l[7]=t=>e.send_staff=t),modelModifiers:{trim:!0},clearable:"",class:"input-width",maxlength:"50"},null,8,["modelValue"]),i("div",Te,d(o(a)("sendStaffTips")),1)])]),_:1},8,["label"]),s(p,{label:o(a)("monthCode")},{default:n(()=>[i("div",null,[s(c,{modelValue:e.month_code,"onUpdate:modelValue":l[8]||(l[8]=t=>e.month_code=t),modelModifiers:{trim:!0},clearable:"",class:"input-width",maxlength:"50"},null,8,["modelValue"]),i("div",ke,d(o(a)("monthCodeTips")),1)])]),_:1},8,["label"]),s(p,{label:o(a)("payType")},{default:n(()=>[s(C,{modelValue:e.pay_type,"onUpdate:modelValue":l[9]||(l[9]=t=>e.pay_type=t)},{default:n(()=>[(m(!0),g(T,null,k(R.value,(t,b)=>(m(),V(E,{value:parseInt(b)},{default:n(()=>[h(d(t),1)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(p,{label:o(a)("isNotice")},{default:n(()=>[i("div",null,[s(C,{modelValue:e.is_notice,"onUpdate:modelValue":l[10]||(l[10]=t=>e.is_notice=t)},{default:n(()=>[s(E,{value:1},{default:n(()=>[h(d(o(a)("yes")),1)]),_:1}),s(E,{value:0},{default:n(()=>[h(d(o(a)("no")),1)]),_:1})]),_:1},8,["modelValue"]),i("div",Ce,d(o(a)("isNoticeTips")),1)])]),_:1},8,["label"]),s(p,{label:o(a)("status")},{default:n(()=>[s(F,{modelValue:e.status,"onUpdate:modelValue":l[11]||(l[11]=t=>e.status=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:o(a)("isDefault")},{default:n(()=>[s(F,{modelValue:e.is_default,"onUpdate:modelValue":l[12]||(l[12]=t=>e.is_default=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[H,w.value]]),i("div",Ue,[i("div",Ne,[s(j,{type:"primary",loading:y.value,onClick:l[13]||(l[13]=t=>A(P.value))},{default:n(()=>[h(d(o(a)("save")),1)]),_:1},8,["loading"]),s(j,{onClick:l[14]||(l[14]=t=>q())},{default:n(()=>[h(d(o(a)("cancel")),1)]),_:1})])])])}}});export{Xe as default};
