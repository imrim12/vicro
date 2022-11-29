<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Root",
  setup() {
    const count = ref(1);

    return {
      count,
    };
  },
});
</script>

<template>
  <div>
    Hello
    <button @click="count++">
      <span>count: {{ count }}</span>
    </button>
  </div>
</template>
