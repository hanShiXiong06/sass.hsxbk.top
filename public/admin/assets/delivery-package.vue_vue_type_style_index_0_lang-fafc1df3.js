import{d as w,r as v,h as n,s as D,w as _,a as e,e as r,i as N,t,u as s,q as a,R as V,c,B as x,A as B,F as E,T as C,ac as T,ad as F,E as I,X as L,Y as j}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               */import{k as P}from"./order-4a9ff19d.js";const q={class:"max-h-[600px] overflow-y-auto"},z={class:"panel-title"},A={class:"mb-[20px] text-[14px] flex justify-between"},R={class:"mb-[20px] text-[14px] flex"},S={key:0},U={class:"ml-[60px]"},X={class:"panel-title"},Y={class:"mb-[20px]"},$={class:"flex"},G={class:"flex items-center w-[50px] h-[50px] mr-[10px]"},H=["src"],J={class:"flex flex-col flex-1"},K={class:"multi-hidden text-[14px]"},M={class:"text-[12px] text-[#999]"},O={class:"panel-title"},Q={key:0},W={class:"block w-[150px]"},Z={class:"block w-[500px]"},ee={key:1},te={class:"dialog-footer"},he=w({__name:"delivery-package",setup(se,{expose:h}){const p=v(!1),m=v(!1),l=v("");return h({showDialog:p,setFormData:async(u,i)=>{m.value=!0,u&&P({id:u,mobile:i}).then(d=>{l.value=d.data,m.value=!1})}}),(u,i)=>{const d=T,f=F,g=I,y=L,b=j;return n(),D(y,{modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=o=>p.value=o),title:s(a)("packageInfo"),width:"700px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:_(()=>[e("span",te,[r(g,{onClick:i[0]||(i[0]=o=>p.value=!1)},{default:_(()=>[N(t(s(a)("cancel")),1)]),_:1})])]),default:_(()=>[V((n(),c("div",q,[e("h3",z,t(s(a)("deliveryInfo")),1),e("div",A,[e("div",null,[e("span",null,t(s(a)("devliveryTime"))+"：",1),e("span",null,t(l.value.create_time),1)])]),e("div",R,[l.value.company?(n(),c("div",S,[e("span",null,t(s(a)("companyName"))+"：",1),e("span",null,t(l.value.company.company_name),1)])):x("",!0),e("div",null,[e("span",U,t(s(a)("logisticNo"))+"：",1),e("span",null,t(l.value.express_number),1)])]),e("h3",X,t(s(a)("goodsInfo")),1),e("div",Y,[r(f,{data:l.value.order_goods,size:"large"},{default:_(()=>[r(d,{label:s(a)("goodsName"),align:"left",width:"300"},{default:_(({row:o})=>[e("div",$,[e("div",G,[e("img",{class:"w-[50px] h-[50px]",src:s(B)(o.goods_image_thumb_small)},null,8,H)]),e("div",J,[e("p",K,t(o.goods_name),1),e("span",M,t(o.sku_name),1)])])]),_:1},8,["label"]),r(d,{prop:"price",label:s(a)("price"),"min-width":"50",align:"left"},null,8,["label"]),r(d,{prop:"num",label:s(a)("num"),"min-width":"50",align:"right"},null,8,["label"])]),_:1},8,["data"])]),e("h3",O,t(s(a)("logisticInfo")),1),l.value.traces?(n(),c("div",Q,[l.value.traces.list?(n(!0),c(E,{key:0},C(l.value.traces.list,(o,k)=>(n(),c("div",{class:"flex justify-between mb-[15px]",key:k},[e("span",W,t(o.datetime),1),e("span",Z,t(o.remark),1)]))),128)):x("",!0),e("div",null,t(l.value.traces.reason),1)])):(n(),c("div",ee,[e("div",null,t(s(a)("notLogistics")),1)]))])),[[b,m.value]])]),_:1},8,["modelValue","title"])}}});export{he as _};
