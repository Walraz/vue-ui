import { storiesOf } from '@storybook/vue'
import Icon from '../components/Icon.vue'

storiesOf('Icon', module).add('Icons', () => ({
  components: { 'v-icon': Icon },
  template: `<div style="padding: 16px">
              <v-icon size="small" name="bookmark"></v-icon>
              <v-icon name="bookmark"></v-icon>
              <v-icon size="large" name="bookmark"></v-icon>
              <v-icon color="red" size="small" name="bookmark"></v-icon>
              <v-icon color="green" name="bookmark"></v-icon>
              <v-icon color="blue" size="large" name="bookmark"></v-icon>
              <v-icon opacity=".15" color="red" size="small" name="bookmark"></v-icon>
              <v-icon opacity=".30" color="green" name="bookmark"></v-icon>
              <v-icon opacity=".60" color="blue" size="large" name="bookmark"></v-icon>
            </div>`,
}))
