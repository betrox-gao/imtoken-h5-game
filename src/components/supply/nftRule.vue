<template>
  <view class="nft-rule">
    <ul :class="['items', lang === 'zh' ? 'zh-list' : 'en-list']">
      <li class="item" v-for="(i, idx) in $t('nft_rule').items" :key="idx">
        <text v-if="i.link" v-html="i.text"></text>
        <text v-else>{{ i.text }}</text>
        <text v-if="i.children.length"> </text>
        <ul class="width-children">
          <li class="item" v-for="(child, index) in i.children" :key="index">
            {{ child }}
          </li>
        </ul>
      </li>
    </ul>
    <view class="contract" v-html="$t('nft_rule').contract"></view>
    <view class="options-table flex-row">
      <view
        class="flex-col column"
        :class="(idx === 1 && 'level', idx === 1 && 'mint')"
        v-for="(coin, idx) in $t('nft_rule').coins"
        :key="idx"
      >
        <text class="span name">{{ coin.name }}</text>
        <text class="span" v-for="(op, index) in coin.options" :key="index">{{
          op
        }}</text>
      </view>
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
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
  methods: {},

  mounted() {},
};
</script>
<style scoped lang="scss">
.nft-rule {
  padding-bottom: 20px;
  ul {
    padding-left: 30px;
    &.zh-list {
      list-style: decimal;
      .width-children {
        > li {
          list-style: lower-alpha;
        }
      }
    }
  }
  a {
    color: #1cbbff;
  }
  .item {
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-family: "PingFang SC";
    font-weight: 400;
    color: rgba(255, 255, 255, 0.87);
  }

  .contract {
    padding: 10px 0;
    font-family: "PingFang SC";
    font-weight: 400;
    color: rgba(255, 255, 255, 0.87);
  }

  .options-table {
    margin-top: 10px;
    .column {
      flex: 3;
      &.level {
        flex: 2;
      }
      &.mint {
        flex: 2;
      }
      .span {
        padding-left: 4px;
        margin-top: 4px;
        border-width: 0px 1px 2px 0px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.24);
        font-family: "Abel";
        color: #ffffff;
        &.name {
          height: 42px;
        }
      }
    }
    .column + .column {
      margin-left: 4px;
    }
  }

  .attention {
    margin-top: 20px;
    padding: 14px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    background: rgba(61, 92, 255, 0.12);
    border-width: 1px 0px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.24);
    text-align: center;
  }
  #copy-text {
    user-select: all;
  }
}
</style>
