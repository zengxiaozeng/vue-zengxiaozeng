!function(t){var e=window.webpackJsonp;window.webpackJsonp=function(r,o,i){for(var a,c,u=0,s=[];u<r.length;u++)c=r[u],n[c]&&s.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);for(e&&e(r,o,i);s.length;)s.shift()()};var r={},n={3:0};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=n[t];if(0===e)return new Promise(function(t){t()});if(e)return e[2];var r=new Promise(function(r,o){e=n[t]=[r,o]});e[2]=r;var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,o.nc&&a.setAttribute("nonce",o.nc),a.src=o.p+"static/js/"+({0:"start",1:"result",2:"quest"}[t]||t)+".js";var c=setTimeout(u,12e4);a.onerror=a.onload=u;function u(){a.onerror=a.onload=null,clearTimeout(c);var e=n[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),n[t]=void 0)}return i.appendChild(a),r},o.m=t,o.c=r,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./",o.oe=function(t){throw console.error(t),t},o(o.s="rpVy")}({"2q5M":function(t,e){t.exports={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,r,n,o,i,a,c,u="",s=0;for(t=this._utf8_encode(t);s<t.length;)o=(e=t.charCodeAt(s++))>>2,i=(3&e)<<4|(r=t.charCodeAt(s++))>>4,a=(15&r)<<2|(n=t.charCodeAt(s++))>>6,c=63&n,isNaN(r)?a=c=64:isNaN(n)&&(c=64),u=u+this._keyStr.charAt(o)+_keyStr.charAt(i)+this._keyStr.charAt(a)+_keyStr.charAt(c);return u},decode:function(t){var e,r,n,o,i,a,c="",u=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<t.length;)e=this._keyStr.indexOf(t.charAt(u++))<<2|(o=this._keyStr.indexOf(t.charAt(u++)))>>4,r=(15&o)<<4|(i=this._keyStr.indexOf(t.charAt(u++)))>>2,n=(3&i)<<6|(a=this._keyStr.indexOf(t.charAt(u++))),c+=String.fromCharCode(e),64!=i&&(c+=String.fromCharCode(r)),64!=a&&(c+=String.fromCharCode(n));return c=this._utf8_decode(c)},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e+=String.fromCharCode(n):n>127&&n<2048?(e+=String.fromCharCode(n>>6|192),e+=String.fromCharCode(63&n|128)):(e+=String.fromCharCode(n>>12|224),e+=String.fromCharCode(n>>6&63|128),e+=String.fromCharCode(63&n|128))}return e},_utf8_decode:function(t){for(var e="",r=0,n=0,o=0,i=0;r<t.length;)(n=t.charCodeAt(r))<128?(e+=String.fromCharCode(n),r++):n>191&&n<224?(i=t.charCodeAt(r+1),e+=String.fromCharCode((31&n)<<6|63&i),r+=2):(i=t.charCodeAt(r+1),o=t.charCodeAt(r+2),e+=String.fromCharCode((15&n)<<12|(63&i)<<6|63&o),r+=3);return e}}},"8AGX":function(t,e){t.exports=function(t,e,r,n,o,i){var a,c=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,c=t.default);var s="function"==typeof c?c.options:c;e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId=o);var f;if(i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=f):n&&(f=n),f){var p=s.functional,h=p?s.render:s.beforeCreate;p?(s._injectStyles=f,s.render=function(t,e){return f.call(e),h(t,e)}):s.beforeCreate=h?[].concat(h,f):[f]}return{esModule:a,exports:c,options:s}}},K9cn:function(t,e){},PArr:function(t,e,r){var n=r("2q5M");window.ydwVersion="",window.ydwToken="",window.isiOS=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),window.isAndroid=navigator.userAgent.indexOf("Android")>-1,window.getVersion=function(t){window.location.href="ydlc://h5/getToken",ydwVersion=t},window.getToken=function(t){ydwToken=n.decode(t),init()},window.init=function(t){t&&t(),isiOS||(ydwToken=window.mars.getToken())},window.checkUser=function(t){isiOS?window.mars||(window.location.href="ydlc://h5/getVersion"):window.mars&&(window.mars.getVersion&&(ydwVersion=window.mars.getVersion().substring(1)),init())}},gRzV:function(t,e){t.exports=function(t){document.title=t;var e=document.createElement("iframe");e.src="//m.baidu.com/favicon.ico",e.style.display="none",e.onload=function(){setTimeout(function(){e.remove()},9)},document.body.appendChild(e)}},rpVy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});r("PArr");var n=r("gRzV"),o=r.n(n),i={data:function(){return{isLoaded:!1,transitionName:"slide-left"}},watch:{$route:function(t,e){if("/start"!==t.path&&("/start"!==e.path||"/result/tested"!==t.path)){var r=t.path.split("/").length,n=e.path.split("/").length;this.transitionName=r<n?"slide_right":"slide_left"}}},created:function(){checkUser(),o()("风险评测")}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("transition",{staticClass:"sition",attrs:{name:this.transitionName}},[e("router-view",{staticClass:"my-view"})],1)],1)},staticRenderFns:[]};var c=r("8AGX")(i,a,!1,function(t){r("K9cn")},null,null).exports;function u(t,e){0}function s(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}var f={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$createElement,c=r.name,u=o.$route,s=o._routerViewCache||(o._routerViewCache={}),f=0,p=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&f++,o._inactive&&(p=!0),o=o.$parent;if(i.routerViewDepth=f,p)return a(s[c],i,n);var h=u.matched[f];if(!h)return s[c]=null,a();var l=s[c]=h.components[c];i.registerRouteInstance=function(t,e){var r=h.instances[c];(e&&r!==t||!e&&r===t)&&(h.instances[c]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){h.instances[c]=e.componentInstance};var d=i.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(u,h.props&&h.props[c]);if(d){d=i.props=function(t,e){for(var r in e)t[r]=e[r];return t}({},d);var v=i.attrs=i.attrs||{};for(var y in d)l.props&&y in l.props||(v[y]=d[y],delete d[y])}return a(l,i,n)}};var p=/[!'()*]/g,h=function(t){return"%"+t.charCodeAt(0).toString(16)},l=/%2C/g,d=function(t){return encodeURIComponent(t).replace(p,h).replace(l,",")},v=decodeURIComponent;function y(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=v(r.shift()),o=r.length>0?v(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function m(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return d(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(d(e)):n.push(d(e)+"="+d(t)))}),n.join("&")}return d(e)+"="+d(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var g=/\/?$/;function w(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=b(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:C(e,o),matched:t?function(t){var e=[];for(;t;)e.unshift(t),t=t.parent;return e}(t):[]};return r&&(a.redirectedFrom=C(r,o)),Object.freeze(a)}function b(t){if(Array.isArray(t))return t.map(b);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=b(t[r]);return e}return t}var x=w(null,{path:"/"});function C(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");return(r||"/")+(e||m)(n)+o}function _(t,e){return e===x?t===e:!!e&&(t.path&&e.path?t.path.replace(g,"")===e.path.replace(g,"")&&t.hash===e.hash&&k(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&k(t.query,e.query)&&k(t.params,e.params)))}function k(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?k(n,o):String(n)===String(o)})}var A=[String,Object],S=[String,Array],O={name:"router-link",props:{to:{type:A,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:S,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,a=o.route,c=o.href,u={},s=r.options.linkActiveClass,f=r.options.linkExactActiveClass,p=null==s?"router-link-active":s,h=null==f?"router-link-exact-active":f,l=null==this.activeClass?p:this.activeClass,d=null==this.exactActiveClass?h:this.exactActiveClass,v=i.path?w(null,i,null,r):a;u[d]=_(n,v),u[l]=this.exact?u[d]:(y=n,m=v,0===y.path.replace(g,"/").indexOf(m.path.replace(g,"/"))&&(!m.hash||y.hash===m.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(y.query,m.query));var y,m,b=function(t){E(t)&&(e.replace?r.replace(i):r.push(i))},x={click:E};Array.isArray(this.event)?this.event.forEach(function(t){x[t]=b}):x[this.event]=b;var C={class:u};if("a"===this.tag)C.on=x,C.attrs={href:c};else{var k=function t(e){if(e)for(var r,n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(k){k.isStatic=!1;var A=R.util.extend;(k.data=A({},k.data)).on=x;(k.data.attrs=A({},k.data.attrs)).href=c}else C.on=x}return t(this.tag,C,this.$slots.default)}};function E(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var R;function j(t){if(!j.installed||R!==t){j.installed=!0,R=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",f),t.component("router-link",O);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var T="undefined"!=typeof window;function $(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var c=i[a];".."===c?o.pop():"."!==c&&o.push(c)}return""!==o[0]&&o.unshift(""),o.join("/")}function P(t){return t.replace(/\/\//g,"/")}var q=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},V=J,L=H,U=function(t,e){return B(H(t,e))},M=B,N=D,z=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function H(t,e){for(var r,n=[],o=0,i=0,a="",c=e&&e.delimiter||"/";null!=(r=z.exec(t));){var u=r[0],s=r[1],f=r.index;if(a+=t.slice(i,f),i=f+u.length,s)a+=s[1];else{var p=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=p&&p!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||c,C=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:C?(_=C,_.replace(/([=!:$\/()])/g,"\\$1")):m?".*":"[^"+F(x)+"]+?"})}}var _;return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function I(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function B(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=(n||{}).pretty?I:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!=typeof u){var s,f=i[u.name];if(null==f){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(q(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(s=a(f[p]),!e[c].test(s))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===p?u.prefix:u.delimiter)+s}}else{if(s=u.asterisk?(h=f,encodeURI(h).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(f),!e[c].test(s))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+s+'"');o+=u.prefix+s}}else o+=u}var h;return o}}function F(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function X(t,e){return t.keys=e,t}function K(t){return t.sensitive?"":"i"}function D(t,e,r){q(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=F(c);else{var u=F(c.prefix),s="(?:"+c.pattern+")";e.push(c),c.repeat&&(s+="(?:"+u+s+")*"),i+=s=c.optional?c.partial?u+"("+s+")?":"(?:"+u+"("+s+"))?":u+"("+s+")"}}var f=F(r.delimiter||"/"),p=i.slice(-f.length)===f;return n||(i=(p?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":n&&p?"":"(?="+f+"|$)",X(new RegExp("^"+i,K(r)),e)}function J(t,e,r){return q(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return X(t,e)}(t,e):q(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(J(t[o],e,r).source);return X(new RegExp("(?:"+n.join("|")+")",K(r)),e)}(t,e,r):(n=e,D(H(t,o=r),n,o));var n,o}V.parse=L,V.compile=U,V.tokensToFunction=M,V.tokensToRegExp=N;var G=Object.create(null);function Q(t,e,r){try{return(G[t]||(G[t]=V.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function Y(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){!function t(e,r,n,o,i,a){var c=o.path;var u=o.name;0;var s=o.pathToRegexpOptions||{};var f=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return P(e.path+"/"+t)}(c,i,s.strict);"boolean"==typeof o.caseSensitive&&(s.sensitive=o.caseSensitive);var p={path:f,regex:function(t,e){var r=V(t,[],e);return r}(f,s),components:o.components||{default:o.component},instances:{},name:u,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach(function(o){var i=a?P(a+"/"+o.path):void 0;t(e,r,n,o,p,i)});if(void 0!==o.alias){var h=Array.isArray(o.alias)?o.alias:[o.alias];h.forEach(function(a){var c={path:a,children:o.children};t(e,r,n,c,i,p.path||"/")})}r[p.path]||(e.push(p.path),r[p.path]=p);u&&(n[u]||(n[u]=p))}(o,i,a,t)});for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:i,nameMap:a}}function W(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&e){(o=Z({},o))._normalized=!0;var i=Z(Z({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;o.path=Q(a,i,e.path)}else 0;return o}var c=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(o.path||""),u=e&&e.path||"/",s=c.path?$(c.path,u,r||o.append):u,f=function(t,e,r){void 0===e&&(e={});var n,o=r||y;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(c.query,o.query,n&&n.options.parseQuery),p=o.hash||c.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:s,query:f,hash:p}}function Z(t,e){for(var r in e)t[r]=e[r];return t}function tt(t,e){var r=Y(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var c=W(t,r,!1,e),s=c.name;if(s){var f=i[s];if(!f)return u(null,c);var p=f.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof c.params&&(c.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in c.params)&&p.indexOf(h)>-1&&(c.params[h]=r.params[h]);if(f)return c.path=Q(f.path,c.params),u(f,c,a)}else if(c.path){c.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(et(v.regex,c.path,c.params))return u(v,c,a)}}return u(null,c)}function c(t,r){var n=t.redirect,o="function"==typeof n?n(w(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return u(null,r);var c=o,s=c.name,f=c.path,p=r.query,h=r.hash,l=r.params;if(p=c.hasOwnProperty("query")?c.query:p,h=c.hasOwnProperty("hash")?c.hash:h,l=c.hasOwnProperty("params")?c.params:l,s){i[s];return a({_normalized:!0,name:s,query:p,hash:h,params:l},void 0,r)}if(f){var d=(v=f,y=t,$(v,y.parent?y.parent.path:"/",!0));return a({_normalized:!0,path:Q(d,l),query:p,hash:h},void 0,r)}return u(null,r);var v,y}function u(t,r,n){return t&&t.redirect?c(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:Q(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,u(i,e)}return u(null,e)}(0,r,t.matchAs):w(t,r,n,e)}return{match:a,addRoutes:function(t){Y(t,n,o,i)}}}function et(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],c="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name]=c)}return!0}var rt=Object.create(null);function nt(){window.history.replaceState({key:dt()},""),window.addEventListener("popstate",function(t){it(),t.state&&t.state.key&&(e=t.state.key,ht=e);var e})}function ot(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=function(){var t=dt();if(t)return rt[t]}(),i=o(e,r,n?t:null);i&&("function"==typeof i.then?i.then(function(e){st(e,t)}).catch(function(t){0}):st(i,t))})}}function it(){var t=dt();t&&(rt[t]={x:window.pageXOffset,y:window.pageYOffset})}function at(t){return ut(t.x)||ut(t.y)}function ct(t){return{x:ut(t.x)?t.x:window.pageXOffset,y:ut(t.y)?t.y:window.pageYOffset}}function ut(t){return"number"==typeof t}function st(t,e){var r="object"==typeof t;if(r&&"string"==typeof t.selector){var n=document.querySelector(t.selector);if(n){var o=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(n,o={x:ut((i=o).x)?i.x:0,y:ut(i.y)?i.y:0})}else at(t)&&(e=ct(t))}else r&&at(t)&&(e=ct(t));var i;e&&window.scrollTo(e.x,e.y)}var ft=T&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),pt=T&&window.performance&&window.performance.now?window.performance:Date,ht=lt();function lt(){return pt.now().toFixed(3)}function dt(){return ht}function vt(t,e){it();var r=window.history;try{e?r.replaceState({key:ht},"",t):(ht=lt(),r.pushState({key:ht},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function yt(t){vt(t,!0)}function mt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function gt(t){return function(e,r,n){var o=!1,i=0,a=null;wt(t,function(t,e,r,c){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var u,f=Ct(function(e){((o=e).__esModule||xt&&"Module"===o[Symbol.toStringTag])&&(e=e.default);var o;t.resolved="function"==typeof e?e:R.extend(e),r.components[c]=e,--i<=0&&n()}),p=Ct(function(t){var e="Failed to resolve async component "+c+": "+t;a||(a=s(t)?t:new Error(e),n(a))});try{u=t(f,p)}catch(t){p(t)}if(u)if("function"==typeof u.then)u.then(f,p);else{var h=u.component;h&&"function"==typeof h.then&&h.then(f,p)}}}),o||n()}}function wt(t,e){return bt(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function bt(t){return Array.prototype.concat.apply([],t)}var xt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Ct(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var _t=function(t,e){this.router=t,this.base=function(t){if(!t)if(T){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=x,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};_t.prototype.listen=function(t){this.cb=t},_t.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},_t.prototype.onError=function(t){this.errorCbs.push(t)},_t.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},_t.prototype.confirmTransition=function(t,e,r){var n=this,o=this.current,i=function(t){s(t)&&(n.errorCbs.length?n.errorCbs.forEach(function(e){e(t)}):(u(),console.error(t))),r&&r(t)};if(_(t,o)&&t.matched.length===o.matched.length)return this.ensureURL(),i();var a,c,f=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),p=f.updated,h=f.deactivated,l=f.activated,d=[].concat((c=h,kt(c,"beforeRouteLeave",At,!0)),this.router.beforeHooks,(a=p,kt(a,"beforeRouteUpdate",At)),l.map(function(t){return t.beforeEnter}),gt(l));this.pending=t;var v=function(e,r){if(n.pending!==t)return i();try{e(t,o,function(t){!1===t||s(t)?(n.ensureURL(!0),i(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(i(),"object"==typeof t&&t.replace?n.replace(t):n.push(t)):r(t)})}catch(t){i(t)}};mt(d,v,function(){var r,o,a,c=[];mt((r=l,o=c,a=function(){return n.current===t},kt(r,"beforeRouteEnter",function(t,e,r,n){return i=t,c=r,u=n,s=o,f=a,function(t,e,r){return i(t,e,function(t){r(t),"function"==typeof t&&s.push(function(){!function t(e,r,n,o){r[n]?e(r[n]):o()&&setTimeout(function(){t(e,r,n,o)},16)}(t,c.instances,u,f)})})};var i,c,u,s,f})).concat(n.router.resolveHooks),v,function(){if(n.pending!==t)return i();n.pending=null,e(t),n.router.app&&n.router.app.$nextTick(function(){c.forEach(function(t){t()})})})})},_t.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};function kt(t,e,r,n){var o=wt(t,function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=R.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return bt(n?o.reverse():o)}function At(t,e){if(e)return function(){return t.apply(e,arguments)}}var St=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior;o&&nt();var i=Ot(this.base);window.addEventListener("popstate",function(t){var r=n.current,a=Ot(n.base);n.current===x&&a===i||n.transitionTo(a,function(t){o&&ot(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){vt(P(n.base+t.fullPath)),ot(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){yt(P(n.base+t.fullPath)),ot(n.router,t,o,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(Ot(this.base)!==this.current.fullPath){var e=P(this.base+this.current.fullPath);t?vt(e):yt(e)}},e.prototype.getCurrentLocation=function(){return Ot(this.base)},e}(_t);function Ot(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Et=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Ot(t);if(!/^\/#/.test(e))return window.location.replace(P(t+"/#"+e)),!0}(this.base)||Rt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,r=ft&&e;r&&nt(),window.addEventListener(ft?"popstate":"hashchange",function(){var e=t.current;Rt()&&t.transitionTo(jt(),function(n){r&&ot(t.router,n,e,!0),ft||Pt(n.fullPath)})})},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){$t(t.fullPath),ot(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Pt(t.fullPath),ot(n.router,t,o,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;jt()!==e&&(t?$t(e):Pt(e))},e.prototype.getCurrentLocation=function(){return jt()},e}(_t);function Rt(){var t=jt();return"/"===t.charAt(0)||(Pt("/"+t),!1)}function jt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Tt(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function $t(t){ft?vt(Tt(t)):window.location.hash=t}function Pt(t){ft?yt(Tt(t)):window.location.replace(Tt(t))}var qt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(_t),Vt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=tt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!ft&&!1!==t.fallback,this.fallback&&(e="hash"),T||(e="abstract"),this.mode=e,e){case"history":this.history=new St(this,t.base);break;case"hash":this.history=new Et(this,t.base,this.fallback);break;case"abstract":this.history=new qt(this,t.base);break;default:0}},Lt={currentRoute:{configurable:!0}};Vt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Lt.currentRoute.get=function(){return this.history&&this.history.current},Vt.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var r=this.history;if(r instanceof St)r.transitionTo(r.getCurrentLocation());else if(r instanceof Et){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},Vt.prototype.beforeEach=function(t){return Ut(this.beforeHooks,t)},Vt.prototype.beforeResolve=function(t){return Ut(this.resolveHooks,t)},Vt.prototype.afterEach=function(t){return Ut(this.afterHooks,t)},Vt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Vt.prototype.onError=function(t){this.history.onError(t)},Vt.prototype.push=function(t,e,r){this.history.push(t,e,r)},Vt.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},Vt.prototype.go=function(t){this.history.go(t)},Vt.prototype.back=function(){this.go(-1)},Vt.prototype.forward=function(){this.go(1)},Vt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Vt.prototype.resolve=function(t,e,r){var n=W(t,e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?P(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Vt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==x&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Vt.prototype,Lt);function Ut(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Vt.install=j,Vt.version="3.0.1",T&&window.Vue&&window.Vue.use(Vt);var Mt=Vt;Vue.use(Mt);var Nt=new Mt({routes:[{path:"/start",name:"start",component:function(t){return r.e(0).then(function(){return t(r("q2ai"))}.bind(null,r)).catch(r.oe)}},{path:"/quest",name:"quest",component:function(t){return r.e(2).then(function(){return t(r("8Vfa"))}.bind(null,r)).catch(r.oe)}},{path:"/result/:answer",name:"result",component:function(t){return r.e(1).then(function(){return t(r("w/cH"))}.bind(null,r)).catch(r.oe)}},{path:"/",redirect:"start"}]});new Vue({el:"#app",template:"<App />",components:{App:c},router:Nt})}});