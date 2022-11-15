<template>
   <!-- common way created navigation drawer -->
   <v-row justify="center">
      <v-col cols="11" mx-auto>
         <v-app>
            <v-card>
               <v-layout>
                  <v-app-bar color="primary" prominent>
                     <v-app-bar-nav-icon
                        @click="draw = !draw"
                     ></v-app-bar-nav-icon>
                     <v-spacer />
                     <v-btn icon="mdi-magnify" variant="text"></v-btn>
                     <v-btn icon="mdi-filter" variant="text"></v-btn>
                     <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
                  </v-app-bar>
                  <v-navigation-drawer v-model="draw">
                     <v-list :items="lists"></v-list>
                  </v-navigation-drawer>
                  <v-main style="height: 250px">
                     <v-card-text>
                        Click on left side icon to show the result !!!
                     </v-card-text>
                  </v-main>
               </v-layout>
            </v-card>
         </v-app>
      </v-col>
      <!-- Expand on hover -->
      <v-col cols="11" mx-auto>
         <v-card>
            <v-layout>
               <v-app>
                  <v-navigation-drawer
                     expand-on-hover
                     rail
                     image="/img/mountains.jpg"
                  >
                     <v-list>
                        <v-list-item
                           prepend-avatar="/img/images.jpeg"
                           title="Flowers"
                           subtitle="donkadr@gmail.com"
                        ></v-list-item>
                        <v-divider />
                     </v-list>
                     <v-list density="compact">
                        <v-list-item
                           prepend-icon="mdi-folder"
                           title="My folder"
                        ></v-list-item>
                        <v-list-item
                           prepend-icon="mdi-account-multiple"
                           title="Shared with me"
                        ></v-list-item>
                        <v-list-item
                           prepend-icon="mdi-star"
                           title="Starred"
                        ></v-list-item>
                     </v-list>
                  </v-navigation-drawer>
                  <v-main style="height: 250px"></v-main>
               </v-app>
            </v-layout>
         </v-card>
      </v-col>
      <!-- Expand on click -->
      <v-col cols="11">
         <v-card>
            <v-layout>
               <v-app>
                  <v-navigation-drawer
                     :rail="rail"
                     @click="rail = false"
                     v-model="drawer"
                  >
                     <v-list-item
                        prepend-avatar="/img/mountains.jpg"
                        title="Name of Users"
                        nav
                     >
                        <template v-slot:append>
                           <v-btn
                              variant="text"
                              icon="mdi-chevron-left"
                              @click.stop="rail = !rail"
                           ></v-btn>
                        </template>
                     </v-list-item>
                     <v-divider />
                     <v-list nav>
                        <v-list-item
                           prepend-icon="mdi-home-city"
                           title="The Firt item of the nav"
                           value="first"
                        ></v-list-item>
                        <v-list-item
                           prepend-icon="mdi-account-group"
                           title="The Second Item of the nav"
                           value="second"
                        ></v-list-item>
                        <v-list-item
                           prepend-icon="mdi-account-group-outline"
                           title="Click to show Accout"
                           value="third"
                        ></v-list-item>
                        <v-list-item
                           prepend-icon="mdi-text"
                           title="Click to Show Accout all"
                           value="last"
                        ></v-list-item>
                     </v-list>
                  </v-navigation-drawer>
               </v-app>
            </v-layout>
         </v-card>
      </v-col>
   </v-row>
</template>

<script setup>
import { ref } from "vue";
const draw = ref(false);
const lists = ["the first menu", "the second menu", "the third menu"];
const rail = ref(true);
const drawer = ref(true);
</script>

<style></style>
