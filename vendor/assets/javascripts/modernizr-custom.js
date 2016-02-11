/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csscalc-filereader-flexbox-formvalidation-inlinesvg-input-localstorage-notification-peerconnection-proximity-scriptasync-svg-touchevents-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,s,a;for(var u in T)if(T.hasOwnProperty(u)){if(e=[],t=T[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),x.push((r?"":"no-")+a.join("-"))}}function o(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?_.className.baseVal=t:_.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(){var e=t.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function l(e,n,i,r){var o,a,u,l,c="modernizr",d=s("div"),p=f();if(parseInt(i,10))for(;i--;)u=s("div"),u.id=r?r[i]:c+(i+1),d.appendChild(u);return o=s("style"),o.type="text/css",o.id="s"+c,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=l,_.offsetHeight):d.parentNode.removeChild(d),!!a}function c(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?d(r,n||t):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(m(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+m(t[r])+":"+i+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,r,o){function a(){l&&(delete R.style,delete R.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var f=v(e,r);if(!i(f,"undefined"))return f}for(var l,d,p,m,h,g=["modernizr","tspan"];!R.style;)l=!0,R.modElem=s(g.shift()),R.style=R.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],h=R.style[m],c(m,"-")&&(m=u(m)),R.style[m]!==n){if(o||i(r,"undefined"))return a(),"pfx"==t?m:!0;try{R.style[m]=r}catch(y){}if(R.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function g(e,t,n,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?h(a,t,r,o):(a=(e+" "+z.join(s+" ")+s).split(" "),p(a,t,n))}function y(e,t,i){return g(e,n,n,t,i)}var x=[],T=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("notification",function(){if(!e.Notification||!e.Notification.requestPermission)return!1;if("granted"===e.Notification.permission)return!0;try{new e.Notification("")}catch(t){if("TypeError"===t.name)return!1}return!0}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}});var _=t.documentElement,C="svg"===_.nodeName.toLowerCase(),S=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=S,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+S.join(t+e),!!n.style.length}),Modernizr.addTest("scriptasync","async"in s("script")),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var E;!function(){var e={}.hasOwnProperty;E=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=a}),Modernizr.addAsyncTest(function(){function t(){clearTimeout(n),e.removeEventListener("deviceproximity",t),a("proximity",!0)}var n,i=300;"ondeviceproximity"in e&&"onuserproximity"in e?(e.addEventListener("deviceproximity",t),n=setTimeout(function(){e.removeEventListener("deviceproximity",t),a("proximity",!1)},i)):a("proximity",!1)});var b=w.testStyles=l;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var i=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");b(i,function(e){n=9===e.offsetTop})}return n}),Modernizr.addTest("formvalidation",function(){var t=s("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,i=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',b("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),i});var L="Moz O ms Webkit",N=w._config.usePrefixes?L.split(" "):[];w._cssomPrefixes=N;var P=function(t){var i,r=S.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var s=0;r>s;s++){var a=S[s],u=a.toUpperCase()+"_"+i;if(u in o)return"@-"+a.toLowerCase()+"-"+t}return!1};w.atRule=P;var z=w._config.usePrefixes?L.toLowerCase().split(" "):[];w._domPrefixes=z;var j={elem:s("modernizr")};Modernizr._q.push(function(){delete j.elem});var R={style:j.elem.style};Modernizr._q.unshift(function(){delete R.style}),w.testAllProps=g,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0));var q=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=u(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("peerconnection",!!q("RTCPeerConnection",e));var k=s("input"),O="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),A={};Modernizr.input=function(t){for(var n=0,i=t.length;i>n;n++)A[t[n]]=!!(t[n]in k);return A.list&&(A.list=!(!s("datalist")||!e.HTMLDataListElement)),A}(O),r(),o(x),delete w.addTest,delete w.addAsyncTest;for(var B=0;B<Modernizr._q.length;B++)Modernizr._q[B]();e.Modernizr=Modernizr}(window,document);