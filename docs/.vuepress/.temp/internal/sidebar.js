export const sidebar = {"/":{"/0/":"a","/1/":"u","/2/":"t","/3/":"o","/guide/":{"items":"auto","prefix":"/notes/guide/"}},"__auto__":{"/notes/guide/":[{"text":"快速开始","link":"/guide/x2kat0fj/","items":[{"text":"安装","link":"/guide/f2xdv9kb/","icon":"ep:guide"}],"icon":"ep:guide","collapsed":false}]},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
