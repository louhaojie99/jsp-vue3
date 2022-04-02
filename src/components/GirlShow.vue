<template>
	<img :src="result && result.imgUrl" alt="" width="100" height="100" />
</template>

<script lang="ts">
import { default as axios } from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
	async setup() {
		/*
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				return resolve({ result: 'JSPang.com' });
			}, 200);
		}).catch(error => {});
		*/
		const rowDate = await axios.get('https://apiblog.jspang.com/default/getGirl');
		return { result: rowDate.data };
	},
});
</script>

<style scoped></style>
