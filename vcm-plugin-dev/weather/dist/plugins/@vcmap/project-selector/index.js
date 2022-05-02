
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
} await loadCss('data:text/css;base64,');var k=Object.defineProperty,W=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var B=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,I=(e,n)=>{for(var t in n||(n={}))z.call(n,t)&&B(e,t,n[t]);if(b)for(var t of b(n))X.call(n,t)&&B(e,t,n[t]);return e},$=(e,n)=>W(e,J(n));import{inject as q,ref as h}from"../../../assets/vue-composition-api.js";import{createToggleAction as H,ButtonLocation as K}from"../../../assets/ui.js";import{Context as Q}from"../../../assets/core.js";import{VcsTooltip as Y}from"../../../assets/uicomponents.js";import{VContainer as A,VList as F,VChip as Z,VIcon as D,VCard as ee,VListItem as te,VListItemContent as ne,VListItemTitle as oe,VListItemSubtitle as se,VListItemAction as ie,VAvatar as ce,VDivider as re}from"../../../assets/vuetify.js";const r={OFF:1,ERROR:2,WARN:4,INFO:8,DEBUG:16},m={ERROR:0,WARN:0,INFO:0,DEBUG:0};m.ERROR=r.ERROR|r.WARN|r.INFO|r.DEBUG,m.WARN=r.WARN|r.INFO|r.DEBUG,m.INFO=r.INFO|r.DEBUG,m.DEBUG=r.DEBUG;const y={useTimestamp:!1,logLevel:r.INFO},E=new Map;E.set(r.ERROR,"error"),E.set(r.WARN,"warn"),E.set(r.INFO,"info"),E.set(r.DEBUG,"log");class G{constructor(n){this.className=n,this.deprecations=new Map}error(n,...t){y.logLevel&m.ERROR&&this._log(String(n),r.ERROR,t)}warning(n,...t){y.logLevel&m.WARN&&this._log(String(n),r.WARN,t)}deprecate(n,t){const s=String(n),i=t?String(t):null;if(!this.deprecations.has(s)){this.deprecations.set(s,i||null);let u=`${s} has been deprecated and will be removed`;i&&(u=`${u}. ${i}`),this.warning(u)}}info(n,...t){y.logLevel&m.INFO&&this._log(String(n),r.INFO,t)}debug(n,...t){y.logLevel&m.DEBUG&&this._log(String(n),r.DEBUG,t)}log(n,...t){y.logLevel&m.DEBUG&&this._log(String(n),r.DEBUG,t)}_log(n,t,s){let i=n;this.className&&(i=`[${this.className}] ${i}`),console[E.get(t)](i,...s),t&r.ERROR&&(console.group(),console.trace(),console.groupEnd())}}const S=new Map;let V;function ae(){return V||(V=new G),V}function le(e){const n=new G(e);return S.set(e,n),n}function de(e){return e?S.has(e)?S.get(e):le(e):ae()}var ue=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(A,{staticClass:"pa-0"},[t(F,{attrs:{color:"rgba(0,0,0,0)"}},e._l(e.contexts,function(s,i){return t(Z,{key:i,staticClass:"mx-1",attrs:{color:s.active?"primary":void 0,disabled:!e.toggleable},on:{click:function(u){return e.toggle(s)}}},[e._v(" "+e._s(s.name||s.configUrl)+" "),s.description?t("VcsTooltip",{attrs:{tooltip:s.description},scopedSlots:e._u([{key:"activator",fn:function(u){var g=u.on,d=u.attrs;return[t(D,e._g(e._b({attrs:{right:""}},"v-icon",Object.assign({},e.$attrs,d),!1),Object.assign({},e.$listeners,g)),[e._v(" mdi-help-circle ")])]}}],null,!0)}):e._e()],1)}),1)],1)},fe=[],Me="";function P(e,n,t,s,i,u,g,d){var a=typeof e=="function"?e.options:e;n&&(a.render=n,a.staticRenderFns=t,a._compiled=!0),s&&(a.functional=!0),u&&(a._scopeId="data-v-"+u);var p;if(g?(p=function(f){f=f||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!f&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(f=__VUE_SSR_CONTEXT__),i&&i.call(this,f),f&&f._registeredComponents&&f._registeredComponents.add(g)},a._ssrRegister=p):i&&(p=d?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i),p)if(a.functional){a._injectStyles=p;var j=a.render;a.render=function(L,C){return p.call(C),j(L,C)}}else{var w=a.beforeCreate;a.beforeCreate=w?[].concat(w,p):[p]}return{exports:e,options:a}}const ge={name:"ContextsListComponent",components:{VcsTooltip:Y},props:{contexts:{type:Array,required:!0},toggleable:{type:Boolean,default:!0}},methods:{toggle(e){this.toggleable&&this.$emit("toggle-context",e)}}},T={};var pe=P(ge,ue,fe,!1,ve,"38dc9890",null,null);function ve(e){for(let n in T)this[n]=T[n]}var me=function(){return pe.exports}(),_e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(A,[t("h1",[e._v("Projects")]),e._l(e.state.projects.value,function(s,i){return t(F,{key:i},[t(ee,{staticClass:"ma-1",attrs:{color:s.active?"accent":void 0,hover:"",outlined:"",loading:e.loading===s.name},on:{click:function(u){return e.selectProject(s)}}},[t(te,[t(ne,[t(oe,{staticClass:"font-weight-bold"},[e._v(" "+e._s(s.name)+" ")]),t(se,[e._v(e._s(s.description))]),t("ContextsListComponent",{attrs:{contexts:s.contexts,toggleable:!1},on:{"toggle-context":e.toggleContext}})],1),t(ie,[s.active?t(ce,{attrs:{color:"success",size:"30"}},[t(D,[e._v("mdi-check")])],1):e._e()],1)],1)],1)],1)}),t(re),t("h1",[e._v("Contexts")]),t("ContextsListComponent",{attrs:{contexts:e.state.contexts.value},on:{"toggle-context":e.toggleContext}})],2)},he=[];const xe={name:"ProjectSelector",components:{ContextsListComponent:me},setup(){const e=q("vcsApp"),n=e.plugins.getByKey("@vcmap/project-selector");async function t(i){this.loading=i.name,await n.selectProject(e,i),this.loading=void 0}async function s(i){i.active?await n.unloadContext(e,i):await n.loadContext(e,i)}return{loading:void 0,state:n.state,config:n.config,selectProject:t,toggleContext:s}}},M={};var Ce=P(xe,_e,he,!1,Re,null,null,null);function Re(e){for(let n in M)this[n]=M[n]}var ye=function(){return Ce.exports}();const Ee="@vcmap/project-selector",Oe="1.0.0",je="~5.0.0",we={"@vcsuite/check":"^1.1.2","@vcsuite/logger":"^1.0.1"},Le={"@vcmap/ui":"5.0.0-rc.2","@vcsuite/ui-components":"~0.1.8","@vcmap/core":"^5.0.0-rc.5","@vue/composition-api":"^1.4.5"};var x={name:Ee,version:Oe,vcMapVersion:je,dependencies:we,peerDependencies:Le};const Ie="projectSelector",$e="plugins/@vcmap/project-selector/index.js",Se="VC Map Base",Ve=[],Ne=!1,Ue=[{name:"VC Map Base",description:"Base Layout with basic datasets",contexts:[{configUrl:"config/base.config.json"}]}],be=[];var O={name:Ie,entry:$e,selected:Se,selectedContexts:Ve,open:Ne,projects:Ue,contexts:be};async function Be(e){const{selected:n,selectedContexts:t,open:s,projects:i=[],contexts:u=[]}=e,g={selected:h(n||O.selected),selectedContexts:h(t||O.selectedContexts),open:h(s||O.open),projects:h([...O.projects,...i]),contexts:h([...O.contexts,...u])},d={projects:h([]),contexts:h([])};function a(c){const o=$(I({name:void 0,description:void 0,configUrl:void 0},c),{contextId:void 0,active:!1});d.contexts.value.push(o)}function p(c){const o=d.contexts.value.findIndex(l=>l.configUrl===c.configUrl);d.contexts.value.splice(o,1)}function j(c){const{name:o,description:l,contexts:_=[]}=c,R={name:o,description:l,contexts:_.map(U=>$(I({name:void 0,description:void 0,configUrl:void 0},U),{contextId:void 0,active:!1})),active:!1};d.projects.value.push(R)}function w(c){const o=d.projects.findIndex(l=>l.name===c.name);d.projects.value.splice(o,1)}async function f(c,o){try{const l=await fetch(o.configUrl).then(R=>R.json()),_=new Q(l);c.getContextById(_.id)||await c.addContext(_),o.contextId=_.id,o.active=!0}catch(l){de().error(`Failed loading context from ${o.configUrl}`,l)}}async function L(c,o){c.getContextById(o.contextId)&&await c.removeContext(o.contextId),o.active=!1}async function C(c,o){o.active&&(await Promise.all([...o.contexts].map(l=>L(c,l))),o.active=!1)}async function N(c,o){o.active||(await Promise.all([...d.projects.value].map(l=>C(c,l))),await Promise.all([...o.contexts].map(l=>f(c,l))),o.active=!0)}return{get name(){return x.name},get version(){return x.version},get vcMapVersion(){return x.vcMapVersion},config:g,state:d,addContextFromOptions:a,removeContext:p,addProjectFromOptions:j,removeProject:w,selectProject:N,deselectProject:C,loadContext:f,unloadContext:L,onVcsAppMounted(c){const o={id:"project-selector",component:ye,state:{headerTitle:"Project Selector"},position:{left:"30%",right:"30%",top:"20%",bottom:"20%"}},{action:l,destroy:_}=H({name:"VC Map HOSTING",icon:"mdi-chevron-down"},o,c.windowManager,x.name);c.navbarManager.add({id:"project-selector",location:K.PROJECT,action:l},x.name),this._destroyAction=_,g.contexts.value.forEach(v=>a(v)),g.projects.value.forEach(v=>j(v));const R=[...d.projects.value].find(v=>v.name===g.selected.value)||d.projects.value[0];N(c,R),[...d.contexts.value].filter(v=>g.selectedContexts.value.includes(v.name)).forEach(v=>f(c,v)),g.open&&c.windowManager.add(o,x.name)},destroy(){this._destroyAction&&(this._destroyAction(),this._destroyAction=null)}}}export{Be as default};