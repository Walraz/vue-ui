import { storiesOf } from '@storybook/vue'
import Container from '../components/Container.vue'
import Transition from '../components/Transition.vue'
import Button from '../components/Button.vue'
import Icon from '../components/Icon.vue'
import Input from '../components/Input.vue'
import Spinner from '../components/Spinner.vue'
import Datepicker from '../components/Datepicker.vue'
import moment from 'moment'
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import Checkbox from '../components/Checkbox.vue'
import Text from '../components/Text.vue'

storiesOf('Container', module).add('Containers', () => ({
  mixins: [validationMixin],
  components: {
    'v-datepicker': Datepicker,
    'v-spinner': Spinner,
    'v-container': Container,
    'v-button': Button,
    'v-icon': Icon,
    'v-transition': Transition,
    'v-input': Input,
    Checkbox,
    'v-text': Text,
  },
  validations: {
    username: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(5),
    },
    date: {
      required,
    },
  },
  data() {
    return {
      showLogin: true,
      text: '2017-08-07',
      date: '',
      text2: '',
      username: '',
      loading: false,
      show: false,
      selected: null,
      check: false,
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
  methods: {
    parseDate(date) {
      return moment(new Date(date)).isAfter(moment('2017-08-11'))
    },
    click() {
      this.$v.$touch()
      if (this.$v.username.$invalid) return
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.showLogin = false
        setTimeout(() => {
          this.showLogin = true
          this.username = ''
          this.$v.username.$reset()
        }, 2000)
        this.show = !this.show
      }, 750)
    },
  },
  template: `<div style="padding: 16px">
  <v-transition name="fadeInRight" appear>
              <v-container :depth="1" :margin="[null ,null,8,null]" background="white" :border-radius="6" shadow="small" full align="center" justify="space-between">
                <v-container full :padding="[null, 16]">
                  <v-input @enter="click" icon="search" clear focused no-line v-model="text2" placeholder="Sök..." />
                </v-container>
                <v-container :border-radius="6" :min-width="64" :width="64" overflow="hidden">
                <v-button @click="click" :loading="loading" icon="search" theme="clear" size="large" />
               </v-container>
              </v-container>
              
              </v-transition>

              <v-container wrap full :depth="1">

              <v-transition name="fadeInLeft" appear>
                <v-container  :margin="[8, 16, null, null]" shadow="medium">
                  <v-datepicker  v-model="text" :disable-fn="parseDate" />
                </v-container>
              </v-transition>

              

            <v-transition name="fadeInBottom" appear>
              <v-container :depth="2" :border-radius="6" shadow="small" :margin="[8, 8, null, null]" background="white" column>
              <v-container :depth="2" full :padding="[16, 16, 32, 16]" column>
                <v-text type="h5"><strong>Sign in</strong></v-text>
                <v-container :depth="2" :width="320" :padding="[8, null]" column>
                  <v-input icon="date_range" type="date" v-model="date" label="Datum" />
                </v-container>
                <v-container :width="320" :padding="[8, null]" column>
                  <v-input v-model="text2" counter="10" label="Password" />
                </v-container>
                <v-container :width="320" :padding="[null, null]" column>
                <checkbox v-model="check" label="Remember me" />
               </v-container>
              </v-container>
              <v-container shadow="small" full :depth="1">
              <v-button @click="click" size="large" :loading="loading" full label="Sign in" />
              </v-container>
              </v-container>
            </v-transition>

            <v-transition name="fadeInTop" appear>
            <v-container :background="$color.primary" :border-radius="9999" shadow="small" justify="center" align="center" :width="112" :height="112" :margin="[8, 8, null, null]">
            <v-spinner size="xlarge"  color="white" :loading="true" />
          </v-container>
          </v-transition>

              <v-transition name="fadeInTop" group>
                <v-container v-if="show" full justify="flex-end" v-for="(n, i) in 4" :key="i" :data-index="i">
                  <v-container :border-radius="2" align="center" :margin="[8, 8, null, null]" :padding="[16]" :border="[null,null,null,4]" :border-color="$color.successDark" :background="$color.success">
                    <v-container :padding="[null, 16, null, null]">
                      <v-icon size="large" :color="$color.successDarker" name="check_circle"></v-icon>
                    </v-container>
                    <span :style="{ color: '#fff', fontSize: '14px' }">Success!</span>
                  </v-container>
                </v-container>
              </v-transition>

              <v-transition name="scaleIn" group>
              <v-container v-if="show" full justify="flex-end" v-for="(n, i) in 4" :key="i" :data-index="i">
                <v-container :border-radius="2" align="center" :margin="[8, 8, null, null]" :padding="[16]" :border="[null,null,null,4]" :border-color="$color.infoDark" :background="$color.info">
                  <v-container :padding="[null, 16, null, null]">
                    <v-icon size="large" :color="$color.infoDarker" name="info"></v-icon>
                  </v-container>
                  <span :style="{ color: '#fff', fontSize: '14px' }">Information!</span>
                </v-container>
              </v-container>
            </v-transition>

            <v-transition name="fadeInLeft" group>
            <v-container v-if="show" full justify="flex-end" v-for="(n, i) in 4" :key="i" :data-index="i">
              <v-container :border-radius="2" align="center" :margin="[8, 8, null, null]" :padding="[16]" :border="[null,null,null,4]" :border-color="$color.warningDark" :background="$color.warning">
                <v-container :padding="[null, 16, null, null]">
                  <v-icon size="large" :color="$color.warningDarker" name="priority_high"></v-icon>
                </v-container>
                <span :style="{ color: '#fff', fontSize: '14px' }">Warning!</span>
              </v-container>
            </v-container>
          </v-transition>

          <v-transition name="fadeInRight" group>
          <v-container v-if="show" full justify="flex-end" v-for="(n, i) in 4" :key="i" :data-index="i">
            <v-container :border-radius="2" align="center" :margin="[8, 8, null, null]" :padding="[16]" :border="[null,null,null,4]" :border-color="$color.alertDark" :background="$color.alert">
              <v-container :padding="[null, 16, null, null]">
                <v-icon size="large" :color="$color.alertDarker" name="warning"></v-icon>
              </v-container>
              <span :style="{ color: '#fff', fontSize: '14px' }">Alert!</span>
            </v-container>
          </v-container>
        </v-transition>

        <v-transition name="fadeInBottom" appear>
        <v-container :border-radius="8" shadow="medium" :depth="1" v-if="showLogin" :width="320" :padding="[16]" :margin="[8, 8, null, null]" background="#fff" column>
        <h2>Sign in</h2>
        <v-container full :padding="[8, null]" column>
          <v-input required :validation="$v.username" icon="account_box" clear v-model="username" :maxlength="5" label="Username" />
        </v-container>
        <v-container full :padding="[8, null]" column>
          <v-input required icon="lock" type="password" visibility v-model="text2" counter="10" label="Password" />
        </v-container>
        <v-container full :padding="[16, null, null, null]" column>
          <v-button rounded @click="click" :loading="loading" full label="Sign in" />
        </v-container>
      </v-container>
      </v-transition>
            </v-container>
            </div>`,
}))
