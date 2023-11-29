import{_ as s,o as a,c as n,U as l}from"./chunks/framework.83a19234.js";const A=JSON.parse('{"title":"canvas 入门","description":"","frontmatter":{},"headers":[],"relativePath":"docs/进阶/Canvas/canvas入门.md","filePath":"docs/进阶/Canvas/canvas入门.md","lastUpdated":1701226428000}'),o={name:"docs/进阶/Canvas/canvas入门.md"},p=l(`<h1 id="canvas-入门" tabindex="-1">canvas 入门 <a class="header-anchor" href="#canvas-入门" aria-label="Permalink to &quot;canvas 入门&quot;">​</a></h1><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">canvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">600</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">不支持canvas会显示这条内容 </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* * @type {HTMLCanvasElement} */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// vscode 添加这行注释可以开始代码提示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> canvas </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">canvas</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 检测是否支持</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getContext)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取上下文</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="属性方法" tabindex="-1">属性方法 <a class="header-anchor" href="#属性方法" aria-label="Permalink to &quot;属性方法&quot;">​</a></h2><ul><li>strokeStyle 设置或返回描边颜色</li><li>fillStyle 设置或返回填充颜色</li><li>stroke() 描边已定义绘图（路径）</li><li>fill() 填充当前绘图（路径）</li><li>moveTo(x,y) 把路径移动到画布中的指定点，不创建线条。</li><li>lineTo(x,y) 添加一个新点,绘制一条从当前位置到指定新点(x,y)位置的直线。</li><li>lineWidth 设置或返回当前的线条宽度</li><li>lineJoin 设置或返回两条线相交时，所创建的拐角类型</li><li>lineCap 设置或返回线条的结束端点样式</li><li>beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。生成路径的第一步叫做beginPath()。</li><li>closePath() 闭合路径之后图形绘制命令又重新指向到上下文中。不是必需的。</li></ul><h2 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h2><p>划线</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">strokeStyle</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">moveTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">350</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineWidth</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineCap</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">round</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineJoin</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">round</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closePath</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#A6ACCD;">()</span></span></code></pre></div>`,8),e=[p];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
