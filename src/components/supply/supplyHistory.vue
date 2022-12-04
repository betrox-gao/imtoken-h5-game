<template>
  <view class="history-box">
    <text class="label">{{ $t("player") }}</text>
    <text class="time">{{ $t("role") }}</text>
    <text class="label">{{ $t("time") }}</text>
    <text class="time">{{ time }}</text>
    <text class="label">{{ $t("score") }}</text>
    <text class="score">{{ score }}</text>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: ["duration", "score"],
  computed: {
    time() {
      return this.getFormatTime(this.duration);
    },
  },
  methods: {
    getFormatTime(timdedetail) {
      const leave1 = timdedetail % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      const hours = Math.floor(leave1 / (3600 * 1000));

      //计算相差分钟数
      const leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      const minutes = Math.floor(leave2 / (60 * 1000));

      //计算相差秒数
      const leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      const seconds = Math.round(leave3 / 1000);
      const formatTime = `${JSON.stringify(hours).padStart(
        2,
        "0"
      )}:${JSON.stringify(minutes).padStart(2, "0")}:${JSON.stringify(
        seconds
      ).padStart(2, "0")}`;

      return formatTime;
    },
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
.history-box {
  margin: 0 auto;
  text {
    display: block;
    width: 100px;
    padding-left: 20px;

    font-family: "Abel";
    &.label {
      margin-top: 10px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
    }
    &.time {
      font-size: 16px;
      color: #ffffff;
    }
    &.score {
      font-size: 35px;
      color: #e2fdfe;

      text-shadow: 0px 0px 8.35443px #4ebfff, 0px 0px 26.7342px #1eacff,
        0px 0px 26.7342px #1eacff;
    }
  }
}
</style>
