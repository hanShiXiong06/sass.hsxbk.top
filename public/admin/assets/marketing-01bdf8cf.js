import{O as t}from"./index-2a89d409.js";function o(e){return t.get("shop/marketing",{params:e})}function n(e){return t.get("shop/goods/coupon/init",{params:e})}function c(e){return t.post("shop/goods/coupon",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return t.get("shop/goods/coupon",{params:e})}function i(e){return t.get("shop/goods/coupon/records",{params:e})}function r(e){return t.get(`shop/goods/coupon/detail/${e}`)}function a(e){return t.put(`shop/goods/coupon/edit/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return t.delete(`shop/goods/coupon/${e}`,{showSuccessMessage:!0})}function h(e){return t.put(`shop/goods/coupon/invalid/${e}`,{showSuccessMessage:!0})}function d(e){return t.get("shop/goods/coupon/selected",{params:e})}function p(e){return t.get("shop/active/discount",{params:e})}function v(){return t.get("shop/active/status")}function f(e){return t.get(`shop/active/discount/${e}`)}function M(e){return t.post("shop/active/discount",e,{showErrorMessage:!0,showSuccessMessage:!0})}function w(e){return t.put(`shop/active/discount/${e.active_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function A(e){return t.put(`shop/active/discount/close/${e}`,{},{showErrorMessage:!0,showSuccessMessage:!0})}function x(e){return t.delete(`shop/active/discount/${e}`,{showSuccessMessage:!0})}function S(e){return t.get(`shop/active/discount/goods/${e.active_id}`,{params:e})}function E(e){return t.get(`shop/active/discount/order/${e.active_id}`,{params:e})}function $(e){return t.get(`shop/active/discount/member/${e.active_id}`,{params:e})}function l(){return t.get("shop/active/discount/config")}function C(e){return t.put("shop/active/discount/config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function D(e){return t.get("shop/active/exchange",{params:e})}function L(e){return t.get(`shop/active/exchange/${e}`)}function P(e){return t.post("shop/active/exchange",e,{showErrorMessage:!0,showSuccessMessage:!0})}function I(e){return t.put(`shop/active/exchange/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function _(e){return t.put(`shop/active/exchange/status/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function b(e){return t.delete(`shop/active/exchange/${e}`,{showSuccessMessage:!0})}function k(){return t.get("shop/active/exchange/status")}export{_ as A,b as B,o as C,D as a,k as b,d as c,n as d,c as e,i as f,u as g,r as h,a as i,g as j,h as k,M as l,l as m,C as n,f as o,$ as p,S as q,E as r,w as s,p as t,v as u,A as v,x as w,P as x,L as y,I as z};
