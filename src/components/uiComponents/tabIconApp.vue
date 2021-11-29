<template>
  <div class="tab-icon-wrapper">
    <div
      class="tab-icon-content"
      v-for="(item, index) in dataList"
      :key="index"
    >
      <div @click="toClickIconFn(item, index)">
        <div class="tab-icon-img">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.img"></use>
          </svg>
        </div>
        <span>{{ item.type }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabIconApp',
  data () {
    return {
      dataList: [
        { img: '#icon-chaxun', type: '发现' },
        { img: '#icon-guanggao', type: '广播' },
        { img: '#icon-guanyuwomen', type: '我的' },
        { img: '#icon-wodeshoucang', type: '收藏' },
        { img: '#icon-tianqiyin', type: '云圈' }
      ]
    }
  },
  methods: {
    toClickIconFn (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-icon-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
  background-color: rgb(248, 243, 243);
  display: flex;
  justify-content: space-between;
  .tab-icon-content {
    // display: flex;
    // flex-direction:column;
    // justify-content: center;
    // align-items: center;
    text-align: center;
    margin: 15px 0;
    .tab-icon-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      // background-color: chartreuse;s
      overflow: hidden;
      .icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        // background-color: chartreuse;
      }
    }
    span {
      width: 70px;
      font-size: 12px;
    }
  }
}
</style>
