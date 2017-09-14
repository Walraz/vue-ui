import Vue from 'vue'
import { configure } from '@storybook/vue'
import Core from '../src/core'

Vue.use(Core, {
  theme: {},
})

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
