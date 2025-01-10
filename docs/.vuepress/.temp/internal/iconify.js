import './iconify.css'
export const icons = {"solar:cat-linear":"vpi-gqtebz33","ic:outline-install-desktop":"vpi-kp6azenb","material-symbols:start-rounded":"vpi-hvrmb2nw","tabler:door":"vpi-4xa9a5ku"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateIcons) {
    __VUE_HMR_RUNTIME__.updateIcons(icons)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ icons }) => {
    __VUE_HMR_RUNTIME__.updateIcons(icons)
  })
}
