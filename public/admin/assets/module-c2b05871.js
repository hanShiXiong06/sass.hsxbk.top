import{O as e}from"./index-a3bdc7eb.js";function r(){return e.get("niucloud/authinfo",{showErrorMessage:!1})}function s(o){return e.post("niucloud/authinfo",o,{showSuccessMessage:!0})}function t(o){return e.post(`addon/download/${o.addon}`,o,{showSuccessMessage:!0})}function u(){return e.get("niucloud/framework/newversion")}function a(){return e.get("niucloud/framework/version/list")}export{r as a,u as b,t as d,a as g,s};
