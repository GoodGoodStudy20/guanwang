<template>
  <div id="app">
    <v-table></v-table>
    <router-view />
    <v-bottom></v-bottom>

  </div>
</template>

<script>
import vTable from './components/nav/index'
import vBottom from './components/bottom/index'

export default {
  name: 'App',
  components: {
    vTable,
    vBottom
  },
}
</script>
<style lang="scss" scoped>
</style>

