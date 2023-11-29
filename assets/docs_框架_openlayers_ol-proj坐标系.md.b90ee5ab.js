import{_ as s,o as a,c as o,U as l}from"./chunks/framework.83a19234.js";const A=JSON.parse('{"title":"openlayers ol/proj--坐标系","description":"","frontmatter":{},"headers":[],"relativePath":"docs/框架/openlayers/ol-proj坐标系.md","filePath":"docs/框架/openlayers/ol-proj坐标系.md","lastUpdated":1701226428000}'),n={name:"docs/框架/openlayers/ol-proj坐标系.md"},p=l(`<h1 id="openlayers-ol-proj-坐标系" tabindex="-1">openlayers ol/proj--坐标系 <a class="header-anchor" href="#openlayers-ol-proj-坐标系" aria-label="Permalink to &quot;openlayers ol/proj--坐标系&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> olProj </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or 或者</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">xx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>EPSG:4326 为经纬度坐标,GPS系统,世界大地测量系统</p><p>EPSG:3857 为平面坐标,谷歌,微软都是用的这个</p><p>坐标查询网址: http:// epsg.io/</p><h2 id="transform-坐标转换" tabindex="-1">transform--坐标转换 <a class="header-anchor" href="#transform-坐标转换" aria-label="Permalink to &quot;transform--坐标转换&quot;">​</a></h2><p>transform(coordinate,source,destination)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transform</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">112.993592</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">28.200256</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EPSG:4326</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EPSG:3857</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  [12578389.124342911, 3274245.030348462]</span></span></code></pre></div><ul><li>coordinate: 当前坐标</li><li>source: 源投影坐标系(当前坐标的坐标系)</li><li>destination: 目标投影坐标系</li></ul><h2 id="fromlonlat-经纬度转目标投影" tabindex="-1">fromLonLat--经纬度转目标投影 <a class="header-anchor" href="#fromlonlat-经纬度转目标投影" aria-label="Permalink to &quot;fromLonLat--经纬度转目标投影&quot;">​</a></h2><p>fromLonLat(coordinate,destination)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">fromLonLat</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">fromLonLat</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">112.993592</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">28.200256</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  [12578389.124342911, 3274245.030348462]</span></span></code></pre></div><ul><li>coordinate: 当前坐标,</li><li>destination: 目标投影坐标系</li></ul><h2 id="proj-projection-定义投影坐标系" tabindex="-1">proj/Projection--定义投影坐标系 <a class="header-anchor" href="#proj-projection-定义投影坐标系" aria-label="Permalink to &quot;proj/Projection--定义投影坐标系&quot;">​</a></h2><ul><li>定义一个投影坐标系对象,储存在proj的命名空间中</li><li>如果使用 proj4js，则可以使用 proj4.defs() 添加别名。添加所有必需的投影定义后，调用 ol/proj/proj4.register 函数。</li><li>可以使用ol/proj.get 来获取特定投影的对象。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Projection</span><span style="color:#A6ACCD;">(options)</span></span></code></pre></div><h3 id="可选项" tabindex="-1">可选项 <a class="header-anchor" href="#可选项" aria-label="Permalink to &quot;可选项&quot;">​</a></h3><ul><li>code: string，投影的标识符代码,如: EPSG:4326</li><li>units: ol/proj/Units| string , 单位 ,如: &#39;m&#39; (米)</li><li>extent: ol/extent~Extent, 坐标系的边界范围</li><li>axisOrientation: string , 轴方向,默认&#39;enu&#39;</li><li>global: boolean , 投影是否对整个地球有效,默认false</li><li>metersPerUnit: 米单位</li><li>worldExtent: ol/extent~Extent,,世界坐标系的边界范围</li><li>getPointResolution: function,获取点分辨率,传入分辨率和坐标</li></ul><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><ul><li>getAxisOrientation: 获取轴方向 <ul><li>enu - 默认东距、北距、高程。</li><li>neu - 北向、东向、向上 - 适用于“纬度/经度”地理坐标或南向横向墨卡托。</li><li>wnu - 向西、向北、向上 - 一些行星坐标系具有“西正”坐标系</li></ul></li><li>getCode: 获取投影的代码,如&#39;EPSG:4326&#39;</li><li>get/setExtent(ol/extent): 获取/设置投影的范围</li><li>getMetersPerUnit: 获取每单位米数。如未配置为metersPerUnit 或单位标识符，则返回未定义。</li><li>getUnits: 获取此投影的单位</li><li>get/setWorldExtent: 获取/设置此投影的世界范围。</li><li>isGlobal: 是否是全球范围的投影</li></ul><h2 id="例子-自定义坐标系" tabindex="-1">例子：自定义坐标系 <a class="header-anchor" href="#例子-自定义坐标系" aria-label="Permalink to &quot;例子：自定义坐标系&quot;">​</a></h2><ol><li>创建一个投影坐标系</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> epsg4490 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Projection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EPSG:4490</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 命名投影的编号</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">73.62</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16.7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">134.77</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">53.56</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 投影的边界范围</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">units</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">m</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">axisOrientation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">neu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>投影的边界范围http:// epsg.io/ 上搜索，这里用的中国2000大地坐标系</p><ol start="2"><li>使用proj4定义4490坐标与openlayers自带的3857，4326互相转换</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i proj4</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> proj4 </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">proj4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 定义4490坐标系，且与其他4326,3857的互相转换</span></span>
<span class="line"><span style="color:#A6ACCD;">proj4</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:4490</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">+proj=longlat +ellps=GRS80 +no_defs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>defs的值在epsg.io网站上复制</p><ol start="3"><li>在ol中添加投影与转换坐标</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addProjection</span><span style="color:#A6ACCD;">(epsg4490)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addCoordinateTransforms</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:4326</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3395</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;font-style:italic;">coordinate</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">proj4</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:4326</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3395</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">coordinate)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;font-style:italic;">coordinate</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">proj4</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3395</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:4326</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">coordinate)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addCoordinateTransforms</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3857</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3395</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#A6ACCD;font-style:italic;">coordinate</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">proj4</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3857</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3395</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">coordinate)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#A6ACCD;font-style:italic;">coordinate</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">proj4</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3395</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3857</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">coordinate)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>addProjection添加定义的投影，addCoordinateTransforms添加坐标的互相转换</p><ol start="4"><li>测试</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transform</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">118</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EPSG:4326</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EPSG:3395</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 测试没问题就定义成功了</span></span></code></pre></div><h2 id="addcoordinatetransforms-注册投影坐标转换" tabindex="-1">addCoordinateTransforms--注册投影坐标转换 <a class="header-anchor" href="#addcoordinatetransforms-注册投影坐标转换" aria-label="Permalink to &quot;addCoordinateTransforms--注册投影坐标转换&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">addCoordinateTransforms</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="可选性" tabindex="-1">可选性 <a class="header-anchor" href="#可选性" aria-label="Permalink to &quot;可选性&quot;">​</a></h3><ul><li><p>source：源投影的编号，如&quot;EPSG:3857&quot;</p></li><li><p>destination： 目标投影的编号</p></li><li><p>forward： function 回调，传入坐标，需要返回源投影转换为目标投影后的坐标。</p></li><li><p>inverse： function逆向转换函数，需要返回目标转源投影的坐标。</p></li></ul><h2 id="addequivalentprojections-注册不改变坐标转换的投影" tabindex="-1">addEquivalentProjections--注册不改变坐标转换的投影 <a class="header-anchor" href="#addequivalentprojections-注册不改变坐标转换的投影" aria-label="Permalink to &quot;addEquivalentProjections--注册不改变坐标转换的投影&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">addEquivalentProjections</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="可选项-1" tabindex="-1">可选项 <a class="header-anchor" href="#可选项-1" aria-label="Permalink to &quot;可选项&quot;">​</a></h3><ul><li>projections：Array[Projection对象]</li></ul><h2 id="addprojection-添加投影" tabindex="-1">addProjection--添加投影 <a class="header-anchor" href="#addprojection-添加投影" aria-label="Permalink to &quot;addProjection--添加投影&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">addProjection</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>添加到投影列表，并可以在投影列表中通过code代码查找</p><ul><li>projection: projection对象，查找的代码为projection.code值</li></ul><h2 id="equivalent-检查两个投影是否相等" tabindex="-1">equivalent--检查两个投影是否相等 <a class="header-anchor" href="#equivalent-检查两个投影是否相等" aria-label="Permalink to &quot;equivalent--检查两个投影是否相等&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">equivalent</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>检查两个投影每个坐标都是相同的地理点</p><h3 id="可选项-2" tabindex="-1">可选项 <a class="header-anchor" href="#可选项-2" aria-label="Permalink to &quot;可选项&quot;">​</a></h3><ul><li>projection1: projection 对象</li><li>projection2: projection对象</li></ul><h2 id="get-编号获取projection投影对象" tabindex="-1">get--编号获取projection投影对象 <a class="header-anchor" href="#get-编号获取projection投影对象" aria-label="Permalink to &quot;get--编号获取projection投影对象&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EPSG:4490</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="getpointresolution-获取投影点分辨率" tabindex="-1">getPointResolution--获取投影点分辨率 <a class="header-anchor" href="#getpointresolution-获取投影点分辨率" aria-label="Permalink to &quot;getPointResolution--获取投影点分辨率&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">getPointResolution</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ul><li>以经纬度或距离单位获取点的分辨率。以度为单位的投影，这将简单地返回提供的分辨率。</li><li>其他投影，默认情况下通过将“点”像素转换为 EPSG:4326，测量在法线球体上的宽度和高度，并取宽度和高度的平均值来估计点分辨率。</li><li>可以通过在Projection 构造函数中设置 getPointResolution 选项或使用setGetPointResolution()方法更改现有投影对象来为特定投影提供自定义函数</li></ul><h3 id="可选项-3" tabindex="-1">可选项 <a class="header-anchor" href="#可选项-3" aria-label="Permalink to &quot;可选项&quot;">​</a></h3><ul><li>projection：投影</li><li>resolution：number 投影单位表示的分辨率</li><li>point：Coordinate 点坐标，指向找到调整后的分辨率。</li><li>untis：获得点分辨率的单位。默认是投影的单位。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPointResolution</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:4490</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1920</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">118</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">]))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="gettransform-获取转换方法" tabindex="-1">getTransform--获取转换方法 <a class="header-anchor" href="#gettransform-获取转换方法" aria-label="Permalink to &quot;getTransform--获取转换方法&quot;">​</a></h2><p>返回源转目标的转换方法</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTransform</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:4490</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3857</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>toLonLat--转换为经纬度</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">toLonLat</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ul><li>coordinate： 坐标</li><li>projection：投影编号，默认为&#39;EPSG:3857&#39;</li></ul><h2 id="transformextent-转换范围" tabindex="-1">transformExtent--转换范围 <a class="header-anchor" href="#transformextent-转换范围" aria-label="Permalink to &quot;transformExtent--转换范围&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">transformExtent</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/proj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>将范围从源投影范围转换为目标投影范围，返回一个新的范围，不会改变原始范围</p><ul><li>extent：投影范围，[minx,miny,maxx,maxy]</li><li>source：投影对象</li><li>destination：目标投影对象</li><li>stops：转换的停止点数</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transformExtent</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">76</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">140</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">56</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:4326</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EPSG:3857</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,69),t=[p];function e(r,c,i,D,y,F){return a(),o("div",null,t)}const d=s(n,[["render",e]]);export{A as __pageData,d as default};
