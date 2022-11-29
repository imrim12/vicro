<script setup lang="ts">
import { computed } from "vue";
import { useRootStore } from "./store/root";

const rootStore = useRootStore();

const count = computed(() => rootStore.$state.count);
</script>

<template>
  <div>
    <span class="text-red-500 mr-1">Hello world</span>
    <button @click="rootStore.increment" class="py-1 px-2 bg-gray-200 rounded shadow-md">
      <span>count: {{ count }}</span>
    </button>
  </div>
</template>
