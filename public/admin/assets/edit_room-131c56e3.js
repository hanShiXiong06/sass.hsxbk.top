import{d as _e,x as fe,f as ge,r as v,n as L,l as A,q as t,h as m,c as _,a as p,u as l,t as n,e as s,w as r,c8 as H,b_ as G,F as X,T as Z,s as P,i as f,B as x,v as be,R as ve,ax as he,ay as xe,K as ye,L as Ve,d0 as we,at as ke,au as Pe,M as De,a7 as Re,E as Ce,d1 as Ee,bO as Fe,X as Ue,Y as Ie,p as Se,g as Me}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                    *//* empty css                    *//* empty css                *//* empty css                */import{_ as Ne}from"./index.vue_vue_type_script_setup_true_lang-05cc8415.js";/* empty css                       *//* empty css                 */import Te from"./index-92c2e799.js";/* empty css                     */import"./el-form-item-4ed993c7.js";/* empty css                    */import{m as qe,n as ze,o as $e,p as Ye,r as je,q as Be}from"./tourism-df1c9cc5.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";import"./attachment-a9811edd.js";import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-75313763.js";import"./sortable.esm-be94e56d.js";const C=D=>(Se("data-v-541fb24e"),D=D(),Me(),D),Ke={class:"main-container"},Le={class:"detail-head"},Ae=C(()=>p("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),He={class:"ml-[1px]"},Ge=C(()=>p("span",{class:"adorn"},"|",-1)),Xe={key:0,class:"right"},Ze={key:1,class:"right"},Je={key:0},Qe={class:"w-full"},We={class:"text-[12px] text-[#999]"},eo={class:"text-[12px] text-[#999] pl-2"},oo={class:"text-[12px] text-[#999] pl-2"},to={class:"text-[12px] text-[#999] pl-2"},lo={key:0,class:"text-[12px] text-[#999] leading-[20px]"},ao={key:1,class:"text-[12px] text-[#999] leading-[20px]"},so={class:"fixed-footer-wrap"},ro={class:"fixed-footer"},io={key:1},no=["onClick"],uo={key:0},mo={class:"text-right text-gray-400 text-[14px] mt-[15px]"},po={key:1},co=C(()=>p("p",{class:"text-right text-gray-400 text-[14px] mt-[15px]"},"0.00￥",-1)),_o=[co],fo={key:1},go={class:"text-gray-400"},bo={key:0},vo={class:"text-right text-gray-400 text-[14px] mt-[15px]"},ho={key:1},xo=C(()=>p("p",{class:"text-right text-gray-400 text-[14px] mt-[15px]"},"0.00￥",-1)),yo=[xo],Vo={class:"dialog-footer"},wo=_e({__name:"edit_room",setup(D){const M=fe(),J=ge(),N=parseInt(M.query.hotel_id),E=parseInt(M.query.id),y=v(!1),V=v("first"),Q=i=>{const e=parseInt(new Date().getTime()/1e3)+"",d=parseInt(new Date(i.day).getTime()/1e3)+"";return e-60*60*24<d},w=v(!1),W=i=>{u.start_date=i.day,u.is_set=1,u.end_date="",u.price="",w.value=!0,u.member_price=1,b.value[i.day]&&(u.price=b.value[i.day].price,u.member_price=b.value[i.day].member_price)},u=L({is_set:1,start_date:"",end_date:"",price:"",member_price:1}),T={goods_id:0,hotel_id:0,goods_name:"",goods_type:"",goods_no:"",goods_image:"",goods_cover:"",buy_content:"",goods_content:"",goods_attribute:[],price:"",is_vip:0,stock:"",room_bed:"",room_area:"",room_stay:"",room_floor:"",buy_info:"",image_thumb_small:"",member_discount:""},a=L({...T});E&&(async(i=0)=>{Object.assign(a,T);const e=await(await qe(i)).data;Object.keys(a).forEach(d=>{e[d]!=null&&d!="goods_attribute"&&(a[d]=e[d]),d=="goods_attribute"&&e[d]!=null&&(a[d]=e[d].split(",")),d=="image_thumb_small"&&e[d]!=null&&(a[d]=e[d].join(","))}),a.goods_id=i,$(a.goods_id)})(E);const q=v(),ee=(i,e,d)=>{const k=/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;e===""?d(new Error(t("pricePlaceholder"))):parseFloat(e)===0?d(new Error(t("pricePlaceholder1"))):parseFloat(e)>9999999999e-2?d(new Error(t("pricePlaceholder3"))):k.test(e)?d():d(new Error(t("pricePlaceholder2")))},oe=A(()=>({goods_name:[{required:!0,message:t("goodsNamePlaceholder"),trigger:"blur"}],stock:[{required:!0,message:t("stockPlaceholder"),trigger:"blur"}],goods_cover:[{required:!0,message:t("goodsCoverPlaceholder"),trigger:"blur"}],price:[{required:!0,validator:ee,trigger:"blur"}],goods_image:[{required:!0,validator:te,trigger:"blur"}]})),te=(i,e,d)=>{a.goods_cover==""?d(new Error(t("goodsImagePlaceholder"))):d()},le=async i=>{y.value||!i||await i.validate(async e=>{if(e){y.value=!0,typeof a.goods_attribute=="object"&&(a.goods_attribute=a.goods_attribute.join(",")),a.hotel_id=N;const d=a;(a.goods_id?ze:$e)(d).then(g=>{g.code>=0&&a.goods_id==0?(a.goods_id=g.data.id,V.value="second"):history.back(),y.value=!1}).catch(()=>{y.value=!1})}})},F=v(!1),z=v(),ae=A(()=>({price:[{required:!0,message:t("saleArrPricePlaceholder"),trigger:"blur"},{trigger:"blur",validator:(i,e,d)=>{e<=0?d(new Error(t("saleArrPriceNotZeroTips"))):parseFloat(e)>9999999999e-2?d(new Error(t("pricePlaceholder3"))):d()}}]})),se=async i=>{F.value||!i||await i.validate(async e=>{e&&(F.value=!0,u.goods_id=a.goods_id,Ye(u).then(d=>{$(a.goods_id),w.value=!1,F.value=!1}))})},re=()=>{history.back()},b=v([]),$=(i=0)=>{je({goods_id:i}).then(e=>{b.value=e.data})},Y=v([]);(()=>{Be().then(i=>{Y.value=i.data})})();const de=i=>{a.goods_attribute.length<=0?a.goods_attribute.push(i):a.goods_attribute.indexOf(i)!=-1?a.goods_attribute.splice(a.goods_attribute.indexOf(i),1):a.goods_attribute.push(i)};return(i,e)=>{const d=he,k=xe,g=ye,c=Ve,ie=we,ne=Te,h=ke,U=Pe,j=Ne,B=De,I=Re,R=Ce,ue=Ee,O=Fe,me=Ue,pe=Ie;return m(),_("div",Ke,[p("div",Le,[p("div",{class:"left",onClick:e[0]||(e[0]=o=>l(J).push(`/tourism/product/hotel/room?id=${l(N)}`))},[Ae,p("span",He,n(l(t)("returnToPreviousPage")),1)]),Ge,l(E)?(m(),_("span",Xe,n(l(t)("editRoom")),1)):(m(),_("span",Ze,n(l(t)("addRoom")),1))]),s(I,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[s(k,{modelValue:V.value,"onUpdate:modelValue":e[1]||(e[1]=o=>V.value=o),class:"demo-tabs"},{default:r(()=>[s(d,{label:l(t)("basicData"),name:"first"},null,8,["label"]),s(d,{label:l(t)("priceCalendar"),name:"second",disabled:!a.goods_id},null,8,["label","disabled"])]),_:1},8,["modelValue"]),V.value=="first"?(m(),_("div",Je,[s(I,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[s(B,{model:a,"label-width":"180px",ref_key:"formRef",ref:q,rules:l(oe),class:"page-form"},{default:r(()=>[s(c,{label:l(t)("goodsName"),prop:"goods_name"},{default:r(()=>[s(g,{modelValue:a.goods_name,"onUpdate:modelValue":e[2]||(e[2]=o=>a.goods_name=o),modelModifiers:{trim:!0},clearable:"",placeholder:l(t)("goodsNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(c,{label:l(t)("price"),prop:"price"},{default:r(()=>[p("div",Qe,[s(g,{modelValue:a.price,"onUpdate:modelValue":e[3]||(e[3]=o=>a.price=o),modelModifiers:{trim:!0},clearable:"",placeholder:l(t)("pricePlaceholder"),class:"input-width",onKeyup:e[4]||(e[4]=o=>l(H)(o))},null,8,["modelValue","placeholder"])]),p("div",We,n(l(t)("priceIllustrate")),1)]),_:1},8,["label"]),s(c,{label:l(t)("stock"),prop:"stock"},{default:r(()=>[s(g,{modelValue:a.stock,"onUpdate:modelValue":e[5]||(e[5]=o=>a.stock=o),modelModifiers:{trim:!0},clearable:"",placeholder:l(t)("stockPlaceholder"),class:"input-width",onKeyup:e[6]||(e[6]=o=>l(G)(o))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),(m(!0),_(X,null,Z(Y.value,(o,K)=>(m(),P(c,{label:o.name,key:K},{default:r(()=>[(m(!0),_(X,null,Z(o.attr,(S,ce)=>(m(),_("span",{key:ce},[s(ie,{style:{"margin-right":"8px"},checked:a.goods_attribute.indexOf(S[0])!=-1,onChange:Do=>de(S[0])},{default:r(()=>[f(n(S[0]),1)]),_:2},1032,["checked","onChange"])]))),128))]),_:2},1032,["label"]))),128)),s(c,{label:l(t)("bedSize")},{default:r(()=>[s(g,{modelValue:a.room_bed,"onUpdate:modelValue":e[7]||(e[7]=o=>a.room_bed=o),modelModifiers:{trim:!0},clearable:"",placeholder:l(t)("bedSizePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),p("span",eo,n(l(t)("roomBedFormat")),1)]),_:1},8,["label"]),s(c,{label:l(t)("roomSize")},{default:r(()=>[s(g,{modelValue:a.room_area,"onUpdate:modelValue":e[8]||(e[8]=o=>a.room_area=o),modelModifiers:{trim:!0},placeholder:l(t)("roomSizePlaceholder"),class:"input-width",onKeyup:e[9]||(e[9]=o=>l(G)(o))},{append:r(()=>[f("㎡")]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),s(c,{label:l(t)("memberNum")},{default:r(()=>[s(g,{modelValue:a.room_stay,"onUpdate:modelValue":e[10]||(e[10]=o=>a.room_stay=o),modelModifiers:{trim:!0},clearable:"",placeholder:l(t)("memberNumPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),p("span",oo,n(l(t)("roomStayFormat")),1)]),_:1},8,["label"]),s(c,{label:l(t)("floor")},{default:r(()=>[s(g,{modelValue:a.room_floor,"onUpdate:modelValue":e[11]||(e[11]=o=>a.room_floor=o),modelModifiers:{trim:!0},clearable:"",placeholder:l(t)("floorPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),p("span",to,n(l(t)("roomFloorFormat")),1)]),_:1},8,["label"]),s(c,{label:l(t)("goodsImage"),prop:"goods_image"},{default:r(()=>[s(ne,{modelValue:a.goods_cover,"onUpdate:modelValue":e[12]||(e[12]=o=>a.goods_cover=o)},null,8,["modelValue"])]),_:1},8,["label"]),s(c,{label:l(t)("memberDiscount")},{default:r(()=>[p("div",null,[s(U,{modelValue:a.member_discount,"onUpdate:modelValue":e[13]||(e[13]=o=>a.member_discount=o)},{default:r(()=>[s(h,{label:""},{default:r(()=>[f(n(l(t)("nonparticipation")),1)]),_:1}),s(h,{label:"discount"},{default:r(()=>[f(n(l(t)("discount")),1)]),_:1}),s(h,{label:"fixed_discount"},{default:r(()=>[f(n(l(t)("fixedDiscount")),1)]),_:1})]),_:1},8,["modelValue"]),a.member_discount=="discount"?(m(),_("div",lo,n(l(t)("discountHint")),1)):x("",!0),a.member_discount=="fixed_discount"?(m(),_("div",ao,n(l(t)("fixedDiscountHint")),1)):x("",!0)])]),_:1},8,["label"]),s(c,{label:l(t)("goodsContent")},{default:r(()=>[s(j,{modelValue:a.goods_content,"onUpdate:modelValue":e[14]||(e[14]=o=>a.goods_content=o)},null,8,["modelValue"])]),_:1},8,["label"]),s(c,{label:l(t)("buyDesc")},{default:r(()=>[s(j,{modelValue:a.buy_info,"onUpdate:modelValue":e[15]||(e[15]=o=>a.buy_info=o)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),p("div",so,[p("div",ro,[s(R,{type:"primary",onClick:e[16]||(e[16]=o=>le(q.value))},{default:r(()=>[f(n(l(t)("save")),1)]),_:1}),s(R,{onClick:e[17]||(e[17]=o=>re())},{default:r(()=>[f(n(l(t)("returnToPreviousPage")),1)]),_:1})])])])):x("",!0),V.value=="second"?(m(),_("div",io,[s(I,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[s(ue,{ref:"calendar"},{"date-cell":r(({data:o})=>[Q(o)==!0?(m(),_("div",{key:0,class:be(["w-full h-full",o.isSelected?"is-selected":""]),onClick:K=>W(o)},[p("p",null,n(o.day.split("-").slice(1).join("-")),1),b.value&&b.value[o.day]?(m(),_("div",uo,[p("p",mo,n(b.value[o.day].price)+"￥",1)])):(m(),_("div",po,_o))],10,no)):(m(),_("div",fo,[p("p",go,n(o.day.split("-").slice(1).join("-")),1),b.value&&b.value[o.day]?(m(),_("div",bo,[p("p",vo,n(b.value[o.day].price)+"￥",1)])):(m(),_("div",ho,yo))]))]),_:1},512)]),_:1})])):x("",!0)]),_:1}),s(me,{modelValue:w.value,"onUpdate:modelValue":e[26]||(e[26]=o=>w.value=o),title:l(t)("editPrice"),width:"400px","destroy-on-close":!0},{footer:r(()=>[p("span",Vo,[s(R,{onClick:e[24]||(e[24]=o=>w.value=!1)},{default:r(()=>[f(n(l(t)("cancel")),1)]),_:1}),s(R,{type:"primary",onClick:e[25]||(e[25]=o=>se(z.value))},{default:r(()=>[f(n(l(t)("confirm")),1)]),_:1})])]),default:r(()=>[ve((m(),P(B,{model:u,"label-width":"90px",ref_key:"formRulesRef",ref:z,rules:l(ae),class:"page-form"},{default:r(()=>[s(c,{label:l(t)("daySetting"),class:"items-center"},{default:r(()=>[s(U,{modelValue:u.is_set,"onUpdate:modelValue":e[18]||(e[18]=o=>u.is_set=o),class:"ml-4 input-width"},{default:r(()=>[s(h,{label:1,size:"large"},{default:r(()=>[f(n(u.start_date),1)]),_:1}),s(h,{label:2,size:"large"},{default:r(()=>[f(n(l(t)("dateRange")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),u.is_set==2?(m(),P(c,{key:0,label:l(t)("startDate"),class:"input-width"},{default:r(()=>[s(O,{type:"date",modelValue:u.start_date,"onUpdate:modelValue":e[19]||(e[19]=o=>u.start_date=o),placeholder:l(t)("startDate"),"value-format":"YYYY-MM-DD"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):x("",!0),u.is_set==2?(m(),P(c,{key:1,label:l(t)("endDate"),class:"input-width"},{default:r(()=>[s(O,{type:"date",modelValue:u.end_date,"onUpdate:modelValue":e[20]||(e[20]=o=>u.end_date=o),placeholder:l(t)("endDate"),"value-format":"YYYY-MM-DD"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):x("",!0),s(c,{label:l(t)("price"),prop:"price",class:"input-width"},{default:r(()=>[s(g,{modelValue:u.price,"onUpdate:modelValue":e[21]||(e[21]=o=>u.price=o),clearable:"",placeholder:l(t)("pricePlaceholder"),class:"input-width",onKeyup:e[22]||(e[22]=o=>l(H)(o))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a.member_discount!=""?(m(),P(c,{key:2,label:l(t)("memberPrice"),prop:"member_price",class:"items-center"},{default:r(()=>[s(U,{modelValue:u.member_price,"onUpdate:modelValue":e[23]||(e[23]=o=>u.member_price=o),class:"ml-4 input-width"},{default:r(()=>[s(h,{label:1,size:"large"},{default:r(()=>[f(n(l(t)("involved")),1)]),_:1}),s(h,{label:0,size:"large"},{default:r(()=>[f(n(l(t)("noInvolved")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):x("",!0)]),_:1},8,["model","rules"])),[[pe,y.value]])]),_:1},8,["modelValue","title"])])}}});const _t=Oe(wo,[["__scopeId","data-v-541fb24e"]]);export{_t as default};