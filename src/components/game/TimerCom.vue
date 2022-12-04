<template>
  <view class="score-box flex-row">
    <view class="user flex-row user-l">
      <!-- <img class="avatar" :src="firstUser.avatar" alt="" /> -->
      <hexagon-box class="avatar-box hexagon-l">
        <img class="avatar" :src="explorer.avatar" alt="" />
      </hexagon-box>
      <view class="name-score flex-col">
        <text class="username">{{ explorer.name }}</text>
        <text class="score">{{ userScore }}</text>
      </view>
    </view>
    <!-- <view class="vs"></view> -->
    <img class="vs" src="../../assets/images/vs.png" alt="" />
    <view class="user flex-row user-r">
      <view class="name-score flex-col">
        <text class="username">{{ challenger.name }}</text>
        <text class="score">{{ robotScore }}</text>
      </view>
      <hexagon-box class="avatar-box hexagon-r">
        <img class="avatar" :src="challenger.avatar" alt="" />
      </hexagon-box>
    </view>
    <view class="answer-points flex-row">
      <view
        v-for="i in qTotalNums"
        :key="i"
        :class="['point', answeredNum >= i && 'answered']"
      ></view>
    </view>
  </view>
</template>
<script>
import { mapState } from "vuex";
import HexagonBox from "@/components/com/HexagonBox.vue";

export default {
  components: { HexagonBox },
  props: {
    time: Number,
  },
  mounted() {
    // setInterval(() => this.answeredNums++, 1000);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      explorer: state => state.explorer,
      challenger: state => state.challenger,
      userScore: state => state.userScore,
      robotScore: state => state.robotScore,
      answeredNum: state => state.answeredNum,
      channel: state => state.channel,
    }),
    qTotalNums() {
      const q = this.$t("questionList")[this.channel] || null;
      return q ? q.nums : 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.score-box {
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  height: 120px;
  width: 100%;
  padding: 0 10px;
  left: 0;
  top: 40px;
  justify-content: space-between;

  z-index: 2;
  align-items: center;
  background: url("../../assets/images/score-bg.png") no-repeat;
  background-size: 100%;
  .user {
    &.user-r {
      .score {
        text-align: right;
      }
    }

    .hexagon-l {
      margin-right: 10px;
    }
    .hexagon-r {
      margin-left: 10px;
    }
    .avatar-box {
      position: relative;
      flex-shrink: 0;
      .avatar {
        position: absolute;
        display: block;
        width: 115%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .name-score {
      justify-content: center;
      .username {
        font-family: "Abel";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
      }
      .score {
        font-family: "Audiowide";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
  .vs {
    position: absolute;
    top: 55%;
    left: 50%;
    width: 160px;
    height: 120px;
    transform: translate(-50%, -50%);
    // background: url(../../assets/images/vs.png);
    // background-position: center;
    // background-size: 100% 100%;
  }
  .answer-points {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    .point {
      width: 3px;
      height: 3px;
      border: 1px solid rgba(255, 255, 255, 0.72);
      transform: rotate(-45deg);
      &.answered {
        background: #e2fdfe;
        box-shadow: 0px 0px 5px #ffffff, 0px 0px 5px #00fdff,
          0px 0px 5px #00fdff, 0px 0px 12px #00fdff, 0px 0px 10px #4ebfff,
          0px 0px 32px #1eacff, 0px 0px 32px #1eacff, 0px 0px 55px #1e6aff;
      }
    }
    .point + .point {
      margin-left: 6px;
    }
  }
}
</style>
