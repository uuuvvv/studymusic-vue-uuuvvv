<template>
  <div class="carousel-wrapper">
    <div class="carousel-content">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in dataList" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
/**
 * @todo 未来准备修改轮播的功能，当前只是展示，没有滑动切换的功能
 */
export default {
  name: 'carouselImg', // 轮播图组件
  data () {
    return {
      dataList: [{ img: '' }, {}, {}, {}, {}, {}, {}]
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  .carousel-content {
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
