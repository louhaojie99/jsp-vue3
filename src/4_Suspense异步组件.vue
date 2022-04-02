<template>
	<div class="app">
		<!-- 异步组件 -->
		<Suspense>
			<template #default>
				<AsyncShow></AsyncShow>
			</template>
			<template #fallback>
				<h1>loading...</h1>
			</template>
		</Suspense>
	</div>
</template>

<script lang="ts">
import AsyncShow from './components/AsyncShow.vue';

export default {
	name: 'App',
	components: {
		AsyncShow,
	},
	setup() {
		return {};
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
