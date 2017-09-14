<template>
  <v-div column block height="100%">

    <v-toolbar shadow>
      <div slot="right">
        <v-text color="#fff" weight="black">BRAND</v-text>
        <v-text :offset="-4" color="#fff" weight="light">App</v-text>
      </div>
      <v-btn slot="left" size="large">
        <v-icon name="settings" />
      </v-btn>
      <v-btn slot="left" size="large">
        <v-icon name="exit_to_app" />
      </v-btn>
      </div>
    </v-toolbar>
    <v-transition appear name="fadeInBottom" :delay="10" :duration="450">

      <v-div v-if="!isLoading" :form="login" block height="100%" justify="center" align="center" column :key="isLoading">
        <v-div v-if="!isLoading" align="center" :flex="1" block :max-width="320" column>
          <v-div :padding="[32, null]" align="center">
            <v-text type="h5" weight="light">Sign in</v-text>
            <v-div :padding="[4, null, null, 8]">
              <v-icon :color="$color.primary" size="large" name="arrow_forward" />
            </v-div>
          </v-div>
          <v-input icon="face" v-model="username" block label="Username" clear :counter="20" />
          <v-input icon="lock" v-model="password" block label="Password" type="password" visibility />
          <v-div :padding="[32,null]">
            <v-checkbox v-model="check" label="Remember me" />
          </v-div>
        </v-div>
        <v-div block :flex="1" align="flex-end" v-if="!isLoading">
          <v-btn submit :loading="isLoading" block label="Sign in" />
        </v-div>
      </v-div>
      <v-div v-else align="center" :background="$color.primary" block :flex="1" :padding="[16]">
        <v-div :padding="[null, 16, null, null]">
          <v-spinner color="#fff" size="large" stroke-size="large" :loading="isLoading"></v-spinner>
        </v-div>
        <v-text color="#fff" type="h6" weight="light">Standby while signing you in...</v-text>
      </v-div>
    </v-transition>

  </v-div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
      check: true,
    }
  },

  methods: {
    login() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  }
}
</script>
