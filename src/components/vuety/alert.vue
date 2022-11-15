<template>
	<div v-scroll>
		<v-alert
			title="Title of the Alert"
			text="any text that containes alert content"
			closable
			icon="mdi-rocket"
			variant="tonal"
		></v-alert>

		<v-alert class="my-1" type="error"
			>This is Danger aler(type=error)</v-alert
		>
		<v-alert class="my-1" type="warning"
			>This is Danger aler(type=warning)</v-alert
		>
		<v-alert class="my-1" type="success"
			>This is Danger aler(type=success)</v-alert
		>
		<v-alert class="my-1" type="info"
			>This is Danger aler(type=info)</v-alert
		>

		<v-alert class="my-1" density="compact" closable
			>Alert density property is compact(density=compact)</v-alert
		>

		<!-- alert with borders -->
		<v-alert
			class="mt-4"
			type="warning"
			border="bottom"
			border-color="dark accent-4"
			elevation="2"
			>border=bottom, border-color=dark accent-4 elvation-2</v-alert
		>

		<v-alert
			class="mt-4"
			type="success"
			border="end"
			border-color="danger accent-4"
			elevation="5"
			>border=end, border-color=danger accent-4 elvation-5</v-alert
		>

		<v-alert
			prominent
			class="mt-4"
			type="success"
			border="end"
			border-color="danger accent-4"
			elevation="5"
			>border=end, border-color=danger accent-4 elvation-5
			PROMINENT</v-alert
		>
	</div>
</template>

<script setup>
import { scroll as vScroll } from "../../plugins/directives";
</script>

<style></style>
