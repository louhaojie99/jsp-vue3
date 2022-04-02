<template>
	<div id="modal-center">
		<h2>JSPang.com</h2>
	</div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
#modal-center {
	position: fixed;
	left: 50%;
	top: 50%;
	width: 200px;
	height: 200px;
	border: 2px solid black;
	background: pink;
	transform: translate(-50%, -50%);
	z-index: 999;
}
</style>
