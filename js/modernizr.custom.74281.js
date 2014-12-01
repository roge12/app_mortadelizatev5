window.Modernizr=function(e,t,n){function r(e){p.cssText=e}function o(e,t){return typeof e===t}var i,a,c,l="2.8.3",u={},s=!0,A=t.documentElement,f="modernizr",d=t.createElement(f),p=d.style,h=({}.toString,{}),m=[],E=m.slice,g={}.hasOwnProperty;c=o(g,"undefined")||o(g.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return g.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=E.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(E.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(E.call(arguments)))};return r});for(var B in h)c(h,B)&&(a=B.toLowerCase(),u[a]=h[B](),m.push((u[a]?"":"no-")+a));return u.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&u.addTest(r,e[r]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,"undefined"!=typeof s&&s&&(A.className+=" "+(t?"":"no-")+e),u[e]=t}return u},r(""),d=i=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=E[e[h]];return t||(t={},m++,e[h]=m,E[m]=t),t}function i(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||d.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),l=c.length;l>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function l(e){e||(e=t);var r=o(e);return!g.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||c(e,r),e}var u,s,A="3.7.0",f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,E={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,s=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:A,shivCSS:f.shivCSS!==!1,supportsUnknownElements:s,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:a};e.html5=g,l(t)}(this,t),u._version=l,A.className=A.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+m.join(" "):""),u}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=E.shift();g=1,e?e.t?p(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function l(e,n,r,o,i,l,u){function s(t){if(!d&&a(A.readyState)&&(B.r=d=1,!g&&c(),A.onload=A.onreadystatechange=null,t)){"img"!=e&&p(function(){Q.removeChild(A)},50);for(var r in F[n])F[n].hasOwnProperty(r)&&F[n][r].onload()}}var u=u||f.errorTimeout,A=t.createElement(e),d=0,m=0,B={t:r,s:n,e:i,a:l,x:u};1===F[n]&&(m=1,F[n]=[]),"object"==e?A.data=n:(A.src=n,A.type=e),A.width=A.height="0",A.onerror=A.onload=A.onreadystatechange=function(){s.call(this,m)},E.splice(o,0,B),"img"!=e&&(m||2===F[n]?(Q.insertBefore(A,y?null:h),p(s,u)):F[n].push(A))}function u(e,t,n,r,i){return g=0,t=t||"j",o(e)?l("c"==t?w:v,e,t,this.i++,n,r,i):(E.splice(this.i++,0,e),1==E.length&&c()),this}function s(){var e=f;return e.loader={load:u,i:0},e}var A,f,d=t.documentElement,p=e.setTimeout,h=t.getElementsByTagName("script")[0],m={}.toString,E=[],g=0,B="MozAppearance"in d.style,y=B&&!!t.createRange().compareNode,Q=y?d:h.parentNode,d=e.opera&&"[object Opera]"==m.call(e.opera),d=!!t.attachEvent&&!d,v=B?"object":d?"script":"img",w=d?"script":v,b=Array.isArray||function(e){return"[object Array]"==m.call(e)},S=[],F={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=S.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=j[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=S[n](i);return i}function a(e,o,i,a,c){var l=t(e),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,i,a,c):(F[l.url]?l.noexec=!0:F[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(u))&&i.load(function(){s(),o&&o(l.origUrl,c,a),u&&u(l.origUrl,c,a),F[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(A=function(){var e=[].slice.call(arguments);f.apply(this,e),d()}),a(e,A,t,0,u);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(A)?A=function(){var e=[].slice.call(arguments);f.apply(this,e),d()}:A[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(f[l])),a(e[l],A,t,l,u))}else!n&&d()}var c,l,u=!!e.test,s=e.load||e.both,A=e.callback||i,f=A,d=e.complete||i;n(u?e.yep:e.nope,!!s),s&&n(s)}var l,u,A=this.yepnope.loader;if(o(e))a(e,0,A,0);else if(b(e))for(l=0;l<e.length;l++)u=e[l],o(u)?a(u,0,A,0):b(u)?f(u):Object(u)===u&&c(u,A);else Object(e)===e&&c(e,A)},f.addPrefix=function(e,t){j[e]=t},f.addFilter=function(e){S.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",A=function(){t.removeEventListener("DOMContentLoaded",A,0),t.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,u){var s,A,d=t.createElement("script"),o=o||f.errorTimeout;d.src=e;for(A in r)d.setAttribute(A,r[A]);n=u?c:n||i,d.onreadystatechange=d.onload=function(){!s&&a(d.readyState)&&(s=1,n(),d.onload=d.onreadystatechange=null)},p(function(){s||(s=1,n(1))},o),l?d.onload():h.parentNode.insertBefore(d,h)},e.yepnope.injectCss=function(e,n,r,o,a,l){var u,o=t.createElement("link"),n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);a||(h.parentNode.insertBefore(o,h),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(){var e=new Image;e.onerror=function(){Modernizr.addTest("exif-orientation",function(){return!1})},e.onload=function(){Modernizr.addTest("exif-orientation",function(){return 2!==e.width})},e.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}(),Modernizr.addTest("filereader",function(){return!!(window.File&&window.FileList&&window.FileReader)});