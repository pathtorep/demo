<template>
	<div class="text-h4 text-red">Path is String</div>
	<div>Using as a props: {{str}}</div>
</template>

<script setup>
const { defineProps }=require("vue");

const props = defineProps({str})
</script>

<style></style>
