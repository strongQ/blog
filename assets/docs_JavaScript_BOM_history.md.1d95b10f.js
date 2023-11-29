import{_ as s,o as a,c as o,U as n}from"./chunks/framework.83a19234.js";const F=JSON.parse('{"title":"JavaScript history 历史记录","description":"","frontmatter":{},"headers":[],"relativePath":"docs/JavaScript/BOM/history.md","filePath":"docs/JavaScript/BOM/history.md","lastUpdated":1701226428000}'),l={name:"docs/JavaScript/BOM/history.md"},p=n(`<h1 id="javascript-history-历史记录" tabindex="-1">JavaScript history 历史记录 <a class="header-anchor" href="#javascript-history-历史记录" aria-label="Permalink to &quot;JavaScript history 历史记录&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 后退一页</span></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 刷新当前页面</span></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 前进两页</span></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">go</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrox.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 跳转到最近 wrox.com 的页面</span></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">back</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 后退一页</span></span>
<span class="line"><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forward</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 前进一页</span></span>
<span class="line"><span style="color:#A6ACCD;">(history</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 这是用户打开宽口后的第一个页面</span></span></code></pre></div>`,2),t=[p];function e(c,r,y,i,D,A){return a(),o("div",null,t)}const h=s(l,[["render",e]]);export{F as __pageData,h as default};
