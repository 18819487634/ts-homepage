<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view/>
    </div>
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
#app {
  height: 100%;
  width: 100%;
}
.main {
  padding-top: 100px;
}
</style>
