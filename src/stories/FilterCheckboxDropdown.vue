<template>
  <v-dropdown @visible="isVisible" :visible="visible" position="topLeft">
    <v-btn rounded slot="dropdown" icon="filter_list" />
    <v-container :padding="[8, null]" background="#fff" column :width="180">
      <v-input list clear icon="filter_list" placeholder="Filter..." v-model="filter" />
      <v-container full :padding="[null, 16]" v-if="!list.length">
        <v-text type="h6">
          <small>No results...</small>
        </v-text>
      </v-container>
      <v-list :options="list" :display="by">
        <template scope="prop">
          <v-container @click="onClick(prop.item)" full :padding="[null, 16]" :height="40" align="center">
            <v-checkbox full v-if="prop.item.hasOwnProperty(by)" :disabled="prop.item.disabled" :label="prop.item[by]" v-model="prop.item.selected" />
          </v-container>
        </template>
      </v-list>
    </v-container>
  </v-dropdown>
</template>

<script>
import List from '../components/List.vue'
import Dropwdown from '../components/Dropdown.vue'
import Button from '../components/Button.vue'
import Icon from '../components/Icon.vue'
import Container from '../components/Container.vue'
import Input from '../components/Input.vue'
import Checkbox from '../components/Checkbox.vue'
import Text from '../components/Text.vue'
export default {
  name: 'filter-dropdown',

  data() {
    return { filter: '', visible: false, parsedList: [] }
  },

  created() {
    this.$bus.$on('clear-filter', () => {
      this.createParsedList
      this.$emit('selected', this.options)
    })
  },

  beforeMount() {
    if (!this.parsedList.length) {
      this.createParsedList()
    }
  },

  computed: {
    list() {
      if (!this.filter.length) return this.parsedList
      return this.parsedList.filter(item => item[this.by].indexOf(this.filter) >= 0)
    }
  },

  methods: {
    createParsedList() {
      this.parsedList = [...new Set(this.options.filter(item => item.hasOwnProperty(this.by)).map(item => item[this.by]))].map(item => {
        return { [this.by]: item, selected: false }
      })
    },
    isVisible(value) {
      this.visible = value
    },
    onClick(item) {
      if (item.disabled) return
      const selectedItems = this.parsedList.filter(item => item.selected)
      if (!selectedItems.length) return this.$emit('selected', this.options)
      this.$emit('selected',
        this.options.filter(item =>
          selectedItems.map(item => item[this.by]).includes(item[this.by]))
      )
    }
  },

  components: {
    'v-list': List,
    'v-dropdown': Dropwdown,
    'v-btn': Button,
    Icon,
    'v-text': Text,
    'v-input': Input,
    'v-container': Container,
    'v-checkbox': Checkbox,
  },

  props: {
    by: String,
    options: Array
  }
}
</script>
