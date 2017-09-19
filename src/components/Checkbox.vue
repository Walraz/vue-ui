<template>
  <div v-class="classes.root" @click="toggleCheck">
    <div v-class="classes.checkboxContainer">
      <div v-class="classes.rippleContainer">
        <div v-touch-ripple v-class="classes.ripple"></div>
      </div>
      <div v-class="classes.checkbox">
        <div v-class="checkClass">
          <icon name="check" size="small" color="#fff" />
        </div>
      </div>
    </div>
    <label v-class="classes.label" v-if="label">
      {{ label }}
    </label>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  name: 'checkbox',

  components: {
    Icon,
  },

  methods: {
    toggleCheck() {
      if (this.disabled) return
      this.inputValue = !this.inputValue
    }
  },

  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
        this.$emit('click')
      }
    },

    checkClass() {
      return [
        this.classes.check,
        this.inputValue && this.classes.isChecked
      ]
    },

    styles() {
      return {
        root: {
          alignItems: 'center',
          position: 'relative',
          display: this.full ? 'flex' : 'inline-flex',
          width: this.full ? '100%' : 'auto',
        },

        checkboxContainer: {
          height: 16,
          width: 16,
          borderRadius: 9999,
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: this.disabled ? 'transparent' : this.$color.primaryTint,
          cursor: 'pointer',
          position: 'relative',
          userSelect: 'none',
        },

        checkbox: {
          height: 16,
          width: 16,
          borderWidth: 2,
          borderColor: this.dark ? this.disabled ? this.$color.light(.2) : this.inputValue ? this.$color.primary : this.$color.light(.6) : this.disabled ? this.$color.dark(.2) : this.inputValue ? this.$color.primary : this.$color.dark(.4),
          borderStyle: 'solid',
          borderRadius: 2,
        },

        check: {
          height: 16,
          width: 16,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.disabled ? this.$color.dark(.2) : this.$color.primary,
          transition: 'transform .32s cubic-bezier(.25,.8,.25,1)',
          transform: 'scale(0)',
          transformOrigin: 'center center',
        },

        isChecked: {
          transform: 'scale(1)',
        },

        label: {
          color: this.dark ? this.disabled ? this.$color.light(.2) : this.$color.light(.8) : this.disabled ? this.$color.dark(.4) : '#000',
          fontSize: 14,
          fontWeight: 400,
          userSelect: 'none',
          position: 'relative',
          paddingLeft: 16,
        },

        rippleContainer: {
          position: 'absolute',
          height: 40,
          minWidth: 40,
          minHeight: 40,
          width: 40,
          left: -12,
          top: -12,
          zIndex: 2,
          borderRadius: '50%',
          overflow: 'hidden',
        },

        ripple: {
          height: '100%',
          width: '100%',
        },
      }
    }
  },

  props: {
    dark: Boolean,
    full: Boolean,
    label: String,
    required: Boolean,
    disabled: Boolean,
    value: {
      type: Boolean,
      default: () => false,
    },
  }
}
</script>

