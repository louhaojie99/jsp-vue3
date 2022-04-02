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
    <Suspense>
      <template #default>
        <GirlShow></GirlShow>
      </template>
      <template #fallback>
        <h1>loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { onErrorCaptured } from "@vue/runtime-core";
import AsyncShow from "./components/AsyncShow.vue";
import GirlShow from "./components/GirlShow.vue";

export default {
  name: "App",
  components: {
    AsyncShow,
    GirlShow,
  },
  setup() {
    // 捕获异常
    onErrorCaptured((error) => {
      console.log("error====>", error);
      return true;
    });
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
