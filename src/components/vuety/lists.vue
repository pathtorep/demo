<template>
   <v-card class="my-5">
      <v-list :items="myLists"> </v-list>
   </v-card>
   Grouped Lists<br />

   <v-card class="ma-3 border">
    <h1>v-model: panels = {{panels}}</h1>
      <h3 class="my-2">Expansion component</h3>
      <v-expansion-panels v-model:penels="test" multiple variant="inset">
         <v-expansion-panel
            v-for="(key, index) in 5"
            :key="key"
            title="Title of the Panels"
            text="Text container of the Panels"
            class="text-h4"
            :value="index"
         >
         </v-expansion-panel>
      </v-expansion-panels>
   </v-card>
</template>

<script setup>
import { ref } from "vue";
const panels = ref([]);
const test = [0,0,0,1,0]

let i = 0;
const myLists = Array.from({ length: 5 }).map(() => ({
   title: `The ${i++} title`,
   props: {
      density: "compact",
      prependIcon: i % 2 ? "mdi-rocket" : "mdi-account",
      class: !(i % 2) ? "text-h3" : "",
      subtitle: !(i % 2) ? `Subtitle any #${i}` : "",
   },
}));
</script>

<style></style>
