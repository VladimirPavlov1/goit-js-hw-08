var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,p=function(){return c.Date.now()};function v(e,t,n){var o,i,r,u,f,a,c=0,l=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,f=setTimeout(w,t),l?b(e):u}function j(e){var n=e-a;return void 0===a||n>=t||n<0||v&&e-c>=r}function w(){var e=p();if(j(e))return T(e);f=setTimeout(w,function(e){var n=t-(e-a);return v?d(n,r-(e-c)):n}(e))}function T(e){return f=void 0,g&&o?b(e):(o=i=void 0,u)}function x(){var e=p(),n=j(e);if(o=arguments,i=this,a=e,n){if(void 0===f)return h(a);if(v)return f=setTimeout(w,t),b(a)}return void 0===f&&(f=setTimeout(w,t)),u}return t=y(t)||0,m(n)&&(l=!!n.leading,r=(v="maxWait"in n)?s(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},x.flush=function(){return void 0===f?u:T(p())},x}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?u(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const g=document.querySelector("iframe");console.dir(g);const b=new Vimeo.Player(g);console.log(b),b.on("timeupdate",t((function(e){e.preventDefault;let t=e.seconds;console.log(t),localStorage.setItem("videoplayer-current-time",t)}),1e3));let h=Number(localStorage.getItem("videoplayer-current-time"));console.log(h),b.setCurrentTime(h).then((function(e){h})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.377ea34b.js.map