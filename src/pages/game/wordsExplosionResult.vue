<template>
  <view class="result-page">
    <view
      class="container flex-col no-scroll-bar"
      :style="`transform-origin: top; transform: scale(${scale})`"
    >
      <img class="logo" src="../../assets/images/logo.png" alt="" />
      <Result
        class="notice"
        v-show="!showAward"
        @win="onWinClick"
        @lose="onLoseClick"
        :isWin="isWin"
      />
      <!-- 成功后不再显示领取奖励页面，直接跳回答题表单 -->
      <!-- <receive-award
        v-show="showAward"
        class="award"
        @submit="onSubmitStatus"
      ></receive-award> -->
    </view>
  </view>
</template>

<script>
import Result from "@/components/game/result/Result";
import { mapState } from "vuex";
import Store from "../../store/index";
import "./game.scss";
import HexagonBox from "@/components/com/HexagonBox.vue";
import SelfWin from "@/components/game/result/SelfWin.vue";
import SelfLose from "@/components/game/result/SelfLose.vue";
import receiveAward from "@/components/game/result/receiveAward.vue";

export default {
  data() {
    return {
      lang: "en",
      showLoginDialog: false,
      showSaveFinishDialog: false,
      isLogin: false,
      // 答题情况
      questions: [],
      // 胜利or失败状态
      status: "success",
      scale: 1,
    };
  },

  computed: {
    ...mapState({
      channel: state => state.channel,
      history: state => state.history,
    }),
    currentHistory() {
      return this.history[this.channel];
    },
    isWin() {
      return this.currentHistory.score > this.currentHistory.robotScore;
    },
    showAward() {
      return this.currentHistory.showAward;
    },
  },
  methods: {
    onWinClick() {
      const { score, isSubmit, duration, robotScore } = this.currentHistory;
      Store.commit("setHistory", {
        channel: this.channel,
        score,
        isSubmit,
        // 是否显示领取奖励页面
        showAward: false,
        duration,
        robotScore,
      });
      const url = "/pages/game/supplierPage";
      uni.redirectTo({ url });
    },
    onLoseClick() {
      const url = "/pages/game/supplierPage";
      uni.redirectTo({ url });
    },
    onSubmitStatus() {
      const { score, showAward, duration, robotScore } = this.currentHistory;
      Store.commit("setHistory", {
        channel: this.channel,
        score,
        isSubmit: true,
        showAward,
        duration,
        robotScore,
      });
    },
  },
  created() {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const rate = screenWidth / screenHeight;
    console.log(rate);
    if (rate) {
      rate > 0.5 && (this.scale = 0.8);
      rate > 0.7 && (this.scale = 0.7);
    }
  },
  beforeMount() {
    // uni.setNavigationBarTitle({
    //   // 修改头部标题
    //   title: this.$t("game_name"),
    // });
  },
  components: { HexagonBox, SelfWin, SelfLose, Result, receiveAward },
};
</script>

<style lang="scss" scoped>
.result-page {
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  color: #ffffff;

  background: url("../../assets/images/galaxy.png") no-repeat;
  background-size: 100% 100%;
  .container {
    // width: 100%;
    overflow: hidden;
    height: 140%;
    align-items: center;
  }
  .logo {
    display: block;
    width: 100px;
    margin: 10% auto 0;
  }

  .notice,
  .award {
    width: 100%;
    flex: 1;
  }
  .content {
    // height: 100%;
    flex: 1;
  }
}
</style>
