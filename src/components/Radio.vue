<template>
  <div v-class="classes.root" @click="toggleCheck">
    <div v-class="classes.radioContainer">
      <div v-class="classes.rippleContainer">
        <div v-touch-ripple v-class="classes.ripple"></div>
      </div>
      <div v-class="classes.radio">
        <div v-class="checkClass">
        </div>
      </div>
    </div>
    <label v-class="classes.label" v-if="label">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'radio',

  methods: {
    toggleCheck() {
      if (this.disabled) return
      this.inputValue = !this.inputValue
    }
  },

  computed: {
    inputValue: {
      get() {
        return this.value === this.select
      },
      set(value) {
        this.$emit('input', this.select)
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
          display: this.block ? 'flex' : 'inline-flex',
          alignItems: 'center',
          position: 'relative',
          width: this.block ? '100%' : 'auto',
        },

        radioContainer: {
          height: 16,
          width: 16,

          borderRadius: '50%',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: this.disabled ? 'transparent' : this.$color.primaryTint,
          cursor: 'pointer',
          position: 'relative',
          userSelect: 'none',
        },

        radio: {
          height: 16,
          width: 16,
          minHeight: 16,
          minWidth: 16,
          borderWidth: 2,
          borderColor: this.disabled ? this.$color.dark(.2) : this.inputValue ? this.$color.primary : this.$color.dark(.4),
          borderStyle: 'solid',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },

        check: {
          height: 12,
          width: 12,
          borderRadius: '50%',
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
          color: this.disabled ? this.$color.dark(.4) : '#000',
          fontSize: 14,
          fontWeight: 400,
          paddingLeft: 16,
          userSelect: 'none',
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
    block: Boolean,
    select: String,
    label: String,
    required: Boolean,
    disabled: Boolean,
    value: {
      type: null,
      default: () => false,
    },
  }
}
</script>
