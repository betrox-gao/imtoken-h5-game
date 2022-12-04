<template>
  <button class="btn-width-block">
    <slot />
    <!-- 装饰 -->
    <view class="block t-l"></view>
    <view class="block t-r"></view>
    <view class="block b-l"></view>
    <view class="block b-r"></view>
  </button>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: [""],
  computed: {},
  methods: {},

  mounted() {},
};
</script>
<style scoped lang="scss">
.btn-width-block {
  position: relative;
  padding: 14px 0;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1;
  border-radius: 0;
  font-family: "Audiowide";
  font-style: normal;
  text-align: center;
  color: #ffffff;
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
}
</style>
