<template>
    <div :style="tab === activeTab ? 'display: block' : 'display: none'">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
    defineProps({
      tab: String,
      activeTab: String,
    })
  </script>
  