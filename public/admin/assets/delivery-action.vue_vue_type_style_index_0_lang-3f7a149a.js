import{d as Z,r as p,n as ee,l as le,q as o,h as d,s as c,w as s,a as _,e as n,i as D,t as f,u as r,R as ae,c as y,B as g,F as R,T as S,A as te,a3 as M,U as oe,aW as se,at as re,au as ne,L as ie,ab as de,aC as pe,K as ue,M as _e,ac as me,ad as ce,E as ye,X as ve,Y as fe}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                 */import{j as ge}from"./delivery-d346ad15.js";import{i as xe,j as he}from"./order-b0304810.js";import{l as be}from"./weapp-d6776f80.js";const Ee=_("p",null,"您已开通微信小程序发货信息管理服务，平台会将发货信息以消息的形式推送给购买的微信用户。",-1),Ve=_("p",null,"注意：每个订单只能更新一次发货信息，请谨慎操作！",-1),ke={class:"flex cursor-pointer"},De={class:"flex items-center min-w-[50px] mr-[10px]"},Ce=["src"],we={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},Ne={class:"flex flex-col"},Te={class:"multi-hidden text-[14px]"},Fe={key:0,class:"text-[#999] text-[12px]"},Pe={class:"dialog-footer"},tl=Z({__name:"delivery-action",emits:["complete"],setup(Be,{expose:U,emit:q}){const m=p(!1),u=p(!1),C=p([]),x=p(!1),h=p([]),w=p(!1);ge({}).then(l=>{C.value=l.data}),be().then(l=>{w.value=l.data.is_trade_managed});const b=p([]),a=ee({...{order_id:0,delivery_type:"",express_company_id:"",express_number:"",order_goods_ids:[]}}),N=p(),A=le(()=>({delivery_type:[{required:!0,message:o("deliveryTypePlaceholder"),trigger:"blur"}],express_company_id:[{required:!0,validator:L,trigger:"blur"}],express_number:[{required:!0,validator:j,trigger:"blur"}]})),L=(l,e,i)=>{a.delivery_type=="express"&&e===""?i(new Error(o("companyPlaceholder"))):i()},j=(l,e,i)=>{a.delivery_type=="express"&&e===""?i(new Error(o("expressNumberPlaceholder"))):i()},I=(l,e)=>!(l.status==2||l.delivery_status=="delivery_finish"||l.status==3),E=p([]),T=()=>{let l=[];a.delivery_type&&a.delivery_type=="virtual"?b.value.forEach((e,i)=>{e.goods_type=="virtual"&&l.push(e)}):a.delivery_type&&a.delivery_type!="virtual"&&b.value.forEach((e,i)=>{e.goods_type!="virtual"&&l.push(e)}),E.value=M(l)},O=l=>{a.order_goods_ids=M([]);for(const e in l)a.order_goods_ids.push(l[e].order_goods_id)},G=async l=>{if(!(u.value||!l)){if(a.order_goods_ids.length<=0){oe({message:o("orderGoodsPlaceholder"),type:"warning"});return}await l.validate(async e=>{e&&(u.value=!0,xe(a).then(V=>{u.value=!1,m.value=!1,q("complete"),F()}).catch(V=>{u.value=!1,m.value=!1,F()}))})}},$=async(l=null)=>{if(u.value=!0,l){a.order_id=l.order_id,a.delivery_type="",b.value=l.order_goods,E.value=l.order_goods,x.value=!1,await he({delivery_type:l.delivery_type}).then(e=>{h.value=e.data;for(const i in e.data){a.delivery_type=i;break}T()});for(let e=0;e<l.order_goods.length;e++)if(l.order_goods[e].goods_type=="virtual"){x.value=!0;break}x.value&&Object.assign(h.value,{virtual:o("virtualDelivery")})}u.value=!1},F=()=>{a.order_id=0,a.delivery_type="",a.express_company_id="",a.express_number="",a.order_goods_ids=[]};return U({showDialog:m,setFormData:$}),(l,e)=>{const i=se,V=re,z=ne,k=ie,H=de,K=pe,W=ue,X=_e,v=me,Y=ce,P=ye,J=ve,Q=fe;return d(),c(J,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=t=>m.value=t),title:r(o)("delivery"),width:"700px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:s(()=>[_("span",Pe,[n(P,{onClick:e[3]||(e[3]=t=>m.value=!1)},{default:s(()=>[D(f(r(o)("cancel")),1)]),_:1}),n(P,{type:"primary",loading:u.value,onClick:e[4]||(e[4]=t=>G(N.value))},{default:s(()=>[D(f(r(o)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[ae((d(),y("div",null,[w.value?(d(),c(i,{key:0,type:"warning",closable:!1,class:"!mb-[10px]"},{default:s(()=>[Ee,Ve]),_:1})):g("",!0),n(X,{model:a,"label-width":"100px",ref_key:"formRef",ref:N,rules:r(A),class:"page-form mb-[30px]"},{default:s(()=>[n(k,{label:r(o)("deliveryType"),prop:"delivery_type"},{default:s(()=>[n(z,{modelValue:a.delivery_type,"onUpdate:modelValue":e[0]||(e[0]=t=>a.delivery_type=t),onChange:T},{default:s(()=>[(d(!0),y(R,null,S(h.value,(t,B)=>(d(),c(V,{label:B,key:B},{default:s(()=>[D(f(t),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a.delivery_type=="express"?(d(),c(k,{key:0,label:r(o)("company"),prop:"express_company_id"},{default:s(()=>[n(K,{modelValue:a.express_company_id,"onUpdate:modelValue":e[1]||(e[1]=t=>a.express_company_id=t),placeholder:r(o)("companyPlaceholder"),class:"input-width"},{default:s(()=>[(d(!0),y(R,null,S(C.value,t=>(d(),c(H,{key:t.index,label:t.company_name,value:t.company_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):g("",!0),a.delivery_type=="express"?(d(),c(k,{key:1,label:r(o)("expressNumber"),prop:"express_number"},{default:s(()=>[n(W,{modelValue:a.express_number,"onUpdate:modelValue":e[2]||(e[2]=t=>a.express_number=t),modelModifiers:{trim:!0},clearable:"",placeholder:r(o)("expressNumberPlaceholder"),class:"input-width",maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):g("",!0)]),_:1},8,["model","rules"]),n(Y,{data:E.value,size:"large",onSelectionChange:O},{default:s(()=>[n(v,{type:"selection",width:"55",selectable:I}),n(v,{prop:"goods_name",label:r(o)("goodsName"),"min-width":"200"},{default:s(({row:t})=>[_("div",ke,[_("div",De,[t.goods_image?(d(),y("img",{key:0,class:"w-[50px] h-[50px]",src:r(te)(t.goods_image),alt:""},null,8,Ce)):(d(),y("img",we))]),_("div",Ne,[_("span",Te,f(t.goods_name),1),t.sku_name?(d(),y("span",Fe,f(t.sku_name),1)):g("",!0)])])]),_:1},8,["label"]),n(v,{prop:"num",label:r(o)("num"),"min-width":"80"},null,8,["label"]),n(v,{prop:"status_name",label:r(o)("refundStatusName"),"min-width":"80"},null,8,["label"]),n(v,{prop:"delivery_status_name",label:r(o)("deliveryStatusName"),"min-width":"80",align:"right"},null,8,["label"])]),_:1},8,["data"])])),[[Q,u.value]])]),_:1},8,["modelValue","title"])}}});export{tl as _};
