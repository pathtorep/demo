<template>
   <div>
      <span v-if="text" class="wait"
         >{{ text }}<span class="dots">{{ dots }}</span></span
      >
      <div class="wait-linear"></div>
   </div>
</template>

<script setup>
import { ref, watch } from "vue";

const dots = ref("");
const val = ref();

const props = defineProps({
   text: {
      type: String,
      default: "wait",
   },
});

(async () => {
   let k = 1;
   for (let i = 0; i < 100; i += k) {
      await new Promise((resolve) => setTimeout(() => resolve(), 10));
      if (i % 30 == 0) dots.value += ".";
      if (dots.value.length > 11) dots.value = "";
      if (i > 90) k = -1;
      if (i < 10) k = 1;
      val.value = `${i}%`;
   }
})();
</script>

<style>
.wait-linear {
   display: block;
   padding: 4px;
   background: linear-gradient(
      90deg,
      green -150%,
      rgba(255, 255, 20, 0.3) v-bind(val),
      green 150%
   );
}
.wait {
   font-family: monospace;
   font-weight: bold;
   opacity: 0.5;
   position: relative;
}
.dots{
   position: absolute;
   top: -1px;
}
</style>
