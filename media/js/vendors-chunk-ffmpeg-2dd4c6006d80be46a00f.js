(window.__webStories_webpackJsonp=window.__webStories_webpackJsonp||[]).push([[18],{805:function(e,t,r){r(830);const n=r(831),{fetchFile:o}=r(828);e.exports={createFFmpeg:n,fetchFile:o}},826:function(e,t,r){var n,o;void 0===(o="function"==typeof(n=function(){function e(){var e=arguments.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var t=document.createElement("base");if(t.href=arguments[0],1===e)return t.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(t,r.firstChild);for(var n,o=document.createElement("a"),i=1;i<e;i++)o.href=arguments[i],n=o.href,t.href=n;return r.removeChild(t),n}return e})?n.call(t,r,t,e):n)||(e.exports=o)},827:function(e,t){let r=!1,n=()=>{};e.exports={logging:r,setLogging:e=>{r=e},setCustomLogger:e=>{n=e},log:(e,t)=>{n({type:e,message:t}),r&&console.log(`[${e}] ${t}`)}}},828:function(e,t,r){const n=r(835),o=r(836),i=r(837);e.exports={defaultOptions:n,getCreateFFmpegCore:o,fetchFile:i}},829:function(e){e.exports=JSON.parse('{"name":"@ffmpeg/ffmpeg","version":"0.9.7","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.8.5","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.2.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}')},830:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof Generator?t:Generator,i=Object.create(o.prototype),a=new Context(n||[]);return i._invoke=function(e,t,r){var n=u;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=F(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?m:p,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var u="suspendedStart",p="suspendedYield",h="executing",m="completed",g={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var d={};d[i]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(L([])));w&&w!==r&&n.call(w,i)&&(d=w);var v=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function AsyncIterator(e,t){function r(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var f=c.arg,u=f.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(u).then((function(e){f.value=e,a(f)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function F(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,F(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return GeneratorFunction.prototype=v.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunction.displayName=c(GeneratorFunctionPrototype,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,c(e,s,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(AsyncIterator.prototype),AsyncIterator.prototype[a]=function(){return this},e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(v),c(v,s,"Generator"),v[i]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},831:function(e,t,r){const{defaultArgs:n,baseOptions:o}=r(832),{setLogging:i,setCustomLogger:a,log:s}=r(827),c=r(833),f=r(834),{defaultOptions:l,getCreateFFmpegCore:u}=r(828),{version:p}=r(829),h=Error("ffmpeg.wasm is not ready, make sure you have completed load().");e.exports=(e={})=>{const{log:t,logger:r,progress:m,...g}={...o,...l,...e};let d=null,y=null,w=null,v=!1,b=m;const F=({type:e,message:t})=>{s(e,t),c(t,b),(e=>{"FFMPEG_END"===e&&null!==w&&(w(),w=null,v=!1)})(t)};return i(t),a(r),s("info",`use ffmpeg.wasm v${p}`),{setProgress:e=>{b=e},setLogger:e=>{a(e)},setLogging:i,load:async()=>{if(s("info","load ffmpeg-core"),null!==d)throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");{s("info","loading ffmpeg-core");const{createFFmpegCore:e,corePath:t,workerPath:r,wasmPath:n}=await u(g);d=await e({mainScriptUrlOrBlob:t,printErr:e=>F({type:"fferr",message:e}),print:e=>F({type:"ffout",message:e}),locateFile:(e,t)=>{if("undefined"!=typeof window){if(void 0!==n&&e.endsWith("ffmpeg-core.wasm"))return n;if(void 0!==r&&e.endsWith("ffmpeg-core.worker.js"))return r}return t+e}}),y=d.cwrap("proxy_main","number",["number","number"]),s("info","ffmpeg-core loaded")}},isLoaded:()=>null!==d,run:(...e)=>{if(s("info",`run ffmpeg command: ${e.join(" ")}`),null===d)throw h;if(v)throw Error("ffmpeg.wasm can only run one command at a time");return v=!0,new Promise((t=>{const r=[...n,...e].filter((e=>0!==e.length));w=t,y(...f(d,r))}))},FS:(e,...t)=>{if(s("info",`run FS.${e} ${t.map((e=>"string"==typeof e?e:`<${e.length} bytes binary file>`)).join(" ")}`),null===d)throw h;{let r=null;try{r=d.FS[e](...t)}catch(r){throw"readdir"===e?Error(`ffmpeg.FS('readdir', '${t[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`):"readFile"===e?Error(`ffmpeg.FS('readFile', '${t[0]}') error. Check if the path exists`):Error("Oops, something went wrong in FS operation.")}return r}}}}},832:function(e,t){e.exports={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}}},833:function(e,t){let r=0;const n=e=>{const[t,r,n]=e.split(":");return 60*parseFloat(t)*60+60*parseFloat(r)+parseFloat(n)};e.exports=(e,t)=>{if("string"==typeof e)if(e.startsWith("  Duration")){const t=e.split(", ")[0].split(": ")[1],o=n(t);(0===r||r>o)&&(r=o)}else if(e.startsWith("frame")||e.startsWith("size")){const o=e.split("time=")[1].split(" ")[0];t({ratio:n(o)/r})}else e.startsWith("video:")&&(t({ratio:1}),r=0)}},834:function(e,t){e.exports=(e,t)=>{const r=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach(((t,n)=>{const o=e._malloc(t.length+1);e.writeAsciiToMemory(t,o),e.setValue(r+Uint32Array.BYTES_PER_ELEMENT*n,o,"i32")})),[t.length,r]}},835:function(e,t,r){(function(t){const n=r(826),{devDependencies:o}=r(829);e.exports={corePath:void 0!==t&&"development"===t.env.FFMPEG_ENV?n("/node_modules/@ffmpeg/core/dist/ffmpeg-core.js"):`https://unpkg.com/@ffmpeg/core@${o["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`}}).call(this,r(360))},836:function(e,t,r){const n=r(826),{log:o}=r(827),i=async(e,t)=>{o("info",`fetch ${e}`);const r=await(await fetch(e)).arrayBuffer();o("info",`${e} file size = ${r.byteLength} bytes`);const n=new Blob([r],{type:t}),i=URL.createObjectURL(n);return o("info",`${e} blob URL = ${i}`),i};e.exports=async({corePath:e})=>{if("string"!=typeof e)throw Error("corePath should be a string!");const t=n(e),r=await i(t,"application/javascript"),a=await i(t.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),s=await i(t.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return"undefined"==typeof createFFmpegCore?new Promise((e=>{const t=document.createElement("script"),n=()=>{t.removeEventListener("load",n),o("info","ffmpeg-core.js script loaded"),e({createFFmpegCore:createFFmpegCore,corePath:r,wasmPath:a,workerPath:s})};t.src=r,t.type="text/javascript",t.addEventListener("load",n),document.getElementsByTagName("head")[0].appendChild(t)})):(o("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore:createFFmpegCore,corePath:r,wasmPath:a,workerPath:s}))}},837:function(e,t,r){const n=r(826);e.exports=async e=>{let t=e;if(void 0===e)return new Uint8Array;if("string"==typeof e)if(/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e))t=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const r=await fetch(n(e));t=await r.arrayBuffer()}else(e instanceof File||e instanceof Blob)&&(t=await(r=e,new Promise(((e,t)=>{const n=new FileReader;n.onload=()=>{e(n.result)},n.onerror=({target:{error:{code:e}}})=>{t(Error(`File could not be read! Code=${e}`))},n.readAsArrayBuffer(r)}))));var r;return new Uint8Array(t)}}}]);