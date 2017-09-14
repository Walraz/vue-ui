import { css } from 'aphrodite/no-important'

function setClasses(el, binding) {
  if (el.nodeName == 'svg' || el.nodeName == 'circle') {
    el.className.baseVal = css(binding.value)
    return
  }
  el.className = css(binding.value)
}

export default {
  inserted: setClasses,
  update: setClasses,
}
