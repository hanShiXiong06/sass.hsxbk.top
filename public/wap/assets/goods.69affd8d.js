import{bu as o}from"./index-d8a8f699.js";function t(){return o.get("shop/goods/category/config")}function s(){return o.get("shop/goods/category/tree")}function e(t){return o.get("shop/goods/category/list",t)}function n(t){return o.get("shop/goods/pages",t)}function r(t){return o.get("shop/goods/detail",t)}function g(t){return o.get(`shop/goods/sku/${t}`)}function u(t){return o.post(`shop/goods/collect/${t}`)}function c(t){return o.delete(`shop/goods/collect/${t}`)}function a(t){return o.get("shop/goods/evaluate/list",{goods_id:t})}function i(t){return o.get("shop/goods/components",t)}export{e as a,s as b,n as c,r as d,a as e,c as f,i as g,u as h,g as i,t as j};
