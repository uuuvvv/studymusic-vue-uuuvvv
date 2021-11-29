<template>
  <div id="app">
    <div class="test"></div>
    <div class="test1" ></div>
    <!-- router-view将显示对应于 url 的组件。您可以将它放在任何地方以适应您的布局 -->
    <!-- <router-view></router-view> -->
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-pingjia"></use>
    </svg>
    <carouselImg/>
    <div class="bottom-index">
      <playMusic/>
      <tabIconApp/>
    </div>
  </div>
</template>
<script setup>
import tabIconApp from './components/uiComponents/tabIconApp.vue'
import carouselImg from './components/uiComponents/carouselImg.vue'
import playMusic from './components/uiComponents/playMusic.vue'
</script>
<script>

</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  position: relative;
  color: rgb(231, 47, 93);
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
  .bottom-index{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>
