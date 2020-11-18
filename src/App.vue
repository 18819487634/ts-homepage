<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Header from '@/components/header/index.vue'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  },
  setup () {
    onMounted(() => {
      console.log('版本号' + process.env.VUE_APP_VERSION)
    })
  }
})
</script>

<style lang="scss">
</style>
