import{O as s}from"./index-37fee5a0.js";function r(e){return s.get("sys/poster",{params:e})}function o(e){return s.get("sys/poster/list",{params:e})}function u(e){return s.post("sys/poster",e,{showErrorMessage:!0,showSuccessMessage:!0})}function n(e){return s.put(`sys/poster/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function a(e){return s.delete(`sys/poster/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return s.put("sys/poster/status",e,{showSuccessMessage:!0})}function c(e){return s.put("sys/poster/default",e,{showSuccessMessage:!0})}function g(e){return s.get("sys/poster/type",{params:e})}function p(e){return s.get("sys/poster/template",{params:e})}function f(e){return s.get("sys/poster/init",{params:e})}function y(e){return s.get("sys/poster/preview",{params:e})}export{u as a,y as b,g as c,r as d,n as e,c as f,p as g,a as h,f as i,o as j,i as m};
