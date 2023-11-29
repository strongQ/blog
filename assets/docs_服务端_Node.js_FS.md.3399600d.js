import{_ as s,o as a,c as n,U as l}from"./chunks/framework.83a19234.js";const i=JSON.parse('{"title":"Node.js FS 文件系统 (File System)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/服务端/Node.js/FS.md","filePath":"docs/服务端/Node.js/FS.md","lastUpdated":1701226428000}'),o={name:"docs/服务端/Node.js/FS.md"},p=l(`<h1 id="node-js-fs-文件系统-file-system" tabindex="-1">Node.js FS 文件系统 (File System) <a class="header-anchor" href="#node-js-fs-文件系统-file-system" aria-label="Permalink to &quot;Node.js FS 文件系统 (File System)&quot;">​</a></h1><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">existsSync</span><span style="color:#A6ACCD;">(path)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 检查一个文件是否存在 返回 true/false 不能检查目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stat</span><span style="color:#A6ACCD;">(path</span><span style="color:#89DDFF;">,(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">stat</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 是文件还是目录</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">stat</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 文件大小</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">stat</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isFile</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 是否是文件</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">stat</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isDirectory</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 是否是目录</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFileSync</span><span style="color:#A6ACCD;">(path)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 读取文件  文件不存在会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeFileSync</span><span style="color:#A6ACCD;">(path</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 写入文件(覆盖) 返回 undefined 文件不存在会自动创建</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unlinkSync</span><span style="color:#A6ACCD;">(path)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 删除文件  返回 undefined  不存在会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readdirSync</span><span style="color:#A6ACCD;">(path[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options])</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 读取目录下的所有文件名 返回数组</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">truncateSync</span><span style="color:#A6ACCD;">(path[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> len])</span><span style="color:#676E95;font-style:italic;">// 截断文件 把文件设为 3 个字节,后面的内容截断 不存在会报错</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mkdirSync</span><span style="color:#A6ACCD;">(path[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options])</span><span style="color:#676E95;font-style:italic;">// 新建文件夹 已存在会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rmdirSync</span><span style="color:#A6ACCD;">(path[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options])</span><span style="color:#676E95;font-style:italic;">// 删除文件夹 文件夹内有文件会报错 不存在会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">renameSync</span><span style="color:#A6ACCD;">(oldPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> newPath)</span><span style="color:#676E95;font-style:italic;">// 重命名 文件/目录名 旧路径至新路径可以实现移动文件</span></span></code></pre></div><p>监听文件</p><ul><li>filename：监听的文件名</li><li>options：配置 ​- interval：1000 每隔 1 秒监听一次</li><li>listener 回调函数，当文件发生变化时，回调函数会执行，会有两个参数 ​- curr 当前文件的状态 <ul><li>prev 修改前文件的状态 ​- 这两个对象都是 stats 对象</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">watchFile</span><span style="color:#A6ACCD;">(filename[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> listener)</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">watchFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">interval </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">},</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">curr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">prev</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">修改前文件大小</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prev</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">修改后文件大小</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">curr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="流式文件读取" tabindex="-1">流式文件读取 <a class="header-anchor" href="#流式文件读取" aria-label="Permalink to &quot;流式文件读取&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> rs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createReadStream</span><span style="color:#A6ACCD;">(path)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 创建可读流</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ws </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createWriteStream</span><span style="color:#A6ACCD;">(path)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 创建可写流</span></span>
<span class="line"><span style="color:#A6ACCD;">rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(ws)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 可读流传输到可写流</span></span>
<span class="line"><span style="color:#A6ACCD;">rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">open</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 可读流打开</span></span>
<span class="line"><span style="color:#A6ACCD;">rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">once</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">close</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 可读流关闭 可读流关闭后 调用 rs.end() </span></span>
<span class="line"><span style="color:#A6ACCD;">ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">open</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 可写流打开</span></span>
<span class="line"><span style="color:#A6ACCD;">ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">once</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">close</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 可写流关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">rs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 查看每次读取到的字节</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 写入读取到的 data</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="flag操作符" tabindex="-1">flag操作符 <a class="header-anchor" href="#flag操作符" aria-label="Permalink to &quot;flag操作符&quot;">​</a></h2><ul><li>r：读取文件，文件不存在则出现异常</li><li>r+：读写又件，又件不存在则出现异常</li><li>rs：在同步模式下打开文件用于读取</li><li>rs+：在同步模式下打开文件用于读写</li><li>w：打开文件用于写操作如果不存在则创建，如果存在则酸断</li><li>wx：打开文件用于写操作如果存在则打开失败</li><li>w+：打开文件用于读写如果不存在则创如果存在则载断</li><li>wx+：打开文件用于读写如果存在则打开失败</li><li>a：打开丈件用于遍加如果不存在则创建</li><li>ax：打开文件用于追加如果路径存在则失败</li><li>a+：打开文件进行读取和追加如果不存在则创建该文件</li><li>ax+：打开文件进行读取和追加如果路径存在则失败</li></ul>`,10),e=[p];function t(c,r,y,D,F,A){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};
