import{O as r}from"./index-a3bdc7eb.js";function n(){return r.get("phone_shop/order/config")}function s(e){return r.post("phone_shop/order/config",e,{showSuccessMessage:!0})}function i(e){return r.get("phone_shop/order/list",{params:e})}function u(e){return r.get(`phone_shop/order/detail/${e}`)}function d(){return r.get("phone_shop/order/status")}function p(e){return r.put(`phone_shop/order/close/${e}`)}function h(e){return r.get("phone_shop/order/delivery_type",{params:e})}function a(e){return r.put("phone_shop/order/delivery",e)}function c(e){return r.put("phone_shop/order/shop_remark",e)}function _(e){return r.put(`phone_shop/order/finish/${e}`)}function f(e){return r.get("phone_shop/order/delivery/package",{params:e})}function g(e){return r.get("phone_shop/order/delivery/package/list",{params:e})}function l(e){return r.get("phone_shop/order/refund",{params:e})}function y(e){return r.get(`phone_shop/order/refund/${e}`)}function v(e){return r.put(`phone_shop/order/refund/audit/${e.order_refund_no}`,e)}function O(e){return r.put(`phone_shop/order/refund/delivery/${e.order_refund_no}`,e)}function D(e){return r.get("phone_shop/invoice",{params:e})}function $(e){return r.get(`phone_shop/invoice/${e}`)}function k(e,t){return r.put(`phone_shop/invoice/${e}`,t,{showSuccessMessage:!0})}function b(){return r.get("phone_shop/order/pay/type")}function S(){return r.get("phone_shop/order/from")}function m(e){return r.put("phone_shop/order/edit_price",e,{showSuccessMessage:!0})}function B(e){return r.get("phone_shop/order/edit_delivery",{params:e})}function L(){return r.get("phone_shop/delivery/store/list")}function w(e){return r.put("phone_shop/order/edit_delivery",e)}function C(e){return r.get("phone_shop/order_batch_delivery",{params:e})}function P(e){return r.put("phone_shop/order_batch_delivery/add_batch_order_delivery",e)}function R(){return r.get("phone_shop/order_batch_delivery/get_status")}function A(){return r.get("phone_shop/order_batch_delivery/get_type")}export{y as A,v as B,O as C,b as a,S as b,i as c,A as d,R as e,C as f,d as g,P as h,a as i,h as j,f as k,g as l,$ as m,w as n,m as o,L as p,B as q,c as r,k as s,n as t,s as u,u as v,p as w,_ as x,D as y,l as z};
