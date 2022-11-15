<template>
	<Suspense>
		<div>
			<h1 class="bg-red-lighten-3 bg-cyan-lighten-3">Second Component</h1>
			<delay :time="1500" />
		</div>
		<template #fallback>
			<wait-linear text="Opening" />
		</template>
	</Suspense>
</template>

<script setup></script>

<style></style>
