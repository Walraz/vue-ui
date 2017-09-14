import { storiesOf } from '@storybook/vue'
import Text from '../components/Text.vue'

storiesOf('Text', module).add('Text', () => ({
  components: { 'v-text': Text },
  template: `<div style="padding: 16px">
              <v-text type="h1">
                Header 1
              </v-text>
              <v-text type="h2">
              Header 2
            </v-text>
            <v-text type="h3">
            Header 3
          </v-text>
          <v-text type="h4">
          Header 4
        </v-text>
        <v-text type="h5">
        Header 5
      </v-text>
      <v-text type="h6">
      Header 6
    </v-text>
    <v-text>
      <small>Lorem Ipsum</small>
      Normal
      <big>Lorem Ipsum</big>
     </v-text>
    <v-text type="paragraph">
   <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </v-text>
    <v-text type="paragraph" weight="light">
    <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
     </v-text>
    <v-text type="paragraph" weight="thin">
    <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
     </v-text>
            </div>`,
}))
