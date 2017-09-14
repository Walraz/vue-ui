import { storiesOf } from '@storybook/vue'
import Datepicker from '../components/Datepicker.vue'

storiesOf('Datepicker', module).add('Datepicker', () => ({
  components: { 'v-datepicker': Datepicker },
  data() {
    return {
      date: '2017-08-22',
    }
  },
  watch: {
    date(v) {
      console.log(v)
    },
  },
  template: `<div style="padding: 16px">
              <p>
              <v-datepicker v-model="date" />
              </p>
              <p>
              <v-datepicker block v-model="date" />
              </p>
            </div>`,
}))
