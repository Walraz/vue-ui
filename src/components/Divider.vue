<template>
  <div v-class="classes.divider">
  </div>
</template>

<script>
export default {
  name: 'divider',

  computed: {
    styles() {
      return {
        divider: {
          width: this.vertical ? this.space : `calc(100% - ${this.inset}px)`,
          height: this.vertical ? `calc(100% - ${this.inset}px)` : this.space,
          backgroundColor: this.space !== 1 ? 'transparent' : this.dark ? this.$color.light(.1) : this.$color.dark(.07),
        }
      }
    }
  },

  props: {
    dark: Boolean,
    vertical: Boolean,
    inset: {
      type: Number,
      default: () => 0,
    },
    space: {
      type: Number,
      default: () => 1,
    },
  }
}
</script>
