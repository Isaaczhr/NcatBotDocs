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

[Windows 安装 NcatBot](./1.2%20Windows%20安装.md)

[Windows 一键安装 NcatBot](./1.4%20Windows%20一键安装.md)

[Linux 安装 NcatBot](./1.1%20Linux%20安装.md)

[MacOS 安装 NcatBot(暂未支持)](./1.3%20MacOS%20安装.md)

[使用云上 NcatBot 镜像](../5.%20杂项/4.%20轻松上云.md)

## 使用 NcatBot 开发

移步 [开发指南](2.%20开发指南.md).


---
title: Linux 安装
createTime: 2025-03-25 15:50:00
permalink: /guide/linuxins/
---

## 检查基本环境

推荐使用 Ubuntu 22.04 LTS 版本.

### Python

如果使用 Debian/Ubuntu 并且版本低于 `22.04`(不包括), ==需要手动更新 Python 版本到 `3.10` 及以上, 推荐更新到 `3.12`.==

### 安装 NcatBot

项目已经发布到 PYPI, 可以使用 pip 直接下载本项目.

另外, 如果你下载过 github 上的 .zip 压缩文件并解压出来过, 请**删掉它们**.

在终端直接运行:

::: code-tabs
@tab pip(稳定版, 推荐)

```shell
pip install ncatbot -U -i https://mirrors.aliyun.com/pypi/simple
```

@tab Gitee(过时, 不推荐)

```shell
pip install git+https://gitee.com/li-yihao0328/nc_bot.git
```

@tab GitHub(开发预览版, 不推荐)

```shell
pip install git+https://github.com/liyihao1110/ncatbot.git
```

:::

### 安装其它基本工具

`curl` 必须安装, 其它工具的安装可以跳过.

::: code-tabs
@tab Debian/Ubuntu
```shell
sudo apt-get update -y -qq && sudo apt-get -y -qq install curl zip unzip jq curl xvfb screen xauth procps
```
@tab RPM/CentOS
```shell
sudo dnf install -y epel-release && sudo dnf install --allowerasing -y zip unzip jq curl xorg-x11-server-Xvfb screen procps-ng" "安装zip unzip jq curl xorg-x11-server-Xvfb screen procps-ng
```
:::

## 检查网络环境

NcatBot 需要使用 `3000`、`3001`、`6099` 三个端口, 请确保你的**服务器**以及**系统**均已经放通了这三个端口.

`3000` 的需求并非强制的, 可以忽略, `3001`, `6099` 分别是默认的 websocket 端口和 WebUI 端口, 必须保证放通. 当然, 你可以通过[配置项](../2.%20基本开发/2.%20配置项.md)修改端口.

### 服务器防火墙

在云服务器提供商, 例如阿里云, 腾讯云提供的**安全组**中, 确保放通了 `3000`、`3001`、`6099` 三个端口.

如果 NcatBot 和 NapCat 都在同一个服务器上, 一般可以省略这一步.

NcatBot 和 NapCat 的关系查看[简单认识](../5.%20杂项/1.%20认识%20NcatBot.md).

### 系统防火墙

#### Debian/Ubuntu

Debian/Ubuntu 系统通常预装了 UFW, 但**默认未启用**. 如果未安装，可以通过以下命令安装:

```
sudo apt update
sudo apt install ufw
```

查看防火墙状态及规则(需要确保状态为 `disabled/inactivated/inactive` 或者已经放通所需的端口):

```
sudo ufw status
```

禁用防火墙:

```
sudo ufw disable
```

放通所需端口:
```
sudo ufw allow 3000/tcp
sudo ufw allow 3001/tcp
sudo ufw allow 6099/tcp
```

#### RPM/CentOS

一般情况下, RPM 系列都内置了 firewall-cmd 工具, 如果确实没有, 可以用以下命令安装:

```
sudo dnf update
sudo dnf install firewalld
```

查看防火墙状态(需要确保状态为 `disabled/inactivated/inactive` 或者放通所需要的端口):

```
sudo firewall-cmd --state
sudo firewall-cmd --list-all
```

放通所需端口:
```
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --permanent --add-port=3001/tcp
sudo firewall-cmd --permanent --add-port=6099/tcp
sudo firewall-cmd --reload
```

## 执行代码

### 准备 QQ 号

为了测试, 需要两个 QQ 号：

- 一个 QQ 号称为 **Bot**, Bot 一般是小号, 它**由 NcatBot 控制**.
- 另一个 QQ 号称为 **root**, root 一般是大号, 由你自己控制, 拥有管理 Bot 的权限.

### 执行代码

1. 复制以下代码(==记得把代码中的 `bot_uin` 改成 Bot 的 QQ 号, 把 `root` 改成你的 QQ 号==), 保存到工作目录下 `main.py` 中.

2. 在终端中输入 `python3 main.py` 执行代码, 执行过程中可能会提示**需求重启服务(紫色页面)**, 参考[FAQ](../7.%20常见问题/1.%20安装时常见问题.md) 操作.

3. 如果是第一次执行, 可能会弹出一个窗口询问是否允许修改, ==选择是==. 之后会弹出==另一个窗口==, 等待一段时间后, 会显示二维码. 扫码时, 需要在**手机上先登录 Bot QQ 号**, 用手机扫码登录.

4. 扫码登录完成并提示 `Bot 启动成功` 后, 用 **root** QQ 号向你的 **Bot** QQ 号 ==私聊==发送一句 `测试`, 收到 `NcatBot 测试成功喵~` 的消息, 说明 NcatBot 已经成功运行起来了!

::: code-tabs
@tab Python
```python
from ncatbot.core import BotClient, GroupMessage, PrivateMessage
from ncatbot.utils import config
from ncatbot.utils import get_log

_log = get_log()

config.set_bot_uin("123456")  # 设置 bot qq 号 (必填)
config.set_root("123456")  # 设置 bot 超级管理员账号 (建议填写)

bot = BotClient()


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


if __name__ == "__main__":
    bot.run()
```
:::

## 常见问题

### 安装过程中，出现紫色界面(Package configuration)并卡住

先 Ctrl+C 退出程序, ==重启服务器==, 再执行 `python3 main.py`。

### 更多

查阅 [FAQ](../7.%20常见问题/1.%20安装时常见问题.md)


---
title: Window 安装
createTime: 2025/02/07 15:21:39
permalink: /guide/wininsta/
---

运行你的第一个 Bot !

## 任务列表

我们给出一个简单的任务清单, 你可以按照下面的步骤来安装 NcatBot.

1. 在你的电脑上安装 Python >= 3.10 (推荐 3.12).

2. 通过 pip 安装 NcatBot.

3. 检查环境是否正常.

4. 扫码登录 NcatBot.

## 1. 安装 Python

如果你还不会安装 Python, 请先在 [菜鸟教程](https://www.runoob.com/python3/python3-tutorial.html) ==认真学习== Python 相关的知识后再使用本项目.

这里给出一个正确的 [Python](https://repo.huaweicloud.com/python/3.12.9/python-3.12.9-amd64.exe) 安装包. 下载后双击安装.

安装时请一定注意, 保证 **Add Python 3.12 to PATH** 处于勾选状态, 其余选项**保持默认**.

![要勾选 Add to PATH](https://raw.githubusercontent.com/huan-yp/image_space/master/img/202503271452016.png)

## 2. 安装 NcatBot

项目已经发布到 PYPI, 可以使用 pip 直接下载本项目.

另外, 如果你下载过 github 上的 .zip 压缩文件并解压出来过, 请**删掉它们**.

按下 `Win+R`, 在左下角打开**运行**, 输入 `powershell` 并回车, 打开**终端**.

复制下面的代码, 粘贴到**终端**中, 按回车执行.

::: code-tabs
@tab pip(稳定版, 推荐)

```shell
pip install ncatbot -U -i https://mirrors.aliyun.com/pypi/simple
```

@tab Gitee(过时, 不推荐)

```shell
pip install git+https://gitee.com/li-yihao0328/nc_bot.git
```

@tab GitHub(开发预览版, 不推荐)

```shell
pip install git+https://github.com/liyihao1110/ncatbot.git
```

:::

如果出现**红色**的错误信息, 例如:

```
pip : 无法将“pip”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径
正确，然后再试一次。
```

说明**没能成功安装 Python**, 一般是因为**第一个页面没能勾选 Add Python 3.xx to PATH**, 或者是因为**第二个页面取消了 pip 的勾选**.

如果中途没有出现**红色**的错误信息, 并且最后出现:

```
Successfully installed Markdown-3.7 Pillow-11.1.0 Pygments-2.19.1 anyio-4.9.0 appdirs-1.4.4 certifi-2025.1.31 charset-normalizer-3.4.1 colorama-0.4.6 gitdb-4.0.12 gitpython-3.1.44 h11-0.14.0 httpcore-1.0.7 httpx-0.28.1 idna-3.10 importlib-metadata-8.6.1 ncatbot-3.5.9 packaging-24.0 psutil-6.1.1 pyee-11.1.1 pyppeteer-2.0.0 pyyaml-6.0.2 qrcode-8.0 qrcode-terminal-0.8 requests-2.32.3 schedule-1.2.2 smmap-5.0.2 sniffio-1.3.1 tqdm-4.67.1 typing-extensions-4.12.2 urllib3-1.26.20 websockets-10.4 zipp-3.21.0
```

则说明安装成功.

## 3. 检查运行环境

### 检查 NcatBot 是否安装成功

在**终端**中, 输入 `python` 并回车, ==打开 Python 交互模式==.

复制以下代码, 粘贴进去, 回车执行.

::: code-tabs
@tab python

```python
import ncatbot
print(ncatbot.__version__)
```

:::

如果输出了版本号, 例如 `3.5.9`, 则说明安装成功.

### 检查 QQ 版本

NcatBot 需要 QQ 版本至少达到 `9.9.18` 才能正常运行, 如果你不知道你的 QQ 是哪个版本, 请前往[官网](https://im.qq.com)或者[点击这里的官方下载链接](https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.18_250318_x64_01.exe) 下载最新版 QQ 的安装包. 双击安装包更新即可.


### 准备 QQ 号

为了测试, 需要两个 QQ 号：

- 一个 QQ 号称为 **Bot**, Bot 一般是小号, 它**由 NcatBot 控制**.
- 另一个 QQ 号称为 **root**, root 一般是大号, 由你自己控制, 拥有管理 Bot 的权限.

### 确保没有重复登录

**Bot** 必须处于**电脑不在线状态**, 检查自己的电脑, 如果电脑上登录了 **Bot**, 请**退出登录**. 

## 4. NcatBot 启动

建立一个==新的工作目录==(文件夹), 比如建一个 `ncatbot` 文件夹, 进行如下操作:

1. 双击进入 `ncatbot` 文件夹.

2. 执行主函数:
   
   ::: details 方法一
      1. 在==文件夹中打开终端==(右键这个文件夹的空白区域, 选择 "在终端中打开"), 输入 `python` 并回车打开 ==Python 交互终端==.

      2. 复制执行下面的代码(==记得把代码中的 `bot_uin` 改成 **Bot** QQ 号, 把 `root` 改成 **root** QQ 号==)并回车执行. 
   :::

   ::: details 方法二
      1. 在文件夹中创建一个新文件, 名为 `main.py`, 注意文件的[后缀名]()是 `.py`.
   
      2. 用**记事本等文本编辑器**打开 `main.py` 文件, 复制下面的代码, 粘贴进去, 并==记得把代码中的 `bot_uin` 改成 **Bot** QQ 号, 把 `root` 改成 **root** QQ 号==
   
      3. Ctrl+S **保存**.
       
      4. 在==文件夹中打开终端==(右键这个文件夹的空白区域, 选择 "在终端中打开"), 输入 `python main.py` 并回车执行.
   :::


3. 如果是第一次执行, 可能会弹出一个窗口询问是否允许修改, ==选择是==. 之后会弹出==另一个窗口==, 等待一段时间后, 会显示二维码. 扫码时, 需要在**手机上先登录 Bot QQ 号**, 用手机扫码登录.

4. 用 **root** QQ 号向你的 **Bot** QQ 号 ==私聊==发送一句 `测试`, 收到 `NcatBot 测试成功喵~` 的消息, 说明 NcatBot 已经成功运行起来了!

5. 请注意, ==请不要关闭打开的两个终端窗口(黑框框)==, 否则 NcatBot 将无法正常运行.


::: code-tabs
@tab python

```python
from ncatbot.core import BotClient, GroupMessage, PrivateMessage
from ncatbot.utils import config
from ncatbot.utils import get_log

_log = get_log()

config.set_bot_uin("123456")  # 设置 bot qq 号 (必填)
config.set_root("123456")  # 设置 bot 超级管理员账号 (建议填写)

bot = BotClient()


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


if __name__ == "__main__":
    bot.run()

```

:::


## 5. 常见问题

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
title: MacOS 安装
createTime: 2025/02/07 15:21:39
permalink: /guide/MacOSins/
---

暂时不提供官方支持, 自行适配, 可[进群](https://qm.qq.com/q/L6XGXYqL86)求助.



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

你也可以在[这里](https://ghfast.top/https://github.com/liyihao1110/ncatbot/releases/download/3.4.3/main.exe)下载一键安装工具.

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
title: 开发指南
createTime: 2025/03/25 23:21:39
permalink: /guide/devguide/
---

## 概览

### NcatBot 的几种开发范式

#### BotClient 项目

快速开始中示例是一个 BotClient 项目. BotClient 项目可以只包含一个文件, 没有严格的目录结构要求和命名要求, 适合简单上手体验.

参考 [示例代码解析](../2.%20基本开发/1.%20示例代码解析.md).

参考 [简单的 BotClient 项目](../8.%20实际项目参考/1.%20简单%20BotClient%20项目.md).

#### 插件项目(推荐)

插件项目是 NcatBot 的核心, 也是 NcatBot 的主要开发范式. 插件项目有**一定的目录结构要求和命名规范要求**. 与之对应的, 插件项目具有**便利的功能支持**和**丰富的社区生态**, 通过插件项目, 可以开发出功能强大, 分发容易的 QQ 机器人.


从 [了解 NcatBot 插件](../6.%20开发%20NcatBot%20插件/1.%20了解%20NcatBot%20插件.md) 开始, 阅读插件开发的文档.

实际插件项目参考:

- [LLM_API 插件项目](../8.%20实际项目参考/2.%20LLM_API%20插件项目.md).

#### 嵌入到已有项目

咕咕咕

### 学习路径

- 阅读你操作系统的安装方式.
- 阅读 [示例代码解析](../2.%20基本开发/1.%20示例代码解析.md).

#### 开发插件项目

- 阅读[回调函数](../3.%20事件处理/1.%20回调函数.md)部分, 了解回调函数参数的数据格式.
- 重点阅读:
  - [了解 NcatBot 插件](../6.%20开发%20NcatBot%20插件/1.%20了解%20NcatBot%20插件.md)
  - [插件的加载和卸载](../6.%20开发%20NcatBot%20插件/2.%20插件的加载和卸载.md)
  - [事件的发布和订阅](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.1%20事件的发布和订阅.md)
  - [注册功能](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.2%20注册功能.md)
  - [权限系统](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.3%20权限系统.md)
  - [内置功能](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.4%20内置功能.md)
  - [发布你的插件](../6.%20开发%20NcatBot%20插件/5.%20发布你的插件.md)
- 学习示例插件项目:
  - [LLM_API 插件项目](../8.%20实际项目参考/2.%20LLM_API%20插件项目.md)
- 阅读[事件上报](../3.%20事件处理/2.%20事件上报.md), 了解能够监听和处理的事件类型.
- 补充学习: 按照文档导航补充学习其它知识, 或者使用文档项目的搜索功能.

#### 开发 BotClient 项目

- 仔细阅读 [回调函数](../3.%20事件处理/1.%20回调函数.md), 明确如何注册回调函数.
- 学习示例插件项目:
  - [简单 BotClient 项目](../8.%20实际项目参考/1.%20简单%20BotClient%20项目.md)
- 阅读[事件上报](../3.%20事件处理/2.%20事件上报.md), 了解能够监听和处理的事件类型.
- 补充学习: 按照文档导航补充学习其它知识, 或者使用文档项目的搜索功能.


## 文档导航

### 1. 快速开始

[1. 快速开始](./1.%20快速开始.md): 了解如何快速上手 NcatBot.
[2. 开发指南](./2.%20开发指南.md): 了解如何基于 NcatBot 开发 QQ 机器人.
[3. 安装和使用插件](3.%20安装和使用插件.md): 基于 NcatBot 开发的 QQ 机器人通常以**插件**的形式发布, 了解如何安装和使用插件. 

### 2. 基本开发

[1. 示例代码解析](../2.%20基本开发/1.%20示例代码解析.md): 拆解快速开始中的示例代码, 理解 NcatBot 的基本工作流程.

[2. 配置项](../2.%20基本开发/2.%20配置项.md): 介绍 NcatBot 的配置项, 了解可自定义的内容.

[3. AI+NcatBot](../2.%20基本开发/3.%20AI+NcatBot.md): 如何使用 AI 快速进行插件项目开发或者 BotClient 项目开发.

### 3. 事件处理

[1. 回调函数](../3.%20事件处理/1.%20回调函数.md): 了解 NcatBot 如何处理事件, 了解 NcatBot 向回调函数传递的的事件参数.

[2. 事件上报](../3.%20事件处理/2.%20事件上报.md): 了解 NcatBot 可以监听哪些 QQ 事件.

### 4. API 参考

[1. API 调用](../4.%20API%20参考/1.%20API%20调用.md): 了解 NcatBot 的 API 调用方式.

[2. 主要 API 说明](../4.%20API%20参考/2.%20主要%20API%20及其使用.md): 了解如何使用 NcatBot 的主要 API, 例如如何发送消息和文件等. 

[3. 其它 API 说明](../4.%20API%20参考/3.%20其它%20API%20及其使用.md): 了解如何使用 NcatBot 的其它 API, 例如如何获取群成员信息, 通过加群申请等.

### 5. 杂项

[1. 认识 NcatBot](../5.%20杂项/1.%20认识%20NcatBot.md): 了解 NcatBot 社区和历史.

[2. 使用远端 napcat 接口](../5.%20杂项/2.%20使用远端%20napcat%20接口.md): NcatBot 如何使用位于另外一台计算机上的 NapCat 接口.

[3. 日志](../5.%20杂项/3.%20日志.md): NcatBot 的日志系统主要用于调试, 如果遇到问题需要求助, 请附上日志文件.

[4. 轻松上云](../5.%20杂项/4.%20轻松上云.md): NcatBot 与 IDC 服务商有合作, 利用合作服务商的云服务, 可以**轻松且经济**地部署 NcatBot 上云.

[5. CLI](../5.%20杂项/5.%20CLI.md): NcatBot-CLI 用于管理 NcatBot 的插件, 了解如何使用 NcatBot-CLI 以便于开发 NcatBot 插件.

[6. 术语表](../5.%20杂项/6.%20术语表.md): 了解 NcatBot 的术语.

### 6. 开发 NcatBot 插件

[1. 了解 NcatBot 插件](../6.%20开发%20NcatBot%20插件/1.%20了解%20NcatBot%20插件.md): 对 NcatBot 插件的基本了解.

[2. 插件的加载和卸载](../6.%20开发%20NcatBot%20插件/2.%20插件的加载和卸载.md): 插件的生命周期始于加载, 终于卸载, 了解 NcatBot 插件的加载卸载过程.

**3. 插件的交互系统**: 
  - [事件的发布和订阅](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.1%20事件的发布和订阅.md): 插件可以监听**广义事件**, 即 **QQ 事件**和**插件事件**. 插件也可以发布自定义事件. 了解事件如何被发布、订阅和处理.
  - [注册功能](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.2%20注册功能.md): 插件能够注册自定义功能, 功能是对**事件及其处理**的上层抽象, 通过功能可以更高效的设计 QQ Bot.
  - [权限系统](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.3%20权限系统.md): 权限系统用于决定**每个特定功能**能被哪些用户和群聊使用, 让你的插件更加安全.
  - [内置功能](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.4%20内置功能.md): NcatBot 内置了多个功能以方便插件开发, 了解如何使用这些功能.
  
**4. 插件高级功能**:
  - [内置可持久化数据](../6.%20开发%20NcatBot%20插件/4.%20插件高级功能/4.1.%20内置可持久化数据.md): NcatBot 插件系统可以持久化数据, 使用内置可持久化数据可以方便的长期保存 Bot 运行时数据.
  - [依赖其它插件](../6.%20开发%20NcatBot%20插件/4.%20插件高级功能/4.2.%20依赖其它插件.md): 插件可以依赖其它插件, 以便构建更加强大的插件.
  - [依赖第三方 Python 库](../6.%20开发%20NcatBot%20插件/4.%20插件高级功能/4.3.%20依赖第三方%20Python%20库.md): 插件可以依赖第三方 Python 库, 以便使用第三方库提供的功能.
  - [私有工作目录](../6.%20开发%20NcatBot%20插件/4.%20插件高级功能/4.4%20私有工作目录.md): NcatBot **禁止**插件进行 `os.chdir` 切换目录操作, 使用私有工作目录上下文可以方便的进行文件和路径操作.
  - [定时任务](../6.%20开发%20NcatBot%20插件/4.%20插件高级功能/4.5%20定时任务.md): NcatBot 插件可以注册定时任务, 让你的 Bot 提醒你上早八吧.

[5. 发布你的插件](../6.%20开发%20NcatBot%20插件/5.%20发布你的插件.md): NcatBot 提供插件的快速分发和快速部署方案, 了解如何发布你的插件以便用户能够便捷使用.
  
### 7. 常见问题

[1. 安装时常见问题](../7.%20常见问题/1.%20安装时常见问题.md): **安装或者首次运行** NcatBot 时能够遇到的常见问题.

[2. 运行时常见问题](../7.%20常见问题/2.%20运行时常见问题.md): (非首次)运行时可能遇到的问题.

[3. 开发时常见问题](../7.%20常见问题/3.%20开发时常见问题.md): 进行开发或者功能测试时可能遇到的文件.

### 8. 实际项目参考

[1. 简单 BotClient 项目](../8.%20实际项目参考/1.%20简单%20BotClient%20项目.md): BotClient 项目的示例.

[2. LLM_API 插件项目](../8.%20实际项目参考/2.%20LLM_API%20插件项目.md): 插件项目示例————LLM_API.

[3. 早八提醒插件](../8.%20实际项目参考/3.%20早八提醒插件.md): 插件项目示例————早八提醒插件.


---
title: 安装和使用插件
createTime: 2025/03/27 11:45:00
permalink: /guide/inplugin/
---

### 手动安装插件

将**插件文件夹**放入(运行[引导程序](../5.%20杂项/6.%20术语表.md#引导程序)时的)工作目录下 `plugins` 文件夹下即可.

### 自动安装插件

参阅[CLI](../5.%20杂项/5.%20CLI.md)

对于已经发布到[插件商店](https://github.com/ncatbot/ncatbot-plugins)的插件, 可以使用 CLI 的 `install` 命令自动安装.

例如查看[插件列表](https://github.com/ncatbot/NcatBot-Plugins/tree/main/plugins)找到已有的插件 `TestPlugin` 后, 可以使用 `install TestPlugin` 命令安装插件.

---
title: 示例代码解析
createTime: 2025/02/08 10:07:54
permalink: /guide/k4qzlkxe/
---

NcatBot 是如何运作的？

## 最小示例

### 代码 

::: code-tabs
@tab python

```python
# ========= 导入必要模块 ==========
from ncatbot.core import BotClient, GroupMessage, PrivateMessage
from ncatbot.utils import config
from ncatbot.utils import get_log

# ========== 设置配置项 ==========
config.set_bot_uin("123456")  # 设置 bot qq 号 (必填)
config.set_root("123456")  # 设置 bot 超级管理员账号 (建议填写)

# ========== 创建 BotClient ==========
bot = BotClient()

# ========= 注册回调函数 ==========
_log = get_log()

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
    bot.run()
```
:::

### 导入必须的模块

::: code-tabs
@tab python

```python
from ncatbot.core import BotClient
from ncatbot.core import GroupMessage, PrivateMessage
from ncatbot.utils import config
from ncatbot.utils import get_log
```

:::

导入部分分为 4 段, 分别是:

1. 导入 `BotClient` 类, 用于创建一个 bot 实例, NcatBot 的**所有接口和功能**都封装在这个类中.
2. 导入 `GroupMessage` 和 `PrivateMessage` 类, 用于==类型注解==, 方便使用 IDE 的代码补全功能.
3. 导入 `get_log` 函数, 用于获取日志实例, 输出==日志信息==方便调试.
4. 导入 `config` 模块, 用于配置 bot 的相关参数.

### 设置配置项

::: code-tabs
@tab python
```python
# ========== 设置配置项 ==========
config.set_bot_uin("123456")  # 设置 bot qq 号 (必填)
config.set_root("123456")  # 设置 bot 超级管理员账号 (建议填写)
```
:::

请参阅[配置项](../2.%20配置项.md).

### 创建 bot 实例

::: code-tabs
@tab python
```python
# ========== 创建 bot 实例 ==========
bot = BotClient() # 创建一个 BotClient 实例
```
:::


::: warning
NcatBot 要求, 一个独立的**进程**只能==创建唯一一个 BotClient 实例==.
:::

### 注册回调函数

::: code-tabs
@tab python

```python
# ========= 注册回调函数 ==========
_log = get_log() # 获取日志实例, 输出日志信息方便调试
@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg) # 打印收到的消息到日志中
    if msg.raw_message == "测试":
        await msg.reply("NcatBot 测试成功喵~")

@bot.private_event()
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)
    if msg.raw_message == '测试':
        await bot.api.post_private_msg(msg.user_id, text="NcatBot 测试成功喵~")
```

:::

使用 decorator `@bot.group_event()` 和 `@bot.private_event()` 来注册事件==回调函数==, 回调函数用于处理与之绑定的事件. 注意, ==回调函数必须定义为异步函数==, 也就是用 `async def` 来定义.

==回调函数==会在相应的事件发生后被调用, 例如这里的例子, 当用户在私聊中==发送任意消息==时, 都会调用 `on_private_message` 函数, 并将 `msg` 作为参数传入.

在 `on_private_message` 中, 编写了一些逻辑, 这里的逻辑是如果文本为 `测试` 时, ==调用 API== 向用户发送一条 `NcatBot 测试成功喵~` 的消息.

在 `on_group_message` 中逻辑相同, 但是直接使用了==简化的 API 调用==方式来发送信息.

关于==回调函数的定义和参数==, 请查阅[回调函数](../3.%20事件处理/1.%20回调函数.md).

关于==能够支持的事件==, 请查阅[事件上报](../3.%20事件处理/2.%20事件上报.md).

关于==调用 API 发送消息==, 请查阅[API 调用](../4.%20API%20参考/1.%20API%20调用.md).

### 运行部分

::: code-tabs
@tab python
```python
# ========== 启动 BotClient==========
if __name__ == "__main__":
    bot.run()
```
:::

**NcatBot** 默认会在同一台电脑上运行 **NapCat** 服务, 我们也**只建议这么做**. [了解 NcatBot 和 NapCat 的关系](../5.%20杂项/1.%20认识%20NcatBot.md).

如果硬要把 NcatBot 和 NapCat 分开, 查阅[使用远端 NapCat 接口](../5.%20杂项/2.%20使用远端%20napcat%20接口.md).

::: details 对初学者的提醒
在 Python 中, 每个模块都有一个特殊的内置变量 `__name__`. 它的值取决于模块是如何被运行的:

- 如果模块是被直接运行的 (例如, 你直接运行一个脚本文件), `__name__` 的值会被设置为 `'__main__'`.
- 如果模块是被其他模块导入的 (例如, 你在其他脚本中用 `import` 导入了这个模块), `__name__` 的值会是模块的名称(通常是文件名, 不带 `.py` 后缀).

*使用 `import xxx` 或者  `from xxx import yyy` 时, `xxx` 文件中的==所有代码==都会被执行一遍.*

例如, 你复制的示例代码就是被 ==直接运行== 的, 而代码中导入的 `ncatbot.client` 等代码就是==被其它模块导入== 的.

尽管在这里 `if __name__ == '__main__':` 并不是必须的, 因为 `main.py` 一定会被直接运行, 但这不失为一种良好的编程习惯.
:::


## NcatBot 生命周期

NcatBot 的生命周期按照时间顺序分为以下几步:

- 引导
- 环境检查
- 连接 NapCat 服务
- 加载插件
- 运行
- 退出

### 引导

1. 导入必要的模块
2. 设置配置项
3. 创建 BotClient 实例
   1. 检查配置项是否合法, 检查是否已经创建过 BotClient 实例.
   2. 初始化 BotAPI.
   3. 初始化事件总线和内置功能.
   4. 加载功能注册钩子.
   5. 加载权限数据.
4. 注册回调函数(可选)
5. 启动 BotClient 实例

以上过程称为**启动**, 用于**启动**的代码称作**引导程序**. 上面的代码就是一个**引导程序**.

因此, 无论是插件项目还是 BotClient 项目, 都需要运行**引导程序**来启动.

### 环境检查

环境检查发生在调用 `BotClient.run()` 时.

1. 检查 NcatBot 是否通过 pip 安装, 检查 NcatBot 是否有新版本可用, 在 `BotClient.run()` 中指定 `debug=True` 可以跳过检查.
2. 检查 `ws_uri` 中指定的 NapCat 服务是否能被连接并且可用, 如果可用直接跳过本部分以及下一部分, 直接进行插件加载.
3. 检查 NapCat 是否被正确安装, 见 NapCat 是否有新版本可用, 如果没有安装或者有新版本, 则询问是否安装或更新.
4. 安装或更新 NapCat.(可选)
5. 配置 NapCat, 自动配置 NapCat 的各项内容, 以便 NcatBot 能正常连接 NapCat 服务. ==如果你自行改动了 NapCat 配置, NcatBot 会直接覆盖掉你的修改==.

### 连接 NapCat 服务

1. 启动 NapCat 服务, Windows 下会询问是否允许 NapCat 对计算机进行修改, 需要同意.
2. 引导登录(如果之前本地有登录记录, 则会使用快速登录), 需要扫描二维码登录.
3. 连接 NapCat 服务.

### 加载插件

1. 查找工作目录下的 `plugins` 目录, 读取插件 meta 信息.
2. 根据插件 meta 中的依赖信息构建加载拓扑图.
3. 加载每个插件
   1. 加载插件私有可持久化数据(包括配置项).
   2. 调用插件 `BasePlugin.on_load` 函数, 执行自定义初始化操作.
   3. 事件总线注册**插件功能**和**插件配置项**.

### 运行

1. 启动 WebSocket, 监听来在 NapCat 的事件并上报. 事件对应的回调函数被调用, 同时事件上报到事件总线.
2. 处理事件
   - 事件回调函数直接处理事件.
   - 事件进入事件总线, 激活功能函数, 并调用订阅了该事件的所有回调函数
3. 事件被拦截或者被处理
   - 订阅事件的回调函数可以拦截该事件, 阻止其继续传播.
   - 订阅事件的回调函数可以添加事件的处理结果, 以便和其它部分通信.

### 退出

按下 `Ctrl+C` 正常退出后, 进入退出流程, 点 X 关闭属于异常退出, 不会触发退出流程.

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

# 常用配置项
root = "123456"  # root 账号
bt_uin = "123456"  # bot 账号
ws_uri = "ws://localhost:3001"  # ws 地址
webui_uri = "http://localhost:6099"  # webui 地址
webui_token = "napcat"  # webui 令牌
ws_token = ""  # ws_uri 令牌

# 更新检查
check_napcat_update = False  # 是否检查 napcat 更新
check_ncatbot_update = True  # 是否检查 ncatbot 更新

# 开发者调试
debug = False  # 是否开启调试模式(暂时不支持调试模式)
skip_ncatbot_install_check = False  # 是否跳过 napcat 安装检查
skip_plugin_load = False  # 是否跳过插件加载
skip_account_check = False  # 是否跳过账号一致性检查

# NapCat 行为
stop_napcat = False  # NcatBot 下线时是否停止 NapCat
```

- `bot_uin`: 就是 **Bot** QQ 号. 这个千万不能填错了喵~
- `root`: **root** QQ 号, 具有超管权限, 一般填你的 QQ 大号.
- `ws_uri`: NapCat WebSocket 地址. 一般不用改喵.
- `ws_token`: NapCat 服务器的 token. 一般也不用改喵.
- `webui_uri`: NapCat WebUI 的地址. 一般还是不用改喵.
- `webui_token`: NapCat WebUI 的 token. 一般仍然是不用改喵.

一般来说除了 `root` 和 `bt_uin` 需要指定外, 其它配置项推荐使用默认值.

需要改动 `ws_uri`、 `ws_token`、 `webui_uri` 和 `webui_token` 的情况是 [使用远端 NapCat 接口](../5.%20杂项/2.%20使用远端%20napcat%20接口.md).

## 在代码里指定配置项(推荐)

部分常用配置项可以在代码里直接指定.

```python
from ncatbot.utils import config

config.set_bot_uin("123456")  # 设置 bot qq 号 (必填)
config.set_root("123456")  # 设置 bot 超级管理员账号 (建议填写)
config.set_ws_uri("ws://localhost:3001")  # 设置 napcat websocket server 地址
config.set_ws_token("")  # 设置 token (websocket 的 token)
config.set_webui_uri("http://localhost:6099")  # 设置 napcat webui 地址
config.set_webui_token("napcat")  # 设置 token (webui 的 token)
```

## 通过 `BotClient.run` 运行时指定

引导程序中, 在 `bot.run()` 时可以添加命名参数来指定大部分配置项, 例如:

```python
bot.run(
    ws_uri="ws://127.0.0.1:3001",
    ws_token="",
    webui_uri="http://127.0.0.1:6099",
    webui_token="napcat",
    check_napcat_update = False, # 不检查 NapCat 更新
    check_ncatbot_update = True, # 检查 NcatBot 更新
)
```

## 通过文件指定配置项(弃用)

::: warning
这个功能目前弃用, 未来可能继续提供支持.
:::

也可以用文件来指定配置项, 用文件指定配置项时, 配置文件的后缀名必须为 yaml. 且==任何一项均不能缺省==.

你可以复制[配置项列表](#配置项列表)保存到配置文件, 然后修改配置项的值.

::: code-tabs
@tab python

```python
from ncatbot.utils import config

config.load_config("path/to/config.yaml")
```

:::

## 配置项缺省

如果配置项有缺省(在代码中指定配置项时只指定了一部分), 则缺省的部分会使用==默认配置项==, 默认配置项的值见[配置项列表](#配置项列表).

::: code-tabs
@tab python
from ncatbot.utils import config

config.set_bt_uin("123456")
config.set_root("123456")
# config.set_ws_uri("ws://127.0.0.1:3001")
# config.set_token("")
:::


- `bt_uin` ==(Bot QQ 号)必须填写==.

- `root` ==超级管理员账号==, 建议填写.

- 上面的代码注释了 `ws_uri` 和 `ws_token`, 也就是这两个项可以缺省, 此时将使用默认值.

## 指定配置项的时机

由于我们采用==全局变量==的方式来保存配置项, 所以无论使用哪种方式, 都只需要在代码里指定一次即可.

另外, 由于==创建== bot 实例时将会使用配置项, 因此==配置项指定应该放在创建 bot 实例之前.==




---
title: AI+NcatBot
createTime: 2025/03/25 23:21:39
permalink: /guide/useaidv/
---

AI 时代已至, 只需要很低的学习成本, 就能够使用 AI 和 NcatBot 开发自己的 QQ 机器人.

## 配置 VSCode 的 Python 开发环境

### 安装 VSCode

### 安装 VSCode 插件

### 创建工作区

### 使用 VSCode 运行示例机器人

## 使用 AI 开发




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

Ncatbot 对回调函数的名字没有要求, 但按照习惯一般命名为 `on_[事件类型]`.

回调函数注册修饰器列表请查阅 [事件上报](./2.%20事件上报.md).

::: details 对初学者的提醒
装饰器是一种非常强大的功能, 它允许你在不修改原有函数代码的情况下, 动态地增加函数的功能. 装饰器本质上是==一个返回函数的函数==. 为了更好地理解装饰器的原理, 我们结合前面提到的示例来详细解释:

1. 装饰器的实现
    1. 定义装饰器函数:
        装饰器函数接收一个函数作为参数.
        在装饰器内部, 定义一个嵌套函数 (通常称为 wrapper), 这个嵌套函数会增强或修改原函数的行为.
    2. 返回嵌套函数:
        装饰器函数返回嵌套函数, 这样原函数就被替换为嵌套函数.
    3. 使用装饰器:
        使用 @装饰器名称 语法, 将装饰器应用到目标函数上.

2. 装饰器的本质

相应的代码如下:

```python
class BotClient:
    def __init__(self, use_ws=True):
        # 喵~

    def group_event(self, types=None):
        def decorator(func):
            self._group_event_handlers.append((func, types))
            return func

        return decorator
```

于是:

```python
@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)
```

的本质是: `on_group_message = bot.group_event()(on_group_message)`, 等价于执行 `bot._group_event_handlers.append((on_group_message, None))`.

可选参数 `types` 的作用可以查阅[事件上报](./2.%20事件上报.md)部分的文档了解.

*"装饰器" 和 "修饰器" 都是 "decorator" 的译名, 有一部分是彭彭手写的, 一部分是 AI 写的, 所以出现了差异喵~*
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

`msg` 的主要成员表如下, 有关成员含义的更详细的信息可以参考 [OneBot11 消息事件](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/event/message.md):

- `msg.user_id: Union(str, int)`:  消息发送者 QQ 号.
- `msg.group_id: Union(str, int)`:  消息来源群群号(如果是群聊消息).
- `msg.message_id: Union(str, int)`:  消息 ID.
- `msg.message_type: str`:  消息类型(`group`/`private`), 群聊或私聊
- `msg.raw_message: str`: 符合 OneBot11 标准的==消息字符串==, 需手动解析, 不建议使用.
- `msg.sender: Sender`:  消息发送者资料, 详细信息参考[解析消息](3.%20解析消息.md).
- `msg.message: List[dict]`: 符合 OneBot11 标准的==数组格式消息==, 推荐使用它来进行逻辑判断. 详细信息参考[解析消息](3.%20解析消息.md).
- `msg.self_id: Union(str, int)`: 机器人 QQ 号.
- `msg.time: int`: 事件发生时间戳.

常用其它参考资料:

- [OneBot11 消息段](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/message/segment.md)
- [OneBot11 数组格式消息](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/message/array.md)
- [NapCat 消息事件](https://napneko.github.io/develop/event#message-%E4%BA%8B%E4%BB%B6)

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
    "self_id": 1550507358, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "friend_recall", # 通知类型, 消息撤回固定为 `friend_recall`
    "user_id": 3051561876, # 撤回者 QQ 号
    "message_id": 680308254 # 撤回的消息 ID
}
```

#### 头像双击动作

参数示例及其解释:

```python
msg = {
    "time": 1743865776, # UNIX 时间戳
    "self_id": 1550507358, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "poke", # 通知类型, 头像双击动作固定为 `poke`
    "sub_type": "double", # 事件子类型, 头像双击动作固定为 `double`
    "target_id": 1550507358, # 被双击的 QQ 号
    "user_id": 3051561876, # 操作者 QQ 号
    "raw_info": [
        {'col': '1', 'nm': '', 'type': 'qq', 'uid': 'u_-ev35gBX6zud3K0yA_nskA'},  # 发送者的 QQ 链接
        {'jp': 'https://zb.vip.qq.com/v2/pages/nudgeMall?_wv=2&actionId=0', 'src': 'http://tianquan.gtimg.cn/nudgeaction/item/0/expression.jpg', 'type': 'img'},  # 图标
        {'txt': '戳了戳', 'type': 'nor'},  # 文本
        {'col': '1', 'nm': '', 'tp': '0', 'type': 'qq', 'uid': 'u_sbV_ToZLelyJ73PGan2F-A'}, # 操作者的 QQ 链接
        {'txt': '', 'type': 'nor'} # 我不知道这是啥
    ], 
    'sender_id': 3051561876
}
```

#### 私聊输入状态更新

参数示例及其解释:


```python
msg = {
    "time": 1743866213, # UNIX 时间戳
    "self_id": 1550507358, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "notice_type": "notify", # 通知类型, 输入状态更新固定为 `notify`
    "sub_type": "input_status", # 事件子类型, 输入状态更新固定为 `input_status`
    "status_text": "对方正在输入...", # 输入状态文本
    "event_type": 2, # 输入状态类型, 1 为开始输入, 2 为继续输入
    "user_id": 3051561876, # 操作者 QQ 号
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
    "self_id": 1550507358, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "group_id": 701784439, # 群号
    "user_id": 3051561876, # 上传者 QQ 号
    "file": {
        "id": "24f852ab9a17d7d5dc790b9262092189", # 文件 ID
        "name": "文件名", # 文件名
        "size": 114514, # 文件大小
        "busid": 114 # 文件 busid
    }
}
```

要获取上传的文件, 需要使用 `BotAPI.get_file()` 方法, 传入 `msg["file"]["id"]` 作为参数即可.

[BotAPI.get_file()](../4.%20API%20参考/2.%20主要%20API%20及其使用.md#通过%20`file_id`%20获取文件下载链接).

#### 群消息撤回


传入的参数示例及其解释:

```python
msg = {
    "time": 1743865071, # UNIX 时间戳
    "self_id": 1550507358, # 机器人 QQ 号
    "post_type": "notice", # 通知类型, 通知类型固定为 `notice`
    "group_id": 701784439, # 群号
    "user_id": 3051561876, # 撤回消息发送者 QQ 号
    "notice_type": "group_recall" # 通知类型, 撤回消息固定为 `group_recall`
    "operator_id": 3051561876, # 操作者 QQ 号
    "message_id": 364573752 # 撤回的消息 ID
}
```


### Request 类型回调函数参数

```python
@bot.request_event()
def on_request(msg: Request):
    msg.reply_sync(False, "No") # 拒绝请求
```

传入的 `msg` 是一个 `ncatbot.core.request.Request` 对象.

其原型如下:

```python
class Request():
    """请求事件, 部分实现省略"""
    __slots__ = (
        "time", # UNIX 时间戳
        "self_id", # 机器人 QQ 号
        "request_type", # 请求类型, 加群为 `group`, 加好友为 `friend`
        "sub_type", # 子类型, 支持 `add` 和 `invite`, 前者是主动添加, 后者是接受邀请
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
OFFICIAL_GROUP_MESSAGE_EVENT = "ncatbot.group_message_event"
OFFICIAL_PRIVATE_MESSAGE_EVENT = "ncatbot.private_message_event"
OFFICIAL_REQUEST_EVENT = "ncatbot.request_event"
OFFICIAL_NOTICE_EVENT = "ncatbot.notice_event"
OFFICIAL_STARUP_EVENT = "ncatbot.starup_event"
```

### 自定义事件类型

参阅[事件的发布和订阅](../6.%20开发%20NcatBot%20插件/3.%20插件的交互系统/3.1%20事件的发布和订阅.md).

## 官方事件上报

### 为不同事件注册回调函数

参考以下代码:

::: code-tabs
@tab python

```python
from ncatbot.core import BotClient
from ncatbot.core import GroupMessage, PrivateMessage

bot = BotClient()

@bot.group_event()
async def on_group_message(msg:GroupMessage): # 绑定群聊消息回调函数
    _log.info(msg)

@bot.private_event()
async def on_private_message(msg:PrivateMessage): # 绑定私聊消息回调函数
    _log.info(msg)

@bot.notice_event() 
async def on_notice_message(msg): # 绑定通知消息回调函数
    _log.info(msg)

@bot.request_event()
async def on_request_message(msg): # 绑定请求消息回调函数
    _log.info(msg)
```

:::

`BotClient.group_event()`, `BotClient.private_event()`, `BotClient.notice_event()` 和 `BotClient.request_event()` 分别是四种消息类型的回调函数注册修饰器.

### 回调函数注册修饰器参数(实验性功能)

::: warning
该功能处于实验阶段, 不建议无基础知识的开发者使用.
:::

==回调函数注册修饰器==接受一个 `types` 参数, 用于指定回调函数监听的细化事件类型.

`types` 是一个列表, 其中每个元素都是一个字符串, 一个元素指代一种消息类型. 如果收到的消息包含 `types` 中的任意一个类型, 回调函数就会被调用.

目前支持的类型有:

| 消息格式           | 介绍         |
| ------------------ | ------------ |
| `text`             | 纯文本       |
| `face`             | `qq` 表情    |
| `image`            | 图片         |
| `record`           | 语音         |
| `video`            | 视频         |
| `at`               | @某人        |
| `rps`              | 猜拳魔法表情 |
| `dice`             | 骰子         |
| `shake`            | 私聊窗口抖动 |
| `poke`             | 群聊戳一戳   |
| `share`\<JSON>     | 链接分享     |
| `contact`\<JSON>   | 推荐好友/群  |
| `location`\<JSON>  | 位置         |
| `music`\<JSON>     | 音乐分享     |
| `reply`            | 回复消息     |
| `forward`          | 转发消息     |
| `node`             | 转发消息节点 |
| `json`             | `json` 信息  |
| `mface`            | `qq` 表情包  |
| `file`             | 文件         |
| `markdown`         | `markdown`   |
| `lightapp`\<JSON>  | `小程序卡片` |

举个例子, 如果你想要监听群聊的文本消息, 你可以这样注册:

::: code-tabs
@tab python

```python
from ncatbot.core import BotClient
from ncatbot.core import GroupMessage

bot = BotClient()

@bot.group_event(["text"])
async def on_group_message(msg:GroupMessage):
```
:::

需要注意的是: <mark>只要消息内存在文本, 这个消息就会被监听, 而不是纯文本才会被监听.</mark>


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

### 官方事件发生的条件

- `group_event`: 收到**群聊消息时**发生, 效果是**触发所有绑定的回调函数**并**上报到事件总线**.
  - 传入回调函数的参数是 `GroupMessage` 实例.
  - 传入事件总线的参数是 `Event` 实例, 所带的数据(`Event.data`)为 `GroupMessage` 实例.
- `private_event`: 收到**私聊消息**时发生, 其余同上, 区别是 `GroupMessage` 换为 `PrivateMessage`.
- `notice_event`: 收到**通知信息**时发生, 效果是**触发所有绑定的回调函数**并**上报到事件总线**.
  - 传入回调函数的参数是一个 `dict`.
  - 传入事件总线的参数 `Event` 实例, 所带的数据(`Event.data`)为 `dict`.
- `request_event`: 收到**请求信息**时发生, 其余同上.

具体参数参阅[回调函数](1.%20回调函数.md)

### 四种消息的定义

- 群聊消息: 略
- 私聊消息: 略
- 通知消息: 咕咕咕
- 请求消息: 咕咕咕


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

## 内置方法

咕咕咕, 未来将提供支持...

## sender 成员

`BaseMessage` 类的 `sender` 成员为 `Sender` 类, `Sender` 类包含以下成员:

```python
sender.user_id = "123456" # 消息发送者 QQ 号.
sender.nickname = "昵称" # 消息发送者 QQ 昵称.
sender.card = "群昵称" # 消息发送者群卡片昵称(如果是群聊消息).
```    

## message 成员

`BaseMessage.message` 是一个字典的列表(`list[dict]`), 它是符合 OneBot11 标准的==[数组格式消息](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/message/array.md)==.

我们称 `list[dict]` 为**消息段列表**, 称 `dict` 为**消息段**.

消息段有不同种类, 具体如下:

### forward 类型消息

`forward` 类型的消息段表示一个转发消息.

`forward` 类型消息如果作为**消息段**出现, 那么该消息段所在**消息段列表**一定只有一个成员.

一般有两种格式.

#### 消息 ID 格式

```python
msg.message = [{'type': 'forward', 'data': {'id': '7489856252632721587'}}]
```

这个很长的 `id` 字段没有用, 如果要获取转发消息的内容, 必须使用 message 成员的 `message_id` 字段和 [get_msg 方法]() 可以获取到消息的详细信息, 获取的数据如下, 提取 `result["message"]` 得到的结果定义为 **content** 格式的.
 **forward** 类型消息.

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


#### content 格式

::: warning
请保证自己语文及格再阅读以下说明, 包含多重定语和多重定义, 容易引起混淆.
:::

格式如下:

```python
msg.message = [
    {
        'type': 'forward', 
        'data': {
            'id': '7489858069394438109', 
            'content': [
                {
                        'self_id': 1550507358,
                        'user_id': 3051561876, 
                        'time': 1743869088, 
                        'message_id': 671936880, 
                        'message_seq': 671936880, 
                        'real_id': 671936880, 
                        'real_seq': '0', 
                        'message_type': 'private', 
                        'sender': {'user_id': 3051561876, 'nickname': '幻影彭', 'card': ''}, 'raw_message': '123456', 
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

一段 content 格式消息是一个 `list[dict]`, `dict` 表示一个**消息**(不是**消息段**), 这个 `dict` 的结构和 `BaseMessage.__dict__` 基本一致, content 格式消息的本质是**消息列表**.

**消息列表**->**消息**->**消息段列表**->**消息段**

而消息段又可以是 content 格式的 forward 类型的消息段, 这种**消息段**本质是**消息列表**, 所以说, 这里的定义是**递归的**.

上面的示例省略了消息列表中后两条消息的其它数据, 只保留了 `message` 字段. 可以对比一下一条消息的 key 以及 `BaseMessage` 的 成员列表.

注意, 这里的消息段所带的 `data.content` 里面也可以包含带有 forward 类型的消息段的消息, 这和 forward 作为消息段列表中的唯一元素不矛盾, 因为 `data.content` 本质是**消息列表**, 而不是**消息段列表**. 但是一条**消息**所带的**消息段列表**中, 如果出现了 `forward` 类型的消息段, 那么该消息段就是唯一的消息段.

### 组合类型消息

不包含 `forward` 类型**消息段**时, 统称组合类型消息.

组合类型消息是一个**消息段列表**, 列表中的每个消息**有序**.

组合类型消息包含以下几种类型的组合.

#### text 类型消息

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

#### at 类型消息

```python
msg.message = [
    {
        'type': 'at', 
        'data': {
            'qq': 3051561876
        }
    }
]
```

当 `qq` 字段为 `all` 时, 表示@全体成员.

#### reply 类型消息

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

#### face 类型消息

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

#### image 类型消息

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

#### video 类型消息

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

#### file 类型消息

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

通过 `file_id` 可以获取更加细节的文件信息, 接口为 [get_file]().


## 其它成员

- `msg.sub_type: str`:  消息子类型(`friend`, `group`, `other`).
- `msg.sub_type: str`:  消息子类型(`friend`, `group`, `other`).
- `msg.message_format: str`:  消息格式(`string`/`json`/`markdown`), 作用不明
- `msg.raw_message: str`: 符合 OneBot11 标准的==消息字符串==, 需手动解析, 不建议使用.

## 参考资料

- [OneBot11 消息段](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/message/segment.md)
- [OneBot11 数组格式消息](https://github.com/botuniverse/onebot-11/blob/d4456ee706f9ada9c2dfde56a2bcfc69752600e4/message/array.md)

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

::: details 对初学者的提醒
什么是异步, 为什么回调函数需要定义为异步, 为什么要异步调用 API?

1. 什么是异步?
   一般来说, 程序是从上到下依次执行的. 下一步操作需要等待上一步操作完成, 这种方式叫做**同步**. 而异步允许在等待某个操作完成的同时继续执行其他任务. 例如有两个群的消息, 异步可以让程序无须等待上一次处理完成便开始处理下一次. 比如请求 AI 回复时会有很长的延迟, 那么异步可以让程序在等待 AI 回复的同时继续处理其他消息, 提高程序的效率.

   异步是通过==事件循环==来实现的, 当使用 `await` 关键字调用某个异步函数时, ==调用者==会将控制权移交给事件循环, 同时==被调用者==加入事件循环. 直到==被调用者==完成操作后, ==调用者==才有可能从事件循环中拿到控制权并执行接下来的代码.

2. 为什么 NcatBot 的回调函数必须定义为异步?

    1. 事件触发的机制

        NcatBot 的事件机制是以异步方式实现的. 当事件发生时, 程序会通过==异步调用==的方式触发相应的回调函数. 如果回调函数不是异步的, 那么会直接出现运行时错误.

    2. 与异步 API 的配合.

        NcatBot 的 API (如 bot.api.post_private_msg) 通常也是异步的. 这些 API 需要通过 await 关键字来调用, 以便等待异步操作完成. ==同步函数中不允许使用 `await` 关键字调用异步函数==, 因此回调函数必须被定义为异步函数.

3. 什么是 `await` 关键字?

   - `await` 关键字用于显式等待异步操作完成. 例如, 当你 `await bot.api.post_private_msg` 时, 程序会将 `bot.api.post_private_msg` 的任务加入事件循环, 并将控制权从 `on_private_message` 移交给事件循环, 并且 `on_private_message` 会一直处于==不可执行==的状态. 接着事件循环找到==可执行==的任务并移交控制权, 如此直到 `bot.api.post_private_msg` 完成后, `on_private_message` 才属于==可执行==状态, 并有可能在事件循环中拿到控制权继续执行接下来的代码.
  
   - `await asyncfun()` 的结果是 `asyncfun()` 的返回值. `await` 的优先级很低, 建议加上括号, 例如 `result = (await asyncfun())` 或 `result = (await asyncfun())[0]` 之类的.

   - `await` 关键字只能在异步函数(也就是定义为 `async def` 的函数)中使用, 否则会报错.

:::


`bot.api` 还有其它成员方法, 用于完成其它类型的操作, 例如加群审核等, 请参考 [主要 API 及其使用](../4.%20API%20参考/2.%20主要%20API%20及其使用.md) 和 [其它 API 及其使用](../4.%20API%20参考/3.%20其它%20API%20介绍.md.md)

### 同步回调函数

3.7.0 版本后, 大部分回调函数可以被定义为同步回调函数, 同步回调函数中**禁止调用异步 API**.

---
title:  主要 API 及其使用
createTime: 2025/02/09 15:22:54
permalink: /guide/f34xj8pk/
---

## 发送消息

### 有关函数原型

::: warning
对于 markdown 消息的支持不稳定, 请谨慎使用.
:::

能够发送消息的函数一共有四个, 分别是:

- `BotAPI.post_group_msg()`
- `BotAPI.post_private_msg()`
- `GroupMessage.reply()`
- `PrivateMessage.reply()`

它们都支持"MessageChain"和"命名参数"两种格式的消息.

`xxx.reply()` 是 `BotAPI.post_group_msg()` 的语法糖, 所支持的参数和 `BotAPI.post_group_msg()` 基本一致. 大部分时候使用 `xxx.reply()` 会更方便.

*下文中, 发送私聊消息和发送群聊消息的唯一区别是 `group_id` 变为 `user_id`, 故不重复举例.*

::: warning
再次提醒, `BotAPI.post_xxx_msg()` 和 `xxx.reply()` 是==异步函数==, 调用时应该 `await xxx.reply()` 或者 `await BotAPI.post_xxx_msg()`. 任何 `xxx.reply()` 或者 `BotAPI.post_xxx_msg()` 的调用都是**错误**的.
:::

::: details 点击显示函数原型
```python
  class BotAPI:
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
        向对应群聊发送一条消息
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
      ...
    ):
      """
      向对应的人发送一条消息
      :param user_id: 聊天对象 QQ 号.
      ...
      """
    """
    其它函数省略
    """
  class GroupMessage:
    async def reply(self, text: str = "", is_file: bool = False, **kwargs):
      """
      在对应群聊中回复一条群聊消息
      :param text: 文本信息
      :param is_file: 是否为文件
      :param kwargs: 其它参数, 参考 BotAPI.post_group_msg() 中除了 text, reply, group_id 之外的参数, 此外还有下面补充的参数
      :param file: 所需发送的文件的路径 
      :param video: 所需发送的视频的路径
      :param record: 所需发送的语音的路径
      """
      if len(text): # 如果有文本, 把文本传入 kwargs
        kwargs["text"] = text
      if is_file: # 如果是文件, 则使用 post_group_file() 函数
          return await self.api.post_group_file(self.group_id, **kwargs)
      else:
          return await self.api.post_group_msg(
              self.group_id, reply=self.message_id, **kwargs
          )
  class PrivateMessage:
    async def reply(self, text: str = "", is_file: bool = False, **kwargs):
      """
      私聊回复对应的人一条消息, 参数同 GroupMessage.reply()
      """
```
:::


### 使用 MessageChain 构造并发送消息(推荐)

MessageChain 这个词是不是很熟悉呢?

没错, 就是从 mirai 处~~抄~~借鉴过来的.

#### 导入 Message Chain 有关类

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

#### 使用 MessageChain 构造消息

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

- 列表化构造, 构造时传入一个列表, 列表中的元素是列表或者 Element 类. ==列表至多嵌套一层==.

- 通过 `+` 运算符连接, `MessageChain` 对==可发送对象==均可右加.

- 单纯文本可以不使用 `Element` 类, 直接传入字符串即可.

*可发送对象: `MessageChain`, `Element`, `str`.*

#### 构造 Element

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

#### 发送消息

函数参数中指定命名参数 `rtf` 为一个 `MessageChain` 实例即可.

::: code-tabs
@tab python
```python
await bot.api.post_group_msg(group_id=123456, rtf=message)
await msg.reply(rtf=message)
```
:::

### 使用命名参数构造消息(只需要发送简单消息时使用)

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


### 一般建议

- 无复杂顺序组合的文本采用普通参数发送.
- 有复杂顺序组合的消息采用消息链发送.

示例调用: `bot.api.post_group_msg(123456789, "你好")`: 发送一句 "你好".

示例调用: `bot.api.post_group_msg(123456789, "你好呀", at=123456)`: 发送一句 "你好呀" 并 @ QQ 号为 123456 的用户.

示例调用: `bot.api.post_group_msg(123456789, "你好呀", reply=13579)`: 向 id 为 13579 的消息回复 "你好呀".

示例调用: `bot.api.post_group_msg(123456789, rtf=MessageChain([Text("你好")]))`: 发送一条消息链.

## 上传文件

由于 NapCat 的一些原因, 发送视频建议以上传文件的形式进行.

### 通过文件消息发送

#### 函数原型

::: details 点击显示函数原型
```python
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
    :param image: 图片
    :param record: 语音
    :param video: 视频
    :param file: 文件
    :param markdown: Markdown
    :return: 发送私聊文件
    """
async def post_group_file(
    self,
    group_id: Union[int, str],
    ... # 同上
):
    """
    :param group_id: 群号
    :param ...: 同上
    """
```
:::

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

```python
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
    return await self._http.post(
        "/upload_group_file",
        {"group_id": group_id, "file": file, "name": name, "folder_id": folder_id},
    )
```

#### 参数

- `group_id`: 群号.
- `file`: 文件路径, 支持本地绝对路径或者 URL.
- `name`: 文件名.
- `folder_id`: 文件夹 ID, 参考[这里](#get_group_root_files)可获取.


## 获取文件

文件消息中一般不提供文件的下载链接, 需要通过 `get_file` 方法传入 `file_id` 来请求下载链接, 也就是说, 获取文件的前提获取 `file_id`. 

### 通过 `file_id` 获取文件下载链接

使用 `get_file` 方法传入 `file_id` 即可获取消息的详细信息.

[函数原型](2.%20主要%20API%20及其使用.md#消息接口)参考.

返回值是一个 `dict` 类型, 示例如下:

```python
result = {
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "D:\\TencentFiles\\NapCat\\temp\\9f22cb6d-8d62-4323-9b78-60621533e466 (1).txt", # 没啥用
    "url": "D:\\TencentFiles\\NapCat\\temp\\9f22cb6d-8d62-4323-9b78-60621533e466 (1).txt", # url 可能是一个本地地址也可能是一个网络地址
    "file_size": "35",
    "file_name": "9f22cb6d-8d62-4323-9b78-60621533e466.txt"
    },
}
```

### 文件直接被发送

参考[解析消息](../3.%20事件处理/3.%20解析消息.md#file%20类型消息)来获取一条消息中的 `file_id`.

### 已知文件位于某个群的群文件

通过 `get_group_root_files` 获取群文件根目录列表. 通过 `get_group_files_by_folder` 获取某个目录的列表.

如果文件位于根目录, 那么 `get_group_root_files` 的返回值的 `data` 中会带有对应的 `file_name` 和 `file_id`. 如果文件位于某个子目录, 那么 `get_group_files_by_folder` 的返回值的 `data` 中会带有对应的 `file_name` 和 `file_id`.

不知道文件位于哪个目录时, 可以通过以上两个函数来遍历获取.

#### get_group_root_files

返回指定群聊, 群文件根目录下所有文件和目录的信息.

::: details 返回值示例:
```python
result = {
  "status": "ok",
  "retcode": 0,
  "data": {
    "files": [
      {
        "group_id": 0,
        "file_id": "string",
        "file_name": "string",
        "busid": 0,
        "size": 0,
        "upload_time": 0,
        "dead_time": 0,
        "modify_time": 0,
        "download_times": 0,
        "uploader": 0,
        "uploader_name": "string"
      }
    ],
    "folders": [
      {
        "group_id": 0,
        "folder_id": "string",
        "folder": "string",
        "folder_name": "string",
        "create_time": "string",
        "creator": "string",
        "creator_name": "string",
        "total_file_count": "string"
      }
    ]
  },
  "message": "string",
  "wording": "string",
  "echo": "string"
}
```
:::

#### get_group_files_by_folder

返回指定目录所有文件和目录的信息.

::: details 返回值示例:
```python
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "files": [
      {
        "group_id": 0,
        "file_id": "string",
        "file_name": "string",
        "busid": 0,
        "size": 0,
        "upload_time": 0,
        "dead_time": 0,
        "modify_time": 0,
        "download_times": 0,
        "uploader": 0,
        "uploader_name": "string"
      }
    ],
    "folders": [
      {
        "group_id": 0,
        "folder_id": "string",
        "folder": "string",
        "folder_name": "string",
        "create_time": "string",
        "creator": "string",
        "creator_name": "string",
        "total_file_count": "string"
      }
    ]
  },
  "message": "string",
  "wording": "string",
  "echo": "string"
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
      url = bot.api.get_file_sync(file_id)['data']['url']
      print("文件的获取链接是:", url)
```

---
title: 其它 API 介绍
createTime: 2025/02/07 11:25:41
permalink: /guide/2dsviohi/
---

## 部分 API 简介 1

::: warning
此部分接口和 NapCat 同名接口参数不一致.
:::

### 发送私聊/群聊合并转发消息

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

示例返回(是一个 Python 的 `dict`):

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "result": 0,
    "errMsg": ""
  },
  "message": "这不重要",
  "wording": "这不重要",
  "echo": "这不重要"
}
```


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
    async def get_client_key(self):
        """
        :return: 获取client_key
        """
    
    async def get_robot_uin_range(self):
        """
        :return: 获取机器人QQ号范围
        """
    
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
    
    async def get_cookies(self, domain: str):
        """
        :param domain: 域名
        :return: 获取cookies
        """
    
    async def handle_quick_operation(self, context: dict, operation: dict):
        """
        :param context: 事件数据对象
        :param operation: 快速操作对象
        :return: 对事件执行快速操作
        """
    
    async def get_csrf_token(self):
        """
        :return: 获取 CSRF Token
        """
    
    async def del_group_notice(self, group_id: Union[int, str], notice_id: str):
        """
        :param group_id: 群号
        :param notice_id: 通知ID
        :return: 删除群公告
        """
    
    async def get_credentials(self, domain: str):
        """
        :param domain: 域名
        :return: 获取 QQ 相关接口凭证
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
    
    async def nc_get_packet_status(self):
        """
        :return: 获取packet状态
        """
    
    async def can_send_record(self):
        """
        :return: 检查是否可以发送语音
        """
    
    async def get_status(self):
        """
        :return: 获取状态
        """
    
    async def nc_get_rkey(self):
        """
        :return: 获取rkey
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
        :param text: 文本
        :param face: 表情
        :param json: JSON
        :param markdown: Markdown
        :param reply: 回复
        :param music: 音乐
        :param dice: 骰子
        :param rps: 猜拳
        :param image: 图片
        :param rtf: 富文本(消息链)
        :return: 发送私聊消息
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
        :param image: 图片
        :param record: 语音
        :param video: 视频
        :param file: 文件
        :param markdown: Markdown
        :return: 发送私聊文件
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

::: warning
请至少**运行并测试成功一次**后, 再尝试使用远端 NapCat 接口.
:::

如果在 NcatBot 之前没有接触过其它涉及网络的编程或者配置, 那么**不应该**使用远端 NapCat 接口. ==选择使用远端 NapCat 接口表明你愿意为此付出时间学习或者已经具备相当的基本知识.==

[了解 NapCat 和 NcatBot 的关系](./1.%20认识%20NcatBot.md).

由于 QQ 风控, 不建议频繁开关 NapCat. 因此有时候需要将 **NapCat** 部署在云服务器上. 一般来说建议一并将 **NcatBot** 也部署在同一台服务器上, 但有时候确实需要分开部署, 此时可以使用远端 NapCat 接口.

## 什么时候适合使用远端 NapCat 接口

- 自定义的 NcatBot 功能对性能要求很高, 云服务器无法负担, 但希望 NapCat 能够不间断运行, 不需要每次使用 NcatBot 时都启动 NapCat.

- 具备**基本的网络和操作系统知识**的前提下, 你认为需要使用远端 NapCat 接口的情况.


## 准备工作

远端 NapCat 接口一般由云服务器提供, 云服务器的操作系统一般是 Linux, 你需要完成以下操作:

1. 获取服务器公网 IP.
2. 开放**系统防火墙**的 3000, 3001, 6099 端口.
3. 开放**服务商防火墙**的 3000, 3001, 6099 端口.

请参考 [Linux 安装](../1.%20快速开始/1.1%20Linux%20安装.md) 完成 2, 3 步, 服务器公网 IP 请向服务商获取.

## 自动配置远端 NapCat 服务器(推荐)

在远端正常运行 NcatBot 的示例程序, 下面将其称为**远端引导程序**, 运行远端引导程序时, 除了改动 `bot_uin` 和 `root` 外, 还需将 ==`ws_uri` 填写为 `ws://<服务器公网 IP>:3001`.== 例如服务器公网 IP 为 `123.123.123.123`, 则 `ws_uri` 应填写为 `ws://123.123.123:3001`.

Ncatbot 会进行自动登录的引导, 远端引导程序成功启动并进行测试后, 可以关闭 NcatBot 但**不要关闭 NapCat**.

接着在本地运行 Ncatbot, 称为**本地启动程序**. 本地启动程序 `ws_uri` 填写方式和远端引导程序一致, 均为 `ws://<服务器公网 IP>:3001`. 

本地启动程序的 `token` 可以和远端引导程序一样默认留空, 也可以自行填写, 但是必须和远端引导程序进行引导时的 `token` 填写保持一致. **建议将本地启动程序和远端引导程序的 `token` 设置为随机字符串以保证安全.**

## 手动配置远端 NapCat 服务器

根据 [NapCat 文档](https://napneko.github.io/), 在远端正确配置 NapCat 及其 WebSocket 服务器.

本地运行 NcatBot, `ws_uri` 填写为 `ws://服务器公网 IP:{你配置时填写的端口}`. `token` 填写为 WebSocket 的 token(注意不是 webui 的 token, WebSocket token 默认为空字符串).


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

### 运行 NcatBot

::: tip
预装版镜像中已经安装的 NcatBot 版本为 3.5.2, 最新稳定版为 3.5.9, 建议执行 `pip install -U ncatbot==3.5.9` 更新到最新稳定版本.
:::

通过 ssh 登录购买的云服务器, 在 `/root/` 目录下已经有 `main.py`, 只需更改其中的 `bot_uin` 和 `root` 即可正常运行.


---
title:  Ncatbot CLI
createTime: 2025/03/23 16:45:00
permalink: /guide/usenccli/
---


### 启动 CLI

确保当前 Python 环境安装了 NcatBot.

执行 `python -m ncatbot.cli.main [path]` 可以启动 CLI, `[path]` 是一个可选参数, 用于指定 CLI 工作目录.

==默认工作目录是 `./ncatbot`==, 你需要==先自行创建它==或者干脆使用 `python -m ncatbot.cli.main ./` 将当前目录(或者别的目录)指定为工作目录.

工作目录会用于存放**插件文件夹**, **插件数据**, **日志**等必要的文件.


### 启动 NcatBot

第一次进入 CLI 时, 会提示设置 QQ 号. 后续启动时无需再次设置. 在 CLI 中也可以用 `setqq` 修改 QQ 号.

第一次进入 CLI 时还会自动安装 `TestPlugin` 插件, 用于测试 NcatBot 的基本功能, 后续可以使用 `remove TestPlugin` 卸载插件.

启动后输出以下提示信息:

```shell
工作目录:  C:\Users\huany\Desktop\Projects\QQ-Bot\backend
欢迎使用 NcatBot CLI!
当前 QQ 号为: 123456
支持的命令:
1. 'install <插件名> [--fix]' - 安装插件
2. 'setqq' - 重新设置 QQ 号
3. 'start' - 启动 NcatBot
4. 'update' - 更新 NcatBot
5. 'remove <插件名> ' - 卸载插件
6. 'list' - 列出已安装插件
7. 'exit' - 退出 CLI 工具
请输入命令: 
```

在 CLI 中输入 `start` 并回车即可启动 NcatBot.

### NcatBot-CLI 命令

#### `install <插件名> [--fix]`

对于已经发布到[插件商店](https://github.com/ncatbot/ncatbot-plugins)的插件, 可以使用 CLI 的 `install` 命令自动安装.

例如查看[插件列表](https://github.com/ncatbot/NcatBot-Plugins/tree/main/plugins)找到已有的插件 `TestPlugin` 后, 可以使用 `install TestPlugin` 命令安装插件.

`--fix` 是一个可选参数, 用于尝试修复没有被正确安装的插件.

#### `start`

启动 NcatBot.

#### `update`

更新 NcatBot. 会使用 pip 从阿里源(`https://mirrors.aliyun.com/pypi/simple/`)安装最新版本的 NcatBot, 安装之后会关闭 CLI.

---
title:  术语表
createTime: 2025/03/27 10:55:11
permalink: /guide/w3nlvmk0/
---

### 引导程序

引导程序用于**启动 NcatBot**, 下面是一个最简单的引导程序:

```python
from ncatbot.core import BotClient, config

config.set_bot_uin("123456")  # 设置 bot qq 号 (必填)
config.set_root("123456")  # 设置 bot 超级管理员账号 (建议填写)
config.set_ws_uri("ws://localhost:3001")  # 设置 napcat websocket server 地址
config.set_token("")  # 设置 token (napcat 服务器的 token)

if __name__ == "__main__":
    bot = BotClient()
    bot.run()

```

假设引导程序被保存为 `launch.py`, 那么运行 `python launch.py` 即可启动 NcatBot.

引导程序将会在运行 `python launch.py` 的工作目录下查找 `plugins/` 文件夹并加载其中的插件, 日志保存在 `logs/` 文件夹下. 插件数据保存在 `data/` 文件夹下.


---
title: 了解 NcatBot 插件
createTime: 2025/02/08 10:07:54
permalink: /guide/dplugins/
---

## NcatBot 插件

在了解 NcatBot 插件之前, 请至少先阅读[快速开始](../1.%20快速开始/1.%20快速开始.md)和[开发指南](../1.%20快速开始/2.%20开发指南.md)的两部分内容.

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
- 两个插件完全独立, 例如 `your_plugin1` 不能使用 `plugins/your_plugin2/` 下任何资源, 只能使用 `plugins/your_plugin1/` 下资源. 

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

引导程序, 用于启动 NcatBot.

```python
from ncatbot.core import BotClient
from ncatbot.utils import config

config.set_bot_uin("123456")  # 设置 bot qq 号 (必填)
config.set_ws_uri("ws://localhost:3001")  # 设置 napcat websocket server 地址
config.set_token("") # 设置 token (napcat 服务器的 token)

bot = BotClient()

if __name__ == "__main__":
    bot.run()
```

### 代码拆解

#### 导入

```python
from ncatbot.plugin import BasePlugin, CompatibleEnrollment
from ncatbot.core import GroupMessage
```

- `BasePlugin`: 插件基类. 所有的插件必须是 `BasePlugin` 的派生类, 否则无法被正常加载.
- `CompatibleEnrollment`: 兼容回调函数注册器, 用于注册 BotClient 风格的回调函数. 插件项目和 BotClient 项目采用==两种不同的事件触发机制==, 为了方便迁移, 提供了这个注册器.

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

## BotClient 项目和插件项目比较

- 直接使用 `NcatBot` 时, API 通过 `bot.api` 调用, 而插件系统通过 `self.api` 调用.
- 直接使用 `NcatBot` 时, 回调函数通过 `@bot.group_event()` 注册, `bot` 是一个 `BotClient` 实例, 而插件系统需要在 `MyPlugin` 里用 `@bot.group_event()` 注册, `bot` 是 `CompatibleEnrollment` 兼容注册器.
- 使用插件系统时, **引导程序中无需注册回调函数**, 只需要**填写配置项**, **创建 `BotClient` 实例**, **运行 `BotClient` 实例**.


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

### 使用兼容回调函数注册器

参考[了解 NcatBot 插件](1.%20了解%20NcatBot%20插件.md).

兼容回调函数注册器的本质仍然是订阅事件. 使用兼容注册器注册后, 会在**插件加载时**为注册的函数**订阅对应的事件**.


### 根据事件名称订阅事件

可以使用精确匹配或者正则匹配==按照事件类型==订阅事件, 如下例.

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

### 事件回调函数

订阅事件时需要指定一个回调函数, 回调函数需要接受一个 `Event` 类型的参数.

在事件回调函数中可以对事件进行处理, 也可以调用 `Event` 的方法停止事件传播或者添加事件处理结果.

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

功能是对事件发布和处理的进一步封装, 使用功能可以方便快捷的接入 NcatBot 的**[权限管理机制](3.3%20权限系统.md)**.

功能的运作对象是==消息事件==, 只有**群聊和私聊消息事件**才会进行下面的判定.

体现在实际使用中, 直接私聊 Bot 或者在任何一个 Bot 所在的群聊中发送满足条件的消息即可触发功能.

### 权限判定机制

收到消息后, 对于每个功能会先进行权限判定. 消息**来源**(包括用户 QQ 号和所在群聊 QQ 号)会同时参与权限判定. 只有**两者都**满足权限要求时. 才会进入下一步的触发机制.

功能在**注册时**会分配好权限节点, 只有被授权了权限节点的**来源**才能通过权限判定.

### 功能的触发条件

如果消息通过了这项功能的权限判定, 会进行触发判定.

触发判定机制在注册功能时确定.


## 注册功能

注册功能需要在插件**加载时**进行.

以下函数用于注册功能:

```python
def register_default_func(
    self,
    handler: Callable[[BaseMessage], Any],
    permission: PermissionGroup = PermissionGroup.USER.value,
):
def register_user_func(
        self,
        name: str,
        handler: Callable[[BaseMessage], Any],
        filter: Callable[[Event], bool] = None,
        raw_message_filter: Union[str, re.Pattern] = None,
        permission_raise: bool = False,
):
def register_admin_func(...)
```

### `register_default_func`

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

- `raw_message_filter`: 功能触发条件, 接受一个 `str` 或者 `re.Pattern` 类型的参数, 必须定义为==同步函数==, 如果消息==前缀和指定的 `str` 值一致==, 或者 ==`re.match(raw_message_filter, message.raw_message)` 返回 `True`==(正则表达式从头匹配匹配成功), 则触发该功能, 与 `filter` 互斥.
  
- `filter`: 功能触发条件, 接受一个 `Event` 类型的参数, 必须定义为==同步函数==, 返回一个 `bool` 值, 如果为 `True` 则触发该功能, 与 `raw_message_filter` 互斥.
  
- `permission_raise`: 是否针对群聊提权, 如果 `user_id` (消息发送者 QQ 号) 为 admin 级别及以上权限, 则临时提升消息来源群聊的权限为 `root`. 私聊被分在一个特殊的群组, 权限为 `root`.

### `register_admin_func`

注册一个管理员功能, 如果能满足触发条件则触发该功能, 其它同上.

## 内置功能

参考[内置功能](3.4%20内置功能.md)


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

```
解析时间参数为调度配置字典，支持格式:
- 一次性任务: 'YYYY-MM-DD HH:MM:SS' 或 GitHub Action格式 'YYYY:MM:DD-HH:MM:SS'
- 每日任务: 'HH:MM'
- 间隔任务: 
    * 基础单位: '120s', '2h30m', '0.5d'
    * 冒号分隔: '00:15:30' (时:分:秒)
    * 自然语言: '2天3小时5秒'
```

一般在 `BasePlugin.on_load()` 方法中时注册定时任务.

### 函数原型参考

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

### 实际案例

又见[早八提醒插件](../../8.%20实际项目参考/3.%20早八提醒插件.md).

```python
class ZaoBa(BasePlugin):
    name = "ZaoBa" # 插件名称
    version = "0.0.1" # 插件版本

    async def on_load(self):
        # 插件加载时执行的操作, 可缺省
        self.add_scheduled_task(
            job_func=self.zaoba, 
            name="早八问候", 
            interval="08:00",
            max_runs=10, 
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

## 不同类型的任务

通过 `interval` 参数来明确任务类型.

- 一次性任务: 传入字符串格式为 `YYYY-MM-DD HH:MM:SS` 或 GitHub Action 格式 `YYYY:MM:DD-HH:MM:SS`. 在这个时间点执行一次.
- 间隔任务: 传入字符串格式为 `120s`, `2h30m`, `0.5d` 或冒号分隔格式 `00:15:30` (时:分:秒) 或自然语言格式 `2天3小时5秒`. 从当前开始, 经过指定时间间隔后执行一次.
- 每日任务: 传入字符串格式为 `HH:MM`. 每天在这个时间点执行一次.

任务的时间精度有限, 大约有 5s 的误差.

## 任务回调函数

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


## 任务执行

### 最大执行次数

通过 `max_runs` 参数来指定任务的最大执行次数, 当任务执行次数超过这个值时, 任务会被移除.

一次性任务最大执行次数默认为 1, 禁用 `max_runs` 参数.

### 任务判定条件

`conditions` 参数为任务执行条件列表, 是一系列的函数, 每个函数都返回一个布尔值. 当所有函数都返回 `True` 时, 任务才会被执行.



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
title:  安装时常见问题
createTime: 2025/02/09 16:34:49
permalink: /guide/prgor4t7/
---

## Frequently Asked Questions

### 1. Windows10 为什么连接成功了发 "测试" 还是没反应

这个问题是 Win10 命令行开启**快速编辑模式**后 "选中聚焦" 时被暂停导致的.

检查登录 QQ 黑框框是否被 "选中" 了, 当用左键滑过终端时, 会自动选中==并暂停终端==, 暂停终端后自然无法回复, 此时先左键终端再右键终端即可恢复.

也可[关闭快速编辑模式](https://juejin.cn/post/7021695977824190478)一劳永逸解决问题.

### 2. QQ 提醒我使用了第三方插件

这是 QQ 的风控. 建议是==不要频繁切换登录地点==, 也不要==频繁启动 NapCat==.

Ncatbot 运行结束后不会关闭 NapCat 服务, 下次运行时会直接连接上次开启的 NapCat 服务, 请避免频繁启动 NapCat.

### 3. 提示已经登录无法登录

在电脑上退出 Bot 的 QQ 登录, 重试, 如果还是不行, 任务管理器杀掉所有的 QQ 进程后重试.

### 4. Linux 系统提示 WebUI 连接失败

检查 ufw 防火墙设置，需要放通 3000/3001/6099 三个端口。

### 5. Linux Loger: sudo 命令不存在, 请检查错误

执行(Ubuntu):
```
apt-get update
apt-get install sudo
```

### 6. Linux 安装过程中，出现紫色界面(Package configuration)并卡住

先 Ctrl+C 退出程序, ==重启服务器==, 再执行 `python3 main.py`。

### 7. 扫码登录过程中提示二维码过期

先 Ctrl+C 退出程序, 再执行 `python3 main.py` 重新运行。

###

Windows 已保护你的电脑
Microsoft Defender SmartScreen 阻止了无法识别的应用启动。运行此应用可能会导致你的电脑存在风险。

---
title:  运行时常见问题
createTime: 2025/03/26 08:41:23
permalink: /guide/8v15vh4m/
---


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
createTime: 2025/03/26 00:51:46
---

### 介绍

LLM_API 插件不直接提供大语言模型对话服务, 而是提供基于事件的对话接口和基本配置服务.

### 事件

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

### 插件配置项

使用 NcatBot 的内置插件配置项功能, 三个核心配置项如下:

- api: `/cfg LLM_API.api <your api>` api-key。
- url: `/cfg LLM_API.url <your url>` 基准 url。
- model: `/cfg LLM_API.model <your model>` 模型名。

例如 [Kimi](https://platform.moonshot.cn/docs/guide/migrating-from-openai-to-kimi#%E5%85%B3%E4%BA%8E-api-%E5%85%BC%E5%AE%B9%E6%80%A7):

```
url: https://api.moonshot.cn/v1
model: moonshot-v1-8k
api: <KEY>
```


### 测试

拥有管理员权限可以发送 `/tllma` 触发大模型测试事件.

### 源代码

```python
from ncatbot.plugin import BasePlugin, CompatibleEnrollment, Event
from ncatbot.core import GroupMessage, PrivateMessage
import asyncio
import httpx
import openai
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
        self.register_admin_func("test", self.test, raw_message_filter="/tllma", permission_raise=True) # 注册一个管理员功能, 需要提权以便在普通群聊中触发
    
    async def test(self, message: PrivateMessage):
        # 通过事件调用插件提供的接口(其它插件也可以通过发布事件调用这个接口)
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
title: 早八提醒插件
createTime: 2025/03/27 10:07:54
permalink: /guide/zaobaplg/
---

### 介绍

这是一个用于演示[定时任务](../6.%20开发%20NcatBot%20插件/4.%20插件高级功能/4.5%20定时任务.md)的插件.

### 源代码

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
            max_runs=10, 
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