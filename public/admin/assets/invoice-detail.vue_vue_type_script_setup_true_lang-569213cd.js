import{d as S,r as v,n as h,h as _,c as f,e as a,w as l,a as w,i as o,t as s,u as t,q as i,R as $,s as k,A as x,B as y,F as q,af as z,ag as A,V as R,E as U,X,bk as Y,Y as j}from"./index-99f00cf3.js";/* empty css                   *//* empty css                        *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                             */import{m as G}from"./order-b4e82541.js";const H=["src"],J={class:"dialog-footer"},te=S({__name:"invoice-detail",setup(K,{expose:V}){const u=v(!1),b=v(!1),e=v({}),D=async()=>{e.value=await(await G(p)).data,b.value=!1,c.splice(0,c.length),e.value.invoice_voucher&&c.push(x(e.value.invoice_voucher))};let p=0;const N=async(d=null)=>{b.value=!0,d&&(p=d.id,D())},c=h([]),m=h({show:!1,index:0}),E=()=>{m.show=!0};return V({showDialog:u,setFormData:N}),(d,r)=>{const n=z,C=A,B=R,I=U,T=X,F=Y,L=j;return _(),f(q,null,[a(T,{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=g=>u.value=g),title:t(i)("detail"),width:"800px","destroy-on-close":!0},{footer:l(()=>[w("span",J,[a(I,{onClick:r[0]||(r[0]=g=>u.value=!1)},{default:l(()=>[o(s(t(i)("cancel")),1)]),_:1})])]),default:l(()=>[$((_(),k(B,{height:"400px"},{default:l(()=>[a(C,{column:2},{default:l(()=>[a(n,{label:t(i)("headerName"),"label-align":"right"},{default:l(()=>[o(s(e.value.header_name||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("headTypeName"),"label-align":"right"},{default:l(()=>[o(s(e.value.header_type_name||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("name"),"label-align":"right"},{default:l(()=>[o(s(e.value.name||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("invoiceNumber"),"label-align":"right"},{default:l(()=>[o(s(e.value.invoice_number||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("typeName"),"label-align":"right"},{default:l(()=>[o(s(e.value.type_name||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("taxNumber"),"label-align":"right"},{default:l(()=>[o(s(e.value.tax_number||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("money"),"label-align":"right"},{default:l(()=>[o(s(e.value.money||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("invoiceTime"),"label-align":"right"},{default:l(()=>[o(s(e.value.invoice_time===0?"--":e.value.invoice_time),1)]),_:1},8,["label"]),a(n,{label:t(i)("invoiceVoucher"),"label-align":"right"},{default:l(()=>[w("span",null,[e.value.invoice_voucher?(_(),f("img",{key:0,class:"w-[50px] max-h-[50px] inline-block",src:t(x)(e.value.invoice_voucher),alt:"",onClick:E},null,8,H)):y("",!0)])]),_:1},8,["label"]),a(n,{label:t(i)("bankTame"),"label-align":"right"},{default:l(()=>[o(s(e.value.bank_name||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("bankCardNumber"),"label-align":"right"},{default:l(()=>[o(s(e.value.bank_card_number||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("address"),"label-align":"right"},{default:l(()=>[o(s(e.value.address||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("telephone"),"label-align":"right"},{default:l(()=>[o(s(e.value.telephone||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("createTime"),"label-align":"right"},{default:l(()=>[o(s(e.value.create_time||"--"),1)]),_:1},8,["label"]),a(n,{label:t(i)("remark"),"label-align":"right"},{default:l(()=>[o(s(e.value.remark||"--"),1)]),_:1},8,["label"])]),_:1})]),_:1})),[[L,b.value]])]),_:1},8,["modelValue","title"]),m.show?(_(),k(F,{key:0,"url-list":c,onClose:r[2]||(r[2]=g=>m.show=!1),"initial-index":m.index,"zoom-rate":1},null,8,["url-list","initial-index"])):y("",!0)],64)}}});export{te as _};
