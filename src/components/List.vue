<template>
  <div v-class="classes.root">
    <v-transition group name="fadeInTop" :duration="320" :delay="25">
      <div data-item @mousedown="onMouseDown" v-show="isVisible" v-class="classes.item" v-for="(item, key) in options" :key="key" :data-index="key">
        <slot :item="item" v-if="!display || item.hasOwnProperty(display)">
        </slot>
      </div>
    </v-transition>
  </div>
</template>

<script>
import Transition from './Transition.vue'
import { padding } from 'polished'

export default {
  name: 'list',

  components: {
    'v-transition': Transition,
  },

  methods: {
    onMouseDown(e) {
      e.preventDefault()
    },
  },

  computed: {
    isVisible() {
      return this.$parent.isActive !== undefined ? this.$parent.isActive : true
    },
    styles() {
      return {
        root: {
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          userSelect: 'none',
          backgroundColor: '#fff',
          height: 'auto',
          position: 'relative',
          ...padding(...this.padding),
        },
        item: {
          transition: 'background .145s ease',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: this.$color.dark(.05)
          }
        },
      }
    }
  },

  props: {
    padding: {
      type: Array,
      default: () => [],
    },
    display: String,
    options: {
      type: Array,
      default: () => [],
    }
  }
}
</script>
