"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_react-core_register-react-app_ts"],{5256(a,b,c){c.d(b,{N:()=>g,x:()=>h});var d=c(86975),e=c(80721);let f=null;function g(a){h(k(a))}function h(a){if((0,d.G$)())return i(a);f&&f.isConnected?i(a):(j(),setTimeout(()=>{i(a)},200))}function i(a){(0,d.G$)()&&(f=document.querySelector("#js-global-screen-reader-notice")),f&&(f.textContent===a?f.textContent=`${a}\u00A0`:f.textContent=a)}function j(){(0,d.G$)()||((f=document.createElement("div")).setAttribute("aria-live","polite"),f.classList.add("sr-only"),f.setAttribute("data-test-selector","aria-live-container"),document.body.append(f))}function k(a){return(a.getAttribute("aria-label")||a.innerText||"").trim()}!async function(){await e.x,j()}()},86975(a,b,c){c.d(b,{AU:()=>k,Ap:()=>x,DT:()=>p,"G$":()=>j,HN:()=>i,Lq:()=>g,T2:()=>v,Yg:()=>u,ag:()=>t,ck:()=>l,po:()=>s,q3:()=>m,uL:()=>w,wz:()=>o,xc:()=>h,xk:()=>q,zH:()=>f});var d=c(64707);let e="data-turbo-loaded";function f(){document.documentElement.setAttribute(e,"")}function g(){return document.documentElement.hasAttribute(e)}let h=()=>!(0,d.c)("PJAX_ENABLED"),i=a=>a?.tagName==="TURBO-FRAME",j=()=>(0,d.c)("TURBO_EXPERIMENT_RISKY");function k(a,b){let c=a.split("/",3).join("/"),d=b.split("/",3).join("/");return c===d}function l(a,b){let c=a.split("/",2).join("/"),d=b.split("/",2).join("/");return c===d}async function m(){let a=document.head.querySelectorAll("link[rel=stylesheet]"),b=new Set([...document.styleSheets].map(a=>a.href)),c=[];for(let d of a)""===d.href||b.has(d.href)||c.push(n(d));await Promise.all(c)}let n=(a,b=2e3)=>new Promise(c=>{let d=()=>{a.removeEventListener("error",d),a.removeEventListener("load",d),c()};a.addEventListener("load",d,{once:!0}),a.addEventListener("error",d,{once:!0}),setTimeout(d,b)}),o=(a,b)=>{let c=b||a.querySelectorAll("[data-turbo-replace]"),d=[...document.querySelectorAll("[data-turbo-replace]")];for(let e of c){let f=d.find(a=>a.id===e.id);f&&f.replaceWith(e)}},p=a=>{for(let b of a.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${b.getAttribute("href")}"],
           link[data-href="${b.getAttribute("data-href")}"]`)||document.head.append(b)},q=a=>{for(let b of a.querySelectorAll("script"))document.head.querySelector(`script[src="${b.getAttribute("src")}"]`)||r(b)},r=a=>{let{src:b}=a;if(!b)return;let c=document.createElement("script"),d=a.getAttribute("type");d&&(c.type=d),c.src=b,document.head&&document.head.appendChild(c)},s=a=>{let b=[];for(let c of a.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${c.getAttribute("http-equiv")}"]`)?.content!==c.content&&b.push(v(c.getAttribute("http-equiv")));return b},t=a=>{let b=a.querySelector("[data-turbo-head]")||a.head;return{title:b.querySelector("title")?.textContent,transients:[...b.querySelectorAll("[data-turbo-transient]")].map(a=>a.cloneNode(!0)),bodyClasses:a.querySelector("meta[name=turbo-body-classes]")?.content,replacedElements:[...a.querySelectorAll("[data-turbo-replace]")].map(a=>a.cloneNode(!0))}},u=()=>[...document.documentElement.attributes],v=a=>a.replace(/^x-/,"").replaceAll("-","_"),w=a=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:a}})),x=(a,b)=>{for(let c of a.attributes)b.hasAttribute(c.nodeName)||"aria-busy"===c.nodeName||a.removeAttribute(c.nodeName);for(let d of b.attributes)a.getAttribute(d.nodeName)!==d.nodeValue&&a.setAttribute(d.nodeName,d.nodeValue)}},80721(a,b,c){c.d(b,{C:()=>f,x:()=>e});var d=c(16462);let e=d.n4?.readyState==="interactive"||d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.n4?.addEventListener("DOMContentLoaded",()=>{a()})}),f=d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.iG?.addEventListener("load",a)})},64707(a,b,c){c.d(b,{"$":()=>g,c:()=>f});var d=c(15205);let e=(0,d.Z)(function(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}),f=(0,d.Z)(function(a){return -1!==e().indexOf(a)}),g={isFeatureEnabled:f}},78459(a,b,c){c.d(b,{Y:()=>o,q:()=>p});var d=c(88149),e=c(86058),f=c(86702),g=c(34855);let{getItem:h}=(0,f.Z)("localStorage"),i="dimension_",j,k=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let l=(0,d.n)("octolytics");delete l.baseContext,j=new e.R(l)}catch(m){}function n(a){let b=(0,d.n)("octolytics").baseContext||{};if(b)for(let c in delete b.app_id,delete b.event_url,delete b.host,b)c.startsWith(i)&&(b[c.replace(i,"")]=b[c],delete b[c]);let e=document.querySelector("meta[name=visitor-payload]");if(e){let f=JSON.parse(atob(e.content));Object.assign(b,f)}let h=new URLSearchParams(window.location.search);for(let[j,l]of h)k.includes(j.toLowerCase())&&(b[j]=l);return b.staff=`${(0,g.B)()}`,Object.assign(b,a)}function o(a){j?.sendPageView(n(a))}function p(a,b={}){let c=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,d=c?{service:c}:{};for(let[e,f]of Object.entries(b))null!=f&&(d[e]=`${f}`);j&&(q(a||"unknown",n(d)),j.sendEvent(a||"unknown",n(d)))}function q(a,b){}},86702(a,b,c){c.d(b,{Z:()=>g,"_":()=>h});var d=c(16462),e=c(34855);let f=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function g(a,b={throwQuotaErrorsOnSet:!1},c=d.iG,g=a=>a,h=a=>a){let i;try{if(!c)throw Error();i=c[a]||new f}catch{i=new f}let{throwQuotaErrorsOnSet:j}=b;function k(a){b.sendCacheStats&&(0,e.b)({incrementKey:a})}function l(a){try{if(i.removeItem(a),b.ttl){let c=`${a}:expiry`;i.removeItem(c)}}catch(d){}}return{getItem:function(a,b=new Date().getTime()){try{let c=i.getItem(a);if(!c)return null;let d=`${a}:expiry`,e=Number(i.getItem(d));if(e&&b>e)return l(a),l(d),k("SAFE_STORAGE_VALUE_EXPIRED"),null;return k("SAFE_STORAGE_VALUE_WITHIN_TTL"),g(c)}catch(f){return null}},setItem:function(a,c,d=new Date().getTime()){try{if(i.setItem(a,h(c)),b.ttl){let e=`${a}:expiry`,f=d+b.ttl;i.setItem(e,f.toString())}}catch(g){if(j&&g.message.toLowerCase().includes("quota"))throw g}},removeItem:l,clear:i.clear,key:i.key,get length(){return i.length}}}function h(a){return g(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},25811(a,b,c){c.d(b,{LS:()=>f,cl:()=>g,rV:()=>e});var d=c(86702);let{getItem:e,setItem:f,removeItem:g}=(0,d.Z)("sessionStorage")},55065(a,b,c){c.d(b,{"$g":()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var d=c(31167);let e=class SoftNavEvent extends Event{constructor(a,b){super(b),this.mechanism=a}};class SoftNavStartEvent extends e{constructor(a){super(a,d.QE.START)}}class SoftNavSuccessEvent extends e{constructor(a,b){super(a,d.QE.SUCCESS),this.visitCount=b}}class SoftNavErrorEvent extends e{constructor(a,b){super(a,d.QE.ERROR),this.error=b}}class SoftNavEndEvent extends e{constructor(a){super(a,d.QE.END)}}},31167(a,b,c){c.d(b,{BT:()=>l,FP:()=>n,LD:()=>k,QE:()=>g,TL:()=>o,Yl:()=>j,jN:()=>h,r_:()=>m,u5:()=>p});var d=c(55065),e=c(29573),f=c(58843);let g=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),h="reload",i=0;function j(){i=0,document.dispatchEvent(new Event(g.INITIAL)),(0,f.XL)()}function k(a){(0,f.sj)()||(q(),document.dispatchEvent(new d.OV(a)),(0,f.U6)(a),(0,f.J$)(),(0,f.Nt)(),(0,e.hY)())}function l(a={}){s(a)&&(i+=1,document.dispatchEvent(new d.$g((0,f.Gj)(),i)),n(a))}function m(a={}){if(!s(a))return;i=0;let b=(0,f.Wl)()||h;document.dispatchEvent(new d.QW((0,f.Gj)(),b)),r(),(0,e.t3)(b),(0,f.XL)()}function n(a={}){s(a)&&(r(),document.dispatchEvent(new d.Xr((0,f.Gj)())),(0,f.pS)())}function o(a={}){s(a)&&((0,e.mr)(),document.dispatchEvent(new Event(g.RENDER)))}function p(){document.dispatchEvent(new Event(g.FRAME_UPDATE))}function q(){document.dispatchEvent(new Event(g.PROGRESS_BAR.START))}function r(){document.dispatchEvent(new Event(g.PROGRESS_BAR.END))}function s({skipIfGoingToReactApp:a,allowedMechanisms:b=[]}={}){return(0,f.sj)()&&(0===b.length||b.includes((0,f.Gj)()))&&(!a||!(0,f.Nb)())}},29573(a,b,c){c.d(b,{CF:()=>g,hY:()=>h,mr:()=>j,t3:()=>i});var d=c(34855),e=c(58843);let f="stats:soft-nav-duration",g={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function h(){performance.mark(f)}function i(a){(0,d.b)({turboFailureReason:a,turboStartUrl:(0,e.wP)(),turboEndUrl:window.location.href})}function j(){let a=function(){if(0===performance.getEntriesByName(f).length)return null;performance.measure(f,f);let a=performance.getEntriesByName(f),b=a.pop();return b?b.duration:null}();if(!a)return;let b=g[(0,e.Gj)()],c=Math.round(a);b===g.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:c}})),(0,d.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:b,destination:(0,e.Nb)()||"rails",duration:c,initiator:(0,e.CI)()||"rails"}})}},58843(a,b,c){c.d(b,{Ak:()=>r,CI:()=>v,Gj:()=>o,"J$":()=>u,Nb:()=>w,Nt:()=>s,OE:()=>p,U6:()=>l,Wl:()=>q,XL:()=>k,pS:()=>m,sj:()=>n,wP:()=>t});var d=c(25811),e=c(31167);let f="soft-nav:fail",g="soft-nav:fail-referrer",h="soft-nav:referrer",i="soft-nav:marker",j="soft-nav:react-app-name";function k(){(0,d.LS)(i,"0"),(0,d.cl)(h),(0,d.cl)(f),(0,d.cl)(g),(0,d.cl)(j)}function l(a){(0,d.LS)(i,a)}function m(){(0,d.LS)(i,"0")}function n(){let a=(0,d.rV)(i);return a&&"0"!==a}function o(){return(0,d.rV)(i)}function p(){return Boolean(q())}function q(){return(0,d.rV)(f)}function r(a){(0,d.LS)(f,a||e.jN),(0,d.LS)(g,window.location.href)}function s(){(0,d.LS)(h,window.location.href)}function t(){return(0,d.rV)(h)||document.referrer}function u(){let a=w();a?(0,d.LS)(j,a):(0,d.cl)(j)}function v(){return(0,d.rV)(j)}function w(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}},34855(a,b,c){c.d(b,{B:()=>l,b:()=>g});var d=c(16462),e=c(80721);let f=[];function g(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=k(),a.staff=l(),f.push(a),b?j():i()}let h=null;async function i(){await e.C,null==h&&(h=window.requestIdleCallback(j))}function j(){if(h=null,!f.length)return;let a=d.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=JSON.stringify({stats:f});try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}f=[]}function k(){return!!d.n4?.head?.querySelector('meta[name="user-login"]')?.content}function l(){return!!d.n4?.head?.querySelector('meta[name="user-staff"]')?.content}d.n4?.addEventListener("pagehide",j),d.n4?.addEventListener("visibilitychange",j)},54130(a,b,c){var d,e,f,g;c.d(b,{ZQ:()=>j,ld:()=>i,x6:()=>f}),(g=f||(f={})).TRANSITION_WITHOUT_FETCH="transition-without-fetch",g.TRANSITION_WHILE_FETCHING="transition-while-fetch",g.FETCH_THEN_TRANSITION="fetch-then-transition";let h=class Deferred{constructor(){this.promise=new Promise(a=>{this.resolve=a})}},i={};function j(a){return(d=i)[e=a]||(d[e]=new h),i[a].promise}},59965(a,b,c){c.d(b,{Z:()=>i});var d=c(86702);let{getItem:e,setItem:f,removeItem:g}=(0,d.Z)("localStorage"),h="REACT_PROFILING_ENABLED",i={enable:()=>f(h,"true"),disable:()=>g(h),isEnabled:()=>!!e(h)}},21276(a,b,c){c.d(b,{T:()=>m});var d=c(54130),e=c(85893),f=c(76006),g=c(73935),h=c(67294),i=c(63167),j=c(59965),k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let l=class ReactAppElement extends HTMLElement{get appName(){return this.getAttribute("app-name")}get embeddedDataText(){let a=this.embeddedData?.textContent;if(!a)throw Error(`No embedded data provided for react app ${this.appName}`);return a}async connectedCallback(){let a=JSON.parse(this.embeddedDataText),b=this.appName,c=this.getAttribute("initial-path"),e=await (0,d.ZQ)(b);this.renderReact(b,c,e,a)}disconnectedCallback(){g.unmountComponentAtNode(this.reactRoot)}async renderReact(a,b,{App:c,routes:d},f){let k=g;j.Z.isEnabled()&&(k=await this.getReactDomWithProfiling());let l="true"===this.getAttribute("data-ssr"),m=l?k.hydrate:k.render;m((0,e.jsx)(h.StrictMode,{children:(0,e.jsx)(i.kS,{appName:a,initialPath:b,embeddedData:f,routes:d,App:c})}),this.reactRoot),this.classList.add("loaded")}getReactDomWithProfiling(){return Promise.all([c.e("react-profiling"),c.e("node_modules_scheduler_tracing-profiling_js")]).then(c.t.bind(c,62518,19))}};function m(a,b){let c=d.ld[a];c?c.resolve?.(b):d.ld[a]={promise:Promise.resolve(b)}}k([f.fA],l.prototype,"embeddedData",void 0),k([f.fA],l.prototype,"reactRoot",void 0),l=k([f.Ih],l)},11576(a,b,c){c.d(b,{D:()=>g,P:()=>f});var d=c(5256);let e=(a,b)=>{if(b){let c=404===b.httpStatus?"404 Page not found":500===b.httpStatus?"500 Internal server error":b.httpStatus?`Error ${b.httpStatus}`:"Error";return`${c} \xb7 GitHub`}if(a?.title)return`${a.title} \xb7 GitHub`},f=(a,b)=>{let c=e(a,b);g(c)},g=a=>{a&&(document.title=a,(0,d.x)(a))}},78844(a,b,c){c.d(b,{C:()=>h,T:()=>g});var d=c(63167),e=c(67294),f=c(96974);function g(){let{key:a}=(0,f.TH)(),b=(0,e.useContext)(d.D7);return b[a]?.payload}function h(){return(0,e.useContext)(d.h)}},16462(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},4995(a,b,c){c.d(b,{I:()=>h,i:()=>i});var d,e,f=c(85893),g=c(67294);let h=g.createContext(null);function i({routes:a,history:b,children:c}){let d=(0,g.useMemo)(()=>({routes:a,history:b}),[a,b]);return(0,f.jsx)(h.Provider,{value:d,children:c})}try{(d=h).displayName||(d.displayName="AppContext")}catch{}try{(e=i).displayName||(e.displayName="AppContextProvider")}catch{}},63167(a,b,c){c.d(b,{EM:()=>L,kS:()=>N,h:()=>M,D7:()=>K});var d,e,f,g,h,i=c(85893),j=c(67294),k=c(34855),l=c(78459),m=c(96974),n=c(54130),o=c(31167),p=c(58843),q=c(11576);let r=class Navigator{update(a){Object.assign(this.state,a);let{location:b,error:c,navigateOnError:d,responses:e,appPayload:f,pendingNavigation:g}=this.state;this.setReturnedState(()=>({location:b,error:c,navigateOnError:d,responses:e,appPayload:f,currentResponse:e[b.key]??null,isLoading:Boolean(g)}))}async handleHistoryUpdate(a){if(this.isHashNavigation(a)){this.navigateWithCurrentPayload(a);return}if("POP"!==a.action&&(0,o.LD)("react"),void 0!==this.state.responses[a.location.key])this.navigateFromHistory(a);else{let b=this.routes.find(b=>(0,m.LX)(b.path,a.location.pathname));if(b?.transitionType===n.x6.TRANSITION_WHILE_FETCHING&&this.navigateWithoutPayload(a),b?.transitionType===n.x6.TRANSITION_WITHOUT_FETCH){this.navigateWithoutPayload(a);return}this.enterLoadingState(a,Boolean(b?.shouldNavigateOnError));let c;try{let d=`${location.pathname}${location.search}`;c=await window.fetch(d,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest","X-GitHub-Target":"dotcom"}})}catch(e){b?.shouldNavigateOnError&&this.leaveLoadingStateWithError(a,{type:"fetchError"});return}try{if(a.location!==this.state.pendingNavigation?.update.location)return;if("POP"!==a.action){let{turbo:f,...g}=history.state;history.replaceState({...g,skipTurbo:!0},"",location.href)}if(c.redirected)window.location.replace(c.url);else if(c.ok){let h=await c.json();this.leaveLoadingStateWithResponseJson(a,h)}else this.leaveLoadingStateWithError(a,{httpStatus:c.status,type:"httpError"})}catch(i){b?.shouldNavigateOnError&&this.leaveLoadingStateWithError(a,{type:"badResponseError"})}}}isHashNavigation(a){let b=this.state.location,c=a.location;return b.pathname===c.pathname&&b.search===c.search&&Boolean(c.hash)}navigateFromHistory(a){this.update({location:a.location,pendingNavigation:null,error:null})}enterLoadingState(a,b){this.update({pendingNavigation:{update:a},navigateOnError:b})}leaveLoadingStateWithError(a,b){this.update({location:a.location,error:b,pendingNavigation:null})}navigateWithoutPayload(a){this.update({location:a.location,error:null})}navigateWithCurrentPayload(a){let b=this.state.location.key,c=b+a.location.hash,d={...a.location,key:c},e={...this.state.responses,[c]:this.state.responses[b]};this.update({...a,location:d,responses:e,error:null})}leaveLoadingStateWithResponseJson(a,b){this.update({location:a.location,pendingNavigation:null,responses:b?{...this.state.responses,[a.location.key]:b}:this.state.responses,error:null})}constructor(a,b,c,d,e){this.setReturnedState=d,this.routes=e,this.state={location:a,responses:{[a.key]:b},appPayload:c,pendingNavigation:null,error:null,navigateOnError:!1}}},s=(a,b,c)=>{let d=(0,j.useRef)(void 0);(0,j.useEffect)(()=>{b|| void 0!==d.current&&d.current===a.key||((0,p.sj)()?t(c):u(c),d.current=a.key)},[a.key,b,c])},t=a=>{a?(0,o.r_)():((0,o.TL)(),(0,o.BT)())},u=a=>{if(a)return;let b=w();b&&(0,k.b)({requestUrl:window.location.href,distributionKey:"REACT_NAV_DURATION",distributionValue:Math.round(b),distributionTags:["REACT_NAV_HARD"]})},v="react_nav_duration";function w(){window.performance.measure(v);let a=window.performance.getEntriesByName(v),b=a.pop();return b?b.duration:null}var x=c(6545),y=c(31341),z=c(78831),A=c(8386),B=c(27233),C=c(41914),D=c(4995);let E=globalThis.document;function F(a){let b=a.colorMode;return{colorMode:function(a){switch(a){case"light":return"day";case"dark":return"night";default:return"auto"}}(b),dayScheme:a.lightTheme,nightScheme:a.darkTheme}}let G,H=E?function(){let{documentElement:a}=E,[b,c]=(0,j.useState)(()=>F(a.dataset));return(0,j.useEffect)(()=>{let b=new MutationObserver(()=>c(F(a.dataset)));return b.observe(a,{attributes:!0,attributeFilter:["data-color-mode","data-light-theme","data-dark-theme"]}),()=>b.disconnect()},[a]),b}:function(){return F(G||{})};var I=c(78844),J=c(774);let K=(0,j.createContext)({}),L=(0,j.createContext)(void 0),M=(0,j.createContext)(null);function N({appName:a,initialPath:b,embeddedData:c,routes:d,App:e}){let f=(0,j.useRef)(),g=globalThis.window,{pathname:h,search:k,hash:n}=new URL(b,g?.location.origin??"https://github.com");f.current||(f.current=g?(0,C.lX)({window:g}):(0,C.PP)({initialEntries:[{pathname:h,search:k,hash:n}]}));let o=f.current,{key:p,state:t}=o.location,{colorMode:u,dayScheme:v,nightScheme:w}=H(),{locale:E}=c,[{location:F,error:G,navigateOnError:I,responses:N,appPayload:P},{handleHistoryUpdate:Q}]=function({initialLocation:a,appName:b,embeddedData:c,routes:d}){let[e,f]=(0,j.useState)(()=>{let{appPayload:b,...d}=c;return{location:a,error:null,navigateOnError:!1,responses:{[a.key]:d},currentResponse:d,appPayload:b,isLoading:!1}}),{location:g,currentResponse:h,appPayload:i,error:k,isLoading:m}=e,[n]=(0,j.useState)(()=>new r(a,h,i,f,d)),o=(0,j.useCallback)(a=>{n.handleHistoryUpdate(a)},[n]);(0,j.useEffect)(()=>{(0,q.P)(h,k)},[k,h]);let p=(0,j.useRef)(void 0);return(0,j.useEffect)(()=>{void 0===p.current?p.current=g.key:p.current===g.key||m||(document.querySelector("react-app h1")?.focus(),p.current=g.key)},[g.key,m]),(0,j.useEffect)(()=>{!m&&(g.key,(0,l.Y)({react_app:b}))},[b,g.key,m]),s(g,m,k),[e,{handleHistoryUpdate:o}]}({initialLocation:{pathname:h,search:k,hash:n,key:p,state:t},appName:a,embeddedData:c,routes:d});return(0,j.useLayoutEffect)(()=>{let a=o.listen(Q);return a},[o,Q]),(0,i.jsx)(z.HK,{children:(0,i.jsx)(J.P,{locale:E,children:(0,i.jsx)(x.S,{children:(0,i.jsx)(D.i,{routes:d,history:o,children:(0,i.jsx)(A.ZP,{colorMode:u,dayScheme:v,nightScheme:w,preventSSRMismatch:!0,children:(0,i.jsx)(B.Z,{children:G&&!I?(0,i.jsx)(y.m,{...G}):(0,i.jsx)(K.Provider,{value:N,children:(0,i.jsx)(L.Provider,{value:P,children:(0,i.jsx)(M.Provider,{value:G,children:(0,i.jsx)(m.F0,{location:F,navigator:o,children:(0,i.jsx)(m.Z5,{children:(0,i.jsx)(m.AW,{element:(0,i.jsx)(O,{App:e}),children:d.map(({path:a,Component:b},c)=>(0,i.jsx)(m.AW,{path:a,element:(0,i.jsx)(b,{})},c))})})})})})})})})})})})})}function O({App:a}){return!function(){let a=(0,I.T)();(0,j.useEffect)(()=>{function b(){document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:a}}))}return document.addEventListener(o.QE.INITIAL,b),()=>{document.removeEventListener(o.QE.INITIAL,b)}},[]),(0,j.useEffect)(()=>{document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:a}}))},[a])}(),a?(0,i.jsx)(a,{children:(0,i.jsx)(m.j3,{})}):(0,i.jsx)(m.j3,{})}try{(d=K).displayName||(d.displayName="ResponsesContext")}catch{}try{(e=L).displayName||(e.displayName="AppPayloadContext")}catch{}try{(f=M).displayName||(f.displayName="NavigationErrorContext")}catch{}try{(g=N).displayName||(g.displayName="Entry")}catch{}try{(h=O).displayName||(h.displayName="AppWrapper")}catch{}},6545(a,b,c){c.d(b,{S:()=>ErrorBoundary});var d=c(85893),e=c(31341),f=c(67294);class ErrorBoundary extends f.Component{static getDerivedStateFromError(a){return{error:a}}componentDidCatch(a){setTimeout(()=>{throw a})}render(){return this.state.error?(0,d.jsx)(e.m,{type:"httpError"}):this.props.children}constructor(a){super(a),this.state={error:null}}}},31341(a,b,c){c.d(b,{m:()=>i});var d,e=c(85893),f=c(92646),g=c(61296);c(67294);let h={404:"Didn\u2019t find anything here!",500:"Looks like something went wrong!"};function i({httpStatus:a,type:b}){let c="fetchError"===b?"Looks like network is down!":h[a||500];return(0,e.jsxs)(f.Z,{as:"h1",tabIndex:-1,sx:{display:"flex",flexDirection:"column",minWidth:"100vw",minHeight:"100vh",alignItems:"center",justifyContent:"center"},children:["Error",a?(0,e.jsx)(g.Z,{sx:{fontSize:"144px",fontWeight:"bold",lineHeight:1},children:a}):null,(0,e.jsx)(g.Z,{sx:{fontSize:4,pt:2},children:c})]})}try{(d=i).displayName||(d.displayName="ErrorPage")}catch{}},774(a,b,c){c.d(b,{P:()=>i,b:()=>j});var d,e,f=c(85893),g=c(67294);let h=(0,g.createContext)({locale:"en"}),i=({locale:a="en",children:b})=>{let c=(0,g.useMemo)(()=>({locale:a}),[a]);return(0,f.jsx)(h.Provider,{value:c,children:b})},j=()=>{let{locale:a}=(0,g.useContext)(h);return a};try{(d=h).displayName||(d.displayName="IntlContext")}catch{}try{(e=i).displayName||(e.displayName="IntlProvider")}catch{}}}])
//# sourceMappingURL=app_assets_modules_react-core_register-react-app_ts-a16c0791e76f.js.map