import{O as t}from"./index-29db729d.js";function u(e){return t.get("site/site",{params:e})}function n(e){return t.get(`site/site/${e}`)}function i(e){return t.post("site/site",e,{showSuccessMessage:!0})}function r(e){return t.put(`site/site/${e.site_id}`,e,{showSuccessMessage:!0})}function o(e){return t.delete(`site/site/${e}`)}function c(e){return t.put(`site/closesite/${e.site_id}`,e,{showSuccessMessage:!0})}function g(e){return t.put(`site/opensite/${e.site_id}`,e,{showSuccessMessage:!0})}function a(){return t.get("site/statuslist")}function f(e){return t.get("site/group",{params:e})}function p(e){return t.get(`site/group/${e}`)}function S(e){return t.post("site/group",e,{showSuccessMessage:!0})}function d(e){return t.put(`site/group/${e.group_id}`,e,{showSuccessMessage:!0})}function l(e){return t.delete(`site/group/${e}`,{showSuccessMessage:!0})}function $(e={}){return t.get("site/group/all")}function h(e={}){return t.get("site/group/user",{params:e})}function w(e){return t.get("site/user",{params:e})}function M(e){return t.get(`site/user/${e}`)}function L(e){return t.post("site/user",e,{showSuccessMessage:!0})}function U(e){return t.put(`site/user/${e.uid}`,e,{showSuccessMessage:!0})}function A(e){return t.put(`site/user/lock/${e}`)}function G(e){return t.put(`site/user/unlock/${e}`)}function k(e){return t.delete(`site/user/${e}`)}function I(e){return t.get("site/log",{params:e})}function _(e){return t.get(`site/log/${e}`)}function y(e){return t.get("site/account",{params:e})}function q(){return t.get("site/account/stat")}function x(){return t.get("site/account/type")}function b(){return t.get("site/addons")}export{o as A,h as B,I as a,_ as b,w as c,k as d,U as e,L as f,b as g,M as h,y as i,x as j,q as k,A as l,$ as m,n,r as o,i as p,f as q,l as r,p as s,d as t,G as u,S as v,a as w,u as x,c as y,g as z};
