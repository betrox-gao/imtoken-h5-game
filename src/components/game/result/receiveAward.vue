<template>
  <view class="award-com flex-col">
    <img class="award-icon" src="../../../assets/images/award.png" alt="" />
    <view class="neptune">
      <text class="des">{{ $t("award_nft_type") }}</text>
      <img
        class="line top"
        src="../../../assets/images/award-top-line.png"
        alt=""
      />
      <img class="img" src="../../../assets/images/neptune.png" alt="" />
      <img
        class="line bottom"
        src="../../../assets/images/award-bottom-line.png"
        alt=""
      />
    </view>
    <view class="submit flex-col">
      <text class="address">{{ $t("award_address") }}</text>
      <view :class="['input-border']">
        <input
          type="text"
          v-model="address"
          :placeholder="palceholder"
          class="input-address"
          :class="inputEmpty && 'input-error'"
          @blur="onBlur"
          @focus="onFocus"
        />
      </view>
      <button class="submit-btn" @click="onSubmitClick">
        {{ $t("award_submit") }}
      </button>
    </view>
    <result-modal :show="showResultModal">
      <view v-if="isSuccess" class="done-dialog flex-col">
        <img class="img" src="../../../assets/images/done.png" alt="" />
        <text class="title">{{ $t("done_text") }}</text>
        <btn-width-block class="done-btn" @click.native="onDoneClick">{{
          $t("done_btn")
        }}</btn-width-block>
      </view>
      <view v-else class="done-dialog flex-col">
        <img class="img" src="../../../assets/images/submit-error.png" alt="" />
        <text class="title">{{ errMsg }}</text>
        <btn-width-block class="done-btn" @click.native="onReSubmitClick">{{
          $t("reSubmit")
        }}</btn-width-block>
      </view>
    </result-modal>
  </view>
</template>
<script>
import resultModal from "@/components/game/result/resultModal";
import btnWidthBlock from "@/components/com/btnWidthBlock";
import { mapState } from "vuex";
import { report } from "@/api/game.js";
export default {
  components: { resultModal, btnWidthBlock },
  data() {
    return {
      lang: "en",
      showResultModal: false,
      address: "",
      isSuccess: false,
      inputEmpty: false,
      palceholder: "",
      errMsg: "",
    };
  },
  props: [""],
  computed: {
    ...mapState({
      channel: state => state.channel,
      history: state => state.history,
    }),
    currentHistory() {
      return this.history[this.channel];
    },
    score() {
      return this.currentHistory.score;
    },
  },
  methods: {
    onSubmitClick() {
      if (!this.address) {
        this.inputEmpty = true;
        this.palceholder = this.$t("award_address");
        return;
      }

      const data = {
        channel: this.channel,
        wallet: this.address,
        score: this.score,
      };

      // const data = {
      //   channel: "tokenlon",
      //   wallet: "0xde65f0c34f6fdd88e860af8219afb5c31b786c84",
      //   score: 80,
      // };

      report(data).then(
        res => {
          const { status } = res;
          console.log(res);
          if (status) {
            this.isSuccess = true;
            this.$emit("submit");
            this.showResultModal = true;
          } else {
            this.isSuccess = false;
            this.errMsg = this.$t("illegal");
            this.showResultModal = true;
          }
        },
        () => {
          this.isSuccess = false;
          this.errMsg = this.$t("err");
          this.showResultModal = true;
        }
      );
    },
    onFocus() {
      this.inputEmpty = false;
      this.palceholder = "";
    },
    onBlur() {},
    onDoneClick() {
      const url = "/pages/game/supplierPage";
      uni.redirectTo({ url });
    },
    onReSubmitClick() {
      this.address = "";
      this.showResultModal = false;
    },
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
.award-com {
  position: relative;
  align-items: center;
  .award-icon {
    width: 300px;
    height: 80px;
    padding: 10px 0 0 0;
  }

  .neptune {
    position: relative;
    width: 80%;
    // flex: 1;
    text-align: center;
    img {
      display: block;
    }
    .line {
      position: absolute;
      width: 90%;
      left: 50%;
      transform: translateX(-50%);
      &.top {
        top: -30px;
      }
      &.bottom {
        bottom: -20px;
      }
    }
    .img {
      width: 90%;
      margin: 20px auto 20px;
      // height: 320px;
    }
    .des {
      position: absolute;
      top: 4px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 14px;
      font-family: "Abel";
      color: #ffffff;
    }
  }
  .submit {
    align-items: center;
    width: 100%;
    color: #ffffff;
    .address {
      font-family: "Abel";
      font-size: 20px;
      color: #ffffff;
    }
    .input-border {
      position: relative;
      width: 80%;
      height: 40px;
      margin-top: 6px;
      border: 3px solid transparent;
      .input-address {
        position: absolute;
        width: calc(80% - 6px);
        height: calc(80% - 6px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: content-box;
        width: 100%;
        padding: 10px 0;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.54);
        backdrop-filter: blur(16px);
        text-align: center;
        font-family: "Abel";
        font-size: 14px;
        color: #ffffff;
        &.input-error {
          border: 3px solid rgba(243, 47, 47, 0.54);
        }
      }
    }

    .submit-btn {
      width: 80%;
      margin: 20px 0;
      font-family: "Audiowide";
      font-size: 20px;
      color: #2e5187;
      background: #e2fdfe;
      box-shadow: 0px 0px 5px #00fdff, 0px 0px 5px #00fdff, 0px 0px 12px #00fdff,
        0px 0px 10px #4ebfff, 0px 0px 32px #1eacff, 0px 0px 55px #1e6aff;
    }
  }

  .done-dialog {
    align-items: center;
    .img {
      width: 155px;
    }
    .title {
      width: 80%;
      font-size: 20px;
      font-family: "Abel";
      color: #ffffff;
    }
    .done-btn {
      width: 86%;
      margin: 20px 0;
      background: rgba(255, 255, 255, 0.24);
      border: 1px solid rgba(255, 255, 255, 0.24);
      font-size: 20px;
    }
  }
}
</style>
