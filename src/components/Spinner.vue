<template>
  <svg v-class="classes.root" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle v-class="classes.path" fill="none" stroke-alignment="inner" stroke-linecap="round" cx="32" cy="32" r="20"></circle>
  </svg>
</template>

<script>
const circleRotator = {
  '100%': {
    transform: 'rotate(360deg)'
  }
}

const circleDash = {
  '0%': {
    strokeDasharray: '1, 200',
    strokeDashoffset: 0
  },
  '50%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-35px',
  },
  '100%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-124px',
  }
}

const strokeSize = {
  small: 1,
  medium: 2,
  large: 4,
}

const iconSize = {
  small: 16,
  medium: 32,
  large: 48,
  xlarge: 88,
}

export default {
  name: 'spinner',

  props: {
    size: {
      type: String,
      default: () => 'large',
    },
    strokeSize: {
      type: String,
      default: () => 'medium',
    },
    color: {
      type: String,
      default: () => '#000'
    },
    loading: Boolean,
  },

  computed: {
    styles() {
      return {
        root: {
          width: iconSize[this.size],
          height: iconSize[this.size],
          strokeWidth: strokeSize[this.strokeSize],
          willChange: 'transform',
          animationName: [circleRotator],
          animationDuration: '1.5s',
          transformOrigin: 'center center',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          animationPlayState: this.loading ? 'running' : 'paused',
        },

        path: {
          willChange: 'transform',
          strokeDasharray: '1, 200',
          strokeDashoffset: 0,
          transformOrigin: 'center center',
          animationName: [circleDash],
          stroke: this.color,
          animationDuration: '1.5s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
          animationPlayState: this.loading ? 'running' : 'paused',
        }
      }
    }
  }
}
</script>