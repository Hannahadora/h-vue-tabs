<template>
  <div class="tab_wrapper">
    <ul class="tab_list">
      <li
        :style="
          tab?.toLowerCase() === activeTab &&
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
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const activeTab = ref();
const router = useRouter();
const route = useRoute();

const props = defineProps({
  tabs: {
    type: Array,
    default: () => ["tab1", "tab2"],
    required: true,
  },
  activeTabColor: {
    type: String,
    default: "#000000",
  },
  activeTabIndex: {
    type: Number,
    default: 0,
  },
});

watch(
  () => props.activeTabIndex,
  () => {
    activeTab.value = props.tabs.findIndex(
      (tab) => tab === props.activeTabIndex
    );
  }
);

const setActiveTab = (tab, index) => {
  activeTab.value = tab.toLowerCase();
  router.push({ query: { activeTab: activeTab.value } });
};
onMounted(() => {
  const xtab = props.tabs.find((tab, i) => i === props.activeTabIndex);
  activeTab.value = xtab ? xtab.toLowerCase() : '';
  console.log("activeTab", activeTab.value);
});
</script>

<style scoped>
.tab_wrapper {
  width: 100%;
  overflow-x: scroll;
}
.tab_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  list-style-type: none;
  flex-wrap: nowrap;
}
.tab_data {
  cursor: pointer;
  padding: 20px 5px;
}

.tab-wrapper::-webkit-scrollbar {
  width: 0;
}
</style>
