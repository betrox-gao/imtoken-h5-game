<template>
  <view>
    <view class="banner flex-row">
      <view class="banner-l">
        <img src="../../assets/images/logo-l.png" alt="" />
      </view>
      <img class="logo" src="../../assets/images/logo.png" alt="" />
      <view class="banner-r">
        <img src="../../assets/images/logo-r.png" alt="" />
      </view>
    </view>
    <view>
      <text class="learn-and-earn">Play and Earn</text>
      <!-- <text class="subtitle">{{ $t("supply_title") }}</text> -->
    </view>
    <view class="help-btn-group flex-row">
      <button class="btn" @click="onShowRuleModalClick">
        {{ $t("supply_rule") }}
      </button>
      <button class="btn" @click="onShowStatusModalClick">
        {{ $t("supply_status") }}
      </button>
    </view>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: [""],
  computed: {},
  methods: {
    onShowRuleModalClick() {
      this.$emit("showRuleModal");
    },
    onShowStatusModalClick() {
      this.$emit("showStatusModal");
    },
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
.banner {
  position: relative;
  padding: 0 6%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  .logo {
    width: 100px;
    position: absolute;
    // margin: 0 10px;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banner-l,
  .banner-r {
    position: relative;
    width: 100px;
    img {
      display: block;
      width: 100%;
    }

    &::before {
      position: absolute;
      content: "";
      width: 3px;
      height: 3px;

      background: #55f9ff;
      box-shadow: 0px 0px 5px #ffffff, 0px 0px 5px #00fdff, 0px 0px 5px #00fdff,
        0px 0px 12px #00fdff, 0px 0px 10px #4ebfff, 0px 0px 32px #1eacff,
        0px 0px 32px #1eacff, 0px 0px 55px #1e6aff;
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
  }
  .banner-l::before {
    bottom: -1px;
    right: 0;
  }
  .banner-r::before {
    bottom: -1px;
    left: 0;
  }
}
.learn-and-earn {
  display: block;
  margin-top: 34px;
  font-size: 24px;
  text-align: center;
  font-family: "Audiowide";
  font-style: normal;
  font-weight: 400;
}
.help-btn-group {
  margin: 16px 0 48px 0;
  justify-content: center;
  align-items: center;
  .btn {
    width: 130px;
    font-size: 13px;
    margin: 0;
    padding: 0;
    text-align: center;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.24);
    backdrop-filter: blur(16px);
    color: rgb(255, 255, 255);
    font-family: "Abel";
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
  .btn + .btn {
    margin-left: 20px;
  }
}
.subtitle {
  display: block;
  padding: 0 8%;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
}
</style>
