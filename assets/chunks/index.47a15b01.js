import{ab as K,ac as B,L as U,e as T,ad as X,b as q,$ as G,a as Q,F as $,E as z,_ as Y,w as Z}from"./index.09395614.js";import{d as H,g as ee,o as k,c as te,k as S,r as M,n as p,l as f,b as E,w as I,J as P,a2 as R,e as L,R as O,T as ne}from"./framework.83a19234.js";import{b as oe}from"./use-form-item.e0abc1ce.js";var se=/\s/;function re(e){for(var n=e.length;n--&&se.test(e.charAt(n)););return n}var ie=/^\s+/;function ae(e){return e&&e.slice(0,re(e)+1).replace(ie,"")}var A=0/0,le=/^[-+]0x[0-9a-f]+$/i,ce=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,ue=parseInt;function F(e){if(typeof e=="number")return e;if(K(e))return A;if(B(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=B(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ae(e);var t=ce.test(e);return t||fe.test(e)?ue(e.slice(2),t?2:8):le.test(e)?A:+e}var de=function(){return U.Date.now()};const _=de;var me="Expected a function",pe=Math.max,ge=Math.min;function Ee(e,n,t){var r,o,l,c,a,s,u=0,v=!1,m=!1,g=!0;if(typeof e!="function")throw new TypeError(me);n=F(n)||0,B(t)&&(v=!!t.leading,m="maxWait"in t,l=m?pe(F(t.maxWait)||0,n):l,g="trailing"in t?!!t.trailing:g);function w(i){var d=r,h=o;return r=o=void 0,u=i,c=e.apply(h,d),c}function V(i){return u=i,a=setTimeout(y,n),v?w(i):c}function j(i){var d=i-s,h=i-u,W=n-d;return m?ge(W,l-h):W}function x(i){var d=i-s,h=i-u;return s===void 0||d>=n||d<0||m&&h>=l}function y(){var i=_();if(x(i))return N(i);a=setTimeout(y,j(i))}function N(i){return a=void 0,g&&r?w(i):(r=o=void 0,c)}function D(){a!==void 0&&clearTimeout(a),u=0,r=s=o=a=void 0}function J(){return a===void 0?c:N(_())}function C(){var i=_(),d=x(i);if(r=arguments,o=this,s=i,d){if(a===void 0)return V(s);if(m)return clearTimeout(a),a=setTimeout(y,n),w(s)}return a===void 0&&(a=setTimeout(y,n)),c}return C.cancel=D,C.flush=J,C}const he=(e,n)=>{if(!T)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],r=X(e,t);return["scroll","auto","overlay"].some(o=>r.includes(o))},Ie=(e,n)=>{if(!T)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(he(t,n))return t;t=t.parentNode}return t};let b;const _e=e=>{var n;if(!T)return 0;if(b!==void 0)return b;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const r=t.offsetWidth;t.style.overflow="scroll";const o=document.createElement("div");o.style.width="100%",t.appendChild(o);const l=o.offsetWidth;return(n=t.parentNode)==null||n.removeChild(t),b=r-l,b};function Be(e,n){if(!T)return;if(!n){e.scrollTop=0;return}const t=[];let r=n.offsetParent;for(;r!==null&&e!==r&&e.contains(r);)t.push(r),r=r.offsetParent;const o=n.offsetTop+t.reduce((s,u)=>s+u.offsetTop,0),l=o+n.offsetHeight,c=e.scrollTop,a=c+e.clientHeight;o<c?e.scrollTop=o:l>a&&(e.scrollTop=l-e.clientHeight)}const ve=q({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:G,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),ye={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},ke=H({name:"ElTag"}),be=H({...ke,props:ve,emits:ye,setup(e,{emit:n}){const t=e,r=oe(),o=Q("tag"),l=ee(()=>{const{type:s,hit:u,effect:v,closable:m,round:g}=t;return[o.b(),o.is("closable",m),o.m(s),o.m(r.value),o.m(v),o.is("hit",u),o.is("round",g)]}),c=s=>{n("close",s)},a=s=>{n("click",s)};return(s,u)=>s.disableTransitions?(k(),te("span",{key:0,class:p(f(l)),style:O({backgroundColor:s.color}),onClick:a},[S("span",{class:p(f(o).e("content"))},[M(s.$slots,"default")],2),s.closable?(k(),E(f(z),{key:0,class:p(f(o).e("close")),onClick:R(c,["stop"])},{default:I(()=>[P(f($))]),_:1},8,["class","onClick"])):L("v-if",!0)],6)):(k(),E(ne,{key:1,name:`${f(o).namespace.value}-zoom-in-center`,appear:""},{default:I(()=>[S("span",{class:p(f(l)),style:O({backgroundColor:s.color}),onClick:a},[S("span",{class:p(f(o).e("content"))},[M(s.$slots,"default")],2),s.closable?(k(),E(f(z),{key:0,class:p(f(o).e("close")),onClick:R(c,["stop"])},{default:I(()=>[P(f($))]),_:1},8,["class","onClick"])):L("v-if",!0)],6)]),_:3},8,["name"]))}});var Te=Y(be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const xe=Z(Te);export{xe as E,Ie as a,Ee as d,_e as g,Be as s,ve as t};
