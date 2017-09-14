<template>
  <div v-if="!form" @click="$emit('click', $event)" v-class="containerClass">
    <slot></slot>
  </div>
  <form v-else autocomplete="off" @submit.prevent="form" v-class="containerClass">
    <slot></slot>
  </form>
</template>

<script>
import Types from 'vue-types'
import { borderRadius, borderWidth, position, margin, padding } from 'polished'

export default {
  name: 'div',

  computed: {
    containerClass() {
      return [
        this.classes.root,
        this.shadow && this.classes.shadow,
        this.full && this.classes.block,
      ]
    },

    styles() {
      return {
        root: {
          color: this.color,
          overflow: this.overflow,
          width: this.width ? this.width : 'auto',
          height: this.height ? this.height : 'auto',
          minWidth: this.minWidth,
          minHeight: this.minHeight,
          maxWidth: this.maxWidth,
          maxHeight: this.maxHeight,
          backgroundColor: this.background,
          display: this.block ? 'inline-block' : 'inline-flex',
          flexWrap: this.wrap ? 'wrap' : 'nowrap',
          borderStyle: 'solid',
          borderWidth: 0,
          flexGrow: this.flexGrow,
          flexDirection: this.column ? 'column' : 'row',
          justifyContent: this.column ? this.align : this.justify,
          alignItems: this.column ? this.justify : this.align,
          borderColor: this.borderColor.length ? this.borderColor : this.$color.dark(.1),
          ...position(...this.position),
          ...padding(...this.padding),
          ...margin(...this.margin),
          ...borderWidth(...this.border),
          borderRadius: this.borderRadius,
          zIndex: this.depth,
        },

        block: {
          width: '100%',
          display: this.block ? 'block' : 'flex',
          flexGrow: 1,
        },
        shadow: {
          boxShadow: this.$shadow[this.shadow]
        }
      }
    }
  },

  props: {
    color: {
      type: String,
      default: () => '#000',
    },
    minHeight: Types.number.def(0),
    minWidth: Types.number.def(0),
    maxHeight: {
      type: [String, Number],
      default: () => '100%',
    },
    maxWidth: {
      type: [String, Number],
      default: () => '100%',
    },
    overflow: Types.string.def('visible'),
    height: [String, Number],
    width: [String, Number],
    wrap: Types.bool.def(false),
    flexGrow: Types.number.def(0),
    block: Boolean,
    background: Types.string.def('transparent'),
    position: Types.array.def(['relative', 0, 0]),
    padding: Types.array,
    margin: Types.array,
    shadow: Types.oneOf(['none', 'small', 'medium', 'large']),
    border: Types.array,
    borderRadius: Types.number,
    borderColor: Types.string,
    column: Boolean,
    align: Types.string.def('flex-start'),
    justify: Types.string.def('flex-start'),
    full: Boolean,
    depth: Types.number.def(0),
    form: Function,
  }
}
</script>

