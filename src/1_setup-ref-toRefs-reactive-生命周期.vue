<template>
	<div class="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<h2>欢迎，来到大浪淘沙洗浴中心！</h2>
		<h3>请选择一位美女为您服务！</h3>
		<button
			v-for="(item, index) in girls"
			:key="index"
			@click="selectGirlFun(index)"
		>
			{{ index }}:{{ item }}
		</button>
		<div>您选择了，【{{ selectGirl }}】为您服务！</div>
		<div>
			<button @click="overAction">点餐完毕</button>
		</div>
		<div>{{ overText }}</div>
	</div>
</template>

<script lang="ts">
/**
 * 1、setup()
 * 2、ref()
 * 3、reactive()函数优化程序
 * 4、生命周期和钩子函数
 *    - setup == （beforeCreate 和 create）
 *    -
 */
import {
	defineComponent,
	ref,
	reactive,
	toRefs,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
	onActivated,
	onDeactivated,
	onErrorCaptured,
	onRenderTracked,
	onRenderTriggered,
	watch,
} from 'vue';
interface DataProps {
	girls: string[];
	selectGirl: string;
	selectGirlFun: (index: number) => void;
}

export default {
	name: 'App',
	setup() {
		console.log('1-开始创建组件-----setup()');

		const data: DataProps = reactive({
			girls: ['唐嫣', '杨幂', '迪丽热巴'],
			selectGirl: '',
			selectGirlFun: function(index: number) {
				data.selectGirl = data.girls[index];
			},
		});
		const refData = toRefs(data);
		const overText = ref('红浪漫');
		const overAction = () => {
			overText.value = '点餐完成|' + overText.value;
			// 	document.title = overText.value;
		};
		watch([overText, () => data.selectGirl], (newVal, oldVal) => {
			console.log('newVal---------', newVal);
			console.log('oldVal---------', oldVal);
			// document.title = overText.value;
		});

		// const girls = ref(['唐嫣', '杨幂', '迪丽热巴'])
		// const selectGirl = ref("")
		// const selectGirlFun = (index: number) => {
		//   selectGirl.value = girls.value[index]
		// }

		// 生命周期
		onBeforeMount(() => {
			console.log('2-组件挂载到页面之前执行-----onBeforeMount()');
		});
		onMounted(() => {
			console.log('3-组件挂载到页面之后完毕-----onMounted()');
		});
		onBeforeUpdate(() => {
			console.log('4-组件更新之前执行-----onBeforeUpdate()');
		});
		onUpdated(() => {
			console.log('5-组件更新之后执行-----onUpdated()');
		});
		onBeforeUnmount(() => {
			console.log('6-组件卸载之后执行-----onBeforeUnmount()');
		});
		onUnmounted(() => {
			console.log('7-组件销毁之后执行-----onUnmounted()');
		});
		onActivated(() => {
			console.log('8-保存组件状态-----onActivated()');
		});
		onDeactivated(() => {
			console.log('9-不保存组件状态-----onDeactivated()');
		});
		onErrorCaptured(() => {
			console.log('10-捕获异常-----onErrorCaptured()');
		});
		onRenderTracked(event => {
			console.log('状态跟踪钩子函数------', event);
		});
		onRenderTriggered(event => {
			console.log('状态跟踪钩子函数------', event);
		});
		/*

		 */

		return {
			// girls,
			// selectGirl,
			// selectGirlFun,

			...refData,
			overText,
			overAction,
		};
	},
	/*
	beforeCreate() {
		console.log('1.1-组件创建之前-------beforeCreate()');
	},
	created() {
		console.log('2.1-组件创建之后-------beforeCreate()');
	},
	befoureMoute() {
		console.log('3.1-组件挂载之前-------beforeCreate()');
	},
	mounted() {
		console.log('4.1-组件挂载之后-------beforeCreate()');
	},
	befoureUpdate() {
		console.log('5.1-组件更新之前-------beforeCreate()');
	},
	updated() {
		console.log('6.1-组件更新之后-------beforeCreate()');
	},
	*/
	/** 生命周期钩子已弃用 */
	// beforeDestroy() {
	//  console.log('7.1-组件销毁之前-------beforeCreate()');
	// },
	// destroyd() {
	// 	console.log('8.1-组件销毁之后-------beforeCreate()');
	// },
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
