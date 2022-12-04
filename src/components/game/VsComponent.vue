<template>
  <view class="vs-box">
    <img class="flash" src="../../assets/images/flash.png" alt="" />
    <view class="user user-l">
      <text class="user-name">{{ explorer.name }}</text>
      <hexagon-box class="explorer">
        <img class="avatar" :src="explorer.avatar" alt="" />
      </hexagon-box>
    </view>
    <view class="user user-r">
      <text class="user-name">{{ challenger.name }}</text>
      <hexagon-box class="challenger">
        <img class="avatar" :src="challenger.avatar" alt="" />
      </hexagon-box>
    </view>
  </view>
</template>
<script>
import { mapState } from "vuex";
import { CleanTimeOut } from "@/common/utils/tools.js";
import HexagonBox from "@/components/com/HexagonBox.vue";

const vsShowTime = new CleanTimeOut();

export default {
  components: { HexagonBox },
  data() {
    return {
      answeredNums: 4,
      userlist: [
        {
          avatar: require("../../assets/images/user/user1.png"),
          name: "Explorer",
          score: 90,
        },
        {
          avatar: require("../../assets/images/robot/robot2.png"),
          name: "Challenger",
          score: 30,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      explorer: state => state.explorer,
      challenger: state => state.challenger,
    }),
  },
  props: {
    VsDisappearTime: Number,
  },
  mounted() {
    vsShowTime.set(() => {
      this.$emit("hidden");
    }, this.VsDisappearTime);
  },
  beforeDestroy() {
    vsShowTime.clear();
  },
};
</script>
<style scoped lang="scss">
@mixin vsBox($bgColor) {
  width: 349px;
  height: 216px;
  background: $bgColor;
  border: 1px solid #2f50a9;
  box-sizing: border-box;
  transform: skew(-20deg);
  border-radius: 48px;
}

.vs-box {
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  .user {
    position: absolute;
    width: calc(300px / 2 * 1.732);
    height: 300px;
    top: 50%;
    z-index: 888;
    transform: translateY(-50%);

    .user-name {
      position: absolute;
      font-family: "Abel";
      font-size: 24px;
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
      top: 35%;
      right: 42%;
      .user-name {
        left: 50%;
        top: -20%;
      }
      .explorer {
        width: 100%;
        height: 100%;
        transform: rotate(25deg);
        .avatar {
          transform: translate(-50%, -50%) rotate(-25deg);
        }
      }
      animation: userLeft 1s linear;

      @keyframes userLeft {
        from {
          right: 100%;
        }
        to {
          right: 43%;
        }
      }

      &::before {
        position: absolute;
        content: "";
        width: 40px;
        height: 56px;
        top: -15%;
        left: 30%;
        border: 1px solid rgba(255, 255, 255, 0.32);
        border-right: none;
        border-bottom: none;
      }
    }
    &.user-r {
      left: 43%;
      top: 58%;
      .user-name {
        right: 45%;
        bottom: -20%;
      }
      .challenger {
        width: 100%;
        height: 100%;
        transform: rotate(-35deg);
        .avatar {
          transform: translate(-50%, -50%) rotate(25deg);
        }
      }

      animation: userRight 1s linear;

      @keyframes userRight {
        from {
          left: 100%;
        }
        to {
          left: 45%;
        }
      }

      &::before {
        position: absolute;
        content: "";
        width: 40px;
        height: 56px;
        bottom: -14%;
        right: 26%;
        border: 1px solid rgba(255, 255, 255, 0.32);
        border-left: none;
        border-top: none;
      }
    }
  }
  .flash {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 999;
    object-fit: cover;
  }
}

.animate__fadeIn {
  animation-name: fadeIn2;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
}
@-webkit-keyframes fadeIn2 {
  from {
    opacity: 0;
    transform: scale(4);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
