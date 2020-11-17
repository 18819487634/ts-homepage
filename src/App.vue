<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    onMounted(() => {
      console.log('版本号' + process.env.VUE_APP_VERSION)
    })
  }
})
</script>

<style lang="scss">

</style>
