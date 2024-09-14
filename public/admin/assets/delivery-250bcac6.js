import{O as s}from"./index-5a756a51.js";function r(e){return s.get("shop/delivery/company",{params:e})}function o(e){return s.get("shop/delivery/company/list",{params:e})}function n(e){return s.get(`shop/delivery/company/${e}`)}function i(e){return s.post("shop/delivery/company",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return s.put(`shop/delivery/company/${e.company_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function p(e){return s.delete(`shop/delivery/company/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function a(e){return s.get("shop/shipping/template",{params:e})}function h(e){return s.get("shop/shipping/template/list",{params:e})}function c(e){return s.get(`shop/shipping/template/${e}`)}function g(e){return s.post("shop/shipping/template",e,{showErrorMessage:!0,showSuccessMessage:!0})}function l(e){return s.put(`shop/shipping/template/${e.template_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function d(e){return s.delete(`shop/shipping/template/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function f(e){return s.get("shop/delivery/store",{params:e})}function y(e){return s.get(`shop/delivery/store/${e}`)}function S(e){return s.post("shop/delivery/store",e,{showErrorMessage:!0,showSuccessMessage:!0})}function v(e){return s.put(`shop/delivery/store/${e.store_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function m(e){return s.delete(`shop/delivery/store/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function w(e){return s.post("shop/delivery/search",e,{showErrorMessage:!0,showSuccessMessage:!0})}function M(){return s.get("shop/delivery/search")}function $(){return s.get("shop/delivery/deliveryList")}function E(e){return s.put("shop/delivery/setConfig",e)}function D(e){return s.get("shop/delivery/staff",{params:e})}function L(e){return s.get(`shop/delivery/staff/${e}`)}function C(e){return s.post("shop/delivery/staff",e,{showSuccessMessage:!0})}function T(e){return s.put(`shop/delivery/staff/${e.deliver_id}`,e,{showSuccessMessage:!0})}function I(e){return s.delete(`shop/delivery/staff/${e}`)}function _(){return s.get("shop/local")}function q(e){return s.put("shop/local",e,{showSuccessMessage:!0})}export{g as A,h as B,n as a,i as b,T as c,p as d,u as e,C as f,r as g,L as h,$ as i,o as j,_ as k,q as l,M as m,w as n,D as o,I as p,f as q,m as r,E as s,y as t,v as u,S as v,a as w,d as x,c as y,l as z};
