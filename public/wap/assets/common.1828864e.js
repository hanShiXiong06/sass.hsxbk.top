import{m as t,s as e,H as n,aK as a,bF as o}from"./index-7bf68536.js";t();function s(){return e()||n().setLoginBack({url:"/addon/tk_cps/pages/diy"}),!0}function c(t){const e=new Date(1e3*t);e.getFullYear(),e.getMonth(),e.getDate();const n=e.getHours(),a=e.getMinutes();return e.getSeconds(),`${n}:${a}`}function i(){const e=uni.getStorageSync("location");if(e)return e;{((e={})=>{o({type:e.type||"gcj02",success:n=>{t().setLocation(n),"function"==typeof e.success&&e.success(n)},fail:t=>{"function"==typeof e.fail&&e.fail(t)},complete:t=>{"function"==typeof e.complete&&e.complete(t)}})})();let e=uni.getStorageSync("location"),n={latlng:""};e.latitude&&e.longitude&&(n.latlng=e.latitude+","+e.longitude,a(n).then((t=>{if(t.data&&Object.keys(t.data).length)return uni.setStorageSync("addressByLatlng",t.data),e})))}}export{s as a,i as g,c as t};
