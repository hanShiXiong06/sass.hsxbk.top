import{d as ve,x as he,f as we,r as h,n as I,l as te,q as a,R as ae,h as d,c,a as _,u as l,t as u,e as o,w as s,F as P,T as C,s as v,i as y,b_ as Ve,c8 as le,B as k,v as ke,U as xe,ax as Pe,ay as Ce,K as De,L as Ee,d0 as Ue,at as Te,au as Re,ab as Se,aC as $e,M as Me,a7 as qe,E as Fe,d1 as Ne,bO as Ye,X as Le,Y as je,p as Be,g as ze}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                    *//* empty css                    *//* empty css                *//* empty css                */import{_ as Ie}from"./index.vue_vue_type_script_setup_true_lang-05cc8415.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                       *//* empty css                 */import Oe from"./index-92c2e799.js";/* empty css                     */import"./el-form-item-4ed993c7.js";/* empty css                    */import{a2 as We,a3 as Ke,a4 as Ae,a5 as Ge,a6 as He,a7 as Xe}from"./tourism-df1c9cc5.js";import{j as Ze}from"./poster-059b46b8.js";import{_ as Je}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";import"./attachment-a9811edd.js";import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";/* empty css                        *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-75313763.js";import"./sortable.esm-be94e56d.js";const q=R=>(Be("data-v-259feb07"),R=R(),ze(),R),Qe={class:"main-container"},et={class:"detail-head"},tt=q(()=>_("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),at={class:"ml-[1px]"},lt=q(()=>_("span",{class:"adorn"},"|",-1)),ot={key:0,class:"right"},rt={key:1,class:"right"},st={key:0},dt={key:0,class:"text-[12px] text-[#999] leading-[20px]"},it={key:1,class:"text-[12px] text-[#999] leading-[20px]"},nt={class:"ml-[10px]"},ut={class:"fixed-footer-wrap"},ct={class:"fixed-footer"},pt={key:1},mt=["onClick"],_t={key:0},ft={class:"text-right text-gray-400 text-[14px] mt-[15px]"},yt={key:1},gt=q(()=>_("p",{class:"text-right text-gray-400 text-[14px] mt-[15px]"},"0.00￥",-1)),bt=[gt],vt={key:1,class:"w-full h-full"},ht={class:"text-gray-400"},wt={key:0},Vt={class:"text-right text-gray-400 text-[14px] mt-[15px]"},kt={key:1},xt=q(()=>_("p",{class:"text-right text-gray-400 text-[14px] mt-[15px]"},"0.00￥",-1)),Pt=[xt],Ct={class:"dialog-footer"},Dt=ve({__name:"edit",setup(R){const oe=he(),O=we(),F=parseInt(oe.query.id),x=h(!1),D=h("first"),W={way_id:0,way_name:"",start_city:"",end_city:"",way_character:"",fee_desc:"",group_buy_type:"",way_theme:"",travel_type:"",way_traffic:"",goods_id:0,stock:"",goods_cover:"",goods_image:"",price:"",buy_info:"",member_discount:"",poster_id:""},r=I({...W}),K=h([]);(async()=>{K.value=await(await We()).data.data})();const S=(n,e)=>{r[n]==e?r[n]="":r[n]=e};F&&(async(n=0)=>{Object.assign(r,W);const e=await(await Ke(n)).data;Object.keys(r).forEach(i=>{e[i]!=null&&(r[i]=e[i])}),e.goods&&Object.keys(r).forEach(i=>{e.goods[i]!=null&&(r[i]=e.goods[i])}),r.way_id=n,X(r.goods_id)})(F);const A=h(),re=(n,e,i)=>{const U=/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;e===""?i(new Error(a("wayPricePlaceholder"))):parseFloat(e)===0?i(new Error(a("wayPricePlaceholder1"))):parseFloat(e)>9999999999e-2?i(new Error(a("pricePlaceholder3"))):U.test(e)?i():i(new Error(a("wayPricePlaceholder2")))},se=(n,e,i)=>{r.goods_cover==""?i(new Error(a("wayCoverPlaceholder"))):i()},de=te(()=>({way_name:[{required:!0,message:a("wayTitlePlaceholder"),trigger:"blur"}],goods_cover:[{required:!0,validator:se,trigger:"blur"}],stock:[{required:!0,message:a("wayStockPlaceholder"),trigger:"blur"}],price:[{required:!0,validator:re,trigger:"blur"}],start_city:[{required:!0,message:a("startCityPlaceholder"),trigger:"blur"}],end_city:[{required:!0,message:a("endCityPlaceholder"),trigger:"blur"}]})),ie=async n=>{x.value||!n||await n.validate(async e=>{if(e){x.value=!0;const i=r;(r.way_id?Ae:Ge)(i).then(b=>{x.value=!1,b.code>=0&&r.way_id==0?(r.way_id=b.data.way_id,r.goods_id=b.data.goods_id,D.value="second"):history.back()}).catch(()=>{x.value=!1})}})},N=I([]),ne=()=>{const n=O.resolve({path:"/poster/list"});window.open(n.href)},G=(n=!1)=>{Ze({type:"tourism_way"}).then(e=>{const i=e.data;i&&(N.splice(0,N.length,...i),n&&xe({message:a("refreshSuccess"),type:"success"}))})};G();const ue=()=>{history.back()},ce=n=>{const e=parseInt(new Date().getTime()/1e3)+"",i=parseInt(new Date(n.day).getTime()/1e3)+"";return e-60*60*24<i},E=h(!1),pe=n=>{E.value=!0,p.start_date=n.day,p.is_set=1,p.price="",p.end_date="",p.member_price=1,g.value[n.day]&&(p.price=g.value[n.day].price,p.member_price=g.value[n.day].member_price)},p=I({is_set:1,start_date:"",end_date:"",price:"",member_price:1}),Y=h(!1),H=h(),me=te(()=>({price:[{required:!0,message:a("saleArrPricePlaceholder"),trigger:"blur"},{trigger:"blur",validator:(n,e,i)=>{e<=0?i(new Error(a("saleArrPriceNotZeroTips"))):i()}}]})),_e=async n=>{Y.value||!n||await n.validate(async e=>{e&&(Y.value=!0,p.goods_id=r.goods_id,He(p).then(i=>{X(r.goods_id),E.value=!1,Y.value=!1}))})},g=h([]),X=(n=0)=>{Xe({goods_id:n}).then(e=>{g.value=e.data})};return(n,e)=>{const i=Pe,U=Ce,b=De,m=Ee,$=Ue,Z=Oe,w=Te,L=Re,fe=Se,ye=$e,j=Ie,J=Me,B=qe,M=Fe,ge=Ne,Q=Ye,be=Le,ee=je;return ae((d(),c("div",Qe,[_("div",et,[_("div",{class:"left",onClick:e[0]||(e[0]=t=>l(O).push({path:"/tourism/product/way/way"}))},[tt,_("span",at,u(l(a)("returnToPreviousPage")),1),lt,l(F)?(d(),c("span",ot,u(l(a)("editWay")),1)):(d(),c("span",rt,u(l(a)("addWay")),1))])]),o(B,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[o(U,{modelValue:D.value,"onUpdate:modelValue":e[1]||(e[1]=t=>D.value=t),class:"demo-tabs"},{default:s(()=>[o(i,{label:l(a)("basicData"),name:"first"},null,8,["label"]),o(i,{label:l(a)("priceCalendar"),name:"second",disabled:!r.way_id},null,8,["label","disabled"])]),_:1},8,["modelValue"]),D.value=="first"?(d(),c("div",st,[o(B,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[o(J,{model:r,"label-width":"90px",ref_key:"formRef",ref:A,rules:l(de),class:"page-form"},{default:s(()=>[o(m,{label:l(a)("wayName"),prop:"way_name"},{default:s(()=>[o(b,{modelValue:r.way_name,"onUpdate:modelValue":e[2]||(e[2]=t=>r.way_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(a)("wayNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),(d(!0),c(P,null,C(K.value,(t,T)=>(d(),c("div",{key:T},[T=="group_buy_type"?(d(),v(m,{key:0,label:l(a)("groupBuyType")},{default:s(()=>[(d(!0),c(P,null,C(t,(V,f)=>(d(),c("span",{key:f},[o($,{style:{"margin-right":"8px"},checked:f==r.group_buy_type,onChange:z=>S("group_buy_type",f)},{default:s(()=>[y(u(V),1)]),_:2},1032,["checked","onChange"])]))),128))]),_:2},1032,["label"])):T=="travel_type"?(d(),v(m,{key:1,label:l(a)("travelType")},{default:s(()=>[(d(!0),c(P,null,C(t,(V,f)=>(d(),c("span",{key:f},[o($,{style:{"margin-right":"8px"},checked:f==r.travel_type,onChange:z=>S("travel_type",f)},{default:s(()=>[y(u(V),1)]),_:2},1032,["checked","onChange"])]))),128))]),_:2},1032,["label"])):T=="way_theme"?(d(),v(m,{key:2,label:l(a)("wayTheme")},{default:s(()=>[(d(!0),c(P,null,C(t,(V,f)=>(d(),c("span",{key:f},[o($,{style:{"margin-right":"8px"},checked:f==r.way_theme,onChange:z=>S("way_theme",f)},{default:s(()=>[y(u(V),1)]),_:2},1032,["checked","onChange"])]))),128))]),_:2},1032,["label"])):(d(),v(m,{key:3,label:l(a)("wayTraffic")},{default:s(()=>[(d(!0),c(P,null,C(t,(V,f)=>(d(),c("span",{key:f},[o($,{style:{"margin-right":"8px"},checked:f==r.way_traffic,onChange:z=>S("way_traffic",f)},{default:s(()=>[y(u(V),1)]),_:2},1032,["checked","onChange"])]))),128))]),_:2},1032,["label"]))]))),128)),o(m,{label:l(a)("wayCover"),prop:"goods_cover"},{default:s(()=>[o(Z,{modelValue:r.goods_cover,"onUpdate:modelValue":e[3]||(e[3]=t=>r.goods_cover=t)},null,8,["modelValue"])]),_:1},8,["label"]),o(m,{label:l(a)("wayImages"),prop:"goods_images"},{default:s(()=>[o(Z,{modelValue:r.goods_image,"onUpdate:modelValue":e[4]||(e[4]=t=>r.goods_image=t),limit:"10"},null,8,["modelValue"])]),_:1},8,["label"]),o(m,{label:l(a)("wayStock"),prop:"stock"},{default:s(()=>[o(b,{modelValue:r.stock,"onUpdate:modelValue":e[5]||(e[5]=t=>r.stock=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(a)("wayStockPlaceholder"),class:"input-width",onKeyup:e[6]||(e[6]=t=>l(Ve)(t))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:l(a)("wayPrice"),prop:"price"},{default:s(()=>[o(b,{modelValue:r.price,"onUpdate:modelValue":e[7]||(e[7]=t=>r.price=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(a)("wayPricePlaceholder"),class:"input-width",onKeyup:e[8]||(e[8]=t=>l(le)(t))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:l(a)("startCity"),prop:"start_city"},{default:s(()=>[o(b,{modelValue:r.start_city,"onUpdate:modelValue":e[9]||(e[9]=t=>r.start_city=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(a)("startCityPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:l(a)("endCity"),prop:"end_city"},{default:s(()=>[o(b,{modelValue:r.end_city,"onUpdate:modelValue":e[10]||(e[10]=t=>r.end_city=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(a)("endCityPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:l(a)("memberDiscount")},{default:s(()=>[_("div",null,[o(L,{modelValue:r.member_discount,"onUpdate:modelValue":e[11]||(e[11]=t=>r.member_discount=t)},{default:s(()=>[o(w,{label:""},{default:s(()=>[y(u(l(a)("nonparticipation")),1)]),_:1}),o(w,{label:"discount"},{default:s(()=>[y(u(l(a)("discount")),1)]),_:1}),o(w,{label:"fixed_discount"},{default:s(()=>[y(u(l(a)("fixedDiscount")),1)]),_:1})]),_:1},8,["modelValue"]),r.member_discount=="discount"?(d(),c("div",dt,u(l(a)("discountHint")),1)):k("",!0),r.member_discount=="fixed_discount"?(d(),c("div",it,u(l(a)("fixedDiscountHint")),1)):k("",!0)])]),_:1},8,["label"]),o(m,{label:l(a)("poster")},{default:s(()=>[o(ye,{modelValue:r.poster_id,"onUpdate:modelValue":e[12]||(e[12]=t=>r.poster_id=t),placeholder:l(a)("posterPlaceholder"),clearable:""},{default:s(()=>[(d(!0),c(P,null,C(N,t=>(d(),v(fe,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),_("div",nt,[_("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:e[13]||(e[13]=t=>G(!0))},u(l(a)("refresh")),1),_("span",{class:"cursor-pointer text-primary",onClick:ne},u(l(a)("addGoodsPoster")),1)])]),_:1},8,["label"]),o(m,{label:l(a)("buyDesc")},{default:s(()=>[o(j,{modelValue:r.buy_info,"onUpdate:modelValue":e[14]||(e[14]=t=>r.buy_info=t)},null,8,["modelValue"])]),_:1},8,["label"]),o(m,{label:l(a)("feeDesc")},{default:s(()=>[o(j,{modelValue:r.fee_desc,"onUpdate:modelValue":e[15]||(e[15]=t=>r.fee_desc=t)},null,8,["modelValue"])]),_:1},8,["label"]),o(m,{label:l(a)("wayCharacter")},{default:s(()=>[o(j,{modelValue:r.way_character,"onUpdate:modelValue":e[16]||(e[16]=t=>r.way_character=t)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),_("div",ut,[_("div",ct,[o(M,{type:"primary",onClick:e[17]||(e[17]=t=>ie(A.value))},{default:s(()=>[y(u(l(a)("save")),1)]),_:1}),o(M,{onClick:e[18]||(e[18]=t=>ue())},{default:s(()=>[y(u(l(a)("returnToPreviousPage")),1)]),_:1})])])])):k("",!0),D.value=="second"?(d(),c("div",pt,[o(B,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[o(ge,null,{"date-cell":s(({data:t})=>[ce(t)==!0?(d(),c("div",{key:0,class:ke(["w-full h-full",t.isSelected?"is-selected":""]),onClick:T=>pe(t)},[_("p",null,u(t.day.split("-").slice(1).join("-")),1),g.value&&g.value[t.day]?(d(),c("div",_t,[_("p",ft,u(g.value[t.day].price)+"￥",1)])):(d(),c("div",yt,bt))],10,mt)):(d(),c("div",vt,[_("p",ht,u(t.day.split("-").slice(1).join("-")),1),g.value&&g.value[t.day]?(d(),c("div",wt,[_("p",Vt,u(g.value[t.day].price)+"￥",1)])):(d(),c("div",kt,Pt))]))]),_:1})]),_:1})])):k("",!0)]),_:1}),o(be,{modelValue:E.value,"onUpdate:modelValue":e[27]||(e[27]=t=>E.value=t),title:l(a)("editPrice"),width:"400px","destroy-on-close":!0},{footer:s(()=>[_("span",Ct,[o(M,{onClick:e[25]||(e[25]=t=>E.value=!1)},{default:s(()=>[y(u(l(a)("cancel")),1)]),_:1}),o(M,{type:"primary",onClick:e[26]||(e[26]=t=>_e(H.value))},{default:s(()=>[y(u(l(a)("confirm")),1)]),_:1})])]),default:s(()=>[ae((d(),v(J,{model:p,"label-width":"90px",ref_key:"formRulesRef",ref:H,rules:l(me),class:"page-form"},{default:s(()=>[o(m,{label:l(a)("daySetting"),class:"items-center"},{default:s(()=>[o(L,{modelValue:p.is_set,"onUpdate:modelValue":e[19]||(e[19]=t=>p.is_set=t),class:"ml-4 input-width"},{default:s(()=>[o(w,{label:1,size:"large"},{default:s(()=>[y(u(p.start_date),1)]),_:1}),o(w,{label:2,size:"large"},{default:s(()=>[y(u(l(a)("dateRange")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),p.is_set==2?(d(),v(m,{key:0,label:l(a)("startDate"),class:"input-width"},{default:s(()=>[o(Q,{type:"date",modelValue:p.start_date,"onUpdate:modelValue":e[20]||(e[20]=t=>p.start_date=t),placeholder:l(a)("startDate"),"value-format":"YYYY-MM-DD"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):k("",!0),p.is_set==2?(d(),v(m,{key:1,label:l(a)("endDate"),class:"input-width"},{default:s(()=>[o(Q,{type:"date",modelValue:p.end_date,"onUpdate:modelValue":e[21]||(e[21]=t=>p.end_date=t),placeholder:l(a)("endDate"),"value-format":"YYYY-MM-DD"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):k("",!0),o(m,{label:l(a)("wayPrice"),class:"input-width",prop:"price"},{default:s(()=>[o(b,{modelValue:p.price,"onUpdate:modelValue":e[22]||(e[22]=t=>p.price=t),clearable:"",placeholder:l(a)("wayPricePlaceholder"),class:"input-width",onKeyup:e[23]||(e[23]=t=>l(le)(t))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r.member_discount!=""?(d(),v(m,{key:2,label:l(a)("memberPrice"),prop:"member_price",class:"items-center"},{default:s(()=>[o(L,{modelValue:p.member_price,"onUpdate:modelValue":e[24]||(e[24]=t=>p.member_price=t),class:"ml-4 input-width"},{default:s(()=>[o(w,{label:1,size:"large"},{default:s(()=>[y(u(l(a)("involved")),1)]),_:1}),o(w,{label:0,size:"large"},{default:s(()=>[y(u(l(a)("noInvolved")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):k("",!0)]),_:1},8,["model","rules"])),[[ee,x.value]])]),_:1},8,["modelValue","title"])])),[[ee,x.value]])}}});const ba=Je(Dt,[["__scopeId","data-v-259feb07"]]);export{ba as default};
