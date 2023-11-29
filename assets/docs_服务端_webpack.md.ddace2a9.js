import{_ as s,o as a,c as n,U as l}from"./chunks/framework.83a19234.js";const i=JSON.parse('{"title":"Node.js webpack 打包工具","description":"","frontmatter":{},"headers":[],"relativePath":"docs/服务端/webpack.md","filePath":"docs/服务端/webpack.md","lastUpdated":1701226428000}'),p={name:"docs/服务端/webpack.md"},o=l(`<h1 id="node-js-webpack-打包工具" tabindex="-1">Node.js webpack 打包工具 <a class="header-anchor" href="#node-js-webpack-打包工具" aria-label="Permalink to &quot;Node.js webpack 打包工具&quot;">​</a></h1><p>安装 webpack@4 版本与 webpack-cli 客户端</p><p>npm install webpack@4 webpack-cli -g</p><ol><li>npm init -y 创建 package.json文件</li><li>根目录新建 webpack.config.js 文件</li></ol><p>配置信息</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entry </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// 入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// 输出文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// 处理对应模块</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// 对应的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">devServer </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 开发服务器配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 模式配置</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><p>webpack 命令打包文件，只能打包 js 文件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/app.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dest</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 打包后的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dabao.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 打包后的文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><h3 id="打包-html-文件" tabindex="-1">打包 html 文件 <a class="header-anchor" href="#打包-html-文件" aria-label="Permalink to &quot;打包 html 文件&quot;">​</a></h3><p>npm i html-webpack-plugin@4 -D 安装到开发依赖</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HtmlWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置插件配置项</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#676E95;font-style:italic;">// 在 src 目录 [项目目录] 下创建一个 index.html 页面当作模板来使用</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/index.html</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>而 index.html 文件内容会增加一行内容：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">打包后的.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>如果在打包过程中报如下的错误：</p><p>Error: Cannot find module &#39;webpack/lib/node/NodeTemplatePlugin</p><p>安装</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i webpack@</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span></code></pre></div><h3 id="打包-css-到-js-文件内" tabindex="-1">打包 css 到 js 文件内 <a class="header-anchor" href="#打包-css-到-js-文件内" aria-label="Permalink to &quot;打包 css 到 js 文件内&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i style</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader css</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader@</span><span style="color:#F78C6C;">3.6</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span></code></pre></div><p>css-loader 是负责解析 css 的[当使用插件拆分 css 时就不再需要 style-loader]</p><p>style-loader 将 css 以内部样式表的形式嵌入到 html 中</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HtmlWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#676E95;font-style:italic;">// loader 就是要处理对应 test 规则的文件 loader 的 use 规则，是从右向左处理</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="打包外链-css" tabindex="-1">打包外链 css <a class="header-anchor" href="#打包外链-css" aria-label="Permalink to &quot;打包外链 css&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i style</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader extract</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">webpack</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin@next  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span></code></pre></div><p>目前版本不支持 webpack4</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ExtractTextWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">extract-text-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#676E95;font-style:italic;">// css 拆分后会把 css 文件放到 dest 目录下的 css/styles.css 中</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ExtractTextWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css/style.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ExtractTextWebpackPlugin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extract</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 将 css 用 link 方式引入就不需要 style-loader 了</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="打包-css-中的图片" tabindex="-1">打包 CSS 中的图片 <a class="header-anchor" href="#打包-css-中的图片" aria-label="Permalink to &quot;打包 CSS 中的图片&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">url-loader</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file-loader</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">​    test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">png</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">jpg</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">gif</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">​    use</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">​      loader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">​      options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">​        limit</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">8192</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 字节在 8192 以下会被转码为 base64 格式</span></span>
<span class="line"><span style="color:#F07178;">​      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">​    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">] </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="使用-jquery-功能" tabindex="-1">使用 jQuery 功能 <a class="header-anchor" href="#使用-jquery-功能" aria-label="Permalink to &quot;使用 jQuery 功能&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jquery</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> $ </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jquery</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 引入 jquery 库</span></span></code></pre></div><h3 id="压缩js代码" tabindex="-1">压缩JS代码 <a class="header-anchor" href="#压缩js代码" aria-label="Permalink to &quot;压缩JS代码&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 默认是production表示压缩js代码</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// &#39;development&#39; // development表示不压缩代码</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="压缩-css-代码" tabindex="-1">压缩 css 代码 <a class="header-anchor" href="#压缩-css-代码" aria-label="Permalink to &quot;压缩 css 代码&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">optimize-css-assets-webpack-plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save-dev</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> OptimizeCssAssetsPlugin</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">optimize-css-assets-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OptimizeCssAssetsPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">assetNameRegExp</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">cssProcessor</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cssnano</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">cssProcessorOptions</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">safe</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">discardComments</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">removeAll</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">}},</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">canPrint</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="压缩-html-代码" tabindex="-1">压缩 HTML 代码 <a class="header-anchor" href="#压缩-html-代码" aria-label="Permalink to &quot;压缩 HTML 代码&quot;">​</a></h3><p>不需要安装插件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#676E95;font-style:italic;">// 在 src 目录下创建一个 index.html 页面当作模板来使用</span></span>
<span class="line"><span style="color:#A6ACCD;">​      </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/index.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​       </span><span style="color:#F07178;">minify</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">​         </span><span style="color:#F07178;">removeAttributeQuotes</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​         </span><span style="color:#F07178;">removeComments</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​         </span><span style="color:#F07178;">collapseWhitespace</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​         </span><span style="color:#F07178;">removeScriptTypeAttributes</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​         </span><span style="color:#F07178;">removeStyleLinkTypeAttributes</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  ​    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="webpack-热更新" tabindex="-1">webpack 热更新 <a class="header-anchor" href="#webpack-热更新" aria-label="Permalink to &quot;webpack 热更新&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webpack-dev-server@next</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Webpack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">HotModuleReplacementPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// webpack 热更新插件</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 新增热更新配置：</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">devServer</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#676E95;font-style:italic;">// 设置服务器访问的基本目录</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#676E95;font-style:italic;">// contentBase:path.resolve(__dirname,&#39;dest&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#676E95;font-style:italic;">// 设置服务器 ip 地址，可以是 localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">8090</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">// 设置端口</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#F07178;">open</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">// 设置自动打开浏览器</span></span>
<span class="line"><span style="color:#A6ACCD;">​    </span><span style="color:#F07178;">hot</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#676E95;font-style:italic;">// 设置热更新</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,45),e=[o];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
