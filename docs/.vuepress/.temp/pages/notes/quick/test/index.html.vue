<template><div><h3 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性"><span>主要特性</span></a></h3>
<ul>
<li>支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；</li>
<li>支持实时预览、图片（跨域）上传、预格式文本/代码/表格插入、代码折叠、搜索替换、只读模式、自定义样式主题和多语言语法高亮等功能；</li>
<li>支持ToC（Table of Contents）、Emoji表情、Task lists、@链接等Markdown扩展语法；</li>
<li>支持TeX科学公式（基于KaTeX）、流程图 Flowchart 和 时序图 Sequence Diagram;</li>
<li>支持识别和解析HTML标签，并且支持自定义过滤标签解析，具有可靠的安全性和几乎无限的扩展性；</li>
<li>支持 AMD / CMD 模块化加载（支持 Require.js &amp; Sea.js），并且支持自定义扩展插件；</li>
<li>兼容主流的浏览器（IE8+）和Zepto.js，且支持iPad等平板设备；</li>
<li>支持自定义主题样式；</li>
</ul>
<h1 id="editor-md" tabindex="-1"><a class="header-anchor" href="#editor-md"><span>Editor.md</span></a></h1>
<p><img src="https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png" alt=""></p>
<p><img src="https://img.shields.io/github/stars/pandao/editor.md.svg" alt=""> <img src="https://img.shields.io/github/forks/pandao/editor.md.svg" alt=""> <img src="https://img.shields.io/github/tag/pandao/editor.md.svg" alt=""> <img src="https://img.shields.io/github/release/pandao/editor.md.svg" alt=""> <img src="https://img.shields.io/github/issues/pandao/editor.md.svg" alt=""> <img src="https://img.shields.io/bower/v/editor.md.svg" alt=""></p>
<p><strong>目录 (Table of Contents)</strong></p>
<p>[TOCM]</p>
<p>[TOC]</p>
<h1 id="heading-1" tabindex="-1"><a class="header-anchor" href="#heading-1"><span>Heading 1</span></a></h1>
<h2 id="heading-2" tabindex="-1"><a class="header-anchor" href="#heading-2"><span>Heading 2</span></a></h2>
<h3 id="heading-3" tabindex="-1"><a class="header-anchor" href="#heading-3"><span>Heading 3</span></a></h3>
<h4 id="heading-4" tabindex="-1"><a class="header-anchor" href="#heading-4"><span>Heading 4</span></a></h4>
<h5 id="heading-5" tabindex="-1"><a class="header-anchor" href="#heading-5"><span>Heading 5</span></a></h5>
<h6 id="heading-6" tabindex="-1"><a class="header-anchor" href="#heading-6"><span>Heading 6</span></a></h6>
<h1 id="heading-1-link-heading-link" tabindex="-1"><a class="header-anchor" href="#heading-1-link-heading-link"><span>Heading 1 link <a href="https://github.com/pandao/editor.md" title="Heading link" target="_blank" rel="noopener noreferrer">Heading link</a></span></a></h1>
<h2 id="heading-2-link-heading-link" tabindex="-1"><a class="header-anchor" href="#heading-2-link-heading-link"><span>Heading 2 link <a href="https://github.com/pandao/editor.md" title="Heading link" target="_blank" rel="noopener noreferrer">Heading link</a></span></a></h2>
<h3 id="heading-3-link-heading-link" tabindex="-1"><a class="header-anchor" href="#heading-3-link-heading-link"><span>Heading 3 link <a href="https://github.com/pandao/editor.md" title="Heading link" target="_blank" rel="noopener noreferrer">Heading link</a></span></a></h3>
<h4 id="heading-4-link-heading-link-heading-link-heading-link" tabindex="-1"><a class="header-anchor" href="#heading-4-link-heading-link-heading-link-heading-link"><span>Heading 4 link <a href="https://github.com/pandao/editor.md" title="Heading link" target="_blank" rel="noopener noreferrer">Heading link</a> Heading link <a href="https://github.com/pandao/editor.md" title="Heading link" target="_blank" rel="noopener noreferrer">Heading link</a></span></a></h4>
<h5 id="heading-5-link-heading-link" tabindex="-1"><a class="header-anchor" href="#heading-5-link-heading-link"><span>Heading 5 link <a href="https://github.com/pandao/editor.md" title="Heading link" target="_blank" rel="noopener noreferrer">Heading link</a></span></a></h5>
<h6 id="heading-6-link-heading-link" tabindex="-1"><a class="header-anchor" href="#heading-6-link-heading-link"><span>Heading 6 link <a href="https://github.com/pandao/editor.md" title="Heading link" target="_blank" rel="noopener noreferrer">Heading link</a></span></a></h6>
<h4 id="标题-用底线的形式-heading-underline" tabindex="-1"><a class="header-anchor" href="#标题-用底线的形式-heading-underline"><span>标题（用底线的形式）Heading (underline)</span></a></h4>
<h1 id="this-is-an-h1" tabindex="-1"><a class="header-anchor" href="#this-is-an-h1"><span>This is an H1</span></a></h1>
<h2 id="this-is-an-h2" tabindex="-1"><a class="header-anchor" href="#this-is-an-h2"><span>This is an H2</span></a></h2>
<h3 id="字符效果和横线等" tabindex="-1"><a class="header-anchor" href="#字符效果和横线等"><span>字符效果和横线等</span></a></h3>
<hr>
<p><s>删除线</s> <s>删除线（开启识别HTML标签时）</s>
<em>斜体字</em>      <em>斜体字</em>
<strong>粗体</strong>  <strong>粗体</strong>
<em><strong>粗斜体</strong></em> <em><strong>粗斜体</strong></em></p>
<p>上标：X<sub>2</sub>，下标：O<sup>2</sup></p>
<p><strong>缩写(同HTML的abbr标签)</strong></p>
<blockquote>
<p>即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启</p>
</blockquote>
<p>The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.</p>
<h3 id="引用-blockquotes" tabindex="-1"><a class="header-anchor" href="#引用-blockquotes"><span>引用 Blockquotes</span></a></h3>
<blockquote>
<p>引用文本 Blockquotes</p>
</blockquote>
<p>引用的行内混合 Blockquotes</p>
<blockquote>
<p>引用：如果想要插入空白换行<code v-pre>即&lt;br /&gt;标签</code>，在插入处先键入两个以上的空格然后回车即可，<a href="http://localhost/" target="_blank" rel="noopener noreferrer">普通链接</a>。</p>
</blockquote>
<h3 id="锚点与链接-links" tabindex="-1"><a class="header-anchor" href="#锚点与链接-links"><span>锚点与链接 Links</span></a></h3>
<p><a href="http://localhost/" target="_blank" rel="noopener noreferrer">普通链接</a></p>
<p><a href="http://localhost/" title="普通链接带标题" target="_blank" rel="noopener noreferrer">普通链接带标题</a></p>
<p>直接链接：<a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a></p>
<p><a href="http://www.this-anchor-link.com/" target="_blank" rel="noopener noreferrer">锚点链接</a></p>
<p>GFM a-tail link @pandao</p>
<blockquote>
<p>@pandao</p>
</blockquote>
<h3 id="多语言代码高亮-codes" tabindex="-1"><a class="header-anchor" href="#多语言代码高亮-codes"><span>多语言代码高亮 Codes</span></a></h3>
<h4 id="行内代码-inline-code" tabindex="-1"><a class="header-anchor" href="#行内代码-inline-code"><span>行内代码 Inline code</span></a></h4>
<p>执行命令：<code v-pre>npm install marked</code></p>
<h4 id="缩进风格" tabindex="-1"><a class="header-anchor" href="#缩进风格"><span>缩进风格</span></a></h4>
<p>即缩进四个空格，也做为实现类似<code v-pre>&lt;pre&gt;</code>预格式化文本(Preformatted Text)的功能。</p>
<pre><code>&lt;?php
    echo &quot;Hello world!&quot;;
?&gt;
</code></pre>
<p>预格式化文本：</p>
<pre><code>| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
</code></pre>
<h4 id="js代码" tabindex="-1"><a class="header-anchor" href="#js代码"><span>JS代码</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">	console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello world!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(){</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> box</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> box</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">fn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">init</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    box</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">prototype</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> box</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">fn</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        init</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">box.init()</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">			return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		add</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">str</span><span style="--shiki-light:#999999;--shiki-dark:#666666">){</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			alert</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">add</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> str</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">			return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		remove</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">str</span><span style="--shiki-light:#999999;--shiki-dark:#666666">){</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">			alert</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">remove</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> str</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">			return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    };</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    box</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">fn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">init</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">prototype</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> box</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">fn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    window</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">box</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">box</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> testBox</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> box</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">testBox</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">jQuery</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">remove</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">jQuery</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="html代码-html-codes" tabindex="-1"><a class="header-anchor" href="#html代码-html-codes"><span>HTML代码 HTML codes</span></a></h4>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;!</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">DOCTYPE</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7">mate</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> charest</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">utf-8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Hello world!</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Hello world!</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片-images" tabindex="-1"><a class="header-anchor" href="#图片-images"><span>图片 Images</span></a></h3>
<p>Image:</p>
<p><img src="https://pandao.github.io/editor.md/examples/images/4.jpg" alt=""></p>
<blockquote>
<p>Follow your heart.</p>
</blockquote>
<p><img src="https://pandao.github.io/editor.md/examples/images/8.jpg" alt=""></p>
<blockquote>
<p>图为：厦门白城沙滩</p>
</blockquote>
<p>图片加链接 (Image + Link)：</p>
<p><a href="https://pandao.github.io/editor.md/examples/images/7.jpg" title="李健首张专辑《似水流年》封面" target="_blank" rel="noopener noreferrer"><img src="https://pandao.github.io/editor.md/examples/images/7.jpg" alt=""></a></p>
<blockquote>
<p>图为：李健首张专辑《似水流年》封面</p>
</blockquote>
<hr>
<h3 id="列表-lists" tabindex="-1"><a class="header-anchor" href="#列表-lists"><span>列表 Lists</span></a></h3>
<h4 id="无序列表-减号-unordered-lists" tabindex="-1"><a class="header-anchor" href="#无序列表-减号-unordered-lists"><span>无序列表（减号）Unordered Lists (-)</span></a></h4>
<ul>
<li>列表一</li>
<li>列表二</li>
<li>列表三</li>
</ul>
<h4 id="无序列表-星号-unordered-lists" tabindex="-1"><a class="header-anchor" href="#无序列表-星号-unordered-lists"><span>无序列表（星号）Unordered Lists (*)</span></a></h4>
<ul>
<li>列表一</li>
<li>列表二</li>
<li>列表三</li>
</ul>
<h4 id="无序列表-加号和嵌套-unordered-lists" tabindex="-1"><a class="header-anchor" href="#无序列表-加号和嵌套-unordered-lists"><span>无序列表（加号和嵌套）Unordered Lists (+)</span></a></h4>
<ul>
<li>列表一</li>
<li>列表二
<ul>
<li>列表二-1</li>
<li>列表二-2</li>
<li>列表二-3</li>
</ul>
</li>
<li>列表三
<ul>
<li>列表一</li>
<li>列表二</li>
<li>列表三</li>
</ul>
</li>
</ul>
<h4 id="有序列表-ordered-lists" tabindex="-1"><a class="header-anchor" href="#有序列表-ordered-lists"><span>有序列表 Ordered Lists (-)</span></a></h4>
<ol>
<li>第一行</li>
<li>第二行</li>
<li>第三行</li>
</ol>
<h4 id="gfm-task-list" tabindex="-1"><a class="header-anchor" href="#gfm-task-list"><span>GFM task list</span></a></h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> GFM task list 1</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> GFM task list 2</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> GFM task list 3</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> GFM task list 3-1</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> GFM task list 3-2</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> GFM task list 3-3</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> GFM task list 4</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> GFM task list 4-1</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> GFM task list 4-2</label></li>
</ul>
</li>
</ul>
<hr>
<h3 id="绘制表格-tables" tabindex="-1"><a class="header-anchor" href="#绘制表格-tables"><span>绘制表格 Tables</span></a></h3>
<table>
<thead>
<tr>
<th>项目</th>
<th style="text-align:right">价格</th>
<th style="text-align:center">数量</th>
</tr>
</thead>
<tbody>
<tr>
<td>计算机</td>
<td style="text-align:right">$1600</td>
<td style="text-align:center">5</td>
</tr>
<tr>
<td>手机</td>
<td style="text-align:right">$12</td>
<td style="text-align:center">12</td>
</tr>
<tr>
<td>管线</td>
<td style="text-align:right">$1</td>
<td style="text-align:center">234</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Function name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>help()</code></td>
<td>Display the help window.</td>
</tr>
<tr>
<td><code v-pre>destroy()</code></td>
<td><strong>Destroy your computer!</strong></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">Left-Aligned</th>
<th style="text-align:center">Center Aligned</th>
<th style="text-align:right">Right Aligned</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">col 3 is</td>
<td style="text-align:center">some wordy text</td>
<td style="text-align:right">$1600</td>
</tr>
<tr>
<td style="text-align:left">col 2 is</td>
<td style="text-align:center">centered</td>
<td style="text-align:right">$12</td>
</tr>
<tr>
<td style="text-align:left">zebra stripes</td>
<td style="text-align:center">are neat</td>
<td style="text-align:right">$1</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Item</th>
<th style="text-align:right">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Computer</td>
<td style="text-align:right">$1600</td>
</tr>
<tr>
<td>Phone</td>
<td style="text-align:right">$12</td>
</tr>
<tr>
<td>Pipe</td>
<td style="text-align:right">$1</td>
</tr>
</tbody>
</table>
<hr>
<h4 id="特殊符号-html-entities-codes" tabindex="-1"><a class="header-anchor" href="#特殊符号-html-entities-codes"><span>特殊符号 HTML Entities Codes</span></a></h4>
<p>© &amp;  ¨ ™ ¡ £
&amp; &lt; &gt; ¥ € ® ± ¶ § ¦ ¯ « ·</p>
<p>X² Y³ ¾ ¼  ×  ÷   »</p>
<p>18ºC  &quot;  '</p>
<h3 id="emoji表情" tabindex="-1"><a class="header-anchor" href="#emoji表情"><span>Emoji表情 😃</span></a></h3>
<blockquote>
<p>Blockquotes ⭐</p>
</blockquote>
<h4 id="gfm-task-lists-emoji-fontawesome-icon-emoji-editormd-logo-emoji-editormd-logo-5x" tabindex="-1"><a class="header-anchor" href="#gfm-task-lists-emoji-fontawesome-icon-emoji-editormd-logo-emoji-editormd-logo-5x"><span>GFM task lists &amp; Emoji &amp; fontAwesome icon emoji &amp; editormd logo emoji :editormd-logo-5x:</span></a></h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 😃 @mentions, 😃 #refs, <a href="">links</a>, <strong>formatting</strong>, and <del>tags</del> supported :editormd-logo:;</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> [ ] 😃 this is a complete item 😃;</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> []this is an incomplete item <a href="#">test link</a> :fa-star: @pandao;</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> [ ]this is an incomplete item :fa-star: :fa-gear:;</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> 😃 this is an incomplete item <a href="#">test link</a> :fa-star: :fa-gear:;</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> 😃 this is  :fa-star: :fa-gear: an incomplete item <a href="#">test link</a>;</label></li>
</ul>
</li>
</ul>
<h4 id="反斜杠-escape" tabindex="-1"><a class="header-anchor" href="#反斜杠-escape"><span>反斜杠 Escape</span></a></h4>
<p>*literal asterisks*</p>
<h3 id="科学公式-tex-katex" tabindex="-1"><a class="header-anchor" href="#科学公式-tex-katex"><span>科学公式 TeX(KaTeX)</span></a></h3>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">
E=mc^2
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></p>
<p>行内的公式$$E=mc<sup>2$$行内的公式，行内的$$E=mc</sup>2$$公式。</p>
<p v-pre class='katex-block'><span class="katex-error" title="ParseError: KaTeX parse error: Can&#x27;t use function &#x27;\(&#x27; in math mode at position 2: 
\̲(̲\sqrt{3x-1}+(1+…" style="color:#cc0000">
\(\sqrt{3x-1}+(1+x)^2\)
</span></p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>sin</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>α</mi><msup><mo stretchy="false">)</mo><mi>θ</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mo stretchy="false">(</mo><msup><mi>x</mi><mi>i</mi></msup><mo>+</mo><mi>cos</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">
\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1491em;vertical-align:-0.25em;"></span><span class="mop">sin</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.9291em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">0</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8747em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">cos</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">))</span></span></span></span></span></p>
<p>多行公式：</p>
<div class="language-math line-numbers-mode" data-ext="math" data-title="math"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>\displaystyle</span></span>
<span class="line"><span>\left( \sum\_{k=1}^n a\_k b\_k \right)^2</span></span>
<span class="line"><span>\leq</span></span>
<span class="line"><span>\left( \sum\_{k=1}^n a\_k^2 \right)</span></span>
<span class="line"><span>\left( \sum\_{k=1}^n b\_k^2 \right)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-katex line-numbers-mode" data-ext="katex" data-title="katex"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>\displaystyle </span></span>
<span class="line"><span>    \frac{1}{</span></span>
<span class="line"><span>        \Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{</span></span>
<span class="line"><span>        \frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {</span></span>
<span class="line"><span>        1+\frac{e^{-6\pi}}</span></span>
<span class="line"><span>        {1+\frac{e^{-8\pi}}</span></span>
<span class="line"><span>         {1+\cdots} }</span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span>    }</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-latex line-numbers-mode" data-ext="latex" data-title="latex"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">f(x) = </span><span style="--shiki-light:#999999;--shiki-dark:#666666">\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">_{-</span><span style="--shiki-light:#999999;--shiki-dark:#666666">\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">infty</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}^</span><span style="--shiki-light:#999999;--shiki-dark:#666666">\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">infty</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    \</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">hat</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> f(</span><span style="--shiki-light:#999999;--shiki-dark:#666666">\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">xi</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666">\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e^{2 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pi</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i </span><span style="--shiki-light:#999999;--shiki-dark:#666666">\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">xi</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> x}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    \</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">d</span><span style="--shiki-light:#999999;--shiki-dark:#666666">\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">xi</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绘制流程图-flowchart" tabindex="-1"><a class="header-anchor" href="#绘制流程图-flowchart"><span>绘制流程图 Flowchart</span></a></h3>
<div class="language-flow line-numbers-mode" data-ext="flow" data-title="flow"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>st=>start: 用户登陆</span></span>
<span class="line"><span>op=>operation: 登陆操作</span></span>
<span class="line"><span>cond=>condition: 登陆成功 Yes or No?</span></span>
<span class="line"><span>e=>end: 进入后台</span></span>
<span class="line"><span></span></span>
<span class="line"><span>st->op->cond</span></span>
<span class="line"><span>cond(yes)->e</span></span>
<span class="line"><span>cond(no)->op</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绘制序列图-sequence-diagram" tabindex="-1"><a class="header-anchor" href="#绘制序列图-sequence-diagram"><span>绘制序列图 Sequence Diagram</span></a></h3>
<div class="language-seq line-numbers-mode" data-ext="seq" data-title="seq"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Andrew->China: Says Hello </span></span>
<span class="line"><span>Note right of China: China thinks\nabout it </span></span>
<span class="line"><span>China-->Andrew: How are you? </span></span>
<span class="line"><span>Andrew->>China: I am good thanks!</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="end" tabindex="-1"><a class="header-anchor" href="#end"><span>End</span></a></h3>
</div></template>


