<template>
  <div v-class="[classes.root, block && classes.block]">
    <v-transition name="fadeIn" :duration="420">
      <div v-click-outside="hide" @click="closeClick" v-class="[classes.list, block && classes.listBlock]" v-show="isActive" data-dropdown>
        <slot></slot>
      </div>
    </v-transition>
    <div v-class="classes.dropdown" @click="show">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
import Transition from './Transition.vue'
import withinviewport from 'withinviewport'
import throttle from '../core/utils/throttle'

export default {
  name: 'dropdown',

  components: {
    'v-transition': Transition
  },

  data() {
    return {
      isActive: this.visible,
      width: 0,
      height: 0,
      container: {},
      dropdown: {},
    }
  },

  mounted() {
    this.dropdown = this.$el.querySelector('[data-dropdown]')
    this.container = this.closestBoundry(this.dropdown, 'boundry') || window
    this.$nextTick(() => {
      this.width = this.$el.clientWidth
      this.height = this.$el.clientHeight
    })
  },

  methods: {
    hide() {
      this.isActive = false
    },
    show: throttle(function() {
      if (!this.$slots.dropdown) return
      if (this.isActive) return this.isActive = false
      setTimeout(() => {
        this.isActive = true
        if (this.isActive) {
          this.$nextTick(() => {
            this.setPosition()
          })
        }
      }, 10)
    }, 145),
    closeClick() {
      if (!this.autoClose) return
      this.hide()
    },
    closestBoundry(el, sel) {
      while (!el.dataset || el.dataset[sel] === undefined) {
        el = el.parentNode;
        if (!el) {
          return null;
        }
      }
      return el;
    },
    setPosition() {
      if (this.dropdownPosition.transform) this.dropdown.style.transform = this.dropdownPosition.transform
      if (this.dropdownPosition.left) this.dropdown.style.left = this.dropdownPosition.left + 'px'
      if (this.dropdownPosition.right) this.dropdown.style.right = this.dropdownPosition.right + 'px'
      if (this.dropdownPosition.top) this.dropdown.style.top = this.dropdownPosition.top + 'px'
      document.body.style.overflow = 'hidden'
      const translate = this.dropdownPosition.transform.split(',')
      let i = 0
      while (!withinviewport(this.dropdown, { sides: 'bottom', container: this.container })) {
        i--
        translate[1] = i + 'px'
        this.dropdown.style.transform = translate.toString()
        if (i < -1000 || i > 1000) break;
      }
      while (!withinviewport(this.dropdown, { sides: 'top', container: this.container })) {
        i++
        translate[1] = i + 'px'
        this.dropdown.style.transform = translate.toString()
        if (i < -1000 || i > 1000) break;
      }
      i = 0
      while (!withinviewport(this.dropdown, { sides: 'left', container: this.container })) {
        i++
        translate[0] = 'translate3d(' + i + 'px'
        this.dropdown.style.transform = translate.toString()
        if (i < -1000 || i > 1000) break;
      }
      i = 0
      while (!withinviewport(this.dropdown, { sides: 'right', container: this.container })) {
        i--
        translate[0] = 'translate3d(' + i + 'px'
        this.dropdown.style.transform = translate.toString()
        if (i < -1000 || i > 1000) break;
      }
      document.body.style.overflow = ''
    },
  },

  props: {
    autoClose: Boolean,
    maxHeight: {
      type: [String, Number],
      default: () => 'auto',
    },
    block: {
      type: Boolean,
      default: () => false,
    },
    position: {
      type: String,
      default: 'bottomCenter'
    },
    visible: {
      type: Boolean,
      default: () => false,
    }
  },

  watch: {
    isActive(value) {
      this.$emit('visible', value)
    },
    visible(value) {
      this.isActive = value
      if (this.isActive) {
        this.$nextTick(this.setPosition)
      }
    }
  },

  computed: {
    dropdownPosition() {
      switch (this.position) {
        case 'bottomCenter': return { top: this.height, left: '50%', transform: 'translate3d(-50%, 0, 0)' }
        case 'bottomRight': return { top: this.height, left: this.width, transform: 'translate3d(0, 0, 0)' }
        case 'bottomLeft': return { top: this.height, right: this.width, transform: 'translate3d(0, 0, 0)' }
        case 'topRight': return { top: 0, left: this.width, transform: 'translate3d(0, 0, 0)' }
        case 'topLeft': return { top: 0, right: this.width, transform: 'translate3d(0, 0, 0)' }
        case 'topCenter': return { top: 0, left: '50%', transform: 'translate3d(50%, 0, 0)' }
        case 'insideRight': return { top: 0, right: 0, transform: 'translate3d(0, 0, 0)' }
        case 'insideLeft': return { top: 0, left: 0, transform: 'translate3d(0, 0, 0)' }
      }
    },
    styles() {
      return {
        root: {
          position: 'relative',
          display: 'inline-flex',
          top: 0,
          left: 0,
        },
        block: {
          display: 'flex',
          width: '100%',
          minWidth: '100%',
          flexGrow: 1,
        },
        dropdown: {
          position: 'relative',
          zIndex: 1,
          top: 0,
          left: 0,
        },
        list: {
          outline: 'none',
          position: 'absolute',
          zIndex: 2,
          ...this.dropdownPosition,
          boxShadow: this.$shadow['medium'],
          maxHeight: this.maxHeight,
          minWidth: 40,
          overflowY: this.maxHeight ? 'scroll' : 'auto'
        },
        listBlock: {
          left: 0,
          right: 0,
          width: '100%',
        }
      }
    }
  }
}
</script>

<style>
.dropDown-enter-active,
.dropDown-leave-active {
  transition: opacity .315s cubic-bezier(.25, .8, .25, 1);
}

.dropDown-enter,
.dropDown-leave-to {
  opacity: 0;
}
</style>
