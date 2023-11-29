import{a8 as p,F as D,ab as c,au as I,ae as B,ad as M,d as w,g as v,al as $,r as Y,h as O,A as G,a7 as V,J as T,a as H}from"./framework.83a19234.js";import{b as x,a as z,i as A,d,$ as j,w as h}from"./index.09395614.js";var f=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(f||{});function L(e){return p(e)&&e.type===D}function K(e){return p(e)&&e.type===I}function U(e){return p(e)&&!L(e)&&!K(e)}const q=e=>{if(!p(e))return{};const a=e.props||{},s=(p(e.type)?e.type.props:void 0)||{},t={};return Object.keys(s).forEach(r=>{B(s[r],"default")&&(t[r]=s[r].default)}),Object.keys(a).forEach(r=>{t[M(r)]=a[r]}),t},Q=e=>{if(!c(e)||e.length>1)throw new Error("expect to receive a single Vue element child");return e[0]},N=e=>{const a=c(e)?e:[e],s=[];return a.forEach(t=>{var r;c(t)?s.push(...N(t)):p(t)&&c(t.children)?s.push(...N(t.children)):(s.push(t),p(t)&&((r=t.component)!=null&&r.subTree)&&s.push(...N(t.component.subTree)))}),s},g=x({prefixCls:{type:String}}),R=w({name:"ElSpaceItem",props:g,setup(e,{slots:a}){const s=z("space"),t=v(()=>`${e.prefixCls||s.b()}__item`);return()=>$("div",{class:t.value},Y(a,"default"))}}),b={small:8,default:12,large:16};function X(e){const a=z("space"),s=v(()=>[a.b(),a.m(e.direction),e.class]),t=O(0),r=O(0),m=v(()=>{const n=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${r.value}px`}:{},l={alignItems:e.alignment};return[n,l,e.style]}),E=v(()=>{const n={paddingBottom:`${r.value}px`,marginRight:`${t.value}px`},l=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[n,l]});return G(()=>{const{size:n="small",wrap:l,direction:u,fill:i}=e;if(c(n)){const[o=0,S=0]=n;t.value=o,r.value=S}else{let o;A(n)?o=n:o=b[n||"small"]||b.small,(l||i)&&u==="horizontal"?t.value=r.value=o:u==="horizontal"?(t.value=o,r.value=0):(r.value=o,t.value=0)}}),{classes:s,containerStyle:m,itemStyle:E}}const k=x({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:d([String,Object,Array]),default:""},style:{type:d([String,Array,Object]),default:""},alignment:{type:d(String),default:"center"},prefixCls:{type:String},spacer:{type:d([Object,String,Number,Array]),default:null,validator:e=>p(e)||A(e)||V(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:j,validator:e=>A(e)||c(e)&&e.length===2&&e.every(A)}}),W=w({name:"ElSpace",props:k,setup(e,{slots:a}){const{classes:s,containerStyle:t,itemStyle:r}=X(e);function m(E,n="",l=[]){const{prefixCls:u}=e;return E.forEach((i,o)=>{L(i)?c(i.children)&&i.children.forEach((S,y)=>{L(S)&&c(S.children)?m(S.children,`${n+y}-`,l):l.push(T(R,{style:r.value,prefixCls:u,key:`nested-${n+y}`},{default:()=>[S]},f.PROPS|f.STYLE,["style","prefixCls"]))}):U(i)&&l.push(T(R,{style:r.value,prefixCls:u,key:`LoopKey${n+o}`},{default:()=>[i]},f.PROPS|f.STYLE,["style","prefixCls"]))}),l}return()=>{var E;const{spacer:n,direction:l}=e,u=Y(a,"default",{key:0},()=>[]);if(((E=u.children)!=null?E:[]).length===0)return null;if(c(u.children)){let i=m(u.children);if(n){const o=i.length-1;i=i.reduce((S,y,_)=>{const C=[...S,y];return _!==o&&C.push(T("span",{style:[r.value,l==="vertical"?"width: 100%":null],key:_},[p(n)?n:H(n,f.TEXT)],f.STYLE)),C},[])}return T("div",{class:s.value,style:t.value},i,f.STYLE|f.CLASS)}return u.children}}}),P=h(W);export{P as E,f as P,Q as e,N as f,q as g};
