import { storiesOf } from '@storybook/vue'
import List from '../components/List.vue'
import Dropwdown from '../components/Dropdown.vue'
import Button from '../components/Button.vue'
import Icon from '../components/Icon.vue'
import Container from '../components/Container.vue'
import Input from '../components/Input.vue'
import Text from '../components/Text.vue'
import Checkbox from '../components/Checkbox.vue'
import Filter from './FilterCheckboxDropdown.vue'

storiesOf('Dropdown', module).add('Dropdown', () => ({
  components: {
    'v-list': List,
    'v-dropdown': Dropwdown,
    'v-btn': Button,
    Icon,
    'v-input': Input,
    'v-container': Container,
    'v-text': Text,
    'v-checkbox': Checkbox,
    'v-filter': Filter,
  },
  methods: {
    clearFilter() {
      this.$bus.$emit('clear-filter')
    },
    selectedIcon(value) {
      this.selIcon = value.icon
    },
    selectedItems(value) {
      this.sortedItems = value
    },
    test2() {
      console.log('test click')
    },
  },
  mounted() {
    this.sortedItems = [...this.items]
  },
  data() {
    return {
      sortedItems: [],
      selIcon: '',
      items: [
        {
          label: 'Title',
          icon: 'bookmark',
          selected: false,
          id: 1,
        },
        {
          label: 'Title',
          icon: 'bookmark',
          selected: false,
          id: 11,
        },
        {
          label: 'Title 2',
          icon: 'build',
          iconColor: this.$color.primary,
          selected: false,
          disabled: true,
          id: 2,
        },
        {
          label: 'Title 3',
          selected: false,
          id: 3,
        },
      ],
      filter: '',
    }
  },
  template: `<div style="padding: 32px; background: #f1f1f1; width: 200px; height: 500px; text-align: right;" data-boundry>
              <p>
              <v-dropdown auto-close position="topRight">
              <v-btn slot="dropdown" label="Dropdown" />
              <v-list :options="items">
                <template scope="prop">
                <div  @click="test2" style="width: 200px; height: 40px"> <icon v-if="prop.item.icon" :name="prop.item.icon" /> {{ prop.item.label }}</div>
                 
                </template>
              </v-list>
            </v-dropdown></p>
            <p>
            <v-filter @selected="selectedItems" :options="items" by="label" />
            <v-btn label="Clear filter" size="small" theme="outlined" @click="clearFilter" />
            </p>
             <p v-for="n in sortedItems">
             Label: {{ n.label }} {{ n.icon }} {{ n.selected }}
             </p> 
            <p>
            <v-dropdown position="topLeft">
            <v-btn slot="dropdown" label="Dropdown" />
              <v-list :options="items" />
            </v-dropdown></p>

            <p>
            <v-dropdown position="insideRight">
            <v-btn slot="dropdown" icon="more_horiz" theme="clear" rounded />
              <v-list :options="items" />
            </v-dropdown></p>
            </div>`,
}))
