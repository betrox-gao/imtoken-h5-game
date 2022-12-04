export const Platform = {
  Web: "",
  AndroidWebView: "android-webview",
  IOSWebView: "ios-webview",
  WXMiniProgram: "wxmini-webview",
};

const Prm2Platform = {
  "ios-webview": Platform.IOSWebView,
  "android-webview": Platform.AndroidWebView,
  "wx-ios_miniprogram": Platform.WXMiniProgram,
  "wx-adr_miniprogram": Platform.WXMiniProgram,
};

let platform = Platform.Web;

const url = new URL(window.location.href);
const plat = url.searchParams.get("platform") || "";

export const ThemeType = {
  Dark: "dark",
  Light: "light",
};

export const AppType = {
  Domestic: "Domestic", //普通版
  Writer: "Writer", //写作版
};

export const apptype = url.searchParams.get("apptype") || "";

export const theme = url.searchParams.get("theme") || ThemeType.Light;

if (plat in Prm2Platform) {
  platform = Prm2Platform[plat];
}

export function getPlatform() {
  return platform;
}

export function getLanguage() {
  return url.searchParams.get("language") || "en";
}

export const isWebView = [
  Platform.IOSWebView,
  Platform.AndroidWebView,
  Platform.WXMiniProgram,
].includes(platform);

export const isWxMiniProgram = platform === Platform.WXMiniProgram;

// 浏览器环境
export const isWeb = platform === Platform.Web;
