import { storiesOf } from '@storybook/vue'
import Input from '../components/Input.vue'

storiesOf('Input', module).add('Input', () => ({
  components: { 'v-input': Input },
  data() {
    return {
      input: 'test',
      date: '2017-08-22',
      selected: 1,
      items: [
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
          value: 2,
        },
        {
          label: 'Option 3',
          value: 3,
        },
        {
          label: 'Option 4',
          value: 4,
        },
        {
          label: 'Option 5',
          value: 5,
        },
        {
          label: 'Option 6',
          value: 6,
        },
        {
          label: 'Option 7',
          value: 7,
        },
      ],
    }
  },
  template: `<div style="padding: 16px">
  <p>
  <v-input icon="lock" type="password" required counter="5" v-model="input" label="Name" visibility />
</p>
  <p>
  <v-input icon="date_range" label="Date" v-model="date" type="date" />
</p>
            <p>
              <v-input icon="bookmark" disabled counter="5" placeholder="Test" label="Name" clear />
            </p>
            <p>
              <v-input required counter="5" v-model="input" label="Name" clear />
            </p>
            <p>
            <v-input label="Select" v-model="selected" type="select" display="label" select="value" :options="items" />
          </p>
            <p>
              <v-input label="Name" />
            </p>
            <p>
            <v-input no-line label="Name" v-model="input" />
          </p>

          <p>
          <v-input label="Date" v-model="date" type="date" />
        </p>
        <p>
        <v-input label="Select" v-model="selected" type="select" display="label" select="value" :options="items" />
      </p>
            </div>`,
}))
