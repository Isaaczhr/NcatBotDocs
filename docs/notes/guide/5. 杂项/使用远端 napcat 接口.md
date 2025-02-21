---
title: 使用远端 napcat 接口
createTime: 2025/02/09 16:45:00
permalink: /guide/inxart0k/
---

## 远端配置

按照 napcat 的文档配置好远端 napcat 服务.

获取 napcat websocket 的 token(不是 webui 的 token).

## NcatBot 配置

参考[配置项](../2.%20配置项.md), 完成 `ws_uri` 和 `token` 的设置.

## 运行

`bot.run()` 有一个 `reload` 参数, 最好改为 `True` 以关闭本地 napcat 服务检查.

::: code-tabs
@tab python
```python
if __name__ == "__main__":
    bot.run(reload=True)
```
:::