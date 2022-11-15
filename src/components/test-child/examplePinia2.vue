<template>
	<v-container>
		<v-row>
			<v-col>
				<v-card class="pa-2 bg-green-lighten-5">
					Add to count one: <b>{{ store.addOne }}</b
					><br />
					Multiply count to two: <b>{{ store.multTwo }}</b
					><br />
					Gather All Value of the Count: <b>{{ store.gatherAll }}</b
					><br />
					<!-- <v-btn color="success" @click="store.addOne">text</v-btn> -->
					Getting value from another Store:
					<b>{{ store.otherStore.salary }}</b>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-red-lighten-5 pa-3">
					Salary on Action: {{ store.salary }}<br />
					Age on Action: {{ store.age }}<br />
					Count on Action: {{ store.count }}<br />
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-green-lighten-4 pa-3">
					<v-chip color="red" label class="ma-2"
						>This store is added to Pinia by Plugins</v-chip
					>
					Data added by Plugin - 1: <b>{{store.secret}}</b><br>
					Data added by Plugin - 2: <b>{{store.secretData}}</b><br>
					Data added by Named - Plugin - 3: <b>{{store.greeting}}</b><br>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { useStore2 } from "@/pinia2";
export default {
	name: "examplePinia2",
	setup() {
		const store = useStore2();
		setTimeout(() => (store.otherStore.salary = 1), 2000);
		setTimeout(() => {
			store.setAge();
			store.setSalary();
			store.setCount();
		}, 3000);
		const unsubscribe = store.$onAction(
			({ name, store, args, after, onError }) => {
				console.log(name);
				console.log(store);
				console.log(args);
				after(() => console.log("After Hook is ocuured !!!"));
				onError((err) => console.log(err));
			}
		);
		// unsubscribe() -- for manually remove the listener
		return { store };
	},
};
</script>

<style></style>
