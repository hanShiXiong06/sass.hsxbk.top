import{O as t}from"./index-2a89d409.js";function n(){return t.get("tk_jhkd/getbalance")}function o(e){return t.get("tk_jhkd/getconfig",{params:e})}function r(e){return t.post("tk_jhkd/setconfig",e,{showSuccessMessage:!0})}function c(e){return t.get("tk_jhkd/brand",{params:e})}function k(e){return t.get("tk_jhkd/notice",{params:e})}function u(e){return t.get(`tk_jhkd/notice/${e}`)}function i(e){return t.post("tk_jhkd/notice",e,{showErrorMessage:!0,showSuccessMessage:!0})}function d(e){return t.put(`tk_jhkd/notice/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function h(e){return t.delete(`tk_jhkd/notice/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}export{n as a,c as b,k as c,h as d,u as e,d as f,o as g,i as h,r as s};
