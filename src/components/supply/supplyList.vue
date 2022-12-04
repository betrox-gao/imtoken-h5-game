<template>
  <view class="summary">
    <ul class="summary-content">
      <supply-list-item
        v-for="item in $t('suppliers')"
        :key="item.id"
        :item="item"
        @onShowHistoryClick="onShowHistoryClick"
      ></supply-list-item>
    </ul>
    <pax-modal
      :show.sync="showHistoryModal"
      class="history-modal"
      :title="$t('record')"
    >
      <supply-history :duration="duration" :score="score"></supply-history>
    </pax-modal>
  </view>
</template>
<script>
import supplyListItem from "@/components/supply/supplyListItem.vue";
import supplyHistory from "@/components/supply/supplyHistory.vue";
import PaxModal from "@/components/com/PaxModal.vue";
export default {
  components: { PaxModal, supplyListItem, supplyHistory },
  data() {
    return {
      showHistoryModal: false,
      duration: 0,
      score: 0,
    };
  },
  props: [""],
  computed: {},
  methods: {
    onShowHistoryClick(item) {
      console.log("click");
      const { duration, score } = item;
      this.duration = duration;
      this.score = score;
      this.showHistoryModal = true;
    },
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
.summary {
  overflow: hidden;
  flex: 1;
  text-align: center;
  .summary-content {
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    overflow: auto;
    height: 100%;
    width: 84%;
    margin: 0 auto;
    padding: 0;
    text-align: left;
    list-style: none;
    .en {
      width: 118px;
      display: inline-block;
      font-family: Quicksand;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      text-transform: capitalize;
      white-space: nowrap;
      /* 超出隐藏 */
      overflow: hidden;
      /* 单行末尾出现省略号 */
      text-overflow: ellipsis;
    }
    .cn {
      white-space: nowrap;
      /* 超出隐藏 */
      overflow: hidden;
      /* 单行末尾出现省略号 */
      text-overflow: ellipsis;
      width: 123px;
      display: inline-block;
      font-family: PingFang SC;
      font-size: 13px;
      line-height: 18px;
    }
  }

  ::v-deep .history-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(16px);
    .modal-dialog {
      height: 300px;
      margin: auto;
      padding: 0;
      border-bottom: 0.053333rem solid rgba(255, 255, 255, 0.24);
      background: linear-gradient(
          -135deg,
          transparent 0.853333rem,
          rgba(255, 255, 255, 0.01) 0
        )
        top right;
      .modal-header {
        margin: 20px 20px 0 20px;
      }
    }
  }
}
</style>
