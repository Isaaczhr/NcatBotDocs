---
title: 插件模式最小示例
createTime: 2025/02/08 10:07:54
permalink: /guide/minexample/
---

## 源代码 

::: code-tabs
@tab python

```python
# ========= 导入必要模块 ==========
from ncatbot.core import BotClient, GroupMessage, PrivateMessage
from ncatbot.utils import get_log

# ========== 创建 BotClient ==========
bot = BotClient()
_log = get_log()

# ========= 注册回调函数 ==========
@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)
    if msg.raw_message == "测试":
        await msg.reply(text="NcatBot 测试成功喵~")

@bot.private_event()
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)
    if msg.raw_message == "测试":
        await bot.api.post_private_msg(msg.user_id, text="NcatBot 测试成功喵~")

# ========== 启动 BotClient==========
if __name__ == "__main__":
    bot.run(bt_uin="123456")
```
:::

## 代码分析

::: warning
NcatBot 要求, 一个独立的**进程**只能==创建唯一一个 BotClient 实例==.
:::

### 运行

::: code-tabs
@tab python
```python
# ========== 启动 BotClient==========
if __name__ == "__main__":
    bot.run(bt_uin="123456")
```
:::

执行 `bot.run()` 时，会在工作目录下 `plugins/` 中查找并加载插件。`bot.run()` 会阻塞整个线程，直到 `Ctrl+C` 触发退出流程**退出整个进程**。

**NcatBot** 默认会在同一台电脑上运行 **NapCat** 服务, 我们也**只建议这么做**. [了解 NcatBot 和 NapCat 的关系](../5.%20杂项/1.%20认识%20NcatBot.md#NcatBot-和-NapCat-的关系).

如果硬要把 NcatBot 和 NapCat 分开, 查阅[使用远端 NapCat 接口](../5.%20杂项/2.%20使用远端%20napcat%20接口.md).

[了解 NcatBot 生命周期](./3.%20NcatBot%20生命周期.md)

