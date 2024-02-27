import{_ as s,o as a,c as n,U as l}from"./chunks/framework.83a19234.js";const C=JSON.parse('{"title":"JavaScript ES6 Generator 函数","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ES6/Generator.md","filePath":"docs/ES6/Generator.md","lastUpdated":1708997035000}'),o={name:"docs/ES6/Generator.md"},e=l(`<h1 id="javascript-es6-generator-函数" tabindex="-1">JavaScript ES6 Generator 函数 <a class="header-anchor" href="#javascript-es6-generator-函数" aria-label="Permalink to &quot;JavaScript ES6 Generator 函数&quot;">​</a></h1><ul><li>执行机制</li></ul><ol><li>function 后加 *，函数执行后返回 Iterator 对象</li><li>返回的对象调用 next 方法开始执行，遇到 yield 关键字会停止。</li><li>再次调用 next 方法会从上一次的结束的地方继续执行，直到 yield</li><li>yield 后面的值会在 next 执行停止时返回</li><li>next 传的参数会在函数内传给 yield</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fnc</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">开始</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">返回给next</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// next 没有传参 a 默认 undefined</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">结束</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// next传入 &#39;结束&#39;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fnc</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">next传入</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// {value: &quot;返回给 next&quot;, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// {value: undefined, done: true}</span></span></code></pre></div>`,4),p=[e];function t(c,r,y,F,D,i){return a(),n("div",null,p)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};