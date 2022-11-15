<template>
	<v-app>
		<v-navigation-drawer
			v-model="nav.drawer"
			:rail="nav.rail"
			class="border-0"
			@click="nav.rail = !nav.rail"
		>
			<template #image>
				<v-img
					src="/img/images.jpeg"
					class="h-100"
					gradient="rgba(255,100,100, 0.9), rgba(20,255,20,0.5)"
				></v-img>
			</template>
			<v-list class="text-white">
				<!-- ----------------------prepend avatar-------------- -->
				<v-list-item :prepend-avatar="'/img/images.jpeg'" title="Navigations">
					<template #append>
						<v-btn
							icon="mdi-chevron-left"
							variant="text"
							@click.stop="nav.rail = true"
						></v-btn>
					</template>
				</v-list-item>
				<v-divider></v-divider>
			</v-list>
			<v-list>
				<v-list-item
					class="text-white"
					v-for="({ name, path, icon }, i) in links"
					:key="i"
					@click.stop="router.push(path)"
					:prepend-icon="icon"
				>
					<v-list-item-title class="text-uppercase">{{
						name
					}}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar
			title="Lesson of Vuetify..."
			class="text-white"
			:density="scrl > 90 ? 'compact' : 'prominent'"
		>
			<template #prepend>
				<v-app-bar-nav-icon
					@click="nav.drawer = !nav.drawer"
				></v-app-bar-nav-icon>
			</template>
			<template #image>
				<v-img
					src="/img/images.jpeg"
					gradient="90deg, rgba(255,100,100, 0.9), rgba(100,100,255, 0.5)"
				></v-img>
			</template>
			<template #append>
				<v-btn icon="mdi-filter"></v-btn>
				<v-btn icon="mdi-login"></v-btn>
				<v-btn icon="mdi-dots-vertical"></v-btn>
			</template>
		</v-app-bar>
		<v-main>
			<v-container fluid>
				<v-card>
					<router-view></router-view>
				</v-card>
			</v-container>
		</v-main>
		<v-footer> </v-footer>
	</v-app>
</template>

<script setup>
// components
import { routes as links_ } from "./router/router";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const links = links_.filter((e) => e.icon);
const router = useRouter();
const scrl = ref();
const nav = reactive({
	drawer: "",
	rail: true,
});
addEventListener("scroll", () => (scrl.value = window.scrollY));
</script>

<style scoped>
a {
	text-decoration: none;
	font-size: 1.3rem;
}
</style>
