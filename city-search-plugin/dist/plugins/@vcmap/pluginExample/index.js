
function loadCss(href) {
  return new Promise((resolve, reject) => {
    const elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = href;
    elem.defer = false;
    elem.async = false;
    elem.onload = resolve;
    elem.onerror = reject;
    document.head.appendChild(elem);
  });
} await loadCss('data:text/css;base64,bGFiZWxbZGF0YS12LTRlN2U3NjEwXXtmb250LXNpemU6MTJweH0K');var y=Object.defineProperty;var R=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var w=(n,e,s)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,O=(n,e)=>{for(var s in e||(e={}))B.call(e,s)&&w(n,s,e[s]);if(R)for(var s of R(e))D.call(e,s)&&w(n,s,e[s]);return n};import{inject as U,ref as v,watch as $,reactive as G}from"../../../assets/vue-composition-api.js";import{createToggleAction as M,WindowSlot as W,ButtonLocation as P}from"../../../assets/ui.js";import{VcsButton as z,VcsSelect as X,VcsTextField as Z,VcsCheckbox as J,VcsFormattedNumber as Y,VcsFormSection as H,VcsLabel as K}from"../../../assets/uicomponents.js";import{VForm as j,VContainer as q,VRow as u,VCol as a}from"../../../assets/vuetify.js";const r={OFF:1,ERROR:2,WARN:4,INFO:8,DEBUG:16},p={ERROR:0,WARN:0,INFO:0,DEBUG:0};p.ERROR=r.ERROR|r.WARN|r.INFO|r.DEBUG,p.WARN=r.WARN|r.INFO|r.DEBUG,p.INFO=r.INFO|r.DEBUG,p.DEBUG=r.DEBUG;const f={useTimestamp:!1,logLevel:r.INFO},I=new Map;I.set(r.ERROR,"error"),I.set(r.WARN,"warn"),I.set(r.INFO,"info"),I.set(r.DEBUG,"log");class k{constructor(e){this.className=e,this.deprecations=new Map}error(e,...s){f.logLevel&p.ERROR&&this._log(String(e),r.ERROR,s)}warning(e,...s){f.logLevel&p.WARN&&this._log(String(e),r.WARN,s)}deprecate(e,s){const t=String(e),i=s?String(s):null;if(!this.deprecations.has(t)){this.deprecations.set(t,i||null);let m=`${t} has been deprecated and will be removed`;i&&(m=`${m}. ${i}`),this.warning(m)}}info(e,...s){f.logLevel&p.INFO&&this._log(String(e),r.INFO,s)}debug(e,...s){f.logLevel&p.DEBUG&&this._log(String(e),r.DEBUG,s)}log(e,...s){f.logLevel&p.DEBUG&&this._log(String(e),r.DEBUG,s)}_log(e,s,t){let i=e;this.className&&(i=`[${this.className}] ${i}`),console[I.get(s)](i,...t),s&r.ERROR&&(console.group(),console.trace(),console.groupEnd())}}const b=new Map;let _;function Q(){return _||(_=new k),_}function ee(n){const e=new k(n);return b.set(n,e),e}function te(n){return n?b.has(n)?b.get(n):ee(n):Q()}const ne="@vcmap/plugin-example",se="1.0.0",ie="~5.0.0",ae={};var x={name:ne,version:se,vcMapVersion:ie,dependencies:ae};const oe="@vcmap/pluginExample",le="plugins/@vcmap/pluginExample/index.js",re=["A","B","C","D"],ce="myInitialText";var h={name:oe,entry:le,selectOptions:re,initialTextInput:ce};function T(n){return/\D+/.test(n)||`Invalid text: ${n}`}function C(n,e){return e==="Option A"?n==="test"||`input ${n} must be "test"`:!0}function F(n){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)||"Invalid e-mail."}var ue=function(){var n=this,e=this,s=e.$createElement,t=e._self._c||s;return t(j,{model:{value:e.isValid,callback:function(i){e.isValid=i},expression:"isValid"}},[t("VcsFormSection",{attrs:{title:"VcsFormSection","title-actions":[{name:"denseSelection",title:"change row height",icon:e.dense?"mdi-arrow-split-horizontal":"mdi-arrow-collapse-vertical",callback:function(){return n.dense=!n.dense}},{name:"noIcon",title:"another action without icon",callback:function(){}},{name:"help",title:e.helpExample,icon:"mdi-help-circle",callback:function(){}},{name:"toggleSection",title:"toggle section",icon:e.showSection?"$vcsMinus":"$vcsPlus",callback:function(){return n.showSection=!n.showSection}},{name:"toggleIcon",title:"toggle switch example",icon:e.showSection?"mdi-toggle-switch":"mdi-toggle-switch-off",active:e.showSection,callback:function(){return n.showSection=!n.showSection}},{name:"alert",icon:"mdi-message-text",callback:e.alertAction}]},scopedSlots:e._u([e.showSection?{key:"default",fn:function(){return[t(q,{staticClass:"pa-2"},[t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,[t("VcsLabel",{attrs:{"html-for":"selectInput",dense:e.dense}},[e._v(" Select ")])],1),t(a,[t("VcsSelect",{attrs:{id:"selectInput",items:e.selectOptions,dense:e.dense,rules:[e.conditionalTest(e.state.conditionalInput,e.state.selected)]},model:{value:e.state.selected,callback:function(i){e.$set(e.state,"selected",i)},expression:"state.selected"}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,[t("VcsLabel",{attrs:{"html-for":"conditionalInput",dense:e.dense}},[e._v(" ConditionalInput ")])],1),t(a,[t("VcsTextField",{attrs:{id:"conditionalInput",clearable:"",dense:e.dense,rules:[e.conditionalTest(e.state.conditionalInput,e.state.selected)]},model:{value:e.state.conditionalInput,callback:function(i){e.$set(e.state,"conditionalInput",i)},expression:"state.conditionalInput"}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,[t("VcsTextField",{attrs:{dense:e.dense},model:{value:e.initialTextInput,callback:function(i){e.initialTextInput=i},expression:"initialTextInput"}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,[t("VcsLabel",{attrs:{"html-for":"initialTextInput",dense:e.dense}},[e._v(" InitialTextInput ")])],1),t(a,[t("VcsTextField",{attrs:{id:"initialTextInput",dense:e.dense,rules:[e.isValidText],loading:e.state.initialTextInput==="myInitialText","error-messages":e.state.checkboxInput?void 0:["manual error message depending on checkbox"]},model:{value:e.state.initialTextInput,callback:function(i){e.$set(e.state,"initialTextInput",i)},expression:"state.initialTextInput"}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,[t("VcsLabel",{attrs:{"html-for":"numberInput",dense:e.dense}},[e._v(" NumberInput ")])],1),t(a,[t("VcsTextField",{attrs:{id:"numberInput",dense:e.dense,type:"number",step:"10",suffix:"cm"},model:{value:e.state.numberInput,callback:function(i){e.$set(e.state,"numberInput",e._n(i))},expression:"state.numberInput"}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,[t("VcsLabel",{attrs:{"html-for":"formattedNumber",dense:e.dense}},[e._v(" VcsFormattedNumber ")])],1),t(a,{staticClass:"d-flex justify-end"},[t("VcsFormattedNumber",{attrs:{id:"formattedNumber",value:e.state.numberInput,unit:"cm","fraction-digits":1,dense:e.dense}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,{staticClass:"px-1",attrs:{cols:"1"}},[t("VcsLabel",{attrs:{"html-for":"coordinateX",dense:e.dense}},[e._v(" X ")])],1),t(a,[t("VcsTextField",{attrs:{id:"coordinateX",dense:e.dense,type:"number",step:"10",suffix:"m"},model:{value:e.state.numberInput,callback:function(i){e.$set(e.state,"numberInput",e._n(i))},expression:"state.numberInput"}})],1),t(a,{staticClass:"px-1",attrs:{cols:"1"}},[t("VcsLabel",{attrs:{"html-for":"coordinateY",dense:e.dense}},[e._v(" Y ")])],1),t(a,[t("VcsTextField",{attrs:{id:"coordinateY",dense:e.dense,type:"number",step:"10",suffix:"m"},model:{value:e.state.numberInput,callback:function(i){e.$set(e.state,"numberInput",e._n(i))},expression:"state.numberInput"}})],1),t(a,{staticClass:"px-1",attrs:{cols:"1"}},[t("VcsLabel",{attrs:{"html-for":"coordinateZ",dense:e.dense}},[e._v(" Z ")])],1),t(a,[t("VcsTextField",{attrs:{id:"coordinateZ",dense:e.dense,type:"number",step:"10",suffix:"m"},model:{value:e.state.numberInput,callback:function(i){e.$set(e.state,"numberInput",e._n(i))},expression:"state.numberInput"}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,{staticClass:"px-1",attrs:{cols:"1"}},[t("VcsLabel",{staticClass:"text-caption",attrs:{"html-for":"textInput",dense:e.dense}},[e._v(" 1 ")])],1),t(a,[t("VcsSelect",{attrs:{items:["A","B","C"],dense:e.dense}})],1),t(a,[t("VcsSelect",{attrs:{items:["A","B","C"],dense:e.dense,multiple:""}})],1),t(a,[t("VcsTextField",{attrs:{id:"textInput",clearable:"",dense:e.dense},model:{value:e.state.conditionalInput,callback:function(i){e.$set(e.state,"conditionalInput",i)},expression:"state.conditionalInput"}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,[t("VcsLabel",{attrs:{"html-for":"emailInput",dense:e.dense}},[e._v(" Email ")])],1),t(a,[t("VcsTextField",{attrs:{id:"emailInput",dense:e.dense,type:"email",rules:[e.isValidEmail]},model:{value:e.state.email,callback:function(i){e.$set(e.state,"email",i)},expression:"state.email"}})],1)],1),t(u,{attrs:{dense:e.dense,"no-gutters":"",align:"center"}},[t(a,[t("VcsCheckbox",{attrs:{id:"checkboxInput",label:"CheckboxInput",dense:e.dense,rules:[function(){return e.state.checkboxInput||"Please accept our terms of use"}]},model:{value:e.state.checkboxInput,callback:function(i){e.$set(e.state,"checkboxInput",i)},expression:"state.checkboxInput"}})],1),t(a,[t("VcsButton",{attrs:{"is-active":e.state.checkboxInput,tooltip:"toggle button",color:"warning","tooltip-position":"right",small:""},on:{click:function(i){e.state.checkboxInput=!e.state.checkboxInput}}},[e.state.checkboxInput?t("span",[e._v("Active-true")]):t("span",[e._v("Active-false")])])],1)],1)],1)]},proxy:!0}:null],null,!0)}),t("VcsButton",{attrs:{disabled:!e.isValid,tooltip:"Log current state in console","has-update":e.isValid&&e.newUpdate},on:{click:function(i){return e.logState(e.state)}}},[e._v(" Log State ")]),t("VcsButton",{attrs:{type:"reset",icon:"$vcsReturn"}},[e._v(" Reset ")])],1)},de=[],Se="";function pe(n,e,s,t,i,m,o,c){var l=typeof n=="function"?n.options:n;e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),t&&(l.functional=!0),m&&(l._scopeId="data-v-"+m);var g;if(o?(g=function(d){d=d||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!d&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(d=__VUE_SSR_CONTEXT__),i&&i.call(this,d),d&&d._registeredComponents&&d._registeredComponents.add(o)},l._ssrRegister=g):i&&(g=c?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),g)if(l.functional){l._injectStyles=g;var L=l.render;l.render=function(A,E){return g.call(E),L(A,E)}}else{var S=l.beforeCreate;l.beforeCreate=S?[].concat(S,g):[g]}return{exports:n,options:l}}const me={name:"PluginExampleComponent",components:{VcsButton:z,VcsSelect:X,VcsTextField:Z,VcsCheckbox:J,VcsFormattedNumber:Y,VcsFormSection:H,VcsLabel:K},props:{windowId:{type:String,default:""}},setup(){const e=U("vcsApp").plugins.getByKey("@vcmap/plugin-example"),s=v(!0);$(e.state,()=>{s.value=!0});const t=["Please select an option.","If Option A is chosen, input of ConditionalInput must be 'test'.","InitialTextInput stays in loading state as long as the initial text is not changed.","VcsFormattedNumber rounds the NumberInput to one decimal digit."].join(`
`);return{showSection:!0,dense:!0,helpExample:t,state:e.state,selectOptions:e.config.selectOptions,initialTextInput:e.config.initialTextInput,isValid:!1,isValidText:T,conditionalTest:C,isValidEmail:F,newUpdate:s,logState(){console.log(e.getSerializedState()),s.value=!1},alertAction(){alert("alert")}}}},N={};var ge=pe(me,ue,de,!1,fe,"4e7e7610",null,null);function fe(n){for(let e in N)this[e]=N[e]}var Ie=function(){return ge.exports}();function V(){return te("@vcmap/pluginExample")}function xe(){return h}function he(n){const e={nonReactiveProp:"nonReactive",selectOptions:v([...n.selectOptions]),_initialTextInput:v(h.initialTextInput),set initialTextInput(o){const c=T(o);c===!0?this._initialTextInput.value=o:V().error("Error setting initialTextInput on plugin config:",c)},get initialTextInput(){return this._initialTextInput}};n.initialTextInput&&(e.initialTextInput=n.initialTextInput);const s=G({selected:e.selectOptions.value[0],conditionalInput:"",initialTextInput:e.initialTextInput.value,numberInput:100.156,checkboxInput:!1,email:""}),t=$([e.selectOptions,e.initialTextInput],([o,c])=>{o.includes(s.selected)||(V().error("invalid state",s.selected),s.selected=o[0]),s.initialTextInput=c});function i(){return O({},s)}function m(o){const c={conditionalInput:C(o.conditionalInput,o.selected),initialTextInput:T(o.initialTextInput),email:F(o.email)};Object.keys(c).forEach(l=>{c[l]!==!0&&(V().warning(`Validation failed for state property "${l}":`,c[l]),delete o[l])}),Object.assign(s,o)}return{get name(){return x.name},get version(){return x.version},get vcMapVersion(){return x.vcMapVersion},config:e,state:s,getSerializedState:i,setSerializedState:m,onVcsAppMounted(o){const{action:c,destroy:l}=M({name:"Plugin Example",icon:"$vcsHealthCareIndustries",title:"Example Plugin Map Button Tooltip"},{id:"pluginExample",component:Ie,slot:W.STATIC,state:{headerTitle:"Plugin Example",headerIcon:"$vcsCircle"}},o.windowManager,x.name);o.navbarManager.add({id:"pluginExample",location:P.TOOL,action:c},x.name),this._destroyAction=l},toJSON:async()=>{const o={};return o.selectOptions=e.selectOptions,e.initialTextInput!==h.initialTextInput&&(o.initialTextInput=h.initialTextInput),o},destroy(){t(),this._destroyAction&&(this._destroyAction(),this._destroyAction=null)}}}export{he as default,xe as getDefaultConfig};