import { defineStore } from "pinia";
import { useStore } from "./pinia";
export const useStore2 = defineStore("secondStore", {
	state: () => ({
		count: 0,
		name: "John",
		lastName: "Doe",
		age: 33,
		salary: 3000,
		address: "USA, Chicago",
	}),
	// Notes: getters shuld RETURN any value!!!
	// In Option API use THIS keyword!!!
	getters: {
		addOne(st) {
			return st.count += 1;   // st argiments as store
		},
		multTwo() {
			return this.addOne * 2;
		},
		gatherAll(){
			return this.addOne + this.multTwo
		},
		// Using from another store: (that imorted above)
		otherStore(){
			const storeOther = useStore();
			return useStore()
		}
	},
	actions: {
		setCount(){
			this.count = Math.floor(Math.random()*10)
		},
		setSalary(){
			this.salary = Math.floor(this.salary*Math.random())
		},
		setAge(){
			this.age = Math.floor(this.age*Math.random())
		},
	},
});