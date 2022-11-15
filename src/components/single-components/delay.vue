<template></template>
<script setup>
const props = defineProps({
   time: {
      type: Number,
      deault: 500,
   },
});
await new Promise((resolve) => setTimeout(() => resolve(), props.time));
</script>
