"use strict";(self["webpackChunkbase_vue"]=self["webpackChunkbase_vue"]||[]).push([[616],{2262:function(t,e,n){var i=n(2109),s=n(7908),r=n(6244),o=n(9303),a=n(1223);i({target:"Array",proto:!0},{at:function(t){var e=s(this),n=r(e),i=o(t),a=i>=0?i:n+i;return a<0||a>=n?void 0:e[a]}}),a("at")},4506:function(t,e,n){var i=n(2109),s=n(1702),r=n(4488),o=n(9303),a=n(1340),c=n(7293),u=s("".charAt),h=c((function(){return"\ud842"!=="𠮷".at(-2)}));i({target:"String",proto:!0,forced:h},{at:function(t){var e=a(r(this)),n=e.length,i=o(t),s=i>=0?i:n+i;return s<0||s>=n?void 0:u(e,s)}})},616:function(t,e,n){n.d(e,{Z:function(){return $f}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,i=0;while(n<t.length){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const e=t[s],r=s+1<t.length,o=r?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),i.push(n[u],n[h],n[l],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],r=s<t.length,o=r?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,h=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==h)throw Error();const l=e<<2|o>>4;if(i.push(l),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==h){const t=c<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return r.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function l(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){return u().indexOf("Electron/")>=0}function p(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function m(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=v,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?b(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new w(i,o,n);return a}}function b(t,e){return t.replace(T,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(S(n)&&S(r)){if(!I(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function S(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t){return t&&t._delegate?t._delegate:t}class C{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new c;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(k(t))try{this.getOrInitializeService({instanceIdentifier:_})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=_){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=_){return this.instances.has(t)}getOptions(t=_){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&r.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(ed){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:D(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(ed){}return n||null}normalizeInstanceIdentifier(t=_){return this.component?this.component.multipleInstances?t:_:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function D(t){return t===_?void 0:t}function k(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new N(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R=[];var M;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(M||(M={}));const x={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},O=M.INFO,V={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},P=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=V[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class F{constructor(t){this.name=t,this._logLevel=O,this._logHandler=P,this._userLogHandler=null,R.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?x[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}const U=(t,e)=>e.some((e=>t instanceof e));let B,q;function j(){return B||(B=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K(){return q||(q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $=new WeakMap,G=new WeakMap,H=new WeakMap,z=new WeakMap,W=new WeakMap;function Q(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(et(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&$.set(e,t)})).catch((()=>{})),W.set(e,t),e}function X(t){if(G.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));G.set(t,e)}let Y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return G.get(t);if("objectStoreNames"===e)return t.objectStoreNames||H.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function J(t){Y=t(Y)}function Z(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?K().includes(t)?function(...e){return t.apply(nt(this),e),et($.get(this))}:function(...e){return et(t.apply(nt(this),e))}:function(e,...n){const i=t.call(nt(this),e,...n);return H.set(i,e.sort?e.sort():[e]),et(i)}}function tt(t){return"function"===typeof t?Z(t):(t instanceof IDBTransaction&&X(t),U(t,j())?new Proxy(t,Y):t)}function et(t){if(t instanceof IDBRequest)return Q(t);if(z.has(t))return z.get(t);const e=tt(t);return e!==t&&(z.set(t,e),W.set(e,t)),e}const nt=t=>W.get(t);function it(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=et(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(et(o.result),t.oldVersion,t.newVersion,et(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const st=["get","getKey","getAll","getAllKeys","count"],rt=["put","add","delete","clear"],ot=new Map;function at(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(ot.get(e))return ot.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=rt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!st.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return ot.set(e,r),r}J((t=>({...t,get:(e,n,i)=>at(e,n)||t.get(e,n,i),has:(e,n)=>!!at(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(ut(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function ut(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const ht="@firebase/app",lt="0.7.24",dt=new F("@firebase/app"),ft="@firebase/app-compat",pt="@firebase/analytics-compat",gt="@firebase/analytics",mt="@firebase/app-check-compat",yt="@firebase/app-check",vt="@firebase/auth",wt="@firebase/auth-compat",Et="@firebase/database",bt="@firebase/database-compat",Tt="@firebase/functions",It="@firebase/functions-compat",St="@firebase/installations",At="@firebase/installations-compat",Ct="@firebase/messaging",_t="@firebase/messaging-compat",Nt="@firebase/performance",Dt="@firebase/performance-compat",kt="@firebase/remote-config",Lt="@firebase/remote-config-compat",Rt="@firebase/storage",Mt="@firebase/storage-compat",xt="@firebase/firestore",Ot="@firebase/firestore-compat",Vt="firebase",Pt="9.8.1",Ft="[DEFAULT]",Ut={[ht]:"fire-core",[ft]:"fire-core-compat",[gt]:"fire-analytics",[pt]:"fire-analytics-compat",[yt]:"fire-app-check",[mt]:"fire-app-check-compat",[vt]:"fire-auth",[wt]:"fire-auth-compat",[Et]:"fire-rtdb",[bt]:"fire-rtdb-compat",[Tt]:"fire-fn",[It]:"fire-fn-compat",[St]:"fire-iid",[At]:"fire-iid-compat",[Ct]:"fire-fcm",[_t]:"fire-fcm-compat",[Nt]:"fire-perf",[Dt]:"fire-perf-compat",[kt]:"fire-rc",[Lt]:"fire-rc-compat",[Rt]:"fire-gcs",[Mt]:"fire-gcs-compat",[xt]:"fire-fst",[Ot]:"fire-fst-compat","fire-js":"fire-js",[Vt]:"fire-js-all"},Bt=new Map,qt=new Map;function jt(t,e){try{t.container.addComponent(e)}catch(n){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(qt.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;qt.set(e,t);for(const n of Bt.values())jt(n,t);return!0}function $t(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ht=new E("app","Firebase",Gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new C("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=Pt;function Qt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:Ft,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw Ht.create("bad-app-name",{appName:String(i)});const s=Bt.get(i);if(s){if(I(t,s.options)&&I(n,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}const r=new L(i);for(const a of qt.values())r.addComponent(a);const o=new zt(t,n,r);return Bt.set(i,o),o}function Xt(t=Ft){const e=Bt.get(t);if(!e)throw Ht.create("no-app",{appName:t});return e}function Yt(t,e,n){var i;let s=null!==(i=Ut[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void dt.warn(t.join(" "))}Kt(new C(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jt="firebase-heartbeat-database",Zt=1,te="firebase-heartbeat-store";let ee=null;function ne(){return ee||(ee=it(Jt,Zt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(te)}}}).catch((t=>{throw Ht.create("storage-open",{originalErrorMessage:t.message})}))),ee}async function ie(t){try{const e=await ne();return e.transaction(te).objectStore(te).get(re(t))}catch(e){throw Ht.create("storage-get",{originalErrorMessage:e.message})}}async function se(t,e){try{const n=await ne(),i=n.transaction(te,"readwrite"),s=i.objectStore(te);return await s.put(e,re(t)),i.done}catch(n){throw Ht.create("storage-set",{originalErrorMessage:n.message})}}function re(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=1024,ae=2592e6;class ce{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new le(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=ue();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ue(),{heartbeatsToSend:e,unsentEntries:n}=he(this._heartbeatsCache.heartbeats),i=a(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ue(){const t=new Date;return t.toISOString().substring(0,10)}function he(t,e=oe){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),de(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),de(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class le{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!m()&&y().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await ie(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return se(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return se(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function de(t){return a(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){Kt(new C("platform-logger",(t=>new ct(t)),"PRIVATE")),Kt(new C("heartbeat",(t=>new ce(t)),"PRIVATE")),Yt(ht,lt,t),Yt(ht,lt,"esm2017"),Yt("fire-js","")}fe("");var pe="firebase",ge="9.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Yt(pe,ge,"app");n(8675),n(3462),n(2262),n(4506);var me,ye="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},ve={},we=we||{},Ee=ye||self;function be(){}function Te(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function Ie(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function Se(t){return Object.prototype.hasOwnProperty.call(t,Ae)&&t[Ae]||(t[Ae]=++Ce)}var Ae="closure_uid_"+(1e9*Math.random()>>>0),Ce=0;function _e(t,e,n){return t.call.apply(t.bind,arguments)}function Ne(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function De(t,e,n){return De=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_e:Ne,De.apply(null,arguments)}function ke(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function Re(){this.s=this.s,this.o=this.o}var Me=0,xe={};Re.prototype.s=!1,Re.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=Me)){var t=Se(this);delete xe[t]}},Re.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oe=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ve=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"===typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Pe(t){t:{var e=er;const n=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function Fe(t){return Array.prototype.concat.apply([],arguments)}function Ue(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Be(t){return/^[\s\xa0]*$/.test(t)}var qe,je=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ke(t,e){return-1!=t.indexOf(e)}function $e(t,e){return t<e?-1:t>e?1:0}t:{var Ge=Ee.navigator;if(Ge){var He=Ge.userAgent;if(He){qe=He;break t}}qe=""}function ze(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function We(t){const e={};for(const n in t)e[n]=t[n];return e}var Qe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xe(t,e){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)t[n]=i[n];for(let e=0;e<Qe.length;e++)n=Qe[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ye(t){return Ye[" "](t),t}function Je(t){var e=dn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}Ye[" "]=be;var Ze,tn=Ke(qe,"Opera"),en=Ke(qe,"Trident")||Ke(qe,"MSIE"),nn=Ke(qe,"Edge"),sn=nn||en,rn=Ke(qe,"Gecko")&&!(Ke(qe.toLowerCase(),"webkit")&&!Ke(qe,"Edge"))&&!(Ke(qe,"Trident")||Ke(qe,"MSIE"))&&!Ke(qe,"Edge"),on=Ke(qe.toLowerCase(),"webkit")&&!Ke(qe,"Edge");function an(){var t=Ee.document;return t?t.documentMode:void 0}t:{var cn="",un=function(){var t=qe;return rn?/rv:([^\);]+)(\)|;)/.exec(t):nn?/Edge\/([\d\.]+)/.exec(t):en?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):on?/WebKit\/(\S+)/.exec(t):tn?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(un&&(cn=un?un[1]:""),en){var hn=an();if(null!=hn&&hn>parseFloat(cn)){Ze=String(hn);break t}}Ze=cn}var ln,dn={};function fn(){return Je((function(){let t=0;const e=je(String(Ze)).split("."),n=je("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=$e(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||$e(0==s[2].length,0==r[2].length)||$e(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(Ee.document&&en){var pn=an();ln=pn||(parseInt(Ze,10)||void 0)}else ln=void 0;var gn=ln,mn=function(){if(!Ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ee.addEventListener("test",be,e),Ee.removeEventListener("test",be,e)}catch(n){}return t}();function yn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function vn(t,e){if(yn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rn){t:{try{Ye(e.nodeName);var s=!0;break t}catch(r){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:wn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vn.Z.h.call(this)}}yn.prototype.h=function(){this.defaultPrevented=!0},Le(vn,yn);var wn={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),bn=0;function Tn(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++bn,this.ca=this.fa=!1}function In(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Sn(t){this.src=t,this.g={},this.h=0}function An(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Oe(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(In(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Cn(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}Sn.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Cn(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Tn(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};var _n="closure_lm_"+(1e6*Math.random()|0),Nn={};function Dn(t,e,n,i,s){if(i&&i.once)return Rn(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Dn(t,e[r],n,i,s);return null}return n=Un(n),t&&t[En]?t.N(e,n,Ie(i)?!!i.capture:!!i,s):kn(t,e,n,!1,i,s)}function kn(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Ie(s)?!!s.capture:!!s,a=Pn(t);if(a||(t[_n]=a=new Sn(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Ln(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)mn||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(On(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Ln(){function t(n){return e.call(t.src,t.listener,n)}var e=Vn;return t}function Rn(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rn(t,e[r],n,i,s);return null}return n=Un(n),t&&t[En]?t.O(e,n,Ie(i)?!!i.capture:!!i,s):kn(t,e,n,!0,i,s)}function Mn(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Mn(t,e[r],n,i,s);else i=Ie(i)?!!i.capture:!!i,n=Un(n),t&&t[En]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Cn(r,n,i,s),-1<n&&(In(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Pn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cn(e,n,i,s)),(n=-1<t?e[t]:null)&&xn(n))}function xn(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[En])An(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(On(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Pn(e))?(An(n,t),0==n.h&&(n.src=null,e[_n]=null)):In(t)}}}function On(t){return t in Nn?Nn[t]:Nn[t]="on"+t}function Vn(t,e){if(t.ca)t=!0;else{e=new vn(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&xn(t),t=n.call(i,e)}return t}function Pn(t){return t=t[_n],t instanceof Sn?t:null}var Fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Un(t){return"function"===typeof t?t:(t[Fn]||(t[Fn]=function(e){return t.handleEvent(e)}),t[Fn])}function Bn(){Re.call(this),this.i=new Sn(this),this.P=this,this.I=null}function qn(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new yn(e,t);else if(e instanceof yn)e.target=e.target||t;else{var s=e;e=new yn(i,t),Xe(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=jn(o,i,!0,e)&&s}if(o=e.g=t,s=jn(o,i,!0,e)&&s,s=jn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=jn(o,i,!1,e)&&s}function jn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&An(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}Le(Bn,Re),Bn.prototype[En]=!0,Bn.prototype.removeEventListener=function(t,e,n,i){Mn(this,t,e,n,i)},Bn.prototype.M=function(){if(Bn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)In(n[i]);delete e.g[t],e.h--}}this.I=null},Bn.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Bn.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Kn=Ee.JSON.stringify;function $n(){var t=Zn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Gn{constructor(){this.h=this.g=null}add(t,e){const n=zn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Hn,zn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Wn),(t=>t.reset()));class Wn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Qn(t){Ee.setTimeout((()=>{throw t}),0)}function Xn(t,e){Hn||Yn(),Jn||(Hn(),Jn=!0),Zn.add(t,e)}function Yn(){var t=Ee.Promise.resolve(void 0);Hn=function(){t.then(ti)}}var Jn=!1,Zn=new Gn;function ti(){for(var t;t=$n();){try{t.h.call(t.g)}catch(n){Qn(n)}var e=zn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Jn=!1}function ei(t,e){Bn.call(this),this.h=t||1,this.g=e||Ee,this.j=De(this.kb,this),this.l=Date.now()}function ni(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function ii(t,e,n){if("function"===typeof t)n&&(t=De(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=De(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ee.setTimeout(t,e||0)}function si(t){t.g=ii((()=>{t.g=null,t.i&&(t.i=!1,si(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Le(ei,Bn),me=ei.prototype,me.da=!1,me.S=null,me.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qn(this,"tick"),this.da&&(ni(this),this.start()))}},me.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},me.M=function(){ei.Z.M.call(this),ni(this),delete this.g};class ri extends Re{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:si(this)}M(){super.M(),this.g&&(Ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(t){Re.call(this),this.h=t,this.g={}}Le(oi,Re);var ai=[];function ci(t,e,n,i){Array.isArray(n)||(n&&(ai[0]=n.toString()),n=ai);for(var s=0;s<n.length;s++){var r=Dn(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ui(t){ze(t.g,(function(t,e){this.g.hasOwnProperty(e)&&xn(t)}),t),t.g={}}function hi(){this.g=!0}function li(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function di(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function fi(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+gi(t,n)+(i?" "+i:"")}))}function pi(t,e){t.info((function(){return"TIMEOUT: "+e}))}function gi(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Kn(n)}catch(a){return e}}oi.prototype.M=function(){oi.Z.M.call(this),ui(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},hi.prototype.Aa=function(){this.g=!1},hi.prototype.info=function(){};var mi={},yi=null;function vi(){return yi=yi||new Bn}function wi(t){yn.call(this,mi.Ma,t)}function Ei(t){const e=vi();qn(e,new wi(e,t))}function bi(t,e){yn.call(this,mi.STAT_EVENT,t),this.stat=e}function Ti(t){const e=vi();qn(e,new bi(e,t))}function Ii(t,e){yn.call(this,mi.Na,t),this.size=e}function Si(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Ee.setTimeout((function(){t()}),e)}mi.Ma="serverreachability",Le(wi,yn),mi.STAT_EVENT="statevent",Le(bi,yn),mi.Na="timingevent",Le(Ii,yn);var Ai={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ci={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function _i(){}function Ni(t){return t.h||(t.h=t.i())}function Di(){}_i.prototype.h=null;var ki,Li={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ri(){yn.call(this,"d")}function Mi(){yn.call(this,"c")}function xi(){}function Oi(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new oi(this),this.P=Pi,t=sn?125:void 0,this.W=new ei(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Vi}function Vi(){this.i=null,this.g="",this.h=!1}Le(Ri,yn),Le(Mi,yn),Le(xi,_i),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},ki=new xi;var Pi=45e3,Fi={},Ui={};function Bi(t,e,n){t.K=1,t.v=ls(rs(e)),t.s=n,t.U=!0,qi(t,null)}function qi(t,e){t.F=Date.now(),Gi(t),t.A=rs(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Cs(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Vi,t.g=Rr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ri(De(t.Ia,t,t.g),t.O)),ci(t.V,t.g,"readystatechange",t.gb),e=t.H?We(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ei(1),li(t.j,t.u,t.A,t.m,t.X,t.s)}function ji(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ki(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=$i(t,n),i==Ui){4==e&&(t.o=4,Ti(14),s=!1),fi(t.j,t.m,null,"[Incomplete Response]");break}if(i==Fi){t.o=4,Ti(15),fi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}fi(t.j,t.m,i,null),Xi(t,i)}ji(t)&&i!=Ui&&i!=Fi&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ti(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sr(e),e.L=!0,Ti(11))):(fi(t.j,t.m,n,"[Invalid Chunked Response]"),Qi(t),Wi(t))}function $i(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ui:(n=Number(e.substring(n,i)),isNaN(n)?Fi:(i+=1,i+n>e.length?Ui:(e=e.substr(i,n),t.C=i+n,e)))}function Gi(t){t.Y=Date.now()+t.P,Hi(t,t.P)}function Hi(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Si(De(t.eb,t),e)}function zi(t){t.B&&(Ee.clearTimeout(t.B),t.B=null)}function Wi(t){0==t.l.G||t.I||_r(t.l,t)}function Qi(t){zi(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ni(t.W),ui(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xi(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||xs(n.i,t)))if(n.I=t.N,!t.J&&xs(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Cr(n),pr(n)}Ir(n),Ti(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Si(De(n.ab,n),6e3));if(1>=Ms(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Dr(n,11)}else if((t.J||n.g==t)&&Cr(n),!Be(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(i=1.5*h,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(Ke(t,"spdy")||Ke(t,"quic")||Ke(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Os(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,hs(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Lr(i,i.H?i.la:null,i.W),o.J){Vs(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(zi(a),Gi(a)),i.g=o}else Tr(i);0<n.l.length&&yr(n)}else"stop"!=u[0]&&"close"!=u[0]||Dr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Dr(n,7):fr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Ei(4)}catch(u){}}function Yi(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(Te(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Ji(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Te(t)||"string"===typeof t)Ve(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Te(t)||"string"===typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=Yi(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Zi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Zi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function ts(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];es(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],es(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function es(t,e){return Object.prototype.hasOwnProperty.call(t,e)}me=Oi.prototype,me.setTimeout=function(t){this.P=t},me.gb=function(t){t=t.target;const e=this.L;e&&3==ar(t)?e.l():this.Ia(t)},me.Ia=function(t){try{if(t==this.g)t:{const h=ar(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||sn||this.g&&(this.h.h||this.g.ga()||cr(this.g)))){this.I||4!=h||7==e||Ei(8==e||0>=l?3:2),zi(this);var n=this.g.ba();this.N=n;e:if(ji(this)){var i=cr(this.g);t="";var s=i.length,r=4==ar(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Qi(this),Wi(this);var o="";break e}this.h.i=new Ee.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,di(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Be(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ti(12),Qi(this),Wi(this);break t}fi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xi(this,n)}this.U?(Ki(this,h,o),sn&&this.i&&3==h&&(ci(this.V,this.W,"tick",this.fb),this.W.start())):(fi(this.j,this.m,o,null),Xi(this,o)),4==h&&Qi(this),this.i&&!this.I&&(4==h?_r(this.l,this):(this.i=!1,Gi(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ti(12)):(this.o=0,Ti(13)),Qi(this),Wi(this)}}}catch(h){}},me.fb=function(){if(this.g){var t=ar(this.g),e=this.g.ga();this.C<e.length&&(zi(this),Ki(this,t,e),this.i&&4!=t&&Gi(this))}},me.cancel=function(){this.I=!0,Qi(this)},me.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pi(this.j,this.A),2!=this.K&&(Ei(3),Ti(17)),Qi(this),this.o=2,Wi(this)):Hi(this,this.Y-t)},me=Zi.prototype,me.R=function(){ts(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},me.T=function(){return ts(this),this.g.concat()},me.get=function(t,e){return es(this.h,t)?this.h[t]:e},me.set=function(t,e){es(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},me.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var ns=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function is(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ss(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ss){this.g=void 0!==e?e:t.g,os(this,t.j),this.s=t.s,as(this,t.i),cs(this,t.m),this.l=t.l,e=t.h;var n=new Ts;n.i=e.i,e.g&&(n.g=new Zi(e.g),n.h=e.h),us(this,n),this.o=t.o}else t&&(n=String(t).match(ns))?(this.g=!!e,os(this,n[1]||"",!0),this.s=ps(n[2]||""),as(this,n[3]||"",!0),cs(this,n[4]),this.l=ps(n[5]||"",!0),us(this,n[6]||"",!0),this.o=ps(n[7]||"")):(this.g=!!e,this.h=new Ts(null,this.g))}function rs(t){return new ss(t)}function os(t,e,n){t.j=n?ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function as(t,e,n){t.i=n?ps(e,!0):e}function cs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function us(t,e,n){e instanceof Ts?(t.h=e,Ns(t.h,t.g)):(n||(e=gs(e,Es)),t.h=new Ts(e,t.g))}function hs(t,e,n){t.h.set(e,n)}function ls(t){return hs(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ds(t){return t instanceof ss?rs(t):new ss(t,void 0)}function fs(t,e,n,i){var s=new ss(null,void 0);return t&&os(s,t),e&&as(s,e),n&&cs(s,n),i&&(s.l=i),s}function ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gs(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,ms),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ms(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gs(e,ys,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(gs(e,ys,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(gs(n,"/"==n.charAt(0)?ws:vs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gs(n,bs)),t.join("")};var ys=/[#\/\?@]/g,vs=/[#\?:]/g,ws=/[#\?]/g,Es=/[#\?@]/g,bs=/#/g;function Ts(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Is(t){t.g||(t.g=new Zi,t.h=0,t.i&&is(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ss(t,e){Is(t),e=_s(t,e),es(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,es(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ts(t)))}function As(t,e){return Is(t),e=_s(t,e),es(t.g.h,e)}function Cs(t,e,n){Ss(t,e),0<n.length&&(t.i=null,t.g.set(_s(t,e),Ue(n)),t.h+=n.length)}function _s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ns(t,e){e&&!t.j&&(Is(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ss(this,e),Cs(this,n,t))}),t)),t.j=e}me=Ts.prototype,me.add=function(t,e){Is(this),this.i=null,t=_s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},me.forEach=function(t,e){Is(this),this.g.forEach((function(n,i){Ve(n,(function(n){t.call(e,n,i,this)}),this)}),this)},me.T=function(){Is(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},me.R=function(t){Is(this);var e=[];if("string"===typeof t)As(this,t)&&(e=Fe(e,this.g.get(_s(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Fe(e,t[n])}return e},me.set=function(t,e){return Is(this),this.i=null,t=_s(this,t),As(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},me.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},me.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};var Ds=class{constructor(t,e){this.h=t,this.g=e}};function ks(t){this.l=t||Ls,Ee.PerformanceNavigationTiming?(t=Ee.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Ee.g&&Ee.g.Ea&&Ee.g.Ea()&&Ee.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ls=10;function Rs(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ms(t){return t.h?1:t.g?t.g.size:0}function xs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Os(t,e){t.g?t.g.add(e):t.h=e}function Vs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ps(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ue(t.i)}function Fs(){}function Us(){this.g=new Fs}function Bs(t,e,n){const i=n||"";try{Ji(t,(function(t,n){let s=t;Ie(t)&&(s=Kn(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function qs(t,e){const n=new hi;if(Ee.Image){const i=new Image;i.onload=ke(js,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ke(js,n,i,"TestLoadImage: error",!1,e),i.onabort=ke(js,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ke(js,n,i,"TestLoadImage: timeout",!1,e),Ee.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function js(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(r){}}function Ks(t){this.l=t.$b||null,this.j=t.ib||!1}function $s(t,e){Bn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ks.prototype.cancel=function(){if(this.i=Ps(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Fs.prototype.stringify=function(t){return Ee.JSON.stringify(t,void 0)},Fs.prototype.parse=function(t){return Ee.JSON.parse(t,void 0)},Le(Ks,_i),Ks.prototype.g=function(){return new $s(this.l,this.j)},Ks.prototype.i=function(t){return function(){return t}}({}),Le($s,Bn);var Gs=0;function Hs(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ws(t)}function Ws(t){t.onreadystatechange&&t.onreadystatechange.call(t)}me=$s.prototype,me.open=function(t,e){if(this.readyState!=Gs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ws(this)},me.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ee).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},me.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,zs(this)),this.readyState=Gs},me.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Ee.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hs(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},me.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zs(this):Ws(this),3==this.readyState&&Hs(this)}},me.Ua=function(t){this.g&&(this.response=this.responseText=t,zs(this))},me.Ta=function(t){this.g&&(this.response=t,zs(this))},me.ha=function(){this.g&&zs(this)},me.setRequestHeader=function(t,e){this.v.append(t,e)},me.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},me.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty($s.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Qs=Ee.JSON.parse;function Xs(t){Bn.call(this),this.headers=new Zi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ys,this.K=this.L=!1}Le(Xs,Bn);var Ys="",Js=/^https?$/i,Zs=["POST","PUT"];function tr(t){return en&&fn()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function er(t){return"content-type"==t.toLowerCase()}function nr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ir(t),rr(t)}function ir(t){t.D||(t.D=!0,qn(t,"complete"),qn(t,"error"))}function sr(t){if(t.h&&"undefined"!=typeof we&&(!t.C[1]||4!=ar(t)||2!=t.ba()))if(t.v&&4==ar(t))ii(t.Fa,0,t);else if(qn(t,"readystatechange"),4==ar(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===c){var s=String(t.H).match(ns)[1]||null;if(!s&&Ee.self&&Ee.self.location){var r=Ee.self.location.protocol;s=r.substr(0,r.length-1)}i=!Js.test(s?s.toLowerCase():"")}n=i}if(n)qn(t,"complete"),qn(t,"success");else{t.m=6;try{var o=2<ar(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",ir(t)}}finally{rr(t)}}}function rr(t,e){if(t.g){or(t);const i=t.g,s=t.C[0]?be:null;t.g=null,t.C=null,e||qn(t,"ready");try{i.onreadystatechange=s}catch(n){}}}function or(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ee.clearTimeout(t.A),t.A=null)}function ar(t){return t.g?t.g.readyState:0}function cr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ys:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ur(t){let e="";return ze(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function hr(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ur(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):hs(t,e,n))}function lr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dr(t){this.za=0,this.l=[],this.h=new hi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=lr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=lr("baseRetryDelayMs",5e3,t),this.$a=lr("retryDelaySeedMs",1e4,t),this.Ya=lr("forwardChannelMaxRetries",2,t),this.ra=lr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ks(t&&t.concurrentRequestLimit),this.Ca=new Us,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function fr(t){if(gr(t),3==t.G){var e=t.V++,n=rs(t.F);hs(n,"SID",t.J),hs(n,"RID",e),hs(n,"TYPE","terminate"),Er(t,n),e=new Oi(t,t.h,e,void 0),e.K=2,e.v=ls(rs(n)),n=!1,Ee.navigator&&Ee.navigator.sendBeacon&&(n=Ee.navigator.sendBeacon(e.v.toString(),"")),!n&&Ee.Image&&((new Image).src=e.v,n=!0),n||(e.g=Rr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Gi(e)}kr(t)}function pr(t){t.g&&(Sr(t),t.g.cancel(),t.g=null)}function gr(t){pr(t),t.u&&(Ee.clearTimeout(t.u),t.u=null),Cr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&Ee.clearTimeout(t.m),t.m=null)}function mr(t,e){t.l.push(new Ds(t.Za++,e)),3==t.G&&yr(t)}function yr(t){Rs(t.i)||t.m||(t.m=!0,Xn(t.Ha,t),t.C=0)}function vr(t,e){return!(Ms(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=Si(De(t.Ha,t,e),Nr(t,t.C)),t.C++,!0))}function wr(t,e){var n;n=e?e.m:t.V++;const i=rs(t.F);hs(i,"SID",t.J),hs(i,"RID",n),hs(i,"AID",t.U),Er(t,i),t.o&&t.s&&hr(i,t.o,t.s),n=new Oi(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=br(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Os(t.i,n),Bi(n,i,e)}function Er(t,e){t.j&&Ji({},(function(t,n){hs(e,n,t)}))}function br(t,e,n){n=Math.min(t.l.length,n);var i=t.j?De(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Bs(a,t,"req"+n+"_")}catch(oo){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Tr(t){t.g||t.u||(t.Y=1,Xn(t.Ga,t),t.A=0)}function Ir(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Si(De(t.Ga,t),Nr(t,t.A)),t.A++,!0)}function Sr(t){null!=t.B&&(Ee.clearTimeout(t.B),t.B=null)}function Ar(t){t.g=new Oi(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=rs(t.oa);hs(e,"RID","rpc"),hs(e,"SID",t.J),hs(e,"CI",t.N?"0":"1"),hs(e,"AID",t.U),Er(t,e),hs(e,"TYPE","xmlhttp"),t.o&&t.s&&hr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ls(rs(e)),n.s=null,n.U=!0,qi(n,t)}function Cr(t){null!=t.v&&(Ee.clearTimeout(t.v),t.v=null)}function _r(t,e){var n=null;if(t.g==e){Cr(t),Sr(t),t.g=null;var i=2}else{if(!xs(t.i,e))return;n=e.D,Vs(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=vi(),qn(i,new Ii(i,n,e,s)),yr(t)}else Tr(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==i&&vr(t,e)||2==i&&Ir(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Dr(t,5);break;case 4:Dr(t,10);break;case 3:Dr(t,6);break;default:Dr(t,2)}}function Nr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Dr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=De(t.jb,t);n||(n=new ss("//www.google.com/images/cleardot.gif"),Ee.location&&"http"==Ee.location.protocol||os(n,"https"),ls(n)),qs(n.toString(),i)}else Ti(2);t.G=0,t.j&&t.j.va(e),kr(t),gr(t)}function kr(t){t.G=0,t.I=-1,t.j&&(0==Ps(t.i).length&&0==t.l.length||(t.i.i.length=0,Ue(t.l),t.l.length=0),t.j.ua())}function Lr(t,e,n){let i=ds(n);if(""!=i.i)e&&as(i,e+"."+i.i),cs(i,i.m);else{const t=Ee.location;i=fs(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&ze(t.aa,(function(t,e){hs(i,e,t)})),e=t.D,n=t.sa,e&&n&&hs(i,e,n),hs(i,"VER",t.ma),Er(t,i),i}function Rr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Xs(new Ks({ib:!0})):new Xs(t.qa),e.L=t.H,e}function Mr(){}function xr(){if(en&&!(10<=Number(gn)))throw Error("Environmental error: no available transport.")}function Or(t,e){Bn.call(this),this.g=new dr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Be(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Be(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fr(this)}function Vr(t){Ri.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Pr(){Mi.call(this),this.status=1}function Fr(t){this.g=t}me=Xs.prototype,me.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ki.g(),this.C=this.u?Ni(this.u):Ni(ki),this.g.onreadystatechange=De(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void nr(this,r)}t=n||"";const s=new Zi(this.headers);i&&Ji(i,(function(t,e){s.set(e,t)})),i=Pe(s.T()),n=Ee.FormData&&t instanceof Ee.FormData,!(0<=Oe(Zs,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{or(this),0<this.B&&((this.K=tr(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.pa,this)):this.A=ii(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){nr(this,r)}},me.pa=function(){"undefined"!=typeof we&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qn(this,"timeout"),this.abort(8))},me.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qn(this,"complete"),qn(this,"abort"),rr(this))},me.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rr(this,!0)),Xs.Z.M.call(this)},me.Fa=function(){this.s||(this.F||this.v||this.l?sr(this):this.cb())},me.cb=function(){sr(this)},me.ba=function(){try{return 2<ar(this)?this.g.status:-1}catch(t){return-1}},me.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},me.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Qs(e)}},me.Da=function(){return this.m},me.La=function(){return"string"===typeof this.j?this.j:String(this.j)},me=dr.prototype,me.ma=8,me.G=1,me.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},me.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Oi(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=We(r),Xe(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=br(this,s,e),n=rs(this.F),hs(n,"RID",t),hs(n,"CVER",22),this.D&&hs(n,"X-HTTP-Session-Id",this.D),Er(this,n),this.o&&r&&hr(n,this.o,r),Os(this.i,s),this.Ra&&hs(n,"TYPE","init"),this.ja?(hs(n,"$req",e),hs(n,"SID","null"),s.$=!0,Bi(s,n,null)):Bi(s,n,e),this.G=2}}else 3==this.G&&(t?wr(this,t):0==this.l.length||Rs(this.i)||wr(this))},me.Ga=function(){if(this.u=null,Ar(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Si(De(this.bb,this),t)}},me.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ti(10),pr(this),Ar(this))},me.ab=function(){null!=this.v&&(this.v=null,pr(this),Ir(this),Ti(19))},me.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ti(2)):(this.h.info("Failed to ping google.com"),Ti(1))},me=Mr.prototype,me.xa=function(){},me.wa=function(){},me.va=function(){},me.ua=function(){},me.Oa=function(){},xr.prototype.g=function(t,e){return new Or(t,e)},Le(Or,Bn),Or.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Xn(De(t.hb,t,e))),Ti(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Lr(t,null,t.W),yr(t)},Or.prototype.close=function(){fr(this.g)},Or.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,mr(this.g,e)}else this.v?(e={},e.__data__=Kn(t),mr(this.g,e)):mr(this.g,t)},Or.prototype.M=function(){this.g.j=null,delete this.j,fr(this.g),delete this.g,Or.Z.M.call(this)},Le(Vr,Ri),Le(Pr,Mi),Le(Fr,Mr),Fr.prototype.xa=function(){qn(this.g,"a")},Fr.prototype.wa=function(t){qn(this.g,new Vr(t))},Fr.prototype.va=function(t){qn(this.g,new Pr(t))},Fr.prototype.ua=function(){qn(this.g,"b")},xr.prototype.createWebChannel=xr.prototype.g,Or.prototype.send=Or.prototype.u,Or.prototype.open=Or.prototype.m,Or.prototype.close=Or.prototype.close,Ai.NO_ERROR=0,Ai.TIMEOUT=8,Ai.HTTP_ERROR=6,Ci.COMPLETE="complete",Di.EventType=Li,Li.OPEN="a",Li.CLOSE="b",Li.ERROR="c",Li.MESSAGE="d",Bn.prototype.listen=Bn.prototype.N,Xs.prototype.listenOnce=Xs.prototype.O,Xs.prototype.getLastError=Xs.prototype.La,Xs.prototype.getLastErrorCode=Xs.prototype.Da,Xs.prototype.getStatus=Xs.prototype.ba,Xs.prototype.getResponseJson=Xs.prototype.Qa,Xs.prototype.getResponseText=Xs.prototype.ga,Xs.prototype.send=Xs.prototype.ea;var Ur=ve.createWebChannelTransport=function(){return new xr},Br=ve.getStatEventTarget=function(){return vi()},qr=ve.ErrorCode=Ai,jr=ve.EventType=Ci,Kr=ve.Event=mi,$r=ve.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Gr=ve.FetchXmlHttpFactory=Ks,Hr=ve.WebChannel=Di,zr=ve.XhrIo=Xs;const Wr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qr.UNAUTHENTICATED=new Qr(null),Qr.GOOGLE_CREDENTIALS=new Qr("google-credentials-uid"),Qr.FIRST_PARTY=new Qr("first-party-uid"),Qr.MOCK_USER=new Qr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xr="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new F("@firebase/firestore");function Jr(){return Yr.logLevel}function Zr(t,...e){if(Yr.logLevel<=M.DEBUG){const n=e.map(no);Yr.debug(`Firestore (${Xr}): ${t}`,...n)}}function to(t,...e){if(Yr.logLevel<=M.ERROR){const n=e.map(no);Yr.error(`Firestore (${Xr}): ${t}`,...n)}}function eo(t,...e){if(Yr.logLevel<=M.WARN){const n=e.map(no);Yr.warn(`Firestore (${Xr}): ${t}`,...n)}}function no(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t="Unexpected state"){const e=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+t;throw to(e),new Error(e)}function so(t,e){t||io()}function ro(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ao extends w{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ho{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Qr.UNAUTHENTICATED)))}shutdown(){}}class lo{constructor(t){this.t=t,this.currentUser=Qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new co;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new co,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new co)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(so("string"==typeof e.accessToken),new uo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return so(null===t||"string"==typeof t),new Qr(t)}}class fo{constructor(t,e,n){this.type="FirstParty",this.user=Qr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class po{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new fo(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Qr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class go{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mo{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(so("string"==typeof t.token),this.p=t.token,new go(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yo.A=-1;class wo{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=vo(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Eo(t,e){return t<e?-1:t>e?1:0}function bo(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ao(oo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ao(oo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ao(oo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ao(oo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return To.fromMillis(Date.now())}static fromDate(t){return To.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new To(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Eo(this.nanoseconds,t.nanoseconds):Eo(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Io(t)}static min(){return new Io(new To(0,0))}static max(){return new Io(new To(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ao(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Co(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,e,n){void 0===e?e=0:e>t.length&&io(),void 0===n?n=t.length-e:n>t.length-e&&io(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===_o.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _o?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class No extends _o{construct(t,e,n){return new No(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ao(oo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new No(e)}static emptyPath(){return new No([])}}const Do=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ko extends _o{construct(t,e,n){return new ko(t,e,n)}static isValidIdentifier(t){return Do.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ko.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ko(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new ao(oo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new ao(oo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ao(oo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new ao(oo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ko(e)}static emptyPath(){return new ko([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){this.fields=t,t.sort(ko.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return bo(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ro(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ro(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Eo(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ro.EMPTY_BYTE_STRING=new Ro("");const Mo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xo(t){if(so(!!t),"string"==typeof t){let e=0;const n=Mo.exec(t);if(so(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Oo(t.seconds),nanos:Oo(t.nanos)}}function Oo(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Vo(t){return"string"==typeof t?Ro.fromBase64String(t):Ro.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fo(t){const e=t.mapValue.fields.__previous_value__;return Po(e)?Fo(e):e}function Uo(t){const e=xo(t.mapValue.fields.__local_write_time__.timestampValue);return new To(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class qo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof qo&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){return null==t}function Ko(t){return 0===t&&1/t==-1/0}function $o(t){return"number"==typeof t&&Number.isInteger(t)&&!Ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){this.path=t}static fromPath(t){return new Go(No.fromString(t))}static fromName(t){return new Go(No.fromString(t).popFirst(5))}static empty(){return new Go(No.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===No.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return No.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Go(new No(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Po(t)?4:aa(t)?9007199254740991:10:io()}function Wo(t,e){if(t===e)return!0;const n=zo(t);if(n!==zo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Uo(t).isEqual(Uo(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=xo(t.timestampValue),i=xo(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Vo(t.bytesValue).isEqual(Vo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Oo(t.geoPointValue.latitude)===Oo(e.geoPointValue.latitude)&&Oo(t.geoPointValue.longitude)===Oo(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Oo(t.integerValue)===Oo(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Oo(t.doubleValue),i=Oo(e.doubleValue);return n===i?Ko(n)===Ko(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return bo(t.arrayValue.values||[],e.arrayValue.values||[],Wo);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(So(n)!==So(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!Wo(n[s],i[s])))return!1;return!0}(t,e);default:return io()}}function Qo(t,e){return void 0!==(t.values||[]).find((t=>Wo(t,e)))}function Xo(t,e){if(t===e)return 0;const n=zo(t),i=zo(e);if(n!==i)return Eo(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Eo(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Oo(t.integerValue||t.doubleValue),i=Oo(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Yo(t.timestampValue,e.timestampValue);case 4:return Yo(Uo(t),Uo(e));case 5:return Eo(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Vo(t),i=Vo(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let s=0;s<n.length&&s<i.length;s++){const t=Eo(n[s],i[s]);if(0!==t)return t}return Eo(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Eo(Oo(t.latitude),Oo(e.latitude));return 0!==n?n:Eo(Oo(t.longitude),Oo(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const t=Xo(n[s],i[s]);if(t)return t}return Eo(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ho.mapValue&&e===Ho.mapValue)return 0;if(t===Ho.mapValue)return 1;if(e===Ho.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const t=Eo(i[o],r[o]);if(0!==t)return t;const e=Xo(n[i[o]],s[r[o]]);if(0!==e)return e}return Eo(i.length,r.length)}(t.mapValue,e.mapValue);default:throw io()}}function Yo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Eo(t,e);const n=xo(t),i=xo(e),s=Eo(n.seconds,i.seconds);return 0!==s?s:Eo(n.nanos,i.nanos)}function Jo(t){return Zo(t)}function Zo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=xo(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Go.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Zo(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Zo(t.fields[s])}`;return n+"}"}(t.mapValue):io();var e,n}function ta(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ea(t){return!!t&&"integerValue"in t}function na(t){return!!t&&"arrayValue"in t}function ia(t){return!!t&&"nullValue"in t}function sa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ra(t){return!!t&&"mapValue"in t}function oa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ao(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=oa(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aa(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{constructor(t){this.value=t}static empty(){return new ca({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ra(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=oa(e)}setAll(t){let e=ko.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=oa(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());ra(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ra(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Ao(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new ca(oa(this.value))}}function ua(t){const e=[];return Ao(t.fields,((t,n)=>{const i=new ko([t]);if(ra(n)){const t=ua(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Lo(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ha{constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new ha(t,0,Io.min(),Io.min(),ca.empty(),0)}static newFoundDocument(t,e,n){return new ha(t,1,e,Io.min(),n,0)}static newNoDocument(t,e){return new ha(t,2,e,Io.min(),ca.empty(),0)}static newUnknownDocument(t,e){return new ha(t,3,e,Io.min(),ca.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ca.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ca.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ha&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ha(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class la{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}la.UNKNOWN_ID=-1;function da(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Io.fromTimestamp(1e9===i?new To(n+1,0):new To(n,i));return new pa(s,Go.empty(),e)}function fa(t){return new pa(t.readTime,t.key,-1)}class pa{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new pa(Io.min(),Go.empty(),-1)}static max(){return new pa(Io.max(),Go.empty(),-1)}}function ga(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Go.comparator(t.documentKey,e.documentKey),0!==n?n:Eo(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){this.comparator=t,this.root=e||va.EMPTY}insert(t,e){return new ma(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,va.BLACK,null,null))}remove(t){return new ma(this.comparator,this.root.remove(t,this.comparator).copy(null,null,va.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ya(this.root,t,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ya(this.root,t,this.comparator,!0)}}class ya{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class va{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:va.RED,this.left=null!=i?i:va.EMPTY,this.right=null!=s?s:va.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new va(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return va.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return va.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,va.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,va.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw io();if(this.right.isRed())throw io();const t=this.left.check();if(t!==this.right.check())throw io();return t+(this.isRed()?0:1)}}va.EMPTY=null,va.RED=!0,va.BLACK=!1,va.EMPTY=new class{constructor(){this.size=0}get key(){throw io()}get value(){throw io()}get color(){throw io()}get left(){throw io()}get right(){throw io()}copy(t,e,n,i,s){return this}insert(t,e,n){return new va(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa{constructor(t){this.comparator=t,this.data=new ma(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ea(this.data.getIterator())}getIteratorFrom(t){return new Ea(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof wa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new wa(this.comparator);return e.data=t,e}}class Ea{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.P=null}}function Ta(t,e=null,n=[],i=[],s=null,r=null,o=null){return new ba(t,e,n,i,s,r,o)}function Ia(t){const e=ro(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Jo(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),jo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Jo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Jo(t))).join(",")),e.P=t}return e.P}function Sa(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Jo(e.value)}`;var e})).join(", ")}]`),jo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Jo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Jo(t))).join(",")),`Target(${e})`}function Aa(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Fa(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Wo(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ba(t.startAt,e.startAt)&&Ba(t.endAt,e.endAt)}function Ca(t){return Go.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class _a extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Na(t,e,n):"array-contains"===e?new Ra(t,n):"in"===e?new Ma(t,n):"not-in"===e?new xa(t,n):"array-contains-any"===e?new Oa(t,n):new _a(t,e,n)}static V(t,e,n){return"in"===e?new Da(t,n):new ka(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Xo(e,this.value)):null!==e&&zo(this.value)===zo(e)&&this.v(Xo(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return io()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Na extends _a{constructor(t,e,n){super(t,e,n),this.key=Go.fromName(n.referenceValue)}matches(t){const e=Go.comparator(t.key,this.key);return this.v(e)}}class Da extends _a{constructor(t,e){super(t,"in",e),this.keys=La("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ka extends _a{constructor(t,e){super(t,"not-in",e),this.keys=La("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function La(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Go.fromName(t.referenceValue)))}class Ra extends _a{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return na(e)&&Qo(e.arrayValue,this.value)}}class Ma extends _a{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Qo(this.value.arrayValue,e)}}class xa extends _a{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Qo(this.value.arrayValue,e)}}class Oa extends _a{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!na(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Qo(this.value.arrayValue,t)))}}class Va{constructor(t,e){this.position=t,this.inclusive=e}}class Pa{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fa(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ua(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Go.comparator(Go.fromName(o.referenceValue),n.key):Xo(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Ba(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wo(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function ja(t,e,n,i,s,r,o,a){return new qa(t,e,n,i,s,r,o,a)}function Ka(t){return new qa(t)}function $a(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ga(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ha(t){for(const e of t.filters)if(e.S())return e.field;return null}function za(t){return null!==t.collectionGroup}function Wa(t){const e=ro(t);if(null===e.D){e.D=[];const t=Ha(e),n=Ga(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Pa(t)),e.D.push(new Pa(ko.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Pa(ko.keyField(),t))}}}return e.D}function Qa(t){const e=ro(t);if(!e.C)if("F"===e.limitType)e.C=Ta(e.path,e.collectionGroup,Wa(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Wa(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Pa(s.field,e))}const n=e.endAt?new Va(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Va(e.startAt.position,e.startAt.inclusive):null;e.C=Ta(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.C}function Xa(t,e,n){return new qa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ya(t,e){return Aa(Qa(t),Qa(e))&&t.limitType===e.limitType}function Ja(t){return`${Ia(Qa(t))}|lt:${t.limitType}`}function Za(t){return`Query(target=${Sa(Qa(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Go.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Ua(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Wa(t),e))&&!(t.endAt&&!function(t,e,n){const i=Ua(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Wa(t),e))}(t,e)}function ec(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nc(t){return(e,n)=>{let i=!1;for(const s of Wa(t)){const t=ic(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function ic(t,e,n){const i=t.field.isKeyField()?Go.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Xo(i,s):io()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return io()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ko(e)?"-0":e}}function rc(t){return{integerValue:""+t}}function oc(t,e){return $o(e)?rc(e):sc(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this._=void 0}}function cc(t,e,n){return t instanceof lc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof dc?fc(t,e):t instanceof pc?gc(t,e):function(t,e){const n=hc(t,e),i=yc(n)+yc(t.k);return ea(n)&&ea(t.k)?rc(i):sc(t.M,i)}(t,e)}function uc(t,e,n){return t instanceof dc?fc(t,e):t instanceof pc?gc(t,e):n}function hc(t,e){return t instanceof mc?ea(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class lc extends ac{}class dc extends ac{constructor(t){super(),this.elements=t}}function fc(t,e){const n=vc(e);for(const i of t.elements)n.some((t=>Wo(t,i)))||n.push(i);return{arrayValue:{values:n}}}class pc extends ac{constructor(t){super(),this.elements=t}}function gc(t,e){let n=vc(e);for(const i of t.elements)n=n.filter((t=>!Wo(t,i)));return{arrayValue:{values:n}}}class mc extends ac{constructor(t,e){super(),this.M=t,this.k=e}}function yc(t){return Oo(t.integerValue||t.doubleValue)}function vc(t){return na(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof dc&&e instanceof dc||t instanceof pc&&e instanceof pc?bo(t.elements,e.elements,Wo):t instanceof mc&&e instanceof mc?Wo(t.k,e.k):t instanceof lc&&e instanceof lc}(t.transform,e.transform)}class Ec{constructor(t,e){this.version=t,this.transformResults=e}}class bc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bc}static exists(t){return new bc(void 0,t)}static updateTime(t){return new bc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ic{}function Sc(t,e,n){t instanceof Dc?function(t,e,n){const i=t.value.clone(),s=Rc(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof kc?function(t,e,n){if(!Tc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Rc(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Lc(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ac(t,e,n){t instanceof Dc?function(t,e,n){if(!Tc(t.precondition,e))return;const i=t.value.clone(),s=Mc(t.fieldTransforms,n,e);i.setAll(s),e.convertToFoundDocument(Nc(e),i).setHasLocalMutations()}(t,e,n):t instanceof kc?function(t,e,n){if(!Tc(t.precondition,e))return;const i=Mc(t.fieldTransforms,n,e),s=e.data;s.setAll(Lc(t)),s.setAll(i),e.convertToFoundDocument(Nc(e),s).setHasLocalMutations()}(t,e,n):function(t,e){Tc(t.precondition,e)&&e.convertToNoDocument(Io.min())}(t,e)}function Cc(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=hc(i.transform,t||null);null!=s&&(null==n&&(n=ca.empty()),n.set(i.field,s))}return n||null}function _c(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&bo(t,e,((t,e)=>wc(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Nc(t){return t.isFoundDocument()?t.version:Io.min()}class Dc extends Ic{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class kc extends Ic{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Lc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Rc(t,e,n){const i=new Map;so(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,uc(o,a,n[s]))}return i}function Mc(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,cc(t,r,e))}return i}class xc extends Ic{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Oc extends Ic{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pc,Fc;function Uc(t){switch(t){default:return io();case oo.CANCELLED:case oo.UNKNOWN:case oo.DEADLINE_EXCEEDED:case oo.RESOURCE_EXHAUSTED:case oo.INTERNAL:case oo.UNAVAILABLE:case oo.UNAUTHENTICATED:return!1;case oo.INVALID_ARGUMENT:case oo.NOT_FOUND:case oo.ALREADY_EXISTS:case oo.PERMISSION_DENIED:case oo.FAILED_PRECONDITION:case oo.ABORTED:case oo.OUT_OF_RANGE:case oo.UNIMPLEMENTED:case oo.DATA_LOSS:return!0}}function Bc(t){if(void 0===t)return to("GRPC error has no .code"),oo.UNKNOWN;switch(t){case Pc.OK:return oo.OK;case Pc.CANCELLED:return oo.CANCELLED;case Pc.UNKNOWN:return oo.UNKNOWN;case Pc.DEADLINE_EXCEEDED:return oo.DEADLINE_EXCEEDED;case Pc.RESOURCE_EXHAUSTED:return oo.RESOURCE_EXHAUSTED;case Pc.INTERNAL:return oo.INTERNAL;case Pc.UNAVAILABLE:return oo.UNAVAILABLE;case Pc.UNAUTHENTICATED:return oo.UNAUTHENTICATED;case Pc.INVALID_ARGUMENT:return oo.INVALID_ARGUMENT;case Pc.NOT_FOUND:return oo.NOT_FOUND;case Pc.ALREADY_EXISTS:return oo.ALREADY_EXISTS;case Pc.PERMISSION_DENIED:return oo.PERMISSION_DENIED;case Pc.FAILED_PRECONDITION:return oo.FAILED_PRECONDITION;case Pc.ABORTED:return oo.ABORTED;case Pc.OUT_OF_RANGE:return oo.OUT_OF_RANGE;case Pc.UNIMPLEMENTED:return oo.UNIMPLEMENTED;case Pc.DATA_LOSS:return oo.DATA_LOSS;default:return io()}}(Fc=Pc||(Pc={}))[Fc.OK=0]="OK",Fc[Fc.CANCELLED=1]="CANCELLED",Fc[Fc.UNKNOWN=2]="UNKNOWN",Fc[Fc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fc[Fc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fc[Fc.NOT_FOUND=5]="NOT_FOUND",Fc[Fc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fc[Fc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fc[Fc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fc[Fc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fc[Fc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fc[Fc.ABORTED=10]="ABORTED",Fc[Fc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fc[Fc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fc[Fc.INTERNAL=13]="INTERNAL",Fc[Fc.UNAVAILABLE=14]="UNAVAILABLE",Fc[Fc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,s]of n)if(this.equalsFn(i,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ao(this.inner,((e,n)=>{for(const[i,s]of n)t(i,s)}))}isEmpty(){return Co(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new ma(Go.comparator);function Kc(){return jc}const $c=new ma(Go.comparator);function Gc(...t){let e=$c;for(const n of t)e=e.insert(n.key,n);return e}function Hc(){return new qc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const zc=new ma(Go.comparator),Wc=new wa(Go.comparator);function Qc(...t){let e=Wc;for(const n of t)e=e.add(n);return e}const Xc=new wa(Eo);function Yc(){return Xc}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Zc.createSynthesizedTargetChangeForCurrentChange(t,e)),new Jc(Io.min(),n,Yc(),Kc(),Qc())}}class Zc{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Zc(Ro.EMPTY_BYTE_STRING,e,Qc(),Qc(),Qc())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e,n,i){this.O=t,this.removedTargetIds=e,this.key=n,this.F=i}}class eu{constructor(t,e){this.targetId=t,this.$=e}}class nu{constructor(t,e,n=Ro.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class iu{constructor(){this.B=0,this.L=ou(),this.U=Ro.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=Qc(),e=Qc(),n=Qc();return this.L.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:io()}})),new Zc(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=ou()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class su{constructor(t){this.nt=t,this.st=new Map,this.it=Kc(),this.rt=ru(),this.ot=new wa(Eo)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:io()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,i=this.wt(e);if(i){const t=i.target;if(Ca(t))if(0===n){const n=new Go(t.path);this.ct(e,n,ha.newNoDocument(n,Io.min()))}else so(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,i)=>{const s=this.wt(i);if(s){if(n.current&&Ca(s.target)){const e=new Go(s.target.path);null!==this.it.get(e)||this.It(i,e)||this.ct(i,e,ha.newNoDocument(e,t))}n.j&&(e.set(i,n.H()),n.J())}}));let n=Qc();this.rt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const i=new Jc(t,e,this.ot,this.it,n);return this.it=Kc(),this.rt=ru(),this.ot=new wa(Eo),i}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const i=this.lt(t);this.It(t,e)?i.Y(e,1):i.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new iu,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new wa(Eo),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Zr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new iu),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function ru(){return new ma(Go.comparator)}function ou(){return new ma(Go.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),cu=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class uu{constructor(t,e){this.databaseId=t,this.N=e}}function hu(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lu(t,e){return t.N?e.toBase64():e.toUint8Array()}function du(t,e){return hu(t,e.toTimestamp())}function fu(t){return so(!!t),Io.fromTimestamp(function(t){const e=xo(t);return new To(e.seconds,e.nanos)}(t))}function pu(t,e){return function(t){return new No(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function gu(t){const e=No.fromString(t);return so(Fu(e)),e}function mu(t,e){return pu(t.databaseId,e.path)}function yu(t,e){const n=gu(e);if(n.get(1)!==t.databaseId.projectId)throw new ao(oo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ao(oo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Go(bu(n))}function vu(t,e){return pu(t.databaseId,e)}function wu(t){const e=gu(t);return 4===e.length?No.emptyPath():bu(e)}function Eu(t){return new No(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bu(t){return so(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Tu(t,e,n){return{name:mu(t,e),fields:n.value.mapValue.fields}}function Iu(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:io()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.N?(so(void 0===e||"string"==typeof e),Ro.fromBase64String(e||"")):(so(void 0===e||e instanceof Uint8Array),Ro.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?oo.UNKNOWN:Bc(t.code);return new ao(e,t.message||"")}(o);n=new nu(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=yu(t,i.document.name),r=fu(i.document.updateTime),o=new ca({mapValue:{fields:i.document.fields}}),a=ha.newFoundDocument(s,r,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new tu(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=yu(t,i.document),r=i.readTime?fu(i.readTime):Io.min(),o=ha.newNoDocument(s,r),a=i.removedTargetIds||[];n=new tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=yu(t,i.document),r=i.removedTargetIds||[];n=new tu([],r,s,null)}else{if(!("filter"in e))return io();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new Vc(i),r=t.targetId;n=new eu(r,s)}}return n}function Su(t,e){let n;if(e instanceof Dc)n={update:Tu(t,e.key,e.value)};else if(e instanceof xc)n={delete:mu(t,e.key)};else if(e instanceof kc)n={update:Tu(t,e.key,e.data),updateMask:Pu(e.fieldMask)};else{if(!(e instanceof Oc))return io();n={verify:mu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof lc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof dc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof mc)return{fieldPath:e.field.canonicalString(),increment:n.k};throw io()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:du(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:io()}(t,e.precondition)),n}function Au(t,e){return t&&t.length>0?(so(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?fu(t.updateTime):fu(e);return n.isEqual(Io.min())&&(n=fu(e)),new Ec(n,t.transformResults||[])}(t,e)))):[]}function Cu(t,e){return{documents:[vu(t,e.path)]}}function _u(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=vu(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vu(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(sa(t.value))return{unaryFilter:{field:Mu(t.field),op:"IS_NAN"}};if(ia(t.value))return{unaryFilter:{field:Mu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(sa(t.value))return{unaryFilter:{field:Mu(t.field),op:"IS_NOT_NAN"}};if(ia(t.value))return{unaryFilter:{field:Mu(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mu(t.field),op:Ru(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Mu(t.field),direction:Lu(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||jo(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Nu(t){let e=wu(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){so(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=ku(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Pa(xu(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,jo(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Va(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Va(n,e)}(n.endAt)),ja(e,s,o,r,a,"F",c,u)}function Du(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return io()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ku(t){return t?void 0!==t.unaryFilter?[Vu(t)]:void 0!==t.fieldFilter?[Ou(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ku(t))).reduce(((t,e)=>t.concat(e))):io():[]}function Lu(t){return au[t]}function Ru(t){return cu[t]}function Mu(t){return{fieldPath:t.canonicalString()}}function xu(t){return ko.fromServerFormat(t.fieldPath)}function Ou(t){return _a.create(xu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return io()}}(t.fieldFilter.op),t.fieldFilter.value)}function Vu(t){switch(t.unaryFilter.op){case"IS_NAN":const e=xu(t.unaryFilter.field);return _a.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=xu(t.unaryFilter.field);return _a.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xu(t.unaryFilter.field);return _a.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xu(t.unaryFilter.field);return _a.create(s,"!=",{nullValue:"NULL_VALUE"});default:return io()}}function Pu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Fu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&io(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ku(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ku?e:Ku.resolve(e)}catch(t){return Ku.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ku.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ku.reject(e)}static resolve(t){return new Ku(((e,n)=>{e(t)}))}static reject(t){return new Ku(((e,n)=>{n(t)}))}static waitFor(t){return new Ku(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=Ku.resolve(!1);for(const n of t)e=e.next((t=>t?Ku.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gu{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Sc(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ac(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ac(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Io.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Qc())}isEqual(t){return this.batchId===t.batchId&&bo(this.mutations,t.mutations,((t,e)=>_c(t,e)))&&bo(this.baseMutations,t.baseMutations,((t,e)=>_c(t,e)))}}class Hu{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){so(t.mutations.length===n.length);let i=zc;const s=t.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,n[r].version);return new Hu(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e,n,i,s=Io.min(),r=Io.min(),o=Ro.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Wu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Wu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Wu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t){this.Jt=t}}function Xu(t){const e=Nu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Xa(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Oo(t.integerValue));else if("doubleValue"in t){const n=Oo(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Ko(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Vo(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?aa(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):io()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const i of Object.keys(n))this.re(i,e),this.te(n[i],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const i of n)this.te(i,e)}ae(t,e){this.ne(e,37),Go.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}Yu.fe=new Yu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ju{constructor(){this.qe=new Zu}addToCollectionParentIndex(t,e){return this.qe.add(e),Ku.resolve()}getCollectionParents(t,e){return Ku.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Ku.resolve()}deleteFieldIndex(t,e){return Ku.resolve()}getDocumentsMatchingTarget(t,e){return Ku.resolve(null)}getIndexType(t,e){return Ku.resolve(0)}getFieldIndexes(t,e){return Ku.resolve([])}getNextCollectionGroupToUpdate(t){return Ku.resolve(null)}getMinOffset(t,e){return Ku.resolve(pa.min())}updateCollectionGroup(t,e,n){return Ku.resolve()}updateIndexEntries(t,e){return Ku.resolve()}}class Zu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new wa(No.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new wa(No.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class th{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new th(t,th.DEFAULT_COLLECTION_PERCENTILE,th.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */th.DEFAULT_COLLECTION_PERCENTILE=10,th.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,th.DEFAULT=new th(41943040,th.DEFAULT_COLLECTION_PERCENTILE,th.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),th.DISABLED=new th(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new eh(0)}static yn(){return new eh(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nh(t){if(t.code!==oo.FAILED_PRECONDITION||t.message!==qu)throw t;Zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ih{constructor(){this.changes=new qc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ha.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ku.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const i of e)i.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return Go.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):za(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new Go(e)).next((t=>{let e=Gc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const i=e.collectionGroup;let s=Gc();return this.indexManager.getCollectionParents(t,i).next((r=>Ku.forEach(r,(r=>{const o=function(t,e){return new qa(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}zs(t,e,n){let i;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(i=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let s=i.get(n);null==s&&(s=ha.newInvalidDocument(n),i=i.insert(n,s)),Ac(t,s,e.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}})).next((()=>(i.forEach(((t,n)=>{tc(e,n)||(i=i.remove(t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=i}static Ys(t,e){let n=Qc(),i=Qc();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rh(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.Xs=!1}initialize(t,e){this.Zs=t,this.indexManager=e,this.Xs=!0}Qs(t,e,n,i){return this.ti(t,e).next((s=>s||this.ei(t,e,i,n))).next((n=>n||this.ni(t,e)))}ti(t,e){return Ku.resolve(null)}ei(t,e,n,i){return $a(e)||i.isEqual(Io.min())?this.ni(t,e):this.Zs.Ks(t,n).next((s=>{const r=this.si(e,s);return this.ii(e,r,n,i)?this.ni(t,e):(Jr()<=M.DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Za(e)),this.ri(t,r,e,da(i,-1)))}))}si(t,e){let n=new wa(nc(t));return e.forEach(((e,i)=>{tc(t,i)&&(n=n.add(i))})),n}ii(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ni(t,e){return Jr()<=M.DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",Za(e)),this.Zs.Qs(t,e,pa.min())}ri(t,e,n,i){return this.Zs.Qs(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e,n,i){this.persistence=t,this.oi=e,this.M=i,this.ui=new ma(Eo),this.ai=new qc((t=>Ia(t)),Aa),this.ci=new Map,this.hi=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.li(n)}li(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.fi=new sh(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ui)))}}function ch(t,e,n,i){return new ah(t,e,n,i)}async function uh(t,e){const n=ro(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.Bs.getAllMutationBatches(t).next((s=>(i=s,n.li(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Qc();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.fi.Ks(t,o).next((t=>({di:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function hh(t,e){const n=ro(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.hi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=Ku.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);so(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,i)))}))}function lh(t){const e=ro(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function dh(t,e){const n=ro(t),i=e.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Ro.EMPTY_BYTE_STRING,Io.min()).withLastLimboFreeSnapshotVersion(Io.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,i)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.fs.updateTargetData(t,u))}));let a=Kc();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(fh(t,r,e.documentUpdates).next((t=>{a=t}))),!i.isEqual(Io.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return Ku.waitFor(o).next((()=>r.apply(t))).next((()=>n.fi.Gs(t,a))).next((()=>a))})).then((t=>(n.ui=s,t)))}function fh(t,e,n){let i=Qc();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Kc();return n.forEach(((n,s)=>{const r=t.get(n);s.isNoDocument()&&s.version.isEqual(Io.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",s.version)})),i}))}function ph(t,e){const n=ro(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function gh(t,e){const n=ro(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.fs.getTargetData(t,e).next((s=>s?(i=s,Ku.resolve(i)):n.fs.allocateTargetId(t).next((s=>(i=new Wu(e,s,0,t.currentSequenceNumber),n.fs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.ui.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ui=n.ui.insert(t.targetId,t),n.ai.set(e,t.targetId)),t}))}async function mh(t,e,n){const i=ro(t),s=i.ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!$u(t))throw t;Zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.ui=i.ui.remove(e),i.ai.delete(s.target)}function yh(t,e,n){const i=ro(t);let s=Io.min(),r=Qc();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=ro(t),s=i.ai.get(n);return void 0!==s?Ku.resolve(i.ui.get(s)):i.fs.getTargetData(e,n)}(i,t,Qa(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.oi.Qs(t,e,n?s:Io.min(),n?r:Qc()))).next((t=>(vh(i,ec(e),t),{documents:t,_i:r})))))}function vh(t,e,n){let i=Io.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.ci.set(e,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wh{constructor(t){this.M=t,this.yi=new Map,this.pi=new Map}getBundleMetadata(t,e){return Ku.resolve(this.yi.get(e))}saveBundleMetadata(t,e){var n;return this.yi.set(e.id,{id:(n=e).id,version:n.version,createTime:fu(n.createTime)}),Ku.resolve()}getNamedQuery(t,e){return Ku.resolve(this.pi.get(e))}saveNamedQuery(t,e){return this.pi.set(e.name,function(t){return{name:t.name,query:Xu(t.bundledQuery),readTime:fu(t.readTime)}}(e)),Ku.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.overlays=new ma(Go.comparator),this.Ii=new Map}getOverlay(t,e){return Ku.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.Xt(t,e,i)})),Ku.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ii.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ii.delete(n)),Ku.resolve()}getOverlaysForCollection(t,e,n){const i=Hc(),s=e.length+1,r=new Go(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Ku.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new ma(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Hc(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Hc(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return Ku.resolve(o)}Xt(t,e,n){if(null===n)return;const i=this.overlays.get(n.key);if(null!==i){const t=this.Ii.get(i.largestBatchId).delete(n.key);this.Ii.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new zu(e,n));let s=this.Ii.get(e);void 0===s&&(s=Qc(),this.Ii.set(e,s)),this.Ii.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.Ti=new wa(Th.Ei),this.Ai=new wa(Th.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(t,e){const n=new Th(t,e);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Pi(new Th(t,e))}Vi(t,e){t.forEach((t=>this.removeReference(t,e)))}vi(t){const e=new Go(new No([])),n=new Th(e,t),i=new Th(e,t+1),s=[];return this.Ai.forEachInRange([n,i],(t=>{this.Pi(t),s.push(t.key)})),s}Si(){this.Ti.forEach((t=>this.Pi(t)))}Pi(t){this.Ti=this.Ti.delete(t),this.Ai=this.Ai.delete(t)}Di(t){const e=new Go(new No([])),n=new Th(e,t),i=new Th(e,t+1);let s=Qc();return this.Ai.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Th(t,0),n=this.Ti.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Th{constructor(t,e){this.key=t,this.Ci=e}static Ei(t,e){return Go.comparator(t.key,e.key)||Eo(t.Ci,e.Ci)}static Ri(t,e){return Eo(t.Ci,e.Ci)||Go.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.xi=1,this.Ni=new wa(Th.Ei)}checkEmpty(t){return Ku.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,i){const s=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const r=new Gu(s,e,n,i);this.Bs.push(r);for(const o of i)this.Ni=this.Ni.add(new Th(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ku.resolve(r)}lookupMutationBatch(t,e){return Ku.resolve(this.ki(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Mi(n),s=i<0?0:i;return Ku.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return Ku.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(t){return Ku.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Th(e,0),i=new Th(e,Number.POSITIVE_INFINITY),s=[];return this.Ni.forEachInRange([n,i],(t=>{const e=this.ki(t.Ci);s.push(e)})),Ku.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new wa(Eo);return e.forEach((t=>{const e=new Th(t,0),i=new Th(t,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([e,i],(t=>{n=n.add(t.Ci)}))})),Ku.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Go.isDocumentKey(s)||(s=s.child(""));const r=new Th(new Go(s),0);let o=new wa(Eo);return this.Ni.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.Ci)),!0)}),r),Ku.resolve(this.Oi(o))}Oi(t){const e=[];return t.forEach((t=>{const n=this.ki(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){so(0===this.Fi(e.batchId,"removed")),this.Bs.shift();let n=this.Ni;return Ku.forEach(e.mutations,(i=>{const s=new Th(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Ni=n}))}_n(t){}containsKey(t,e){const n=new Th(e,0),i=this.Ni.firstAfterOrEqual(n);return Ku.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Bs.length,Ku.resolve()}Fi(t,e){return this.Mi(t)}Mi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}ki(t){const e=this.Mi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.$i=t,this.docs=new ma(Go.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.$i(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ku.resolve(n?n.document.mutableCopy():ha.newInvalidDocument(e))}getEntries(t,e){let n=Kc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ha.newInvalidDocument(t))})),Ku.resolve(n)}getAllFromCollection(t,e,n){let i=Kc();const s=new Go(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||ga(fa(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return Ku.resolve(i)}getAllFromCollectionGroup(t,e,n,i){io()}Bi(t,e){return Ku.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ah(this)}getSize(t){return Ku.resolve(this.size)}}class Ah extends ih{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Kn.addEntry(t,i)):this.Kn.removeEntry(n)})),Ku.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.persistence=t,this.Li=new qc((t=>Ia(t)),Aa),this.lastRemoteSnapshotVersion=Io.min(),this.highestTargetId=0,this.Ui=0,this.qi=new bh,this.targetCount=0,this.Ki=eh.gn()}forEachTarget(t,e){return this.Li.forEach(((t,n)=>e(n))),Ku.resolve()}getLastRemoteSnapshotVersion(t){return Ku.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ku.resolve(this.Ui)}allocateTargetId(t){return this.highestTargetId=this.Ki.next(),Ku.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ui&&(this.Ui=e),Ku.resolve()}Tn(t){this.Li.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ki=new eh(e),this.highestTargetId=e),t.sequenceNumber>this.Ui&&(this.Ui=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,Ku.resolve()}updateTargetData(t,e){return this.Tn(e),Ku.resolve()}removeTargetData(t,e){return this.Li.delete(e.target),this.qi.vi(e.targetId),this.targetCount-=1,Ku.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Li.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Li.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Ku.waitFor(s).next((()=>i))}getTargetCount(t){return Ku.resolve(this.targetCount)}getTargetData(t,e){const n=this.Li.get(e)||null;return Ku.resolve(n)}addMatchingKeys(t,e,n){return this.qi.bi(e,n),Ku.resolve()}removeMatchingKeys(t,e,n){this.qi.Vi(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),Ku.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.qi.vi(e),Ku.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qi.Di(e);return Ku.resolve(n)}containsKey(t,e){return Ku.resolve(this.qi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e){this.Gi={},this.overlays={},this.es=new yo(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Ch(this),this.indexManager=new Ju,this.ds=function(t){return new Sh(t)}((t=>this.referenceDelegate.Qi(t))),this.M=new Qu(e),this._s=new wh(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Eh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Gi[t.toKey()];return n||(n=new Ih(e,this.referenceDelegate),this.Gi[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){Zr("MemoryPersistence","Starting transaction:",t);const i=new Nh(this.es.next());return this.referenceDelegate.ji(),n(i).next((t=>this.referenceDelegate.Wi(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}zi(t,e){return Ku.or(Object.values(this.Gi).map((n=>()=>n.containsKey(t,e))))}}class Nh extends ju{constructor(t){super(),this.currentSequenceNumber=t}}class Dh{constructor(t){this.persistence=t,this.Hi=new bh,this.Ji=null}static Yi(t){return new Dh(t)}get Xi(){if(this.Ji)return this.Ji;throw io()}addReference(t,e,n){return this.Hi.addReference(n,e),this.Xi.delete(n.toString()),Ku.resolve()}removeReference(t,e,n){return this.Hi.removeReference(n,e),this.Xi.add(n.toString()),Ku.resolve()}markPotentiallyOrphaned(t,e){return this.Xi.add(e.toString()),Ku.resolve()}removeTarget(t,e){this.Hi.vi(e.targetId).forEach((t=>this.Xi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ji(){this.Ji=new Set}Wi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ku.forEach(this.Xi,(n=>{const i=Go.fromPath(n);return this.Zi(t,i).next((t=>{t||e.removeEntry(i,Io.min())}))})).next((()=>(this.Ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Zi(t,e).next((t=>{t?this.Xi.delete(e.toString()):this.Xi.add(e.toString())}))}Qi(t){return 0}Zi(t,e){return Ku.or([()=>Ku.resolve(this.Hi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.activeTargetIds=Yc()}nr(t){this.activeTargetIds=this.activeTargetIds.add(t)}sr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}er(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lh{constructor(){this.Ur=new kh,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.nr(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Ur.sr(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new kh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{Kr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Wr(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t){this.Jr=t.Jr,this.Yr=t.Yr}Xr(t){this.Zr=t}eo(t){this.no=t}onMessage(t){this.so=t}close(){this.Yr()}send(t){this.Jr(t)}io(){this.Zr()}ro(t){this.no(t)}oo(t){this.so(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.uo=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,i,s){const r=this.ho(t,e);Zr("RestConnection","Sending: ",r,n);const o={};return this.lo(o,i,s),this.fo(t,r,o,n).then((t=>(Zr("RestConnection","Received: ",t),t)),(e=>{throw eo("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,i,s){return this.co(t,e,n,i,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=xh[t];return`${this.uo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,i){return new Promise(((s,r)=>{const o=new zr;o.listenOnce(jr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case qr.NO_ERROR:const e=o.getResponseJson();Zr("Connection","XHR received:",JSON.stringify(e)),s(e);break;case qr.TIMEOUT:Zr("Connection",'RPC "'+t+'" timed out'),r(new ao(oo.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const n=o.getStatus();if(Zr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(oo).indexOf(e)>=0?e:oo.UNKNOWN}(t.status);r(new ao(e,t.message))}else r(new ao(oo.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ao(oo.UNAVAILABLE,"Connection failed."));break;default:io()}}finally{Zr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const i=[this.uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Ur(),r=Br(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Gr({})),this.lo(o.initMessageHeaders,e,n),h()||d()||f()||p()||g()||l()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Zr("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,m=!1;const y=new Oh({Jr:t=>{m?Zr("Connection","Not sending because WebChannel is closed:",t):(u||(Zr("Connection","Opening WebChannel transport."),c.open(),u=!0),Zr("Connection","WebChannel sending:",t),c.send(t))},Yr:()=>c.close()}),v=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return v(c,Hr.EventType.OPEN,(()=>{m||Zr("Connection","WebChannel transport opened.")})),v(c,Hr.EventType.CLOSE,(()=>{m||(m=!0,Zr("Connection","WebChannel transport closed"),y.ro())})),v(c,Hr.EventType.ERROR,(t=>{m||(m=!0,eo("Connection","WebChannel transport errored:",t),y.ro(new ao(oo.UNAVAILABLE,"The operation could not be completed")))})),v(c,Hr.EventType.MESSAGE,(t=>{var e;if(!m){const n=t.data[0];so(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){Zr("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Pc[t];if(void 0!==e)return Bc(e)}(t),n=s.message;void 0===e&&(e=oo.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),m=!0,y.ro(new ao(e,n)),c.close()}else Zr("Connection","WebChannel received:",n),y.oo(n)}})),v(r,Kr.STAT_EVENT,(t=>{t.stat===$r.PROXY?Zr("Connection","Detected buffering proxy"):t.stat===$r.NOPROXY&&Zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{y.io()}),0),y}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){return new uu(t,!0)}class Uh{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Yn=t,this.timerId=e,this.mo=n,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&Zr("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e,n,i,s,r,o,a){this.Yn=t,this.Vo=n,this.vo=i,this.So=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Uh(t,e)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===oo.RESOURCE_EXHAUSTED?(to(e.toString()),to("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===oo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.eo(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new ao(oo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return Zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Yn.enqueueAndForget((()=>this.Do===t?e():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qh extends Bh{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.M=s}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=Iu(this.M,t),n=function(t){if(!("targetChange"in t))return Io.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Io.min():e.readTime?fu(e.readTime):Io.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=Eu(this.M),e.addTarget=function(t,e){let n;const i=e.target;return n=Ca(i)?{documents:Cu(t,i)}:{query:_u(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=lu(t,e.resumeToken):e.snapshotVersion.compareTo(Io.min())>0&&(n.readTime=hu(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=Du(this.M,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=Eu(this.M),e.removeTarget=t,this.Lo(e)}}class jh extends Bh{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.M=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(so(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=Au(t.writeResults,t.commitTime),n=fu(t.commitTime);return this.listener.tu(n,e)}return so(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=Eu(this.M),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Su(this.M,t)))};this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.M=i,this.su=!1}iu(){if(this.su)throw new ao(oo.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.So.co(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ao(oo.UNKNOWN,t.toString())}))}_o(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.So._o(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ao(oo.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class $h{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(to(e),this.uu=!1):Zr("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.Kr((t=>{n.enqueueAndForget((async()=>{tl(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ro(t);e.wu.add(4),await zh(e),e.yu.set("Unknown"),e.wu.delete(4),await Hh(e)}(this))}))})),this.yu=new $h(n,i)}}async function Hh(t){if(tl(t))for(const e of t.mu)await e(!0)}async function zh(t){for(const e of t.mu)await e(!1)}function Wh(t,e){const n=ro(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Zh(n)?Jh(n):vl(n).Mo()&&Xh(n,e))}function Qh(t,e){const n=ro(t),i=vl(n);n._u.delete(e),i.Mo()&&Yh(n,e),0===n._u.size&&(i.Mo()?i.$o():tl(n)&&n.yu.set("Unknown"))}function Xh(t,e){t.pu.Z(e.targetId),vl(t).Ho(e)}function Yh(t,e){t.pu.Z(e),vl(t).Jo(e)}function Jh(t){t.pu=new su({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),vl(t).start(),t.yu.au()}function Zh(t){return tl(t)&&!vl(t).ko()&&t._u.size>0}function tl(t){return 0===ro(t).wu.size}function el(t){t.pu=void 0}async function nl(t){t._u.forEach(((e,n)=>{Xh(t,e)}))}async function il(t,e){el(t),Zh(t)?(t.yu.lu(e),Jh(t)):t.yu.set("Unknown")}async function sl(t,e,n){if(t.yu.set("Online"),e instanceof nu&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t._u.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t._u.delete(i),t.pu.removeTarget(i))}(t,e)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await rl(t,n)}else if(e instanceof tu?t.pu.ut(e):e instanceof eu?t.pu._t(e):t.pu.ht(e),!n.isEqual(Io.min()))try{const e=await lh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t._u.get(i);s&&t._u.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(Ro.EMPTY_BYTE_STRING,n.snapshotVersion)),Yh(t,e);const i=new Wu(n.target,e,1,n.sequenceNumber);Xh(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zr("RemoteStore","Failed to raise snapshot:",e),await rl(t,e)}}async function rl(t,e,n){if(!$u(e))throw e;t.wu.add(1),await zh(t),t.yu.set("Offline"),n||(n=()=>lh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Hh(t)}))}function ol(t,e){return e().catch((n=>rl(t,n,e)))}async function al(t){const e=ro(t),n=wl(e);let i=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;cl(e);)try{const t=await ph(e.localStore,i);if(null===t){0===e.du.length&&n.$o();break}i=t.batchId,ul(e,t)}catch(t){await rl(e,t)}hl(e)&&ll(e)}function cl(t){return tl(t)&&t.du.length<10}function ul(t,e){t.du.push(e);const n=wl(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function hl(t){return tl(t)&&!wl(t).ko()&&t.du.length>0}function ll(t){wl(t).start()}async function dl(t){wl(t).nu()}async function fl(t){const e=wl(t);for(const n of t.du)e.Zo(n.mutations)}async function pl(t,e,n){const i=t.du.shift(),s=Hu.from(i,e,n);await ol(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await al(t)}async function gl(t,e){e&&wl(t).Xo&&await async function(t,e){if(n=e.code,Uc(n)&&n!==oo.ABORTED){const n=t.du.shift();wl(t).Fo(),await ol(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await al(t)}var n}(t,e),hl(t)&&ll(t)}async function ml(t,e){const n=ro(t);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const i=tl(n);n.wu.add(3),await zh(n),i&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Hh(n)}async function yl(t,e){const n=ro(t);e?(n.wu.delete(2),await Hh(n)):e||(n.wu.add(2),await zh(n),n.yu.set("Unknown"))}function vl(t){return t.Iu||(t.Iu=function(t,e,n){const i=ro(t);return i.iu(),new qh(e,i.So,i.authCredentials,i.appCheckCredentials,i.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Xr:nl.bind(null,t),eo:il.bind(null,t),zo:sl.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),Zh(t)?Jh(t):t.yu.set("Unknown")):(await t.Iu.stop(),el(t))}))),t.Iu}function wl(t){return t.Tu||(t.Tu=function(t,e,n){const i=ro(t);return i.iu(),new jh(e,i.So,i.authCredentials,i.appCheckCredentials,i.M,n)}(t.datastore,t.asyncQueue,{Xr:dl.bind(null,t),eo:gl.bind(null,t),eu:fl.bind(null,t),tu:pl.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await al(t)):(await t.Tu.stop(),t.du.length>0&&(Zr("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class El{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new co,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new El(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ao(oo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bl(t,e){if(to("AsyncQueue",`${e}: ${t}`),$u(t))return new ao(oo.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Go.comparator(e.key,n.key):(t,e)=>Go.comparator(t.key,e.key),this.keyedMap=Gc(),this.sortedSet=new ma(this.comparator)}static emptySet(t){return new Tl(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Tl))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Tl;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.Eu=new ma(Go.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):io():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Sl{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Sl(t,e,Tl.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ya(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.Ru=void 0,this.listeners=[]}}class Cl{constructor(){this.queries=new qc((t=>Ja(t)),Ya),this.onlineState="Unknown",this.bu=new Set}}async function _l(t,e){const n=ro(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Al),s)try{r.Ru=await n.onListen(i)}catch(t){const n=bl(t,`Initialization of query '${Za(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.Vu(r.Ru)&&Ll(n)}async function Nl(t,e){const n=ro(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Dl(t,e){const n=ro(t);let i=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Vu(s)&&(i=!0);e.Ru=s}}i&&Ll(n)}function kl(t,e,n){const i=ro(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Ll(t){t.bu.forEach((t=>{t.next()}))}class Rl{constructor(t,e,n){this.query=t,this.vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Sl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Su?this.Cu(t)&&(this.vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=Sl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Su=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(t){this.key=t}}class xl{constructor(t){this.key=t}}class Ol{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.current=!1,this.Ku=Qc(),this.mutatedKeys=Qc(),this.Gu=nc(t),this.Qu=new Tl(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Il,i=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const u=i.get(t),h=tc(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,ii:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Au();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return io()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new Sl(this.query,t.Qu,i,s,t.mutatedKeys,0===o,a,!1),Xu:r}:{Xu:r}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Il,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Qc(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new xl(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Ml(n))})),e}ta(t){this.Uu=t._i,this.Ku=Qc();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ea(){return Sl.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class Vl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Pl{constructor(t){this.key=t,this.na=!1}}class Fl{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.sa={},this.ia=new qc((t=>Ja(t)),Ya),this.ra=new Map,this.oa=new Set,this.ua=new ma(Go.comparator),this.aa=new Map,this.ca=new bh,this.ha={},this.la=new Map,this.fa=eh.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function Ul(t,e){const n=sd(t);let i,s;const r=n.ia.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.ea();else{const t=await gh(n.localStore,Qa(e));n.isPrimaryClient&&Wh(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await Bl(n,e,i,"current"===r)}return s}async function Bl(t,e,n,i){t._a=(e,n,i)=>async function(t,e,n,i){let s=e.view.Wu(n);s.ii&&(s=await yh(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return Jl(t,e.targetId,o.Xu),o.snapshot}(t,e,n,i);const s=await yh(t.localStore,e,!0),r=new Ol(e,s._i),o=r.Wu(s.documents),a=Zc.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);Jl(t,n,c.Xu);const u=new Vl(e,n,r);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function ql(t,e){const n=ro(t),i=n.ia.get(e),s=n.ra.get(i.targetId);if(s.length>1)return n.ra.set(i.targetId,s.filter((t=>!Ya(t,e)))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await mh(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Qh(n.remoteStore,i.targetId),Xl(n,i.targetId)})).catch(nh)):(Xl(n,i.targetId),await mh(n.localStore,i.targetId,!0))}async function jl(t,e,n){const i=rd(t);try{const t=await function(t,e){const n=ro(t),i=To.now(),s=e.reduce(((t,e)=>t.add(e.key)),Qc());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.fi.Ks(t,s).next((s=>{r=s;const o=[];for(const t of e){const e=Cc(t,r.get(t.key));null!=e&&o.push(new kc(t.key,e,ua(e.value.mapValue),bc.exists(!0)))}return n.Bs.addMutationBatch(t,i,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.ha[t.currentUser.toKey()];i||(i=new ma(Eo)),i=i.insert(e,n),t.ha[t.currentUser.toKey()]=i}(i,t.batchId,n),await ed(i,t.changes),await al(i.remoteStore)}catch(t){const e=bl(t,"Failed to persist write");n.reject(e)}}async function Kl(t,e){const n=ro(t);try{const t=await dh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.aa.get(e);i&&(so(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.na=!0:t.modifiedDocuments.size>0?so(i.na):t.removedDocuments.size>0&&(so(i.na),i.na=!1))})),await ed(n,t,e)}catch(t){await nh(t)}}function $l(t,e,n){const i=ro(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ia.forEach(((n,i)=>{const s=i.view.Pu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=ro(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Pu(e)&&(i=!0)})),i&&Ll(n)}(i.eventManager,e),t.length&&i.sa.zo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Gl(t,e,n){const i=ro(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.aa.get(e),r=s&&s.key;if(r){let t=new ma(Go.comparator);t=t.insert(r,ha.newNoDocument(r,Io.min()));const n=Qc().add(r),s=new Jc(Io.min(),new Map,new wa(Eo),t,n);await Kl(i,s),i.ua=i.ua.remove(r),i.aa.delete(e),td(i)}else await mh(i.localStore,e,!1).then((()=>Xl(i,e,n))).catch(nh)}async function Hl(t,e){const n=ro(t),i=e.batch.batchId;try{const t=await hh(n.localStore,e);Ql(n,i,null),Wl(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ed(n,t)}catch(t){await nh(t)}}async function zl(t,e,n){const i=ro(t);try{const t=await function(t,e){const n=ro(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.Bs.lookupMutationBatch(t,e).next((e=>(so(null!==e),i=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,i)))}))}(i.localStore,e);Ql(i,e,n),Wl(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ed(i,t)}catch(n){await nh(n)}}function Wl(t,e){(t.la.get(e)||[]).forEach((t=>{t.resolve()})),t.la.delete(e)}function Ql(t,e,n){const i=ro(t);let s=i.ha[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.ha[i.currentUser.toKey()]=s}}function Xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ra.get(e))t.ia.delete(i),n&&t.sa.wa(i,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach((e=>{t.ca.containsKey(e)||Yl(t,e)}))}function Yl(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);null!==n&&(Qh(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),td(t))}function Jl(t,e,n){for(const i of n)i instanceof Ml?(t.ca.addReference(i.key,e),Zl(t,i)):i instanceof xl?(Zr("SyncEngine","Document no longer in limbo: "+i.key),t.ca.removeReference(i.key,e),t.ca.containsKey(i.key)||Yl(t,i.key)):io()}function Zl(t,e){const n=e.key,i=n.path.canonicalString();t.ua.get(n)||t.oa.has(i)||(Zr("SyncEngine","New document in limbo: "+n),t.oa.add(i),td(t))}function td(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new Go(No.fromString(e)),i=t.fa.next();t.aa.set(i,new Pl(n)),t.ua=t.ua.insert(n,i),Wh(t.remoteStore,new Wu(Qa(Ka(n.path)),i,2,yo.A))}}async function ed(t,e,n){const i=ro(t),s=[],r=[],o=[];i.ia.isEmpty()||(i.ia.forEach(((t,a)=>{o.push(i._a(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=rh.Ys(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.sa.zo(s),await async function(t,e){const n=ro(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ku.forEach(e,(e=>Ku.forEach(e.Hs,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Ku.forEach(e.Js,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!$u(t))throw t;Zr("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.ui.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.ui=n.ui.insert(t,s)}}}(i.localStore,r))}async function nd(t,e){const n=ro(t);if(!n.currentUser.isEqual(e)){Zr("SyncEngine","User change. New user:",e.toKey());const t=await uh(n.localStore,e);n.currentUser=e,function(t,e){t.la.forEach((t=>{t.forEach((t=>{t.reject(new ao(oo.CANCELLED,e))}))})),t.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ed(n,t.di)}}function id(t,e){const n=ro(t),i=n.aa.get(e);if(i&&i.na)return Qc().add(i.key);{let t=Qc();const i=n.ra.get(e);if(!i)return t;for(const e of i){const i=n.ia.get(e);t=t.unionWith(i.view.ju)}return t}}function sd(t){const e=ro(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=id.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gl.bind(null,e),e.sa.zo=Dl.bind(null,e.eventManager),e.sa.wa=kl.bind(null,e.eventManager),e}function rd(t){const e=ro(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zl.bind(null,e),e}class od{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Fh(t.databaseInfo.databaseId),this.sharedClientState=this.ga(t),this.persistence=this.ya(t),await this.persistence.start(),this.gcScheduler=this.pa(t),this.localStore=this.Ia(t)}pa(t){return null}Ia(t){return ch(this.persistence,new oh,t.initialUser,this.M)}ya(t){return new _h(Dh.Yi,this.M)}ga(t){return new Lh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ad{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>$l(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=nd.bind(null,this.syncEngine),await yl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Cl}createDatastore(t){const e=Fh(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Vh(i));var i;return function(t,e,n,i){return new Kh(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>$l(this.syncEngine,t,0),r=Mh.vt()?new Mh:new Rh,new Gh(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new Fl(t,e,n,i,s,r);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ro(t);Zr("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await zh(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ea(this.observer.next,t)}error(t){this.observer.error?this.Ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Aa(){this.muted=!0}Ea(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ud{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Qr.UNAUTHENTICATED,this.clientId=wo.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ao(oo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new co;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=bl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function hd(t,e){t.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await uh(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ld(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dd(t);Zr("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>ml(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ml(e.remoteStore,n))),t.onlineComponents=e}async function dd(t){return t.offlineComponents||(Zr("FirestoreClient","Using default OfflineComponentProvider"),await hd(t,new od)),t.offlineComponents}async function fd(t){return t.onlineComponents||(Zr("FirestoreClient","Using default OnlineComponentProvider"),await ld(t,new ad)),t.onlineComponents}function pd(t){return fd(t).then((t=>t.syncEngine))}async function gd(t){const e=await fd(t),n=e.eventManager;return n.onListen=Ul.bind(null,e.syncEngine),n.onUnlisten=ql.bind(null,e.syncEngine),n}function md(t,e,n={}){const i=new co;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new cd({next:r=>{e.enqueueAndForget((()=>Nl(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new ao(oo.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new ao(oo.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new Rl(Ka(n.path),r,{includeMetadataChanges:!0,ku:!0});return _l(t,o)}(await gd(t),t.asyncQueue,e,n,i))),i.promise}function yd(t,e,n={}){const i=new co;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new cd({next:n=>{e.enqueueAndForget((()=>Nl(t,o))),n.fromCache&&"server"===i.source?s.reject(new ao(oo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Rl(n,r,{includeMetadataChanges:!0,ku:!0});return _l(t,o)}(await gd(t),t.asyncQueue,e,n,i))),i.promise}const vd=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t,e,n){if(!n)throw new ao(oo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ed(t,e,n,i){if(!0===e&&!0===i)throw new ao(oo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bd(t){if(!Go.isDocumentKey(t))throw new ao(oo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Td(t){if(Go.isDocumentKey(t))throw new ao(oo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Id(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":io()}function Sd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ao(oo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Id(t);throw new ao(oo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ad{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ao(oo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ao(oo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ed("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ad({}),this._settingsFrozen=!1,t instanceof qo?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ao(oo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(t.options.projectId)}(t))}get app(){if(!this._app)throw new ao(oo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ao(oo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ad(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ho;switch(t.type){case"gapi":const e=t.client;return so(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new po(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ao(oo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=vd.get(t);e&&(Zr("ComponentProvider","Removing Datastore"),vd.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _d{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dd(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _d(this.firestore,t,this._key)}}class Nd{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Nd(this.firestore,t,this._query)}}class Dd extends Nd{constructor(t,e,n){super(t,e,Ka(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _d(this.firestore,null,new Go(t))}withConverter(t){return new Dd(this.firestore,t,this._path)}}function kd(t,e,...n){if(t=A(t),wd("collection","path",e),t instanceof Cd){const i=No.fromString(e,...n);return Td(i),new Dd(t,null,i)}{if(!(t instanceof _d||t instanceof Dd))throw new ao(oo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(No.fromString(e,...n));return Td(i),new Dd(t.firestore,null,i)}}function Ld(t,e,...n){if(t=A(t),1===arguments.length&&(e=wo.R()),wd("doc","path",e),t instanceof Cd){const i=No.fromString(e,...n);return bd(i),new _d(t,null,new Go(i))}{if(!(t instanceof _d||t instanceof Dd))throw new ao(oo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(No.fromString(e,...n));return bd(i),new _d(t.firestore,t instanceof Dd?t.converter:null,new Go(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rd{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Uh(this,"async_queue_retry"),this.Qa=()=>{const t=Ph();t&&Zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Ph();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ja(),this.Wa(t)}enterRestrictedMode(t){if(!this.Ba){this.Ba=!0,this.Ka=t||!1;const e=Ph();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Qa)}}enqueue(t){if(this.ja(),this.Ba)return new Promise((()=>{}));const e=new co;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.$a.push(t),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(Le){if(!$u(Le))throw Le;Zr("AsyncQueue","Operation failed with retryable error: "+Le)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(t){const e=this.Fa.then((()=>(this.qa=!0,t().catch((t=>{this.Ua=t,this.qa=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw to("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.qa=!1,t))))));return this.Fa=e,e}enqueueAfterDelay(t,e,n){this.ja(),this.Ga.indexOf(t)>-1&&(e=0);const i=El.createAndSchedule(this,t,e,n,(t=>this.Ha(t)));return this.La.push(i),i}ja(){this.Ua&&io()}verifyOperationInProgress(){}async Ja(){let t;do{t=this.Fa,await t}while(t!==this.Fa)}Ya(t){for(const e of this.La)if(e.timerId===t)return!0;return!1}Xa(t){return this.Ja().then((()=>{this.La.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.La)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Ja()}))}Za(t){this.Ga.push(t)}Ha(t){const e=this.La.indexOf(t);this.La.splice(e,1)}}function Md(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class xd extends Cd{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Rd,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Pd(this),this._firestoreClient.terminate()}}function Od(t=Xt()){return $t(t,"firestore").getImmediate()}function Vd(t){return t._firestoreClient||Pd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pd(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Bo(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ud(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fd{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ao(oo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ko(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ud(Ro.fromBase64String(t))}catch(t){throw new ao(oo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ud(Ro.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ao(oo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ao(oo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Eo(this._lat,t._lat)||Eo(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=/^__.*__$/;class Kd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new kc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Dc(t,this.data,e,this.fieldTransforms)}}class $d{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new kc(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Gd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw io()}}class Hd{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=i,void 0===s&&this.tc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(t){return new Hd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.nc({path:n,ic:!1});return i.rc(t),i}oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.nc({path:n,ic:!1});return i.tc(),i}uc(t){return this.nc({path:void 0,ic:!0})}ac(t){return cf(t,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}tc(){if(this.path)for(let t=0;t<this.path.length;t++)this.rc(this.path.get(t))}rc(t){if(0===t.length)throw this.ac("Document fields must not be empty");if(Gd(this.ec)&&jd.test(t))throw this.ac('Document fields cannot begin and end with "__"')}}class zd{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Fh(t)}lc(t,e,n,i=!1){return new Hd({ec:t,methodName:e,hc:n,path:ko.emptyPath(),ic:!1,cc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Wd(t){const e=t._freezeSettings(),n=Fh(t._databaseId);return new zd(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qd(t,e,n,i,s,r={}){const o=t.lc(r.merge||r.mergeFields?2:0,e,n,s);sf("Data must be an object, but it was:",o,i);const a=ef(i,o);let c,u;if(r.merge)c=new Lo(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=rf(e,i,n);if(!o.contains(s))throw new ao(oo.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);uf(t,s)||t.push(s)}c=new Lo(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Kd(new ca(a),c,u)}class Xd extends Bd{_toFieldTransform(t){if(2!==t.ec)throw 1===t.ec?t.ac(`${this._methodName}() can only appear at the top level of your update data`):t.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Xd}}function Yd(t,e,n,i){const s=t.lc(1,e,n);sf("Data must be an object, but it was:",s,i);const r=[],o=ca.empty();Ao(i,((t,i)=>{const a=af(e,t,n);i=A(i);const c=s.oc(a);if(i instanceof Xd)r.push(a);else{const t=tf(i,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new Lo(r);return new $d(o,a,s.fieldTransforms)}function Jd(t,e,n,i,s,r){const o=t.lc(1,e,n),a=[rf(e,i,n)],c=[s];if(r.length%2!=0)throw new ao(oo.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(rf(e,r[d])),c.push(r[d+1]);const u=[],h=ca.empty();for(let d=a.length-1;d>=0;--d)if(!uf(u,a[d])){const t=a[d];let e=c[d];e=A(e);const n=o.oc(t);if(e instanceof Xd)u.push(t);else{const i=tf(e,n);null!=i&&(u.push(t),h.set(t,i))}}const l=new Lo(u);return new $d(h,l,o.fieldTransforms)}function Zd(t,e,n,i=!1){return tf(n,t.lc(i?4:3,e))}function tf(t,e){if(nf(t=A(t)))return sf("Unsupported field value:",e,t),ef(t,e);if(t instanceof Bd)return function(t,e){if(!Gd(e.ec))throw e.ac(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ac(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&4!==e.ec)throw e.ac("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=tf(s,e.uc(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=A(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return oc(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=To.fromDate(t);return{timestampValue:hu(e.M,n)}}if(t instanceof To){const n=new To(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:hu(e.M,n)}}if(t instanceof qd)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ud)return{bytesValue:lu(e.M,t._byteString)};if(t instanceof _d){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:pu(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ac(`Unsupported field value: ${Id(t)}`)}(t,e)}function ef(t,e){const n={};return Co(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ao(t,((t,i)=>{const s=tf(i,e.sc(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function nf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof To||t instanceof qd||t instanceof Ud||t instanceof _d||t instanceof Bd)}function sf(t,e,n){if(!nf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Id(n);throw"an object"===i?e.ac(t+" a custom object"):e.ac(t+" "+i)}}function rf(t,e,n){if((e=A(e))instanceof Fd)return e._internalPath;if("string"==typeof e)return af(t,e);throw cf("Field path arguments must be of type string or ",t,!1,void 0,n)}const of=new RegExp("[~\\*/\\[\\]]");function af(t,e,n){if(e.search(of)>=0)throw cf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fd(...e.split("."))._internalPath}catch(i){throw cf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cf(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new ao(oo.INVALID_ARGUMENT,a+t+c)}function uf(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _d(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new lf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(df("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class lf extends hf{data(){return super.data()}}function df(t,e){return"string"==typeof e?af(t,e):e instanceof Fd?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pf extends hf{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(df("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class gf extends pf{data(t={}){return super.data(t)}}class mf{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ff(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new gf(this._firestore,this._userDataWriter,n.key,n,new ff(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ao(oo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new gf(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ff(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new gf(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ff(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:yf(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return io()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vf(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ao(oo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wf{}function Ef(t,...e){for(const n of e)t=n._apply(t);return t}class bf extends wf{constructor(t,e,n){super(),this._c=t,this.wc=e,this.mc=n,this.type="where"}_apply(t){const e=Wd(t.firestore),n=function(t,e,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new ao(oo.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Cf(o,r);const e=[];for(const n of o)e.push(Af(i,t,n));a={arrayValue:{values:e}}}else a=Af(i,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Cf(o,r),a=Zd(n,e,o,"in"===r||"not-in"===r);const c=_a.create(s,r,a);return function(t,e){if(e.S()){const n=Ha(t);if(null!==n&&!n.isEqual(e.field))throw new ao(oo.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=Ga(t);null!==i&&_f(t,e.field,i)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ao(oo.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ao(oo.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this._c,this.wc,this.mc);return new Nd(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new qa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Tf(t,e,n){const i=e,s=df("where",t);return new bf(s,i,n)}class If extends wf{constructor(t,e){super(),this._c=t,this.gc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ao(oo.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ao(oo.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Pa(e,n);return function(t,e){if(null===Ga(t)){const n=Ha(t);null!==n&&_f(t,n,e.field)}}(t,i),i}(t._query,this._c,this.gc);return new Nd(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new qa(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Sf(t,e="asc"){const n=e,i=df("orderBy",t);return new If(i,n)}function Af(t,e,n){if("string"==typeof(n=A(n))){if(""===n)throw new ao(oo.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!za(e)&&-1!==n.indexOf("/"))throw new ao(oo.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(No.fromString(n));if(!Go.isDocumentKey(i))throw new ao(oo.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ta(t,new Go(i))}if(n instanceof _d)return ta(t,n._key);throw new ao(oo.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Id(n)}.`)}function Cf(t,e){if(!Array.isArray(t)||0===t.length)throw new ao(oo.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new ao(oo.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function _f(t,e,n){if(!n.isEqual(e))throw new ao(oo.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nf{convertValue(t,e="none"){switch(zo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Oo(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Vo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw io()}}convertObject(t,e){const n={};return Ao(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new qd(Oo(t.latitude),Oo(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Fo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Uo(t));default:return null}}convertTimestamp(t){const e=xo(t);return new To(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=No.fromString(t);so(Fu(n));const i=new qo(n.get(1),n.get(3)),s=new Go(n.popFirst(5));return i.isEqual(e)||to(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kf(t){t=Sd(t,_d);const e=Sd(t.firestore,xd);return md(Vd(e),t._key).then((n=>Ff(e,t,n)))}class Lf extends Nf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ud(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _d(this.firestore,null,e)}}function Rf(t){t=Sd(t,Nd);const e=Sd(t.firestore,xd),n=Vd(e),i=new Lf(e);return vf(t._query),yd(n,t._query).then((n=>new mf(e,i,t,n)))}function Mf(t,e,n){t=Sd(t,_d);const i=Sd(t.firestore,xd),s=Df(t.converter,e,n);return Pf(i,[Qd(Wd(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,bc.none())])}function xf(t,e,n,...i){t=Sd(t,_d);const s=Sd(t.firestore,xd),r=Wd(s);let o;return o="string"==typeof(e=A(e))||e instanceof Fd?Jd(r,"updateDoc",t._key,e,n,i):Yd(r,"updateDoc",t._key,e),Pf(s,[o.toMutation(t._key,bc.exists(!0))])}function Of(t,e){const n=Sd(t.firestore,xd),i=Ld(t),s=Df(t.converter,e);return Pf(n,[Qd(Wd(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,bc.exists(!1))]).then((()=>i))}function Vf(t,...e){var n,i,s;t=A(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Md(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Md(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,u,h;if(t instanceof _d)u=Sd(t.firestore,xd),h=Ka(t._key.path),c={next:n=>{e[o]&&e[o](Ff(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Sd(t,Nd);u=Sd(n.firestore,xd),h=n._query;const i=new Lf(u);c={next:t=>{e[o]&&e[o](new mf(u,i,n,t))},error:e[o+1],complete:e[o+2]},vf(t._query)}return function(t,e,n,i){const s=new cd(i),r=new Rl(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>_l(await gd(t),r))),()=>{s.Aa(),t.asyncQueue.enqueueAndForget((async()=>Nl(await gd(t),r)))}}(Vd(u),h,a,c)}function Pf(t,e){return function(t,e){const n=new co;return t.asyncQueue.enqueueAndForget((async()=>jl(await pd(t),e,n))),n.promise}(Vd(t),e)}function Ff(t,e,n){const i=n.docs.get(e._key),s=new Lf(t);return new pf(t,s,e._key,i,new ff(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uf(){return new Xd("deleteField")}!function(t,e=!0){!function(t){Xr=t}(Wt),Kt(new C("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new xd(i,new lo(t.getProvider("auth-internal")),new mo(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),Yt(Wr,"3.4.9",t),Yt(Wr,"3.4.9","esm2017")}();const Bf={apiKey:"AIzaSyAJ69B_OennPXVzYFZRJEu4WAwTxhDIqkI",authDomain:"quiz-jp-b1688.firebaseapp.com",projectId:"quiz-jp-b1688",storageBucket:"quiz-jp-b1688.appspot.com",messagingSenderId:"712329106003",appId:"1:712329106003:web:35965df8bbc62cd93feca6",measurementId:"G-PHC1QLYSDK"};Qt(Bf);const qf=Od();var jf=qf;class Kf{async getAll(t,e){const n=kd(jf,t),i=Ef(n,Tf("del_flag","==",!1),Tf("type","==",e),Sf("created_at","desc")),s=await Rf(i);return s.docs.map((t=>({id:t.id,...t.data()})))}async get(t,e){const n=await kf(Ld(jf,t,e));let i={};return n.exists()&&(i={id:n.id,...n.data()}),i}async create(t,e){const n=kd(jf,t),i=await Of(n,e);return i.id}async set(t,e,n){return await Mf(Ld(jf,t,e),n)}async setMerge(t,e,n){const i=Ld(jf,t,e);return await Mf(i,n,{merge:!0})}async update(t,e,n){return await xf(Ld(jf,t,e),n)}async delete(t,e){await deleteDoc(Ld(jf,t,e))}async deleteField(t,e,n){const i={};return n.forEach((t=>{i[t]=Uf()})),await xf(Ld(jf,t,e),i)}async getQuizWithFileName(t,e){const n=kd(jf,t),i=Ef(n,Tf("del_flag","==",!1),Tf("title","==",e),Sf("created_at","desc")),s=await Rf(i);return s.docs.map((t=>({id:t.id,...t.data()})))}snapshotDocument(t,e,n){Vf(Ld(jf,t,e),(t=>{const e={id:t.id,...t.data()};n(e)}))}}var $f=new Kf}}]);
//# sourceMappingURL=616.0d29d43b.js.map