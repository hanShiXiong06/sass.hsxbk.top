import{O as t}from"./index-6ea097a6.js";function r(e){return t.get("pay/refund",{params:e})}function u(e){return t.get(`pay/refund/${e}`)}function a(){return t.get("pay/refund/type")}function f(e){return t.post("pay/refund/transfer",e,{showSuccessMessage:!0})}function s(){return t.get("pay/type/all")}export{a,u as b,f as c,s as d,r as g};