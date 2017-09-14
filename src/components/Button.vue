<template>
  <button :tabindex="tabindex" @mousedown="onMouseDown" :disabled="disabled" v-touch-ripple @click="onClick" v-class="buttonClass" :type="submit ? 'submit' : 'button'">
    <div v-class="loadingClass">
      <spinner :loading="loading" :size="size" :color="loadingIconColor()"></spinner>
    </div>
    <div v-class="[classes.content, loading && classes.hide]">
      <icon v-if="icon" :size="size" :name="icon" />
      <span v-if="label || $slots.default" v-class="classes.label">
        <slot>{{ label }}</slot>
      </span>
    </div>
  </button>
</template>

<script>
import { tint, shade, transparentize } from 'polished'
import Spinner from './Spinner.vue'
import Types from 'vue-types'
import Icon from './Icon.vue'

const buttonSize = {
  small: {
    height: 32,
    fontSize: 8,
    letterSpacing: 1,
    fontWeight: 700,
  },

  medium: {
    height: 48,
    fontSize: 10,
    letterSpacing: .75,
    fontWeight: 700,
  },

  large: {
    height: 64,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: .5,
  },
}

export default {
  name: 'btn',

  components: {
    Icon,
    Spinner,
  },

  computed: {
    loadingClass() {
      return [
        this.classes.loadingContainer,
        !this.loading && this.classes.hide
      ]
    },

    buttonClass() {
      return [
        this.classes.root,
        this.theme === 'primary' && this.classes.primary,
        this.theme === 'outlined' && this.classes.outlined,
        this.theme === 'clear' && this.classes.clear,
        this.rounded && this.classes.rounded,
        this.block && this.classes.block,
      ]
    },

    styles() {
      return {
        root: {
          pointerEvents: this.loading ? 'none' : 'auto',
          padding: 0,
          display: 'inline-flex',
          justifyContent: 'center',
          outline: 'none',
          alignItems: 'center',
          flex: '0 1 auto',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          userSelect: 'none',
          borderWidth: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
          textTransform: 'uppercase',
          minWidth: this.label ? buttonSize[this.size].height * 2.5 : buttonSize[this.size].height,
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          willChange: 'background',
          transition: 'all .145s linear',
          ...buttonSize[this.size],
          ':disabled': {
            backgroundColor: (this.light) ? this.$color.light(.15) : this.$color.dark(.05),
            color: (this.light) ? this.$color.light(.2) : this.$color.dark(.2),
            boxShadow: 'none',
            pointerEvents: 'none',
          }
        },

        label: {
          paddingLeft: this.icon ? 8 : 0
        },

        hide: {
          pointerEvents: 'none',
          opacity: 0,
          transform: 'scale(0)',
        },

        content: {
          transform: 'scale(1)',
          opacity: 1,
          transition: 'opacity .145s ease, transform .145s ease',
          flex: '1 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          whiteSpace: 'nowrap',
          paddingLeft: this.label ? 16 : 0,
          paddingRight: this.label ? 16 : 0,
        },

        primary: {
          backgroundColor: (this.dark) ? '#000' : (this.light) ? '#fff' : this.$color.primary,
          color: (this.light) ? '#000' : '#fff',
          ':hover': {
            backgroundColor: (this.dark) ? tint(.8, '#000') : (this.light) ? shade(.8, '#fff') : this.$color.primaryTint,
          },
        },

        rounded: {
          borderRadius: 9999,
        },

        block: {
          display: 'flex',
          width: '100%',
        },

        outlined: {
          boxShadow: `inset 0 0 0 2px ${(this.dark) ? '#000' : (this.light) ? '#fff' : this.$color.primary}`,
          color: (this.dark) ? '#000' : (this.light) ? '#fff' : this.$color.primary,
          ':hover': {
            backgroundColor: (this.dark) ? '#000' : (this.light) ? '#fff' : this.$color.primaryTint,
            boxShadow: 'none',
            color: (this.dark) ? '#fff' : (this.light) ? '#000' : '#fff',
          }
        },

        clear: {
          color: (this.dark) ? '#000' : (this.light) ? '#fff' : this.$color.primary,
          ':hover': {
            backgroundColor: (this.dark) ? 'rgba(0,0,0,.05)' : (this.light) ? 'rgba(255,255,255,.15)' : transparentize(.95, this.$color.primary)
          }
        },

        loadingContainer: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 1,
          transition: 'opacity .145s ease, transform .145s ease',
          transform: 'scale(1)',
        }
      }
    },
  },

  methods: {
    onMouseDown(e) {
      e.preventDefault()
    },

    onClick(e) {
      this.$emit('click', e)
    },

    loadingIconColor() {
      if (this.dark && this.theme === 'primary') return '#fff'
      if (this.light && this.theme === 'primary') return '#000'
      if (this.theme === 'primary' || this.light) return '#fff'
      if (this.dark) return '#000'
      if (this.theme === 'outlined' || this.theme === 'clear') return this.$color.primary
    }
  },

  props: {
    tabindex: {
      type: Number,
      default: () => 0,
    },
    label: String,
    disabled: Boolean,
    icon: String,
    submit: Boolean,
    rounded: Boolean,
    block: Boolean,
    dark: Boolean,
    light: Boolean,
    size: Types.oneOf(['small', 'medium', 'large']).def('medium'),
    theme: Types.oneOf(['primary', 'outlined', 'clear']).def('primary'),
    loading: Boolean,
  }
}
</script>
