import { storiesOf } from '@storybook/vue'
import List from '../components/List.vue'

storiesOf('List', module).add('List', () => ({
  components: { 'v-list': List },
  data() {
    return {
      items: [
        {
          label: 'Title',
          icon: 'bookmark',
        },
        {
          label: 'Title 2',
          icon: 'build',
          iconColor: this.$color.primary,
        },
        {
          label: 'Title 3',
        },
      ],
    }
  },
  template: `<div style="padding: 16px">
              <v-list :options="items" />
            </div>`,
}))
