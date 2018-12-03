/* 5 */
/***/ (function(module, exports) {

	/*! modernizr 3.5.0 (Custom Build) | MIT *
	 * https://modernizr.com/download/?-applicationcache-backgrounds-borderimage-borderradius-boxshadow-cors-cssanimations-csscolumns-cssgradients-cssreflections-cssremunit-cssscrollbar-csstransforms-csstransforms3d-csstransitions-devicemotion_deviceorientation-fileinput-filereader-filesystem-flexbox-flexboxlegacy-fontface-formattribute-formvalidation-fullscreen-generatedcontent-hashchange-history-hsla-ie8compat-input-inputtypes-json-localstorage-multiplebgs-opacity-overflowscrolling-placeholder-postmessage-rgba-sessionstorage-strictmode-textshadow-domprefixes-hasevent-prefixed-prefixes-setclasses-testallprops-testprop-teststyles !*/
	!function(e,t,n){function r(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?S.className.baseVal=t:S.className=t)}function i(e,t){return typeof e===t}function o(){var e,t,n,r,o,s,a;for(var d in x)if(x.hasOwnProperty(d)){if(e=[],t=x[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),b.push((r?"":"no-")+a.join("-"))}}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return!!~(""+e).indexOf(t)}function l(){var e=t.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function u(e,n,r,i){var o,a,d,u,c="modernizr",f=s("div"),p=l();if(parseInt(r,10))for(;r--;)d=s("div"),d.id=i?i[r]:c+(r+1),f.appendChild(d);return o=s("style"),o.type="text/css",o.id="s"+c,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):f.parentNode.removeChild(f),!!a}function c(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?c(r,n||t):r);return!1}function p(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(m(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+m(t[i])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return n}function g(e,t,r,o){function l(){c&&(delete I.style,delete I.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var u=h(e,r);if(!i(u,"undefined"))return u}for(var c,f,p,m,g,v=["modernizr","tspan","samp"];!I.style&&v.length;)c=!0,I.modElem=s(v.shift()),I.style=I.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],g=I.style[m],d(m,"-")&&(m=a(m)),I.style[m]!==n){if(o||i(r,"undefined"))return l(),"pfx"==t?m:!0;try{I.style[m]=r}catch(y){}if(I.style[m]!=g)return l(),"pfx"==t?m:!0}return l(),!1}function v(e,t,n,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+M.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?g(a,t,r,o):(a=(e+" "+z.join(s+" ")+s).split(" "),f(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],x=[],T={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("strictmode",function(){"use strict";return!this}()),Modernizr.addTest("devicemotion","DeviceMotionEvent"in e),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in e),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}});var w=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=w;var S=t.documentElement,C="svg"===S.nodeName.toLowerCase(),k="Moz O ms Webkit",z=T._config.usePrefixes?k.toLowerCase().split(" "):[];T._domPrefixes=z;var A=function(){function e(e,t){var i;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,i=e in t,!i&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),i="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),i):!1}var r=!("onblur"in t.documentElement);return e}();T.hasEvent=A,Modernizr.addTest("hashchange",function(){return A("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=w.length-1;o>i;i++)e=0===i?"to ":"",r+=t+w[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=s("a"),d=a.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=w.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=s("input");return e.type="file",!e.disabled}),Modernizr.addTest("formattribute",function(){var e,n=s("form"),r=s("input"),i=s("div"),o="formtest"+(new Date).getTime(),a=!1;n.id=o;try{r.setAttribute("form",o)}catch(d){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=o,r.setAttributeNode(e))}return i.appendChild(n),i.appendChild(r),S.appendChild(i),a=n.elements&&1===n.elements.length&&r.form==n,i.parentNode.removeChild(i),a}),Modernizr.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea"));var _=s("input"),E="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),O={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)O[t[n]]=!!(t[n]in _);return O.list&&(O.list=!(!s("datalist")||!e.HTMLDataListElement)),O}(E);var P="search tel url email datetime date month week time datetime-local number range color".split(" "),L={};Modernizr.inputtypes=function(e){for(var r,i,o,s=e.length,a="1)",d=0;s>d;d++)_.setAttribute("type",r=e[d]),o="text"!==_.type&&"style"in _,o&&(_.value=a,_.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&_.style.WebkitAppearance!==n?(S.appendChild(_),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(_,null).WebkitAppearance&&0!==_.offsetHeight,S.removeChild(_)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?_.checkValidity&&_.checkValidity()===!1:_.value!=a)),L[e[d]]=!!o;return L}(P),Modernizr.addTest("hsla",function(){var e=s("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",d(e.backgroundColor,"rgba")||d(e.backgroundColor,"hsla")});var R="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;Modernizr.addTest("supports",R||N);var M=T._config.usePrefixes?k.split(" "):[];T._cssomPrefixes=M;var B=function(t){var r,i=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=w[s],d=a.toUpperCase()+"_"+r;if(d in o)return"@-"+a.toLowerCase()+"-"+t}return!1};T.atRule=B;var W=T.testStyles=u,j=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();j?Modernizr.addTest("fontface",!1):W('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",s=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),W('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),W("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+w.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("formvalidation",function(){var t=s("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,r=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',W("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),r});var q={elem:s("modernizr")};Modernizr._q.push(function(){delete q.elem});var I={style:q.elem.style};Modernizr._q.unshift(function(){delete I.style});var V=T.testProp=function(e,t,r){return g([e],n,t,r)};Modernizr.addTest("textshadow",V("textShadow","1px 1px")),T.testAllProps=v;var F=T.prefixed=function(e,t,n){return 0===e.indexOf("@")?B(e):(-1!=e.indexOf("-")&&(e=a(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("fullscreen",!(!F("exitFullscreen",t,!1)&&!F("cancelFullScreen",t,!1))),Modernizr.addTest("filesystem",!!F("requestFileSystem",e)),T.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",W(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),r(b),delete T.addTest,delete T.addAsyncTest;for(var H=0;H<Modernizr._q.length;H++)Modernizr._q[H]();e.Modernizr=Modernizr}(window,document);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
	 * Open source under the BSD License.
	 * Copyright © 2008 George McGinley Smith
	 * All rights reserved.
	 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
	 */

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	            return factory($);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === "object" && typeof module.exports === "object") {
	        exports = factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }
	})(function ($) {

	// Preserve the original jQuery "swing" easing as "jswing"
	    $.easing.jswing = $.easing.swing;

	    var pow = Math.pow,
	        sqrt = Math.sqrt,
	        sin = Math.sin,
	        cos = Math.cos,
	        PI = Math.PI,
	        c1 = 1.70158,
	        c2 = c1 * 1.525,
	        c3 = c1 + 1,
	        c4 = ( 2 * PI ) / 3,
	        c5 = ( 2 * PI ) / 4.5;

	// x is the fraction of animation progress, in the range 0..1
	    function bounceOut(x) {
	        var n1 = 7.5625,
	            d1 = 2.75;
	        if (x < 1 / d1) {
	            return n1 * x * x;
	        } else if (x < 2 / d1) {
	            return n1 * (x -= (1.5 / d1)) * x + 0.75;
	        } else if (x < 2.5 / d1) {
	            return n1 * (x -= (2.25 / d1)) * x + 0.9375;
	        } else {
	            return n1 * (x -= (2.625 / d1)) * x + 0.984375;
	        }
	    }

	    $.extend($.easing,
	        {
	            def: 'easeOutQuad',
	            swing: function (x) {
	                return $.easing[$.easing.def](x);
	            },
	            easeInQuad: function (x) {
	                return x * x;
	            },
	            easeOutQuad: function (x) {
	                return 1 - ( 1 - x ) * ( 1 - x );
	            },
	            easeInOutQuad: function (x) {
	                return x < 0.5 ?
	                    2 * x * x :
	                    1 - pow(-2 * x + 2, 2) / 2;
	            },
	            easeInCubic: function (x) {
	                return x * x * x;
	            },
	            easeOutCubic: function (x) {
	                return 1 - pow(1 - x, 3);
	            },
	            easeInOutCubic: function (x) {
	                return x < 0.5 ?
	                    4 * x * x * x :
	                    1 - pow(-2 * x + 2, 3) / 2;
	            },
	            easeInQuart: function (x) {
	                return x * x * x * x;
	            },
	            easeOutQuart: function (x) {
	                return 1 - pow(1 - x, 4);
	            },
	            easeInOutQuart: function (x) {
	                return x < 0.5 ?
	                    8 * x * x * x * x :
	                    1 - pow(-2 * x + 2, 4) / 2;
	            },
	            easeInQuint: function (x) {
	                return x * x * x * x * x;
	            },
	            easeOutQuint: function (x) {
	                return 1 - pow(1 - x, 5);
	            },
	            easeInOutQuint: function (x) {
	                return x < 0.5 ?
	                    16 * x * x * x * x * x :
	                    1 - pow(-2 * x + 2, 5) / 2;
	            },
	            easeInSine: function (x) {
	                return 1 - cos(x * PI / 2);
	            },
	            easeOutSine: function (x) {
	                return sin(x * PI / 2);
	            },
	            easeInOutSine: function (x) {
	                return -( cos(PI * x) - 1 ) / 2;
	            },
	            easeInExpo: function (x) {
	                return x === 0 ? 0 : pow(2, 10 * x - 10);
	            },
	            easeOutExpo: function (x) {
	                return x === 1 ? 1 : 1 - pow(2, -10 * x);
	            },
	            easeInOutExpo: function (x) {
	                return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
	                    pow(2, 20 * x - 10) / 2 :
	                    ( 2 - pow(2, -20 * x + 10) ) / 2;
	            },
	            easeInCirc: function (x) {
	                return 1 - sqrt(1 - pow(x, 2));
	            },
	            easeOutCirc: function (x) {
	                return sqrt(1 - pow(x - 1, 2));
	            },
	            easeInOutCirc: function (x) {
	                return x < 0.5 ?
	                    ( 1 - sqrt(1 - pow(2 * x, 2)) ) / 2 :
	                    ( sqrt(1 - pow(-2 * x + 2, 2)) + 1 ) / 2;
	            },
	            easeInElastic: function (x) {
	                return x === 0 ? 0 : x === 1 ? 1 :
	                    -pow(2, 10 * x - 10) * sin(( x * 10 - 10.75 ) * c4);
	            },
	            easeOutElastic: function (x) {
	                return x === 0 ? 0 : x === 1 ? 1 :
	                    pow(2, -10 * x) * sin(( x * 10 - 0.75 ) * c4) + 1;
	            },
	            easeInOutElastic: function (x) {
	                return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
	                    -( pow(2, 20 * x - 10) * sin(( 20 * x - 11.125 ) * c5)) / 2 :
	                    pow(2, -20 * x + 10) * sin(( 20 * x - 11.125 ) * c5) / 2 + 1;
	            },
	            easeInBack: function (x) {
	                return c3 * x * x * x - c1 * x * x;
	            },
	            easeOutBack: function (x) {
	                return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
	            },
	            easeInOutBack: function (x) {
	                return x < 0.5 ?
	                    ( pow(2 * x, 2) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
	                    ( pow(2 * x - 2, 2) * ( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
	            },
	            easeInBounce: function (x) {
	                return 1 - bounceOut(1 - x);
	            },
	            easeOutBounce: bounceOut,
	            easeInOutBounce: function (x) {
	                return x < 0.5 ?
	                    ( 1 - bounceOut(1 - 2 * x) ) / 2 :
	                    ( 1 + bounceOut(2 * x - 1) ) / 2;
	            }
	        });

	});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.14.3
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Popper = factory());
	}(this, (function () { 'use strict';

	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

	var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	var timeoutDuration = 0;
	for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	    timeoutDuration = 1;
	    break;
	  }
	}

	function microtaskDebounce(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }
	    called = true;
	    window.Promise.resolve().then(function () {
	      called = false;
	      fn();
	    });
	  };
	}

	function taskDebounce(fn) {
	  var scheduled = false;
	  return function () {
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        fn();
	      }, timeoutDuration);
	    }
	  };
	}

	var supportsMicroTasks = isBrowser && window.Promise;

	/**
	* Create a debounced version of a method, that's asynchronously deferred
	* but called in the minimum time possible.
	*
	* @method
	* @memberof Popper.Utils
	* @argument {Function} fn
	* @returns {Function}
	*/
	var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

	/**
	 * Check if the given variable is a function
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Any} functionToCheck - variable to check
	 * @returns {Boolean} answer to: is a function?
	 */
	function isFunction(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}

	/**
	 * Get CSS computed property of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Eement} element
	 * @argument {String} property
	 */
	function getStyleComputedProperty(element, property) {
	  if (element.nodeType !== 1) {
	    return [];
	  }
	  // NOTE: 1 DOM access here
	  var css = getComputedStyle(element, null);
	  return property ? css[property] : css;
	}

	/**
	 * Returns the parentNode or the host of the element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} parent
	 */
	function getParentNode(element) {
	  if (element.nodeName === 'HTML') {
	    return element;
	  }
	  return element.parentNode || element.host;
	}

	/**
	 * Returns the scrolling parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} scroll parent
	 */
	function getScrollParent(element) {
	  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	  if (!element) {
	    return document.body;
	  }

	  switch (element.nodeName) {
	    case 'HTML':
	    case 'BODY':
	      return element.ownerDocument.body;
	    case '#document':
	      return element.body;
	  }

	  // Firefox want us to check `-x` and `-y` variations as well

	  var _getStyleComputedProp = getStyleComputedProperty(element),
	      overflow = _getStyleComputedProp.overflow,
	      overflowX = _getStyleComputedProp.overflowX,
	      overflowY = _getStyleComputedProp.overflowY;

	  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	    return element;
	  }

	  return getScrollParent(getParentNode(element));
	}

	var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
	var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

	/**
	 * Determines if the browser is Internet Explorer
	 * @method
	 * @memberof Popper.Utils
	 * @param {Number} version to check
	 * @returns {Boolean} isIE
	 */
	function isIE(version) {
	  if (version === 11) {
	    return isIE11;
	  }
	  if (version === 10) {
	    return isIE10;
	  }
	  return isIE11 || isIE10;
	}

	/**
	 * Returns the offset parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} offset parent
	 */
	function getOffsetParent(element) {
	  if (!element) {
	    return document.documentElement;
	  }

	  var noOffsetParent = isIE(10) ? document.body : null;

	  // NOTE: 1 DOM access here
	  var offsetParent = element.offsetParent;
	  // Skip hidden elements which don't have an offsetParent
	  while (offsetParent === noOffsetParent && element.nextElementSibling) {
	    offsetParent = (element = element.nextElementSibling).offsetParent;
	  }

	  var nodeName = offsetParent && offsetParent.nodeName;

	  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
	    return element ? element.ownerDocument.documentElement : document.documentElement;
	  }

	  // .offsetParent will return the closest TD or TABLE in case
	  // no offsetParent is present, I hate this job...
	  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
	    return getOffsetParent(offsetParent);
	  }

	  return offsetParent;
	}

	function isOffsetContainer(element) {
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY') {
	    return false;
	  }
	  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
	}

	/**
	 * Finds the root node (document, shadowDOM root) of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} node
	 * @returns {Element} root node
	 */
	function getRoot(node) {
	  if (node.parentNode !== null) {
	    return getRoot(node.parentNode);
	  }

	  return node;
	}

	/**
	 * Finds the offset parent common to the two provided nodes
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element1
	 * @argument {Element} element2
	 * @returns {Element} common offset parent
	 */
	function findCommonOffsetParent(element1, element2) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
	    return document.documentElement;
	  }

	  // Here we make sure to give as "start" the element that comes first in the DOM
	  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
	  var start = order ? element1 : element2;
	  var end = order ? element2 : element1;

	  // Get common ancestor container
	  var range = document.createRange();
	  range.setStart(start, 0);
	  range.setEnd(end, 0);
	  var commonAncestorContainer = range.commonAncestorContainer;

	  // Both nodes are inside #document

	  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
	    if (isOffsetContainer(commonAncestorContainer)) {
	      return commonAncestorContainer;
	    }

	    return getOffsetParent(commonAncestorContainer);
	  }

	  // one of the nodes is inside shadowDOM, find which one
	  var element1root = getRoot(element1);
	  if (element1root.host) {
	    return findCommonOffsetParent(element1root.host, element2);
	  } else {
	    return findCommonOffsetParent(element1, getRoot(element2).host);
	  }
	}

	/**
	 * Gets the scroll value of the given element in the given side (top and left)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {String} side `top` or `left`
	 * @returns {number} amount of scrolled pixels
	 */
	function getScroll(element) {
	  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

	  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    var html = element.ownerDocument.documentElement;
	    var scrollingElement = element.ownerDocument.scrollingElement || html;
	    return scrollingElement[upperSide];
	  }

	  return element[upperSide];
	}

	/*
	 * Sum or subtract the element scroll values (left and top) from a given rect object
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} rect - Rect object you want to change
	 * @param {HTMLElement} element - The element from the function reads the scroll values
	 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	 * @return {Object} rect - The modifier rect object
	 */
	function includeScroll(rect, element) {
	  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var scrollTop = getScroll(element, 'top');
	  var scrollLeft = getScroll(element, 'left');
	  var modifier = subtract ? -1 : 1;
	  rect.top += scrollTop * modifier;
	  rect.bottom += scrollTop * modifier;
	  rect.left += scrollLeft * modifier;
	  rect.right += scrollLeft * modifier;
	  return rect;
	}

	/*
	 * Helper to detect borders of a given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {CSSStyleDeclaration} styles
	 * Result of `getStyleComputedProperty` on the given element
	 * @param {String} axis - `x` or `y`
	 * @return {number} borders - The borders size of the given axis
	 */

	function getBordersSize(styles, axis) {
	  var sideA = axis === 'x' ? 'Left' : 'Top';
	  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

	  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
	}

	function getSize(axis, body, html, computedStyle) {
	  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
	}

	function getWindowSizes() {
	  var body = document.body;
	  var html = document.documentElement;
	  var computedStyle = isIE(10) && getComputedStyle(html);

	  return {
	    height: getSize('Height', body, html, computedStyle),
	    width: getSize('Width', body, html, computedStyle)
	  };
	}

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();





	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	/**
	 * Given element offsets, generate an output similar to getBoundingClientRect
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} offsets
	 * @returns {Object} ClientRect like output
	 */
	function getClientRect(offsets) {
	  return _extends({}, offsets, {
	    right: offsets.left + offsets.width,
	    bottom: offsets.top + offsets.height
	  });
	}

	/**
	 * Get bounding client rect of given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} element
	 * @return {Object} client rect
	 */
	function getBoundingClientRect(element) {
	  var rect = {};

	  // IE10 10 FIX: Please, don't ask, the element isn't
	  // considered in DOM in some circumstances...
	  // This isn't reproducible in IE10 compatibility mode of IE11
	  try {
	    if (isIE(10)) {
	      rect = element.getBoundingClientRect();
	      var scrollTop = getScroll(element, 'top');
	      var scrollLeft = getScroll(element, 'left');
	      rect.top += scrollTop;
	      rect.left += scrollLeft;
	      rect.bottom += scrollTop;
	      rect.right += scrollLeft;
	    } else {
	      rect = element.getBoundingClientRect();
	    }
	  } catch (e) {}

	  var result = {
	    left: rect.left,
	    top: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  };

	  // subtract scrollbar size from sizes
	  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
	  var width = sizes.width || element.clientWidth || result.right - result.left;
	  var height = sizes.height || element.clientHeight || result.bottom - result.top;

	  var horizScrollbar = element.offsetWidth - width;
	  var vertScrollbar = element.offsetHeight - height;

	  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	  // we make this check conditional for performance reasons
	  if (horizScrollbar || vertScrollbar) {
	    var styles = getStyleComputedProperty(element);
	    horizScrollbar -= getBordersSize(styles, 'x');
	    vertScrollbar -= getBordersSize(styles, 'y');

	    result.width -= horizScrollbar;
	    result.height -= vertScrollbar;
	  }

	  return getClientRect(result);
	}

	function getOffsetRectRelativeToArbitraryNode(children, parent) {
	  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var isIE10 = isIE(10);
	  var isHTML = parent.nodeName === 'HTML';
	  var childrenRect = getBoundingClientRect(children);
	  var parentRect = getBoundingClientRect(parent);
	  var scrollParent = getScrollParent(children);

	  var styles = getStyleComputedProperty(parent);
	  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
	  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

	  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
	  if (fixedPosition && parent.nodeName === 'HTML') {
	    parentRect.top = Math.max(parentRect.top, 0);
	    parentRect.left = Math.max(parentRect.left, 0);
	  }
	  var offsets = getClientRect({
	    top: childrenRect.top - parentRect.top - borderTopWidth,
	    left: childrenRect.left - parentRect.left - borderLeftWidth,
	    width: childrenRect.width,
	    height: childrenRect.height
	  });
	  offsets.marginTop = 0;
	  offsets.marginLeft = 0;

	  // Subtract margins of documentElement in case it's being used as parent
	  // we do this only on HTML because it's the only element that behaves
	  // differently when margins are applied to it. The margins are included in
	  // the box of the documentElement, in the other cases not.
	  if (!isIE10 && isHTML) {
	    var marginTop = parseFloat(styles.marginTop, 10);
	    var marginLeft = parseFloat(styles.marginLeft, 10);

	    offsets.top -= borderTopWidth - marginTop;
	    offsets.bottom -= borderTopWidth - marginTop;
	    offsets.left -= borderLeftWidth - marginLeft;
	    offsets.right -= borderLeftWidth - marginLeft;

	    // Attach marginTop and marginLeft because in some circumstances we may need them
	    offsets.marginTop = marginTop;
	    offsets.marginLeft = marginLeft;
	  }

	  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
	    offsets = includeScroll(offsets, parent);
	  }

	  return offsets;
	}

	function getViewportOffsetRectRelativeToArtbitraryNode(element) {
	  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var html = element.ownerDocument.documentElement;
	  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
	  var width = Math.max(html.clientWidth, window.innerWidth || 0);
	  var height = Math.max(html.clientHeight, window.innerHeight || 0);

	  var scrollTop = !excludeScroll ? getScroll(html) : 0;
	  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

	  var offset = {
	    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
	    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
	    width: width,
	    height: height
	  };

	  return getClientRect(offset);
	}

	/**
	 * Check if the given element is fixed or is inside a fixed parent
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {Element} customContainer
	 * @returns {Boolean} answer to "isFixed?"
	 */
	function isFixed(element) {
	  var nodeName = element.nodeName;
	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    return false;
	  }
	  if (getStyleComputedProperty(element, 'position') === 'fixed') {
	    return true;
	  }
	  return isFixed(getParentNode(element));
	}

	/**
	 * Finds the first parent of an element that has a transformed property defined
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} first transformed parent or documentElement
	 */

	function getFixedPositionOffsetParent(element) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element || !element.parentElement || isIE()) {
	    return document.documentElement;
	  }
	  var el = element.parentElement;
	  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
	    el = el.parentElement;
	  }
	  return el || document.documentElement;
	}

	/**
	 * Computed the boundaries limits and return them
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} popper
	 * @param {HTMLElement} reference
	 * @param {number} padding
	 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
	 * @param {Boolean} fixedPosition - Is in fixed position mode
	 * @returns {Object} Coordinates of the boundaries
	 */
	function getBoundaries(popper, reference, padding, boundariesElement) {
	  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	  // NOTE: 1 DOM access here

	  var boundaries = { top: 0, left: 0 };
	  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

	  // Handle viewport case
	  if (boundariesElement === 'viewport') {
	    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
	  } else {
	    // Handle other cases based on DOM element used as boundaries
	    var boundariesNode = void 0;
	    if (boundariesElement === 'scrollParent') {
	      boundariesNode = getScrollParent(getParentNode(reference));
	      if (boundariesNode.nodeName === 'BODY') {
	        boundariesNode = popper.ownerDocument.documentElement;
	      }
	    } else if (boundariesElement === 'window') {
	      boundariesNode = popper.ownerDocument.documentElement;
	    } else {
	      boundariesNode = boundariesElement;
	    }

	    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

	    // In case of HTML, we need a different computation
	    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
	      var _getWindowSizes = getWindowSizes(),
	          height = _getWindowSizes.height,
	          width = _getWindowSizes.width;

	      boundaries.top += offsets.top - offsets.marginTop;
	      boundaries.bottom = height + offsets.top;
	      boundaries.left += offsets.left - offsets.marginLeft;
	      boundaries.right = width + offsets.left;
	    } else {
	      // for all the other DOM elements, this one is good
	      boundaries = offsets;
	    }
	  }

	  // Add paddings
	  boundaries.left += padding;
	  boundaries.top += padding;
	  boundaries.right -= padding;
	  boundaries.bottom -= padding;

	  return boundaries;
	}

	function getArea(_ref) {
	  var width = _ref.width,
	      height = _ref.height;

	  return width * height;
	}

	/**
	 * Utility used to transform the `auto` placement to the placement with more
	 * available space.
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
	  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

	  if (placement.indexOf('auto') === -1) {
	    return placement;
	  }

	  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

	  var rects = {
	    top: {
	      width: boundaries.width,
	      height: refRect.top - boundaries.top
	    },
	    right: {
	      width: boundaries.right - refRect.right,
	      height: boundaries.height
	    },
	    bottom: {
	      width: boundaries.width,
	      height: boundaries.bottom - refRect.bottom
	    },
	    left: {
	      width: refRect.left - boundaries.left,
	      height: boundaries.height
	    }
	  };

	  var sortedAreas = Object.keys(rects).map(function (key) {
	    return _extends({
	      key: key
	    }, rects[key], {
	      area: getArea(rects[key])
	    });
	  }).sort(function (a, b) {
	    return b.area - a.area;
	  });

	  var filteredAreas = sortedAreas.filter(function (_ref2) {
	    var width = _ref2.width,
	        height = _ref2.height;
	    return width >= popper.clientWidth && height >= popper.clientHeight;
	  });

	  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

	  var variation = placement.split('-')[1];

	  return computedPlacement + (variation ? '-' + variation : '');
	}

	/**
	 * Get offsets to the reference element
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} state
	 * @param {Element} popper - the popper element
	 * @param {Element} reference - the reference element (the popper will be relative to this)
	 * @param {Element} fixedPosition - is in fixed position mode
	 * @returns {Object} An object containing the offsets which will be applied to the popper
	 */
	function getReferenceOffsets(state, popper, reference) {
	  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
	  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
	}

	/**
	 * Get the outer sizes of the given element (offset size + margins)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Object} object containing width and height properties
	 */
	function getOuterSizes(element) {
	  var styles = getComputedStyle(element);
	  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	  var result = {
	    width: element.offsetWidth + y,
	    height: element.offsetHeight + x
	  };
	  return result;
	}

	/**
	 * Get the opposite placement of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement
	 * @returns {String} flipped placement
	 */
	function getOppositePlacement(placement) {
	  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}

	/**
	 * Get offsets to the popper
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} position - CSS position the Popper will get applied
	 * @param {HTMLElement} popper - the popper element
	 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	 * @param {String} placement - one of the valid placement options
	 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	 */
	function getPopperOffsets(popper, referenceOffsets, placement) {
	  placement = placement.split('-')[0];

	  // Get popper node sizes
	  var popperRect = getOuterSizes(popper);

	  // Add position, width and height to our offsets object
	  var popperOffsets = {
	    width: popperRect.width,
	    height: popperRect.height
	  };

	  // depending by the popper placement we have to compute its offsets slightly differently
	  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
	  var mainSide = isHoriz ? 'top' : 'left';
	  var secondarySide = isHoriz ? 'left' : 'top';
	  var measurement = isHoriz ? 'height' : 'width';
	  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

	  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
	  if (placement === secondarySide) {
	    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	  } else {
	    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	  }

	  return popperOffsets;
	}

	/**
	 * Mimics the `find` method of Array
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function find(arr, check) {
	  // use native find if supported
	  if (Array.prototype.find) {
	    return arr.find(check);
	  }

	  // use `filter` to obtain the same behavior of `find`
	  return arr.filter(check)[0];
	}

	/**
	 * Return the index of the matching object
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function findIndex(arr, prop, value) {
	  // use native findIndex if supported
	  if (Array.prototype.findIndex) {
	    return arr.findIndex(function (cur) {
	      return cur[prop] === value;
	    });
	  }

	  // use `find` + `indexOf` if `findIndex` isn't supported
	  var match = find(arr, function (obj) {
	    return obj[prop] === value;
	  });
	  return arr.indexOf(match);
	}

	/**
	 * Loop trough the list of modifiers and run them in order,
	 * each of them will then edit the data object.
	 * @method
	 * @memberof Popper.Utils
	 * @param {dataObject} data
	 * @param {Array} modifiers
	 * @param {String} ends - Optional modifier name used as stopper
	 * @returns {dataObject}
	 */
	function runModifiers(modifiers, data, ends) {
	  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

	  modifiersToRun.forEach(function (modifier) {
	    if (modifier['function']) {
	      // eslint-disable-line dot-notation
	      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
	    }
	    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
	    if (modifier.enabled && isFunction(fn)) {
	      // Add properties to offsets to make them a complete clientRect object
	      // we do this before each modifier to make sure the previous one doesn't
	      // mess with these values
	      data.offsets.popper = getClientRect(data.offsets.popper);
	      data.offsets.reference = getClientRect(data.offsets.reference);

	      data = fn(data, modifier);
	    }
	  });

	  return data;
	}

	/**
	 * Updates the position of the popper, computing the new offsets and applying
	 * the new style.<br />
	 * Prefer `scheduleUpdate` over `update` because of performance reasons.
	 * @method
	 * @memberof Popper
	 */
	function update() {
	  // if popper is destroyed, don't perform any further update
	  if (this.state.isDestroyed) {
	    return;
	  }

	  var data = {
	    instance: this,
	    styles: {},
	    arrowStyles: {},
	    attributes: {},
	    flipped: false,
	    offsets: {}
	  };

	  // compute reference element offsets
	  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

	  // store the computed placement inside `originalPlacement`
	  data.originalPlacement = data.placement;

	  data.positionFixed = this.options.positionFixed;

	  // compute the popper offsets
	  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

	  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

	  // run the modifiers
	  data = runModifiers(this.modifiers, data);

	  // the first `update` will call `onCreate` callback
	  // the other ones will call `onUpdate` callback
	  if (!this.state.isCreated) {
	    this.state.isCreated = true;
	    this.options.onCreate(data);
	  } else {
	    this.options.onUpdate(data);
	  }
	}

	/**
	 * Helper used to know if the given modifier is enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean}
	 */
	function isModifierEnabled(modifiers, modifierName) {
	  return modifiers.some(function (_ref) {
	    var name = _ref.name,
	        enabled = _ref.enabled;
	    return enabled && name === modifierName;
	  });
	}

	/**
	 * Get the prefixed supported property name
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} property (camelCase)
	 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
	 */
	function getSupportedPropertyName(property) {
	  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
	  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

	  for (var i = 0; i < prefixes.length; i++) {
	    var prefix = prefixes[i];
	    var toCheck = prefix ? '' + prefix + upperProp : property;
	    if (typeof document.body.style[toCheck] !== 'undefined') {
	      return toCheck;
	    }
	  }
	  return null;
	}

	/**
	 * Destroy the popper
	 * @method
	 * @memberof Popper
	 */
	function destroy() {
	  this.state.isDestroyed = true;

	  // touch DOM only if `applyStyle` modifier is enabled
	  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
	    this.popper.removeAttribute('x-placement');
	    this.popper.style.position = '';
	    this.popper.style.top = '';
	    this.popper.style.left = '';
	    this.popper.style.right = '';
	    this.popper.style.bottom = '';
	    this.popper.style.willChange = '';
	    this.popper.style[getSupportedPropertyName('transform')] = '';
	  }

	  this.disableEventListeners();

	  // remove the popper if user explicity asked for the deletion on destroy
	  // do not use `remove` because IE11 doesn't support it
	  if (this.options.removeOnDestroy) {
	    this.popper.parentNode.removeChild(this.popper);
	  }
	  return this;
	}

	/**
	 * Get the window associated with the element
	 * @argument {Element} element
	 * @returns {Window}
	 */
	function getWindow(element) {
	  var ownerDocument = element.ownerDocument;
	  return ownerDocument ? ownerDocument.defaultView : window;
	}

	function attachToScrollParents(scrollParent, event, callback, scrollParents) {
	  var isBody = scrollParent.nodeName === 'BODY';
	  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
	  target.addEventListener(event, callback, { passive: true });

	  if (!isBody) {
	    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
	  }
	  scrollParents.push(target);
	}

	/**
	 * Setup needed event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function setupEventListeners(reference, options, state, updateBound) {
	  // Resize event listener on window
	  state.updateBound = updateBound;
	  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

	  // Scroll event listener on scroll parents
	  var scrollElement = getScrollParent(reference);
	  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
	  state.scrollElement = scrollElement;
	  state.eventsEnabled = true;

	  return state;
	}

	/**
	 * It will add resize/scroll events and start recalculating
	 * position of the popper element when they are triggered.
	 * @method
	 * @memberof Popper
	 */
	function enableEventListeners() {
	  if (!this.state.eventsEnabled) {
	    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
	  }
	}

	/**
	 * Remove event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function removeEventListeners(reference, state) {
	  // Remove resize event listener on window
	  getWindow(reference).removeEventListener('resize', state.updateBound);

	  // Remove scroll event listener on scroll parents
	  state.scrollParents.forEach(function (target) {
	    target.removeEventListener('scroll', state.updateBound);
	  });

	  // Reset state
	  state.updateBound = null;
	  state.scrollParents = [];
	  state.scrollElement = null;
	  state.eventsEnabled = false;
	  return state;
	}

	/**
	 * It will remove resize/scroll events and won't recalculate popper position
	 * when they are triggered. It also won't trigger onUpdate callback anymore,
	 * unless you call `update` method manually.
	 * @method
	 * @memberof Popper
	 */
	function disableEventListeners() {
	  if (this.state.eventsEnabled) {
	    cancelAnimationFrame(this.scheduleUpdate);
	    this.state = removeEventListeners(this.reference, this.state);
	  }
	}

	/**
	 * Tells if a given input is a number
	 * @method
	 * @memberof Popper.Utils
	 * @param {*} input to check
	 * @return {Boolean}
	 */
	function isNumeric(n) {
	  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	}

	/**
	 * Set the style to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the style to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setStyles(element, styles) {
	  Object.keys(styles).forEach(function (prop) {
	    var unit = '';
	    // add unit if the value is numeric and is one of the following
	    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	      unit = 'px';
	    }
	    element.style[prop] = styles[prop] + unit;
	  });
	}

	/**
	 * Set the attributes to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the attributes to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setAttributes(element, attributes) {
	  Object.keys(attributes).forEach(function (prop) {
	    var value = attributes[prop];
	    if (value !== false) {
	      element.setAttribute(prop, attributes[prop]);
	    } else {
	      element.removeAttribute(prop);
	    }
	  });
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} data.styles - List of style properties - values to apply to popper element
	 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The same data object
	 */
	function applyStyle(data) {
	  // any property present in `data.styles` will be applied to the popper,
	  // in this way we can make the 3rd party modifiers add custom styles to it
	  // Be aware, modifiers could override the properties defined in the previous
	  // lines of this modifier!
	  setStyles(data.instance.popper, data.styles);

	  // any property present in `data.attributes` will be applied to the popper,
	  // they will be set as HTML attributes of the element
	  setAttributes(data.instance.popper, data.attributes);

	  // if arrowElement is defined and arrowStyles has some properties
	  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
	    setStyles(data.arrowElement, data.arrowStyles);
	  }

	  return data;
	}

	/**
	 * Set the x-placement attribute before everything else because it could be used
	 * to add margins to the popper margins needs to be calculated to get the
	 * correct popper offsets.
	 * @method
	 * @memberof Popper.modifiers
	 * @param {HTMLElement} reference - The reference element used to position the popper
	 * @param {HTMLElement} popper - The HTML element used as popper
	 * @param {Object} options - Popper.js options
	 */
	function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	  // compute reference element offsets
	  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

	  popper.setAttribute('x-placement', placement);

	  // Apply `position` to popper before anything else because
	  // without the position applied we can't guarantee correct computations
	  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

	  return options;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeStyle(data, options) {
	  var x = options.x,
	      y = options.y;
	  var popper = data.offsets.popper;

	  // Remove this legacy support in Popper.js v2

	  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'applyStyle';
	  }).gpuAcceleration;
	  if (legacyGpuAccelerationOption !== undefined) {
	    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
	  }
	  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

	  var offsetParent = getOffsetParent(data.instance.popper);
	  var offsetParentRect = getBoundingClientRect(offsetParent);

	  // Styles
	  var styles = {
	    position: popper.position
	  };

	  // Avoid blurry text by using full pixel integers.
	  // For pixel-perfect positioning, top/bottom prefers rounded
	  // values, while left/right prefers floored values.
	  var offsets = {
	    left: Math.floor(popper.left),
	    top: Math.round(popper.top),
	    bottom: Math.round(popper.bottom),
	    right: Math.floor(popper.right)
	  };

	  var sideA = x === 'bottom' ? 'top' : 'bottom';
	  var sideB = y === 'right' ? 'left' : 'right';

	  // if gpuAcceleration is set to `true` and transform is supported,
	  //  we use `translate3d` to apply the position to the popper we
	  // automatically use the supported prefixed version if needed
	  var prefixedProperty = getSupportedPropertyName('transform');

	  // now, let's make a step back and look at this code closely (wtf?)
	  // If the content of the popper grows once it's been positioned, it
	  // may happen that the popper gets misplaced because of the new content
	  // overflowing its reference element
	  // To avoid this problem, we provide two options (x and y), which allow
	  // the consumer to define the offset origin.
	  // If we position a popper on top of a reference element, we can set
	  // `x` to `top` to make the popper grow towards its top instead of
	  // its bottom.
	  var left = void 0,
	      top = void 0;
	  if (sideA === 'bottom') {
	    top = -offsetParentRect.height + offsets.bottom;
	  } else {
	    top = offsets.top;
	  }
	  if (sideB === 'right') {
	    left = -offsetParentRect.width + offsets.right;
	  } else {
	    left = offsets.left;
	  }
	  if (gpuAcceleration && prefixedProperty) {
	    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	    styles[sideA] = 0;
	    styles[sideB] = 0;
	    styles.willChange = 'transform';
	  } else {
	    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
	    var invertTop = sideA === 'bottom' ? -1 : 1;
	    var invertLeft = sideB === 'right' ? -1 : 1;
	    styles[sideA] = top * invertTop;
	    styles[sideB] = left * invertLeft;
	    styles.willChange = sideA + ', ' + sideB;
	  }

	  // Attributes
	  var attributes = {
	    'x-placement': data.placement
	  };

	  // Update `data` attributes, styles and arrowStyles
	  data.attributes = _extends({}, attributes, data.attributes);
	  data.styles = _extends({}, styles, data.styles);
	  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

	  return data;
	}

	/**
	 * Helper used to know if the given modifier depends from another one.<br />
	 * It checks if the needed modifier is listed and enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Array} modifiers - list of modifiers
	 * @param {String} requestingName - name of requesting modifier
	 * @param {String} requestedName - name of requested modifier
	 * @returns {Boolean}
	 */
	function isModifierRequired(modifiers, requestingName, requestedName) {
	  var requesting = find(modifiers, function (_ref) {
	    var name = _ref.name;
	    return name === requestingName;
	  });

	  var isRequired = !!requesting && modifiers.some(function (modifier) {
	    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	  });

	  if (!isRequired) {
	    var _requesting = '`' + requestingName + '`';
	    var requested = '`' + requestedName + '`';
	    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
	  }
	  return isRequired;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function arrow(data, options) {
	  var _data$offsets$arrow;

	  // arrow depends on keepTogether in order to work
	  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	    return data;
	  }

	  var arrowElement = options.element;

	  // if arrowElement is a string, suppose it's a CSS selector
	  if (typeof arrowElement === 'string') {
	    arrowElement = data.instance.popper.querySelector(arrowElement);

	    // if arrowElement is not found, don't run the modifier
	    if (!arrowElement) {
	      return data;
	    }
	  } else {
	    // if the arrowElement isn't a query selector we must check that the
	    // provided DOM node is child of its popper node
	    if (!data.instance.popper.contains(arrowElement)) {
	      console.warn('WARNING: `arrow.element` must be child of its popper element!');
	      return data;
	    }
	  }

	  var placement = data.placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	  var len = isVertical ? 'height' : 'width';
	  var sideCapitalized = isVertical ? 'Top' : 'Left';
	  var side = sideCapitalized.toLowerCase();
	  var altSide = isVertical ? 'left' : 'top';
	  var opSide = isVertical ? 'bottom' : 'right';
	  var arrowElementSize = getOuterSizes(arrowElement)[len];

	  //
	  // extends keepTogether behavior making sure the popper and its
	  // reference have enough pixels in conjuction
	  //

	  // top/left side
	  if (reference[opSide] - arrowElementSize < popper[side]) {
	    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	  }
	  // bottom/right side
	  if (reference[side] + arrowElementSize > popper[opSide]) {
	    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	  }
	  data.offsets.popper = getClientRect(data.offsets.popper);

	  // compute center of the popper
	  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

	  // Compute the sideValue using the updated popper offsets
	  // take popper margin in account because we don't have this info available
	  var css = getStyleComputedProperty(data.instance.popper);
	  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
	  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
	  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

	  // prevent arrowElement from being placed not contiguously to its popper
	  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

	  data.arrowElement = arrowElement;
	  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

	  return data;
	}

	/**
	 * Get the opposite placement variation of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement variation
	 * @returns {String} flipped placement variation
	 */
	function getOppositeVariation(variation) {
	  if (variation === 'end') {
	    return 'start';
	  } else if (variation === 'start') {
	    return 'end';
	  }
	  return variation;
	}

	/**
	 * List of accepted placements to use as values of the `placement` option.<br />
	 * Valid placements are:
	 * - `auto`
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * Each placement can have a variation from this list:
	 * - `-start`
	 * - `-end`
	 *
	 * Variations are interpreted easily if you think of them as the left to right
	 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
	 * is right.<br />
	 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
	 *
	 * Some valid examples are:
	 * - `top-end` (on top of reference, right aligned)
	 * - `right-start` (on right of reference, top aligned)
	 * - `bottom` (on bottom, centered)
	 * - `auto-right` (on the side with more space available, alignment depends by placement)
	 *
	 * @static
	 * @type {Array}
	 * @enum {String}
	 * @readonly
	 * @method placements
	 * @memberof Popper
	 */
	var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

	// Get rid of `auto` `auto-start` and `auto-end`
	var validPlacements = placements.slice(3);

	/**
	 * Given an initial placement, returns all the subsequent placements
	 * clockwise (or counter-clockwise).
	 *
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement - A valid placement (it accepts variations)
	 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
	 * @returns {Array} placements including their variations
	 */
	function clockwise(placement) {
	  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var index = validPlacements.indexOf(placement);
	  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
	  return counter ? arr.reverse() : arr;
	}

	var BEHAVIORS = {
	  FLIP: 'flip',
	  CLOCKWISE: 'clockwise',
	  COUNTERCLOCKWISE: 'counterclockwise'
	};

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function flip(data, options) {
	  // if `inner` modifier is enabled, we can't use the `flip` modifier
	  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
	    return data;
	  }

	  if (data.flipped && data.placement === data.originalPlacement) {
	    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	    return data;
	  }

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

	  var placement = data.placement.split('-')[0];
	  var placementOpposite = getOppositePlacement(placement);
	  var variation = data.placement.split('-')[1] || '';

	  var flipOrder = [];

	  switch (options.behavior) {
	    case BEHAVIORS.FLIP:
	      flipOrder = [placement, placementOpposite];
	      break;
	    case BEHAVIORS.CLOCKWISE:
	      flipOrder = clockwise(placement);
	      break;
	    case BEHAVIORS.COUNTERCLOCKWISE:
	      flipOrder = clockwise(placement, true);
	      break;
	    default:
	      flipOrder = options.behavior;
	  }

	  flipOrder.forEach(function (step, index) {
	    if (placement !== step || flipOrder.length === index + 1) {
	      return data;
	    }

	    placement = data.placement.split('-')[0];
	    placementOpposite = getOppositePlacement(placement);

	    var popperOffsets = data.offsets.popper;
	    var refOffsets = data.offsets.reference;

	    // using floor because the reference offsets may contain decimals we are not going to consider here
	    var floor = Math.floor;
	    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

	    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
	    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
	    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
	    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

	    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

	    // flip the variation if required
	    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

	    if (overlapsRef || overflowsBoundaries || flippedVariation) {
	      // this boolean to detect any flip loop
	      data.flipped = true;

	      if (overlapsRef || overflowsBoundaries) {
	        placement = flipOrder[index + 1];
	      }

	      if (flippedVariation) {
	        variation = getOppositeVariation(variation);
	      }

	      data.placement = placement + (variation ? '-' + variation : '');

	      // this object contains `position`, we want to preserve it along with
	      // any additional property we may add in the future
	      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

	      data = runModifiers(data.instance.modifiers, data, 'flip');
	    }
	  });
	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function keepTogether(data) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var placement = data.placement.split('-')[0];
	  var floor = Math.floor;
	  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	  var side = isVertical ? 'right' : 'bottom';
	  var opSide = isVertical ? 'left' : 'top';
	  var measurement = isVertical ? 'width' : 'height';

	  if (popper[side] < floor(reference[opSide])) {
	    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	  }
	  if (popper[opSide] > floor(reference[side])) {
	    data.offsets.popper[opSide] = floor(reference[side]);
	  }

	  return data;
	}

	/**
	 * Converts a string containing value + unit into a px value number
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} str - Value + unit string
	 * @argument {String} measurement - `height` or `width`
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @returns {Number|String}
	 * Value in pixels, or original string if no values were extracted
	 */
	function toValue(str, measurement, popperOffsets, referenceOffsets) {
	  // separate value from unit
	  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
	  var value = +split[1];
	  var unit = split[2];

	  // If it's not a number it's an operator, I guess
	  if (!value) {
	    return str;
	  }

	  if (unit.indexOf('%') === 0) {
	    var element = void 0;
	    switch (unit) {
	      case '%p':
	        element = popperOffsets;
	        break;
	      case '%':
	      case '%r':
	      default:
	        element = referenceOffsets;
	    }

	    var rect = getClientRect(element);
	    return rect[measurement] / 100 * value;
	  } else if (unit === 'vh' || unit === 'vw') {
	    // if is a vh or vw, we calculate the size based on the viewport
	    var size = void 0;
	    if (unit === 'vh') {
	      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	    } else {
	      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    }
	    return size / 100 * value;
	  } else {
	    // if is an explicit pixel unit, we get rid of the unit and keep the value
	    // if is an implicit unit, it's px, and we return just the value
	    return value;
	  }
	}

	/**
	 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} offset
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @argument {String} basePlacement
	 * @returns {Array} a two cells array with x and y offsets in numbers
	 */
	function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
	  var offsets = [0, 0];

	  // Use height if placement is left or right and index is 0 otherwise use width
	  // in this way the first offset will use an axis and the second one
	  // will use the other one
	  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

	  // Split the offset string to obtain a list of values and operands
	  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
	  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
	    return frag.trim();
	  });

	  // Detect if the offset string contains a pair of values or a single one
	  // they could be separated by comma or space
	  var divider = fragments.indexOf(find(fragments, function (frag) {
	    return frag.search(/,|\s/) !== -1;
	  }));

	  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
	    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
	  }

	  // If divider is found, we divide the list of values and operands to divide
	  // them by ofset X and Y.
	  var splitRegex = /\s*,\s*|\s+/;
	  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

	  // Convert the values with units to absolute pixels to allow our computations
	  ops = ops.map(function (op, index) {
	    // Most of the units rely on the orientation of the popper
	    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
	    var mergeWithPrevious = false;
	    return op
	    // This aggregates any `+` or `-` sign that aren't considered operators
	    // e.g.: 10 + +5 => [10, +, +5]
	    .reduce(function (a, b) {
	      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
	        a[a.length - 1] = b;
	        mergeWithPrevious = true;
	        return a;
	      } else if (mergeWithPrevious) {
	        a[a.length - 1] += b;
	        mergeWithPrevious = false;
	        return a;
	      } else {
	        return a.concat(b);
	      }
	    }, [])
	    // Here we convert the string values into number values (in px)
	    .map(function (str) {
	      return toValue(str, measurement, popperOffsets, referenceOffsets);
	    });
	  });

	  // Loop trough the offsets arrays and execute the operations
	  ops.forEach(function (op, index) {
	    op.forEach(function (frag, index2) {
	      if (isNumeric(frag)) {
	        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
	      }
	    });
	  });
	  return offsets;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @argument {Number|String} options.offset=0
	 * The offset value as described in the modifier description
	 * @returns {Object} The data object, properly modified
	 */
	function offset(data, _ref) {
	  var offset = _ref.offset;
	  var placement = data.placement,
	      _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var basePlacement = placement.split('-')[0];

	  var offsets = void 0;
	  if (isNumeric(+offset)) {
	    offsets = [+offset, 0];
	  } else {
	    offsets = parseOffset(offset, popper, reference, basePlacement);
	  }

	  if (basePlacement === 'left') {
	    popper.top += offsets[0];
	    popper.left -= offsets[1];
	  } else if (basePlacement === 'right') {
	    popper.top += offsets[0];
	    popper.left += offsets[1];
	  } else if (basePlacement === 'top') {
	    popper.left += offsets[0];
	    popper.top -= offsets[1];
	  } else if (basePlacement === 'bottom') {
	    popper.left += offsets[0];
	    popper.top += offsets[1];
	  }

	  data.popper = popper;
	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function preventOverflow(data, options) {
	  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

	  // If offsetParent is the reference element, we really want to
	  // go one step up and use the next offsetParent as reference to
	  // avoid to make this modifier completely useless and look like broken
	  if (data.instance.reference === boundariesElement) {
	    boundariesElement = getOffsetParent(boundariesElement);
	  }

	  // NOTE: DOM access here
	  // resets the popper's position so that the document size can be calculated excluding
	  // the size of the popper element itself
	  var transformProp = getSupportedPropertyName('transform');
	  var popperStyles = data.instance.popper.style; // assignment to help minification
	  var top = popperStyles.top,
	      left = popperStyles.left,
	      transform = popperStyles[transformProp];

	  popperStyles.top = '';
	  popperStyles.left = '';
	  popperStyles[transformProp] = '';

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

	  // NOTE: DOM access here
	  // restores the original style properties after the offsets have been computed
	  popperStyles.top = top;
	  popperStyles.left = left;
	  popperStyles[transformProp] = transform;

	  options.boundaries = boundaries;

	  var order = options.priority;
	  var popper = data.offsets.popper;

	  var check = {
	    primary: function primary(placement) {
	      var value = popper[placement];
	      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
	        value = Math.max(popper[placement], boundaries[placement]);
	      }
	      return defineProperty({}, placement, value);
	    },
	    secondary: function secondary(placement) {
	      var mainSide = placement === 'right' ? 'left' : 'top';
	      var value = popper[mainSide];
	      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
	        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
	      }
	      return defineProperty({}, mainSide, value);
	    }
	  };

	  order.forEach(function (placement) {
	    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
	    popper = _extends({}, popper, check[side](placement));
	  });

	  data.offsets.popper = popper;

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function shift(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var shiftvariation = placement.split('-')[1];

	  // if shift shiftvariation is specified, run the modifier
	  if (shiftvariation) {
	    var _data$offsets = data.offsets,
	        reference = _data$offsets.reference,
	        popper = _data$offsets.popper;

	    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
	    var side = isVertical ? 'left' : 'top';
	    var measurement = isVertical ? 'width' : 'height';

	    var shiftOffsets = {
	      start: defineProperty({}, side, reference[side]),
	      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
	    };

	    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
	  }

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function hide(data) {
	  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
	    return data;
	  }

	  var refRect = data.offsets.reference;
	  var bound = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'preventOverflow';
	  }).boundaries;

	  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === true) {
	      return data;
	    }

	    data.hide = true;
	    data.attributes['x-out-of-boundaries'] = '';
	  } else {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === false) {
	      return data;
	    }

	    data.hide = false;
	    data.attributes['x-out-of-boundaries'] = false;
	  }

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function inner(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

	  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

	  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

	  data.placement = getOppositePlacement(placement);
	  data.offsets.popper = getClientRect(popper);

	  return data;
	}

	/**
	 * Modifier function, each modifier can have a function of this type assigned
	 * to its `fn` property.<br />
	 * These functions will be called on each update, this means that you must
	 * make sure they are performant enough to avoid performance bottlenecks.
	 *
	 * @function ModifierFn
	 * @argument {dataObject} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {dataObject} The data object, properly modified
	 */

	/**
	 * Modifiers are plugins used to alter the behavior of your poppers.<br />
	 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
	 * needed by the library.
	 *
	 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
	 * All the other properties are configurations that could be tweaked.
	 * @namespace modifiers
	 */
	var modifiers = {
	  /**
	   * Modifier used to shift the popper on the start or end of its reference
	   * element.<br />
	   * It will read the variation of the `placement` property.<br />
	   * It can be one either `-end` or `-start`.
	   * @memberof modifiers
	   * @inner
	   */
	  shift: {
	    /** @prop {number} order=100 - Index used to define the order of execution */
	    order: 100,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: shift
	  },

	  /**
	   * The `offset` modifier can shift your popper on both its axis.
	   *
	   * It accepts the following units:
	   * - `px` or unitless, interpreted as pixels
	   * - `%` or `%r`, percentage relative to the length of the reference element
	   * - `%p`, percentage relative to the length of the popper element
	   * - `vw`, CSS viewport width unit
	   * - `vh`, CSS viewport height unit
	   *
	   * For length is intended the main axis relative to the placement of the popper.<br />
	   * This means that if the placement is `top` or `bottom`, the length will be the
	   * `width`. In case of `left` or `right`, it will be the height.
	   *
	   * You can provide a single value (as `Number` or `String`), or a pair of values
	   * as `String` divided by a comma or one (or more) white spaces.<br />
	   * The latter is a deprecated method because it leads to confusion and will be
	   * removed in v2.<br />
	   * Additionally, it accepts additions and subtractions between different units.
	   * Note that multiplications and divisions aren't supported.
	   *
	   * Valid examples are:
	   * ```
	   * 10
	   * '10%'
	   * '10, 10'
	   * '10%, 10'
	   * '10 + 10%'
	   * '10 - 5vh + 3%'
	   * '-10px + 5vh, 5px - 6%'
	   * ```
	   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
	   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
	   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  offset: {
	    /** @prop {number} order=200 - Index used to define the order of execution */
	    order: 200,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: offset,
	    /** @prop {Number|String} offset=0
	     * The offset value as described in the modifier description
	     */
	    offset: 0
	  },

	  /**
	   * Modifier used to prevent the popper from being positioned outside the boundary.
	   *
	   * An scenario exists where the reference itself is not within the boundaries.<br />
	   * We can say it has "escaped the boundaries" — or just "escaped".<br />
	   * In this case we need to decide whether the popper should either:
	   *
	   * - detach from the reference and remain "trapped" in the boundaries, or
	   * - if it should ignore the boundary and "escape with its reference"
	   *
	   * When `escapeWithReference` is set to`true` and reference is completely
	   * outside its boundaries, the popper will overflow (or completely leave)
	   * the boundaries in order to remain attached to the edge of the reference.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  preventOverflow: {
	    /** @prop {number} order=300 - Index used to define the order of execution */
	    order: 300,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: preventOverflow,
	    /**
	     * @prop {Array} [priority=['left','right','top','bottom']]
	     * Popper will try to prevent overflow following these priorities by default,
	     * then, it could overflow on the left and on top of the `boundariesElement`
	     */
	    priority: ['left', 'right', 'top', 'bottom'],
	    /**
	     * @prop {number} padding=5
	     * Amount of pixel used to define a minimum distance between the boundaries
	     * and the popper this makes sure the popper has always a little padding
	     * between the edges of its container
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='scrollParent'
	     * Boundaries used by the modifier, can be `scrollParent`, `window`,
	     * `viewport` or any DOM element.
	     */
	    boundariesElement: 'scrollParent'
	  },

	  /**
	   * Modifier used to make sure the reference and its popper stay near eachothers
	   * without leaving any gap between the two. Expecially useful when the arrow is
	   * enabled and you want to assure it to point to its reference element.
	   * It cares only about the first axis, you can still have poppers with margin
	   * between the popper and its reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  keepTogether: {
	    /** @prop {number} order=400 - Index used to define the order of execution */
	    order: 400,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: keepTogether
	  },

	  /**
	   * This modifier is used to move the `arrowElement` of the popper to make
	   * sure it is positioned between the reference element and its popper element.
	   * It will read the outer size of the `arrowElement` node to detect how many
	   * pixels of conjuction are needed.
	   *
	   * It has no effect if no `arrowElement` is provided.
	   * @memberof modifiers
	   * @inner
	   */
	  arrow: {
	    /** @prop {number} order=500 - Index used to define the order of execution */
	    order: 500,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: arrow,
	    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
	    element: '[x-arrow]'
	  },

	  /**
	   * Modifier used to flip the popper's placement when it starts to overlap its
	   * reference element.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   *
	   * **NOTE:** this modifier will interrupt the current update cycle and will
	   * restart it if it detects the need to flip the placement.
	   * @memberof modifiers
	   * @inner
	   */
	  flip: {
	    /** @prop {number} order=600 - Index used to define the order of execution */
	    order: 600,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: flip,
	    /**
	     * @prop {String|Array} behavior='flip'
	     * The behavior used to change the popper's placement. It can be one of
	     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
	     * placements (with optional variations).
	     */
	    behavior: 'flip',
	    /**
	     * @prop {number} padding=5
	     * The popper will flip if it hits the edges of the `boundariesElement`
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='viewport'
	     * The element which will define the boundaries of the popper position,
	     * the popper will never be placed outside of the defined boundaries
	     * (except if keepTogether is enabled)
	     */
	    boundariesElement: 'viewport'
	  },

	  /**
	   * Modifier used to make the popper flow toward the inner of the reference element.
	   * By default, when this modifier is disabled, the popper will be placed outside
	   * the reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  inner: {
	    /** @prop {number} order=700 - Index used to define the order of execution */
	    order: 700,
	    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
	    enabled: false,
	    /** @prop {ModifierFn} */
	    fn: inner
	  },

	  /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
	   * be used to hide with a CSS selector the popper when its reference is
	   * out of boundaries.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * @memberof modifiers
	   * @inner
	   */
	  hide: {
	    /** @prop {number} order=800 - Index used to define the order of execution */
	    order: 800,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: hide
	  },

	  /**
	   * Computes the style that will be applied to the popper element to gets
	   * properly positioned.
	   *
	   * Note that this modifier will not touch the DOM, it just prepares the styles
	   * so that `applyStyle` modifier can apply it. This separation is useful
	   * in case you need to replace `applyStyle` with a custom implementation.
	   *
	   * This modifier has `850` as `order` value to maintain backward compatibility
	   * with previous versions of Popper.js. Expect the modifiers ordering method
	   * to change in future major versions of the library.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  computeStyle: {
	    /** @prop {number} order=850 - Index used to define the order of execution */
	    order: 850,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: computeStyle,
	    /**
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3d transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties.
	     */
	    gpuAcceleration: true,
	    /**
	     * @prop {string} [x='bottom']
	     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
	     * Change this if your popper should grow in a direction different from `bottom`
	     */
	    x: 'bottom',
	    /**
	     * @prop {string} [x='left']
	     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
	     * Change this if your popper should grow in a direction different from `right`
	     */
	    y: 'right'
	  },

	  /**
	   * Applies the computed styles to the popper element.
	   *
	   * All the DOM manipulations are limited to this modifier. This is useful in case
	   * you want to integrate Popper.js inside a framework or view library and you
	   * want to delegate all the DOM manipulations to it.
	   *
	   * Note that if you disable this modifier, you must make sure the popper element
	   * has its position set to `absolute` before Popper.js can do its work!
	   *
	   * Just disable this modifier and define you own to achieve the desired effect.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  applyStyle: {
	    /** @prop {number} order=900 - Index used to define the order of execution */
	    order: 900,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: applyStyle,
	    /** @prop {Function} */
	    onLoad: applyStyleOnLoad,
	    /**
	     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3d transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties.
	     */
	    gpuAcceleration: undefined
	  }
	};

	/**
	 * The `dataObject` is an object containing all the informations used by Popper.js
	 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	 * @name dataObject
	 * @property {Object} data.instance The Popper.js instance
	 * @property {String} data.placement Placement applied to popper
	 * @property {String} data.originalPlacement Placement originally defined on init
	 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
	 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.boundaries Offsets of the popper boundaries
	 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
	 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
	 */

	/**
	 * Default options provided to Popper.js constructor.<br />
	 * These can be overriden using the `options` argument of Popper.js.<br />
	 * To override an option, simply pass as 3rd argument an object with the same
	 * structure of this object, example:
	 * ```
	 * new Popper(ref, pop, {
	 *   modifiers: {
	 *     preventOverflow: { enabled: false }
	 *   }
	 * })
	 * ```
	 * @type {Object}
	 * @static
	 * @memberof Popper
	 */
	var Defaults = {
	  /**
	   * Popper's placement
	   * @prop {Popper.placements} placement='bottom'
	   */
	  placement: 'bottom',

	  /**
	   * Set this to true if you want popper to position it self in 'fixed' mode
	   * @prop {Boolean} positionFixed=false
	   */
	  positionFixed: false,

	  /**
	   * Whether events (resize, scroll) are initially enabled
	   * @prop {Boolean} eventsEnabled=true
	   */
	  eventsEnabled: true,

	  /**
	   * Set to true if you want to automatically remove the popper when
	   * you call the `destroy` method.
	   * @prop {Boolean} removeOnDestroy=false
	   */
	  removeOnDestroy: false,

	  /**
	   * Callback called when the popper is created.<br />
	   * By default, is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onCreate}
	   */
	  onCreate: function onCreate() {},

	  /**
	   * Callback called when the popper is updated, this callback is not called
	   * on the initialization/creation of the popper, but only on subsequent
	   * updates.<br />
	   * By default, is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onUpdate}
	   */
	  onUpdate: function onUpdate() {},

	  /**
	   * List of modifiers used to modify the offsets before they are applied to the popper.
	   * They provide most of the functionalities of Popper.js
	   * @prop {modifiers}
	   */
	  modifiers: modifiers
	};

	/**
	 * @callback onCreate
	 * @param {dataObject} data
	 */

	/**
	 * @callback onUpdate
	 * @param {dataObject} data
	 */

	// Utils
	// Methods
	var Popper = function () {
	  /**
	   * Create a new Popper.js instance
	   * @class Popper
	   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
	   * @param {HTMLElement} popper - The HTML element used as popper.
	   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
	   * @return {Object} instance - The generated Popper.js instance
	   */
	  function Popper(reference, popper) {
	    var _this = this;

	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    classCallCheck(this, Popper);

	    this.scheduleUpdate = function () {
	      return requestAnimationFrame(_this.update);
	    };

	    // make update() debounced, so that it only runs at most once-per-tick
	    this.update = debounce(this.update.bind(this));

	    // with {} we create a new object with the options inside it
	    this.options = _extends({}, Popper.Defaults, options);

	    // init state
	    this.state = {
	      isDestroyed: false,
	      isCreated: false,
	      scrollParents: []
	    };

	    // get reference and popper elements (allow jQuery wrappers)
	    this.reference = reference && reference.jquery ? reference[0] : reference;
	    this.popper = popper && popper.jquery ? popper[0] : popper;

	    // Deep merge modifiers options
	    this.options.modifiers = {};
	    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
	      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
	    });

	    // Refactoring modifiers' list (Object => Array)
	    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
	      return _extends({
	        name: name
	      }, _this.options.modifiers[name]);
	    })
	    // sort the modifiers by order
	    .sort(function (a, b) {
	      return a.order - b.order;
	    });

	    // modifiers have the ability to execute arbitrary code when Popper.js get inited
	    // such code is executed in the same order of its modifier
	    // they could add new properties to their options configuration
	    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
	    this.modifiers.forEach(function (modifierOptions) {
	      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
	        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
	      }
	    });

	    // fire the first update to position the popper in the right place
	    this.update();

	    var eventsEnabled = this.options.eventsEnabled;
	    if (eventsEnabled) {
	      // setup event listeners, they will take care of update the position in specific situations
	      this.enableEventListeners();
	    }

	    this.state.eventsEnabled = eventsEnabled;
	  }

	  // We can't use class properties because they don't get listed in the
	  // class prototype and break stuff like Sinon stubs


	  createClass(Popper, [{
	    key: 'update',
	    value: function update$$1() {
	      return update.call(this);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy$$1() {
	      return destroy.call(this);
	    }
	  }, {
	    key: 'enableEventListeners',
	    value: function enableEventListeners$$1() {
	      return enableEventListeners.call(this);
	    }
	  }, {
	    key: 'disableEventListeners',
	    value: function disableEventListeners$$1() {
	      return disableEventListeners.call(this);
	    }

	    /**
	     * Schedule an update, it will run on the next UI update available
	     * @method scheduleUpdate
	     * @memberof Popper
	     */


	    /**
	     * Collection of utilities useful when writing custom modifiers.
	     * Starting from version 1.7, this method is available only if you
	     * include `popper-utils.js` before `popper.js`.
	     *
	     * **DEPRECATION**: This way to access PopperUtils is deprecated
	     * and will be removed in v2! Use the PopperUtils module directly instead.
	     * Due to the high instability of the methods contained in Utils, we can't
	     * guarantee them to follow semver. Use them at your own risk!
	     * @static
	     * @private
	     * @type {Object}
	     * @deprecated since version 1.8
	     * @member Utils
	     * @memberof Popper
	     */

	  }]);
	  return Popper;
	}();

	/**
	 * The `referenceObject` is an object that provides an interface compatible with Popper.js
	 * and lets you use it as replacement of a real DOM node.<br />
	 * You can use this method to position a popper relatively to a set of coordinates
	 * in case you don't have a DOM node to use as reference.
	 *
	 * ```
	 * new Popper(referenceObject, popperNode);
	 * ```
	 *
	 * NB: This feature isn't supported in Internet Explorer 10
	 * @name referenceObject
	 * @property {Function} data.getBoundingClientRect
	 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	 * @property {number} data.clientWidth
	 * An ES6 getter that will return the width of the virtual reference element.
	 * @property {number} data.clientHeight
	 * An ES6 getter that will return the height of the virtual reference element.
	 */


	Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
	Popper.placements = placements;
	Popper.Defaults = Defaults;

	return Popper;

	})));
	//# sourceMappingURL=popper.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	  * Bootstrap v4.0.0 (https://getbootstrap.com)
	  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	  */
	(function (global, factory) {
		 true ? factory(exports, __webpack_require__(4), __webpack_require__(7)) :
		typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
		(factory((global.bootstrap = {}),global.jQuery,global.Popper));
	}(this, (function (exports,$,Popper) { 'use strict';

	$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
	Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): util.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Util = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Private TransitionEnd Helpers
	   * ------------------------------------------------------------------------
	   */
	  var transition = false;
	  var MAX_UID = 1000000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

	  function toType(obj) {
	    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	  }

	  function getSpecialTransitionEndEvent() {
	    return {
	      bindType: transition.end,
	      delegateType: transition.end,
	      handle: function handle(event) {
	        if ($$$1(event.target).is(this)) {
	          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
	        }

	        return undefined; // eslint-disable-line no-undefined
	      }
	    };
	  }

	  function transitionEndTest() {
	    if (typeof window !== 'undefined' && window.QUnit) {
	      return false;
	    }

	    return {
	      end: 'transitionend'
	    };
	  }

	  function transitionEndEmulator(duration) {
	    var _this = this;

	    var called = false;
	    $$$1(this).one(Util.TRANSITION_END, function () {
	      called = true;
	    });
	    setTimeout(function () {
	      if (!called) {
	        Util.triggerTransitionEnd(_this);
	      }
	    }, duration);
	    return this;
	  }

	  function setTransitionEndSupport() {
	    transition = transitionEndTest();
	    $$$1.fn.emulateTransitionEnd = transitionEndEmulator;

	    if (Util.supportsTransitionEnd()) {
	      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
	    }
	  }

	  function escapeId(selector) {
	    // We escape IDs in case of special selectors (selector = '#myId:something')
	    // $.escapeSelector does not exist in jQuery < 3
	    selector = typeof $$$1.escapeSelector === 'function' ? $$$1.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
	    return selector;
	  }
	  /**
	   * --------------------------------------------------------------------------
	   * Public Util Api
	   * --------------------------------------------------------------------------
	   */


	  var Util = {
	    TRANSITION_END: 'bsTransitionEnd',
	    getUID: function getUID(prefix) {
	      do {
	        // eslint-disable-next-line no-bitwise
	        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
	      } while (document.getElementById(prefix));

	      return prefix;
	    },
	    getSelectorFromElement: function getSelectorFromElement(element) {
	      var selector = element.getAttribute('data-target');

	      if (!selector || selector === '#') {
	        selector = element.getAttribute('href') || '';
	      } // If it's an ID


	      if (selector.charAt(0) === '#') {
	        selector = escapeId(selector);
	      }

	      try {
	        var $selector = $$$1(document).find(selector);
	        return $selector.length > 0 ? selector : null;
	      } catch (err) {
	        return null;
	      }
	    },
	    reflow: function reflow(element) {
	      return element.offsetHeight;
	    },
	    triggerTransitionEnd: function triggerTransitionEnd(element) {
	      $$$1(element).trigger(transition.end);
	    },
	    supportsTransitionEnd: function supportsTransitionEnd() {
	      return Boolean(transition);
	    },
	    isElement: function isElement(obj) {
	      return (obj[0] || obj).nodeType;
	    },
	    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
	      for (var property in configTypes) {
	        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
	          var expectedTypes = configTypes[property];
	          var value = config[property];
	          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

	          if (!new RegExp(expectedTypes).test(valueType)) {
	            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
	          }
	        }
	      }
	    }
	  };
	  setTransitionEndSupport();
	  return Util;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): alert.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Alert = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'alert';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.alert';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var TRANSITION_DURATION = 150;
	  var Selector = {
	    DISMISS: '[data-dismiss="alert"]'
	  };
	  var Event = {
	    CLOSE: "close" + EVENT_KEY,
	    CLOSED: "closed" + EVENT_KEY,
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    ALERT: 'alert',
	    FADE: 'fade',
	    SHOW: 'show'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Alert =
	  /*#__PURE__*/
	  function () {
	    function Alert(element) {
	      this._element = element;
	    } // Getters


	    var _proto = Alert.prototype;

	    // Public
	    _proto.close = function close(element) {
	      element = element || this._element;

	      var rootElement = this._getRootElement(element);

	      var customEvent = this._triggerCloseEvent(rootElement);

	      if (customEvent.isDefaultPrevented()) {
	        return;
	      }

	      this._removeElement(rootElement);
	    };

	    _proto.dispose = function dispose() {
	      $$$1.removeData(this._element, DATA_KEY);
	      this._element = null;
	    }; // Private


	    _proto._getRootElement = function _getRootElement(element) {
	      var selector = Util.getSelectorFromElement(element);
	      var parent = false;

	      if (selector) {
	        parent = $$$1(selector)[0];
	      }

	      if (!parent) {
	        parent = $$$1(element).closest("." + ClassName.ALERT)[0];
	      }

	      return parent;
	    };

	    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
	      var closeEvent = $$$1.Event(Event.CLOSE);
	      $$$1(element).trigger(closeEvent);
	      return closeEvent;
	    };

	    _proto._removeElement = function _removeElement(element) {
	      var _this = this;

	      $$$1(element).removeClass(ClassName.SHOW);

	      if (!Util.supportsTransitionEnd() || !$$$1(element).hasClass(ClassName.FADE)) {
	        this._destroyElement(element);

	        return;
	      }

	      $$$1(element).one(Util.TRANSITION_END, function (event) {
	        return _this._destroyElement(element, event);
	      }).emulateTransitionEnd(TRANSITION_DURATION);
	    };

	    _proto._destroyElement = function _destroyElement(element) {
	      $$$1(element).detach().trigger(Event.CLOSED).remove();
	    }; // Static


	    Alert._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $element = $$$1(this);
	        var data = $element.data(DATA_KEY);

	        if (!data) {
	          data = new Alert(this);
	          $element.data(DATA_KEY, data);
	        }

	        if (config === 'close') {
	          data[config](this);
	        }
	      });
	    };

	    Alert._handleDismiss = function _handleDismiss(alertInstance) {
	      return function (event) {
	        if (event) {
	          event.preventDefault();
	        }

	        alertInstance.close(this);
	      };
	    };

	    _createClass(Alert, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }]);
	    return Alert;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $$$1.fn[NAME] = Alert._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Alert;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Alert._jQueryInterface;
	  };

	  return Alert;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): button.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Button = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'button';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.button';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var ClassName = {
	    ACTIVE: 'active',
	    BUTTON: 'btn',
	    FOCUS: 'focus'
	  };
	  var Selector = {
	    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
	    DATA_TOGGLE: '[data-toggle="buttons"]',
	    INPUT: 'input',
	    ACTIVE: '.active',
	    BUTTON: '.btn'
	  };
	  var Event = {
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
	    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Button =
	  /*#__PURE__*/
	  function () {
	    function Button(element) {
	      this._element = element;
	    } // Getters


	    var _proto = Button.prototype;

	    // Public
	    _proto.toggle = function toggle() {
	      var triggerChangeEvent = true;
	      var addAriaPressed = true;
	      var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];

	      if (rootElement) {
	        var input = $$$1(this._element).find(Selector.INPUT)[0];

	        if (input) {
	          if (input.type === 'radio') {
	            if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {
	              triggerChangeEvent = false;
	            } else {
	              var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];

	              if (activeElement) {
	                $$$1(activeElement).removeClass(ClassName.ACTIVE);
	              }
	            }
	          }

	          if (triggerChangeEvent) {
	            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
	              return;
	            }

	            input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);
	            $$$1(input).trigger('change');
	          }

	          input.focus();
	          addAriaPressed = false;
	        }
	      }

	      if (addAriaPressed) {
	        this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE));
	      }

	      if (triggerChangeEvent) {
	        $$$1(this._element).toggleClass(ClassName.ACTIVE);
	      }
	    };

	    _proto.dispose = function dispose() {
	      $$$1.removeData(this._element, DATA_KEY);
	      this._element = null;
	    }; // Static


	    Button._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $$$1(this).data(DATA_KEY);

	        if (!data) {
	          data = new Button(this);
	          $$$1(this).data(DATA_KEY, data);
	        }

	        if (config === 'toggle') {
	          data[config]();
	        }
	      });
	    };

	    _createClass(Button, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }]);
	    return Button;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
	    event.preventDefault();
	    var button = event.target;

	    if (!$$$1(button).hasClass(ClassName.BUTTON)) {
	      button = $$$1(button).closest(Selector.BUTTON);
	    }

	    Button._jQueryInterface.call($$$1(button), 'toggle');
	  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
	    var button = $$$1(event.target).closest(Selector.BUTTON)[0];
	    $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $$$1.fn[NAME] = Button._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Button;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Button._jQueryInterface;
	  };

	  return Button;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): carousel.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Carousel = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'carousel';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.carousel';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var TRANSITION_DURATION = 600;
	  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

	  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

	  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

	  var Default = {
	    interval: 5000,
	    keyboard: true,
	    slide: false,
	    pause: 'hover',
	    wrap: true
	  };
	  var DefaultType = {
	    interval: '(number|boolean)',
	    keyboard: 'boolean',
	    slide: '(boolean|string)',
	    pause: '(string|boolean)',
	    wrap: 'boolean'
	  };
	  var Direction = {
	    NEXT: 'next',
	    PREV: 'prev',
	    LEFT: 'left',
	    RIGHT: 'right'
	  };
	  var Event = {
	    SLIDE: "slide" + EVENT_KEY,
	    SLID: "slid" + EVENT_KEY,
	    KEYDOWN: "keydown" + EVENT_KEY,
	    MOUSEENTER: "mouseenter" + EVENT_KEY,
	    MOUSELEAVE: "mouseleave" + EVENT_KEY,
	    TOUCHEND: "touchend" + EVENT_KEY,
	    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    CAROUSEL: 'carousel',
	    ACTIVE: 'active',
	    SLIDE: 'slide',
	    RIGHT: 'carousel-item-right',
	    LEFT: 'carousel-item-left',
	    NEXT: 'carousel-item-next',
	    PREV: 'carousel-item-prev',
	    ITEM: 'carousel-item'
	  };
	  var Selector = {
	    ACTIVE: '.active',
	    ACTIVE_ITEM: '.active.carousel-item',
	    ITEM: '.carousel-item',
	    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
	    INDICATORS: '.carousel-indicators',
	    DATA_SLIDE: '[data-slide], [data-slide-to]',
	    DATA_RIDE: '[data-ride="carousel"]'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Carousel =
	  /*#__PURE__*/
	  function () {
	    function Carousel(element, config) {
	      this._items = null;
	      this._interval = null;
	      this._activeElement = null;
	      this._isPaused = false;
	      this._isSliding = false;
	      this.touchTimeout = null;
	      this._config = this._getConfig(config);
	      this._element = $$$1(element)[0];
	      this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];

	      this._addEventListeners();
	    } // Getters


	    var _proto = Carousel.prototype;

	    // Public
	    _proto.next = function next() {
	      if (!this._isSliding) {
	        this._slide(Direction.NEXT);
	      }
	    };

	    _proto.nextWhenVisible = function nextWhenVisible() {
	      // Don't call next when the page isn't visible
	      // or the carousel or its parent isn't visible
	      if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
	        this.next();
	      }
	    };

	    _proto.prev = function prev() {
	      if (!this._isSliding) {
	        this._slide(Direction.PREV);
	      }
	    };

	    _proto.pause = function pause(event) {
	      if (!event) {
	        this._isPaused = true;
	      }

	      if ($$$1(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
	        Util.triggerTransitionEnd(this._element);
	        this.cycle(true);
	      }

	      clearInterval(this._interval);
	      this._interval = null;
	    };

	    _proto.cycle = function cycle(event) {
	      if (!event) {
	        this._isPaused = false;
	      }

	      if (this._interval) {
	        clearInterval(this._interval);
	        this._interval = null;
	      }

	      if (this._config.interval && !this._isPaused) {
	        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
	      }
	    };

	    _proto.to = function to(index) {
	      var _this = this;

	      this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

	      var activeIndex = this._getItemIndex(this._activeElement);

	      if (index > this._items.length - 1 || index < 0) {
	        return;
	      }

	      if (this._isSliding) {
	        $$$1(this._element).one(Event.SLID, function () {
	          return _this.to(index);
	        });
	        return;
	      }

	      if (activeIndex === index) {
	        this.pause();
	        this.cycle();
	        return;
	      }

	      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

	      this._slide(direction, this._items[index]);
	    };

	    _proto.dispose = function dispose() {
	      $$$1(this._element).off(EVENT_KEY);
	      $$$1.removeData(this._element, DATA_KEY);
	      this._items = null;
	      this._config = null;
	      this._element = null;
	      this._interval = null;
	      this._isPaused = null;
	      this._isSliding = null;
	      this._activeElement = null;
	      this._indicatorsElement = null;
	    }; // Private


	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default, config);
	      Util.typeCheckConfig(NAME, config, DefaultType);
	      return config;
	    };

	    _proto._addEventListeners = function _addEventListeners() {
	      var _this2 = this;

	      if (this._config.keyboard) {
	        $$$1(this._element).on(Event.KEYDOWN, function (event) {
	          return _this2._keydown(event);
	        });
	      }

	      if (this._config.pause === 'hover') {
	        $$$1(this._element).on(Event.MOUSEENTER, function (event) {
	          return _this2.pause(event);
	        }).on(Event.MOUSELEAVE, function (event) {
	          return _this2.cycle(event);
	        });

	        if ('ontouchstart' in document.documentElement) {
	          // If it's a touch-enabled device, mouseenter/leave are fired as
	          // part of the mouse compatibility events on first tap - the carousel
	          // would stop cycling until user tapped out of it;
	          // here, we listen for touchend, explicitly pause the carousel
	          // (as if it's the second time we tap on it, mouseenter compat event
	          // is NOT fired) and after a timeout (to allow for mouse compatibility
	          // events to fire) we explicitly restart cycling
	          $$$1(this._element).on(Event.TOUCHEND, function () {
	            _this2.pause();

	            if (_this2.touchTimeout) {
	              clearTimeout(_this2.touchTimeout);
	            }

	            _this2.touchTimeout = setTimeout(function (event) {
	              return _this2.cycle(event);
	            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
	          });
	        }
	      }
	    };

	    _proto._keydown = function _keydown(event) {
	      if (/input|textarea/i.test(event.target.tagName)) {
	        return;
	      }

	      switch (event.which) {
	        case ARROW_LEFT_KEYCODE:
	          event.preventDefault();
	          this.prev();
	          break;

	        case ARROW_RIGHT_KEYCODE:
	          event.preventDefault();
	          this.next();
	          break;

	        default:
	      }
	    };

	    _proto._getItemIndex = function _getItemIndex(element) {
	      this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
	      return this._items.indexOf(element);
	    };

	    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
	      var isNextDirection = direction === Direction.NEXT;
	      var isPrevDirection = direction === Direction.PREV;

	      var activeIndex = this._getItemIndex(activeElement);

	      var lastItemIndex = this._items.length - 1;
	      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

	      if (isGoingToWrap && !this._config.wrap) {
	        return activeElement;
	      }

	      var delta = direction === Direction.PREV ? -1 : 1;
	      var itemIndex = (activeIndex + delta) % this._items.length;
	      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
	    };

	    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
	      var targetIndex = this._getItemIndex(relatedTarget);

	      var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);

	      var slideEvent = $$$1.Event(Event.SLIDE, {
	        relatedTarget: relatedTarget,
	        direction: eventDirectionName,
	        from: fromIndex,
	        to: targetIndex
	      });
	      $$$1(this._element).trigger(slideEvent);
	      return slideEvent;
	    };

	    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
	      if (this._indicatorsElement) {
	        $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

	        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

	        if (nextIndicator) {
	          $$$1(nextIndicator).addClass(ClassName.ACTIVE);
	        }
	      }
	    };

	    _proto._slide = function _slide(direction, element) {
	      var _this3 = this;

	      var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

	      var activeElementIndex = this._getItemIndex(activeElement);

	      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

	      var nextElementIndex = this._getItemIndex(nextElement);

	      var isCycling = Boolean(this._interval);
	      var directionalClassName;
	      var orderClassName;
	      var eventDirectionName;

	      if (direction === Direction.NEXT) {
	        directionalClassName = ClassName.LEFT;
	        orderClassName = ClassName.NEXT;
	        eventDirectionName = Direction.LEFT;
	      } else {
	        directionalClassName = ClassName.RIGHT;
	        orderClassName = ClassName.PREV;
	        eventDirectionName = Direction.RIGHT;
	      }

	      if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
	        this._isSliding = false;
	        return;
	      }

	      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

	      if (slideEvent.isDefaultPrevented()) {
	        return;
	      }

	      if (!activeElement || !nextElement) {
	        // Some weirdness is happening, so we bail
	        return;
	      }

	      this._isSliding = true;

	      if (isCycling) {
	        this.pause();
	      }

	      this._setActiveIndicatorElement(nextElement);

	      var slidEvent = $$$1.Event(Event.SLID, {
	        relatedTarget: nextElement,
	        direction: eventDirectionName,
	        from: activeElementIndex,
	        to: nextElementIndex
	      });

	      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.SLIDE)) {
	        $$$1(nextElement).addClass(orderClassName);
	        Util.reflow(nextElement);
	        $$$1(activeElement).addClass(directionalClassName);
	        $$$1(nextElement).addClass(directionalClassName);
	        $$$1(activeElement).one(Util.TRANSITION_END, function () {
	          $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
	          $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
	          _this3._isSliding = false;
	          setTimeout(function () {
	            return $$$1(_this3._element).trigger(slidEvent);
	          }, 0);
	        }).emulateTransitionEnd(TRANSITION_DURATION);
	      } else {
	        $$$1(activeElement).removeClass(ClassName.ACTIVE);
	        $$$1(nextElement).addClass(ClassName.ACTIVE);
	        this._isSliding = false;
	        $$$1(this._element).trigger(slidEvent);
	      }

	      if (isCycling) {
	        this.cycle();
	      }
	    }; // Static


	    Carousel._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $$$1(this).data(DATA_KEY);

	        var _config = _extends({}, Default, $$$1(this).data());

	        if (typeof config === 'object') {
	          _config = _extends({}, _config, config);
	        }

	        var action = typeof config === 'string' ? config : _config.slide;

	        if (!data) {
	          data = new Carousel(this, _config);
	          $$$1(this).data(DATA_KEY, data);
	        }

	        if (typeof config === 'number') {
	          data.to(config);
	        } else if (typeof action === 'string') {
	          if (typeof data[action] === 'undefined') {
	            throw new TypeError("No method named \"" + action + "\"");
	          }

	          data[action]();
	        } else if (_config.interval) {
	          data.pause();
	          data.cycle();
	        }
	      });
	    };

	    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
	      var selector = Util.getSelectorFromElement(this);

	      if (!selector) {
	        return;
	      }

	      var target = $$$1(selector)[0];

	      if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
	        return;
	      }

	      var config = _extends({}, $$$1(target).data(), $$$1(this).data());
	      var slideIndex = this.getAttribute('data-slide-to');

	      if (slideIndex) {
	        config.interval = false;
	      }

	      Carousel._jQueryInterface.call($$$1(target), config);

	      if (slideIndex) {
	        $$$1(target).data(DATA_KEY).to(slideIndex);
	      }

	      event.preventDefault();
	    };

	    _createClass(Carousel, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default;
	      }
	    }]);
	    return Carousel;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
	  $$$1(window).on(Event.LOAD_DATA_API, function () {
	    $$$1(Selector.DATA_RIDE).each(function () {
	      var $carousel = $$$1(this);

	      Carousel._jQueryInterface.call($carousel, $carousel.data());
	    });
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $$$1.fn[NAME] = Carousel._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Carousel;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Carousel._jQueryInterface;
	  };

	  return Carousel;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): collapse.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Collapse = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'collapse';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.collapse';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var TRANSITION_DURATION = 600;
	  var Default = {
	    toggle: true,
	    parent: ''
	  };
	  var DefaultType = {
	    toggle: 'boolean',
	    parent: '(string|element)'
	  };
	  var Event = {
	    SHOW: "show" + EVENT_KEY,
	    SHOWN: "shown" + EVENT_KEY,
	    HIDE: "hide" + EVENT_KEY,
	    HIDDEN: "hidden" + EVENT_KEY,
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    SHOW: 'show',
	    COLLAPSE: 'collapse',
	    COLLAPSING: 'collapsing',
	    COLLAPSED: 'collapsed'
	  };
	  var Dimension = {
	    WIDTH: 'width',
	    HEIGHT: 'height'
	  };
	  var Selector = {
	    ACTIVES: '.show, .collapsing',
	    DATA_TOGGLE: '[data-toggle="collapse"]'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Collapse =
	  /*#__PURE__*/
	  function () {
	    function Collapse(element, config) {
	      this._isTransitioning = false;
	      this._element = element;
	      this._config = this._getConfig(config);
	      this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
	      var tabToggles = $$$1(Selector.DATA_TOGGLE);

	      for (var i = 0; i < tabToggles.length; i++) {
	        var elem = tabToggles[i];
	        var selector = Util.getSelectorFromElement(elem);

	        if (selector !== null && $$$1(selector).filter(element).length > 0) {
	          this._selector = selector;

	          this._triggerArray.push(elem);
	        }
	      }

	      this._parent = this._config.parent ? this._getParent() : null;

	      if (!this._config.parent) {
	        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
	      }

	      if (this._config.toggle) {
	        this.toggle();
	      }
	    } // Getters


	    var _proto = Collapse.prototype;

	    // Public
	    _proto.toggle = function toggle() {
	      if ($$$1(this._element).hasClass(ClassName.SHOW)) {
	        this.hide();
	      } else {
	        this.show();
	      }
	    };

	    _proto.show = function show() {
	      var _this = this;

	      if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
	        return;
	      }

	      var actives;
	      var activesData;

	      if (this._parent) {
	        actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"));

	        if (actives.length === 0) {
	          actives = null;
	        }
	      }

	      if (actives) {
	        activesData = $$$1(actives).not(this._selector).data(DATA_KEY);

	        if (activesData && activesData._isTransitioning) {
	          return;
	        }
	      }

	      var startEvent = $$$1.Event(Event.SHOW);
	      $$$1(this._element).trigger(startEvent);

	      if (startEvent.isDefaultPrevented()) {
	        return;
	      }

	      if (actives) {
	        Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

	        if (!activesData) {
	          $$$1(actives).data(DATA_KEY, null);
	        }
	      }

	      var dimension = this._getDimension();

	      $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
	      this._element.style[dimension] = 0;

	      if (this._triggerArray.length > 0) {
	        $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
	      }

	      this.setTransitioning(true);

	      var complete = function complete() {
	        $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
	        _this._element.style[dimension] = '';

	        _this.setTransitioning(false);

	        $$$1(_this._element).trigger(Event.SHOWN);
	      };

	      if (!Util.supportsTransitionEnd()) {
	        complete();
	        return;
	      }

	      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
	      var scrollSize = "scroll" + capitalizedDimension;
	      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	      this._element.style[dimension] = this._element[scrollSize] + "px";
	    };

	    _proto.hide = function hide() {
	      var _this2 = this;

	      if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
	        return;
	      }

	      var startEvent = $$$1.Event(Event.HIDE);
	      $$$1(this._element).trigger(startEvent);

	      if (startEvent.isDefaultPrevented()) {
	        return;
	      }

	      var dimension = this._getDimension();

	      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
	      Util.reflow(this._element);
	      $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

	      if (this._triggerArray.length > 0) {
	        for (var i = 0; i < this._triggerArray.length; i++) {
	          var trigger = this._triggerArray[i];
	          var selector = Util.getSelectorFromElement(trigger);

	          if (selector !== null) {
	            var $elem = $$$1(selector);

	            if (!$elem.hasClass(ClassName.SHOW)) {
	              $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
	            }
	          }
	        }
	      }

	      this.setTransitioning(true);

	      var complete = function complete() {
	        _this2.setTransitioning(false);

	        $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
	      };

	      this._element.style[dimension] = '';

	      if (!Util.supportsTransitionEnd()) {
	        complete();
	        return;
	      }

	      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	    };

	    _proto.setTransitioning = function setTransitioning(isTransitioning) {
	      this._isTransitioning = isTransitioning;
	    };

	    _proto.dispose = function dispose() {
	      $$$1.removeData(this._element, DATA_KEY);
	      this._config = null;
	      this._parent = null;
	      this._element = null;
	      this._triggerArray = null;
	      this._isTransitioning = null;
	    }; // Private


	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default, config);
	      config.toggle = Boolean(config.toggle); // Coerce string values

	      Util.typeCheckConfig(NAME, config, DefaultType);
	      return config;
	    };

	    _proto._getDimension = function _getDimension() {
	      var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
	      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
	    };

	    _proto._getParent = function _getParent() {
	      var _this3 = this;

	      var parent = null;

	      if (Util.isElement(this._config.parent)) {
	        parent = this._config.parent; // It's a jQuery object

	        if (typeof this._config.parent.jquery !== 'undefined') {
	          parent = this._config.parent[0];
	        }
	      } else {
	        parent = $$$1(this._config.parent)[0];
	      }

	      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
	      $$$1(parent).find(selector).each(function (i, element) {
	        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
	      });
	      return parent;
	    };

	    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
	      if (element) {
	        var isOpen = $$$1(element).hasClass(ClassName.SHOW);

	        if (triggerArray.length > 0) {
	          $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
	        }
	      }
	    }; // Static


	    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
	      var selector = Util.getSelectorFromElement(element);
	      return selector ? $$$1(selector)[0] : null;
	    };

	    Collapse._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $this = $$$1(this);
	        var data = $this.data(DATA_KEY);

	        var _config = _extends({}, Default, $this.data(), typeof config === 'object' && config);

	        if (!data && _config.toggle && /show|hide/.test(config)) {
	          _config.toggle = false;
	        }

	        if (!data) {
	          data = new Collapse(this, _config);
	          $this.data(DATA_KEY, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(Collapse, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default;
	      }
	    }]);
	    return Collapse;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
	    if (event.currentTarget.tagName === 'A') {
	      event.preventDefault();
	    }

	    var $trigger = $$$1(this);
	    var selector = Util.getSelectorFromElement(this);
	    $$$1(selector).each(function () {
	      var $target = $$$1(this);
	      var data = $target.data(DATA_KEY);
	      var config = data ? 'toggle' : $trigger.data();

	      Collapse._jQueryInterface.call($target, config);
	    });
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $$$1.fn[NAME] = Collapse._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Collapse;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Collapse._jQueryInterface;
	  };

	  return Collapse;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): dropdown.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Dropdown = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'dropdown';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.dropdown';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

	  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

	  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

	  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

	  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

	  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

	  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
	  var Event = {
	    HIDE: "hide" + EVENT_KEY,
	    HIDDEN: "hidden" + EVENT_KEY,
	    SHOW: "show" + EVENT_KEY,
	    SHOWN: "shown" + EVENT_KEY,
	    CLICK: "click" + EVENT_KEY,
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
	    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
	    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    DISABLED: 'disabled',
	    SHOW: 'show',
	    DROPUP: 'dropup',
	    DROPRIGHT: 'dropright',
	    DROPLEFT: 'dropleft',
	    MENURIGHT: 'dropdown-menu-right',
	    MENULEFT: 'dropdown-menu-left',
	    POSITION_STATIC: 'position-static'
	  };
	  var Selector = {
	    DATA_TOGGLE: '[data-toggle="dropdown"]',
	    FORM_CHILD: '.dropdown form',
	    MENU: '.dropdown-menu',
	    NAVBAR_NAV: '.navbar-nav',
	    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
	  };
	  var AttachmentMap = {
	    TOP: 'top-start',
	    TOPEND: 'top-end',
	    BOTTOM: 'bottom-start',
	    BOTTOMEND: 'bottom-end',
	    RIGHT: 'right-start',
	    RIGHTEND: 'right-end',
	    LEFT: 'left-start',
	    LEFTEND: 'left-end'
	  };
	  var Default = {
	    offset: 0,
	    flip: true,
	    boundary: 'scrollParent'
	  };
	  var DefaultType = {
	    offset: '(number|string|function)',
	    flip: 'boolean',
	    boundary: '(string|element)'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Dropdown =
	  /*#__PURE__*/
	  function () {
	    function Dropdown(element, config) {
	      this._element = element;
	      this._popper = null;
	      this._config = this._getConfig(config);
	      this._menu = this._getMenuElement();
	      this._inNavbar = this._detectNavbar();

	      this._addEventListeners();
	    } // Getters


	    var _proto = Dropdown.prototype;

	    // Public
	    _proto.toggle = function toggle() {
	      if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
	        return;
	      }

	      var parent = Dropdown._getParentFromElement(this._element);

	      var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

	      Dropdown._clearMenus();

	      if (isActive) {
	        return;
	      }

	      var relatedTarget = {
	        relatedTarget: this._element
	      };
	      var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
	      $$$1(parent).trigger(showEvent);

	      if (showEvent.isDefaultPrevented()) {
	        return;
	      } // Disable totally Popper.js for Dropdown in Navbar


	      if (!this._inNavbar) {
	        /**
	         * Check for Popper dependency
	         * Popper - https://popper.js.org
	         */
	        if (typeof Popper === 'undefined') {
	          throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
	        }

	        var element = this._element; // For dropup with alignment we use the parent as popper container

	        if ($$$1(parent).hasClass(ClassName.DROPUP)) {
	          if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
	            element = parent;
	          }
	        } // If boundary is not `scrollParent`, then set position to `static`
	        // to allow the menu to "escape" the scroll parent's boundaries
	        // https://github.com/twbs/bootstrap/issues/24251


	        if (this._config.boundary !== 'scrollParent') {
	          $$$1(parent).addClass(ClassName.POSITION_STATIC);
	        }

	        this._popper = new Popper(element, this._menu, this._getPopperConfig());
	      } // If this is a touch-enabled device we add extra
	      // empty mouseover listeners to the body's immediate children;
	      // only needed because of broken event delegation on iOS
	      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


	      if ('ontouchstart' in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
	        $$$1('body').children().on('mouseover', null, $$$1.noop);
	      }

	      this._element.focus();

	      this._element.setAttribute('aria-expanded', true);

	      $$$1(this._menu).toggleClass(ClassName.SHOW);
	      $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
	    };

	    _proto.dispose = function dispose() {
	      $$$1.removeData(this._element, DATA_KEY);
	      $$$1(this._element).off(EVENT_KEY);
	      this._element = null;
	      this._menu = null;

	      if (this._popper !== null) {
	        this._popper.destroy();

	        this._popper = null;
	      }
	    };

	    _proto.update = function update() {
	      this._inNavbar = this._detectNavbar();

	      if (this._popper !== null) {
	        this._popper.scheduleUpdate();
	      }
	    }; // Private


	    _proto._addEventListeners = function _addEventListeners() {
	      var _this = this;

	      $$$1(this._element).on(Event.CLICK, function (event) {
	        event.preventDefault();
	        event.stopPropagation();

	        _this.toggle();
	      });
	    };

	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, this.constructor.Default, $$$1(this._element).data(), config);
	      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
	      return config;
	    };

	    _proto._getMenuElement = function _getMenuElement() {
	      if (!this._menu) {
	        var parent = Dropdown._getParentFromElement(this._element);

	        this._menu = $$$1(parent).find(Selector.MENU)[0];
	      }

	      return this._menu;
	    };

	    _proto._getPlacement = function _getPlacement() {
	      var $parentDropdown = $$$1(this._element).parent();
	      var placement = AttachmentMap.BOTTOM; // Handle dropup

	      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
	        placement = AttachmentMap.TOP;

	        if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
	          placement = AttachmentMap.TOPEND;
	        }
	      } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
	        placement = AttachmentMap.RIGHT;
	      } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
	        placement = AttachmentMap.LEFT;
	      } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
	        placement = AttachmentMap.BOTTOMEND;
	      }

	      return placement;
	    };

	    _proto._detectNavbar = function _detectNavbar() {
	      return $$$1(this._element).closest('.navbar').length > 0;
	    };

	    _proto._getPopperConfig = function _getPopperConfig() {
	      var _this2 = this;

	      var offsetConf = {};

	      if (typeof this._config.offset === 'function') {
	        offsetConf.fn = function (data) {
	          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets) || {});
	          return data;
	        };
	      } else {
	        offsetConf.offset = this._config.offset;
	      }

	      var popperConfig = {
	        placement: this._getPlacement(),
	        modifiers: {
	          offset: offsetConf,
	          flip: {
	            enabled: this._config.flip
	          },
	          preventOverflow: {
	            boundariesElement: this._config.boundary
	          }
	        }
	      };
	      return popperConfig;
	    }; // Static


	    Dropdown._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $$$1(this).data(DATA_KEY);

	        var _config = typeof config === 'object' ? config : null;

	        if (!data) {
	          data = new Dropdown(this, _config);
	          $$$1(this).data(DATA_KEY, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    Dropdown._clearMenus = function _clearMenus(event) {
	      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
	        return;
	      }

	      var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

	      for (var i = 0; i < toggles.length; i++) {
	        var parent = Dropdown._getParentFromElement(toggles[i]);

	        var context = $$$1(toggles[i]).data(DATA_KEY);
	        var relatedTarget = {
	          relatedTarget: toggles[i]
	        };

	        if (!context) {
	          continue;
	        }

	        var dropdownMenu = context._menu;

	        if (!$$$1(parent).hasClass(ClassName.SHOW)) {
	          continue;
	        }

	        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
	          continue;
	        }

	        var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
	        $$$1(parent).trigger(hideEvent);

	        if (hideEvent.isDefaultPrevented()) {
	          continue;
	        } // If this is a touch-enabled device we remove the extra
	        // empty mouseover listeners we added for iOS support


	        if ('ontouchstart' in document.documentElement) {
	          $$$1('body').children().off('mouseover', null, $$$1.noop);
	        }

	        toggles[i].setAttribute('aria-expanded', 'false');
	        $$$1(dropdownMenu).removeClass(ClassName.SHOW);
	        $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
	      }
	    };

	    Dropdown._getParentFromElement = function _getParentFromElement(element) {
	      var parent;
	      var selector = Util.getSelectorFromElement(element);

	      if (selector) {
	        parent = $$$1(selector)[0];
	      }

	      return parent || element.parentNode;
	    }; // eslint-disable-next-line complexity


	    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
	      // If not input/textarea:
	      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
	      // If input/textarea:
	      //  - If space key => not a dropdown command
	      //  - If key is other than escape
	      //    - If key is not up or down => not a dropdown command
	      //    - If trigger inside the menu => not a dropdown command
	      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
	        return;
	      }

	      event.preventDefault();
	      event.stopPropagation();

	      if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
	        return;
	      }

	      var parent = Dropdown._getParentFromElement(this);

	      var isActive = $$$1(parent).hasClass(ClassName.SHOW);

	      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
	        if (event.which === ESCAPE_KEYCODE) {
	          var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
	          $$$1(toggle).trigger('focus');
	        }

	        $$$1(this).trigger('click');
	        return;
	      }

	      var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

	      if (items.length === 0) {
	        return;
	      }

	      var index = items.indexOf(event.target);

	      if (event.which === ARROW_UP_KEYCODE && index > 0) {
	        // Up
	        index--;
	      }

	      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
	        // Down
	        index++;
	      }

	      if (index < 0) {
	        index = 0;
	      }

	      items[index].focus();
	    };

	    _createClass(Dropdown, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default;
	      }
	    }, {
	      key: "DefaultType",
	      get: function get() {
	        return DefaultType;
	      }
	    }]);
	    return Dropdown;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    event.preventDefault();
	    event.stopPropagation();

	    Dropdown._jQueryInterface.call($$$1(this), 'toggle');
	  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
	    e.stopPropagation();
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $$$1.fn[NAME] = Dropdown._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Dropdown;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Dropdown._jQueryInterface;
	  };

	  return Dropdown;
	}($, Popper);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): modal.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Modal = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'modal';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.modal';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var TRANSITION_DURATION = 300;
	  var BACKDROP_TRANSITION_DURATION = 150;
	  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

	  var Default = {
	    backdrop: true,
	    keyboard: true,
	    focus: true,
	    show: true
	  };
	  var DefaultType = {
	    backdrop: '(boolean|string)',
	    keyboard: 'boolean',
	    focus: 'boolean',
	    show: 'boolean'
	  };
	  var Event = {
	    HIDE: "hide" + EVENT_KEY,
	    HIDDEN: "hidden" + EVENT_KEY,
	    SHOW: "show" + EVENT_KEY,
	    SHOWN: "shown" + EVENT_KEY,
	    FOCUSIN: "focusin" + EVENT_KEY,
	    RESIZE: "resize" + EVENT_KEY,
	    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
	    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
	    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
	    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
	    BACKDROP: 'modal-backdrop',
	    OPEN: 'modal-open',
	    FADE: 'fade',
	    SHOW: 'show'
	  };
	  var Selector = {
	    DIALOG: '.modal-dialog',
	    DATA_TOGGLE: '[data-toggle="modal"]',
	    DATA_DISMISS: '[data-dismiss="modal"]',
	    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
	    STICKY_CONTENT: '.sticky-top',
	    NAVBAR_TOGGLER: '.navbar-toggler'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Modal =
	  /*#__PURE__*/
	  function () {
	    function Modal(element, config) {
	      this._config = this._getConfig(config);
	      this._element = element;
	      this._dialog = $$$1(element).find(Selector.DIALOG)[0];
	      this._backdrop = null;
	      this._isShown = false;
	      this._isBodyOverflowing = false;
	      this._ignoreBackdropClick = false;
	      this._originalBodyPadding = 0;
	      this._scrollbarWidth = 0;
	    } // Getters


	    var _proto = Modal.prototype;

	    // Public
	    _proto.toggle = function toggle(relatedTarget) {
	      return this._isShown ? this.hide() : this.show(relatedTarget);
	    };

	    _proto.show = function show(relatedTarget) {
	      var _this = this;

	      if (this._isTransitioning || this._isShown) {
	        return;
	      }

	      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
	        this._isTransitioning = true;
	      }

	      var showEvent = $$$1.Event(Event.SHOW, {
	        relatedTarget: relatedTarget
	      });
	      $$$1(this._element).trigger(showEvent);

	      if (this._isShown || showEvent.isDefaultPrevented()) {
	        return;
	      }

	      this._isShown = true;

	      this._checkScrollbar();

	      this._setScrollbar();

	      this._adjustDialog();

	      $$$1(document.body).addClass(ClassName.OPEN);

	      this._setEscapeEvent();

	      this._setResizeEvent();

	      $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
	        return _this.hide(event);
	      });
	      $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
	        $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
	          if ($$$1(event.target).is(_this._element)) {
	            _this._ignoreBackdropClick = true;
	          }
	        });
	      });

	      this._showBackdrop(function () {
	        return _this._showElement(relatedTarget);
	      });
	    };

	    _proto.hide = function hide(event) {
	      var _this2 = this;

	      if (event) {
	        event.preventDefault();
	      }

	      if (this._isTransitioning || !this._isShown) {
	        return;
	      }

	      var hideEvent = $$$1.Event(Event.HIDE);
	      $$$1(this._element).trigger(hideEvent);

	      if (!this._isShown || hideEvent.isDefaultPrevented()) {
	        return;
	      }

	      this._isShown = false;
	      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

	      if (transition) {
	        this._isTransitioning = true;
	      }

	      this._setEscapeEvent();

	      this._setResizeEvent();

	      $$$1(document).off(Event.FOCUSIN);
	      $$$1(this._element).removeClass(ClassName.SHOW);
	      $$$1(this._element).off(Event.CLICK_DISMISS);
	      $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

	      if (transition) {
	        $$$1(this._element).one(Util.TRANSITION_END, function (event) {
	          return _this2._hideModal(event);
	        }).emulateTransitionEnd(TRANSITION_DURATION);
	      } else {
	        this._hideModal();
	      }
	    };

	    _proto.dispose = function dispose() {
	      $$$1.removeData(this._element, DATA_KEY);
	      $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
	      this._config = null;
	      this._element = null;
	      this._dialog = null;
	      this._backdrop = null;
	      this._isShown = null;
	      this._isBodyOverflowing = null;
	      this._ignoreBackdropClick = null;
	      this._scrollbarWidth = null;
	    };

	    _proto.handleUpdate = function handleUpdate() {
	      this._adjustDialog();
	    }; // Private


	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default, config);
	      Util.typeCheckConfig(NAME, config, DefaultType);
	      return config;
	    };

	    _proto._showElement = function _showElement(relatedTarget) {
	      var _this3 = this;

	      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

	      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
	        // Don't move modal's DOM position
	        document.body.appendChild(this._element);
	      }

	      this._element.style.display = 'block';

	      this._element.removeAttribute('aria-hidden');

	      this._element.scrollTop = 0;

	      if (transition) {
	        Util.reflow(this._element);
	      }

	      $$$1(this._element).addClass(ClassName.SHOW);

	      if (this._config.focus) {
	        this._enforceFocus();
	      }

	      var shownEvent = $$$1.Event(Event.SHOWN, {
	        relatedTarget: relatedTarget
	      });

	      var transitionComplete = function transitionComplete() {
	        if (_this3._config.focus) {
	          _this3._element.focus();
	        }

	        _this3._isTransitioning = false;
	        $$$1(_this3._element).trigger(shownEvent);
	      };

	      if (transition) {
	        $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
	      } else {
	        transitionComplete();
	      }
	    };

	    _proto._enforceFocus = function _enforceFocus() {
	      var _this4 = this;

	      $$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
	      .on(Event.FOCUSIN, function (event) {
	        if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
	          _this4._element.focus();
	        }
	      });
	    };

	    _proto._setEscapeEvent = function _setEscapeEvent() {
	      var _this5 = this;

	      if (this._isShown && this._config.keyboard) {
	        $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
	          if (event.which === ESCAPE_KEYCODE) {
	            event.preventDefault();

	            _this5.hide();
	          }
	        });
	      } else if (!this._isShown) {
	        $$$1(this._element).off(Event.KEYDOWN_DISMISS);
	      }
	    };

	    _proto._setResizeEvent = function _setResizeEvent() {
	      var _this6 = this;

	      if (this._isShown) {
	        $$$1(window).on(Event.RESIZE, function (event) {
	          return _this6.handleUpdate(event);
	        });
	      } else {
	        $$$1(window).off(Event.RESIZE);
	      }
	    };

	    _proto._hideModal = function _hideModal() {
	      var _this7 = this;

	      this._element.style.display = 'none';

	      this._element.setAttribute('aria-hidden', true);

	      this._isTransitioning = false;

	      this._showBackdrop(function () {
	        $$$1(document.body).removeClass(ClassName.OPEN);

	        _this7._resetAdjustments();

	        _this7._resetScrollbar();

	        $$$1(_this7._element).trigger(Event.HIDDEN);
	      });
	    };

	    _proto._removeBackdrop = function _removeBackdrop() {
	      if (this._backdrop) {
	        $$$1(this._backdrop).remove();
	        this._backdrop = null;
	      }
	    };

	    _proto._showBackdrop = function _showBackdrop(callback) {
	      var _this8 = this;

	      var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

	      if (this._isShown && this._config.backdrop) {
	        var doAnimate = Util.supportsTransitionEnd() && animate;
	        this._backdrop = document.createElement('div');
	        this._backdrop.className = ClassName.BACKDROP;

	        if (animate) {
	          $$$1(this._backdrop).addClass(animate);
	        }

	        $$$1(this._backdrop).appendTo(document.body);
	        $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
	          if (_this8._ignoreBackdropClick) {
	            _this8._ignoreBackdropClick = false;
	            return;
	          }

	          if (event.target !== event.currentTarget) {
	            return;
	          }

	          if (_this8._config.backdrop === 'static') {
	            _this8._element.focus();
	          } else {
	            _this8.hide();
	          }
	        });

	        if (doAnimate) {
	          Util.reflow(this._backdrop);
	        }

	        $$$1(this._backdrop).addClass(ClassName.SHOW);

	        if (!callback) {
	          return;
	        }

	        if (!doAnimate) {
	          callback();
	          return;
	        }

	        $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
	      } else if (!this._isShown && this._backdrop) {
	        $$$1(this._backdrop).removeClass(ClassName.SHOW);

	        var callbackRemove = function callbackRemove() {
	          _this8._removeBackdrop();

	          if (callback) {
	            callback();
	          }
	        };

	        if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
	          $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
	        } else {
	          callbackRemove();
	        }
	      } else if (callback) {
	        callback();
	      }
	    }; // ----------------------------------------------------------------------
	    // the following methods are used to handle overflowing modals
	    // todo (fat): these should probably be refactored out of modal.js
	    // ----------------------------------------------------------------------


	    _proto._adjustDialog = function _adjustDialog() {
	      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

	      if (!this._isBodyOverflowing && isModalOverflowing) {
	        this._element.style.paddingLeft = this._scrollbarWidth + "px";
	      }

	      if (this._isBodyOverflowing && !isModalOverflowing) {
	        this._element.style.paddingRight = this._scrollbarWidth + "px";
	      }
	    };

	    _proto._resetAdjustments = function _resetAdjustments() {
	      this._element.style.paddingLeft = '';
	      this._element.style.paddingRight = '';
	    };

	    _proto._checkScrollbar = function _checkScrollbar() {
	      var rect = document.body.getBoundingClientRect();
	      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
	      this._scrollbarWidth = this._getScrollbarWidth();
	    };

	    _proto._setScrollbar = function _setScrollbar() {
	      var _this9 = this;

	      if (this._isBodyOverflowing) {
	        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
	        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
	        // Adjust fixed content padding
	        $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
	          var actualPadding = $$$1(element)[0].style.paddingRight;
	          var calculatedPadding = $$$1(element).css('padding-right');
	          $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
	        }); // Adjust sticky content margin

	        $$$1(Selector.STICKY_CONTENT).each(function (index, element) {
	          var actualMargin = $$$1(element)[0].style.marginRight;
	          var calculatedMargin = $$$1(element).css('margin-right');
	          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
	        }); // Adjust navbar-toggler margin

	        $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
	          var actualMargin = $$$1(element)[0].style.marginRight;
	          var calculatedMargin = $$$1(element).css('margin-right');
	          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
	        }); // Adjust body padding

	        var actualPadding = document.body.style.paddingRight;
	        var calculatedPadding = $$$1('body').css('padding-right');
	        $$$1('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
	      }
	    };

	    _proto._resetScrollbar = function _resetScrollbar() {
	      // Restore fixed content padding
	      $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
	        var padding = $$$1(element).data('padding-right');

	        if (typeof padding !== 'undefined') {
	          $$$1(element).css('padding-right', padding).removeData('padding-right');
	        }
	      }); // Restore sticky content and navbar-toggler margin

	      $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
	        var margin = $$$1(element).data('margin-right');

	        if (typeof margin !== 'undefined') {
	          $$$1(element).css('margin-right', margin).removeData('margin-right');
	        }
	      }); // Restore body padding

	      var padding = $$$1('body').data('padding-right');

	      if (typeof padding !== 'undefined') {
	        $$$1('body').css('padding-right', padding).removeData('padding-right');
	      }
	    };

	    _proto._getScrollbarWidth = function _getScrollbarWidth() {
	      // thx d.walsh
	      var scrollDiv = document.createElement('div');
	      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
	      document.body.appendChild(scrollDiv);
	      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	      return scrollbarWidth;
	    }; // Static


	    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
	      return this.each(function () {
	        var data = $$$1(this).data(DATA_KEY);

	        var _config = _extends({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

	        if (!data) {
	          data = new Modal(this, _config);
	          $$$1(this).data(DATA_KEY, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config](relatedTarget);
	        } else if (_config.show) {
	          data.show(relatedTarget);
	        }
	      });
	    };

	    _createClass(Modal, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default;
	      }
	    }]);
	    return Modal;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    var _this10 = this;

	    var target;
	    var selector = Util.getSelectorFromElement(this);

	    if (selector) {
	      target = $$$1(selector)[0];
	    }

	    var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _extends({}, $$$1(target).data(), $$$1(this).data());

	    if (this.tagName === 'A' || this.tagName === 'AREA') {
	      event.preventDefault();
	    }

	    var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
	      if (showEvent.isDefaultPrevented()) {
	        // Only register focus restorer if modal will actually get shown
	        return;
	      }

	      $target.one(Event.HIDDEN, function () {
	        if ($$$1(_this10).is(':visible')) {
	          _this10.focus();
	        }
	      });
	    });

	    Modal._jQueryInterface.call($$$1(target), config, this);
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $$$1.fn[NAME] = Modal._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Modal;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Modal._jQueryInterface;
	  };

	  return Modal;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): tooltip.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Tooltip = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'tooltip';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.tooltip';
	  var EVENT_KEY = "." + DATA_KEY;
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var TRANSITION_DURATION = 150;
	  var CLASS_PREFIX = 'bs-tooltip';
	  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
	  var DefaultType = {
	    animation: 'boolean',
	    template: 'string',
	    title: '(string|element|function)',
	    trigger: 'string',
	    delay: '(number|object)',
	    html: 'boolean',
	    selector: '(string|boolean)',
	    placement: '(string|function)',
	    offset: '(number|string)',
	    container: '(string|element|boolean)',
	    fallbackPlacement: '(string|array)',
	    boundary: '(string|element)'
	  };
	  var AttachmentMap = {
	    AUTO: 'auto',
	    TOP: 'top',
	    RIGHT: 'right',
	    BOTTOM: 'bottom',
	    LEFT: 'left'
	  };
	  var Default = {
	    animation: true,
	    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    selector: false,
	    placement: 'top',
	    offset: 0,
	    container: false,
	    fallbackPlacement: 'flip',
	    boundary: 'scrollParent'
	  };
	  var HoverState = {
	    SHOW: 'show',
	    OUT: 'out'
	  };
	  var Event = {
	    HIDE: "hide" + EVENT_KEY,
	    HIDDEN: "hidden" + EVENT_KEY,
	    SHOW: "show" + EVENT_KEY,
	    SHOWN: "shown" + EVENT_KEY,
	    INSERTED: "inserted" + EVENT_KEY,
	    CLICK: "click" + EVENT_KEY,
	    FOCUSIN: "focusin" + EVENT_KEY,
	    FOCUSOUT: "focusout" + EVENT_KEY,
	    MOUSEENTER: "mouseenter" + EVENT_KEY,
	    MOUSELEAVE: "mouseleave" + EVENT_KEY
	  };
	  var ClassName = {
	    FADE: 'fade',
	    SHOW: 'show'
	  };
	  var Selector = {
	    TOOLTIP: '.tooltip',
	    TOOLTIP_INNER: '.tooltip-inner',
	    ARROW: '.arrow'
	  };
	  var Trigger = {
	    HOVER: 'hover',
	    FOCUS: 'focus',
	    CLICK: 'click',
	    MANUAL: 'manual'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Tooltip =
	  /*#__PURE__*/
	  function () {
	    function Tooltip(element, config) {
	      /**
	       * Check for Popper dependency
	       * Popper - https://popper.js.org
	       */
	      if (typeof Popper === 'undefined') {
	        throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
	      } // private


	      this._isEnabled = true;
	      this._timeout = 0;
	      this._hoverState = '';
	      this._activeTrigger = {};
	      this._popper = null; // Protected

	      this.element = element;
	      this.config = this._getConfig(config);
	      this.tip = null;

	      this._setListeners();
	    } // Getters


	    var _proto = Tooltip.prototype;

	    // Public
	    _proto.enable = function enable() {
	      this._isEnabled = true;
	    };

	    _proto.disable = function disable() {
	      this._isEnabled = false;
	    };

	    _proto.toggleEnabled = function toggleEnabled() {
	      this._isEnabled = !this._isEnabled;
	    };

	    _proto.toggle = function toggle(event) {
	      if (!this._isEnabled) {
	        return;
	      }

	      if (event) {
	        var dataKey = this.constructor.DATA_KEY;
	        var context = $$$1(event.currentTarget).data(dataKey);

	        if (!context) {
	          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	          $$$1(event.currentTarget).data(dataKey, context);
	        }

	        context._activeTrigger.click = !context._activeTrigger.click;

	        if (context._isWithActiveTrigger()) {
	          context._enter(null, context);
	        } else {
	          context._leave(null, context);
	        }
	      } else {
	        if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
	          this._leave(null, this);

	          return;
	        }

	        this._enter(null, this);
	      }
	    };

	    _proto.dispose = function dispose() {
	      clearTimeout(this._timeout);
	      $$$1.removeData(this.element, this.constructor.DATA_KEY);
	      $$$1(this.element).off(this.constructor.EVENT_KEY);
	      $$$1(this.element).closest('.modal').off('hide.bs.modal');

	      if (this.tip) {
	        $$$1(this.tip).remove();
	      }

	      this._isEnabled = null;
	      this._timeout = null;
	      this._hoverState = null;
	      this._activeTrigger = null;

	      if (this._popper !== null) {
	        this._popper.destroy();
	      }

	      this._popper = null;
	      this.element = null;
	      this.config = null;
	      this.tip = null;
	    };

	    _proto.show = function show() {
	      var _this = this;

	      if ($$$1(this.element).css('display') === 'none') {
	        throw new Error('Please use show on visible elements');
	      }

	      var showEvent = $$$1.Event(this.constructor.Event.SHOW);

	      if (this.isWithContent() && this._isEnabled) {
	        $$$1(this.element).trigger(showEvent);
	        var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

	        if (showEvent.isDefaultPrevented() || !isInTheDom) {
	          return;
	        }

	        var tip = this.getTipElement();
	        var tipId = Util.getUID(this.constructor.NAME);
	        tip.setAttribute('id', tipId);
	        this.element.setAttribute('aria-describedby', tipId);
	        this.setContent();

	        if (this.config.animation) {
	          $$$1(tip).addClass(ClassName.FADE);
	        }

	        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

	        var attachment = this._getAttachment(placement);

	        this.addAttachmentClass(attachment);
	        var container = this.config.container === false ? document.body : $$$1(this.config.container);
	        $$$1(tip).data(this.constructor.DATA_KEY, this);

	        if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
	          $$$1(tip).appendTo(container);
	        }

	        $$$1(this.element).trigger(this.constructor.Event.INSERTED);
	        this._popper = new Popper(this.element, tip, {
	          placement: attachment,
	          modifiers: {
	            offset: {
	              offset: this.config.offset
	            },
	            flip: {
	              behavior: this.config.fallbackPlacement
	            },
	            arrow: {
	              element: Selector.ARROW
	            },
	            preventOverflow: {
	              boundariesElement: this.config.boundary
	            }
	          },
	          onCreate: function onCreate(data) {
	            if (data.originalPlacement !== data.placement) {
	              _this._handlePopperPlacementChange(data);
	            }
	          },
	          onUpdate: function onUpdate(data) {
	            _this._handlePopperPlacementChange(data);
	          }
	        });
	        $$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
	        // empty mouseover listeners to the body's immediate children;
	        // only needed because of broken event delegation on iOS
	        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

	        if ('ontouchstart' in document.documentElement) {
	          $$$1('body').children().on('mouseover', null, $$$1.noop);
	        }

	        var complete = function complete() {
	          if (_this.config.animation) {
	            _this._fixTransition();
	          }

	          var prevHoverState = _this._hoverState;
	          _this._hoverState = null;
	          $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

	          if (prevHoverState === HoverState.OUT) {
	            _this._leave(null, _this);
	          }
	        };

	        if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
	          $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
	        } else {
	          complete();
	        }
	      }
	    };

	    _proto.hide = function hide(callback) {
	      var _this2 = this;

	      var tip = this.getTipElement();
	      var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

	      var complete = function complete() {
	        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
	          tip.parentNode.removeChild(tip);
	        }

	        _this2._cleanTipClass();

	        _this2.element.removeAttribute('aria-describedby');

	        $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

	        if (_this2._popper !== null) {
	          _this2._popper.destroy();
	        }

	        if (callback) {
	          callback();
	        }
	      };

	      $$$1(this.element).trigger(hideEvent);

	      if (hideEvent.isDefaultPrevented()) {
	        return;
	      }

	      $$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
	      // empty mouseover listeners we added for iOS support

	      if ('ontouchstart' in document.documentElement) {
	        $$$1('body').children().off('mouseover', null, $$$1.noop);
	      }

	      this._activeTrigger[Trigger.CLICK] = false;
	      this._activeTrigger[Trigger.FOCUS] = false;
	      this._activeTrigger[Trigger.HOVER] = false;

	      if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
	        $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	      } else {
	        complete();
	      }

	      this._hoverState = '';
	    };

	    _proto.update = function update() {
	      if (this._popper !== null) {
	        this._popper.scheduleUpdate();
	      }
	    }; // Protected


	    _proto.isWithContent = function isWithContent() {
	      return Boolean(this.getTitle());
	    };

	    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
	      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
	    };

	    _proto.getTipElement = function getTipElement() {
	      this.tip = this.tip || $$$1(this.config.template)[0];
	      return this.tip;
	    };

	    _proto.setContent = function setContent() {
	      var $tip = $$$1(this.getTipElement());
	      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
	      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
	    };

	    _proto.setElementContent = function setElementContent($element, content) {
	      var html = this.config.html;

	      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
	        // Content is a DOM node or a jQuery
	        if (html) {
	          if (!$$$1(content).parent().is($element)) {
	            $element.empty().append(content);
	          }
	        } else {
	          $element.text($$$1(content).text());
	        }
	      } else {
	        $element[html ? 'html' : 'text'](content);
	      }
	    };

	    _proto.getTitle = function getTitle() {
	      var title = this.element.getAttribute('data-original-title');

	      if (!title) {
	        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
	      }

	      return title;
	    }; // Private


	    _proto._getAttachment = function _getAttachment(placement) {
	      return AttachmentMap[placement.toUpperCase()];
	    };

	    _proto._setListeners = function _setListeners() {
	      var _this3 = this;

	      var triggers = this.config.trigger.split(' ');
	      triggers.forEach(function (trigger) {
	        if (trigger === 'click') {
	          $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
	            return _this3.toggle(event);
	          });
	        } else if (trigger !== Trigger.MANUAL) {
	          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
	          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
	          $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
	            return _this3._enter(event);
	          }).on(eventOut, _this3.config.selector, function (event) {
	            return _this3._leave(event);
	          });
	        }

	        $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
	          return _this3.hide();
	        });
	      });

	      if (this.config.selector) {
	        this.config = _extends({}, this.config, {
	          trigger: 'manual',
	          selector: ''
	        });
	      } else {
	        this._fixTitle();
	      }
	    };

	    _proto._fixTitle = function _fixTitle() {
	      var titleType = typeof this.element.getAttribute('data-original-title');

	      if (this.element.getAttribute('title') || titleType !== 'string') {
	        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
	        this.element.setAttribute('title', '');
	      }
	    };

	    _proto._enter = function _enter(event, context) {
	      var dataKey = this.constructor.DATA_KEY;
	      context = context || $$$1(event.currentTarget).data(dataKey);

	      if (!context) {
	        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	        $$$1(event.currentTarget).data(dataKey, context);
	      }

	      if (event) {
	        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
	      }

	      if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
	        context._hoverState = HoverState.SHOW;
	        return;
	      }

	      clearTimeout(context._timeout);
	      context._hoverState = HoverState.SHOW;

	      if (!context.config.delay || !context.config.delay.show) {
	        context.show();
	        return;
	      }

	      context._timeout = setTimeout(function () {
	        if (context._hoverState === HoverState.SHOW) {
	          context.show();
	        }
	      }, context.config.delay.show);
	    };

	    _proto._leave = function _leave(event, context) {
	      var dataKey = this.constructor.DATA_KEY;
	      context = context || $$$1(event.currentTarget).data(dataKey);

	      if (!context) {
	        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	        $$$1(event.currentTarget).data(dataKey, context);
	      }

	      if (event) {
	        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
	      }

	      if (context._isWithActiveTrigger()) {
	        return;
	      }

	      clearTimeout(context._timeout);
	      context._hoverState = HoverState.OUT;

	      if (!context.config.delay || !context.config.delay.hide) {
	        context.hide();
	        return;
	      }

	      context._timeout = setTimeout(function () {
	        if (context._hoverState === HoverState.OUT) {
	          context.hide();
	        }
	      }, context.config.delay.hide);
	    };

	    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
	      for (var trigger in this._activeTrigger) {
	        if (this._activeTrigger[trigger]) {
	          return true;
	        }
	      }

	      return false;
	    };

	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, this.constructor.Default, $$$1(this.element).data(), config);

	      if (typeof config.delay === 'number') {
	        config.delay = {
	          show: config.delay,
	          hide: config.delay
	        };
	      }

	      if (typeof config.title === 'number') {
	        config.title = config.title.toString();
	      }

	      if (typeof config.content === 'number') {
	        config.content = config.content.toString();
	      }

	      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
	      return config;
	    };

	    _proto._getDelegateConfig = function _getDelegateConfig() {
	      var config = {};

	      if (this.config) {
	        for (var key in this.config) {
	          if (this.constructor.Default[key] !== this.config[key]) {
	            config[key] = this.config[key];
	          }
	        }
	      }

	      return config;
	    };

	    _proto._cleanTipClass = function _cleanTipClass() {
	      var $tip = $$$1(this.getTipElement());
	      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

	      if (tabClass !== null && tabClass.length > 0) {
	        $tip.removeClass(tabClass.join(''));
	      }
	    };

	    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
	      this._cleanTipClass();

	      this.addAttachmentClass(this._getAttachment(data.placement));
	    };

	    _proto._fixTransition = function _fixTransition() {
	      var tip = this.getTipElement();
	      var initConfigAnimation = this.config.animation;

	      if (tip.getAttribute('x-placement') !== null) {
	        return;
	      }

	      $$$1(tip).removeClass(ClassName.FADE);
	      this.config.animation = false;
	      this.hide();
	      this.show();
	      this.config.animation = initConfigAnimation;
	    }; // Static


	    Tooltip._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $$$1(this).data(DATA_KEY);

	        var _config = typeof config === 'object' && config;

	        if (!data && /dispose|hide/.test(config)) {
	          return;
	        }

	        if (!data) {
	          data = new Tooltip(this, _config);
	          $$$1(this).data(DATA_KEY, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(Tooltip, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default;
	      }
	    }, {
	      key: "NAME",
	      get: function get() {
	        return NAME;
	      }
	    }, {
	      key: "DATA_KEY",
	      get: function get() {
	        return DATA_KEY;
	      }
	    }, {
	      key: "Event",
	      get: function get() {
	        return Event;
	      }
	    }, {
	      key: "EVENT_KEY",
	      get: function get() {
	        return EVENT_KEY;
	      }
	    }, {
	      key: "DefaultType",
	      get: function get() {
	        return DefaultType;
	      }
	    }]);
	    return Tooltip;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */


	  $$$1.fn[NAME] = Tooltip._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Tooltip;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Tooltip._jQueryInterface;
	  };

	  return Tooltip;
	}($, Popper);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): popover.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Popover = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'popover';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.popover';
	  var EVENT_KEY = "." + DATA_KEY;
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var CLASS_PREFIX = 'bs-popover';
	  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
	  var Default = _extends({}, Tooltip.Default, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
	  });
	  var DefaultType = _extends({}, Tooltip.DefaultType, {
	    content: '(string|element|function)'
	  });
	  var ClassName = {
	    FADE: 'fade',
	    SHOW: 'show'
	  };
	  var Selector = {
	    TITLE: '.popover-header',
	    CONTENT: '.popover-body'
	  };
	  var Event = {
	    HIDE: "hide" + EVENT_KEY,
	    HIDDEN: "hidden" + EVENT_KEY,
	    SHOW: "show" + EVENT_KEY,
	    SHOWN: "shown" + EVENT_KEY,
	    INSERTED: "inserted" + EVENT_KEY,
	    CLICK: "click" + EVENT_KEY,
	    FOCUSIN: "focusin" + EVENT_KEY,
	    FOCUSOUT: "focusout" + EVENT_KEY,
	    MOUSEENTER: "mouseenter" + EVENT_KEY,
	    MOUSELEAVE: "mouseleave" + EVENT_KEY
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Popover =
	  /*#__PURE__*/
	  function (_Tooltip) {
	    _inheritsLoose(Popover, _Tooltip);

	    function Popover() {
	      return _Tooltip.apply(this, arguments) || this;
	    }

	    var _proto = Popover.prototype;

	    // Overrides
	    _proto.isWithContent = function isWithContent() {
	      return this.getTitle() || this._getContent();
	    };

	    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
	      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
	    };

	    _proto.getTipElement = function getTipElement() {
	      this.tip = this.tip || $$$1(this.config.template)[0];
	      return this.tip;
	    };

	    _proto.setContent = function setContent() {
	      var $tip = $$$1(this.getTipElement()); // We use append for html objects to maintain js events

	      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

	      var content = this._getContent();

	      if (typeof content === 'function') {
	        content = content.call(this.element);
	      }

	      this.setElementContent($tip.find(Selector.CONTENT), content);
	      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
	    }; // Private


	    _proto._getContent = function _getContent() {
	      return this.element.getAttribute('data-content') || this.config.content;
	    };

	    _proto._cleanTipClass = function _cleanTipClass() {
	      var $tip = $$$1(this.getTipElement());
	      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

	      if (tabClass !== null && tabClass.length > 0) {
	        $tip.removeClass(tabClass.join(''));
	      }
	    }; // Static


	    Popover._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $$$1(this).data(DATA_KEY);

	        var _config = typeof config === 'object' ? config : null;

	        if (!data && /destroy|hide/.test(config)) {
	          return;
	        }

	        if (!data) {
	          data = new Popover(this, _config);
	          $$$1(this).data(DATA_KEY, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(Popover, null, [{
	      key: "VERSION",
	      // Getters
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default;
	      }
	    }, {
	      key: "NAME",
	      get: function get() {
	        return NAME;
	      }
	    }, {
	      key: "DATA_KEY",
	      get: function get() {
	        return DATA_KEY;
	      }
	    }, {
	      key: "Event",
	      get: function get() {
	        return Event;
	      }
	    }, {
	      key: "EVENT_KEY",
	      get: function get() {
	        return EVENT_KEY;
	      }
	    }, {
	      key: "DefaultType",
	      get: function get() {
	        return DefaultType;
	      }
	    }]);
	    return Popover;
	  }(Tooltip);
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */


	  $$$1.fn[NAME] = Popover._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Popover;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Popover._jQueryInterface;
	  };

	  return Popover;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): scrollspy.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var ScrollSpy = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'scrollspy';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.scrollspy';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var Default = {
	    offset: 10,
	    method: 'auto',
	    target: ''
	  };
	  var DefaultType = {
	    offset: 'number',
	    method: 'string',
	    target: '(string|element)'
	  };
	  var Event = {
	    ACTIVATE: "activate" + EVENT_KEY,
	    SCROLL: "scroll" + EVENT_KEY,
	    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    DROPDOWN_ITEM: 'dropdown-item',
	    DROPDOWN_MENU: 'dropdown-menu',
	    ACTIVE: 'active'
	  };
	  var Selector = {
	    DATA_SPY: '[data-spy="scroll"]',
	    ACTIVE: '.active',
	    NAV_LIST_GROUP: '.nav, .list-group',
	    NAV_LINKS: '.nav-link',
	    NAV_ITEMS: '.nav-item',
	    LIST_ITEMS: '.list-group-item',
	    DROPDOWN: '.dropdown',
	    DROPDOWN_ITEMS: '.dropdown-item',
	    DROPDOWN_TOGGLE: '.dropdown-toggle'
	  };
	  var OffsetMethod = {
	    OFFSET: 'offset',
	    POSITION: 'position'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var ScrollSpy =
	  /*#__PURE__*/
	  function () {
	    function ScrollSpy(element, config) {
	      var _this = this;

	      this._element = element;
	      this._scrollElement = element.tagName === 'BODY' ? window : element;
	      this._config = this._getConfig(config);
	      this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
	      this._offsets = [];
	      this._targets = [];
	      this._activeTarget = null;
	      this._scrollHeight = 0;
	      $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
	        return _this._process(event);
	      });
	      this.refresh();

	      this._process();
	    } // Getters


	    var _proto = ScrollSpy.prototype;

	    // Public
	    _proto.refresh = function refresh() {
	      var _this2 = this;

	      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
	      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
	      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
	      this._offsets = [];
	      this._targets = [];
	      this._scrollHeight = this._getScrollHeight();
	      var targets = $$$1.makeArray($$$1(this._selector));
	      targets.map(function (element) {
	        var target;
	        var targetSelector = Util.getSelectorFromElement(element);

	        if (targetSelector) {
	          target = $$$1(targetSelector)[0];
	        }

	        if (target) {
	          var targetBCR = target.getBoundingClientRect();

	          if (targetBCR.width || targetBCR.height) {
	            // TODO (fat): remove sketch reliance on jQuery position/offset
	            return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
	          }
	        }

	        return null;
	      }).filter(function (item) {
	        return item;
	      }).sort(function (a, b) {
	        return a[0] - b[0];
	      }).forEach(function (item) {
	        _this2._offsets.push(item[0]);

	        _this2._targets.push(item[1]);
	      });
	    };

	    _proto.dispose = function dispose() {
	      $$$1.removeData(this._element, DATA_KEY);
	      $$$1(this._scrollElement).off(EVENT_KEY);
	      this._element = null;
	      this._scrollElement = null;
	      this._config = null;
	      this._selector = null;
	      this._offsets = null;
	      this._targets = null;
	      this._activeTarget = null;
	      this._scrollHeight = null;
	    }; // Private


	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default, config);

	      if (typeof config.target !== 'string') {
	        var id = $$$1(config.target).attr('id');

	        if (!id) {
	          id = Util.getUID(NAME);
	          $$$1(config.target).attr('id', id);
	        }

	        config.target = "#" + id;
	      }

	      Util.typeCheckConfig(NAME, config, DefaultType);
	      return config;
	    };

	    _proto._getScrollTop = function _getScrollTop() {
	      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
	    };

	    _proto._getScrollHeight = function _getScrollHeight() {
	      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	    };

	    _proto._getOffsetHeight = function _getOffsetHeight() {
	      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
	    };

	    _proto._process = function _process() {
	      var scrollTop = this._getScrollTop() + this._config.offset;

	      var scrollHeight = this._getScrollHeight();

	      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

	      if (this._scrollHeight !== scrollHeight) {
	        this.refresh();
	      }

	      if (scrollTop >= maxScroll) {
	        var target = this._targets[this._targets.length - 1];

	        if (this._activeTarget !== target) {
	          this._activate(target);
	        }

	        return;
	      }

	      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
	        this._activeTarget = null;

	        this._clear();

	        return;
	      }

	      for (var i = this._offsets.length; i--;) {
	        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

	        if (isActiveTarget) {
	          this._activate(this._targets[i]);
	        }
	      }
	    };

	    _proto._activate = function _activate(target) {
	      this._activeTarget = target;

	      this._clear();

	      var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


	      queries = queries.map(function (selector) {
	        return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
	      });
	      var $link = $$$1(queries.join(','));

	      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
	        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
	        $link.addClass(ClassName.ACTIVE);
	      } else {
	        // Set triggered link as active
	        $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
	        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

	        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

	        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
	      }

	      $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
	        relatedTarget: target
	      });
	    };

	    _proto._clear = function _clear() {
	      $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
	    }; // Static


	    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $$$1(this).data(DATA_KEY);

	        var _config = typeof config === 'object' && config;

	        if (!data) {
	          data = new ScrollSpy(this, _config);
	          $$$1(this).data(DATA_KEY, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(ScrollSpy, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default;
	      }
	    }]);
	    return ScrollSpy;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $$$1(window).on(Event.LOAD_DATA_API, function () {
	    var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));

	    for (var i = scrollSpys.length; i--;) {
	      var $spy = $$$1(scrollSpys[i]);

	      ScrollSpy._jQueryInterface.call($spy, $spy.data());
	    }
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
	  $$$1.fn[NAME].Constructor = ScrollSpy;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return ScrollSpy._jQueryInterface;
	  };

	  return ScrollSpy;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): tab.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Tab = function ($$$1) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'tab';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.tab';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
	  var TRANSITION_DURATION = 150;
	  var Event = {
	    HIDE: "hide" + EVENT_KEY,
	    HIDDEN: "hidden" + EVENT_KEY,
	    SHOW: "show" + EVENT_KEY,
	    SHOWN: "shown" + EVENT_KEY,
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    DROPDOWN_MENU: 'dropdown-menu',
	    ACTIVE: 'active',
	    DISABLED: 'disabled',
	    FADE: 'fade',
	    SHOW: 'show'
	  };
	  var Selector = {
	    DROPDOWN: '.dropdown',
	    NAV_LIST_GROUP: '.nav, .list-group',
	    ACTIVE: '.active',
	    ACTIVE_UL: '> li > .active',
	    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
	    DROPDOWN_TOGGLE: '.dropdown-toggle',
	    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	  };

	  var Tab =
	  /*#__PURE__*/
	  function () {
	    function Tab(element) {
	      this._element = element;
	    } // Getters


	    var _proto = Tab.prototype;

	    // Public
	    _proto.show = function show() {
	      var _this = this;

	      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
	        return;
	      }

	      var target;
	      var previous;
	      var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
	      var selector = Util.getSelectorFromElement(this._element);

	      if (listElement) {
	        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
	        previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
	        previous = previous[previous.length - 1];
	      }

	      var hideEvent = $$$1.Event(Event.HIDE, {
	        relatedTarget: this._element
	      });
	      var showEvent = $$$1.Event(Event.SHOW, {
	        relatedTarget: previous
	      });

	      if (previous) {
	        $$$1(previous).trigger(hideEvent);
	      }

	      $$$1(this._element).trigger(showEvent);

	      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
	        return;
	      }

	      if (selector) {
	        target = $$$1(selector)[0];
	      }

	      this._activate(this._element, listElement);

	      var complete = function complete() {
	        var hiddenEvent = $$$1.Event(Event.HIDDEN, {
	          relatedTarget: _this._element
	        });
	        var shownEvent = $$$1.Event(Event.SHOWN, {
	          relatedTarget: previous
	        });
	        $$$1(previous).trigger(hiddenEvent);
	        $$$1(_this._element).trigger(shownEvent);
	      };

	      if (target) {
	        this._activate(target, target.parentNode, complete);
	      } else {
	        complete();
	      }
	    };

	    _proto.dispose = function dispose() {
	      $$$1.removeData(this._element, DATA_KEY);
	      this._element = null;
	    }; // Private


	    _proto._activate = function _activate(element, container, callback) {
	      var _this2 = this;

	      var activeElements;

	      if (container.nodeName === 'UL') {
	        activeElements = $$$1(container).find(Selector.ACTIVE_UL);
	      } else {
	        activeElements = $$$1(container).children(Selector.ACTIVE);
	      }

	      var active = activeElements[0];
	      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $$$1(active).hasClass(ClassName.FADE);

	      var complete = function complete() {
	        return _this2._transitionComplete(element, active, callback);
	      };

	      if (active && isTransitioning) {
	        $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	      } else {
	        complete();
	      }
	    };

	    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
	      if (active) {
	        $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
	        var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

	        if (dropdownChild) {
	          $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
	        }

	        if (active.getAttribute('role') === 'tab') {
	          active.setAttribute('aria-selected', false);
	        }
	      }

	      $$$1(element).addClass(ClassName.ACTIVE);

	      if (element.getAttribute('role') === 'tab') {
	        element.setAttribute('aria-selected', true);
	      }

	      Util.reflow(element);
	      $$$1(element).addClass(ClassName.SHOW);

	      if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
	        var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

	        if (dropdownElement) {
	          $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
	        }

	        element.setAttribute('aria-expanded', true);
	      }

	      if (callback) {
	        callback();
	      }
	    }; // Static


	    Tab._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $this = $$$1(this);
	        var data = $this.data(DATA_KEY);

	        if (!data) {
	          data = new Tab(this);
	          $this.data(DATA_KEY, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(Tab, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }]);
	    return Tab;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    event.preventDefault();

	    Tab._jQueryInterface.call($$$1(this), 'show');
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $$$1.fn[NAME] = Tab._jQueryInterface;
	  $$$1.fn[NAME].Constructor = Tab;

	  $$$1.fn[NAME].noConflict = function () {
	    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Tab._jQueryInterface;
	  };

	  return Tab;
	}($);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.6): index.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	(function ($$$1) {
	  if (typeof $$$1 === 'undefined') {
	    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
	  }

	  var version = $$$1.fn.jquery.split(' ')[0].split('.');
	  var minMajor = 1;
	  var ltMajor = 2;
	  var minMinor = 9;
	  var minPatch = 1;
	  var maxMajor = 4;

	  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
	    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
	  }
	})($);

	exports.Util = Util;
	exports.Alert = Alert;
	exports.Button = Button;
	exports.Carousel = Carousel;
	exports.Collapse = Collapse;
	exports.Dropdown = Dropdown;
	exports.Modal = Modal;
	exports.Popover = Popover;
	exports.Scrollspy = ScrollSpy;
	exports.Tab = Tab;
	exports.Tooltip = Tooltip;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));
	//# sourceMappingURL=bootstrap.js.map


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*! waitForImages jQuery Plugin 2013-07-20 */
	!function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"]},a.expr[":"].uncached=function(b){if(!a(b).is('img[src!=""]'))return!1;var c=new Image;return c.src=b.src,!c.complete},a.fn.waitForImages=function(c,d,e){var f=0,g=0;if(a.isPlainObject(arguments[0])&&(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var h=a(this),i=[],j=a.waitForImages.hasImageProperties||[],k=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?h.find("*").addBack().each(function(){var b=a(this);b.is("img:uncached")&&i.push({src:b.attr("src"),element:b[0]}),a.each(j,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=k.exec(e);)i.push({src:d[2],element:b[0]})})}):h.find("img:uncached").each(function(){i.push({src:this.src,element:this})}),f=i.length,g=0,0===f&&c.call(h[0]),a.each(i,function(e,i){var j=new Image;a(j).on("load."+b+" error."+b,function(a){return g++,d.call(i.element,g,f,"load"==a.type),g==f?(c.call(h[0]),!1):void 0}),j.src=i.src})})}}(jQuery);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*
	 * CSS3 Animate it
	 * Copyright (c) 2014 Jack McCourt
	 * https://github.com/kriegar/css3-animate-it
	 * Version: 0.1.0
	 *
	 * I utilise the jQuery.appear plugin within this javascript file so here is a link to that too
	 * https://github.com/morr/jquery.appear
	 *
	 * I also utilise the jQuery.doTimeout plugin for the data-sequence functionality so here is a link back to them.
	 * http://benalman.com/projects/jquery-dotimeout-plugin/
	 */
	(function ($) {
	    var selectors = [];

	    var check_binded = false;
	    var check_lock = false;
	    var defaults = {
	        interval: 250,
	        force_process: false
	    };
	    var $window = $(window);

	    var $prior_appeared;

	    function process() {
	        check_lock = false;
	        for (var index = 0; index < selectors.length; index++) {
	            var $appeared = $(selectors[index]).filter(function () {
	                return $(this).is(':appeared');
	            });

	            $appeared.trigger('appear', [$appeared]);

	            if ($prior_appeared) {

	                var $disappeared = $prior_appeared.not($appeared);
	                $disappeared.trigger('disappear', [$disappeared]);
	            }
	            $prior_appeared = $appeared;
	        }
	    }

	    // "appeared" custom filter
	    $.expr[':']['appeared'] = function (element) {
	        var $element = $(element);
	        if (!$element.is(':visible')) {
	            return false;
	        }

	        var window_left = $window.scrollLeft();
	        var window_top = $window.scrollTop();
	        var offset = $element.offset();
	        var left = offset.left;
	        var top = offset.top;

	        if (top + $element.height() >= window_top &&
	            top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
	            left + $element.width() >= window_left &&
	            left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
	            return true;
	        } else {
	            return false;
	        }
	    };

	    $.fn.extend({
	        // watching for element's appearance in browser viewport
	        appear: function (options) {
	            var opts = $.extend({}, defaults, options || {});
	            var selector = this.selector || this;
	            if (!check_binded) {
	                var on_check = function () {
	                    if (check_lock) {
	                        return;
	                    }
	                    check_lock = true;

	                    setTimeout(process, opts.interval);
	                };

	                $(window).scroll(on_check).resize(on_check);
	                check_binded = true;
	            }

	            if (opts.force_process) {
	                setTimeout(process, opts.interval);
	            }
	            selectors.push(selector);
	            return $(selector);
	        }
	    });

	    $.extend({
	        // force elements's appearance check
	        force_appear: function () {
	            if (check_binded) {
	                process();
	                return true;
	            }
	            return false;
	        }
	    });
	})(jQuery);


	/*!
	 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
	 * http://benalman.com/projects/jquery-dotimeout-plugin/
	 *
	 * Copyright (c) 2010 "Cowboy" Ben Alman
	 * Dual licensed under the MIT and GPL licenses.
	 * http://benalman.com/about/license/
	 */

	// Script: jQuery doTimeout: Like setTimeout, but better!
	//
	// *Version: 1.0, Last updated: 3/3/2010*
	//
	// Project Home - http://benalman.com/projects/jquery-dotimeout-plugin/
	// GitHub       - http://github.com/cowboy/jquery-dotimeout/
	// Source       - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.js
	// (Minified)   - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.min.js (1.0kb)
	//
	// About: License
	//
	// Copyright (c) 2010 "Cowboy" Ben Alman,
	// Dual licensed under the MIT and GPL licenses.
	// http://benalman.com/about/license/
	//
	// About: Examples
	//
	// These working examples, complete with fully commented code, illustrate a few
	// ways in which this plugin can be used.
	//
	// Debouncing      - http://benalman.com/code/projects/jquery-dotimeout/examples/debouncing/
	// Delays, Polling - http://benalman.com/code/projects/jquery-dotimeout/examples/delay-poll/
	// Hover Intent    - http://benalman.com/code/projects/jquery-dotimeout/examples/hoverintent/
	//
	// About: Support and Testing
	//
	// Information about what version or versions of jQuery this plugin has been
	// tested with, what browsers it has been tested in, and where the unit tests
	// reside (so you can test it yourself).
	//
	// jQuery Versions - 1.3.2, 1.4.2
	// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
	// Unit Tests      - http://benalman.com/code/projects/jquery-dotimeout/unit/
	//
	// About: Release History
	//
	// 1.0 - (3/3/2010) Callback can now be a string, in which case it will call
	//       the appropriate $.method or $.fn.method, depending on where .doTimeout
	//       was called. Callback must now return `true` (not just a truthy value)
	//       to poll.
	// 0.4 - (7/15/2009) Made the "id" argument optional, some other minor tweaks
	// 0.3 - (6/25/2009) Initial release

	(function ($) {
	    '$:nomunge'; // Used by YUI compressor.

	    var cache = {},

	        // Reused internal string.
	        doTimeout = 'doTimeout',

	        // A convenient shortcut.
	        aps = Array.prototype.slice;

	    // Method: jQuery.doTimeout
	    //
	    // Initialize, cancel, or force execution of a callback after a delay.
	    //
	    // If delay and callback are specified, a doTimeout is initialized. The
	    // callback will execute, asynchronously, after the delay. If an id is
	    // specified, this doTimeout will override and cancel any existing doTimeout
	    // with the same id. Any additional arguments will be passed into callback
	    // when it is executed.
	    //
	    // If the callback returns true, the doTimeout loop will execute again, after
	    // the delay, creating a polling loop until the callback returns a non-true
	    // value.
	    //
	    // Note that if an id is not passed as the first argument, this doTimeout will
	    // NOT be able to be manually canceled or forced. (for debouncing, be sure to
	    // specify an id).
	    //
	    // If id is specified, but delay and callback are not, the doTimeout will be
	    // canceled without executing the callback. If force_mode is specified, the
	    // callback will be executed, synchronously, but will only be allowed to
	    // continue a polling loop if force_mode is true (provided the callback
	    // returns true, of course). If force_mode is false, no polling loop will
	    // continue, even if the callback returns true.
	    //
	    // Usage:
	    //
	    // > jQuery.doTimeout( [ id, ] delay, callback [, arg ... ] );
	    // > jQuery.doTimeout( id [, force_mode ] );
	    //
	    // Arguments:
	    //
	    //  id - (String) An optional unique identifier for this doTimeout. If id is
	    //    not specified, the doTimeout will NOT be able to be manually canceled or
	    //    forced.
	    //  delay - (Number) A zero-or-greater delay in milliseconds after which
	    //    callback will be executed.
	    //  callback - (Function) A function to be executed after delay milliseconds.
	    //  callback - (String) A jQuery method to be executed after delay
	    //    milliseconds. This method will only poll if it explicitly returns
	    //    true.
	    //  force_mode - (Boolean) If true, execute that id's doTimeout callback
	    //    immediately and synchronously, continuing any callback return-true
	    //    polling loop. If false, execute the callback immediately and
	    //    synchronously but do NOT continue a callback return-true polling loop.
	    //    If omitted, cancel that id's doTimeout.
	    //
	    // Returns:
	    //
	    //  If force_mode is true, false or undefined and there is a
	    //  yet-to-be-executed callback to cancel, true is returned, but if no
	    //  callback remains to be executed, undefined is returned.

	    $[doTimeout] = function () {
	        return p_doTimeout.apply(window, [0].concat(aps.call(arguments)));
	    };

	    // Method: jQuery.fn.doTimeout
	    //
	    // Initialize, cancel, or force execution of a callback after a delay.
	    // Operates like <jQuery.doTimeout>, but the passed callback executes in the
	    // context of the jQuery collection of elements, and the id is stored as data
	    // on the first element in that collection.
	    //
	    // If delay and callback are specified, a doTimeout is initialized. The
	    // callback will execute, asynchronously, after the delay. If an id is
	    // specified, this doTimeout will override and cancel any existing doTimeout
	    // with the same id. Any additional arguments will be passed into callback
	    // when it is executed.
	    //
	    // If the callback returns true, the doTimeout loop will execute again, after
	    // the delay, creating a polling loop until the callback returns a non-true
	    // value.
	    //
	    // Note that if an id is not passed as the first argument, this doTimeout will
	    // NOT be able to be manually canceled or forced (for debouncing, be sure to
	    // specify an id).
	    //
	    // If id is specified, but delay and callback are not, the doTimeout will be
	    // canceled without executing the callback. If force_mode is specified, the
	    // callback will be executed, synchronously, but will only be allowed to
	    // continue a polling loop if force_mode is true (provided the callback
	    // returns true, of course). If force_mode is false, no polling loop will
	    // continue, even if the callback returns true.
	    //
	    // Usage:
	    //
	    // > jQuery('selector').doTimeout( [ id, ] delay, callback [, arg ... ] );
	    // > jQuery('selector').doTimeout( id [, force_mode ] );
	    //
	    // Arguments:
	    //
	    //  id - (String) An optional unique identifier for this doTimeout, stored as
	    //    jQuery data on the element. If id is not specified, the doTimeout will
	    //    NOT be able to be manually canceled or forced.
	    //  delay - (Number) A zero-or-greater delay in milliseconds after which
	    //    callback will be executed.
	    //  callback - (Function) A function to be executed after delay milliseconds.
	    //  callback - (String) A jQuery.fn method to be executed after delay
	    //    milliseconds. This method will only poll if it explicitly returns
	    //    true (most jQuery.fn methods return a jQuery object, and not `true`,
	    //    which allows them to be chained and prevents polling).
	    //  force_mode - (Boolean) If true, execute that id's doTimeout callback
	    //    immediately and synchronously, continuing any callback return-true
	    //    polling loop. If false, execute the callback immediately and
	    //    synchronously but do NOT continue a callback return-true polling loop.
	    //    If omitted, cancel that id's doTimeout.
	    //
	    // Returns:
	    //
	    //  When creating a <jQuery.fn.doTimeout>, the initial jQuery collection of
	    //  elements is returned. Otherwise, if force_mode is true, false or undefined
	    //  and there is a yet-to-be-executed callback to cancel, true is returned,
	    //  but if no callback remains to be executed, undefined is returned.

	    $.fn[doTimeout] = function () {
	        var args = aps.call(arguments),
	            result = p_doTimeout.apply(this, [doTimeout + args[0]].concat(args));

	        return typeof args[0] === 'number' || typeof args[1] === 'number' ?
	            this :
	            result;
	    };

	    function p_doTimeout(jquery_data_key) {
	        var that = this,
	            elem,
	            data = {},

	            // Allows the plugin to call a string callback method.
	            method_base = jquery_data_key ? $.fn : $,

	            // Any additional arguments will be passed to the callback.
	            args = arguments,
	            slice_args = 4,

	            id = args[1],
	            delay = args[2],
	            callback = args[3];

	        if (typeof id !== 'string') {
	            slice_args--;

	            id = jquery_data_key = 0;
	            delay = args[1];
	            callback = args[2];
	        }

	        // If id is passed, store a data reference either as .data on the first
	        // element in a jQuery collection, or in the internal cache.
	        if (jquery_data_key) { // Note: key is 'doTimeout' + id

	            // Get id-object from the first element's data, otherwise initialize it to {}.
	            elem = that.eq(0);
	            elem.data(jquery_data_key, data = elem.data(jquery_data_key) || {});

	        } else if (id) {
	            // Get id-object from the cache, otherwise initialize it to {}.
	            data = cache[id] || (cache[id] = {});
	        }

	        // Clear any existing timeout for this id.
	        data.id && clearTimeout(data.id);
	        delete data.id;

	        // Clean up when necessary.
	        function cleanup() {
	            if (jquery_data_key) {
	                elem.removeData(jquery_data_key);
	            } else if (id) {
	                delete cache[id];
	            }
	        }
	        // Yes, there actually is a setTimeout call in here!
	        function actually_setTimeout() {
	            data.id = setTimeout(function () {
	                data.fn();
	            }, delay);
	        }
	        if (callback) {
	            // A callback (and delay) were specified. Store the callback reference for
	            // possible later use, and then setTimeout.
	            data.fn = function (no_polling_loop) {

	                // If the callback value is a string, it is assumed to be the name of a
	                // method on $ or $.fn depending on where doTimeout was executed.
	                if (typeof callback === 'string') {
	                    callback = method_base[callback];
	                }

	                callback.apply(that, aps.call(args, slice_args)) === true && !no_polling_loop

	                    // Since the callback returned true, and we're not specifically
	                    // canceling a polling loop, do it again!
	                    ?
	                    actually_setTimeout()

	                    // Otherwise, clean up and quit.
	                    : cleanup();
	            };

	            // Set that timeout!
	            actually_setTimeout();

	        } else if (data.fn) {
	            // No callback passed. If force_mode (delay) is true, execute the data.fn
	            // callback immediately, continuing any callback return-true polling loop.
	            // If force_mode is false, execute the data.fn callback immediately but do
	            // NOT continue a callback return-true polling loop. If force_mode is
	            // undefined, simply clean up. Since data.fn was still defined, whatever
	            // was supposed to happen hadn't yet, so return true.
	            delay === undefined ? cleanup() : data.fn(delay === false);
	            return true;

	        } else {
	            // Since no callback was passed, and data.fn isn't defined, it looks like
	            // whatever was supposed to happen already did. Clean up and quit!
	            cleanup();
	        }

	    }
	})(jQuery);


	//CSS3 Animate-it
	$('.animatedParent').appear();
	$('.animatedClick').click(function () {
	    var target = $(this).attr('data-target');


	    if ($(this).attr('data-sequence') != undefined) {
	        var firstId = $("." + target + ":first").attr('data-id');
	        var lastId = $("." + target + ":last").attr('data-id');
	        var number = firstId;

	        //Add or remove the class
	        if ($("." + target + "[data-id=" + number + "]").hasClass('go')) {
	            $("." + target + "[data-id=" + number + "]").addClass('goAway');
	            $("." + target + "[data-id=" + number + "]").removeClass('go');
	        } else {
	            $("." + target + "[data-id=" + number + "]").addClass('go');
	            $("." + target + "[data-id=" + number + "]").removeClass('goAway');
	        }
	        number++;
	        delay = Number($(this).attr('data-sequence'));
	        $.doTimeout(delay, function () {
	            console.log(lastId);

	            //Add or remove the class
	            if ($("." + target + "[data-id=" + number + "]").hasClass('go')) {
	                $("." + target + "[data-id=" + number + "]").addClass('goAway');
	                $("." + target + "[data-id=" + number + "]").removeClass('go');
	            } else {
	                $("." + target + "[data-id=" + number + "]").addClass('go');
	                $("." + target + "[data-id=" + number + "]").removeClass('goAway');
	            }

	            //increment
	            ++number;

	            //continute looping till reached last ID
	            if (number <= lastId) {
	                return true;
	            }
	        });
	    } else {
	        if ($('.' + target).hasClass('go')) {
	            $('.' + target).addClass('goAway');
	            $('.' + target).removeClass('go');
	        } else {
	            $('.' + target).addClass('go');
	            $('.' + target).removeClass('goAway');
	        }
	    }
	});

	$(document.body).on('appear', '.animatedParent', function (e, $affected) {
	    var ele = $(this).find('.animated');
	    var parent = $(this);


	    if (parent.attr('data-sequence') != undefined) {

	        var firstId = $(this).find('.animated:first').attr('data-id');
	        var number = firstId;
	        var lastId = $(this).find('.animated:last').attr('data-id');

	        $(parent).find(".animated[data-id=" + number + "]").addClass('go');
	        number++;
	        delay = Number(parent.attr('data-sequence'));

	        $.doTimeout(delay, function () {
	            $(parent).find(".animated[data-id=" + number + "]").addClass('go');
	            ++number;
	            if (number <= lastId) {
	                return true;
	            }
	        });
	    } else {
	        ele.addClass('go');
	    }

	});

	$(document.body).on('disappear', '.animatedParent', function (e, $affected) {
	    if (!$(this).hasClass('animateOnce')) {
	        $(this).find('.animated').removeClass('go');
	    }
	});

	$(window).on('load', function () {
	    $.force_appear();
	});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(12);

	jQuery(function ($) {
	    "use strict";
	    var xv_ww = $(window).width(),
	        xv_slideshow = true;

	    menuInit();

	    // Check If Counter In Viewport
	    $(window).on('load resize', function () {
	        menuInit();
	    });

	    function menuInit() {
	        xv_ww = $(window).width();
	        if ($('.nav-offcanvas').length) {
	            $('.paper-nav-toggle').removeClass('dl-trigger');
	        }

	        if (($('.nav-offcanvas').length && xv_ww <= 1030) || $('.nav-offcanvas-desktop').length) {
	            $('body').addClass('sidebar-collapse');
	            $('.dl-menu').addClass("dl-menuopen");
	            $('.paper-nav-toggle').removeClass('dl-trigger');
	            $('.nav-offcanvas .paper_menu').addClass('main-sidebar shadow1 fixed offcanvas');
	        } else {
	            $('.nav-offcanvas .paper_menu').removeClass('main-sidebar shadow1 fixed offcanvas');
	        }


	        if (xv_ww <= 1030 || $('.mini-nav').length) {
	            $('.responsive-menu').removeClass('xv-menuwrapper').addClass('dl-menuwrapper');
	            $('.user-avatar').removeClass('pull-right');
	            $('.lg-submenu').addClass("dl-submenu");
	        } else {
	            $('.responsive-menu').removeClass('dl-menuwrapper').addClass('xv-menuwrapper');
	            $('.lg-submenu').removeClass("dl-submenu");
	            $('.user-avatar').addClass('pull-right');
	        }
	    }
	    $('#dl-menu').dlmenu({
	        animationClasses: {
	            classin: 'dl-animate-in-2',
	            classout: 'dl-animate-out-2'
	        }
	    });
	});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * jquery.dlmenu.js v1.0.1
	 * http://www.codrops.com
	 */
	;(function ($, window, undefined) {

	    'use strict';

	    // global
	    var Modernizr = window.Modernizr, $body = $('body');

	    $.DLMenu = function (options, element) {
	        this.$el = $(element);
	        this._init(options);
	    };

	    // the options
	    $.DLMenu.defaults = {
	        // classes for the animation effects
	        animationClasses: {classin: 'dl-animate-in-1', classout: 'dl-animate-out-1'},
	        // callback: click a link that has a sub menu
	        // el is the link element (li); name is the level name
	        onLevelClick: function (el, name) {
	            return false;
	        },
	        // callback: click a link that does not have a sub menu
	        // el is the link element (li); ev is the event obj
	        onLinkClick: function (el, ev) {
	            return false;
	        }
	    };

	    $.DLMenu.prototype = {
	        _init: function (options) {

	            // options
	            this.options = $.extend(true, {}, $.DLMenu.defaults, options);
	            // cache some elements and initialize some variables
	            this._config();

	            var animEndEventNames = {
	                    'WebkitAnimation': 'webkitAnimationEnd',
	                    'OAnimation': 'oAnimationEnd',
	                    'msAnimation': 'MSAnimationEnd',
	                    'animation': 'animationend'
	                },
	                transEndEventNames = {
	                    'WebkitTransition': 'webkitTransitionEnd',
	                    'MozTransition': 'transitionend',
	                    'OTransition': 'oTransitionEnd',
	                    'msTransition': 'MSTransitionEnd',
	                    'transition': 'transitionend'
	                };
	            // animation end event name
	            this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.dlmenu';
	            // transition end event name
	            this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.dlmenu',
	                // support for css animations and css transitions
	                this.supportAnimations = Modernizr.cssanimations,
	                this.supportTransitions = Modernizr.csstransitions;

	            this._initEvents();

	        },
	        _config: function () {
	            this.open = false;
	            this.$trigger = $('.dl-trigger');
	            this.$menu = this.$el.children('ul.dl-menu');
	            this.$menuitems = this.$menu.find('li:not(.dl-back)');
	            this.$el.find('ul.dl-submenu,ul.lg-submenu').prepend('<li class="dl-back"><a href="#">back</a></li>');
	            this.$back = this.$menu.find('li.dl-back');
	        },
	        _initEvents: function () {

	            var self = this;

	            this.$trigger.on('click.dlmenu', function () {

	                if (self.open) {
	                    self._closeMenu();
	                }
	                else {
	                    self._openMenu();
	                }
	                return false;

	            });

	            this.$menuitems.on('click.dlmenu', function (event) {

	                if (!$(this).find('a').slice(0, 1).data('toggle')) {

	                    event.stopPropagation();
	                }

	                var $item = $(this),
	                    $submenu = $item.children('ul.dl-submenu');

	                if ($submenu.length > 0) {

	                    var $flyin = $submenu.clone().css('opacity', 0).insertAfter(self.$menu),
	                        onAnimationEndFn = function () {
	                            self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('dl-subview');
	                            $item.addClass('dl-subviewopen').parents('.dl-subviewopen:first').removeClass('dl-subviewopen').addClass('dl-subview');
	                            $flyin.remove();
	                        };

	                    setTimeout(function () {
	                        $flyin.addClass(self.options.animationClasses.classin);
	                        self.$menu.addClass(self.options.animationClasses.classout);
	                        if (self.supportAnimations) {
	                            self.$menu.on(self.animEndEventName, onAnimationEndFn);
	                        }
	                        else {
	                            onAnimationEndFn.call();
	                        }

	                        self.options.onLevelClick($item, $item.children('a:first').text());
	                    });

	                    return false;

	                }
	                else {
	                    self.options.onLinkClick($item, event);
	                }

	            });

	            this.$back.on('click.dlmenu', function (event) {

	                var $this = $(this),
	                    $submenu = $this.parents('ul.dl-submenu:first'),
	                    $item = $submenu.parent(),

	                    $flyin = $submenu.clone().insertAfter(self.$menu);

	                var onAnimationEndFn = function () {
	                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);
	                    $flyin.remove();
	                };

	                setTimeout(function () {
	                    $flyin.addClass(self.options.animationClasses.classout);
	                    self.$menu.addClass(self.options.animationClasses.classin);
	                    if (self.supportAnimations) {
	                        self.$menu.on(self.animEndEventName, onAnimationEndFn);
	                    }
	                    else {
	                        onAnimationEndFn.call();
	                    }

	                    $item.removeClass('dl-subviewopen');

	                    var $subview = $this.parents('.dl-subview:first');
	                    if ($subview.is('li')) {
	                        $subview.addClass('dl-subviewopen');
	                    }
	                    $subview.removeClass('dl-subview');
	                });

	                return false;

	            });

	        },
	        closeMenu: function () {
	            if (this.open) {
	                this._closeMenu();

	            }
	        },
	        _closeMenu: function () {
	            var self = this,
	                onTransitionEndFn = function () {
	                    self.$menu.off(self.transEndEventName);
	                    self._resetMenu();
	                };

	            this.$menu.removeClass('dl-menuopen');
	            this.$menu.addClass('dl-menu-toggle');
	            this.$trigger.removeClass('dl-active');

	            if (this.supportTransitions) {
	                this.$menu.on(this.transEndEventName, onTransitionEndFn);
	            }
	            else {
	                onTransitionEndFn.call();
	            }

	            this.open = false;
	        },
	        openMenu: function () {
	            if (!this.open) {
	                this._openMenu();
	            }
	        },
	        _openMenu: function () {
	            var self = this;
	            // clicking somewhere else makes the menu close
	            $body.off('click').on('click.dlmenu', function () {
	                self._closeMenu();
	            });
	            this.$menu.addClass('dl-menuopen dl-menu-toggle').on(this.transEndEventName, function () {
	                $(this).removeClass('dl-menu-toggle');
	            });
	            this.$trigger.addClass('dl-active');
	            this.open = true;
	        },
	        // resets the menu to its original state (first level of options)
	        _resetMenu: function () {
	            this.$menu.removeClass('dl-subview');
	            this.$menuitems.removeClass('dl-subview dl-subviewopen');
	        }
	    };

	    var logError = function (message) {
	        if (window.console) {
	            window.console.error(message);
	        }
	    };

	    $.fn.dlmenu = function (options) {
	        if (typeof options === 'string') {
	            var args = Array.prototype.slice.call(arguments, 1);
	            this.each(function () {
	                var instance = $.data(this, 'dlmenu');
	                if (!instance) {
	                    logError("cannot call methods on dlmenu prior to initialization; " +
	                        "attempted to call method '" + options + "'");
	                    return;
	                }
	                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
	                    logError("no such method '" + options + "' for dlmenu instance");
	                    return;
	                }
	                instance[options].apply(instance, args);
	            });
	        }
	        else {
	            this.each(function () {
	                var instance = $.data(this, 'dlmenu');
	                if (instance) {
	                    instance._init();
	                }
	                else {
	                    instance = $.data(this, 'dlmenu', new $.DLMenu(options, this));
	                }
	            });
	        }
	        return this;
	    };

	})(jQuery, window);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	jQuery(function ($) {
	    "use strict";
	    /*-------------------------------------
	     window...
	     --------------------------------------*/

	    var window_w = $(window).width(); // Window Width
	    var window_h = $(window).height(); // Window Height
	    var window_s = $(window).scrollTop(); // Window Scroll Top

	    var $html = $('html'); // HTML
	    var $body = $('body'); // Body
	    /*-------------------------------------
	     Smooth Scroll
	     --------------------------------------*/

	    if ($(".scroll").length > 0 || $(".scroll a[href^='#']").length > 0) {
	        $('.scroll, .scroll a[href^="#"]').on('click', function () {
	            $('html, body').animate({
	                scrollTop: $($.attr(this, 'href')).offset().top - 30
	            }, 1500, function () {
	            });
	            return false;
	        });
	    }

	});



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* PaperPanel
	 *
	 * @type Object
	 * @description $.PaperPanel is the main object for the template's app.
	 *              It's used for implementing functions and options related
	 *              to the template. Keeping everything wrapped in an object
	 *              prevents conflict with other plugins and is a better
	 *              way to organize our code.
	 */

	__webpack_require__(15);

	$.PaperPanel = {};

	/* --------------------
	 * - PaperPanel Options -
	 * --------------------
	 * Modify these options to suit your implementation
	 */
	$.PaperPanel.options = {

	    animationSpeed: 500,
	    //Sidebar push menu toggle button selector
	    sidebarToggleSelector: "[data-toggle='offcanvas']",
	    //Activate sidebar push menu
	    sidebarPushMenu: true,
	    navbarMenuSlimscrollWidth: "3px",
	    sidebarSlimScroll: true,
	    controlSidebarOptions: {
	        //Which button should trigger the open/close event
	        toggleBtnSelector: "[data-toggle='control-sidebar']",
	        //The sidebar selector
	        selector: ".control-sidebar",
	        //Enable slide over content
	        slide: true
	    },

	    //The standard screen sizes that bootstrap uses.
	    //If you change these in the variables.less file, change
	    //them here too.
	    screenSizes: {
	        xs: 480,
	        sm: 768,
	        md: 1025,
	        lg: 1200
	    }
	};

	/* ------------------
	 * - Implementation -
	 * ------------------
	 * The next block of code implements PaperPanel's
	 * functions and plugins as specified by the
	 * options above.
	 */
	$(function () {
	    "use strict";

	    //Fix for IE page transitions
	    $("body").removeClass("hold-transition");

	    //Extend options if external options exist
	    if (typeof PaperPanelOptions !== "undefined") {
	        $.extend(true,
	            $.PaperPanel.options,
	            PaperPanelOptions);
	    }

	    //Easy access to options
	    var o = $.PaperPanel.options;

	    //Set up the object
	    _init();

	    //Activate the layout maker
	    $.PaperPanel.layout.activate();

	    //Enable sidebar tree view controls
	    $.PaperPanel.tree('.sidebar');

	    //Enable control sidebar
	    if (o.enableControlSidebar) {
	        $.PaperPanel.controlSidebar.activate();
	    }

	    //Activate sidebar push menu
	    if (o.sidebarPushMenu) {
	        $.PaperPanel.pushMenu.activate(o.sidebarToggleSelector);
	    }
	    /*
	     * INITIALIZE BUTTON TOGGLE
	     * ------------------------
	     */

	    $('.btn-group[data-toggle="btn-toggle"]').each(function () {
	        var group = $(this);
	        $(this).find(".btn").on('click', function (e) {
	            group.find(".btn.active").removeClass("active");
	            $(this).addClass("active");
	            e.preventDefault();
	        });

	    });
	});

	/* ----------------------------------
	 * - Initialize the PaperPanel Object -
	 * ----------------------------------
	 * All PaperPanel functions are implemented below.
	 */
	function _init() {
	    'use strict';
	    /* Layout
	     * ======
	     * Fixes the layout height in case min-height fails.
	     *
	     * @type Object
	     * @usage $.PaperPanel.layout.activate()
	     *        $.PaperPanel.layout.fix()
	     *        $.PaperPanel.layout.fixSidebar()
	     */

	    var slimScroll = $(".slimScroll");

	    if (slimScroll.length) {
	        slimScroll.each(function () {
	            var $this = $(this);
	            var attrData = $this.data();
	            $this.slimscroll({
	                height: attrData.height ? attrData.height + 'px' : ($(window).height()) + "px",
	                color: attrData.color ? attrData.color : "rgba(0,0,0,0.95)",
	                size: attrData.size ? attrData.size + 'px' : "5px"
	            });
	        });
	    }


	    $.PaperPanel.layout = {
	        activate: function () {
	            var _this = this;
	            _this.fix();
	            _this.fixSidebar();
	            $(window, ".wrapper").resize(function () {
	                _this.fix();
	                _this.fixSidebar();
	            });
	        },
	        fix: function () {
	            //Get window height and the wrapper height
	            var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
	            var window_height = $(window).height();
	            var sidebar_height = $(".sidebar").height();
	            //Set the min-height of the content and sidebar based on the
	            //the height of the document.
	            if ($("body").hasClass("fixed")) {
	                $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
	            } else {
	                var postSetWidth;
	                if (window_height >= sidebar_height) {
	                    $(".content-wrapper, .right-side").css('min-height', window_height - neg);
	                    postSetWidth = window_height - neg;
	                } else {
	                    $(".content-wrapper, .right-side").css('min-height', sidebar_height);
	                    postSetWidth = sidebar_height;
	                }

	                //Fix for the control sidebar height
	                var controlSidebar = $($.PaperPanel.options.controlSidebarOptions.selector);
	                if (typeof controlSidebar !== "undefined") {
	                    if (controlSidebar.height() > postSetWidth)
	                        $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
	                }

	            }
	        },
	        fixSidebar: function () {
	            //Make sure the body tag has the .fixed class
	            if (!$(".main-sidebar").hasClass("fixed")) {
	                if (typeof $.fn.slimScroll != 'undefined') {
	                    $(".sidebar").slimScroll({destroy: true}).height("auto");

	                }
	                return;
	            } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
	                window.console.error("Error: the fixed layout requires the slimscroll plugin!");
	            }
	            //Enable slimscroll for fixed layout
	            if ($.PaperPanel.options.sidebarSlimScroll) {
	                if (typeof $.fn.slimScroll != 'undefined') {
	                    //Destroy if it exists
	                    $(".sidebar").slimScroll({destroy: true}).height("auto");
	                    //Add slimscroll

	                    $(".sidebar").slimscroll({
	                        height: ($(window).height()) + "px",
	                        color: "rgba(0,0,0,0.3)",
	                        size: "5px"
	                    });
	                }
	            }
	        }
	    };


	    /* PushMenu()
	     * ==========
	     * Adds the push menu functionality to the sidebar.
	     *
	     * @type Function
	     * @usage: $.PaperPanel.pushMenu("[data-toggle='offcanvas']")
	     */
	    $.PaperPanel.pushMenu = {
	        activate: function (toggleBtn) {
	            //Get the screen sizes
	            var screenSizes = $.PaperPanel.options.screenSizes;

	            //Enable sidebar toggle
	            $(document).on('click', toggleBtn, function (e) {
	                e.preventDefault();
	                e.stopPropagation();
	                //Enable sidebar push menu
	                if ($(window).width() > (screenSizes.md - 1)) {
	                    if ($("body").hasClass('sidebar-collapse')) {
	                        $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
	                        if ($('.nav-offcanvas-desktop').length) {
	                            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
	                        }

	                    } else {
	                        $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
	                    }
	                }
	                //Handle sidebar push menu for small screens
	                else {
	                    if ($("body").hasClass('sidebar-open')) {
	                        $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
	                    } else {
	                        $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
	                    }
	                }
	            });

	            $(".content-wrapper").click(function () {
	                //Enable hide menu when clicking on the content-wrapper on small screens
	                if ($(window).width() <= (screenSizes.md - 1) && $("body").hasClass("sidebar-open")) {
	                    $("body").removeClass('sidebar-open');
	                }
	            });


	        },
	        expandOnHover: function () {
	            var _this = this;
	            var screenWidth = $.PaperPanel.options.screenSizes.sm - 1;
	            //Expand sidebar on hover
	            $('.main-sidebar').hover(function () {
	                if ($('body').hasClass('sidebar-mini') &&
	                    $("body").hasClass('sidebar-collapse') &&
	                    $(window).width() > screenWidth) {
	                    _this.expand();
	                }
	            }, function () {
	                if ($('body').hasClass('sidebar-mini') &&
	                    $('body').hasClass('sidebar-expanded-on-hover') &&
	                    $(window).width() > screenWidth) {
	                    _this.collapse();
	                }
	            });
	        },
	        expand: function () {
	            $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
	        },
	        collapse: function () {
	            if ($('body').hasClass('sidebar-expanded-on-hover')) {
	                $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
	            }
	        }
	    };

	    /* Tree()
	     * ======
	     * Converts the sidebar into a multilevel
	     * tree view menu.
	     *
	     * @type Function
	     * @Usage: $.PaperPanel.tree('.sidebar')
	     */
	    $.PaperPanel.tree = function (menu) {
	        var _this = this;
	        var animationSpeed = $.PaperPanel.options.animationSpeed;
	        $(document).on('click', menu + ' li a', function (e) {
	            //Get the clicked link and the next element
	            var $this = $(this);
	            var checkElement = $this.next();

	            //Check if the next element is a menu and is visible
	            if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {
	                //Close the menu
	                checkElement.slideUp(animationSpeed, function () {
	                    checkElement.removeClass('menu-open');
	                    //Fix the layout in case the sidebar stretches over the height of the window
	                    //_this.layout.fix();
	                });
	                checkElement.parent("li").removeClass("active");
	            }
	            //If the menu is not visible
	            else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
	                //Get the parent menu
	                var parent = $this.parents('ul').first();
	                //Close all open menus within the parent
	                var ul = parent.find('ul:visible').slideUp(animationSpeed);
	                //Remove the menu-open class from the parent
	                ul.removeClass('menu-open');
	                //Get the parent li
	                var parent_li = $this.parent("li");

	                //Open the target menu and add the menu-open class
	                checkElement.slideDown(animationSpeed, function () {
	                    //Add the class active to the parent li
	                    checkElement.addClass('menu-open');
	                    parent.find('li.active').removeClass('active');
	                    parent_li.addClass('active');
	                    //Fix the layout in case the sidebar stretches over the height of the window
	                    _this.layout.fix();
	                });
	            }
	            //if this isn't a link, prevent the page from being redirected
	            if (checkElement.is('.treeview-menu')) {
	                e.preventDefault();
	            }
	        });
	    };
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
	 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
	 *
	 * Version: 1.3.8
	 *
	 */
	(function ($) {

	    $.fn.extend({
	        slimScroll: function (options) {

	            var defaults = {

	                // width in pixels of the visible scroll area
	                width: 'auto',

	                // height in pixels of the visible scroll area
	                height: '250px',

	                // width in pixels of the scrollbar and rail
	                size: '7px',

	                // scrollbar color, accepts any hex/color value
	                color: '#000',

	                // scrollbar position - left/right
	                position: 'right',

	                // distance in pixels between the side edge and the scrollbar
	                distance: '1px',

	                // default scroll position on load - top / bottom / $('selector')
	                start: 'top',

	                // sets scrollbar opacity
	                opacity: .4,

	                // enables always-on mode for the scrollbar
	                alwaysVisible: false,

	                // check if we should hide the scrollbar when user is hovering over
	                disableFadeOut: false,

	                // sets visibility of the rail
	                railVisible: false,

	                // sets rail color
	                railColor: '#333',

	                // sets rail opacity
	                railOpacity: .2,

	                // whether  we should use jQuery UI Draggable to enable bar dragging
	                railDraggable: true,

	                // defautlt CSS class of the slimscroll rail
	                railClass: 'slimScrollRail',

	                // defautlt CSS class of the slimscroll bar
	                barClass: 'slimScrollBar',

	                // defautlt CSS class of the slimscroll wrapper
	                wrapperClass: 'slimScrollDiv',

	                // check if mousewheel should scroll the window if we reach top/bottom
	                allowPageScroll: false,

	                // scroll amount applied to each mouse wheel step
	                wheelStep: 20,

	                // scroll amount applied when user is using gestures
	                touchScrollStep: 200,

	                // sets border radius
	                borderRadius: '7px',

	                // sets border radius of the rail
	                railBorderRadius: '7px'
	            };

	            var o = $.extend(defaults, options);

	            // do it for every element that matches selector
	            this.each(function () {

	                var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
	                    barHeight, percentScroll, lastScroll,
	                    divS = '<div></div>',
	                    minBarHeight = 30,
	                    releaseScroll = false;

	                // used in event handlers and for better minification
	                var me = $(this);

	                // ensure we are not binding it again
	                if (me.parent().hasClass(o.wrapperClass)) {
	                    // start from last bar position
	                    var offset = me.scrollTop();

	                    // find bar and rail
	                    bar = me.siblings('.' + o.barClass);
	                    rail = me.siblings('.' + o.railClass);

	                    getBarHeight();

	                    // check if we should scroll existing instance
	                    if ($.isPlainObject(options)) {
	                        // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
	                        if ('height' in options && options.height == 'auto') {
	                            me.parent().css('height', 'auto');
	                            me.css('height', 'auto');
	                            var height = me.parent().parent().height();
	                            me.parent().css('height', height);
	                            me.css('height', height);
	                        } else if ('height' in options) {
	                            var h = options.height;
	                            me.parent().css('height', h);
	                            me.css('height', h);
	                        }

	                        if ('scrollTo' in options) {
	                            // jump to a static point
	                            offset = parseInt(o.scrollTo);
	                        }
	                        else if ('scrollBy' in options) {
	                            // jump by value pixels
	                            offset += parseInt(o.scrollBy);
	                        }
	                        else if ('destroy' in options) {
	                            // remove slimscroll elements
	                            bar.remove();
	                            rail.remove();
	                            me.unwrap();
	                            return;
	                        }

	                        // scroll content by the given offset
	                        scrollContent(offset, false, true);
	                    }

	                    return;
	                }
	                else if ($.isPlainObject(options)) {
	                    if ('destroy' in options) {
	                        return;
	                    }
	                }

	                // optionally set height to the parent's height
	                o.height = (o.height == 'auto') ? me.parent().height() : o.height;

	                // wrap content
	                var wrapper = $(divS)
	                    .addClass(o.wrapperClass)
	                    .css({
	                        position: 'relative',
	                        overflow: 'hidden',
	                        width: o.width,
	                        height: o.height
	                    });

	                // update style for the div
	                me.css({
	                    overflow: 'hidden',
	                    width: o.width,
	                    height: o.height
	                });

	                // create scrollbar rail
	                var rail = $(divS)
	                    .addClass(o.railClass)
	                    .css({
	                        width: o.size,
	                        height: '100%',
	                        position: 'absolute',
	                        top: 0,
	                        display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
	                        'border-radius': o.railBorderRadius,
	                        background: o.railColor,
	                        opacity: o.railOpacity,
	                        zIndex: 90
	                    });

	                // create scrollbar
	                var bar = $(divS)
	                    .addClass(o.barClass)
	                    .css({
	                        background: o.color,
	                        width: o.size,
	                        position: 'absolute',
	                        top: 0,
	                        opacity: o.opacity,
	                        display: o.alwaysVisible ? 'block' : 'none',
	                        'border-radius': o.borderRadius,
	                        BorderRadius: o.borderRadius,
	                        MozBorderRadius: o.borderRadius,
	                        WebkitBorderRadius: o.borderRadius,
	                        zIndex: 99
	                    });

	                // set position
	                var posCss = (o.position == 'right') ? {right: o.distance} : {left: o.distance};
	                rail.css(posCss);
	                bar.css(posCss);

	                // wrap it
	                me.wrap(wrapper);

	                // append to parent div
	                me.parent().append(bar);
	                me.parent().append(rail);

	                // make it draggable and no longer dependent on the jqueryUI
	                if (o.railDraggable) {
	                    bar.bind("mousedown", function (e) {
	                        var $doc = $(document);
	                        isDragg = true;
	                        t = parseFloat(bar.css('top'));
	                        pageY = e.pageY;

	                        $doc.bind("mousemove.slimscroll", function (e) {
	                            currTop = t + e.pageY - pageY;
	                            bar.css('top', currTop);
	                            scrollContent(0, bar.position().top, false);// scroll content
	                        });

	                        $doc.bind("mouseup.slimscroll", function (e) {
	                            isDragg = false;
	                            hideBar();
	                            $doc.unbind('.slimscroll');
	                        });
	                        return false;
	                    }).bind("selectstart.slimscroll", function (e) {
	                        e.stopPropagation();
	                        e.preventDefault();
	                        return false;
	                    });
	                }

	                // on rail over
	                rail.hover(function () {
	                    showBar();
	                }, function () {
	                    hideBar();
	                });

	                // on bar over
	                bar.hover(function () {
	                    isOverBar = true;
	                }, function () {
	                    isOverBar = false;
	                });

	                // show on parent mouseover
	                me.hover(function () {
	                    isOverPanel = true;
	                    showBar();
	                    hideBar();
	                }, function () {
	                    isOverPanel = false;
	                    hideBar();
	                });

	                // support for mobile
	                me.bind('touchstart', function (e, b) {
	                    if (e.originalEvent.touches.length) {
	                        // record where touch started
	                        touchDif = e.originalEvent.touches[0].pageY;
	                    }
	                });

	                me.bind('touchmove', function (e) {
	                    // prevent scrolling the page if necessary
	                    if (!releaseScroll) {
	                        e.originalEvent.preventDefault();
	                    }
	                    if (e.originalEvent.touches.length) {
	                        // see how far user swiped
	                        var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
	                        // scroll content
	                        scrollContent(diff, true);
	                        touchDif = e.originalEvent.touches[0].pageY;
	                    }
	                });

	                // set up initial height
	                getBarHeight();

	                // check start position
	                if (o.start === 'bottom') {
	                    // scroll content to bottom
	                    bar.css({top: me.outerHeight() - bar.outerHeight()});
	                    scrollContent(0, true);
	                }
	                else if (o.start !== 'top') {
	                    // assume jQuery selector
	                    scrollContent($(o.start).position().top, null, true);

	                    // make sure bar stays hidden
	                    if (!o.alwaysVisible) {
	                        bar.hide();
	                    }
	                }

	                // attach scroll events
	                attachWheel(this);

	                function _onWheel(e) {
	                    // use mouse wheel only when mouse is over
	                    if (!isOverPanel) {
	                        return;
	                    }

	                    var e = e || window.event;

	                    var delta = 0;
	                    if (e.wheelDelta) {
	                        delta = -e.wheelDelta / 120;
	                    }
	                    if (e.detail) {
	                        delta = e.detail / 3;
	                    }

	                    var target = e.target || e.srcTarget || e.srcElement;
	                    if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
	                        // scroll content
	                        scrollContent(delta, true);
	                    }

	                    // stop window scroll
	                    if (e.preventDefault && !releaseScroll) {
	                        e.preventDefault();
	                    }
	                    if (!releaseScroll) {
	                        e.returnValue = false;
	                    }
	                }

	                function scrollContent(y, isWheel, isJump) {
	                    releaseScroll = false;
	                    var delta = y;
	                    var maxTop = me.outerHeight() - bar.outerHeight();

	                    if (isWheel) {
	                        // move bar with mouse wheel
	                        delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

	                        // move bar, make sure it doesn't go out
	                        delta = Math.min(Math.max(delta, 0), maxTop);

	                        // if scrolling down, make sure a fractional change to the
	                        // scroll position isn't rounded away when the scrollbar's CSS is set
	                        // this flooring of delta would happened automatically when
	                        // bar.css is set below, but we floor here for clarity
	                        delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

	                        // scroll the scrollbar
	                        bar.css({top: delta + 'px'});
	                    }

	                    // calculate actual scroll amount
	                    percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
	                    delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

	                    if (isJump) {
	                        delta = y;
	                        var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
	                        offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
	                        bar.css({top: offsetTop + 'px'});
	                    }

	                    // scroll content
	                    me.scrollTop(delta);

	                    // fire scrolling event
	                    me.trigger('slimscrolling', ~~delta);

	                    // ensure bar is visible
	                    showBar();

	                    // trigger hide when scroll is stopped
	                    hideBar();
	                }

	                function attachWheel(target) {
	                    if (window.addEventListener) {
	                        target.addEventListener('DOMMouseScroll', _onWheel, false);
	                        target.addEventListener('mousewheel', _onWheel, false);
	                    }
	                    else {
	                        document.attachEvent("onmousewheel", _onWheel)
	                    }
	                }

	                function getBarHeight() {
	                    // calculate scrollbar height and make sure it is not too small
	                    barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
	                    bar.css({height: barHeight + 'px'});

	                    // hide scrollbar if content is not long enough
	                    var display = barHeight == me.outerHeight() ? 'none' : 'block';
	                    bar.css({display: display});
	                }

	                function showBar() {
	                    // recalculate bar height
	                    getBarHeight();
	                    clearTimeout(queueHide);

	                    // when bar reached top or bottom
	                    if (percentScroll == ~~percentScroll) {
	                        //release wheel
	                        releaseScroll = o.allowPageScroll;

	                        // publish approporiate event
	                        if (lastScroll != percentScroll) {
	                            var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
	                            me.trigger('slimscroll', msg);
	                        }
	                    }
	                    else {
	                        releaseScroll = false;
	                    }
	                    lastScroll = percentScroll;

	                    // show only when required
	                    if (barHeight >= me.outerHeight()) {
	                        //allow window scroll
	                        releaseScroll = true;
	                        return;
	                    }
	                    bar.stop(true, true).fadeIn('fast');
	                    if (o.railVisible) {
	                        rail.stop(true, true).fadeIn('fast');
	                    }
	                }

	                function hideBar() {
	                    // only hide when options allow it
	                    if (!o.alwaysVisible) {
	                        queueHide = setTimeout(function () {
	                            if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg) {
	                                bar.fadeOut('slow');
	                                rail.fadeOut('slow');
	                            }
	                        }, 1000);
	                    }
	                }

	            });

	            // maintain chainability
	            return this;
	        }
	    });

	    $.fn.extend({
	        slimscroll: $.fn.slimScroll
	    });

	})(jQuery);


/***/ })
/******/ ]);
