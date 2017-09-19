<template>
  <i v-class="classes.root" @click="$emit('click', $event)">
    {{ name }}
  </i>
</template>

<script>
const iconSize = {
  small: {
    fontSize: 12,
    width: 12,
    height: 12,
  },
  medium: {
    fontSize: 18,
    width: 18,
    height: 18,
  },
  large: {
    fontSize: 24,
    width: 24,
    height: 24,
  },
}

export default {
  name: 'icon',

  computed: {
    styles() {
      return {
        root: {
          userSelect: 'none',
          fontFamily: 'Material Icons',
          fontWeight: 'normal',
          fontStyle: 'normal',
          ...iconSize[this.size],
          display: 'inline-block',
          lineHeight: '1',
          textTransform: 'none',
          letterSpacing: 'normal',
          wordWrap: 'normal',
          whiteSpace: 'nowrap',
          direction: 'ltr',
          '-webkit-font-smoothing': 'antialiased',
          textRendering: 'optimizeLegibility',
          '-moz-osx-font-smoothing': 'grayscale',
          fontFeatureSettings: "'liga'",
          color: this.color,
          opacity: this.opacity,
        },
      }
    }
  },

  props: {
    color: {
      type: String,
      default: () => 'inherit'
    },
    size: {
      type: String,
      default: () => 'medium'
    },
    name: String,
    opacity: {
      type: [Number, String],
      default: () => 1,
    }
  }
}
</script>

