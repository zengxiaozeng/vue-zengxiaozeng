!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="YkZB")}({"2q5M":function(t,e){t.exports={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,n,r,o,i,s,a,c="",u=0;for(t=this._utf8_encode(t);u<t.length;)o=(e=t.charCodeAt(u++))>>2,i=(3&e)<<4|(n=t.charCodeAt(u++))>>4,s=(15&n)<<2|(r=t.charCodeAt(u++))>>6,a=63&r,isNaN(n)?s=a=64:isNaN(r)&&(a=64),c=c+this._keyStr.charAt(o)+_keyStr.charAt(i)+this._keyStr.charAt(s)+_keyStr.charAt(a);return c},decode:function(t){var e,n,r,o,i,s,a="",c=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<t.length;)e=this._keyStr.indexOf(t.charAt(c++))<<2|(o=this._keyStr.indexOf(t.charAt(c++)))>>4,n=(15&o)<<4|(i=this._keyStr.indexOf(t.charAt(c++)))>>2,r=(3&i)<<6|(s=this._keyStr.indexOf(t.charAt(c++))),a+=String.fromCharCode(e),64!=i&&(a+=String.fromCharCode(n)),64!=s&&(a+=String.fromCharCode(r));return a=this._utf8_decode(a)},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e+=String.fromCharCode(r):r>127&&r<2048?(e+=String.fromCharCode(r>>6|192),e+=String.fromCharCode(63&r|128)):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128),e+=String.fromCharCode(63&r|128))}return e},_utf8_decode:function(t){for(var e="",n=0,r=0,o=0,i=0;n<t.length;)(r=t.charCodeAt(n))<128?(e+=String.fromCharCode(r),n++):r>191&&r<224?(i=t.charCodeAt(n+1),e+=String.fromCharCode((31&r)<<6|63&i),n+=2):(i=t.charCodeAt(n+1),o=t.charCodeAt(n+2),e+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o),n+=3);return e}}},"2sCs":function(t,e,n){t.exports=n("rBbO")},"5SCX":function(t,e){t.exports=function(t){return null!=t&&(n(t)||(e=t,"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0)))||!!t._isBuffer);var e};function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},"5Srp":function(t,e,n){"use strict";var r=n("gvuQ"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},"68ub":function(t,e,n){"use strict";var r=n("DkjP");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},"8AGX":function(t,e){t.exports=function(t,e,n,r,o,i){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var f;if(i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=f):r&&(f=r),f){var d=u.functional,l=d?u.render:u.beforeCreate;d?(u._injectStyles=f,u.render=function(t,e){return f.call(e),l(t,e)}):u.beforeCreate=l?[].concat(l,f):[f]}return{esModule:s,exports:a,options:u}}},"8bZh":function(t,e,n){"use strict";var r=n("gvuQ");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},BJD5:function(t,e,n){"use strict";var r=n("gvuQ");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)&&(e+="[]"),r.isArray(t)||(t=[t]),r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},BzCt:function(t,e,n){"use strict";var r=n("gvuQ"),o=n("T6bJ"),i=n("BJD5"),s=n("5Srp"),a=n("8bZh"),c=n("xxJ0"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("ehz/");t.exports=function(t){return new Promise(function(e,f){var d=t.data,l=t.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(t.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var v=t.auth.username||"",w=t.auth.password||"";l.Authorization="Basic "+u(v+":"+w)}if(p.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};o(e,f,r),p=null}},p.onerror=function(){f(c("Network Error",t,null,p)),p=null},p.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n("h1nK"),y=(t.withCredentials||a(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;y&&(l[t.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(l,function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete l[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),f(t),p=null)}),void 0===d&&(d=null),p.send(d)})}},DkjP:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},EW1H:function(t,e,n){"use strict";var r=n("gvuQ"),o=n("cx5j"),i=n("eoZI"),s=n("XL/d"),a=n("LD7k"),c=n("cQJ/");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){u(t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});return(t.adapter||s.adapter)(t).then(function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},EZEp:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"GQb+":function(t,e){},IKeO:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},"IMF/":function(t,e){},"KTZ/":function(t,e){},LD7k:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},NQr8:function(t,e,n){"use strict";var r=n("XL/d"),o=n("gvuQ"),i=n("gvu/"),s=n("EW1H");function a(t){this.defaults=t,this.interceptors={request:new i,response:new i}}a.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,this.defaults,{method:"get"},t)).method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=a},OIH2:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},PArr:function(t,e,n){var r=n("2q5M");window.ydwVersion="",window.ydwToken="",window.isiOS=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),window.isAndroid=navigator.userAgent.indexOf("Android")>-1,window.getVersion=function(t){window.location.href="ydlc://h5/getToken",ydwVersion=t},window.getToken=function(t){ydwToken=r.decode(t),init()},window.init=function(t){t&&t(),isiOS||(ydwToken=window.mars.getToken())},window.checkUser=function(t){isiOS?window.mars||(window.location.href="ydlc://h5/getVersion"):window.mars&&(window.mars.getVersion&&(ydwVersion=window.mars.getVersion().substring(1)),init())}},QO6G:function(t,e){t.exports="../../static/img/invest_close.png"},T6bJ:function(t,e,n){"use strict";var r=n("xxJ0");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},V0EG:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}var c,u=[],f=!1,d=-1;function l(){f&&c&&(f=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!f){var t=a(l);f=!0;for(var e=u.length;e;){for(c=u,u=[];++d<e;)c&&c[d].run();d=-1,e=u.length}c=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||f||a(p)};function h(t,e){this.fun=t,this.array=e}h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={};function m(){}o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"XL/d":function(t,e,n){"use strict";(function(e){var r=n("gvuQ"),o=n("vyL3"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n("BzCt"):void 0!==e&&(t=n("BzCt")),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){a.headers[t]={}}),r.forEach(["post","put","patch"],function(t){a.headers[t]=r.merge(i)}),t.exports=a}).call(e,n("V0EG"))},YkZB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={props:{bannerData:{type:Object}},data:function(){return{intervalIndex:0,stopmove:!0,timer:null,unitTime:2500,marginTopLen:"0"}},created:function(){this.horseMove()},updated:function(){this.horseMove()},methods:{horseMove:function(){var t=this;null!=this.bannerData&&this.bannerData.horseRaceLamp.length>1&&(clearInterval(t.timer),t.timer=null,t.timer=setInterval(function(){t.stopmove=!0,t.unitTime=2500,t.marginTopLen-=32,t.intervalIndex++,t.intervalIndex>t.bannerData.horseRaceLamp.length/2&&(t.stopmove=!1,t.unitTime=0,t.intervalIndex=0,t.marginTopLen=0)},t.unitTime))}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"list",class:{stopMove:t.stopmove},style:{"margin-top":t.marginTopLen+"px"}},t._l(t.bannerData.horseRaceLamp,function(e,r){return n("li",{key:r,staticClass:"item",attrs:{"track-by":"$index"}},[t._v(t._s(e))])}))])])},staticRenderFns:[]};var i=n("8AGX")(r,o,!1,function(t){n("iZLv")},"data-v-99510768",null).exports,s=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);navigator.userAgent.indexOf("Android");window.getMobile=function(t){window.ydwMobile=t};function a(t,e,n,r){s&&!window.mars?(r&&(t=t+"%3Fmo%3D"+r),location.href="ydlc://h5/share?url="+t+"&title="+e+"&summary="+n):window.mars&&(r&&(t=t+"?mo="+r),window.mars.shareActivity(t,e,n))}var c=n("2sCs"),u=n.n(c),f=config,d={props:["prolock"],methods:{close:function(){this.$emit("update:prolock",!1)},share:function(){this.$emit("update:prolock",!1);var t,e,n,r;t=f.originPhp+"/index.php/activity/invited",e="送你一个红包，点击领取",n="我是一个一鼎老粉啦！此地有15%高收益，各种活动！先送你2188红包，白拿的！",r=window.ydwMobile||"",u()({method:"post",url:f.apiUrl,params:{label:"invitationFriends3",type:"share",token:window.ydwToken||""}}).then(function(){a(t,e,n,r)},function(){a(t,e,n,r)})}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.prolock?r("aside",{staticClass:"project"},[r("div",{staticClass:"notice"},[r("p",[t._v("您的可购额度为0")]),t._v(" "),r("h3",[t._v("邀请好友投资可获购买额度！")]),t._v(" "),r("input",{attrs:{type:"button",value:"立即邀请"},on:{click:t.share}})]),t._v(" "),r("img",{staticClass:"close",attrs:{src:n("QO6G"),alt:""},on:{click:function(e){e.stopPropagation(),t.close(e)}}})]):t._e()},staticRenderFns:[]};var p=n("8AGX")(d,l,!1,function(t){n("kWy2")},"data-v-589e104b",null).exports,h={props:{bannerData:{type:[Object]}},data:function(){return{projectSaying:"已结束",proLock:!1}},methods:{projectSure:function(){this.$toast({msg:"活动已结束！"})}},computed:{hasProject:function(){return this.bannerData.projectId>0}},components:{vProject:p}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"power"},[t._m(0),t._v(" "),n("div",{staticClass:"target"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("我的可购额度："+t._s(t.bannerData.ableQuota)+"元")])]),t._v(" "),n("div",{staticStyle:{"text-align":"center",color:"rgb(164, 96, 6)","font-size":"26px","margin-top":"20px"}},[t._v("特权标额度将在活动结束后清零")]),t._v(" "),n("div",{staticClass:"vstButton"},[n("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.projectSure(e)}}},[t._v(t._s(t.projectSaying))])]),t._v(" "),n("div",{staticClass:"powerSaying"}),t._v(" "),n("v-project",{attrs:{prolock:t.proLock},on:{"update:prolock":function(e){return t.proLock=e}}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"title"},[e("i"),e("span",[this._v("特权专项")]),e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[e("i",{staticClass:"f-fl"}),this._v("18.8%特权标")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("dl",[e("dt",[this._v("18.8%")]),this._v(" "),e("dd",[this._v("年化利率")])])]),this._v(" "),e("li",[e("dl",[e("dt",[this._v("90-100天")]),this._v(" "),e("dd",[this._v("投资期限")])])])])}]};var v=n("8AGX")(h,m,!1,function(t){n("m7m7")},"data-v-3e850a9b",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"weal"},[e("div",{staticClass:"wealShow"}),this._v(" "),e("div",{staticClass:"footer"},[e("p",[this._v("最终解释权归一鼎理财所有")]),this._v(" "),e("p",[this._v("如有疑问请联系客服："),e("span",{staticClass:"number"},[this._v("4006-553-888")])]),this._v(" "),e("p",[this._v("理财有风险，投资需谨慎")])])])}]};var g=n("8AGX")(null,w,!1,function(t){n("IMF/")},"data-v-35660573",null).exports,y={props:["bannerData"],data:function(){return{isWeixin:!1,isNotice:!1}},created:function(){this.isWeixin="micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i),setTimeout(function(){s&&!window.mars?location.href="ydlc://h5/getMobile":window.mars&&(window.ydwMobile=window.mars.getMobile())},200)},methods:{judgeInvest:function(){""==window.ydwToken&&""==window.ydwVersion?window.location.href=config.downUrl:window.ydwToken&&window.ydwToken.length>10?window.location.href="../investPerson/views/investPerson.html":s&&!window.mars?location.href="ydlc://h5/login":window.mars&&window.mars.login()},judegeApp:function(){this.$toast({msg:"活动已结束！",time:3500})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"invstButton"},[n("button",{staticClass:"myInvest",on:{click:function(e){e.preventDefault(),t.judgeInvest(e)}}},[t._v("我的邀请")]),t._v(" "),t.isWeixin?t._e():n("button",{staticClass:"investFriend",on:{click:t.judegeApp}},[t._v("立邀好友，赚18.8%")])])},staticRenderFns:[]};var b=n("8AGX")(y,_,!1,function(t){n("KTZ/")},"data-v-4d886372",null).exports,C=(n("PArr"),n("gRzV")),x=n.n(C),S=(n("e1BS"),config.apiUrl),k={data:function(){return{bannerData:{ableQuota:0,horseRaceLamp:["..."],boundWechat:!1,projectId:0}}},beforeCreate:function(){},created:function(){checkUser(),x()("18.8%特权标");var t=this;setTimeout(function(){t.getData(window.ydwToken,t.upDateHorse)},400)},methods:{getData:function(t,e,n){var r=this;u()({method:"post",url:S,params:{label:"invitationFriends3",type:"index",token:t}}).then(function(t){var e=t.data,n=[];0==e.code&&e.result&&(n=e.result.horseRaceLamp.lenght>20?e.result.horseRaceLamp.splice(0,20):e.result.horseRaceLamp,r.bannerData.horseRaceLamp=n.concat(n),r.bannerData.ableQuota=e.result.ableQuota,r.bannerData.projectId=e.result.projectId,r.bannerData.boundWechat=e.result.boundWechat)},function(t){alert("error")})},upDateHorse:function(t){}},components:{vBanner:i,vPower:v,vWeal:g,vButton:b}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app "}},[e("v-banner",{attrs:{"banner-data":this.bannerData}}),this._v(" "),e("v-power",{attrs:{"banner-data":this.bannerData}}),this._v(" "),e("v-weal",{attrs:{"has-project":this.bannerData.projectId}}),this._v(" "),e("v-button",{attrs:{"banner-data":this.bannerData}})],1)},staticRenderFns:[]};var A=n("8AGX")(k,T,!1,function(t){n("lY3u")},null,null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.typeClass},[e("transition",{attrs:{name:"toast"}},[this.toastShow?e("div",{staticClass:"toast-content"},[e("span",[this._v("\n            "+this._s(this.toastTxt)+"\n        ")])]):this._e()])],1)},staticRenderFns:[]};var j=n("8AGX")({data:function(){return{toastShow:!1,toastTxt:"",type:"middle"}},computed:{typeClass:function(){return"my-toast "+this.type}}},E,!1,function(t){n("GQb+")},"data-v-0305f5fb",null).exports,R={};R.lock=!1,R.install=function(t){if(!R.lock){R.lock=!0;var e=new(t.extend(j));e.$mount(document.createElement("div")),document.body.appendChild(e.$el),t.prototype.$toast=function(t){var n=t.msg,r=t.time,o=void 0===r?3e3:r,i=t.type,s=void 0===i?"middle":i;e.toastTxt=n,e.toastShow=!0,e.type=s,setTimeout(function(){e.toastShow=!1,R.lock=!1},o)}}};var L=R;Vue.use(L),new Vue({el:"#app",template:"<App/>",components:{App:A}})},"cQJ/":function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},cx5j:function(t,e,n){"use strict";var r=n("gvuQ");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},e1BS:function(t,e){t.exports={getCookiesObj:function(){var t={};if(document.cookie){var e=document.cookie.split("; ");for(var n in e){var r=e[n].indexOf("="),o=e[n].substr(0,r),i=e[n].substr(r+1,e[n].length);t[o]=i}}return t},set:function(t,e,n){if(t&&e){var r=encodeURIComponent(t)+"="+encodeURIComponent(e);return n&&(n.maxAge&&(r+="; max-age="+n.maxAge),n.path&&(r+="; path="+n.path),n.domain&&(r+="; domain="+n.domain),n.secure&&(r+="; secure")),document.cookie=r,r}return""},get:function(t){return decodeURIComponent(this.getCookiesObj()[t])||null},remove:function(t){this.getCookiesObj()[t]&&(document.cookie=t+"=; max-age=0")}}},"ehz/":function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError";t.exports=function(t){for(var e,n,i=String(t),s="",a=0,c=r;i.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new o;e=e<<8|n}return s}},eoZI:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},gRzV:function(t,e){t.exports=function(t){document.title=t;var e=document.createElement("iframe");e.src="//m.baidu.com/favicon.ico",e.style.display="none",e.onload=function(){setTimeout(function(){e.remove()},9)},document.body.appendChild(e)}},"gvu/":function(t,e,n){"use strict";var r=n("gvuQ");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},gvuQ:function(t,e,n){"use strict";var r=n("IKeO"),o=n("5SCX"),i=Object.prototype.toString;function s(t){return"[object Array]"===i.call(t)}function a(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===i.call(t)}function u(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return e},extend:function(t,e,n){return u(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},h1nK:function(t,e,n){"use strict";var r=n("gvuQ");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},iZLv:function(t,e){},kWy2:function(t,e){},lY3u:function(t,e){},m7m7:function(t,e){},rBbO:function(t,e,n){"use strict";var r=n("gvuQ"),o=n("IKeO"),i=n("NQr8"),s=n("XL/d");function a(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var c=a(s);c.Axios=i,c.create=function(t){return a(r.merge(s,t))},c.Cancel=n("DkjP"),c.CancelToken=n("68ub"),c.isCancel=n("eoZI"),c.all=function(t){return Promise.all(t)},c.spread=n("EZEp"),t.exports=c,t.exports.default=c},vyL3:function(t,e,n){"use strict";var r=n("gvuQ");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},xxJ0:function(t,e,n){"use strict";var r=n("OIH2");t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}}});