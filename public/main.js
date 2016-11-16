var main=function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/public/",t(0)}([function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=n(1),l=s(i),a=document.querySelectorAll('[data-component="clock"]');Array.from(a).forEach(function(e){return new l.default(e)})},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),a=n(2),r=s(a);n(5);var c=n(6),o=s(c),u=n(7),h=s(u),d=function(){function e(t){i(this,e),this._elem=t,this._elem.innerHTML=(0,r.default)(),this._counting=!1,this._minutesElem=this._elem.querySelector('[data-element="minutes"]'),this._stateElem=this._elem.querySelector('[data-element="state"]'),new h.default({elem:this._elem,minutesElem:this._minutesElem,inputAttribute:'[data-element="field"]',sessionFieldId:"session"}),this._timer=new o.default({minutesElem:this._minutesElem,secondsElem:this._elem.querySelector('[data-element="seconds"]'),stateElem:this._stateElem}),this._elem.addEventListener("click",this._onClockDisplayClick.bind(this))}return l(e,[{key:"_onClockDisplayClick",value:function(e){var t=e.target.closest('[data-element="btn"]'),n=e.target.closest('[data-element="units"]');t?this._toggleClockDisplay():n&&this._switchTimerState(),this._stateElem.style.color=this._counting?"rgba(168, 210, 240, 0.9)":""}},{key:"_toggleClockDisplay",value:function(){var e=this._elem.querySelector('[data-display="timer"]'),t=this._elem.querySelector('[data-display="settings"]');e.classList.toggle("js-hidden"),t.classList.toggle("js-hidden")}},{key:"_switchTimerState",value:function(){var e=this._elem.querySelector("#session").value;e<10&&(e="0"+e);var t=this._elem.querySelector("#break").value;t<10&&(t="0"+t),this._counting?(this._timer.stop(e),this._counting=!1):(this._timer.start(e,t),this._counting=!0)}}]),e}();t.default=d},function(e,t,n){function s(e){var t="";return t+='<div class="clock"><div class="clock__timer" data-display="timer"><div class="clock__status" data-element="state">Focus</div><div class="clock__units" data-element="units"><span class="clock__min" data-element="minutes">25</span><span class="clock__semicolon">:</span><span class="clock__sec" data-element="seconds">00</span></div><div class="clock__btn" data-element="btn"><span class="clock__btn-title">Settings</span><span class="clock__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" width="22" height="22"><path d="M53.188 23.518l-3.128-.602c-1.842-.354-3.35-1.607-4.035-3.354-.686-1.745-.433-3.69.677-5.203l1.964-2.68c.292-.397.25-.95-.1-1.298L44.324 6.14c-.34-.34-.87-.39-1.268-.12l-2.638 1.785c-1.552 1.052-3.505 1.23-5.224.482-1.72-.75-2.916-2.305-3.2-4.158L31.487.846C31.413.36 30.994 0 30.5 0h-6c-.48 0-.892.34-.982.812l-.777 4.04c-.346 1.8-1.564 3.296-3.26 3.997-1.693.703-3.612.506-5.13-.522L10.944 6.02c-.397-.268-.93-.218-1.268.12l-4.243 4.243c-.35.35-.39.9-.1 1.3l1.964 2.678c1.11 1.513 1.362 3.458.677 5.204-.686 1.745-2.194 3-4.036 3.353L.81 23.52c-.47.088-.81.5-.81.98v6c0 .493.36.913.848.988l3.283.505c1.854.285 3.41 1.48 4.158 3.2.75 1.72.57 3.673-.482 5.226L6.02 43.056c-.27.396-.218.93.12 1.268l4.243 4.242c.35.348.9.393 1.298.1l2.68-1.964c1.512-1.11 3.457-1.365 5.202-.677 1.746.685 3 2.193 3.354 4.035l.602 3.13c.09.47.503.81.982.81h6c.494 0 .914-.36.988-.848l.355-2.31c.292-1.895 1.523-3.464 3.294-4.197 1.77-.73 3.75-.495 5.297.64l1.884 1.38c.4.294.95.25 1.298-.1l4.242-4.24c.34-.34.39-.872.12-1.27l-1.785-2.637c-1.052-1.553-1.232-3.506-.482-5.225.75-1.72 2.305-2.916 4.16-3.2l3.28-.506c.49-.074.85-.494.85-.987v-6c0-.48-.34-.892-.812-.982zM52 29.642l-2.435.375c-2.535.39-4.66 2.026-5.687 4.378-1.025 2.35-.78 5.022.66 7.146l1.323 1.955-3.05 3.052-1.193-.874c-2.115-1.55-4.822-1.875-7.246-.874-2.42 1.003-4.106 3.148-4.504 5.74L29.642 52h-4.316l-.446-2.316c-.484-2.52-2.2-4.583-4.588-5.52-2.385-.938-5.047-.59-7.115.925l-1.987 1.456-3.052-3.052 1.324-1.954c1.438-2.123 1.685-4.795.66-7.146-1.027-2.35-3.153-3.987-5.688-4.377L2 29.642v-4.315l2.317-.445c2.52-.484 4.582-2.2 5.52-4.587.937-2.388.59-5.048-.926-7.117L7.455 11.19l3.052-3.052 2.723 1.845c2.076 1.407 4.7 1.675 7.017.713 2.317-.96 3.984-3.004 4.458-5.468L25.325 2h4.317l.375 2.435c.39 2.535 2.027 4.66 4.378 5.687 2.35 1.026 5.022.778 7.146-.66l1.955-1.322 3.052 3.052-1.457 1.986c-1.517 2.068-1.863 4.73-.925 7.117.937 2.388 3 4.103 5.52 4.587l2.315.444v4.316z"/><path d="M27.5 17C21.71 17 17 21.71 17 27.5S21.71 38 27.5 38 38 33.29 38 27.5 33.29 17 27.5 17zm0 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/><path d="M27.5 22c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg></span></div></div><div class="clock__settings js-hidden" data-display="settings"><div class="clock__status">Settings</div><div class="clock__values"><label>Session<input type="text" id="session" value="25" data-element="field"></label><label>Break<input type="text" id="break" value="5" data-element="field"></label></div><div class="clock__save-btn" data-element="btn"><span class="clock__btn-title">Save</span><span class="clock__img"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 401.506 401.506"><path d="M397.373 135.487L267.743 5.867c-2.67-2.67-6.22-4.142-9.992-4.142-3.772 0-7.32 1.47-9.99 4.142L209.506 44.12c-2.67 2.67-4.14 6.218-4.14 9.99 0 3.775 1.47 7.323 4.14 9.993l5.575 5.562-95.652 95.653-104.114 25.714c-4.944 1.22-8.863 5.025-10.227 9.93-1.367 4.91.02 10.187 3.622 13.777l78.172 78.176-82.74 82.74c-2.67 2.67-4.142 6.22-4.142 9.99 0 3.773 1.47 7.322 4.14 9.992 2.672 2.67 6.22 4.143 9.993 4.143s7.32-1.472 9.992-4.142l82.74-82.738 78.188 78.18c3.556 3.56 8.76 5 13.796 3.62 4.89-1.36 8.693-5.28 9.914-10.226l25.704-104.104.396-.396 95.257-95.257 9.017 9.016c2.632 2.63 6.274 4.14 9.993 4.14 3.773 0 7.322-1.47 9.99-4.14l38.254-38.262c5.51-5.508 5.51-14.47 0-19.983zm-210.04 217.9L46.402 212.465l75.882-18.742 83.78 83.79-18.733 75.874zm34.362-100.213l-75.072-75.08 88.44-88.443 75.07 75.08-88.438 88.444zm127.434-89.42L239.483 54.11l18.267-18.267L367.398 145.48l-18.268 18.274z"/></svg></span></div></div></div>'}n(3);e.exports=s},function(e,t,n){"use strict";function s(e,t){if(1===arguments.length){for(var n=e[0],i=1;i<e.length;i++)n=s(n,e[i]);return n}for(var l in t)if("class"===l){var a=e[l]||[];e[l]=(Array.isArray(a)?a:[a]).concat(t[l]||[])}else if("style"===l){var a=r(e[l]),c=r(t[l]);e[l]=a+(a&&c&&";")+c}else e[l]=t[l];return e}function i(e,t){for(var n,s="",i="",l=Array.isArray(t),r=0;r<e.length;r++)n=a(e[r]),n&&(l&&t[r]&&(n=u(n)),s=s+i+n,i=" ");return s}function l(e){var t="",n="";for(var s in e)s&&e[s]&&d.call(e,s)&&(t=t+n+s,n=" ");return t}function a(e,t){return Array.isArray(e)?i(e,t):e&&"object"==typeof e?l(e):e||""}function r(e){if(!e)return"";if("object"==typeof e){var t="",n="";for(var s in e)d.call(e,s)&&(t=t+n+s+":"+e[s],n=";");return t}return e=""+e,";"===e[e.length-1]?e.slice(0,-1):e}function c(e,t,n,s){return t!==!1&&null!=t&&(t||"class"!==e&&"style"!==e)?t===!0?" "+(s?e:e+'="'+e+'"'):("function"==typeof t.toJSON&&(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||t.indexOf('"')===-1)?(n&&(t=u(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"):""}function o(e,t){var n="";for(var s in e)if(d.call(e,s)){var i=e[s];if("class"===s){i=a(i),n=c(s,i,!1,t)+n;continue}"style"===s&&(i=r(i)),n+=c(s,i,!1,t)}return n}function u(e){var t=""+e,n=f.exec(t);if(!n)return e;var s,i,l,a="";for(s=n.index,i=0;s<t.length;s++){switch(t.charCodeAt(s)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}i!==s&&(a+=t.substring(i,s)),i=s+1,a+=l}return i!==s?a+t.substring(i,s):a}function h(e,t,s,i){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&t||i))throw e.message+=" on line "+s,e;try{i=i||n(4).readFileSync(t,"utf8")}catch(t){h(e,null,s)}var l=3,a=i.split("\n"),r=Math.max(s-l,0),c=Math.min(a.length,s+l),l=a.slice(r,c).map(function(e,t){var n=t+r+1;return(n==s?"  > ":"    ")+n+"| "+e}).join("\n");throw e.path=t,e.message=(t||"Pug")+":"+s+"\n"+l+"\n\n"+e.message,e}var d=Object.prototype.hasOwnProperty;t.merge=s,t.classes=a,t.style=r,t.attr=c,t.attrs=o;var f=/["&<>]/;t.escape=u,t.rethrow=h},function(e,t){},function(e,t){},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=function(){function e(t){n(this,e),this._minutesElem=t.minutesElem,this._secondsElem=t.secondsElem,this._stateElem=t.stateElem,this._isSession=!0}return s(e,[{key:"start",value:function(e,t){var n=this;this._sessionLength=e,this._breakLength=t,this._timeInSeconds=60*(this._isSession?this._sessionLength:this._breakLength)-1,this._timer=setInterval(function(){var e=n._updateTime(n._timeInSeconds);n._render(e.minutes,e.seconds)},1e3)}},{key:"stop",value:function(e){clearInterval(this._timer),this._isSession=!0,this._render(e)}},{key:"_updateTime",value:function(e){e<1&&(this._isSession=!this._isSession,this._timeInSeconds=60*(this._isSession?this._sessionLength:this._breakLength)+1);var t=Math.floor(e/60%60);t<10&&(t="0"+t);var n=Math.floor(e%60);return n<10&&(n="0"+n),this._timeInSeconds--,{minutes:t,seconds:n}}},{key:"_render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"00",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00";this._minutesElem.innerHTML=e,this._secondsElem.innerHTML=t,this._stateElem.innerHTML=this._isSession?"Focus":"Break"}}]),e}();t.default=i},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=function(){function e(t){n(this,e),this._elem=t.elem,this._minutesElem=t.minutesElem,this._inputAttribute=t.inputAttribute,this._sessionFieldId=t.sessionFieldId,this._elem.addEventListener("input",this._onFieldValueChange.bind(this)),this._elem.addEventListener("keypress",this._onFieldKeyPress.bind(this)),this._elem.addEventListener("focus",this._onFieldFocus.bind(this),!0)}return s(e,[{key:"_onFieldValueChange",value:function(e){var t=e.target.closest(this._inputAttribute),n=t.value;n<1?n=t.value=1:n>60?n=t.value=60:(n.length>2||n[0]<1)&&(n=t.value=n.slice(1)),t.id===this._sessionFieldId&&(n<10&&(n="0"+n),this._minutesElem.innerHTML=n)}},{key:"_onFieldFocus",value:function(e){var t=e.target.closest(this._inputAttribute);t&&t.select()}},{key:"_onFieldKeyPress",value:function(e){if(!(e.ctrlKey||e.altKey||e.metaKey)){var t=this._getChar(e);null!=t&&(t<"0"||t>"9")&&e.preventDefault()}}},{key:"_getChar",value:function(e){return null==e.which?e.keyCode<32?null:String.fromCharCode(e.keyCode):0!=e.which&&0!=e.charCode?e.which<32?null:String.fromCharCode(e.which):null}}]),e}();t.default=i}]);