import{d as defineComponent,x as useRoute,r as ref,n as reactive,h as openBlock,c as createElementBlock,e as createVNode,w as withCtx,a as createBaseVNode,t as toDisplayString,u as unref,R as withDirectives,s as createBlock,q as t,i as createTextVNode,B as createCommentVNode,ac as ElTableColumn,ak as ElTag,E as ElButton,ad as ElTable,a7 as ElCard,Y as vLoading}from"./index-2a89d409.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css               *//* empty css                        */import{a as getDeliveryList}from"./delivery-59b4ad84.js";import{_ as _sfc_main$2}from"./yida.vue_vue_type_script_setup_true_lang-301f0534.js";import{_ as _sfc_main$1}from"./yunyang.vue_vue_type_script_setup_true_lang-bf62326c.js";import{_ as _sfc_main$3}from"./xinda.vue_vue_type_script_setup_true_lang-e16fe089.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */const _hoisted_1={class:"main-container"},_hoisted_2={class:"flex justify-between items-center"},_hoisted_3={class:"text-page-title"},_hoisted_4={class:"mt-[20px]"},_sfc_main=defineComponent({__name:"delivery_config",setup(__props){const route=useRoute(),pageName=route.meta.title,yidaDialog=ref(null),yunyangDialog=ref(null),xindaDialog=ref(null),DeliveryTableData=reactive({loading:!0,data:[]}),loadDeliveryList=()=>{DeliveryTableData.loading=!0,getDeliveryList().then(i=>{DeliveryTableData.data=i.data,DeliveryTableData.loading=!1}).catch(()=>{DeliveryTableData.loading=!1})};loadDeliveryList();const editEvent=data=>{console.log(data),eval(data.delivery_type+"Dialog.value.setFormData(data)"),eval(data.delivery_type+"Dialog.value.showDialog = true;")};return(i,a)=>{const o=ElTableColumn,l=ElTag,r=ElButton,n=ElTable,s=ElCard,d=vLoading;return openBlock(),createElementBlock("div",_hoisted_1,[createVNode(s,{class:"box-card !border-none",shadow:"never"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_2,[createBaseVNode("span",_hoisted_3,toDisplayString(unref(pageName)),1)]),createBaseVNode("div",_hoisted_4,[withDirectives((openBlock(),createBlock(n,{data:DeliveryTableData.data,size:"large"},{empty:withCtx(()=>[createBaseVNode("span",null,toDisplayString(DeliveryTableData.loading?"":unref(t)("emptyData")),1)]),default:withCtx(()=>[createVNode(o,{prop:"name",label:"渠道","min-width":"100","show-overflow-tooltip":!0}),createVNode(o,{label:"状态","min-width":"180",align:"center"},{default:withCtx(({row:e})=>[e.is_use==1?(openBlock(),createBlock(l,{key:0,class:"ml-2",type:"success"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("statusNormal")),1)]),_:1})):createCommentVNode("",!0),e.is_use==0?(openBlock(),createBlock(l,{key:1,class:"ml-2",type:"error"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("statusDeactivate")),1)]),_:1})):createCommentVNode("",!0)]),_:1}),createVNode(o,{label:unref(t)("operation"),align:"right",fixed:"right",width:"100"},{default:withCtx(({row:e})=>[createVNode(r,{type:"primary",link:"",onClick:c=>editEvent(e)},{default:withCtx(()=>[createTextVNode("设置")]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[d,DeliveryTableData.loading]])]),createVNode(_sfc_main$1,{ref_key:"yunyangDialog",ref:yunyangDialog,onComplete:a[0]||(a[0]=e=>loadDeliveryList())},null,512),createVNode(_sfc_main$2,{ref_key:"yidaDialog",ref:yidaDialog,onComplete:a[1]||(a[1]=e=>loadDeliveryList())},null,512),createVNode(_sfc_main$3,{ref_key:"xindaDialog",ref:xindaDialog,onComplete:a[2]||(a[2]=e=>loadDeliveryList())},null,512)]),_:1})])}}});export{_sfc_main as default};
