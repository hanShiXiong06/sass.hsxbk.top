import{O as a}from"./index-37fee5a0.js";const o=t=>a.post("seafox_pay/part/info",t),i=()=>a.post("seafox_pay/part/getBaseInfo"),e=t=>a.post("seafox_pay/part/getFeilv",t),r=(t,p)=>a.post("seafox_pay/part/parts",{...t,imgData:p}),y=t=>a.post("seafox_pay/part/imageUrlQuery",t),c=t=>a.post("seafox_pay/part/productQuery",t),n=t=>a.post("seafox_pay/part/wxPublicApplyQuery",t),f=t=>a.post("seafox_pay/part/setFeilv",t),u=t=>a.post("seafox_pay/part/aliSubMerchantUpdate",t),A=t=>a.post("seafox_pay/part/bindorauth",t),l=t=>a.post("seafox_pay/part/cardalteration",t),d=t=>a.post("seafox_pay/part/modifyMerchantInfo",t),x=(t,p)=>a.post("seafox_pay/part/activityApplyUrl",{img:t,sid:p}),_=t=>a.post("seafox_pay/part/activityApply",t),m=t=>a.post("seafox_pay/part/second_activityApply",t),b=t=>a.post("seafox_pay/part/modifyProductConfig",t),g=()=>a.post("seafox_pay/part/getProductQrcode");export{m as a,x as b,u as c,A as d,l as e,i as f,o as g,e as h,y as i,c as j,f as k,g as l,d as m,b as n,r as p,_ as s,n as w};
