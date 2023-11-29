import{_ as s,o as a,c as n,U as l}from"./chunks/framework.83a19234.js";const A=JSON.parse('{"title":"Less 预处理","description":"","frontmatter":{},"headers":[],"relativePath":"docs/CSS/预处理/Less.md","filePath":"docs/CSS/预处理/Less.md","lastUpdated":1701226428000}'),o={name:"docs/CSS/预处理/Less.md"},p=l(`<h1 id="less-预处理" tabindex="-1">Less 预处理 <a class="header-anchor" href="#less-预处理" aria-label="Permalink to &quot;Less 预处理&quot;">​</a></h1><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">reset.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 导入css */</span></span></code></pre></div><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">w</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1190px</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">/* 变量 */</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">height</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">w </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000px</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">border</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">@{side}</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="混入" tabindex="-1">混入 <a class="header-anchor" href="#混入" aria-label="Permalink to &quot;混入&quot;">​</a></h2><ul><li>@arguments</li></ul><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.boxShadow</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,@</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">,@</span><span style="color:#A6ACCD;">blur</span><span style="color:#89DDFF;">,@</span><span style="color:#A6ACCD;">spreed</span><span style="color:#89DDFF;">,@</span><span style="color:#A6ACCD;">color)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">arguments </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box1</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">public</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.boxShadow</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">50px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">color)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><ul><li>:extend</li></ul><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box3</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;:</span><span style="color:#A6ACCD;">extend(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等同于</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box4</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">extend(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="运算" tabindex="-1">运算 <a class="header-anchor" href="#运算" aria-label="Permalink to &quot;运算&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bottom</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">20)</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="编译为原始-css-calc-计算" tabindex="-1">编译为原始 css calc 计算 <a class="header-anchor" href="#编译为原始-css-calc-计算" aria-label="Permalink to &quot;编译为原始 css calc 计算&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1rem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--width</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 这样写会编译成 width: 计算后的结果;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">~</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100% - var(--width)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 应该这样写</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">w</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">90%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">~</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">@{w}</span><span style="color:#C3E88D;"> - var(--width)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 使用 less 变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,17),e=[p];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
