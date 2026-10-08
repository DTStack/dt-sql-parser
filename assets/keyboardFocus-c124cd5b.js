var h=Object.defineProperty;var l=(t,e,i)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var d=(t,e,i)=>(l(t,typeof e!="symbol"?e+"":e,i),i);import{B as c,X as u,Y as _,Z as v,$ as E,a0 as f,a1 as g,a2 as m,a3 as y,a4 as p,a5 as S,a6 as w,a7 as I,a8 as C,a9 as b,aa as H,i as K}from"./index-2e3d4b76.js";var x=Object.defineProperty,F=Object.getOwnPropertyDescriptor,z=(t,e,i,o)=>{for(var n=o>1?void 0:o?F(e,i):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(o?s(e,i,n):s(n))||n);return o&&n&&x(e,i,n),n};let a=class extends c{constructor(){super("keyboardFocus");d(this,"state",null);d(this,"_hiddenEditor",null);d(this,"_hiddenEditorContainer",null);d(this,"_hiddenEditorStyle",null);d(this,"_focusedEditor",null);d(this,"_isInitialized",!1);d(this,"_globalKeydownHandler",null);d(this,"_services",null)}initialize(e){this._isInitialized||(this._services=e,window.requestAnimationFrame(()=>{this.createHiddenEditor(),this._isInitialized=!0}))}dispose(){this._isInitialized&&(this.disposeHiddenEditor(),this._isInitialized=!1)}ensureQuickInputContext(){this._isInitialized&&(this._focusedEditor&&this._focusedEditor.hasTextFocus()||this.focusHiddenEditor())}focusHiddenEditor(){if(!this._hiddenEditor||!this._hiddenEditorContainer)return;this._hiddenEditor.focus();const e=this._hiddenEditor.hasTextFocus();window.requestAnimationFrame(()=>{var i;e||(i=this._hiddenEditor)==null||i.focus()})}registerEditor(e){this._isInitialized&&this.setupEditorFocusTracking(e)}recreateHiddenEditor(){this._isInitialized&&(this.disposeHiddenEditor(),window.requestAnimationFrame(()=>{this.createHiddenEditor()}))}createHiddenEditor(){if(this._services)try{this._hiddenEditorContainer=document.createElement("div"),this._hiddenEditorContainer.className="mo-hidden-editor-container",document.body.appendChild(this._hiddenEditorContainer),this._hiddenEditorStyle=document.createElement("style"),this._hiddenEditorStyle.textContent=`
                .mo-hidden-editor-container {
                    pointer-events: none;
                    position: fixed;
                    left: -9999px;
                    top: -9999px;
                    width: 100vw;
                    height: 100vh;
                    z-index: 9999;
                }
                .mo-hidden-editor-container .monaco-editor {
                    background-color: transparent;
                    outline: none;
                }
                .mo-hidden-editor-container .monaco-editor > *:not(.overflow-guard) {
                    opacity: 0;
                }
                .mo-hidden-editor-container .monaco-editor .overflow-guard > *:not(.overlayWidgets) {
                    opacity: 0;
                }
                .mo-hidden-editor-container .monaco-editor .overflow-guard .overlayWidgets {
                    pointer-events: auto;
                }
            `,document.head.appendChild(this._hiddenEditorStyle),this._hiddenEditor=new u(this._hiddenEditorContainer,{readOnly:!0,minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"hidden"},lineNumbers:"off"},this._services.get(_),this._services.get(v),this._services.get(E),this._services.get(f),this._services.get(g),this._services.get(m),this._services.get(y),this._services.get(p),this._services.get(S),this._services.get(w),this._services.get(I),this._services.get(C),this._services.get(b),this._services.get(H)),this._globalKeydownHandler=this.handleGlobalKeydown.bind(this),document.addEventListener("keydown",this._globalKeydownHandler)}catch(e){console.warn("Failed to create hidden editor:",e)}}disposeHiddenEditor(){this._hiddenEditor&&(this._hiddenEditor.dispose(),this._hiddenEditor=null),this._hiddenEditorContainer&&this._hiddenEditorContainer.parentNode&&(this._hiddenEditorContainer.parentNode.removeChild(this._hiddenEditorContainer),this._hiddenEditorContainer=null),this._hiddenEditorStyle&&this._hiddenEditorStyle.parentNode&&(this._hiddenEditorStyle.parentNode.removeChild(this._hiddenEditorStyle),this._hiddenEditorStyle=null),this._globalKeydownHandler&&(document.removeEventListener("keydown",this._globalKeydownHandler),this._globalKeydownHandler=null),this._focusedEditor=null}setupEditorFocusTracking(e){e.onDidFocusEditorText(()=>{this._focusedEditor=e}),e.onDidBlurEditorText(()=>{this._focusedEditor===e&&(this._focusedEditor=null)})}handleGlobalKeydown(e){(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&this.ensureQuickInputContext()}};a=z([K()],a);export{a as KeyboardFocusService};
