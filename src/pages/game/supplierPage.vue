<template>
  <view class="supplier-page flex-col">
    <supply-header
      @showRuleModal="onShowRuleModal"
      @showStatusModal="onShowStatusModal"
    ></supply-header>
    <supply-list></supply-list>
    <pax-modal
      :show.sync="showRuleModal"
      :title="$t('supply_rule')"
      @close="closeRuleModal"
    >
      <nft-rule></nft-rule>
    </pax-modal>
    <pax-modal
      :show.sync="showStatusModal"
      :title="$t('supply_status')"
      @close="closeStatusModal"
    >
      <nft-status></nft-status>
    </pax-modal>
  </view>
</template>

<script>
import "./game.scss";
import PaxModal from "@/components/com/PaxModal.vue";
import supplyHeader from "@/components/supply/supplyHeader.vue";
import supplyList from "@/components/supply/supplyList.vue";
import nftRule from "@/components/supply/nftRule.vue";
import nftStatus from "@/components/supply/nftStatus.vue";

export default {
  data() {
    return {
      showRuleModal: false,
      showStatusModal: false,
      ruleModalTitle: "RULE",
      statusModalTitle: "NFT STATUS",
      lang: "zh",
    };
  },

  computed: {},
  methods: {
    onShowRuleModal() {
      console.log("aaa");
      this.showRuleModal = true;
    },
    onShowStatusModal() {
      this.showStatusModal = true;
    },
    closeRuleModal() {
      this.showRuleModal = false;
    },
    closeStatusModal() {
      this.showStatusModal = false;
    },
  },

  beforeMount() {},
  // onShow: function () {
  //   setTimeout(() => {
  //     console.log("before show", this.$t("game_name"));
  //     // uni.setNavigationBarTitle({
  //     //   // 修改头部标题
  //     //   title: this.$t("game_name"),
  //     //   success: function () {
  //     //     console.log("success");
  //     //   },
  //     // });
  //   }, 50);
  // },
  created() {},
  components: { PaxModal, supplyHeader, supplyList, nftRule, nftStatus },
};
</script>

<style lang="scss" scoped>
.supplier-page {
  margin: 0 auto;
  height: 100%;
  background: url("../../assets/images/galaxy.png") no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
}
</style>
