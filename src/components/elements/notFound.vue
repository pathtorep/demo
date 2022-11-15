<template>
	<div class="text-h1 text-red-lighten-2">
        <div class="text-h3 text-grey-lighten-2">
            {{router.params}}
        </div>
        No Such Sites is found !!!
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style></style>
