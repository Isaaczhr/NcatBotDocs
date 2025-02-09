## 发送群消息 (post_group_msg)
---
用于向指定群发送消息，支持多种消息类型和组合方式。  
### 基本参数

| 参数       | 类型           | 说明                     |
| -------- | ------------ | ---------------------- |
| group_id | int/str      | 目标群号                   |
| text     | str          | 文本消息                   |
| face     | int          | QQ表情ID                 |
| json     | str          | JSON格式消息               |
| markdown | str          | Markdown格式消息（会自动转换为图片） |
| at       | int/str      | 要@的成员QQ号               |
| reply    | int/str      | 要回复的消息ID               |
| music    | list/dict    | 音乐分享                   |
| dice     | bool         | 发送骰子                   |
| rps      | bool         | 发送猜拳                   |
| image    | str          | 图片路径                   |
| rtf      | MessageChain | 富文本消息链                 |                        
::: warning  
`post_group_msg` 除了`rtf`以外只建议发送一个回复除外的元素  
:::
### 消息类型说明
---
#### 图片支持格式
- 本地文件路径
- 网络图片URL
- Base64编码图片
#### 音乐分享支持两种方式
1. 平台音乐：使用列表格式 `[type, id]`
   - type: 平台类型（qq/163/kugou/migu/kuwo）
   - id: 音乐ID
2. 自定义音乐：使用字典格式，需包含以下字段
   - url: 跳转链接
   - audio: 音频链接
   - title: 标题
   - image: 封面图（可选）
   - singer: 歌手名（可选）
#### 富文本消息链
使用 MessageChain 可以组合多种消息元素，例如：
- 文本
- 图片
- @某人
- 回复
- 表情
- 等等  
::: warning  
当`At/图片/文本/表情(包括face/dice/rps)` 存在时，其他消息元素均不生效  
多个回复同时存在时，仅接受第一个回复  
:::
## 使用示例
### 发送简单文本
```python
await bot.api.post_group_msg(group_id=123456, text="你好")
```
### 发送图片
```python
await bot.api.post_group_msg(group_id=123456, image="path/to/image.jpg")
```
### 回复消息
```python
await bot.api.post_group_msg(group_id=123456, reply=msg.message_id, text="回复内容")
```
### 使用消息链发送复杂消息
```python
from ncatbot.element import MessageChain, Reply, At, Text, Image

message = MessageChain([
    Reply(msg.message_id),
    At(123456),
    Text("你好"),
    Image("path/to/image.jpg")
])
await bot.api.post_group_msg(group_id=123456, rtf=message)
```

## 注意事项
1. 回复消息（Reply）只能有一个，且必须在消息开头
2. 图片支持本地路径、网络URL和Base64格式
3. 使用 MessageChain 时可以更灵活地组合多种消息元素

## 发送单个消息
当在群聊中接收到“你好”时，发送“我好”
```python
@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg) # 输出群聊消息
    if msg.raw_message == "你好":
        await bot.api.post_group_msg(group_id=msg.group_id, text="我好")
```

当在私聊中接收到“你好”时，发送“我好”
```python
@bot.private_event()
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)  # 输出私聊消息
    if msg.raw_message == "你好":
        await bot.api.post_private_msg(user_id=msg.user_id, text="我好")
```
## 回复消息
当在群聊中接收到“你好”时，回复你的消息，并发送“我好”
```python
@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)  # 输出群聊消息
    if msg.raw_message == "你好":
        await bot.api.post_group_msg(
            group_id=msg.group_id, reply=msg.message_id, text="我好"

        )


```

当在私聊中接收到“你好”时，回复你的消息，并发送“我好”
```python
@bot.private_event()
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)  # 输出私聊消息
    if msg.raw_message == "你好":
        await bot.api.post_private_msg(
            user_id=msg.user_id, reply=msg.message_id, text="我好"
        )
```
## 发送组合消息
### MessageChain消息链
是不是很眼熟(没错 !!从Mirai那借鉴的!!
#### 导入
```python
from ncatbot.element import ( #导入元素 // [!code focus:2]
    MessageChain,  # 消息链，用于组合多个消息元素
    Text,          # 文本消息
    Reply,         # 回复消息
    At,            # @某人
    AtAll,         # @全体成员
    Dice,          # 骰子
    Face,          # QQ表情
    Image,         # 图片
    Json,          # JSON消息
    Music,         # 音乐分享（网易云、QQ音乐等）
    CustomMusic,   # 自定义音乐分享
    Record,        # 语音
    Rps,           # 猜拳
    Video,         # 视频
    File,          # 文件
)
```
除了高亮的是必须的，其他都可以选择使用
#### 参考
```python
from ncatbot.element import MessageChain, Text, Rps

@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)
    if msg.raw_message == "test":
        # 使用 MessageChain 发送复合消息
        # 请从element中导入元素
        message = MessageChain([
                "1",  # 使用这个可以不导入Text
                Text("2"),
                [Text("3"), Rps()],
        ])
        await bot.api.post_group_msg(group_id=msg.group_id, rtf=message)
```
