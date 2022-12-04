<template>
  <view>
    <view class="user user-l">
      <view class="user-msg flex-col">
        <text class="name">{{ explorer.name }}</text>
        <text class="score">{{ userScore }}</text>
      </view>
      <hexagon-box class="explorer">
        <img class="avatar" :src="explorer.avatar" alt="" />
      </hexagon-box>
    </view>
    <view class="user user-r">
      <view class="user-msg flex-col">
        <text class="name">{{ challenger.name }}</text>
        <text class="score">{{ robotScore }}</text>
      </view>
      <hexagon-box class="challenger">
        <img class="avatar" :src="challenger.avatar" alt="" />
      </hexagon-box>
    </view>
  </view>
</template>
<script>
import HexagonBox from "@/components/com/HexagonBox.vue";
import { mapState } from "vuex";
export default {
  components: { HexagonBox },
  data() {
    return {};
  },
  props: [""],
  computed: {
    ...mapState({
      explorer: state => state.explorer,
      challenger: state => state.challenger,
      channel: state => state.channel,
      history: state => state.history,
    }),
    currentHistory() {
      return this.history[this.channel];
    },
    userScore() {
      return this.currentHistory.score;
    },
    robotScore() {
      return this.currentHistory.robotScore;
    },
  },
  methods: {},

  mounted() {},
};
</script>
<style scoped lang="scss">
.user {
  position: absolute;

  z-index: 888;

  .name {
    width: 130px;
    font-family: "Abel";
    font-size: 22px;
    color: #ffffff;
  }
  .score {
    font-family: "Audiowide";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 28px;
    color: #ffffff;
  }

  .avatar {
    position: absolute;
    display: block;
    width: 115%;
    top: 50%;
    left: 50%;
  }
  &.user-l {
    top: 50%;

    left: 30px;
    width: calc(130px / 2 * 1.732);
    height: 130px;
    z-index: 888;
    .user-msg {
      position: absolute;
      left: 70px;
      bottom: -80px;
      .name,
      .score {
        color: rgba($color: #ffffff, $alpha: 0.7);
      }
    }
    .explorer {
      width: 100%;
      height: 100%;
      transform: rotate(25deg);
      .avatar {
        transform: translate(-50%, -50%) rotate(-25deg);
      }
    }

    &::before {
      position: absolute;
      content: "";
      width: 34px;
      height: 50px;
      bottom: -50px;
      left: 30px;
      border: 1px solid rgba(255, 255, 255, 0.32);
      border-top: none;
      border-right: none;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: calc(130px / 2 * 1.732);
      height: 130px;
      background-color: rgba(0, 0, 0, 0.5);
      transform: rotate(-35deg);
      clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
    }
  }
  &.user-r {
    right: 24px;
    top: 20%;
    width: calc(210px / 2 * 1.732);
    height: 210px;
    z-index: 999;
    .user-msg {
      position: absolute;
      right: 90px;
      top: -75px;
    }
    .challenger {
      width: 100%;
      height: 100%;
      transform: rotate(-35deg);
      .avatar {
        transform: translate(-50%, -50%) rotate(34deg);
      }
    }

    &::before {
      position: absolute;
      content: "";
      width: 34px;
      height: 50px;
      top: -50px;
      right: 40px;
      border: 1px solid rgba(255, 255, 255, 0.32);
      border-left: none;
      border-bottom: none;
    }
  }
}
</style>
