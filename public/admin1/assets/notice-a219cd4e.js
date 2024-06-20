import{d as defineComponent,x as useRoute,r as ref,n as reactive,Y as resolveComponent,P as withDirectives,h as openBlock,c as createElementBlock,a as createBaseVNode,t as toDisplayString,u as unref,e as createVNode,w as withCtx,q as t,v as normalizeClass,B as createCommentVNode,aa as ElTableColumn,X as ElIcon,ac as ElTable,a0 as ElCard,U as vLoading}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                *//* empty css                        */import{c as getNoticeList}from"./notice-12272e91.js";import{_ as _sfc_main$1}from"./notice-sms.vue_vue_type_script_setup_true_lang-2f16035c.js";import{_ as _sfc_main$2}from"./notice-wechat.vue_vue_type_script_setup_true_lang-05f1c23b.js";import{_ as _sfc_main$3}from"./notice-weapp.vue_vue_type_script_setup_true_lang-91f5154b.js";import{_ as _export_sfc}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */const _hoisted_1={class:"main-container bg-[#fff] rounded-[4px]"},_hoisted_2={class:"flex ml-[18px] justify-between items-center pt-[20px]"},_hoisted_3={class:"text-page-title"},_hoisted_4={class:"panel-title !text-base"},_hoisted_5={class:"flex flex-row flex-wrap m-[-4px]"},_hoisted_6={class:"flex"},_hoisted_7=["onClick"],_hoisted_8={class:"ml-0.5"},_hoisted_9=["onClick"],_hoisted_10={class:"ml-0.5"},_hoisted_11=["onClick"],_hoisted_12={class:"ml-0.5"},_hoisted_13={class:"panel-title !text-base"},_hoisted_14={class:"flex flex-row flex-wrap m-[-4px]"},_hoisted_15={class:"flex"},_hoisted_16=["onClick"],_hoisted_17={class:"ml-0.5"},_hoisted_18=["onClick"],_hoisted_19={class:"ml-0.5"},_hoisted_20=["onClick"],_hoisted_21={class:"ml-0.5"},_sfc_main=defineComponent({__name:"notice",setup(__props){const route=useRoute(),pageName=route.meta.title,smsDialog=ref(null),wechatDialog=ref(null),weappDialog=ref(null),noticeTableData=reactive({loading:!0,buyer:[],seller:[]}),loadNoticeList=()=>{noticeTableData.loading=!0,getNoticeList({}).then(n=>{noticeTableData.buyer=[],noticeTableData.seller=[],n.data.forEach(s=>{if(s.notice.length){const a=[],o=[];Object.keys(s.notice).forEach((l,r)=>{const i=s.notice[l];i.addon_name=s.title,i.receiver_type==1?a.push(i):o.push(i)}),a.length&&(a[0].rowspan=a.length,noticeTableData.buyer=noticeTableData.buyer.concat(a)),o.length&&(o[0].rowspan=o.length,noticeTableData.seller=noticeTableData.seller.concat(o))}}),noticeTableData.loading=!1}).catch(n=>{console.log(n),noticeTableData.loading=!1})},buyerSpan=n=>{if(n.columnIndex===0)return n.row.rowspan?{rowspan:n.row.rowspan,colspan:1}:{rowspan:0,colspan:0}};loadNoticeList();const setNotice=(data,type)=>{data.type=type,eval("data.status=data.is_"+type),eval(type+"Dialog.value.setFormData(data)"),eval(type+"Dialog.value.showDialog = true;")};return(n,s)=>{const a=ElTableColumn,o=resolveComponent("SuccessFilled"),l=ElIcon,r=ElTable,i=ElCard,d=vLoading;return withDirectives((openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createBaseVNode("span",_hoisted_3,toDisplayString(unref(pageName)),1)]),createVNode(i,{class:"box-card !border-none",shadow:"never"},{default:withCtx(()=>[createBaseVNode("h3",_hoisted_4,toDisplayString(unref(t)("buyerNotice")),1),createBaseVNode("div",_hoisted_5,[createVNode(r,{data:noticeTableData.buyer,size:"large","span-method":buyerSpan},{default:withCtx(()=>[createVNode(a,{prop:"addon_name",label:unref(t)("addon"),"min-width":"120"},null,8,["label"]),createVNode(a,{prop:"name",label:unref(t)("noticeType"),"min-width":"120"},null,8,["label"]),createVNode(a,{label:unref(t)("operation"),align:"right",fixed:"right","min-width":"300"},{default:withCtx(({row:e})=>[createBaseVNode("div",_hoisted_6,[e.support_type.indexOf("sms")!=-1?(openBlock(),createElementBlock("div",{key:0,class:"text-sm mr-1 flex items-center cursor-pointer",onClick:c=>setNotice(e,"sms")},[createVNode(l,{class:normalizeClass(["text-[15px] mr-[3px]",e.is_sms?"open":""])},{default:withCtx(()=>[createVNode(o)]),_:2},1032,["class"]),createBaseVNode("span",_hoisted_8,toDisplayString(unref(t)("sms")),1)],8,_hoisted_7)):createCommentVNode("",!0),e.support_type.indexOf("wechat")!=-1?(openBlock(),createElementBlock("div",{key:1,class:"text-sm flex items-center cursor-pointer ml-[20px]",onClick:c=>setNotice(e,"wechat")},[createVNode(l,{class:normalizeClass(["text-[15px] mr-[3px]",e.is_wechat?"open":""])},{default:withCtx(()=>[createVNode(o)]),_:2},1032,["class"]),createBaseVNode("span",_hoisted_10,toDisplayString(unref(t)("wechat")),1)],8,_hoisted_9)):createCommentVNode("",!0),e.support_type.indexOf("weapp")!=-1?(openBlock(),createElementBlock("div",{key:2,class:"text-sm flex items-center cursor-pointer ml-[20px]",onClick:c=>setNotice(e,"weapp")},[createVNode(l,{class:normalizeClass(["text-[15px] mr-[3px]",e.is_weapp?"open":""])},{default:withCtx(()=>[createVNode(o)]),_:2},1032,["class"]),createBaseVNode("span",_hoisted_12,toDisplayString(unref(t)("weapp")),1)],8,_hoisted_11)):createCommentVNode("",!0)])]),_:1},8,["label"])]),_:1},8,["data"])])]),_:1}),createVNode(i,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:withCtx(()=>[createBaseVNode("h3",_hoisted_13,toDisplayString(unref(t)("sellerNotice")),1),createBaseVNode("div",_hoisted_14,[createVNode(r,{data:noticeTableData.seller,size:"large","span-method":buyerSpan},{default:withCtx(()=>[createVNode(a,{prop:"addon_name",label:unref(t)("addon"),"min-width":"120"},null,8,["label"]),createVNode(a,{prop:"name",label:unref(t)("noticeType"),"min-width":"120"},null,8,["label"]),createVNode(a,{label:unref(t)("operation"),align:"right",fixed:"right","min-width":"300"},{default:withCtx(({row:e})=>[createBaseVNode("div",_hoisted_15,[e.support_type.indexOf("sms")!=-1?(openBlock(),createElementBlock("div",{key:0,class:"text-sm mr-1 flex items-center cursor-pointer",onClick:c=>setNotice(e,"sms")},[createVNode(l,{class:normalizeClass(["text-[15px] mr-[3px]",e.is_sms?"open":""])},{default:withCtx(()=>[createVNode(o)]),_:2},1032,["class"]),createBaseVNode("span",_hoisted_17,toDisplayString(unref(t)("sms")),1)],8,_hoisted_16)):createCommentVNode("",!0),e.support_type.indexOf("wechat")!=-1?(openBlock(),createElementBlock("div",{key:1,class:"text-sm flex items-center cursor-pointer ml-[20px]",onClick:c=>setNotice(e,"wechat")},[createVNode(l,{class:normalizeClass(["text-[15px] mr-[3px]",e.is_wechat?"open":""])},{default:withCtx(()=>[createVNode(o)]),_:2},1032,["class"]),createBaseVNode("span",_hoisted_19,toDisplayString(unref(t)("wechat")),1)],8,_hoisted_18)):createCommentVNode("",!0),e.support_type.indexOf("weapp")!=-1?(openBlock(),createElementBlock("div",{key:2,class:"text-sm flex items-center cursor-pointer ml-[20px]",onClick:c=>setNotice(e,"weapp")},[createVNode(l,{class:normalizeClass(["text-[15px] mr-[3px]",e.is_weapp?"open":""])},{default:withCtx(()=>[createVNode(o)]),_:2},1032,["class"]),createBaseVNode("span",_hoisted_21,toDisplayString(unref(t)("weapp")),1)],8,_hoisted_20)):createCommentVNode("",!0)])]),_:1},8,["label"])]),_:1},8,["data"])])]),_:1}),createVNode(_sfc_main$1,{ref_key:"smsDialog",ref:smsDialog,onComplete:s[0]||(s[0]=e=>loadNoticeList())},null,512),createVNode(_sfc_main$2,{ref_key:"wechatDialog",ref:wechatDialog,onComplete:s[1]||(s[1]=e=>loadNoticeList())},null,512),createVNode(_sfc_main$3,{ref_key:"weappDialog",ref:weappDialog,onComplete:s[2]||(s[2]=e=>loadNoticeList())},null,512)])),[[d,noticeTableData.loading]])}}}),notice_vue_vue_type_style_index_0_scoped_55fba0f6_lang="",notice=_export_sfc(_sfc_main,[["__scopeId","data-v-55fba0f6"]]);export{notice as default};