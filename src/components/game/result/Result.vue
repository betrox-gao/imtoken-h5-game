<template>
  <view class="result-com flex-col">
    <view class="status">
      <img
        v-if="isWin"
        class="win"
        src="../../../assets/images/win.png"
        alt=""
      />
      <text v-else class="lose">YOU LOSE</text>
    </view>
    <view class="score-box">
      <self-win v-if="isWin" class="win-box"></self-win>
      <self-lose v-else class="win-box"></self-lose>
    </view>
    <view class="result-button">
      <button class="btn-win" v-if="isWin" @click="onWinClick">
        {{ isLast ? $t("last_btn") : $t("result_win_btn") }}
      </button>
      <button class="btn-lose" v-else @click="onLoseClick">
        {{ $t("result_lose_btn") }}
        <!-- 装饰 -->
        <view class="block t-l"></view>
        <view class="block t-r"></view>
        <view class="block b-l"></view>
        <view class="block b-r"></view>
      </button>
    </view>
  </view>
</template>
<script>
import { mapState } from "vuex";
import SelfWin from "@/components/game/result/SelfWin.vue";
import SelfLose from "@/components/game/result/SelfLose.vue";

export default {
  components: { SelfWin, SelfLose },
  data() {
    return {
      lang: "en",
    };
  },
  props: ["isWin"],
  computed: {
    ...mapState({
      channel: state => state.channel,
    }),
    isLast() {
      return this.channel === "imToken";
    },
  },
  methods: {
    onWinClick() {
      this.$emit("win");
    },
    onLoseClick() {
      this.$emit("lose");
    },
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
.result-com {
  align-items: center;
  .status {
    margin-top: 10px;
    text-align: center;
    .win {
      display: block;
      // width: 287px;
      height: 70px;
    }
    .lose {
      font-family: "Audiowide";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      color: #e2fdfe;
    }
  }

  .score-box {
    // width: 310px;
    // height: 440px;
    width: 84vw;
    height: 110vw;
    flex-shrink: 0;
    margin-top: 10px;
    .win-box {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  .result-button {
    width: 86%;
    margin: 30px 0 70px 0;
    button {
      width: 80%;
      padding: 14px 0;
      margin: 0 auto;
      font-size: 20px;
      line-height: 1;
      border-radius: 0;
      font-family: "Audiowide";
      font-style: normal;
      text-align: center;

      &.btn-win {
        background: #e2fdfe;
        color: #2e5187;
        box-shadow: 0px 0px 5px #00fdff, 0px 0px 5px #00fdff,
          0px 0px 12px #00fdff, 0px 0px 10px #4ebfff, 0px 0px 32px #1eacff,
          0px 0px 55px #1e6aff;
      }
      &.btn-lose {
        position: relative;
        background: rgba(255, 255, 255, 0.24);
        border: 1px solid rgba(255, 255, 255, 0.24);
        backdrop-filter: blur(16px);
        color: #ffffff;

        .block {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.32);
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
  }
}
</style>
