<template>
  <v-transition appear name="fadeInBottom" :delay="10" :duration="450">
    <v-div overflow="scroll" full :min-height="'calc(100vh - 64px)'" height="100%" justify="center" align="flex-start" column>
      <v-list :options="items">
        <template scope="prop">

          <v-div full column :background="$color.dark(.75)">
            <v-expansion inset :border-radius="2">
              <v-div :background="$color.light()" slot="header" align="center" full justify="space-between" v-touch-ripple>
                <v-div align="center" full :height="72" column :padding="[null, 16]">
                  <v-div align="center">
                    <v-div :border-radius="4" :background="$color.dark(.6)" :padding="[null, 16]">
                      <v-text color="#fff" weight="black">
                        <small>1275</small>
                      </v-text>
                    </v-div>
                    <v-divider :space="8" vertical />
                    <v-text type="h6" :letter-spacing="-.5" uppercase weight="black" :color="$color.dark(.7)" no-margin>
                      {{ prop.item.station }}
                    </v-text>
                    <v-divider vertical :space="8" />
                    <v-div :padding="[null, 8]" :border="[null, null, null, 1]">
                      <v-text no-margin type="h6" weight="black" :color="$color.dark(.7)">
                        {{ prop.item.track }}
                      </v-text>
                    </v-div>

                  </v-div>

                  <v-div>
                    <v-text :color="$color.dark(.4)">
                      <small>
                        <v-icon size="small" name="access_time" /> {{ prop.item.arrival }}
                      </small>
                    </v-text>
                    <v-divider vertical :space="8" />
                    <v-text :color="$color.primary">
                      <small>
                        <v-icon size="small" name="place" /> HIE-MOT
                      </small>
                    </v-text>
                  </v-div>

                </v-div>
              </v-div>

              <v-div full background="#fff" shadow="medium">

                <v-btn full icon="place" />
                <v-btn full theme="clear" icon="timer" />
                <v-btn full icon="merge_types" />

              </v-div>
            </v-expansion>
          </v-div>

        </template>
      </v-list>
    </v-div>
  </v-transition>
</template>

<script>
export default {
  name: 'time-table',

  data() {
    return {
      items: [
        {
          station: 'Malmö',
          track: '3b',
          arrival: '10:00'
        },
        {
          station: 'Lund',
          track: '1',
          arrival: '15:00'
        },
        {
          station: 'Lund',
          track: '1',
          arrival: '15:00'
        },
        {
          station: 'Malmö',
          track: '3b',
          arrival: '10:00'
        },
        {
          station: 'Lund',
          track: '1',
          arrival: '15:00'
        },
        {
          station: 'Lund',
          track: '1',
          arrival: '15:00'
        },
        {
          station: 'Malmö',
          track: '3b',
          arrival: '10:00'
        },
        {
          station: 'Lund',
          track: '1',
          arrival: '15:00'
        },
        {
          station: 'Lund',
          track: '1',
          arrival: '15:00'
        }
      ],
      input: 'test',
      check: false,
    }
  }
}
</script>
