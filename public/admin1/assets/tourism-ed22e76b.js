import{N as e}from"./index-17984968.js";function r(t){return e.get("tourism/goods_of_select",{params:t})}function u(t){return e.post("tourism/setting",t,{showSuccessMessage:!0})}function o(){return e.get("tourism/setting")}function i(t){return e.get("tourism/hotel",{params:t})}function n(t){return e.get(`tourism/hotel/${t}`)}function c(t){return e.post("tourism/hotel",t,{showSuccessMessage:!0})}function a(t){return e.put(`tourism/hotel/${t.hotel_id}`,t,{showSuccessMessage:!0})}function f(){return e.get("tourism/hotel/facilities")}function g(){return e.get("tourism/hotel/status")}function d(t){return e.put(`tourism/hotel/status/${t.hotel_id}`,t,{showSuccessMessage:!0})}function m(t){return e.get("tourism/hotel/order",{params:t})}function l(t){return e.get(`tourism/hotel/order/${t}`)}function S(){return e.get("tourism/hotel/order/status")}function w(t){return e.get("tourism/scenic/order",{params:t})}function h(t){return e.get(`tourism/scenic/order/${t}`)}function y(){return e.get("tourism/scenic/order/status")}function M(t){return e.get("tourism/verify/record",{params:t})}function $(t){return e.get(`tourism/verify/${t}`)}function k(t){return e.post(`tourism/verify/${t}`,{},{showSuccessMessage:!0,showErrorMessage:!0})}function L(t){return e.get("tourism/room",{params:t})}function p(t){return e.get(`tourism/room/${t}`)}function R(t){return e.post("tourism/room",t,{showSuccessMessage:!0})}function _(t){return e.put(`tourism/room/${t.goods_id}`,t,{showSuccessMessage:!0})}function T(t){return e.delete(`tourism/room/${t}`,{showSuccessMessage:!0})}function H(t){return e.put(`tourism/room/status/${t.id}`,t,{showSuccessMessage:!0})}function O(t){return e.post("tourism/room/calendar",t,{showSuccessMessage:!0})}function W(t){return e.get("tourism/room/calendar",{params:t})}function I(){return e.get("tourism/room/facilities")}function v(t){return e.get("tourism/scenic",{params:t})}function V(t){return e.get(`tourism/scenic/${t}`)}function D(t){return e.post("tourism/scenic",t,{showSuccessMessage:!0})}function C(t){return e.put(`tourism/scenic/${t.scenic_id}`,t,{showSuccessMessage:!0})}function P(t){return e.put(`tourism/scenic/status/${t.scenic_id}`,t,{showSuccessMessage:!0})}function b(t){return e.get("tourism/ticket",{params:t})}function F(t){return e.get(`tourism/ticket/${t}`)}function q(t){return e.post("tourism/ticket",t,{showSuccessMessage:!0})}function x(t){return e.put(`tourism/ticket/${t.goods_id}`,t,{showSuccessMessage:!0})}function E(t){return e.delete(`tourism/ticket/${t}`,{showSuccessMessage:!0})}function N(t){return e.put(`tourism/ticket/status/${t.goods_id}`,t,{showSuccessMessage:!0})}function Y(t){return e.post("tourism/ticket/calendar",t,{showSuccessMessage:!0})}function j(t){return e.get("tourism/ticket/calendar",{params:t})}function z(t){return e.get("tourism/way",{params:t})}function A(t){return e.get(`tourism/way/${t}`)}function B(t){return e.post("tourism/way",t,{showSuccessMessage:!0})}function G(t){return e.put(`tourism/way/${t.way_id}`,t,{showSuccessMessage:!0})}function J(t){return e.put(`tourism/way/status/${t.way_id}`,t,{showSuccessMessage:!0})}function K(){return e.get("tourism/way/label")}function Q(t){return e.post("tourism/way/calendar",t,{showSuccessMessage:!0})}function U(t){return e.get("tourism/way/calendar",{params:t})}function X(t){return e.get("tourism/way/order",{params:t})}function Z(t){return e.get(`tourism/way/order/${t}`)}function tt(){return e.get("tourism/way/order/status")}function et(t){return e.get("tourism/refund",{params:t})}function st(){return e.get("tourism/refund/status")}function rt(t){return e.put(`tourism/refund/${t.refund_id}`,t)}function ut(t){return e.put(`tourism/refund/refuse/${t.refund_id}`,t)}function ot(t){return e.get("tourism/verifier",{params:t})}function it(t){return e.post("tourism/verifier",t,{showSuccessMessage:!0})}function nt(t){return e.delete(`tourism/verifier/${t}`,{showSuccessMessage:!0})}function ct(){return e.get("tourism/stat/today")}function at(){return e.get("tourism/stat/yesterday")}function ft(t){return e.get("tourism/stat/hour",{params:t})}function gt(t){return e.get("tourism/stat/stat",{params:t})}function dt(){return e.get("tourism/stat/total")}function mt(){return e.get("tourism/stat/order")}export{M as $,ft as A,dt as B,mt as C,$ as D,k as E,et as F,st as G,rt as H,ut as I,V as J,C as K,D as L,F as M,x as N,q as O,Y as P,j as Q,v as R,P as S,w as T,y as U,h as V,b as W,E as X,N as Y,o as Z,u as _,ot as a,K as a0,A as a1,G as a2,B as a3,Q as a4,U as a5,z as a6,J as a7,X as a8,tt as a9,Z as aa,it as b,f as c,nt as d,n as e,a as f,r as g,c as h,p as i,_ as j,R as k,O as l,I as m,g as n,i as o,d as p,m as q,W as r,S as s,l as t,L as u,H as v,T as w,at as x,ct as y,gt as z};