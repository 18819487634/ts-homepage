<template>
  <header class="navbar">
    头部
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
})
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid $borderColor;
}
</style>
