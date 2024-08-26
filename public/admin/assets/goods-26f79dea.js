import{O as s}from"./index-37fee5a0.js";function t(e){return s.get("shop/goods",{params:e})}function r(e){return s.post("shop/goods",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return s.put(`shop/goods/${e.goods_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function a(e){return s.get("shop/goods/init",{params:e})}function n(e){return s.post("shop/goods/virtual",e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return s.put(`shop/goods/virtual/${e.goods_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function c(e){return s.get("shop/goods/virtual/init",{params:e})}function d(e){return s.put("shop/goods/delete",e,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return s.get("shop/goods/recycle",{params:e})}function h(e){return s.put("shop/goods/recycle",e,{showErrorMessage:!0,showSuccessMessage:!0})}function p(e){return s.put("shop/goods/sort",e,{showSuccessMessage:!0})}function f(e){return s.put("shop/goods/status",e,{showSuccessMessage:!0})}function l(e){return s.put(`shop/goods/copy/${e.goods_id}`,e,{showSuccessMessage:!0})}function M(e){return s.get("shop/goods/select",{params:e})}function w(e){return s.get("shop/goods/sku",{params:e})}function S(e){return s.get("shop/goods/active/count",{params:e})}function E(e){return s.put("shop/goods/sku/stock",e,{showSuccessMessage:!0})}function v(e){return s.put("shop/goods/sku/price",e,{showSuccessMessage:!0})}function y(e){return s.put("shop/goods/sku/member_price",e,{showSuccessMessage:!0})}function b(){return s.get("shop/goods/type")}function L(e){return s.get("shop/goods/label",{params:e})}function $(e){return s.get("shop/goods/label/list",{params:e})}function G(e){return s.get(`shop/goods/label/${e}`)}function _(e){return s.post("shop/goods/label",e,{showErrorMessage:!0,showSuccessMessage:!0})}function C(e){return s.put(`shop/goods/label/${e.label_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function A(e){return s.delete(`shop/goods/label/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function P(e){return s.put("shop/goods/label/sort",e,{showSuccessMessage:!0})}function k(e){return s.get("shop/goods/brand",{params:e})}function B(e){return s.get("shop/goods/brand/list",{params:e})}function I(e){return s.get(`shop/goods/brand/${e}`)}function V(e){return s.post("shop/goods/brand",e,{showErrorMessage:!0,showSuccessMessage:!0})}function T(e){return s.put(`shop/goods/brand/${e.brand_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function q(e){return s.put("shop/goods/brand/sort",e,{showSuccessMessage:!0})}function x(e){return s.delete(`shop/goods/brand/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function O(e){return s.get("shop/goods/service",{params:e})}function R(e){return s.get("shop/goods/service/list",{params:e})}function j(e){return s.get(`shop/goods/service/${e}`)}function m(e){return s.post("shop/goods/service",e,{showErrorMessage:!0,showSuccessMessage:!0})}function z(e){return s.put(`shop/goods/service/${e.service_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function D(e){return s.delete(`shop/goods/service/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function F(){return s.get("shop/goods/tree")}function H(e){return s.get("shop/goods/category",{params:e})}function J(e){return s.get(`shop/goods/category/${e}`)}function K(e){return s.post("shop/goods/category",e,{showErrorMessage:!0,showSuccessMessage:!0})}function N(e){return s.put(`shop/goods/category/${e.category_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function Q(e){return s.delete(`shop/goods/category/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function U(e){return s.post("shop/goods/category/update",e,{showErrorMessage:!0,showSuccessMessage:!0})}function W(e){return s.post("shop/goods/category/config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function X(){return s.get("shop/goods/category/config")}function Y(e){return s.get("shop_supplier/supplier/list",{params:e})}function Z(e){return s.get("shop/goods/evaluate",{params:e})}function ee(e){return s.post("shop/goods/evaluate",e,{showErrorMessage:!0,showSuccessMessage:!0})}function se(e){return s.delete(`shop/goods/evaluate/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function oe(e){return s.put(`shop/goods/evaluate/adopt/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function te(e){return s.put(`shop/goods/evaluate/refuse/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function re(e){return s.put(`shop/goods/evaluate/reply/${e.evaluate_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function ue(e){return s.put(`shop/goods/evaluate/topping/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ae(e){return s.put(`shop/goods/evaluate/cancel_topping/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ne(e){return s.get("shop/goods/attr",{params:e})}function ge(e){return s.get("shop/goods/attr/list",{params:e})}function ce(e){return s.get(`shop/goods/attr/${e}`)}function de(e){return s.post("shop/goods/attr",e,{showErrorMessage:!0,showSuccessMessage:!0})}function ie(e){return s.put(`shop/goods/attr/${e.attr_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function he(e){return s.delete(`shop/goods/attr/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function pe(e){return s.put("shop/goods/attr/sort",e,{showSuccessMessage:!0})}function fe(e){return s.put("shop/goods/attr/attr_value",e,{showSuccessMessage:!0})}export{r as $,w as A,S as B,v as C,E as D,C as E,_ as F,G,z as H,m as I,j as J,Z as K,se as L,oe as M,te as N,ue as O,ae as P,re as Q,L as R,A as S,P as T,B as U,$ as V,f as W,d as X,p as Y,t as Z,l as _,H as a,u as a0,a as a1,R as a2,Y as a3,ge as a4,h as a5,i as a6,O as a7,D as a8,c as a9,n as aa,g as ab,b,M as c,ne as d,ie as e,de as f,F as g,he as h,ce as i,fe as j,k,x as l,pe as m,q as n,T as o,V as p,I as q,N as r,Q as s,K as t,U as u,J as v,X as w,W as x,ee as y,y as z};