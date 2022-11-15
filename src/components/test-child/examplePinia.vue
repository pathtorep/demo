<template>
	<v-container>
		<v-row>
			<v-col>
				<v-chip color="red" label class="ma-2" prepend-icon="mdi-rocket"
					>Introduction to Pinia</v-chip
				>
				<v-sheet class="pa-3 bg-green-lighten-5">
					<div>Example of the pinia: {{ store.count }}</div>
					<div>dblCount: {{ store.doubleCount }}</div>
					<div>
						<v-alert
							type="warning"
							text="Following not changing on instance(used ...mapState() function)"
						></v-alert>
						mapVal: {{ noWrite }}
					</div>
					<div class="text-center">
						<v-btn
							color="success"
							@click="store.increment()"
							density="compact"
							>Click for change</v-btn
						>
					</div>
				</v-sheet>
			</v-col>
			<v-col>
				<v-chip class="ma-2" label color="red">
					Using $PATH function for change store
				</v-chip>
				<v-sheet class="pa-3 bg-cyan-lighten-5">
					<v-row no-gutters>
						<v-col>
							State age: {{ store.age }}<br />
							State salery: {{ store.salary }}<br />
							State lastName: {{ store.lastName }}<br />
							<v-btn color="success" @click="handle" class="me-5"
								>Change All Store props</v-btn
							>
						</v-col>
						<v-col class="d-flex flex-column align-start">
							<div class="mb-auto">
								State array: {{ store.arr }}<br />
								State object: {{ store.obj }}<br />
							</div>
							<v-btn color="success" @click="handle2"
								>Change All Store (by func)</v-btn
							>
						</v-col>
					</v-row>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>
e
<script>
import { useStore } from "@/pinia";
import { mapState } from "pinia";
export default {
	name: "examplePinia",
	setup() {
		const store = useStore();
		// catching changes store in setup:
		store.$subscribe(
			(mutation, state) => {
				console.log(
					`${mutation.type} -- ${mutation.storeId} -- ${mutation.payload}`
				);
				localStorage.setItem('count', JSON.stringify(state))
				console.log("Mutation payload:");
				console.log(mutation.payload);     // Aviable only when mutation.type == object !!!
				console.log("State:");
				console.log(state);
			},
			{ detached: true }   // makes aviable watch even unmounted from component !!!
		); 
		return { store };
	},
	data() {
		return {};
	},
	computed: {
		...mapState(useStore, {
			// ...mapState(useStore, {}) for make unWritible, here: noWrite
			noWrite: "count",
		}),
	},
	methods: {
		handle: function () {
			this.store.$patch({
				age: 0,
				salary: 0,
				lastName: "Doe",
			});
		},
		handle2: function () {
			this.store.$patch((state) => {
				state.obj.name = "SomeName";
				state.obj.lastName = "LastSomeName";
				state.arr.push(...[1, 2, 3]);
			});
			// patching data of the store:
			// this.store.state = {count = 11} actually don't replace
			setTimeout(() => this.store.$patch({ count: 11 }), 2000);
			setTimeout(() => console.log(this.store.count), 3000);
		},
	},
	// watch: {
	// 	noWrite() {
	// 		setTimeout(() => (this.noWrite = 0), 2000);  //can not change the variable
	// 	},
	// },
};
</script>

<style></style>
