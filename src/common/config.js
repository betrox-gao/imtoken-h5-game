let url_config = "";
let ws_config = "";
const appId = "";
export const CDN = "";

const isDev = window.location.host === "h5.fans-campaign.com" ? false : true;
// if (isDev) {
//   // url_config = "https://h5.fans-campaign.com";
//   // url_config = "http://h5.gaomeng.net.cn";
//   url_config = "https://demo.gaomeng.net.cn";
// } else {
//   url_config = "https://demo.gaomeng.net.cn";
// }

let localStorageKeys = {
  'IS_SUBMIT': 'isSubmit',
  'TOTAL_SCORE': 'totalScore',
  'DURATION': 'duration',
  'USER_SCORE': 'userScore',
  'ROBOT_SCORE': 'robotScore',
  'IS_DONE': 'isDone',
  'SHOW_AWARD': 'showAward',
  'ROBOT_SUFFIX': 'robotSuffix',
  'ROBOT_AVATAR_PREFIX': 'robotAvatarPrefix',
  'USER_AVATAR_PREFIX': 'userAvatarPrefix',

}

export default {
  url_config,
  ws_config,
  appId,
  CDN,
};

