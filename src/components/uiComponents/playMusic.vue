<template>
  <div class="play-wrapper">
    <div class="play-content" >
      <div class="play-img"><img src="" alt="" srcset=""></div>
      <div class="play-song-name"><span>{{songName}}</span></div>
      <div class="play-or-stop" @click="playOrStopMusicFn">
        <svg class="icon" aria-hidden="true" >
            <use :xlink:href="!isPlay?'#icon-zanting3':'#icon-tingzhizanting'"></use>
        </svg>
      </div>
      <div class="play-menu-tab">
        <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-caidan"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'palyMusic',
  data () {
    return {
      isPlay: false,
      songName: 'singsongNingsongNingsongNingsongNingsongNingsongNingsongNingsongName'
    }
  },
  methods: {
    playOrStopMusicFn () {
      console.log('chufa')
      this.isPlay = !this.isPlay
      console.log(this.isPlay)
    }
  }
}
</script>

<style lang="scss" scoped>
.play-wrapper{
  background-color: rgba(246, 222, 222, 0.7);
  padding: 10px 0;
  .play-content{
    display: flex;
    align-items: center;
    .play-img{
      width: 60px;
      height: 60px;
      background-color: royalblue;
      border-radius: 10px;
      margin-left: 20px;
    }
    .play-song-name{
      margin-left: 20px;
      width: 60%;
      overflow: hidden;
      span{
        line-height: 60px;
      }
    }
    .play-or-stop{
      margin-left: 20px;
      .icon{
        width: 60px;
        height: 60px;
      }
    }
    .play-menu-tab{
      margin-left: 30px;
      .icon{
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>
