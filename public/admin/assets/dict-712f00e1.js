import{O as e}from"./index-a3bdc7eb.js";function c(t){return e.get("dict/dict",{params:t})}function i(t){return e.get(`dict/dict/${t}`)}function u(t){return e.post("dict/dict",t,{showErrorMessage:!0,showSuccessMessage:!0})}function n(t){return e.put(`dict/dict/${t.id}`,t,{showErrorMessage:!0,showSuccessMessage:!0})}function o(t){return e.delete(`dict/dict/${t}`,{showErrorMessage:!0,showSuccessMessage:!0})}function a(t,s){return e.put(`dict/dictionary/${t}`,s,{showErrorMessage:!0,showSuccessMessage:!0})}function d(){return e.get("dict/all")}function g(t){return e.get(`dict/dictionary/type/${t}`)}export{u as a,c as b,d as c,o as d,n as e,i as g,a as s,g as u};