import{N as s}from"./index-17984968.js";function t(e){return s.get("shop/goods",{params:e})}function r(e){return s.post("shop/goods",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return s.put(`shop/goods/${e.goods_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function a(e){return s.get("shop/goods/init",{params:e})}function n(e){return s.post("shop/goods/virtual",e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return s.put(`shop/goods/virtual/${e.goods_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function c(e){return s.get("shop/goods/virtual/init",{params:e})}function d(e){return s.put("shop/goods/delete",e,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return s.get("shop/goods/recycle",{params:e})}function h(e){return s.put("shop/goods/recycle",e,{showErrorMessage:!0,showSuccessMessage:!0})}function p(e){return s.put("shop/goods/sort",e,{showSuccessMessage:!0})}function f(e){return s.put("shop/goods/status",e,{showSuccessMessage:!0})}function l(e){return s.put(`shop/goods/copy/${e.goods_id}`,e,{showSuccessMessage:!0})}function M(e){return s.get("shop/goods/select",{params:e})}function w(e){return s.get("shop/goods/sku",{params:e})}function S(e){return s.get("shop/goods/active/count",{params:e})}function E(e){return s.put("shop/goods/sku/stock",e,{showSuccessMessage:!0})}function v(e){return s.put("shop/goods/sku/price",e,{showSuccessMessage:!0})}function y(e){return s.put("shop/goods/sku/member_price",e,{showSuccessMessage:!0})}function L(){return s.get("shop/goods/type")}function $(e){return s.get("shop/goods/label",{params:e})}function b(e){return s.get("shop/goods/label/list",{params:e})}function G(e){return s.get(`shop/goods/label/${e}`)}function _(e){return s.post("shop/goods/label",e,{showErrorMessage:!0,showSuccessMessage:!0})}function C(e){return s.put(`shop/goods/label/${e.label_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function A(e){return s.delete(`shop/goods/label/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function P(e){return s.get("shop/goods/brand",{params:e})}function k(e){return s.get("shop/goods/brand/list",{params:e})}function I(e){return s.get(`shop/goods/brand/${e}`)}function B(e){return s.post("shop/goods/brand",e,{showErrorMessage:!0,showSuccessMessage:!0})}function V(e){return s.put(`shop/goods/brand/${e.brand_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function T(e){return s.delete(`shop/goods/brand/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function q(e){return s.get("shop/goods/service",{params:e})}function x(e){return s.get("shop/goods/service/list",{params:e})}function N(e){return s.get(`shop/goods/service/${e}`)}function R(e){return s.post("shop/goods/service",e,{showErrorMessage:!0,showSuccessMessage:!0})}function j(e){return s.put(`shop/goods/service/${e.service_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function z(e){return s.delete(`shop/goods/service/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function D(){return s.get("shop/goods/tree")}function F(e){return s.get("shop/goods/category",{params:e})}function H(e){return s.get(`shop/goods/category/${e}`)}function J(e){return s.post("shop/goods/category",e,{showErrorMessage:!0,showSuccessMessage:!0})}function K(e){return s.put(`shop/goods/category/${e.category_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function O(e){return s.delete(`shop/goods/category/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function Q(e){return s.post("shop/goods/category/update",e,{showErrorMessage:!0,showSuccessMessage:!0})}function U(e){return s.post("shop/goods/category/config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function W(){return s.get("shop/goods/category/config")}function X(e){return s.get("shop_supplier/supplier/list",{params:e})}function Y(e){return s.get("shop/goods/evaluate",{params:e})}function Z(e){return s.post("shop/goods/evaluate",e,{showErrorMessage:!0,showSuccessMessage:!0})}function m(e){return s.delete(`shop/goods/evaluate/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ee(e){return s.put(`shop/goods/evaluate/adopt/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function se(e){return s.put(`shop/goods/evaluate/refuse/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function oe(e){return s.put(`shop/goods/evaluate/reply/${e.evaluate_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function te(e){return s.put(`shop/goods/evaluate/topping/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function re(e){return s.put(`shop/goods/evaluate/cancel_topping/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ue(e){return s.get("shop/goods/attr",{params:e})}function ae(e){return s.get("shop/goods/attr/list",{params:e})}function ne(e){return s.get(`shop/goods/attr/${e}`)}function ge(e){return s.post("shop/goods/attr",e,{showErrorMessage:!0,showSuccessMessage:!0})}function ce(e){return s.put(`shop/goods/attr/${e.attr_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function de(e){return s.delete(`shop/goods/attr/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ie(e){return s.put("shop/goods/attr/sort",e,{showSuccessMessage:!0})}function he(e){return s.put("shop/goods/attr/attr_value",e,{showSuccessMessage:!0})}export{a as $,S as A,v as B,E as C,C as D,_ as E,G as F,j as G,R as H,N as I,Y as J,m as K,ee as L,se as M,te as N,re as O,oe as P,$ as Q,A as R,k as S,b as T,f as U,d as V,p as W,t as X,l as Y,r as Z,u as _,F as a,x as a0,X as a1,ae as a2,h as a3,i as a4,q as a5,z as a6,c as a7,n as a8,g as a9,L as b,M as c,ue as d,ce as e,ge as f,D as g,de as h,ne as i,he as j,P as k,T as l,ie as m,V as n,B as o,I as p,K as q,O as r,J as s,H as t,Q as u,W as v,U as w,Z as x,y,w as z};