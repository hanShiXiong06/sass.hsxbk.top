import{O as t}from"./index-2a89d409.js";function n(e){return t.get("shop_fenxiao/agent",{params:e})}function o(e){return t.post("shop_fenxiao/agent",e,{showErrorMessage:!0,showSuccessMessage:!0})}function r(e){return t.put(`shop_fenxiao/agent/${e.member_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return t.put(`shop_fenxiao/agent_status/${e.member_id}/${e.status}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return t.post("shop_fenxiao/agent_level",e,{showErrorMessage:!0,showSuccessMessage:!0})}function a(e){return t.put(`shop_fenxiao/agent_level/${e.level_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return t.delete(`shop_fenxiao/agent_level/${e.level_id}`,{showErrorMessage:!0,showSuccessMessage:!0})}function f(){return t.get("shop_fenxiao/agent_level_list")}function c(){return t.get("shop_fenxiao/agent_config")}function h(e){return t.put("shop_fenxiao/agent_config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function _(){return t.get("shop_fenxiao/agent_status")}function l(e){return t.get("shop_fenxiao/agent_order",{params:e})}export{g as a,c as b,_ as c,i as d,a as e,n as f,f as g,r as h,o as i,u as j,l as k,h as s};
