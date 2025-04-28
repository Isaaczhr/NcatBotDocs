const fs = require('fs');
const path = require('path');

const outputFilePath = path.join(__dirname, '../all-guides.md');

// 明确列出的 .md 文件路径
const mdFiles = [
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\1. 快速开始\\1. 快速开始.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\1. 快速开始\\1.3 MacOS 安装.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\1. 快速开始\\1.4 Windows 一键安装.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\1. 快速开始\\1.5 极简安装指南.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\other\\AI-开发指南.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\other\\AI-插件最小示例.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\2. 基本开发\\2. 主动模式最小示例.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\2. 基本开发\\3. NcatBot 生命周期.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\2. 基本开发\\4. 配置项.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\3. 事件处理\\1. 回调函数.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\3. 事件处理\\2. 事件上报.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\3. 事件处理\\3. 解析消息.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\4. API 参考\\1. API 调用.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\4. API 参考\\2. 主要 API 及其使用.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\4. API 参考\\3. 其它 API 介绍.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\5. 杂项\\1. 认识 NcatBot.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\5. 杂项\\2. 使用远端 napcat 接口.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\5. 杂项\\3. 日志.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\5. 杂项\\4. 轻松上云.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\5. 杂项\\5. CLI.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\5. 杂项\\7. AI+NcatBot.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\1. 了解 NcatBot 插件.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\2. 插件的加载和卸载.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\5. 发布你的插件.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\6. 个人插件.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\3. 插件的交互系统\\3.1 事件的发布和订阅.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\3. 插件的交互系统\\3.2 注册功能.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\3. 插件的交互系统\\3.3 权限系统.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\3. 插件的交互系统\\3.4 内置功能.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\4. 插件高级功能\\4.1. 内置可持久化数据.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\4. 插件高级功能\\4.2. 依赖其它插件.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\4. 插件高级功能\\4.3. 依赖第三方 Python 库.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\4. 插件高级功能\\4.4 私有工作目录.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\6. 开发 NcatBot 插件\\4. 插件高级功能\\4.5 定时任务.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\7. 常见问题\\1. 安装时常见问题.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\7. 常见问题\\2. 运行时常见问题.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\7. 常见问题\\3. 开发时常见问题.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\8. 实际项目参考\\1. 简单 BotClient 项目.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\8. 实际项目参考\\2. LLM_API 插件项目.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\8. 实际项目参考\\教程项目\\上传和获取文件.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\8. 实际项目参考\\教程项目\\主动发送消息.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\8. 实际项目参考\\教程项目\\发送合并转发消息.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\8. 实际项目参考\\教程项目\\发送复杂消息.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\docs\\notes\\guide\\8. 实际项目参考\\教程项目\\处理好友请求和加群请求.md',
  'C:\\Users\\huany\\Desktop\\Projects\\QQ-Bot\\docs.ncatbot.xyz\\other\\定时任务插件.md'
];

// 拼接所有 .md 文件内容
function concatMarkdownFiles(mdFiles, outputPath) {
  const content = "本文档供 AI 阅读. NcatBot 文档 base_url 为 `https://docs.ncatbot.xyz/`, 文档中包含相对链接，为用户生成链接时必须加上这个前缀生成绝对链接。\n\n" + 
    mdFiles.map((file) => fs.readFileSync(file, 'utf-8')).join('\n\n');
  
  fs.writeFileSync(outputPath, content);
}

// 主程序
concatMarkdownFiles(mdFiles, outputFilePath);

console.log(`所有指定 .md 文件已拼接到 ${outputFilePath}`);