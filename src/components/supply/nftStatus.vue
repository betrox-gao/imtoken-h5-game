<template>
  <view class="status flex-col">
    <text class="description">{{ $t("nft_status").description }}</text>
    <view class="nft-list no-scroll-bar">
      <view class="nft-item" v-for="nft in nfts" :key="nft.name">
        <view class="content">
          <text class="name">{{ nft.name }}</text>
          <text class="label">{{ status }}</text>
          <text class="value">LEVEL {{ nft.stage }}</text>
          <text class="label">{{ mint }}</text>
          <text class="value">{{ nft.mint }}</text>
        </view>
        <view class="hexagon-container container-one">
          <hexagon-box class="stage stage-one unupgrade">
            <img v-if="nft.stage >= 1" :src="nft.stage_one" alt="" />
          </hexagon-box>
          <img
            v-if="nft.stage < 1"
            class="cover"
            src="../../assets/images/unupgrade.png"
            alt=""
          />
          <img
            v-if="nft.stage > 1"
            class="cover"
            src="../../assets/images/upgraded.png"
            alt=""
          />
          <view class="upgraded-cover" v-if="nft.stage > 1"></view>
          <img
            v-if="nft.stage == 1"
            class="cover"
            src="../../assets/images/upgrading.png"
            alt=""
          />
        </view>
        <view class="hexagon-container container-two">
          <hexagon-box class="stage stage-two upgrading">
            <img v-if="nft.stage >= 2" :src="nft.stage_two" alt="" />
          </hexagon-box>
          <img
            v-if="nft.stage < 2"
            class="cover"
            src="../../assets/images/unupgrade.png"
            alt=""
          />
          <img
            v-if="nft.stage > 2"
            class="cover"
            src="../../assets/images/upgraded.png"
            alt=""
          />
          <img
            v-if="nft.stage == 2"
            class="cover"
            src="../../assets/images/upgrading.png"
            alt=""
          />
          <view class="upgraded-cover" v-if="nft.stage > 2"></view>
        </view>
        <view class="hexagon-container container-three">
          <hexagon-box class="stage stage-three upgraded">
            <img v-if="nft.stage == 3" :src="nft.stage_three" alt="" />
          </hexagon-box>
          <img
            v-if="nft.stage < 3"
            class="cover"
            src="../../assets/images/unupgrade.png"
            alt=""
          />
          <img
            v-if="nft.stage == 3"
            class="cover"
            src="../../assets/images/upgrading.png"
            alt=""
          />
          <view class="upgraded-cover" v-if="nft.stage > 3"></view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import HexagonBox from "@/components/com/HexagonBox.vue";

export default {
  components: { HexagonBox },
  data() {
    return {
      lang: "zh",
      status: "STAGE",
      mint: "MINT",
      nftStatus: {
        nfts: [
          {
            name: "NFT 01",
            status: "STAGE 2",
            mint: "12K",
          },
          {
            name: "NFT 02",
            status: "STAGE 2",
            mint: "12K",
          },
          {
            name: "NFT 03",
            status: "STAGE 2",
            mint: "12K",
          },
          {
            name: "NFT 04",
            status: "STAGE 2",
            mint: "12K",
          },
          {
            name: "NFT 05",
            status: "STAGE 2",
            mint: "12K",
          },
          {
            name: "NFT 06",
            status: "STAGE 2",
            mint: "12K",
          },
          {
            name: "NFT 07",
            status: "STAGE 2",
            mint: "12K",
          },
          {
            name: "NFT 08",
            status: "STAGE 2",
            mint: "12K",
          },
        ],
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
    };
  },
  props: [""],
  computed: {
    nfts() {
      return this.$t("nft_status").nfts;
    },
  },
  methods: {},

  mounted() {},
};
</script>
<style scoped lang="scss">
.status {
  overflow: hidden;
  height: 100%;
  .description {
    padding-bottom: 10px;
    font-family: "PingFang SC";
    font-size: 13px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.87);
    // line-height: 14px;
  }
  .nft-list {
    overflow: auto;
    overflow-x: hidden;
    flex: 1;
    .nft-item {
      position: relative;
      height: 240px;
      text-align: center;
      margin-top: 20px;
      .hexagon-container {
        position: absolute;
        width: 114px;
        height: 114px;
        &.container-one {
          bottom: 0;
          left: -4px;
        }
        &.container-two {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &.container-three {
          top: 0;
          right: -4px;
        }
        .cover {
          width: 100%;
        }
        .upgraded-cover {
          position: absolute;
          height: 90px;
          width: calc(90px / 2 * 1.732);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.6);
          // transform: rotate(-35deg);
          clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        }
      }
      .stage {
        position: absolute;
        height: 90px;
        width: calc(90px / 2 * 1.732);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 116%;
          z-index: 888;
        }
        .cover {
          z-index: 999;
        }

        // &.unupgrade {
        //   background: url("../../assets/images/unupgrade.png");
        // }
        // &.upgrading {
        // }
        // &.upgraded {
        // }
      }
      .content {
        position: absolute;
        top: 10px;
        left: 1px;
        text-align: left;
        text {
          display: block;
          &.name {
            font-family: "Audiowide";
            font-size: 18px;
            color: #ffffff;
          }
          &.label {
            font-family: "Abel";
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
          }
          &.value {
            font-family: "Audiowide";
            font-size: 11px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
