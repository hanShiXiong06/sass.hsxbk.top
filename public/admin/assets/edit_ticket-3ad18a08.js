import{d as le,x as oe,f as ae,r as g,n as F,l as z,q as o,h as c,c as f,e as a,w as s,u as l,c8 as j,b_ as se,a as p,i as b,t as n,B as y,v as ie,R as re,s as C,aQ as de,a7 as ne,ax as ue,ay as ce,K as me,L as pe,at as _e,au as fe,M as be,E as ve,d2 as ge,bO as ye,X as xe,Y as ke}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                    *//* empty css                    *//* empty css                */import{_ as he}from"./index.vue_vue_type_script_setup_true_lang-edd497b7.js";/* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                    *//* empty css                *//* empty css                   *//* empty css                       */import{P as Ve,Q as we,R as Pe,S as De,T as Ce}from"./tourism-dc4cc108.js";import"./index.vue_vue_type_style_index_0_lang-972988e5.js";import"./attachment-503e95ee.js";import"./index.vue_vue_type_script_setup_true_lang-bee7eaa7.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ad575143.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";import"./_plugin-vue_export-helper-c27b6911.js";const Ee={class:"main-container"},Te={key:0},Re={key:0,class:"text-[12px] text-[#999] leading-[20px]"},Ue={key:1,class:"text-[12px] text-[#999] leading-[20px]"},Ne={class:"fixed-footer-wrap"},Ie={class:"fixed-footer"},Se={key:1},Ye=["onClick"],Be={key:0},Me={class:"text-right text-gray-400 text-[14px] mt-[5px]"},$e={class:"text-right text-gray-400 text-[12px] mt-[5px]"},qe={key:1},Fe=p("p",{class:"text-right text-gray-400 text-[14px] mt-[5px]"},"0.00￥",-1),ze=p("p",{class:"text-right text-gray-400 text-[12px] mt-[5px]"},"0/0",-1),je=[Fe,ze],Ae={key:1,class:"w-full h-full"},Ke={class:"text-gray-400"},Le={key:0},He={class:"text-right text-gray-400 text-[14px] mt-[5px]"},Oe={class:"text-right text-gray-400 text-[12px] mt-[5px]"},Qe={key:1},Ge=p("p",{class:"text-right text-gray-400 text-[14px] mt-[5px]"},"0.00￥",-1),Xe=p("p",{class:"text-right text-gray-400 text-[12px] mt-[5px]"},"0/0",-1),Ze=[Ge,Xe],Je={class:"dialog-footer"},jt=le({__name:"edit_ticket",setup(We){const U=oe(),A=ae(),E=parseInt(U.query.id),N=parseInt(U.query.scenic_id),k=g(!1),h=g("first"),K=(d,e)=>{},L=d=>{const e=parseInt(new Date().getTime()/1e3)+"",u=parseInt(new Date(d.day).getTime()/1e3)+"";return e-60*60*24<u},V=g(!1),H=d=>{r.start_date=d.day,r.is_set=1,r.price="",r.end_date="",r.member_price=1,V.value=!0,m.value[d.day]&&(r.price=m.value[d.day].price,r.member_price=m.value[d.day].member_price)},r=F({is_set:1,start_date:"",end_date:"",member_price:1,price:""}),I={goods_id:0,goods_name:"",buy_content:"",goods_content:"",price:"",is_vip:0,stock:"",scenic_id:0,member_discount:"",buy_info:""},m=g([]),S=(d=0)=>{Ce({goods_id:d}).then(e=>{m.value=e.data})},i=F({...I});E&&(async(d=0)=>{Object.assign(i,I);const e=await(await Ve(d)).data;Object.keys(i).forEach(u=>{e[u]!=null&&(i[u]=e[u])}),i.goods_id=d,S(d)})(E);const Y=g(),O=z(()=>({goods_name:[{required:!0,message:o("ticketNamePlaceholder"),trigger:"blur"}],price:[{required:!0,message:o("tickePricePlaceholder"),trigger:"blur"},{trigger:"blur",validator:(d,e,u)=>{parseFloat(e)>9999999999e-2?u(new Error(o("pricePlaceholder3"))):u()}}],stock:[{required:!0,message:o("ticketStockPlaceholder"),trigger:"blur"}]})),Q=async d=>{k.value||!d||await d.validate(async e=>{if(e){k.value=!0,i.scenic_id=N;const u=i;(i.goods_id?we:Pe)(u).then(w=>{w.code>=0&&i.goods_id==0?(i.goods_id=w.data.id,h.value="second"):history.back(),k.value=!1}).catch(()=>{k.value=!1})}})},T=g(!1),B=g(),G=z(()=>({price:[{required:!0,message:o("saleArrPricePlaceholder"),trigger:"blur"},{trigger:"blur",validator:(d,e,u)=>{e<=0?u(new Error(o("saleArrPriceNotZeroTips"))):parseFloat(e)>9999999999e-2?u(new Error(o("pricePlaceholder3"))):u()}}]})),X=async d=>{T.value||!d||await d.validate(async e=>{e&&(T.value=!0,r.goods_id=i.goods_id,De(r).then(u=>{S(i.goods_id),V.value=!1,T.value=!1}))})},Z=()=>{history.back()};return(d,e)=>{const u=de,x=ne,w=ue,J=ce,P=me,_=pe,v=_e,R=fe,M=he,$=be,D=ve,W=ge,q=ye,ee=xe,te=ke;return c(),f("div",Ee,[a(x,{class:"card !border-none mb-[15px]",shadow:"never"},{default:s(()=>[a(u,{content:l(E)?l(o)("editTicket"):l(o)("addTicket"),icon:d.ArrowLeft,onClick:e[0]||(e[0]=t=>l(A).push(`/tourism/product/scenic/ticket?id=${l(N)}`))},null,8,["content","icon"])]),_:1}),a(x,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[a(J,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=t=>h.value=t),class:"demo-tabs",onTabClick:K},{default:s(()=>[a(w,{label:l(o)("basicData"),name:"first"},null,8,["label"]),a(w,{label:l(o)("ticketPriceCalendar"),name:"second",disabled:!i.goods_id},null,8,["label","disabled"])]),_:1},8,["modelValue"]),h.value=="first"?(c(),f("div",Te,[a(x,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[a($,{model:i,"label-width":"180px",ref_key:"formRef",ref:Y,rules:l(O),class:"page-form"},{default:s(()=>[a(_,{label:l(o)("ticketName"),prop:"goods_name"},{default:s(()=>[a(P,{modelValue:i.goods_name,"onUpdate:modelValue":e[2]||(e[2]=t=>i.goods_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(o)("ticketNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(_,{label:l(o)("tickePrice"),prop:"price"},{default:s(()=>[a(P,{modelValue:i.price,"onUpdate:modelValue":e[3]||(e[3]=t=>i.price=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(o)("tickePricePlaceholder"),class:"input-width",onKeyup:e[4]||(e[4]=t=>l(j)(t)),onBlur:e[5]||(e[5]=t=>i.price=t.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(_,{label:l(o)("ticketStock"),prop:"stock"},{default:s(()=>[a(P,{modelValue:i.stock,"onUpdate:modelValue":e[6]||(e[6]=t=>i.stock=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(o)("ticketStockPlaceholder"),class:"input-width",onKeyup:e[7]||(e[7]=t=>l(se)(t)),onBlur:e[8]||(e[8]=t=>i.stock=t.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(_,{label:l(o)("memberDiscount")},{default:s(()=>[p("div",null,[a(R,{modelValue:i.member_discount,"onUpdate:modelValue":e[9]||(e[9]=t=>i.member_discount=t)},{default:s(()=>[a(v,{label:""},{default:s(()=>[b(n(l(o)("nonparticipation")),1)]),_:1}),a(v,{label:"discount"},{default:s(()=>[b(n(l(o)("discount")),1)]),_:1}),a(v,{label:"fixed_discount"},{default:s(()=>[b(n(l(o)("fixedDiscount")),1)]),_:1})]),_:1},8,["modelValue"]),i.member_discount=="discount"?(c(),f("div",Re,n(l(o)("discountHint")),1)):y("",!0),i.member_discount=="fixed_discount"?(c(),f("div",Ue,n(l(o)("fixedDiscountHint")),1)):y("",!0)])]),_:1},8,["label"]),a(_,{label:l(o)("ticketIllustrate")},{default:s(()=>[a(M,{modelValue:i.goods_content,"onUpdate:modelValue":e[10]||(e[10]=t=>i.goods_content=t)},null,8,["modelValue"])]),_:1},8,["label"]),a(_,{label:l(o)("buyDesc")},{default:s(()=>[a(M,{modelValue:i.buy_info,"onUpdate:modelValue":e[11]||(e[11]=t=>i.buy_info=t)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),p("div",Ne,[p("div",Ie,[a(D,{type:"primary",onClick:e[12]||(e[12]=t=>Q(Y.value))},{default:s(()=>[b(n(l(o)("save")),1)]),_:1}),a(D,{onClick:e[13]||(e[13]=t=>Z())},{default:s(()=>[b(n(l(o)("returnToPreviousPage")),1)]),_:1})])])])):y("",!0),h.value=="second"?(c(),f("div",Se,[a(x,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[a(W,null,{"date-cell":s(({data:t})=>[L(t)==!0?(c(),f("div",{key:0,class:ie(["w-full h-full",t.isSelected?"is-selected":""]),onClick:tt=>H(t)},[p("p",null,n(t.day.split("-").slice(1).join("-")),1),m.value&&m.value[t.day]?(c(),f("div",Be,[p("p",Me,n(m.value[t.day].price)+"￥",1),p("p",$e,n(m.value[t.day].sell_num)+"/"+n(m.value[t.day].stock_all),1)])):(c(),f("div",qe,je))],10,Ye)):(c(),f("div",Ae,[p("p",Ke,n(t.day.split("-").slice(1).join("-")),1),m.value&&m.value[t.day]?(c(),f("div",Le,[p("p",He,n(m.value[t.day].price)+"￥",1),p("p",Oe,n(m.value[t.day].sell_num)+"/"+n(m.value[t.day].stock_all),1)])):(c(),f("div",Qe,Ze))]))]),_:1})]),_:1})])):y("",!0)]),_:1}),a(ee,{modelValue:V.value,"onUpdate:modelValue":e[22]||(e[22]=t=>V.value=t),title:l(o)("editPrice"),width:"400px","destroy-on-close":!0},{footer:s(()=>[p("span",Je,[a(D,{onClick:e[20]||(e[20]=t=>V.value=!1)},{default:s(()=>[b(n(l(o)("cancel")),1)]),_:1}),a(D,{type:"primary",onClick:e[21]||(e[21]=t=>X(B.value))},{default:s(()=>[b(n(l(o)("confirm")),1)]),_:1})])]),default:s(()=>[re((c(),C($,{model:r,"label-width":"90px",ref_key:"formRulesRef",ref:B,rules:l(G),class:"page-form"},{default:s(()=>[a(_,{label:l(o)("daySetting"),class:"items-center"},{default:s(()=>[a(R,{modelValue:r.is_set,"onUpdate:modelValue":e[14]||(e[14]=t=>r.is_set=t),class:"ml-4 input-width"},{default:s(()=>[a(v,{label:1,size:"large"},{default:s(()=>[b(n(r.start_date),1)]),_:1}),a(v,{label:2,size:"large"},{default:s(()=>[b(n(l(o)("dateRange")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r.is_set==2?(c(),C(_,{key:0,label:l(o)("startDate"),class:"input-width"},{default:s(()=>[a(q,{type:"date",modelValue:r.start_date,"onUpdate:modelValue":e[15]||(e[15]=t=>r.start_date=t),placeholder:l(o)("startDate"),"value-format":"YYYY-MM-DD"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):y("",!0),r.is_set==2?(c(),C(_,{key:1,label:l(o)("endDate"),class:"input-width"},{default:s(()=>[a(q,{type:"date",modelValue:r.end_date,"onUpdate:modelValue":e[16]||(e[16]=t=>r.end_date=t),placeholder:l(o)("endDate"),"value-format":"YYYY-MM-DD"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):y("",!0),a(_,{label:l(o)("tickePrice"),prop:"price",class:"input-width"},{default:s(()=>[a(P,{modelValue:r.price,"onUpdate:modelValue":e[17]||(e[17]=t=>r.price=t),clearable:"",placeholder:l(o)("tickePricePlaceholder"),onKeyup:e[18]||(e[18]=t=>l(j)(t)),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),i.member_discount!=""?(c(),C(_,{key:2,label:l(o)("memberPrice"),prop:"member_price",class:"items-center"},{default:s(()=>[a(R,{modelValue:r.member_price,"onUpdate:modelValue":e[19]||(e[19]=t=>r.member_price=t),class:"ml-4 input-width"},{default:s(()=>[a(v,{label:1,size:"large"},{default:s(()=>[b(n(l(o)("involved")),1)]),_:1}),a(v,{label:0,size:"large"},{default:s(()=>[b(n(l(o)("noInvolved")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):y("",!0)]),_:1},8,["model","rules"])),[[te,k.value]])]),_:1},8,["modelValue","title"])])}}});export{jt as default};
