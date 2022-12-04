<template>
  <view class="pax-modal" :class="{ show: show }">
    <view class="modal-dialog">
      <img src="../../assets/images/line.png" class="in-rect" alt="" />
      <view class="modal-header">
        <text class="title">{{ title }}</text>
        <image
          class="close-btn"
          src="../../assets/images/close.png"
          mode="heightFit"
          @click="handleClose"
        ></image>
      </view>
      <view class="modal-body no-scroll-bar">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.pax-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  visibility: hidden;
  // background: rgba(0, 0, 0, 0);
  background: transparent;
  // background: rgba(255, 255, 255, 0.4);
  transition: background-color 0.3s linear;
  .modal-dialog {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px auto;
    padding: 14px;
    // width: 200px;
    width: 84%;
    height: 86%;
    // background: #fafafa;
    // backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.04);
    border-left: 1px solid rgba(255, 255, 255, 0.24);
    backdrop-filter: blur(16px);
    transition: all 0.2s ease-in-out;
    position: relative;
    opacity: 0;
    background: linear-gradient(
        -135deg,
        transparent 16px,
        rgba(255, 255, 255, 0.01) 0
      )
      top right;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .in-rect {
      position: absolute;
      top: 0;
      right: 0;
      width: 22.624px;
    }
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: calc(100% - 20px);
      height: 1px;
      background-color: rgba(255, 255, 255, 0.24);
    }
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      right: 0;
      height: calc(100% - 20px);
      width: 1px;
      background-color: rgba(255, 255, 255, 0.24);
    }

    .modal-header {
      position: relative;
      margin-top: 8px;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.24);
      .title {
        font-family: "Audiowide";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
      }
      .close-btn {
        position: absolute;
        right: -2px;
        top: -4px;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
    .modal-body {
      overflow: auto;
      flex: 1;
      padding-top: 20px;
      width: 100%;
      height: 100%;
    }
  }
  &.show {
    visibility: visible;
    .modal-dialog {
      opacity: 1;
    }
  }
}
</style>
