import{O as r}from"./index-5a756a51.js";function n(){return r.get("shop/order/config")}function s(e){return r.post("shop/order/config",e,{showSuccessMessage:!0})}function i(e){return r.get("shop/order/list",{params:e})}function u(e){return r.get(`shop/order/detail/${e}`)}function d(){return r.get("shop/order/status")}function a(e){return r.put(`shop/order/close/${e}`)}function c(e){return r.get("shop/order/delivery_type",{params:e})}function p(e){return r.put("shop/order/delivery",e)}function f(e){return r.put("shop/order/shop_remark",e)}function g(e){return r.put(`shop/order/finish/${e}`)}function h(e){return r.get("shop/order/delivery/package",{params:e})}function l(e){return r.get("shop/order/delivery/package/list",{params:e})}function y(e){return r.get("shop/order/refund",{params:e})}function v(e){return r.get(`shop/order/refund/${e}`)}function _(e){return r.put(`shop/order/refund/audit/${e.order_refund_no}`,e)}function O(e){return r.put(`shop/order/refund/delivery/${e.order_refund_no}`,e)}function D(e){return r.get("shop/invoice",{params:e})}function $(e){return r.get(`shop/invoice/${e}`)}function k(e,t){return r.put(`shop/invoice/${e}`,t,{showSuccessMessage:!0})}function b(){return r.get("shop/order/pay/type")}function S(){return r.get("shop/order/from")}function m(e){return r.put("shop/order/edit_price",e,{showSuccessMessage:!0})}function B(e){return r.get("shop/order/edit_delivery",{params:e})}function L(){return r.get("shop/delivery/store/list")}function w(e){return r.put("shop/order/edit_delivery",e)}function C(e){return r.get("shop/order_batch_delivery",{params:e})}function P(e){return r.put("shop/order_batch_delivery/add_batch_order_delivery",e)}function R(){return r.get("shop/order_batch_delivery/get_status")}function A(){return r.get("shop/order_batch_delivery/get_type")}export{v as A,_ as B,O as C,b as a,S as b,i as c,A as d,R as e,C as f,d as g,P as h,p as i,c as j,h as k,l,$ as m,w as n,m as o,L as p,B as q,f as r,k as s,n as t,s as u,u as v,a as w,g as x,D as y,y as z};
