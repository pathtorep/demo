<template>
	<v-card class="text-h3 text-red-darken-2">
		Example for showing URLS:<br />
		<v-alert
			class="text-body-1"
			type="success"
			title="Router variable as Props"
			:value="true"
			text="router variable passed to the components as Props:"
		>
		</v-alert>
		<span class="text-green text-h2">
			{{ props.stringable }}
		</span>
	</v-card>
</template>

<script setup>
const props = defineProps({
	stringable: {
		type: String,
	},
});

</script>

<style></style>
