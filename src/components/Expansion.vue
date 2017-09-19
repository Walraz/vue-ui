<template>
  <div v-class="[classes.root, inset && classes.insetRoot]">

    <div v-class="classes.expansion">
      <div v-class="classes.header" @click="openExpansion">
        <slot name="header"></slot>
        <div v-class="[classes.icon, !isClosed && classes.iconRotate]">
          <v-icon name="keyboard_arrow_down" />
        </div>
      </div>
      <div v-class="[classes.content, !isClosed && classes.isOpen]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
const uuidv1 = require('uuid/v1');
export default {
  name: 'expansion',

  data() {
    return {
      uuid: '',
      isClosed: true,
      contentHeight: 0,
      headerHeight: 0,
    }
  },

  created() {
    this.$bus.$on('close-expasion', (uuid) => {
      if (uuid !== this.uuid) this.isClosed = true
    })
  },

  mounted() {
    this.uuid = uuidv1()
    this.$el.setAttribute('data-uuid', this.uuid)
    this.$nextTick(() => {
      this.headerHeight = this.$el.querySelector(`.${this.classes.header._name}`).scrollHeight
      this.contentHeight = this.$el.querySelector(`.${this.classes.content._name}`).scrollHeight
    })
  },

  methods: {
    openExpansion() {
      this.isClosed = !this.isClosed
      this.$bus.$emit('close-expasion', this.uuid)
    }
  },

  computed: {
    styles() {
      return {
        root: {
          willChange: 'padding',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          transition: 'all .245s cubic-bezier(.25,.8,.25,1)',
        },
        insetRoot: {
          width: this.isClosed ? '100%' : 'calc(100% - 32px)',
          padding: this.isClosed ? 0 : 16,
        },
        expansion: {
          borderRadius: this.isClosed && this.inset && this.borderRadius ? 0 : this.borderRadius,
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        },
        header: {
          display: 'flex',
          position: 'relative',
        },
        icon: {
          position: 'absolute',
          right: 16,
          top: (this.headerHeight / 2) - 12,
          transition: 'transform .245s ease',
          transform: 'rotate(0deg)',
          transformOrigin: 'center 40%',
        },
        iconRotate: {
          transform: 'rotate(180deg)'
        },
        content: {
          height: 0,
          width: '100%',
          transform: 'scale(1, 0)',
          transition: 'all .145s cubic-bezier(.25,.8,.25,1)',
          transformOrigin: 'top center',
        },
        isOpen: {
          height: this.contentHeight,
          transform: 'scale(1, 1)',
        }
      }
    }
  },

  props: {
    inset: Boolean,
    borderRadius: {
      type: Number,
      default: () => 0,
    }
  }
}
</script>

