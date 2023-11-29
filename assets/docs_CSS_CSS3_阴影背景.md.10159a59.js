import{_ as s,o as a,c as n,U as l}from"./chunks/framework.83a19234.js";const b=JSON.parse('{"title":"CSS3 background 阴影背景","description":"","frontmatter":{},"headers":[],"relativePath":"docs/CSS/CSS3/阴影背景.md","filePath":"docs/CSS/CSS3/阴影背景.md","lastUpdated":1701226428000}'),o={name:"docs/CSS/CSS3/阴影背景.md"},e=l(`<h1 id="css3-background-阴影背景" tabindex="-1">CSS3 background 阴影背景 <a class="header-anchor" href="#css3-background-阴影背景" aria-label="Permalink to &quot;CSS3 background 阴影背景&quot;">​</a></h1><h2 id="阴影" tabindex="-1">阴影 <a class="header-anchor" href="#阴影" aria-label="Permalink to &quot;阴影&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">text-shadow</span><span style="color:#A6ACCD;">: x y  blur  color;</span></span>
<span class="line"><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">: x y  blur  spreed  color inset;</span></span></code></pre></div><ul><li>x: 水平，y: 垂直，blur：模糊度，spreed：尺寸，color：颜色，insert：内阴影，默认的是外阴影</li></ul><h2 id="background" tabindex="-1">background <a class="header-anchor" href="#background" aria-label="Permalink to &quot;background&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: url(),url()...</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">background-size</span><span style="color:#A6ACCD;">: length </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> % </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> cover </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> contain ;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* cover:把背景图片扩至足够大，以使背景图像完全覆盖背景区域。 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* contain：把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">background-origin</span><span style="color:#A6ACCD;">:</span><span style="color:#FFCB6B;">content-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">padding-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">border-box</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* content-box 背景图片相对于内容框来定义 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* padding-box 背景图片相对于内边距框来定义 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* border-box 背景图片相对于边框线来定义 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">background-clip</span><span style="color:#A6ACCD;">:</span><span style="color:#FFCB6B;">content-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">padding-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">border-box</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* content-box 背景裁剪到内容框 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* padding-box 背景裁剪到内边距框 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* border-box 背景裁剪到边框线 */</span></span></code></pre></div><h2 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">resize:none </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> both </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> horizontal </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> vertical;</span></span></code></pre></div><ul><li><p>none：无法调整元素的尺寸</p></li><li><p>both：可以调整元素的宽度和高度</p></li><li><p>vertical：可以调整元素的高度</p></li><li><p>horizontal：可以调整元素的宽度</p></li></ul><div class="tip custom-block"><p class="custom-block-title">注意</p><p>如果其他元素希望该属性生效，需要设置元素的 overflow 的属性，值除了 visible 以外</p></div>`,10),p=[e];function t(c,r,i,C,d,y){return a(),n("div",null,p)}const D=s(o,[["render",t]]);export{b as __pageData,D as default};
