<template>
  <div id="app">
    <div class="test"></div>
    <div class="test1" ></div>
    <!-- router-view将显示对应于 url 的组件。您可以将它放在任何地方以适应您的布局 -->
    <router-view></router-view>
  </div>
</template>
<script setup>
</script>

<style lang="scss">
#app {
  .test{
    width: 750px;
    height: 15px;
    background-color: aqua;
  }
  .test1{
    width: 100vw;
    height: 15px;
    background-color: rgb(255, 187, 0);
  }
}
</style>
