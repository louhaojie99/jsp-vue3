<template>
	<div class="app">
		<hr />
		<div v-if="loading">loading....</div>

		<!-- 
			挂载到index.html模板, modal dom节点上面	
		-->
		<teleport to="#modal">
			<Modal></Modal>
		</teleport>
		<img v-if="loaded" :src="result.imgUrl" width="100" height="100" />
	</div>
</template>

<script lang="ts">
/**
 * 后端服务接口请求
 */
import userURLAxios from './hooks/useURLAxios';
import Modal from './components/Modal.vue';

export default {
	name: 'App',
	components: {
		Modal,
	},
	setup() {
		const { result, loading, loaded } = userURLAxios(
			'https://apiblog.jspang.com/default/getGirl'
		);
		return {
			result,
			loading,
			loaded,
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
