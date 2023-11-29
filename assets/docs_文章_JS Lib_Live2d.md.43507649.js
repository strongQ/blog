import{_ as t,o as s,c as a,U as o}from"./chunks/framework.83a19234.js";const C=JSON.parse('{"title":"开箱即用的 Live2d","description":"","frontmatter":{},"headers":[],"relativePath":"docs/文章/JS Lib/Live2d.md","filePath":"docs/文章/JS Lib/Live2d.md","lastUpdated":1701226428000}'),n={name:"docs/文章/JS Lib/Live2d.md"},l=o(`<h1 id="开箱即用的-live2d" tabindex="-1">开箱即用的 Live2d <a class="header-anchor" href="#开箱即用的-live2d" aria-label="Permalink to &quot;开箱即用的 Live2d&quot;">​</a></h1><p>你可能注意到网站右下角的<code>Live2d</code>人物了，对此我对<code>Live2d</code>做了类封装几行代码就能实现网站加载<code>Live2d</code>人物。该库包含了<code>live2d</code>与<code>live2d_3</code>的模型。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@tomiaa/live2d</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Live2d</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@tomiaa/live2d</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Live2d</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// el: &quot;#live2d&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">live2d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="ts-类型" tabindex="-1">TS 类型 <a class="header-anchor" href="#ts-类型" aria-label="Permalink to &quot;TS 类型&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 配置类型</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Live2dOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@tomiaa/live2d</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h2 id="依赖文件地址配置" tabindex="-1">依赖文件地址配置 <a class="header-anchor" href="#依赖文件地址配置" aria-label="Permalink to &quot;依赖文件地址配置&quot;">​</a></h2><p>依赖文件的地址文件<code>IP</code>都在<code>github</code>，下面参数主要考虑到国内经常被墙，可以使用下面参数使用其他服务器地址。</p><ul><li>jsBaseURL：配置依赖的<code>js</code>文件<code>baseURL</code>地址目录，默认加载的<code>https://github.com/tomiaa12/live2d/tree/main/public</code>下的<code>js</code>文件，修改后需要保证该目录下也应该存在同样的文件。</li><li>live2d_2_ModelBaseURL: <code>live2d</code>模型的<code>baseURL</code>地址目录，默认使用<code>jsBaseURL</code>参数。</li><li>live2d_3_ModelBaseURL: <code>live2d_3</code>模型的<code>baseURL</code>地址目录，默认使用<code>jsBaseURL</code>参数。</li></ul><h2 id="vue-demo" tabindex="-1">Vue Demo <a class="header-anchor" href="#vue-demo" aria-label="Permalink to &quot;Vue Demo&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">live2dContentRef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Live2d</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@tomiaa/live2d</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> live2dContentRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Live2d</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    el</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">live2dContentRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    showLoading</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    maxWidth</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">350</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>el</td><td>容器 querySelector 选择器或 dom</td><td>string | DOM 元素</td><td>#live2d</td></tr><tr><td>jsBaseURL</td><td>配置依赖的<code>js</code>文件<code>baseURL</code>地址目录</td><td>string</td><td><code>tomiaa12.github.io/live2d/public</code></td></tr><tr><td>live2d_2_ModelBaseURL</td><td>live2d 模型地址目录</td><td>string</td><td>默认使用 jsBaseURL</td></tr><tr><td>live2d_3_ModelBaseURL</td><td>live2d_3 模型地址目录</td><td>string</td><td>默认使用 jsBaseURL</td></tr><tr><td>loadLive2d_2</td><td>是否加载 live2d_2 模型列表</td><td>boolean</td><td>true</td></tr><tr><td>loadLive2d_3</td><td>是否加载 live2d_3 模型列表</td><td>boolean</td><td>true</td></tr><tr><td>playLoadingAnimation</td><td>加载模型之后是否播放登场(login)动画，只有存在<code>login</code>动画才有效</td><td>boolean</td><td>true</td></tr><tr><td>showLoading</td><td>显示加载模型 loading</td><td>boolean</td><td>true</td></tr><tr><td>showControl</td><td>显示控制栏</td><td>boolean</td><td>true</td></tr><tr><td>iApplicationOptions</td><td>PIXI.Application 配置</td><td>IApplicationOptions</td><td>{}</td></tr><tr><td>maxWidth</td><td>容器最大宽度</td><td>number</td><td>400</td></tr><tr><td>minWidth</td><td>容器最小宽度</td><td>number</td><td>200</td></tr><tr><td>aspectRatio</td><td>默认宽高比</td><td>[number,number]</td><td>[10,9]</td></tr><tr><td>beforeInit</td><td>初始化之前</td><td>(data: {<br>options:Live2dOptions<br>modelList: ModelOption[]<br>})=&gt; void</td><td></td></tr><tr><td>afterInit</td><td>初始化完成</td><td>(data: {<br>options: Live2dOptions<br>modelList: ModelOption[]<br>currentModelOption: ModelOption<br>Live2DModel: typeof Live2DModelType<br>app: Application<br>}) =&gt; void</td><td></td></tr><tr><td>randomPeople</td><td>人物随机</td><td>boolean</td><td>true</td></tr><tr><td>allowDrag</td><td>允许拖动</td><td>boolean</td><td>true</td></tr><tr><td>hitokoto</td><td>是否开启 hitokoto 一言</td><td>boolean</td><td>true</td></tr><tr><td>hitokotoOptions</td><td>一言配置</td><td>HitokotoOptions</td><td></td></tr></tbody></table><h2 id="成员属性" tabindex="-1">成员属性 <a class="header-anchor" href="#成员属性" aria-label="Permalink to &quot;成员属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>构造器配置</td><td>Live2dOptions</td><td>参考上一标题默认值</td></tr><tr><td>el</td><td>dom 容器</td><td>any</td><td></td></tr><tr><td>canvas</td><td>canvas 容器</td><td>any</td><td></td></tr><tr><td>Live2DModel</td><td>模型加载模块</td><td>typeof Live2DModelType</td><td></td></tr><tr><td>app</td><td>pixi.js 应用</td><td>Application</td><td></td></tr><tr><td>loading</td><td>加载loading</td><td>boolean</td><td>false</td></tr><tr><td>model</td><td>当前模型</td><td>InstanceType&lt;typeof Live2DModelType&gt;</td><td></td></tr><tr><td>modelList</td><td>模型列表</td><td>ModelOption[]</td><td>[]</td></tr><tr><td>currentModelOption</td><td>当前模型配置</td><td>ModelOption</td><td></td></tr><tr><td>personIndex</td><td>模型下标</td><td>number</td><td>0</td></tr><tr><td>clothingIndex</td><td>服装下标</td><td>number</td><td>0</td></tr><tr><td>elLoading</td><td>loading dom 元素</td><td>any</td><td></td></tr><tr><td>elControl</td><td>control dom 元素</td><td>any</td><td></td></tr><tr><td>elSwitchPerson</td><td>切换人物 dom 元素</td><td>any</td><td></td></tr><tr><td>elSwitchClothing</td><td>切换服装 dom 元素</td><td>any</td><td></td></tr><tr><td>elHitokoto</td><td>一言 dom 元素</td><td>any</td><td></td></tr><tr><td>hitokoto</td><td>一言</td><td>Hitokoto</td><td></td></tr></tbody></table>`,17),e=[l];function d(p,r,c,i,y,D){return s(),a("div",null,e)}const A=t(n,[["render",d]]);export{C as __pageData,A as default};
