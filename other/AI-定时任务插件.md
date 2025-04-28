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