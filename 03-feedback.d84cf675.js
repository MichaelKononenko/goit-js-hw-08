var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var o,i,r,a,u,f,c=0,l=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=r}function j(){var e=v();if(h(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return m?d(n,r-(e-c)):n}(e))}function O(e){return u=void 0,y&&o?b(e):(o=i=void 0,a)}function w(){var e=v(),n=h(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(m)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,r=(m="maxWait"in n)?s(g(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:O(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector("input"),b=document.querySelector("textarea"),S=document.querySelector("button"),h={email:"",message:""};y.addEventListener("input",O),b.addEventListener("input",O),S.addEventListener("click",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),localStorage.removeItem("feedback-form-state"),y.value="",b.value=""})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.value=e.email,b.value=e.message)}();const j=t((function(){localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500);function O(e){h[this.name]=e.target.value,j()}
//# sourceMappingURL=03-feedback.d84cf675.js.map
