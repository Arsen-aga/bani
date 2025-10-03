<script setup>
// import { useRoute } from 'vue-router'

// const route = useRoute()

defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- <div>Баня {{ route.params.id }}</div> -->
  <div>Баня {{ id }}</div>
</template>

<style lang="scss" scoped></style>
