import{am as e,an as t,ao as r,bM as n,bH as i,bI as s,aq as a,bN as o,o as u,c as l,w as f,aR as d,i as c}from"./index-9317da28.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const h={props:{model:{type:Object,default:()=>e.form.model},rules:{type:[Object,Function,Array],default:()=>e.form.rules},errorType:{type:String,default:()=>e.form.errorType},borderBottom:{type:Boolean,default:()=>e.form.borderBottom},labelPosition:{type:String,default:()=>e.form.labelPosition},labelWidth:{type:[String,Number],default:()=>e.form.labelWidth},labelAlign:{type:String,default:()=>e.form.labelAlign},labelStyle:{type:Object,default:()=>e.form.labelStyle}}},y=/%[sdj%]/g;let m=function(){};function g(e){if(!e||!e.length)return null;const t={};return e.forEach((e=>{const{field:r}=e;t[r]=t[r]||[],t[r].push(e)})),t}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];let n=1;const i=t[0],s=t.length;if("function"==typeof i)return i.apply(null,t.slice(1));if("string"==typeof i){let e=String(i).replace(y,(e=>{if("%%"===e)return"%";if(n>=s)return e;switch(e){case"%s":return String(t[n++]);case"%d":return Number(t[n++]);case"%j":try{return JSON.stringify(t[n++])}catch(r){return"[Circular]"}break;default:return e}}));for(let r=t[n];n<s;r=t[++n])e+=` ${r}`;return e}return i}function q(e,t){return null==e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(t)||"string"!=typeof e||e))}function v(e,t,r){let n=0;const i=e.length;!function s(a){if(a&&a.length)return void r(a);const o=n;n+=1,o<i?t(e[o],s):r([])}([])}function w(e,t,r,n){if(t.first){const t=new Promise(((t,i)=>{const s=function(e){const t=[];return Object.keys(e).forEach((r=>{t.push.apply(t,e[r])})),t}(e);v(s,r,(function(e){return n(e),e.length?i({errors:e,fields:g(e)}):t()}))}));return t.catch((e=>e)),t}let i=t.firstFields||[];!0===i&&(i=Object.keys(e));const s=Object.keys(e),a=s.length;let o=0;const u=[],l=new Promise(((t,l)=>{const f=function(e){if(u.push.apply(u,e),o++,o===a)return n(u),u.length?l({errors:u,fields:g(u)}):t()};s.length||(n(u),t()),s.forEach((t=>{const n=e[t];-1!==i.indexOf(t)?v(n,r,f):function(e,t,r){const n=[];let i=0;const s=e.length;function a(e){n.push.apply(n,e),i++,i===s&&r(n)}e.forEach((e=>{t(e,a)}))}(n,r,f)}))}));return l.catch((e=>e)),l}function x(e){return function(t){return t&&t.message?(t.field=t.field||e.fullField,t):{message:"function"==typeof t?t():t,field:t.field||e.fullField}}}function O(e,t){if(t)for(const r in t)if(t.hasOwnProperty(r)){const n=t[r];"object"==typeof n&&"object"==typeof e[r]?e[r]={...e[r],...n}:e[r]=n}return e}function F(e,t,r,n,i,s){!e.required||r.hasOwnProperty(e.field)&&!q(t,s||e.type)||n.push(b(i.messages.required,e.fullField))}"undefined"!=typeof process&&process.env;const P={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i};var A={integer:function(e){return/^(-)?\d+$/.test(e)},float:function(e){return/^(-)?\d+(\.\d+)?$/.test(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear},number:function(e){return!isNaN(e)&&"number"==typeof+e},object:function(e){return"object"==typeof e&&!A.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(P.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(P.url)},hex:function(e){return"string"==typeof e&&!!e.match(P.hex)}};const j="enum";const E={required:F,whitespace:function(e,t,r,n,i){(/^\s+$/.test(t)||""===t)&&n.push(b(i.messages.whitespace,e.fullField))},type:function(e,t,r,n,i){if(e.required&&void 0===t)return void F(e,t,r,n,i);const s=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(s)>-1?A[s](t)||n.push(b(i.messages.types[s],e.fullField,e.type)):s&&typeof t!==e.type&&n.push(b(i.messages.types[s],e.fullField,e.type))},range:function(e,t,r,n,i){const s="number"==typeof e.len,a="number"==typeof e.min,o="number"==typeof e.max,u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;let l=t,f=null;const d="number"==typeof t,c="string"==typeof t,p=Array.isArray(t);if(d?f="number":c?f="string":p&&(f="array"),!f)return!1;p&&(l=t.length),c&&(l=t.replace(u,"_").length),s?l!==e.len&&n.push(b(i.messages[f].len,e.fullField,e.len)):a&&!o&&l<e.min?n.push(b(i.messages[f].min,e.fullField,e.min)):o&&!a&&l>e.max?n.push(b(i.messages[f].max,e.fullField,e.max)):a&&o&&(l<e.min||l>e.max)&&n.push(b(i.messages[f].range,e.fullField,e.min,e.max))},enum:function(e,t,r,n,i){e[j]=Array.isArray(e[j])?e[j]:[],-1===e[j].indexOf(t)&&n.push(b(i.messages[j],e.fullField,e[j].join(", ")))},pattern:function(e,t,r,n,i){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||n.push(b(i.messages.pattern.mismatch,e.fullField,t,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(t)||n.push(b(i.messages.pattern.mismatch,e.fullField,t,e.pattern))}}};function S(e,t,r,n,i){const s=e.type,a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t,s)&&!e.required)return r();E.required(e,t,n,a,i,s),q(t,s)||E.type(e,t,n,a,i)}r(a)}const R={string:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t,"string")&&!e.required)return r();E.required(e,t,n,s,i,"string"),q(t,"string")||(E.type(e,t,n,s,i),E.range(e,t,n,s,i),E.pattern(e,t,n,s,i),!0===e.whitespace&&E.whitespace(e,t,n,s,i))}r(s)},method:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();E.required(e,t,n,s,i),void 0!==t&&E.type(e,t,n,s,i)}r(s)},number:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===t&&(t=void 0),q(t)&&!e.required)return r();E.required(e,t,n,s,i),void 0!==t&&(E.type(e,t,n,s,i),E.range(e,t,n,s,i))}r(s)},boolean:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();E.required(e,t,n,s,i),void 0!==t&&E.type(e,t,n,s,i)}r(s)},regexp:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();E.required(e,t,n,s,i),q(t)||E.type(e,t,n,s,i)}r(s)},integer:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();E.required(e,t,n,s,i),void 0!==t&&(E.type(e,t,n,s,i),E.range(e,t,n,s,i))}r(s)},float:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();E.required(e,t,n,s,i),void 0!==t&&(E.type(e,t,n,s,i),E.range(e,t,n,s,i))}r(s)},array:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t,"array")&&!e.required)return r();E.required(e,t,n,s,i,"array"),q(t,"array")||(E.type(e,t,n,s,i),E.range(e,t,n,s,i))}r(s)},object:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();E.required(e,t,n,s,i),void 0!==t&&E.type(e,t,n,s,i)}r(s)},enum:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();E.required(e,t,n,s,i),void 0!==t&&E.enum(e,t,n,s,i)}r(s)},pattern:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t,"string")&&!e.required)return r();E.required(e,t,n,s,i),q(t,"string")||E.pattern(e,t,n,s,i)}r(s)},date:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();if(E.required(e,t,n,s,i),!q(t)){let r;r="number"==typeof t?new Date(t):t,E.type(e,r,n,s,i),r&&E.range(e,r.getTime(),n,s,i)}}r(s)},url:S,hex:S,email:S,required:function(e,t,r,n,i){const s=[],a=Array.isArray(t)?"array":typeof t;E.required(e,t,n,s,i,a),r(s)},any:function(e,t,r,n,i){const s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(q(t)&&!e.required)return r();E.required(e,t,n,s,i)}r(s)}};function $(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){const e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}const k=$();function T(e){this.rules=null,this._messages=k,this.define(e)}T.prototype={messages:function(e){return e&&(this._messages=O($(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");let t,r;for(t in this.rules={},e)e.hasOwnProperty(t)&&(r=e[t],this.rules[t]=Array.isArray(r)?r:[r])},validate:function(e,t,r){const n=this;void 0===t&&(t={}),void 0===r&&(r=function(){});let i,s,a=e,o=t,u=r;if("function"==typeof o&&(u=o,o={}),!this.rules||0===Object.keys(this.rules).length)return u&&u(),Promise.resolve();if(o.messages){let e=this.messages();e===k&&(e=$()),O(e,o.messages),o.messages=e}else o.messages=this.messages();const l={};(o.keys||Object.keys(this.rules)).forEach((t=>{i=n.rules[t],s=a[t],i.forEach((r=>{let i=r;"function"==typeof i.transform&&(a===e&&(a={...a}),s=a[t]=i.transform(s)),i="function"==typeof i?{validator:i}:{...i},i.validator=n.getValidationMethod(i),i.field=t,i.fullField=i.fullField||t,i.type=n.getType(i),i.validator&&(l[t]=l[t]||[],l[t].push({rule:i,value:s,source:a,field:t}))}))}));const f={};return w(l,o,((e,t)=>{const{rule:r}=e;let n,i=!("object"!==r.type&&"array"!==r.type||"object"!=typeof r.fields&&"object"!=typeof r.defaultField);function s(e,t){return{...t,fullField:`${r.fullField}.${e}`}}function a(n){void 0===n&&(n=[]);let a=n;if(Array.isArray(a)||(a=[a]),!o.suppressWarning&&a.length&&T.warning("async-validator:",a),a.length&&r.message&&(a=[].concat(r.message)),a=a.map(x(r)),o.first&&a.length)return f[r.field]=1,t(a);if(i){if(r.required&&!e.value)return a=r.message?[].concat(r.message).map(x(r)):o.error?[o.error(r,b(o.messages.required,r.field))]:[],t(a);let n={};if(r.defaultField)for(const t in e.value)e.value.hasOwnProperty(t)&&(n[t]=r.defaultField);n={...n,...e.rule.fields};for(const e in n)if(n.hasOwnProperty(e)){const t=Array.isArray(n[e])?n[e]:[n[e]];n[e]=t.map(s.bind(null,e))}const i=new T(n);i.messages(o.messages),e.rule.options&&(e.rule.options.messages=o.messages,e.rule.options.error=o.error),i.validate(e.value,e.rule.options||o,(e=>{const r=[];a&&a.length&&r.push.apply(r,a),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(a)}i=i&&(r.required||!r.required&&e.value),r.field=e.field,r.asyncValidator?n=r.asyncValidator(r,e.value,a,e.source,o):r.validator&&(n=r.validator(r,e.value,a,e.source,o),!0===n?a():!1===n?a(r.message||`${r.field} fails`):n instanceof Array?a(n):n instanceof Error&&a(n.message)),n&&n.then&&n.then((()=>a()),(e=>a(e)))}),(e=>{!function(e){let t,r=[],n={};function i(e){if(Array.isArray(e)){let t;r=(t=r).concat.apply(t,e)}else r.push(e)}for(t=0;t<e.length;t++)i(e[t]);r.length?n=g(r):(r=null,n=null),u(r,n)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!R.hasOwnProperty(e.type))throw new Error(b("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;const t=Object.keys(e),r=t.indexOf("message");return-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0]?R.required:R[this.getType(e)]||!1}},T.register=function(e,t){if("function"!=typeof t)throw new Error("Cannot register a validator by type, validator is not a function");R[e]=t},T.warning=m,T.messages=k,T.warning=function(){};const M=p({name:"u-form",mixins:[t,r,h],provide(){return{uForm:this}},data:()=>({formRules:{},validator:{},originalModel:null}),watch:{rules:{immediate:!0,handler(e){this.setRules(e)}},propsChange(e){var t;(null==(t=this.children)?void 0:t.length)&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))},model:{immediate:!0,handler(e){this.originalModel||(this.originalModel=n(e))}}},computed:{propsChange(){return[this.errorType,this.borderBottom,this.labelPosition,this.labelWidth,this.labelAlign,this.labelStyle]}},created(){this.children=[]},methods:{setRules(e){0!==Object.keys(e).length&&(this.formRules=e,this.validator=new T(e))},resetFields(){this.resetModel()},resetModel(e){this.children.map((e=>{const t=null==e?void 0:e.prop,r=i(this.originalModel,t);s(this.model,t,r)}))},clearValidate(e){e=[].concat(e),this.children.map((t=>{(void 0===e[0]||e.includes(t.prop))&&(t.message=null)}))},async validateField(e,t,r=null){this.$nextTick((()=>{const n=[];e=[].concat(e),this.children.map((t=>{const s=[];if(e.includes(t.prop)){const e=i(this.model,t.prop),o=t.prop.split("."),u=o[o.length-1],l=this.formRules[t.rule||t.prop];if(!l)return;const f=[].concat(l);for(let i=0;i<f.length;i++){const o=f[i],l=[].concat(null==o?void 0:o.trigger);if(r&&!l.includes(r))continue;new T({[u]:o}).validate({[u]:e},((e,r)=>{var i;a.array(e)&&(n.push(...e),s.push(...e)),t.message=(null==(i=s[0])?void 0:i.message)?s[0].message:null}))}}})),"function"==typeof t&&t(n)}))},validate(e){return new Promise(((e,t)=>{this.$nextTick((()=>{const r=this.children.map((e=>e.prop));this.validateField(r,(r=>{r.length?("toast"===this.errorType&&o(r[0].message),t(r)):e(!0)}))}))}))}}},[["render",function(e,t,r,n,i,s){const a=c;return u(),l(a,{class:"u-form"},{default:f((()=>[d(e.$slots,"default")])),_:3})}]]);export{M as _,h as p};
