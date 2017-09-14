import { storiesOf } from '@storybook/vue'
import Radio from '../components/Radio.vue'

storiesOf('Radio', module).add('Radio', () => ({
  components: { 'v-radio': Radio },
  data() {
    return {
      check: 'one',
      checkArray: [
        {
          label: 'one',
        },
        {
          label: 'two',
        },
        {
          label: 'three',
        },
      ],
    }
  },
  template: `<div style="padding: 16px">
              <p v-for="c in checkArray">
              <v-radio :select="c.label" label="One" v-model="check" />
              </p>
              <p>
              <v-radio disabled label="Label" v-model="check" />
              </p>
            </div>`,
}))
