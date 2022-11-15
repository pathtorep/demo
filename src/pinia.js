import { defineStore } from "pinia";

export const useStore = defineStore("counter", {
	state: () => ({
		count: 0,
		name: "Eduardo",
		age: 33,
		salary: 3000,
		lastName: "Buranov",
		arr:[],
		obj:{}
	}),
	getters: {
		doubleCount: (st) => st.count * 2,
		addAge: (st) => st.age++,
	},
	actions: {
		increment() {
			this.count += 5;
		},
		incrementAge() {
			this.age += 5;
		},
},
});
