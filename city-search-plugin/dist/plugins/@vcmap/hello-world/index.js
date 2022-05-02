
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
} await loadCss('data:text/css;base64,LmhlbGxvLXdvcmxke2JhY2tncm91bmQtY29sb3I6IzBmZn0K');import{WindowSlot as w}from"../../../assets/ui.js";import{inject as g}from"../../../assets/vue-composition-api.js";import{VcsButton as V}from"../../../assets/uicomponents.js";import{VSheet as y,VCard as S,VContainer as W,VRow as _}from"../../../assets/vuetify.js";const f="@vcmap/hello-world",R="1.0.3";var $=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o(y,{staticClass:"hello-world"},[o(S,{staticClass:"pa-2 ma-2"},[o(W,[o(_,{staticClass:"justify-center mb-4"},[o("h1",[e._v("Hello World")])]),o(_,{staticClass:"justify-center"},[o("VcsButton",{attrs:{icon:"mdi-times"},on:{click:e.closeSelf}},[e._v(" Close Window ")])],1)],1)],1)],1)},A=[],j="";function T(e,r,o,m,s,a,l,v){var n=typeof e=="function"?e.options:e;r&&(n.render=r,n.staticRenderFns=o,n._compiled=!0),m&&(n.functional=!0),a&&(n._scopeId="data-v-"+a);var i;if(l?(i=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!t&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},n._ssrRegister=i):s&&(i=v?function(){s.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:s),i)if(n.functional){n._injectStyles=i;var h=n.render;n.render=function(C,d){return i.call(d),h(C,d)}}else{var c=n.beforeCreate;n.beforeCreate=c?[].concat(c,i):[i]}return{exports:e,options:n}}const p="hello_world_window_id",U={name:"HelloWorld",components:{VcsButton:V},setup(){const e=g("vcsApp");return{closeSelf(){e.windowManager.remove(p)}}}},u={};var b=T(U,$,A,!1,E,null,null,null);function E(e){for(let r in u)this[r]=u[r]}var H=function(){return b.exports}();function M(e,r){return{get name(){return f},get version(){return R},initialize:async o=>{console.log("Called before loading the rest of the current context. Passed in the containing Vcs UI App ")},onVcsAppMounted:async o=>{console.log("Called when the root UI component is mounted and managers are ready to accept components"),o.windowManager.add({id:p,component:H,WindowSlot:w.DETACHED,position:{left:"40%",right:"40%"}},f)},toJSON:async()=>{console.log("Called when serializing this plugin instance")}}}export{M as default};