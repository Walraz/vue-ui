<template>
  <div v-class="classes.root">
    <label v-if="!placeholder" v-class="labelClass">{{ label + (required ? '*' : '') }}</label>
    <div v-if="!noLine && !disabled" v-class="lineClass"></div>
    <div v-if="maxlength || counter && !disabled && !list" v-class="maxlengthClass">{{ inputValue.length }} / {{ maxlength ? maxlength : counter }}</div>
    <div v-if="type === 'select'" v-class="[classes.dropdownIcon, isFocused && classes.dropdownIconSpin]">
      <icon name="keyboard_arrow_down" :color="$color.dark(.6)" />
    </div>
    <div @mousedown="onMousedown" tabindex="-1" @click.prevent.stop="clearInput" v-if="clear && !disabled && inputValue" v-class="classes.clearIcon">
      <icon name="add_circle" :color="$color.dark(.6)" />
    </div>
    <div v-if="icon" v-class="classes.icon">
      <icon :name="icon" :color="iconColor" />
    </div>
    <div @mousedown="onMousedown" tabindex="-1" @click.prevent.stop="visibiltyToggle" v-if="visibility && !disabled && inputValue" v-class="classes.visibilityIcon">
      <v-transition name="scaleIn" :duration="145" :delay="0">
        <icon v-if="visibilityPassword" name="visibility_off" :color="$color.dark(.6)" :key="visibilityPassword" />
        <icon v-else name="visibility" :color="$color.dark(.6)" />
      </v-transition>
    </div>
    <div v-if="isError && errorMessage.length && !list" v-class="classes.errorMessage">
      <icon name="warning" size="small" :color="$color.alert" />
      <span style="padding-left: 8px">{{ errorMessage }}</span>
    </div>
    <input @keyup.enter="$emit('enter', inputValue)" :required="required" :readonly="readonly || (type === 'date' || type === 'select')" :disabled="disabled" :maxlength="maxlength" v-model="inputValue" :placeholder="placeholder" @focus="onFocus" @blur="onBlur" v-class="inputClass" type="text">
    <div v-class="classes.dropdown">
      <dropdown position="insideLeft" :visible="showDropdown" v-if="type === 'date'">
        <datepicker @selected="onDatepickerSelected" v-model="inputValue" :disable-fn="disableFn" />
      </dropdown>
      <dropdown :max-height="40 * 5 + 16" position="insideLeft" full :visible="showDropdown" v-if="type === 'select'">
        <list :options="options" :padding="[8, null]">
          <template scope="prop">
            <div v-class="[classes.dropdownItem, isSelected(prop.item) && classes.dropdownItemSelected]" @click="onDropdownSelected(prop.item)">{{ display ? prop.item[display] : prop.item }}</div>
          </template>
        </list>
      </dropdown>
    </div>
  </div>
</template>

<script>
import Datepicker from './Datepicker.vue'
import Dropdown from './Dropdown.vue'
import List from './List.vue'
import Icon from './Icon.vue'
import Transition from './Transition.vue'

export default {
  name: 'input',

  components: {
    Datepicker,
    Dropdown,
    List,
    Icon,
    'v-transition': Transition,
  },

  data() {
    return {
      visibilityPassword: false,
      showDropdown: false,
      isFocused: false,
      selectedValue: null,
      errorMessage: '',
    }
  },

  mounted() {
    if (this.type === 'password') {
      this.$el.querySelector('input').type = 'password'
    }
    if (this.focused) this.$el.querySelector('input').focus()
  },

  methods: {
    isSelected(item) {
      if (!this.value) return false
      if (this.select) {
        return item[this.select] === this.value
      }
      return item === this.value
    },
    onMousedown(e) {
      e.preventDefault()
    },
    visibiltyToggle() {
      const input = this.$el.querySelector('input')
      this.visibilityPassword = !this.visibilityPassword
      if (this.visibilityPassword) {
        input.type = 'text'
      } else {
        input.type = 'password'
      }
      input.focus()
    },
    clearInput(e) {
      this.inputValue = ''
      this.$el.querySelector('input').focus()
    },
    onDatepickerSelected() {
      this.$el.querySelector('input').blur()
      this.isFocused = false
    },
    onDropdownSelected(item) {
      this.selectedValue = this.select ? item[this.select] : item
      this.inputValue = this.select ? item[this.select] : item
      this.$el.querySelector('input').blur()
      this.isFocused = false
    },
    onFocus() {
      this.isFocused = true
      if (this.type === 'date' || this.type === 'select') {
        setTimeout(() => {
          this.showDropdown = true
        }, 145)
      }
    },
    onBlur() {
      this.showDropdown = false
      this.isFocused = false
      if (this.validation) {
        if (this.inputValue.length) this.validation.$touch();
        else this.validation.$reset();
      }
    },
  },

  computed: {
    iconColor() {
      if (this.disabled) return this.dark ? this.$color.light(.2) : this.$color.dark(.2)
      if (this.isError) return this.$color.alert
      if (this.isFocused) return this.$color.primary
      return this.dark ? this.$color.light(.5) : this.$color.dark(.6)
    },
    isError() {
      if (this.validation) {
        if (this.validation.hasOwnProperty('minLength') && !this.validation.minLength) this.errorMessage = `Fältet måste minst innehålla ${this.validation.$params.minLength.min} tecken`
        else if (this.validation.hasOwnProperty('maxLength') && !this.validation.maxLength) this.errorMessage = `Fältet får max innehålla ${this.validation.$params.maxLength.max} tecken`
        else if (this.validation.hasOwnProperty('required') && !this.validation.required) this.errorMessage = `Fältet är obligatoriskt`
        else this.errorMessage = '';
        return (this.validation.$dirty && this.validation.$error && !this.disabled) || this.inputValue.length > (this.counter || this.maxlength)
      } else {
        return this.inputValue.length > (this.counter || this.maxlength);
      }
    },
    inputValue: {
      get() {
        if (this.options) {
          this.selectedValue = this.value
          const isValue = this.options.find(item => item.value === this.value)
          return (isValue) ? isValue.label : this.value
        }
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    inputClass() {
      return [
        this.classes.input,
        this.disabled && this.classes.disabledInput,
        (this.type === 'select' || this.type === 'date') && this.classes.selectInput
      ]
    },
    labelClass() {
      return [
        this.classes.label,
        (this.isFocused || this.inputValue.length) && this.classes.labelFloat,
        this.isFocused && this.classes.labelActive
      ]
    },
    lineClass() {
      return [
        this.classes.line,
        (this.isFocused || this.isError) && this.classes.lineFloat,
      ]
    },
    maxlengthClass() {
      return [
        this.classes.maxlength,
        (this.inputValue.length > this.maxlength) || (this.inputValue.length > this.counter) && this.classes.maxlengthError,
      ]
    },
    styles() {
      return {
        root: {
          height: 56,
          width: '100%',
          display: 'inline-flex',
          alignItems: 'flex-end',
          position: 'relative',
        },
        label: {
          fontSize: 16,
          color: this.dark ? this.disabled ? this.$color.light(.2) : this.$color.light(.6) : this.disabled ? this.$color.dark(.2) : this.$color.dark(.6),
          transition: 'transform .32s cubic-bezier(.25,.8,.25,1)',
          position: 'absolute',
          transform: `translate3d(0, 0, 0) scale(1)`,
          top: this.list ? 12 : this.noLine ? 20 : 16,
          left: this.list ? this.icon ? 48 : 32 : this.icon ? 24 : 0,
          userSelect: 'none',
          pointerEvents: 'none',
          transformOrigin: 'left top',
        },
        labelFloat: {
          transform: `translate3d(0, ${this.noLine ? '-14px' : '-14px'}, 0) scale(.7)`,
          color: this.dark ? this.disabled ? this.$color.light(.2) : this.isError ? this.$color.alert : this.$color.light(.6) : this.disabled ? this.$color.dark(.2) : this.isError ? this.$color.alert : this.$color.dark(.6),
        },
        labelActive: {
          color: this.isError ? this.$color.alert : this.$color.primary
        },
        errorMessage: {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          bottom: 0,
          lineHeight: '12px',
          left: 0,
          fontSize: 12,
          color: this.$color.alert,
        },
        maxlength: {
          position: 'absolute',
          bottom: 0,
          lineHeight: '12px',
          right: 0,
          fontSize: 12,
          color: this.dark ? this.$color.light(.6) : this.$color.dark(.5),
          transition: 'color .32s cubic-bezier(.25,.8,.25,1)',
        },
        maxlengthError: {
          color: this.$color.alert,
        },
        line: {
          width: '100%',
          transform: 'scale(0,1)',
          transition: 'all .32s cubic-bezier(.25,.8,.25,1)',
          height: 2,
          backgroundColor: this.isError ? this.$color.alert : this.$color.primary,
          position: 'absolute',
          bottom: this.list ? 8 : 16,
          left: 0,
          transformOrigin: 'left top'
        },
        lineFloat: {
          transform: 'scale(1,1)',
        },
        input: {
          marginBottom: this.list ? 8 : 16,
          paddingBottom: this.list ? 13 : 0,
          backgroundColor: 'transparent',
          height: this.noLine ? 20 : 24,
          width: '100%',
          fontSize: 16,
          color: this.dark ? '#fff' : '#000',
          caretColor: this.$color.primary,
          outline: 'none',
          paddingLeft: this.list ? this.icon ? 48 : 24 : this.icon ? 24 : 0,
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          borderBottom: this.noLine ? 0 : `1px solid ${this.dark ? this.$color.light(.6) : this.$color.dark(.2)}`,
          transition: 'border .145s cubic-bezier(.25, .8, .25, 1)',
        },
        selectInput: {
          cursor: 'pointer',
        },
        dropdown: {
          position: 'absolute',
          top: this.type === 'date' ? this.noLine ? 32 : 24 : this.noLine ? 48 : 40,
          left: 0,
          right: 0,
          height: 0,
          outline: 'none',
          zIndex: 3,
        },
        visibilityIcon: {
          position: 'absolute',
          right: this.list ? 8 : 0,
          zIndex: 2,
          top: this.noLine ? 20 : 18,
          userSelect: 'none',
          cursor: 'pointer',
        },
        icon: {
          position: 'absolute',
          left: this.list ? 16 : 0,
          zIndex: 2,
          top: this.list ? 12 : this.noLine ? 20 : 16,
          userSelect: 'none',
          pointerEvents: 'none',
        },
        clearIcon: {
          position: 'absolute',
          right: this.list ? 8 : 0,
          zIndex: 2,
          top: this.noLine ? 20 : 18,
          userSelect: 'none',
          cursor: 'pointer',
          transition: 'transform .32s ease',
          transform: 'rotate(45deg)',
          transformOrigin: 'center 33%',
        },
        dropdownIcon: {
          position: 'absolute',
          right: 4,
          pointerEvents: 'none',
          top: this.noLine ? 20 : 14,
          userSelect: 'none',
          cursor: 'pointer',
          transition: 'transform .32s ease',
          transform: 'rotate(0deg)',
          transformOrigin: 'center 33%',
        },
        dropdownIconSpin: {
          transform: 'rotate(180deg)',
        },
        dropdownItem: {
          height: 40,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: 8,
          paddingRight: 8,
          fontSize: 14,
          fontWeight: 400,
          color: '#000',
        },
        dropdownItemSelected: {
          color: this.$color.primary,
          backgroundColor: this.$color.primaryLight,
        },
        disabledInput: {
          userSelect: 'none',
          pointerEvents: 'none',
          color: this.dark ? this.$color.light(.2) : this.$color.dark(.2),
          borderBottom: this.noLine ? 0 : `1px dotted ${this.dark ? this.$color.light(.2) : this.$color.dark(.2)}`,
          '::-webkit-input-placeholder': {
            color: this.dark ? this.$color.light(.2) : this.$color.dark(.2),
          },
          ':-moz-placeholder': {
            color: this.dark ? this.$color.light(.2) : this.$color.dark(.2),
          },
          '::-moz-placeholder': {
            color: this.dark ? this.$color.light(.2) : this.$color.dark(.2),
          },
          ':-ms-input-placeholder': {
            color: this.dark ? this.$color.light(.2) : this.$color.dark(.2),
          },
        }
      }
    }
  },

  props: {
    dark: Boolean,
    list: Boolean,
    display: String,
    select: String,
    validation: {
      type: Object,
      required: false,
    },
    focused: Boolean,
    icon: String,
    visibility: Boolean,
    clear: Boolean,
    readonly: Boolean,
    required: Boolean,
    options: Array,
    value: {
      type: [String, Number],
      default: () => '',
    },
    noLine: {
      type: Boolean,
      default: () => false,
    },
    disableFn: () => false,
    type: {
      type: String,
      default: () => 'text',
    },
    noDetails: Boolean,
    disabled: Boolean,
    maxlength: [Number, String],
    counter: [Number, String],
    placeholder: String,
    label: {
      type: String,
      default: () => '',
    }
  }
}
</script>