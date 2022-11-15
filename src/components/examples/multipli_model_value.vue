<template>
   <div class="ma-3">
      FIRST:
      <input
         style="border: 1px solid red; margin: 5px"
         type="text"
         :value="val1"
         @input="$emit('update:val1', $event.target.value)"
      />
      SECOND:
      <input
         style="border: 1px solid red; margin: 5px"
         type="text"
         :value="val2"
         @input="$emit('update:val2', $event.target.value)"
      />
   </div>
</template>

<!-- <template>
    <component :is='child' v-model:val1="first" v-model:val2="second"></component>
      <div>
         FIRST: {{first}}
      </div>
      <div>
         SECOND: {{second}}
      </div>
    </template>
<script setup>
import this components from './path'
import {ref} from 'vue'
const first = ref('1')       //access first input value
const second = ref('2')      //access second input value
</script> -->

<script setup>
import { ref } from "vue";
const props = defineProps({
   val1: {
      type: String,
   },
   val2: {
      type: String,
   },
});
defineEmits(["update:val1", "update:val2"]);
</script>

<style></style>
