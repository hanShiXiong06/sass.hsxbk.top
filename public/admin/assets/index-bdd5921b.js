import{d as M,f as B,r as h,n as $,l as N,h as m,c as x,R as q,s as y,w as t,u as o,a as p,t as i,q as e,e as l,i as r,F as V,B as c,b_ as I,c8 as A,a3 as H,U as K,at as j,au as G,L as Y,a7 as z,K as J,E as Q,M as W,Y as X}from"./index-2a89d409.js";/* empty css                   *//* empty css                *//* empty css                  */import Z from"./index-deaeeb3b.js";/* empty css                 *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import ee from"./goods-select-popup-f4e23f73.js";import{g as oe,s as te}from"./config-220985c6.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-5224d015.js";/* empty css                  *//* empty css                   */import"./attachment-851184b5.js";import"./index.vue_vue_type_script_setup_true_lang-bee04220.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-f1303253.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-4e818418.js";import"./sortable.esm-be94e56d.js";/* empty css                 *//* empty css                        *//* empty css                          */import"./goods_default-995568ac.js";import"./goods-60ec1a36.js";const ae={class:"main-container"},ne={class:"text text-[14px] leading-[25px]"},ie={class:"flex flex-col"},de={class:"text-[#999] text-[12px]"},se={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},re={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},pe={class:"text text-[14px] leading-[25px]"},ue={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},_e={class:"text text-[14px] leading-[25px]"},me={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},ce={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},fe={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},xe={key:0,class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},ye={key:1,class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},be={key:2,class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},ge={key:3,class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},ve={class:"text text-[14px] leading-[25px]"},he={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},Ve={class:"fixed-footer-wrap"},Te={class:"fixed-footer"},we=M({__name:"index",setup(Ce){const L=B(),g=h(!1),n=$({...{is_fenxiao:"1",level:"1",is_examine:"1",self_purchase_rebate:"1",child_condition:"1",apply_type:"2",fenxiao_condition:"0",consume_count:"0",consume_money:"0",goods_ids:"",consume_condition:"1",is_show_apply:"1",apply_head:"",one_rate:"",two_rate:"",team_rate:"",team_flat_rate:""}}),T={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},k=(u,a,d)=>a?a<=0?d(new Error(e("consumeCountPlaceholderTwo"))):T.number.test(a)?d():d(new Error(e("consumeCountPlaceholderThree"))):d(new Error(e("consumeCountPlaceholderOne"))),F=(u,a,d)=>a?T.digit.test(a)?a<=0?d(new Error(e("consumeMoneyPlaceholderThree"))):d():d(new Error(e("consumeMoneyPlaceholderTwo"))):d(new Error(e("consumeMoneyPlaceholderOne"))),O=N(()=>({consume_count:[{required:!0,validator:k,trigger:"blur"}],consume_money:[{required:!0,validator:F,trigger:"blur"}]})),w=h();(()=>{g.value=!0,oe().then(u=>{Object.keys(n).forEach(a=>{u.data[a]!=null&&(n[a]=u.data[a]),n.goods_ids=u.data.goods_ids&&u.data.goods_ids!="0"?u.data.goods_ids.split(","):[]}),g.value=!1})})();const v=h(!1),U=()=>{var a;var u=H(n);n.apply_type!="3"&&n.fenxiao_condition=="3"&&(n.goods_ids.length||K({type:"warning",message:`${e("goodsIdsPlaceholder")}`})),u.goods_ids=u.goods_ids.join(),(a=w.value)==null||a.validate(d=>{if(d){if(v.value)return;v.value=!0,te(u).then(f=>{v.value=!1}).catch(()=>{v.value=!1})}})},P=u=>{let a=L.resolve(`/setting/agreement/edit?key=${u}`);window.open(a.href," blank")};return(u,a)=>{const d=j,f=G,_=Y,b=z,C=J,R=Z,E=Q,D=W,S=X;return m(),x("div",ae,[q((m(),y(b,{class:"card !border-none",shadow:"never"},{default:t(()=>[g.value?c("",!0):(m(),y(D,{key:0,class:"page-form",model:n,"label-width":"180px",rules:o(O),ref_key:"formRef",ref:w},{default:t(()=>[p("div",ne,i(o(e)("titleOne")),1),l(b,{class:"card !border-none",shadow:"never"},{default:t(()=>[l(_,{label:o(e)("isFenxiao")},{default:t(()=>[l(f,{modelValue:n.is_fenxiao,"onUpdate:modelValue":a[0]||(a[0]=s=>n.is_fenxiao=s)},{default:t(()=>[l(d,{label:"1"},{default:t(()=>[r(i(o(e)("open")),1)]),_:1}),l(d,{label:"0"},{default:t(()=>[r(i(o(e)("close")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),n.is_fenxiao!="0"?(m(),x(V,{key:0},[l(_,{label:o(e)("level")},{default:t(()=>[p("div",ie,[l(f,{modelValue:n.level,"onUpdate:modelValue":a[1]||(a[1]=s=>n.level=s)},{default:t(()=>[l(d,{label:"1"},{default:t(()=>[r(i(o(e)("levelLabelOne")),1)]),_:1}),l(d,{label:"2"},{default:t(()=>[r(i(o(e)("levelLabelTwo")),1)]),_:1})]),_:1},8,["modelValue"]),p("span",de,i(o(e)("fenxiaoHint")),1)])]),_:1},8,["label"]),l(_,{label:o(e)("isExamine")},{default:t(()=>[l(f,{modelValue:n.is_examine,"onUpdate:modelValue":a[2]||(a[2]=s=>n.is_examine=s)},{default:t(()=>[l(d,{label:"1"},{default:t(()=>[r(i(o(e)("yes")),1)]),_:1}),l(d,{label:"0"},{default:t(()=>[r(i(o(e)("no")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(_,{label:o(e)("selfPurchaseRebate")},{default:t(()=>[p("div",null,[l(f,{modelValue:n.self_purchase_rebate,"onUpdate:modelValue":a[3]||(a[3]=s=>n.self_purchase_rebate=s)},{default:t(()=>[l(d,{label:"1"},{default:t(()=>[r(i(o(e)("open")),1)]),_:1}),l(d,{label:"0"},{default:t(()=>[r(i(o(e)("close")),1)]),_:1})]),_:1},8,["modelValue"]),p("p",se,i(o(e)("selfPurchaseRebateTipOne")),1),p("p",re,i(o(e)("selfPurchaseRebateTipTwo")),1)])]),_:1},8,["label"])],64)):c("",!0)]),_:1}),n.is_fenxiao!="0"?(m(),x(V,{key:0},[p("div",pe,i(o(e)("titleTwo")),1),l(b,{class:"card !border-none",shadow:"never"},{default:t(()=>[l(_,{label:o(e)("childCondition")},{default:t(()=>[p("div",null,[l(f,{modelValue:n.child_condition,"onUpdate:modelValue":a[4]||(a[4]=s=>n.child_condition=s)},{default:t(()=>[l(d,{label:"1"},{default:t(()=>[r(i(o(e)("childConditionLabelOne")),1)]),_:1}),l(d,{label:"3"},{default:t(()=>[r(i(o(e)("childConditionLabelThree")),1)]),_:1})]),_:1},8,["modelValue"]),p("p",ue,i(n.child_condition=="1"?o(e)("childConditionTipOne"):o(e)("childConditionTipThree")),1)])]),_:1},8,["label"])]),_:1}),p("div",_e,i(o(e)("titleThree")),1),l(b,{class:"card !border-none",shadow:"never"},{default:t(()=>[l(_,{label:o(e)("applyType")},{default:t(()=>[p("div",null,[l(f,{modelValue:n.apply_type,"onUpdate:modelValue":a[5]||(a[5]=s=>n.apply_type=s)},{default:t(()=>[l(d,{label:"2"},{default:t(()=>[r(i(o(e)("applyTypeLabelTwo")),1)]),_:1}),l(d,{label:"1"},{default:t(()=>[r(i(o(e)("applyTypeLabelOne")),1)]),_:1}),l(d,{label:"3"},{default:t(()=>[r(i(o(e)("applyTypeLabelThree")),1)]),_:1})]),_:1},8,["modelValue"]),p("p",me,i(o(e)("applyTypeTipTwo")),1),p("p",ce,i(o(e)("applyTypeTipOne")),1),p("p",fe,i(o(e)("applyTypeTipThree")),1)])]),_:1},8,["label"]),n.apply_type!="3"?(m(),y(_,{key:0,label:o(e)("fenxiaoCondition")},{default:t(()=>[p("div",null,[l(f,{modelValue:n.fenxiao_condition,"onUpdate:modelValue":a[6]||(a[6]=s=>n.fenxiao_condition=s)},{default:t(()=>[l(d,{label:"0"},{default:t(()=>[r(i(o(e)("fenxiaoConditionLabelOne")),1)]),_:1}),l(d,{label:"1"},{default:t(()=>[r(i(o(e)("fenxiaoConditionLabelTwo")),1)]),_:1}),l(d,{label:"2"},{default:t(()=>[r(i(o(e)("fenxiaoConditionLabelThree")),1)]),_:1}),l(d,{label:"3"},{default:t(()=>[r(i(o(e)("fenxiaoConditionLabelFour")),1)]),_:1})]),_:1},8,["modelValue"]),n.fenxiao_condition=="0"?(m(),x("p",xe,i(o(e)("fenxiaoConditionTipOne")),1)):c("",!0),n.fenxiao_condition=="1"?(m(),x("p",ye,i(o(e)("fenxiaoConditionTipTwo")),1)):c("",!0),n.fenxiao_condition=="2"?(m(),x("p",be,i(o(e)("fenxiaoConditionTipThree")),1)):c("",!0),n.fenxiao_condition=="3"?(m(),x("p",ge,i(o(e)("fenxiaoConditionTipFour")),1)):c("",!0)])]),_:1},8,["label"])):c("",!0),n.fenxiao_condition!="0"&&n.apply_type!="3"?(m(),x(V,{key:1},[n.fenxiao_condition=="1"?(m(),y(_,{key:0,label:o(e)("consumeCount"),prop:"consume_count"},{default:t(()=>[l(C,{modelValue:n.consume_count,"onUpdate:modelValue":a[7]||(a[7]=s=>n.consume_count=s),clearable:"",class:"input-width",onKeyup:a[8]||(a[8]=s=>o(I)(s))},{append:t(()=>[r("次")]),_:1},8,["modelValue"])]),_:1},8,["label"])):c("",!0),n.fenxiao_condition=="2"?(m(),y(_,{key:1,label:o(e)("consumeMoney"),prop:"consume_money"},{default:t(()=>[l(C,{modelValue:n.consume_money,"onUpdate:modelValue":a[9]||(a[9]=s=>n.consume_money=s),clearable:"",class:"input-width",onKeyup:a[10]||(a[10]=s=>o(A)(s))},{append:t(()=>[r("元")]),_:1},8,["modelValue"])]),_:1},8,["label"])):c("",!0),n.fenxiao_condition=="3"?(m(),y(_,{key:2},{default:t(()=>[l(ee,{ref:"goodsSelectPopupRef",modelValue:n.goods_ids,"onUpdate:modelValue":a[11]||(a[11]=s=>n.goods_ids=s),min:1,max:9999},null,8,["modelValue"])]),_:1})):c("",!0),l(_,{label:o(e)("consumeCondition")},{default:t(()=>[l(f,{modelValue:n.consume_condition,"onUpdate:modelValue":a[12]||(a[12]=s=>n.consume_condition=s)},{default:t(()=>[l(d,{label:"1"},{default:t(()=>[r(i(o(e)("consumeConditionLabelOne")),1)]),_:1}),l(d,{label:"2"},{default:t(()=>[r(i(o(e)("consumeConditionLabelTwo")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])],64)):c("",!0)]),_:1}),p("div",ve,i(o(e)("titlefour")),1),l(b,{class:"card !border-none",shadow:"never"},{default:t(()=>[l(_,{label:o(e)("isShowApply")},{default:t(()=>[l(f,{modelValue:n.is_show_apply,"onUpdate:modelValue":a[13]||(a[13]=s=>n.is_show_apply=s)},{default:t(()=>[l(d,{label:"1"},{default:t(()=>[r(i(o(e)("isShowApplyLabelOne")),1)]),_:1}),l(d,{label:"0"},{default:t(()=>[r(i(o(e)("isShowApplyLabelTwo")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(_,{label:o(e)("applyHead")},{default:t(()=>[p("div",null,[l(R,{modelValue:n.apply_head,"onUpdate:modelValue":a[14]||(a[14]=s=>n.apply_head=s),limit:1},null,8,["modelValue"]),p("p",he,i(o(e)("applyHeadTip")),1)])]),_:1},8,["label"]),l(_,{label:o(e)("protocolSettings")},{default:t(()=>[l(E,{type:"primary",link:"",onClick:a[15]||(a[15]=s=>P("fenxiao_service"))},{default:t(()=>[r(i(o(e)("settings")),1)]),_:1})]),_:1},8,["label"])]),_:1})],64)):c("",!0)]),_:1},8,["model","rules"]))]),_:1})),[[S,g.value]]),p("div",Ve,[p("div",Te,[l(E,{type:"primary",onClick:U},{default:t(()=>[r(i(o(e)("save")),1)]),_:1})])])])}}});const yo=le(we,[["__scopeId","data-v-462b3364"]]);export{yo as default};
