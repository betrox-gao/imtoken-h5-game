<template>
  <view class="m-dialog">
    <view class="dialog-box flex-col">
      <view class="question-title">
        {{ question.title }}
        <text class="choice">{{ $t("choice") }}</text>
      </view>
      <view class="options-box">
        <view
          class="option"
          v-for="(item, ind) in question.options"
          :key="`${question.id}_${ind}`"
          @click="onAnswerClick(item)"
          :class="[
            getClassName(item),
            isAnswered && question.answer == item.select && 'correct',
          ]"
        >
          <text class="des"> {{ item.des }}</text>

          <!-- 装饰 -->
          <view class="block t-l"></view>
          <view class="block t-r"></view>
          <view class="block b-l"></view>
          <view class="block b-r"></view>
          <hexagon-box class="hexagon hexagon-l">
            <img
              v-if="isAnswered && explorer.avatar && myAnswer === item.select"
              :src="explorer.avatar"
              alt=""
            />
            <img v-else src="../../assets/images/hexagon.png" alt="" />
          </hexagon-box>
          <hexagon-box class="hexagon hexagon-r">
            <img src="../../assets/images/hexagon.png" alt="" />
          </hexagon-box>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { errorAudio, correctAudio } from "@/pages/game/Audio.js";
import HexagonBox from "@/components/com/HexagonBox.vue";
import { mapState } from "vuex";
import Store from "../../store/index";
import { CleanTimeOut } from "@/common/utils/tools.js";

const dialogDisappearTime = 1000; //弹框消失时间
const timer = new CleanTimeOut();

export default {
  components: { HexagonBox },
  data() {
    return {
      isAnswered: false,
      myAnswer: "",
    };
  },
  props: {
    question: Object,
  },
  computed: {
    ...mapState({
      explorer: state => state.explorer,
      hasVoice: state => state.hasVoice,
      userScore: state => state.userScore,
      answeredNum: state => state.answeredNum,
    }),
    isCorrect() {
      return this.myAnswer === this.question.answer;
    },
    getClassName() {
      return item => {
        if (!this.myAnswer) return;
        let className = "";
        if (this.myAnswer === item.select) {
          if (this.isCorrect) {
            className += "correct";
          } else {
            className += "error";
          }
        }
        return className;
      };
    },
  },
  methods: {
    onAnswerClick(item) {
      if (this.isAnswered) return;
      this.isAnswered = true;

      const { select } = item;
      this.myAnswer = select;
      if (item.select === this.question.answer) {
        this.hasVoice && correctAudio.play();
        const userScore = this.userScore + this.question.score;
        Store.commit("setUserScore", userScore);
      } else {
        this.hasVoice && errorAudio.play();
      }

      const answeredNum = this.answeredNum + 1;
      Store.commit("setAnsweredNums", answeredNum);
      timer.set(() => {
        this.isAnswered = false;
        this.myAnswer = "";
        this.$emit("cancel");
        timer.clear();
      }, dialogDisappearTime);
    },
  },
};
</script>
<style lang="scss" scoped>
.m-dialog {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  // background: rgba(0, 0, 0, 0.1);
  // backdrop-filter: blur(20px);
}
.dialog-box {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: calc(100% - 150px);
  top: 150px;
  align-items: center;
  // padding-bottom: 20px;
  // background-color: transparent;
  // background-color: rgba(26, 26, 33, 0.3);
  background-color: rgba(0, 0, 0, 0.8);
  // transform: scale(0.9);

  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.12);
  .question-title {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    min-height: 180px;
    padding: 60px 40px;
    font-family: "PingFang SC";
    font-size: 15px;
    color: #ffffff;
    white-space: break-spaces;
    background: url("../../assets/images/answer-board.png") no-repeat;
    background-size: 100% 100%;
    flex-shrink: 0;
    .choice {
      position: absolute;
      top: 36px;
      left: 50%;
      transform: translateX(-50%);
      font-family: "Abel";
      font-size: 12px;
    }
  }
  .options-box {
    overflow: auto;
    flex: 1;

    box-sizing: border-box;
    width: 100%;
    padding: 0px 26px 0px;
    .option {
      box-sizing: border-box;
      // display: flex;
      position: relative;
      // justify-content: space-between;
      // align-items: center;
      margin-bottom: 10px;
      padding: 10px 24px;
      font-weight: 600;
      font-size: 13px;
      color: #fefefe;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.24);
      backdrop-filter: blur(16px);
      cursor: pointer;
      font-family: "PingFang SC";
      text-align: center;
      white-space: break-spaces;
      &.correct-ans {
        border: 2px solid #69f9a2;
      }
      &.correct {
        background: rgba(54, 188, 218, 0.4);
        color: #2effc0;
      }
      &.error {
        // background-color: rgba(203, 25, 25, 0.32);
        border: 1px solid rgba(255, 255, 255, 0.24);
        color: #e04f58;
        background: rgba(203, 25, 25, 0.32) url("../../assets/images/wrong.png")
          no-repeat;
        background-size: 100% 100%;
        .block {
          background-color: rgba(255, 43, 43, 0.54);
        }
      }

      .icon {
        position: absolute;
        right: 16px;
        width: 74px;
        height: 42px;
      }
      .great {
        background-position: 4px -384px;
      }
      .error {
        background-position: 4px -516px;
      }

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

      .hexagon {
        position: absolute;

        top: 50%;
        transform: translateY(-50%);
        height: 24px;
        width: calc(24px / 2 * 1.732);
        &.hexagon-l {
          left: -12px;
        }
        &.hexagon-r {
          right: -12px;
        }
        img {
          height: 100%;
        }
        // width: calc(24px / 2 * 1.732);
        // background: rgb(11, 11, 11);
        // border: 2px solid rgba(255, 255, 255, 0.24);
      }
    }
  }
}
</style>
