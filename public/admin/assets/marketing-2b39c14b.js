import{O as t}from"./index-37fee5a0.js";function s(e){return t.get("phone_shop/marketing",{params:e})}function n(e){return t.get("phone_shop/goods/coupon/init",{params:e})}function c(e){return t.post("phone_shop/goods/coupon",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return t.get("phone_shop/goods/coupon",{params:e})}function i(e){return t.get("phone_shop/goods/coupon/records",{params:e})}function r(e){return t.get(`phone_shop/goods/coupon/detail/${e}`)}function a(e){return t.put(`phone_shop/goods/coupon/edit/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function h(e){return t.delete(`phone_shop/goods/coupon/${e}`,{showSuccessMessage:!0})}function g(e){return t.put(`phone_shop/goods/coupon/invalid/${e}`,{showSuccessMessage:!0})}function p(e){return t.get("phone_shop/active/discount",{params:e})}function d(){return t.get("phone_shop/active/status")}function v(e){return t.get(`phone_shop/active/discount/${e}`)}function f(e){return t.post("phone_shop/active/discount",e,{showErrorMessage:!0,showSuccessMessage:!0})}function _(e){return t.put(`phone_shop/active/discount/${e.active_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function M(e){return t.put(`phone_shop/active/discount/close/${e}`,{},{showErrorMessage:!0,showSuccessMessage:!0})}function w(e){return t.delete(`phone_shop/active/discount/${e}`,{showSuccessMessage:!0})}function A(e){return t.get(`phone_shop/active/discount/goods/${e.active_id}`,{params:e})}function x(e){return t.get(`phone_shop/active/discount/order/${e.active_id}`,{params:e})}function E(e){return t.get(`phone_shop/active/discount/member/${e.active_id}`,{params:e})}function S(){return t.get("phone_shop/active/discount/config")}function $(e){return t.put("phone_shop/active/discount/config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function l(e){return t.get("phone_shop/active/exchange",{params:e})}function D(e){return t.get(`phone_shop/active/exchange/${e}`)}function C(e){return t.post("phone_shop/active/exchange",e,{showErrorMessage:!0,showSuccessMessage:!0})}function L(e){return t.put(`phone_shop/active/exchange/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function P(e){return t.put(`phone_shop/active/exchange/status/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function I(e){return t.delete(`phone_shop/active/exchange/${e}`,{showSuccessMessage:!0})}function b(){return t.get("phone_shop/active/exchange/status")}export{I as A,s as B,l as a,b,n as c,c as d,i as e,r as f,u as g,a as h,h as i,g as j,f as k,S as l,$ as m,v as n,E as o,A as p,x as q,_ as r,p as s,d as t,M as u,w as v,C as w,D as x,L as y,P as z};
