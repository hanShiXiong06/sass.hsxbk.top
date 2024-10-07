import{O as s}from"./index-6f32d09b.js";function t(e){return s.get("phone_shop/goods",{params:e})}function r(e){return s.post("phone_shop/goods",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return s.put(`phone_shop/goods/${e.goods_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function n(e){return s.get("phone_shop/goods/init",{params:e})}function a(e){return s.post("phone_shop/goods/virtual",e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return s.put(`phone_shop/goods/virtual/${e.goods_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function h(e){return s.get("phone_shop/goods/virtual/init",{params:e})}function c(e){return s.put("phone_shop/goods/delete",e,{showErrorMessage:!0,showSuccessMessage:!0})}function p(e){return s.get("phone_shop/goods/recycle",{params:e})}function d(e){return s.put("phone_shop/goods/recycle",e,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return s.put("phone_shop/goods/sort",e,{showSuccessMessage:!0})}function f(e){return s.put("phone_shop/goods/status",e,{showSuccessMessage:!0})}function l(e){return s.put(`phone_shop/goods/copy/${e.goods_id}`,e,{showSuccessMessage:!0})}function _(e){return s.get("phone_shop/goods/select",{params:e})}function M(e){return s.get("phone_shop/goods/sku",{params:e})}function w(e){return s.get("phone_shop/goods/active/count",{params:e})}function S(e){return s.put("phone_shop/goods/sku/stock",e,{showSuccessMessage:!0})}function E(e){return s.put("phone_shop/goods/sku/price",e,{showSuccessMessage:!0})}function v(e){return s.put("phone_shop/goods/sku/member_price",e,{showSuccessMessage:!0})}function y(){return s.get("phone_shop/goods/type")}function b(e){return s.get("phone_shop/goods/label",{params:e})}function L(e){return s.get("phone_shop/goods/label/list",{params:e})}function $(e){return s.get(`phone_shop/goods/label/${e}`)}function G(e){return s.post("phone_shop/goods/label",e,{showErrorMessage:!0,showSuccessMessage:!0})}function C(e){return s.put(`phone_shop/goods/label/${e.label_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function A(e){return s.delete(`phone_shop/goods/label/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function P(e){return s.put("phone_shop/goods/label/sort",e,{showSuccessMessage:!0})}function k(e){return s.get("phone_shop/goods/brand",{params:e})}function B(e){return s.get("phone_shop/goods/brand/list",{params:e})}function I(e){return s.get(`phone_shop/goods/brand/${e}`)}function V(e){return s.post("phone_shop/goods/brand",e,{showErrorMessage:!0,showSuccessMessage:!0})}function T(e){return s.put(`phone_shop/goods/brand/${e.brand_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function q(e){return s.put("phone_shop/goods/brand/sort",e,{showSuccessMessage:!0})}function x(e){return s.delete(`phone_shop/goods/brand/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function O(e){return s.get("phone_shop/goods/service",{params:e})}function R(e){return s.get("phone_shop/goods/service/list",{params:e})}function j(e){return s.get(`phone_shop/goods/service/${e}`)}function m(e){return s.post("phone_shop/goods/service",e,{showErrorMessage:!0,showSuccessMessage:!0})}function z(e){return s.put(`phone_shop/goods/service/${e.service_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function D(e){return s.delete(`phone_shop/goods/service/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function F(){return s.get("phone_shop/goods/tree")}function H(e){return s.get("phone_shop/goods/category",{params:e})}function J(e){return s.get(`phone_shop/goods/category/${e}`)}function K(e){return s.post("phone_shop/goods/category",e,{showErrorMessage:!0,showSuccessMessage:!0})}function N(e){return s.put(`phone_shop/goods/category/${e.category_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function Q(e){return s.delete(`phone_shop/goods/category/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function U(e){return s.post("phone_shop/goods/category/update",e,{showErrorMessage:!0,showSuccessMessage:!0})}function W(e){return s.post("phone_shop/goods/category/config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function X(){return s.get("phone_shop/goods/category/config")}function Y(e){return s.get("shop_supplier/supplier/list",{params:e})}function Z(e){return s.get("phone_shop/goods/evaluate",{params:e})}function ee(e){return s.post("phone_shop/goods/evaluate",e,{showErrorMessage:!0,showSuccessMessage:!0})}function se(e){return s.delete(`phone_shop/goods/evaluate/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function oe(e){return s.put(`phone_shop/goods/evaluate/adopt/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function te(e){return s.put(`phone_shop/goods/evaluate/refuse/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function re(e){return s.put(`phone_shop/goods/evaluate/reply/${e.evaluate_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function ue(e){return s.put(`phone_shop/goods/evaluate/topping/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ne(e){return s.put(`phone_shop/goods/evaluate/cancel_topping/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ae(e){return s.get("phone_shop/goods/attr",{params:e})}function ge(e){return s.get("phone_shop/goods/attr/list",{params:e})}function he(e){return s.get(`phone_shop/goods/attr/${e}`)}function ce(e){return s.post("phone_shop/goods/attr",e,{showErrorMessage:!0,showSuccessMessage:!0})}function pe(e){return s.put(`phone_shop/goods/attr/${e.attr_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function de(e){return s.delete(`phone_shop/goods/attr/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ie(e){return s.put("phone_shop/goods/attr/sort",e,{showSuccessMessage:!0})}function fe(e){return s.put("phone_shop/goods/attr/attr_value",e,{showSuccessMessage:!0})}function le(){return s.get("phone_shop/goods/sync_goods_list",{showErrorMessage:!0,showSuccessMessage:!0})}export{le as $,M as A,w as B,E as C,S as D,C as E,G as F,$ as G,z as H,m as I,j as J,Z as K,se as L,oe as M,te as N,ue as O,ne as P,re as Q,b as R,A as S,P as T,B as U,L as V,f as W,c as X,i as Y,t as Z,l as _,H as a,r as a0,u as a1,n as a2,R as a3,Y as a4,ge as a5,d as a6,p as a7,O as a8,D as a9,h as aa,a as ab,g as ac,y as b,_ as c,ae as d,pe as e,ce as f,F as g,de as h,he as i,fe as j,k,x as l,ie as m,q as n,T as o,V as p,I as q,N as r,Q as s,K as t,U as u,J as v,X as w,W as x,ee as y,v as z};
