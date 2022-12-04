<template>
  <view class="vs-page">
    <nav-bar v-show="vsHidden" :isQapage="isQapage"></nav-bar>
    <VsCom
      class="vs-box"
      v-if="!vsHidden"
      @hidden="hidden"
      :VsDisappearTime="VsDisappearTime"
    />
    <timer-com
      v-if="vsHidden"
      class="animate__animated animate__slideInDown"
    ></timer-com>
    <question-bubble class="question-bubble" v-if="vsHidden"></question-bubble>
  </view>
</template>
<script>
import VsCom from "@/components/game/VsComponent";
import TimerCom from "@/components/game/TimerCom";
import QuestionBubble from "@/components/game/QuestionBubble.vue";

import { mapState } from "vuex";
import Store from "../../store/index";
import NavBar from "@/components/game/NavBar";
import "./Audio.js";
import "./game.scss";
import "animate.css";

const VsDisappearTime = 2000; // vs组件消失时间

export default {
  data() {
    return {
      vsHidden: false,
      time: 0, //游戏时间
      overTime: 0,
      VsDisappearTime,
      isQapage: true,
      startTime: 0,
    };
  },
  computed: {
    ...mapState({
      answeredNum: state => state.answeredNum,
      robotScore: state => state.robotScore,
      userScore: state => state.userScore,
      channel: state => state.channel,
      history: state => state.history,
    }),
    currentHistory() {
      return this.history[this.channel];
    },
    qTotalNums() {
      const q = this.$t("questionList")[this.channel] || null;
      return q ? q.nums : 0;
    },
  },
  watch: {
    answeredNum(newVal) {
      clearTimeout(this.jumpTimer);
      // 已经答题数目 等于 题目总数，说明答题结束
      if (newVal === this.qTotalNums) {
        localStorage.setItem("totalScore", this.userScore);
        const now = new Date().getTime();
        Store.commit("setHistory", {
          channel: this.channel,
          duration: now - this.startTime,
          score: this.userScore,
          isSubmit: false,
          showAward: false,
        });

        this.jumpTimer = setTimeout(() => {
          const url = `/pages/game/wordsExplosionResult`;
          uni.redirectTo({
            url,
          });
          if (this.robotScore < 70) {
            // 使机器人的分数 结算的时候都为70
            Store.commit("setRobotScore", 70);
          }
        }, 1500);
      }
    },
  },
  methods: {
    hidden() {
      this.vsHidden = true;
    },
  },
  beforeMount() {
    Store.commit("setAnsweredNums", 0);
    Store.commit("setRobotScore", 0);
    // uni.setNavigationBarTitle({
    //   // 修改头部标题
    //   title: this.$t("game_name"),
    // });
  },

  mounted() {
    this.startTime = new Date().getTime();

    if (this.currentHistory) {
      const { score, isSubmit, duration } = this.currentHistory;
      // 用户答过题 并且成绩符合领奖标准
      if (score >= 80) {
        if (isSubmit) {
          // 提交过了 去往历史记录页面
          this.$emit("onShowHistoryClick", {
            duration,
            score,
          });
        } else {
          const url = "/pages/game/wordsExplosionResult";
          uni.redirectTo({ url });
        }
      } else {
        // 新用户 无需操作
      }
    }
  },
  beforeDestroy() {
    clearTimeout(this.jumpTimer);
    if (this.robotScore < 70) {
      Store.commit("setRobotScore", 70);
    }
  },
  components: { VsCom, TimerCom, QuestionBubble, NavBar },
};
</script>
<style scoped lang="scss">
.vs-page {
  // position: absolute;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: url("../../assets/images/galaxy.png") no-repeat;
  background-size: 100% 100%;
  .question-bubble {
    width: 100%;
    height: calc(100% - 160px);
    margin-top: 160px;
  }
  .vs-box {
    z-index: 2;
  }
}
</style>
