var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=f||l||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return u.Date.now()};function v(e,t,n){var i,o,r,a,f,l,u=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,u=t,a=e.apply(r,n)}function S(e){return u=e,f=setTimeout(j,t),c?y(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-u>=r}function j(){var e=m();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-l);return v?d(n,r-(e-u)):n}(e))}function O(e){return f=void 0,b&&i?y(e):(i=o=void 0,a)}function w(){var e=m(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:O(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector("input"),y=document.querySelector("textarea"),S=document.querySelector("button"),h={email:"",message:""};function j(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.value=e.email,y.value=e.message,h.email=e.email,h.message=e.message)}b.addEventListener("input",w),y.addEventListener("input",w),S.addEventListener("click",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));if(!t)return console.log("error: no input data"),void alert("All fields must be filled");if(!t.email||!t.message)return console.log("error: not all fields are filled"),alert("All fields must be filled"),void j();console.log(t),localStorage.removeItem("feedback-form-state"),h.email="",h.message="",b.value="",y.value=""})),j();const O=t((function(){localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500);function w(e){h[this.name]=e.target.value,O()}
//# sourceMappingURL=03-feedback.1415dba1.js.map
