import{r as t,aj as l}from"./index-ef55c51f.js";function e(){const e=t({title:"",topStatusBar:{style:"style-1",bgColor:"transparent",rollBgColor:"#fff",textColor:"#fff",rollTextColor:"#333"}}),o=t(1),a=t(-1);l((t=>{t.scrollTop<=0?a.value=-1:t.scrollTop>o.value?a.value=1:a.value=2}));return{getScrollBool:()=>a.value,setTopTabbarParam:(t={})=>{if(t&&"object"!=typeof t)return e;for(let l in t)if("title"==l)e.value.title=t.title||"";else if("topStatusBar"==l&&t.topStatusBar)for(let o in t.topStatusBar)e.value.topStatusBar[o]=t.topStatusBar[o];else e.value[l]=t[l];return e.value}}}export{e as t};
