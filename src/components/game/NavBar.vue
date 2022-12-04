<template>
  <view class="navbar">
    <view class="voice-icon flex-row" @click="changeVoice">
      <img
        v-show="!hasVoice"
        class="voice-stop"
        src="../../assets/images/voice-stop.png"
        alt=""
      />
    </view>
  </view>
</template>
<script>
import { mapState } from "vuex";
import Store from "../../store/index";
// import { isWebView } from "@/common/platform/index.js";
import { bgAudio } from "@/pages/game/Audio.js";
import { CleanTimeOut } from "@/common/utils/tools.js";
const myTimeout = new CleanTimeOut();

export default {
  data() {
    return {
      // isWebView,
    };
  },
  computed: {
    ...mapState({
      hasVoice: state => state.hasVoice,
    }),
  },
  // mounted() {
  //   bgAudio.loop = true;
  //   if (this.hasVoice) {
  //     bgAudio.play();
  //   }
  // },
  // onLaunch: function () {
  //   console.log("lanch", this.hasVoice);
  //   if (this.hasVoice) {
  //     bgAudio.play();
  //   }
  // },
  methods: {
    changeVoice() {
      Store.commit("changeVioce", !this.hasVoice);
      if (this.hasVoice) {
        bgAudio.play();
      } else {
        bgAudio.stop();
      }
    },
  },
  // created() {
  //   // 兼容安卓百度浏览器只能有一个音频播放
  //   bgAudio.onPause(() => {
  //     if (this.hasVoice) myTimeout.set(() => bgAudio.play(), 2000);
  //   });
  //   // console.log(this.hasVoice);
  //   // if (this.hasVoice) {
  //   //   bgAudio.play();
  //   // } else {
  //   //   bgAudio.stop();
  //   // }

  //   // console.log("isVspage", /\/wordsExplosion\//i.test(`${this.$route.path}/`));
  //   // 背景音乐自动播放
  //   if (/\/wordsExplosion\//i.test(`${this.$route.path}/`))
  //     window.addEventListener("touchend", this.changeVoice, { once: true });
  // },
  beforeDestroy() {
    bgAudio.offPause();
    myTimeout.clear();
  },
};
</script>
<style lang="scss" secoped>
.navbar {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  width: 100%;
  top: -1px;
  left: 0;
  z-index: 9;
  box-sizing: border-box;
  .voice-icon {
    width: 32px;
    height: 32px;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    background: url("../../assets/images/voice-icon.png") no-repeat;
    background-size: 100% 100%;

    .voice-stop {
      width: 80%;
      object-position: center;
    }
  }
  .hidden {
    opacity: 0;
  }
}
</style>
