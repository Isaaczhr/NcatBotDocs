本文档供 AI 阅读. NcatBot 文档 base_url 为 `https://docs.ncatbot.xyz/`, 文档中包含相对链接，为用户生成链接时必须加上这个前缀生成绝对链接。

---
title: 快速开始
createTime: 2025/02/07 15:21:39
permalink: /guide/dto79lp7/
---

## 什么是 NcatBot

NcatBot 是 [NapCat](https://github.com/NapNeko/NapCatQQ) 的 Python SDK (开发者套件), 旨在简化 QQ Bot 的开发和部署流程.

[进一步了解 NcatBot](../5.%20杂项/1.%20认识%20NcatBot.md).

## 核心优势

- **配置简单**: NcatBot 只需要 pip 就能安装, 只需要配置 QQ 号就能运行, 适合快速上手, 快速开发.
  
- **专注业务**: NcatBot 拥有快捷的**一键发布**方案和完善的**一键部署**方案, 您无需关心发布和部署等边缘任务, 只需专注于核心业务的编写.

- **功能丰富**: NcatBot 拥有丰富的内置功能, 如**配置项管理**, **权限系统**, **数据持久化**, 涵盖大部分场景, 免去重复造轮子的烦恼.

## 安装 NcatBot

### 极简指南

极简指南，适合了解开源社区机制和 Python 语言的同学快速完成安装。

- [极简安装指南](./1.5%20极简安装指南.md)

### 详细指南

包含尽可能详细的教程，推荐第一次接触开源社区项目或者第一次接触 Python 的同学使用。

- [Windows 安装 NcatBot](./1.2%20Windows%20安装.md)

- [Windows 一键安装 NcatBot](./1.4%20Windows%20一键安装.md)

- [Linux 安装 NcatBot](./1.1%20Linux%20安装.md)

- [MacOS 安装 NcatBot](./1.3%20MacOS%20安装.md)

- [使用云上 NcatBot 镜像](../5.%20杂项/4.%20轻松上云.md)

## 使用 NcatBot 开发自己的 Bot

移步 [开发指南](2.%20开发指南.md).


---
title: MacOS 安装
createTime: 2025/02/07 15:21:39
permalink: /guide/MacOSins/
---

暂时不提供官方一键安装，部分操作需要手动完成。

遇到困难可[进群](https://qm.qq.com/q/L6XGXYqL86)求助.

## 自行适配提要

[安装方式](../7.%20常见问题/1.%20安装时常见问题.md#各种各样的安装问题通解)
[使用方式](../1.%20快速开始/1.1%20Linux%20安装.md#执行代码)

---
title: Windows 一键安装
createTime: 2025/03/25 14:21:39
permalink: /guide/onestepi/
---

## 简介

NcatBot 提供一键安装工具, 如果你不熟悉基本的计算机知识, 例如**路径**, **工作目录**等概念, 那么建议使用一键安装工具.

## 检查运行环境

### 检查 QQ 版本

NcatBot 需要 QQ 版本至少达到 `9.9.18` 才能正常运行, 如果你不知道你的 QQ 是哪个版本, 请前往[官网](https://im.qq.com)或者[点击这里的官方下载链接](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.18_250318_x64_01.exe) 下载最新版 QQ 的安装包. 双击安装包更新即可.

### 准备 QQ 号

为了测试, 需要两个 QQ 号：

- 一个 QQ 号称为 **Bot**, Bot 一般是小号, 它**由 NcatBot 控制**.
- 另一个 QQ 号称为 **root**, root 一般是大号, 由你自己控制, 拥有管理 Bot 的权限.

### 确保没有重复登录

**Bot** 必须处于**电脑不在线状态**, 检查自己的电脑, 如果电脑上登录了 **Bot**, 请**退出登录**. 

## 一键安装工具

### 获取一键安装工具

加入我们的[交流群](https://qm.qq.com/q/L6XGXYqL86)可以获取一键安装工具.

你也可以在[这里(国内)](https://ghfast.top/https://github.com/liyihao1110/ncatbot/releases/download/v3.8.0/main.exe)或者[这里](https://github.com/liyihao1110/ncatbot/releases/download/v3.8.0/main.exe)下载一键安装工具.

### 一键安装工具的说明

一键安装工具是使用 cpp 编写并静态编译成的可执行文件, 无需其它依赖. 内部包括一个完整的 Python 环境, 执行时, 将在工作目录下创建 `ncatbot` 文件夹并将环境解压到 `ncatbot/python` 文件夹下, 不会更改**环境变量**. 之后会使用 pip 下载 ncatbot 到这个**局部环境**中, 完成基础的环境配置, 进入**运行模式**.

运行一键安装工具时会检查**工作目录**下是否已经安装好环境, 如果已经安装, 则直接进入**运行模式**.

进入**运行模式**后, 执行 `python -m ncatbot.cli.main` 将控制权移交给 [NcatBot-CLI](../5.%20杂项/5.%20CLI.md).

### 执行一键安装工具

执行安装工具前, 请将先安装工具移动到正确的位置, **以后不要移动安装工具.** 一键安装工具会在**工作目录**下创建一个 `ncatbot` 文件夹, **请不要删除或者移动这个文件夹.**

**双击**执行一键安装工具, 等待安装完成后提示输入 QQ 号, 此时应该输入 **Bot** 的 QQ 号, 等待一段时间后, 会弹出二维码. 扫码时, 需要在**手机上先登录 Bot QQ 号**, 用手机扫码登录.

下次运行时, 仍然可以执行一键安装工具, 此时会直接进入**运行模式**, 也一般不需要扫码登录.

### 测试

用 **root** 向 **Bot** ==私聊==发送一句 `测试`, 收到 `NcatBot 测试成功喵~` 的消息, 说明 NcatBot 已经成功运行起来了!

请注意, ==请不要关闭打开的两个终端窗口(黑框框)==, 否则 NcatBot 将无法正常运行.

## 常见错误

### 连接 WebSocket 服务器超时

正常来说, 运行时会弹出**是否允许 XXX 修改计算机**, 你需要**手动允许后**弹出第二个终端(黑框框).

如果没有弹出**是否允许 XXX 修改计算机**, 那么可能是 Windows 安全系统阻止了 NapCat 服务的运行.

请按照[这里](https://blog.csdn.net/weixin_42083266/article/details/118304854)的步骤操作.

**Windows 安全中心** 可以直接在下方**任务栏**的**搜索框**中输入 `Windows 安全中心` 找到并打开.

### 二维码是乱码

喵喵喵.

### 更多

请查阅 [FAQ](../7.%20常见问题/1.%20安装时常见问题.md) 以了解更多常见问题.

---
title: 极简安装指南
createTime: 2025/04/22 15:21:39
permalink: /guide/minimali/
---

## 环境检查

- Python：版本 >= 3.9
- 操作系统：
  - Windows 
    - 将直接使用系统 QQ, 请自行安装好 QQ >= 9.9.16.18 (2024 年 8 月之后安装的 QQ 都可以使用)。
    - 不建议使用 Windows Server
  - Linux
    - 理论上支持所有发行版, 但推荐 Ubuntu 22.04 LTS。
    - 安装好 curl。
- 网络环境：放通本机 6099 和 3001 端口，如果确实存在占用，参考[配置项](../2.%20基本开发/2.%20配置项.md)解决。

## 安装 NcatBot

```bash
pip install ncatbot -U -i https://mirrors.aliyun.com/pypi/simple/
```

## Hello NcatBot

```python
from ncatbot.core import BotClient
bot = BotClient()
api = BotClient.run_blocking(bt_uin="123456", root="234567") # bt_uin 为 bot 的 QQ 号（一般填你的小号）, root 为 机器人管理员的 QQ 号（一般填你的大号）
api.post_private_msg("345678", "Hello NcatBot~meow") # 第一个参数表示发送消息的对象（QQ 号）
```

- NcatBot 组件中内置一个 QQ 客户端，请不要自行在电脑上登录 `bt_uin`。
- 运行后在终端扫码登录 Bot QQ。

## NcatBot 的几种开发范式

### 主动模式（原先叫嵌入模式）

主动模式下，进程的管理权限由你持有。使用 `BotClient.run_blocking()` 方法启动，该方法会返回一个 `BotAPI` 实例，通过该实例可以调用 NcatBot 提供的接口。退出时需要使用 `BotClient.exit()` 方法通知 NcatBot 完成退出操作。再结束进程。

主动模式下，NcatBot 就是一个普通的第三方模块，你可以按照任何你喜欢的方式布局你的项目。


### 插件模式

插件模式下，进程的管理权限由 NcatBot-PluginSystem 持有。使用 `BotClient.run()` 方法启动，调用后进程控制权被转交。启动后可以使用 `Ctrl+C` 正常退出。

插件项目是 NcatBot 的核心, 也是 NcatBot 的主要开发范式. 插件项目有**一定的目录结构要求和命名规范要求**. 与之对应的, 插件项目具有**便利的功能支持**和**丰富的社区生态**, 通过插件项目, 可以开发出功能强大, 分发容易的 QQ 机器人.

### 一些澄清

主动模式和插件模式唯一的区别是**控制权所属**。主动模式下，只要调用了 `BotClient.run_blocking()` 方法，也会加载工作目录下 `plugins/` 中的插件。NcatBot 及其插件被抽象为一个 `BotClient` 实例。


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



---
title: 主动模式最小示例
createTime: 2025/04/28 10:54:49
permalink: /guide/activemode/
---

## 源代码

```python
import time
from ncatbot.core import BotClient

bot = BotClient()
bot.add_private_event_handler(lambda e: e.reply_sync("你好"))

api = bot.run_blocking(bt_uin="123456", root="1234567") # 启动 NcatBot, NcatBot 接口可用时返回 API 实例
api.post_private_msg_sync(12345678, "你好") # 此时 NcatBot 已经启动完成, 可以正常使用接口
time.sleep(1000)

bot.exit()
print("退出")
```

## 代码分析

### 添加回调函数(可选)

```python
bot.add_private_event_handler(lambda e: e.reply_sync("你好"))
```

这里使用了 `BotClient.add_private_event_handler` 添加了一个私聊事件回调函数, 当收到私聊消息时, 会调用这个 `lambda` 匿名函数。

`lambda` 匿名函数中使用了**同步接口**。

也可以用[修饰器语法](./1.%20插件模式最小示例.md#注册回调函数(可选))来添加回调函数。

::: tip
两种添加方式都支持同步和异步回调函数，如果你不熟悉 Python 异步，可以先使用同步语法。同步接口的名称均为 `<异步接口名>_sync`。
:::

### 运行

```python
api = bot.run_blocking(bt_uin="123456", root="1234567") # 启动 NcatBot, NcatBot 接口可用时返回 API 实例
api.post_private_msg_sync(12345678, "你好") # 此时 NcatBot 已经启动完成, 可以正常使用接口, 第一参数为目标 QQ 号。
time.sleep(1000)
```

这里使用了 `BotClient.run_blocking` 启动 NcatBot，它返回一个 `BotAPI` 实例 `api`，可以通过 `api` [调用 NcatBot 接口](../4.%20API%20参考/1.%20API%20调用.md)。

返回 `api` 后，立刻调用 ``api.post_private_msg_sync(12345678, "你好")`` 向用户 12345678 发送一条 `你好` 私聊消息。

`time.sleep(1000)` 用于阻塞主线程，NcatBot 系统运行在另一个线程，可以监听事件，在收到私聊消息时调用回调函数回复 `你好`。

### 退出

```python
bot.exit()
```

主动模式需要自行调用 `BotClient.exit` 退出 NcatBot 系统。不正常退出会导致插件的可持久化数据无法保存。

---
title: NcatBot 生命周期
createTime: 2025/02/08 10:07:54
permalink: /guide/lifespan/
---

## 简介

NcatBot 的生命周期按照时间顺序分为以下几步:

- 引导
- 环境检查
- 连接 NapCat 服务
- 加载插件
- 运行
- 退出

## 引导

1. 导入必要的模块
2. 设置配置项(可选)
3. 创建 BotClient 实例
   1. 检查配置项是否合法, 检查是否已经创建过 BotClient 实例.
   2. 初始化 BotAPI.
   3. 初始化事件总线和内置功能.
   4. 加载功能注册钩子.
   5. 加载权限数据.
4. 注册回调函数(可选)
5. 启动 BotClient 实例

以上过程称为**引导**，用于**引导**的代码称作**引导程序**。

[插件模式引导](./1.%20插件模式最小示例.md#运行)
[主动模式引导](./2.%20主动模式最小示例.md#运行)

## 环境检查

环境检查发生在调用 `BotClient.run()` 或者 `BotClient.run_blocking()` 时，包含以下步骤：

1. **检查 NcatBot 安装**：检查 NcatBot 是否通过 pip 安装。如果开启了 NcatBot 更新检查，则额外检查 NcatBot 是否有新版本可用，如果有新版本则提醒用户更新。
2. **检查 NapCat 服务**： 检查 `ws_uri` 中指定的 NapCat 服务是否能被连接并且可用, 如果可用则跳过**环境检查**、 **NapCat 启动**、**引导登录**，进入**确认登录**。
3. **检查 NapCat 安装**：NapCat 是否被正确安装。
4. **安装或更新 NapCat**：如果 NapCat 未安装，则安装 NapCat。如果开启了 NapCat 更新检查且 NapCat 有新版本可用, 则在用户确认后更新 NapCat。
5. **配置 NapCat**： 自动配置 NapCat 的各项内容, 以便 NcatBot 能正常连接 NapCat 服务. ==如果你自行改动了 NapCat 配置, NcatBot 会直接覆盖掉你的修改==.

## 连接 NapCat 服务

1. **启动 NapCat 服务**：Linux 通过命令行启动无感启动 NapCat。Windows 下会询问是否允许 NapCat 对计算机进行修改, 需要同意后才能启动。
2. **引导登录**：如果之前本地有登录记录，则会使用快速登录。否则需要扫描终端的二维码登录。
3. **确认登录**：通过 NapCat WebUI 接口确认登录结果，如果登录信息不一致，则终止运行并提醒。
4. **连接 NapCat 服务**：使用 WebSocket 协议连接到 NapCat 服务。

## 加载插件

1. 查找工作目录下的 `plugins` 目录, 读取插件 meta 信息.
2. 根据插件 meta 中的依赖信息构建加载拓扑图.
3. 加载每个插件
   1. 加载插件私有可持久化数据(包括配置项).
   2. 调用插件 `BasePlugin.on_load` 函数, 执行自定义初始化操作.
   3. 事件总线注册**插件功能**和**插件配置项**.

## 运行

1. 监听来在 NapCat 的事件并上报. 事件对应的回调函数被调用, 同时事件上报到事件总线.
2. 处理事件
   - 通过 `BotClient` 注册的回调函数对事件做第一次处理。
   - 事件进入事件总线，激活**功能函数**做第二次处理, 调用订阅了该事件的所有**回调函数**做第三次处理。
3. 事件被拦截或者被处理
   - 订阅事件的回调函数可以拦截该事件, 阻止其继续传播.
   - 订阅事件的回调函数可以添加事件的处理结果, 以便和其它部分通信.

## 退出

:::warning
点 X 关闭属于异常退出, 不会触发退出流程。
:::

插件模式按下 `Ctrl+C` 正常退出，或者主动模式调用对应 `BotClient` 实例的 `exit` 方法, 进入退出流程。

1. 保存权限数据.
2. 调用 `BasePlugin._unload_` 函数, 完成自定义卸载操作.
3. 保存插件私有可持久化数据(包括配置项).
4. 关闭 NapCat 服务(可选, 默认不关闭).



---
title: 配置项
createTime: 2025/02/08 13:16:05
permalink: /guide/kfcvme50/
---

本文介绍 NcatBot 的各个配置项和配置项的指定方式.

NcatBot 的配置项通过位于 `ncatbot.utils.config` 中的全局变量 `config` 来保存和指定. 同时也提供了在运行时指定的快速方法.

## 配置项列表

以下给出了所有的配置项及其默认值:

```python
class SetConfig:

    default_root = "123456"
    default_bt_uin = "123456"
    default_ws_uri = "ws://localhost:3001"
    default_webui_uri = "http://localhost:6099"
    default_webui_token = "napcat"

    def __init__(self):
        # 内部状态
        # 可设置状态
        self.root = self.default_root  # root 账号
        self.bt_uin = self.default_bt_uin  # bot 账号
        self.ws_uri = self.default_ws_uri  # ws 地址, 可自定义端口, 默认 3001
        self.webui_uri = self.default_webui_uri  # webui 地址, 可自定义端口, 默认 6099
        self.webui_token = self.default_webui_token  # webui 令牌, 默认 napcat
        self.ws_token = ""  # ws_uri 令牌, 默认留空
        self.ws_listen_ip = "localhost"  # ws 监听 ip, 默认只监听本机
        self.remote_mode = False  # 是否远程模式, 即 NapCat 服务不在本机运行

        """
        如果纯远程模式, 则 NcatBot 不对 NapCat 的行为做任何管理.
        只使用 ws_uri 和 webui_uri 和 NapCat 进行交互, 不会配置启动 NapCat
        """

        # 更新检查
        self.check_napcat_update = False  # 是否检查 napcat 更新
        self.check_ncatbot_update = True  # 是否检查 ncatbot 更新

        # 开发者调试
        self.debug = False  # 是否开启调试模式
        self.skip_ncatbot_install_check = False  # 是否跳过 napcat 安装检查
        self.skip_plugin_load = False  # 是否跳过插件加载

        # NapCat 行为
        self.stop_napcat = False  # NcatBot 下线时是否停止 NapCat
        self.enable_webui_interaction = True  # 是否允许 NcatBot 与 NapCat webui 交互

        """
        如果 enable_webui_interaction 为 False, 则 NcatBot 不会与 NapCat webui 交互
        账号检查, 引导登录等行为均不会发生, 只使用 ws_uri 与 NapCat 交互
        """
```

- `bot_uin`: 就是 **Bot** QQ 号. 这个千万不能填错了喵~
- `root`: **root** QQ 号, 具有超管权限, 一般填你的 QQ 大号.

一般来说除了 `root` 和 `bt_uin` 需要指定外, 其它配置项推荐使用默认值，如果有端口冲突也许需要自行替换。

需要改动 `ws_uri`、 `ws_token`、 `webui_uri` 和 `webui_token` 的情况是 [使用远端 NapCat 接口](../5.%20杂项/2.%20使用远端%20napcat%20接口.md).

## 通过 `BotClient.run` 运行时指定(推荐)

引导程序中, 在 `bot.run()` 时可以添加命名参数来指定大部分配置项, 例如:

```python
bot.run(
    bt_uin="123456", # 注意不是 bot_uin, 这里应该和 config 的成员名一致
    ws_uri="ws://127.0.0.1:3001",
    ws_token="",
    webui_uri="http://127.0.0.1:6099",
    webui_token="napcat",
    check_napcat_update = False, # 不检查 NapCat 更新
    check_ncatbot_update = True, # 检查 NcatBot 更新
)
```

## 在代码里指定配置项(推荐)

部分常用配置项可以在代码里直接指定.

::: warning
由于历史原因, bot_uin 的设置函数名叫 `set_bot_uin` 但变量名叫 `bt_uin`.
:::

```python
from ncatbot.utils import config

config.set_bot_uin("123456")  # 设置 bot qq 号 (必填)
config.set_root("123456")  # 设置 bot 超级管理员账号 (建议填写)
config.set_ws_uri("ws://localhost:3001")  # 设置 napcat websocket server 地址
config.set_ws_token("")  # 设置 token (websocket 的 token)
config.set_webui_uri("http://localhost:6099")  # 设置 napcat webui 地址
config.set_webui_token("napcat")  # 设置 token (webui 的 token)
```

## 通过文件指定配置项

文件指定的配置项优先级较低，可以被其它方式覆盖。

NcatBot 会读取工作目录下 `config.yaml` 中的配置信息，并作为配置项加载。以下是完整配置项：

```yaml
# NcatBot 配置文件

# 基本配置
root: "123456"  # root 账号
bt_uin: "123456"  # bot 账号
ws_uri: "ws://localhost:3001"  # ws 地址
webui_uri: "http://localhost:6099"  # webui 地址
webui_token: "napcat"  # webui 令牌
ws_token: ""  # ws_uri 令牌
ws_listen_ip: "localhost"  # ws 监听 ip, 默认只监听本机
remote_mode: false  # 是否远程模式, 即 NapCat 服务不在本机运行

# 更新检查
check_napcat_update: false  # 是否检查 napcat 更新
check_ncatbot_update: true  # 是否检查 ncatbot 更新

# 开发者调试
debug: false  # 是否开启调试模式
skip_ncatbot_install_check: false  # 是否跳过 napcat 安装检查
skip_plugin_load: false  # 是否跳过插件加载

# 插件加载控制
# 白名单和黑名单互斥，只能设置其中一个
# 如果都不设置，则加载所有插件
# plugin_whitelist:  # 插件白名单，为空表示不启用白名单
#   - "plugin1"
#   - "plugin2"
# plugin_blacklist:  # 插件黑名单，为空表示不启用黑名单
#   - "plugin3"
#   - "plugin4"

# NapCat 行为
stop_napcat: false  # NcatBot 下线时是否停止 NapCat
enable_webui_interaction: true  # 是否允许 NcatBot 与 NapCat webui 交互
report_self_message: false  # 是否报告 Bot 自己的消息
```

## 配置项缺省

如果配置项有缺省(在代码中指定配置项时只指定了一部分), 则缺省的部分会使用==默认配置项==, 默认配置项的值见[配置项列表](#配置项列表).


## 指定配置项的时机

由于我们采用==全局变量==的方式来保存配置项, 所以无论使用哪种方式, 都只需要在代码里指定一次即可.

另外, 由于==创建== bot 实例时将会使用配置项, 因此==配置项指定应该放在创建 bot 实例之前.==




---
title: 回调函数
createTime: 2025/02/07 11:24:25
permalink: /guide/awamzkai/
---

## 什么是回调函数

NcatBot 采用==回调函数==机制来完成事件上报. 当对应事件发生时, NcatBot 会调用这些函数, 并将事件相关信息作为参数传递.

NcatBot 的所有回调函数都**只有一个参数**, 用于传递所发生事件的信息, 典型的回调函数如下:

```python
def on_xxx_event(msg: BaseMessage): # 同步回调函数
    do_something()
```

从 3.7.0 版本开始, 所有回调函数可以定义为同步函数, 但仍然建议使用异步回调函数.

## 注册回调函数

回调函数可以通过两种方式注册.

### 通过修饰器注册回调函数

在回调函数的上一行, 加上**回调函数注册修饰器**(`@bot.xxxx_event()`)来明确回调函数所绑定的 `BotClient` 实例以及**事件类型**.

::: code-tabs
@tab python
```python
@bot.private_event() # 为 bot 的私聊事件注册回调函数
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)
    if msg.raw_message == '测试':
        await bot.api.post_private_msg(msg.user_id, text="NcatBot 测试成功喵~")
```
:::

Ncatbot 对回调函数的名字没有要求, 但按照习惯一般命名为 `on_[事件类型]`。

回调函数注册修饰器一共有四个，分别是：

- `BotClient.group_event()`
- `BotClient.private_event()`
- `BotClient.notice_event()`
- `BotClient.request_event()`

它们所管辖的事件参考[回调函数参数](#回调函数参数)。

::: tip
注意修饰器的写法，由于历史原因，应写作 `bot.group_event()` 而不是 `bot.group_event`。
:::

### 通过成员函数添加回调函数(推荐)

`BotClient` 具有以下成员函数, 用于为相应事件添加回调函数:

```python
class BotClient:
    def add_startup_handler(self, func): # 添加启动事件回调函数, 当 Bot 上线(能够收发消息时) 触发
        pass # 所有实现略去

    def add_group_event_handler(self, func): # 添加群聊事件回调函数, 当收到群聊消息时触发
        pass

    def add_private_event_handler(self, func): # 添加私聊事件回调函数, 当收到私聊消息时触发
        pass

    def add_notice_event_handler(self, func): # 添加通知事件回调函数, 当收到通知消息时触发
        pass

    def add_request_event_handler(self, func): # 添加请求事件回调函数, 当收到请求消息时触发
        pass
```

通过修饰器注册参数时, 由于 Python 传参机制的问题, 无法正确调用类的成员函数. 使用 `BotClient` 的成员函数添加回调函数, 可以正确调用类的成员函数并传递实例参数.

### Bot 启动事件的回调函数

特别的, Bot 启动事件的回调函数只支持通过成员函数添加.

例如:

```python
bot.add_startup_event_handler(lambda: print("NcatBot 启动成功喵~"))
bot.run()
```

将在 Bot 登录完成可以收发消息后输出 `NcatBot 启动成功喵~`.

## 回调函数参数

所有的回调函数调用时**只传递一个参数**, 对于类的成员函数, 使用 `BotClient.add_xxx_handler` 添加时会自动绑定 `self` 参数, 因此能够正确调用.

调用回调函数时的传参描述了事件的详细信息, 那么如何解析这个参数呢?

### Startup 类型回调函数参数

Startup 类型事件**不传参**, 插件事件的 `Event.data` 为 None.

### Message 类型回调函数参数

此类型包括==群聊消息==和==私聊消息==.

::: code-tabs
@tab python
```python
@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)
```
:::

下面给出简介, 详细信息移步[解析消息](3.%20解析消息.md)

调用时的传参 `msg` 是一个 `BaseMessage` 的派生类, 其成员均符合 [OneBot11 标准](https://github.com/botuniverse/onebot-11).

`msg` 的主要成员表如下：

- `msg.user_id: Union(str, int)`:  消息发送者 QQ 号.
- `msg.group_id: Union(str, int)`:  消息来源群群号(如果是群聊消息).
- `msg.message_id: Union(str, int)`:  消息 ID.
- `msg.message_type: str`:  消息类型(`group`/`private`), 群聊或私聊
- `msg.raw_message: str`: 符合 OneBot11 标准的==消息字符串==, 需手动解析, 不建议使用.
- `msg.sender: Sender`:  消息发送者实例。
- `msg.message: List[dict]`: 符合 OneBot11 标准的==数组格式消息==, 推荐使用它来进行逻辑判断.
- `msg.self_id: Union(str, int)`: 机器人 QQ 号.
- `msg.time: int`: 事件发生时间戳.

### Notice 类型回调函数参数

::: warning
Notice 事件未来可能被更加精细粒度的事件替代.
:::

传入的 `msg` 是一个 `dict`, 支持的操作见 [NapCat 文档](https://napneko.github.io/develop/event#notice-%E4%BA%8B%E4%BB%B6).

以下给出几个常见的事件:

#### 私聊消息撤回

参数示例及其解释:

```python
msg = {
    "time": 1743865655, # UNIX 时间戳
    "self_id": 123456, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "friend_recall", # 通知类型, 消息撤回固定为 `friend_recall`
    "user_id": 12345678, # 撤回者 QQ 号
    "message_id": 680308254 # 撤回的消息 ID
}
```

#### 头像双击动作

参数示例及其解释:

```python
msg = {
    "time": 1743865776, # UNIX 时间戳
    "self_id": 123456, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "poke", # 通知类型, 头像双击动作固定为 `poke`
    "sub_type": "double", # 事件子类型, 头像双击动作固定为 `double`
    "target_id": 123456, # 被双击的 QQ 号
    "user_id": 12345678, # 操作者 QQ 号
    "raw_info": [
        {'col': '1', 'nm': '', 'type': 'qq', 'uid': 'u_-ev35gBX6zud3K0yA_nskA'},  # 发送者的 QQ 链接
        {'jp': 'https://zb.vip.qq.com/v2/pages/nudgeMall?_wv=2&actionId=0', 'src': 'http://tianquan.gtimg.cn/nudgeaction/item/0/expression.jpg', 'type': 'img'},  # 图标
        {'txt': '戳了戳', 'type': 'nor'},  # 文本
        {'col': '1', 'nm': '', 'tp': '0', 'type': 'qq', 'uid': 'u_sbV_ToZLelyJ73PGan2F-A'}, # 操作者的 QQ 链接
        {'txt': '', 'type': 'nor'} # 我不知道这是啥
    ], 
    'sender_id': 12345678
}
```

#### 私聊输入状态更新

参数示例及其解释:


```python
msg = {
    "time": 1743866213, # UNIX 时间戳
    "self_id": 123456, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "notify", # 通知类型, 输入状态更新固定为 `notify`
    "sub_type": "input_status", # 事件子类型, 输入状态更新固定为 `input_status`
    "status_text": "对方正在输入...", # 输入状态文本
    "event_type": 2, # 输入状态类型, 1 为开始输入, 2 为继续输入
    "user_id": 12345678, # 操作者 QQ 号
    "group_id": 0 # 群号
}
```

#### 群成员增加

参数示例及其解释:

```python
msg = {
    "time": 1609478707, # UNIX 时间戳
    "self_id": 123456789, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "group_increase", # 通知类型, 加群通知固定为 `group_increase`
    "sub_type": "approve", # 事件子类型, 管理员同意为 `approve`, 管理员邀请为 `invite`
    "group_id": 123456789, # 群号
    "operator_id": 987654321, # 操作者 QQ 号
    "user_id": 987654321, # 加入者 QQ 号
}
```

#### 群成员减少

参数示例及其解释:

```python
msg = {
    "time": 1609478707, # UNIX 时间戳
    "self_id": 123456789, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "group_decrease", # 通知类型, 群成员减少固定为 `group_decrease`
    "sub_type": "leave", # 事件子类型, 主动退群为 `leave`, 被踢为 `kick`, Bot 被踢为 `kick_me`
    "group_id": 123456789, # 群号
    "operator_id": 987654321, # 操作者 QQ 号
    "user_id": 987654321, # 离开者 QQ 号
}
```

#### 禁言相关


参数示例及其解释:

```python
msg = {
    "time": 1609478707, # UNIX 时间戳
    "self_id": 123456789, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "group_ban", # 通知类型, 群禁言固定为 `group_ban`
    "sub_type": "ban", # 事件子类型, 群禁言固定为 `ban`, 解除禁言固定为 `lift_ban`
    "group_id": 123456789, # 群号
    "operator_id": 987654321, # 操作者 QQ 号
    "user_id": 987654321, # 被禁言 QQ 号
    "duration": 300 # 禁言时长, 单位秒
}
```

#### 群文件上传

传入的参数示例及其解释:

```python
msg = {
    "time": 1743864886, # UNIX 时间戳
    "self_id": 123456, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "group_id": 701784439, # 群号
    "user_id": 12345678, # 上传者 QQ 号
    "file": {
        "id": "24f852ab9a17d7d5dc790b9262092189", # 文件 ID
        "name": "文件名", # 文件名
        "size": 114514, # 文件大小
        "busid": 114 # 文件 busid
    }
}
```

要获取上传的文件, 需要使用 `BotAPI.get_file()` 方法, 传入 `msg["file"]["id"]` 作为参数即可.

[BotAPI.get_file() 用法](../4.%20API%20参考/2.%20主要%20API%20及其使用.md#获取文件).

#### 群消息撤回


传入的参数示例及其解释:

```python
msg = {
    "time": 1743865071, # UNIX 时间戳
    "self_id": 123456, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "group_id": 701784439, # 群号
    "user_id": 12345678, # 撤回消息发送者 QQ 号
    "notice_type": "group_recall" # 通知类型, 撤回消息固定为 `group_recall`
    "operator_id": 12345678, # 操作者 QQ 号
    "message_id": 364573752 # 撤回的消息 ID
}
```


### Request 类型回调函数参数

Request 类型一般用于**处理好友添加请求**或者**处理群聊加入请求**。

```python
@bot.request_event()
def on_request(msg: Request):
    msg.reply_sync(False, "No") # 拒绝请求
```

传入的 `msg` 是一个 `ncatbot.core.request.Request` 对象，其原型如下：

```python
class Request():
    """请求事件, 部分实现省略"""
    __slots__ = (
        "time", # UNIX 时间戳
        "self_id", # 机器人 QQ 号
        "request_type", # 请求类型, 加群为 `group`, 加好友为 `friend`
        "sub_type", # 子类型, 支持 `add` 和 `invite`, 前者是主动添加, 后者是接受邀请
        "group_id", # 群聊 QQ 号, 如果是好友申请, 为 None
        "user_id", # 请求者 QQ 号
        "comment", # 验证信息
        "flag", # flag, 通过请求时应该提供
    )
    
    def is_friend_add(self):
        return self.request_type == "friend"
        
    def is_group_add(self):
        return self.request_type == "group"
    
    async def reply(self, accept: bool = True, comment: str = ""):
        pass      
    
    def reply_sync(self, accept: bool = True, comment: str = ""):
        pass
```

一般直接使用 `reply` 或者 `reply_sync` 方法处理即可.

[处理好友和加群请求](../8.%20实际项目参考/教程项目/处理好友请求和加群请求.md)

---
title: 事件上报
createTime: 2025/02/07 11:24:25
permalink: /guide/uxut5u3v/
---

## 事件

NcatBot 的事件分两类, 一类是由 NapCat 上报的**官方事件**, 一类是由插件上报的**自定义事件**

每种事件有一个唯一的**事件类型**, 事件类型是一个用 `.` 分割的多级字符串.

### 官方事件类型

官方事件类型的字面量如下:

```python
OFFICIAL_GROUP_MESSAGE_EVENT = "ncatbot.group_message_event" # group_event
OFFICIAL_PRIVATE_MESSAGE_EVENT = "ncatbot.private_message_event" # private_event
OFFICIAL_REQUEST_EVENT = "ncatbot.request_event" # request_event
OFFICIAL_NOTICE_EVENT = "ncatbot.notice_event" # notice_event
OFFICIAL_STARUP_EVENT = "ncatbot.starup_event" # starup_event
```

### 官方事件发生的条件

- `group_event`: 收到**群聊消息时**发生, 效果是**触发所有绑定的回调函数**并**上报到事件总线**.
  - 传入回调函数的参数是 `GroupMessage` 实例.
  - 传入事件总线的参数是 `Event` 实例, 所带的数据(`Event.data`)为 `GroupMessage` 实例.
- `private_event`: 收到**私聊消息**时发生, 其余同上, 区别是 `GroupMessage` 换为 `PrivateMessage`.
- `notice_event`: 收到**通知信息**时发生, 效果是**触发所有绑定的回调函数**并**上报到事件总线**.
  - 传入回调函数的参数是一个 `dict`.
  - 传入事件总线的参数 `Event` 实例, 所带的数据(`Event.data`)为 `dict`.
- `request_event`: 收到**请求信息**时发生.
  - 传入回调函数的参数是 `Request` 实例。
  - 传入事件总线的参数 `Event` 实例, 所带的数据(`Event.data`)为 `Request` 实例.
- `starup_event`: API 可用时发生，无参数。

具体参数格式查看[回调函数参数](./1.%20回调函数.md#回调函数参数)

### 自定义事件类型

参阅[事件的发布和订阅](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.1%20事件的发布和订阅.md).

## 官方事件上报

### 事件上报代码

参阅[事件的发布和订阅](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.1%20事件的发布和订阅.md) 以及下面的源代码.

::: code-tabs
@tab python
```python
async def handle_group_event(self, msg: dict):
    msg: GroupMessage = GroupMessage(msg)
    for handler, types in self._group_event_handlers:
        if types is None or any(i["type"] in types for i in msg.message):
            await handler(msg)
    await self.plugin_sys.event_bus.publish_async(
        Event(OFFICIAL_GROUP_MESSAGE_EVENT, msg, EventSource(msg.user_id, msg.group_id),)
    )
async def handle_notice_event(self, msg: dict):
    _log.debug(msg)
    for handler in self._notice_event_handlers:
        await handler(msg)
    await self.plugin_sys.event_bus.publish_async(Event(OFFICIAL_NOTICE_EVENT, msg))
```
:::

### 四种消息的定义

- 群聊消息: 略
- 私聊消息: 略
- 通知消息: 消息撤回，头像双击动作，私聊输入状态更新，群成员变化，群成员减少，禁言相关。
- 请求消息: 加好友请求和加群请求。


## 自定义事件上报

参阅[事件的发布和订阅](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.1%20事件的发布和订阅.md)

---
title: 解析消息
createTime: 2025/04/05 23:21:39
permalink: /guide/parsemsg/
---

## 消息类

此类型包括==群聊消息==和==私聊消息==.

群聊消息类为 `GroupMessage` 类, 私聊消息类为 `PrivateMessage` 类, 它们均为 `BaseMessage` 的派生类. 下面只介绍 `BaseMessage` 类.

我们称 `BaseMessage` 实例为**消息**.

三个类的具体代码位置为 `ncatbot.core.message`.

[查看简介](1.%20回调函数.md#Message%20类型回调函数参数).

### 主要成员

- `msg.user_id: Union(str, int)`:  消息发送者 QQ 号.
- `msg.group_id: Union(str, int)`:  消息来源群群号(如果是群聊消息).
- `msg.message_id: Union(str, int)`:  消息 ID.
- `msg.message_type: str`:  消息类型(`group`/`private`), 群聊或私聊.
- `msg.raw_message: str`: 符合 OneBot11 标准的==消息字符串==, 需手动解析, 不建议使用.
- `msg.sender: Sender`:  消息发送者实例，详细信息将在下面给出。
- `msg.message: List[dict]`: 符合 OneBot11 标准的==数组格式消息==, 推荐使用它来进行逻辑判断, 详细解析方式将在下面给出。
- `msg.self_id: Union(str, int)`: 机器人 QQ 号.
- `msg.time: int`: 事件发生时间戳.

### 其它成员

- `msg.sub_type: str`:  消息子类型(`friend`, `group`, `other`).
- `msg.sub_type: str`:  消息子类型(`friend`, `group`, `other`).
- `msg.message_format: str`:  消息格式(`string`/`json`/`markdown`), 作用不明
- `msg.raw_message: str`: 符合 OneBot11 标准的==消息字符串==, 需手动解析, 不建议使用.


## 内置方法

### `BaseMessage.reply`

用于[快捷调用 API](../4.%20API%20参考/2.%20主要%20API%20及其使用.md#发送消息) 回复消息。

该接口有同步版本，`reply_sync`。


## sender 成员

`BaseMessage` 类的 `sender` 成员为 `Sender` 类, `Sender` 类包含以下成员:

```python
msg.sender.user_id = "123456" # 消息发送者 QQ 号.
msg.sender.nickname = "昵称" # 消息发送者 QQ 昵称.
msg.sender.card = "群昵称" # 消息发送者群卡片昵称(如果是群聊消息).
```    

## message 成员

::: warning
接下来的叙述中包含多重定语和嵌套递归定义, 容易引起混淆. 请注意区分**消息段**、**消息**、**消息段列表**、**消息列表**的定义。区分**格式**和**类型**的区别。
:::

`BaseMessage.message` 是一个字典的列表(`list[dict]`), 我们称它为**消息段列表**, 称 `dict` 为**消息段**.

**消息段列表**有不同种类, 具体如下:

### 组合类型消息段列表

**组合类型消息段列表**可以包含除了 `forward` 类型**消息段**之外的其它**任意多个任意消息段的有序组合**。

组合类型消息段列表包含以下几种类型消息段的组合.

#### text 类型消息段

```python
msg.message = [
    {
        'type': 'text', 
        'data': {
            'text': '123456'
        }
    }
]
```

#### at 类型消息段

```python
msg.message = [
    {
        'type': 'at', 
        'data': {
            'qq': 12345678
        }
    }
]
```

当 `qq` 字段为 `all` 时, 表示@全体成员.

#### reply 类型消息段

```python
msg.message = [
    {
        'type': 'reply', 
        'data': {
            'id': '671936880', # 表示所回复的消息的 id
        }
    }
]
```

当包含 `reply` 类型消息段时, `reply` 消息段一定位于消息段列表的第一个位置.

#### face 类型消息段

```python
msg.message = [
    {
        'type': 'face', 
        'data': {
            'id': 277 # 表示表情的 id
            'raw': {
                'faceIndex': 277, # 表情 id
                'faceText': '[汪汪]',  # 表情描述文本
                'faceType': 2 # 表情类型, 其实我也不知道什么意思
            }
        }
    }
]
```

#### image 类型消息段

```python
msg.message = [{
    'type': 'image', 
    'data': {
        'file': '17F7844DD051F03B0CF2198CAAD887A0.jpg' # 文件名, 几乎没用
        'url': 'http://example.com/fndsnajfasndkgjnasjk.jpg' # 图片下载链接, 很重要
        'summary': '[图片]'
    }
}]
```

#### video 类型消息段

```python
msg.message = [{
    'type': 'video', 
    'data': {
        'file': '17F7844DD051F03B0CF2198CAAD887A0.mp4' # 文件名, 几乎没用
        'url': 'http://example.com/fndsnajfasndkgjnasjk' # 视频间接下载链接, 无法直接下载, 也无法直接使用
        'summary': '[视频]'
    }
}]
```
        
视频目前只能通过 `url` 下载源文件后**手动修改后缀名为 `.mp4`**后查看, 未来将实现自动修改和识别.

#### file 类型消息段

```python
msg.message = [
    {
        'type': 'file', 
        'data': {
            'file': '0d7520ca-4b60-4fcd-a87b-581f69da3540.mp4', # 文件名, 几乎没用
            'file_id': '9423e3b5f95b09df4de35ea1c783c368_feec4190-1243-11f0-bf38-8307ae91f46d', # 文件 id, 很有用
            'file_size': '1177324' # 文件大小, 几乎没用
        }
    }
]
```

通过 `file_id` 可以获取更加细节的文件信息, 接口为 [get_file](../4.%20API%20参考/2.%20主要%20API%20及其使用.md#获取文件)。

### 合并转发消息段列表

**合并转发消息段列表**表表示一个**合并转发消息**，或者说是**消息卡片**。

**合并转发消息段列表**一定只包含**一个消息段**，这个消息段称为 **forward 类型消息段**，具有两种**格式**。

#### 消息 ID 格式

```python
msg.message = [{'type': 'forward', 'data': {'id': '7489856252632721587'}}]
```

这个很长的 `id` 字段**没用**, 如果要获取转发消息的内容, 必须使用 message 成员的 `message_id` 字段和 [get_msg 方法]() 可以获取到消息的详细信息, 获取的数据如下：

```python
result = {
    # 其它字段略去, 只关注 'message' 字段, 由于该类型是 `forward` 类型, 所以消息段列表 `message` 只有它一个成员.
    'message': [
        {
            'type': 'forward', 
            'data': {
                'id': '7489858069394438109', 
                'content': [
                    # 格式参考下面
                ]
            }
        }
    ]
}
```

提取 `result["message"]` 得到的结果被定义为 **content 格式的 forward 类型消息段**.


#### content 格式

格式如下:

```python
msg.message = [
    {
        'type': 'forward', 
        'data': {
            'id': '7489858069394438109', 
            'content': [
                {
                        'self_id': 123456,
                        'user_id': 12345678, 
                        'time': 1743869088, 
                        'message_id': 671936880, 
                        'message_seq': 671936880, 
                        'real_id': 671936880, 
                        'real_seq': '0', 
                        'message_type': 'private', 
                        'sender': {'user_id': 12345678, 'nickname': '幻影彭', 'card': ''}, 'raw_message': '123456', 
                        'font': 14, 
                        'sub_type': 'friend', 
                        'message': [{'type': 'text', 'data': {'text': '123456'}}], 
                        'message_format': 'array', 
                        'post_type': 'message'
                    }, {
                         'message': [{'type': 'text', 'data': {'text': '666666'}}]
                    }, {
                        'message': [{'type': 'text', 'data': {'text': '测试'}}],
                    }
            ]
        }
    }
]
```

一个 **content 格式 forward 类型消息段** 主要包含一份 `data['content']`（`msg.message[0]['data']['content']`），它是一个 `list[dict]`, `dict` 表示一个**消息**(不是**消息段**), 这个 `dict` 的结构和 `BaseMessage.__dict__` 基本一致, `data['content']` 被称为**消息列表**.

**消息列表**->**消息**->**消息段列表**->**消息段**

而 `data['content']` 里包含的第四级**消息段**又可以是 **content 格式的 forward 类型的消息段**, 所以说, 这里的定义是**递归的**.

上面的示例省略了消息列表中后两条消息的其它数据, 只保留了 `message` 字段. 可以对比一下一条消息的 key 以及 `BaseMessage` 的 成员列表.

注意, 这里的**消息段**所带的 `data['content']` 里面也可以包含带有 forward 类型的消息段的消息, 这和 forward 作为**消息段列表**中的唯一元素不矛盾, 因为 `data['content']` 本质是**消息列表**, 而不是**消息段列表**. 但是一条**消息**所带的**消息段列表**中, 如果出现了 `forward` 类型的消息段, 那么该消息段就是唯一的消息段.


## 参考资料

- [OneBot11 消息事件](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/event/message.md)
- [OneBot11 消息段](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/message/segment.md)
- [OneBot11 数组格式消息](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/message/array.md)
- [NapCat 消息事件](https://napneko.github.io/develop/event#message-%E4%BA%8B%E4%BB%B6)

---
title: API 调用
createTime: 2025/01/23 20:00:05
permalink: /guide/p8aun9nh/
---

NcatBot 推荐使用异步 API, 但从 3.7.0 版本起, 所有 API 均已经提供同步支持.

==[典型反应](https://github.com/liyihao1110/ncatbot/discussions/46)==

::: tip
如果你此前未了解异步, 可以先使用同步方法, 过程中逐渐学习异步.
:::

### 介绍

NcatBot 提供 API 调用, 用于完成各种操作.

提供 API 的类是 `BotAPI`. `BotClient` 类的成员 `api`, 也就是示例代码中的 `bot.api`, 就是一个 `BotAPI` 实例.


### 调用 API 接口

在回调函数中, 调用 `bot.api` 的成员方法即可完成回复.

注意, 当使用 `bot.api` 中的异步方法, 调用时==必须加上 `await` 关键字==.

所有的同步方法均以 `xxx_sync()` 结尾, 如果一个方法的异步版本是 `bot.api.xxx()`, 那么异步版本的函数名是 `bot.api.xxx_async()`. 典例是 `post_group_msg()` 和 `post_group_msg_sync()`.

::: warning
任何形如 `bot.api.xxx()` 的调用都是错误用法, 只有 `await bot.api.xxx()` 或者 `bot.api.xxx_sync()` 才是正确用法.
:::

::: code-tabs
@tab python

```python
@bot.private_event()
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)
    if msg.raw_message == '测试':
        await bot.api.post_private_msg(msg.user_id, text="NcatBot 异步调用测试成功喵~")
        bot.api.post_private_msg_sync(msg.user_id, text="NcatBot 同步调用测试成功喵~")
```
:::


`bot.api` 还有其它成员方法, 用于完成其它类型的操作, 例如加群审核等, 请参考 [主要 API 及其使用](../4.%20API%20参考/2.%20主要%20API%20及其使用.md) 和 [其它 API 及其使用](../4.%20API%20参考/3.%20其它%20API%20介绍.md.md)

### 同步回调函数

3.7.0 版本后, 大部分回调函数可以被定义为同步回调函数, 同步回调函数中**禁止调用异步 API**.

---
title:  主要 API 及其使用
createTime: 2025/02/09 15:22:54
permalink: /guide/f34xj8pk/
---

## 发送简单消息

单纯的图片，@，回复，QQ 表情等，都叫简单消息。

### 纯文本消息

```python
bot.api.post_group_msg_sync(group_id=123456, text="喵喵喵~") # 注意要用同步的方法
bot.api.post_group_msg_sync(group_id=123456, text="喵喵喵~[CQ:at,qq=123456], [CQ:face,id=123]")
bot.api.post_group_msg_sync(group_id=123456, text="[CQ:image,summary=[图片],url=https://foruda.gitee.com/images/1737622167903015509/9f9590eb_13790314.png")
```

没错，纯文本部分支持 CQ 码，支持以下 CQ 码：
- `[CQ:at,qq=123456]` 用于 @ 某人
- `[CQ:face,id=123]` 用于发送 QQ 表情
- `[CQ:image,summary=[图片],url=https://foruda.gitee.com/images/1737622167903015509/9f9590eb_13790314.png]` 用于发送图片
- `[CQ:reply,id=123456]` 用于回复某条消息

### 命名参数发送消息

命名参数如下:

- `text: str`: 文本消息.
- `face: int`: QQ 表情.
- `json: str`: JSON 消息.
- `markdown: str`: Markdown 消息.
- `at: Union[int, str]`: @ 某人.
- `reply: Union[int, str]`: 回复消息.
- `music: Union[list, dict]`: 音乐分享.
- `dice: bool`: 骰子.
- `rps: bool`: 猜拳.
- `image: str`: 图片, 支持类型同 MessageChain Image.

命名参数构造的消息==不区分顺序==, 一般只使用 `at` 消息和至多一个其它类型.

通过在函数中指定对应命名参数可以发送对应消息.

::: code-tabs
@tab python
```python
await bot.api.post_group_msg(group_id=123456, text="喵喵喵~", reply=13579)
await msg.reply(face=123, at=1234567)
```
:::

### 示例

示例调用: `await bot.api.post_group_msg(123456789, "你好")`: 发送一句 "你好".

示例调用: `await bot.api.post_group_msg(123456789, "你好呀", at=123456)`: 发送一句 "你好呀" 并 @ QQ 号为 123456 的用户.

示例调用: `await bot.api.post_group_msg(123456789, "你好呀", reply=13579)`: 向 id 为 13579 的消息回复 "你好呀".

示例调用: `await bot.api.post_group_msg(123456789, image="https://example.com/meow.jpg")`: 发送一张图片.

### 一般建议

- 无复杂顺序组合的文本采用本方式发送
- 有复杂顺序组合的消息采用[消息链](#通过-messagechain-发送消息)发送.


## 通过 MessageChain 发送消息

MessageChain 这个词是不是很熟悉呢?

没错, 就是从 mirai 处~~抄~~借鉴过来的.


### 导入 Message Chain 有关类

```python
from ncatbot.core import (
    MessageChain,  # 消息链，用于组合多个消息元素
    Text,          # 文本消息
    Reply,         # 回复消息
    At,            # @某人
    AtAll,         # @全体成员
    Dice,          # 骰子
    Face,          # QQ表情
    Image,         # 图片
    Json,          # JSON消息
    Music,         # 音乐分享 (网易云, QQ 音乐等)
    CustomMusic,   # 自定义音乐分享
    Record,        # 语音
    Rps,           # 猜拳
    Video,         # 视频
    File,          # 文件（已弃用）
)
```

当然, 你不需要导入所有类, 只需要导入你需要的类即可. 不过就算是笨蛋也知道 `MessageChain` 是必须的吧...

### 使用 MessageChain 构造消息

见下例:

```python
# 构造消息链
@bot.group_event()
async def on_group_message(msg: GroupMessage):
    if msg.raw_message == "测试":
        message = MessageChain([
            "喵喵喵~",
            Text("你好"),
            At(123456),
            Image("meow.jpg"),
            [
                Face(123),
                Image("https://example.com/meow.jpg"),
                Reply(13579),
            ]
        ])
        message += MessageChain(["咕咕咕"])
        message = message + At(234567)
        await bot.api.post_group_msg(group_id=123456, rtf=message)
```

这里展示了 `MessageChain` 大部分常见的用法, 具体的:

- 列表化构造, 构造时传入一个列表, 列表中的元素是列表或者 Element 类。

- 通过 `+` 运算符连接, `MessageChain` 对==可发送对象==均可**右加**.

- 单纯文本可以不使用 `Element` 类, 直接传入字符串即可.

- CQ 码可以混入文本使用。

*可发送对象: `MessageChain`, `Element`, `str`.*

函数参数中指定命名参数 `rtf` 为一个 `MessageChain` 实例即可发送.

::: code-tabs
@tab python
```python
await bot.api.post_group_msg(group_id=123456, rtf=message)
await msg.reply(rtf=message)
```
:::

### 构造 Element

::: warning
当前版本中, `Video`, `Record` 两个类的支持可能存在问题, 建议使用**上传文件**的方式发送这两类消息.
:::

- `Text`: 传入一个字符串, 构造文本消息.
- `Reply`: 传入一个消息 ID, 指定回复消息, 多条 `Reply` 只生效第一条.
- `At`: 传入一个 QQ 号, 构造 @ 某人消息.
- `AtAll`: 构造 @ 全体消息.
- `Dice`: 构造一个骰子消息, 和表情一样, **不支持和其它元素混合发送**.
- `Face`: 传入一个 QQ 表情 ID, 构造 QQ 表情消息.
- `Image`: 传入一个图片**字符串**, 构造图片消息, 图片支持:
  - 本地路径(只建议==绝对路径==)
  - URL
  - Base64 编码
- `Json`: 传入一个 JSON 字符串, 构造 JSON 消息.
- `Music`: 传入一个平台音乐分享, 构造音乐分享消息, **不支持和其它元素混合发送**:
  - type: 平台类型(qq/163/kugou/migu/kuwo)
  - id: 音乐ID
- `CustomMusic`: 自定义音乐, 使用字典格式, 需包含以下字段, **不支持和其它元素混合发送**:
  - url: 跳转链接
  - audio: 音频链接
  - title: 标题
  - image: 封面图 (可选)
  - singer: 歌手名 (可选)
- `Record`: 传入一个语音文件, 构造语音消息.
- `Rps`: 构造猜拳消息, 也和表情一样, **不支持和其它元素混合发送**
- `Video`: 传入一个视频字符串, 构造视频消息, 支持:
  - 本地路径(只建议==绝对路径==)
  - URL
- `File`: 传入一个文件, 构造文件消息.（==已弃用=={.warning}）
  - 本地路径(只建议==绝对路径==)


## 与消息有关的函数

能够发送消息的函数一共有三个, 分别是:

- `BotAPI.post_group_msg()`
- `BotAPI.post_private_msg()`
- `BaseMessage.reply()`

其中，`BaseMessage.reply()` 是 `BotAPI.post_xxx_msg()` 的语法糖, 所支持的参数和 `BotAPI.post_xxx_msg()` 基本一致。

`reply` 在群聊中会自动引用 `GroupMessage` 对应的消息，大部分时候使用 `BaseMessage.reply()` 会更方便。

*下文中, 发送私聊消息和发送群聊消息的唯一区别是 `group_id` 变为 `user_id`, 故不重复举例.*

::: warning
再次提醒, `BotAPI.post_xxx_msg()` 和 `BaseMessage.reply()` 是==异步函数==。调用时要么 `await`，即 `await BotAPI.post_xxx_msg()`；要么用同步，即 `BotAPI.post_xxx_msg_sync()`。
:::

函数原型位于[其它 API 介绍](./3.%20其它%20API%20介绍.md)。

## 上传文件

由于 NapCat 的一些原因, 发送视频建议以上传文件的形式进行.

### 通过文件消息发送

#### 函数原型

[此处搜索 post_group_file](./3.%20其它%20API%20介绍.md)

#### 参数

`image`, `video`, `record`, `file`, `markdown` **五个参数只能选一个不为 `None`**.

- `image`: 支持本地路径(只建议==绝对路径==), URL, Base64 编码.
- `video`: 支持本地路径(只建议==绝对路径==), URL.
- `record`: 支持本地路径(只建议==绝对路径==), URL.
- `file`: 支持本地路径(只建议==绝对路径==), URL.
- `markdown`: 暂未支持.


### 通过专用上传接口发送

一般来说私聊文件会直接法文件消息, 群文件需要指定上传到固定文件夹时可用这个接口.

专用接口为 `upload_group_file`.

#### 函数原型

[此处搜索 upload_group_file](./3.%20其它%20API%20介绍.md)

#### 参数

- `group_id`: 群号.
- `file`: 文件路径, 支持本地绝对路径或者 URL.
- `name`: 文件名.
- `folder_id`: 文件夹 ID, 参考[这里](#get_group_root_files)可获取.


## 获取文件

文件消息中一般不提供文件的下载链接, 需要通过 `get_file` 方法传入 `file_id` 来请求下载链接, 也就是说, 获取文件的前提是获取 `file_id`。 

### 通过 `file_id` 获取文件下载链接

使用 `BotAPI.get_file` 方法传入 `file_id` 即可获取消息的详细信息, 用法可以参考[示例](#示例)

返回值是一个 `dict` 类型, 示例如下:

```python
result = {
  "status": "ok",
  "data": {
    "file": "D:\\TencentFiles\\NapCat\\temp\\9f223e466 (1).txt", # 没啥用
    "url": "D:\\TencentFiles\\NapCat\\temp\\9f223e466 (1).txt", # url 指示文件的获取方式，可能是一个本地地址也可能是一个网络地址
    "file_size": "35",
    "file_name": "9f223e466.txt"
    },
}
```

::: warning
很多时候返回的 url 是一个本地路径，因为已经自动下载较小的文件到本地。如果 NapCat 和 NcatBot 不在同一台机器，还需要做额外的处理。
:::

### 文件直接被发送

参考[解析消息](../3.%20事件处理/3.%20解析消息.md#file-类型消息段)来获取一条消息中的 `file_id`.

### 已知文件位于某个群的群文件

通过 `get_group_root_files` 获取群文件根目录列表. 通过 `get_group_files_by_folder` 获取某个目录的列表.

如果文件位于根目录, 那么 `get_group_root_files` 的返回值的 `data` 中会带有对应的 `file_name` 和 `file_id`. 如果文件位于某个子目录, 那么 `get_group_files_by_folder` 的返回值的 `data` 中会带有对应的 `file_name` 和 `file_id`.

不知道文件位于哪个目录时, 可以通过以上两个函数来遍历获取.

#### get_group_root_files

返回指定群聊, 群文件根目录下所有文件和目录的信息.

::: details 返回值示例（省略了部分不重要的数据，如果需要，请自行实验）:
```python
result = {
  "status": "ok",
  "data": {
    "files": [
      {
        "group_id": 0,
        "file_id": "string",
        "file_name": "string",
      }
    ],
    "folders": [
      {
        "group_id": 0,
        "folder_id": "string",
        "folder": "string",
        "folder_name": "string",
        "create_time": "string",
      }
    ]
  },
}
```
:::

#### get_group_files_by_folder

返回指定目录所有文件和目录的信息.

::: details 返回值示例:
```python
{
  "status": "ok",
  "data": {
    "files": [
      {
        "group_id": 0,
        "file_id": "string",
        "file_name": "string",
        "size": 0,
      }
    ],
    "folders": [
      {
        "group_id": 0,
        "folder_id": "string",
        "folder": "string",
        "folder_name": "string",
      }
    ]
  },
}
```
:::

### 示例

收到群文件时输出下载链接

```python
@bot.group_event()
def on_group_msg(msg: GroupMessage):
  message_segs = msg.message
  for message_seg in message_segs:
    if message_seg['type'] == "file":
      file_id = message_seg["data"]["file_id"]
      file_source = bot.api.get_file_sync(file_id)['data']['url']
      print("文件的获取途径是:", file_source)
```

如果需要获取的文件已经存在于本地, 则 file_source 是一个绝对路径(有时候会自动下载到本地, 所以有时候不主动下载也会返回路径)


---
title: 其它 API 介绍
createTime: 2025/02/07 11:25:41
permalink: /guide/2dsviohi/
---

## 功能速查

- 获取群昵称: `get_group_card`
- 资料卡点赞: `send_like`
- 上传文件、下载文件、管理群文件: [参考一](2.%20主要%20API%20及其使用.md#上传文件), [参考二](../8.%20实际项目参考/教程项目/上传和获取文件.md)
- 发送消息、发送图片: [完整参考](2.%20主要%20API%20及其使用.md#发送简单消息)
- 戳一戳: `send_poke`
- 转发消息: [多选转发](#发送合并转发消息), 单个转发使用 `forward_friend_single_msg` 或者 `forward_group_single_msg`。
- 踢人: `set_group_kick`
- 禁言: `set_group_ban`，`set_group_whole_ban`。
- 设管理: `set_group_admin`
- 操作精华消息: `set_group_essence`，`delete_essence_msg`。
- 改群名: `set_group_card`
- Bot 退群: `set_group_leave`
- 设置群头衔，群称号: `set_group_special_title`
- 好友请求，加群请求: [参考](../8.%20实际项目参考/教程项目/处理好友请求和加群请求.md)
- 群文件相关: 
  - `create_group_file_folder`
  - `delete_group_file`
  - `delete_group_folder`
  - `get_group_root_files`
  - `get_group_files_by_folder`
  - `get_group_file_url`（如果群文件已经下载过了，可能会返回路径）
- 群签到、群打卡: `set_group_sign`
- AI 语音
  - `get_ai_characters`
  - `send_group_ai_record`
  - `get_ai_record`

## 部分 API 简介 1

::: warning
此部分接口和 NapCat 同名接口参数不一致.
:::

### 处理好友请求和加群请求

[参考](../8.%20实际项目参考/教程项目/处理好友请求和加群请求.md)

### 发送合并转发消息

```python
    async def send_private_forward_msg(
        self, user_id: Union[int, str], messages: list[str]
    ):
    async def send_group_forward_msg(
        self, group_id: Union[int, str], messages: list[str]
    ):
```

- `user_id`: 发送目标 QQ 号.
- `group_id`: 发送目标群号.
- `messages`: 消息 id 构成的列表.
- 返回: 一个 `dict` 表示请求响应结果.

示例调用: `bot.api.send_private_forward_msg(123456789, ["123456789", "987654321"])`.

示例返回(是一个 Python 的 `dict`):

```python
result = {
  "status": "ok",
  "retcode": 0,
  "data": {
    "message_id": "123456789" # 你发出去的这条消息的 message_id
  },
  "message": "这不重要",
  "wording": "这不重要",
  "echo": "这不重要"
}
```

## 部分 API 简介 2

此部分接口和 NapCat 同名接口参数一致.

返回值可以参考 [NapCat API 文档](https://napcat.apifox.cn/226657374e0)

### [设置账号信息](https://napcat.apifox.cn/226657374e0)

```python
    async def set_qq_profile(self, nickname: str, personal_note: str, sex: str):
```

- `nickname`: 昵称.
- `personal_note`: 个性签名.
- `sex`: 性别, 字面量 `男` / `女` 之一.
- 返回: 一个 `dict` 表示请求响应结果.

示例调用: `bot.api.set_qq_profile("彭彭", "咱好想和木子姐姐贴贴啊喵qwq", "女")`.


## 函数原型参考

以下给出 `ncatbot.core.api.api.BotAPI` 的全部成员函数原型.

### 用户接口

```python
    async def set_qq_profile(self, nickname: str, personal_note: str, sex: str):
        """
        :param nickname: 昵称
        :param personal_note: 个性签名
        :param sex: 性别
        :return: 设置账号信息
        """
    
    async def get_user_card(self, user_id: int, phone_number: str):
        """
        :param user_id: QQ号
        :param phone_number: 手机号
        :return: 获取用户名片
        """
    
    async def get_group_card(self, group_id: int, phone_number: str):
        """
        :param group_id: 群号
        :param phone_number: 手机号
        :return: 获取群名片
        """
    
    async def get_share_group_card(self, group_id: str):
        """
        :param group_id: 群号
        :return: 获取群共享名片
        """
    
    async def set_online_status(self, status: str):
        """
        :param status: 在线状态
        :return: 设置在线状态
        """
    
    async def get_friends_with_category(self):
        """
        :return: 获取好友列表
        """
    
    async def set_qq_avatar(self, avatar: str):
        """
        :param avatar: 头像路径，支持本地路径和网络路径
        :return: 设置头像
        """
    
    async def send_like(self, user_id: str, times: int):
        """
        :param user_id: QQ号
        :param times: 次数
        :return: 发送赞
        """
    
    async def create_collection(self, rawdata: str, brief: str):
        """
        :param rawdata: 内容
        :param brief: 标题
        :return: 创建收藏
        """
    
    async def set_friend_add_request(self, flag: str, approve: bool, remark: str):
        """
        :param flag: 请求ID
        :param approve: 是否同意
        :param remark: 备注
        :return: 设置好友请求
        """
    
    async def set_self_long_nick(self, longnick: str):
        """
        :param longnick: 个性签名内容
        :return: 设置个性签名
        """
    
    async def get_stranger_info(self, user_id: Union[int, str]):
        """
        :param user_id: QQ号
        :return: 获取陌生人信息
        """
    
    async def get_friend_list(self, cache: bool):
        """
        :param cache: 是否使用缓存
        :return: 获取好友列表
        """
    
    async def get_profile_like(self):
        """
        :return: 获取个人资料卡点赞数
        """
    
    async def fetch_custom_face(self, count: int):
        """
        :param count: 数量
        :return: 获取收藏表情
        """
    
    async def upload_private_file(self, user_id: Union[int, str], file: str, name: str):
        """
        :param user_id: QQ号
        :param file: 文件路径
        :param name: 文件名
        :return: 上传私聊文件
        """
    
    async def delete_friend(
        self,
        user_id: Union[int, str],
        friend_id: Union[int, str],
        temp_block: bool,
        temp_both_del: bool,
    ):
        """
        :param user_id: QQ号
        :param friend_id: 好友ID
        :param temp_block: 拉黑
        :param temp_both_del: 双向删除
        :return: 删除好友
        """
    
    async def nc_get_user_status(self, user_id: Union[int, str]):
        """
        :param user_id: QQ号
        :return: 获取用户状态
        """
    
    async def get_mini_app_ark(self, app_json: dict):
        """
        :param app_json: 小程序JSON
        :return: 获取小程序ARK
        """
```

### 消息接口

```python
    # TODO: 消息接口
    async def mark_msg_as_read(
        self, group_id: Union[int, str] = None, user_id: Union[int, str] = None
    ):
        """
        :param group_id: 群号,二选一
        :param user_id: QQ号,二选一
        :return: 设置消息已读
        """
    
    async def mark_group_msg_as_read(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 设置群聊已读
        """
    
    async def mark_private_msg_as_read(self, user_id: Union[int, str]):
        """
        :param user_id: QQ号
        :return: 设置私聊已读
        """
    
    async def mark_all_as_read(self):
        """
        :return: 设置所有消息已读
        """
    
    async def delete_msg(self, message_id: Union[int, str]):
        """
        :param message_id: 消息ID
        :return: 删除消息
        """
    
    async def get_msg(self, message_id: Union[int, str]):
        """
        :param message_id: 消息ID
        :return: 获取消息
        """
    
    async def get_image(self, image_id: str):
        """
        :param image_id: 图片ID
        :return: 获取图片消息详情
        """
    
    async def get_record(self, record_id: str, output_type: str = "mp3"):
        """
        :param record_id: 语音ID
        :param output_type: 输出类型，枚举值:mp3 amr wma m4a spx ogg wav flac,默认为mp3
        :return: 获取语音消息详情
        """
    
    async def get_file(self, file_id: str):
        """
        :param file_id: 文件ID
        :return: 获取文件消息详情
        """
    
    async def get_group_msg_history(
        self,
        group_id: Union[int, str],
        message_seq: Union[int, str],
        count: int,
        reverse_order: bool,
    ):
        """
        :param group_id: 群号
        :param message_seq: 消息序号
        :param count: 数量
        :param reverse_order: 是否倒序
        :return: 获取群消息历史记录
        """
    
    async def set_msg_emoji_like(
        self, message_id: Union[int, str], emoji_id: int, emoji_set: bool
    ):
        """
        :param message_id: 消息ID
        :param emoji_id: 表情ID
        :param emoji_set: 设置
        :return: 设置消息表情点赞
        """
    
    async def get_friend_msg_history(
        self,
        user_id: Union[int, str],
        message_seq: Union[int, str],
        count: int,
        reverse_order: bool,
    ):
        """
        :param user_id: QQ号
        :param message_seq: 消息序号
        :param count: 数量
        :param reverse_order: 是否倒序
        :return: 获取好友消息历史记录
        """
    
    async def get_recent_contact(self, count: int):
        """
        获取的最新消息是每个会话最新的消息
        :param count: 会话数量
        :return: 最近消息列表
        """
    
    async def fetch_emoji_like(
        self,
        message_id: Union[int, str],
        emoji_id: str,
        emoji_type: str,
        group_id: Union[int, str] = None,
        user_id: Union[int, str] = None,
        count: int = None,
    ):
        """
        :param message_id: 消息ID
        :param emoji_id: 表情ID
        :param emoji_type: 表情类型
        :param group_id: 群号,二选一
        :param user_id: QQ号,二选一
        :param count: 数量,可选
        :return: 获取贴表情详情
        """
    
    async def get_forward_msg(self, message_id: str):
        """
        :param message_id: 消息ID
        :return: 获取合并转发消息
        """
    
    async def send_poke(
        self, user_id: Union[int, str], group_id: Union[int, str] = None
    ):
        """
        :param user_id: QQ号
        :param group_id: 群号,可选，不填则为私聊
        :return: 发送戳一戳
        """
    
    async def forward_friend_single_msg(
        self, message_id: str, user_id: Union[int, str]
    ):
        """
        :param message_id: 消息ID
        :param user_id: 发送对象QQ号
        :return: 转发好友消息
        """
    
    async def send_private_forward_msg(
        self, user_id: Union[int, str], messages: list[str]
    ):
        """
        :param user_id: 发送对象QQ号
        :param messages: 消息列表
        :return: 合并转发私聊消息
        """
```

### 群组接口

```python
   async def set_group_kick(
        self,
        group_id: Union[int, str],
        user_id: Union[int, str],
        reject_add_request: bool = False,
    ):
        """
        :param group_id: 群号
        :param user_id: QQ号
        :param reject_add_request: 是否群拉黑
        :return: 踢出群成员
        """
    
    async def set_group_ban(
        self, group_id: Union[int, str], user_id: Union[int, str], duration: int
    ):
        """
        :param group_id: 群号
        :param user_id: QQ号
        :param duration: 禁言时长,单位秒,0为取消禁言
        :return: 群组禁言
        """
    
    async def get_group_system_msg(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群系统消息
        """
    
    async def get_essence_msg_list(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取精华消息列表
        """
    
    async def set_group_whole_ban(self, group_id: Union[int, str], enable: bool):
        """
        :param group_id: 群号
        :param enable: 是否禁言
        :return: 群组全员禁言
        """
    
    async def set_group_portrait(self, group_id: Union[int, str], file: str):
        """
        :param group_id: 群号
        :param file: 文件路径,支持网络路径和本地路径
        :return: 设置群头像
        """
    
    async def set_group_admin(
        self, group_id: Union[int, str], user_id: Union[int, str], enable: bool
    ):
        """
        :param group_id: 群号
        :param user_id: QQ号
        :param enable: 是否设置为管理
        :return: 设置群管理员
        """
    
    async def set_essence_msg(self, message_id: Union[int, str]):
        """
        :param message_id: 消息ID
        :return: 设置精华消息
        """
    
    async def set_group_card(
        self, group_id: Union[int, str], user_id: Union[int, str], card: str
    ):
        """
        :param group_id: 群号
        :param user_id: QQ号
        :param card: 群名片,为空则为取消群名片
        :return: 设置群名片
        """
    
    async def delete_essence_msg(self, message_id: Union[int, str]):
        """
        :param message_id: 消息ID
        :return: 删除精华消息
        """
    
    async def set_group_name(self, group_id: Union[int, str], group_name: str):
        """
        :param group_id: 群号
        :param group_name: 群名
        :return: 设置群名
        """
    
    async def set_group_leave(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 退出群组
        """
    
    async def send_group_notice(
        self, group_id: Union[int, str], content: str, image: str = None
    ):
        """
        :param group_id: 群号
        :param content: 内容
        :param image: 图片路径，可选
        :return: 发送群公告
        """
    
    async def get_group_notice(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群公告
        """
    
    async def set_group_special_title(
        self, group_id: Union[int, str], user_id: Union[int, str], special_title: str
    ):
        """
        :param group_id: 群号
        :param user_id: QQ号
        :param special_title: 群头衔
        :return: 设置群头衔
        """
    
    async def upload_group_file(
        self, group_id: Union[int, str], file: str, name: str, folder_id: str
    ):
        """
        :param group_id: 群号
        :param file: 文件路径
        :param name: 文件名
        :param folder_id: 文件夹ID
        :return: 上传群文件
        """
    
    async def set_group_add_request(self, flag: str, approve: bool, reason: str = None):
        """
        :param flag: 请求flag
        :param approve: 是否同意
        :param reason: 拒绝理由
        :return: 处理加群请求
        """
    
    async def get_group_info(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群信息
        """
    
    async def get_group_info_ex(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群信息(拓展)
        """
    
    async def create_group_file_folder(
        self, group_id: Union[int, str], folder_name: str
    ):
        """
        :param group_id: 群号
        :param folder_name: 文件夹名
        :return: 创建群文件文件夹
        """
    
    async def delete_group_file(self, group_id: Union[int, str], file_id: str):
        """
        :param group_id: 群号
        :param file_id: 文件ID
        :return: 删除群文件
        """
    
    async def delete_group_folder(self, group_id: Union[int, str], folder_id: str):
        """
        :param group_id: 群号
        :param folder_id: 文件夹ID
        :return: 删除群文件文件夹
        """
    
    async def get_group_file_system_info(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群文件系统信息
        """
    
    async def get_group_root_files(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群根目录文件列表
        """
    
    async def get_group_files_by_folder(
        self, group_id: Union[int, str], folder_id: str, file_count: int
    ):
        """
        :param group_id: 群号
        :param folder_id: 文件夹ID
        :param file_count: 文件数量
        :return: 获取群文件列表
        """
    
    async def get_group_file_url(self, group_id: Union[int, str], file_id: str):
        """
        :param group_id: 群号
        :param file_id: 文件ID
        :return: 获取群文件URL
        """
    
    async def get_group_list(self, no_cache: bool = False):
        """
        :param no_cache: 不缓存，默认为false
        :return: 获取群列表
        """
    
    async def get_group_member_info(
        self, group_id: Union[int, str], user_id: Union[int, str], no_cache: bool
    ):
        """
        :param group_id: 群号
        :param user_id: QQ号
        :param no_cache: 不缓存
        :return: 获取群成员信息
        """
    
    async def get_group_member_list(
        self, group_id: Union[int, str], no_cache: bool = False
    ):
        """
        :param group_id: 群号
        :param no_cache: 不缓存
        :return: 获取群成员列表
        """
    
    async def get_group_honor_info(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群荣誉信息
        """
    
    async def get_group_at_all_remain(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群 @全体成员 剩余次数
        """
    
    async def get_group_ignored_notifies(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群过滤系统消息
        """
    
    async def set_group_sign(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 群打卡
        """
    
    async def send_group_sign(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 群打卡
        """
    
    async def get_ai_characters(
        self, group_id: Union[int, str], chat_type: Union[int, str]
    ):
        """
        :param group_id: 群号
        :param chat_type: 聊天类型
        :return: 获取AI语音人物
        """
    
    async def send_group_ai_record(
        self, group_id: Union[int, str], character: str, text: str
    ):
        """
        :param group_id: 群号
        :param character: AI语音人物,即character_id
        :param text: 文本
        :return: 发送群AI语音
        """
    
    async def get_ai_record(self, group_id: Union[int, str], character: str, text: str):
        """
        :param group_id: 群号
        :param character: AI语音人物,即character_id
        :param text: 文本
        :return: 获取AI语音
        """
    
    async def forward_group_single_msg(
        self, message_id: str, group_id: Union[int, str]
    ):
        """
        :param message_id: 消息ID
        :param group_id: 群号
        :return: 转发群聊消息
        """
    
    async def send_group_forward_msg(
        self, group_id: Union[int, str], messages: list[str]
    ):
        """
        :param group_id: 群号
        :param messages: 消息列表
        :return: 合并转发的群聊消息
        """
```

### 系统接口

```python
    async def ocr_image(self, image: str):
        """
        :param image: 图片路径，支持本地路径和网络路径
        :return: OCR 图片识别
        """
    
    async def ocr_image_new(self, image: str):
        """
        :param image: 图片路径，支持本地路径和网络路径
        :return: OCR 图片识别
        """
    
    async def translate_en2zh(self, words: list):
        """
        :param words: 待翻译的单词列表
        :return: 英文翻译为中文
        """
    
    async def get_login_info(self):
        """
        :return: 获取登录号信息
        """
    
    async def set_input_status(self, event_type: int, user_id: Union[int, str]):
        """
        :param event_type: 状态类型
        :param user_id: QQ号
        :return: 设置输入状态
        """
    
    async def download_file(
        self,
        thread_count: int,
        headers: Union[dict, str],
        base64: str = None,
        url: str = None,
        name: str = None,
    ):
        """
        :param thread_count: 下载线程数
        :param headers: 请求头
        :param base64: base64编码的图片,二选一
        :param url: 图片url,二选一
        :param name: 文件名
        :return: 下载文件
        """
    
    async def del_group_notice(self, group_id: Union[int, str], notice_id: str):
        """
        :param group_id: 群号
        :param notice_id: 通知ID
        :return: 删除群公告
        """
    
    async def get_model_show(self, model: str):
        """
        :param model: 模型名
        :return: 获取模型显示
        """
    
    async def can_send_image(self):
        """
        :return: 检查是否可以发送图片
        """
    
    async def can_send_record(self):
        """
        :return: 检查是否可以发送语音
        """
    
    async def get_status(self):
        """
        :return: 获取状态
        """
    
    async def get_version_info(self):
        """
        :return: 获取版本信息
        """
    
    async def get_group_shut_list(self, group_id: Union[int, str]):
        """
        :param group_id: 群号
        :return: 获取群禁言列表
        """
    
    async def post_group_msg(
        self,
        group_id: Union[int, str],
        text: str = None,
        face: int = None,
        json: str = None,
        markdown: str = None,
        at: Union[int, str] = None,
        reply: Union[int, str] = None,
        music: Union[list, dict] = None,
        dice: bool = False,
        rps: bool = False,
        image: str = None,
        rtf: MessageChain = None,
    ):
        """
        :param group_id: 群号
        :param text: 文本
        :param face: 表情
        :param json: JSON
        :param markdown: Markdown
        :param at: at
        :param reply: 回复
        :param music: 音乐
        :param dice: 骰子
        :param rps: 猜拳
        :param image: 图片
        :param rtf: 富文本(消息链)
        :return: 发送群消息
        """
    
    async def post_private_msg(
        self,
        user_id: Union[int, str],
        text: str = None,
        face: int = None,
        json: str = None,
        markdown: str = None,
        reply: Union[int, str] = None,
        music: Union[list, dict] = None,
        dice: bool = False,
        rps: bool = False,
        image: str = None,
        rtf: MessageChain = None,
    ):
        """
        :param user_id: QQ号
        """
    
    async def post_group_file(
        self,
        group_id: Union[int, str],
        image: str = None,
        record: str = None,
        video: str = None,
        file: str = None,
        markdown: str = None,
    ):
        """
        :param group_id: 群号
        :param image: 图片
        :param record: 语音
        :param video: 视频
        :param file: 文件
        :param markdown: Markdown
        :return: 发送群文件
        """
    
    async def post_private_file(
        self,
        user_id: Union[int, str],
        image: str = None,
        record: str = None,
        video: str = None,
        file: str = None,
        markdown: str = None,
    ):
        """
        :param user_id: QQ号
        """
```


---
title: 认识 NcatBot
createTime: 2025/01/23 20:00:05
permalink: /guide/zxn1zv1t/
---
## 最好的 NcatBot

![NcatBot](https://socialify.git.ci/liyihao1110/NcatBot/image?description=1&forks=1&issues=1&language=1&logo=https%3a%2f%2fdocs.ncatbot.xyz%2fimages%2flogo.png&name=1&owner=1&pulls=1&stargazers=1&theme=Auto)

## NcatBot 和 NapCat 的关系

[NapCat](https://github.com/NapNeko/NapCatQQ) 是基于 TypeScript 构建的 Bot 框架, 通过相应的启动器或者框架, 主动调用 QQ Node 模块提供给客户端的接口, 实现Bot 的功能.

NcatBot 是 NapCat 的 Python SDK. NcatBot 实现了连接和调用 NapCat 的接口, 大家无需关心复杂的 HTTP 和 WebSocket 通讯协议, 只需要像使用任何 Python 第三方库一样使用 NcatBot, 即可完成 QQ Bot 的开发.

因此, 只有**同时运行** NcatBot 和 Napcat, QQ Bot 才能正常运行哟~ 嗯, NcatBot 会**自动运行** Napcat, 所以大部分时候你无需担心 Napcat 的运行问题.

## 加入我们

呀, 木子喵真的太可爱了, 我也想...

咳咳, 嗯, 如果你对项目有更好的想法, 欢迎加入我们! 如果可以, 为我们的[项目](https://github.com/liyihao1110/ncatbot)点一个小小的 star 就是对我们最大的支持啦~

这是我们的[交流群](https://qm.qq.com/q/L6XGXYqL86), 群里面有用我们的项目搭建的 QQ 机器人, 所谓百闻不如一见, 大家可以进群体验喵~

![NcatBot](https://foruda.gitee.com/images/1737622167903015509/9f9590eb_13790314.png)

## 开源声明

本项目采用 `NcatBot Non-Commercial License` 开源, 在 `Apache License 2.0` 协议的基础上, **限制**对 **NcatBot 源代码的二次开发**以及**任何形式的商业用途**, 具体条款如下:

```
NcatBot Non-Commercial License

Copyright (c) 2025 NcatBot开发项目组

在遵守以下条款的前提下，特此免费授予任何获得本软件及相关文档文件（以下简称“软件”）的人员不受限制地处置本软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可的权利：

一、约束条款
1. 未经授权，禁止商业用途
   - 不得直接或间接通过本软件获利，包括但不限于：
     * 售卖软件副本或衍生作品
     * 作为商业产品或服务组成部分
     * 用于广告推广或流量变现
     * 其他以营利为目的的使用场景

2. 二次开发授权
   - 修改后的衍生作品需满足：
     * 必须保留原始版权声明
     * 需通过邮件(lyh_02@foxmail.com)提交授权申请
     * 获得书面授权后方可分发

二、违约处理
1. 违反上述条款自动终止授权
2. 需承担因此造成的所有法律责任
3. 侵权方需承担维权产生的合理费用

三、免责声明
本软件按"原样"提供，不做任何明示或暗示的担保，包括但不限于对适销性、特定用途适用性的担保。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责。

四、管辖法律
本协议适用中华人民共和国法律，任何争议应提交厦门仲裁委员会仲裁解决。

本协议最终解释权归NcatBot开发项目组所有。
```

本项目仅用于学习交流, 使用本项目造成的任何后果由使用者承担, 与项目开发组无关.

**严禁**将本项目用于以下用途:

- 传播反动、淫秽、赌博、暴力、电信诈骗等违法信息.

## 我们的合作伙伴

感谢 [IppClub](https://github.com/IppClub/) 对本项目的大力支持.

> 欢迎来到 I++ 俱乐部!！我们是一个充满激情的开发者、创作者和创新者社区，致力于通过协作与开源开发的力量，推动有意义的项目与技术的诞生。最初，I++ 俱乐部起源于大学里的学生社团，随着核心成员的毕业与加入工作，俱乐部活动逐渐拓展到了社会范围，现也面向同样来自打工阶层的程序员们。我们鼓励技术爱好者共同探索IT领域的无限可能，推动技术交流与创新，创造更加开放、包容的技术文化。

感谢 [NapCat](https://github.com/NapNeko) 为本项目提供底层支持.

感谢 [扶摇云](https://v10.fyyun.net/home.htm) 为本项目提供上云服务.

二次开发项目 [FcatBot](https://github.com/Fish-LP/FcatBot).

---
title: 使用远端 NapCat 接口
createTime: 2025/02/09 16:45:00
permalink: /guide/inxart0k/
---

如果在 NcatBot 之前没有接触过其它涉及网络的编程或者配置, 那么**不应该**使用远端 NapCat 接口. ==选择使用远端 NapCat 接口表明你愿意为此付出时间学习或者已经具备相当的基本知识.==

[了解 NapCat 和 NcatBot 的关系](./1.%20认识%20NcatBot.md#NcatBot-和-NapCat-的关系).

由于 QQ 风控, 不建议频繁开关 NapCat. 因此有时候需要将 **NapCat** 部署在云服务器上. 一般来说建议一并将 **NcatBot** 也部署在同一台服务器上, 但有时候确实需要分开部署, 此时可以使用远端 NapCat 接口.

## 什么时候适合使用远端 NapCat 接口

- 自定义的 NcatBot 功能对性能要求很高, 云服务器无法负担, 但希望 NapCat 能够不间断运行, 不需要每次使用 NcatBot 时都启动 NapCat.

- 具备**基本的网络和操作系统知识**的前提下, 你认为需要使用远端 NapCat 接口的情况.


## 准备工作

远端 NapCat 接口一般由云服务器提供, 云服务器的操作系统一般是 Linux, 你需要完成以下操作:

1. 获取服务器公网 IP.
2. 开放**系统防火墙**的 3000, 3001, 6099 端口.
3. 开放**服务商防火墙**的 3000, 3001, 6099 端口.

请参考 [Linux 安装](../1.%20快速开始/1.1%20Linux%20安装.md#检查网络环境) 完成 2, 3 步, 服务器公网 IP 请向服务商获取.

## 自动配置远端 NapCat 服务器(推荐)

在远端正常运行 NcatBot 的示例程序, 下面将其称为**远端引导程序**。

运行远端引导程序时, 除了改动 `bt_uin` 和 `root` 外, 还需将 ==`ws_uri` 填写为 `ws://<服务器公网 IP>:<端口号>`，将 `ws_listen_ip` 填写为 `0.0.0.0`（监听所有来源的请求）。

```python
from ncatbot.core import BotClient
bot = BotClient()
# 假设服务器公网 IP 为 123.123.123.123, 你希望在 3001 端口上开启 NapCat 服务。
bot.run_blocking(bt_uin="123456", root="root", ws_uri="ws://123.123.123.123:3001", ws_token="your_token", ws_listen_ip="0.0.0.0")
```

Ncatbot 会进行自动登录的引导, 远端引导程序成功启动并进行测试后, 可以关闭 NcatBot 但**不要关闭 NapCat**.

接着在本地使用同样的参数运行 Ncatbot 即可。

建议使用 `token` 参数确保 NcatBot 和 NapCat 的连接安全。

## 手动配置远端 NapCat 服务器

根据 [NapCat 文档](https://napneko.github.io/), 在远端正确配置 NapCat 及其 WebSocket 服务器。

尤其注意需要 "启用" WebSocket 服务器，以及监听端口的填写应该为 `0.0.0.0`。

本地运行 NcatBot, `ws_uri` 填写为 `ws://服务器公网 IP:{你配置时填写的端口}`. `token` 填写为 WebSocket 的 token(注意不是 webui 的 token, WebSocket token 默认为空字符串).

## 提醒

- 获取文件时，如果 NapCat 服务器在远端，那么会返回远端服务器的路径。你需要自行对位于远端的文件进行管理。


---
title: 日志
createTime: 2025/03/05 20:00:05
permalink: /guide/qbus9tlp/
---

::: warning
尚未完工
:::

NcatBot 提供日志功能以便检查程序运行情况. 日志**按天分割**保存在工作目录下的 `log/` 文件夹中.

如果使用 [Windows 一键安装](../1.%20快速开始/1.4%20Windows%20一键安装.md), 那么日志位于 `main.exe` 所在目录的 `ncatbot/log/` 文件夹中.

## 默认日志

默认日志是不需要进行任何设置就会自动记录的日志.

### debug

- 所有 `notice`, `request` 事件.

### info

- 所有的 `message` 类型消息接收事件.

## 自定义日志

导入 `ncatbot.utils.logger` 中的 `get_log` 函数, 调用 `get_log` 函数即可获取一个日志对象 `_log`.

`_log` 是一个标准的 `logging.Logger` 对象, 支持 `debug, info, warning, error` 等方法.

## 日志路径

设置环境变量：

`LOG_LEVEL`：终端日志等级，默认 INFO。
`FILE_LOG_LEVEL`：文件日志等级，默认 DEBUG。
`LOG_FILE_PATH`：日志保存目录。
`LOG_FILE_NAME`：日志文件名，默认 `bot_%Y_%m_%d.log`。



---
title:  轻松上云
createTime: 2025/03/23 16:45:00
permalink: /guide/easytogo/
---

### 必要的基础知识

- 使用 **ssh** 连接 Linux 服务器.
- 使用**命令行工具**修改代码中的 QQ 号和 root 账号.

### 扶摇云

[扶摇云](https://v10.fyyun.net/) 为 NcatBot 提供了低价的上云服务, 基本配置款(1c2g2M)一月仅需 3.5 元即可轻松云上部署 NcatBot. 云上部署的 NcatBot **能够 24h 不间断运行**, 无需担心断电断网导致 Bot 停止运行.

申请扶摇云账号后需要先**实名认证**, 通过认证后即可购买云服务器.

购买套餐时请选择 ==Ubuntu-22.04-Ncatbot预装版== 镜像.

[购买页](https://v10.fyyun.net/cart/goodsList.htm?fpg_id=1&spg_id=3)

### 运行 NcatBot

::: tip
预装版镜像中已经安装的 NcatBot 版本为 3.5.2, 最新稳定版为 3.5.9, 建议执行 `pip install -U ncatbot==3.5.9` 更新到最新稳定版本.
:::

通过 ssh 登录购买的云服务器, 在 `/root/` 目录下已经有 `main.py`, 只需更改其中的 `bot_uin` 和 `root` 即可正常运行.


---
title: CLI
createTime: 2025/03/05 20:00:05
permalink: /guide/ncatbotcli/
---

## 简介

NcatBot CLI 是一个命令行工具，用于管理和控制 NcatBot 的运行。它提供了丰富的命令来管理插件、配置机器人以及执行各种系统操作。

## 快速开始

### 启动 CLI

确保当前 Python 环境已安装 NcatBot。

执行以下命令启动 CLI：

```bash
python -m ncatbot.cli.main [path]
```

其中 `[path]` 是一个可选参数，用于指定 CLI 工作目录，默认工作目录为执行此命令的目录。

### 直接执行命令

CLI 支持不进入交互模式直接执行命令：

```bash
python -m ncatbot.cli.main -c "命令" [参数...]
```

例如：
```bash
# 直接启动 NcatBot
python -m ncatbot.cli.main -c start

# 安装插件
python -m ncatbot.cli.main -c install TestPlugin

# 列出已安装插件
python -m ncatbot.cli.main -c list

# 创建一个模板插件(名为 MyPlugin)
python -m ncatbot.cli.main -c new MyPlugin
```

### 首次运行

首次运行 CLI 时：
1. 系统会提示设置 QQ 号
2. 自动安装 `TestPlugin` 插件用于测试
3. 创建必要的工作目录结构

## 命令系统

CLI 采用命令注册系统，所有命令都通过装饰器注册到全局命令注册表中。每个命令都包含以下信息：
- 命令名称
- 命令描述
- 使用说明
- 帮助文本
- 命令别名

### 系统命令

#### start
- 用法：`start`
- 别名：`s`, `run`
- 描述：启动 NcatBot

#### setqq
- 用法：`setqq`
- 别名：`qq`
- 描述：设置或更新 QQ 号

#### update
- 用法：`update`
- 别名：`u`, `upgrade`
- 描述：更新 NcatBot 和 NapCat
- 功能：
  - 更新 NapCat 版本
  - 从阿里源更新 NcatBot
  - 更新完成后需要重新启动 CLI

#### exit
- 用法：`exit`
- 别名：`quit`, `q`
- 描述：退出 CLI 工具

### 插件管理命令

#### install
- 用法：`install <插件名> [--fix]`
- 别名：`i`
- 描述：安装或更新插件
- 参数：
  - `--fix`：尝试修复安装失败的插件，或者尝试覆盖安装

#### remove
- 用法：`remove <插件名>`
- 别名：`r`, `uninstall`
- 描述：卸载指定插件

#### list
- 用法：`list`
- 别名：`l`, `ls`
- 描述：列出已安装的插件及其版本

#### list_remote
- 用法：`list_remote`
- 别名：`lr`
- 描述：列出远程仓库中可用的插件

#### create
- 用法：`create <插件名>`
- 别名：`new`, `template`
- 描述：创建新的插件模板
- 功能：
  - 创建插件目录结构
  - 生成基本代码文件
  - 创建配置文件
  - 生成 README 文档

### 信息命令

#### help
- 用法：`help [命令名]`
- 别名：`h`, `?`
- 描述：显示命令帮助信息
- 参数：
  - `命令名`：显示指定命令的详细帮助

#### version
- 用法：`version`
- 别名：`v`, `ver`
- 描述：显示 NcatBot 版本信息

## 工作目录结构

CLI 的工作目录包含以下内容：
```

plugins/          # 插件目录
|   ├── plugin1/     # 插件1
|   └── plugin2/     # 插件2
├── number.txt       # QQ 号配置文件
└── logs/            # 日志目录
```

## 插件开发

### 创建新插件

使用 `create` 命令创建新插件模板：

```bash
create MyPlugin
```

或者不进入 CLI 直接执行命令

```bash
python -m ncatbot.cli -c create MyPlugin
```

这将创建一个包含以下文件的插件模板，插件名为 `MyPlugin`：
- `__init__.py`：插件入口文件
- `main.py`：插件主文件
- `README.md`：插件文档
- `.gitignore`：Git 忽略文件
- `requirements.txt`：依赖项文件

### 插件模板结构

插件模板包含以下基本功能：
- 群消息事件处理
- 私聊消息事件处理
- 配置项管理
- 功能注册系统

## 注意事项

1. 确保在使用 CLI 前已正确安装 NcatBot
2. 建议使用稳定的网络环境进行插件安装和更新
3. 定期使用 `update` 命令保持 NcatBot 为最新版本
4. 插件安装失败时，可以尝试使用 `--fix` 参数进行修复

---
title: AI+NcatBot
createTime: 2025/03/25 23:21:39
permalink: /guide/useaidv/
---

AI 时代已至, 只需要很低的学习成本, 就能够使用 AI 和 NcatBot 开发自己的 QQ 机器人.

## NcatBot 是一个 AI 友好的项目

### AI 专用文档

[AI 专用文档](https://raw.githubusercontent.com/Isaaczhr/NcatBotDocs/refs/heads/master/all-guides.md)，[AI 专用文档(国内)](https://ghfast.top/https://raw.githubusercontent.com/Isaaczhr/NcatBotDocs/refs/heads/master/all-guides.md)

将该文档发送给 [kimi](https://kimi.ai)，[deepseek](https://chat.deepseek.com)，描述你的需求，AI 会阅读文档并实现。

chatgpt 和 grok 也有很好的效果，但不推荐使用国内的其它大语言模型。

### 使用示例

![image-20250428124457369](https://raw.githubusercontent.com/huan-yp/image_space/master/img/202504281244520.png)





---
title: 开发技巧
createTime: 2025/04/30 23:21:39
permalink: /guide/devtrick/
---

## 优化重载时间

- [配置项](../2.%20基本开发/4.%20配置项.md)使用 `enable_webui_interaction=False` 跳过检查节省加载时间
- 使用插件[热重载](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.4%20内置功能.md#插件热重载)功能。

---
title: 了解 NcatBot 插件
createTime: 2025/02/08 10:07:54
permalink: /guide/dplugins/
---

## NcatBot 插件

在了解 NcatBot 插件之前, 请至少先阅读[开发指南](../1.%20快速开始/2.%20开发指南.md).

NcatBot 的插件位于工作目录下 `plugins` 文件夹中, **每个插件都是一个独立的文件夹**.

使用 `bot.run()` 启动 NcatBot 时, 会自动加载所有插件.

NcatBot 提供一个简易的 CLI 用于下载和管理插件, 详见 [CLI](../5.%20杂项/5.%20CLI.md)

::: details NcatBot 插件系统小故事
凌晨三点的机房里，鱼鱼面前的四块显示器泛着幽幽蓝光。她机械地敲击着键盘， console 里不断刷新的报错信息在视网膜上投下跳动的残影。

“为什么就是抓不到这个事件触发时机......”鱼鱼扯下挂在脖子上的工牌甩在桌上，金属链子撞到咖啡杯发出清脆响声。ncatbot的插件系统像座迷宫，每个API接口都藏着意想不到的陷阱。五天前就该完成的天气插件，此刻仍卡在事件订阅的泥潭里。

冷风突然掀动窗帘，鱼鱼下意识缩了缩脖子。带着松木香气的保温杯轻轻落在手边，蒸腾的热气在显示器的代码注释区晕开一片水雾。

“异步回调里嵌套同步方法，不卡死才怪。”熟悉的声音让鱼鱼猛地转头，三个月未见的彭彭正俯身查看她的屏幕，苍白的指尖点在某个await关键字上，“这里需要加个 Promise.resolve 做缓冲层。”

鱼鱼怔怔看着好友从帆布包里掏出那台贴满电路板贴纸的 ThinkPad ，十指翻飞地调出半个月前的 git 提交记录。“你看，上周重构事件总线的时候，是不是把生命周期钩子的执行顺序改了？”彭彭的呼吸声里混着细微的杂音，像是老旧的通风管道。

他们并排而坐的姿势与大学时代别无二致。那时彭彭总能在鱼鱼卡壳时，用他特有的“五层分析法”把问题拆解成漂亮的思维导图。此刻他正用vscode的调试器下断点，控制台突然跳出的内存警告却让动作顿住。

“你的肝酶指标...”鱼鱼瞥见彭彭袖口下露出的住院手环，话音被剧烈的咳嗽声打断。零散的药片从彭彭口袋里滚落，在机械键盘的缝隙间闪着微光。

彭彭却已重新聚焦在屏幕上：“还记得我们给开源社区写的那个中间件吗？把它的发布-订阅模式移植过来，事件触发延迟能降低70%。”他苍白的脸上泛起病态的红晕，手指在触摸板上划出流畅的轨迹，“看，用RxJS重构事件流，再配合...咳咳...配合装饰器语法做插件注册...”

当晨曦爬上窗棂时，编译成功的提示框终于弹出。鱼鱼看着单元测试全部通过的绿色标记，突然发现彭彭的呼吸不知何时变得平稳绵长。那些散落的头孢克肟药片旁，静静躺着一本翻旧的《分布式系统设计模式》，扉页上是他们毕业时在樱花树下的合影。

“下周的CT复查...”鱼鱼轻声开口，却被彭彭截住话头。好友正在给 README.MD 添加最后一行文档，光标在“特别鸣谢”后欢快地跳动：“就说感谢某位不愿透露姓名的架构师——就像我们给 Linux 内核提交 Patch 时那样。”

晨光中，两个影子在满墙的架构图上交错重叠。鱼鱼突然想起三年前那个暴雨夜，当她的毕业设计因硬盘损坏即将泡汤时，是彭彭连夜用数据恢复工具从物理坏道中抢救出源码。此刻他们面前的屏幕上，NcatBot 的天气插件正在测试群里弹出今日的朝阳预报，而窗外真正的曙光正漫过彭彭不再颤抖的指尖。

TO BE CONTINUED...
:::

一个插件包含以下文件:

::: file-tree

- your_plugin
  - folder1
    - subfolder1-1
      - file1-1-1.yaml
      - file1-1-2.py
    - subfolder1-2
      - file1-2-1.py
      - file1-2-2.py
  - folder2
    - file2-2.py
  - main.py
  - \_\_init\_\_.py
  - requirements.txt
  - README.md
  - .gitignore
:::

其中, `__init__.py` 用于声明插件, 是必须的, 其余文件都是可选的.

`your_plugin/` 称为**插件文件夹**, 字符串 `your_plugin` 称为**插件文件夹名**, **一个插件文件夹包含且仅包含一个插件**.

一个插件所需要的全部资源, 都必须放入**插件文件夹中**. 插件不应该读写插件文件夹之外的任何内容.

::: tip
推荐使用 `__file__` 参数来定位代码的路径.
:::

开发插件时可以在同一个文件下开发多个插件, 文件结构只推荐如下结构:

::: file-tree
- launch.py
- plugins
  - your_plugin1
    - \_\_init\_\_.py
    - main.py
    - .gitignore
    - README.md
  - your_plugin2
    - \_\_init\_\_.py
    - main.py
    - .gitignore
    - README.md
:::

几个提示的点:

- `.gitignore` 文件用于忽略不需要上传的文件, ==每个插件文件夹独立==
- 两个插件完全独立, 例如 `your_plugin1` 不能使用 `plugins/your_plugin2/` 下任何资源, 只能使用 `plugins/your_plugin1/` 下资源. [突破本限制(不建议)](6.%20个人插件.md)

## 创建插件

### 声明插件

`__init__.py` 中, 需要声明插件, 并且 `__init__.py` 必须放在**插件文件夹**根目录下:

```python
from .main import MyPlugin

__all__ = ["MyPlugin"]
```

- 第一行: 导入插件类.
- 第二行: 空行, 好看.
- 第三行: 明确被导入的插件类.

NcatBot 不对工作目录做任何保证, 插件项目内部只建议使用==相对导入==.

### 定义插件

一般在 `main.py` 中定义插件, `name` 称为**插件名**, 派生类类名(即 `MyPlugin.__name__` 的值)称为**插件类名**.


```python
from ncatbot.plugin import BasePlugin, CompatibleEnrollment

class MyPlugin(BasePlugin):
    name = "MyPlugin" # 插件名
    version = "0.0.1" # 插件版本
```

### 命名要求

**插件名**和**插件类名**必须**和插件文件夹名一致**, 例如 `MyPlugin` 插件, 插件文件夹名为 `MyPlugin`, 插件类名为 `MyPlugin`, 插件名为 `MyPlugin`.

## 最小示例

文件结构:

::: file-tree

- plugins/MyPlugin
  - main.py
  - \_\_init\_\_.py
- launch.py
:::


### \_\_init\_\_.py

插件声明程序, 用于声明插件.

```python
# __init__.py
from .main import MyPlugin

__all__ = ["MyPlugin"]
```

### main.py

插件主程序, 用于定义插件.

```python
# main.py
import os

from ncatbot.plugin import BasePlugin, CompatibleEnrollment
from ncatbot.core import GroupMessage

bot = CompatibleEnrollment  # 兼容回调函数注册器


class MyPlugin(BasePlugin):
    name = "MyPlugin" # 插件名称
    version = "0.0.1" # 插件版本

    @bot.group_event()
    async def on_group_event(self, msg: GroupMessage):
        # 定义的回调函数
        if msg.raw_message == "测试":
            await self.api.post_group_msg(msg.group_id, text="Ncatbot 插件测试成功喵")

    async def on_load(self):
        # 插件加载时执行的操作, 可缺省
        print(f"{self.name} 插件已加载")
        print(f"插件版本: {self.version}")
```

### launch.py

引导程序, 用于启动 NcatBot, 插件文件夹放入 `plugins/` 后，执行 `python launch.py` 启动。

```python
from ncatbot.core import BotClient

bot = BotClient()

if __name__ == "__main__":
    bot.run(bt_uin="123456")
```

### 代码拆解

#### 导入

```python
from ncatbot.plugin import BasePlugin, CompatibleEnrollment
from ncatbot.core import GroupMessage
```

- `BasePlugin`: 插件基类. 所有的插件必须是 `BasePlugin` 的派生类, 否则无法被正常加载.
- `CompatibleEnrollment`: 兼容回调函数注册器, 用于快速注册回调函数。至于为什么叫兼容，就涉及 NcatBot 的历史了。

::: tip
相比于普通的注册器， `CompatibleEnrollment` 提供 `startup_event` 的支持，`startup_event` 在机器人 API 可用时调用回调函数，不传递参数。
:::

#### 定义插件

```python
bot = CompatibleEnrollment  # 兼容回调函数注册器
class MyPlugin(BasePlugin): # 插件类名 为 `MyPlugin`
    name = "MyPlugin" # 插件名 为 `MyPlugin` 必须和插件类名一致
    version = "0.0.1" # 插件版本

```

- `name = "MyPlugin"`: 插件名, [命名规范见上](#命名要求)
- `version = "0.0.1"`: 插件版本号.

#### 回调函数

```python
    @bot.group_event()
    async def on_group_event(self, msg: GroupMessage):
        # 定义的回调函数
        if msg.raw_message == "测试":
            await self.api.post_group_msg(msg.group_id, text="Ncatbot 插件测试成功喵")
```

`BasePlugin.api` 是一个 `BotAPI` 对象, 参考 [API 调用](../4.%20API%20参考/1.%20API%20调用) 一节使用.

## 运行插件

### 环境要求

- NcatBot 已经安装到 Python 环境中.
- 工作目录的文件结构正确, 即如 [最小示例](#最小示例) 所示. 工作目录下存在 `plugins/` 文件夹, 所有的**插件文件夹**均放入 `plugins/` 文件夹中.

### 直接运行

在工作目录中直接运行 `python launch.py` 即可.

### 使用 CLI 运行

[参阅](../5.%20杂项/5.%20CLI.md).



---
title: 插件的加载和卸载
createTime: 2025/02/08 10:07:54
permalink: /guide/loadplg/
---

## 插件加载

`BasePlugin` 提供 `on_load` 方法, 重写 `on_load` 方法可以在在插件加载时执行一些任务.

一般来说, 以下工作需要**你**在插件加载时完成:

- 为插件[订阅事件](3.%20插件的交互系统/3.1%20事件的发布和订阅.md#根据事件名称订阅事件).
- 为插件[注册插件配置项](3.%20插件的交互系统/3.4%20内置功能.md#插件配置项).
- 为插件[注册功能](3.%20插件的交互系统/3.2%20注册功能.md).
- 为插件[注册定时任务](3.%20插件的交互系统/3.4%20内置功能.md#定时任务).
- 其它你**自定义的**需要在加载时初始化的任务.

```python
class MyPlugin(BasePlugin):
    def on_load(self):
        print(f"插件 {self.name} 加载成功")
```


## 插件卸载

`BasePlugin` 提供 `_close_` 方法, 重写 `_close_` 方法可以在在插件卸载时执行一些任务.

一般来说, 以下工作需要**你**在插件卸载时完成:

- 其它你**自定义的**需要在加载时初始化的任务(对应 `on_load` 方法中的自定义任务).

如果你希望数据能够被保存下来以便下次使用, 一般无需自行实现, 可以使用[内置可持久化数据](./4.%20内置可持久化数据.md)或者[插件配置项](./3.%20插件的交互系统/3.4%20内置功能.md#插件配置项).



---
title:  发布你的插件
createTime: 2025/03/06 11:21:00
permalink: /guide/qr8yp7sn/
---

[插件仓库地址](https://github.com/ncatbot/NcatBot-Plugins)

## 发布你的插件

提供插件一键发布脚本, 请参考[这里](https://blog.csdn.net/chengwenyang/article/details/120060010)准备一个 github token. token 需要支持 repo 权限.

执行 `python -m ncatbot.scripts.publish` 并按照相关指示操作即可发布插件.

如果不希望每次都输入 token, 可以将 token 保存在环境变量 `GITHUB_TOKEN` 中.

## 使用插件

[安装和使用插件](../1.%20快速开始/3.%20安装和使用插件.md)
[Windows 一键安装](../1.%20快速开始/1.4%20Windows%20一键安装.md)



---
title: 个人插件
createTime: 2025/04/22 10:07:54
permalink: /guide/persoplg/
---

::: warning
个人插件不再兼容 NcatBot 的一键化部署方案。除非确保只有你个人使用，否则不要编写个人插件。
:::

## 用途

插件的开发中要求插件完全独立存在，也就是**不允许插件调用没有安装在系统里的第三方库**。有时候希望用[主动模式](../1.%20快速开始/2.%20开发指南.md#主动模式)做开发方便管理，但是又想使用插件模式的一些功能，比如定时任务。

此时会出现矛盾：插件项目也许会依赖主动模式下的一些文件，但 NcatBot 不允许插件使用 `plugins/MyPlugin` 和 `data/MyPlugin/` 之外的文件。

对于这种情况，可以考虑个人插件的模式。

## 原理

NcatBot 在文档中声明了这两个操作不允许，但**实际上没有做严格的限制**，因此只需要通过相对导入的方式定位到 `plugins/MyPlugin` 以外的部分即可。

这样的插件往往与主动模式开发的项目绑定，不能使用 NcatBot 的插件体系发布，故被称为个人插件。

分发这样的项目时，需要将插件和项目一起分发。



---
title: 事件的订阅和发布
createTime: 2025/03/06 10:07:54
permalink: /guide/pasevent/
---

## 事件

### 事件对象

事件是基本的可处理对象, 一个事件由 `ncatbot.plugin.event.Event` 类表示.

`Event` 类主要包含两个成员变量

- `data: Any` 事件携带的数据
- `type: str` 事件类型列表

### 事件类型

事件在被发布时会携带上**事件类型**, 事件类型用于订阅和处理事件.

事件类型命名规范为 `[插件名].[事件名]`.

基本事件 (群聊消息, 私聊消息, 请求消息, 通知消息, 启动事件) 的事件名封装如下:

- `ncatbot.utils.assets.literals.OFFICIAL_GROUP_MESSAGE_EVENT = "ncatbot.group_message_event"`
- `ncatbot.utils.assets.literals.OFFICIAL_PRIVATE_MESSAGE_EVENT = "ncatbot.private_message_event"`
- `ncatbot.utils.assets.literals.OFFICIAL_REQUEST_EVENT = "ncatbot.request_event"`
- `ncatbot.utils.assets.literals.OFFICIAL_NOTICE_EVENT = "ncatbot.notice_event"`
- `ncatbot.utils.assets.literals.OFFICIAL_STARTUP_EVENT = "ncatbot.startup_event"`

插件也可以自行发布事件, 具体请继续阅读.

### 事件传播

事件沿事件总线传播, 处理事件时可以主动停止事件传播或者添加事件处理结果, 相关函数:

- `Event.stop_propagation()`
- `Event.add_result(result)`

## 事件总线

咕咕咕.

## 订阅事件

可以**使用兼容回调函数注册器**来订阅事件，具体参考[了解 NcatBot 插件](1.%20了解%20NcatBot%20插件.md).

兼容回调函数注册器的本质仍然是订阅事件. 使用兼容注册器注册后, 会在**插件加载时**为注册的函数**订阅对应的事件**.

下面介绍通过事件名订阅的方法。

### 示例代码

```python
class MyPlugin(BasePlugin):
    async def on_load(self):
        # 支持正则匹配,re:前缀
        self.register_handler("re:test\.", self.handle_test) # 订阅 test 插件发布的所有事件
        self.register_handler("exact.match", self.handle_exact) # 订阅 exact 插件发布的 match 事件

    async def handle_test(self, event: Event):
        print(f"正则匹配处理器: {event.data}")

    async def handle_exact(self, event: Event):
        print(f"精确匹配处理器: {event.data}")
```

- `BasePlugin` 提供了 `register_handler` 方法用于订阅事件, 该方法接受两个参数:
  - `type: str` 事件类型, 支持全名称和正则表达式，请参考上方的示例。
  - `func: Callable[[Event], Any]` 事件回调函数, 事件回调函数接受一个 `Event` 类型的参数，且一般是插件类的成员函数。
- 理论上讲在任何时间都可以订阅事件，但一般在 `on_load` 函数中订阅。

### 事件回调函数

订阅事件时需要指定一个回调函数, 回调函数需要接受一个 `Event` 类型的参数。

在事件回调函数中可以对事件进行处理，一般有下面的一些操作：

- 调用 `self.api` 发送一些什么东西。（插件实例会有一个 `BotAPI` 成员，用于调用 API）
- 调用 `event.stop_propagation()` 停止事件传播。
- 调用 `event.add_result(result)` 添加事件处理结果。

#### Event 原型

```python
class Event:
    def __init__(self, type: str, data: Any, source: EventSource = None):
        """初始化事件"""
        self.type = type # 事件类型, 定义见上方
        self.data = data # 事件数据
        self.source = source  # 事件源, 描述事件触发的群聊和用户

    def stop_propagation(self):
        """停止事件的传播:当调用此方法后，后续的处理器将不会被执行"""

    def add_result(self, result: Any):
        """添加事件处理结果"""

    def __repr__(self):
        return f'Event(type="{self.type}",data={self.data})'
```

#### Event.data 的规定

对于官方事件类型, 对应的 `Event.data` 保证和 [回调函数参数](../../3.%20事件处理/1.%20回调函数.md#回调函数参数)一致.

对于自定义事件类型, 插件作者应该自己定义规范. 

## 发布事件

在 `BasePlugin` 上下文中任意位置均可发布事件.

事件分为同步和异步, 同步事件会优先处理并迅速返回结果, 异步事件将会挂到异步事件循环中处理, ==如果可能请一定使用异步事件, 同步事件未经测试不稳定==

事件的处理结果(如果有), 应该使用 `Event.add_result(result)` 在回调函数中添加.

==请务必严格按照 `[插件名].[事件名]` 的格式填写事件类型.==

```python
class MyPlugin(BasePlugin):
    def some_func(self):
        event = Event("MyPlugin.event", {"message": "hello"})
        await self.event_bus.publish_async(event)  # 异步发布不等待结果
        results = self.event_bus.publish_sync(event)  # 同步等待结果
```



---
title: 注册功能
createTime: 2025-03-27 10:52:00
permalink: /guide/regifunc/
---

## 使用功能

功能是对**事件发布和处理**的进一步封装, 使用功能可以方便快捷的接入 NcatBot 的[权限管理机制](3.3%20权限系统.md).

功能的运作对象是==消息事件==, 只有**群聊和私聊消息事件**才会进行下面的判定.

体现在实际使用中, 直接私聊 Bot 或者在任何一个 Bot 所在的群聊中发送满足条件的消息即可触发功能.

### 功能的触发条件

触发功能要经过两个阶段：

1. **权限判定**：收到消息后, 对于每个功能会先进行权限判定. 消息**来源**(包括用户 QQ 号和所在群聊群号)会同时参与权限判定，**两者必须都具有权限才会触发**。功能在**注册时**会分配好权限节点, 只有被授权了权限节点的**来源**才能通过权限判定。
2. **触发判定**: 如果权限判定通过, 则会进行触发判定。触发判定的逻辑由功能注册者决定。请继续阅读本页。


## 注册功能

注册功能需要在插件==[加载](../2.%20插件的加载和卸载.md#插件加载)时==进行.

以下函数用于注册功能:

```python
def register_user_func(
        self,
        name: str,
        handler: Callable[[BaseMessage], Any],
        filter: Callable = None,
        prefix: str = None,
        regex: str = None,
        permission_raise: bool = False,
        description: str = "",
        usage: str = "",
        examples: List[str] = None,
        tags: List[str] = None,
        metadata: Dict[str, Any] = None,
):
def register_admin_func(...)
```

### `register_default_func` (3.8.x 起弃用)

注册一个默认功能, 如果一条消息没有触发==默认功能所在插件的任何其它功能, 也没有触发内置功能==, 则会触发默认功能.

- `handler`: 功能处理函数, 接受一个 `BaseMessage` 类型的参数, 必须定义为==异步函数==.
- `permission`: 功能权限, 默认为 `user` 级别 (`user` 级别的所有权限节点初始时自动分配给每个用户). 其它支持的填写如下:
  - `user` 或者 `PermissionGroup.USER.value`: 用户级别.
  - `admin` 或者 `PermissionGroup.ADMIN.value`: 管理员级别.
  - `root` 或者 `PermissionGroup.ROOT.value`: 超级管理员级别.

### `register_user_func`

注册一个用户功能, 如果能满足触发条件则触发该功能.

- `name`: 功能名称, 用于建立权限结构, 该功能的权限节点为 `<plugin_name>.<name>`.
功能.
- `handler`: 功能处理函数, 接受一个 `BaseMessage` 类型的参数, .
- `filter`: 自定义过滤函数, 接受一个 `Event` 类型的参数, 返回布尔值表示是否触发功能. 如果为 `None` 则不进行过滤.
- `prefix`: 前缀匹配字符串, 如果消息以该前缀开头则触发功能. 例如 `prefix="/help"` 会匹配以 "/help" 开头的消息.
- `regex`: 正则表达式字符串, 如果消息匹配该正则表达式则触发功能. 例如 `regex="\d*"` 会匹配包含任意数量数字的消息. 可以使用 Python 的 re 模块支持的所有正则表达式语法.
- `description`: 功能描述, 用于帮助文档.
- `permission_raise`: 是否针对群聊提权, 如果 `user_id` (消息发送者 QQ 号) 为 admin 级别及以上权限, 则临时提升消息来源群聊的权限为 `root`. 私聊被分在一个特殊的群组, 权限为 `root`.
- `usage`: 使用说明, 用于帮助文档.
- `examples`: 使用示例列表, 用于帮助文档.
- `tags`: 功能标签列表, 用于功能分类.
- `metadata`: 额外元数据字典, 可以存储任意自定义数据.

注意: `filter`, `prefix`, `regex` 三个参数可以组合使用, 组合时需要同时满足所有条件才会触发功能. 如果都为 `None` 则该功能会被每条消息触发(不推荐).

### `register_admin_func`

注册一个管理员功能, 如果能满足触发条件则触发该功能, 其它同上.

## 内置功能

参考[内置功能](3.4%20内置功能.md)

## 例子

[LLM_API 插件](../../8.%20实际项目参考/2.%20LLM_API%20插件项目.md#on_load)


---
title: 权限系统
createTime: 2025-03-27 10:52:00
permalink: /guide/permission/
---

## 权限的作用范围

权限只对==功能==生效.

群组和用户的权限独立, 当且仅当用户权限和群聊权限同时满足时, 才能触发对应功能.

## 权限分级

NcatBot 的内置权限机制包括 `user`, `admin`, `root` 三级:

- `user` 权限: 使用 `user` 级别功能, `user` 权限默认分配给所有用户
- `admin` 权限: `user` 的全部权限以及 `admin` 级别功能.
- `root` 权限: `admin` 的全部权限以及 `root` 级别功能.

## 权限管理

[内置功能](3.4%20内置功能.md)中的 [sm](3.4%20内置功能.md#sm) 和 [acs](3.4%20内置功能.md#acs) 可以用于管理权限.

权限相关的文件将会自动保存到 `data/U_access.json` 和 `data/G_access.json` 文件中, 重启后自动加载.

可以格式化两个文件后手动修改权限.

## 用途

可以管理插件的功能在哪些群聊生效，以及哪些用户可以触发功能。

### 常见用法

- 禁止某个群聊使用某个插件的全部功能: 该插件功能定义为 `user` 权限（默认可以使用），使用 `/acs -g ban <群号> <插件名>.*` 来禁止该群聊使用该插件.
- 允许某个群聊使用某个插件的全部功能: 该插件功能定义为 `admin` 权限（默认不能使用），使用 `/acs -g grant <群号> <插件名>.*` 来允许该群聊使用该插件.

## 自定义权限管理

咕咕咕


---
title: 内置功能
createTime: 2025/03/27 10:00:05
permalink: /guide/builtinf/
---

## 插件配置项

### 注册插件配置项

NcatBot 插件系统内置了 `/cfg` 功能, 用于管理插件配置项.

插件配置项会在正常退出时自动保存, 下次启动时自动加载.

::: warning
配置项会占用内置可持久化数据的 `config` 键值.
:::

可以通过 `BasePlugin.register_config` 注册插件配置项.

函数原型:

```python
def register_config(
    self, key: str, default: Any, rptr: Callable[[str], Any] = None
):
```

- `key`: 插件配置项键名, 用于建立权限结构, 修改插件配置项所需的权限路径为 `cfg.<plugin_name>.<key>`.
- `default`: 插件配置项默认值.
- `rptr`: 插件配置项值转换函数, 接受一个 `str` 类型的参数, 必须定义为==同步函数==, 返回一个 `Any` 类型的值. 如果留空则不做转换默认为 `str` 类型.

### 更改插件配置项

触发格式: 向机器人私聊或者在存在机器人的群聊中发送 `/cfg <plugin_name>.<cfg_name> <value>`.

## 查看已安装插件

默认为==管理员功能==, 用于查看已经安装的插件.

触发格式: 向机器人私聊或者在存在机器人的群聊中发送 `/plg`.

## 设置管理员

默认为==ROOT功能==, 用于设置管理员.

触发格式: 向机器人私聊或者在存在机器人的群聊中发送 `/sm <user_id>`

如果 `user_id` 已经具有管理员权限, 则会取消其管理员权限.

BOT 的回复消息会反应管理员权限的状态

## 插件热重载

默认为==管理员功能==, 用于热重载插件。调试时非常有用。

触发格式: 向机器人私聊或者在存在机器人的群聊中发送 `/reload [-f] <plugin_name>`

- `[-f]`: 可选, 用于强制加载插件, 即使插件未加载也会尝试加载.
- `<plugin_name>`: 插件名称.

如果插件未加载且未使用 `-f` 参数, 则会提示使用 `-f` 参数强制加载.


## 管理权限

默认为==管理员功能==, 用于细致化修改权限.

触发格式: 向机器人私聊或者在存在机器人的群聊中发送 `/acs [-g] [ban]/[grant] <number> <path>`

- `[-g]`: 可选, 用于明确 `<number>` 是否为群聊.
- `[ban]/[grant]`: 指明是授予黑名单还是白名单, 授予黑名单时同时清除白名单.
- `<number>`: 群聊号或者用户 QQ 号.
- `<path>`: 权限路径, 一般格式为 `<plugin_name>.<func_name>`

`/acs` 无法操作某些特定的权限路径, 也无法操作具有 `/acs` 权限的用户. 


---
title: 内置可持久化数据
CreateTime: 2025/03/06 10:07:54
permalink: /guide/persist/
createTime: 2025/03/06 11:19:03
---

内置可持久化数据可以保存** Python 内置类型**的数据, 例如 `int`, `str`, `list`, `dict` 等.

## 数据读写

```python
class MyPlugin(BasePlugin):
    async def on_load(self):
        if "count" not in self.data:
            self.data["count"] = 0
        else:
            self.data["count"] += 1
        print(self.data["count"])
```

直接将数据写在 `self.data` 中即可, 例如上面的代码会在第 `i` 次执行时打印 `i-1`.

## 数据保存

使用 `Ctrl+C` 正常退出 NcatBot 时, `BasePlugin.data` 的数据将会自动保存.

下一次加载时, 这些数据将保持为退出时的状态.

## 实践

### 判断插件是否第一次加载

```python
class MyPlugin(BasePlugin):
    async def on_load(self):
        if "has_loaded" not in self.data:
            print("第一次加载")
            self.data["has_loaded"] = True
        else:
            print("非第一次加载")
```

---
title: 依赖其它插件
creatTime: 2025/03/06 10:07:54
permalink: /guide/plugindep/
createTime: 2025/03/06 11:19:14
---

这里的插件依赖指依赖其它**插件**, 如果依赖 Python 第三方库, 参考[为插件引入 Python 第三方库](6.%20复杂插件开发.md#为插件引入-python-第三方库)

## 声明依赖的插件

使用 `BasePlugin.dependencies` 声明插件依赖, 格式见下.

```python
class MyPlugin(BasePlugin):
    name = "MyPlugin"
    version = "1.0.0"
    dependencies = {
        "OtherPlugin": ">=1.0.0",
        "LLM_API": ">=0.0.1"
    }
```

## 引入依赖的插件

参考[安装插件](../1.%20快速开始/3.%20安装和使用插件.md)

---
title: 为插件引入 Python 第三方库
createTime: 2025/03/06 10:07:54
permalink: /guide/complugin/
---

部分复杂插件可能需要 **Python 第三方库**, 本节介绍如何开发这些插件.

下文假设插件名为 `MyPlugin`.

## 为插件引入 Python 第三方库

在**插件目录**(`plugins/MyPlugin/`)中, 添加 `requirements.txt` 文件, 内容为第三方库的列表.

对于你的用户, 启动 NcatBot 引导程序时将根据你插件的 `requirements.txt` 自动安装库.

对于你来说, 工作环境也无需手动安装第三方库, 启动时引导程序会自动安装你声明的库.


---
title: 私有工作目录
createTime: 2025/03/27 10:07:54
permalink: /guide/prispace/
---

## 私有工作目录

在你的代码中, 使用 `os.chdir()` 函数是==严格禁止==的, 如果你有这个需求, 必须在**上下文管理器**控制的**私有工作目录**中进行.

`BasePlugin` 提供一个上下文管理器 `BasePlugin.work_space`, 使用该上下文管理器进入插件私有目录 `data/MyPlugin/`. 上下文结束时, 会自动修正工作目录.

```python
class MyPlugin(BasePlugin):
    name = 'MyPlugin'
    version = '1.0.0'

    def callback(self, event: Event):
        with self.work_space:
            # 此时目录为 data/MyPlugin/
            # 可以使用 os.chdir 等函数操作了
            
        
        # 退出上下文, 目录切换到你不应该知道的位置.
```

::: warning
私有工作目录下的 `plugin_name.json` 文件用于保存插件可持久化数据, 不应该被占用.
:::



---
title: 定时任务
createTime: 2025/03/27 10:07:54
permalink: /guide/timertask/
---

`BasePlugin` 提供了注册定时任务的功能.

## 注册定时任务

一般在 `BasePlugin.on_load()` 方法中时注册定时任务.

[实际案例](../../8.%20实际项目参考/教程项目/定时任务插件.md)

## 函数原型和使用方法

通过 `BasePlugin.add_scheduled_task` 来注册定时任务，函数原型如下：

```python
class BasePlugin:
    @final
    def add_scheduled_task(
        self,
        job_func: Callable,
        name: str,
        interval: Union[str, int, float],
        conditions: Optional[List[Callable[[], bool]]] = None,
        max_runs: Optional[int] = None,
        args: Optional[Tuple] = None,
        kwargs: Optional[Dict] = None,
        args_provider: Optional[Callable[[], Tuple]] = None,
        kwargs_provider: Optional[Callable[[], Dict[str, Any]]] = None,
    ) -> bool:
        """
        添加定时任务

        Args:
            job_func (Callable): 要执行的任务函数
            name (str): 任务唯一标识名称
            interval (Union[str, int, float]): 调度时间参数
            conditions (Optional[List[Callable]]): 执行条件列表
            max_runs (Optional[int]): 最大执行次数
            args (Optional[Tuple]): 静态位置参数
            kwargs (Optional[Dict]): 静态关键字参数
            args_provider (Optional[Callable]): 动态位置参数生成函数
            kwargs_provider (Optional[Callable]): 动态关键字参数生成函数

        Returns:
            bool: 是否添加成功

        Raises:
            ValueError: 当参数冲突或时间格式无效时
        """
```


### 注册不同类型的任务

通过 `interval` 参数来明确任务类型.

- 一次性任务: 传入字符串格式为 `YYYY-MM-DD HH:MM:SS` 或 GitHub Action 格式 `YYYY:MM:DD-HH:MM:SS`. 在这个时间点执行一次.
- 间隔任务: 传入字符串格式为 `120s`, `2h30m`, `0.5d` 或冒号分隔格式 `00:15:30` (时:分:秒) 或自然语言格式 `2天3小时5秒`. 从当前开始, 经过指定时间间隔后执行一次.
- 每日任务: 传入字符串格式为 `HH:MM`. 每天在这个时间点执行一次.

任务的时间精度有限, 大约有 5s 的误差.

### 任务回调函数

`job_func` 参数为任务回调函数, 该函数会在任务触发时执行. 会传入一些参数, 参数传入规则如下:

::: tip
`args` 参数必须写为元组, Python 语法中, `(expr)` 被解析为一个表达式, 而不是元组, `(expr,)` 才会被解析为元组.
:::

1. `args` 位置参数: 
   - 通过 `args` 静态指定, 在 `add_scheduled_task` 中传入一个 `args` **元组**可以静态指定参数.
   - 通过 `args_provider` 动态指定, 在 `add_scheduled_task` 中传入一个 `args_provider` **函数**可以动态指定参数. 函数的返回值必须是元组, 会在任务触发时调用这个函数并生成 `job_func` 的位置参数.
   - 两者互斥
  
2. `kwargs` 命名参数: 
   - 通过 `kwargs` 静态指定, 在 `add_scheduled_task` 中传入一个 `kwargs` **字典**可以静态指定参数.
   - 通过 `kwargs_provider` 动态指定, 在 `add_scheduled_task` 中传入一个 `kwargs_provider` **函数**可以动态指定参数. 函数的返回值必须是字典, 会在任务触发时调用这个函数并生成 `job_func` 的命名参数.
   - 两者互斥

你也可以用 lambda 表达式之类的来实现函数传参.


### 最大执行次数

通过 `max_runs` 参数来指定任务的最大执行次数, 当任务执行次数超过这个值时, 任务会被移除.

一次性任务最大执行次数默认为 1, 禁用 `max_runs` 参数.

### 任务判定条件

`conditions` 参数为任务执行条件列表, 是一系列的函数, 每个函数都返回一个布尔值. 当所有函数都返回 `True` 时, 任务才会被执行.



---
title:  安装时常见问题
createTime: 2025/02/09 16:34:49
permalink: /guide/prgor4t7/
---

### 各种各样的安装问题通解

1. 手动安装 NapCat。
   - [Windows](https://napneko.github.io/guide/boot/Shell#napcat-shell-win%E6%89%8B%E5%8A%A8%E5%90%AF%E5%8A%A8%E6%95%99%E7%A8%8B)
   - [Linux](https://napneko.github.io/guide/boot/Shell#napcat-installer-linux%E4%B8%80%E9%94%AE%E4%BD%BF%E7%94%A8%E8%84%9A%E6%9C%AC-%E6%94%AF%E6%8C%81ubuntu-20-debian-10-centos9)
   - [MacOS](https://napneko.github.io/guide/boot/Shell#napcat-macos-macos%E5%AE%89%E8%A3%85%E5%B7%A5%E5%85%B7)
2. 在 NapCat WebUI 界面完成登录。
   - 输入 `localhost:6099/webui` 或者 `服务器公网IP:6099/webui` 访问 WebUI
   - 使用默认 token `napcat` 进入 WebUI 界面
   - 手机扫描登录 Bot QQ。
3. 配置 NapCat Websocket 服务器。
   - 2 的界面中，点击 "网络配置"
   - 点击 "新建"，选择 `Websocket服务器`
   - 勾选 "启用"
   - 输入 "名称"，随便输入一个，比如 `NcatBot`
4. 正确填写 NcatBot 如下[配置项](../2.%20基本开发/4.%20配置项.md)：
   - `ws_uri`: 如果你在 3. 没有干别的事情, 那么这里可以用默认值。如果要填写，应该填写为 `IP地址:Port`。`IP地址` 是 `localhost` 或者 `服务器公网IP`；`Port` 为步骤 3 中的 `Port`，默认 `3001`。
   - `ws_token`: 如果你在 3.没有干别的事情, 那么这里也可以用默认值。如果要填写，应该填写为步骤 3 中 `Token`。

下面是步骤三的图片：

![image-20250430200311392](https://ghfast.top/https://raw.githubusercontent.com/huan-yp/image_space/master/img/202504302003465.png)


### Windows10 为什么连接成功了发 "测试" 还是没反应

这个问题是 Win10 命令行开启**快速编辑模式**后 "选中聚焦" 时被暂停导致的.

检查登录 QQ 黑框框是否被 "选中" 了, 当用左键滑过终端时, 会自动选中==并暂停终端==, 暂停终端后自然无法回复, 此时先左键终端再右键终端即可恢复.

也可[关闭快速编辑模式](https://juejin.cn/post/7021695977824190478)一劳永逸解决问题.

### 提示已经登录无法登录

在电脑上退出 Bot 的 QQ 登录, 重试, 如果还是不行, 任务管理器杀掉所有的 QQ 进程后重试.

### Linux 系统提示 WebUI 连接失败

检查 ufw 防火墙设置，需要放通 3000/3001/6099 三个端口。

### Linux Loger: sudo 命令不存在, 请检查错误

执行(Ubuntu):
```
apt-get update
apt-get install sudo
```

### Linux 安装过程中，出现紫色界面(Package configuration)并卡住

先 Ctrl+C 退出程序, ==重启服务器==, 再执行 `python3 main.py`。

### 扫码登录过程中提示二维码过期

先 Ctrl+C 退出程序, 再执行 `python3 main.py` 重新运行。

### 获取二维码失败，请执行 `napcat stop` 后重启引导程序

![image-20250412213633535](https://raw.githubusercontent.com/huan-yp/image_space/master/img/202504122136599.png)

见[下一项](#httpconnectionpoolhost127001-port6099-read-timed-out-read-timeout5)。


### HTTPConnectionPool(host='127.0.0.1', port=6099): Read timed out. (read timeout=5)

![image-20250412213424631](https://raw.githubusercontent.com/huan-yp/image_space/master/img/202504122134722.png)

Windows 的防火墙策略拦截了 6099 端口, 请检查防火墙设置。

[参考](https://blog.csdn.net/albertsh/article/details/122163518)

### Windows 无法启动此程序或运行时闪退

Windows 已保护你的电脑
Microsoft Defender SmartScreen 阻止了无法识别的应用启动。运行此应用可能会导致你的电脑存在风险。

### 手动通过 WebUI 配置 NapCat 时，无法连接到

WebUI 中检查是否 "启用" 了 WebSocket 服务器。

---
title:  运行时常见问题
createTime: 2025/03/26 08:41:23
permalink: /guide/8v15vh4m/
---

### QQ 提醒我使用了第三方插件

这是 QQ 的风控. 建议是==不要频繁切换登录地点==, 也不要==频繁启动 NapCat==.

Ncatbot 运行结束后不会关闭 NapCat 服务, 下次运行时会直接连接上次开启的 NapCat 服务, 请避免频繁启动 NapCat.

### 授权操作超时, 连接 WebUI 成功但无法获取授权信息

连接 WebUI 存在问题，以下是解决方案：

1. 更新 Ncatbot 到最新版本(推荐)
2. 使用 `bot.run(enable_webui_interaction=False)` 跳过基于 WebUI 接口的检查
3. 如果 1 和 2 都没效果，请检查系统防火墙（尤其是 Windows Server）

---
title:  开发时常见问题
createTime: 2025/03/26 08:41:39
permalink: /guide/pkst6v9y/
---


---
title: 简单示例
createTime: 2025/01/23 20:00:05
permalink: /guide/eznrproj/
---
## 简单示例

---
对于初学者但是对 QQ 机器人有简单需求的用户, 这里提供一些可供 CV 的示例:

### 捕获指定群聊的指定消息内容, 并且发送消息

```python
from ncatbot.core import BotClient
from ncatbot.core import GroupMessage

bot = BotClient()

@bot.group_event()
async def on_group_message(msg:GroupMessage):
    group_uin = 12345678 # 指定群聊的账号
    if msg.group_id == group_uin and msg.raw_message == "你好":
        await bot.api.post_group_msg(msg.group_id, text="你好呀，有什么需要我帮忙的吗？")

bot.run()
```

运行结果如下：  
![pic](https://foruda.gitee.com/images/1737626227690770562/ae0bc55c_13790314.png)

### 捕获指定群聊的指定用户的指定信息，并且进行图片回复

```python
from ncatbot.core import BotClient
from ncatbot.core import GroupMessage

bot = BotClient()

@bot.group_event()
async def on_group_message(msg:GroupMessage):
    group_uin = 12345678 # 指定群聊的账号
    user_uin = 987654321# 指定用户的账号
    if msg.group_id == group_uin and msg.user_id == user_uin and msg.raw_message == "你好":
        await bot.api.post_group_file(group_id=group_uin, image="https://gitee.com/li-yihao0328/nc_bot/raw/master/logo.png")# 文件路径支持本地绝对路径，相对路径，网址以及base64

bot.run()
```

运行如下:
![输入图片说明](https://foruda.gitee.com/images/1737626482165344411/5bba3f8f_13790314.png)


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


---
title: 上传和获取文件
createTime: 2025/04/22 14:54:49
permalink: /guide/to4czozs/
---

## 上传文件

发送文件。

::: tip
由于 NapCat 的一些原因, 发送**视频**建议以上传文件的形式进行.
:::

[详细文档](../../4.%20API%20参考/2.%20主要%20API%20及其使用.md#上传文件)

### 通过文件消息发送

```python
from ncatbot.core import BotClient
bot = BotClient()
api = bot.run_blocking(bt_uin="123456") # 这里写你 bot 的 QQ 号
api.post_private_file(user_id="123456", file = "path/to/file") # 这里写接收者的 QQ 号和文件的路径
api.post_private_file(user_id="123456", video = "path/to/video") # 这里写接收者的 QQ 号和视频的路径
```

- 路径一般写**绝对路径**，也可以写 url。写相对路径可能会出错。
- 发送群文件的文件消息，应该使用 `api.post_group_file` 和 `group_id`，其它格式一致。


### 通过专用上传接口发送

专用接口为 `bot.upload_group_file`，群文件专用。

参考详细文档。

## 获取文件

下载文件，下载群文件，整理群文件。

[详细文档](../../4.%20API%20参考/2.%20主要%20API%20及其使用.md#获取文件)

---
title: 主动发送消息
createTime: 2025/04/22 13:21:39
permalink: /guide/activesm/
---

## 代码示例

```python
from ncatbot.core import BotClient

bot = BotClient()
api = bot.run_blocking(bt_uin="123456", root="1234567") # 启动 NcatBot, NcatBot 接口可用时返回 API 实例
api.post_private_msg_sync(12345678, "你好") # 此时 NcatBot 已经启动完成, 可以正常使用接口
bot.exit()
print("退出")
```

- 应该不太需要解释，启动后直接调用 API 发送消息。
- 只要 NcatBot 处于运行状态，同进程任何位置都可以使用 `BotAPI` 实例来调用接口。
- 可以使用全局变量、传参等方式，将 `BotAPI` 实例传递到其他模块中，方便其他模块调用接口。
- 主动发送消息和回调函数不冲突，在上面的代码中你仍然可以注册回调函数，在收到消息时做一些事情。


---
title: 发送合并转发消息
createTime: 2025/04/22 15:21:39
permalink: /guide/mtransfer/
---

## 发送转发消息

[参考](../../4.%20API%20参考/3.%20其它%20API%20介绍.md)中查找包含 `single` 字段的函数原型。

```python
from ncatbot.core import BotClient
bot = BotClient()
api = bot.run_blocking(bt_uin="123456", root="1234567") # 替换为实际 Bot QQ 号和 root QQ 号
api.forward_friend_single_msg("123456", "132456789") # 第一个参数替换为实际接受者 QQ 号，第二个参数中替换为实际的消息 ID
```

## 发送合并转发消息

[参考](../../4.%20API%20参考/3.%20其它%20API%20介绍.md#发送合并转发消息)

```python
from ncatbot.core import BotClient
bot = BotClient()
api = bot.run_blocking(bt_uin="123456", root="1234567")
api.send_group_forward_msg("123456", ["132456789", "123456789"]) # 第一个参数替换为实际群号，第二个参数全部替换为实际的消息 ID
```

NcatBot 不支持伪造合并转发消息。


---
title: 发送复杂消息
createTime: 2025/04/22 15:21:39
permalink: /guide/sendcomm/
---

## 发送复杂消息

下面一串用于检索增强。

- 发送图片。
- 发送@，发送 @，发送at，发送 at，发送At，发送 At，发送AT，发送AT
- 发送表情包。
- 发送表情。

[参考](../../4.%20API%20参考/2.%20主要%20API%20及其使用.md#发送简单消息)

```python
from ncatbot.core import BotClient, MessageChain, Text, At, Image, Face, Reply

bot = BotClient()
api = bot.run_blocking(bt_uin="123456") # 替换为实际的 BOT QQ 号

message = MessageChain([
    "喵喵喵~",
    Text("你好, 这是一条复杂的测试消息"),
    At(123456), # 替换为实际的 QQ 号
    Image(r"meow.jpg"), # 替换为你自己的图片路径
    [
        Face(123), # 替换为实际的 QQ 表情 ID
        Image("https://ghfast.top/https://raw.githubusercontent.com/huan-yp/image_space/master/img/202504081258124.png"), # 替换为你想发的图片路径
        Reply(123456), # 替换为实际的消息 ID
    ]
])
message += MessageChain(["咕咕咕"])
message = message + At(123456) # 替换为实际的 QQ 号
api.post_group_msg_sync(group_id=123456, rtf=message) # 替换为实际的群号
```

效果展示：

![效果展示](https://ghfast.top/raw.githubusercontent.com/huan-yp/image_space/master/img/202504221424416.png)

## 发送音乐卡片

咕咕咕

---
title: 处理好友请求和加群请求
createTime: 2025/04/22 13:21:39
permalink: /guide/friendag/
---

## 主动模式

```python
from ncatbot.core import BotClient, Request
import time

def handle_request(msg: Request):
    # 同步版本
    comment = msg.comment # 获取验证信息
    
    if "特定关键词" in comment:
        msg.reply_sync(True, comment="请求已通过")
    else:
        msg.reply_sync(False, comment="请求被拒绝")

async def handle_request_async(msg: Request):
    # 异步版本
    comment = msg.comment     # 获取验证信息
    
    if "特定关键词" in comment:
        await msg.reply(True, comment="请求已通过")
    else:
        await msg.reply(False, comment="请求被拒绝")

bot = BotClient()
bot.add_request_handler(handle_request)
bot.run_blocking(bt_uin="123456", root="1234567")
time.sleep(1000) # 睡眠, 此时 NcatBot 仍然在运行，收到好友请求后将调用 handle_request 函数
bot.exit() # 退出 NcatBot
```

- `add_request_handler` 用于注册 Request 事件处理器，好友请求和加群请求属于 Request 类事件。
- 上面代码包含同步和异步两个版本，功能完全一致，且都支持使用 `add_request_handler` 添加。
- 也可以使用修饰器来注册回调函数，参考[回调函数](../../3.%20事件处理/1.%20回调函数.md)。

## 插件模式

请先了解插件项目的文件结构，参考[了解插件](../../6.%20开发%20NcatBot%20插件/1.%20了解%20NcatBot%20插件.md)

```python
from ncatbot.plugin import BasePlugin, CompatibleEnrollment
from ncatbot.core import Request

bot = CompatibleEnrollment()

class RequestHandlerPlugin(BasePlugin):
    name = "RequestHandler"
    version = "1.0"

    @bot.request_event()
    async def handle_request(self, msg: Request):
        comment = msg.comment
        if "特定关键词" in comment:
            await msg.reply(True, comment="请求已通过")
        else:
            await msg.reply(False, comment="请求被拒绝")

    async def handle_request_with_event(self, event: Event):
        request = event.data
        comment = request.comment
        if "特定关键词" in comment:
            await request.reply(True, comment="请求已通过")
        else:
            await request.reply(False, comment="请求被拒绝")

    async def on_load(self):
        print(f"{self.name} 插件已加载")
        # self.register_handler("ncatbot.request_event", self.handle_request_with_event)

    async def on_unload(self):
        print(f"{self.name} 插件已卸载")
```

- 这里使用了兼容回调函数注册修饰器来注册回调函数。
- 也可以使用 `register_handler` 来注册**事件处理器**，通过事件总线获取对应的**请求事件**并处理。
- 事件机制可以参考[事件上报](../../3.%20事件处理/2.%20事件上报.md)和[事件的发布与订阅](../../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.1%20事件的发布和订阅.md)。

---
title: 定时任务插件
createTime: 2025/03/27 10:07:54
permalink: /guide/zaobaplg/
---

## 定时任务插件

请先了解插件项目的文件结构，参考[了解插件](../../6.%20开发%20NcatBot%20插件/1.%20了解%20NcatBot%20插件.md)

只有插件模式有内置的定时任务功能，如果需要在主动模式下使用，参考[个人插件](../../6.%20开发%20NcatBot%20插件/6.%20个人插件.md)。

## 源代码

```python
from ncatbot.plugin import BasePlugin, CompatibleEnrollment

import datetime

class ZaoBa(BasePlugin):
    name = "ZaoBa" # 插件名称
    version = "0.0.1" # 插件版本

    async def on_load(self):
        # 插件加载时执行的操作, 可缺省

        print(f"早八问候插件已加载")
        print(f"插件版本: {self.version}")
        self.add_scheduled_task(
            job_func=self.zaoba, 
            name="早八问候", 
            interval="08:00",
            args=("早八人", ),
        )
        self.add_scheduled_task(
            job_func=self.remind, 
            name="起床提醒", 
            interval="30s", 
            max_runs=10, 
            args_provider=lambda:(
                datetime.datetime.now().hour, 
                datetime.datetime.now().minute
            ),
        )
        self.add_scheduled_task(
            job_func=self.exam, 
            name="考试提醒",
            interval="2025-03-27 13:12:20",
            kwargs={"subject":"物理"}
        )
    
    def zaoba(self, extra):
        print("你好, 早八人")
        print(extra)
    
    def remind(self, hour, minute):
        print(f"起床了, 已经 {hour} 点 {minute} 分了")
        
    def exam(self, subject):
        print(f"要考试了, 是 {subject}")
```