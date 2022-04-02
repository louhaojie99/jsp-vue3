<template>
	<div class="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<h3>当前时间：{{ nowTime }}</h3>
		<button @click="getNowTime">Now Time</button>
	</div>
</template>

<script lang="ts">
import { nowTime, getNowTime } from './hooks/useNowTime';

export default {
	name: 'App',
	setup() {
		return {
			nowTime,
			getNowTime,
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
