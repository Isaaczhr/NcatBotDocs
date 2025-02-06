# NcatBotDocs

本项目是 [NcatBot](https://github.com/liyihao1110/ncatbot) 的文档项目, 用于文档的编写和发布.

## Contribution

如果只做简单的文本修改, 可以只修改对应的 .md 文件并 PR, 如果修改比较繁琐, 请参考以下步骤:

1. 阅读 [VuePress 文档](https://v2.vuepress.vuejs.org/zh/) 和 [Plume 主题文档](https://theme-plume.vuejs.press/) 了解 VuePress 的使用方法.

2. 使用 1. 中学到的知识对文档进行修改.

3. 预览修改后的文档
   
    1. 安装 node.js (推荐 node.js >= 18.19.0)

    2. 安装 vuepress

    ```
    npm install -g npm@latest
    npm install -g vuepress
    ```

    3. 本地预览
    
    **重启终端**, 切换到本项目目录下, 执行:
    ```
    npm install
    npm run docs:dev
    ```

4. 确认无误后提交 PR.

