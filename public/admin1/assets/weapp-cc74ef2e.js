import{N as t}from"./index-17984968.js";function n(){return t.get("weapp/config")}function r(e){return t.put("weapp/config",e,{showSuccessMessage:!0})}function a(){return t.get("weapp/template")}function p(e){return t.put("weapp/template/sync",e,{showSuccessMessage:!0})}function o(e){return t.post("weapp/version",e,{showSuccessMessage:!0})}function i(){return t.get("weapp/preview")}function u(e){return t.get("weapp/version",{params:e})}function c(e){return t.get(`weapp/upload/${e}`)}function g(e){return t.post("applet/version",e,{showSuccessMessage:!0})}function f(e){return t.get("applet/version",{params:e})}function w(e){return t.put(`applet/version/${e.id}`,e,{showSuccessMessage:!0})}function d(e){return t.delete(`applet/version/${e}`)}function l(){return t.get("weapp/delivery/getIsTradeManaged")}export{i as a,u as b,c,r as d,a as e,p as f,n as g,f as h,w as i,g as j,d as k,l,o as s};
