<script>
import { bgAudio } from "@/pages/game/Audio.js";
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
    const hasVoice = this.$store.state.hasVoice;
    if (hasVoice) {
      bgAudio.play();
    }

    // document.title = this.$t("game_name");
    // setTimeout(() => {
    //   console.log("app-show");
    //   uni.setNavigationBarTitle({
    //     // 修改头部标题
    //     // title: this.$t("game_name"),
    //     title: this.$i18n.locale,
    //   });
    // }, 50);
  },
  onHide: function () {
    console.log("App Hide");
  },
  created() {},
};
</script>

<style lang="scss">
html,
body {
  overflow: hidden;
  height: 100%;
  font-family: roboto, -apple-system, BlinkMacSystemFont, Avenir,
    "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", SimSun, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  user-select: none;
}

/*每个页面公共css */
.poem img {
  width: 100%;
}
.poem .ql-align-right {
  text-align: right;
}
.quote .ql-align-center {
  margin-top: 10px;
}
.quote h5 {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.transcript p {
  margin: 30rpx 0 40rpx 0;
}
.transcript .pitaya-full-width {
  text-align: left;
}
.transcript .pitaya-center-indent {
  margin-bottom: 0;
}
.ql-align-center {
  text-align: center;
}
.pitaya-full-width {
  text-align: center;
}
.pitaya-center {
  background: #d8d8d8;
  border-radius: 20px;
  padding: 10px;
  text-indent: 10px;
}
/* .ql-font-Courier-New {
  font-family: "Courier New";
}
.ql-font-Times-New-Roman {
  font-family: "Times New Roman";
}
.ql-font-Roboto {
  font-family: "Roboto";
}
.ql-font-KaiTi-GB2312 {
  font-family: "楷体_GB2312";
}
.ql-font-FangSong-GB2312 {
  font-family: "仿宋_GB2312";
} */

/* vietnamese */
@font-face {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.font.im/s/quicksand/v24/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58m-xDwxUD2GF9Zc.woff)
    format("woff");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.font.im/s/quicksand/v24/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58i-xDwxUD2GF9Zc.woff)
    format("woff");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.font.im/s/quicksand/v24/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58a-xDwxUD2GFw.woff)
    format("woff");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

.disable-invite-mask {
  z-index: 111;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.54);
  .text {
    margin-top: -20px;
    background: #fff;
    padding: 15px 25px;
    border-radius: 10px;
  }
  display: none;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
