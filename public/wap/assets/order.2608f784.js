import{bt as e}from"./index-7bf68536.js";function o(){return e.get("phone_shop/order/status")}function r(o){return e.get("phone_shop/order",o)}function n(){return e.get("phone_shop/order/num")}function t(o){return e.get(`phone_shop/order/${o}`)}function s(o){return e.put(`phone_shop/order/close/${o}`)}function p(o){return e.put(`phone_shop/order/finish/${o}`)}function u(o){return e.get("phone_shop/order_create/calculate",o)}function h(o){return e.post("phone_shop/order_create/create",o)}function c(o){return e.get("phone_shop/order_create/coupon",o)}function a(o){return e.get("phone_shop/order_create/store",o)}function i(o){return e.get("phone_shop/order/logistics",o)}export{t as a,p as b,i as c,o as d,r as e,c as f,n as g,u as h,h as i,a as j,s as o};
