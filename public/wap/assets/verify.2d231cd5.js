import{bt as e}from"./index-7bf68536.js";function r(r,t){return e.get("verify",{type:r,data:t})}function t(r){return e.get("verify_records",r)}function n(){return e.get("check_verifier")}function i(r){return e.get(`get_verify_by_code/${r}`)}function o(r){return e.post(`verify/${r}`,{},{showErrorMessage:!0})}function s(r){return e.get(`verify_detail/${r}`,{},{showErrorMessage:!0})}export{i as a,s as b,t as c,r as d,n as g,o as v};
