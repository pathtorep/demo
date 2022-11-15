<template>
	<v-card class="pa-5" variant="outlined">
		<router-view name="second"></router-view>
	</v-card>
	<v-card class="text-red-lighten-2 text-h3">
		Users by default component
		<v-row>
			<v-col cols="6" class="mx-auto my-5">
				<v-alert
					class="text-body-2"
					type="warning"
					title="Note on using pragrammatical routing !"
					text="On useing programmatical routing in route.push() function does not work named path with params! "
				>
				</v-alert>
			</v-col>
		</v-row>
		<form
			action=""
			@submit.prevent="
				router.push({ name: 'users', params: { userState: userState } })
			"
		>
			<input type="text" variant="outlined" v-model="userState" />
			{{ userState }}
		</form>
		<router-view></router-view>
	</v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const userState = ref();
</script>

<style></style>
