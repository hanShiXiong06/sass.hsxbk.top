import{O as t}from"./index-99f00cf3.js";function s(e){return t.get("tk_vip/vip",{params:e})}function i(e){return t.get(`tk_vip/vip/${e}`)}function u(e){return t.post("tk_vip/vip",e,{showErrorMessage:!0,showSuccessMessage:!0})}function n(e){return t.put(`tk_vip/vip/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function o(e){return t.delete(`tk_vip/vip/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function p(e){return t.get("tk_vip/member_all",{params:e})}function a(e){return t.get("tk_vip/member_level_all",{params:e})}export{u as a,p as b,i as c,s as d,n as e,o as f,a as g};
