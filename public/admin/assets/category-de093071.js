import{O as e}from"./index-99f00cf3.js";function s(t){return e.get("shop_giftcard/category",{params:t})}function o(t){return e.get("shop_giftcard/category/list",{params:t})}function a(t){return e.get(`shop_giftcard/category/${t}`)}function g(t){return e.post("shop_giftcard/category",t,{showErrorMessage:!0,showSuccessMessage:!0})}function c(t){return e.put(`shop_giftcard/category/${t.category_id}`,t,{showErrorMessage:!0,showSuccessMessage:!0})}function u(t){return e.delete(`shop_giftcard/category/${t}`,{showErrorMessage:!0,showSuccessMessage:!0})}function n(t){return e.put("shop_giftcard/category/sort",t,{showSuccessMessage:!0})}function i(t){return e.put("shop_giftcard/category/status",t,{showSuccessMessage:!0})}export{s as a,i as b,g as c,u as d,c as e,a as f,o as g,n as m};