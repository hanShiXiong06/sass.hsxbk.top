import{O as e}from"./index-37fee5a0.js";function s(){return e.get("tk_cps/bwc/getorderstatus")}function c(r){return e.get("tk_cps/bwcorder",{params:r})}function o(r){return e.get(`tk_cps/bwcorder/${r}`)}function u(r){return e.post("tk_cps/bwcorder",r,{showErrorMessage:!0,showSuccessMessage:!0})}function n(r){return e.put(`tk_cps/bwcorder/${r.id}`,r,{showErrorMessage:!0,showSuccessMessage:!0})}export{c as a,u as b,o as c,n as e,s as g};
