<template><div><p>首先你需要填写config.yaml文件:</p>
<div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>ws:</span></span>
<span class="line"><span>  Protocol: ws</span></span>
<span class="line"><span>  ip: 127.0.0.1</span></span>
<span class="line"><span>  port: 3001</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http:</span></span>
<span class="line"><span>  Protocol: http</span></span>
<span class="line"><span>  ip: 127.0.0.1</span></span>
<span class="line"><span>  port: 3000</span></span>
<span class="line"><span>  sync: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plugin:</span></span>
<span class="line"><span>  xunfei:</span></span>
<span class="line"><span>    api_url:</span></span>
<span class="line"><span>    api_key:</span></span>
<span class="line"><span>    model: generalv3.5</span></span>
<span class="line"><span>    personality: You are a helpful assistant.</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行以下代码：</p>
<div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span># encoding: utf-8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import ncatpy</span></span>
<span class="line"><span>from ncatpy import logging</span></span>
<span class="line"><span>from ncatpy.message import GroupMessage,PrivateMessage</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_log = logging.get_logger()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyClient(ncatpy.Client):</span></span>
<span class="line"><span>    async def on_group_message(self, message: GroupMessage):</span></span>
<span class="line"><span>        _log.info(f"收到群消息，ID: {message.message.text.text}")</span></span>
<span class="line"><span>        _log.info(message.user_id)</span></span>
<span class="line"><span>        if message.user_id == 2793415370:</span></span>
<span class="line"><span>            # 当提问者的QQ号是2793415370时，调用XunfeiGPT插件回答他的问题</span></span>
<span class="line"><span>            # t = await self._XunfeiGPT.ai_response(input=message.message.text.text, group_id=message.group_id) # 单轮ai聊天</span></span>
<span class="line"><span>            t = await self._XunfeiGPT.ai_response_history(input=message.message.text.text, info= True, group_id=message.group_id)# 多轮ai聊天,可用参数：开发者模式：info=True,历史记录次数：history_num=5</span></span>
<span class="line"><span>            _log.info(t)</span></span>
<span class="line"><span>        if message.message.text.text == "你好":</span></span>
<span class="line"><span>            # 通过http发送消息</span></span>
<span class="line"><span>            t = await message.add_text("你好,o").reply()</span></span>
<span class="line"><span>            _log.info(t)</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async def on_private_message(self, message: PrivateMessage):</span></span>
<span class="line"><span>        _log.info(f"收到私聊消息，ID: {message.message.text.text}")</span></span>
<span class="line"><span>        if message.message.text.text == "你好":</span></span>
<span class="line"><span>            t = await self._api.send_msg(user_id=message.user_id, text="你好,o")</span></span>
<span class="line"><span>            _log.info(t)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == "__main__":</span></span>
<span class="line"><span>    # 1. 通过预设置的类型，设置需要监听的事件通道</span></span>
<span class="line"><span>    # intents = ncatpy.Intents.public() # 可以订阅public，包括了私聊和群聊</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 2. 通过kwargs，设置需要监听的事件通道</span></span>
<span class="line"><span>    intents = ncatpy.Intents(group_event=True)</span></span>
<span class="line"><span>    client = MyClient(intents=intents, plugins=["XunfeiGPT"])# 如果没有插件，则不需要添加plugins=["XunfeiGPT"]</span></span>
<span class="line"><span>    client.run()</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


