<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'home',
  setup () {
    const msg = '首页'
    return {
      msg
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
