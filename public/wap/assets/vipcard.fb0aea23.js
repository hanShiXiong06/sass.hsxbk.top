import{bt as r}from"./index-7bf68536.js";function e(e){return r.get("vipcard/verify",{params:e})}function t(e){return r.get(`vipcard/verify/search/${e}`)}function n(e){return r.get(`vipcard/verify/${e}`)}function c(){return r.get("vipcard/verify/verifier/check")}function s(e){return r.post(`vipcard/verify/${e.verify_code}`,e,{showSuccessMessage:!0})}function a(e){return r.get("vipcard/order/confirm",e)}function i(e){return r.post("vipcard/order/create",e)}function u(e){return r.get("vipcard/order",e)}function o(e){return r.get(`vipcard/order/${e}`)}function d(){return r.get("vipcard/order/status")}function v(e){return r.put(`vipcard/order/cancel/${e}`,{},{showErrorMessage:!0,showSuccessMessage:!0})}function p(e){return r.delete(`vipcard/order/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function f(e){return r.post("vipcard/refund/apply",e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return r.get(`vipcard/refund/${e}`)}function l(e){return r.put(`vipcard/refund/cancel/${e}`)}function $(){return r.get("vipcard/category")}function h(e){return r.get("vipcard/service",e)}function w(e){return r.get(`vipcard/service/${e}`)}function m(e){return r.get("vipcard/service/list",e)}function y(e){return r.get("vipcard/card",e)}function M(e){return r.get(`vipcard/card/${e}`)}function E(e){return r.get("vipcard/membercard",e)}function S(e){return r.get(`vipcard/membercard/${e}`)}function b(e){return r.get("vipcard/card/list",e)}function x(){return r.get("vipcard/reserve/user/list")}function j(e){return r.post("vipcard/reserve/apply",e,{showErrorMessage:!0})}function k(){return r.get("vipcard/reserve/status")}function q(e){return r.get("vipcard/reserve/list",e)}function z(e){return r.put(`vipcard/reserve/remove/${e}`,{},{showErrorMessage:!0,showSuccessMessage:!0})}function A(e){return r.get(`vipcard/reserve/info/${e}`)}function B(e){return r.post("vipcard/collect",e)}function C(e){return r.get("vipcard/collect",e)}function D(e){return r.delete(`vipcard/collect/${e}`)}export{f as A,l as B,c as C,t as D,s as E,e as F,n as G,m as a,y as b,M as c,C as d,D as e,$ as f,b as g,h,w as i,x as j,k,q as l,z as m,A as n,E as o,S as p,a as q,j as r,B as s,i as t,d as u,u as v,v as w,p as x,o as y,g as z};
