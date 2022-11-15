<template>
	<Suspense>
		<div>
			<delay :time="500" />
			<h1 class="p-4 text-cyan bg-cyan text-cyan-darken-4">
				Welcome to The Vuetify tutorial
			</h1>
			<v-card class="pa-3">
				Testing axios in App:
				<v-form @submit.prevent="handle">
					<v-text-field v-model="cat.inp1"> </v-text-field>
					<v-btn @click.prevent="handle">Submit</v-btn>
				</v-form>
			</v-card>
			<!-- <<<Oparation with Cats -->
			<v-card class="ma-5">
				<v-row>
					<v-col cols="6">
						<v-chip label color="warning"
							>Oparation with cats</v-chip
						>
						<v-form class="ma-3" @submit.prevent="addCat">
							<v-text-field
								label="enter name of the cats to add"
								v-model="cat.one"
							></v-text-field>
							<v-row>
								<v-col>
									<v-btn color="success" @click="addCat"
										>Add Cats</v-btn
									>
								</v-col>
								<v-col class="text-end">
									<v-btn
										color="red"
										prepend-icon="mdi-alert"
										@click="clearCache"
										>Clear Cache</v-btn
									>
								</v-col>
							</v-row>
						</v-form>
					</v-col>
					<v-col class="bg-grey-lighten-3">
						<v-card>
							<v-list v-if="cat.all.length">
								<v-list-item
									v-for="(cat, n) in cat.all"
									:key="n"
									:title="`${n}. ${cat}`"
								>
									<template #append>
										<v-btn
											color="warning"
											density="compact"
											@click="remove(n)"
											>remove</v-btn
										>
									</template>
								</v-list-item>
							</v-list>
						</v-card>
					</v-col>
				</v-row>
			</v-card>
			<!-- >>> -->
		</div>
		<template #fallback>
			<wait-linear text="Waiting Data" />
		</template>
	</Suspense>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";
const cat = reactive({
	all: [],
	one: "",
	inp1: "",
});
const addCat = () => {
	if (!cat.one) return;
	cat.all.push(cat.one);
	cat.one = "";
	saveToStorage();
};
const remove = (n) => {
	cat.all.splice(n, 1);
	saveToStorage();
};
function saveToStorage() {
	const jsonCat = JSON.stringify(cat.all);
	localStorage.setItem("allCats", jsonCat);
}
// Get data from Local Storage
onMounted(() => {
	if (localStorage.getItem("allCats")) {
		try {
			cat.all = JSON.parse(localStorage.getItem("allCats"));
		} catch (e) {
			localStorage.removeItem("allCats");
		}
	}
});
// Clear Storage
const clearCache = () => {
	localStorage.removeItem("allCats");
};
// testng axios
const handle = async () => {
	let res = await axios.post("/api", {
		text: cat.inp1,
	});
	cat.inp1 = res.data;
	console.log(localStorage);
};
</script>

<style></style>
