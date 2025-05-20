<script setup>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader />
    <TheMain>
      <router-view />
    </TheMain>
    <TheFooter />
  </div>
</template>

<style scoped>

</style>
