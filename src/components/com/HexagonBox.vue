<template>
  <view class="hexagon">
    <slot></slot>
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
  methods: {},

  mounted() {},
};
</script>
<style scoped lang="scss">
.hexagon {
  position: relative;
  height: 60px;
  width: calc(60px / 2 * 1.732);
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
}
</style>
