// ==UserScript==
// @name     Olive's SpeechSynthesis Main 2
// @rname     Unnamed Script 458449
// @version  1
// @grant    GM_getValue
// @grant    GM_setValue
// @grant    GM_listValues
// @grant    GM_deleteValue
// @match		 file://*/*
// @match    *://*/*
// @grant    GM_xmlhttpRequest
// @grant    unsafeWindow
// @url   https://notabug.org/OliveTheSwarm/SpeechSynthesis/src/master/script.js
// ==/UserScript==
//current novel:      https://novelbin.com/b/the-lucky-wife-reborn-in-the-90s-era-has-a-spatial-ability/chapter-533-533-god-xuan

if( true || typeof jQuery == 'undefined' ) {
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
unsafeWindow.olvjq = jQuery;
}

//list all events
//$._data( $(document)[0], "events" );

//block novelbin's a, d and arrow key chapter change keys
window.allkey = function(e){
  var t = e.target.tagName.toLowerCase();
  var key = e.key;
  console.log(e);
  olv.e = e;
  if ("input" != t && "textarea" != t && ['a', 'd', 'ArrowLeft', 'ArrowRight'].indexOf(key) > -1) {
    e.stopImmediatePropagation();
    e.preventDefault();
    //console.log(e);
  }

  if( $('#chr-content').length > 0 ) {
    if( e.shiftKey ) {
      //if( ['$', '^'].indexOf(key) > -1
      //({'ArrowLeft': '#prev_chap', 'ArrowRight': '#next_chap'})['ArrowLeft']

      if( ['ArrowLeft', 'ArrowRight'].indexOf(key) > -1 ) {
          window.location = $( Object({'ArrowLeft': '#prev_chap', 'ArrowRight': '#next_chap'})[key] ).attr('href');
      }
    }
    else {
      if( e.type == 'keyup' ) {
        if( ['ArrowLeft', 'a', '/'].indexOf(key) > -1 ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'none');
          olv.paragraph = (olv.paragraph - 2)
          speechSynthesis.cancel();
          return false;
        }

        if( ['ArrowRight', 'd', '\\'].indexOf(key) > -1 ) {
          speechSynthesis.cancel();
          //olv.paragraph = (olv.paragraph - 1)
          return false;
        }
      }
    }
  }

  if( typeof olv.allkey != 'undefined' )//$('#prev_chap').attr('href')
    olv.allkey(e);
};

if(false) {
  olv.allkey = function(e){};
  olv.allkey = function(e){ console.log(e); };
  olv.allkey = function(e){
    //if ("input" != t && "textarea" != t && ['a', 'd', 'ArrowLeft', 'ArrowRight'].indexOf(e.key) > -1)
    if( typeof olv.keydown == 'undefined' )
    olv.keydown = {
      'ArrowLeft': function(e){},
      'ArrowRight': function(e){}
    };

    if( typeof olv[e.type] != 'undefined' && typeof olv[e.type][e.key] != 'undefined' )
      olv[e.type][e.key](e);
  };
}

$(document).ready(function(){
  if( $('#cf-error-details').length > 0 && $('.code-label').text() == 'Error code 500' ) {
    //console.log('Cloudflare error 500!');
    setTimeout(function(){
      window.location = window.location;
    }, 10000);
  }

  //console.log('chapterobject? ', $('#chr-content'));
  if( $('#chr-content').length > 0 ) {
    //$(document).off('keydown');
    window.addEventListener('keyup', allkey, true); //useCapture
    window.addEventListener('keydown', allkey, true);
    window.addEventListener('keypress', allkey, true);

  }

  if( window.location.protocol == "file:" ) {
    //data-ext="txt"
    $(document).on('click', 'li[data-ext="txt"]', function(){
      console.log('init text file');
    });
  }
});
console.log('init olv');
unsafeWindow.fish = window;
//add insert code for grok.
if( window.location.toString().indexOf('grok.com/chat').length > -1 ) {
  console.log(olvjq('button[aria-label="Copy"]'));
  olvjq('button[aria-label="Copy"]').parent().on('mouseover', function(){
    console.log(olvjq(this));
  });

  //wait for olv

}

//grab every word
//$('[para="13"]').text().trim().split(/(\w+)/ig)
//$('[para="13"]').text().trim().split(/(\w+)/ig).join('') == $('[para="13"]').text().trim()

//https://novelbin.phieuvu.com/book/after-picking-up-five-brothers-no-one-dares-to-offend-the-capital-city/chapter-26-the-heart-of-schomer
//"Many can bravely refuse kindness, but few can bravely accept it and firmly engrave it on their hearts."

/* ☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★
Monica Rial
https://www.youtube.com/watch?v=WFymrcjuER8

note:
https://lightnovel.novelupdates.net/book/rebirth-space-pretty-girl/ccchapter-2979-queen-candidate-3
add handler for duplicate lines

https://lightnovel.novelupdates.net/book/rebirth-space-pretty-girl/ccchapter-2109-what-do-sea-spring-leaves-look-like-seven-more
this~ wwwmtlnovelcom~ said that so

https://lightnovel.novelupdates.net/book/rebirth-space-pretty-girl/ccchapter-2039-go-to-the-yamen
https://lightnovel.novelupdates.net/book/rebirth-space-pretty-girl/ccchapter-1914-i-cant-afford-to-lose-this-face
remove repeated words
*/

//doesn't trigger on page not found
if(false)
$(document).ready(function(){
  if( $('[data-l10n-id="dnsNotFound-title"]').length ) {
    setTimeout(function(){ $('#neterrorTryAgainButton').click(); }, 2000);
  }
});
//'2402:800:6118:9f09:a0d1:af0c:37f4:f5dd'.replace(/(([0-9a-f]{4}\:)|([0-9a-f]{3}\:))|[0-9a-f]{4}/g, '')
//document.title = '📖 ' + document.title

if( typeof olv == "undefined" ) {
 	unsafeWindow.olv = {
    reloaded: (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD),
    style:'.bg-gradient-gray {background:black; color:white;} .olv-chapter-title span {background: #121212;color: #82A82D;border:0px !important; padding:0;} .paragraph.options, .olv.options,.olv .btn {background: #121212; border: 1px solid transparent;border-radius: 4px !important;border-color: #82A82D;color: #82A82D;} .paragraph.options:hover,.olv.options:hover,.olv .btn:hover {color: #AADB3C;border-color: #AADB3C;}',
    readbuffer: '',
    q:{}, //reading queue
    default: {
      voice: 1, //zira
      auto_next: 1,
      rate: 10
    },
    run: {
      start: {},
      end: {}
    },
  	word: {
      reg: {},
      list: {
        '-bars':/bars/ig, //fixes instances of '400 bars' read as 400 billion argentenian pasos
        'Meng\'er':/Menger/,
        'Cuhthulu':/Cthulhu/,
        casualties:/causalities/,
        practitioner:/practicioners/ig,
     		Autesh:/atesh/ig,
     		bitch:/b\*\*\*\*|b\*tch|bit\*h|b\*\*ch|b̲i̲t̲c̲h̲|b \* tch|b t Tch|B t tche/ig,
     		uck:/\*ck|u\*k/ig,
        fuck:/f\*\*\*|fu\*\*|fuc\*|fu\*k|\#\&\-\@\$|f\*\*k|fu\*\*|fuc\*|fu\*k|fvck|fu\*\*|fu\*k|F̲u̲c̲k̲|fck|f \* ck|F c Ck|Fu\*k|\*uck|fu\*k|fuc\*/ig,
     		shit:/s\*\*\*|sh\*t|s\*\*t|sh\*\*|shi\*t|sh\*t|s\*it|s̲h̲i̲t̲|S-H-I-T|sh\*t/ig,
     		cunt:/c\*nt/ig,
     		bastard:/bustard|b\*\*\*\*\*\*|b\*stard|bast\*\*d|basta\*d|Bast\*\*\*|b̲a̲s̲t̲a̲r̲d̲|B \* Stard|B s Stard|bast\*rd|bast\*rd|b\*st\*rd/ig,
        dick:/d\*ck/ig,
        ass:/a\*\*|as\*|\*ss|a\*s|as\*|a̲s̲s̲|\* SS/ig,
        bullshit:/Bull\*\*\*\*|bull\*|ballshit|bIlsht|Bullsh \* T|Bullsh\*t/ig,
        screwed:/sc\*\*wed|scr\*wed/ig,
        ammit:/\*mmit|amm\*t/ig,
        hell:/h\*\*\*|he\*\*|h\*ll/ig,
        sex:/s\*x/ig,
        ape:/\*pe/ig,
        ball:/b\*lls/ig,
        slut:/sl\*t|sl\*\*|Slu\*|s̲l̲u̲t̲|SL t/ig,
        pen:/p\*n/ig,
        amn:/\*mn/ig,
        nis:/n\*s/ig,
        vag:/v\*g/ig,
        hor:/h\*r/ig,
        min:/m\*n/ig,
        rap:/r\*p/ig,
        itc:/i\*c/ig,
        ick:/i\*k/ig,
        tisk:/tsk/ig,
        damn:/d\*\*\*|D \* Mn|D m Mn|d\*mn/ig,
        dammed:/da\*\*ed|d(\* )*\*ed /ig,
        boobs:/b\*obs/ig,
        'Yuanjuan':/Dongdong/g,
        A:/Ⓐ/g,
        B:/Ⓑ/g,
        C:/Ⓒ/g,
        D:/Ⓓ/g,
        E:/Ⓔ/g,
        F:/Ⓕ/g,
        G:/Ⓖ/g,
        H:/Ⓗ/g,
        I:/Ⓘ/g,
        J:/Ⓙ/g,
        K:/Ⓚ/g,
        L:/Ⓛ/g,
        M:/Ⓜ/g,
        N:/Ⓝ/g,
        O:/Ⓞ/g,
        P:/Ⓟ/g,
        Q:/Ⓠ/g,
        R:/Ⓡ/g,
        S:/Ⓢ/g,
        T:/Ⓣ/g,
        U:/Ⓤ/g,
        V:/Ⓥ/g,
        W:/Ⓦ/g,
        X:/Ⓧ/g,
        Y:/Ⓨ/g,
        Z:/Ⓩ/g,
        a:/@|ⓐ|ȧ|á|á|à|ā/g,
        b:/ⓑ/g,
        c:/ⓒ|ċ/g,
        d:/ⓓ/g,
        e:/ⓔ|ė|è|é|ē|ě/g,
        f:/ⓕ/g,
        g:/ⓖ|ġ/g,
        h:/ⓗ/g,
        i:/ⓘ|ɨ|ǐ|í|ī/g,
        j:/ⓙ/g,
        k:/ⓚ/g,
        l:/ⓛ|ŀ/g,
        m:/ⓜ/g,
        n:/ⓝ/g,
        o:/ⓞ|ò/g,
        p:/ⓟ/g,
        q:/ⓠ/g,
        r:/ⓡ/g,
        s:/ⓢ/g,
        t:/ⓣ|ŧ|t̲/g,
        u:/ⓤ|ü|ú|ǔ|ū|ù/g,
        v:/ⓥ/g,
        w:/ⓦ/g,
        x:/ⓧ/g,
        y:/ⓨ/g,
        z:/ⓩ/g,
        ' azz ':/ as /g,
        //' inn ':{r:/ in /g, d:' <span style="color:pink;">in</span> '},
        ' inn ':{f:/ in /g, p:'octavian', e:'span'},
        ' inn,':/ in,/g,
        'I V':/IV/g,
        assassassin:/assassin/g, //circumstances
        assin:/assassin/g,
        consciousness:/conciousness/g,
        'battle mage':/battlemage/g, //'Battle Aura':/douqi|dou qi/ig,
        'cultivate':/cutivate/g,
        'bent':/bended/g,
        'holes':/h̲o̲l̲e̲s̲/g,
        'fucking':/f̲u̲c̲k̲i̲n̲g|fcking|f-ing|f–ing/g,
        'bull':/b̲u̲l̲l̲/g,
        'ing':/i̲n̲g/g,
        'dumbass':/d\*mbass/g,
        'asshole':/as\*hole/ig,
        'ha':/, ha/g,
        '“mm ”':/“MM. ”/g,
        'M M O R P G':/MMORPG/g,
        'R&D':/Ru0026D/g,
        'façade':/fa\?ade/g,
        'second.':/sec\./g,
        'whore':/w\*ore/ig,
        'cow shed':/cowshed/ig,
        'gun':/wooden warehouse/ig,
        'tree line': /treeline/ig,
        'em-path':/empath|em path/ig,
        'lives':/LI VES/ig,
        'Bai Shuo':/Bci Shuo/g,
        '"I\'m ':/"Tm |"1 /g,
        '"I w':/"Lw/g,
        'I’ll':/1’11/g,
        '“I’ll':/“T’ll/g,
        '“I’ve':/“T’ve/g,
        '“I w':/“Lw|“Tw/ig,
        '"I ':/"1 /g,
        '“I ':/“1 /g,
        //' I ':/ 1 /g,
        '[I ':/\[1 /g,
        'I cou':/1 cou/g,
        'I can':/1 can/g,
        'I did':/1 did/g,
        'I will':/1 will/g,
        'I check':/1 check/g,
        'I have':/1 have/g,
        'I ask':/1 ask/g,
        'Twin Incineration':/I win Incineration/g,
        'mini me\'s':/mini mes/g,
        //"I $1":/1 (can|did)/g,
        ' I ':/ 1 /g,
        '00':/0 0/g,
        '10':/1 0/g,
        '20':/2 0/g,
        '30':/3 0/g,
        '40':/4 0/g,
        '50':/5 0/g,
        '60':/6 0/g,
        '70':/7 0/g,
        '80':/8 0/g,
        '90':/9 0/g,
        'two':/I wo/ig,
        'drive':/dri ve/ig,
        'Sir':/Sr\./g,
        'would':/twould/g,
        'I won':/twon/g,
        '1 tael':/I tael/g,
        'I woke':/twoke/g,
        'chili workshop':/chiltworkshop/g,
        'Thank you':/Thankyou/g,
        'thank you':/thankyou/g,
        'twelve':/I welve/ig,
        'I wore':/twore/ig,
        'I work':/twork/ig,
        'Twice':/I wice/ig,
        'I worry':/tworry/ig,
        'network':/neI work/ig,
        'Twenty':/I wenty/ig,
        'chuckling':/chucking/ig,
        'hog warts':/hogwarts/ig,
        'quid itch':/quidditch/ig,
        'foot':/fooI/ig,
        //'#1':/No. I/g,
        'Class 1':/Class I/g,
        '1 pm':/I pm/ig,
        'It':/#1t/g,
        '"I':/"\#1/g,
        '“I':/“\#1/g,
        'I w':/#1 w/g,
        'five star':/★★★★★/g,
        'four star':/★★★★/g,
        'three star':/★★★/g,
        'two star':/★★/g,
        'one star':/★/g,
        '1 on 1':/I on I/g,
        'Tier 1':/Tier I/g,
        'I think':/1 think/g,
        'Sing He':/Xinghe/g,
        'Rapiecage':/Rapie\?age/ig, //Rapiéçage death mage character
        'quest line':/questline/ig,
        //'X I':/XI/g,
        '\'s':/��s/g,//��
        '\'t':/��t/g,
        '\'ll':/��ll/g,
        '*':/\*0$/g,
        '"':/��|"0$/g,
        '.':/\.\.|[\.”!?]0$/g,
        ' ':/ t |â€¦|=|_|-|\*\*.*book.*\*\*|\(.*webnovel.*\)|.*ZerahNeko.*|\&mldr\;|T\/L:.*E\/D:.*|^\!Report Chapter$|\[Read.*cross\]/ig,
        '】':/】0$/g,
     	}
    },
    sites: {
      readnovelfull:{
        content: '#chr-content',
        button: '.glyphicon-menu-up',
        next: '#next_chap',
        disabled: '[disabled]',
        addition: 36
      },
      allnovelfull:{
        content: '#chapter-content',
        button: '.glyphicon-menu-up',
        next: '#next_chap',
        disabled: '[disabled]',
        addition: 36,
        style: '#container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}'
      },
      novelnext:{
        content: '#chr-content',
        button: '.glyphicon-menu-up',
        next: '#next_chap',
        disabled: '[disabled]',
        style: '.footer {background:black;}'
      },
      qynovel: {
        content: '#chapter-container',
        chapter: '.chapter-title',
        button: '.control-action-btn',
        background: '#252729',
        next: '.nextchap',
        disabled: '.isDisabled',
        fn: function(){
          $('#container').addClass('dark-background').css('background-color','rgb(35, 35, 35)');
          setTimeout(function(){
          	//$(olv.site.content + ' div').remove();
          },1000);
        },
      },
      ranobes: {
      	content: '#arrticle',
        button: 'a.btn-icon:nth-child(3)',
        next: 'a.btn-icon:nth-child(3)',
        style: '.olv.btn {color: #82A82D;border-color: #82A82D;background: #121212;}'
      },
      novelight: {
      	content: '',
        button: '.chapter-control a.btn:nth-child(3)',
        next: '.chapter-control a.btn:nth-child(3)',
        style: '.olv.btn {color: #82A82D;border-color: #82A82D;background: #121212;}',
        addition: 40,
        bypass: function(){
          //https://novelight.net/book/chapter/205762
          //https://novelight.net/book/chapter/206961
          if( typeof bypass == 'undefined' )
            var bypass = '';

          bypass = 'https://novelight.net/book/ajax/read-chapter/206961';
          $.get(bypass, function(data){
            olv.bypass = data;
          });

          return;

          if( typeof fix == 'undefined' )
            var fix = '';

          fix = 'The nobles ⊛ Nоvеlιght ⊛  in Vern City have actual armies, not knights.\nIf ⊛ Nоvеlιght ⊛  you understand, that’s great.\nSo I seated Polaris at the table, took out some warm ✧ NоvеIight ✧ (Original source) bread from a heating device similar to a microwave, and retrieved fruit juice from the fridge.\nThe artillery fire came from ⊛ Nоvеlιght ⊛  the east, either shot along a line or from across the river.\nSince the military  «N.o.v.e.l.i.g.h.t»  had passed through the entrance of the mountain, all the trees were bent, lying on the ground, and countless footprints were visible.\nIn fact, there’s a memory ✧ NоvеIight ✧ (Original source) that suggests they are waiting for the situation to grow so that they can have a justification.';
          fix = fix.split('\n');
          fix.push('Following his shout, those in wind-up machines and those who can use magic  (Don’t copy, read here) surround Polaris.');
          fix.push('In other words, ◆ Nоvеlіgһt ◆ (Only on Nоvеlіgһt) some level of magic can be used by anyone if they practice. Magic that warms the body is very simple.');
          fix.push('Those who had the intelligence to understand the situation didn’t try to fix it; instead, ❀ Nоvеlігht ❀  they used it to their advantage.');

          //fix.entries().forEach(([key, val]) => { console.log(key, val); });

          if( typeof lr == 'undefined' )
            var lr = [[], []];

          lr = [['{', '«'], ['}', '»']];

          if( typeof replaceList == 'undefined' )
            var replaceList = [];

          replaceList = [
            '(Official version)',
            '(Original source)',
            '(Continue reading)',
            '(Read the full story)',
            '(Read more on our source)',
            '(Exclusive on Nоvеl𝚒ght)',
            '(Don’t copy, read here)',
            '(Only on Nоvеlіgһt)',
            '[N O V E L I G H T]'
          ];

          replaceList = [
            '(Don’t copy, read here)',
            '[N O V E L I G H T]',
            '⊛ Nоvеlιght ⊛'
          ];

          fix.entries().forEach(([key, val]) => {
            replaceList.entries().forEach(([rkey, rval]) => {
              //if( $(this).text().indexOf("(Official version)") != -1 )
                  //$(this).text( $(this).text().replace('(Official version)', '') );
              if( val.indexOf(rval) != -1 )
                val = val.replace(rval, '');
                //console.log( 1, rval );
            });

            var badChars = val.match(/[^a-zA-Z0-9 '"’“”.,!?\-;]/g);
            //console.log(badChars);

            if( badChars != null && badChars.length > 1 && badChars.indexOf('(') > -1 && badChars.indexOf(')') > -1 ) {
              badChars.length = badChars.indexOf('(');
              val = val.replace(/\(.*\)/, '');
            }

            if( badChars != null && badChars.length > 1 &&
               (badChars[badChars.length-1] == badChars[0] || lr[1].indexOf(badChars[badChars.length-1]) > -1 && lr[0].indexOf(badChars[0]) > -1) ) {
               //(badChars[badChars.length-1] == badChars[0] || badChars[badChars.length-1] == '}' && badChars[0] == '{') ) {
              var text = val;
              text = text.substr(0, text.indexOf(badChars[0])) + text.substr(text.indexOf(badChars[badChars.length-1], text.indexOf(badChars[0])+1)+1);
              //console.log(text);
            }
            else {
              console.log(badChars);
              console.log(val)
            }
          });
        },
        console: function(e){
          //return olv.site.return;
          if( e.keyCode == 13 ) {
            /*
            const LIKE_LINK = "/book/ajax/like-chapter/204238";
            const CHAPTER_ID = "204238";
            const BOOK_ID = "415"
            const REPORT_TITLE = 'Report 208 chapter by The Outer God Needs Warmth';

            const CHAPTER_TITLE = "208 chapter - Lost Dream (3)";
            const BOOK_TITLE = "The Outer God Needs Warmth";
            const PRICE = "0";
            */
            //console.log(olv.console.find('textarea').val());
            //'novel the-outer-god-needs-warmth'.split(' ')

            return 0;
          }
        },
        load: function(){
          olv.wait = function(){
            if( $(olv.obj).length < 1)
              setTimeout(olv.wait, 100);
            else {
              //the-outer-god-needs-warmth
              var novels = {"415": 'the-outer-god-needs-warmth'};
              var novel = {id: ''};

              if( typeof BOOK_ID != 'undefined' && typeof novels[BOOK_ID] != 'undefined' )
                novel.id = novels[BOOK_ID];

              if( novel.id != '' ) {
                olv.novel = GM_getValue('novel.'+novel.id);

                var chapter = {
                    id: CHAPTER_ID,
                    num: $('#table-of-contents-btn > span:nth-child(1)').text().replace('Chapter ', ''),
                    name: CHAPTER_TITLE,
                    url: window.location.toString(),
                    chapter_id: CHAPTER_ID
                  };

                if( JSON.stringify(olv.novel.chapter) != JSON.stringify(chapter) && olv.autoSave == 0 ) {
                  olv.novel.chapter = chapter;

                  GM_setValue('novel.'+novel.id, olv.novel);
                }
              }

              olv.site.chapter_title = 'Chapter ' + CHAPTER_TITLE.replace('chapter ', '');

              //console.log( $('.chapter-text') );
              olv.container = '.' + $('style:contains("block"):contains("important")').text().replace(/\.chapter.*|.*;/g, '').replace(/[^a-z]/ig, '');
              //$(olv.container)

              //perform cleanup and continuation
              $(olv.container+' button').remove();
              olv.paragraph = 0;
              $(olv.container).attr('id', 'chapter-content');
              olv.site.content = '#chapter-content';
              $(olv.site.content + ' > div').each( function(){ $(this).replaceWith( '<p>' + $(this).html() + '</p>' ); } );
              olv.init_buttons();

              if( $(olv.site.content + ' p:contains("Novelight.net")').length > 0 )
                $(olv.site.content + ' p:contains("Novelight.net")').remove();

              //fix style .olv .btn { display: inline; }
              $('head').append('<style>.olv .btn { display: inline; } .chapter-control { display:none; } .chapter-text {color: rgba(255, 255, 255, .6) !important;} body.dark-theme {background-color: #232323;}</style>');
              olv.reader.load();
              olv.content = $(olv.site.content).children();
              var count = 0;
              var lr = [['{', '«'], ['}', '»']];
              var replaceList = [
                '(Don’t copy, read here)',
                '[N O V E L I G H T]'
              ];
              olv.content.each(function(){
                replaceList.entries().forEach(([rkey, rval]) => {
                  if( $(this).text().indexOf(rval) != -1 )
                    $(this).text( $(this).text().replace(rval, '') );
                });

                var badChars = $(this).text().match(/[^a-zA-Z0-9 '"’“”.,!?\-;]/g);
                if( badChars != null && badChars.length > 1 && badChars.indexOf('(') > -1 && badChars.indexOf(')') > -1 ) {
                  badChars.length = badChars.indexOf('(');
                  $(this).text( $(this).text().replace(/\(.*\)/, '') );
                }

                if( badChars != null && badChars.length > 1 && (badChars[badChars.length-1] == badChars[0] || lr[1].indexOf(badChars[badChars.length-1]) > -1 && lr[0].indexOf(badChars[0]) > -1) ) {
                  var text = $(this).text();
                  text = text.substr(0, text.indexOf(badChars[0])) + text.substr(text.indexOf(badChars[badChars.length-1], text.indexOf(badChars[0])+1)+1);
                  $(this).text( text );
                }

                $(this).attr('para', count );
                count = count + 1;
              });

              $('.olv.parrot').show();
              if( olv.reader.auto != 0 )
                olv.read();
            }
          };

          if( $(':contains("You are not logged in to view the paid chapter")').length > 0 )
            return;

          olv.obj = '.chapter-text';

          //only run on a chapter page
          if( typeof CHAPTER_ID != 'undefined' )
            olv.wait();
          else
            $('.olv.parrot').hide();
          //console.log(olv.site);
          //console.log( $('.chapter-text') );
          //console.log($('style:contains("block"):contains("important")'))
          //olv.container = $('style:contains("block"):contains("important")').text().replace(/\.chapter.*|.*;/g, '').replace(/[^a-z]/ig, '');

        },
        read: function(){
          //$('div.chapter-text:nth-child(14) > div:nth-child(78)').text().replace(/[^a-zA-Z]N[^a-zA-Z]o[^a-zA-Z]v[^a-zA-Z]e[^a-zA-Z]l[^a-zA-Z]i[^a-zA-Z]g[^a-zA-Z]h[^a-zA-Z]t[^a-zA-Z]/ig, '');
        },
      },
      shanghaifantasy:{
        content: '.contenta',
        button: 'a[rel="next"]',
        next: 'a[rel="next"]',
        fn: function(){
          //This novel was translated on ShanghaiFantasy, https://shanghaifantasy.com/novel/after maxing out all classes/. If you are not reading on this website, it was stolen and aggregated
          $(olv.site.content+' p').each(function(){
            if( /novel was translated on ShanghaiFantasy/.test($(this).text()) )
              $(this).remove();
          });

          if( $('button.flex:contains("Synopsis")').length == 1 ) {
            setTimeout(function(){
            olv.reader.auto = 0;

            $('div[x-show="activeTab===\'Synopsis\'"]').attr('id', 'chapter-content');
            olv.paragraph = 0;
            olv.content = $(olv.site.content).children();
            olv.init_buttons();
            olv.populateVoiceList();
            olv.reader.load();
            var count = 0;
            olv.content.each(function(){
              $(this).attr('para', count );
              count = count + 1;
            });
            $('.olv.parrot').show();
            //olv.fn.resetPara();
            //olv.fn.p.options();
            });
          }

          if( $(olv.site.content + ' p').length > 0 ) {
            olv.nexthref = $(olv.site.next).eq(0).attr('href');
            olv.reader.cacheNext();
            olv.preLoadNext = 1;
          }
        },
      },
      novelbin:{
        content: '#chr-content',
        button: '.glyphicon-menu-up',
        next: '#next_chap',
        disabled: '[disabled]',
        style: 'body {background: black !important;} footer.footer {background-color: #232323; } .dark-background .chapter .chr-c p {1color:rgba(200, 200, 200, 0.6) !important} #container {background-color: #171717 !important;} #chr-content {color:rgba(200, 200, 200, 0.6) !important}',
        fn: function(){
          //console.log('ficl pof', chapter, $('body').attr('id'), 'tinymce');
          if( typeof chapter != 'undefined' ) {
            //console.log('woeifnaowine', $('#chr-content p:contains("Patreon")'));
            //setTimeout(olv.site.fn, 100);
            //return;
          }

          //var obj = $('.navbar-breadcrumb');
          //if( obj.length && $(window).scrollTop() > obj.offset().top && !obj.hasClass('pos-top') ) {
          //if(false)
          if( typeof olv.navbar == 'undefined' )
            olv.navbar = function(){
              if( !$('.navbar-breadcrumb').hasClass('pos-top') && typeof $('.navbar-breadcrumb').offset() != 'undefined' ) {
                //obj.offset().top + $(window).height()
                //obj.addClass('pos-top');
                //obj.attr('style', "display: block; position: fixed;top: 0;z-index: 100;background-color: #232323;width: 100%;");
                //$('#wrapper').css('margin-top', '33px');

                //var offnext = $('.navbar-breadcrumb').next().offset();
                $('.navbar-breadcrumb').attr('style', "display: block; position: fixed;top: "+$('.navbar-breadcrumb').offset().top+"px;z-index: 100;width: 100%;");
                //offnext.top = offnext.top - 36;
                //$('.navbar-breadcrumb').next().offset( offnext );
                $('.navbar-breadcrumb').animate({'top': '0'}, 500);
                $('#wrapper').animate({'margin-top': '33px'}, 500);
                $('.navbar-breadcrumb').addClass('pos-top');

                if( typeof $('.navbar-breadcrumb :contains("Chapter"):last').offset() != 'undefined') {
                  var obj = $('.navbar-breadcrumb :contains("Chapter"):last');
                  olv.navbarChapter = obj;

                  //<span class="glyphicon glyphicon-book" style="color: rgb(111, 111, 111);"></span>
                  setTimeout(function(){
                  var name = '';

                  //'Ongoing'
                  if( is('olv.novel.latest.name') && /[0-9]+/g.test(olv.novel.latest.name) ) {
                    var num = olv.novel.latest.name.match(/[0-9]+/g);

                    if( num.length )
                      name = '<span itemprop="name" class="lastNum" style="margin-left: 2px;">'+num[0]+'</span>';

                    $('.navbar-breadcrumb .novel-link').parent().append(name);
                  }

                  }, 400);

                  $('.navbar-breadcrumb .novel-link').text('');
                  $('.navbar-breadcrumb .novel-link').closest('li').addClass('active');
                  $('.navbar-breadcrumb .novel-link').addClass('glyphicon');
                  $('.navbar-breadcrumb .novel-link').addClass('glyphicon-book');
                  $('.navbar-breadcrumb .novel-link').css('color', '#8D8D8D');

                  //if( $('.olv-chapter-title .current').text().length + 6 > olv.navbarChapter.text().trim().length )
                  //obj.text( $('.olv-chapter-title .current').text() );
                  //$('.olv-chapter-title').hide();
                  //<span class="glyphicon glyphicon-list-alt"></span>
//<a class="novel-link glyphicon glyphicon-book" itemprop="item" href="" title="" style="color: rgb(141, 141, 141);"></a>

                  if( /[Cc]hapter/.test(obj.text().trim()) )
                    obj.text( obj.text().trim().replace(/[Cc]hapter/, 'C') );

                  $('.navbar-breadcrumb .novel-link').parent().append('<a class="chr-jump glyphicon glyphicon-list-alt" style="margin-left: 4px; margin-right:1px; color: rgb(141, 141, 141);"></a>');

                  if(false)
                  if( (obj.offset().left + obj.width()) > $(window).width() ) {
                    var over = Math.round((obj.offset().left + obj.width()) - $(window).width());
                    $('.navbar-breadcrumb .novel-link').parent(':header').attr('orgwidth', obj.width() );
                    $('.navbar-breadcrumb .novel-link').parent(':header').attr('olvwidth', over + Math.round(over/10) );
                    $('.navbar-breadcrumb .novel-link').parent(':header').width( over + Math.round(over/10) );
                    $('.navbar-breadcrumb .novel-link').parent(':header').css('overflow', 'hidden');

                    $(document).off('mouseover', '.navbar-breadcrumb .novel-link');
                    $(document).off('mouseover', '.navbar-breadcrumb .novel-link', function(){
                      $(this).parent(':header').animate({'width': $(this).parent(':header').attr('orgwidth') }, 100);
                    });

                    $(document).off('mouseout', '.navbar-breadcrumb .novel-link');
                    $(document).off('mouseout', '.navbar-breadcrumb .novel-link', function(){
                      $(this).parent(':header').animate({'width': $(this).parent(':header').attr('olvwidth') }, 100);
                    });
                  }
                }

                //$('.navbar-breadcrumb :contains("Chapter"):last').text(function(i, s){ return s.replace('Chapter', 'C'); });

                olv.site.addition = 36;
              }
            };

          if( typeof olv.popLastNum == 'undefined' )
            olv.popLastNum = function(num){
              //olv.lastNum
              if( typeof olv.lastNum == 'undefined' )
                olv.lastNum = num;

              if( $('.navbar-breadcrumb .lastNum').length == 0 ) {
                var name = '';
                name = '<span itemprop="name" class="lastNum" style="margin-left: 2px;">'+num+'</span>';
                $('.navbar-breadcrumb .novel-link').parent().append(name);
              }
            };

          if( typeof olv.propChapterList == 'undefined' )
            olv.propChapterList = function(){
              if( typeof ajaxChapterArchiveUrl != 'undefined' && olv.chapters.length == 0 )
                $.get(ajaxChapterArchiveUrl, { novelId: olv.novel.id }).done((function(a) {
                  olv.chapters = a;
                  //console.log(a);
                  olv.chapters = $(olv.chapters).find('a');
                  $('.navbar-breadcrumb').append('<style>.navbar-breadcrumb .chr-bar a {display:block;}</style>\
<div class="container chr-bar" style="display:none; height: 160px; overflow: hidden; overflow-y: scroll;"></div>');
                  //olv.chapters.each(function(){ console.log($(this).get(0).outerHTML) });
                  olv.chapters.each(function(){ $('.navbar-breadcrumb .chr-bar').append($(this).get(0).outerHTML); });

                  $('.navbar-breadcrumb .chr-bar').scrollTop( $('.chr-bar a[href="'+olv.chapter.url+'"]').offset().top -20 );

                  olv.popLastNum($('.navbar-breadcrumb .chr-bar a').length);
                }));
            };

          olv.navbar();

          if( typeof olv.lastNum == 'undefined' )
            setTimeout(olv.propChapterList, 400);
          else
            olv.popLastNum(olv.lastNum);

          //if( !olv.is('chapters') ) {
          if( $('.navbar-breadcrumb .chr-bar').length == 0 ) {
            $('.navbar-breadcrumb').off("click", "a.chr-jump");
            $('.navbar-breadcrumb').on("click", "a.chr-jump", function(){
            //ajaxChapterOptionUrl "https://novelbin.com/ajax/chapter-option"

              if( olv.chapters.length == 0 ) {
                olv.propChapterList();
                setTimeout(function(){$('.navbar-breadcrumb .chr-bar').show();}, 400);
              }
              else {
                $('.navbar-breadcrumb .chr-bar').toggle();
                setTimeout(function(){
                  if( 0 != ( $('.chr-bar a[href="'+olv.chapter.url+'"]').offset().top -20 ) ) {
                    $('.navbar-breadcrumb .chr-bar').scrollTop(0);
                    $('.navbar-breadcrumb .chr-bar').scrollTop( $('.chr-bar a[href="'+olv.chapter.url+'"]').offset().top -20 );
                  }
                  }, 400);
              }

              if(false)
              if( $('.navbar-breadcrumb .chr-bar').is(':visible') ) {
                //$('.chr-bar a[href="'+olv.chapter.url+'"]').offset().top
                $('.navbar-breadcrumb .chr-bar').scrollTop( $('.chr-bar a[href="'+olv.chapter.url+'"]').offset().top -20 );
              }
            });

            olv.chapters = [];
          }

          olv.setValue = function(){
            console.log(arguments)
            //GM_setValue(key, val);
          };

          olv.novelChapterList = function(){
            olv.novelList = GM_listValues();
            var group = [];
            var text = '';

            //Object.entries({"key": "value"...}).forEach(([key, val]) => {});

            Object.entries(olv.novelList).forEach(([key, val]) => {
              //olv.novel[key] = val;
              if( val.startsWith('novel.') ) {

                var ent = GM_getValue(val);
                if( typeof ent.chapter == 'undefined' ) {
                  //GM_deleteValue(val);
                  //group.push([ent.name, ent.chapter.name, ent.chapter.url]);
                  //text += ent.name + "\n" + ent.chapter.name + "\n" + ent.chapter.url + "\n\n";
                  //console.log(ent.name, ent.chapter.name, ent.chapter.url);
                }
              }
            });

            console.log(group);
            $('.textarea').val(text);
          };
          //📚📖
          //console.log('entries', GM_listValues());
          olv.useFrames = 1;
          var list;
          olv.queue = [];
          olv.novels = [];

          olv.tagIcons = {
                    'Female protagonist':'♀️',
                    //'Josei':'♀️',
                    'Shoujo': '🌸',
                    'Male protagonist':'♂️',
                    'Academy':                        '🏫',
                    'Archery':                        '🏹',
                    'Assassins':                      '🥷',
                    'Army building':                  '🪖',
                    'Military':                       '🪖',
                    'Acting':                         '🎥',
                    'Alchemy':                        '💊',
                    'Pill concocting':                '💊',
                    'Police':                         '👮',
                    'Firearms':                       '🔫',
                    'Doctors':                        '🏥',
                    'Pregnancy':                      '👶',
                    'Hidden abilities':               '㊙️',
                    'Mystery solving':                '🔎',
                    'Investigations':                 '🔎',
                    'Detectives':                     '🔎',
                    'Secret identity':                '🪪',
                    'Second chance':                  '🔃',
                    'Power couple':'',
                    'Royalty':                        '👑',
                    'Betrayal':'',
                    'Folklore':'',
                    'Immortals':                      '⛩️',
                    'Ancient china':                  '🏯',
                    'Ancient times': '🏯',
                    'Overpowered protagonist':'💪',
                    'Strong to stronger':'💪',
                    'Cunning protagonist':'🦊',
                    'Multiple protagonists':'👫',
                    'Reincarnation': '♾',
                    'Transmigration': '♾',
                    'Cultivation':'☯️',
                    'Heavenly tribulation':'🌩️',
                    'Special abilities':'🧲',
                    'Death': '⚰️',
                    'Kingdoms':'🏰',
                    'Evolution': '🧬',
                    'Ghosts': '👻',
                    'Zombies': '🧟',
                    'Vampires': '🧛',
                    'Elves':'🧝',
                    'Wizards': '🧙‍♂️',
                    'Dragons': '🐲',
                    'Gamers': '🎮',
            'Otome game':'🎮',
                    'Magic':'🪄',
                    'Elemental magic':'🪄',
                    'Dark': '🕶️',
                    'Modern day': '🛰️',
                    //'System': '🎰',
                    'Weak to strong':'🧗',
                    'Daoism':'🕉️',
                    'Buddhism':'☸️'
                  }; //☯️🥋⚕️🕉️⛩️📿☸️👺☮️💊⚗️🥷

          olv.popTags = function(novel, row){
            if ( typeof novel == 'undefined' )
              return;

            if( row.find('.status').length > 0 )
              return;

                  var tagIcons = olv.tagIcons;
                  //console.log(novel.name, novel.tag)
                  var tagList = '';

              ['genre', 'tag'].forEach(obj => {
                tagList = '';
                if ( typeof novel[obj] != 'undefined' && typeof novel[obj].sort != 'undefined' ) {
                  row.append('<span class="novel-'+obj+'s" style="display:none;text-align:1right;"></span>');
                  novel[obj].sort();
                  Object.keys(novel[obj]).forEach(key => {
                    var tag = novel[obj][key].trim();
                    var icon = '';

                    if( typeof tagIcons[tag] != 'undefined' ) {
                      if( tagList.indexOf(tagIcons[tag]) == -1 )
                      tagList += tagIcons[tag];
                      icon = tagIcons[tag]+' ';
                    }

                    row.find('.novel-'+obj+'s').append('<a href="https://novelbin.com/'+(obj=='tag'?'tag/'+tag.toUpperCase():'genre/'+tag.toLowerCase())+'" class="col-xs-4" style="padding-right:10px; display:block;">'+icon+tag+'</a>');
                  });

                    row.find('.novel-'+obj+'s').prepend('<h3 class="col-xs-12" style="padding-right:10px;font-weight: bold;margin-bottom: 5px; font-size: 18px; display:block;">'+obj[0].toUpperCase()+obj.substr(1)+'</h3>')
                    row.find('.col-xs-7 div').append('<h3 class="'+obj+'s" style="1float:right;">'+(tagList.length?tagList:(obj=='tag'?''+obj+'s':'?'))+'</h3>');

                    //row.find('.col-xs-7 div').prepend('<span class="tag" style="float:right;">♂️</span>');
                }
              });



              tagList = '';
                ['female ', 'girl '].forEach(obj => {
                if( RegExp(obj, "i").test(row.find('.novel-title').text()) && tagList.indexOf(tagIcons['Josei']) == -1) {
                  //row.find('.genres').append(tagIcons['Josei']);
                  tagList+=tagIcons['Josei'];
                }
              });

              if( tagList.length )
                row.find('.genres').text(tagList);

                if( typeof novel.latest != 'undefined' && /END|End|Afterword/.test(novel.latest.name) )
                  novel.status = '- Completed -';

                if( typeof novel.latest != 'undefined' && typeof novel.chapter != 'undefined' && novel.latest.name == novel.chapter.name )
                  novel.status = 'Caught Up';

                row.find('.author').prepend('<span class="status" style="float:right; margin-right:20px;">'+novel.status+'</span>');

                //olv.novel.latest.name.replace(/chapter ([0-9]+).*/i, " / $1");
              if( typeof novel.latest != 'undefined' )
                novel.latest.num = novel.latest.name.match(/([0-9]+).*/);

                if( typeof novel.latest != 'undefined' && typeof novel.chapter != 'undefined' && novel.latest.name != novel.chapter.name && novel.latest.num != null )
                  novel.chapter.num = novel.chapter.name.match(/([0-9]+).*/);

                if( typeof novel.latest != 'undefined' && novel.latest.num != null )
                  row.find('.author').prepend('<span class="lastNum" style="float:right; margin-right:140px; width:60px;text-align:right;">'+ (typeof novel.chapter != 'undefined' && novel.chapter.num != null?novel.chapter.num[novel.chapter.num.length-1] + ' / ':'') + novel.latest.num[novel.latest.num.length-1]+'</span>');

            if( $('#novel-detail-tabs,.desc-text').length == 2 ) {
              $('.novel-tags').show();
              $('.novel-genres').show();
            }

            if( ['?', 'undefined'].indexOf( row.find('.genres').text() ) != '-1' && row.find('.tags').length == 0 ) {
              var gen = [];

              novel.genre.forEach(g => {
                if( g.indexOf(' ') == -1)
                  gen.push( g );
                else
                  gen.push( g );
              });

              row.find('.genres').text( '🗃️' + gen.join(', ') );
            }
          }

          olv.applyFilters = function(){
            var tags = localStorage.getItem('olvfilter');

            if( tags != null && tags != '' ) {
              $('.olvfilter .tags').html(tags);

              setTimeout(function(){
                $('.list .row').hide();
                $('.list .row').toggleClass('hidden');
                $('.olvfilter .tags span').each(function(){
                  var row = $('.list .row .tags:contains('+$(this).text()+')').parents('.row');
                  row.show();
                  row.toggleClass('hidden');
                });
              }, 1000);
            }

            tags = localStorage.getItem('olvexclude');

            if( tags != null && tags != '' ) {
              $('.olvexclude .tags').html(tags);

              setTimeout(function(){
                $('.olvexclude .tags span').each(function(){
                  var row = $('.list .row .tags:contains('+$(this).text()+')').parents('.row');
                  row.hide();
                  row.toggleClass('hidden');
                });
              }, 1000);
            }
          };

          setTimeout(function(){
          if( $('#list-page').length ) {
            olv.eventListener = function(event){
              //console.log(event.data);
              //if( typeof event.data == 'string' && typeof olv[event.data] == 'function')
                //olv[event.data]();

              //console.log(event.data.novel);
              if( typeof event.data.novel != 'undefined' ) {
                var row = jQuery('.novel-title a[href="'+event.data.novel.url+'"]').closest('.row');
                var novel = Object.assign({}, olv.novels.find(novel => novel.id === event.data.novel.id), event.data.novel);
                //olv.novels.find(novel => novel.id === 'my-wife-turns-out-to-be-an-empress-of-the-dynasty');
                olv.popTags(event.data.novel, row);
                $(row).find('iframe').remove();
                olv.applyFilters();
              }
            };

            if( window === window.parent ) {
              //console.log('add event listener');
              window.addEventListener("message", olv.eventListener, false);
            }

            list = $('.row .cover');

            olv.queueRow = function(){
              var row = $(this).parents('.row');
              olv.this = $(this);

              if( row.find('.status').length > 0 )
                return;

              //if( row.hasClass('processing') )
                //return;

              //row.addClass('processing');

              //console.log($(this), $(this).attr('src'))
              var cover = $(this).attr('data-src');//.replace(/.*\//, '').replace(/\..*/ig, '');

              if ( typeof cover == 'undefined' )
                cover = $(this).attr('src');

              var id = cover.replace(/.*\//, '').replace(/\..*/ig, '');
              var novel = GM_getValue('novel.'+id) || {id: id, cover: cover};

              if( typeof novel.chapter == 'undefined' )
                novel = {id: id, cover: cover};

              //olv.novels.push(novel);

              /*if( typeof olv.novel.latest == 'undefined' ) {
                olv.novel.latest = {
                  url:$('.l-chapter a').attr('href'),
                  name:$('.l-chapter a').text().trim(),
                  updated: $('.l-chapter .item-time').text().trim()
                };

                GM_setValue('novel.'+olv.novel.id, olv.novel);
              }*/

              if( typeof novel != 'undefined' ) {
                  row.find('.glyphicon-book').css('color', '#6F6F6F');
                if( typeof novel.chapter != 'undefined' )
                  row.find('.glyphicon-book').css('color', 'green');//.replaceWith('<span>📖</span>');
              //glyphicon-book

                if( typeof novel.name == 'undefined' ) {
                  novel = {
                    'id':novel.id,
                    'name': row.find('.novel-title').text().trim(),
                    'url': row.find('.novel-title a').attr('href'),
                    'cover':cover,
                    'author':row.find('.author').text().trim(),
                    'latest': {
                      url:row.find('.chr-text').parent().attr('href'),
                      name:row.find('.chr-text').text().trim()
                    }
                  };

                  if( typeof novel.chapter != 'undefined' )
                  GM_setValue('novel.'+id, novel);
                }

                //if latest chapter == false
                if( typeof novel.latest == 'undefined' || novel.latest != row.find('.chr-text').text().trim() ) {
                  novel.latest = {
                    url:row.find('.chr-text').parent().attr('href'),
                    name:row.find('.chr-text').text().trim()
                  };

                  if( typeof novel.chapter != 'undefined' )
                  GM_setValue('novel.'+id, novel);
                }

               };

              olv.novels.push(novel);

              if( typeof novel.genre != 'undefined' )
              olv.popTags(novel, row);

              if( typeof novel == 'undefined' ) {
                novel = {
                  'id':id,
                  'name': row.find('.novel-title').text().trim(),
                  'url': row.find('.novel-title a').attr('href'),
                  'cover':cover,
                  'author':row.find('.author').text().trim(),
                  'latest': {
                    url:row.find('.chr-text').parent().attr('href'),
                    name:row.find('.chr-text').text().trim()
                  }
                };

                if( typeof novel.chapter != 'undefined' )
                GM_setValue('novel.'+id, novel);

                if(false)
                row.find('.glyphicon-book').css('color', 'red');
              }

              if( typeof novel.cover == 'undefined' ) {
                novel.cover = $(this).attr('src');
                if( typeof novel.chapter != 'undefined' )
                GM_setValue('novel.'+id, novel);
              }

              //console.log($(this), novel);
              if( typeof novel.genre == 'undefined' ) {
                //console.log($(this), novel);
                if(false)
                row.find('.glyphicon-book').css('color', 'red');
                olv.queue.push({
                  'this':this,
                  url:novel.url
                });

                //
              }

              if( typeof novel.chapter != 'undefined' && typeof novel.latest != 'undefined' && RegExp( novel.chapter.id + '$' ).test(novel.latest.url) )
                row.find('.glyphicon-book').css('color', 'purple');

            };

            //if( $('.olvListAutoPop').text() != 'Auto Pop ✔️' )
            $('.row .cover').each(olv.queueRow);

            olv.autoPop = function(){
              if( typeof olv.populating == 'undefined' )
                olv.populating = 0;

              //console.log('popping', olv.populating);
              if( olv.populating )
                return;

              olv.populating = !olv.populating;
              /*var autoPop = localStorage.getItem('olvListAutoPop');

              if( tags != null && tags != '' ) {
                $('.olvfilter .tags').html(tags);*/
              //$('.olvfilter .tags span').length
              var dir = 'next';

              if( arguments.length > 0 && arguments[0] == 'prev' )
                dir = arguments[0];

              olv.popDir = dir;

              if( $('.pagination .'+dir).hasClass('disabled') )
                return;

              if( $('.olvListAutoPop').text() == 'Auto Pop ✔️' ) {
                //load next page
                //olv.nextPage = $.get($('.pagination .next a').attr('href')).done();
                $('.col-novel-main .row:not([page])').attr('page', $('.pagination .active').text().trim());

                //console.log($('.pagination .next a'), $('.pagination .next a').attr('href'));
                $.get( $('.pagination .'+dir+' a').attr('href')).done(function( data ) { //always
                  olv.populating = 0;
                  olv.nextPage = data;

                  $('.pagination').html($(data).find('.pagination').html());
                  $('.olvpage').html('<span class="error"></span><span>Page<span class="status">'+$('.olvpage .status').text()+'</span>: '+$('.olvpage').attr('initPage')+'-'+$(data).find('.pagination .active').text().trim()+ ' / ' + $('.olvpage').attr('lastPage') + '</span>');

                  //$(data).find('.list .row').each(function(){ $('.list .row:eq(0)').parent().append($(this)); });
                  //$('.list .row:not([page])')
                  if( olv.popDir == 'next' )
                    $('.col-novel-main .row:eq(0)').parent().append($(data).find('.col-novel-main .row'));
                  else
                    $('.col-novel-main .row:eq(0)').parent().prepend($(data).find('.col-novel-main .row'));

                  $('.col-novel-main .row .cover').each(olv.queueRow);

                  //olv.queue = olv.queue.reverse(); olv.processQueue();
                  //olv.applyFilters();
                  olv.processQueue();

                  $('.list .row:not([page]) .cover[data-src]').each(function(){
                    if( $(this).closest('.row').attr('style') != "display: none;" ) {
                      $(this).attr('src', $(this).attr('data-src'));
                      $(this).attr('style', 'display: inline-block;');
                      $(this).removeAttr('data-src');
                    }
                    else
                      $(this).closest('.row').addClass('hidden');
                  });

                  //if( $('.list .row:not(.hidden)').length < 100 )
                    //setTimeout(olv.autoPop, 1000);
                  //if( $('.pagination .next').hasClass('disabled') )
                    //olv.autoPop = function(){};

                  //setTimeout(function(){ olv.autoPop(); }, 1000);
                }).fail(function(e){
                  //setTimeout(function(){ olv.autoPop(); }, 6000);
                  olv.popFail = e;

                  if( e.status == 429 )
                    setTimeout(function(){ olv.autoPop(); }, 10000);

                  //console.log('popFail', e);
                  if( $('.olvpage .error').children().length == 0 )
                    $('.olvpage .error').html('<span class="pop"></span><span class="tag"></span>');

                  //$('.olvpage .error .pop').text('Pop Fail ');
                });
              }
            };

            $('.olvpage').attr('initPage', $('.pagination .active').text().trim());
            $('.olvpage').attr('lastPage', $('.pagination .last a').attr('href').replace(/.*page=/, ''));
            //$('.olvpage').html('<span>Page: '+$('.pagination .active').text().trim()+'</span>');
            $('.olvpage').html('<span class="error"></span><span>Page<span class="status"></span>: '+ ($('.olvpage').attr('initPage')==$('.olvpage').attr('lastPage')?$('.olvpage').attr('initPage'):$('.olvpage').attr('initPage')+' / ' + $('.olvpage').attr('lastPage')) + '</span>');

            $(document).off('click', '.olvpage');

            olv.popBtn = function(){
              $('.olvpage .error').html('<span class="pop"></span><span class="tag"></span>');
              $('.olvpage .status').text(' 0% ');
              //get percent loaded
              //Number.parseInt($('.col-novel-main .row .status').length / $('.col-novel-main .row').length * 100)
              olv.populating = 0;

              if( Number.parseInt($('.col-novel-main .row .status').length / $('.col-novel-main .row').length * 100) > 90)
                olv.autoPop(arguments);
              else {
                olv.queue = [];
                $('.row').removeClass('processing');
                $('.col-novel-main .row .cover').each(olv.queueRow);
                olv.processQueue();
              }
            };

            if( Number($('.olvpage').attr('initPage')) != 1 ) { //«
              $('<span class="pop prev"> « </span>').insertBefore('.olvpage');
              $('<span class="pop next"> » </span>').insertAfter('.olvpage');

              $(document).off('click', '.olvbc .pop');
              $(document).on('click', '.olvbc .pop', function(){
                //console.log( $(this).attr('class') );
                if( $(this).hasClass('prev') )
                  olv.popBtn('prev');
                else
                  olv.popBtn();
              });
            }
            else {
              $(document).on('click', '.olvpage', olv.popBtn);
            }

            $(document).on('click', '#list-page .row .tags', function(){
              var row = $(this).parents('.row');
              row.find('.novel-tags').toggle();
              row.find('.novel-genres').toggle();
            });

            $(document).on('click', '#list-page .row .genres', function(){
              var row = $(this).parents('.row');
              row.find('.novel-tags').toggle();
              row.find('.novel-genres').toggle();
            });

            $(document).on('mouseover', '#list-page .row .novel-title', function(){
              var row = $(this).parents('.row');
              row.find('.novel-tags').show();
              row.find('.novel-genres').show();

              //if( $('.olvfilter .tags span').length > 0 )
              //olv.autoPop();
            });

            $(document).on('mouseout', '#list-page .row .novel-title', function(){
              var row = $(this).parents('.row');
              row.find('.novel-tags').hide();
              row.find('.novel-genres').hide();
            });

            olv.queue = olv.queue.reverse();

            olv.descSearch = ['snow', 'lotus'];

            olv.iframeError = function(){
              console.log('iframe error: ', arguments);
            };

            olv.processQueue = function(){
              if ( olv.queue.length < 1 ) {
                //$('li.next > a:nth-child(1)').click();
                setTimeout(function(){
                  //if( $('li.next').hasClass('disabled') == false ) window.location = $('li.next > a:nth-child(1)').attr('href');
                }, 2000);
                return false;
              }

              //console.log('queue before pop', olv.queue.length);
              var row = olv.queue.pop();
              //console.log('queue after pop', olv.queue.length);

              if( $(row.this).parents('.row').find('.status').length > 0 )
                return;
                //$(row.this).parents('.row').removeClass('processing');

              if( $(row.this).parents('.row').hasClass('processing') )
                return;

              $(row.this).parents('.row').addClass('processing');

              //load frame
              if(false)
              $(row.this).parents('.row').find('.glyphicon-book').css('color', 'red');
              $(row.this).hide();
              $.get(row.url, function(data){
                //olv.getdata = data;
                var d = $(data);
                var nov = {
                  'id':d.find('#rating').attr('data-novel-id'),
                  'name': d.find('.title:eq(0)').text().trim(),
                  'url': row.url,
                  'cover':d.find('.book .lazy').attr('data-src'),
                  'author':d.find('[itemprop="author"] meta[itemprop="name"]').attr('content').trim(),
                  'status': d.find('.info-meta h3:contains("Status")').parent().find('a').text().trim()
                };

                if( typeof olv.descSearch != 'undefined' && olv.descSearch.length > 0 )
                  if( d.find('.tab-pane:eq(0)' + ':contains("' + olv.descSearch.join('"):contains("') + '")').length > 0 )
                    $(row.this).parents('.row').find('.glyphicon-book').css('color', 'pink');

                /*
                'latest': {
                    url:d.find('.l-chapter a.chapter-title').attr('href').trim(),
                    name:d.find('.l-chapter a.chapter-title').attr('title').trim(),
                    updated: d.find('.l-chapter .item-time').text().trim()
                  }*/

                var g = d.find('.info-meta h3:contains("Genre")').parent();
                var c = g.find('a').length;
                if( c > 0 ) {
                  nov.genre = [];

                  for( var i = 0; i < c; i++ )
                    nov.genre.push(g.find('a:eq('+i+')').text().trim());
                }

                g = d.find('.info-meta h3:contains("Tag")').parent();
                c = g.find('a').length;
                if( c > 0 ) {
                  nov.tag = [];

                  for( var i = 0; i < c; i++ )
                    nov.tag.push(g.find('a:eq('+i+')').text().trim());
                }

                //olv.popTags(nov, row);
                var ro = jQuery('.novel-title a[href="'+row.url+'"]').closest('.row');
                var novel = Object.assign({}, olv.novels.find(novel => novel.id === nov.id), nov);
                //olv.novels.find(novel => novel.id === 'my-wife-turns-out-to-be-an-empress-of-the-dynasty');
                olv.popTags(novel, ro);
                //$(row).find('iframe').remove();
                olv.applyFilters();

                var stat = Number.parseInt($('.col-novel-main .row .status').length / $('.col-novel-main .row').length * 100);
                $('.olvpage .status').text(stat == 100 ? '' : ' ' + stat + '% ');
              }).fail(function(e){
                //setTimeout(function(){ olv.autoPop(); }, 6000);
                olv.tagFail = e;

                if( e.status == 429 )
                    setTimeout(function(){ olv.processQueue(); }, 10000);

                //console.log('tagFail', e);
                if( $('.olvpage .error').children().length == 0 )
                  $('.olvpage .error').html('<span class="pop"></span><span class="tag"></span>');

                //$('.olvpage .error .tag').text('Tag Fail ');
              });

              //$(row.this).parents().eq(0).append('<iframe src="'+row.url+'" onerror="olv.iframeError" style="width: '+$(row.this).width()+'px;height: '+$(row.this).height()+'px;"></iframe>');

              //$(row.this).parents().eq(0).find('iframe').get(0).contentWindow.onerror = olv.iframeError;

              //<iframe src="https://novelbin.com/b/who-let-him-cultivate-immortality" onload="olv.innerLoaded" style="width: 178.666666px;height: 79.499966px;"></iframe>
              //var novel = GM_getValue('novel.'+id);
              //olv.popTags(novel, row);

              setTimeout(function(){
                olv.processQueue();

                setTimeout(function(){
                  $(row.this).show();
                  //$(row.this).parents().eq(0).find('iframe').hide();
                  //$(row.this).parents('.row').find('.glyphicon-book').css('color', 'rgb(111, 111, 111)');

                  var c = $(row.this).attr('data-src');//.replace(/.*\//, '').replace(/\..*/ig, '');

                  if ( typeof c == 'undefined' )
                    c = $(row.this).attr('src');

                  var ident = c.replace(/.*\//, '').replace(/\..*/ig, '');

                  //var nov = GM_getValue('novel.'+ident);

                  //olv.popTags(nov, $(row.this).parents('.row'));

                }, 1); // 2000
              }, 100); // 1000
            };

            //olv.innerLoaded = function(){ console.log($(this)); }

            setTimeout(olv.processQueue, 1000);

            //GM_listValues()
            olv.sortCategories = function(){
              //var novelList = GM_listValues();
              var novelList = ['novel.12-miles-below', 'novel.100-love-from-the-boss'];
              var genre = {};
              var tag = {};

              Object.keys(novelList).forEach(key => {
                var novel = GM_getValue(novelList[key]);
                //var value = novelList[key];
                olv.novel = novel;

                if( typeof novel.genre != 'undefined' ) {
                  Object.keys(novel.genre).forEach(key => {
                    if( typeof genre[novel.genre[key]] == 'undefined' )
                      genre[novel.genre[key]] = [];

                    genre[novel.genre[key]].push(novel.id);
                  });
                }

                if( typeof novel.tag != 'undefined' ) {
                  Object.keys(novel.tag).forEach(key => {
                    if( typeof tag[novel.tag[key]] == 'undefined' )
                      tag[novel.tag[key]] = [];

                    tag[novel.tag[key]].push(novel.id);
                  });
                }

              });

              console.log('sortCategories', genre, tag);
            };

            //olv.sortCategories();

            return false;
          }
            }, 300);

          /*
  "id": "masters-untamed-wife",
  "name": "Master&#x27;s Untamed Wife",
  "url": "https://novelbin.com/b/masters-untamed-wife",
  "chapter": {
    "id": "chapter-4",
    "name": "Chapter 4 - Colors Of Life",
    "url": "https://novelbin.englishnovel.net/novel-book/masters-untamed-wife/chapter-4",
    "chapter_id": "chapter-4"
  },
          */

        if( $('#list-page').length ) {
          //clean up
          if( $('#list-page .list-novel .header-list h2 .glyphicon-book').length > 0 ) {
            $('#list-page .list-novel .header-list h2 .glyphicon-book').remove();
          }

          //add book icon?
          //$('#list-page .list-novel .header-list h2').prepend('<span class="glyphicon glyphicon-book" style="color: rgb(111, 111, 111);"></span>');

          olv.style += '.option-list > h2 {display: inline-block; font-family: \'Roboto Condensed\'; font-size: 20px; height: 40px; line-height: 40px; max-width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-bottom: 1px solid #4E4E4E;}';

          $(document).off('click', '#list-page .archive .header-list h2');
          $(document).on('click', '#list-page .archive .header-list h2', function(){
            //first check if options exist
            if( $('#list-page .archive .option-list').length == 0 ) {
              $(this).attr('origin', $(this).text().trim());

              var optList = '<div class="option-list" style="padding: 0 10px;margin-top:'+$('#list-page .archive .header-list h2').height()+'px; display:none; float: left;position: absolute;background: black;z-index: 10000;">';
              optList += '<h2 type="all">Stored Novel List (all)</h2>';

              var path = window.location.pathname.split('/');

              if( $('a[href="'+['', path[1], path[2]].join('/')+'"]:eq(0)').length > 0 )
                optList += '<br /><h2 type="'+path[1]+'" obj="'+path[2]+'">Stored '+path[1][0].toUpperCase() + path[1].substr(1)+ ': ' +path[2]+' List</h2>';

              optList += '</div>';
              $('#list-page .list-novel').prepend(optList);
            }

            if( $('#list-page .archive .option-list').length > 0 )
              $('#list-page .archive .option-list').toggle();
          });

          olv.vmNovelList = function(){ return GM_listValues(); };
          olv.vmGetRow = function(row){ return GM_getValue(row); };

          olv.newRow = function(i){
            //var row = $('.vm-row:last');
            if( typeof olv.vmNovelList[i] == 'undefined' || olv.vmNovelList[i] == null ) {
              olv.maxLocal = i;
              return;
            }

            var rowData = olv.vmGetRow(olv.vmNovelList[i]);
            //rowData.url.indexOf(window.location.hostname.toString()) > -1
            if( typeof rowData.url == 'undefined' || rowData.url.indexOf(window.location.hostname.toString()) == -1 ) {
              olv.maxLocal++;
              return;
            }

            var row = $('#list-page .archive .glyphicon-book[style^="color: rgb"]:eq(0)').closest('.row').clone();
            $('#list-page .archive .row:eq(0)').parent().append(row);
            row.attr('class', 'row vm-row vm-type-all');
            row.show();

            //row.find('*').each(function(){ console.log($(this).attr('class')); });
            row.find('*').each(function(){ //'status'
              if( ['lastNum', 'genres', 'tags', 'novel-genres', 'novel-tags'].indexOf($(this).attr('class')) > -1 )
                $(this).remove();

              //if( ['novel-genres', 'novel-tags'].indexOf($(this).attr('class')) > -1 )
                //$(this).html('');

              if( $(this).attr('class') == 'novel-title' )
                $(this).html('<a href="'+rowData.url+'" title="'+rowData.name+'">'+rowData.name+'</a>');

              if( $(this).attr('class') == 'author' )
                $(this).html('<span class="glyphicon glyphicon-pencil"></span>'+rowData.author);

              if( $(this).attr('class') == 'col-xs-2 text-info' )
                $(this).remove();
                //$(this).html('<div></div>'); //$(this).html('<div><a href=""></a></div>');

              if( $(this).attr('class') == 'col-xs-3' )
                $(this).html('<div><img class="cover custom lazy" alt="'+rowData.name+'" src="'+rowData.cover+'" style="display: inline-block;"></div>');

              if( $(this).attr('class') == 'col-xs-7' )
                $(this).attr('class', 'col-xs-9');

              if( $(this).attr('class') == 'glyphicon glyphicon-book' && typeof rowData.latest != 'undefined' )
                $(this).css('color', (rowData.latest.url == rowData.chapter.url ? 'purple' : 'green'));

              if( $(this).attr('class') == 'status' )
                $(this).text(rowData.status);

            });

            if( typeof rowData.latest != 'undefined')
              row.append('<div class="col-xs-12" style="height:auto;">Last Chapter Obsurved: <a href="'+rowData.latest.url+'" title="'+rowData.latest.name+'">'+rowData.latest.name+'</a></div>');

            if( typeof rowData.chapter != 'undefined')
              row.append('<div class="col-xs-12" style="height:auto;">Last Chapter Read: <a href="'+rowData.chapter.url+'" title="'+rowData.chapter.name+'">'+rowData.chapter.name+'</a></div>');

            olv.popTags(rowData, row);
          };

          $(document).off('click', '#list-page .archive .option-list h2');
          $(document).on('click', '#list-page .archive .option-list h2', function(){
            $('#list-page .archive .option-list').hide();
            $('#list-page .archive .filter a').hide();
            var list = $('#list-page .archive .header-list h2');
            var page = list.text().trim();
            list.text( $(this).text().trim() );
            $(this).text( page );

            if( typeof list.attr('origin') == 'undefined' || list.attr('origin') == page ) {
              //$('#list-page .archive .filter a').show();
            }

            //generate first page of saved entries
            //console.log($(this).attr('type'), $(this).text().trim(), list.attr('origin'));
            if( $(this).attr('type') == 'all' ) { //&& $(this).text().trim() != list.attr('origin')
              $('#list-page .archive .row').hide();
              $('.pagination-container').hide();

              if( typeof olv.vmNovelList == 'function' )
                olv.vmNovelList = olv.vmNovelList();

              if( typeof olv.vmNovelRows == 'undefined' )
                olv.vmNovelRows = {};

              //olv.maxLocal = 20;
              olv.maxLocal = olv.vmNovelList.length;

              for( var i = 0; i < olv.maxLocal; i ++)
                olv.newRow(i);
            }
          });

          olv.style += '.olvbc div {display:inline-block; margin-left:10px;}';

          olv.page = $('.pagination .active').text().trim();

          if( Number($('.pagination .last a').attr('href').replace(/.*page=/, '')) >= (Number(olv.page) + 4))
            olv.lastPage = (Number(olv.page) + 4);
          else
            olv.lastPage = (Number($('.pagination .last a').attr('href').replace(/.*page=/, '')));

          olv.page = 'Pages ' + olv.page + '-' + olv.lastPage;
          olv.page = '';

          olv.loadedPages = '';

          /*$(document).off('click', '.olvpage');
          $(document).on('click', '.olvpage', function(){
            if( olv.loadedPages == '' ) {
              $('.olvpage').text('Page '+olv.page+'-'+olv.page);
            }
          }); //*/

          $('.breadcrumb-container').prepend('<div class="olvbc" style="float:right;"><span class="olvpage">'+olv.page+'</span><div class="olvListAutoPop"><span>Auto Pop ✔️</span></div><div class="olvfilter"><span>Filter (</span> <span class="tags"></span> )</div><div class="olvexclude"><span>Exclude (</span> <span class="tags"></span> )</div></div>');

          //$('.olvfilter') olv.tagIcons
          //#list-page

          $('#list-page').prepend('<div class="olvtagList" style="text-align:left; display:none;"></div>');

          //<div class="header-list"><h2> Novel tag: MAGIC (Completed) </h2></div>
          $('.olvtagList').append('<div class="header-list"><h2>Filter</h2></div>');

          if ( olv.queue.length > 0 ) {
            $('.olvtagList').append('<div class="queue"><h2>Queue ('+olv.queue.length+')</h2></div>');
          }

          Object.keys(olv.tagIcons).forEach(key => {
            $('.olvtagList').append('<h3 key="'+olv.tagIcons[key]+'" class="col-xs-3" style="padding-right:10px; display:block;">'+olv.tagIcons[key]+' '+key+'</h3>');
          });

          $(document).on('click', '.olvListAutoPop', function(){
            if( $(this).text() == 'Auto Pop ✔️')
              $(this).html('<span>Auto Pop</span>');
            else
              $(this).html('<span>Auto Pop ✔️</span>');
          });

          $(document).on('click', '.olvtagList h3', function(e){
            var box = ( $('.olvtagList .header-list h2').text() == 'Filter' ) ? '.olvfilter' : '.olvexclude';

            if( $(box + ' .tags :contains('+$(this).attr('key')+')').length > 0 )
              $(box + ' .tags :contains('+$(this).attr('key')+')').remove();
            else
              $(box + ' .tags').append('<span>'+$(this).attr('key')+'</span>');
          });

          $(document).on('click', '.olvfilter', function(e){
            if( $('.olvtagList .header-list h2').text() == 'Filter' ) {
              if( $('.olvtagList').is(':visible') ) {
                localStorage.setItem('olvfilter', $('.olvfilter .tags').html());

                $('.list .row').show();
                if( $('.olvfilter .tags span').length > 0 ) {
                  $('.list .row').hide();
                  $('.olvfilter .tags span').each(function(){
                    $('.list .row .tags:contains('+$(this).text()+')').parents('.row').show();
                  });
                }
                if( $('.olvexclude .tags span').length > 0 ) {
                  $('.olvexclude .tags span').each(function(){
                    $('.list .row .tags:contains('+$(this).text()+')').parents('.row').hide();
                  });
                }
              }

              $('.olvtagList').toggle();
            }
            else {
              $('.olvtagList .header-list h2').text('Filter');

              if( !$('.olvtagList').is(':visible') )
                $('.olvtagList').toggle();
            }
          });

          $(document).on('click', '.olvexclude', function(e){
            if( $('.olvtagList .header-list h2').text() == 'Exclude' ) {
              if( $('.olvtagList').is(':visible') ) {
                localStorage.setItem('olvexclude', $('.olvexclude .tags').html());

                if( $('.olvexclude .tags span').length > 0 ) {
                  $('.olvexclude .tags span').each(function(){
                    $('.list .row .tags:contains('+$(this).text()+')').parents('.row').hide();
                  });
                }
                else
                  $('.list .row').show();
              }

              $('.olvtagList').toggle();
            }
            else {
              $('.olvtagList .header-list h2').text('Exclude');

              if( !$('.olvtagList').is(':visible') )
                $('.olvtagList').toggle();
            }
          });

          olv.applyFilters();

        }

          if( $('#list-page').length )
            return false;

          list = $('#chr-content').contents().filter(function(){return this.nodeType === 3;});

          if(false)
          Object.keys(list).forEach(key => {
            if( list[key].nextElementSibling != null && list[key].nextElementSibling.nodeName == 'P' ) {
              //console.log(list[key])
              //$('#chr-content > p:eq(0)').insertBefore($('<p>' + list[key].textContent + '</p>'));
              $('<p>' + list[key].textContent + '</p>').insertBefore('#chr-content > p:eq(0)');
              list[key].remove();
              //$('#chr-content').html( $('#chr-content').html().replace(/>(.*)<p>/ig, "><p>$1</p><p>") );

              return false;
            }

          });
          //$('#chr-content').contents().filter(function(){return this.nodeType === 3;})

          //change bg color to dark
          if(false)
          if( $('#option-background').val() != $('#option-background option:contains("Dark"):last-child').val() ) {
            /*$container = $("#container")
            $container.css("background-color", '#232323');
            $container.addClass("dark-background")
            $footer.addClass("footer-dark")*/
            var opt = $('#option-background').detach();
            $('footer.footer').append(opt);
            $('#option-background').val( $('#option-background option:contains("Dark"):last-child').val() ).trigger('value_changed');

            //$('#option-background').trigger({type: "change", val: $('#option-background option:contains("Dark"):last-child').val() });
          }

          //document.referrer

          if( $('#novel-detail-tabs,.desc-text').length == 2 && typeof novel == 'undefined' && $('div[id="rating"]').length > 0 ) {
            var novel = {id: $('div[id="rating"]').attr('data-novel-id')};
            olv.novel = GM_getValue('novel.'+novel.id);
          }

          if( typeof novel != 'undefined' && novel.id != 'novel' )
          if( typeof novel.chapter != 'undefined' ) {
            //$.cookie("chapter_style"
            //console.log($.cookie("chapter_style"))

            olv.novel = GM_getValue('novel.'+novel.id);
            //console.log(n);
            //console.log( GM_listValues() );

            if( typeof olv.novel == 'undefined' ) {
              GM_setValue('novel.'+novel.id, novel);

              olv.novel = novel;
            }

            if( typeof olv.autoSave == 'undefined')
              olv.autoSave = 0;

            /*if( typeof olv.novel.bg != 'undefined' ) {
              if( typeof olv.novel.chapter == 'undefined' && typeof olv.chapter == 'undefined' )
                olv.novel.chapter = chapter;
            }*/
            if( typeof olv.novel.bg != 'undefined' )
              if( olv.reloaded && olv.novel.bg.url == window.location.toString() )
                return;
                //olv.novel.bg = olv.novel.chapter;

            if( typeof olv.chapter == 'undefined' )
              olv.chapter = chapter;

            if( JSON.stringify(olv.novel.chapter) != JSON.stringify(olv.chapter) && olv.autoSave == 0 ) {
              olv.novel.chapter = olv.chapter;

              GM_setValue('novel.'+novel.id, olv.novel);

              olv.novel = novel;
            }
          }

          if( $('#novel-detail-tabs,.desc-text').length == 2 ) {
            if( $('.owl-carousel').length > 0 )
              $('.owl-carousel').remove();

            if( $('script[src*="owl\."]').length > 0 )
              $('script[src*="owl\."]').remove();

            if( $('link[href*="owl\."]').length > 0 )
            $('link[href*="owl\."]').remove();

            olv.novel = GM_getValue('novel.'+$("#rating").data("novel-id")) || {id: $("#rating").data("novel-id")};
            //console.log('novel.'+$("#rating").data("novel-id"), olv.novel);
            if( typeof olv.novel != 'undefined' ) {
            if( typeof olv.novel.genre == 'undefined' ) {
              //var info = {};
              $('ul.info-meta li').clone().each(function(){
                //console.log( $(this).html() );
                var key = $(this).find('h3').detach().text().toLowerCase().replace(/[^a-zA-Z0-9 ]/ig, '').trim();
                var value = $(this).html();

                if( $(this).find('.showmore').length )
                  $(this).find('.showmore').remove();

                switch( $(this).find('a').length ) {
                  case 0:
                    value = $(this).text().replace(/\n/ig, '');
                    break;

                  default:
                    value = $(this).text().trim().replace(/\n/ig, '');
                    if( value.indexOf(',') > 0)
                      value = value.split(',');
                    break;
                }

                //info[ key ] = value;
                olv.novel[ key ] = value;
              });

              //console.log(olv.novel);
              if( typeof olv.novel.chapter != 'undefined' )
              GM_setValue('novel.'+olv.novel.id, olv.novel);
            }

            if( typeof olv.novel.latest == 'undefined' || olv.novel.latest.name != $('.l-chapter a').text().trim() || olv.novel.latest.updated == 'undefined' || olv.novel.latest.updated != $('.l-chapter .item-time').text().trim() ) {
              olv.novel.latest = {
                url:$('.l-chapter a').attr('href'),
                name:$('.l-chapter a').text().trim(),
                updated: $('.l-chapter .item-time').text().trim()
              };

              if( typeof olv.novel.chapter != 'undefined' )
              GM_setValue('novel.'+olv.novel.id, olv.novel);
            }

            if( window !== window.parent ) {
              //console.log('posting novel to parent', olv.novel);
              window.top.postMessage({'novel': olv.novel}, '*');
            }

            $('ul.info-meta').append('<li><h3>Latest Chapter: </h3><a class="text-primary" href="'+olv.novel.latest.url+'">'+olv.novel.latest.name+'</a></li>');
            if( typeof olv.novel.chapter != 'undefined' ) {
              if( olv.novel.chapter.name.replace(/ /g, '') != olv.novel.latest.name.replace(/ /g, '') )
                $('ul.info-meta').append('<li><h3>Last Chapter Read: </h3><a class="text-primary" href="'+olv.novel.chapter.url+'">'+olv.novel.chapter.name+'</a></li>');
            }

              //get count of chapter total
              /*$.get(ajaxChapterOptionUrl,
                    { novelId: olv.novel.id, currentChapterId: olv.novel.chapter.id }
                   ).done((function(a) {
                olv.chapterList = a;
                var count = ($($(olv.chapterList).get(1).innerHTML).length + 1) / 2
              }));
*/
                /*$(".chr-jump").replaceWith(a);
                const optionValue = $(".chr-jump option[chapter-id='" + e + "']").val();
                $(".chr-jump").val(optionValue),
                    $(".chr-jump").on("change", (function() { window.location = $(this).val() }))*/
            //}))

            }

            //$('.header-list:eq(0)').html('<div class="col-xs-12 col-sm-4 col-md-4"><h2>Novel info</h2></div>');
            //$('.header-list:eq(0)').append('<h2 class="title">'+olv.novel.name+'</h2>');
            //$('.header-list:eq(0)').append('<div class="col-xs-12 col-sm-4 col-md-4">'+$('.rate-info').detach().html()+'</div>');

            //add no protag tag, add if possible from description
            //if( typeof olv.novel.tag == 'undefined' ) {
            //  olv.novel.tag = [];
            //  $('#tab-description').text()
            //}
            //if( olv.novel.tag.indexOf('Female protagonist') )

            olv.popTags(olv.novel, $('.col-info-desc'));

            $('.olv.parrot').show();
            console.log($('.desc-text:contains(Read more)').html())
            if( $('.desc-text:contains(Read more)').length == 1 ) {
              $('.desc-text:contains(Read more)').html(
                $('.desc-text:contains(Read more)').html().replace(/.*Read more/, '').replace(/Collapse.*/g, '')
              );
            }
          }

          olv.eventListener = function(event){
            //console.log(event);
            if( typeof event.data == 'string' && typeof olv[event.data] == 'function')
              olv[event.data]();
          };

          if( window === window.parent ) {
            //console.log('add event listener');
            window.addEventListener("message", olv.eventListener, false);
          }

          olv.loadFrame = function(href){
            //console.log(this === olv)
            $('body').append('<iframe src="'+href+'" style="width: 100%;1height:50%;height: 100%; position:fixed; top:0; left: 0;"></iframe>');
            //$('body iframe').contents().find('#chapter-content')
            //setTimeout(function(){$('.olv').hide();}, 300);
            $('body iframe').on('load', function(){
              $('.olv').hide();
              console.log($(this).attr('src'))
            });
          };

          olv.closeFrame = function(){
            $('body iframe').remove();
            $('.olv.parrot').show();

            window.location.hash = '';
          };

          if( window.location.hash.indexOf('chapter') > 0 ) {
            //olv.loadFrame( $('#novel a[href*=chapter]:not([id]):eq(0)').attr('href').split('/').slice(0, -1).join('/') + window.location.hash.replace('#', '/') );
          }

          $(document).on('click', '#chapter a.novel-title', function(e){
            //console.log(window !== window.parent);
            if( window !== window.parent ) {
              //$(window.parent).find('body iframe').remove();
              //window.parent.olv.removeFrame();
              //window.top.postMessage('closeFrame', '*');

              return false;
            }
          });

          //console.log(window === window.parent);
          if(false)
          $(document).on('click', '#novel a[href*=chapter]:not([id])', function(e){
            //$('body').html('<iframe src="'+ window.location.origin + window.location.pathname.replace('.html', '/') + window.location.hash.substr(9) +'" style="width: 100%;height: 100%;"></iframe>');
            //$('body').css({'overflow': 'hidden'});
            //console.log($(this).attr('href'))
            olv.loadFrame($(this).attr('href'));

            var loc = window.location.toString().replace(/#.*/, '');
            //var loc + '#' + $('a.btn:nth-child(4)').attr('href').replace(loc, '').replace('/', '');
            window.location.hash = $(this).attr('href').replace(loc, '').replace('/', '');

            return false;
          });

          var disqus = $('script:contains("disqus_config")');

          if( disqus.length > 0 && $('#chr-content p').length ) {
            var t = disqus.text().match(/.*replace\(\".*/g).pop().replace(/.*replace\(\"|\",.*/g, '');

            $('#chr-content p').each(function(){
              $(this).text( $(this).text().replace(t, '') );
            });
          }

          $('script:contains("disqus_config")').remove();

          olv.disqus = {
          	c:0,
            fn:function(){
            	$('script:contains("disqus_config")').remove();
              olv.disqus.c = olv.disqus.c + 1;

              if( olv.disqus.c > 20 )
	            	setTimeout(olv.disqus.fn, 500);
          	}
          };

          olv.disqus.fn();

          var paragraphss = $('script:contains("paragraphss")');

          if( paragraphss.length > 0 && paragraphss.html().match(/.*replace\(\".*/g).length > 0 ) {
            var r = paragraphss.html().match(/.*replace\(\".*/g).pop().replace(/.*replace\(\"|\",.*/g, '');

            console.log('deleting ' + r + ' from html');
            $('#chr-content').html( $('#chr-content').html().replace(r, '') );
          }

          var empire = $('p:contains("Find adventures on empire")');
          if( empire.length )
            empire.html( empire.html().replace('Find adventures on empire', '') );

          $('body').append('<style>.dark-background .chr-c p {rgba(200, 200, 200, 0.6) !important}</style>');


          var list = {
          	'bastard': /bast\*rd/ig,
            'bitch':/b t tch/ig,
            "authority":/authourity/ig,
            "beauty's":/beautys/ig,
            'stupid':/st\*pid/ig
          };

          //olv.par = `"<p>A storm was forming over the ocean, on the southeastern horizon. The Keyic jungle endured frequent and sometimes fearsome tropical wind and rain, but this was a very different kind of storm, one that Zyriko knew well from his childhood: a front rising from the frozen ocean of the far south. Fortunately, the Keyic ship would be safe in port before the wind and waves grew dangerous. Unfortunately, their destination was the literal last place Zyriko wanted to go.</p>\\n<p>Eyes on the horizon, he stood brooding.</p>\\n<p>To the west, behind him, the Zyzz domain <em>pulsed</em> with misery, as if the root source of all suffering lay inside, a volcano belching its blackened crimson ooze until the entire world was smothered.</p>\\n<p>'No,' he reminded himself. '<em>Almost</em> the entire world.'</p>\\n<p>Prosperity's Haven was home to around one person in two hundred, partly because of an ongoing, astounding baby boom. The problem was that life remained as bleak as it had ever been for the other one hundred and ninety-nine.</p>\\n<p>At least the not at all metaphorical Crimson Calderas had seen fit to lie dormant for the last decade, sparing the forsaken people of the Zyzz domain any further hardship. Forsaken by Zyriko himself, in the name of the greater good.&nbsp;</p>\\n<p>One in two hundred. One hundred and ninety-nine to go.</p>\\n<p>...Maybe volcanic dormancy was actually worse, net, since cinnabar mining could continue uninterrupted. What a truly forsaken--</p>\\n<p>&lt;Was that your father?&gt; Suri asked.</p>\\n<p>Despite being fully aware that his wife was the most powerful mage ever born, Zyriko was impressed--even to eyes as sensitive as Hers, the evidence of his father's spell would have been subtle. Or, no, She would have felt Zyriko's surge of contempt, followed by several minutes of him being distracted; perhaps She had only inferred a likely cause.</p>\\n<p>&lt;It was him,&gt; Zyriko confirmed. &lt;He had a message for us. My dear parents extend their warmest welcome&gt;--fittingly, cold seeped through the window's glass--&lt;and they promise that You will find Your Zyzz family's hospitality most impressive. My father seems positively <em>giddy</em> about some surprise they've prepared for us.&gt;</p>\\n<p>The Zyzz Patriarch being <em>giddy</em> was the sort of thing that made a man stare at the horizon and brood.</p>\\n<p>The door behind Zyriko clicked open and shut, as Suri slipped into the room.</p>\\n<p>&lt;Wow. Yippee. I cannot wait.&gt;</p>\\n<p>That deadpan mental monotone managed to get a snort out of Zyriko, despite how humorless he felt. He turned to smile at his wife, but ended up doing a double-take instead.</p>\\n<p>&lt;Surprise!&gt; She struck a pose that proved Kennalaria's lessons on glamour hadn't been in vain. &lt;Do you think your parents will be pleased?&gt;</p>\\n<p>For Her first-ever visit to the Zyzz domain, the Universe's most prized daughter-in-law had changed into multilayered robes and a waist-length cape, in the traditional Zyzz style, a style in which no Zyzz had ever managed to approach stylish.</p>\\n<p>Zyriko had tried. <em>Hard</em>. He <em>distinctly</em> remembered being seventeen, needing to approach <em>the Keyic Heiress</em> while wearing--</p>\\n<p>&lt;The design was My 'ultra-fabulous, ultra-secret, ultra-violet' birthday present,&gt; the Keyic Heiress told Her husband, pivoting with practiced footwork into a new pose to show him the back. &lt;Twilight really is talented, no? So chic!&gt;</p>\\n<p>Ah, of course. It was as Zyriko had long suspected: getting something 'chic' yet still recognizable as the Zyzz style required divine intervention. And a Goddess to wear it.</p>\\n<p>That aside, what had caused his double take was in fact the <em>color</em>: a red that wasn't <em>quite</em> Zyzz crimson, over an orange underlayer.</p>\\n<p>'Surprise!' indeed.</p>\\n<p>&lt;I literally can't remember the last time I didn't wear My blue!&gt; Suri pointed to a sunset flower pinned above Her right ear. &lt;Aside from these.&gt;</p>\\n<p>There was still <em>a lot</em> of blue. Curtain of ringlets. Brows, lashes, irises. Circlet of the Keyic Heiress. Glow.</p>\\n<p>The red-and-orange Blue Goddess did one last twirl in place, forever redeeming Zyriko's opinion of capes, then tapped Her temple opposite the flower.</p>\\n<p>'Look deeper,' that meant.</p>\\n<p>Zyriko did as instructed, went where his wife's mind told him to go, and was transported six-and-a-half years into the past.</p>\\n<p>A blue vanity.</p>\\n<p>Everything blue everywhere except for a single vial of red, and the bristles of a once-blue brush.</p>\\n<p>Mortal fingers.</p>\\n<p>Suri's memory of painting her nails red, before he arrived. Before she had ever heard anything about a sacred tunic.</p>\\n<p>&lt;Unless this time counts.&gt; Suri was mentally murmuring. &lt;Remember?&gt;</p>\\n<p>Duh, but Zyriko was too engrossed to reply.</p>\\n<p>After a while, the Suri of almost seven years ago finished painting and looked up, studying her reflection in the mirror at the back of her vanity. It was difficult to disentangle the memory's butterflies from what seeing this reflected closeup portrait of his mortal fiancée hatched in Zyriko.</p>\\n<p>The face in the mirror was unreadable, an image of dispassionate, dignified calm, but it was betrayed by a faint blush.</p>\\n<p>Then slowly, tentatively, Zyriko's fiancée raised both hands into view, fingers splayed, and the blush deepened until it matched her nails. Nevertheless, that utterly placid expression remained unfazed.</p>\\n<p>At that point, Zyriko noticed that his wife was pushing through considerable embarrassment to hold Her hands in the same position.</p>\\n<p>Same blue as always. As every day since that one.</p>\\n<p>&lt;I tried, but the tunic wouldn't have it,&gt; She explained. &lt;The only paint it allows is My Own mana.&gt;</p>\\n<p>&lt;You're so incredibly beautiful,&gt; Zyriko blurted.&nbsp;</p>\\n<p>Even after seven years of not exactly keeping his opinion secret, those words caused a torrent of embarrassed euphoria to rush across the link. And more than a little smug satisfaction, which amplified the embarrassment.</p>\\n<p>&lt;It's because I feel <em>exactly</em> how much you&nbsp;<em>mean</em> it!&gt; Suri protested. &lt;<em>Ex</em>-<em>act</em>-<em>ly</em>!&gt;</p>\\n<p>And also, because no matter how many years passed, the Suri who had first put the tunic on would continue to coexist with Her 'present' self, equally vivid.</p>\\n<p>&lt;And...you see Twilight...&gt; She added. &lt;But you never...But it's only <em>Me</em>...&gt;</p>\\n<p>She trailed off, but Zyriko could sense that She had something important to say, so he waited silently.</p>\\n<p>Patiently.</p>\\n<p>The wind was starting to howl a little. Spray from the sea, growing more choppy, splashed against the window.</p>\\n<p>&lt;I have a confession,&gt; Suri finally announced. &lt;Nyrkatess freely admits that one of her strongest motives for enduring all the pain and monotony, something she repeats to herself whenever she can't take it anymore, is...you know...'No. Wrinkles.'&gt;</p>\\n<p>Zyriko smirked at Her spot-on mental mimicry of Nyrkatess' voice and inflection.&nbsp;</p>\\n<p>&lt;Turning thirty-two...it's had Me thinking...&gt; Suri was uncharacteristically tentative, afraid that Zyriko would disapprove. &lt;Without the tunic, I would look noticeably older. Not <em>old</em> by any means, not worse or better--I'm only saying that there would definitely be a noticeable change by now. Instead, I'm frozen at...whatever I am, almost twenty-six. And...I...&gt;</p>\\n<p>She sighed aloud, and Zyriko could feel Her preparing for a leap of faith. Eyes like the purest of mountain lakes, mirroring the noon sky, bored into his.</p>\\n<p>&lt;I'm going to be completely honest, Zyriko: recently, I've found Myself truly understanding how Nyrkatess feels. Sympathizing. And thinking back, it's not really new. It is a <em>fact</em> that I could only seriously consider the idea 'maybe I might really be the Blue Goddess' once I saw My reflection, in that same mirror, after I put the tunic on.&gt;</p>\\n<p>The link pulsed with sheepishness.</p>\\n<p>&lt;'<em>Absurdly</em> gorgeous,' I thought. I was embarrassed by it! 'How can I walk around like this?!' But I wanted to be a real Goddess, so badly, someone Who could answer prayers, and...what I saw matched My Own idea of what the Blue Goddess should look like. Even today, I would feel less legitimate if I didn't see this in the mirror.&gt; She gestured at Herself. &lt;It shouldn't matter, but <em>it just does</em>. Same with...not using the toilet, not even farting. And, because of it, all of it, I've been able to...be like Twilight--I have the nerve to dance in mana swimsuits!-<em>-</em>and...I just feel <em>so fabulous</em>. It's <em>so much fun</em>!&gt;</p>\\n<p>Would Kennalaria be ultra-hyper or overload straight to catatonic if Suri shared that sentiment with Her? Hm.</p>\\n<p>&lt;So, I've found Myself...feeling <em>relieved</em>, that...time's not ticking away. Ten, twenty, even a hundred years from now, doesn't matter, I'll still...you know...I'll still see the same absurdly gorgeous Blue Goddess in the mirror.&gt;&nbsp;</p>\\n<p>Zyriko took his wife's hands, and blue glows merged.&nbsp;</p>\\n<p class=\\"p1\\"><span class=\\"s1\\">Her Own concern notwithstanding, Suri was in no danger, <i>none at all</i>, of being corrupted by conceit or shallowness--'see yourself like the Sky Goddess sees you' was a phrase used to encourage a person who was feeling unimportant and disposable. She knew as well as Zyriko that Menelyn Herself consciously tried to match Her Own idea of how Salvation ought to look, move, and speak, and advised that appearances <em>did</em> matter. She had heard 'We never hide how magical We are!' a thousand times, and was perfectly aware that immortality came with a curse in addition to the perks: being forced to choose between detachment and an eternity of funerals. T</span><span class=\\"s1\\">here was no need to insult Her intelligence by reciting any of that same old guidance. </span></p>\\n<p class=\\"p1\\"><span class=\\"s1\\">Still, as long as there was a prayer She couldn't answer, nothing would ever stop the Goddess of Fairness from worrying that She was an unworthy hypocrite.&nbsp;</span></p>\\n<p class=\\"p1\\">Relentless introspection and neurotic self-criticism were a package deal, but Zyriko had no complaints: he'd had an idea of what he was signing up for, on that bench.&nbsp;</p>\\n<p>He would do his best.</p>\\n<p>&lt;Stroll through any village in the liberated territories and it's impossible not to notice that most women Your age are pregnant or nursing. Most who aren't will eventually ask the Fertility Goddess to help. I can't interpret that as anything but a sign of optimism and satisfaction with life. You could even call it relief.&gt;</p>\\n<p>There was no disagreement from Suri.</p>\\n<p>&lt;The first waves are toddlers, now. They're the little faces in the crowds surrounding You, everywhere You go. Tens of thousands of little faces. Tens of thousands of names and stories. You know many of them.&gt;&nbsp;</p>\\n<p>Zyriko paused while Suri perfectly recalled one face, then another, and another, and another. Her stare grew distant--She and all Her Sisters were always on the precipice of lapsing into memories, even when not trying.</p>\\n<p>It was time for him to make his point.</p>\\n<p>&lt;None of those little faces has ever known a single second of slavery.&gt;</p>\\n<p>Soon, those staring eyes turned glassy.</p>\\n<p>&lt;Do You think their parents would resent You if they knew You're secretly relieved to be ageless?&gt;</p>\\n<p>Suri didn't answer explicitly, but it wasn't long until Zyriko felt clouds of doubt and guilt scatter in a familiar gust of liberation.</p>\\n<p>He nodded. &lt;<em>Everyone</em> is relieved that the Sky Goddess looks exactly the same, every day. They'd feel guilty if You didn't want to be what You are.&gt;</p>\\n<p>One more issue to address.</p>\\n<p>&lt;Finally, yes, I <em>do</em> remember <em>exactly</em> how you looked when I arrived. At the time, I believed that we were going to live the same mortal lives as anyone, and watch each other turn wrinkly. <em>I was thrilled with the idea</em>, and I am <em>very</em> certain that my opinion of Your beauty would never have changed.&gt;</p>\\n<p>&lt;I know,&gt; Suri assured him, snapping back to the present. &lt;And I love you for it.&gt;</p>\\n<p>She glanced down at Herself, dressed in sunset, then re-locked eyes.</p>\\n<p>&lt;This is an expression of My romantic interest,&gt; Zyriko's wife of nearly seven years admitted. &lt;Otherwise, I'd be wearing blue.&gt;</p>\\n<p>Her husband smiled. He had a confession of his own.</p>\\n<p>Doing his best to mimic something his fiancée had done when welcoming him to the Keyic domain, Zyriko pointedly ran his eyes up and down Suri, then met Her stare and swallowed conspicuously.</p>\\n<p>&lt;Sooooo, everything I said was true, but...making Zyzz robes...do things...I think that miracle is beyond mortals.&gt;</p>\\n<p><em>Ah</em>.</p>\\n<p>Seven years had passed since this very same giggle first sent Zyriko to the sky.</p>\\n<p>Some things didn't need a sacred tunic to be timeless.</p>\\n<p>&lt;Dearest husband, I understand that being so terribly smitten has distracted you, but you're leaving your poor wife hanging,&gt; Suri complained, internally quite the opposite of annoyed. &lt;What's the point of being married to a dreamy, empathic God if I need to <em>ask</em> for kisses?!&gt;</p>\\n<p>If only they weren't about to dock at the source of all misery.</p>\\n"`;
          //$('#chr-content').html( JSON.parse(olv.par) );

          //GM_setValue('key', 'value');
          if( $('#chr-content p:contains("Author:")').length > 0 )
            $('#chr-content p:contains("Author:")').remove();

          var replaceList = [
            {"$1":'([a-z]+)[0-9]'},
            {'':' w uxi a w o rld.site, '}
          ];

          //stuff to add to the replace list.
          //[1. The term “white lotus” is Internet slang that refers to someone]

          //$('#chr-content').get(0).childNodes

          /*var types = {}
          $($('#chr-content').get(0).childNodes).each(function(){

          });*/

          // Reading on Mybo xn o v el. com ,Please!
          // Reading on Myb o xno vel. com ,Please!
          // To readers! our content is stolenPlease copy and search this link " https://tinyurlcom/39hpcnj " to support us

          //olv.chapterCont = $($('#chr-content').html());
          //$.each(olv.chapterCont, function(i, v){ console.log(i, v) });
          //console.log( $($('#chr-content').html()) );
          /*$($('#chr-content').html()).forEach(obj => { console.log(obj); }); //*/
          /*
          olv.chapterCont = $('#chr-content').clone();
          console.log( $('#chr-content').children().length, $('#chr-content').contents().length );

          if( $('#chr-content').children().length < $('#chr-content').contents().length ) {
            //$('#chr-content')
            olv.backchap = olv.chapterCont.clone();
            olv.chapterCont.contents().each(function(i, v){
              if( v.nodeType == 3 && v.textContent.replace(/[^a-zA-Z0-9]/g, '') != '' )
                console.log(i, v.textContent);
            });

            olv.chapterCont.contents().filter(function() {
              return this.nodeType === 3 && this.textContent.replace(/[^a-zA-Z0-9]/g, '') != '';
            }).each(function() { $(this).replaceWith('<p>'+this.textContent+'</p>'); });
          }

          /*
          .filter(function() {
  return this.nodeType === 3; // Node.TEXT_NODE
}).each(function() {
  // Create a new element
  var newElement = $('<span class="replaced-text">New Element</span>');
  // Replace the text node with the new element
  $(this).replaceWith(newElement);
});
          */

          if( $('#chr-content').children().length < $('#chr-content').contents().length ) {
            $('#chr-content').contents().filter(function() {
              return this.nodeType === 3 && this.textContent.replace(/[^a-zA-Z0-9]/g, '') != '';
            }).each(function() { $(this).replaceWith('<p>'+this.textContent+'</p>'); });
          }

          if(false)
          if( $('#chr-content > p > *').length ) {
            $('#chr-content p *').each(function(){
              console.log( $(this).get(0).localName, $(this).text() );
            });
          }

          if( $('#chr-content :not(p):not(div):not([class])').length ) {
            $('#chr-content :not(p):not(div):not([class])').each(function(){
              $(this).replaceWith((['em', 'i'].indexOf($(this).get(0).localName) > -1?'<p style="font-style: italic;">':'<p>')+$(this).get(0).outerHTML+'</p>');
            });
          } //localName

          if( $('#chr-content ul').length ) {
            $('#chr-content ul').each(function(){
              var li = '';
              $(this).find('li').each(function(){
                li += '<p style="display: list-item; margin-left:40px;">'+$(this).text().trim()+'</p>';
                //console.log( $(this).text() );
              });

              $(this).replaceWith(li);
            });
          }

          if( $('#chr-content p:contains(Reading):contains(Please)').length == 1 )
            if( $('#chr-content p:contains(Reading):contains(Please)').text().replace(/[^a-zA-Z]/g, '').indexOf('boxnovel') > 0 )
              $('#chr-content p:contains(Reading):contains(Please)').remove();

          if( $('#chr-content p:contains(Visit):contains(pls)').length == 1 )
            if( $('#chr-content p:contains(Visit):contains(pls)').text().replace(/[^a-zA-Z]/g, '').indexOf('boxnovel') > 0 )
              $('#chr-content p:contains(Visit):contains(pls)').remove();

          if( typeof olv.nbremoveLines == 'undefined' )
            olv.nbremoveLines = [
              'Unauthorized reproduction: this story has been taken without approval. Report sightings.',
              'This story has been taken without authorization. Report any sightings.',
              'Stolen story; please report.',
              'Stolen novel; please report.',
              'Unauthorized duplication: this narrative has been taken without consent. Report sightings.',
              'This book is hosted on another platform. Read the official version and support the author\'s work.',
              'This novel\'s true home is a different platform. Support the author by finding it there.',
              'Enjoying this book? Seek out the original to ensure the author gets credit.',
              'Love this story? Find the genuine version on the author\'s preferred platform and support their work!',
              'Support the author by searching for the original publication of this novel.',
              'Help support creative writers by finding and reading their stories on the original site.',
              'This story originates from a different website. Ensure the author gets the support they deserve by reading it there.',
              'This book\'s true home is on another platform. Check it out there for the real experience.',
              'You might be reading a pirated copy. Look for the official release to support the author.',
              'Love what you\'re reading? Discover and support the author on the platform they originally published on.',
              'The genuine version of this novel can be found on another site. Support the author by reading it there.',
              'Enjoying the story? Show your support by reading it on the official site.',
              'You could be reading stolen content. Head to the original site for the genuine story.',
              'The narrative has been taken without permission. Report any sightings.',
              'Find this and other great novels on the author\'s preferred platform. Support original creators!',
              'Did you know this text is from a different site? Read the official version to support the creator.',
              'Want to read more chapters and support us? Please consider becoming a patron to read up to 🃏 chapters inn advance!'
            ];

//olv.nbremoveLines.push('Did you know this text is from a different site? Read the official version to support the creator.');

          $('#chr-content p').each(function(){
            olv.nbremoveLines.forEach(obj => {
              //console.log(obj)
              if( obj.indexOf('🃏') > -1 ) {
                var s = obj.split('🃏');
              }
              else
              if( $(this).text().trim() == obj )
                $(this).remove();
            });
          });

          olv.fn.end.push( function(){
            $('#chr-content p:contains("0")').each(function(){
              //console.log(/ 0$/g.test($(this).text().trim()), $(this).text().trim().replace(/ 0$/g, ''));
              if( /\s0$/g.test($(this).text().trim()) )
                $(this).text($(this).text().trim().replace(/\s0$/g, ''));
            });
          });

          if( $('#chr-content p:contains("Aliali: ")').length > 0 )
            $('#chr-content p:contains("Aliali: ")').remove();

          if( $('#chr-content p span[class="num css-0"]').length > 0 )
            $('#chr-content p span[class="num css-0"]').remove();

          $('#chr-content p').each(function(){
            olv.uncensor($(this), list);

            if( /[a-z]+[0-9]/g.test($(this).text()) )
              $(this).text( $(this).text().replace(/[a-z]+[0-9]/g, function(obj){ return obj.replace(/[0-9]/, '');}) );

            if( /[a-z]+[0-9]/g.test($(this).text()) )
              $(this).text( $(this).text().replace(/[a-z]+[0-9]/g, function(obj){ return obj.replace(/[0-9]/, '');}) );

            if( /\(E\/\N\:.*\)/.test($(this).text()) )
              $(this).remove();

            //$(this).text( $(this).text().replace(/[Read official .*Also follow the author on Instagram: aarriacross]/g, "") );
            $(this).text( $(this).text().replace(/([a-zA-Z,]{1})\?([a-zA-Z]{1})/g, "$1 $2") );
            $(this).text( $(this).text().replace(/Xiao([a-z]+)/g, "Xiao $1") );
            $(this).text( $(this).text().replace(/\[[0-9]+\.[^\]]*\]|\[ [0-9]+\.[^\]]*\]/g, "") );
            //$(this).text( $(this).text().replace(/([a-z]+)[0-9]/ig, "$1") );
            $(this).text( $(this).text().replace(/([a-z])\.([a-z])/ig, "$1$2") );
            $(this).text( $(this).text().replace(/([a-z])\.([a-z])/ig, "$1$2") );
            $(this).text( $(this).text().replace(/EndlessFantasy Translation|\#.*ScriptRoot.* \{.*:.*;\}/ig, '') );
            $(this).text( $(this).text().replace(/b t tch/ig, 'bitch') );
            $(this).text( $(this).text().replace(/bodys/ig, 'body\'s') );
            $(this).text( $(this).text().replace(/.*Huahua.*|.*hua hua.*|.*cuties.*|.*Hahaha.*isn't it too hypocritical.*/ig, '') );
            $(this).text( $(this).text().replace(/\(.*webnovel.*\)|.*ZerahNeko.*|.*chapter is edited.*/ig, '') );
            $(this).text( $(this).text().replace(/Thank you readers\!|join our discord https:\/\/discord.gg\/[A-Za-z0-9]*/ig, '') );
            $(this).text( $(this).text().replace(/Join out Discord server to chat with fellow readers –> https:\/\/discord.gg\/6vFZqaT/ig, '') );
            $(this).text( $(this).text().replace(/Occasionally missing content, please report errors in time.*|This chapter was first shared on.*platform\./ig, '') );
            $(this).text( $(this).text().replace(/Please support this novel by reading at .* dot com|Reading on Mybo xn o vel. com ,Please!| w uxi a w o rld.site, |~.*mtlnovel.*~/ig, '') );
          	$(this).text( $(this).text().replace(/Please support this novel by reading at|Editor[:.].*Translations|Please go to http.*to read the latest chapters for free|This chapter was originally shared via.*\.|n.*vel.*served as the original host for this chapter\'s release on.*\.|N0vel Biin hosted the premiere release of this chapter\.|The inaugural upload of this chapter took place.*\.|This chapter's initial release occurred on.*\.|The initial instance of this chapter being available happened.*\.|The inception of this chapter's publication is linked.*\.|The debut release of this chapter happened.*\.|N0v3lTr0ve served as the original host for this chapter\'s release.*\.|The origin of this chapter\'s debut.*\.|Dear readers.*search this link.*to support us/ig, '') );
            //if( /^[0-9]{2}|^[0-9]{1}/.test($(this).text().trim()) )
              //$(this).text( $(this).text().trim().replace(/^[0-9]{2}|^[0-9]{1}/, '') );
            if( /\(T\/N\:.*\)|\(TN\:.*\)/ig.test($(this).text().trim()) )
              $(this).text( $(this).text().trim().replace(/\(T\/N\:.*\)|\(TN\:.*\)/ig, '') );

            if( /^[0-9]{1}[a-zA-Z]+/.test($(this).text().trim()) || $(this).text().trim() == "Advertisement" )
              $(this).remove();

            if( /^Note:|^Random Note:/i.test($(this).text().trim()) && $(this).index() > 40 ) {
              $(this).nextAll().remove();
              $(this).remove();
            }

            //if( /^[0-9]+[“a-zA-Z]/.test($(this).text().trim()) )
              //$(this).text( $(this).text().trim().replace(/^[0-9]+([“a-zA-Z])/, "$1") )

            if( $(this).text().trim().replace(/[^ 0-9a-zA-Z]/g, '') == '' )
              $(this).text('')

            //removes duplicate lines
            var next = $(this).next();
            while( next.length > 0 && $(this).text() == next.text() ) {
              var n = next.next();
              next.remove();

              next = n.next();
            }

            //remove duplicate words
            ///\b(\w+)\s+\1\b/.test($('#chr-content p[para=18]').text());
            //https://stackoverflow.com/questions/2823016/regular-expression-for-duplicate-words
            while( /(\b\S+\b)\s+\b\1\s\b/.test( $(this).text() ) ) $(this).text( $(this).text().replace(/(\b\S+\b)\s+\b\1\s\b/, "$1 ") );

            //https://lightnovel.novelupdates.net/book/rebirth-space-pretty-girl/ccchapter-2039-go-to-the-yamen
            //dong dong! dong dong! dong dong!
            //not resolved

            //console.log( $(this).text() )
            //check if lowercase then uppercase without spaces and add a space
            if ( /[a-z][A-Z]/g.test( $(this).text() ) ) {
              $(this).text( $(this).text().replace(/([a-z]{1})([A-Z]{1})/g, "$1 $2") );
            }

          });

          //console.log($('#chr-content').html())

          var removeSet = [];

          //sex related paragraphs due to boredom with them.
          //if(false)
          removeSet = removeSet.concat([
            'erect member',
            'began thrusting',
            'mouth on her flower',
            'clitoris',
            '*SLAP!*',
            '*PAH!*',
            'CUMMING',
            'cumming',
            'orgasm',
            'cervix',
            'uterus',
            'pleasurable insides',
            'penetrate her',
            'genitals',
            'R-18 scene',
            'wwwqidian',
            'Enhance your reading experience by removing ads',
            'poalme',
            'fanfics from the server',
            'related fanfics',
            'We will rely solely on your kindness! Click here!',
            'Donate now',
            'This is supposed to be an ad, thank you for your support!',
            'remove ads',
            'Read Ad Free, click here!',
            'Patreon',
            'Tseirp',
            'We rely on your support! novelplexorg',
            'novelplex',
            'TL Disclaimer',
            'error in the translation',
            'consider whitelisting the website',
            'Translation link',
            'Raw link',
            'Vecna',
            'Word Press',
            'reader mode',
            'My Virtual Library Empire',
            'BCatranslation',
            '[Table of Content]',
            'novel is translated',
            'FUHEIDAGE',
            'TAGOQT',
            'lnreads',
            'original site',
            'webnovel'
          ]);

          removeSet.forEach(obj => {
            //console.log(obj)
            //nsole.log(obj, $('#chr-content p:contains("'+obj+'")'));
            $('#chr-content p:contains("'+obj+'")').remove();
          });

          for( var i = 0; /^\[[0-9]\] /.test($('#chr-content p').last().text().trim()) && i < 10; i++ )
            $('#chr-content p').last().remove();

          var removeAfter = [];

          if( $('#chr-content table').length > 0 ) {
            $('#chr-content table').remove();
          }

          if( $('a[class="btn btn-unlock btn-block"]').length > 0 ) {
            $('a[class="btn btn-unlock btn-block"]').remove();
          }

          // To readers! our content is stolen Please copy and search this link " ]39hpcnj " to support us

          if( $('#chr-content p:contains("readers"):contains("content is stolen")').length > 0 ) {
            $('#chr-content p:contains("readers"):contains("content is stolen")').remove();
          }

          if( $('#chr-content p:contains("Lonelytree")').length > 0 ) {
            $('#chr-content p:contains("Lonelytree")').remove();
          }

          if( $('#chr-content p:contains("discordgg")').length > 0 ) {
            $('#chr-content p:contains("discordgg")').remove();
          }

          // Translator: Henyee Translations | Editor: Henyee Translations
          if( $('#chr-content p:contains("Translator")').length > 0 ) {
            $('#chr-content p:contains("Translator")').remove();
          }

          if( $('#chr-content p:contains("Edited By")').length > 0 ) {
            $('#chr-content p:contains("Edited By")').remove();
          }

          setTimeout(function(){

          if( $('#chr-content p:contains("Editor"):contains("Atlas Studios")').length > 0 ) {
            $('#chr-content p:contains("Editor"):contains("Atlas Studios")').remove();
          }

          if( $('#chr-content p:contains("Translator"):contains("Atlas Studios")').length > 0 ) {
            $('#chr-content p:contains("Translator"):contains("Atlas Studios")').remove();
          }

            }, 50);

          if( $('#chr-content p:contains("Transtator: ")').length > 0 ) {
            $('#chr-content p:contains("Transtator: ")').remove();
          }

          if( $('#chr-content p:contains("Feifei")').length > 0 ) {
            $('#chr-content p:contains("Feifei")').remove();
          }

          if( $('#chr-content p:contains("end of this chapter")').length > 0 ) {
            $('#chr-content p:contains("end of this chapter")').remove();
          }

          while( $('#chr-content p:contains("~")').last().length > 0 ) {
            $('#chr-content p:contains("~")').last().remove();
          }

          if( $('#chr-content p:contains("Updates by")').length > 0 ) {
            /*$('#chr-content p:contains("Updates by")').each(function(){
              $(this).text( $(this).text().replace(/(\r\n|\n|\r)/gm, "").replace(/Updates.*\com/igm, '') );
            });*/
            $('#chr-content p:contains("Updates by")').remove();
          }

          if( $('#chr-content p:contains("you are reading on our content copy site")').length > 0 ) {
             $('#chr-content p:contains("you are reading on our content copy site")').remove();
          }

          if( !is('contains') ) //unsafeWindow
            unsafeWindow.contains = function(){
              //console.log(arguments.length, arguments);
              if( arguments.length == 1 )
                return false;

              for ( var i = 1; arguments[0].indexOf(arguments[i]) > -1; i++) {}

              return i == arguments.length;
            };

          //contains($('#chr-content p:contains("『"):contains("』")').eq(0).text(), '《Skill proficiency reached', '》')

          //if( window.location.toString().indexOf('after-surviving-the-apocalypse-i-built-a-city-in-another-world') > 0 )
          if(false)
          if( olv.uri('after-surviving-the-apocalypse-i-built-a-city-in-another-world') ) {
            $('#chr-content p:contains("[STATS:")').each(function(){
              if( $(this).text().indexOf('[STATS:') > -1 && $(this).next().text().indexOf('[WEALTH:') > -1) {
                var max = $('#chr-content p').length - Number($(this).attr('para')) + 1;
                var next = $(this);
                for(var i = 0; next.text().indexOf('[WEALTH:') == -1 && i < max; i++) { next = next.next(); }
                if( next.text().indexOf('[WEALTH:') > -1 ) {
                  var end = next;
                  next = $(this).prev();
                  for(var i = 0; next.text().indexOf('[WEALTH:') == -1 && i < max; i++) {
                    //next.text('');
                    next.attr('style', 'color:red !important');
                    next.addClass('mute');
                    next = next.next();
                  }
                  end.attr('style', 'color:red !important');
                  end.addClass('mute');
                  //end.text('');
                }
              }
            });
          }

          if( olv.uri('quick-transmigration-heroine-arrives-woman-rapidly-retreats') ) {
            olv.reader.cacheNext();
            olv.preLoadNext = 1;

            if( $('#chr-content p:contains("Light Queen of the End of the World vs. The Space Ability Woman")').length == 1 )
              $('#chr-content p:contains("Light Queen of the End of the World vs. The Space Ability Woman")').remove();

            if( $('#chr-content p:contains("Beauty VS Warm and Gentle")').length == 1 )
              $('#chr-content p:contains("Beauty VS Warm and Gentle")').remove();
          }

          if( olv.uri('reborn-little-girl-wont-give-up') ) {
            $('#chr-content p').each(function(){
              if( /“.*” \(.*\)/.test($(this).text()) ) {
                $(this).text( '“' + $(this).text().replace(/.*\(|\)/g, '') + '”' );
              }
            });
          }

          if( $('#chr-content p:contains("JMin\'s Corner")').length > 0 )
          $('#chr-content p:contains("JMin\'s Corner")').prev().nextAll().remove();

          //if(false)
          if( olv.uri('special-agents-rebirth-the-almighty-goddess-of-quick-transmigration') ) {
            setTimeout(function(){
            //if(false)
            $('#chr-content p').each(function(){
              if( / \. /g.test($(this).text()) )
                $(this).text( $(this).text().replace(/ \. /g, '. ') );

              if( /\. $/g.test($(this).text()) )
                $(this).text( $(this).text().replace(/\. $/g, '.') );

              if( /[a-z]+[0-9]/g.test($(this).text()) )
                $(this).text( $(this).text().replace(/[a-z]+[0-9]/g, function(obj){ return obj.replace(/[0-9]/, '');}) );

              if( /[a-z]+[0-9]/g.test($(this).text()) )
                $(this).text( $(this).text().replace(/[a-z]+[0-9]/g, function(obj){ return obj.replace(/[0-9]/, '');}) );

              if( /[a-z]+\([A-Z]*\)/g.test($(this).text()) )
                $(this).text( $(this).text().replace(/[a-z]+\([A-Z]*\)/g, function(obj){ return obj.replace(/\([A-Z]*\)/g, '');}) );

              if( /[a-z]\. [a-z]/g.test($(this).text()) )
                $(this).text( $(this).text().replace(/[a-z]\. [A-Za-z]/g, function(obj){ return obj.replace('.', ',');}) );
            });

            $('#chr-content p:contains("Foot notes")').prev().nextAll().remove();
            $('#chr-content p:contains("Footnotes")').prev().nextAll().remove();
            }, 300);
          }

          if( window.location.toString().indexOf('kumo-desu-ga-nani-ka-novel') > 0 ) {
            $('#chr-content p:contains("『"):contains("』")').each(function(){
              if( $(this).text().match(/『/g).length > 50 )
                $(this).remove();

              if( contains($(this).text(), '《Skill proficiency reached', '》') ) {
                var skill = $(this).text().replace(/.*『|\sLV[0-9]』.*/g, '').trim();

              if( $(this).text().match(RegExp('『' + skill, 'g')).length == 2 )
                $(this).text( '《' + $(this).text().replace(/.*『|\sLV[0-9]』.*/g, '').trim() + ' leveled up》 ' );
              }
            });

            setTimeout(function(){
            $('#chr-content p:contains("HP:")').each(function(){
              if( $(this).text().indexOf('HP:') > -1 && $(this).next().text().indexOf('MP:') > -1) {
                //console.log($(this), $(this).text())
                //find 』
                //return;
                var max = $('#chr-content p').length - Number($(this).attr('para')) + 1;
                var next = $(this);
                //console.log($('#chr-content p').length, Number($(this).attr('para')), max)
                for(var i = 0; next.text().indexOf('』') == -1 && i < max; i++) { next = next.next(); }
                //console.log(next.text());

                if( next.text().indexOf('』') > -1 ) {
                  var end = next;
                  next = $(this).prev();
                  for(var i = 0; next.text().indexOf('』') == -1 && i < max; i++) {
                    //next.text('');
                    next.attr('style', 'color:red !important');
                    next.addClass('mute');
                    next = next.next();
                  }
                  end.attr('style', 'color:red !important');
                  end.addClass('mute');
                  //end.text('');
                }
              }
            });
            }, 300);
          }

          olv.squishDupe = function(){
            //
          };

          //squish repeating words
          if(false)
          setTimeout(function(){
             $('#chr-content p').each(function(){
               var match = $(this).text().match(/(\b\S+\b)[^a-zA-Z0-9]*\s+\b\1\b/);
               if( match != null ) {
                 match = $(this).text().match(RegExp(match[match.length-1], 'g'));

                 if( match.length > 3 ) {
                   var first = $(this).text().indexOf(match[0]);
                   var last = $(this).text().indexOf(match[0], $(this).text().length - (match[0].length * 2)) + match[0].length;
                   //console.log( $(this).text().substr(0, first) + match[0] + ' X'+match.length + $(this).text().substr(last), $(this).text(), first, last, match );
                   $(this).text( $(this).text().substr(0, first) + match[0] + ' X'+match.length + $(this).text().substr(last) );
                 }
               }

               //var text = 'I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! 《Skill proficiency reached. Acquired skill 『Anger LV1』》 I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! 《Skill proficiency reached. Skill 『Anger LV1』 has become 『Anger LV2』》 I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! I will kill you! ';
               //var match = $(this).text().match(/(\b[a-zA-Z0-9 ]*\b\S)\s\b\1/);
               var text = $(this).text();
               //var text = $('p[para="130"]').text();
               //match = text.match(/(\b[a-zA-Z0-9 ]*\b\S)(\s(\b\1)*)*\S/);
               match = text.match(/(\b[a-zA-Z0-9 ]*\b\S)(?:\b\1\s)*/);
               var count = 0;
               if( match != null && match.length > 3 )
                 console.log(match.length, '('+match[1]+')');

               if( match != null && match.length > 3 )
                count = text.match(RegExp('('+match[1]+')', 'g')).length;

               if( match != null && count > 4) {
                 console.log($(this), count, match);
                 //text.replace(match[0], match[1] + ' X' + (match[0].match(RegExp('('+match[1]+')', 'g')).length) + ' ' + match[0].substr(-1));
                 var first = text.indexOf(match[1]+' '+match[1]);
                 var last = first + match[0].length - 1;
                 //text.substr(0, first) + match[1] + ' X' + (match[0].match(RegExp('('+match[1]+')', 'g')).length) + ' ' + text.substr(last);
                 //text = text.substr(0, first) + match[1] + ' X#' + ' ' + text.substr(last);
                 text = match[1] + ' X' + count + ' ' +text.replace(RegExp('('+match[1]+')', 'g'), '').trim();
                 $(this).text(text);
               }
             });
          }, 300);

          $(".chr-nav").off("click", "button.chr-jump");
          $(".chr-nav").on("click", "button.chr-jump", function(){
          //ajaxChapterOptionUrl "https://novelbin.com/ajax/chapter-option"
          $.get(ajaxChapterOptionUrl, { novelId: olv.novel.id, currentChapterId: olv.novel.chapter.id }).done((function(a) {
              $(".chr-jump").replaceWith(a);
              const optionValue = $(".chr-jump option[chapter-id='" + olv.novel.chapter.id + "']").val();
              $(".chr-jump").val(optionValue),
                  $(".chr-jump").on("change", (function() { window.location = $(this).val() }))
            }));
          });
/*
function chapterJump(a, e, t) {
    $(".chr-nav").on("click", "button.chr-jump", (function() {

        let ajaxChapterOptionUrlAPI = ajaxChapterOptionUrl;

        $("button.chr-jump").attr("disabled", !0), $.get(ajaxChapterOptionUrlAPI, { novelId: a, currentChapterId: e }).done((function(a) {

            $(".chr-jump").replaceWith(a);
            const optionValue = $(".chr-jump option[chapter-id='" + e + "']").val();
            $(".chr-jump").val(optionValue),
                $(".chr-jump").on("change", (function() { window.location = $(this).val() }))
        }))
    }))
}

function getContent(novel_id, chapter_id) {
    $.ajax({ method: "POST", url: ajaxShowFullContent, data: { novel_id: novel_id, chapter_id: chapter_id, _csrf: csrf } }).done((function(res) {
        if (res.success) {
            $("#chr-content").find("h1,h2,h3,h4,h5,h6,br,p").remove();
            $("#chr-content div:first").after(res.content);
        }
    }));
}
*/


          if( window.location.toString().indexOf('amelia-the-level-zero-hero') ) {
            if( $('#chr-content p:contains("Royal Road")').length > 0 ) {
               $('#chr-content p:contains("Royal Road")').remove();
            }
            if( $('#chr-content p:contains("Amazon")').length > 0 ) {
               $('#chr-content p:contains("Amazon")').remove();
            }
            if( $('#chr-content p:contains("Read this novel on the original website")').length > 0 ) {
               $('#chr-content p:contains("Read this novel on the original website")').remove();
            }

            $('#chr-content p:contains("Melas D")').prev().nextAll().remove();

          }

          if( window.location.toString().indexOf('little-one-tears-the-villains-script') ) {
            $('#chr-content p:contains("patron")').remove();

            setTimeout(function(){
            while( /[0-9]/.test($('#chr-content p:last').text().trim()[0]) ) {
              $('#chr-content p:last').remove();
            }
              }, 300);
          }

          if( window.location.toString().indexOf('black-bellied-belle-demon-lord-bite-the-bait-please') ) {
            $('#chr-content p:contains("Thank You for the support and please continue")').prev().nextAll().remove();
            $('#chr-content p:contains("Thank You for the reading here and you might also like to read")').prev().nextAll().remove();
            $('#chr-content p:contains("Click on if you feel like buying Cloud a coffee")').prev().nextAll().remove();

          }

          if( window.location.toString().indexOf("reincarnated-as-a-phoenix") ) {
            [
              '[Name',
              '[Health',
              '[Stamina',
              '[Magicka'
            ].forEach(obj => {
              //console.log(obj)
              $('#chr-content p:contains("'+obj+'")').remove();
            });
          }

          if( window.location.toString().indexOf("my-evil-imperial-wife-is-too-arrogant") ) {
            removeAfter = removeAfter.concat([
              'Translated product by May Our  Come True',
              'Translation provided by May Our  Come True'
            ]);
          }

          removeAfter = removeAfter.concat([
              'To be continuedRate this bookYou may also likeMORE',
              'To be continued',
            'I deleted my previous review because of two important things'
            ]);

          removeAfter.forEach(obj => {
            //console.log(obj)
            $('#chr-content p:contains("'+obj+'")').prev().nextAll().remove();
          });

          if( $('div[id^="pf-"]').length > 0 )
            $('div[id^="pf-"]').remove();

          //Process next chapter
          //olv.nexthref
          //$(document).height()
          //if( window === window.parent )
          //console.log(olv.nexthref)
          //console.log( window === window.parent && olv.nexthref.length > 20 );
          //if( window === window.parent && olv.nexthref.length > 20 ) {
            //$('body').append('<iframe src="'+olv.nexthref+'" style="width: 100%;height:50%; position:fixed; top:'+$(document).height()+'px; left: 0;"></iframe>');

            /*
            $('body iframe').on('load', function(){
              $('.olv').hide();
              console.log($(this).attr('src'))
            });
             */
          //}

          //check for superscripts
          if(false)
          $('#chr-content p').each(function(){
            if( /^[^a-zA-Z0-9“【 —]/.test( $(this).text().trim() ) ) {
              console.log($(olv.site.content + ' p:contains("'+ $(this).text().trim().substr(0, 1) +'")'), $(this).text());
              //if( $(olv.site.content + ' p:contains("'+ $(this).text().trim().substr(0, 1) +'")').length == 2 )
                //$(olv.site.content + ' p:contains("'+ $(this).text().trim().substr(0, 1) +'"):last').remove();
            }
          });

          if(false)
          if( window !== window.parent ) {
            window.top.postMessage('loadedFrame', '*');

            return false;
          }

          //console.log( $('#chr-content').html() );
          //if(false)
           if( window.location.href.toString().indexOf('the-green-teas-crushing-victories-in-the-70s') > 0 && $('#chr-content p').length < 8) {
             if( $('#chr-content script').length > 0 ) $('#chr-content script').remove();
             var p = $('#chr-content p').detach(); olv.p = p;
             var t = $('#chr-content').text();

             t = t.replaceAll(/"[A-Z]|" [A-Z]|"\. [A-Z]/g, function(k, v){ return '"\n'+k.replace('"', '');});
             t = t.replaceAll(/[.!”]“|[.!”] “/g, function(k, v){ return k.replace('“', '')+'\n“';});
             //t = t.replaceAll(/[a-z][.][A-Z]/g, function(k, v){ return k.replace('.', ".\n");});
             t = t.replaceAll(/[a-z][!][A-Z]/g, function(k, v){ return k.replace('!', ".\n");});
             t = t.replaceAll(/[a-z][?][A-Z]/g, function(k, v){ return k.replace('?', ".\n");});

             t = t.split("\n").join('</p><p>');

             $('#chr-content').html('<div id="chapter-content"><p>'+t+'</p><div>');
             $('#chr-content').prepend( p );
           }


          if( window.location.href.toString().indexOf('reborn-missy-an-adorable-wife') > 0 && $('#chr-content p').length < 8) {
            var t = $('#chr-content p').text();

            {//if( t.match(/\./g) != null && t.match(/\./g).length > 20 ) {
              t = t.replaceAll(/"[A-Z]|" [A-Z]|"\. [A-Z]/g, function(k, v){ return '"\n'+k.replace('"', '');});
              //t = t.replaceAll(/[.!”]“|[.!”] “/g, function(k, v){ return k.replace('“', '')+'\n“';});
              //t = t.replaceAll(/[a-z][.][A-Z]/g, function(k, v){ return k.replace('.', ".\n");});
              //t = t.replaceAll(/[a-z][!][A-Z]/g, function(k, v){ return k.replace('!', ".\n");});

              t = t.split("\n").join('</p><p>');
            }

            $('#chr-content').html('<div id="chapter-content"><p>'+t+'</p><div>');

            if(false)
          $('#chr-content p').each(function(){
  					/*if( $(this).get(0).nodeName == 'P' ) {
    					$(this).attr('para', $(this).index() );
  					}*/
            if(false)
            if( $(this).text().length > 10 )
              if( $(this).text().match(/\./g).length < 6 ) {
                console.log($(this).text());
                $(this).remove();
              }
            if(false)
            if( $(this).text().length > 10 )
              if( $(this).text().match(/\./g) != null && $(this).text().match(/\./g).length > 20 ) {
                $(this).text( $(this).text().replaceAll(/”[A-Z]|” [A-Z]|”\. [A-Z]/g, function(k, v){ return '”\n'+k.replace('”', '');}) );
               	$(this).text( $(this).text().replaceAll(/[.!”]“|[.!”] “/g, function(k, v){ return k.replace('“', '')+'\n“';}) );

                var t = $(this).text().split("\n");

                $('#chr-content').html('<div id="chapter-content"><p>'+t.join('</p><p>')+'</p><div>');
                if( typeof olv.paragraph == "undefined" )
                olv.paragraph = 0;
                olv.content = $(olv.site.content).children();


                /*
                $('.entry-content p').wrapAll('<div id="chapter-content" />');
          $('.pub-date').remove();
          $('.entry-content p.report').remove();
          olv.site.content = '#chapter-content';
          olv.content = $(olv.site.content).children();
          olv.paragraph = 0;
          $('.entry-content p').each(function(){
  					if( $(this).get(0).nodeName == 'P' ) {
    					$(this).attr('para', $(this).index() );
  					}
					});
          }
                */

                return;
              }
            //console.log($(this), $(this).text().match(/\./g).length);
					});
          }
        }
      },
      lightnovelpub:{
        content: '#chapter-container',
        chapter: '.chapter-title',
        button: '.control-action-btn',
        background: '#252729',
        next: '.nextchap',
        disabled: '.isDisabled'
      },
      webnovelpub:{
        content: '#chapter-container',
        chapter: '.chapter-title',
        button: '.control-action-btn',
        background: '#252729',
        next: '.nextchap',
        disabled: '.isDisabled',
        style: '#chapter-content div {display:none !important};',
        fn: function(){
          setTimeout(function(){
          	//$(olv.site.content + ' div').remove();
          },1000);
        },
      },
      novelmao:{
        content:'#chapter-container',
        next: 'div.chapter-nav:nth-child(1) > a:nth-child(3)',
        fn: function(){
          //$('.pub-date').remove();
          //$('.entry-content div').remove();
          if( $('.entry-content p:contains("the fastest update to the latest chapter")').length > 0 ) {
          $('.entry-content p:contains("the fastest update to the latest chapter")').remove();
          $('.entry-content p').wrapAll('<div id="chapter-content" />');
          $('.pub-date').remove();
          $('.entry-content p.report').remove();
          olv.site.content = '#chapter-content';
          olv.content = $(olv.site.content).children();
            if( typeof olv.paragraph == "undefined" )
          olv.paragraph = 0;
          $('.entry-content p').each(function(){
  					if( $(this).get(0).nodeName == 'P' ) {
    					$(this).attr('para', $(this).index() );
  					}
					});
          }
          //console.log( 'wtf', $(olv.site.content).length, olv.content.length );
          setTimeout(function(){
          	//$(olv.site.content + ' div').remove();
            //alert(1231231);
            //olv.content = $(olv.site.content).children();
            //olv.reader.load();
            //console.log( 'wtf', $(olv.site.content).length, olv.content.length );
          },50);
        },
        addition: 100
      },
      novelgate:{
       	content: '#chapter-body',
        button: '.glyphicon-setting',
        next: '#nav_chap_top a:eq(1)',
      },
      mtlnovel: {
        content: '.post-content .par',
        button: '.amp-sidebar-toolbar-target-hidden > ul:nth-child(1) > li:nth-child(1) > a:nth-child(5)',
        next: '#fixed-nav2 > a:nth-child(2)',
        disabled: '[disabled]',
        fn: function(){
          if( $('#fixed-nav2 > a:nth-child(2)').length )
        	$('body').attr('class', 'amp-mode-mouse nightmode-on');
        },
      },
      archiveofourown:{
        content: '.userstuff.module',
        chapter: 'h3.title',
        next: '.chapter.next a',
        style: 'body {background: #131313; color: #c2bfbf;} a.tag, a, a:link, a:visited:hover {color: #BBB;} #add_comment_placeholder {display:none;} li.relationships a {background: #222;} #footer {background: #000;}',
        fn: function(){
          olv.site.content = '.userstuff.module';
          olv.cont = '.userstuff.module';

          if( 1 ) {
          //$('.chapter-inner').html(olv.chap);
          olv.chap = $(olv.cont).html();
          olv.restoreChapter = {
            'html': $(olv.cont).html(),
            'fn': function(){
              olv.site.content = olv.cont;
              $(olv.cont).html( olv.restoreChapter['html'] );

              if( $(olv.cont + ' td').length == 1 && $(olv.cont + 'td p').length == $(olv.cont + ' p').length )
                $(olv.cont).html( $(olv.cont + ' td').html() );

              if( $(olv.cont + ' div td').length > 0 )
                $(olv.cont + ' div td').each(function(){
                  //if( $(this).find('p').length == 0 )
                    $(this).parents(olv.cont + ' div').replaceWith('<p style="color: rgba(241, 196, 15, 1); border-collapse: collapse; width: 100%; background-color: rgba(1, 0, 0, 1);">'+$(this).html()+'</p>');
                });

              olv.content = $(olv.site.content).children();
              olv.setPara();
              olv.paragraph = 0;

              $(olv.cont + ' span[style*=georgia]').css({'font-family': 'Open Sans,open-sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif'});
            }
          };

            //if(false)
          olv.fn.end.push( function(){ olv.restoreChapter.fn(); });
          }
        }
      },
      royalroad:{
       	content: '.chapter-content',
        button: '.glyphicon-setting',
        next: '.col-md-offset-4 > a:nth-child(1)',
        style: '.chapter-page-body .chapter-page .chapter-content p {color: rgba(255, 255, 255, .6);} .fiction-page .fic-header .fic-title select option {border: 1px solid #000; background: #010; color: #fff; background:transparent;} .fiction-page .fic-header .fic-title {margin-bottom: 0px;} .fiction-page .fic-header .fic-title h1 {margin-top: 0;}',
        fn: function(){
          if( typeof fictionId != 'undefined' )
            olv.novel = GM_getValue(olv.site.site+'.'+fictionId) || {};

          //if( $('script[src*="site.modern.js"]').length > 0 )
            //$('script[src*="site.modern.js"]').remove();

if( typeof olv.data != 'undefined' ) {
  /*
  //breaks play button
  jQuery.noConflict();
  olv.$ = $;
  $ = function(selector,context){ return new jQuery.fn.init(selector,(typeof olv.data != 'undefined' ? olv.data : context||window.document)); };
  $.fn = $.prototype = jQuery.fn;
  jQuery.extend($, jQuery);
  */

  window.jQueryInit = $.fn.init;

  $.fn.init = function(arg1, arg2, rootjQuery){
      //console.log(arg1, arg2, rootjQuery);
      arg2 = arg2 || (typeof olv.data != 'undefined' ? olv.data : window.document);
      return new jQueryInit(arg1, arg2, rootjQuery);
  };
}

if( royalroad.actionRoute == 'Chapter.Index' ) {
  $('.scroll-to-top').css('margin-bottom', '30px');
  //olv.novel = GM_getValue(olv.site.site+'.'+fictionId);

  if( typeof olv.novel == 'undefined' || typeof olv.novel.id == 'undefined' )
    olv.novel = {
      'id':fictionId,
      'name': $('.img-offset').attr('alt').trim(),
      'url': location.protocol + '//' + location.host + $('.col-md-5 > a:nth-child(1)').attr('href'),
      'cover': $('.img-offset').attr('src').replace(/\?.*/, ''),
      'author':$('.fic-header a[href*="profile"]:eq(0)').text()
      //'latest': {url:row.find('.chr-text').parent().attr('href'),name:row.find('.chr-text').text().trim()}
    }

  if( typeof olv.novel.chapter == 'undefined' || olv.novel.chapter.id != chapterId ) {
    olv.novel.chapter = {
      'id': chapterId,
      'name': $('.fic-header h1').text().trim(),
      'url': location.href.toString()
    }

    GM_setValue(olv.site.site+'.'+fictionId, olv.novel);
  }

  if( typeof olv.novel.type == 'undefined' ) {

    //GM_deleteValue(key)
    $.get( olv.novel.url, function( data ) {
      //$( ".result" ).html( data );
      //olv.data = $(data);
      olv.data = $(new DOMParser().parseFromString(data, 'text/html'));
      $('body').append('<script>'+$('script:contains("window.chapters")', olv.data).html()+'</script>');

      royalroad.actionRoute = 'Fictions.Index';

      olv.site.fn();

      royalroad.actionRoute = 'Chapter.Index';
      console.log('finished appending olv.novel');

      //fixes play button
      $.fn.init = window.jQueryInit;

      $('.olv .latest').text( olv.novel.latest.title.replace(/chapter/ig, 'C') );
    });
  }
    /*
    GM_xmlhttpRequest({
      method: "GET",
      url: url,
      onload: function(response) {
        if (response.responseText !== "") { // This will be modified to compare with previous response
          console.log("XYZ is updated!", response);
          // Update the page or perform any other action here
        }
      },
    });
*/
  if(false) //iframes are blocked on RR.
  if( typeof olv.novel.type == 'undefined' ) {
    olv.eventListener = function(event){
      console.log(event.data, event);
      //if( typeof event.data == 'string' && typeof olv[event.data] == 'function')
        //olv[event.data]();
    };

    if( window === window.parent )
      window.addEventListener("message", olv.eventListener, false);
    $('body').prepend('<iframe class="novelindex" src="'+olv.novel.url+'" style="display:block !important; width: 100%;1height:50%;"></iframe>');
    $('body iframe.novelindex').on('load', function(){

      //(typeof olv.novel != 'undefined' && typeof olv.novel.latest != 'undefined' ? olv.novel.latest.name.replace(/chapter/ig, 'C') : '')
    });
  }
}

          //description page
          if( $('.fiction-info').length > 0 && $('.fic-header .fic-title .col').length > 0 ) {
            $('.fic-header .fic-title .col').css({'text-align': 'left'});

            //chapters[chapters.length-1]
            var lc = chapters[chapters.length-1];

            var col = '<span>'+$('span.pull-right:nth-child(1)').text()+'</span>';

            //col += ' - <a href="'+lc.url+'" style="color:white;"><i class="fa fa-book"></i> '+lc.title+' - ' + lc.date.replace(/^\d{2}|T.*/g, '') +'</a>';

            $('.fic-header .fic-title .col').append('<h4 class="chapters" style="1float:right;">'+col+'</h4>');

            $('.fic-header .fic-buttons a').attr('class', '');
            $('.fic-header .fic-buttons a').css({'color':'white'});

            //novel description set by RR: chapters, fictionId, volumes
            if (typeof chapters != 'undefined') {
              var chaps = '<div style="text-align:right; overflow:hidden; float:right; width:45%; height: 150px; display: flex; flex-direction: column;"><h4><a href="'+chapters[0].url+'" style="color:white; display:block;"><i class="fa fa-book"></i> ' + chapters[0].title + ' - ' + chapters[0].date.replace(/^\d{2}|T.*/g, '') + '</a></h4>';
              chaps += '<div class="chapter_list" style="font-weight: 300;overflow: auto; display:block; overflow-y: scroll !important;">';

              var row = [];
              chapters.forEach(obj => {
                row.push('<a href="'+obj.url+'" style="display:block; color:white;"><i class="fa fa-book"></i> '+obj.title+ ' - ' + obj.date.replace(/^\d{2}|T.*/g, '')+'</a>');
              });

              //row.shift();
              chaps += row.join('');

              chaps += '</div></div>';
              $('.fic-header .fic-title .col').prepend(chaps);

              olv.lastChapter = $('.fic-header .fic-title .col div div a:last-child');

              olv.fn.end.push( function(){
                var last = olv.lastChapter;
                var height = last.offset().top;// + last.height();// + 200;
                //$('.fic-header .chapter_list').height( height );
                $('.fic-header .fic-title .col div div').scrollTop( height );
              });
            };

            if (false && typeof chapters != 'undefined') {
              var chaps = '<h4><a href="'+chapters[0].url+'" style="color:white;"><i class="fa fa-book"></i> ' + chapters[0].title + ' - ' + chapters[0].date.replace(/^\d{2}|T.*/g, '') + '</a></h4>';
              //chaps += '<h4><a href="'+lc.url+'" style="color:white;"><i class="fa fa-book"></i> '+lc.title+' - ' + lc.date.replace(/^\d{2}|T.*/g, '') +'</a></h4>';
              chaps += '<h4><a class="select_url" href="'+lc.url+'" style="color:white;"><i class="fa fa-book"></i></a> ';
              chaps += '<select style="color: #fff; background:transparent; display: inline-block;">';

              chapters.forEach(obj => {
                chaps +='<option url="'+obj.url+(obj.id == lc.id ? '" selected="selected' : '')+'">'+obj.title+' - ' + obj.date.replace(/^\d{2}|T.*/g, '')+'</option>';
              });

              chaps +='</select></h4>';
              $('.fic-header .fic-buttons a').html( chaps );
              //$('.fic-header .fic-title .col select').val()

              $(document).on('change', '.fic-header .fic-title .col select', function(e){
                $('.select_url').attr('href', $(this).find(":selected").attr('url') );
              });
            }
            //$('.fic-header .fic-title .col').append('<h4>'+$('.fic-header .fic-buttons').html()+'</h4><h4><span>Pages '+$('li.bold:nth-child(12)').text()+' - 275 words per page calculated from '+$('i.popovers').data('content').match(/[0-9]+,[0-9]+/g, '').pop()+' words</span></h4>');

            if( $('i.popovers').data('content').indexOf('Kindle') == -1 )
            $('.fic-header .fic-title .col').append('<h4><span class="pages">'+$('li.bold:nth-child(12)').text()+' Pages</span></h4><h4><span class="words">'+$('i.popovers').data('content').match(/[0-9]+,[0-9]+/g, '').pop()+' words</span></h4>');

            $('.fic-header .fic-buttons').remove();
            //olv.style += ' .btn-primary {background-color: inherit;border:0;}'

if( royalroad.actionRoute == 'Fictions.Index' ) {
  //olv.novel = GM_getValue(olv.site.site+'.'+fictionId) || {};

  if( typeof olv.novel != 'undefined' && typeof olv.novel.type == 'undefined' ) {
    olv.novel = Object.assign({}, olv.novel, {
      'type': $('.portlet span.label-sm:nth-child(1)').text().trim(),
      'tags': []
    });
  }

  //listings that can't be expected to stay the same
  Object.entries({
    'status': $('.portlet span.label:nth-child(2)').text().trim(),
    'chapters': chapters.length,
    'pages': $('.fic-header .pages').text().replace(/[^0-9]/g, ''),
    'words': $('.fic-header .words').text().replace(/[^0-9,]/g, '')
  }).forEach(([key, val]) => {
    olv.novel[key] = val;
  });

  //only update the list of tags if the number of tags changes
  if( olv.novel.tags.length != $('.tags a').length )
    $('.tags a').each(function(){
      olv.novel.tags.push($(this).text().trim());
    });

  //only updates when there's a new chapter
  if( typeof olv.novel.latest == 'undefined' || olv.novel.latest.id != chapters[chapters.length-1].id )
    olv.novel.latest = chapters[chapters.length-1];

  //only save the entry if a chapter has been read
  if( typeof olv.novel.id != 'undefined' )
    GM_setValue(olv.site.site+'.'+fictionId, olv.novel);

  if( typeof olv.novel.chapter != 'undefined' ) {
    var lastChapter = $('.fic-header .fic-title .col a:contains("'+olv.novel.chapter.name+'")');
    lastChapter.find('i').attr('style', 'color: #d781d7;');
    //console.log( lastChapter.nextAll()[0] );
    if( lastChapter.nextAll().length > 0 ) {
      //$('.fic-header .fic-title .col .chapters').append('<h4 class="chapters" style="1float:right;">'+col+'</h4>');
      //$('<h4 class="remaining" style="1float:right;"><a href="'+lastChapter.next().attr('href')+'">'+lastChapter.next().text()+'</a></h4>').insertAfter('.fic-header .fic-title .col .chapters');
      $('<h4 class="remaining" style="1float:right;"><a href="'+lastChapter.next().attr('href')+'"><i class="fa fa-book"></i></a> '+ lastChapter.nextAll().length +' Unread</h4>').insertAfter('.fic-header .fic-title .col .chapters');
    }

    if( typeof olv.novel.unread != 'undefined' || olv.novel.unread != lastChapter.nextAll().length ) {
      olv.novel.unread = lastChapter.nextAll().length;
      GM_setValue(olv.site.site+'.'+fictionId, olv.novel);
    }

    //lastChapter.get(0).localName
    //if( lastChapter.index() < lastChapter.parent().find('a').length -1 ) olv.lastChapter = lastChapter;

    if(false)
    if( lastChapter.index() < lastChapter.parent().find('a').length -1 )
      olv.fn.end.push( function(){
        var last = $('.fic-header .fic-title .col a:contains("'+olv.novel.chapter.name+'")'); //$('.fic-header .fic-title .col div div a:last-child');
        var height = last.offset().top + last.height();
        //$('.fic-header .chapter_list').height( height );
        $('.fic-header .fic-title .col div div').scrollTop( height );
      });

      if(false)
    olv.fn.end.push( function(){
      var last = $('.fic-header .fic-title .col div div a:last-child');
      var height = last.offset().top + last.height() + 200;
      //$('.fic-header .chapter_list').height( height );
      $('.fic-header .fic-title .col div div').scrollTop( height );
    });

    if( olv.novel.chapter.id == olv.novel.latest.id ) {
      $('.fic-header h1:eq(0)').prepend('<i class="fa fa-book" style="color: #b045b0; background: white;"></i> ');
    }

    var row = chapters.find(o => o.id === olv.novel.chapter.id);
    if( typeof row.volumeId != 'undefined' && row.volumeId != null && row.volumeId != volumes[0].id ) {
      var vol = volumes.find(o => o.id === row.volumeId);
      $('.fic-header .thumbnail').attr('src', vol.cover);
    }
  }



  if(false)
  if( typeof olv.novel == 'undefined' )
    olv.novel = {
      'id':fictionId,
      'name': $('.img-offset').attr('alt').trim(),
      'url': location.protocol + '//' + location.host + $('.col-md-5 > a:nth-child(1)').attr('href'),
      'cover': $('.img-offset').attr('src').replace(/\?.*/, ''),
      'author':$('.fic-header a[href*="profile"]:eq(0)').text()
      //'latest': {url:row.find('.chr-text').parent().attr('href'),name:row.find('.chr-text').text().trim()}
    }

  if(false)
  if( typeof olv.novel.chapter == 'undefined' || olv.novel.chapter.id != chapterId ) {
    olv.novel.chapter = {
      'id': chapterId,
      'name': $('.fic-header h1').text().trim(),
      'url': location.href.toString()
    }

    //GM_setValue(olv.site.site+'.'+fictionId, olv.novel);
  }
}
          }

          ////file://*/*

olv.modedjQuery = function(){
    window.jQueryInit = $.fn.init;

    $.fn.init = function(arg1, arg2, rootjQuery){
        //console.log(arg1, arg2, rootjQuery);
        arg2 = arg2 || (typeof olv.data != 'undefined' ? olv.data : window.document);
        return new jQueryInit(arg1, arg2, rootjQuery);
    };
};

olv.query = function(url) {
  /*let control = GM_xmlhttpRequest(details);
  console.log(control)
  olv.gm = control;

  GM_xmlhttpRequest({
    method: "GET",
    url: url,
    onload: function(response) {
      if (response.responseText !== "") { // This will be modified to compare with previous response
        console.log("XYZ is updated!", response);
        // Update the page or perform any other action here
      }
    },
  });*/

  //var response =

  //if queried website is not the same site
  if( true )
  GM_xmlhttpRequest({
    method: "GET",
    url: url,
    onload: function(response) {
      if (response.responseText !== "") { // This will be modified to compare with previous response
        console.log("XYZ is updated!", response);
        // Update the page or perform any other action here
      }
    },
  });
  else
  $.get( olv.novel.url, function( data ) {
    olv.data = $(new DOMParser().parseFromString(data, 'text/html'));
    //$('body').append('<script>'+$('script:contains("chapters")', olv.data).html()+'</script>');

    //usesful? if the site is modified by script
    //olv.site.fn();

    royalroad.actionRoute = 'Chapter.Index';
    console.log('finished appending olv.novel');

    //fixes play button
    $.fn.init = window.jQueryInit;

    $('.olv .latest').text( olv.novel.latest.title.replace(/chapter/ig, 'C') );
  });
};

if(false) {
olv.query({
  'url': 'https://novelbin.com/b/the-hivemind-is-conquering-for-me'
});
}
/*
var url = "https://novelbin.com/b/the-hivemind-is-conquering-for-me"; // Replace with the actual URL you want to check
GM_xmlhttpRequest({
  method: "GET",
  url: url,
  onload: function(response) {
    if (response.responseText !== "") { // This will be modified to compare with previous response
      console.log("XYZ is updated!", response);
      // Update the page or perform any other action here
    }
  },
}); */

//below this line doesn't get saved to db
//fixes a bug later in the code in the 'C' section
if( typeof olv.novel.latest != 'undefined' )
  olv.novel.latest.name = olv.novel.latest.title;

        	/*$('.chapter-content p').each(function(){
            $(this).text( $(this).text().replace(/.*amazon.*royal road|/ig, '') );
          });*/

            //*/


          var findDiv = function(){
            console.log($('.chapter-content div').length, $('.chapter-content div'));
          }

          if( window.location.toString().indexOf("lament-of-the-fallen") > 0 ) {
            $('.chapter-inner tbody').each(function(){
              //console.log( $(this), $(this).children().length );
              if( $(this).children().length > 6 )
                $(this).remove();
            });

            $('.chapter-inner td').each(function(){
              //console.log( $(this), $(this).children().length );
              if( $(this).children().length > 1 )
                $(this).remove();
            });

            if( $('.chapter-inner table:contains("EXP")').length > 0 ) {
              $('.chapter-inner table:contains("EXP")').remove();
            }

          }

          if( window.location.toString().indexOf("crimson-eternal-an-immortal-death-mage-litrpg") > 0 ) {
            $('.chapter-inner p strong:contains("User has killed")').remove();
            $('.chapter-inner table:contains("Name: ")').remove();

            $('.chapter-inner table').each(function(){
              //console.log($(this).text().trim());
              $(this).replaceWith('<p style="text-align: center; font-size: 1.1em; color: rgba(228, 0, 0, 1); border-collapse: collapse; background-color: rgba(3, 2, 1, 1); border-color: rgba(228, 0, 0, 1); border-style: outset">'+$(this).text().trim()+'</p>');
            });
          }

          //chapter contents set by RR: chapterId, fictionId
          if( $('.chapter-inner').length ) {
          //$('.chapter-inner').html(olv.chap);
          olv.chap = $('.chapter-inner').html();
          olv.restoreChapter = {
            'html': $('.chapter-inner').html(),
            'fn': function(){
              $('.chapter-inner').html( olv.restoreChapter['html'] );

              if( $('.chapter-inner td').length == 1 && $('.chapter-inner td p').length == $('.chapter-inner p').length )
                $('.chapter-inner').html( $('.chapter-inner td').html() );

              if( $('.chapter-inner div td').length > 0 )
                $('.chapter-inner div td').each(function(){
                  //if( $(this).find('p').length == 0 )
                    $(this).parents('.chapter-inner div').replaceWith('<p style="color: rgba(241, 196, 15, 1); border-collapse: collapse; width: 100%; background-color: rgba(1, 0, 0, 1);">'+$(this).html()+'</p>');
                });

              olv.site.content = '.chapter-inner';
              olv.content = $(olv.site.content).children();
              olv.setPara();
              olv.paragraph = 0;

              $('.chapter-inner span[style*=georgia]').css({'font-family': 'Open Sans,open-sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif'});
            }
          };

            if(false)
          olv.fn.end.push( function(){ olv.restoreChapter.fn(); });
          }

          if( $('.chapter-inner p:is(:hidden)').length > 0 )
            $('.chapter-inner p:is(:hidden)').remove();

          if( $('.chapter-inner p span').length > 8)
          $('.chapter-inner p').each(function(){
            $(this).html( $(this).text() );
          });

          if( ($('.chapter-inner').text().length - $('.chapter-inner p').text().length) > 500 && $('.chapter-inner').text().indexOf("\n", 300) > 500 ) {
            //console.log(  );
            $('.chapter-inner br').replaceWith("\n");
            var html = $('.chapter-inner').html().split('>');
            var rem = html.pop().split("\n");
            $('.chapter-inner').html( html.join('>') + '<p>' + rem.join('</p><p>') + '</p>' );
          }
          //olv = ''

          if( typeof olv.remList == 'undefined' )
olv.remList = [
  'This novel\'s true home is a different platform. Support the author by finding it there.',
  'This content has been unlawfully taken from Royal Road; report any instances of this story if found elsewhere.',
  'This story has been taken without authorization. Report any sightings.',
  'This tale has been unlawfully obtained from Royal Road. If you discover it on Amazon, kindly report it.',
  'If you stumble upon this narrative on Amazon, it\'s taken without the author\'s consent. Report it.',
  'The tale has been taken without authorization; if you see it on Amazon, report the incident.',
  'If you spot this narrative on Amazon, know that it has been stolen. Report the violation.',
  'The story has been stolen; if detected on Amazon, report the violation.',
  'If you encounter this tale on Amazon, note that it\'s taken without the author\'s consent. Report it.',
  'Unlawfully taken from Royal Road, this story should be reported if seen on Amazon.',
  'Stolen from Royal Road, this story should be reported if encountered on Amazon.',
  'If you stumble upon this narrative on Amazon, be aware that it has been stolen from Royal Road. Please report it.',
  'If you encounter this narrative on Amazon, note that it\'s taken without the author\'s consent. Report it.',
  'The tale has been illicitly lifted; should you spot it on Amazon, report the violation.',
  'The author\'s tale has been misappropriated; report any instances of this story on Amazon.',
  'If you spot this story on Amazon, know that it has been stolen. Report the violation.',
  'Stolen content warning: this tale belongs on Royal Road. Report any occurrences elsewhere.',
  'This narrative has been purloined without the author\'s approval. Report any appearances on Amazon.',
  'Support the creativity of authors by visiting Royal Road for this novel and more.',
  'This text was taken from Royal Road. Help the author by reading the original version there.',
  'This story has been unlawfully obtained without the author\'s consent. Report any appearances on Amazon.',
  'The narrative has been illicitly obtained; should you discover it on Amazon, report the violation.',
  'The tale has been stolen; if detected on Amazon, report the violation.',
  'Stolen from Royal Road, this story should be reported if encountered on Amazon.',
  'If you encounter this tale on Amazon, note that it\'s taken without the author\'s consent. Report it.',
  'This book\'s true home is on another platform. Check it out there for the real experience.',
  'If you spot this tale on Amazon, know that it has been stolen. Report the violation.',
  'Unauthorized duplication: this tale has been taken without consent. Report sightings.',
  'If you stumble upon this narrative on Amazon, be aware that it has been stolen from Royal Road. Please report it.',
  'If you discover this tale on Amazon, be aware that it has been unlawfully taken from Royal Road. Please report it.',
  'If you find this story on Amazon, be aware that it has been stolen. Please report the infringement.',
  'If you encounter this narrative on Amazon, note that it\'s taken without the author\'s consent. Report it.',
  'Taken from Royal Road, this narrative should be reported if found on Amazon.',
  'Unauthorized use of content: if you find this story on Amazon, report the violation.',
  'Unlawfully taken from Royal Road, this story should be reported if seen on Amazon.',
  'You might be reading a pirated copy. Look for the official release to support the author.',
  'The genuine version of this novel can be found on another site. Support the author by reading it there.',
  'Love what you\'re reading? Discover and support the author on the platform they originally published on.',
  'Ensure your favorite authors get the support they deserve. Read this novel on Royal Road.',
  'If you come across this story on Amazon, it\'s taken without permission from the author. Report it.',
  'This book is hosted on another platform. Read the official version and support the author\'s work.',
  'This content has been unlawfully taken from Royal Road; report any instances of this story if found elsewhere.',
  'You could be reading stolen content. Head to Royal Road for the genuine story.',
  'The narrative has been taken without permission. Report any sightings.',
  'Support the author by searching for the original publication of this novel.',
  'This narrative has been unlawfully taken from Royal Road. If you see it on Amazon, please report it.',
  'Royal Road is the home of this novel. Visit there to read the original and support the author.',
  'This novel is published on a different platform. Support the original author by finding the official source.',
  'If you stumble upon this narrative on Amazon, be aware that it has been stolen from Royal Road. Please report it.',
  'The tale has been stolen; if detected on Amazon, report the violation.',
  'If you discover this tale on Amazon, be aware that it has been unlawfully taken from Royal Road. Please report it.',
  'This novel is published on a different platform. Support the original author by finding the official source.',
  'If you encounter this tale on Amazon, note that it\'s taken without the author\'s consent. Report it.',
  'This content has been misappropriated from Royal Road; report any instances of this story if found elsewhere.',
  'This tale has been unlawfully lifted from Royal Road. If you spot it on Amazon, please report it.',
  'Unauthorized content usage: if you discover this narrative on Amazon, report the violation.',
  'This story has been stolen from Royal Road. If you read it on Amazon, please report it',
  'Unauthorized tale usage: if you spot this story on Amazon, report the violation.',
  'Stolen from its original source, this story is not meant to be on Amazon; report any sightings.',
  'If you spot this tale on Amazon, know that it has been stolen. Report the violation.',
  'Help support creative writers by finding and reading their stories on the original site.',
  'The author\'s content has been appropriated; report any instances of this story on Amazon.',
  'Unauthorized reproduction: this story has been taken without approval. Report sightings.',
  'If you spot this story on Amazon, know that it has been stolen. Report the violation.',
  'This narrative has been unlawfully taken from Royal Road. If you see it on Amazon, please report it.',
  'Stolen content warning: this content belongs on Royal Road. Report any occurrences.',
  'Love what you\'re reading? Discover and support the author on the platform they originally published on.',
  'This book was originally published on Royal Road. Check it out there for the real experience.',
  'Unauthorized duplication: this narrative has been taken without consent. Report sightings.',
  'You could be reading stolen content. Head to Royal Road for the genuine story.',
  'If you spot this story on Amazon, know that it has been stolen. Report the violation.',
  'The narrative has been illicitly obtained; should you discover it on Amazon, report the violation.',
  'If you stumble upon this narrative on Amazon, be aware that it has been stolen from Royal Road. Please report it.',
  'The narrative has been taken without authorization; if you see it on Amazon, report the incident.',
  'This story originates from Royal Road. Ensure the author gets the support they deserve by reading it there.',
  'This book\'s true home is on another platform. Check it out there for the real experience.',
  'Unauthorized usage: this narrative is on Amazon without the author\'s consent. Report any sightings.',
  'A case of content theft: this narrative is not rightfully on Amazon; if you spot it, report the violation.',
  'The narrative has been stolen; if detected on Amazon, report the infringement.',
  'This tale has been unlawfully lifted without the author\'s consent. Report any appearances on Amazon.',
  'Reading on Amazon or a pirate site? This novel is from Royal Road. Support the author by reading it there.',
  'Love this novel? Read it on Royal Road to ensure the author gets credit.',
  'Unauthorized usage: this tale is on Amazon without the author\'s consent. Report any sightings.',
  'If you stumble upon this tale on Amazon, it\'s taken without the author\'s consent. Report it.',
  'If you discover this tale on Amazon, be aware that it has been stolen. Please report the violation.',
  'A case of literary theft: this tale is not rightfully on Amazon; if you see it, report the violation.',
  'Support creative writers by reading their stories on Royal Road, not stolen versions.',
  'Stolen from its rightful author, this tale is not meant to be on Amazon; report any sightings.',
  'If you come across this story on Amazon, be aware that it has been stolen from Royal Road. Please report it.',
  'The author\'s narrative has been misappropriated; report any instances of this story on Amazon.',
  'The story has been illicitly taken; should you find it on Amazon, report the infringement.',
  'You could be reading stolen content. Head to the original site for the genuine story.',
  'Unauthorized use: this story is on Amazon without permission from the author. Report any sightings.',
  'Stolen novel; please report.',
  'Stolen story; please report.',
  'Enjoying this book? Seek out the original to ensure the author gets credit.',
  'This tale has been unlawfully lifted from Royal Road; report any instances of this story if found elsewhere.',
  'If you discover this narrative on Amazon, be aware that it has been stolen. Please report the violation.',
  'Find this and other great novels on the author\'s preferred platform. Support original creators!',
  'Reading on this site? This novel is published elsewhere. Support the author by seeking out the original.',
  'Support the creativity of authors by visiting the original site for this novel and more.',
  'If you encounter this story on Amazon, note that it\'s taken without permission from the author. Report it.',
  'Did you know this text is from a different site? Read the official version to support the creator.',
  'This story originates from a different website. Ensure the author gets the support they deserve by reading it there.',
  'Did you know this story is from Royal Road? Read the official version for free and support the author.',
  'You might be reading a stolen copy. Visit Royal Road for the authentic version.',
  'Enjoying the story? Show your support by reading it on the official site.',
  'A case of theft: this story is not rightfully on Amazon; if you spot it, report the violation.',
  'Ensure your favorite authors get the support they deserve. Read this novel on the original website.',
  'This story is posted elsewhere by the author. Help them out by reading the authentic version.',
  'The story has been taken without consent; if you see it on Amazon, report the incident.',
  'Stolen content alert: this content belongs on Royal Road. Report any occurrences.',
  'This tale has been pilfered from Royal Road. If found on Amazon, kindly file a report.',
  'Love this story? Find the genuine version on the author\'s preferred platform and support their work!',
  'Stolen from its rightful place, this narrative is not meant to be on Amazon; report any sightings.'
];

          olv.rrRemList = function(){
            $('.chapter-inner p').each(function(){
              $(this).text( $(this).text().replace(/([a-z])\.([A-Z])/ig, "$1. $2") );
              $(this).text( $(this).text().replace(/([a-z])\?([A-Z])/ig, "$1? $2") );
              //$(this).text( $(this).text().replace(/([a-z])\.([a-z])/ig, "$1$2") );

              olv.remList.entries().forEach(([rkey, rval]) => {
                if( $(this).text().indexOf(rval) != -1 )
                  $(this).text( $(this).text().replace(rval, '') );
              });
            });

            console.log( $('p[para]:contains("Royal")'), $('p[para]:contains("Amazon")'), $('p[para]:contains("Novel")'), $('p[para]:contains("Stolen")') );
          };

          setTimeout(olv.rrRemList, 300);
          //olv.preLoadNext

          if( window.location.toString().indexOf("the-heavenly-martial-empress-returns-an-op-xianxia") > 0 ) {
            $('p:contains("["):contains("]")').remove();
          }

          //findDiv();
          //setTimeout( findDiv, 1000 );

          //$('.chapter-content').attr('id', 'chapter-content');
          //lament-of-the-fallen
          //if(false)
          if( window.location.toString().indexOf("lament-of-the-fallen") > 0 && $('.chapter-content').length > 0 ) {
            if( $('.chapter-content div').length == 1) {
              $('.chapter-content div').remove();
            }

            $('.chapter-inner p').each(function(){
              if( $(this).text().trim() == '' )
                $(this).remove();
              //else
                //console.log( $(this).text() );
                //$(this).replaceWith( $(this).text().trim() + "\n" );
            });

            if( $('.chapter-content [style*="font-weight"]').length > 0 )
              $('.chapter-content [style*="font-weight"]').remove();

            $('.chapter-content').children().each(function(){
              //if( ['P', 'BR'].indexOf($(this).get(0).nodeName) == -1 )
                //console.log( $(this) );
            });


            var t = $('.chapter-content').text();
            var len = t.split("\n").length;
            console.log('new lines', len, $('.chapter-content').text().trim().split("\n").length);

            if( len > 10 ) {
              t = t.split("\n").join('</p><p>');
              $('.chapter-content').html('<div id="chapter-content"><p>'+t+'</p><div>');
            }
            //else
              //olv = undefined;

          }
          /*
          if( $('.chapter-inner p:contains("Amazon")').length > 0 )
            $('.chapter-inner p:contains("Amazon")').remove();

          if( $('.chapter-inner p:contains("imgur")').length > 0 )
            $('.chapter-inner p:contains("imgur")').remove();

          if( $('.chapter-inner p:contains("Royal Road")').length > 0 )
            $('.chapter-inner p:contains("Royal Road")').remove();*/

      	}
      },
      top1novels: {
        title: '.truyen-title',
        //content: '#chapter-content',
        content: '#chr-content',
        button: '.glyphicon-menu-up',
        next: '#next_chap',
        disabled: '[disabled]',
        style: '#container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}',
        fn: function(){
        	if( false && $(olv.site.content + ' > div#content').length > 0 )
        	$(olv.site.content + ' > div:not(#content)').each(function(){
       			$(this).remove();
      		});
      	}
      },
      binnovel: {
        title: '.truyen-title',
        //content: '#chapter-content',
        content: '#chr-content',
        button: '.glyphicon-menu-up',
        next: '#next_chap',
        disabled: '[disabled]',
        style: '#container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;} .footer {background-color:black !important;}',
        fn: function(){
        	if( false && $(olv.site.content + ' > div#content').length > 0 )
        	$(olv.site.content + ' > div:not(#content)').each(function(){
       			//$(this).remove();
      		});

          if( window.location.href.toString().indexOf('i-the-female-protagonist-with-superpower-am-super-fierce') > 0 && $('#chr-content p').length < 8)
          $('#chr-content p').each(function(){
  					/*if( $(this).get(0).nodeName == 'P' ) {
    					$(this).attr('para', $(this).index() );
  					}*/
            if( $(this).text().length > 10 )
              if( $(this).text().match(/\./g).length < 6 ) {
                console.log($(this).text());
                $(this).remove();
              }
            if(false)
            if( $(this).text().length > 10 )
              if( $(this).text().match(/\./g).length > 20 ) {
                $(this).text( $(this).text().replaceAll(/”[A-Z]|” [A-Z]|”\. [A-Z]/g, function(k, v){ return '”\n'+k.replace('”', '');}) );
               	$(this).text( $(this).text().replaceAll(/[.!”]“|[.!”] “/g, function(k, v){ return k.replace('“', '')+'\n“';}) );

                var t = $(this).text().split("\n");

                $('#chr-content').html('<div id="chapter-content"><p>'+t.join('</p><p>')+'</p><div>');
                if( typeof olv.paragraph == "undefined" )
                olv.paragraph = 0;
                olv.content = $(olv.site.content).children();



                return;
              }
            //console.log($(this), $(this).text().match(/\./g).length);
					});
      	}
      },
      novelfull: {
        title: '.truyen-title',
        //content: '#chapter-content',
        content: '#chr-content',
        button: '.glyphicon-menu-up',
        next: '#next_chap',
        disabled: '[disabled]',
        style: '#container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}',
        fn: function(){
        	if( false && $(olv.site.content + ' > div#content').length > 0 )
        	$(olv.site.content + ' > div:not(#content)').each(function(){
       			$(this).remove();
      		});
      	}
      },
      lightnovelworld: {
        title: '.truyen-title',
        content: '#chapter-container',
        button: '#control-action-btn',
        next: '#nextchap',
        disabled: '[disabled]',
        style: '#container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}\
.olv button { background-color: var(--bg-color-secondary-2); border-radius: 6px; color: #fff; border: var(--bg-color-secondary-2); line-height: 1.5; background-image: linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,0)); cursor: pointer; }'
      },
      megacarp: {
        content: '.entry-content',
        button: '.glyphicon-menu-up',
        next: 'a:contains("Next"):last',
        disabled: '[disabled]',
      },
      ensigblog: {
        content: '.entry-content',
        button: '.glyphicon-menu-up',
        next: '.entry-content > h4:nth-child(173) > a:nth-child(3)',
        disabled: '[disabled]',
        style: 'body, body.custom-background, #container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}\
#actionbar {display:none;}\
.olv .btn { color:green; }',
      	fn: function(){
          //console.log('next: ', $('.entry-content > h4:nth-child(173) > a:nth-child(3)'));
        }
    	},
      thecenttranslations: {
        content: '.entry-content div:eq(0)',
        button: '.glyphicon-menu-up',
        next: '.nav-next > a[rel="next"]',
        disabled: '[disabled]',
        style: '.site-header-main, #content, body, body.custom-background, #container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}\
#actionbar, .marketing-bar {display:none !important;}\
.olv .btn { color:green; }',
      	fn: function(){
          //console.log('next: ', $('.entry-content > h4:nth-child(173) > a:nth-child(3)'));
        }
    	},
      're-library': {
        content: '.entry-content',
        button: '.glyphicon-menu-up',
        next: '.nextPageLink a',
        disabled: '[disabled]',
        style: '.site-header-main, #content, body, body.custom-background, #container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}\
#actionbar, .marketing-bar {display:none !important;}',
      	fn: function(){
          //console.log('next: ', $('.entry-content > h4:nth-child(173) > a:nth-child(3)'));
          //console.log($(olv.site.content + ' > p[style*="font-size"]'));
          $(olv.site.content + ' > p[style*="font-size"]').remove();
          $(olv.site.content + ' > p[style*="text-align:right"]').remove();
          //$(olv.site.content + ' > p:contains("⇐ Previous")').remove();
          $(document).ready(function(){
            $(olv.site.content + ' > p:contains("⇐ Previous")').remove();
            $(olv.site.content + ' > h2:contains("References")').nextAll('p').remove();
          });
        },
        addition: 100
    	},
      fanstranslations: {
        content: '.reading-content .text-left',
        button: '.glyphicon-menu-up',
        next: '.nav-next:eq(0)',
        disabled: '[disabled]',
        style: '.site-header-main, #content, body, body.custom-background, #container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}\
#actionbar, .marketing-bar {display:none !important;}\
.olv .btn { color:green; }',
      	fn: function(){
          //console.log('next: ', $('.entry-content > h4:nth-child(173) > a:nth-child(3)'));
        }
    	},
    	moonbunnycafe: {
        content: '.entry-content',
        button: '.glyphicon-menu-up',
        next: '.entry-content > p:nth-child(1) > a:nth-child(3)',
        disabled: '[disabled]',
        style: 'body.custom-background, #content, #main, #access ul li.current_page_item, #access ul li.current-menu-item, #access ul ul li, #nav-toggle, body, body.custom-background, #container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container, .navbar-breadcrumb, .navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row,\
#content, #main, #access ul li.current_page_item, #access ul li.current-menu-item, #access ul ul li, #nav-toggle, body, body.custom-background, #container, #list-chapter, .col-info-desc, footer.footer, .breadcrumb-container,.navbar-breadcrumb,.navbar-default, .col-truyen-side .list, .col-truyen-side .list > .row, .list > .row \
{background-color: #232323 !important; color: rgba(255, 255, 255, .6) !important;}\
#wrapper {background-color: #232323;}\
a, a:hover, a:focus, .text-info a {color: #666; color: #8D8D8D;}\
.list-side h3 a {color: #8D8D8D;}\
#actionbar, .widget-area {display:none !important;}\
.olv .btn { color:green; }',
      	fn: function(){
          //console.log('next: ', $('.entry-content > h4:nth-child(173) > a:nth-child(3)'));

        	$('.entry-content p a').parent().attr('paragraph', 'links');

        	$(document).ready(function(){
      			$('.entry-content p[paragraph=links]').remove();
        		$('.entry-content p:contains("Author’s note:")').remove();

        		$('.entry-content p:contains("App’s Notes:")').addClass('end');

            //$('.entry-content > p.end ~').remove();
            //$('.entry-content > p.end').remove();
        		//console.log('olv.nexthref', olv.nexthref);
      		});

        }
    	},
      readwn: {
       	content: '.chapter-content',
        button: '.chnav.next',
        next: '.chnav.next',
        disabled: '.isDisabled',
        background: '#252729'
      },
      readlightnovel: {
       	content: '#chapter-entity',
        button: '.next:last-child',
        next: '.next:last-child',
        br: 'other'
      },
      novelhall: {
       	content: '#htmlContent',
        next: '.nav-single a[rel="next"]'
      },
      mylovenovel: {
        content: '#content',
        next: '.page a:last-child',
        addition: 65
      },
      ornovel: {
        content: '.chapter-detail div',
        next: '.chapter-header a:last-child'
      },
      scribblehub: {
       	content: '.chp_raw div',
        next: '.btn-next',
        disabled: '.disabled',
        button: '.btn-next',
        br: 'none',
        background: 'rgb(51, 51, 51)',
        load: function(){
          if( $('.chp_raw .wi_authornotes').length > 0 )
            $('.chp_raw .wi_authornotes').remove();

          if( $('.chp_raw div').length == 0 && $('.chp_raw p').length > 0 ) {
            olv.site.content = '.chp_raw';
            $('.chp_raw').attr('id', 'chapter-content');
            olv.paragraph = 0;
            olv.content = $(olv.site.content).children();
            //olv.init_buttons();
          }
        },
        fn: function(){
          if( $('.chp_raw div').length == 0 && $('.chp_raw p').length > 0 ) {
            /*olv.site.content = '.chp_raw';
            $('.chp_raw').attr('id', 'chapter-content');
            olv.paragraph = 0;
            olv.content = $(olv.site.content).children();
            olv.init_buttons();*/
            //$('.chp_raw').html('<div>'+$('.chp_raw').html()+'</div>');
          }
return;
          if( $('.chp_raw div').length == 1 && $(olv.site.content + ' p').length == 0 ) {
            setTimeout(function(){
            //olv.reader.auto = 0;

            $('.chp_raw div').attr('id', 'chapter-content');
            olv.paragraph = 0;
            olv.content = $(olv.site.content).children();
            olv.init_buttons();
            olv.populateVoiceList();
            olv.reader.load();
            var count = 0;
            olv.content.each(function(){
              $(this).attr('para', count );
              count = count + 1;
            });
            $('.olv.parrot').show();
            //olv.fn.resetPara();
            //olv.fn.p.options();
            });
          }

          if( $(olv.site.content + ' p').length > 0 ) {
            olv.nexthref = $(olv.site.next).eq(0).attr('href');
            olv.reader.cacheNext();
            olv.preLoadNext = 1;
          }
        }
      },
      novelonomicon: {
       	content: '.entry-content',
        next: '.entry-content a.su-button:last-child'
      },
        wordrain69: {
       	content: '.reading-content',
        next: '.next_page:eq(0)',
        style: '.c-blog-post .entry-content .entry-content_wrap .read-container {text-align:left !important;color: rgba(255, 255, 255, .6) !important;}'
      },
      freewebnovel: {
       	content: '.txt',
        next: 'a[title="Read Next chapter"]:eq(0)',
        background: '#FFF',
        style:'.olv input[type="checkbox"]{height: 12px;width: 12px;appearance: auto;};'
      },
      tdrboss: {
      	content: '#chapter-entity',
        next: '.reader-page .next',
        background: '#FFF',
				addition: 65,
        style:'.olv input[type="checkbox"]{height: 12px;width: 12px;appearance: auto;} html * {color:rgba(255,255,255,.6) !important; background:#232323 !important; };'
      },
      freenovelupdates: {
      	content: '.content',
        next: '.next-btn',
        background: '#FFF',
				addition: 65,
        style:'.olv.options .btn {display:inline-block;} .olv.parrot .btn {display:initial;margin-top:0;} .olv input[type="checkbox"]{height: 12px;width: 12px;appearance: auto;} html * {color:rgba(255,255,255,.6) !important; background:#232323 !important; };'
      },
      fastnovels: {
      	content: '#chapter-body',
        next: '#nav_chap_top > a:nth-child(3)',
				addition: 65,
        style:'.olv.options .btn {display:inline-block;} .olv.parrot .btn {display:initial;margin-top:0;} .olv input[type="checkbox"]{height: 12px;width: 12px;appearance: auto;} html * {color:rgba(255,255,255,.6) !important; background:#232323 !important; };'
      }

    },
    uncensor: function(obj, list){
    	//console.log('meow', olv);
      //var list = olv.word.list;

      Object.keys(list).forEach(key => {
            //console.log(key, obj[key]);
        if( typeof list[key].test == 'undefined' ) {
          if( list[key].f.test(obj.text()) ) {
            obj.html( obj.html().replace(list[key].f, function(e) {
              //var c = e.indexOf('*');
              //return c > 0 ? e.replace('*', key[c]) : key;
              //return '<span class="mute">'+key+'</span><span style="display:none;">'+list[key].p+'</span>';
              return key;
            }) );
          }
        }
        else
      	if( list[key].test(obj.text()) ) {
          //var c = obj.text().indexOf('*');
          //console.log(obj.text());
          //replace * with letter to preserve uppercase
          //obj.text( c > 0 ? obj.text().replace('*', key[c-1]) : obj.text().replace(list[key], key) );
          //obj.text( obj.text().replace(list[key], key) );
          obj.text( obj.text().replace(list[key], function(e) {
            var c = e.indexOf('*');
            //console.log(e, key, c);

            return c > 0 ? e.replace('*', key[c]) : key;
          }) );
        }
      });
    },
    stack: {
      chapter_count: localStorage.getItem('chapter_count') + 0,
     	chapters: function() {

      }
    },
    pages: {
      left: -1
    },
    status: localStorage.getItem('olv.status') || '',
    delete_status:localStorage.getItem('olv.delete_status') || 0,
    hide_removed:localStorage.getItem('olv.hide_removed') || 0,
    combine_paragraphs:localStorage.getItem('olv.combine_paragraphs') || 0,
    paragraph_length:localStorage.getItem('olv.paragraph_length') || 7,
    broken_sentences:localStorage.getItem('olv.broken_sentences') || 0,
    reader: {
      auto:localStorage.getItem('olv.reader.auto') || 0,
      auto_next:localStorage.getItem('olv.reader.auto_next') || 1,
      auto_on_play:localStorage.getItem('olv.reader.auto_on_play') || 0,
      volume:localStorage.getItem('olv.reader.volume') || 100,
      rate:localStorage.getItem('olv.reader.rate') || 10,
      pitch:localStorage.getItem('olv.reader.pitch') || 1,
      voice:localStorage.getItem('olv.reader.voice') || ( window.navigator.userAgent.indexOf('Android') > -1 ? 0 : 4),
      scroll:localStorage.getItem('olv.reader.scroll') || 0,
      socket:localStorage.getItem('olv.reader.socket') || '',
      archive:localStorage.getItem('olv.reader.archive') || 0,
      stopped:0,
      stop:function(){
        olv.reader.stopped = 1
        if( speechSynthesis.speaking )
          speechSynthesis.cancel();

        $('.olv .play').show();
        $('.olv .pause').hide();

        $(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'underline');
      },
      scroller: function(){
        if( typeof olv.site.addition == 'undefined' )
          olv.site.addition = 0;
        //console.log('olv.reader.scroll', olv.reader.scroll, ($(window).scrollTop() + $(window).height()) < ( $(olv.site.content + ' p[para='+olv.paragraph+']').offset().top + $(olv.site.content + ' p[para='+olv.paragraph+']').height() ), ( olv.reader.scroll || ($(window).scrollTop() + $(window).height()) < ( $(olv.site.content + ' p[para='+olv.paragraph+']').offset().top + $(olv.site.content + ' p[para='+olv.paragraph+']').height() ) ));
        //console.log($(window).scrollTop() + $(window).height(), $(olv.site.content + ' p[para='+olv.paragraph+']').offset().top);
        //var para = $('');

        var row = $(olv.site.content + ' p[para='+olv.paragraph+']');
      	if( olv.reader.scroll != 0 || row.length && ($(window).scrollTop() + $(window).height()) < ( row.offset().top + row.height() + $('.olv.parrot').height() ) ) {
        	var t = row.offset().top - olv.site.addition;

          var ct = true;    //conditional toggle
          var pm = 20;      //range, plus or minus
          var rw = 473;     //width range
          var rh = 766;     //height range

          //if document isn't focused then if width and height are within range, continue auto scroller.
          if(false)
          if( !document.hasFocus() )
            if( window.innerWidth < (rw+pm) && window.innerWidth > (rw-pm) )
              if( window.innerHeight < (rh+pm) && window.innerHeight > (rh-pm) )
                ct = false;

          //if( document.hasFocus() && t > 0 ) {
          //if( t > 0 ) {
          if( ct && t > 0 ) {
          	$([document.documentElement, document.body]).animate({
        			scrollTop: t
    				}, 500);

            if( olv.is('site.scroller') )
              olv.site.scroller();
          }
        }
      },
      phonetic: function(text){
        if( typeof text == 'undefined' )
          return text;

        text.replace(/\*BOOM/g, 'BOOM');
      	text.replace(/\*BANG/g, 'BANG');
        text.replace(/\*DONG/g, 'DONG');
        text.replace(/\*PUCHI/g, 'PUCHI');
        text.replace(/\*CRACK/g, 'CRACK');
        text.replace(/\*BLERG/g, 'BLERG');

        text.replace(/\*Yawn/g, 'Yawn');
        text.replace(/\*sigh/ig, 'sigh');

        text.replace(/^\*/, '');

        return text;
      },
      load: function(){
        if( $('#novel-detail-tabs,.desc-text').length == 2 && typeof novel == 'undefined' && $('div[id="rating"]').length > 0 ) {
          var novel = {id: $('div[id="rating"]').attr('data-novel-id')};
          olv.novel = GM_getValue('novel.'+novel.id);
        }

        if( typeof olv.parseConst == 'undefined' ) {
          //olv.parseConst('const chapter =');
          olv.parseConst = function(){
            //console.log(arguments)
            if(arguments.length == 1) {
              var obj = arguments[0];
              var script = $('script:contains("'+obj+'")').text();
              var crow = script.substr(script.indexOf(obj)+(obj+' {').length);
            }
            else {
              //assume arguments[1] == olv.nextChapter
              var obj = arguments[0];
              var crow = arguments[1].substr(arguments[1].indexOf(obj) + (obj+' {').length, 1000);
            }

            crow = crow.substr(0, crow.indexOf('}')).trim().split('\n');
            var retObj = {};

            crow.entries().forEach(([key, val]) => {
              val = val.trim();
              crow[key] = val.trim();

              var k = val.substr(0, val.indexOf(':'));
              var v = val.substr(val.indexOf('\'')+1);
              v = v.substr(0, v.indexOf('\''));
              //console.log(k, v);
              retObj[k] = v;
            });

            if( typeof retObj[''] != 'undefined' )
              delete retObj[''];

            return retObj;
          };
          //olv.parseConst('const chapter =', olv.nextChapter);
        }

        setTimeout(function(){
          //if( typeof novel != 'undefined' )
          //olv.novel = GM_getValue('novel.'+novel.id);
          //console.log('wtf', novel, olv.novel, $('script:contains("const novel =")') );
          if( $('a.header-logo').length > 0 && $('a.header-logo').text().trim() == "Novel Bin" && $('script:contains("const novel =")').length > 0 && typeof olv.novel == 'undefined' ) {
            olv.preLoadNext = 1;
            var novel = olv.parseConst('const novel =');
            olv.novel = GM_getValue('novel.'+novel.id);

            if( !olv.is('novel.id') ) {
              olv.novel = novel;
              olv.novel.chapter = olv.parseConst('const chapter =');

              GM_setValue('novel.'+novel.id, olv.novel);
            }
            else {
              //console.log('1234');
              if( olv.is('novel.bg') )
                if( olv.novel.bg.url != window.location.toString() )
                  olv.novel.bg = olv.novel.chapter;
                else {
                  //olv.novel.bg = olv.novel.chapter;
                  //GM_setValue('novel.'+novel.id, olv.novel);

                  //olv.reloaded &&
                  if( JSON.stringify(olv.novel.chapter) != JSON.stringify(olv.novel.bg) ) {
                    olv.novel.bg = olv.novel.chapter;
                    GM_setValue('novel.'+novel.id, olv.novel);

                    if(olv.reloaded)
                    window.location = olv.novel.chapter.url;
                  }
                }

              olv.chapter = olv.parseConst('const chapter =');

              if( JSON.stringify(olv.novel.chapter) != JSON.stringify(olv.chapter) ) {
                olv.novel.chapter = olv.chapter;

                GM_setValue('novel.'+novel.id, olv.novel);
              }
            }
            //console.log(olv.novel);
            //console.log( olv.parseConst('const chapter =') );

            //console.log(olv.chapter);
            /*
            if( JSON.stringify(olv.novel.bg) != JSON.stringify(chapter) )
              olv.novel.bg = olv.novel.chapter;


            //*/
          }
        }, 300);

        //if( typeof olv.wtf == 'undefined' )
          //olv.wtf = $('html').html();

        if( typeof novel != 'undefined' )
          olv.novel = GM_getValue('novel.'+novel.id);
//console.log('wtf', novel, olv.novel, $('script:contains("const novel =")') );
        //if( typeof olv.novel == 'undefined' )
          //olv.novel = {};

        //if( typeof olv.novel.bg != 'undefined' )


        if( olv.is('novel.latest.url') && olv.novel.latest.url == document.referrer )
            olv.reader.auto = 0;

      	$('.olv.options .scroll input[type="radio"][value="' + olv.reader.scroll + '"]').prop('checked', true);

        if( $(olv.site.content).length > 0 ) {
        if( $(olv.site.chapter).length ) {
          var title = $(olv.site.chapter).text().trim();
          var header = '';
        }

        if( $(olv.site.content + ' :header:contains("Notes")').length > 0 ) {
          $(olv.site.content + ' :header:contains("Notes")').remove();
        }

        //if(false)
        olv.remAuthorNote = function(){
          if( $(olv.site.content + ' p:contains("Author"):contains("ote")').length > 1 ) {
            var list = $(olv.site.content + ' p:contains("Author"):contains("ote")');

            if( ($(list[1]).index() - $(list[0]).index()) < 20 && / end/.test($(list[1]).text()) ) {
              var row = $(list[0]);
              var nrow = $(row).next();
              for( var i = 0; i < 20; i++ ) {
                nrow = $(row).next();
                $(row).remove();
                console.log($(row).text());
                row = nrow;
                if( $(row).text() == $(list[1]).text() )
                  break;
              }

              $(list[1]).remove();
            }
          }
        };

        for( var i = 0; i < 10; i++ )
          if( $(olv.site.content + ' p:contains("Author"):contains("ote")').length > 1 )
            olv.remAuthorNote();

        //chr-title
        if( $('#chapter .chr-title span').length ) {
          var title = $('#chapter .chr-title span').text().trim();
          var header = $(olv.site.content + ' :header:eq(0)').text().trim();
        }

        if( $('meta[property="og:site_name"][content="Royal Road"]').length == 1 ) {
          var title = $('h1.font-white').text().trim();
          var header = ''; //$(olv.site.content + ' :header:eq(0)').text().trim();
        } //▪️ THE BEST LABORERS

        if( typeof olv.site.chapter_title != 'undefined' ) {
          var title = olv.site.chapter_title;
          var header = '';
        }

        if( $(olv.site.content + ' :contains("Chapter")').length == 1 && $(olv.site.content + ' :contains("Chapter")').text().indexOf('             ') > -1 )
          $(olv.site.content + ' :contains("Chapter")').text( $(olv.site.content + ' :contains("Chapter")').text().replace(/Chapter.*\s\s\s\s\s\s/, '') );

        if( typeof title != 'undefined' ) {
          if( header.length == 0 && $(olv.site.content + ' p:contains("Chapter")').length == 1 )
            header = $(olv.site.content + ' p:contains("Chapter")').text().trim();

          if( header.indexOf('             ') > -1 )
            header.replace(/Chapter.*\s\s\s\s\s\s/, '');

          if(false)
          if( header == '' && /chapter [0-9]*$/i.test(title.trim()) ) {
            var num = title.replace(/chapter /i, '');

            if( $(olv.site.content + ' p:contains("' + num + '")').length ) {
              header = 'Chapter ' + $(olv.site.content + ' p:contains("' + num + '")').eq(0).text().trim();
              $(olv.site.content + ' p:contains("' + num + '")').eq(0).replaceWith('<h3>'+ $(olv.site.content + ' p:contains("' + num + '")').eq(0).text()+'</h3>');
            }
          }

          if( header.indexOf('latest Chapter Releases') > -1)
            header = ''

          if( header.replace(/[^a-zA-Z0-9]/ig, '').length > title.replace(/[^a-zA-Z0-9]/ig, '').length )
            title = header;

          if( RegExp("([0-9]+) - ([0-9]+)").test(title) ) {
            var reg = title.match(RegExp("([0-9]+) - ([0-9]+)"));
            //console.log(reg[1] != reg[2], reg)
            if( reg[1] == reg[2] )
              title = title.replace(/([0-9]+) - /ig, '');
          }


          //bug: Chapter 1222: Final Chapter (1)
          //doesn't handle chapter after special character properly
          title = title.replace(/chapter/ig, 'C');
          if( title.indexOf(' C ') > 0 && /volume|book/i.test(title) == 0 )
            title = title.replace(/.* C /ig, 'C ');

          if( /volume|book/i.test(title) )
            title = title.replace(/volume|book/i, 'V');

          if( /^C [0-9]+$/.test(title) && typeof olv.novel != 'undefined' && typeof olv.novel.latest != 'undefined' && /chapter ([0-9]+).*/i.test(olv.novel.latest.name) ) {
            //console.log( $(olv.site.content + ' p').text() )
            title += olv.novel.latest.name.replace(/chapter ([0-9]+).*/i, " / $1");
          }

          if(false)
          if( $(olv.site.content + ' p:contains('+title.substr(2).replace(/\(.*\)/ig, '')+')').length == 1 )
            $(olv.site.content + ' p:contains('+title.substr(2).replace(/\(.*\)/ig, '')+')').remove();

          if(false)
          if( $(olv.site.content + ' :header:contains('+title.substr(2).replace(/\(.*\)/ig, '')+')').length == 1 )
            $(olv.site.content + ' :header:contains('+title.substr(2).replace(/\(.*\)/ig, '')+')').remove();

          //check if paragraph tag with chapter title exists and remove it
          if( false && $(olv.site.content + ' p:contains('+title.replace(/C [0-9]* /, '')+')').length > 0) {
            $(olv.site.content + ' p:contains('+title.replace(/C [0-9]* /, '')+')').each(function(){
              if( Number($(this).css('line-height').replace('px', '')) > ($(this).height() - 1) )
                $(this).remove();
            });
          }

          if(false)
          if( /^C [0-9]+$/.test(title) && $(olv.site.content + ' p:contains("【"):contains("】")').length > 0 ) {
            title += ': ' + $(olv.site.content + ' p:contains("【"):contains("】"):last').text().replace(/【|】/g, '');
            $(olv.site.content + ' p:contains("【"):contains("】"):last').remove();
          }

          if( typeof olv.navbarChapter != 'undefined')
          if( title.length + 6 > olv.navbarChapter.text().trim().length )
            olv.navbarChapter.text( title );
          //$('.olv-chapter-title').hide();

          if( typeof olv.navbarChapter != 'undefined')
          setTimeout(function(){
          if( Math.floor(olv.navbarChapter.parent().offset().left) + olv.navbarChapter.parent().width() > $(document).width() - 20 ) {
            olv.navbarChapter.parent().width(Math.floor($(document).width() - olv.navbarChapter.parent().offset().left)-40);
            olv.navbarChapter.parent().css('overflow', 'hidden');
            olv.navbarChapter.parent().css('display', 'inline-flex');
          }

          //<span class="glyphicon glyphicon-chevron-left"></span>
if( $('#prev_chap').length > 0 )
  olv.navbarChapter.parent().parent().prepend('<span style="position: absolute; right: 8px;">\
<a href="'+$('#prev_chap').attr('href')+'"><span class="glyphicon glyphicon-chevron-left"></span></a>\
<a href="'+$('#next_chap').attr('href')+'"><span class="glyphicon glyphicon-chevron-right"></span></a>\
</span>');

          }, 410);

          title = $('<button><span class="current">' + title + '</span><span style="display:none;" class="latest">' + (typeof olv.novel != 'undefined' && typeof olv.novel.latest != 'undefined' ? olv.novel.latest.name.replace(/chapter/ig, 'C') : '') + '</span></button>');
          title.addClass('btn btn-success olv-chapter-title');
          title.css({'position': 'fixed', 'left':'10px', 'padding':'2px 4px', 'max-width':'50%', 'overflow':'hidden'});
          //if( title.text().length < $(olv.site.content + ' :header:eq(0)').text().length )
            //title.text( $(olv.site.content + ' :header:eq(0)').text().replace(/chapter.*chapter/ig, 'C').replace(/chapter/ig, 'C') );
          title.appendTo('.olv.parrot');
        }

        //replaces errored header tags
        if( $(olv.site.content + ' :header:not(:contains("hapter"))').length )
          $(olv.site.content + ' :header:not(:contains("hapter"))').each(function(){
            $(this).replaceWith('<p>'+$(this).text()+'</p>');
          });

        $(document).on('click', 'button.olv-chapter-title', function(){
          if( $('.olv-chapter-title .latest').text() != '' )
            $(this).find('span').toggle();
        });

        //save paragraph for later
        if( /paragraph=/.test(window.location.hash.toString()) ) { //28
          olv.paragraph = Number(window.location.hash.toString().replace(/.*paragraph=/, '')-1);
        }

        if( $(olv.site.content + ' p:contains("Chapter"):contains("["):contains("]")').length > 0 ) {
          $(olv.site.content + ' p:contains("Chapter"):contains("["):contains("]")').remove();
        }
      }

        $(olv.site.content + ' > p:contains("/")').each(function(){
          $(this).text( $(this).text().replace(/\//g, function(e, i){ if( i == 0 || i%2 )return '[';else return ']'}) );
        });

        $(olv.site.content + ' > p:contains("Translator"):contains("Translations")').each(function(){
          $(this).remove();
        });

        $(olv.site.content + ' > p:contains("EndlessFantasy")').each(function(){
          $(this).remove();
        });

        //add iframe support?

        //console.log(olv.site.content, $(olv.site.content), $(olv.site.content).length);
        //if( $(olv.site.content).length == 1 ) {
        //if( $(olv.site.content).length == 1 && olv.content.length > 0 ) {
        //console.log( 'wtf', $(olv.site.content).length, olv.content.length );
        if( typeof olv.site.content == 'undefined' || typeof olv.content == 'undefined' || typeof olv.content != 'undefined' && olv.content.length == 0) {
         	//$('.olv .select_pos,.olv.parrot .auto,.olv .play,.olv .next').hide();
          //$('.olv .init').show();

          $('.olv').hide();

          $(document).on('mouseup', function(e){
            //console.log(window.getSelection().type, window.getSelection())
          	if( window.getSelection().type == "Range" || typeof olv.site.load != 'undefined' ) {
             	 $('.olv.parrot').show();
            }
            else {
              if( $('.olv textarea').height() < 1 )
                $('.olv').hide();
            }
          });
        } else {
          //handle events when novel is selected
          $(window).on('blur', function(e){
            //console.log('window blur!')
          });

          if( typeof olv.nexthref != 'undefined' ) {
            olv.reader.cacheNext();
          }
        }
      },
      cacheChapter:function(){
        olv.nexthref = olv.novel.chapter.url;
        olv.reader.cacheNext();
      },
      cacheNext: function(){
        $.get( olv.nexthref, function( data ) {
          olv.nextChapter = data;
        }).fail(function(){
          setTimeout(function(){
            olv.reader.cacheNext();
          }, 10000);
        });
      },
      sites: function(){
        var href = window.location.href.split('/');

        if( $('a.header-logo').text().trim() == "Novel Bin" ) {
          olv.site = olv.sites['novelbin'];
          olv.site.content_id = '#chr-content';
          olv.content = $(olv.site.content).children();

          var remList = [
            'Patreon',
            'removing ads',
            'Tseirp',
            'Translator:',
            'translations'
          ];

          remList.entries().forEach(([key, val]) => {
            if( $(olv.site.content).find('#chr-content p:contains("'+val+'")').length > 0 ) {
              $(olv.site.content).find('#chr-content p:contains("'+val+'")').remove();
            }

            var list = $(olv.site.content).find(':contains("'+val+'")');
            if( list.length > 0 ) {
              console.log(list);

              list.each(function(){
                if( $(this).get(0).nodeName == 'P' )
                  $(this).remove();
              });
            }
          });

          olv.preLoadNext = 1;
        }

        if ( href.toString().indexOf('novelcenter') > 0 ) {
          olv.site = olv.sites['novelbin'];
          olv.site.content_id = '#chr-content';
          olv.content = $(olv.site.content).children();
        }

        if( typeof olv.content == "undefined" )
       	Object.keys(olv.sites).forEach(site => {
        	if( href.toString().indexOf(site) > 0 ){
            if( typeof olv.content == "undefined" ) {
              olv.site = olv.sites[site];
              olv.site[href[3]] = href[4];
          		olv.content = $(olv.site.content).children();
              olv.site['site'] = site;
              olv.site.content_id = olv.site.content;
        		}

            return;
          }
        });

        if( typeof olv.site == 'undefined' ) {
          //var site = window.location.hostname.toString().replace(/\..*/, '');
          /*olv.sites[site] = localStorage.getItem('olv.sites.' + site);

          if( typeof olv.sites[site] == 'string' ) {
           	 olv.sites[site] = JSON.parse(olv.sites[site]);
          }

          olv.site = olv.sites[site] == null ? {} : olv.sites[site];
          olv.site.site = site;*/

          olv.site = {};

         	//check if chapter entry
          var chap = $('div :header:contains("Chapter"):last');

          //if chap not header, chap is probably a paragraph tag.
          if( false && !chap.length ) {
            chap = $('div > p:contains("Chapter"):not(p[class])');

            if( chap.length == 1 && chap.parent().find('p:not(p[class]').length > 10 ) {
              if( chap.parent().find('a:contains("Next"):first').length ) {
               	 olv.nexthref = chap.parent().find('a:contains("Next"):first').attr('href');
            		 //olv.site.next = '#chapter-content > p a:contains("Next"):first';
              }
            }
            else {
              //disable if more then 1 chapter tag for now and siblings less then 11
             	chap = {};
            }
          }

          if( false && chap.length ) {
           	 //$('.olv.parrot').show();

            if( typeof chap.parent().attr('id') == 'undefined' ) {
             	chap.parent().attr('id', 'chapter-content');
            }

            olv.site.content = '#' + chap.parent().attr('id');

            if( chap.parent().find('p > select').length ) {
             	 chap.parent().find('p > select').remove();
            }

            chap.prevAll('p').remove();
            olv.content = chap.parent().children();

            if( typeof olv.nexthref != 'undefined' && olv.nexthref != '' )
            	olv.nexthref = $('a[rel="next"]:last').attr('href');

            if( typeof olv.site.next != 'undefined' && olv.site.next != '' )
            	olv.site.next = 'a[rel="next"]:last';
          }
        }

        //console.log(chap.length, olv.site);

        if ( olv.site.next != 'undefined' && olv.site.next != '' && $(olv.site.next).length == 1) {
        	//console.log('next css path', $(olv.site.next));
          olv.nexthref = $(olv.site.next).attr('href');
          console.log('olv.nexthref', olv.nexthref);
        }
      },
      renderChapter: function(){
        //var wrapper = $(olv.site.content_id).parents('[id]').last();
          //$(olv.nextChapter).forEach(([key, val]) => {console.log('olv.nextChapter', key);});
          $(olv.nextChapter).each(function(){ if($(this).html().indexOf('const')) console.log($(this).index(), $(this)); });

        var page = ''; $(olv.nextChapter).each(function(){ console.log(this.nodeName, $(this).index(), $(this)); });

        olv.nodex = []; $(olv.nextChapter).each(function(){ if( olv.nodex.indexOf(this.nodeName) == -1 ) olv.nodex.push(this.nodeName) });

        $(olv.nextChapter).each(function(){ if( this.nodeName == '#text' && $(this).textContent.match(/[a-zA-Z]*/g).length > -1 ) console.log(this, $(this).index(), $(this)); });

//'adsfoihas'.match(/[a-zA-Z]*/g).length
          //var wrapper = $(olv.nextChapter).find(olv.site.content_id).parents().last();
          //var wrapper = $(olv.nextChapter).find(olv.site.content_id);
          var parrot = $('.olv.parrot').detach();
          //var chaptitle = $('.olv-chapter-title').detach();
          var opts = $('.paragraph.options').detach();

          $('#' + wrapper.attr('id')).html( wrapper.html() );
          //$(olv.site.content_id).html( $(olv.nextChapter).find(olv.site.content_id).html() );

          //$('title').text($(olv.nextChapter).get(1).innerText);

         // var navobj = $(olv.site.next).parents('[id]').eq(0);
          //navobj.html( $(olv.nextChapter).find('#'+navobj.attr('id')).html() );

          olv.paragraph = 0;

          olv.reader.sites();

          if( typeof olv.site != 'undefined' && typeof olv.site.content != 'undefined' ) {
            if( typeof olv.site.fn != 'undefined' ) {
              olv.site.fn();
            }

            if( $(olv.site.content + ' > div').length > 0 ) {
               $(olv.site.content + ' > div > p').unwrap();
            }

            $(olv.site.content).children().wrapAll('<div id="chapter-content"></div>');
            olv.site.content = '#chapter-content';
          }

          olv.content = $(olv.site.content).children();

          if( $('.olv.options').css('background-color') == 'rgba(0, 0, 0, 0)' ) {
            $('.olv.options').css('background-color', $('body').css('background-color'));
            $('.olv.options').css('color', $('body').css('color'));
          }

          olv.init_buttons();
          olv.reader.load();

          //$(olv.site.content_id).parent().append(parrot);

          if( typeof olv.content != 'undefined' && $(olv.site.content + ' > p').length > 0 ) {
            if( olv.broken_sentences == 1 ) {
            if( $(olv.site.content + ' > p .mute').length > 0 )
              $(olv.site.content + ' > p .mute').remove();
            olv.fix_broken();
            }

            //olv.setPara();
            olv.fn.resetPara();
          }
      },
      next: function(){
        if( typeof olv.preLoadNext == 'undefined' ) {
          olv.preLoadNext = 0;
        }

        //if( window.location.hostname == 'www.royalroad.com' )
          //olv.preLoadNext = 1;

        if( olv.preLoadNext == 1 && typeof olv.nextChapter != 'undefined' && $(olv.nextChapter).find(olv.site.content_id).length > 0 ) {
          //if( typeof olv.novel != 'undefined' )
          //GM_setValue('novel.'+novel.id, olv.novel);
          //(function(){return arguments;})('olv.novel')
          /*
          olv.is = function(){
          //arguments[0].split('.')
          var is = olv;
          Object.entries(arguments[0].split('.')).forEach(([key, val]) => {
            if( is != false && typeof is[val] != 'undefined')
              is = is[val];
            else
              is = false;
          });
          return is != false;
          };

          olv.is('novel.chapter.id2');
          Object.entries('novel.chapter'.split('.')).forEach(([key, val]) => {
            return key + ' ' + val;
          });
          */

          olv.midParagraph = $(olv.site.content).children().eq(Math.floor($(olv.site.content).children().length-3)).text();

          //var wrapper = $(olv.site.content_id).parents('[id]').last();
          var wrapper = $(olv.nextChapter).find(olv.site.content_id).parents().last();
          //var wrapper = $(olv.nextChapter).find(olv.site.content_id);
          var parrot = $('.olv.parrot').detach();
          //var chaptitle = $('.olv-chapter-title').detach();
          var opts = $('.paragraph.options').detach();

          //$(wrapper).entries().forEach(([key, val]) => { console.log(key, val); });
          //$(wrapper.html()).forEach(([key, val]) => { console.log(key, val); });
          //$(wrapper.html())
          //wrapper.each(function(){ console.log($(this).children()); });
          //set olv.chapter to pagewide chapter const
          if(false)
          if( typeof chapter != 'undefined' ) {
            var crow = olv.nextChapter.substr(olv.nextChapter.indexOf('const chapter =') + 'const chapter = {'.length, 1000);
            crow = crow.substr(0, crow.indexOf('}')).trim().split('\n');
            olv.chapter = {};

            crow.entries().forEach(([key, val]) => {
              val = val.trim();
              crow[key] = val.trim();

              var k = val.substr(0, val.indexOf(':'));
              var v = val.substr(val.indexOf('\'')+1);
              v = v.substr(0, v.indexOf('\''));
              //console.log(k, v);
              olv.chapter[k] = v;
            });
          }

          if( $('a.header-logo').length > 0 && $('a.header-logo').text().trim() == "Novel Bin" ) {
            olv.chapter = olv.parseConst('const chapter =', olv.nextChapter);
            //console.log(olv.chapter);
            //if( JSON.stringify(olv.novel.bg) != JSON.stringify(olv.chapter) )
              //olv.novel.bg = olv.novel.chapter;

            if( JSON.stringify(olv.novel.chapter) != JSON.stringify(olv.chapter) )
              olv.novel.chapter = olv.chapter;

            GM_setValue('novel.'+novel.id, olv.novel);
          }

          wrapper.find('script').remove();

          var remList = [
            'Patreon',
            'removing ads',
            'Tseirp',
            'Translator:',
            'translations',
            'EndlessFantasy'
          ];

          remList.entries().forEach(([key, val]) => {
            if( wrapper.find('#chr-content p:contains("'+val+'")').length > 0 )
              wrapper.find('#chr-content p:contains("'+val+'")').remove();
          });

          if( wrapper.find('#chr-content a:contains("Remove Ads")').length > 0 )
            wrapper.find('#chr-content a:contains("Remove Ads")').remove();

          if( $('#' + wrapper.attr('id')).length > 0 )
            $('#' + wrapper.attr('id')).html( wrapper.html() );
          else {
            /*if( wrapper.length > 0 ) {
              //var selector = wrapper[0].localName;
              $('.' + wrapper.attr('class')).html( wrapper.html() );
            }
            else*/
              $('[class="'+wrapper.attr('class')+'"]').html( wrapper.html() );
          }
          //$(olv.site.content_id).html( $(olv.nextChapter).find(olv.site.content_id).html() );

          //$('title').text($(olv.nextChapter).get(1).innerText);

         // var navobj = $(olv.site.next).parents('[id]').eq(0);
          //navobj.html( $(olv.nextChapter).find('#'+navobj.attr('id')).html() );

          if( window.location.hostname == 'shanghaifantasy.com' )
            olv.site.content = olv.site.content_id;

          if( window.location.hostname == 'www.royalroad.com' )
            olv.site.content = '.chapter-content';

          $(olv.site.content + ' > p').each(function(){
            olv.uncensor($(this), olv.word.list);
          });

          olv.paragraph = 0;

          olv.reader.sites();

          if( $('a.header-logo').text().trim() == "Novel Bin" ) {
            olv.site.content = '#chr-content';
            //olv.content = $(olv.site.content).children();
          }

          if( typeof olv.site != 'undefined' && typeof olv.site.content != 'undefined' ) {
            if( typeof olv.site.fn != 'undefined' ) {
              olv.site.fn();
            }

            ['div', 'font', 'div'].entries().forEach(([key, val]) => {
              if( $(olv.site.content + ' > ' + val).length > 0 ) {
                var i = 0;
                var max = $(olv.site.content + ' > ' + val).length + 1;
                for(; i < max; i++ )
                 $(olv.site.content + ' > ' + val + ' > p').unwrap();
              }
            });

            if( window.location.hostname != 'www.royalroad.com' )
            $(olv.site.content).children().wrapAll('<div id="chapter-content"></div>');
            olv.site.content = '#chapter-content';
          }

          olv.content = $(olv.site.content).children();

          if( $('.olv.options').css('background-color') == 'rgba(0, 0, 0, 0)' ) {
            $('.olv.options').css('background-color', $('body').css('background-color'));
            $('.olv.options').css('color', $('body').css('color'));
          }

          olv.init_buttons();
          olv.populateVoiceList();
          olv.reader.load();

          if( $('#container').length > 0 && $('#container').attr('class') === undefined )
            $('#container').attr('class', 'dark-background');

          //$('#chr-content p').each(function(){ olv.uncensor($(this), list);

          //$(olv.site.content_id).parent().append(parrot);

          if( typeof olv.content != 'undefined' && $(olv.site.content + ' > p').length > 0 ) {
            if( olv.broken_sentences == 1 ) {
            if( $(olv.site.content + ' > p .mute').length > 0 )
              $(olv.site.content + ' > p .mute').remove();
            //olv.fix_broken();
            }

            olv.max_ends = 2;
            olv.fix_broken();

            //olv.setPara();
            olv.fn.resetPara();
            $(document).off('click', olv.site.content + ' p');
            $(document).on('click', olv.site.content + ' p', olv.select.fn);

            //olv.uncensor($(this), olv.word.list);
            $(olv.site.content + ' > p').each(function(){
              olv.uncensor($(this), olv.word.list);
            });
            olv.fn.p.options();
          }

          if( olv.midParagraph == $(olv.site.content).children().eq(Math.floor($(olv.site.content).children().length-3)).text() ) {
            //olv.reader.auto = 0;
            olv.preLoadNext = 0; olv.reader.next();
          }

          if( typeof olv.fn == 'undefined' )
            olv.fn = {end:[]};
          else if( typeof olv.fn.end == 'undefined' )
            olv.fn.end = [];

          olv.fn.end.forEach(fn => { fn(); });

          if( olv.reader.auto != 0 )
            setTimeout(function(){
              olv.read();
            }, 270);

          $([document.documentElement, document.body]).animate({
        			scrollTop: 0
    				}, 500);

          //$(olv.site.content_id).html( $(olv.nextChapter).find(olv.site.content_id).html() );
          /*$(olv.site.content_id).html( $(olv.nextChapter).find(olv.site.content_id).html() );

          var navobj = $(olv.site.next).parents('[id]').eq(0);
          navobj.html( $(olv.nextChapter).find('#'+navobj.attr('id')).html() );

          if( olv.reader.auto_next != 0 && typeof olv.site.next != 'undefined' && $(olv.site.next).length > 0 && !$(olv.site.next + olv.site.disabled).length ) {
            //$('#next_chap').trigger('click');
            olv.nexthref = $(olv.site.next).attr('href');
          }*/
        }
        else
        {
          if( olv.reader.auto_next != 0 && typeof olv.nexthref != 'undefined' && olv.nexthref != '' ) {
             window.location = olv.nexthref;
          }

          if( olv.reader.auto_next != 0 && typeof olv.site.next != 'undefined' && $(olv.site.next).length > 0 && !$(olv.site.next + olv.site.disabled).length ) {
            //$('#next_chap').trigger('click');
            window.location = $(olv.site.next).attr('href');
          }

          $('.olv .play').show();
          $('.olv .pause').hide();
          if( typeof olv.paragraph == "undefined" )
          olv.paragraph = 0;
          $(olv.site.content + ' > div.focused').hide();
          $('.olv .fastforward').text('⏩');
        }
      }
    },
    alert: function(text){
      var notice = $('<div class="btn" style="margin-bottom:5px;">' + text + '</div>');

      notice.appendTo('.olv.alert');
    },
    dashboard: {
     	add: function() {
      	if( window.location.href.toString().indexOf('readnovelfull') > 0 ) {
          if( typeof $('#chr-content') != undefined ) {
         		console.log('Add chapter');


          }
        }
      }
    }
  };
}

unsafeWindow.is = function(){
//arguments[0].split('.')
  var is = this;

  Object.entries(arguments[0].split('.')).forEach(([key, val]) => {
    if( is != false && typeof is[val] != 'undefined')
      is = is[val];
    else
      is = false;
  });

  if( arguments.length == 2 )
    return is == arguments[1];

  return is != false;
};

olv.is = function(){
  if( arguments.length == 2 )
    return is('olv.' + arguments[0], arguments[1]);

  return is('olv.' + arguments[0]);
};

unsafeWindow.not = function(){
//arguments[0].split('.')
  var is = this;

  Object.entries(arguments[0].split('.')).forEach(([key, val]) => {
    if( is != false && typeof is[val] != 'undefined')
      is = is[val];
    else
      is = false;
  });

  if( arguments.length == 2 )
    return is != arguments[1];

  return is != false;
};

olv.not = function(){
  if( arguments.length == 2 )
    return not('olv.' + arguments[0], arguments[1]);

  return not('olv.' + arguments[0]);
};

if(false)
console.error = function(event){
  //console.log( 'overloaded error: ', event, arguments);
  olv.error.push({'event': event, 'args': arguments});
  _error.apply(console,arguments);
};

if( !olv.is('fn') )
  olv.fn = {p: {}, end: []};

olv.fn.resetPara = function(){
  //reinitialize para variables
  //useful for copy paste content to a different site
  //could be used as part of dashboard
  olv.content = $(olv.site.content).children();
  olv.setPara();
  olv.paragraph = 0;
};

//console.log(olv.reader);
//console.log(localStorage);

olv.usermedia = function(){
	// Cope with browser differences.
let audioContext;
if (typeof AudioContext === 'function') {
  audioContext = new AudioContext();
} else if (typeof webkitAudioContext === 'function') {
  audioContext = new webkitAudioContext(); // eslint-disable-line new-cap
} else {
  console.log('Sorry! Web Audio not supported.');
}

// Create a filter node.
var filterNode = audioContext.createBiquadFilter();
// See https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#BiquadFilterNode-section
filterNode.type = 'highpass';
// Cutoff frequency. For highpass, audio is attenuated below this frequency.
filterNode.frequency.value = 10000;

// Create a gain node to change audio volume.
var gainNode = audioContext.createGain();
// Default is 1 (no change). Less than 1 means audio is attenuated
// and vice versa.
gainNode.gain.value = 0.5;

navigator.mediaDevices.getUserMedia({audio: true}, (stream) => {
  // Create an AudioNode from the stream.
  const mediaStreamSource =
    audioContext.createMediaStreamSource(stream);
  mediaStreamSource.connect(filterNode);
  filterNode.connect(gainNode);
  // Connect the gain node to the destination. For example, play the sound.
  gainNode.connect(audioContext.destination);
});
};

//olv.usermedia();

if( document.title == "Olv Dashboard" ) {
 	 console.log('init dashboard');
}

if( typeof jQuery != undefined ) {
  olv.uri = function(uri){
      	return window.location.href.toString().indexOf(uri) > 0;
      }

  // Page Visibility API
  Object.defineProperties(document,
    { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });

  window.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);

  jQuery(function() {
    if( window.location.href.toString().indexOf('creativenovels') > 0 ) {
   	 $('.support-placement').remove();
  	}

    /*if( jQuery('.nav-next > a:nth-child(1)[href*="levelingsolo"]').length > 0 ) {
     	 $(document).off('keypress');
      $(document).on('keypress', olv.clear_buttons);

      $(document).off('keydown');
			$(document).on('keydown', olv.clear_buttons);

      $(document).off('keyup');
			$(document).on('keyup', function(event) {
        if (event.keyCode == 39) { //right
          window.location = jQuery('.nav-next > a:nth-child(1)[href*="levelingsolo"]').href();
        }

			});

    }*/

    if( window.location.href.toString().indexOf('lightnovelpub') > 0 ) {
      $("#chapter-container p").each(function(i, e){
				if($(this).text().indexOf('lightno')>0){
				$(this).remove();
				}
			});

    //	n.i.p.p.l.e	acc.u.mulated
    //.replace(/. /, '[p] ').replace(/\./g, "").replace(/\[p\]/g, '.')

    $('.guide-message').html('');

    }

    if( $('.guide-message').length > 0 ) {
     	$('.guide-message').html('');
    }

    olv.reader.sites();

    if( typeof olv.site.load != 'undefined' ) {
      olv.site.load();
    }

    //console.log('content tag: ', olv.site.content);
      //fix lazy coding
      if( olv.not('site.content', '#chapter-content') ) {
      //if( typeof olv.site != 'undefined' && typeof olv.site.content != 'undefined' && olv.site.content != '#chapter-content' ) {
        //$(olv.site.content).attr('id', 'chapter-content');

        //another lazy fix
        /*
        if( $(olv.site.content + ' > div').length > 0 ) {
          if( $(olv.site.content + ' > div > p').length == 0 ) {
         		$(olv.site.content + ' > div').remove();
          }
          else {
           	 $(olv.site.content + ' > div > p').unwrap();
          }
        }*/

        if( olv.is('site.fn') ) {
       	  olv.site.fn();
        }

        if( $(olv.site.content + ' > div').length > 0 ) {
         	 $(olv.site.content + ' > div > p').unwrap();
        }

        $(olv.site.content).children().wrapAll('<div id="chapter-content"></div>');
       	olv.site.content = '#chapter-content';
      }

    //console.log(olv.content);
    //if( window.location.href.toString().indexOf('readnovelfull') > 0 ) {
    //if( typeof olv.content != 'undefined' && olv.content.length > 0 ) {
    if( true ) {
      //if( $(olv.site.content).length == 0 ) return;

      if( $('[class="bg-info text-center visible-md visible-lg box-notice"]').length > 0 )
     		$('[class="bg-info text-center visible-md visible-lg box-notice"]').remove();

      if( !olv.is('site.button') ) {
       	olv.site.button = '.newolvbtn';
      }

      //add play button for description
      if( $('#novel-detail-tabs,.desc-text').length == 2 ) {
        //$('.desc-text p').wrapAll('<div id="chapter-content" />');
        $('.desc-text').attr('id', 'chapter-content');
        olv.site.content = '#chapter-content';
        //olv.content = $(olv.site.content).children();
        olv.content = $(olv.site.content + ' p');

        if( olv.content.length == 1 )
          $(olv.site.content + ' p').attr('para', 0);

        if( !olv.is('paragraph') )
        olv.paragraph = 0;

        olv.reader.auto = 0;
      }

      if( olv.site.button == '.newolvbtn' ) {
        $('body').append('<button class="newolvbtn" style="display:none;"></button>');
        $('head').append('<style>.olv * {min-width:auto;}</style>');
      }

      if( $('body').css('color') == 'rgb(0, 0, 0)' ) {
       	//change color
        $('head').append('<style>body { color:black; background-color:white; }</style>');
      }

      //olv.site.button = '.glyphicon-menu-up';
      /*

1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Delete Status: <input class="delete_status" type="checkbox" value="1" ' + (olv.delete_status != 0 ? 'checked="checked"' : '') + ' /></div>\
&nbsp;<button class="btn select_pos" style="\
      */
olv.ws = {};

      //if(false)
try{
if( /ws\:\/\/[^\:]*\:[0-9]{4}/.test(olv.reader.socket) ) {
      olv.ws = new WebSocket(olv.reader.socket);

      olv.ws.onopen = function() {
        console.log('socket open', olv.reader.socket);

        if( olv.reader.archive == 1 ) {
          olv.archive.start();
        }

        if( typeof olv.prepWaveFiles != 'undefined' )
        	olv.prepWaveFiles();
      }

      olv.ws.onclose = function() {
        console.log('socket closed', olv.reader.socket);
      };

      olv.ws.onerror = function(event) {
        console.log('socket error', olv.reader.socket, event.data);
      };

      olv.ws.onmessage = function(event) {
        console.log('socket msg', event.data);

        if( event.data == 'fin' ) {
         	olv.speak_onend(event);
        }
      }

      //if( olv.ws )
        //console.log(olv.ws);
      	//try { olv.ws.send('echo 1234'); } catch(e) {};
    }
} catch(e) {
 	console.log('socket failed completely', e, olv.ws);
}

olv.init_buttons = function(){
      var button = $(olv.site.button).parent();

      //var button = $('#prev_chap');
      var add_to_dash = button.clone();
      olv.add_to_dash = add_to_dash;

      if( button.length == 0 ) {
       	 button = $('body');
      }

      var opts = $('<style>p.removed {text-decoration-line: line-through;} \
'+(olv.style != 'undefined' ? olv.style : '')+' '+olv.site.style+'</style>\
<div class="btn btn-success olv options" style="height: auto;\
bottom:10px; margin-top:0; position:fixed; left:10px;cursor: default;text-align:left;\
' + (typeof olv.site.background != 'undefined' ? 'background:' + olv.site.background + ';' : '' ) + '\
1background-color: #5cb85c;1border-color: #4cae4c;1color:white;display:none;z-index:1000;">\
<div class="optclose" style="position: absolute;right: 5px;top: 5px;">❌</div>\
<div class="optionList"><div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
<select style="width:104px;">'+function(opt){return '<option value="Manual">Manual Play</option><option value="Auto ▶" selected>Play on load</option>';}({})+'</select><input class="auto" type="checkbox" value="1" ' + (olv.reader.auto != 0 ? 'checked="checked"' : '') + ' /></div>\
&nbsp;<div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Auto on play: <input class="auto_on_play" type="checkbox" value="1" ' + (olv.reader.auto_on_play != 0 ? 'checked="checked"' : '') + ' /></div>\
&nbsp;<div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Auto Next: <input class="auto_next" type="checkbox" value="1" ' + (olv.reader.auto_next != 0 ? 'checked="checked"' : '') + ' /></div>\
&nbsp;<br /><div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Delete Status: <input class="delete_status" type="checkbox" value="1" ' + (olv.delete_status != 0 ? 'checked="checked"' : '') + ' /></div>\
&nbsp;<div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Hide Removed: <input class="hide_removed" type="checkbox" value="1" ' + (olv.hide_removed != 0 ? 'checked="checked"' : '') + ' /></div>\
<br />&nbsp;<div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Fix Sentences Breaks: <input class="broken_sentences" type="checkbox" value="1" ' + (olv.broken_sentences != 0 ? 'checked="checked"' : '') + ' /></div>\
&nbsp;<button class="btn select_pos" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Select Pos</button>\
<br /><div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Combine Paragraphs: <input class="combine_paragraphs" type="checkbox" value="1" ' + (olv.combine_paragraphs != 0 ? 'checked="checked"' : '') + ' />\
&nbsp;Count: <input type="text" class="paragraph_length" style="width: 30px;" value="'+olv.paragraph_length+'" \/></div>\
<br /></div><div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Socket (<span class="socket_status">Closed</span>): <input class="socket" type="input" value="' + olv.reader.socket + '" /></div>\
&nbsp;<div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px; display:none;">\
Archive Chapter: <input class="archive" type="checkbox" value="1" ' + (olv.reader.archive != 0 ? 'checked="checked"' : '') + ' /></div>\
<br class="btn status_field" style="' + (olv.delete_status != 0 == '' ? 'display:none;' : 'display:none;') + '" /><div class="btn status_field" style="\
' + (olv.delete_status != 0 == '' ? 'display:none;' : 'display:none;') + '\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Status: <input class="status" type="input" placeholder="{\'start\':/Name/g, \'end\':/Stats\sPoints/g}" value="' + olv.status + '" style="width: 240px;" /></div>\
&nbsp;<br /><div class="btn" style="\
' + (olv.reader.socket == '' ? 'display:none;' : '') + '\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
Archive Chapter: <input class="archive" type="checkbox" value="1" ' + (olv.reader.archive != 0 ? 'checked="checked"' : '') + ' /></div>\
<br /><div class="btn scroll" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
<span style="1width:40px; display:inline-block;">Scroll Mode: &nbsp;</span>\
<input type="radio" name="scroll" id="scroll1" value="0" \><label for="scroll1">Default</label>&nbsp;\
<input type="radio" name="scroll" id="scroll2" value="1" \><label for="scroll2">W/ Text</label>&nbsp;\</div>\
<br /><div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
<span style="width:40px; display:inline-block;">Volume:&nbsp;</span>\
<span class="volume-value" style="width:24px; display:inline-block;">'+olv.reader.volume+'</span>&nbsp;\
<input type="range" min="0" max="100" value="'+olv.reader.volume * 100+'" step="1" id="volume" style="float: right;display: inline;width: auto;" \></div>\
<br /><div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
<span style="width:40px; display:inline-block;">Rate:&nbsp;</span>\
<span class="rate-value" style="width:24px; display:inline-block;">'+olv.reader.rate+'</span>&nbsp;\
<input type="range" min="0.5" max="10" value="'+olv.reader.rate+'" step="0.5" id="rate" style="float: right;display: inline;width: auto;" \></div>\
<br /><div class="btn" style="\
1background-color: #5cb85c; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-top:5px;">\
<span style="width:40px; display:inline-block;">Pitch:&nbsp;</span>\
<span class="pitch-value" style="width:24px; display:inline-block;">'+olv.reader.pitch+'</span>&nbsp;\
<input type="range" min="0" max="4" value="'+olv.reader.pitch+'" step="0.1" id="pitch" style="float: right;display: inline;width: auto;" \>\
</div><br /><select class="btn btn-success" style="1background-color: #5cb85c;1border-color: #4cae4c;margin-top:5px;"></select>\
</div>');

      var alerts = $('<div class="olv btn btn-success alert" style="\
bottom:10px; margin-top:0; position:fixed; left:10px;cursor: default;text-align:left;float:left;display:none;\
"></div>');

      //<button class="btn btn-success" style="padding:2px 6px; margin-right:5px;">⏮</button>\
      //<button class="btn btn-success" style="padding:2px 6px; margin-right:10px;">⏭</button>\

      //insert button container
      var btn = $('<div class="olv parrot" style="\
bottom:10px; margin-top:0; position:fixed; right:10px;cursor: pointer;z-index:1000;">\
<textarea class="btn textarea" style="text-align: left;display:none; background:#232323;border-color: #82A82D;height:0;width: 100%;margin-bottom: 6px;"><\/textarea><br />\
<button class="btn btn-success select_hover" style="padding:2px 6px; font-weight: bold;margin-right:5px; display:none;">></button>\
<button class="btn btn-success mode" style="display:none;padding:2px 6px; margin-right:5px;">Mode</button>\
<button class="btn btn-success time" style="display:none;padding:2px 6px; margin-right:5px;">💬⏳ Calculating</button>\
<button class="btn btn-success dialog" style="padding:2px 6px; font-weight: bold;margin-right:5px;">>_</button>\
<button class="btn btn-success console_button" style="display:none; padding:2px 6px; font-weight: bold;margin-right:5px;">>_</button>\
<input class="btn btn-success console" placeholder="" style="padding:0; width:0; height:26px; margin-right:5px; text-align: left; display:none;"></input>\
<button class="btn btn-success select_pos" style="display:none; padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-right:5px;">\
Select Pos</button>\
<button class="btn btn-success init" style="padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-right:5px; display:none;">\
Init</button>\
<button class="btn btn-success auto" style="padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-right:5px; z-index:1000;">\
' + (olv.reader.auto != 0 ? 'Auto ▶' : 'Manual') + '</button>\
<button class="btn btn-success play" style="padding:2px 6px; margin-right:5px;">▶</button>\
<button class="btn btn-success pause" style="padding:2px 6px; margin-right:5px; display:none;">⏸</button>\
<button class="btn btn-success stop" style="padding:2px 6px; margin-right:5px; display:none;">⏹</button>\
<button class="btn btn-success fastforward" style="padding:2px 6px; margin-right:5px; width: 50px;">⏩</button>\
<button class="btn btn-success next" style="padding:2px 6px; margin-right:5px;">⏭</button>\
<button class="btn btn-success parrot" style="padding:2px 4px;">🦜</button>\
</div>');

      olv.buttons = [
        {e:'button',t:'>',c:'select_hover', s:'padding:2px 6px; font-weight: bold;margin-right:5px; display:none;'}/*,
        {e:'button',t:'>_',c:'console_button',s'padding:2px 6px; font-weight: bold;margin-right:5px;'},
        {e:'input',t:'',c:'console',s'padding:0; width:0; height:26px; margin-right:5px; text-align: left; display:none;'},
        {e:'button',t:'Select Pos',c:'select_pos',s'padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-right:5px;'},
        {e:'button',t:'Init',c:'init',s'padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-right:5px; display:none;'},
        {e:'button',t:(olv.reader.auto != 0 ? 'Auto ▶' : 'Manual'),c:'auto',s'padding:2px 6px; 1border-color: #4cae4c;cursor:default;margin-right:5px;'},
        {e:'button',t:'▶',c:'play',s'padding:2px 6px; margin-right:5px;'},
        {e:'button',t:'⏸',c:'pause',s'padding:2px 6px; margin-right:5px; display:none;'},
        {e:'button',t:'⏭',c:'next',s'padding:2px 6px; margin-right:5px;'},
        {e:'button',t:'🦜',c:'parrot',s'padding:2px 4px;'}
      */];

      if( $('.olv.options').length > 0 )
        $('.olv.options').remove();

      if( $('.olv.alert').length > 0 )
        $('.olv.alert').remove();

      $( btn ).insertBefore( button );
      $( opts ).insertBefore( button );
      $( alerts ).insertBefore( button );

      //$('.olv.options').attr('style', 'height: auto; bottom: 10px; margin-top: 0px; position: fixed; right: 10px; cursor: default; text-align: left; z-index: 1000;');
if(1) {

if( typeof button == 'undefined' )
  var button = $(olv.site.button).parent();

if( button.length == 0 ) {
   button = $('body');
}

if( $('.olv.newOptions').length > 0 )
  $('.olv.newOptions').remove();

if( typeof opts == 'undefined' )
  var opts = '';

var optStyle = 'background: #121212; border: 1px solid transparent; border-radius: 4px !important; border-color: #82A82D; color: #82A82D;';

optStyle = 'background: transparent; border: 1px solid transparent; border-radius: 4px !important; 1border-color: #82A82D; color: #82A82D;';

opts = '<div class="btn btn-success olv newOptions" style="'+optStyle+'\
display:none; padding: 0; height: auto; bottom: '+ ($('.olv.parrot').height() + 4) +'px; margin-top: 0px; position: fixed; right: 10px; cursor: default; text-align: left; z-index: 1000; width: 200px;">';

var copyOpts = ['auto', 'auto_next', 'expand_options'];

if( !olv.is('btn') )
  olv.btn = {
    fn: function(){},
    ls: {}
  };

olv.btn.ls = {preLoadNext: ['BgLoadNext', 'checkbox']};

olv.op = {
  'checkbox': function(arg){
    if( !$('.olv input.'+arg).is(':checked') ) {
      $('.olv input.'+arg).prop('checked', false);
      olv[arg] = 0;
    }
    else {
      $('.olv input.'+arg).prop('checked', true);
      olv[arg] = 1;
    }
  }
};

//olv.fn.end.push
//olv.preLoadNext = 0
var arg = 'preLoadNext';
opts += '<div class="btn '+arg+'" style="\
padding:2px 6px; cursor:default;margin-top:5px; float:right;">\
BgLoadNext: <input olvBtn="'+arg+'" class="'+arg+'" type="checkbox" value="1" ' + (olv[arg] != 0 ? 'checked="checked"' : '') + ' /></div>';

if( !olv.is('newOptions') ) {
  olv.newOptions = function(e){
    //e.preventDefault();
    //e.stopPropagation();
    if( $(this).get(0).nodeName == 'INPUT' ) {
      //console.log($(this).get(0).nodeName, $(this).attr('class'))
      var arg = $(this).attr('olvBtn').trim();
      //console.log('.olv input.'+arg, $('.olv input.'+arg).prop('checked'));

      if( olv.is('op.'+$(this).get(0).type) )
        olv.op[$(this).get(0).type](arg);

      //console.log(e.target, 'olv.'+arg+' == '+(!olv[arg]));
      return;
      if( !$('.olv input.'+arg).is(':checked') ) {
        $('.olv input.'+arg).prop('checked', false);
        olv[arg] = 0;
      }
      else {
        $('.olv input.'+arg).prop('checked', true);
        olv[arg] = 1;
      }

      console.log(e.target, 'olv.'+arg+' == '+olv[arg]);
    }
  };

$(document).off('click', '.olv.newOptions *');
$(document).on('click', '.olv.newOptions *', olv.newOptions);

}

if(false)
opts += '<div class="btn" style="\
padding:2px 6px; cursor:default;margin-top:5px; float:right;">\
Auto on play: <input class="auto_on_play" type="checkbox" value="1" ' + (olv.reader.auto_on_play != 0 ? 'checked="checked"' : '') + ' /></div>';

if(false)
opts += '<div class="btn" style="\
padding:2px 6px; cursor:default;margin-top:5px; float:right;">\
Auto on play: <input class="auto_on_play" type="checkbox" value="1" ' + (olv.reader.auto_on_play != 0 ? 'checked="checked"' : '') + ' /></div>';

opts += '<div class="btn expand_options" style="\
padding:2px 6px; cursor:default;margin-top:5px; float:right;">Expand Options</div>';

opts += '</div>';

$( opts ).insertBefore( button );
}

      if( $('.olv.options').css('background-color') == 'rgba(0, 0, 0, 0)' ) {
       	$('.olv.options').css('background-color', $('body').css('background-color'));
        $('.olv.options').css('color', $('body').css('color'));
      }

      $('.olv .textarea').val( localStorage.getItem("olv.dialog") || '' );
};
      olv.init_buttons();
      olv.reader.load();

      var add_to_dash = olv.add_to_dash;

      if( typeof olv.fn == 'undefined' )
        olv.fn = {p: {}, end: []};

      olv.checkargs = function(){ console.log('arguments:', arguments); };

      olv.console = $('<div class="btn olvconsole" style="z-index: 808000;bottom: 0px; margin:0;color: #A9A9A9;position: fixed; left: 0; max-width: 50%; overflow: hidden;text-align: left; margin-bottom: 6px; display: inline-block;">\
<textarea class="btn" style="resize: none;text-align: left; height: 22px; color: #82A82D; padding:0 4px; margin:0; background: rgb(35, 35, 35); border-color: rgb(130, 168, 45); max-width: 100%; width1:22px; width:auto;"></textarea></div>')
      olv.console.hide();
      $('body').append(olv.console);

      if( $('.olv .olv-chapter-title').length ) {
        //olv.console.width( $('.olv .olv-chapter-title').width() );

        //setTimeout(function(){ $('.olv .olv-chapter-title').hide(); }, 300)
      }

      olv.len_val = function(len, val){
        return (olv.console.find('textarea').val().length == len && olv.console.find('textarea').val() == val);
      };

      //if( typeof olv.keyup == 'undefined' ) {
        //olv.console.hide();
        //$('.olv .olv-chapter-title').show();
      $('.olvconsole span').remove();
      $('.olv .olv-chapter-title').css('bottom', '6px');
      $(document).off('keydown', olv.keydownfn);
      //🫒 U+1FAD2
      olv.$ = {
        add: function(opt){
           $('<span class="btn" style="text-align: center;height: 22px;color: #82A82D;padding: 0px 6px;margin: 0;background: rgb(35, 35, 35);border-color: rgb(130, 168, 45);margin-right: 6px; width:22px;">'+opt+'</span>').insertBefore( '.olvconsole textarea' );
        }
      };

      olv.keydownfn = function(e){
        //if( e.key == "``") // && e.shiftKey && e.ctrlKey )
          //return e;

        if( (e.key == "`" ) ) { //&& e.ctrlKey) || (olv.console.find('textarea').val().length == 0 && e.key == 'K') ) {
          olv.console.toggle();
          if( $('.olv .olv-chapter-title').length )
            $('.olv .olv-chapter-title').toggle();

          if( !olv.console.is(':hidden') )
            olv.console.find('textarea').focus();
          return false;
        }

        //if( window.location.host == 'www.royalroad.com' && e.key == '9' )
          //window.location = $('.col-md-offset-4 > a:nth-child(1)').attr('href');

        //console.log(e.keyCode, e)
        if( olv.console.find('textarea').is(':focus') ) {
          //yt #contents a
          if( olv.len_val(1, 'A') ) {
            //olv.console.find('textarea').val('');
            //olv.console.find('span').text('A ');
          }

          /*
          switch( $('.olvconsole span').length ) {
            case 0:
            //console.log(olv.console.find('textarea').val(), e.key)
              if( olv.console.find('textarea').val().length == 0 && e.key == "P" ) {
                $('.olvconsole').css('width', '');
                //olv.console.find('textarea').val('');
                //olv.console.prepend('<span class="btn" style="text-align: left;height: 22px;color: #82A82D;padding: 0px 6px;margin: 0;background: rgb(35, 35, 35);border-color: rgb(130, 168, 45);margin-right: 6px;">P</span>');
                //$('<span class="btn" style="text-align: center;height: 22px;color: #82A82D;padding: 0px 6px;margin: 0;background: rgb(35, 35, 35);border-color: rgb(130, 168, 45);margin-right: 6px; width:22px;">¶</span>').insertBefore( '.olvconsole textarea' );
                olv.$.add('¶');
                return false;
              }
              if ( e.key == 'A' ) {
                olv.$.add('🔗');
                return false;
              }
            break;
            case 1:
              if( olv.console.find('textarea').val().length == 0 && (1 + ['+', '-', '='].indexOf(e.key)) ) {
                $('.olvconsole').css('width', '');
                //olv.console.find('textarea').val('');
                //olv.console.prepend('<span class="btn" style="text-align: left;height: 22px;color: #82A82D;padding: 0px 6px;margin: 0;background: rgb(35, 35, 35);border-color: rgb(130, 168, 45);margin-right: 6px;">+</span>');
                $('<span class="btn" style="text-align: center;height: 22px;color: #82A82D;padding: 0px 6px;margin: 0;background: rgb(35, 35, 35);border-color: rgb(130, 168, 45);margin-right: 6px; width:22px;">'+e.key+'</span>').insertBefore( '.olvconsole textarea' );
                return false;
              }
            break;
            case 2:
              if( olv.console.find('textarea').val().length == 0 && (1 + ['+', '-', '='].indexOf(e.key)) ) {
                 $('.olvconsole span').last().text( e.key );
                return false;
              }
              if( olv.console.find('textarea').val().length == 0 && /[1-9]/.test(e.key) && (1 + ['¶+', '¶-'].indexOf($('.olvconsole span').text())) ) {
                olv.paragraph = $('.olvconsole span').last() == '+' ? (olv.paragraph+Number(e.key)) : (olv.paragraph-Number(e.key));
                $('.olvconsole span').remove();
                olv.console.toggle();
                if( $('.olv .olv-chapter-title').length )
                  $('.olv .olv-chapter-title').toggle();
                return false;
              }
            break;
            default:

            break;
          }
          */

          if( typeof olv.site.console != 'undefined' ) {
            olv.site.console(e);

            if( typeof olv.site.return != 'undefined' ) {
              return olv.site.return;
            }
          }

          if( e.keyCode == 13 ) {
            if( /[0-9]*/g.test(olv.console.find('textarea').val()) && (1 + ['¶='].indexOf($('.olvconsole span').text())) ) {
              olv.paragraph = (Number(olv.console.find('textarea').val()));
              $('.olvconsole span').remove();
              olv.console.toggle();
              if( $('.olv .olv-chapter-title').length )
                $('.olv .olv-chapter-title').toggle();
            }

            olv.console_fn( olv.console.find('textarea').val() );

            olv.console.find('textarea').val('');
            olv.console.toggle();
            if( $('.olv .olv-chapter-title').length )
              $('.olv .olv-chapter-title').toggle();

            return false;
          }

          return e;
        }

        if( $(':focus').length > 0 )
          return e;

        //if( event.shiftKey )
        /*if ( 1 + [75].indexOf(event.keyCode) ) {
          olv.console.toggle();
          if( $('.olv .olv-chapter-title').length )
            $('.olv .olv-chapter-title').toggle();

          if( !olv.console.is(':hidden') )
            olv.console.find('textarea').focus();
        }*/
      };

      olv.cmdList = {
        'replace': function(input){
          var kv = input.split(' with ');
          var key = RegExp(kv[0]);
          var value = kv[1];
          $('p[para]:contains("'+kv[0]+'")').each(function(){
            $(this).text( $(this).text().replace(key, value) );
          });
        },
        'do': function(input){
          //console.log(input, typeof olv.ws)
          if(false)
          if ( typeof olv.do == 'undefined' ) {
            //console.log('ws isn\'t setup')
            //olv.do = new WebSocket('ws://localhost:4827/');
            olv.do.onopen = function() {
              olv.do.send('Connected');
            }
            olv.do.onmessage = function(event) {
              console.log(event)
            }
          }
        },
        'rr': function(input) {
          //let tabControl = GM_openInTab(url, options)
          //window.open(url, '_blank').focus();
          //encodeURI('The Jester of Apocalypse')
          var url = 'https://www.royalroad.com/fictions/search?title='+encodeURI(input)+'&globalFilters=true';

          if( typeof GM_openInTab != 'undefined' )
            GM_openInTab(url);
          else
            window.open(url, '_blank').focus();
        },
        'bin': function(input) {
          var url = 'https://novelbin.com/search?keyword='+input.replace(/ /g, '+');

          if( typeof GM_openInTab != 'undefined' )
            GM_openInTab(url);
          else
            window.open(url, '_blank').focus();
        }
      };

      olv.console_fn = function(input){
        if( input == 'play' )
          olv.read();

        if( input == 'stop' )
          olv.reader.stop();

        //'replace young master with cat fiction'
        if( input.indexOf(' ') > 0 ) {
          var space = input.indexOf(' ');
          var cmd = input.substr(0, space);
          if( typeof olv.cmdList[cmd] != 'undefined' )
            olv.cmdList[cmd]( input.substr(space+1) );
        }
      };

      $(document).on('keydown', olv.keydownfn);
      /*
      $(document).on('keyup', '.olvconsole textarea', function(e){
        if( $(this).val().length ) {
          olv.console.find('textarea').scrollLeft('900');
          if( olv.console.find('textarea').scrollLeft() > 0 ) {
            olv.console.find('textarea').width( (12+olv.console.find('textarea').scrollLeft()+'px') );
            olv.console.find('textarea').scrollLeft(0);
          }
        }

        return e;
      });*/

      //speechSynthesis.speaking

      if(false)
      $(document).on('blur', '.olvconsole', function(){
        olv.console.toggle();
          if( $('.olv .olv-chapter-title').length )
            $('.olv .olv-chapter-title').toggle();

          if( !olv.console.is(':hidden') )
            olv.console.find('textarea').focus();
      });

      var voices = [];

      //populate voice options
      olv.populateVoiceList = function(){
      	voices = window.speechSynthesis.getVoices();
      	//console.log(voices);
      	for(i = 0; i < voices.length ; i++) {
       		var option = $("<option data-lang=\""+voices[i].lang+"\" data-name=\"" + voices[i].name + "\">" + (voices[i].default ? '✓ ' : '') + voices[i].name + "</option>");

          if( olv.reader.voice == i ) {
           	option.prop('selected', true);
          }

        	$( option ).appendTo('.olv.options select:last-child');
        	//console.log(option);
      	}
      }

      olv.populateVoiceList();

      if (speechSynthesis.onvoiceschanged !== undefined) {
  			speechSynthesis.onvoiceschanged = olv.populateVoiceList;
			}

      //<div class="narrate-word-highlight animate" data-top="125.20002746582031px" data-word="Though" style="top: 125.2px; left: 86.0667px; width: 54.2667px; height: 18px; font-family: Helvetica, Arial, sans-serif; font-kerning: auto; font-size: 16px; font-size-adjust: none; font-stretch: 100%; font-variant: normal; font-weight: 400; line-height: 25.6px; letter-spacing: normal; text-orientation: mixed; text-transform: none; word-spacing: 0px;"></div>

      $(document).on('click', '.olv .parrot', function(){
        if( !olv.is('options') )
          olv.options = '.olv.newOptions'; //'.olv.options';

        if( $(olv.options).is(':hidden') ) {
          $('.olv.options').hide();
      		$(olv.options).show();
        }
        else {
         	$(olv.options).hide();
          $('.olv.options').hide();
        }
      });

      $(document).on('click', '.olv .btn.expand_options', function(){
        //if( !olv.is('options') )
        var options = '.olv.options';

        if( $(options).is(':hidden') ) {
      		$(options).show();
          $('.olv.newOptions').hide();
        }
        else {
         	 $(options).hide();
        }
      });

      olv.init_read = function() {
       	if( $(olv.site.content + ' .chapter-title').length == 1 && $(olv.site.content + ' > div:nth-child(6)').length == 1 && $(olv.site.content + ' > div:nth-child(6) p:eq(0)').length == 1 && $(olv.site.content + ' > div:nth-child(6) p:eq(0)').html() == '' ) {
        //$(olv.site.content + ' > div:nth-child(6)').html().substr(0, $(olv.site.content + ' > div:nth-child(6)').html().indexOf('<'))
          $(olv.site.content + ' > div:nth-child(6) p:eq(0)').html($(olv.site.content + ' > div:nth-child(6)').html().substr(0, $(olv.site.content + ' > div:nth-child(6)').html().indexOf('<')));
          $(olv.site.content + ' > div:nth-child(6)').html($(olv.site.content + ' > div:nth-child(6)').html().substr($(olv.site.content + ' > div:nth-child(6)').html().indexOf('<')));
        }

        if( $('.ads-holder').length > 0 )
      		$('.ads-holder').remove();

      	if( $('.adsbygoogle').length > 0 )
      		$('.adsbygoogle').remove();

        if( $('.ads-middle').length > 0 )
      		$('.ads-middle').remove();

        if( $(olv.site.content + ' script').length > 0)
          $(olv.site.content + ' script').remove();

        if( typeof olv.paragraph == "undefined" ) {
         	 olv.paragraph = 0;
        }
        //console.log('read start');
        if( typeof olv.content == "undefined" ) {
          //olv.content = $(olv.site.content).children();
          $(olv.site.content).children();
        }

        if( typeof olv.content != "undefined" && olv.content.length < 10 ) {
          //$(olv.site.content).html($(olv.site.content + ' div').html());
          olv.content = $(olv.site.content + ' p').last().parent().children();
        }

        /*if( olv.content.length < 10 || $(olv.site.content).children().length - $(olv.site.content + ' p').length < 10 ) {
         	paragraphs = $(olv.site.content + ' p');
					$(olv.site.content).html();
					$(olv.site.content).append(paragraphs);
          olv.content = $(olv.site.content).children();
        }*/

        if( typeof olv.last == 'undefined' ) {
         	olv.last = {
          	chapter:0
          };
        }

        if( olv.paragraph == 0 && localStorage.getItem('olv.last.chapter') == window.document.title.replace(/[^a-zA-Z0-9 -]/g, '') && Number(localStorage.getItem('olv.last.chapter.p')) > 0 ) {
        	//load previous line upon crash
          //add options for this.
          //if( olv.last.chapter = 1 )
          //olv.paragraph = Number(localStorage.getItem('olv.last.chapter.p'));

          //highlight and focus paragraph
          /*olv.content.eq(localStorage.getItem('olv.last.chapter.p')).css('text-decoration', 'none');

          var top = olv.content.eq(localStorage.getItem('olv.last.chapter.p')).offset().top - olv.site.addition;

          //fix weird scroll to top bug?
          if( top > 0 )
          	$([document.documentElement, document.body]).animate({
        			scrollTop: top
    				}, 500);*/
        }
        else {
          localStorage.setItem('olv.last.chapter', window.document.title.replace(/[^a-zA-Z0-9 -]/g, ''));
          localStorage.setItem('olv.last.chapter.p', olv.paragraph);
        }

        //console.log('olv.paragraph', olv.paragraph, olv.content);
        /*if(false)
        while( $(olv.site.content + ' p[para='+olv.paragraph+']').text() == '' || $(olv.site.content + ' p[para='+olv.paragraph+']').prop("tagName") != 'P' ) {
          console.log('olv.paragraph', olv.paragraph, $(olv.site.content + ' p[para='+olv.paragraph+']').text());
          olv.paragraph = (olv.paragraph+1);

          if( olv.paragraph >= olv.content.length ) {
            olv.reader.next();

         		return;
          }
        }
        //*/
      }

      olv.skip = function(obj){
        //console.log('init skip paragraph');
        /*while( obj.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
          //console.log(obj, $(olv.site.content + ' p[para='+olv.paragraph+']').text());
      		olv.paragraph = (olv.paragraph+1);
        }*/
      };

      olv.read = function(){
        if( arguments.length > 0 ) {
          olv.text = arguments[0];
        }

        if( olv.reader.auto == 0 && olv.reader.auto_on_play != 0 ) {
        	olv.reader.auto = ( $(this).text() == 'Manual' ? 1 : 0 );
        	$('.olv.options .auto').prop('checked', ( olv.reader.auto ? true : false ) );
        	$('.olv button.auto').text( (olv.reader.auto != 0 ? 'Auto ▶' : 'Manual') );
        	localStorage.setItem('olv.reader.auto', olv.reader.auto);
      	}

        $('.olv .play').hide();
        $('.olv .pause').show();

        //handle selection text
        if( typeof olv.site.content == 'undefined' && window.getSelection().type == 'Range' ) {
          olv.site.content = '';
          olv.content = [];
        }

        $(olv.site.content + ' > div.focused').show();

        if( speechSynthesis.paused == true ) {
         	speechSynthesis.resume();
          return;
        }

        olv.init_read();

        /*while( $(olv.site.content + ' p[para='+olv.paragraph+']').attr('class') !== undefined ) {
         	 olv.paragraph = (olv.paragraph+1);
        }

        /*console.log(olv.paragraph);
        console.log( $(olv.site.content) .children().eq(olv.paragraph).text() );
        console.log( $(olv.site.content + ' p[para='+olv.paragraph+']').text() );
        console.log( $(olv.site.content) .children().eq(olv.paragraph).text() == $(olv.site.content + ' p[para='+olv.paragraph+']').text() );

        //strip hostname comments
        /*olv.hostname_pos = $(olv.site.content + ' p[para='+olv.paragraph+']').text().toLowerCase().indexOf(window.location.host.toString());
        if( olv.hostname_pos > 0 ) {

        }*/

        olv.skip(/Read novel online free at/ig);
        //olv.skip(/google/g);

        if( window.location.href.toString().indexOf('my-dragon-system') > 0 ) {
          olv.skip(/.*chapter up to 83 are written.*/g);
          olv.skip(/.*jksmanga*/ig);
        }

        if( false && window.location.href.toString().indexOf('nanomancer-reborn-ive-become-a-snow-girl') > 0 ) {
          olv.skip(/^\[.*|^\s\[.*/g);
          olv.skip(/^\|.*|^\s\|.*/g);
        }

        if( window.location.href.toString().indexOf('epic-of-caterpillar') > 0 ) {
          olv.skip(/^\|.*|^\s\|.*/g);
          olv.skip(/^\|.*|^\s\|.*/g);
          olv.skip(/^\|.*|^\s\|.*/g);
          if( /[\#]+/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().replace(/[\#]+/ig, '#') );
          }
          if( /Skill Fusions of the Day\:/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) && olv.paragraph > 50 ) {
            olv.reader.next();
            speechSynthesis.stop();
          }
          if( /Please\smake\ssure\sto\scheck\sout\smy\sother\snovels/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            olv.reader.next();
            speechSynthesis.stop();
          }
        }

        if( false ) {
        	if( /\[Kireina.*gained.*prayers.*/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
          if( /\[You.*gained.*EXP.*/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
          if( /\[.*gained.*Dungeon\sPoints.*/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
          if( /\[.*gained.*EXP.*/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
          //'[LEVEL 047/250 EXP 0.386.758.537/2.450.000.000 EXP]';
          if( /\[.*LEVEL.*EXP.*\]/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
          if( /\[.*gained.*levels.*/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
          //[Divine Skill Points and Divine Dungeon Points have been converted into their corresponding Ranks!]
          if( /\[Divine.*Points.*corresponding\sRanks.*\]/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
        }

        //remove excess lines in vampire system
      	if( window.location.href.toString().indexOf('my-vampire-system') > 0 ) {
        	//jksmanga
          //My Werewolf System has finally arrived on ReadNovelFull!
          //MVS EVENT ONGOING
        	if( /MVS\sEVENT\sONGOING/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) || (/My\sWerewolf\sSystem/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) && olv.paragraph > 14) || /jksmanga/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) || /P\.a\.t\.r\.e\.o\.n/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
          	//olv.paragraph = (olv.paragraph+1);
            olv.reader.next();
            speechSynthesis.stop();
        	}
      	}

        if( window.location.href.toString().indexOf('demon-queen-rebirth-i-reincarnated-as-a-living-armor') > 0 ) {
          if( /Please make sure to check out my other novels, I am sure that you will like them\!/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            olv.reader.next();
            speechSynthesis.stop();
          }
          while( /^([a-zA-Z]+ASH\![\s]*|crack[\,]*[\s]*[\!]*|B[O]+M\![\s]*)+/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
          while( /^Ding\!$/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
          while( /^\[.*/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            olv.paragraph = (olv.paragraph+1);

            while( /^\<.*\>$/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            	olv.paragraph = (olv.paragraph+1);
          	}
            while( /^Ding\!$/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            	olv.paragraph = (olv.paragraph+1);
          	}
          }
          if( /^Author\'s\sNote/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            olv.reader.next();
            speechSynthesis.stop();
          }
        }

        if( window.location.href.toString().indexOf('release-that-witch') > 0 ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().replace(/\n/g, ' ').replace(/\r/g, ' ') );
        }

        if( /\[.*reborn-as-a-dragon-girl-with-a-system_19320316505991005\] remove.*/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
          	olv.reader.next();
            speechSynthesis.stop();
        }

        if( /P4TR30N|P4TRE0N/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
          if( olv.paragraph > 20 ) {
          	olv.reader.next();
          	speechSynthesis.stop();
          }
          else {
            olv.paragraph = (olv.paragraph+1);
          }
        }

        if( /Sun\./g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().replace(/Sun\./g, 'sun.') );
        }

        if( /.*Find authorized novels in.*Please click.*for visiting\..*/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text()) ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().replace(/Find authorized novels in.*Please click.*for visiting\./ig, '') );
        }

        if( olv.paragraph > 10 && /^Author\'s\sNote/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          olv.reader.next();
          speechSynthesis.stop();
        }

        if( /^[_]+$/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().replace(/^[_]+$/g, '-') );
        }

        if( /u003c|u003e/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().replace(/u003c|u003e/g, '') );
        }

        if( /_{3}/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().replace(/_{3}/g, '-') );
        }

      if( window.location.href.toString().indexOf('the-guardians-throne-the-first-magic-swordsman') > 0 ) {
        olv.skip(/Your.*has\sleveled\sup.*|Your.*reached\slevel.*/ig);
        while(/America/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().replace(/America/g, 'Ameria') );
        }
      }

        if( window.location.href.toString().indexOf('hero-of-darkness') > 0 ) {
          olv.skip(/\[\[Author.*Reference\sArt.*in\schapter\scomments.*\]\]/ig);
        }

        while( /\[This novel is a contracted work[^\]]*\]|\[This novel is a contracted work[^\]]*\]|\[This novel is a contracted work[^\]]*\]/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().replace(/\[This novel is a contracted work[^\]]*\]|\[This novel is a contracted work[^\]]*\]|\[This novel is a contracted work[^\]]*\]/ig, '') );
        }

        //|[\*\s]{3}
        //$(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().length < 4 ||
        olv.skip(/^\[.*If you are reading this elsewhere.*\]$|^###$|.*lightnovelworld.*|.*novelpub.*|.*Golden\sTickets.*/g);

        while( /\[This novel is a contracted work[^\]]*\]|\[This novel is a contracted work[^\]]*\]|\[This novel is a contracted work[^\]]*\]/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().replace(/\[This novel is a contracted work[^\]]*\]|\[This novel is a contracted work[^\]]*\]|\[This novel is a contracted work[^\]]*\]/ig, '') );
        }

        olv.skip(/^\[.*AllNovelFull.*\$|^\[.*If you are reading this story other.*\]$|^\[.*Do not read it on other sites.*\]$|^Author\'s\snote\:.*|✿ Author only posts on webn.*/ig);

        while( /[\*]{4}|UU Reading ww.*uukanshu.*com|\* /.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
         	$(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().replace(/[\*]{4}|UU Reading ww.*uukanshu.*com|\* /g, '') );
        }

        while( /\( AllNovelFull \)/.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
         	$(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().trim().replace(/\( AllNovelFull \)/, '') );
        } // AllNovelFull )

        /*if( /For/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) && /more/g.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) && /novel/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          olv.paragraph = (olv.paragraph+1);
        }*/

        if( true ) {
         	if( /.*If you are not reading this at webnovel\.com.*|.*Link to the original site.*/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            olv.reader.next();
            speechSynthesis.stop();
          }
        }

        if( window.location.href.toString().indexOf('the-bored-immortal') > 0 ) {
          if(/Golden\sTicket.*|150\svotes\s=\s1\sBonus\sChap/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
          	olv.reader.next();
            speechSynthesis.stop();
        	}
        }

        if( olv.uri('infinite-mana-in-the-apocalypse') ) {
         	while( /DING\! The effects of Loot Multiplier are applied/gi.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
            olv.paragraph = (olv.paragraph+1);
          }
        }

        /*
        <atlatl of=”” reality=””>:: Aside from the many features of the Seed of Reality,
        its offensive capabilities are its strongest under [Offensive Maneuvers] as the concepts
        within this feature have been culminated into the Atlatl of Reality. This feature now allows for
        the authority of the Seed of Reality to be culminated into a separate
        Sui Generis Enlightened Primordial Relic that can be called upon by the master of the Seed of Reality.
        Every single ability of this Relic carries the equivalent force of the current Infinite Reality and all
        the Realities fused into it. Under this Relic, the abilities of
        <transcendent weapon=”” manipulation=””>, <reality piercer=””>, <reality moon=”” eclipsor=””>,
        <sever>, <storm of=”” reality=””>, <firmament piercer=””>, <concept eradicator=””>,
        <ultimate spearmanship=””>, <cosmic thrower=””>, and <chronos ravager=””>
        are now available for use…</chronos></cosmic></ultimate></concept></firmament></storm>
        </sever></reality></reality></transcendent></atlatl>
        */

        ///([A-Z]{4}\!\s)+/.test('BOOM! BOOM! BOOM! BOOM! BOOM! BOOM! ')


        //olv.skip(/^Translator|^Editor:/g);
/*
        var v = new RegExp('You can read the story for free at '+window.location.host +'.*', 'ig');
      	while( v.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
        	olv.paragraph = (olv.paragraph+1);
        }
 */
        if( $(olv.site.content + ' p[para='+olv.paragraph+']').text() == '❌' ) {
          console.log(olv.paragraph, $(olv.site.content + ' p[para='+olv.paragraph+']'), $(olv.site.content + ' p[para='+olv.paragraph+']').text());
          speechSynthesis.stop();
          alert('code bug, text is somehow ❌');
          return false;
        }

        /*while( /[^a-z0-9]/ig.test($(olv.site.content + ' p[para='+olv.paragraph+']').text().trim()) ) {
         	olv.paragraph = (olv.paragraph+1);
        }*/

        //replaces slashes (update for only when first chr is /)
        //$(olv.site.content + ' p[para='+olv.paragraph+']').text( $(olv.site.content + ' p[para='+olv.paragraph+']').text().replace(/[\\\/]|[\\\/]/g, '') );

        //if( typeof olv.text != 'undefined' && olv.text != '' )

        if( typeof olv.site.read != 'undefined' && typeof olv.site.read == 'function' ) {
          olv.site.read();
        }

        if( typeof olv.selection == 'undefined' || typeof olv.selection == 'string' )
          olv.selection = window.getSelection().toString();

        if( olv.selection == '' && $(olv.site.content + ' > p[para]').length == 1 )
          olv.selection = $(olv.site.content + ' > p[para]').text();

        if( olv.selection == '' && $(olv.site.content).length == 1 && olv.content.length > 0 ) {
        	if( olv.paragraph >= olv.content.length || olv.paragraph >= (Number($(olv.site.content + ' > p[para]:last').attr('para'))+1) ) {
          	console.log('olv.paragraph, olv.content.length', olv.paragraph, olv.content.length);
          	//alert(1234);
            //if( $(olv.site.content + ' > p[para]').length == 1 )
            olv.reader.next();

         		return;
        	}

        	if( window.location.href.toString().indexOf('scribblehub') > 0 ) {
          	$('.olv.options select').val('Microsoft Zira Desktop - English (United States)')
        	}

        	olv.reader.scroller();

          //olv.text = $(olv.site.content + ' p[para='+olv.paragraph+']').clone();
          olv.text = $(olv.site.content + ' > p[para='+olv.paragraph+']').clone();
          if( olv.text.attr('class') != 'undefined' && olv.text.hasClass('mute') )
            olv.text.text('');
          olv.text.find('span.mute').remove();
          olv.text = olv.text.text();
          if( $(olv.site.content + ' p[para='+olv.paragraph+']').length && $(olv.site.content + ' p[para='+olv.paragraph+']').position().top > 0 )
          	$(olv.site.content + ' > div.focused').css({top:$(olv.site.content + ' p[para='+olv.paragraph+']').position().top});
          //$('div.focused').animate({top:$(olv.site.content + ' p[para='+olv.paragraph+']').position().top}, 50);

          //¶§
          $('.olv .fastforward').text('¶ '+olv.paragraph);
        }
        else if( olv.selection != '' ) {
          if( olv.text != olv.selection )
            if( speechSynthesis.speaking ) {
              olv.queue = GM_getValue('readingQueue') || [];
              olv.queue.push({'text': olv.selection});
              GM_setValue('readingQueue', olv.queue);
              $('.olv .play').show();
              $('.olv .pause').hide();
              return;
            }
            else {
              //quick and dirty solution
              if( typeof olv.indexRow == 'undefined' )
                olv.indexRow = 0;

              if( typeof olv.selection == 'string' )
                olv.selection = olv.selection.replace(/\r/g, "").replace(/\n\n/g, "\n").split('\n');

              olv.text = olv.selection[olv.indexRow];

              if( typeof olv.selection[olv.indexRow] == 'undefined' ) {
                olv.selection = '';
                olv.text = '';
                olv.indexRow = 0;
                $('.olv .play').show();
                $('.olv .pause').hide();
                return;
              }

              olv.indexRow = olv.indexRow+1;

              //olv.text = olv.selection;
            }
          else {
            $('.olv .play').show();
            $('.olv .pause').hide();
            olv.text = '';
            return;
          }
        }


					//console.log(olv.ws);
        if (false && olv.ws.readyState == 1)
          olv.speak_from_websocket();
        else
        	olv.speak_from_browser();
      };

      olv.speak_from_websocket = function(){
        $(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'underline');
      	olv.ws.send('say ' + olv.reader.phonetic(olv.text).replace(/["'‘’“”;]/g, ''));
        //olv.ws.send('play ' + $(olv.site.content + ' p[para='+olv.paragraph+']').index());
      };

      olv.speak_from_browser = function(){
      	$(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'underline');

        //text-decoration: underline;
        //console.log(olv.reader.phonetic($(olv.site.content + ' p[para='+olv.paragraph+']').text()));

        if( typeof olv.text == 'undefined' )
          return;

        olv.queue = GM_getValue('readingQueue') || [];
        if( olv.queue.length > 0 ) {
          olv.queue.push({'text':olv.text});
          olv.text = olv.queue.shift().text;
          GM_setValue('readingQueue', olv.queue);

          //maybe do something about the visiblility of the queue'd text
          $('<div class="readingQueue" style="background: #121212; border-color: #82A82D; border-radius: 4px !important; border: 1px solid #82A82D; margin: 0 0 6px; padding: 0 4px;"><p style="color: #82A82D !important; margin:0; padding:0;">'+olv.text+'</p></div>').insertBefore(olv.site.content + ' p[para='+olv.paragraph+']');
        }

        var utterThis = new SpeechSynthesisUtterance(olv.readbuffer + olv.reader.phonetic(olv.text));
        utterThis.default = false;
        //var utterThis = olv.utterThis
        //console.log($('.olv.options select')) //.get(olv.reader.voice).selectedOptions[0].getAttribute('data-name'));
        //GM_info.platform, GM_info.platform.browserName
        var selectedOption = $('.olv.options select:last-child').get(0).selectedOptions[0].getAttribute('data-name');
        var selectedLang = $('.olv.options select:last-child').get(0).selectedOptions[0].getAttribute('data-lang');
        //console.log(selectedOption, selectedLang, voices);
        /*for(i = 0; i < voices.length ; i++) {
          if(voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
            utterThis.lang = selectedLang;
            //console.log(voices[i]);
          }
        }*/
        var voices = window.speechSynthesis.getVoices();
        utterThis.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira - English (United States'; })[0];
        utterThis.lang = 'en-GB';

        utterThis.pitch = $('.olv.options #pitch').val();
        utterThis.rate = $('.olv.options #rate').val();
        utterThis.volume = $('.olv.options #volume').val() / 100;

        utterThis.onpause = function(event) {
    			var char = event.utterance.text.charAt(event.charIndex);
    			//console.log('Speech paused at character ' + event.charIndex + ' of "' +
    			//event.utterance.text + '", which is "' + char + '".');
  			}

        utterThis.onend = olv.speak_onend;

        olv.utterThis = utterThis;
        window.speechSynthesis.speak(utterThis);
      };


      olv.speak_onend = function(event) {
          if( olv.reader.stopped ) {
            return;
          }

          if( olv.queue.length > 0 ) {
            olv.text = olv.queue.shift().text;
            GM_setValue('readingQueue', olv.queue);
            olv.read();
            return;
          }

          $(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'none');
          olv.paragraph = (olv.paragraph+1);

          //console.log('olv.paragraph, olv.content.length', olv.paragraph, olv.content.length);
          if( typeof olv.content != "undefined" && olv.paragraph <= olv.content.length  && olv.content.length > 0 ) {
            //console.log('read next');
          	olv.read();
          }
          else {
           	$('.olv .play').show();
          	$('.olv .pause').hide();

            if( typeof olv.llm != 'undefined' && olv.llm.reading == 1 && jQuery('#messages-container p').length ) {
              if( typeof olv.llm.content != 'undefined' )
                olv.llm.content.css('text-decoration', 'none');
              olv.llm.read();
            }
              //olv.log('{"read":"end"}')
          }

        if( typeof olv.indexRow != 'undefined' )
          olv.read();

         	//console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
        };
      /*
      olv.buttons = [32, 37, 39, 65, 68];
      olv.clear_buttons = function(event) {
        olv.buttons.forEach(button => {
          if(event.which==button) {
            event.preventDefault();

            if( typeof event.stopPropagation == "function" ) {
             	 event.stopPropagation();
            }

            if( typeof event.stopImmediatePropagation == "function" ) {
             	 event.stopImmediatePropagation();
            }
          }
        });
			};

      $(document).off('keypress');
      $(document).on('keypress', olv.clear_buttons);

      $(document).off('keydown');
			$(document).on('keydown', olv.clear_buttons);

      $(document).off('keyup');
			$(document).on('keyup', function(event) {
        olv.clear_buttons(event);
				//if(event.which==32) event.preventDefault();
        if( $('.olv .console').is(':focus') ) {
         	if (event.keyCode == 13) { //return
            switch ($('.olv .console').val()) {
              case "play":
              case "r":
                olv.read();
              	break;
              case "init":
              case "i":
                	$('.olv .select_pos,.olv.parrot .auto,.olv .play,.olv .next').hide();
          				$('.olv .init').show();
                break;
              default:
           			eval($('.olv .console').val());
            }
          }

          return event;
        }

				if (event.keyCode == 32) { //space
          olv.read();
				}

        if (event.keyCode == 37) { //left
          window.speechSynthesis.stop();

          olv.paragraph = (olv.paragraph-1);
          olv.read();
        }

        if (event.keyCode == 39) { //right
          window.speechSynthesis.stop();

          olv.paragraph = (olv.paragraph+1);
          olv.read();
        }

        if (event.keyCode == 65) { //a
          olv.reader.auto = $('.olv.options .auto').prop('checked') ? 0 : 1;
          if( typeof olv.alert == "function" ) olv.alert('Play on load ' + olv.reader.auto ? 'disabled' : 'enabled');
         	$('.olv.options .auto').prop('checked', olv.reader.auto);
        	localStorage.setItem('olv.reader.auto', olv.reader.auto);
          return;
        }
			});
      //*/

      var hasGP = false;
    var repGP;

    function canGame() {
        return "getGamepads" in navigator;
    }

    function reportOnGamepad() {
        var gp = navigator.getGamepads()[0];
        var html = "";
            //html += "id: "+gp.id+"\n";

        for(var i=0;i<gp.buttons.length;i++) {
            //html+= "Button "+(i+1)+": ";
            if(gp.buttons[i].pressed) html+= "Button "+(i+1)+ "pressed\n";
            //html+= "<br/>";
          //html+= "\n";
        }

        //for(var i=0;i<gp.axes.length; i+=2) {
            //html+= "Stick "+(Math.ceil(i/2)+1)+": "+gp.axes[i]+","+gp.axes[i+1]+"\n";
        //}

        //$("#gamepadDisplay").html(html);
      console.log(html);
    }

      if(canGame()) {

            var prompt = "To begin using your gamepad, connect it and press any button!";
            //$("#gamepadPrompt").text(prompt);
        		console.log(prompt);

            $(window).on("gamepadconnected", function() {
                hasGP = true;
                //$("#gamepadPrompt").html("Gamepad connected!");
              	console.log("Gamepad connected!");
                console.log("connection event");
                //repGP = window.setInterval(reportOnGamepad,100);
              	reportOnGamepad();
            });

            $(window).on("gamepaddisconnected", function() {
                console.log("disconnection event");
                //$("#gamepadPrompt").text(prompt);
              	console.log(prompt);
                //window.clearInterval(repGP);
            });

            //setup an interval for Chrome
            /*var checkGP = window.setInterval(function() {
                console.log('checkGP');
                if(navigator.getGamepads()[0]) {
                    if(!hasGP) $(window).trigger("gamepadconnected");
                    window.clearInterval(checkGP);
                }
            }, 500);*/
        }

      //$(document, window).off('keypress');
      //$(document, window).off('keydown');
      //$(document).keydown(function(event){event.preventDefault();});

      //Event.stopObserving(document, 'keydown');

      /*$(document).on('keyup', function(event){
        console.log(event.keyCode, event);
      });*/

      $(document).off('keypress');
      $(document).on('keypress', function(event){
        //event.preventDefault();
        //event.stopPropagation();
        //console.log(event.keyCode, event);

        //process page console
        //Ye Song=Angele
        if (event.keyCode == 13) { //Enter

        }

        //if( typeof olv.keypress != 'undefined' )
          //olv.keypress(event);

        if( $('#list-page').length ) {
          if( 1 + [57].indexOf(event.keyCode) ) { //9
            if( $('li.next').hasClass('disabled') == false ) window.location = $('li.next > a:nth-child(1)').attr('href');

            return false;
          }
          if( 1 + [55].indexOf(event.keyCode) ) { //7
            if( $('li.prev').hasClass('disabled') == false ) window.location = $('li.prev > a:nth-child(1)').attr('href');

            return false;
          }
        }

        //return false;
      	if( $(':focus').length > 0 ) {
         	 return event;
        }

        if( typeof olv.keyconsole != 'undefined' && olv.keyconsole == 1 ) {
        	console.log(event.keyCode, event);
        }

        if( $(olv.site.content + ' > div.options').is(':visible') ) {
          var click = olv.site.content + ' > div.options ';
          switch(event.keyCode) {
            case 106: //j
              //olv.fn.p.jumpto();
              //$(olv.site.content + ' > div.options .jumpto').click();
              click += '.jumpto';
              break;
            case 110: //n
              //olv.fn.p.next();
              click += '.next';
              break;
            case 120: //x
              click += '.x';
              break;
            case 101: //e
              click += '.edit';
              break;
            case 114:
              click += '.remove';
              break;
            default:
              break;
          }

          if( 1 + [53].indexOf(event.keyCode) ) {
            click += '.jumpto';
          }

          if( click != olv.site.content + ' > div.options ' ) {
            $(click).click();
         		return event;
          }
        }

        if( 1 + [53, 106].indexOf(event.keyCode) ) {
          if( !speechSynthesis.speaking && olv.paragraph > 1 ) {
            olv.read();
            return event;
          }
          //enable keycode console log
          //olv.keyconsole = 1;
          olv.paragraph = (olv.paragraph - 1)
          speechSynthesis.cancel();
        }

        if( 1 + [48].indexOf(event.keyCode) ) { //toggle cut mode
            //
        }

        if( 1 + [49].indexOf(event.keyCode) ) { //browser back
            history.back();
        }

        if( 1 + [51].indexOf(event.keyCode) ) { //browser forward
            history.forward();
        }

        if (event.keyCode == 126) { //~

        }

        if( event.keyCode == 100 )
          olv.reader.next();

        if (event.keyCode == 67) { //C
          //enable keycode console log
          olv.keyconsole = 1;
        }

       	//if (event.keyCode == 32) { //space
        if( 1 + [32, 55].indexOf(event.keyCode) ) { //space or 7
          if( event.shiftKey ) {
            olv.reader.auto = ( $('.olv button.auto').text() == 'Manual' ? 1 : 0 );
        		$('.olv.options .auto').prop('checked', ( olv.reader.auto ? true : false ) );
        		$('.olv button.auto').text( (olv.reader.auto != 0 ? 'Auto ▶' : 'Manual') );
        		localStorage.setItem('olv.reader.auto', olv.reader.auto);
          }
          else {
         		//olv.read();
            if( $('.olv .pause:hidden').length ) {
          		olv.read();
        		}
        		else {
      				window.speechSynthesis.pause();
        			$('.olv .play').show();
        			$('.olv .pause').hide();
        		}

            if( window.speechSynthesis.paused == false && olv.autoRead == 1 ) {
              //olv.read();
              window.speechSynthesis.pause();
            }
          }
          return false;
        }

        if( 1 + [56].indexOf(event.keyCode) ) { //8
          olv.reader.auto = ( $('.olv button.auto').text() == 'Manual' ? 1 : 0 );
        	$('.olv.options .auto').prop('checked', ( olv.reader.auto ? true : false ) );
        	$('.olv button.auto').text( (olv.reader.auto != 0 ? 'Auto ▶' : 'Manual') );
        	localStorage.setItem('olv.reader.auto', olv.reader.auto);
        }

        if (event.keyCode == 69) { //E
          //enable edit mode
          //$(olv.site.content + ' > p').attr('contentEditable', true);
        }

        //73 == I
        if( event.keyCode == 73 ) {
          //console.log($(olv.site.content + ' > canvas.hover').attr('paragraph'));
          olv.paragraph = $(olv.site.content + ' > canvas.hover').attr('paragraph');
         	if( event.shiftKey && speechSynthesis.speaking ) {
            speechSynthesis.cancel();
            //olv.paragraph = $(olv.site.content + ' > canvas.hover').attr('paragraph');
            //console.log($(olv.site.content + ' > canvas.hover').attr('paragraph'));
           	//$(olv.site.content + ' > div.options').attr('paragraph', $(this).index());
          }
          olv.read();
          return false;
        }

        //if (event.keyCode == 63 || event.keyCode == 62 || event.keyCode == 93 | [52]) { //?
        if( 1 + [62, 63, 93, 54].indexOf(event.keyCode) ) {
          //enable keycode console log
          //olv.keyconsole = 1;
          console.log('next paragraph')
          speechSynthesis.cancel();

          //if( typeof olv.indexRow != 'undefined' )
            //olv.read();
        }

        //if (event.keyCode == 60 || event.keyCode == 91) { //?
        if( 1 + [60, 91, 52].indexOf(event.keyCode) ) {
          //enable keycode console log
          //olv.keyconsole = 1;
          $(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'none');
          olv.paragraph = (olv.paragraph - 2)
          speechSynthesis.cancel();
        }

        if( 1 + [57].indexOf(event.keyCode) ) {
          if( event.shiftKey )
            olv.preLoadNext = 0;

          olv.reader.next();
        }

        if (event.keyCode == 88) { //space
          if( event.shiftKey && speechSynthesis.speaking ) {
            speechSynthesis.cancel();
           	//olv.paragraph = (olv.paragraph+1);
            //olv.read();
          }
          return false;
        }
      });

      olv.textarea = function(){
      	switch ($('.olv .console').val()) {
       		case "play":
          case "r":
            olv.read();
          	break;
          case "save":
          case "remember":
            localStorage.setItem('olv.remember', window.location.href.toString());
            break;
          case "load":
            window.location.href = localStorage.getItem('olv.remember');
            break;
          case "init":
          case "i":
            	//$('.olv .select_pos,.olv.parrot .auto,.olv .play,.olv .next').hide();
          		//$('.olv .init').show();
          	break;
          default:
            if( /auto\:.*/ig.test($('.olv .console').val()) ) {
              //olv.reader.auto_count = parseInt($('.olv .console').val().replace(/[^0-9]/g, ''));
              localStorage.setItem('olv.reader.auto_count', parseInt($('.olv .console').val().replace(/[^0-9]/g, '')));
              $('.olv .console').val('');
              //localStorage.getItem('olv.reader.auto_count')
              return false;
            }
            if( /cl\:.*/ig.test($('.olv .console').val()) ) {
              console.log($('.olv .console').val())
              return false;
            }

            //if( /skip\:.*/ig.test($('.olv .console').val()) ) {

          	eval($('.olv .console').val());
          }

        	$('.olv .console').val('');
      }

      //$(document).on('keyup', '.olv .console', olv.textarea);

      olv.fn.dialog = function(){
        var def = {
          obj: '.olv .textarea',
          aniH: {
        				height: $(window).height() - 140
    					},
          aniE: {
        				height: '0px',
            		display: 'none'
    					}
        };

        if( $(def.obj).is(':hidden') ) {
      		$(def.obj).toggle();
        	$(def.obj).animate(def.aniH, 500);
        }
        else {
          $(def.obj).animate(def.aniE, 500);
          	setTimeout(function(){
          		$(def.obj).toggle();
          	}, 500);
        }
      };

      $(document).on('click', '.olv .dialog', olv.fn.dialog);

      $(document).on('click', '.olv .console_button', function(){
        if( $('.olv .console').is(':hidden') ) {
        	//$('.olv .console').text('');
        	//$('.olv .console').css('width', '300px');
          //$('.olv .console').css('padding', '2px 6px');
          $('.olv .console').toggle();
          $('.olv .console').animate({
        			width: '300px',
            	padding: '2px 6px'
    				}, 500);
        }
        else {
          if( $('.olv .console').val().length > 0 ) {
            olv.textarea();
          }
          else {
         		//$('.olv .console').text('');
          	$('.olv .console').animate({
        				width: '0px',
            		padding: '0px',
            		display: 'none'
    					}, 500);
          	setTimeout(function(){
          		$('.olv .console').toggle();
          	}, 500);
          }
        }
      });

      $(document).on('click', '.olv .play', function(){
        /*if( $('.olv .play').is(':hidden') ) {
      		$('.olv .play').show();
          $('.olv .pause').hide();
        }
        else {
         	$('.olv .play').hide();
          $('.olv .pause').show();
        }*/

        olv.read();
      });

      $(document).on('click', '.olv .stop', function(){
      	speechSynthesis.cancel();
      });

      $(document).on('click', '.olv .next', function(){
      	olv.reader.next();
      });

      $(document).on('click', '.olv .init', function(){
        switch ( $(this).text() ) {
          case "Init":
            $(this).text('Select Element 1');

            $(document).on('click', function(event){
              if( $(event.target).hasClass('init') ) {
               	$(event.target).text('Init');
              }
              else {
                if( $('.olv .init').text() == 'Select Element 2' ) {
                  if( $(event.target).prop("tagName") == 'P' ) {

                    if( $(olv.site.target).parent().attr('class') == $(event.target).parent().attr('class') ) {
                  		$('.olv .init').hide();
                    	olv.site.content = '.' + $(olv.site.target).parent().attr('class');
                      $('.olv .select_pos,.olv.parrot .auto,.olv .play,.olv .next').show();

                      olv.site.target = undefined;

                      var site = olv.site.site;
                      olv.site.site = undefined;

                      localStorage.setItem('olv.sites.' + site, JSON.stringify(olv.site));
                    }
                    else {
                      $('.olv .init').text('Init');
                    }

                    $(document).off('click');
                  }
                }
                if( $('.olv .init').text() == 'Select Element 1' ) {
                  if( $(event.target).prop("tagName") == 'P' ) {
                  	$('.olv .init').text('Select Element 2');
                    olv.site.target = event.target;
                  }
                }
            		//console.log('this', $(event.target).hasClass('init'), event.target, $(this).prop("tagName"));
              }
            });
            break;
          default:
            break;
        }
      });

      if ( typeof olv.select == 'undefined' ) {
       	olv.select = {
          val:0,
          to: function(){
          	olv.select.val = 0;
            console.log('trigger timeout');
          },
          fn: function(){
            if( olv.select.val == 0 ) {
              setTimeout(olv.select.to, 1000);
            }

          	if( olv.select.val < 3 ) {
             	 olv.select.val = (olv.select.val + 1)
            }
            else {
             	olv.select.val = 0;
              console.log('trigger pos');
              olv.select.pos($(this));
            }
          },
          pos: function(obj){
          	if( typeof olv.paragraph != 'undefined' ) {
             	$(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'none');
            }

            $('.olv .select_pos').text('Select Pos');
          	olv.paragraph = obj.index();
            localStorage.setItem('olv.last.chapter.p', olv.paragraph);

   					obj.addClass('olv_selected');

            //fixes index bug
            /*while( !$(olv.site.content + ' p[para='+olv.paragraph+']').hasClass('olv_selected') ) {
              olv.paragraph = (olv.paragraph + 1)
            }*/

            obj.removeClass('olv_selected');

            if( speechSynthesis.speaking ) {
             	olv.paragraph = (olv.paragraph - 1)
            }
            else if( speechSynthesis.paused ) {
             	speechSynthesis.cancel();
              olv.read();
            }
          }
        };
      }

      olv.isMobile = function() {
  			let check = false;
  			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  			return check;
			};

      //console.log('window.innerWidth < window.innerHeight', window.innerWidth < window.innerHeight, olv.isMobile());

      if( olv.isMobile() ) {
       	$('.olv.parrot .btn').css({'font-size':'26px'});
        $('.olv.parrot .play,.olv.parrot .next').css({'padding':'2px 12px'});
      }

      olv.resize = function(){
        //console.log('window.innerWidth > window.innerHeight', window.innerWidth > window.innerHeight);

        if( $('p[para][style="text-decoration: underline;"]').length == 1 ) {
          var t = $('p[para][style="text-decoration: underline;"]').offset().top - olv.site.addition;

          //fix weird scroll to top bug?
          if( t > 0 )
          	$([document.documentElement, document.body]).animate({
        			scrollTop: t
    				}, 500);

          $('div.focused').animate({
        		top:$('p[para][style="text-decoration: underline;"]').position().top
    			}, 250);
        }

      };

      //enable show when #cf-wrapper is visible

      //select_hover
      $(window).on('resize', olv.resize);

      $(window).bind('beforeunload',function(){
        /*if( $('.olv .textarea').val().length ) {
         	localStorage.setValue("olv.dialog", $('.olv .textarea').val());
        }*/

        //return 'are you sure you want to leave?';
      });

      $(document).on('click', olv.site.content + ' p', olv.select.fn);

      $(document).on('click', '.olv .select_pos', function(){
        if( olv.select_pos != 1 ) {
        	olv.select_pos = 1;
          $('.olv .select_pos').text('Cancel');

        	$(document).on('click', olv.site.content + ' p', function(){
          	olv.select_pos = 0;
          	$(document).off('click', olv.site.content + ' p');
            $(document).on('click', olv.site.content + ' p', olv.select.fn);
            olv.select.pos($(this));
        	});
        }
        else {
          olv.select_pos = 0;
          $(document).off('click', olv.site.content + ' p');
          $('.olv .select_pos').text('Select Pos');
        }
      });

      $(document).on('click', '.olv .pause', function(){
        if( $('.olv .pause:hidden').length ) {
          olv.read();
        }
        else {
      		window.speechSynthesis.pause();
        	$('.olv .play').show();
        	$('.olv .pause').hide();
        }
      });

      $(document).on('click', '.olv .fastforward', function(){
      	window.speechSynthesis.cancel();
      });

      if(false)
      $(window).on('scroll touchmove mousewheel', function(event){
        //console.log($(':hover').last(), $(':hover').last().hasClass('fastforward'));
        if( $(':hover').last().hasClass('fastforward') ) {
          event.preventDefault();
          event.stopPropagation();
          //$("body").css("overflow", "hidden");

          return false;
        }

        //$("body").css("overflow", "visible");
      });

      if(false)
      $(document).on('wheel', '.olv .fastforward', function(event){
        event.preventDefault();
        event.stopPropagation();
        var current = $(window).scrollTop();
        //$(window).scrollTop(current - 14);
      	//window.speechSynthesis.cancel();

        // deltaY obviously records vertical scroll, deltaX and deltaZ exist too.
        // this condition makes sure it's vertical scrolling that happened
        console.log('delta, y, x', event.originalEvent.deltaY, event.originalEvent.deltaX);
        if(event.originalEvent.deltaY !== 0){

        	if(event.originalEvent.deltaY < 0){
        		// wheeled up
            //olv.paragraph = olv.paragraph - 2;
        	}
        	else {
        		// wheeled down

         	}

          //window.speechSynthesis.cancel();
        }

        return false;

        /*if( e.originalEvent.wheelDelta /120 > 0 ) {
         	//up
        } else {
          //down
        }*/
      });

      $(document).on('click', '.olv.options .optclose', function(){
      	$('.olv.options').hide();
      });

      $(document).on('change', '.olv.options .auto', function(){
        olv.reader.auto = $(this).prop('checked') ? 1 : 0;
        $('.olv button.auto').text( (olv.reader.auto != 0 ? 'Auto ▶' : 'Manual') );
        localStorage.setItem('olv.reader.auto', olv.reader.auto);
      }); //(olv.reader.auto != 0 ? 'Auto ▶' : 'Manual')

      $(document).on('click', '.olv button.auto', function(){
        //if( typeof ghost != 'undefined') { ghost.remove(); } ghost = $('.olv button.auto').clone(); ghost.css({'position': 'absolute', 'z-index': 900}); $('.olv button.auto').before( ghost ); ghost.animate({top: -(ghost.height()+12)}, 300);
        olv.reader.auto = ( $(this).text() == 'Manual' ? 1 : 0 );
        $('.olv.options .auto').prop('checked', ( olv.reader.auto ? true : false ) );
        $('.olv button.auto').text( (olv.reader.auto != 0 ? 'Auto ▶' : 'Manual') );
        localStorage.setItem('olv.reader.auto', olv.reader.auto);
      });

      $(document).on('change', '.olv.options .auto_next', function(){
        olv.reader.auto_next = $(this).prop('checked') ? 1 : 0;
        localStorage.setItem('olv.reader.auto_next', olv.reader.auto_next);
      });

      $(document).on('change', '.olv.options .socket', function(){
        olv.reader.socket = $(this).val();
        localStorage.setItem('olv.reader.socket', olv.reader.socket);
      });

      $(document).on('change', '.olv.options .status', function(){
        olv.status = $(this).val();
        localStorage.setItem('olv.status', olv.status);
      });

      $(document).on('change', '.olv.options .archive', function(){
        olv.reader.archive = $(this).prop('checked') ? 1 : 0;
        localStorage.setItem('olv.reader.archive', olv.reader.archive);
      });

      $(document).on('change', '.olv.options .auto_on_play', function(){
        olv.reader.auto_on_play = $(this).prop('checked') ? 1 : 0;
        localStorage.setItem('olv.reader.auto_on_play', olv.reader.auto_on_play);
      });

      $(document).on('change', '.olv.options .combine_paragraphs', function(){
        olv.combine_paragraphs = $(this).prop('checked') ? 1 : 0;
        localStorage.setItem('olv.combine_paragraphs', olv.combine_paragraphs);
      });

      $(document).on('change', '.olv.options .broken_sentences', function(){
        olv.broken_sentences = $(this).prop('checked') ? 1 : 0;
        localStorage.setItem('olv.broken_sentences', olv.broken_sentences);
      });

      $(document).on('change', '.olv.options .paragraph_length', function(){
        olv.paragraph_length = $(this).val();
        localStorage.setItem('olv.paragraph_length', olv.paragraph_length);
      });

      //combine_paragraphs || 0, paragraph_length: || 7,

      $(document).on('change', '.olv.options .delete_status', function(){
        olv.delete_status = $(this).prop('checked') ? 1 : 0;
        localStorage.setItem('olv.delete_status', olv.delete_status);
        $('.olv .status_field').toggle();
      });

      $(document).on('change', '.olv.options .hide_removed', function(){
        olv.hide_removed = $(this).prop('checked') ? 1 : 0;
        localStorage.setItem('olv.hide_removed', olv.hide_removed);
        $(olv.site.content + ' .removed').toggle();
      });

      $(document).on('change', '.olv.options select', function(){
        olv.reader.voice = $(this).find('option[data-name="'+$(this).val()+'"]').index();
        localStorage.setItem('olv.reader.voice', olv.reader.voice);
      });

      $(document).on('change', '.olv.options #pitch', function(){
        olv.reader.pitch = $(this).val();
        $('.pitch-value').text( olv.reader.pitch );
        localStorage.setItem('olv.reader.pitch', olv.reader.pitch);
      });

      $(document).on('change', '.olv.options #rate', function(){
        olv.reader.rate = $(this).val();
        $('.rate-value').text( olv.reader.rate );
        localStorage.setItem('olv.reader.rate', olv.reader.rate);
      });

      $(document).on('change', '.olv.options #volume', function(){
        olv.reader.volume = $(this).val() / 100;
        $('.volume-value').text( olv.reader.volume * 100 );
        localStorage.setItem('olv.reader.volume', olv.reader.volume);
      });

      $(document).on('change', '.olv.options .scroll input[type="radio"]', function(){
        olv.reader.scroll = $(this).val();
        //console.log($(this).val());
        localStorage.setItem('olv.reader.scroll', olv.reader.scroll);
      });

      $(document).on('input', '.olv.options #rate', function(){
        $('.rate-value').text( $(this).val() );
      });

      $(document).on('input', '.olv.options #pitch', function(){
        $('.pitch-value').text( $(this).val() );
      });

      $(document).on('click', '.olv button.btn', function(){
        $(this).blur();
      });

      //⏸ ▶ ⏯

      //add_to_dash.html('<span class="hidden-xs">🗣️</span>');
      add_to_dash.html('🦜');

      //add_to_dash.css('right', $(window).width() - button.position().left - button.width());
      //add_to_dash.css('left', button.width());
      /*add_to_dash.css('top', 0);
      add_to_dash.css('margin-top', 0);
      add_to_dash.css('position', 'absolute');
      add_to_dash.css('right', '15px');
      */
      add_to_dash.removeClass('toggle-nav-open');
      //add_to_dash.removeClass('btn-responsive');

      add_to_dash.unbind();
      /*add_to_dash.on( "click", function() {
				console.log( $( this ).text() );
			});*/
      //add_to_dash.on( "click", olv.dashboard.add);

      //$( add_to_dash ).insertBefore( button );
      //$( add_to_dash ).appendTo( btn );
      //*/
      //*

      if( window.location.href.toString().indexOf('mylovenovel.com/Rise-of-the-Godking') > 0 ) {
        //console.log('fixing');
        $('#content script, #content ins').remove();
        var lines = $('#content').html().split('<br><br>');
        //console.log(lines);

        $('#content').html('<p>' + lines.join('</p><p>') + '</p>');
        if( $('#content p:last-child').text() == 'to read the latest chapters for free' ) {
         	 $('#content p:last-child').remove();
        }
        if( $('#content p:last-child').text() == 'Please go to' ) {
         	 $('#content p:last-child').remove();
        }
        olv.content = $('#content').children();
      }

      //fix divine system bugs
      if( window.location.href.toString().indexOf('novelhall.com/The-Divine-Anime-System') > 0 ) {
        //console.log('fixing');
        $('#htmlContent script, #htmlContent ins').remove();
        var lines = $('#htmlContent').html().split('<br><br>');
        //console.log(lines);

        $('#htmlContent').html('<p>' + lines.join('</p><p>') + '</p>');
        olv.content = $('#htmlContent').children();
      }

      if( $(olv.site.content + " p:last-child a").length > 0 ) {
       	 $(olv.site.content + " p:last-child").remove();
      }

      //remove status from Nanomancer.
      //#chr-content > p
      //if( window.location.href.toString().indexOf('nanomancer-reborn') > 0 ) {
      //if( window.location.href.toString().indexOf('readnovelfull') > 0 ) {
        //console.log('novel nano, tags: ', $(olv.site.content + ' p').length);
        olv.nano_status = 0;

      	$(olv.site.content + " > p, " + olv.site.content + " > h3").each(function(i, e){
          //console.log(/^\[Name\:,/.test($(this).text().trim()), $(this).text().trim());

          if( window.location.href.toString().indexOf('readnovelfull') > 0 ) {
          if( /^\[Name/.test($(this).text().trim()) ) {
           	 olv.nano_status = 1;

            //$(this).text($(this).text().replace(/\[Name\:/, '') + "'s Status")
            //console.log('nano_status start');
          }

          if(olv.nano_status) {
           	if(/\]$/.test($(this).text().trim())) {
              olv.nano_status = 0;
              //console.log('nano_status end');
            }

            if( olv.delete_status == 1 ) {
            	$(this).remove();
            }
          }
					//if($(this).text().indexOf('lightno')>0){
						//$(this).remove();
					//}

          if( /\/p>/.test($(this).text()) ) {
           	$(this).remove();
          }

          //
          //N00 thousand
          //if( /[0-9,]{7}/.test($('#chr-content > p:nth-child(37)').text()) )
          //if( /\s[0-9]{3},[0-9]{3}/.test($('#chr-content > p:nth-child(37)').text()) )

          ///([a-z]{1}\.){3}/.test($('#chr-content > p:nth-child(120)').text())
          //$("#chr-content > p").each(function(i, e){
						if(/\'[^a-zA-Z]+(\!)+\'/.test($(this).text())){
						v=$(this).text().replace(/\'[^a-zA-Z]+(\!)+\'/, function(e){return e.replace(/[^a-z]*(\!)+/, "'Fuck!");});
						//console.log(v);
              $(this).text(v);
						}
					//});

          if( /[^A-Za-z0-9\?\s\!\.]{3}/g.test($(this).text()) ) {
           	$(this).text( $(this).text().replace(/[^A-Za-z0-9\?\s\!\.]{3}/g, '') );
          }

          //remove censor
          /*var obj = {
            Autesh:/atesh/ig,
            bitch:/b\*tch/ig,
          	fuck:/f\*ck/ig,
            shit:/sh\*t/ig,
            cunt:/c\*nt/ig,
            bastard:/b\*stard/ig
            };
          //*/

          //var obj = $(this);
          //var list = olv.word.list;
          //if( /\*/.test($(this).text()) )
          olv.uncensor($(this), olv.word.list);

          //$('#chr-content > p:nth-child(64)').text().replace(/f\*ck/ig, function(e){
          	//console.log(e); return e.replace('*', 'u');
        	//});
					//'fuck'['f*ck'.indexOf('*')]
          /*Object.keys(word).forEach(key => {
            //console.log(key, obj[key]);
            if( list[key].test(obj.text()) ) {
              console.log(obj.text());
             	obj.text( obj.text().replace(list[key], key) );
            }
          });

      		/*if( /f\*ck/.test($('#chr-content > p:nth-child(21)').text()) ) {
           	 $(this).text( $(this).text().replace(/f\*ck/ig, 'fuck') );
          }

          if( /sh\*t/.test($('#chr-content > p:nth-child(21)').text()) ) {
           	 $(this).text( $(this).text().replace(/sh\*t/ig, 'shit') );
          }*/
				//});
          }

          //.:*・°☆...:*・KYLE .:*・°☆...:*・
          //'.:*・°☆...:*・.:*・°☆...:*・ '.indexOf('☆')
          //✿✿ Student Council Office ✿✿

          //strip comma from numbers
          if( /[0-9],[0-9]{3}/.test($(this).text()) ){
						v=$(this).text().replace(/[0-9],0/g, function(e){return e.replace(',', '');});
            $(this).text(v);
          }

          //strip slash from between numbers
          if( /[0-9]\/[0-9]/.test($(this).text()) ){
						v=$(this).text().replace(/[0-9]\/[0-9]/g, function(e){return e.replace('/', ' out of ');});
            $(this).text(v);
          }

          if( /([A-Z]{1}\.){2}/.test($(this).text()) ) {
						$(this).html($(this).html().replace(/[^A-Z\.\s]*([A-Z]{1}\.)+[A-Z]{1}[^A-Z]*/g, function(e){
              return e.replace(/\./g, '');
            }));
          }
          //should find b.r.e.a.s.t, f.u.c.k.i.n.g and f.u.c.k
          if( /([a-z]{1}\.){2}/.test($(this).text()) ) {
            //console.log($(this).prop("tagName"));
						$(this).html($(this).html().replace(/[^a-z\.\s]*([a-z]{1}\.)+[a-z]{1}[^a-z]*/g, function(e){
              return e.replace(/\./g, '');
            }));
          //works for b.r.e.a.s.t, f.u.c.k.i.n.g and f.u.c.k
          //$('#chr-content > p:nth-child(120)').text().replace(/[^a-z\.\s]*([a-z]{1}\.)+[a-z]{1}[^a-z]*/g, function(e){ console.log(e.replace(/\./g, '')); return e; })
          //$('#chr-content > p:nth-child(82)').text().replace(/[^a-z\.\s]*([a-z]{1}\.)+[a-z]{1}[^a-z]*/g, function(e){ return e.replace(/\./g, ''); })
          }

          if( /([a-z]{1}_){2}/.test($(this).text()) ) {
            //console.log($(this).prop("tagName"));
						$(this).html($(this).html().replace(/[^a-z_\s]*([a-z]{1}_)+[a-z]{1}[^a-z]*/g, function(e){
              return e.replace(/_/g, '');
            }));
          //works for b.r.e.a.s.t, f.u.c.k.i.n.g and f.u.c.k
          //$('#chr-content > p:nth-child(120)').text().replace(/[^a-z\.\s]*([a-z]{1}\.)+[a-z]{1}[^a-z]*/g, function(e){ console.log(e.replace(/\./g, '')); return e; })
          //$('#chr-content > p:nth-child(82)').text().replace(/[^a-z\.\s]*([a-z]{1}\.)+[a-z]{1}[^a-z]*/g, function(e){ return e.replace(/\./g, ''); })
          }
        });
      //}

      $(olv.site.content + " > p, " + olv.site.content + " > h3").each(function(i, e){



        //remove bang
          if( /Bang\!/ig.test($(this).text()) ){
						v=$(this).text().replace(/Bang\!/ig, function(e){return e.replace('', '');});
            $(this).text(v);
          }

          if( /Boom\!/ig.test($(this).text()) ){
						v=$(this).text().replace(/Boom\!/ig, function(e){return e.replace('', '');});
            $(this).text(v);
          }

          if( /Bo[o]+m\!/ig.test($(this).text()) ){
						v=$(this).text().replace(/Bo[o]+m\!/ig, function(e){return e.replace('', '');});
            $(this).text(v);
          }

          if( /Clang\!/ig.test($(this).text()) ){
						v=$(this).text().replace(/Clang\!/ig, function(e){return e.replace('', '');});
            $(this).text(v);
          }

          if( /Swoosh\!/ig.test($(this).text()) ){
						v=$(this).text().replace(/Swoosh\!/ig, function(e){return e.replace('', '');});
            $(this).text(v);
          }

          if( /Slash\!/ig.test($(this).text()) ){
						v=$(this).text().replace(/Slash\!/ig, function(e){return e.replace('', '');});
            $(this).text(v);
          }

          if( /Splash\!/ig.test($(this).text()) ){
						v=$(this).text().replace(/Splash\!/ig, function(e){return e.replace('', '');});
            $(this).text(v);
          }

          if( /Raor\!/ig.test($(this).text()) ){
						v=$(this).text().replace(/Raor\!/ig, function(e){return e.replace('', '');});
            $(this).text(v);
          }

      });

      if( $(olv.site.content + ' p').length == 0 && $(olv.site.content + ' br').length > 0 ) {
        //console.log('fixing');
        $(olv.site.content + ' script, ' + olv.site.content + ' ins').remove();
        var lines = $(olv.site.content).html().split('<br><br>');
        //console.log(lines);

        $(olv.site.content).html('<p>' + lines.join('</p><p>') + '</p>');
        /*if( $('#content p:last-child').text() == 'to read the latest chapters for free' ) {
         	 $('#content p:last-child').remove();
        }
        if( $('#content p:last-child').text() == 'Please go to' ) {
         	 $('#content p:last-child').remove();
        }*/
        olv.content = $(olv.site.content).children();

        if( $('#chapter-entity p a').length > 0 ) {
         	$('#chapter-entity p a').parent().remove();
        }
      }

      if( window.location.href.toString().indexOf('unlimited-power-the-arcane-path') > 0 ) {
        olv.nano_status = 0;

        $(olv.site.content + " > p, " + olv.site.content + " > h3").each(function(i, e){
          if( /^Health\:.*\+/ig.test($(this).text().trim()) ) {
           	 olv.nano_status = 1;

            //$(this).text($(this).text().replace(/\[Name\:/, '') + "'s Status")
            //console.log('nano_status start');
          }

          if(olv.nano_status) {
           	if(/^Passive\sSkills\:.*/ig.test($(this).text().trim())) {
              olv.nano_status = 0;
              //console.log('nano_status end');
            }

            if( olv.delete_status == 1 ) {
            	$(this).remove();
            }
          }
        });
      }

      //check if text out of paragraph tag
      if( $(olv.site.content).contents().filter(function(){return this.nodeType === 3;}).length ) {
        $(olv.site.content).contents().filter(function(){return this.nodeType === 3;}).wrap( "<p></p>" );
      }

      if( $(olv.site.content + ' .chapter-entity').contents().filter(function(){return this.nodeType === 3;}).length ) {
       	 //alert( $(olv.site.content + ' .chapter-entity').contents().filter(function(){return this.nodeType === 3;}).text() );
        $(olv.site.content + ' p:first-child').append('<p>' + $(olv.site.content + ' .chapter-entity').contents().filter(function(){return this.nodeType === 3;}).text() + '</p>');
        $(olv.site.content + ' .chapter-entity').contents().filter(function(){return this.nodeType === 3;}).remove();
        //$(olv.site.content + ' .chapter-entity').remove();
      }

      if( olv.uri('end-of-the-magic-era') ) {
       	if( $(olv.site.content + ' .chapter-entity').length ) {
          //$(olv.site.content + ' .chapter-entity').text();
         	//$(olv.site.content + ' .chapter-entity').append('<p>' + $(olv.site.content + ' .chapter-entity').text() + '</p>');
          $(olv.site.content + ' .chapter-entity').contents().filter(function(){return this.nodeType === 3;}).wrap( "<p></p>" );
        }
      }

      //$('.breadcrumb a:last').text()
      if( typeof olv.site.content != 'undefined' && (olv.site.content.length < 10 || $(olv.site.content).children().length - $(olv.site.content + ' p').length < 10) ) {
         	paragraphs = $(olv.site.content + ' p');
					$(olv.site.content).html();
					$(olv.site.content).append(paragraphs);
          olv.content = $(olv.site.content).children();
      }

      $(olv.site.content + " > p, " + olv.site.content + " > h3").each(function(i, e){
        //clear slashes
        if( $(this).text().split('\"').length > 1 ) {
         	$(this).text($(this).text().replace(/\\/g, ''));
        }

        if( $(this).find('span[data-text]').length ) {
         	$(this).find('span[data-text]').text($(this).find('span[data-text]').attr('data-text'));
          $(this).find('span[data-text]').attr('data-text', '');
        }

        //console.log($(this).text());

        olv.uncensor($(this), olv.word.list);
      });

      if( $(olv.site.content + " > div#content").length ) {
        paragraph = $(olv.site.content + ' > div#content').contents().wrap( "<p></p>" );
        $(olv.site.content + ' > p:eq(0)').prepend(paragraph);
        //olv.content = $(olv.site.content).children();
      }

      if( $(olv.site.content + " > div:eq(0)").length && $(olv.site.content + " > div:eq(0)").index() < 10 ) {
        paragraph = $(olv.site.content + ' > div:eq(0)').contents().wrap( "<p></p>" );
        $(olv.site.content + ' > p:eq(0)').prepend(paragraph);
        //olv.content = $(olv.site.content).children();
      }

      if( typeof olv.status == 'undefined') {
        olv.status = {};
      }

      if( window.location.href.toString().indexOf('level-up-legacy') > 0 ) {
       	olv.status = {'start':/\[Scholar Guardian's Legacy\]/,'end':/\[Skills\:.*\]/};
      }

      if( window.location.href.toString().indexOf('the-guardians-throne-the-first-magic-swordsman') > 0 ) {
        olv.status.start = /^Health\:.*\+/ig;
        olv.status.end = /^Lesser\sHeal.*/ig;
      }

      if( olv.uri('god-of-tricksters') ) {
        olv.status.start = /^Name\:.*/ig;
        olv.status.end = /^Free\sAttribute\sPoints\:.*/ig;
      }

      if( olv.uri('blood-warlock-succubus-partner-in-the-apocalypse') ) {
        olv.status.start = /^\[Bai\sZemin.*/ig;
        olv.status.end = /^\[Strength.*Agility.*Health.*Stamina.*Mana.*Magic*/ig;
      }

      if( olv.uri('infinite-mana-in-the-apocalypse') ) {
       olv.status.start = /^\[.*\]\[Occupation\:.*/ig;
        olv.status.end = /^\[Equipment\:.*/ig;
      }

      if( olv.delete_status == 1 && typeof olv.status.end != 'undefined' ) {
        olv.nano_status = 0;

        $(olv.site.content + " > p, " + olv.site.content + " > h3").each(function(i, e){
          if( olv.status.start.test($(this).text().trim()) ) {
           	 olv.nano_status = 1;

            //$(this).text($(this).text().replace(/\[Name\:/, '') + "'s Status")
            //console.log('nano_status start');
          }

          if(olv.nano_status) {
           	if(olv.status.end.test($(this).text().trim())) {
              olv.nano_status = 0;
              //console.log('nano_status end');
            }

            $(this).remove();
          }
        });
      }

      /*if( $(olv.site.content + ' > div > p').length == 0 ) {
         $(olv.site.content + ' > div').remove();
      }
      else {
         $(olv.site.content + ' > div > p').unwrap();
      }*/

      if( $(olv.site.content + ' > h3').length > 5 ) {
        $(olv.site.content + ' > h3').each(function(){
          if( $(this).index() > 5 ) {
        		$(this).replaceWith( '<p>' + $(this).text() + '</p>' );
          }
      	});

        olv.content = $(olv.site.content).children();
      }

      if( typeof olv.remove == 'undefined' ) {
       	olv.remove = {};
      }//â€”

      if( typeof olv.replace == 'undefined' ) {
       	olv.replace = {};
      }

      if( typeof olv.line == 'undefined' ) {
       	olv.line = {};
      }

      olv.remove.line = function(line){ return line.addClass('removed').attr('title', 'removed at line 1833'); }; //.before('<div class="removed" style="position: absolute; margin-left:-30px;">❌</div>'); };
			olv.replace.line = function(line, reg, fill = ''){ return line.replace(reg, fill); };
      olv.line.replace = function(line, reg, fill = ''){
      	if( reg.test(line) )
          line.replace(reg, fill);
        return line;
      };

      if( $(olv.site.content + ' > p script').length )
        $(olv.site.content + ' > p script').remove();

      var char_title = ( $('.chapter-title:eq(0)').length > 0 ) ? $('.chapter-title:eq(0)').text().trim().replace(/^Chapter[\s]+[0-9]+[^A-Za-z]*|^Ch\.[\s]+[0-9]+:/, '') : '';
      //$(olv.site.content + ' > div.focused').text( (olv.text.match(/"|”|“/g) || []).length );
          //I’ll take care of it for you.” Roland did not want to take advantage of him. “It’s very comfortable living in the Magic Tower, and convenient.”

      if( $(olv.site.content + ' > p:contains("Chapter")').length == 1 && $(olv.site.content + ' > :header:contains("Chapter")').length == 0 )
        $(olv.site.content + ' > p:contains("Chapter")').replaceWith('<h3>'+$(olv.site.content + ' > p:contains("Chapter")').text()+'</h3>');

      $(olv.site.content + ' > p').each(function(){

        if( /([a-zA-Z]).*(\1)(\1)(\1)(\1)/.test($(this).text()) ) {
          var rep = $(this).text().match(/([a-zA-Z]).*(\1)(\1)(\1)(\1)/).pop();
          var max_len = $(this).text().length;
          var i = 0;

        while( /([a-zA-Z]).*(\1)(\1)(\1)(\1)/.test( $(this).text() ) ) {
          $(this).text( $(this).text().replace(rep + rep + rep, rep) );
          i=i+1;

          if( i > max_len )
            break;
        }

        }

        $(this).text( olv.line.replace($(this).text(),/”/,'” ') );
        $(this).text( olv.line.replace($(this).text(),/”  /,'” ') );
        $(this).text( $(this).text().replace(/[^A-Za-z0-9]([A-Za-z0-9]\?)+/g, function(i,l){return i.replace(/\?/g, '');}) );

       	if($(this).text().trim() && $(this).text().trim().length > 5){
          if( $(this).attr('class') !== undefined )
            $(this).removeAttr('class');
          if( $(this).text().indexOf(char_title) > 0 ) {
            //$(this).text( $(this).text().substr( $(this).text().indexOf(char_title) + char_title.length + 1 ) );
           	 //$(this).css('color', 'purple');
          }
          //if index less then 2, starts with numbers and ends without punctuation, probably chapter title
          if( $(this).index() < 2 && /^[0-9]+/.test($(this).text().trim()) && /[A-Za-z0-9]+$/.test($(this).text().trim()) )
            $(this).addClass('olv-chapter');
          if( $(this).text().trim().match(/Chapter[\s]+[0-9]+|^Ch\.[\s]+[0-9]+:|^[0-9]+\sChapter\s[0-9]+.*/) ) {
            //$(this).addAttr('hasChapter', 1);
            $(this).addClass('olv-chapter');
            //$(this).replaceTag('<h3>', true);
            if($(this).text().trim().length > $('.chapter-title:eq(0)').text().trim().length){
              //console.log( $(this).text().trim().length > $('.chapter-title:eq(0)').text().trim().length, $(this).text().trim() );
              //$(this).text( $(this).text().substr( $(this).text().indexOf(char_title) + char_title.length + 1 ) );
              //$(this).css('color', 'purple');
              //$(this).addClass('olv-chapter');
            }
          }
          if( $(this).text().trim().match(/^Author’s Notes|App’s Notes|^And don't forget to follow our baby's nanny's Ins|^And don’t forget to follow our baby’s nanny’s Instagram|^"You shall devote all of your power stones to the great me|^WANT MORE CHAPTERS|Spinny Spinny|^TL Note|Zen_ Zen_|Translator's Thoughts|^[=]+$|A\/N]|yuxenji ryuxenji|»————-　✼　————-««|Translator’s note|Translator's Thoughts|\* \* \* \* \* \* \*/i) && $(this).index() > 30) {
            $(this).addClass('end');
            //$(olv.site.content + ' > p').slice( $(this).index()-1 ).addClass('skip');
            olv.remove.line( $(olv.site.content + ' > p.end ~') );
            olv.remove.line( $(this) );
            //return;
          }
          //if( $(this).text().trim().match(/This chapter upload first at 🅽🅾🆅🅴🅻🅱🅸🅽.🅽🅴🆃|Thank you for reading on AllNovelFull.*|AN: If you're not reading this|Author: Gu Rong Rong MACHINE TRANSLATION|Updates by vip novel. com|Translator Nyoi-Bo Studio \| Editor. Nyoi-Bo Studio|readnovelfull|Webnovel\.com|^[0-9A-Za-z]{1}$|^The latest_epi_sodes are on_the ʟɪʙʀᴇᴀᴅ.ᴄᴏᴍ.*$|^Visit.*nove.*com to read, pls\!$|^Reading on.*n o v el.*Please!$|^Reading on.*xno vel.*Please\!$|^Please reading.*COM$|^Continue[\s_]reading on.*COM$|The source of this content.*|😉|ReadNovelFull\.m.*|^Atlas Studios$|Editor:[^.!,]*$|Cooldown: N\/A|Please support the translator by reading onvolarenovels\!|Misty Cloud Translations|Translator.*Translations.*Editor.*Translations|If you have problems with this website.*please continue reading your novel on our new website myTHANKS.*|COMMENT|Visit our comic site Webnovel.*|window.*push|New_chap_ters are pub_lished on ᴡᴇʙɴᴏᴠᴇʟᴘᴜʙ_ᴄᴏᴍ|Visit .*, for the best .* experience$|FacebookTwitterMore|Read latest Chapters at WuxiaWorld.*|Please go and support our new domain.*|.*chapters.*Patreon.*|.*lightno.*elworld.*|.*novel.*light.*world.*|hanks for supporting us|.*out of.*hapter.*sponsored by.*|Alternatively.*ads.*subscribe.*subscription you will enjoy an ad-free experience.*VIP chapter.*|Currently.*our readers have turned their ad-block.*|Alternatively.*you could also subscribe for only.*Disabled for now.*subscription you will enjoy an ad-free experience.*have access to all the VIP.*|Edited by.*|Sponsored by.*|Translated by.*|.*novel is a contracted work with.*If.*not reading this chapter on.*it has been stolen.*very discouraging to see thieves profitting from my hard work.*Thank you.*|Author only posts on webnovel|Read more chapter on AllNovelFull|Original translation.*om|Previous Table of Content Not released.*Return to info 2 out of 3|Read latest chapters at.*novel\.com|Translator : Raz P.,|^MYAllNovelFull$|^please keep reading on.*[Cc][0Oo][Mm]$|^PLease reading on.*com$|^Search newn0vel.0rg on google$|^Read the next chapter.*vel.*c0m$|^Updates by.*novel\..*com$|Updated by AllNovelFull|This chapter is updated by AllNovelFull\.Com|eunimon_|Updates by AllNovelFull|Please Keep reading .*n AllNovelFull.*C.*M|^Translation Editor\: EndlessFantasy Translation|Support the translator by reading Hidden Marriage on volarenovels\!|Support the translator by reading Hidden Marriage on volaretranslations.|Original and most updated translations are from volaretranslations.|^[0-9]*$|^Translator\:|Henyee\sTranslations/) )
            //olv.remove.line( $(this) );
          if( /This chapter was originally shared via.*\.|n.*vel.*served as the original host for this chapter\'s release on.*\.|N0vel Biin hosted the premiere release of this chapter\.|The inaugural upload of this chapter took place.*\.|This chapter's initial release occurred on.*\.|The initial instance of this chapter being available happened.*\.|The inception of this chapter's publication is linked.*\.|The debut release of this chapter happened.*\.|N0v3lTr0ve served as the original host for this chapter\'s release.*\.|The origin of this chapter\'s debut.*\.|Visit website our Listnovel|Visit website our Listnovel.*|Author only posts on webnovel|Read more chapter on AllNovelFull|Read more chapters at.*com|please keep reading on AllNovelFull\.C0M|PLease reading on.*com|New novel chapters are published on.*cᴏm|Search New Novel|Search.*on google|Search new.*g on google|NewN0vel.*g|Please reading on NℇWN0VℇL.0℟G|Search newn0vel.0rg on google|Read the next chapter.*vel.*c0m|Search.*ewNovel.*rg|Please reading on.*vel.*rg|Read more on.*vel.*org|Updates by.*novel\..*com|Updated by AllNovelFull\.Com|Translator\: EndlessFantasy Translation Editor\: EndlessFantasy Translation|Updates by vip novel. com/.test($(this).text().trim()) ) {
           	$(this).text( $(this).text().replace(/This chapter was originally shared via.*\.|n.*vel.*served as the original host for this chapter\'s release on.*\.|N0vel Biin hosted the premiere release of this chapter\.|The inaugural upload of this chapter took place.*\.|This chapter's initial release occurred on.*\.|The initial instance of this chapter being available happened.*\.|The inception of this chapter's publication is linked.*\.|The debut release of this chapter happened.*\.|N0v3lTr0ve served as the original host for this chapter\'s release.*\.|The origin of this chapter\'s debut.*\.|Visit website our Listnovel|Visit website our Listnovel.*|Author only posts on webnovel|Read more chapters at.*com|please keep reading on AllNovelFull\.C0M|PLease reading on.*com|New novel chapters are published on.*cᴏm|Search New Novel|Search.*on google|Search new.*g on google|NewN0vel.*g|Please reading on NℇWN0VℇL.0℟G|Search newn0vel.0rg on google|Read the next chapter.*vel.*c0m|Search.*ewNovel.*rg|Please reading on.*vel.*rg|Read more on.*vel.*org|Updates by.*novel\..*com|Updated by AllNovelFull\.Com|Translator\: EndlessFantasy Translation Editor\: EndlessFantasy Translation|Updates by vip novel. com/, '') );
          }//^[0-9]*[^A-Z"]|

          $(this).text( olv.line.replace($(this).text(),/â€”/,' ') );

          //if( $(this).text().trim().indexOf('”') < $(this).text().trim().indexOf('“') || ($(this).text().trim().indexOf('“') == -1 && $(this).text().trim().indexOf('”') > 0 ) ) //($(this).text().trim().match(/”|“/g) || []).length % 2 == 1 &&
          	//$(this).text( '“' + $(this).text() );
          //while( /the \*\*\*\*/ig.test($(this).text()) )
          	//$(this).text( $(this).text().replace(/the \*\*\*\*/, 'the fuck') );

          //$(this).text( $(this).text() );
          if( $(this).css('display') == 'none' ) {
           	 olv.remove.line( $(this) );
          }
        }
        else {
         	 olv.remove.line( $(this) );
        }
      });

      $(olv.site.content + ' p.olv-chapter').each(function(){
        $(this).replaceWith('<h3>'+ $(this).text() +'</h3>');
      });

      //clean up
      $(olv.site.content + ' > p[title]:not(.removed)').each(function(){
       	$(this).remove();
      });

      if( $('.wp-manga-nav').length > 0 ) {
       	 $('.wp-manga-nav').remove();
      }

      if( $('.cha-words').length > 0 ) {
       	 $('.cha-words').remove();
      }

      //check if paragraphs are fucked up
      var totals = ''; var ends = 0; var last = '';

      if( typeof olv.paragraph_length == 'undefined' ) {
       	olv.paragraph_length = 7;
        olv.combine_paragraphs = 1;
      }

      if( typeof olv.broken_sentences == 'undefined' ) {
        olv.broken_sentences = 1;
      }

      //Fourier image transformations

      olv.max_ends = 1;

      //reverse inverse split
      //fix single paragraph tag with no new lines.
      if( $(olv.site.content + ' > p').length == 1 ) {
       	olv.broken_sentences = 1;

        //$(this).replaceWith( '<p>' + $(this).text() + '</p>' );
      	var s = $(olv.site.content + ' > p').text().split('.');
        $(olv.site.content + ' > p').remove();
        $(olv.site.content) .append('<p>' + s.join('.</p><p>') + '</p>');

        olv.combine_paragraphs = 1;
      }

      //fix nl
      //https://moonbunnycafe.com/story-of-a-careless-demon-volume-7-chapter-18/

      if( $(olv.site.content + ' > ol').length ) {
       	//$(olv.site.content + ' > ol').wrapAll('<p></p>');
        //$(olv.site.content + ' > ol > li').wrapAll('<p></p>');
        $(olv.site.content + ' > ol').each(function(){
          $(this).contents().unwrap();
        });

        $(olv.site.content + ' > li').each(function(){
          $( this ).replaceWith( "<p>" + $( this ).text() + "</p>" );
        });
      }

      olv.manage_broken = function(){
        olv.firstPg = $(olv.site.content + ' > p').eq(0).text().trim();
        var ends = 0;
        $(olv.site.content + ' > p').each(function(){
       	if($(this).text().trim() && $(this).attr('class') === undefined){
          //console.log($(this).index(), $(this).text().match(/[^A-Za-z0-9 ]/g), $(this).text().trim().match(/[a-z0-9]$/i));
          //totals+=$(this).index() + ':' + ($(this).text().match(/[^A-Za-z0-9 ]/g) || []).length + ' ';

          //remove newlines in paragraph
          $(this).text( $(this).text().replace(/\n/g, '') );

          if( ($(this).text().trim().match(/[a-z0-9,\]\)]$/i) || []).length ) { ends++; }
        }
      });
        console.log('total ends: ', ends)
      };

      //if( olv.broken_sentences == 1 ) {
      olv.fix_broken = function(){
        var ends = 0;

        if($(olv.site.content + ' > *:contains("Chapter")').length > 0 )
        $(olv.site.content + ' > *:contains("Chapter")').eq(0).remove();
        olv.firstPg = $(olv.site.content + ' > p').eq(0).text();
      $(olv.site.content + ' > p').each(function(){
       	if($(this).text().trim() && $(this).attr('class') === undefined){
          //console.log($(this).index(), $(this).text().match(/[^A-Za-z0-9 ]/g), $(this).text().trim().match(/[a-z0-9]$/i));
          //totals+=$(this).index() + ':' + ($(this).text().match(/[^A-Za-z0-9 ]/g) || []).length + ' ';

          //remove newlines in paragraph
          $(this).text( $(this).text().replace(/\n/g, '') );

          if( ($(this).text().trim().match(/[a-z0-9,\]\)]$/i) || []).length ) { ends++; }
        }
      });

      //if too many broken paragraphs, fix paragraphs.
      //if(false)
      if( ends > olv.max_ends ) {
        $(olv.site.content + ' > p').each(function(){
        	if($(this).text().trim() && $(this).attr('class') === undefined){
          //console.log($(this).index(), $(this).text().match(/[^A-Za-z0-9 ]/g), $(this).text().trim().match(/[a-z0-9]$/i));
          //totals+=$(this).index() + ':' + ($(this).text().match(/[^A-Za-z0-9 ]/g) || []).length + ' ';

            //$(this).text( ($(this).text().trim().match(/[a-z0-9]$/i) || []).length + ': ' + $(this).text() );

            //append to next if end isn't punctuation
          	if( ($(this).text().trim().match(/[a-z0-9,\"\']$/i) || []).length == 1 ) {
              //$(this).parent().children($(this).index()+1).text( $(this).text() + ' ' + $(this).parent().children($(this).index()+1).text());

              last += $(this).text() + ' ';
              $(this).text('');
              olv.remove.line( $(this) );
            }
            else {
              //$(this).text( ($(this).text().trim().match(/[a-z0-9]$/i) || []).length + ' ' + last + '' + $(this).text() );

              if( last.trim() != $(this).text().trim().substr(0, last.trim().length) )
              $(this).text( last + '' + $(this).text() );

              last = '';

            }
            //else $(this).text('');
        	}
      	});
      }

        setTimeout(function(){ //(olv.firstPg.trim().match(/[a-z0-9,\]\)]$/i) || [])
        if( (olv.firstPg.trim().match(/[a-z0-9,\)]$/i) || []).length == 0 && olv.firstPg.length != $(olv.site.content + ' > p').eq(0).text().length ) {
          $(olv.site.content + ' > p').eq(0).text(olv.firstPg);
        }

          if( $(olv.site.content + ' > p').eq(0).text().trim().substr(0, olv.firstPg.trim().length + 1).trim() == olv.firstPg.trim() )
            $(olv.site.content + ' > p').eq(0).text(olv.firstPg.trim());

          if( olv.navbarChapter.text().indexOf( $(olv.site.content + ' > p').eq(0).text().trim() ) > -1 )
            $(olv.site.content + ' > p').eq(0).remove();

          if( $('.navbar-breadcrumb :contains("Chapter"):last').length > 0 && $('.navbar-breadcrumb :contains("Chapter"):last').text().trim().replace(/[^a-zA-Z0-9]*/, '').indexOf(olv.firstPg.trim().replace(/[^a-zA-Z0-9]*/, '')) > 0 )
            $(olv.site.content + ' > p').eq(0).remove();

          if( /^[0-9]*\s/.test($(olv.site.content + ' > p').eq(0).text().trim()) ) {
            var num = $(olv.site.content + ' > p').eq(0).text().trim().match(/^[0-9]*/);

            if( olv.navbarChapter.text().indexOf(num) > -1 )
              $(olv.site.content + ' > p').eq(0).remove();
          }

          }, 200); //$(olv.site.content + ' :contains("'+olv.firstPg.trim()+'")')

        //$(olv.site.content + ' > p:not(".removed")').eq(0).text();
        if( $(olv.site.content + ' > p:not(".removed")').eq(0).text().trim().substr(0, olv.firstPg.trim().length) == olv.firstPg ) {
          $(olv.site.content + ' > p:not(".removed")').eq(0).text( $(olv.site.content + ' > p:not(".removed")').eq(0).text().trim().substr(olv.firstPg.trim().length) );
        }

        if( $(olv.site.content + ' > p:not(".removed")').eq(0).text().trim().substr(0, olv.firstPg.trim().length) != olv.firstPg )
          $(olv.site.content + ' > p:not(".removed")').eq(0).text( olv.firstPg + ' ' + $(olv.site.content + ' > p:not(".removed")').eq(0).text() );

    }

      //if first paragraph shows up multiple times, squash later instances.
      last = ''; //replace with remove duplicates later
      $(olv.site.content + ' > p').each(function(){
       	if($(this).text().trim() && $(this).attr('class') === undefined){
          //console.log($(this).index(), $(this).text().match(/[^A-Za-z0-9 ]/g), $(this).text().trim().match(/[a-z0-9]$/i));
          //totals+=$(this).index() + ':' + ($(this).text().match(/[^A-Za-z0-9 ]/g) || []).length + ' ';

          //if( ($(this).text().trim().match(/[a-z0-9]$/i) || []).length ) { ends++; }
          if( last == '' ) {
            last = $(this).text().trim();
          }
          else if( last == $(this).text().trim() ) {
           	olv.remove.line( $(this) );
          }
        }
      });
      //console.log('first?',last);

      if( olv.combine_paragraphs == 1 ) {
        olv.nl = '<br />';

      last = ''; totals = 0;
      //olv.firstPg = $(olv.site.content + ' > p').eq(0).text();
      $(olv.site.content + ' > p').each(function(){
       	if($(this).text().trim() && $(this).attr('class') === undefined){
          //console.log($(this).index(), $(this).text().match(/[^A-Za-z0-9 ]/g), $(this).text().trim().match(/[a-z0-9]$/i));
          //totals+=$(this).index() + ':' + ($(this).text().match(/[^A-Za-z0-9 ]/g) || []).length + ' ';
          //console.log($(this).text());
          //$(this).text( ($(this).text().trim().replace(/".*"|“.*”/g, '').match(/[\\.?!]/g) || []).length + ' ' + $(this).text() );
          totals = totals + ($(this).text().trim().replace(/".*"|“.*”/g, '').match(/[\\.?!]/g) || []).length;

          if ( totals < olv.paragraph_length ) {
           	 last += olv.nl + $(this).text() + ' ';
             $(this).text('');
             olv.remove.line( $(this) );
          }
          else {
            $(this).html( last + '' + $(this).text() );

            last = ''; totals = 0;
          }

          //if( ($(this).text().trim().match(/[\\.]/g) || []).length ) { ends++; }
        }
      });

      if( last != '' && last != $(olv.site.content + ' > p:last-child').text() ) {
       	 $(olv.site.content + ' > p:last-child').html(  last + '' + $(olv.site.content + ' > p:last-child').text() );
      }



      }

      //strip out tts random pauses
      if(false)
      $(olv.site.content + ' > p').each(function(){
       	if($(this).text().trim() && $(this).attr('class') === undefined){
          if( $(this).text().indexOf("\n") )
            $(this).text( $(this).text().replace(/\n/ig, '') );

          if( $(this).text().indexOf("\r") )
            $(this).text( $(this).text().replace(/\r/ig, '') );

          //while( $(this).text().indexOf('  ') )
            //$(this).text( $(this).text().replace(/  /ig, ' ') );

          //'5 000 000'.replace(/[0-9]+ [0-9]+/ig, function(r, g){ return r.replace(/ /ig, '')});
          var t = $(this).text();
          //while( /[0-9]+ [0-9]+/ig.test(t) ) {
           	//t = t.replace(/[0-9]+ [0-9]+/ig, function(r){ return r.replace(/ /ig, '')});
          //}

          if( t != $(this).text() ) {
           	$(this).text( t );
          }
        }
      });

      //strip out tts noise
      olv.unique_length_check = 1;
      olv.unique_remove = {
        3: ['roa', 'bom', 'hya', 'hah', 'pof', 'gra'],
        4: ['groa', 'slah', 'grao', 'gryh', 'grye'],
        5: ['clash', 'gryao', 'flash', 'gryeh', 'gugeh', 'gragh', 'gruoh', 'crash'],
        6: ['rumble', 'gryegh'],
        8: ['gryaghra', 'gahgyyah']
      };

      if( localStorage.getItem("olv.unique_remove") != null ) {
        olv.unique_remove = JSON.parse(localStorage.getItem("olv.unique_remove"));
      }

      var len = '', par = '', par_s = '';
      if(olv.unique_length_check)
      $(olv.site.content + ' > p').each(function(){
        par = $(this).text().trim().replace(/[^a-zA-Z]/g, '').split('').filter((value, index, array) => array.indexOf(value) === index);
        len = par.length;
        par_s = par.join('').toLowerCase();
       	if( len && len < 12 )
        //$(this).html( '<span>' + len+ ' : '+par_s+' </span>' + $(this).html() ); /*
        $(this).html( '<span class="mute" title="'+par_s+'">' +' </span>' + $(this).html() );
        //$(this).html( '<span class="mute" title="'+par_s+'">' + len+ ' </span>' + $(this).html() ); //*/

        //$(this).find('span').css('margin-left', '-'+$(this).find('span').width()+'px');
        if( typeof olv.unique_remove[len] != 'undefined' && olv.unique_remove[len].indexOf( par_s ) > -1 ) {
         	 olv.remove.line( $(this) );
        }
      });

      $(olv.site.content + ' > p > span').hover(
      	function(){ $(this).toggleClass('focused'); },
        function(){ $(this).toggleClass('focused'); }
      );

      $(olv.site.content + ' > p > span').on('click', function(){
        if( $(this).hasClass('focused') ) {
          if( $(this).parent().hasClass('removed') ) {
          	$(this).parent().toggleClass('removed');
          }
          else {
      			//olv.remove.line( $(this).parent() );
            $(this).parent().toggleClass('removed');

          	if( typeof olv.unique_remove[$(this).text().trim()] == 'undefined' )
            	olv.unique_remove[$(this).text().trim()] = [];

          	olv.unique_remove[$(this).text().trim()].push( $(this).attr('title') );
          	localStorage.setItem("olv.unique_remove", JSON.stringify(olv.unique_remove));
          }
        }
      });

      if( olv.hide_removed == 1 ) {
       	$(olv.site.content + ' .removed').hide();
      }

      if( false ) {
      	let seconds = 0;
      	var utterThis = new SpeechSynthesisUtterance('');

      	for(i = 0; i < voices.length ; i++) {
          if(voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
          }
      	}

        utterThis.pitch = $('.olv.options #pitch').val();
        utterThis.rate = $('.olv.options #rate').val();

      	$(olv.site.content + ' > p').each(function(){
       		if($(this).text().trim() && $(this).attr('class') === undefined){
            utterThis.text = $(this).text().trim();
          	//console.log(
        	}
      	});
      }

      //remove empty paragraph tags
      $(olv.site.content + ' > p').each(function(){
       	if($(this).text().trim() == '' || $(this).text().trim() == '0'){
          $(this).remove();
        }
      });

      //remove empty paragraph tags
      $(olv.site.content + ' > .removed').each(function(){
       	$(this).remove();
      });

      //speach length
      if( false ) {
      	var utterThis = new SpeechSynthesisUtterance('' + olv.reader.phonetic(olv.text));
        //var utterThis = olv.utterThis
        //console.log($('.olv.options select')) //.get(olv.reader.voice).selectedOptions[0].getAttribute('data-name'));
        var selectedOption = $('.olv.options select').get(0).selectedOptions[0].getAttribute('data-name');

        for(i = 0; i < voices.length ; i++) {
          if(voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
          }
        }

        utterThis.pitch = $('.olv.options #pitch').val();
        utterThis.rate = $('.olv.options #rate').val();

        utterThis.onpause = function(event) {
    			var char = event.utterance.text.charAt(event.charIndex);
    			//console.log('Speech paused at character ' + event.charIndex + ' of "' +
    			//event.utterance.text + '", which is "' + char + '".');
  			}

        utterThis.onend = function(event) {
          $(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'none');
          olv.paragraph = (olv.paragraph+1);

          //console.log('olv.paragraph, olv.content.length', olv.paragraph, olv.content.length);
          if( olv.paragraph <= olv.content.length  && olv.content.length > 0 ) {
            //console.log('read next');
          	olv.read();
          }
          else {
           	$('.olv .play').show();
          	$('.olv .pause').hide();
          }

         	//console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
        }

        olv.utterThis = utterThis;
        window.speechSynthesis.speak(utterThis);
      }

      //Looks like FF at end
      //E035 C3J8 46RC 72
      //E035 C3J8 46RC 72FH

      //      ?        ????
      //C0Q1 5VCC VXRH GV51

      //C0Q4 5WCG CVXR HGVJ

      //$( "div.second" ).replaceWith( "<h2>New heading</h2>" );

      if( typeof olv.content != 'undefined' && $(olv.site.content + ' > p').length > 0 ) {

      if( olv.content.length != $(olv.site.content).children().length ) {
       	olv.content = $(olv.site.content).children();
      }

      if( typeof olv.paragraph == 'undefined' ) {
       	olv.paragraph = 0;
      }


olv.check = function(obj){
	console.log('olv.'+obj+' type:', typeof olv[obj]);
};
//prep wav files for play
olv.prepWaveFiles = function() {
  //olv.ws.send('say ' + olv.reader.phonetic(olv.text).replace(/["'‘’“”]/g, ''));
  if( $('.chr-title .chr-text').length ) {
    //console.log(typeof olv.chapter, 'chapter');
  	olv.chapter = $('.chr-title .chr-text').text().split(' ')[1];

    olv.content.each(function(){
      if( $(this).get(0).nodeName == 'P' ) {
    		//console.log( $(this).get(0).nodeName );
        //$(this).attr('para', $(this).index() );
        //console.log( $(this).index(), $(this) );
        //olv.ws.send('ttw ' + $(this).index() + ' ' + olv.reader.phonetic($(this).text()).replace(/["'‘’“”;]/g, ''));
      }
    });
  }
  //$(olv.site.content + ' > p').each(function(){});
};

        olv.setPara = function(){
          var count = 0;
  olv.content.each(function(){
    $(this).attr('para', count );
    count = count + 1;
  	/*if( $(this).get(0).nodeName == 'P' ) {
    	$(this).attr('para', $(this).index() );
  	}*/
	});
        };

//mark each paragraph tag
if( typeof olv.content != 'undefined' && $(olv.site.content + ' > p').length > 0 ) {
  if( olv.broken_sentences == 1 ) {
    if( $(olv.site.content + ' > p .mute').length > 0 )
      $(olv.site.content + ' > p .mute').remove();
    //olv.fix_broken();
  }

  olv.max_ends = 2;
  olv.fix_broken();

  olv.setPara();
}
      //console.log(olv.paragraph, $(olv.site.content + ' p[para='+olv.paragraph+']'));

      //console.log(totals, ends);

      /*if( window.location.href.toString().indexOf('unlimited-power-the-arcane-path') > 0 ) {
      $(olv.site.content + " > p, " + olv.site.content + " > h3").each(function(i, e){
          //console.log(/^\[Name\:,/.test($(this).text().trim()), $(this).text().trim());


            if( /^Health\:.*+/.test($(this).text().trim()) ) {
           	 olv.nano_status = 1;

            //$(this).text($(this).text().replace(/\[Name\:/, '') + "'s Status")
            //console.log('nano_status start');
          	}

            if(olv.nano_status) {
           	if(/^Passive\sSkills\:.*\/ig.test($(this).text().trim())) {
              olv.nano_status = 0;
              //console.log('nano_status end');
            }

            if( olv.delete_status == 1 ) {
            	$(this).remove();
            }

      });
      }*/
      	/*
        $(olv.site.content + ' > p').on('mouseover', function(e){
        	$('canvas.hover').show();

          $('canvas.hover').animate({
        		top:$(this).position().top + $(this).css('line-height').replace('px', '') / 3
    			}, 0);
        });

        $(olv.site.content + ' > p').on('mouseout', function(e){
        	$('canvas.hover').hide();
        });
        */
        //$(olv.site.content + ' > p:eq(0)').before('<div class="hover" style="position: absolute; margin-left:-30px;display:none;">▶</div>');
olv.fn.p.options = function(){
        $(olv.site.content + ' > p:eq(0)').before('<canvas class="hover" style="position: absolute; width:16px; height:16px; margin-top:6px; margin-left:-30px;1margin-top:-30px;display:none;"></canvas>');
        $(olv.site.content + ' > p:eq(0)').before('\
<div class="btn btn-success paragraph options" style="margin:4px; padding:4px; position: absolute; 1margin-left:-34px;display:none;">\
</div>'); //<span class="remove">❌</span>\

        /*
        <span class="x">❌</span>\
<span class="remove">✂️</span>\
<span class="edit">✏️</span>\
<span class="jumpto">🦘</span>\
<span class="next">⏭</span>\

        $('.paragraph.options').append('<span class="up">🔼</span>');

        $('.paragraph.options').prepend('<span class="down">🔽</span>');
				*/
        var opt_list = {
         	up: '🔼',
          x: '❌',
          remove: '✂️',
          edit: '✏️',
          jumpto: '🦘',
          next: '⏭',
          down: '🔽'
        } //🚫

        var keys = Object.keys(opt_list);

        for( var i = 0; i < keys.length; i++ ) {
         	 $('.paragraph.options').append('<span class="' + keys[i] + '">' + opt_list[keys[i]] + '</span>');
        } //‽

        var c = $('canvas.hover').get(0);
        if (c.getContext) {
          var ctx = c.getContext('2d');

          ctx.beginPath();
          ctx.moveTo(20, 0);
          ctx.lineTo(280, 75);
          ctx.lineTo(20, 140);
          ctx.strokeStyle = 'rgba(255,255,255,.6)';
          ctx.lineWidth = 30;
          ctx.fillStyle = 'rgba(255,255,255,.6)';
          ctx.closePath();
          ctx.stroke();
          //ctx.fill();
        }
        /*
        $(document).on('mouseover', olv.site.content + ' > p', function(){
          //$(olv.site.content + ' > canvas.hover').show();
        	$(olv.site.content + ' > canvas.hover').css({top:$(this).position().top,left:$(this).position().left});
          $(olv.site.content + ' > canvas.hover').attr('paragraph', $(this).index());

          setTimeout(function(){
          	$(olv.site.content + ' > canvas.hover').hide();
          }, 3000);
        });*/

        $(document).on('click', olv.site.content + ' > p', function(){
          $(olv.site.content + ' > div.options').show();
          //console.log('position left', $(this).offset().left);
          var width = $(olv.site.content + ' > div.options').width();
          if( $(this).offset().left-14-width > 0 )
        		$(olv.site.content + ' > div.options').css({top:$(this).position().top-4,left:$(this).position().left-50-width});
          else
            $(olv.site.content + ' > div.options').css({top:$(this).position().top-16-$(olv.site.content + ' > div.options').height(),left:$(this).position().left-4});
          $(olv.site.content + ' > div.options').attr('paragraph', $(this).attr('para'));
        });

				olv.fn.p.x = function(){
          $(olv.site.content + ' > div.options').hide();
        }

        olv.fn.p.jumpto = function(){
          //console.log( $(this).parent().attr('paragraph'), olv.content.find('p[para='+$(this).attr('para')+']').index() );
          //speechSynthesis.cancel();

          if( speechSynthesis.speaking ) {
            speechSynthesis.cancel();
          }

          $(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'none');
          olv.paragraph = Number($(this).parent().attr('paragraph')) - 1;

          $(olv.site.content + ' > div.options').hide();
        }

        olv.fn.p.next = function(){
          $(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'none');
          olv.paragraph = Number($(this).parent().attr('paragraph')) - 1;

          $(olv.site.content + ' > div.options').hide();
        }

        olv.fn.p.edit = function(){
          //indicate edit somehow

          //send text to console box.
          //$('.olv.parrot .textarea').val( $(this).parent().attr('paragraph') );
          //wrap tag in textarea
          $(olv.site.content + ' > p[para='+$(this).parent().attr('paragraph')+']').before('<textarea para="'+$(this).parent().attr('paragraph')+'" class=" textarea" style="text-align: left; background: rgb(35, 35, 35); border-color: rgb(130, 168, 45); width: 100%; margin: 0 0 20px; white-space: normal;"></textarea>');
          $(olv.site.content + ' > textarea[para='+$(this).parent().attr('paragraph')+']').val( $(olv.site.content + ' > p[para='+$(this).parent().attr('paragraph')+']').text() );
          $(olv.site.content + ' > textarea[para='+$(this).parent().attr('paragraph')+']').focus();
          $(olv.site.content + ' > p[para='+$(this).parent().attr('paragraph')+']').hide();

          //olv.fn.dialog();
        }

        $(document).on('click', olv.site.content + ' > div.options .x', olv.fn.p.x);
        $(document).on('click', olv.site.content + ' > div.options .jumpto', olv.fn.p.jumpto);
        $(document).on('click', olv.site.content + ' > div.options .next', olv.fn.p.next);
        $(document).on('click', olv.site.content + ' > div.options .edit', olv.fn.p.edit);

        $(document).on('blur', olv.site.content + ' > textarea', function(){
          //console.log( $(this) );
          $(olv.site.content + ' > p[para='+$(this).attr('para')+']').text( $(this).val() );
          $(olv.site.content + ' > p[para='+$(this).attr('para')+']').show();
          $(this).remove();
        });
};

olv.fn.p.options();

        $(document).on('click', 'canvas.hover', function(){
        	/*if( typeof olv.paragraph != 'undefined' ) {
             	$(olv.site.content + ' p[para='+olv.paragraph+']').css('text-decoration', 'none');
            }

            $('.olv .select_pos').text('Select Pos');
          	olv.paragraph = $(olv.site.content + ' > canvas.hover').attr('paragraph');
            localStorage.setItem('olv.last.chapter.p', olv.paragraph);

            if( speechSynthesis.speaking ) {
             	olv.paragraph = (olv.paragraph - 1)
            }
            else if( speechSynthesis.paused ) {
             	speechSynthesis.cancel();
              olv.read();
            } //*/
          //console.log($(olv.site.content + ' > canvas.hover').attr('paragraph'));
        });

        if( $('p[para]:eq(0):contains("ranslator")').length )
          $('p[para]:eq(0):contains("ranslator")').remove();

if( typeof olv.content != 'undefined' && $(olv.site.content + ' p[para]').length == 1 ) {
        var t = $(olv.site.content + ' p[para]').text();

        t = t.replaceAll(/““|""/g, '”“');

        $(olv.site.content + ' p[para]').text(t);

        //t = t.replaceAll(/"”[A-Z]|"” [A-Z]|"”\. [A-Z]/g, function(k, v){ return '"”\n'+k.replace('"”', '');});

        t = t.replaceAll(/”[A-Z]|” [A-Z]|”\. [A-Z]/g, function(k, v){ return '”\n'+k.replace('”', '');});
        t = t.replaceAll(/"[A-Z]|" [A-Z]|"\. [A-Z]/g, function(k, v){ return '"\n'+k.replace('"', '');});
        //t = t.replaceAll(/["”][A-Z]|["”] [A-Z]|["”]\. [A-Z]/g, function(k, v){ return '"\n'+k.replace('"', '');});
        t = t.replaceAll(/[.!”]“|[.!”] “/g, function(k, v){ return k.replace('“', '')+'\n“';});
        t = t.replaceAll(/[a-z]\.\.[A-Z]/g, function(k, v){ return k.replace('..', ".\n");});
        t = t.replaceAll(/[a-z][\?][A-Z]/g, function(k, v){ return k.replace('?', "?\n");});
        t = t.replaceAll(/[a-z][\!][A-Z]/g, function(k, v){ return k.replace('!', "!\n");});
        t = t.replaceAll(/[a-z][A-Z]/g, function(k, v){ return k.replace(/([A-Z]{1})/, ".\n$1");});

        t = t.split("\n").join('</p><p>');
//*
        $(olv.site.content).html('<p>'+t+'</p>');

        $(olv.site.content + ' p').each(function(){
          if( $(this).text().trim().substr(-1) == '"' && ($(this).text().match(/"/g).length % 2) == 1) {
             //&& ($(this).text().match(/"/g).length % 2) == 1) {
            $(this).text( $(this).text().substr(0, $(this).text().length-1) );
            $(this).next().text( '"' + $(this).next().text() )
          }
          if( /[?!.]/.test( $(this).text().trim().substr(-4) ) == 0 ) {
            $(this).next().text( $(this).text() + $(this).next().text() );
            $(this).remove();
          }

          if( $(this).text().trim().length < 75 ) {
            $(this).prev().text( $(this).prev().text() + ' ' + $(this).text() );
            $(this).remove();
          }
          //$(this).html($(this).html()+'<span>'+$(this).html()+'</span>');
          //$(this).html('<span>'+$(this).html()+'</span>');

        }); //*/
/*
        $(olv.site.content + ' p').each(function(){
          console.log($(this).find('span').width(), (100 - (($(this).width() - $(this).width()) / $(this).find('span').width() * 100)));
          if( 68 > (100 - (($(this).width() - $(this).width()) / $(this).find('span').width() * 100)) ) {
            $(this).prev().text( $(this).prev().text() + $(this).text() );
            $(this).remove();
          }
        }); //*/

        //$(olv.site.content + ' p span').remove();

        olv.content = $(olv.site.content).children();

        olv.setPara();

        if( $('p[para]:eq(0):contains("\]")').length )
          $('p[para]:eq(0):contains("\]")').text( $('p[para]:eq(0):contains("\]")').text().replace(/.*\]/, '') );
      }

      	$(olv.site.content + ' > p:eq('+olv.paragraph+')').before('<div class="focused" style="display:none; position: absolute; margin-left:-30px;top:'+$(window).height()+'px;">▶</div>');
        //console.log(olv.site.content + ' p[para='+olv.paragraph+']');
        while( $(olv.site.content + ' p[para]').length && $(olv.site.content + ' p[para='+olv.paragraph+']').length == 0 )
          olv.paragraph = (olv.paragraph+1);

        //$(olv.site.content + ' > div.focused').css({top:$(olv.site.content + ' p[para='+olv.paragraph+']').position().top});
        if( $(olv.site.content + ' p[para='+olv.paragraph+']').length > 0 && $(olv.site.content + ' p[para='+olv.paragraph+']').position().top > 0 )
				if(false)
          setTimeout(function(){
        $('div.focused').animate({
        		top:$(olv.site.content + ' p[para='+olv.paragraph+']').position().top
    			}, 250);
        }, 200);

      }

      /*
        if( $(olv.site.content + ' p[para]').length == 1 ) console.log('burp');
          var t = $('#chr-content p').text();

            {//if( t.match(/\./g) != null && t.match(/\./g).length > 20 ) {
              t = t.replaceAll(/”[A-Z]|” [A-Z]|”\. [A-Z]/g, function(k, v){ return '”\n'+k.replace('”', '');});
              t = t.replaceAll(/[.!”]“|[.!”] “/g, function(k, v){ return k.replace('“', '')+'\n“';});
              //t = t.replaceAll(/[a-z][.][A-Z]/g, function(k, v){ return k.replace('.', ".\n");});
              //t = t.replaceAll(/[a-z][!][A-Z]/g, function(k, v){ return k.replace('!', ".\n");});

              t = t.split("\n").join('</p><p>');
            }

            $('#chr-content').html('<div id="chapter-content"><p>'+t+'</p><div>');
      */

      //if( /paragraph=/.test(window.location.hash.toString()) ) { //28
        //olv.reader.next();
      //}

      //remove extra line breaks
      if( typeof olv.site.br == 'undefined' && olv.site.br != 'none' && $(olv.site.content + ' br').length > 0 )
      	$(olv.site.content + ' br').remove();

      if( typeof olv.site.br != 'undefined' && olv.site.br == 'other' ) {
       	//
      }

      if( typeof olv.fn == 'undefined' )
        olv.fn = {end:[]};
      else if( typeof olv.fn.end == 'undefined' )
        olv.fn.end = [];

      olv.fn.end.forEach(fn => { fn(); });

      /*olv.fn.end.push( function(){
        console.log(`%c${'olv: executed last dynamic function'}`, 'padding: 2px 4px; background: #121212; border: 2px solid #82A82D; color:#82A82D;')
      });*/

      //console.log('novel nano, tags: ', $(olv.site.content + " p").length);

      if( olv.reader.auto != 0 ) {
        if( olv.pages.left > 0 ) {
       	 	olv.pages.left = ( olv.pages.left - 1 )
      	}

        /*var ref = document.referrer.split('/');

        if( ref.length == 5 ) {
         	var loc = window.location.href.split('/');

          var last = ref[4].split('-')[1];
          var cur = loc[4].split('-')[1];

          if( parseInt(cur) == (parseInt(last)+1) ) {
            olv.read();
          }
        }//*/

        setTimeout(function(){
          if( !speechSynthesis.speaking && window === window.parent && typeof olv.content != 'undefined' && olv.content.length > 0 )
       		olv.read();
        }, 270);
      }

      //*/
    }

    //console.log(olv.site)
    olv.archive = {
     	start: function(){
      	olv.init_read();
      }
    }

    //console.log('I unfucked the book');

if( typeof olv.site.content != 'undefined' && window.location.hash && window.location.pathname.substr(-4) == 'html' && window.location.hash.substr(1, 8) == 'chapter=' ) {

  //https://allnovelfull.com/the-vampires-templar
  //window.location.origin + window.location.pathname.replace('.html', '')
  //chapter-66-true-threat.html
  //window.location.hash.substr(9)

  //$('body').html('<iframe src="'+ window.location.origin + window.location.pathname.replace('.html', '/') + window.location.hash.substr(9) +'" style="width: 100%;height: 100%;"></iframe>');
  //$('body').css({'overflow': 'hidden'});

  //$('body').append('<iframe src="https://allnovelfull.com/the-vampires-templar/'+window.location.hash.substr(9)+'"></iframe>');
  //$('body iframe').contents().find('#chapter-content')
}

    //$( window ).on( 'hashchange', function( e ) {

    if( $('#terminal-container').length > 0 || document.title == 'Olv Dashboard' ) {
     	console.log('olv script: terminal avaliable');

      var size = 200;
      $('body').append('<div class="input" contentEditable="true">Edit here</div><canvas style="position:fixed; bottom:6px; right:6px;" id="circle" width="'+size+'" height="'+size+'"></canvas>');

      //https://readnovelfull.me/nanomancer-reborn-ive-become-a-snow-girl/chapter-182-questioning/
      olv.addFrame = function(src){
      	$('body').append('<iframe src="'+src+'" style="width:50%; height:50%;"></iframe>');
      }

      $(document).on('blur', '.input', function(){
      	olv.addFrame($(this).text());
      });

      var canvas = document.getElementById('circle');

      if (canvas.getContext) {
       	var ctx = canvas.getContext('2d');
       	var X = canvas.width / 2;
       	var Y = canvas.height / 2;
       	var R = canvas.width / 2 - 2;
       	ctx.beginPath();
       	ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
       	ctx.lineWidth = 2;
       	ctx.strokeStyle = '#CCCCCC';
       	ctx.stroke();

        ctx.beginPath();
        ctx.arc(X, Y, R/8, 0, 2 * Math.PI, false);
       	ctx.lineWidth = 2;
       	ctx.strokeStyle = '#CCCCCC';
       	ctx.stroke();

        ctx.font = '16px "Helvetica Neue"';

        var arc = 360 / 26;
        for(var i = 0; i < 26; i++) {
        	ctx.fillStyle = 'rgb(130, 168, 45)';
        	ctx.fillText(String.fromCharCode(65+i), X+6*i*3.14, 16*i+20);
        }
      }
    }

    //console.log(GM_info);

});

  //append options function

}
else
{
 	console.log('olv: jquery not loaded')
}
