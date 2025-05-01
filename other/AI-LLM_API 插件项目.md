---
title: LLM_API 插件项目
creatTime: 2025/03/27 10:07:54
permalink: /guide/llmapipl/
---

## 介绍

LLM_API 插件不直接提供大语言模型对话服务, 而是提供基于事件的对话接口和基本配置服务.

## 事件

通过 `LLM_API.main` 事件触发调用 LLM 的服务, `Event` 参数的 data 部分为 LLM 输入参数, 事件的处理结果为 LLM 的回复.

`data` 的构造如下:

```
{
    "history": [
        {
            "role": "system",
            "content": "系统提示内容"
        },
        {
            "role": "user",
            "content": "用户输入内容"
        },
    ], # 提示信息
    "max_tokens": 4096, # 最大长度
    "temperature": 0.7 # 温度,
}
```

`result` 的构造如下:

```
{
    "text": "回复内容",
    "status": "状态码" # 200 表示成功, 其他表示失败
    "error": "错误信息" # 
}
```

## 插件配置项

使用 NcatBot 的内置插件配置项功能, 三个核心配置项如下:

- api: `/cfg LLM_API.api <your api>` api-key。
- url: `/cfg LLM_API.url <your url>` 基准 url。
- model: `/cfg LLM_API.model <your model>` 模型名。

例如 Kimi

```
url: https://api.moonshot.cn/v1
model: moonshot-v1-8k
api: <KEY>
```


## 测试

拥有管理员权限可以发送 `/tllma` 触发大模型测试事件.

## 源代码

```python
from ncatbot.plugin import BasePlugin, CompatibleEnrollment, Event
from ncatbot.core import GroupMessage, PrivateMessage
import asyncio
from concurrent.futures import ThreadPoolExecutor

DEFAULT_URL = "url"
DEFAULT_API = "api"
DEFAULT_MODEL = "model"

class LLM_API(BasePlugin):
    name = "LLM_API" # 插件名称
    version = "0.0.1" # 插件版本

    async def on_load(self):
        print(f"{self.name} 插件已加载")
        print(f"插件版本: {self.version}")
        self.register_config("url", DEFAULT_URL)
        self.register_config("api", DEFAULT_API)
        self.register_config("model", DEFAULT_MODEL) # 注册三个配置项
        self.register_handler("LLM_API.main", self.main) # 注册事件(Event)处理器
        self.register_admin_func("test", self.test, prefix="/tllma", permission_raise=True) # 注册一个管理员功能, 需要提权以便在普通群聊中触发
    
    async def test(self, message: PrivateMessage):
        result = (await self.publish_async(Event("LLM_API.main", {
                "history": [
                {
                    "role": "system",
                    "content": "系统提示内容"
                },
                {
                    "role": "user",
                    "content": "用户输入内容"
                },
            ], # 提示信息
            "max_tokens": 4096, # 最大长度
            "temperature": 0.7 # 温度, 0-1, 越大越随机
        })))[0]
        await message.reply(text=result["text"] + result['error'])        
        
    async def main(self, event: Event):
        data = event.data
        url = self.data['config']["url"]
        api = self.data['config']["api"]
        model = self.data['config']["model"]
        
        if url == DEFAULT_URL or api == DEFAULT_API or model == DEFAULT_MODEL:
            event.add_result({
                "text": "",
                "status": 501,
                "error": "配置项错误"
            })
            return
        
        # 连接大预言模型的代码略去, 这里返回一个你好
        event.add_result({
            "text": "你好",
            "status": 200,
            "error": ""
        })
    
    async def on_unload(self):
        print(f"{self.name} 插件已卸载")
```
