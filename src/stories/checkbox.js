import { storiesOf } from '@storybook/vue'
import Checkbox from '../components/Checkbox.vue'

storiesOf('Checkbox', module).add('Checkbox', () => ({
  components: { 'v-checkbox': Checkbox },
  methods: {
    checkStatus() {
      console.log(this.checkArray)
    },
  },
  data() {
    return {
      check: false,
      checkArray: [
        {
          label: 'item 1',
          on: false,
        },
        {
          label: 'item 2',
          on: false,
        },
        {
          label: 'item 3',
          on: false,
        },
      ],
    }
  },
  watch: {
    checkArray(v) {
      console.dir(v)
    },
  },
  template: `<div style="padding: 16px">
              <p>
              <v-checkbox full label="Label" v-model="check" />
              </p>
              <p>
              <v-checkbox disabled label="Label" v-model="check" />
              </p>
              <p v-for="c in checkArray">
              <v-checkbox @click="checkStatus"  :label="c.label" v-model="c.on" />
              </p>
            </div>`,
}))
