(()=>{"use strict";var e={90:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(645),o=i.n(s)()((function(e){return e[1]}));o.push([e.id,':host{--divider-width: 1px;--divider-color: #fff;--divider-shadow: none;--default-handle-width: 50px;--default-handle-color: #fff;--default-handle-opacity: 1;--default-handle-shadow: none;position:relative;display:inline-block;overflow:hidden;line-height:0;direction:ltr}@media screen and (-webkit-min-device-pixel-ratio: 0)and (min-resolution: 0.001dpcm){:host{outline-offset:1px}}::slotted(*){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.first{position:absolute;left:0;top:0;line-height:normal;font-size:100%;max-height:100%;height:100%;width:100%;--exposure: 50%;--transition-time: 0ms;transform:translateX(calc(var(--exposure) * -1));transition:transform var(--transition-time)}.first .first-overlay-container{position:relative;transform:translateX(var(--exposure));transition:transform var(--transition-time);height:100%}.first .first-overlay{overflow:hidden;height:100%}.first.focused{will-change:transform}.first.focused .first-overlay-container{will-change:transform}@media not all and (min-resolution: 0.001dpcm){@supports(-webkit-appearance: none){.first.focused{will-change:auto}.first.focused .first-overlay-container{will-change:auto}}}.second{position:relative}.handle-container{transform:translateX(50%);position:absolute;top:0;right:0;height:100%;display:flex;align-items:flex-end;justify-content:center;flex-direction:column}.divider{position:absolute;height:100%;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:center;flex-direction:column}.divider:after{content:" ";display:block;height:100%;border-left-width:var(--divider-width);border-left-style:solid;border-left-color:var(--divider-color);box-shadow:var(--divider-shadow)}.handle{pointer-events:none;box-sizing:border-box;margin-left:1px;transform:translateX(-0.5px)}.default-handle{width:var(--default-handle-width);opacity:var(--default-handle-opacity);transition:all 1s;filter:drop-shadow(var(--default-handle-shadow))}.default-handle path{stroke:var(--default-handle-color)}.vertical.first{transform:translateY(calc(var(--exposure) * -1))}.vertical.first .first-overlay-container{transform:translateY(var(--exposure))}.vertical .handle-container{transform:translateY(50%);height:auto;top:unset;bottom:0;width:100%;left:0;flex-direction:row}.vertical .divider:after{height:1px;width:100%;border-top-width:var(--divider-width);border-top-style:solid;border-top-color:var(--divider-color);border-left:0}.vertical .handle{transform:translateX(-0.5px) rotate(90deg)}',""]);const n=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,s){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(s)for(var n=0;n<this.length;n++){var r=this[n][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);s&&o[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),t.push(d))}},t}}},t={};function i(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={id:s,exports:{}};return e[s](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=i(90);const t="rendered",s=document.createElement("template");s.innerHTML='<div class="second" id="second"> <slot name="second"><slot name="before"></slot></slot> </div> <div class="first" id="first"> <div class="first-overlay"> <div class="first-overlay-container" id="firstImageContainer"> <slot name="first"><slot name="after"></slot></slot> </div> </div> <div class="handle-container"> <div class="divider"></div> <div class="handle"> <slot name="handle"> <svg xmlns="http://www.w3.org/2000/svg" class="default-handle" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"/> </svg> </slot> </div> </div> </div> ';const o={ArrowLeft:-1,ArrowRight:1},n=["horizontal","vertical"],r=e=>({x:e.touches[0].pageX,y:e.touches[0].pageY}),a=e=>({x:e.pageX,y:e.pageY});class d extends HTMLElement{constructor(){super(),this.exposure=this.hasAttribute("value")?parseFloat(this.getAttribute("value")):50,this.slideOnHover=!1,this.slideDirection="horizontal",this.keyboard="enabled",this.isMouseDown=!1,this.isFocused=!1,this.onMouseMove=e=>{if(this.isMouseDown||this.slideOnHover){const t=a(e);this.slideToPage(t)}},this.bodyUserSelectStyle="",this.onMouseDown=e=>{if(this.slideOnHover)return;window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onWindowMouseUp),this.isMouseDown=!0,this.enableTransition();const t=a(e);this.slideToPage(t),this.focus(),this.bodyUserSelectStyle=window.document.body.style.userSelect,window.document.body.style.userSelect="none"},this.onWindowMouseUp=()=>{this.isMouseDown=!1,window.document.body.style.userSelect=this.bodyUserSelectStyle,window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onWindowMouseUp)},this.isTouchComparing=!1,this.hasTouchMoved=!1,this.onTouchStart=e=>{this.touchStartPoint=r(e),this.isFocused&&(this.enableTransition(),this.slideToPage(this.touchStartPoint))},this.onTouchMove=e=>{const t=r(e);if(this.isTouchComparing)return this.slideToPage(t),e.preventDefault(),!1;if(!this.hasTouchMoved){const i=Math.abs(t.y-this.touchStartPoint.y),s=Math.abs(t.x-this.touchStartPoint.x);if("horizontal"===this.slideDirection&&i<s||"vertical"===this.slideDirection&&i>s)return this.isTouchComparing=!0,this.focus(),this.slideToPage(t),e.preventDefault(),!1;this.hasTouchMoved=!0}},this.onTouchEnd=()=>{this.isTouchComparing=!1,this.hasTouchMoved=!1},this.onBlur=()=>{this.stopSlideAnimation(),this.isFocused=!1,this.firstElement.classList.remove("focused")},this.onFocus=()=>{this.isFocused=!0,this.firstElement.classList.add("focused")},this.onKeyDown=e=>{if("disabled"===this.keyboard)return;if(this.isAnimating)return;this.isAnimating=!0;const t=e.key;void 0!==o[t]&&this.startSlideAnimation(o[t])},this.onKeyUp=e=>{"disabled"!==this.keyboard&&this.isAnimating&&void 0!==o[e.key]&&this.stopSlideAnimation()},this.resetDimensions=()=>{this.imageWidth=this.offsetWidth,this.imageHeight=this.offsetHeight};const t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.innerHTML=e.Z,this.getAttribute("nonce")&&i.setAttribute("nonce",this.getAttribute("nonce")),t.appendChild(i),t.appendChild(s.content.cloneNode(!0)),this.firstElement=t.getElementById("first"),this.firstImageContainerElement=t.getElementById("firstImageContainer"),this.secondElement=t.getElementById("second")}get value(){return this.exposure}set value(e){const t=parseFloat(e);t!==this.exposure&&(this.exposure=t,this.enableTransition(),this.setExposure())}get hover(){return this.slideOnHover}set hover(e){this.slideOnHover="false"!==e.toString().toLowerCase(),this.removeEventListener("mousemove",this.onMouseMove),this.slideOnHover&&this.addEventListener("mousemove",this.onMouseMove)}get direction(){return this.slideDirection}set direction(e){this.slideDirection=e.toString().toLowerCase(),this.slide(0),this.firstElement.classList.remove(...n),n.includes(this.slideDirection)&&this.firstElement.classList.add(this.slideDirection)}static get observedAttributes(){return["hover","direction"]}connectedCallback(){this.hasAttribute("tabindex")||(this.tabIndex=0),this.addEventListener("dragstart",(e=>(e.preventDefault(),!1))),new ResizeObserver(this.resetDimensions).observe(this),this.setExposure(0),this.keyboard=this.hasAttribute("keyboard")&&"disabled"===this.getAttribute("keyboard")?"disabled":"enabled",this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keyup",this.onKeyUp),this.addEventListener("focus",this.onFocus),this.addEventListener("blur",this.onBlur),this.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.addEventListener("touchend",this.onTouchEnd),this.addEventListener("mousedown",this.onMouseDown),this.hover=!!this.hasAttribute("hover")&&this.getAttribute("hover"),this.direction=this.hasAttribute("direction")?this.getAttribute("direction"):"horizontal",this.resetDimensions(),this.classList.contains(t)||this.classList.add(t),this.querySelectorAll('[slot="before"], [slot="after"]').length>0&&console.warn('<img-comparison-slider>: slot names "before" and "after" are deprecated and soon won\'t be supported. Please use slot="first" instead of slot="after", and slot="second" instead of slot="before".')}disconnectedCallback(){this.transitionTimer&&window.clearTimeout(this.transitionTimer)}attributeChangedCallback(e,t,i){"hover"===e&&(this.hover=i),"direction"===e&&(this.direction=i),"keyboard"===e&&(this.keyboard="disabled"===i?"disabled":"enabled")}setExposure(e=0){var t;this.exposure=(100,(t=this.exposure+e)<0?0:t>100?100:t),this.firstElement.style.setProperty("--exposure",100-this.exposure+"%")}slide(e=0){this.setExposure(e);const t=new Event("slide");this.dispatchEvent(t)}slideToPage(e){"horizontal"===this.slideDirection&&this.slideToPageX(e.x),"vertical"===this.slideDirection&&this.slideToPageY(e.y)}slideToPageX(e){const t=e-this.getBoundingClientRect().left-window.scrollX;this.exposure=t/this.imageWidth*100,this.slide(0)}slideToPageY(e){const t=e-this.getBoundingClientRect().top-window.scrollY;this.exposure=t/this.imageHeight*100,this.slide(0)}enableTransition(){this.firstElement.style.setProperty("--transition-time","100ms"),this.transitionTimer=window.setTimeout((()=>{this.firstElement.style.setProperty("--transition-time","0ms"),this.transitionTimer=null}),100)}startSlideAnimation(e){let t=null;const i=s=>{null===t&&(t=s);const o=(s-t)/16.666666666666668*e;this.slide(o),this.isAnimating&&(window.requestAnimationFrame(i),t=s)};window.requestAnimationFrame(i)}stopSlideAnimation(){this.isAnimating=!1}}"undefined"!=typeof window&&window.customElements.define("img-comparison-slider",d)})()})();
//# sourceMappingURL=img-comparison-slider.js.map