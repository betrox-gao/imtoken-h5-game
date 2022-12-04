<template>
  <view class="question-bubble">
    <view
      :class="['port', `port-${i.class}`]"
      :ref="`port-${i.order}`"
      @click="onClick(i)"
      v-for="(i, idx) in $t('ports')"
      :key="i.unique"
    >
      <view v-if="idx + 1 <= qTotalNums" class="name">{{ i.unique }}</view>
      <view v-if="idx + 1 <= qTotalNums" class="img-box"></view>
    </view>

    <AnswerDialog :question="question" v-show="showDialog" @cancel="cancel" />
  </view>
</template>
<script>
import Store from "../../store/index";
import { mapState } from "vuex";
import AnswerDialog from "@/components/game/AnswerDialog";
export default {
  components: { AnswerDialog },
  data() {
    return {
      showDialog: false,
      question: {},
      robotTotal: 70,
      robotScore: 0,
      timer: null,
      interval: null,
      jumpTimer: null,
    };
  },
  computed: {
    ...mapState({
      channel: state => state.channel,
    }),
    questions() {
      const q = this.$t("questionList")[this.channel] || null;
      return q;
    },
    qTotalNums() {
      return this.questions ? this.questions.nums : 0;
    },
  },
  methods: {
    onClick(item) {
      const { order } = item;
      const pos = `port-${order}`;
      this.$nextTick(() => {
        const el = this.$refs[pos][0].$el;
        if (el) {
          el.style.visibility = "hidden";
          el.style.opcity = 0;
        }
        const { questions } = this.questions;
        // 找到题目组中对应的题目
        const question = questions.find(el => el.id === order);
        if (question) {
          this.question = question;
          this.showDialog = true;
        }
      });
    },
    cancel() {
      this.showDialog = false;
    },
    robotGetScore() {
      this.timer = setTimeout(() => {
        this.interval = setInterval(() => {
          if (this.robotScore < this.robotTotal) {
            this.robotScore += 10;
            Store.commit("setRobotScore", this.robotScore);
          }
        }, 4000);
      }, 2000);
    },
  },
  mounted() {
    this.robotGetScore();
  },
  beforeDestroy() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
  },
};
</script>
<style scoped lang="scss">
.question-bubble {
  overflow: hidden;
  position: relative;

  .port {
    position: absolute;
    visibility: visible;
    opacity: 1;
    .img-box {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url("../../assets/images/point-border.png"),
        url("../../assets/images/port1.png");
      background-size: contain;
    }
    .name {
      position: absolute;
      width: 70px;
      top: 50%;
      transform: translateY(-50%);
      color: #ffffff;
      font-family: "Audiowide";
      font-size: 14px;
    }
    &.port-one {
      top: 100%;
      // top: 0%;
      left: 90px;
      width: 160px;
      height: 160px;
      .name {
        left: 110%;
      }
      .img-box {
        background: url("../../assets/images/point-border.png"),
          url("../../assets/images/port1.png");
        background-size: contain;
      }

      animation: bubble1 12s linear 1s infinite;
    }

    @keyframes bubble1 {
      0% {
        width: 40px;
        height: 40px;
        top: 100%;
      }
      80% {
        width: 160px;
        height: 160px;
        top: 0%;
        opacity: 1;
      }
      90% {
        top: -10%;
        opacity: 0;
      }
      100% {
        top: -160px;
        opacity: 0;
      }
    }

    &.port-two {
      top: 100%;
      left: 240px;
      width: 140px;
      height: 140px;
      .name {
        right: 110%;
      }
      .img-box {
        background: url("../../assets/images/point-border.png"),
          url("../../assets/images/port2.png");
        background-size: contain;
      }
      animation: bubble2 12s linear 3s infinite;
    }

    @keyframes bubble2 {
      0% {
        width: 40px;
        height: 40px;
        top: 100%;
      }
      80% {
        width: 140px;
        height: 140px;
        top: 0%;
        opacity: 1;
      }
      90% {
        top: -10%;
        opacity: 0;
      }
      100% {
        top: -140px;
        opacity: 0;
      }
    }

    &.port-three {
      top: 100%;
      left: 130px;
      width: 110px;
      height: 110px;
      .name {
        left: 110%;
      }
      .img-box {
        background: url("../../assets/images/point-border.png"),
          url("../../assets/images/port3.png");
        background-size: contain;
      }
      animation: bubble3 12s linear 5s infinite;
    }

    @keyframes bubble3 {
      0% {
        width: 40px;
        height: 40px;
        top: 100%;
      }
      80% {
        width: 110px;
        height: 110px;
        top: 0%;
        opacity: 1;
      }
      90% {
        top: -10%;
        opacity: 0;
      }
      100% {
        top: -110px;
        opacity: 0;
      }
    }

    &.port-four {
      top: 100%;
      left: 20px;
      width: 180px;
      height: 180px;
      .name {
        left: 110%;
      }
      .img-box {
        background: url("../../assets/images/point-border.png"),
          url("../../assets/images/port4.png");
        background-size: contain;
      }
      animation: bubble1 12s linear 7s infinite;
    }

    @keyframes bubble4 {
      0% {
        width: 40px;
        height: 40px;
        top: 100%;
      }
      80% {
        width: 180px;
        height: 180px;
        top: 0%;
        opacity: 1;
      }
      90% {
        top: -10%;
        opacity: 0;
      }
      100% {
        top: -180px;
        opacity: 0;
      }
    }

    &.port-five {
      top: 100%;
      left: 220px;
      width: 80px;
      height: 80px;
      .name {
        right: 110%;
      }
      .img-box {
        background: url("../../assets/images/point-border.png"),
          url("../../assets/images/port5.png");
        background-size: contain;
      }
      animation: bubble5 12s linear 8.5s infinite;
    }

    @keyframes bubble5 {
      0% {
        width: 30px;
        height: 30px;
        top: 100%;
      }
      80% {
        width: 80px;
        height: 80px;
        top: 0%;
        opacity: 1;
      }
      90% {
        top: -10%;
        opacity: 0;
      }
      100% {
        top: -80px;
        opacity: 0;
      }
    }

    &.port-six {
      top: 100%;
      left: 130px;
      width: 150px;
      height: 150px;
      .name {
        left: 110%;
      }
      .img-box {
        background: url("../../assets/images/point-border.png"),
          url("../../assets/images/port6.png");
        background-size: contain;
      }
      animation: bubble6 12s linear 10s infinite;
    }

    @keyframes bubble6 {
      0% {
        width: 40px;
        height: 40px;
        top: 100%;
      }
      80% {
        width: 160px;
        height: 160px;
        top: 0%;
        opacity: 1;
      }
      90% {
        top: -10%;
        opacity: 0;
      }
      100% {
        top: -160px;
        opacity: 0;
      }
    }
  }
}
</style>
