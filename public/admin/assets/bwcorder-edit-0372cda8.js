import{d as O,r as c,n as _,l as I,q as e,h as f,s as V,w as t,a as R,e as d,br as P,i as T,t as w,u as r,R as C,K as D,L as z,M as N,E as B,X as F,Y as L}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import E from"./index-92c2e799.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{e as k,b as j,c as K}from"./bwcorder-839e27b7.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";import"./attachment-a9811edd.js";import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-75313763.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const M={class:"dialog-footer"},ye=O({__name:"bwcorder-edit",emits:["complete"],setup(X,{expose:U,emit:x}){let m=c(!1);const s=c(!1),g={id:"",member_id:"",orderSn:"",order_no:"",userOrderSn:"",paidAmount:"",shopOriginId:"",orderTelephone:"",name:"",logo:"",address:"",platform:"",platformName:"",platformLogo:"",source:"",actionUrl:"",planId:"",planTypeCh:"",planTypeDescCh:"",plan:"",commissionType:"",sid:"",minAmount:"",maxAmount:"",commission:"",commissionRatio:"",ecommission:"",ecommissionRatio:"",state:"",createTime:"",finishedTime:"",xgzSettleStatus:"",xgzSettleTime:"",close_time:"",reason:"",fanxian:"",is_fanxian:""},a=_({...g}),b=c(),q=I(()=>({member_id:[{required:!0,message:e("memberIdPlaceholder"),trigger:"blur"}],orderSn:[{required:!0,message:e("orderSnPlaceholder"),trigger:"blur"}],order_no:[{required:!0,message:e("orderNoPlaceholder"),trigger:"blur"}],userOrderSn:[{required:!0,message:e("userOrderSnPlaceholder"),trigger:"blur"}],paidAmount:[{required:!0,message:e("paidAmountPlaceholder"),trigger:"blur"}],shopOriginId:[{required:!0,message:e("shopOriginIdPlaceholder"),trigger:"blur"}],orderTelephone:[{required:!0,message:e("orderTelephonePlaceholder"),trigger:"blur"}],name:[{required:!0,message:e("namePlaceholder"),trigger:"blur"}],logo:[{required:!0,message:e("logoPlaceholder"),trigger:"blur"}],address:[{required:!0,message:e("addressPlaceholder"),trigger:"blur"}],platform:[{required:!0,message:e("platformPlaceholder"),trigger:"blur"}],platformName:[{required:!0,message:e("platformNamePlaceholder"),trigger:"blur"}],platformLogo:[{required:!0,message:e("platformLogoPlaceholder"),trigger:"blur"}],source:[{required:!0,message:e("sourcePlaceholder"),trigger:"blur"}],actionUrl:[{required:!0,message:e("actionUrlPlaceholder"),trigger:"blur"}],planId:[{required:!0,message:e("planIdPlaceholder"),trigger:"blur"}],planTypeCh:[{required:!0,message:e("planTypeChPlaceholder"),trigger:"blur"}],planTypeDescCh:[{required:!0,message:e("planTypeDescChPlaceholder"),trigger:"blur"}],plan:[{required:!0,message:e("planPlaceholder"),trigger:"blur"}],commissionType:[{required:!0,message:e("commissionTypePlaceholder"),trigger:"blur"}],sid:[{required:!0,message:e("sidPlaceholder"),trigger:"blur"}],minAmount:[{required:!0,message:e("minAmountPlaceholder"),trigger:"blur"}],maxAmount:[{required:!0,message:e("maxAmountPlaceholder"),trigger:"blur"}],commission:[{required:!0,message:e("commissionPlaceholder"),trigger:"blur"}],commissionRatio:[{required:!0,message:e("commissionRatioPlaceholder"),trigger:"blur"}],ecommission:[{required:!0,message:e("ecommissionPlaceholder"),trigger:"blur"}],ecommissionRatio:[{required:!0,message:e("ecommissionRatioPlaceholder"),trigger:"blur"}],state:[{required:!0,message:e("statePlaceholder"),trigger:"blur"}],createTime:[{required:!0,message:e("createTimePlaceholder"),trigger:"blur"}],finishedTime:[{required:!0,message:e("finishedTimePlaceholder"),trigger:"blur"}],xgzSettleStatus:[{required:!0,message:e("xgzSettleStatusPlaceholder"),trigger:"blur"}],xgzSettleTime:[{required:!0,message:e("xgzSettleTimePlaceholder"),trigger:"blur"}],close_time:[{required:!0,message:e("closeTimePlaceholder"),trigger:"blur"}],reason:[{required:!0,message:e("reasonPlaceholder"),trigger:"blur"}],fanxian:[{required:!0,message:e("fanxianPlaceholder"),trigger:"blur"}],is_fanxian:[{required:!0,message:e("isFanxianPlaceholder"),trigger:"blur"}]})),S=async n=>{if(s.value||!n)return;let l=a.id?k:j;await n.validate(async i=>{i&&(s.value=!0,l(a).then(p=>{s.value=!1,m.value=!1,x("complete")}).catch(p=>{s.value=!1}))})};return U({showDialog:m,setFormData:async(n=null)=>{if(Object.assign(a,g),s.value=!0,n){const l=await(await K(n.id)).data;l&&Object.keys(a).forEach(i=>{l[i]!=null&&(a[i]=l[i])})}s.value=!1}}),(n,l)=>{const i=D,u=z,p=E,y=N,h=B,v=F,A=L;return f(),V(v,{modelValue:r(m),"onUpdate:modelValue":l[38]||(l[38]=o=>P(m)?m.value=o:m=o),title:a.id?r(e)("updateBwcOrder"):r(e)("addBwcOrder"),width:"50%",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:t(()=>[R("span",M,[d(h,{onClick:l[36]||(l[36]=o=>P(m)?m.value=!1:m=!1)},{default:t(()=>[T(w(r(e)("cancel")),1)]),_:1}),d(h,{type:"primary",loading:s.value,onClick:l[37]||(l[37]=o=>S(b.value))},{default:t(()=>[T(w(r(e)("confirm")),1)]),_:1},8,["loading"])])]),default:t(()=>[C((f(),V(y,{model:a,"label-width":"120px",ref_key:"formRef",ref:b,rules:r(q),class:"page-form"},{default:t(()=>[d(u,{label:r(e)("memberId")},{default:t(()=>[d(i,{modelValue:a.member_id,"onUpdate:modelValue":l[0]||(l[0]=o=>a.member_id=o),clearable:"",placeholder:r(e)("memberIdPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("orderSn")},{default:t(()=>[d(i,{modelValue:a.orderSn,"onUpdate:modelValue":l[1]||(l[1]=o=>a.orderSn=o),clearable:"",placeholder:r(e)("orderSnPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("orderNo")},{default:t(()=>[d(i,{modelValue:a.order_no,"onUpdate:modelValue":l[2]||(l[2]=o=>a.order_no=o),clearable:"",placeholder:r(e)("orderNoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("userOrderSn")},{default:t(()=>[d(i,{modelValue:a.userOrderSn,"onUpdate:modelValue":l[3]||(l[3]=o=>a.userOrderSn=o),clearable:"",placeholder:r(e)("userOrderSnPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("paidAmount")},{default:t(()=>[d(i,{modelValue:a.paidAmount,"onUpdate:modelValue":l[4]||(l[4]=o=>a.paidAmount=o),clearable:"",placeholder:r(e)("paidAmountPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("shopOriginId")},{default:t(()=>[d(i,{modelValue:a.shopOriginId,"onUpdate:modelValue":l[5]||(l[5]=o=>a.shopOriginId=o),clearable:"",placeholder:r(e)("shopOriginIdPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("orderTelephone")},{default:t(()=>[d(i,{modelValue:a.orderTelephone,"onUpdate:modelValue":l[6]||(l[6]=o=>a.orderTelephone=o),clearable:"",placeholder:r(e)("orderTelephonePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("name")},{default:t(()=>[d(i,{modelValue:a.name,"onUpdate:modelValue":l[7]||(l[7]=o=>a.name=o),clearable:"",placeholder:r(e)("namePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("logo")},{default:t(()=>[d(p,{modelValue:a.logo,"onUpdate:modelValue":l[8]||(l[8]=o=>a.logo=o)},null,8,["modelValue"])]),_:1},8,["label"]),d(u,{label:r(e)("address")},{default:t(()=>[d(i,{modelValue:a.address,"onUpdate:modelValue":l[9]||(l[9]=o=>a.address=o),clearable:"",placeholder:r(e)("addressPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("platform")},{default:t(()=>[d(i,{modelValue:a.platform,"onUpdate:modelValue":l[10]||(l[10]=o=>a.platform=o),clearable:"",placeholder:r(e)("platformPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("platformName")},{default:t(()=>[d(i,{modelValue:a.platformName,"onUpdate:modelValue":l[11]||(l[11]=o=>a.platformName=o),clearable:"",placeholder:r(e)("platformNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("platformLogo")},{default:t(()=>[d(p,{modelValue:a.platformLogo,"onUpdate:modelValue":l[12]||(l[12]=o=>a.platformLogo=o)},null,8,["modelValue"])]),_:1},8,["label"]),d(u,{label:r(e)("source")},{default:t(()=>[d(i,{modelValue:a.source,"onUpdate:modelValue":l[13]||(l[13]=o=>a.source=o),clearable:"",placeholder:r(e)("sourcePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("actionUrl")},{default:t(()=>[d(i,{modelValue:a.actionUrl,"onUpdate:modelValue":l[14]||(l[14]=o=>a.actionUrl=o),clearable:"",placeholder:r(e)("actionUrlPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("planId")},{default:t(()=>[d(i,{modelValue:a.planId,"onUpdate:modelValue":l[15]||(l[15]=o=>a.planId=o),clearable:"",placeholder:r(e)("planIdPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("planTypeCh")},{default:t(()=>[d(i,{modelValue:a.planTypeCh,"onUpdate:modelValue":l[16]||(l[16]=o=>a.planTypeCh=o),clearable:"",placeholder:r(e)("planTypeChPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("planTypeDescCh")},{default:t(()=>[d(i,{modelValue:a.planTypeDescCh,"onUpdate:modelValue":l[17]||(l[17]=o=>a.planTypeDescCh=o),clearable:"",placeholder:r(e)("planTypeDescChPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("plan")},{default:t(()=>[d(i,{modelValue:a.plan,"onUpdate:modelValue":l[18]||(l[18]=o=>a.plan=o),clearable:"",placeholder:r(e)("planPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("commissionType")},{default:t(()=>[d(i,{modelValue:a.commissionType,"onUpdate:modelValue":l[19]||(l[19]=o=>a.commissionType=o),clearable:"",placeholder:r(e)("commissionTypePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("sid")},{default:t(()=>[d(i,{modelValue:a.sid,"onUpdate:modelValue":l[20]||(l[20]=o=>a.sid=o),clearable:"",placeholder:r(e)("sidPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("minAmount")},{default:t(()=>[d(i,{modelValue:a.minAmount,"onUpdate:modelValue":l[21]||(l[21]=o=>a.minAmount=o),clearable:"",placeholder:r(e)("minAmountPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("maxAmount")},{default:t(()=>[d(i,{modelValue:a.maxAmount,"onUpdate:modelValue":l[22]||(l[22]=o=>a.maxAmount=o),clearable:"",placeholder:r(e)("maxAmountPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("commission")},{default:t(()=>[d(i,{modelValue:a.commission,"onUpdate:modelValue":l[23]||(l[23]=o=>a.commission=o),clearable:"",placeholder:r(e)("commissionPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("commissionRatio")},{default:t(()=>[d(i,{modelValue:a.commissionRatio,"onUpdate:modelValue":l[24]||(l[24]=o=>a.commissionRatio=o),clearable:"",placeholder:r(e)("commissionRatioPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("ecommission")},{default:t(()=>[d(i,{modelValue:a.ecommission,"onUpdate:modelValue":l[25]||(l[25]=o=>a.ecommission=o),clearable:"",placeholder:r(e)("ecommissionPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("ecommissionRatio")},{default:t(()=>[d(i,{modelValue:a.ecommissionRatio,"onUpdate:modelValue":l[26]||(l[26]=o=>a.ecommissionRatio=o),clearable:"",placeholder:r(e)("ecommissionRatioPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("state")},{default:t(()=>[d(i,{modelValue:a.state,"onUpdate:modelValue":l[27]||(l[27]=o=>a.state=o),clearable:"",placeholder:r(e)("statePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("createTime")},{default:t(()=>[d(i,{modelValue:a.createTime,"onUpdate:modelValue":l[28]||(l[28]=o=>a.createTime=o),clearable:"",placeholder:r(e)("createTimePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("finishedTime")},{default:t(()=>[d(i,{modelValue:a.finishedTime,"onUpdate:modelValue":l[29]||(l[29]=o=>a.finishedTime=o),clearable:"",placeholder:r(e)("finishedTimePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("xgzSettleStatus")},{default:t(()=>[d(i,{modelValue:a.xgzSettleStatus,"onUpdate:modelValue":l[30]||(l[30]=o=>a.xgzSettleStatus=o),clearable:"",placeholder:r(e)("xgzSettleStatusPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("xgzSettleTime")},{default:t(()=>[d(i,{modelValue:a.xgzSettleTime,"onUpdate:modelValue":l[31]||(l[31]=o=>a.xgzSettleTime=o),clearable:"",placeholder:r(e)("xgzSettleTimePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("closeTime")},{default:t(()=>[d(i,{modelValue:a.close_time,"onUpdate:modelValue":l[32]||(l[32]=o=>a.close_time=o),clearable:"",placeholder:r(e)("closeTimePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("reason")},{default:t(()=>[d(i,{modelValue:a.reason,"onUpdate:modelValue":l[33]||(l[33]=o=>a.reason=o),clearable:"",placeholder:r(e)("reasonPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("fanxian")},{default:t(()=>[d(i,{modelValue:a.fanxian,"onUpdate:modelValue":l[34]||(l[34]=o=>a.fanxian=o),clearable:"",placeholder:r(e)("fanxianPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(u,{label:r(e)("isFanxian")},{default:t(()=>[d(i,{modelValue:a.is_fanxian,"onUpdate:modelValue":l[35]||(l[35]=o=>a.is_fanxian=o),clearable:"",placeholder:r(e)("isFanxianPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[A,s.value]])]),_:1},8,["modelValue","title"])}}});export{ye as default};
