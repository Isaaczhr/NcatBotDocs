export const redirects = JSON.parse("{\"/notes/guide/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B/\":\"/guide/x2kat0fj/\",\"/notes/guide/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B/%E5%AE%89%E8%A3%85.html\":\"/guide/f2xdv9kb/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/x2kat0fj/", { loader: () => import(/* webpackChunkName: "guide_x2kat0fj_index.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/guide/x2kat0fj/index.html.js"), meta: {"title":"快速开始","icon":"codicon:debug-start"} }],
  ["/guide/f2xdv9kb/", { loader: () => import(/* webpackChunkName: "guide_f2xdv9kb_index.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/guide/f2xdv9kb/index.html.js"), meta: {"title":"安装","icon":"ep:guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/isaac/GitHub/docs.ncatbot.xyz/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
