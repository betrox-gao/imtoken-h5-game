<template>
  <li class="apply-item flex-row">
    <img :src="item.bg" class="supply-bg" alt="" />
    <img src="../../assets/images/cross-line.svg" class="cross-line" alt="" />
    <img src="../../assets/images/line.png" class="in-rect" alt="" />
    <img :src="item.icon" class="item-icon" alt="" />
    <view class="item-left flex-col">
      <text class="item-title">{{ item.title }}</text>
      <view class="btn-group flex-row">
        <!-- <button class="btn learn" @click="onLearnClick(item)">
          {{ item.learn }}
        </button> -->
        <button class="btn enter" @click="onEnterClick(item)">
          {{ item.enter }}
        </button>
      </view>
    </view>
  </li>
</template>
<script>
import { mapState } from "vuex";
import Store from "../../store/index";

export default {
  components: {},
  data() {
    return {};
  },
  props: ["item"],
  computed: {
    ...mapState({
      channel: state => state.channel,
      history: state => state.history,
      robotNameSuffix: state => state.robotNameSuffix, // 机器人名字后缀
      userAvatarSuffix: state => state.userAvatarSuffix, // 用户头像后缀
      robotAvatarSuffix: state => state.robotAvatarSuffix, // 机器人头像后缀
      avatar: state => state.avatar,
    }),
  },
  methods: {
    getRobotNameSuffixRandom() {
      return Math.round(Math.random() * (301 - 102)) + 102;
    },
    getAvatarSuffixRandom() {
      return Math.round(Math.random() * (24 - 1)) + 1;
    },
    onLearnClick(item) {
      window.open(item.link, "_blank");
    },
    onEnterClick(item) {
      const { id } = item;
      Store.commit("setChannel", id);
      const currentHistory = this.history[id];
      const currentDetail = this.avatar[id];
      if (currentHistory) {
        const { score, isSubmit, duration } = currentHistory;
        const { robotAvatarSuffix, robotNameSuffix, userAvatarSuffix } =
          currentDetail;
        // 用户答过题 并且成绩符合领奖标准
        if (score >= 80) {
          // 设置explorer
          Store.commit("setExplorer", {
            name: this.$t("userPrefix"),
            avatar: require(`../../assets/images/user/user${userAvatarSuffix}.png`),
          });
          // 设置challenger
          Store.commit("setChallenger", {
            name: `${this.$t("robotPrefix")} ${robotNameSuffix}`,
            avatar: require(`../../assets/images/user/user${robotAvatarSuffix}.png`),
          });

          this.$emit("onShowHistoryClick", {
            duration,
            score,
          });
          // 如果提交领取了奖励 则跳转到历史页面，否则跳转到结果页继续领奖
          // if (isSubmit) {
          //   // 提交过了 去往历史记录页面 并存储用户 机器人头像和用户名
          //   this.$emit("onShowHistoryClick", {
          //     duration,
          //     score,
          //   });
          // } else {
          //   const url = "/pages/game/wordsExplosionResult";
          //   uni.redirectTo({ url });
          // }
        } else {
          // 清空用户得分
          Store.commit("setRobotScore", 0);
          Store.commit("setUserScore", 0);
          Store.commit("setHistory", {
            channel: this.channel,
            duration: 0,
            score: 0,
            isSubmit: false,
            showAward: false,
          });
          // 如果存在用户头像
          if (userAvatarSuffix) {
            const robotPrefix = this.getRobotNameSuffixRandom();
            let robotAvatarSuffix = this.getAvatarSuffixRandom();
            while (userAvatarSuffix === robotAvatarSuffix) {
              robotAvatarSuffix = this.getAvatarSuffixRandom();
            }
            // 设置explorer
            Store.commit("setExplorer", {
              name: this.$t("userPrefix"),
              avatar: require(`../../assets/images/user/user${userAvatarSuffix}.png`),
            });
            // 设置challenger
            Store.commit("setChallenger", {
              name: `${this.$t("robotPrefix")} ${robotPrefix}`,
              avatar: require(`../../assets/images/user/user${robotAvatarSuffix}.png`),
            });
            // 存储用户和机器人 头像和名字信息
            Store.commit("setAvatar", {
              channel: this.channel,
              robotNameSuffix: robotPrefix,
              userAvatarSuffix: userAvatarSuffix,
              robotAvatarSuffix: robotAvatarSuffix,
            });
          } else {
            const robotPrefix = this.getRobotNameSuffixRandom();
            const userAvatarSuffix = this.getAvatarSuffixRandom();
            let robotAvatarSuffix = this.getAvatarSuffixRandom();
            while (userAvatarSuffix === robotAvatarSuffix) {
              robotAvatarSuffix = this.getAvatarSuffixRandom();
            }
            // 设置explorer
            Store.commit("setExplorer", {
              name: this.$t("userPrefix"),
              avatar: require(`../../assets/images/user/user${userAvatarSuffix}.png`),
            });
            // 设置challenger
            Store.commit("setChallenger", {
              name: `${this.$t("robotPrefix")} ${robotPrefix}`,
              avatar: require(`../../assets/images/user/user${robotAvatarSuffix}.png`),
            });
            // 存储用户和机器人 头像和名字信息
            Store.commit("setAvatar", {
              channel: this.channel,
              robotNameSuffix: robotPrefix,
              userAvatarSuffix: userAvatarSuffix,
              robotAvatarSuffix: robotAvatarSuffix,
            });
          }
          uni.showToast({
            title: this.$t("loading"),
            duration: 2000,
          });
          setTimeout(() => {
            const url = `/pages/game/wordsExplosion`;
            uni.redirectTo({
              url,
            });
          }, 2100);
        }
      } else {
        const url = `/pages/game/wordsExplosion`;
        uni.redirectTo({
          url,
        });
      }
    },
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
li {
  position: relative;
  margin-bottom: 12px;
  list-style: none;
  &.apply-item {
    position: relative;
    padding: 20px 0px 20px 53px;
    align-items: center;
    height: 140px;
    backdrop-filter: blur(16px);
    background: linear-gradient(-135deg, transparent 10px, #ffffff04 0) top
      right;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-left: 1px solid rgba(255, 255, 255, 0.24);
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);

    .in-rect {
      position: absolute;
      top: 0;
      right: 0;
      width: 14.14px;
    }
    .supply-bg {
      position: absolute;
      left: 0;

      height: 100%;
      z-index: 100;
    }
    .cross-line {
      position: absolute;
      left: 0;
      top: 24%;
      width: 66%;
      z-index: 888;
    }
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: calc(100% - 12px);
      height: 1px;
      background-color: rgba(255, 255, 255, 0.24);
    }
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      right: 0;
      height: calc(100% - 12px);
      width: 1px;
      background-color: rgba(255, 255, 255, 0.24);
    }

    .item-icon {
      width: 70px;
      height: 70px;
      z-index: 888;
    }
    .item-left {
      width: 65%;
      height: 100%;
      justify-content: space-between;
      margin-left: auto;
      z-index: 888;
      .item-title {
        font-family: "Audiowide";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
      }
      .btn-group {
        margin-top: 26px;
        justify-content: center;
        .btn {
          width: 80px;
          font-size: 14px;
          margin: 0;
          padding: 0;
          border-radius: 0;
          color: #ffffff;
          border-width: 1px 0px;
          border-style: solid;
          line-height: 28px;
          font-family: "Audiowide";
          font-style: normal;
          font-weight: 400;

          &.learn {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.24);
          }

          &.enter {
            background: rgba(255, 255, 255, 0.24);
            border-color: rgba(255, 255, 255, 0.24);
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
// .uni-toast {
//   background-color: #000000;
// }
</style>
