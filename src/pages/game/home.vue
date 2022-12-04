<template>
  <view class="game-home flex-col">
    <nav-bar></nav-bar>
    <view class="top">
      <img class="logo" src="../../assets/images/logo.png" alt="" />
      <text>{{ $t("game_name") }}</text>
    </view>
    <view class="btn-box bottom">
      <button class="start-btn" @click="createRoom()">
        {{ $t("begin") }}
        <view class="block t-l"></view>
        <view class="block t-r"></view>
        <view class="block b-l"></view>
        <view class="block b-r"></view>
      </button>
    </view>
    <img class="ball ball-1" src="../../assets/images/ball-1.png" alt="" />
    <img class="ball ball-2" src="../../assets/images/ball-2.png" alt="" />
    <img class="ball ball-3" src="../../assets/images/ball-3.png" alt="" />
    <img class="ball ball-4" src="../../assets/images/ball-4.png" alt="" />
  </view>
</template>
<script>
import "./game.scss";
import { mapState } from "vuex";
import { isWebView } from "@/common/platform/index.js";
import NavBar from "@/components/game/NavBar";

export default {
  components: { NavBar },
  data() {
    return {
      isWebView,
      isRobot: true,
    };
  },
  // computed: {
  //   ...mapState({
  //     explorer: state => state.explorer,
  //     challenger: state => state.challenger,
  //     history: state => state.history,
  //   }),
  // },
  methods: {
    createRoom() {
      const url = `/pages/game/supplierPage${location.search}`;
      uni.redirectTo({
        url,
      });
    },
  },
  beforeMount() {
    // uni.setNavigationBarTitle({
    //   // 修改头部标题
    //   title: this.$t("game_name"),
    // });
  },
};
</script>
<style scoped lang="scss">
.game-home {
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  background: url("../../assets/images/galaxy.png") no-repeat;
  background-size: 100% 100%;

  .top {
    margin-top: 200px;
    text-align: center;
    z-index: 9999;
    .logo {
      display: block;
      width: 100px;
      margin: 0 auto;
    }
    text {
      display: block;
      margin-top: 20px;
      line-height: 35px;
      font-family: "Audiowide";
      font-style: normal;
      font-weight: 400;
      font-size: 36.4654px;

      color: #ffffff;

      text-shadow: 0px 0px 10px #4ebfff, 0px 0px 32px #1eacff,
        0px 0px 55px #1e6aff;
    }
  }
  .bottom {
    margin-bottom: 30px;
    z-index: 9999;
    .start-btn {
      position: relative;
      width: 224px;
      margin-bottom: 160px;
      line-height: 20px;
      padding: 14px 0;
      font-family: "Audiowide";
      font-size: 20px;
      border-radius: 0;
      color: #ffffff;
      backdrop-filter: blur(16px);
      background: rgba(255, 255, 255, 0.24);
      border: 1px solid rgba(255, 255, 255, 0.24);
      .block {
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: #ffffff;
        &.t-l {
          top: -1px;
          left: -1px;
        }
        &.t-r {
          top: -1px;
          right: -1px;
        }
        &.b-l {
          bottom: -1px;
          left: -1px;
        }
        &.b-r {
          bottom: -1px;
          right: -1px;
        }
      }
    }
  }

  .ball {
    position: fixed;
    z-index: 999;
    &.ball-1 {
      width: 80px;
      height: 80px;
      top: 100px;
      left: 40px;
      animation: ball1 linear 1s;
    }
    @keyframes ball1 {
      from {
        left: -80px;
      }
      to {
        left: 40px;
      }
    }
    &.ball-2 {
      width: 180px;
      height: 180px;
      top: 320px;
      right: -40px;
      animation: ball2 linear 1s;
    }
    @keyframes ball2 {
      from {
        right: -180px;
        width: 40px;
        height: 40px;
      }
      to {
        right: -40px;
        width: 180px;
        height: 180px;
      }
    }
    &.ball-3 {
      width: 400px;
      height: 400px;
      bottom: -200px;
      left: -200px;
      animation: ball3 linear 1s;
    }
    @keyframes ball3 {
      from {
        bottom: -400px;
        left: -400px;
      }
      to {
        bottom: -200px;
        left: -200px;
      }
    }
    &.ball-4 {
      width: 1500px;
      height: 1500px;
      bottom: -1400px;
      left: -400px;
      animation: ball4 linear 1s;
    }
    @keyframes ball4 {
      from {
        bottom: -1600px;
      }
      to {
        bottom: -1400px;
      }
    }
  }
}

.error {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 1px 0px #162b64; /* no */
  filter: drop-shadow(#162b64 1px 0 0) drop-shadow(#162b64 0 1px 0)
    drop-shadow(#162b64 -2px 0 0) drop-shadow(#162b64 0 -1px 0); /* no */
  margin-bottom: 16px;
}
.goapp {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 1px 0px #2f50a9; /* no */
  filter: drop-shadow(#2f50a9 1px 0 0) drop-shadow(#2f50a9 0 1px 0)
    drop-shadow(#2f50a9 -2px 0 0) drop-shadow(#2f50a9 0 -1px 0); /* no */
  margin-bottom: 24px;
}
</style>
