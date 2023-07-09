<template>
  <div class="tab_wrapper">
    <ul class="tab_list">
      <li
        :style="
          tab === activeTab &&
          `color:${activeTabColor}; border-bottom: 4px solid ${activeTabColor}; font-weight: 600`
        "
        @click="setActiveTab(tab, i)"
        v-for="(tab, i) in tabs"
        :key="i"
        class="tab_data"
      >
        {{ tab }}
      </li>
    </ul>
    <div class="tab_content">
      <template v-for="(tab, i) in tabs" :key="i">
        <Wrapper :tab="tab" :activeTab="activeTab">
          <template v-slot:default>
            <slot :name="tab"></slot>
          </template>
        </Wrapper>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const activeTab = ref();

defineProps({
  tabs: Array,
  activeTabColor: String,
  activeTabIndex: Number,
});

const setActiveTab = (tab, index) => {
  activeTab.value = tab;
};
onMounted(() => {
  console.log("activeTab", activeTab.value);
});
</script>

<style scoped>
.tab_wrapper {
  width: 100%;
}
.tab_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  list-style-type: none;
}
.tab_data {
  cursor: pointer;
  padding: 20px 5px;
}
.tab_content {
  border: 1px solid red;
  height: 400px;
  width: 100%;
}
</style>
