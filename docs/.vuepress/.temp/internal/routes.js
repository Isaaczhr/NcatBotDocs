export const redirects = JSON.parse("{\"/notes/guide/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B/\":\"/guide/ucli0mqd/\",\"/notes/guide/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B/%E5%AE%89%E8%A3%85.html\":\"/guide/f2xdv9kb/\",\"/notes/guide/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B/%E7%AE%80%E5%8D%95%E5%85%A5%E9%97%A8%E5%AE%9E%E4%BE%8B.html\":\"/guide/aijuxo7q/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"NcatBot 文档","icon":"solar:cat-linear"} }],
  ["/guide/ucli0mqd/", { loader: () => import(/* webpackChunkName: "guide_ucli0mqd_index.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/guide/ucli0mqd/index.html.js"), meta: {"title":"欢迎！","icon":"material-symbols:start-rounded"} }],
  ["/guide/f2xdv9kb/", { loader: () => import(/* webpackChunkName: "guide_f2xdv9kb_index.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/guide/f2xdv9kb/index.html.js"), meta: {"title":"安装","icon":"ic:outline-install-desktop"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/guide/aijuxo7q/", { loader: () => import(/* webpackChunkName: "guide_aijuxo7q_index.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/guide/aijuxo7q/index.html.js"), meta: {"title":"简单入门实例","icon":"tabler:door"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
