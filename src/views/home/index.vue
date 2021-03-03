<template>
  <div @click="test">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'home',
  setup () {
    const msg:string = '首页'
    const test = ():any => {
      return 'x'
    }
    return {
      msg,
      test
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
