import{b9 as o}from"./index-905183d4.js";function r(r){return o.post("o2o/order/calculate",r)}function e(r){return o.post("o2o/order/create",r)}function n(r){return o.get("o2o/order",r)}function t(r){return o.get(`o2o/order/${r}`)}function s(){return o.get("o2o/order/status")}function u(r){return o.put(`o2o/order/cancel/${r}`,{},{showErrorMessage:!0,showSuccessMessage:!0})}function a(r){return o.delete(`o2o/order/${r}`,{showErrorMessage:!0,showSuccessMessage:!0})}function c(r){return o.post("o2o/refund/apply",r,{showErrorMessage:!0,showSuccessMessage:!0})}function f(r){return o.get(`o2o/refund/${r}`)}function d(r){return o.put(`o2o/refund/cancel/${r}`)}function i(r){return o.get("o2o/refund/reason")}function g(r){return o.get("o2o/refund/status")}function p(r){return o.get("o2o/refund/lists",r)}function l(r){return o.get(`o2o/refund/orderRefund/${r}`)}export{e as a,n as b,u as c,a as d,t as e,i as f,s as g,f as h,d as i,g as j,p as k,l,r as o,c as r};