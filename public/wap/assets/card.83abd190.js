import{bt as t}from"./index-7bf68536.js";function r(r){return t.get("shop_giftcard/card/bag",r)}function s(r){return t.get("shop_giftcard/card/list",r)}function a(){return t.get("shop_giftcard/card/status")}function c(r){return t.get(`shop_giftcard/card/${r}`)}function e(r){return t.post("shop_giftcard/card/activate",r)}function o(r){return t.post("shop_giftcard/card/give",r,{showSuccessMessage:!1})}function n(r){return t.post("shop_giftcard/card/give_batch",r,{showSuccessMessage:!1})}function i(r){return t.get(`shop_giftcard/card/give/${r}`)}function u(r){return t.post("shop_giftcard/card/receive",r)}function d(r){return t.post("shop_giftcard/records/use/goods",r)}function f(r){return t.post("shop_giftcard/records/use/balance",r)}export{r as a,s as b,e as c,n as d,o as e,i as f,a as g,c as h,f as i,u as r,d as u};