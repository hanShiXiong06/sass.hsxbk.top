import{O as s}from"./index-99f00cf3.js";function o(){return s.get("shop_fenxiao/sale_config")}function t(e){return s.put("shop_fenxiao/sale_config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function a(){return s.get("shop_fenxiao/sale_period_type")}function r(){return s.get("shop_fenxiao/sale_send_type")}function i(e){return s.get("shop_fenxiao/sale",{params:e})}function f(e){return s.post(`shop_fenxiao/sale_send/${e}`)}function u(e){return s.get(`shop_fenxiao/sale/${e}`)}function g(e){return s.get("shop_fenxiao/sale_member",{params:e})}export{a,r as b,i as c,f as d,u as e,g as f,o as g,t as s};
