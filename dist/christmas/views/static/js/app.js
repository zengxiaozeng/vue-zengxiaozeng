!function(t){var e=window.webpackJsonp;window.webpackJsonp=function(n,o,i){for(var a,s,c=0,u=[];c<n.length;c++)s=n[c],r[s]&&u.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);for(e&&e(n,o,i);u.length;)u.shift()()};var n={},r={2:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=r[t];if(0===e)return new Promise(function(t){t()});if(e)return e[2];var n=new Promise(function(n,o){e=r[t]=[n,o]});e[2]=n;var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,o.nc&&a.setAttribute("nonce",o.nc),a.src=o.p+"static/js/"+({0:"index",1:"rule"}[t]||t)+".js";var s=setTimeout(c,12e4);a.onerror=a.onload=c;function c(){a.onerror=a.onload=null,clearTimeout(s);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}return i.appendChild(a),n},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./",o.oe=function(t){throw console.error(t),t},o(o.s="C+65")}({"4ecV":function(t,e){var n="https:"!==location.protocol&&"http:"!==location.protocol||-1!=location.origin.indexOf("://t")||-1!=location.href.indexOf("192.168")?"https://t":"https://";t.exports={agree:n,originPhp:n+"wap.youdingkeji.com",originJava:n+"api.youdingkeji.com",originWeb:n+"web.youdingkeji.com",apiUrl:n+"api.youdingkeji.com/yiding-rest/rest/activity/entry.json",downUrl:n+"web.youdingkeji.com/sms/download/link.html"}},"8AGX":function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var p;if(i?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=p):r&&(p=r),p){var f=u.functional,h=f?u.render:u.beforeCreate;f?(u._injectStyles=p,u.render=function(t,e){return p.call(e),h(t,e)}):u.beforeCreate=h?[].concat(h,p):[p]}return{esModule:a,exports:s,options:u}}},"C+65":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("transition",{staticClass:"sition",attrs:{name:this.transitionName}},[e("router-view",{staticClass:"my-view"})],1)],1)},staticRenderFns:[]};var o=n("8AGX")({data:function(){return{isLoaded:!1,transitionName:"slide-left"}}},r,!1,function(t){n("MfZN")},null,null).exports;function i(t,e){0}function a(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}var s={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$createElement,s=n.name,c=o.$route,u=o._routerViewCache||(o._routerViewCache={}),p=0,f=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&p++,o._inactive&&(f=!0),o=o.$parent;if(i.routerViewDepth=p,f)return a(u[s],i,r);var h=c.matched[p];if(!h)return u[s]=null,a();var l=u[s]=h.components[s];i.registerRouteInstance=function(t,e){var n=h.instances[s];(e&&n!==t||!e&&n===t)&&(h.instances[s]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){h.instances[s]=e.componentInstance};var d=i.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(c,h.props&&h.props[s]);if(d){d=i.props=function(t,e){for(var n in e)t[n]=e[n];return t}({},d);var v=i.attrs=i.attrs||{};for(var y in d)l.props&&y in l.props||(v[y]=d[y],delete d[y])}return a(l,i,r)}};var c=/[!'()*]/g,u=function(t){return"%"+t.charCodeAt(0).toString(16)},p=/%2C/g,f=function(t){return encodeURIComponent(t).replace(c,u).replace(p,",")},h=decodeURIComponent;function l(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=h(n.shift()),o=n.length>0?h(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function d(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return f(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(f(e)):r.push(f(e)+"="+f(t)))}),r.join("&")}return f(e)+"="+f(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var v=/\/?$/;function y(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=m(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:w(e,o),matched:t?function(t){var e=[];for(;t;)e.unshift(t),t=t.parent;return e}(t):[]};return n&&(a.redirectedFrom=w(n,o)),Object.freeze(a)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var g=y(null,{path:"/"});function w(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");return(n||"/")+(e||d)(r)+o}function b(t,e){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(v,"")===e.path.replace(v,"")&&t.hash===e.hash&&x(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&x(t.query,e.query)&&x(t.params,e.params)))}function x(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){var r=t[n],o=e[n];return"object"==typeof r&&"object"==typeof o?x(r,o):String(r)===String(o)})}var _=[String,Object],k=[String,Array],C={name:"router-link",props:{to:{type:_,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:k,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,s=o.href,c={},u=n.options.linkActiveClass,p=n.options.linkExactActiveClass,f=null==u?"router-link-active":u,h=null==p?"router-link-exact-active":p,l=null==this.activeClass?f:this.activeClass,d=null==this.exactActiveClass?h:this.exactActiveClass,m=i.path?y(null,i,null,n):a;c[d]=b(r,m),c[l]=this.exact?c[d]:(g=r,w=m,0===g.path.replace(v,"/").indexOf(w.path.replace(v,"/"))&&(!w.hash||g.hash===w.hash)&&function(t,e){for(var n in e)if(!(n in t))return!1;return!0}(g.query,w.query));var g,w,x=function(t){E(t)&&(e.replace?n.replace(i):n.push(i))},_={click:E};Array.isArray(this.event)?this.event.forEach(function(t){_[t]=x}):_[this.event]=x;var k={class:c};if("a"===this.tag)k.on=_,k.attrs={href:s};else{var C=function t(e){if(e)for(var n,r=0;r<e.length;r++){if("a"===(n=e[r]).tag)return n;if(n.children&&(n=t(n.children)))return n}}(this.$slots.default);if(C){C.isStatic=!1;var j=R.util.extend;(C.data=j({},C.data)).on=_;(C.data.attrs=j({},C.data.attrs)).href=s}else k.on=_}return t(this.tag,k,this.$slots.default)}};function E(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var R;function j(t){if(!j.installed||R!==t){j.installed=!0,R=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",s),t.component("router-link",C);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var O="undefined"!=typeof window;function A(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function T(t){return t.replace(/\/\//g,"/")}var $=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},S=X,P=M,L=function(t,e){return F(M(t,e))},U=F,q=N,V=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t,e){for(var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(n=V.exec(t));){var c=n[0],u=n[1],p=n.index;if(a+=t.slice(i,p),i=p+c.length,u)a+=u[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],v=n[5],y=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=n[2]||s,_=d||v;r.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:_?(k=_,k.replace(/([=!:$\/()])/g,"\\$1")):m?".*":"[^"+H(x)+"]+?"})}}var k;return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function z(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function F(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=(r||{}).pretty?z:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!=typeof c){var u,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if($(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(u=a(p[f]),!e[s].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===f?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?(h=p,encodeURI(h).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!e[s].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');o+=c.prefix+u}}else o+=c}var h;return o}}function H(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function I(t,e){return t.keys=e,t}function B(t){return t.sensitive?"":"i"}function N(t,e,n){$(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=H(s);else{var c=H(s.prefix),u="(?:"+s.pattern+")";e.push(s),s.repeat&&(u+="(?:"+c+u+")*"),i+=u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")"}}var p=H(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",I(new RegExp("^"+i,B(n)),e)}function X(t,e,n){return $(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return I(t,e)}(t,e):$(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(X(t[o],e,n).source);return I(new RegExp("(?:"+r.join("|")+")",B(n)),e)}(t,e,n):(r=e,N(M(t,o=n),r,o));var r,o}S.parse=P,S.compile=L,S.tokensToFunction=U,S.tokensToRegExp=q;var G=Object.create(null);function D(t,e,n){try{return(G[t]||(G[t]=S.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function J(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){!function t(e,n,r,o,i,a){var s=o.path;var c=o.name;0;var u=o.pathToRegexpOptions||{};var p=function(t,e,n){n||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return T(e.path+"/"+t)}(s,i,u.strict);"boolean"==typeof o.caseSensitive&&(u.sensitive=o.caseSensitive);var f={path:p,regex:function(t,e){var n=S(t,[],e);return n}(p,u),components:o.components||{default:o.component},instances:{},name:c,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach(function(o){var i=a?T(a+"/"+o.path):void 0;t(e,n,r,o,f,i)});if(void 0!==o.alias){var h=Array.isArray(o.alias)?o.alias:[o.alias];h.forEach(function(a){var s={path:a,children:o.children};t(e,n,r,s,i,f.path||"/")})}n[f.path]||(e.push(f.path),n[f.path]=f);c&&(r[c]||(r[c]=f))}(o,i,a,t)});for(var s=0,c=o.length;s<c;s++)"*"===o[s]&&(o.push(o.splice(s,1)[0]),c--,s--);return{pathList:o,pathMap:i,nameMap:a}}function K(t,e,n,r){var o="string"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&e){(o=Q({},o))._normalized=!0;var i=Q(Q({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;o.path=D(a,i,e.path)}else 0;return o}var s=function(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}(o.path||""),c=e&&e.path||"/",u=s.path?A(s.path,c,n||o.append):c,p=function(t,e,n){void 0===e&&(e={});var r,o=n||l;try{r=o(t||"")}catch(t){r={}}for(var i in e)r[i]=e[i];return r}(s.query,o.query,r&&r.options.parseQuery),f=o.hash||s.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:u,query:p,hash:f}}function Q(t,e){for(var n in e)t[n]=e[n];return t}function W(t,e){var n=J(t),r=n.pathList,o=n.pathMap,i=n.nameMap;function a(t,n,a){var s=K(t,n,!1,e),u=s.name;if(u){var p=i[u];if(!p)return c(null,s);var f=p.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof s.params&&(s.params={}),n&&"object"==typeof n.params)for(var h in n.params)!(h in s.params)&&f.indexOf(h)>-1&&(s.params[h]=n.params[h]);if(p)return s.path=D(p.path,s.params),c(p,s,a)}else if(s.path){s.params={};for(var l=0;l<r.length;l++){var d=r[l],v=o[d];if(Y(v.regex,s.path,s.params))return c(v,s,a)}}return c(null,s)}function s(t,n){var r=t.redirect,o="function"==typeof r?r(y(t,n,null,e)):r;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return c(null,n);var s=o,u=s.name,p=s.path,f=n.query,h=n.hash,l=n.params;if(f=s.hasOwnProperty("query")?s.query:f,h=s.hasOwnProperty("hash")?s.hash:h,l=s.hasOwnProperty("params")?s.params:l,u){i[u];return a({_normalized:!0,name:u,query:f,hash:h,params:l},void 0,n)}if(p){var d=(v=p,m=t,A(v,m.parent?m.parent.path:"/",!0));return a({_normalized:!0,path:D(d,l),query:f,hash:h},void 0,n)}return c(null,n);var v,m}function c(t,n,r){return t&&t.redirect?s(t,r||n):t&&t.matchAs?function(t,e,n){var r=a({_normalized:!0,path:D(n,e.params)});if(r){var o=r.matched,i=o[o.length-1];return e.params=r.params,c(i,e)}return c(null,e)}(0,n,t.matchAs):y(t,n,r,e)}return{match:a,addRoutes:function(t){J(t,r,o,i)}}}function Y(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],s="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name]=s)}return!0}var Z=Object.create(null);function tt(){window.history.replaceState({key:ft()},""),window.addEventListener("popstate",function(t){nt(),t.state&&t.state.key&&(e=t.state.key,ut=e);var e})}function et(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=function(){var t=ft();if(t)return Z[t]}(),i=o(e,n,r?t:null);i&&("function"==typeof i.then?i.then(function(e){at(e,t)}).catch(function(t){0}):at(i,t))})}}function nt(){var t=ft();t&&(Z[t]={x:window.pageXOffset,y:window.pageYOffset})}function rt(t){return it(t.x)||it(t.y)}function ot(t){return{x:it(t.x)?t.x:window.pageXOffset,y:it(t.y)?t.y:window.pageYOffset}}function it(t){return"number"==typeof t}function at(t,e){var n="object"==typeof t;if(n&&"string"==typeof t.selector){var r=document.querySelector(t.selector);if(r){var o=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left-e.x,y:r.top-n.top-e.y}}(r,o={x:it((i=o).x)?i.x:0,y:it(i.y)?i.y:0})}else rt(t)&&(e=ot(t))}else n&&rt(t)&&(e=ot(t));var i;e&&window.scrollTo(e.x,e.y)}var st=O&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),ct=O&&window.performance&&window.performance.now?window.performance:Date,ut=pt();function pt(){return ct.now().toFixed(3)}function ft(){return ut}function ht(t,e){nt();var n=window.history;try{e?n.replaceState({key:ut},"",t):(ut=pt(),n.pushState({key:ut},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function lt(t){ht(t,!0)}function dt(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function vt(t){return function(e,n,r){var o=!1,i=0,s=null;yt(t,function(t,e,n,c){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var u,p=wt(function(e){((o=e).__esModule||gt&&"Module"===o[Symbol.toStringTag])&&(e=e.default);var o;t.resolved="function"==typeof e?e:R.extend(e),n.components[c]=e,--i<=0&&r()}),f=wt(function(t){var e="Failed to resolve async component "+c+": "+t;s||(s=a(t)?t:new Error(e),r(s))});try{u=t(p,f)}catch(t){f(t)}if(u)if("function"==typeof u.then)u.then(p,f);else{var h=u.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),o||r()}}function yt(t,e){return mt(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function mt(t){return Array.prototype.concat.apply([],t)}var gt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function wt(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var bt=function(t,e){this.router=t,this.base=function(t){if(!t)if(O){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};bt.prototype.listen=function(t){this.cb=t},bt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},bt.prototype.onError=function(t){this.errorCbs.push(t)},bt.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},bt.prototype.confirmTransition=function(t,e,n){var r=this,o=this.current,s=function(t){a(t)&&(r.errorCbs.length?r.errorCbs.forEach(function(e){e(t)}):(i(),console.error(t))),n&&n(t)};if(b(t,o)&&t.matched.length===o.matched.length)return this.ensureURL(),s();var c,u,p=function(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}(this.current.matched,t.matched),f=p.updated,h=p.deactivated,l=p.activated,d=[].concat((u=h,xt(u,"beforeRouteLeave",_t,!0)),this.router.beforeHooks,(c=f,xt(c,"beforeRouteUpdate",_t)),l.map(function(t){return t.beforeEnter}),vt(l));this.pending=t;var v=function(e,n){if(r.pending!==t)return s();try{e(t,o,function(t){!1===t||a(t)?(r.ensureURL(!0),s(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(s(),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)})}catch(t){s(t)}};dt(d,v,function(){var n,o,i,a=[];dt((n=l,o=a,i=function(){return r.current===t},xt(n,"beforeRouteEnter",function(t,e,n,r){return a=t,s=n,c=r,u=o,p=i,function(t,e,n){return a(t,e,function(t){n(t),"function"==typeof t&&u.push(function(){!function t(e,n,r,o){n[r]?e(n[r]):o()&&setTimeout(function(){t(e,n,r,o)},16)}(t,s.instances,c,p)})})};var a,s,c,u,p})).concat(r.router.resolveHooks),v,function(){if(r.pending!==t)return s();r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){a.forEach(function(t){t()})})})})},bt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};function xt(t,e,n,r){var o=yt(t,function(t,r,o,i){var a=function(t,e){"function"!=typeof t&&(t=R.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return mt(r?o.reverse():o)}function _t(t,e){if(e)return function(){return t.apply(e,arguments)}}var kt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&tt();var i=Ct(this.base);window.addEventListener("popstate",function(t){var n=r.current,a=Ct(r.base);r.current===g&&a===i||r.transitionTo(a,function(t){o&&et(e,t,n,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,function(t){ht(T(r.base+t.fullPath)),et(r.router,t,o,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,function(t){lt(T(r.base+t.fullPath)),et(r.router,t,o,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(Ct(this.base)!==this.current.fullPath){var e=T(this.base+this.current.fullPath);t?ht(e):lt(e)}},e.prototype.getCurrentLocation=function(){return Ct(this.base)},e}(bt);function Ct(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Et=function(t){function e(e,n,r){t.call(this,e,n),r&&function(t){var e=Ct(t);if(!/^\/#/.test(e))return window.location.replace(T(t+"/#"+e)),!0}(this.base)||Rt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,n=st&&e;n&&tt(),window.addEventListener(st?"popstate":"hashchange",function(){var e=t.current;Rt()&&t.transitionTo(jt(),function(r){n&&et(t.router,r,e,!0),st||Tt(r.fullPath)})})},e.prototype.push=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,function(t){At(t.fullPath),et(r.router,t,o,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,function(t){Tt(t.fullPath),et(r.router,t,o,!1),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;jt()!==e&&(t?At(e):Tt(e))},e.prototype.getCurrentLocation=function(){return jt()},e}(bt);function Rt(){var t=jt();return"/"===t.charAt(0)||(Tt("/"+t),!1)}function jt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Ot(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function At(t){st?ht(Ot(t)):window.location.hash=t}function Tt(t){st?lt(Ot(t)):window.location.replace(Ot(t))}var $t=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(bt),St=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=W(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!st&&!1!==t.fallback,this.fallback&&(e="hash"),O||(e="abstract"),this.mode=e,e){case"history":this.history=new kt(this,t.base);break;case"hash":this.history=new Et(this,t.base,this.fallback);break;case"abstract":this.history=new $t(this,t.base);break;default:0}},Pt={currentRoute:{configurable:!0}};St.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Pt.currentRoute.get=function(){return this.history&&this.history.current},St.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof kt)n.transitionTo(n.getCurrentLocation());else if(n instanceof Et){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},St.prototype.beforeEach=function(t){return Lt(this.beforeHooks,t)},St.prototype.beforeResolve=function(t){return Lt(this.resolveHooks,t)},St.prototype.afterEach=function(t){return Lt(this.afterHooks,t)},St.prototype.onReady=function(t,e){this.history.onReady(t,e)},St.prototype.onError=function(t){this.history.onError(t)},St.prototype.push=function(t,e,n){this.history.push(t,e,n)},St.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},St.prototype.go=function(t){this.history.go(t)},St.prototype.back=function(){this.go(-1)},St.prototype.forward=function(){this.go(1)},St.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},St.prototype.resolve=function(t,e,n){var r=K(t,e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:function(t,e,n){var r="hash"===n?"#"+e:e;return t?T(t+"/"+r):r}(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},St.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(St.prototype,Pt);function Lt(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}St.install=j,St.version="3.0.1",O&&window.Vue&&window.Vue.use(St);var Ut=St;Vue.use(Ut);var qt=new Ut({routes:[{path:"/index",name:"index",component:function(t){return n.e(0).then(function(){return t(n("Htz8"))}.bind(null,n)).catch(n.oe)}},{path:"/rule",name:"rule",component:function(t){return n.e(1).then(function(){return t(n("yyi9"))}.bind(null,n)).catch(n.oe)}},{path:"/",redirect:"index"}]}),Vt=(n("PUaz"),n("4ecV")),Mt={data:function(){return{current:!1}},methods:{cancel:function(){this.current=!1},down:function(){this.current=!1,window.location.href=Vt.agree+"web.youdingkeji.com/sms/download/link.html"}}},zt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"noticeDown",class:{current:this.current}},[e("h4",[this._v("提示")]),this._v(" "),e("p",[this._v("请至本地打开app参与活动！")]),this._v(" "),e("p",[this._v("如未安装app，点击“去下载app”参与！")]),this._v(" "),e("ul",{staticClass:"clearfix"},[e("li",{on:{click:this.cancel}},[this._v("取消")]),this._v(" "),e("li",{on:{click:this.down}},[this._v("去下载APP")])])]),this._v(" "),this.current?e("div",{staticClass:"zezhao"}):this._e()])},staticRenderFns:[]},Ft=n("8AGX")(Mt,zt,!1,null,null,null).exports,Ht={};Ht.lock=!1,Ht.install=function(t){if(!Ht.lock){Ht.lock=!0;var e=new(t.extend(Ft));e.$mount(document.createElement("div")),document.body.appendChild(e.$el),t.prototype.$judge=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.current=t}}};var It=Ht,Bt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.typeClass},[e("transition",{attrs:{name:"toast"}},[this.toastShow?e("div",{staticClass:"toast-content"},[e("span",[this._v("\n            "+this._s(this.toastTxt)+"\n        ")])]):this._e()])],1)},staticRenderFns:[]};var Nt=n("8AGX")({data:function(){return{toastShow:!1,toastTxt:"",type:"middle"}},computed:{typeClass:function(){return"my-toast "+this.type}}},Bt,!1,function(t){n("GQb+")},"data-v-0305f5fb",null).exports,Xt={};Xt.lock=!1,Xt.install=function(t){if(!Xt.lock){Xt.lock=!0;var e=new(t.extend(Nt));e.$mount(document.createElement("div")),document.body.appendChild(e.$el),t.prototype.$toast=function(t){var n=t.msg,r=t.time,o=void 0===r?3e3:r,i=t.type,a=void 0===i?"middle":i;e.toastTxt=n,e.toastShow=!0,e.type=a,setTimeout(function(){e.toastShow=!1,Xt.lock=!1},o)}}};var Gt=Xt;Vue.use(It),Vue.use(Gt),new Vue({el:"#app",template:"<App />",components:{App:o},router:qt})},"GQb+":function(t,e){},MfZN:function(t,e){},PUaz:function(t,e){}});