import{d as a,r as e,p as t,bR as s,a as r,o as n,c as o,w as d,b as u,y as _,z as l,n as c,i as h}from"./index-ef55c51f.js";const m=a({__name:"order_shipping",setup(a){const m=e(""),p=e("");t((a=>{a.merchant_trade_no?(m.value=a.merchant_trade_no,i()):p.value="缺少merchant_trade_no参数"}));const i=()=>{s({out_trade_no:m.value}).then((a=>{a.data&&a.data.path&&r({url:"/"+a.data.path,mode:"reLaunch"})}))};return(a,e)=>{const t=h;return n(),o(t,{style:c(a.themeColor())},{default:d((()=>[u(t,{class:"error-msg"},{default:d((()=>[_(l(p.value),1)])),_:1})])),_:1},8,["style"])}}});export{m as default};
