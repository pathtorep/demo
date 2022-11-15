<template>
   <v-btn class="hidden-md-and-down">class: hidden-md-and-down</v-btn>
   <v-btn class="hidden-md-and-up text-red"
      >class: hidden-md-and-up text-red</v-btn
   >
   <v-btn class="hidden-md-only text-success"
      >class: hidden-md-only text-success</v-btn
   >

   <v-alert
      density="compact"
      type="success"
      elevation="2"
      class="my-2"
      border="bottom"
      >Toolbar</v-alert
   >
   <v-toolbar app>
      <v-toolbar-title class="text-uppercase text-gray">
         <span class="font-weight-light">ToolBar</span><span>Content</span>
      </v-toolbar-title>
      <v-btn>
         sign-out
         <v-icon class="ms-1">mdi-exit-to-app</v-icon>
      </v-btn>
   </v-toolbar>
   <!--  -->
   <v-toolbar class="my-2">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <span class="text-h4 font-weight-light">Vuetify</span>
      <v-spacer />
      <span class="text-uppercase text-h6 font-weight-light">sign out</span>
      <v-icon>mdi-exit-to-app</v-icon>
   </v-toolbar>
   <!--  -->
   <v-card color="grey-lighten-1" flat>
      <v-toolbar class="my-2" collapse>
         <v-icon>mdi-magnify</v-icon>
         <v-icon>mdi-dots-vertical</v-icon>
      </v-toolbar>
   </v-card>
   <!--  -->
   toolbar density='compact'
   <v-toolbar class="my-2" density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <span class="text-h4 font-weight-light">Vuetify</span>
      <v-spacer />
      <span class="text-uppercase text-h6 font-weight-light">sign out</span>
      <v-icon>mdi-exit-to-app</v-icon>
   </v-toolbar>
   <!--  -->
   toolbar extended (or extension-height="100" for more extending toolbar)
   <v-toolbar class="my-2" extended>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <span class="text-h4 font-weight-light">Vuetify</span>
      <v-spacer />
      <span class="text-uppercase text-h6 font-weight-light">sign out</span>
      <v-icon>mdi-exit-to-app</v-icon>
   </v-toolbar>
   <!--  -->
   using with the text field, toolbar props: dense, floating
   <v-card flat>
      <v-toolbar dense floating>
         <v-text-field
            hide-details
            single-line
            prepend-icon="mdi-magnify"
         ></v-text-field>
         <v-btn icon="mdi-crosshairs-gps"></v-btn>
         <v-btn icon="mdi-dots-vertical"></v-btn>
      </v-toolbar>
   </v-card>
   <!--  -->
   <div class="mt-5">
      used tags: v-scale-transitions, v-card, v-select, v-toolbar,
      v-toolbar-title, v-app-bar-icon
   </div>
   <v-card max-width="700" class="mx-auto">
      <v-toolbar
         :color="selection.length ? 'grey-darken-2' : 'deep-purple-accent-3'"
      >
         <v-app-bar-nav-icon v-if="!selection.length"></v-app-bar-nav-icon>
         <v-btn v-else icon @click="selection.length = ['']">
            <v-icon>mdi-close</v-icon>
         </v-btn>
         <v-toolbar-title>{{
            selection.length ? `${selection.length} is selected` : "Photos"
         }}</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-scale-transition>
            <v-btn icon key="export" v-if="selection.length">
               <v-icon>mdi-export-variant</v-icon>
            </v-btn>
         </v-scale-transition>
         <v-scale-transition>
            <v-btn icon v-if="selection.length">
               <v-icon>mdi-delete</v-icon>
            </v-btn>
         </v-scale-transition>
         <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
         </v-btn>
      </v-toolbar>
      <v-card-text>
         <v-select
            v-model="selection"
            :items="items"
            multiple
            lebel="Select the items"
         ></v-select>
      </v-card-text>
   </v-card>
   <!--  -->

</template>

<script setup>
import { ref } from "vue";
const selection = ref([]);
const items = ref(["first", "second", "third", "fourth"]);
</script>

<style></style>
