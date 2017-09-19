<template>
  <v-div column full height="100%" overflow="hidden">

    <v-toolbar>
      <div slot="right">
        <v-text color="#fff" weight="black">ARRIVA</v-text>
        <v-text :offset="-4" color="#fff" weight="light">Crew</v-text>
      </div>
      <v-btn slot="left" size="medium" rounded>
        <v-icon @click="$router.push('/time-table')" name="settings" />
      </v-btn>
      <v-btn slot="left" size="medium" rounded>
        <v-icon @click="$router.push('/login')" name="exit_to_app" />
      </v-btn>
      </div>
    </v-toolbar>
    <router-view></router-view>
  </v-div>
</template>

<script>
export default {
  name: 'app',
}
</script>
