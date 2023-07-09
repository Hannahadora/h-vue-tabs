<script setup>
</script>

<template>
  <div>
    <Tab :tabs="['Me', 'Myself', 'I']" :active-tab-color="'red'" :active-tab="'me'">
      <template #me> <p>ME</p> </template>
      <template #myself> <p>MYSELF</p> </template>
      <template #i> <p>I</p> </template>
    </Tab>
  </div>
</template>

<style scoped></style>
