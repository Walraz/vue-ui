import vOutsideEvents from 'vue-outside-events'
import { injectGlobals } from 'hepha'
import { StyleSheet } from 'aphrodite/no-important'
import { injectStyleOnce } from 'aphrodite/lib/inject'
import StyleDirective from './directives/StyleDirective'
import colors from './styles/colors'
import shadows from './styles/shadows'
import VueTouchRipple from 'vue-touch-ripple'
import globals from './styles/globals'
import eventBus from './utils/eventBus'
import components from '../components'
require('vue-touch-ripple/component.css')

export default function install(Vue, options = {}) {
  const { theme = {} } = options
  injectGlobals(injectStyleOnce, globals)
  Vue.prototype.$color = colors(theme)
  Vue.prototype.$shadow = shadows
  Vue.prototype.$bus = eventBus
  Vue.use(vOutsideEvents)
  Vue.use(VueTouchRipple)
  Vue.directive('class', StyleDirective)
  for (let component in components) {
    Vue.component(`v-${components[component].name}`, components[component])
  }
  Vue.mixin({
    props: {
      dataIndex: {
        type: Number,
        default: () => 0,
      },
    },
    mounted() {
      if (this.dataIndex > -1)
        this.$el.setAttribute('data-index', this.dataIndex)
    },
    computed: {
      classes() {
        return StyleSheet.create(this.styles)
      },
    },
  })
}
