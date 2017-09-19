<template>
  <v-transition appear name="fadeInBottom" :delay="10" :duration="450">

    <v-div overflow="scroll" v-if="!isLoading" :form="login" full :min-height="'calc(100vh - 64px)'" height="100%" justify="center" align="center" column :key="isLoading">
      <v-div v-if="!isLoading" width="100%" column justify="center">
        <v-div full column :max-width="280">

          <v-div :padding="[32, null]" full align="center">
            <v-text type="h5" weight="thin" no-margin>Sign in</v-text>
            <v-div :padding="[4, null, null, 8]">
              <v-icon :color="$color.primary" size="large" name="arrow_forward" />
            </v-div>
          </v-div>
          <v-div full :padding="[null,null, 8, null]">
            <v-input required :validation="$v.username" icon="face" v-model="username" label="Username" clear :counter="10" />
          </v-div>
          <v-div full :padding="[null,null, 8, null]">
            <v-input required :validation="$v.password" icon="lock" v-model="password" label="Password" :counter="10" type="password" visibility />
          </v-div>
          <v-div full :depth="3">
            <v-input icon="assignment" v-model="selected" label="Konto" type="select" :options="items" />
          </v-div>
          <v-div full :padding="[32,null]">
            <v-checkbox v-model="check" label="Remember me" />
          </v-div>
        </v-div>
      </v-div>
      <v-div full align="flex-end" v-if="!isLoading">
        <v-btn size="large" :disabled="$v.$invalid" submit :loading="isLoading" full label="Sign in" />
      </v-div>

    </v-div>
    <v-div v-else align="center" justify-content="center" full :background="$color.primary">
      <v-div full :padding="[16]" justify="center" align="center" column>
        <v-div :padding="[16, null]">
          <v-spinner color="#fff" size="xlarge" stroke-size="medium" :loading="isLoading"></v-spinner>
        </v-div>
        <v-text color="#fff" weight="light">Standby while signing you in...</v-text>
      </v-div>
    </v-div>
  </v-transition>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'login',

  mixins: [validationMixin],
  validations: {
    username: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(10),
    },
    password: {
      minLength: minLength(6),
      maxLength: maxLength(10),
      required,
    },
  },

  data() {
    return {
      items: [
        'Arriva dev',
        'Arriva DB',
      ],
      selected: 'Arriva dev',
      username: '',
      password: '',
      isLoading: false,
      check: true,
    }
  },

  methods: {
    login() {
      this.$v.$touch()
      if (this.$v.$invalid) return
      this.isLoading = true
      setTimeout(() => {
        this.$router.push('/time-table')
      }, 3000)
    }
  }
}
</script>
