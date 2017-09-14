<template>
  <p v-if="type === 'paragraph'" v-class="textClass">
    <slot></slot>
  </p>
  <span v-else v-class="headerClass">
    <slot></slot>
  </span>
</template>

<script>
import Type from 'vue-types'
export default {
  name: 'text',

  computed: {
    headerClass() {
      return [
        (this.type !== 'paragraph' && this.type !== 'text') && this.classes.header,
        this.classes[this.type],
        this.weight === 'light' && this.classes.light,
        this.weight === 'thin' && this.classes.thin,
        this.weight === 'black' && this.classes.black,
      ]
    },
    textClass() {
      return [
        this.classes.text,
        this.type === 'paragraph' && this.classes.paragraph,
        this.type === 'label' && this.classes.label,
        this.weight === 'light' && this.classes.light,
        this.weight === 'thin' && this.classes.thin,
        this.weight === 'black' && this.classes.black,
      ]
    },
    styles() {
      return {
        text: {
          letterSpacing: 0,
          lineHeight: '24px',
          marginLeft: this.offset,
          padding: 0,
          fontSize: '1rem',
          color: this.color,
        },
        paragraph: {
          margin: '0 0 1rem',
        },
        header: {
          display: 'block',
          lineHeight: '100%',
          color: this.color,
        },
        h1: {
          fontSize: '4.2rem',
          letterSpacing: '-.04em',
          margin: '2.1rem 0 1.68rem',
          fontWeight: 300,
        },
        h2: {
          fontSize: '3.56rem',
          letterSpacing: '-.02em',
          margin: '1.78rem 0 1.424rem',
          fontWeight: '400',
        },
        h3: {
          fontSize: '2.92rem',
          margin: '1.46rem 0 1.168rem',
          fontWeight: '400',
        },
        h4: {
          fontSize: '2.28rem',
          margin: '1.14rem 0 .912rem',
          fontWeight: '400',
        },
        h5: {
          fontSize: '1.64rem',
          margin: '.82rem 0 .656rem',
          fontWeight: '400',
        },
        h6: {
          letterSpacing: '.02rem',
          fontSize: '1rem',
          margin: '.5rem 0 .4rem',
          fontWeight: '600',
        },
        light: {
          fontWeight: 300,
        },
        thin: {
          fontWeight: 100,
        },
        black: {
          fontWeight: 900,
        },
        label: {
          fontSize: '.875rem',
          fontWeight: 400,
        },
        uppercase: {
          textTransform: 'uppercase',
        }
      }
    },
  },

  props: {
    offset: Type.number.def(0),
    color: Type.string.def('inherit'),
    weight: Type.oneOf(['thin', 'light', 'black']),
    type: Type.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph', 'text', 'label']).def('text'),
  }
}
</script>

