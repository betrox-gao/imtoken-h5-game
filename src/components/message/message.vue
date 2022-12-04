<template>
  <transition name="message-fade" @after-leave="handleAfterLeave">
    <div
      class="message"
      v-show="visible"
      :style="positionStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <span class="message-icon" :class="type" v-if="showDefaultIcon">
        <image
          class="img"
          src="@/static/images/checked.svg"
          v-show="type === 'success'"
          mode="aspectFit"
        ></image>
        <image
          class="img"
          src="@/static/images/msg.svg"
          v-show="type === 'info'"
        ></image>
        <image
          class="img"
          src="@/static/images/close-white.svg"
          v-show="type === 'error'"
          mode="aspectFit"
        ></image>
      </span>
      <image v-if="customIcon" class="custom-icon" :src="customIcon"></image>
      <div style="flex-grow: 1">
        <slot>
          <p class="message-content">{{ message }}</p>
        </slot>
      </div>
      <span class="message-close-btn" @click="close" v-if="closable">
        <image
          class="img"
          src="@/static/images/close.svg"
          mode="aspectFit"
        ></image>
      </span>
    </div>
  </transition>
</template>
<script>
const MessageType = {
  Info: "info",
  Warning: "warning",
  Error: "error",
  Success: "success",
};

export default {
  data() {
    return {
      visible: true,
      message: "",
      duration: 3000,
      type: MessageType.Success,
      showIcon: true,
      onClose: null,
      closed: false,
      verticalOffset: 20,
      timer: 0,
      customIcon: "",
      closable: true,
      customStyle: {},
    };
  },

  computed: {
    positionStyle() {
      this.customStyle.top = `${this.verticalOffset}px`;
      return this.customStyle;
    },
    showDefaultIcon() {
      if (this.showIcon && this.customIcon.length <= 0) {
        return true;
      } else {
        return false;
      }
    },
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    },
  },

  methods: {
    handleAfterLeave() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },

    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },

    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = window.setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },

  mounted() {
    this.startTimer();
  },
};
</script>

<style>
.message {
  display: inline-flex;
  align-items: center;
  position: fixed;
  left: 50%;
  top: auto;
  min-width: 200px;
  min-height: 25px;
  padding: 5px 10px;
  background-color: #ffffff;
  box-shadow: 0 16px 48px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: solid 1px #e3e3e3;
  color: #000000;
  font-size: 14px;
  line-height: 24px;
  transform: translateX(-50%);
  transition: transform 0.4s, top 0.4s ease-in-out;
  overflow: hidden;
  z-index: 1001;
}
.message img {
  width: 16px;
  height: 16px;
}

.message .message-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  margin-right: 5px;
  border-radius: 50%;
  color: #ffffff;
}
.message .custom-icon {
  margin-right: 5px;
  width: 16px;
  height: 16px;
}
.message .success {
  background-color: #18b489;
}

.message .info {
  background-color: #ffffff;
}

.message .error {
  background-color: #ec5231;
}

.message.warning {
  background-color: yellow;
}
.message-content {
  color: #000000;
}
.message-close-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-left: 10px;
  opacity: 0.6;
  cursor: pointer;
}
.message-close-btn :hover {
  opacity: 1;
}
.message-close-btn .img {
  display: inline-block;
  height: 16px;
  width: 16px;
}
.message-fade-enter,
.message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
