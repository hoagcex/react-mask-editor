!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["@la-voliere/react-mask-editor"]=t(require("react")):e["@la-voliere/react-mask-editor"]=t(e.react)}(self,(e=>(()=>{"use strict";var t={392:(e,t,r)=>{r.r(t)},607:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||a(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(66),t),n(r(593),t)},66:function(e,t,r){var a=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function i(e){try{u(a.next(e))}catch(e){o(e)}}function l(e){try{u(a.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}u((a=a.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.MaskEditor=t.MaskEditorDefaults=void 0;var o=r(156);r(392);var i=r(593);t.MaskEditorDefaults={cursorSize:10,maskOpacity:.75,maskColor:"#23272d",maskBlendMode:"normal"},t.MaskEditor=function(e){var r,l,u,c,s,f,d=e.src,v=null!==(r=e.cursorSize)&&void 0!==r?r:t.MaskEditorDefaults.cursorSize,h=null!==(l=e.maskColor)&&void 0!==l?l:t.MaskEditorDefaults.maskColor,y=null!==(u=e.maskBlendMode)&&void 0!==u?u:t.MaskEditorDefaults.maskBlendMode,m=null!==(c=e.maskOpacity)&&void 0!==c?c:t.MaskEditorDefaults.maskOpacity,p=o.useRef(null),g=o.useRef(null),b=o.useRef(null),x=o.useState(null),k=x[0],w=x[1],E=o.useState(null),S=E[0],M=E[1],_=o.useState(null),C=_[0],D=_[1],O=o.useState({x:0,y:0}),P=O[0],R=O[1];o.useLayoutEffect((function(){if(p.current&&!k){var e=p.current.getContext("2d");w(e)}}),[p]),o.useLayoutEffect((function(){if(g.current&&!k){var e=g.current.getContext("2d");e&&(e.fillStyle="#ffffff",e.fillRect(0,0,P.x,P.y)),M(e)}}),[g,P]),o.useLayoutEffect((function(){if(b.current&&!k){var e=b.current.getContext("2d");D(e)}}),[b]),o.useEffect((function(){a(void 0,void 0,void 0,(function(){var e,t,r;return n(this,(function(o){switch(o.label){case 0:if(!d||!k)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,(i=d,a(void 0,void 0,void 0,(function(){var e,t;return n(this,(function(r){switch(r.label){case 0:return[4,fetch(i)];case 1:if(!(e=r.sent()).ok)throw new Error("Failed to fetch image: ".concat(e.statusText));return[4,e.blob()];case 2:return t=r.sent(),[2,new Promise((function(e,r){var a=new FileReader;a.onloadend=function(){return e(a.result)},a.onerror=r,a.readAsDataURL(t)}))]}}))})))];case 2:return e=o.sent(),(t=new Image).onload=function(){(null==P?void 0:P.x)!==t.width&&(null==P?void 0:P.y)!==t.height&&R({x:t.width,y:t.height});var e=p.current;e&&(e.width=t.width,e.height=t.height),null==k||k.drawImage(t,0,0,t.width,t.height)},t.src=e,[3,4];case 3:return r=o.sent(),console.error("Error loading image:",r),[3,4];case 4:return[2]}var i}))}))}),[d,null===(s=p.current)||void 0===s?void 0:s.width,null===(f=p.current)||void 0===f?void 0:f.height,k,P]),o.useLayoutEffect((function(){e.canvasRef&&(e.canvasRef.current=g.current)}),[g]),o.useEffect((function(){var t,r,a=function(e){C&&(C.clearRect(0,0,P.x,P.y),C.beginPath(),C.fillStyle="".concat(h,"88"),C.strokeStyle=h,C.arc(e.offsetX,e.offsetY,v,0,360),C.fill(),C.stroke()),S&&e.buttons>0&&(S.beginPath(),S.fillStyle=e.buttons>1||e.shiftKey?"#ffffff":h,S.arc(e.offsetX,e.offsetY,v,0,360),S.fill())},n=function(t){C&&(e.onCursorSizeChange(Math.max(0,v+(t.deltaY>0?1:-1))),C.clearRect(0,0,P.x,P.y),C.beginPath(),C.fillStyle="".concat(h,"88"),C.strokeStyle=h,C.arc(t.offsetX,t.offsetY,v,0,360),C.fill(),C.stroke(),t.stopPropagation(),t.preventDefault())};return null===(t=b.current)||void 0===t||t.addEventListener("mousemove",a),e.onCursorSizeChange&&(null===(r=b.current)||void 0===r||r.addEventListener("wheel",n)),function(){var t,r;null===(t=b.current)||void 0===t||t.removeEventListener("mousemove",a),e.onCursorSizeChange&&(null===(r=b.current)||void 0===r||r.removeEventListener("wheel",n))}}),[C,S,b,v,h,P]);var j=o.useCallback((function(e,t){var r=null==S?void 0:S.getImageData(0,0,P.x,P.y),a=(0,i.hexToRgb)(e);if(r){for(var n=0;n<(null==r?void 0:r.data.length);n+=4){var o=255===r.data[n]!=t?[255,255,255]:a;r.data[n]=o[0],r.data[n+1]=o[1],r.data[n+2]=o[2],r.data[n+3]=r.data[n+3]}null==S||S.putImageData(r,0,0)}}),[S,P]);return o.useEffect((function(){return j(h,!1)}),[h,P]),o.createElement("div",{className:"react-mask-editor-outer"},o.createElement("div",{className:"react-mask-editor-inner",style:{width:P.x,height:P.y},key:"test"},o.createElement("canvas",{ref:p,key:"no-rerender",style:{width:P.x,height:P.y},width:P.x,height:P.y,className:"react-mask-editor-base-canvas"}),o.createElement("canvas",{ref:g,width:P.x,height:P.y,style:{width:P.x,height:P.y,opacity:m,mixBlendMode:y},className:"react-mask-editor-mask-canvas"}),o.createElement("canvas",{ref:b,width:P.x,height:P.y,style:{width:P.x,height:P.y},className:"react-mask-editor-cursor-canvas"})))}},593:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=t.toMask=void 0,t.toMask=function(e){var t=e.getContext("2d"),r={x:e.width,y:e.height};console.log(r);var a=null==t?void 0:t.getImageData(0,0,r.x,r.y),n=Uint8ClampedArray.from(a.data);if(a){for(var o=0;o<(null==a?void 0:a.data.length);o+=4){var i=255===a.data[o]?[255,255,255]:[0,0,0];a.data[o]=i[0],a.data[o+1]=i[1],a.data[o+2]=i[2],a.data[o+3]=255}null==t||t.putImageData(a,0,0)}var l=e.toDataURL();for(o=0;o<(null==a?void 0:a.data.length);o++)a.data[o]=n[o];return t.putImageData(a,0,0),l},t.hexToRgb=function(e){return e.replace("#","").match(/.{1,2}/g).map((function(e){return parseInt(e,16)}))}},156:t=>{t.exports=e}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}return a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(607)})()));