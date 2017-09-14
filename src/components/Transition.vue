<script>
import velocity from 'velocity-animate'
import transition from '../core/styles/transitions'
export default {
  name: 'transition',
  functional: true,

  props: {
    group: Boolean,
    appear: Boolean,
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: () => 245,
    },
    delay: {
      type: Number,
      default: () => 15,
    }
  },

  render(h, c) {
    const data = {
      props: {
        css: false,
        appear: c.props.appear,
        mode: 'out-in',
      },
      on: {
        beforeEnter(el) {
          el.style.opacity = 0
          el.style.transformOrigin = 'center center'
        },
        enter(el, done) {
          const delay = el.dataset.index * c.props.delay
          velocity(el, { ...transition[c.props.name] }, { easing: [.25, .8, .25, 1], duration: c.props.duration, complete: done, delay: c.props.delay })
        },
        leave(el, done) {
          const delay = el.dataset.index * c.props.delay
          velocity(el, 'reverse', { delay })
          setTimeout(() => {
            el.removeAttribute('style')
            done()
          }, c.children.length * c.props.delay + c.props.duration)
        },

      }
    }
    return h(c.props.group ? 'transition-group' : 'transition', data, c.children)
  }
}
</script>

