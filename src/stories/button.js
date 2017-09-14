import { storiesOf } from '@storybook/vue'
import Button from '../components/Button.vue'

storiesOf('Button', module)
  .add('Primary', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px">
              <p>
                <v-button label="Primary" />
                <v-button icon="bookmark" label="Primary icon" />
                <v-button icon="bookmark" />
              </p>
              <p>
                <v-button rounded label="Primary" />
                <v-button rounded icon="keyboard_arrow_left" label="Primary icon" />
                <v-button rounded icon="bookmark" />
              </p>
              <p>
                <v-button size="small" label="Primary" />
                <v-button size="small" icon="bookmark" label="Primary icon" />
                <v-button size="small" icon="keyboard_arrow_left" />
              </p>
              <p>
                <v-button size="small" rounded label="Primary" />
                <v-button size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button size="large" label="Primary" />
                <v-button size="large" icon="bookmark" label="Primary icon" />
                <v-button size="large" icon="bookmark" />
              </p>
              <p>
                <v-button size="large" rounded label="Primary" />
                <v-button size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button disabled label="Primary" />
                <v-button disabled icon="bookmark" label="Primary icon" />
                <v-button disabled icon="bookmark" />
              </p>
              <p>
                <v-button rounded disabled label="Primary" />
                <v-button rounded disabled icon="bookmark" label="Primary icon" />
                <v-button rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button disabled size="small" label="Primary" />
                <v-button disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button disabled size="large" label="Primary" />
                <v-button disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button disabled rounded size="large" label="Primary" />
                <v-button disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
  .add('Outlined', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px">
              <p>
                <v-button theme="outlined" label="Primary" />
                <v-button theme="outlined" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" rounded label="Primary" />
                <v-button theme="outlined" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" size="small" label="Primary" />
                <v-button theme="outlined" size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" size="small" rounded label="Primary" />
                <v-button theme="outlined" size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" size="large" label="Primary" />
                <v-button theme="outlined" size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" size="large" rounded label="Primary" />
                <v-button theme="outlined" size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" disabled label="Primary" />
                <v-button theme="outlined" disabled icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" rounded disabled label="Primary" />
                <v-button theme="outlined" rounded disabled icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" disabled size="small" label="Primary" />
                <v-button theme="outlined" disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" disabled size="large" label="Primary" />
                <v-button theme="outlined" disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" disabled rounded size="large" label="Primary" />
                <v-button theme="outlined" disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
  .add('Clear', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px">
              <p>
                <v-button theme="clear" label="Primary" />
                <v-button theme="clear" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" rounded label="Primary" />
                <v-button theme="clear" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" size="small" label="Primary" />
                <v-button theme="clear" size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" size="small" rounded label="Primary" />
                <v-button theme="clear" size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" size="large" label="Primary" />
                <v-button theme="clear" size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" size="large" rounded label="Primary" />
                <v-button theme="clear" size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" disabled label="Primary" />
                <v-button theme="clear" disabled icon="bookmark" label="Primary icon" />
                <v-button theme="clear" disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" rounded disabled label="Primary" />
                <v-button theme="clear" rounded disabled icon="bookmark" label="Primary icon" />
                <v-button theme="clear" rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" disabled size="small" label="Primary" />
                <v-button theme="clear" disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" disabled size="large" label="Primary" />
                <v-button theme="clear" disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" disabled rounded size="large" label="Primary" />
                <v-button theme="clear" disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
  .add('Primary Light', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px; background: black">
              <p>
                <v-button light label="Primary" />
                <v-button light icon="bookmark" label="Primary icon" />
                <v-button light icon="bookmark" />
              </p>
              <p>
                <v-button light rounded label="Primary" />
                <v-button light rounded icon="bookmark" label="Primary icon" />
                <v-button light rounded icon="bookmark" />
              </p>
              <p>
                <v-button light size="small" label="Primary" />
                <v-button light size="small" icon="bookmark" label="Primary icon" />
                <v-button light size="small" icon="bookmark" />
              </p>
              <p>
                <v-button light size="small" rounded label="Primary" />
                <v-button light size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button light size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button light size="large" label="Primary" />
                <v-button light size="large" icon="bookmark" label="Primary icon" />
                <v-button light size="large" icon="bookmark" />
              </p>
              <p>
                <v-button light size="large" rounded label="Primary" />
                <v-button light size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button light size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button light disabled label="Primary" />
                <v-button light disabled icon="bookmark" label="Primary icon" />
                <v-button light disabled icon="bookmark" />
              </p>
              <p>
                <v-button light rounded disabled label="Primary" />
                <v-button light rounded disabled icon="bookmark" label="Primary icon" />
                <v-button light rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button light disabled size="small" label="Primary" />
                <v-button light disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button light disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button light disabled size="large" label="Primary" />
                <v-button light disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button light disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button light disabled rounded size="large" label="Primary" />
                <v-button light disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button light disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
  .add('Primary Dark', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px; background: white">
              <p>
                <v-button dark label="Primary" />
                <v-button dark icon="bookmark" label="Primary icon" />
                <v-button dark icon="bookmark" />
              </p>
              <p>
                <v-button dark rounded label="Primary" />
                <v-button dark rounded icon="bookmark" label="Primary icon" />
                <v-button dark rounded icon="bookmark" />
              </p>
              <p>
                <v-button dark size="small" label="Primary" />
                <v-button dark size="small" icon="bookmark" label="Primary icon" />
                <v-button dark size="small" icon="bookmark" />
              </p>
              <p>
                <v-button dark size="small" rounded label="Primary" />
                <v-button dark size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button dark size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button dark size="large" label="Primary" />
                <v-button dark size="large" icon="bookmark" label="Primary icon" />
                <v-button dark size="large" icon="bookmark" />
              </p>
              <p>
                <v-button dark size="large" rounded label="Primary" />
                <v-button dark size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button dark size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button dark disabled label="Primary" />
                <v-button dark disabled icon="bookmark" label="Primary icon" />
                <v-button dark disabled icon="bookmark" />
              </p>
              <p>
                <v-button dark rounded disabled label="Primary" />
                <v-button dark rounded disabled icon="bookmark" label="Primary icon" />
                <v-button dark rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button dark disabled size="small" label="Primary" />
                <v-button dark disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button dark disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button dark disabled size="large" label="Primary" />
                <v-button dark disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button dark disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button dark disabled rounded size="large" label="Primary" />
                <v-button dark disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button dark disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
  .add('Outlined Light', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px; background: black">
              <p>
                <v-button theme="outlined" light label="Primary" />
                <v-button theme="outlined" light icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light rounded label="Primary" />
                <v-button theme="outlined" light rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light size="small" label="Primary" />
                <v-button theme="outlined" light size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light size="small" rounded label="Primary" />
                <v-button theme="outlined" light size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light size="large" label="Primary" />
                <v-button theme="outlined" light size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light size="large" rounded label="Primary" />
                <v-button theme="outlined" light size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light disabled label="Primary" />
                <v-button theme="outlined" light disabled icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light rounded disabled label="Primary" />
                <v-button theme="outlined" light rounded disabled icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light disabled size="small" label="Primary" />
                <v-button theme="outlined" light disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light disabled size="large" label="Primary" />
                <v-button theme="outlined" light disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" light disabled rounded size="large" label="Primary" />
                <v-button theme="outlined" light disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" light disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
  .add('Outlined Dark', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px; background: white">
              <p>
                <v-button theme="outlined" dark label="Primary" />
                <v-button theme="outlined" dark icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark rounded label="Primary" />
                <v-button theme="outlined" dark rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark size="small" label="Primary" />
                <v-button theme="outlined" dark size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark size="small" rounded label="Primary" />
                <v-button theme="outlined" dark size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark size="large" label="Primary" />
                <v-button theme="outlined" dark size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark size="large" rounded label="Primary" />
                <v-button theme="outlined" dark size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark disabled label="Primary" />
                <v-button theme="outlined" dark disabled icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark rounded disabled label="Primary" />
                <v-button theme="outlined" dark rounded disabled icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark disabled size="small" label="Primary" />
                <v-button theme="outlined" dark disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark disabled size="large" label="Primary" />
                <v-button theme="outlined" dark disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="outlined" dark disabled rounded size="large" label="Primary" />
                <v-button theme="outlined" dark disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="outlined" dark disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
  .add('Clear Light', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px; background: black">
              <p>
                <v-button theme="clear" light label="Primary" />
                <v-button theme="clear" light icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light rounded label="Primary" />
                <v-button theme="clear" light rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light size="small" label="Primary" />
                <v-button theme="clear" light size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light size="small" rounded label="Primary" />
                <v-button theme="clear" light size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light size="large" label="Primary" />
                <v-button theme="clear" light size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light size="large" rounded label="Primary" />
                <v-button theme="clear" light size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light disabled label="Primary" />
                <v-button theme="clear" light disabled icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light rounded disabled label="Primary" />
                <v-button theme="clear" light rounded disabled icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light disabled size="small" label="Primary" />
                <v-button theme="clear" light disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light disabled size="large" label="Primary" />
                <v-button theme="clear" light disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" light disabled rounded size="large" label="Primary" />
                <v-button theme="clear" light disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" light disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
  .add('Clear Dark', () => ({
    components: { 'v-button': Button },
    template: `<div>
            <div style="padding: 16px; background: white">
              <p>
                <v-button theme="clear" dark label="Primary" />
                <v-button theme="clear" dark icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark rounded label="Primary" />
                <v-button theme="clear" dark rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark size="small" label="Primary" />
                <v-button theme="clear" dark size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark size="small" rounded label="Primary" />
                <v-button theme="clear" dark size="small" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark size="small" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark size="large" label="Primary" />
                <v-button theme="clear" dark size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark size="large" rounded label="Primary" />
                <v-button theme="clear" dark size="large" rounded icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark size="large" rounded icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark disabled label="Primary" />
                <v-button theme="clear" dark disabled icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark rounded disabled label="Primary" />
                <v-button theme="clear" dark rounded disabled icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark rounded disabled icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark disabled size="small" label="Primary" />
                <v-button theme="clear" dark disabled size="small" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark disabled size="small" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark disabled size="large" label="Primary" />
                <v-button theme="clear" dark disabled size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark disabled size="large" icon="bookmark" />
              </p>
              <p>
                <v-button theme="clear" dark disabled rounded size="large" label="Primary" />
                <v-button theme="clear" dark disabled rounded size="large" icon="bookmark" label="Primary icon" />
                <v-button theme="clear" dark disabled rounded size="large" icon="bookmark" />
              </p>
            </div>
          </div>`,
  }))
