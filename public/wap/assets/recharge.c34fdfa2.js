import{bt as r}from"./index-7bf68536.js";function e(e){return r.post("recharge/recharge",e,{showErrorMessage:!0})}function a(){return r.get("recharge/recharge/status")}function s(e){return r.get("recharge/recharge",e,{showErrorMessage:!0})}function t(e){return r.get(`recharge/recharge/${e}`,{},{showErrorMessage:!0})}export{s as a,t as b,e as c,a as g};