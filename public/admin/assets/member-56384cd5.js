import{O as t}from"./index-5a756a51.js";function r(e){return t.get("member/member",{params:e})}function s(e){return t.get(`member/member/${e}`)}function u(){return t.get("member/memberno")}function o(e){return t.post("member/member",e,{showSuccessMessage:!0})}function c(e){return t.get("member/register/channel",e)}function m(e){return t.get("member/label",{params:e})}function i(e){return t.get(`member/label/${e}`)}function a(e){return t.post("member/label",e,{showSuccessMessage:!0})}function g(e){return t.put(`member/label/${e.label_id}`,e,{showSuccessMessage:!0})}function b(e){return t.delete(`member/label/${e}`,{showSuccessMessage:!0})}function f(){return t.get("member/label/all")}function l(e){return t.put(`member/member/modify/${e.member_id}/${e.field}`,e,{showSuccessMessage:!0})}function h(e){return t.get(`member/account/change_type/${e}`)}function M(e){return t.get("member/account/point",{params:e})}function d(e){return t.get("member/account/growth",{params:e})}function S(e){return t.get("member/account/balance",{params:e})}function p(e){return t.get("member/account/money",{params:e})}function w(e){return t.get("member/account/commission",{params:e})}function L(e){return t.post("member/account/point",e,{showSuccessMessage:!0})}function _(e){return t.post("member/account/balance",e,{showSuccessMessage:!0})}function C(){return t.get("member/config/login")}function $(e){return t.post("member/config/login",e,{showSuccessMessage:!0})}function v(){return t.get("member/config/member")}function y(e){return t.post("member/config/member",e,{showSuccessMessage:!0})}function O(e){return t.post("member/config/growth_rule",e,{showSuccessMessage:!0})}function P(){return t.get("member/config/growth_rule")}function R(e){return t.post("member/config/point_rule",e,{showSuccessMessage:!0})}function D(){return t.get("member/config/point_rule")}function G(){return t.get("member/cash_out/transfertype")}function B(e){return t.get("member/account/sum_commission",{params:e})}function T(e){return t.get("member/account/sum_point",{params:e})}function A(e){return t.get("member/account/sum_balance",{params:e})}function I(){return t.get("member/account/type")}function j(e){return t.get(`member/account/change_type/${e.account_type}`)}function q(){return t.get("member/config/cash_out")}function x(e){return t.post("member/config/cash_out",e,{showSuccessMessage:!0})}function N(e){return t.get("member/cash_out",{params:e})}function k(e){return t.get(`member/cash_out/${e}`,{})}function z(e){return t.put(`member/cash_out/audit/${e.id}/${e.action}`,e,{showSuccessMessage:!0})}function E(e){return t.put(`member/cash_out/transfer/${e.id}`,e,{showSuccessMessage:!0})}function F(e){return t.put(`member/setstatus/${e.status}`,e,{showSuccessMessage:!0})}function H(){return t.get("member/cash_out/status")}function J(){return t.get("member/cash_out/stat")}function K(){return t.get("member/dict/benefits")}function Q(){return t.get("member/dict/gift")}function U(){return t.get("member/dict/growth_rule")}function V(){return t.get("member/dict/point_rule")}function W(e){return t.get("member/level",{params:e})}function X(e){return t.get(`member/level/${e}`)}function Y(e){return t.post("member/level",e,{showSuccessMessage:!0})}function Z(e){return t.put(`member/level/${e.level_id}`,e,{showSuccessMessage:!0})}function ee(e){return t.delete(`member/level/${e}`,{showSuccessMessage:!0})}function te(){return t.get("member/level/all")}function ne(e){return t.get("member/gifts/content",{params:e})}function re(){return t.get("member/sign/config")}function se(e){return t.put("member/sign/config",e,{showSuccessMessage:!0})}function ue(e){return t.get("member/sign",{params:e})}export{y as $,te as A,f as B,l as C,_ as D,K as E,L as F,d as G,m as H,b as I,W as J,ee as K,X as L,Z as M,Y as N,c as O,F as P,s as Q,T as R,M as S,q as T,x as U,U as V,P as W,O as X,C as Y,$ as Z,v as _,J as a,V as a0,D as a1,R as a2,G as b,N as c,k as d,z as e,Q as f,H as g,re as h,ne as i,ue as j,r as k,h as l,E as m,S as n,p as o,A as p,I as q,j as r,se as s,B as t,w as u,u as v,o as w,g as x,a as y,i as z};
