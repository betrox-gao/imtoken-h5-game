import Vue from "vue";
import Vuex from "vuex";
import i18n from "@/common/lang";
import { createVuexPersistedState } from "vue-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    roomState: "",
    hasVoice: true,
    explorer: null,
    challenger: null,
    userScore: 0,
    robotScore: 0,
    answeredNum: 0,
    questionType: "",
    channel: "",
    locale: i18n.locale,
    showAward: false,
    history: {
      ["Beginner"]: {
        score: 0,
        robotScore: 70,
        isSubmit: false,
        showAward: false,
        duration: 0,
      },
      ["Intermediate"]: {
        score: 0,
        robotScore: 70,
        isSubmit: false,
        showAward: false,
        duration: 0,
      },
      ["Advanced"]: {
        score: 0,
        robotScore: 70,
        isSubmit: false,
        showAward: false,
        duration: 0,
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["Expert"]: {
        score: 0,
        robotScore: 70,
        isSubmit: false,
        showAward: false,
        duration: 0,
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["Arbitrum"]: {
        score: 0,
        robotScore: 70,
        isSubmit: false,
        showAward: false,
        duration: 0,
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["Optimism"]: {
        score: 0,
        robotScore: 70,
        isSubmit: false,
        showAward: false,
        duration: 0,
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["zkSync"]: {
        score: 0,
        robotScore: 70,
        isSubmit: false,
        showAward: false,
        duration: 0,
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["imToken"]: {
        score: 0,
        robotScore: 70,
        isSubmit: false,
        showAward: false,
        duration: 0,
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
    },
    avatar: {
      ["Beginner"]: {
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["Intermediate"]: {
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["Advanced"]: {
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["Expert"]: {
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["Arbitrum"]: {
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["Optimism"]: {
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["zkSync"]: {
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
      ["imToken"]: {
        robotNameSuffix: 0,
        userAvatarSuffix: 0,
        robotAvatarSuffix: 0,
      },
    },
    robotNameSuffix: 0,
    userAvatarSuffix: 0,
    robotAvatarSuffix: 0,
  },
  mutations: {
    setAvatar(state, item) {
      const { channel, robotNameSuffix, userAvatarSuffix, robotAvatarSuffix } = item;
      if (state.avatar[channel]) {
        state.avatar[channel] = {
          robotNameSuffix,
          userAvatarSuffix,
          robotAvatarSuffix,
        };
      }
    },
    setUserAvatarSuffix(state, suffix) {
      state.robotNameSuffix = suffix;
    },
    setUserAvatarSuffix(state, suffix) {
      state.userAvatarSuffix = suffix;
    },
    setRobotAvatarSuffix(state, suffix) {
      state.robotAvatarSuffix = suffix;
    },
    setRoomStatus(state, status) {
      state.roomState = status;
    },
    setExplorer(state, { name, avatar }) {
      state.explorer = {
        name,
        avatar,
      };
    },
    setChallenger(state, { name, avatar }) {
      state.challenger = {
        name,
        avatar,
      };
    },
    changeVioce(state, hasVoice) {
      state.hasVoice = hasVoice;
    },
    setQuestionType(state, type) {
      state.questionType = type;
    },
    setAnsweredNums(state, num) {
      state.answeredNum = num;
    },
    setUserScore(state, score) {
      state.userScore = score;
    },
    setRobotScore(state, score) {
      state.robotScore = score;
    },
    setShowAward(state, bool) {
      state.showAward = bool;
    },
    setChannel(state, channel) {
      state.channel = channel;
    },
    setHistory(state, item) {
      const { channel, score, isSubmit, showAward, duration } = item;
      if (state.history[channel]) {
        state.history[channel] = {
          score,
          isSubmit,
          showAward,
          duration,
          robotScore: 70,
        };
      }
    },
  },
  actions: {},
  getters: {},
  plugins: [
    createVuexPersistedState({
      key: "vuex",
      storage: window.localStorage,
      whiteList: [],
      // blackList: []
      blackList: ["userScore", "robotScore", "answeredNum", "hasVoice"],
    }),
  ],
});

Vue.prototype.$store = store;
export default store;
