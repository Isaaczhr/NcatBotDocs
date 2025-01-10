import comp from "/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"NcatBot\",\"tagline\":\"Python SDK Bot Framework\",\"text\":\"基于Napcat的PythonSDK\",\"actions\":[{\"theme\":\"brand\",\"text\":\"快速开始 →\",\"link\":\"/notes/guide/快速开始/安装\"},{\"theme\":\"alt\",\"text\":\"Github\",\"link\":\"https://github.com/liyihao1110/NcatBot\"}]}}],\"gitInclude\":[],\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.16,\"words\":48},\"filePathRelative\":\"README.md\",\"categoryList\":[],\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
