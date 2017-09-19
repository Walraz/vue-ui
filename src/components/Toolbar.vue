<template>
  <v-container :depth="2" :max-height="toolbarSize[this.size].height" :min-height="toolbarSize[this.size].height" justify="space-between" :border="border ? [null, null, 1, null] : [null]" :shadow="shadow ? 'small' : 'none'" :background="$color.primary" full :height="toolbarSize[this.size].height">
    <v-container justify="flex-start" align="center" height="100%" :padding="[null, 24]">
      <slot name="right"></slot>
    </v-container>
    <v-container justify="flex-end" align="center" height="100%" :padding="[null, 16]">
      <slot name="left"></slot>
    </v-container>
  </v-container>
</template>

<script>
import Container from './Container.vue'
import Types from 'vue-types'

const toolbarSize = {
  small: {
    height: 32,
  },

  medium: {
    height: 48,
  },

  large: {
    height: 64,
  },
}

export default {
  name: 'toolbar',

  data() {
    return {
      toolbarSize,
    }
  },

  components: {
    'v-container': Container,
  },

  props: {
    shadow: Types.bool.def(false),
    border: Types.bool.def(false),
    size: Types.oneOf(['small', 'medium', 'large']).def('large'),
  }
}
</script>

