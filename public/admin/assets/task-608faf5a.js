import{O as e}from"./index-a3bdc7eb.js";function o(s){return e.get("shop_fenxiao/task",{params:s})}function a(s){return e.post("shop_fenxiao/task",s,{showErrorMessage:!0,showSuccessMessage:!0})}function r(s){return e.put(`shop_fenxiao/task/${s.id}`,s,{showErrorMessage:!0,showSuccessMessage:!0})}function n(s){return e.delete(`shop_fenxiao/task/${s.id}`,{showErrorMessage:!0,showSuccessMessage:!0})}function u(s){return e.get(`shop_fenxiao/task/${s.id}`,{params:s})}function i(s){return e.put(`shop_fenxiao/task_finish/${s.id}`,s,{showErrorMessage:!0,showSuccessMessage:!0})}function f(){return e.get("shop_fenxiao/task_config")}function g(s){return e.put("shop_fenxiao/task_config",s,{showErrorMessage:!0,showSuccessMessage:!0})}function c(){return e.get("shop_fenxiao/task_status")}function h(s){return e.get("shop_fenxiao/task_member",{params:s})}function k(s){return e.get(`shop_fenxiao/task_member/${s.id}`,{params:s})}export{u as a,a as b,o as c,c as d,r as e,n as f,f as g,k as h,h as i,g as s,i as t};