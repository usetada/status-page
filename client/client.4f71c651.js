function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function l(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function c(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,m=!1;function p(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,a=(r>0&&t[n[r]].claim_order<=o?r+1:p(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[a]+1;const i=a+1;n[i]=e,r=Math.max(i,r)}const o=[],a=[];let i=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(a[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function b(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function T(){return E(" ")}function R(){return E("")}function A(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function x(e){return function(t){return t.preventDefault(),e.call(this,t)}}function I(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:I(e,s,t[s])}function S(e){return Array.from(e.childNodes)}function L(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function N(e,t,n,s,r=!1){L(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function U(e,t,n,s){return N(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function O(e,t,n){return U(e,t,n,y)}function k(e,t,n){return U(e,t,n,w)}function C(e,t){return N(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function D(e){return C(e," ")}function H(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function B(e,t){const n=H(e,"HTML_TAG_START",0),s=H(e,"HTML_TAG_END",n);if(n===s)return new V(void 0,t);L(e);const r=e.splice(n,s-n+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new V(o,t)}function M(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function j(e,t){e.value=null==t?"":t}function G(e,t,n,s){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function W(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=W();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=A(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=A(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),v(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class V extends class{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=w(t.nodeName):this.e=y(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}}function Y(e){h=e}function K(){if(!h)throw new Error("Function called outside component initialization");return h}function F(e){K().$$.on_mount.push(e)}function J(e){K().$$.after_update.push(e)}function X(e){K().$$.on_destroy.push(e)}const Q=[],Z=[],ee=[],te=[],ne=Promise.resolve();let se=!1;function re(e){ee.push(e)}const oe=new Set;let ae=0;function ie(){const e=h;do{for(;ae<Q.length;){const e=Q[ae];ae++,Y(e),le(e.$$)}for(Y(null),Q.length=0,ae=0;Z.length;)Z.pop()();for(let e=0;e<ee.length;e+=1){const t=ee[e];oe.has(t)||(oe.add(t),t())}ee.length=0}while(Q.length);for(;te.length;)te.pop()();se=!1,oe.clear(),Y(e)}function le(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}const ce=new Set;let ue;function de(){ue={r:0,c:[],p:ue}}function fe(){ue.r||r(ue.c),ue=ue.p}function he(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function me(e,t,n,s){if(e&&e.o){if(ce.has(e))return;ce.add(e),ue.c.push((()=>{ce.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function pe(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function ge(e){return"object"==typeof e&&null!==e?e:{}}function _e(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,s,a){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=e.$$;i&&i.m(t,s),a||re((()=>{const t=l.map(n).filter(o);c?c.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(re)}function $e(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){-1===e.$$.dirty[0]&&(Q.push(e),se||(se=!0,ne.then(ie)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(t,n,o,a,i,l,c,u=[-1]){const d=h;Y(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let p=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&ye(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){m=!0;const e=S(n.target);f.fragment&&f.fragment.l(e),e.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&he(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),m=!1,ie()}Y(d)}class Ee{$destroy(){$e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Te=[];function Re(t,n=e){let s;const r=new Set;function o(e){if(a(t,e)&&(t=e,s)){const e=!Te.length;for(const e of r)e[1](),Te.push(e,t);if(e){for(let e=0;e<Te.length;e+=2)Te[e][0](Te[e+1]);Te.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const l=[a,i];return r.add(l),1===r.size&&(s=n(o)||e),a(t),()=>{r.delete(l),0===r.size&&(s(),s=null)}}}}const Ae={};var xe={owner:"usetada",repo:"status-page",sites:[{name:"Tada Website",url:"$WEBSITE_URL",maxResponseTime:5e3},{name:"Tada Insight",url:"$INSIGHT_URL",maxResponseTime:5e3},{name:"Tada Partner Web",url:"$PARTNER_WEB_URL",maxResponseTime:5e3},{name:"Tada Wallet Web",url:"$WALLET_WEB_URL",maxResponseTime:5e3},{name:"Msite",url:"$MSITE_URL",maxResponseTime:5e3},{name:"Delivery Website",url:"$OOT_WEB_URL",maxResponseTime:5e3},{name:"Buyfrom.io",url:"$BUYFROM_IO_URL",maxResponseTime:5e3},{name:"Backoffice API",url:"$BACKOFFICE_API_URL",maxResponseTime:5e3},{name:"Bridge API",url:"$BRIDGE_API_URL",maxResponseTime:5e3},{name:"Tada Wallet API",url:"$BRIDGE_API_TADA_WALLET_URL",maxResponseTime:5e3},{name:"Tada Wallet Web API",url:"$BRIDGE_API_WALLET_WEB_URL",maxResponseTime:5e3},{name:"Tada Partner API",url:"$BRIDGE_API_TADA_PARTNER_URL",maxResponseTime:5e3},{name:"Tada Insight API",url:"$BRIDGE_API_DASHBOARD_URL",maxResponseTime:5e3},{name:"Processor API",url:"$PROCESSOR_API_URL",maxResponseTime:5e3},{name:"Evoucher API",url:"$EGIFT_API_URL",maxResponseTime:5e3},{name:"Loyalty API",url:"$LOYALTY_API_URL",maxResponseTime:5e3},{name:"Order API",url:"$ORDER_API_URL",maxResponseTime:5e3},{name:"Inventory API",url:"$INVENTORY_API_URL",maxResponseTime:5e3},{name:"Payment API",url:"$PAYMENT_API_URL",maxResponseTime:5e3},{name:"Vendor API",url:"$VENDOR_API_URL",maxResponseTime:5e3},{name:"Msite API",url:"$BRIDGE_API_MSITE_URL",maxResponseTime:5e3},{name:"Delivery API",url:"$OOT_API_URL",maxResponseTime:5e3}],"status-website":{cname:"status.usetada.com",name:"Services Status",introTitle:"Tada Services Status Dashboard",navbar:[{title:"Status",href:"/"},{title:"Tada",href:"https://www.usetada.com"}],theme:"light",logoUrl:"https://github.com/usetada/status-page/raw/6b16a09b994da741375dfa29157cab4f007e53dd/tada-new-logo-final-x-1.png",favicon:"https://www.usetada.com/hubfs/TADA_January2019/Images/xfavicon.png.pagespeed.ic.0C3Wf7ckvY.webp"},"user-agent":"rbudiharso",path:"https://status.usetada.com",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ie(e,t,n){const s=e.slice();return s[1]=t[n],s}function Pe(t){let n,s,r,o=xe["status-website"]&&!xe["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=y("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){I(n,"alt",""),l(n.src,s=xe["status-website"].logoUrl)||I(n,"src",s),I(n,"class","svelte-a08hsz")},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}(),a=xe["status-website"]&&!xe["status-website"].hideNavTitle&&function(t){let n,s,r=xe["status-website"].name+"";return{c(){n=y("div"),s=E(r)},l(e){n=O(e,"DIV",{});var t=S(n);s=C(t,r),t.forEach(v)},m(e,t){b(e,n,t),g(n,s)},p:e,d(e){e&&v(n)}}}();return{c(){n=y("div"),s=y("a"),o&&o.c(),r=T(),a&&a.c(),this.h()},l(e){n=O(e,"DIV",{});var t=S(n);s=O(t,"A",{href:!0,class:!0});var i=S(s);o&&o.l(i),r=D(i),a&&a.l(i),i.forEach(v),t.forEach(v),this.h()},h(){I(s,"href",xe["status-website"].logoHref||xe.path),I(s,"class","logo svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(e,t){xe["status-website"]&&!xe["status-website"].hideNavLogo&&o.p(e,t),xe["status-website"]&&!xe["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&v(n),o&&o.d(),a&&a.d()}}}function Se(e){let t,n,s,r,o,a=e[1].title+"";return{c(){t=y("li"),n=y("a"),s=E(a),o=T(),this.h()},l(e){t=O(e,"LI",{});var r=S(t);n=O(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var i=S(n);s=C(i,a),i.forEach(v),o=D(r),r.forEach(v),this.h()},h(){I(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),I(n,"href",e[1].href.replace("$OWNER",xe.owner).replace("$REPO",xe.repo)),I(n,"target",e[1].target||"_self"),I(n,"class","svelte-a08hsz")},m(e,r){b(e,t,r),g(t,n),g(n,s),g(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&I(n,"aria-current",r)},d(e){e&&v(t)}}}function Le(t){let n,s,r,o,a,i=xe["status-website"]&&xe["status-website"].logoUrl&&Pe(),l=xe["status-website"]&&xe["status-website"].navbar&&function(e){let t,n=xe["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Se(Ie(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=R()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=R()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(1&r){let o;for(n=xe["status-website"].navbar,o=0;o<n.length;o+=1){const a=Ie(e,n,o);s[o]?s[o].p(a,r):(s[o]=Se(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&v(t)}}}(t),c=xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&function(t){let n,s,r,o=xe.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=E(o),this.h()},l(e){n=O(e,"LI",{});var t=S(n);s=O(t,"A",{href:!0,class:!0});var a=S(s);r=C(a,o),a.forEach(v),t.forEach(v),this.h()},h(){I(s,"href",`https://github.com/${xe.owner}/${xe.repo}`),I(s,"class","svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&v(n)}}}();return{c(){n=y("nav"),s=y("div"),i&&i.c(),r=T(),o=y("ul"),l&&l.c(),a=T(),c&&c.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=S(n);s=O(t,"DIV",{class:!0});var u=S(s);i&&i.l(u),r=D(u),o=O(u,"UL",{class:!0});var d=S(o);l&&l.l(d),a=D(d),c&&c.l(d),d.forEach(v),u.forEach(v),t.forEach(v),this.h()},h(){I(o,"class","svelte-a08hsz"),I(s,"class","container svelte-a08hsz"),I(n,"class","svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),l&&l.m(o,null),g(o,a),c&&c.m(o,null)},p(e,[t]){xe["status-website"]&&xe["status-website"].logoUrl&&i.p(e,t),xe["status-website"]&&xe["status-website"].navbar&&l.p(e,t),xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&c.p(e,t)},i:e,o:e,d(e){e&&v(n),i&&i.d(),l&&l.d(),c&&c.d()}}}function Ne(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Ue extends Ee{constructor(e){super(),we(this,e,Ne,Le,a,{segment:0})}}var Oe={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function ke(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ce(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function De(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=t||{},d=0;function f(e){var t=Oe[e[1]||""],n=l[l.length-1]==e;return t?t[1]?(n?l.pop():l.push(e),t[0|n]):t[0]:e}function h(){for(var e="";l.length;)e+=f(l[l.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+ke(Ce(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=De(ke(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ce(r[8])+'" alt="'+Ce(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+Ce(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+De(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ce(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),c+=s,c+=n;return(c+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function He(e,t,n){const s=e.slice();return s[3]=t[n],s}function Be(e,t,n){const s=e.slice();return s[3]=t[n],s}function Me(e,t,n){const s=e.slice();return s[8]=t[n],s}function je(t){let n;return{c(){n=y("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href",`${xe.path}/themes/${(xe["status-website"]||{}).theme||"light"}.css`)},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function Ge(t){let n;return{c(){n=y("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){I(n,"rel","stylesheet"),I(n,"href",(xe["status-website"]||{}).themeUrl)},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function We(t){let n,s;return{c(){n=y("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),S(n).forEach(v),this.h()},h(){l(n.src,s=t[8].src)||I(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function qe(t){let n;return{c(){n=y("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){I(n,"rel",t[3].rel),I(n,"href",t[3].href),I(n,"media",t[3].media)},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function ze(t){let n;return{c(){n=y("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){I(n,"name",t[3].name),I(n,"content",t[3].content)},m(e,t){b(e,n,t)},p:e,d(e){e&&v(n)}}}function Ve(t){let n,s,r,o,a,i,l,u,d,f,h,m,p,_,w,E,A,x,P=De(xe.i18n.footer.replace(/\$REPO/,`https://github.com/${xe.owner}/${xe.repo}`))+"",L=(xe["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(xe["status-website"]||{}).customHeadHtml+"";return{c(){n=new V(!1),s=R(),this.h()},l(e){n=B(e,!1),s=R(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}();let N=((xe["status-website"]||{}).themeUrl?Ge:je)(t),U=(xe["status-website"]||{}).scripts&&function(e){let t,n=(xe["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=We(Me(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=R()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=R()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Me(e,n,o);s[o]?s[o].p(a,r):(s[o]=We(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&v(t)}}}(t),k=(xe["status-website"]||{}).links&&function(e){let t,n=(xe["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=qe(Be(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=R()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=R()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Be(e,n,o);s[o]?s[o].p(a,r):(s[o]=qe(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&v(t)}}}(t),C=(xe["status-website"]||{}).metaTags&&function(e){let t,n=(xe["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(He(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=R()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=R()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(xe["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=He(e,n,o);s[o]?s[o].p(a,r):(s[o]=ze(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&v(t)}}}(t),H=xe["status-website"].css&&function(t){let n,s,r=`<style>${xe["status-website"].css}</style>`;return{c(){n=new V(!1),s=R(),this.h()},l(e){n=B(e,!1),s=R(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}(),M=xe["status-website"].js&&function(t){let n,s,r=`<script>${xe["status-website"].js}<\/script>`;return{c(){n=new V(!1),s=R(),this.h()},l(e){n=B(e,!1),s=R(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}(),j=(xe["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(xe["status-website"]||{}).customBodyHtml+"";return{c(){n=new V(!1),s=R(),this.h()},l(e){n=B(e,!1),s=R(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&v(s),e&&n.d()}}}();m=new Ue({props:{segment:t[0]}});const G=t[2].default,W=function(e,t,n,s){if(e){const r=c(e,t,n,s);return e[0](r)}}(G,t,t[1],null);return{c(){L&&L.c(),n=R(),N.c(),s=y("link"),r=y("link"),o=y("link"),U&&U.c(),a=R(),k&&k.c(),i=R(),C&&C.c(),l=R(),H&&H.c(),u=R(),M&&M.c(),d=R(),f=T(),j&&j.c(),h=T(),_e(m.$$.fragment),p=T(),_=y("main"),W&&W.c(),w=T(),E=y("footer"),A=y("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(t),n=R(),N.l(t),s=O(t,"LINK",{rel:!0,href:!0}),r=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),U&&U.l(t),a=R(),k&&k.l(t),i=R(),C&&C.l(t),l=R(),H&&H.l(t),u=R(),M&&M.l(t),d=R(),t.forEach(v),f=D(e),j&&j.l(e),h=D(e),be(m.$$.fragment,e),p=D(e),_=O(e,"MAIN",{class:!0});var c=S(_);W&&W.l(c),c.forEach(v),w=D(e),E=O(e,"FOOTER",{class:!0});var g=S(E);A=O(g,"P",{}),S(A).forEach(v),g.forEach(v),this.h()},h(){I(s,"rel","stylesheet"),I(s,"href",`${xe.path}/global.css`),I(r,"rel","icon"),I(r,"type","image/svg"),I(r,"href",(xe["status-website"]||{}).faviconSvg||(xe["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),I(o,"rel","icon"),I(o,"type","image/png"),I(o,"href",(xe["status-website"]||{}).favicon||"/logo-192.png"),I(_,"class","container"),I(E,"class","svelte-jbr799")},m(e,t){L&&L.m(document.head,null),g(document.head,n),N.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),U&&U.m(document.head,null),g(document.head,a),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,l),H&&H.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,d),b(e,f,t),j&&j.m(e,t),b(e,h,t),ve(m,e,t),b(e,p,t),b(e,_,t),W&&W.m(_,null),b(e,w,t),b(e,E,t),g(E,A),A.innerHTML=P,x=!0},p(e,[t]){(xe["status-website"]||{}).customHeadHtml&&L.p(e,t),N.p(e,t),(xe["status-website"]||{}).scripts&&U.p(e,t),(xe["status-website"]||{}).links&&k.p(e,t),(xe["status-website"]||{}).metaTags&&C.p(e,t),xe["status-website"].css&&H.p(e,t),xe["status-website"].js&&M.p(e,t),(xe["status-website"]||{}).customBodyHtml&&j.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),W&&W.p&&(!x||2&t)&&function(e,t,n,s,r,o){if(r){const a=c(t,n,s,o);e.p(a,r)}}(W,G,e,e[1],x?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(G,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){x||(he(m.$$.fragment,e),he(W,e),x=!0)},o(e){me(m.$$.fragment,e),me(W,e),x=!1},d(e){L&&L.d(e),v(n),N.d(e),v(s),v(r),v(o),U&&U.d(e),v(a),k&&k.d(e),v(i),C&&C.d(e),v(l),H&&H.d(e),v(u),M&&M.d(e),v(d),e&&v(f),j&&j.d(e),e&&v(h),$e(m,e),e&&v(p),e&&v(_),W&&W.d(e),e&&v(w),e&&v(E)}}}function Ye(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Ke extends Ee{constructor(e){super(),we(this,e,Ye,Ve,a,{segment:0})}}function Fe(e){let t,n,s=e[1].stack+"";return{c(){t=y("pre"),n=E(s)},l(e){t=O(e,"PRE",{});var r=S(t);n=C(r,s),r.forEach(v)},m(e,s){b(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&M(n,s)},d(e){e&&v(t)}}}function Je(t){let n,s,r,o,a,i,l,c,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Fe(t);return{c(){s=T(),r=y("h1"),o=E(t[0]),a=T(),i=y("p"),l=E(d),c=T(),f&&f.c(),u=R(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach(v),s=D(e),r=O(e,"H1",{class:!0});var n=S(r);o=C(n,t[0]),n.forEach(v),a=D(e),i=O(e,"P",{class:!0});var h=S(i);l=C(h,d),h.forEach(v),c=D(e),f&&f.l(e),u=R(),this.h()},h(){I(r,"class","svelte-17w3omn"),I(i,"class","svelte-17w3omn")},m(e,t){b(e,s,t),b(e,r,t),g(r,o),b(e,a,t),b(e,i,t),g(i,l),b(e,c,t),f&&f.m(e,t),b(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&M(o,e[0]),2&t&&d!==(d=e[1].message+"")&&M(l,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Fe(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&v(s),e&&v(r),e&&v(a),e&&v(i),e&&v(c),f&&f.d(e),e&&v(u)}}}function Xe(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Qe extends Ee{constructor(e){super(),we(this,e,Xe,Je,a,{status:0,error:1})}}function Ze(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&_e(n.$$.fragment),s=R()},l(e){n&&be(n.$$.fragment,e),s=R()},m(e,t){n&&ve(n,e,t),b(e,s,t),r=!0},p(e,t){const r=16&t?pe(o,[ge(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){de();const e=n;me(e.$$.fragment,1,0,(()=>{$e(e,1)})),fe()}a?(n=new a(i()),_e(n.$$.fragment),he(n.$$.fragment,1),ve(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&he(n.$$.fragment,e),r=!0)},o(e){n&&me(n.$$.fragment,e),r=!1},d(e){e&&v(s),n&&$e(n,e)}}}function et(e){let t,n;return t=new Qe({props:{error:e[0],status:e[1]}}),{c(){_e(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,s){ve(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(he(t.$$.fragment,e),n=!0)},o(e){me(t.$$.fragment,e),n=!1},d(e){$e(t,e)}}}function tt(e){let t,n,s,r;const o=[et,Ze],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=R()},l(e){n.l(e),s=R()},m(e,n){a[t].m(e,n),b(e,s,n),r=!0},p(e,r){let l=t;t=i(e),t===l?a[t].p(e,r):(de(),me(a[l],1,1,(()=>{a[l]=null})),fe(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),he(n,1),n.m(s.parentNode,s))},i(e){r||(he(n),r=!0)},o(e){me(n),r=!1},d(e){a[t].d(e),e&&v(s)}}}function nt(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[tt]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Ke({props:o}),{c(){_e(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),s=!0},p(e,[t]){const s=12&t?pe(r,[4&t&&{segment:e[2][0]},8&t&&ge(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(he(n.$$.fragment,e),s=!0)},o(e){me(n.$$.fragment,e),s=!1},d(e){$e(n,e)}}}function st(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:l=null}=t,{notify:c}=t;var u,d;return J(c),u=Ae,d=s,K().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,c=e.notify)},[r,o,a,i,l,s,c]}class rt extends Ee{constructor(e){super(),we(this,e,st,nt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ot=[],at=[{js:()=>Promise.all([import("./index.f912d1bd.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","index-f7605f9e.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.8a5d0e18.js"),__inject_styles(["client-d6959ee0.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.fd9185bb.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-431b5a8d.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.a138d90b.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-27f5577c.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.bbcf2667.js"),__inject_styles(["client-d6959ee0.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],it=(lt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:lt(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:lt(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var lt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function i(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((s=s.apply(e,t||[])).next())}))}function ut(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let dt,ft=1;const ht="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},mt={};let pt,gt;function _t(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!ot.some((e=>e.test(t))))for(let n=0;n<it.length;n+=1){const s=it[n],r=s.pattern.exec(t);if(r){const n=_t(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ut(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=bt(r);if(o){wt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),ht.pushState({id:dt},"",r.href)}}function $t(){return{x:pageXOffset,y:pageYOffset}}function yt(e){if(mt[dt]=$t(),e.state){const t=bt(new URL(location.href));t?wt(t,e.state.id):location.href=location.href}else!function(e){ft=e}(ft+1),function(e){dt=e}(ft),ht.replaceState({id:dt},"",location.href)}function wt(e,t,n,s){return ct(this,void 0,void 0,(function*(){const r=!!t;if(r)dt=t;else{const e=$t();mt[dt]=e,dt=t=++ft,mt[dt]=n?e:{x:0,y:0}}if(yield gt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=mt[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),mt[dt]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Et(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Tt,Rt=null;function At(e){const t=ut(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,Et(document)));if(t)Rt&&e===Rt.href||(Rt={href:e,promise:Wt(t)}),Rt.promise}(t.href)}function xt(e){clearTimeout(Tt),Tt=setTimeout((()=>{At(e)}),20)}function It(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,Et(document)));if(n){const s=wt(n,null,t.noscroll);return ht[t.replaceState?"replaceState":"pushState"]({id:dt},"",e),s}return location.href=e,new Promise((()=>{}))}const Pt="undefined"!=typeof __SAPPER__&&__SAPPER__;let St,Lt,Nt,Ut=!1,Ot=[],kt="{}";const Ct={page:function(e){const t=Re(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:Re(null),session:Re(Pt&&Pt.session)};let Dt,Ht,Bt;function Mt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function jt(e){return ct(this,void 0,void 0,(function*(){St&&Ct.preloading.set(!0);const t=function(e){return Rt&&Rt.href===e.href?Rt.promise:Wt(e)}(e),n=Lt={},s=yield t,{redirect:r}=s;if(n===Lt)if(r)yield It(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Gt(n,t,Mt(t,e.page))}}))}function Gt(e,t,n){return ct(this,void 0,void 0,(function*(){Ct.page.set(n),Ct.preloading.set(!1),St?St.$set(t):(t.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},t.level0={props:yield Nt},t.notify=Ct.page.notify,St=new rt({target:Bt,props:t,hydrate:!0})),Ot=e,kt=JSON.stringify(n.query),Ut=!0,Ht=!1}))}function Wt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Nt){const e=()=>({});Nt=Pt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Dt)}let i,l=1;try{const r=JSON.stringify(n.query),c=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>ct(this,void 0,void 0,(function*(){const d=s[i];if(function(e,t,n,s){if(s!==kt)return!0;const r=Ot[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,d,c,r)&&(u=!0),o.segments[l]=s[i+1],!t)return{segment:d};const f=l++;let h;if(Ht||u||!Ot[i]||Ot[i].part!==t.i){u=!1;const{default:s,preload:r}=yield at[t.i].js();let o;o=Ut||!Pt.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Dt):{}:Pt.preloaded[i+1],h={component:s,props:o,segment:d,match:c,part:t.i}}else h=Ot[i];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var qt,zt,Vt;Ct.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(Dt=e,!Ut)return;Ht=!0;const t=bt(new URL(location.href)),n=Lt={},{redirect:s,props:r,branch:o}=yield Wt(t);n===Lt&&(s?yield It(s.location,{replaceState:!0}):yield Gt(o,r,Mt(r,t.page)))})))),qt={target:document.querySelector("#sapper")},zt=qt.target,Bt=zt,Vt=Pt.baseUrl,pt=Vt,gt=jt,"scrollRestoration"in ht&&(ht.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ht.scrollRestoration="auto"})),addEventListener("load",(()=>{ht.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",yt),addEventListener("touchstart",At),addEventListener("mousemove",xt),Pt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Pt;Nt||(Nt=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Nt},level1:{props:{status:o,error:a},component:Qe},segments:r},l=_t(n);Gt([],i,{host:e,path:t,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ht.replaceState({id:ft},"",t);const n=bt(new URL(location.href));if(n)return wt(n,ft,!0,e)}));export{M as A,A as B,r as C,Z as D,B as E,l as F,d as G,V as H,G as I,z as J,De as K,w as L,k as M,It as N,j as O,x as P,t as Q,P as R,Ee as S,pe as T,J as U,X as V,u as W,ge as X,re as Y,q as Z,T as a,O as b,D as c,S as d,y as e,v as f,I as g,b as h,we as i,de as j,fe as k,he as l,E as m,C as n,F as o,g as p,e as q,xe as r,a as s,me as t,R as u,$ as v,_e as w,be as x,ve as y,$e as z};

import __inject_styles from './inject_styles.803b7e80.js';