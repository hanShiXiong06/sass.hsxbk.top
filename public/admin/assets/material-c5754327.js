import{O as r}from"./index-99f00cf3.js";function a(e){return r.get("shop_giftcard/material",{params:e})}function s(e){return r.get(`shop_giftcard/material/${e}`)}function o(e){return r.post("shop_giftcard/material",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return r.put(`shop_giftcard/material/${e.material_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return r.delete("shop_giftcard/material",{data:e,showSuccessMessage:!0,showErrorMessage:!0})}function g(e){return r.put("shop_giftcard/material/modifyGroupId",e,{showErrorMessage:!0,showSuccessMessage:!0})}function c(e){return r.get("shop_giftcard/material/group",{params:e})}function n(e){return r.get("shop_giftcard/material/group/list",{params:e})}function p(e){return r.get(`shop_giftcard/material/group/${e}`)}function l(e){return r.post("shop_giftcard/material/group",e,{showErrorMessage:!0,showSuccessMessage:!0})}function d(e){return r.put(`shop_giftcard/material/group/${e.group_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function f(e){return r.delete(`shop_giftcard/material/group/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function h(e){return r.put("shop_giftcard/material/group/sort",e,{showSuccessMessage:!0})}export{o as a,s as b,d as c,l as d,u as e,p as f,n as g,g as h,a as i,i as j,c as k,f as l,h as m};