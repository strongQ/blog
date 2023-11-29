import{_ as i,o as l,c as a,U as e}from"./chunks/framework.83a19234.js";const m=JSON.parse('{"title":"JavaScript video 视频 API","description":"","frontmatter":{},"headers":[],"relativePath":"docs/JavaScript/多媒体API/video.md","filePath":"docs/JavaScript/多媒体API/video.md","lastUpdated":1701226428000}'),t={name:"docs/JavaScript/多媒体API/video.md"},r=e('<h1 id="javascript-video-视频-api" tabindex="-1">JavaScript video 视频 API <a class="header-anchor" href="#javascript-video-视频-api" aria-label="Permalink to &quot;JavaScript video 视频 API&quot;">​</a></h1><h2 id="标签属性" tabindex="-1">标签属性 <a class="header-anchor" href="#标签属性" aria-label="Permalink to &quot;标签属性&quot;">​</a></h2><ul><li>src：要播放的音频/视频的 URL。</li><li>controls：显示音频/视频播放控件</li><li>loop：音频/视频结束后重新播放</li><li>muted：音频/视频静音</li><li>width：播放区宽度</li><li>height：播放区高度</li><li>poster：预览图片</li></ul><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><ul><li>audioTracks：返回可用音频轨道的 Audio TrackList 对象</li><li>autoplay：设置/返回是否在加载完成后播放视频/音频</li><li>buffered：返回音频/视频已缓存部分的timeRanges对象</li><li>controller：返回音频/视频当前媒体控制器的MediaController对象</li><li>controls：设置/返回音频/视频是否显示控件</li><li>crossOrigin：设置/返回音频/视频的CORS设置</li><li>curretSrc：返回当前音频/视频的URL</li><li>currentTime：设置/返回音频/视频中当前播放位置（以秒）</li><li>defaultMuted：设置/返回音频/视频默认是否静音</li><li>defaultPlaybackRate：设置/返回音频/视频的默认播放速度</li><li>duration：返回当前音频/视频的长度 s</li><li>ended：返回音频/视频是否播放结束</li><li>error：返回音频/视频发生错误状态的 MediaError 对象</li><li>loop：设置/返回是否应在结束时重新播放</li><li>mediaGroup：设置/返回音频/视频所属的组合</li><li>muted：设置/返回是否静音</li><li>networkState：返回当前音频/视频网络状态</li><li>paused：设置/返回是否暂停</li><li>playbackRate：设置/返回音频/视频播放速度</li><li>palyed：返回音频/视频已播放部分 TimeRanges 对象</li><li>repload：设置/返回是否在页面加载后加载</li><li>readyState：返回音频/视频当前的就绪状态</li><li>seekable：返回音频/视频可寻址部分的 TimeRanges 对象</li><li>seeking：返回用户是否在音频/视频中进行查找</li><li>src：设置/返回当前来源</li><li>startDate：返回当前时间偏移的 date 对象</li><li>textTracks：返回可用文本轨道的 TextTrackList 对象</li><li>videoTracks:返回可用视频轨道的 VideoTrackList 对象</li><li>volume:设置/返回音量</li></ul><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li>addTextTrack()：向音频/视频添加新的文本轨道</li><li>canPlayType()：检测浏览器是够能播放指定的音频/视频类型</li><li>load()：重新加载音频/视频</li><li>play()：开始播放音频/视频</li><li>pause()：暂停音频/视频</li></ul><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><ul><li>abort：当音频/视频的加载已放弃时触发</li><li>canplay：当浏览器可以开始播放音频/视频时触发</li><li>canplaythrough：当浏览器在不因缓冲而停顿的视口下进行播放时触发</li><li>durationchange：音频/视频的时长发生改变时触发</li><li>emptied：目前播放列表为空时触发</li><li>ended：播放列表结束时触发</li><li>error：音频/视频加载期间发生错误时触发</li><li>loadeddata：当音频/视频已加载当前帧时触发</li><li>loadedmetadata：当浏览器已加载音频/视频的元数据时触发</li><li>loadstart：当浏览器开始查找音频/视频时触发</li><li>pause：音频/视频暂停时触发</li><li>play：音频/视频一开始或不在暂停时触发</li><li>playing：音频/视频因缓冲而暂停或停止后已就绪时触发</li><li>progress：当浏览器正在下载音频/视频时触发</li><li>ratechange：音频/视频的播放速度已更改时触发</li><li>seeked：用户开始移动/跳跃到音频/视频新的位置时触发</li><li>seeking：开始移动到/跳跃到音频/视频新的位置时触发</li><li>stalled：当浏览器尝试获取媒体数据，但数据不可用时触发</li><li>suspend：浏览器刻意不获取媒体数据时触发</li><li>timeupdate：当目前播放位置已更改时触发</li><li>volumechange：当音量已更改时触发</li><li>waiting：当视频由于需要缓冲下一帧而停止时触发</li></ul>',9),o=[r];function d(s,c,n,u,p,h){return l(),a("div",null,o)}const v=i(t,[["render",d]]);export{m as __pageData,v as default};
