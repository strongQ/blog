import{_ as s,o as a,c as n,U as l}from"./chunks/framework.83a19234.js";const E=JSON.parse('{"title":"git 版本管理工具","description":"","frontmatter":{},"headers":[],"relativePath":"docs/进阶/git版本管理工具.md","filePath":"docs/进阶/git版本管理工具.md","lastUpdated":1701226428000}'),o={name:"docs/进阶/git版本管理工具.md"},p=l(`<h1 id="git-版本管理工具" tabindex="-1">git 版本管理工具 <a class="header-anchor" href="#git-版本管理工具" aria-label="Permalink to &quot;git 版本管理工具&quot;">​</a></h1><h2 id="git-项目操作流程" tabindex="-1">git 项目操作流程 <a class="header-anchor" href="#git-项目操作流程" aria-label="Permalink to &quot;git 项目操作流程&quot;">​</a></h2><ol><li><code>git clone [url]</code> 克隆项目 / git pull 拉取最新代码</li><li><code>git remote</code> 查看是否有远程仓库</li><li>没有远程仓库 ---&gt; <code>git remote add [远程仓库名] [远程地址]</code> 配置远程仓库</li><li><code>git branch -b [新分支名]</code> 创建新的分支，在新分支上修改代码</li><li><code>git add .</code> 提交</li><li><code>git commit -m &#39;描述&#39;</code> 提交</li><li><code>git checkout [分支名]</code> 切换到要合并的分支</li><li><code>git merge [分支名]</code> 把修改代码的分支合并到当前分支</li><li><code>git push [远程仓库名] [分支名]</code> 提交到远程仓库</li><li><code>git branch -d [分支名]</code> 删除之前修改代码的分支,删之前先 branch 查看</li></ol><p>或</p><ol><li><code>git clone [url]</code> 克隆代码</li><li><code>git checkout [分支名]</code> 切换到最新的开发分支，如 <code>git checkou dev</code></li><li><code>git checkout -b [分支名]</code> 将当前分支复制到新的分支进行开发，如<code>git checkout -b my_dev</code></li></ol><p>提交代码前先更新远程的代码，但如果当前分支修改了代码没有提交，更新下来的代码可能会导致与当前未提交的代码冲突或被覆盖。</p><ol start="4"><li><code>git stash</code> 将当前修改但未提交的代码弹出</li><li><code>git pull</code>或<code>git pull origin [分支名]</code> 更新代码</li><li><code>git stash pop</code> 将弹出的代码取出</li><li><code>git add .</code></li><li><code>git commit -m &#39;描述&#39;</code></li><li><code>git push</code></li></ol><h2 id="配置-ssh" tabindex="-1">配置 ssh <a class="header-anchor" href="#配置-ssh" aria-label="Permalink to &quot;配置 ssh&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;">                         </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看配置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--system</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看系统的配置</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">安装目录</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Git</span><span style="color:#A6ACCD;">\\e</span><span style="color:#C3E88D;">tc</span><span style="color:#A6ACCD;">\\g</span><span style="color:#C3E88D;">itconfig</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看用户的配置</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户目录</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\U</span><span style="color:#C3E88D;">sers</span><span style="color:#A6ACCD;">\\A</span><span style="color:#C3E88D;">dministrator</span><span style="color:#A6ACCD;">\\ </span><span style="color:#C3E88D;">.gitconfig</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">用户名</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">邮箱</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">邮箱</span></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">生成公钥</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\U</span><span style="color:#C3E88D;">sers</span><span style="color:#A6ACCD;">\\A</span><span style="color:#C3E88D;">dministrator</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">目录</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">实现免密码登录！</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">邮箱</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa加密</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">两个文件</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">公共的公钥，另一个私钥</span></span></code></pre></div><h2 id="配置代理" tabindex="-1">配置代理 <a class="header-anchor" href="#配置代理" aria-label="Permalink to &quot;配置代理&quot;">​</a></h2><ul><li>http/https 代理</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:10809</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://127.0.0.1:10809</span></span></code></pre></div><ul><li>socks5 代理</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">socks5://127.0.0.1:10808</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">socks5://127.0.0.1:10808</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><ul><li>取消代理</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https.proxy</span></span></code></pre></div><h2 id="建立版本库" tabindex="-1">建立版本库 <a class="header-anchor" href="#建立版本库" aria-label="Permalink to &quot;建立版本库&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ur</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">克隆远程版本库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">初始化一个</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">仓库</span></span></code></pre></div><h2 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-label="Permalink to &quot;分支&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;">                          </span><span style="color:#C3E88D;">查看本地所有分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;">                       </span><span style="color:#C3E88D;">列出所有远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-va</span><span style="color:#A6ACCD;">                      </span><span style="color:#C3E88D;">查看本地+远程所有分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> [分支名]                切换到某个分支上</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> [新分支名]           创建新分支并选择到新分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> [分支名]                  新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> [分支名] --no-ff           将分支合并到当前分支上</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> [分支名]               删除分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--delete</span><span style="color:#A6ACCD;"> [分支名]    删除远端分支</span></span></code></pre></div><h2 id="修改和提交" tabindex="-1">修改和提交 <a class="header-anchor" href="#修改和提交" aria-label="Permalink to &quot;修改和提交&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">查看当前仓库状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">查看变更内容</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> [路径]        添加多个文件跟踪</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">描述</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">提交文件到仓库</span></span></code></pre></div><h2 id="远程操作" tabindex="-1">远程操作 <a class="header-anchor" href="#远程操作" aria-label="Permalink to &quot;远程操作&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;">                                </span><span style="color:#C3E88D;">拉取最新代码合并</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;">                              </span><span style="color:#C3E88D;">查看当前项目配置的远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> [远程仓库名称] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">远程地址</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  配置远程仓库地址</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> [远程仓库名称] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">分支名</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">          指定分支推送到指定远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> [远程仓库名] --delete </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">分支名</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">   删除远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-dr</span><span style="color:#A6ACCD;"> [远程仓库名/分支名]        删除远程分支</span></span></code></pre></div><h2 id="版本控制" tabindex="-1">版本控制 <a class="header-anchor" href="#版本控制" aria-label="Permalink to &quot;版本控制&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> [HEAD表示当前版本 </span><span style="color:#C3E88D;">HEAD^上一版本</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^^上上一版本</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..以此类推]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;">                      </span><span style="color:#C3E88D;">查看历史提交记录</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--pretty=oneline</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">查看历史提交记录[显示信息简化]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">回退到上一版本</span></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1094a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">回到未来,可以使用未来的版本号前几位数快进</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reflog</span><span style="color:#A6ACCD;">                   </span><span style="color:#C3E88D;">查看记录每次的命令</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">readme.tx</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">             </span><span style="color:#C3E88D;">查看</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">readme.txt版本是否被回退</span></span></code></pre></div><h2 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-label="Permalink to &quot;标签&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;">                              </span><span style="color:#676E95;font-style:italic;"># 列出所有tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> [tag]                        </span><span style="color:#676E95;font-style:italic;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> [tag] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> [tag]                     </span><span style="color:#676E95;font-style:italic;"># 删除本地tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:refs/tags/[tagName]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 删除远程tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> [tag]                       </span><span style="color:#676E95;font-style:italic;"># 查看tag信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> [remote] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 提交指定tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> [remote] --tags             </span><span style="color:#676E95;font-style:italic;"># 提交所有tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> [branch] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 新建一个分支，指向某个tag</span></span></code></pre></div><h2 id="重置为新仓库" tabindex="-1">重置为新仓库 <a class="header-anchor" href="#重置为新仓库" aria-label="Permalink to &quot;重置为新仓库&quot;">​</a></h2><ol><li><code>git checkout --orphan latest_branch</code>迁出</li><li><code>git add -A</code>追踪所有文件</li><li><code>git commit -am &quot;commit message&quot;</code>填写提交信息</li><li><code>git branch -D master</code>删除旧分支</li><li><code>git branch -m master</code>重命名当前分支为主分支</li><li><code>git push -f origin master</code>强制推送</li></ol><h2 id="linux-命令" tabindex="-1">Linux 命令 <a class="header-anchor" href="#linux-命令" aria-label="Permalink to &quot;Linux 命令&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">改变目录。</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">回退到上一个目录，直接cd进入默认目录</span></span>
<span class="line"><span style="color:#82AAFF;">pwd</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示当前所在的目录路径。</span></span>
<span class="line"><span style="color:#FFCB6B;">ls(ll</span><span style="color:#A6ACCD;">)   // 都是列出当前目录中的所有文件，只不过 ll（两个 ll）列出的内容更为详细。</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">新建一个文件</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">如</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">就会在当前目录下新建一个</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除一个文件,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">就会把</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件删除。</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">新建一个目录,就是新建一个文件夹。</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除一个文件夹,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除src目录</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">切勿在Linux中尝试！删除电脑中全部文件！</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">移动文件,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">是要移动的文件,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">是目标文件夹,当然,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">这样写,必须保证文件和目标文件夹在同一目录下。</span></span>
<span class="line"><span style="color:#FFCB6B;">reset</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">重新初始化终端/清屏。</span></span>
<span class="line"><span style="color:#FFCB6B;">clear</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">清屏。</span></span>
<span class="line"><span style="color:#82AAFF;">history</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看命令历史。</span></span>
<span class="line"><span style="color:#FFCB6B;">help</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">帮助。</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">退出。</span></span>
<span class="line"><span style="color:#FFCB6B;">\\##</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">表示注释</span></span></code></pre></div>`,32),e=[p];function t(c,C,r,y,D,A){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{E as __pageData,d as default};
