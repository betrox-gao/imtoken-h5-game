export function copyText(text) {
  const textElem = document.createElement("textarea");
  textElem.value = text;
  textElem.style.width = "500px";
  textElem.style.position = "absolute";
  textElem.style.left = "-10000000px";
  document.body.appendChild(textElem);
  textElem.select();
  document.execCommand("copy");
  textElem.remove();
}

export function formatDate(fmt, dt) {
  let d = dt;
  if (typeof dt === "string") {
    d = new Date(dt);
  } else if (dt === undefined || dt === null) {
    d = new Date();
  }
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  let result = fmt.replace(/Y/g, `${year}`);
  result = result.replace(/m/g, month > 9 ? `${month}` : `0${month}`);
  result = result.replace(/d/g, day > 9 ? `${day}` : `0${day}`);
  result = result.replace(/H/g, hours > 9 ? `${hours}` : `0${hours}`);
  result = result.replace(/i/g, minutes > 9 ? `${minutes}` : `0${minutes}`);
  result = result.replace(/s/g, seconds > 9 ? `${seconds}` : `0${seconds}`);
  return result;
}

export function compareVersion(a, b) {
  if (a === b) {
    return 0;
  }
  const aComponents = a.split(".");
  const bComponents = b.split(".");
  const len = Math.min(aComponents.length, bComponents.length);
  for (let i = 0; i < len; i++) {
    if (parseInt(aComponents[i]) > parseInt(bComponents[i])) {
      return 1;
    }

    if (parseInt(aComponents[i]) < parseInt(bComponents[i])) {
      return -1;
    }
  }

  if (aComponents.length > bComponents.length) {
    return 1;
  }

  if (aComponents.length < bComponents.length) {
    return -1;
  }
  return 0;
}


/** 干净的settimeout。
 * cosnt t1 = new CleanTimeOut();
 * t1.set(() => {}, n);
 * beforeDestroy() { t1.clear(); }
 */
export class CleanTimeOut {
  constructor() {
    this.timer = null;
  }

  set(fn, timing) {
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      fn();
    }, timing);
  }

  clear() {
    this.timer && clearTimeout(this.timer);
  }
}

/** 干净的 setInterval.
 * cosnt t1 = new CleanInterval();
 * t1.set(() => {}, n);
 * beforeDestroy() { t1.clear(); }
 */
export class CleanInterval {
  constructor() {
    this.timer = null;
  }

  set(fn, timing) {
    this.timer && clearInterval(this.timer);
    this.timer = setInterval(fn, timing);
  }

  clear() {
    this.timer && clearInterval(this.timer);
  }
}

/** 根据字符串生成随机数 */
export function roundByString(str) {
  str = str.replace(/[^\w]/g, ""); // 剔除全角字符
  if (!str) return 0;
  const numstr = window.btoa(str).replace(/[^\da-fA-F]/g, "") || "0";
  return parseInt(numstr, 16);
}

// 计算过期时间

export function handleExpireDays(num) {
  const curTemp = new Date().getTime();
  const curWeeHours = new Date(new Date().toLocaleDateString()).getTime() - 1;
  const pastTamp = curTemp - curWeeHours;
  const leftTamp = num * 24 * 60 * 60 * 1000 - pastTamp;
  const leftTime = new Date();
  leftTime.setTime(leftTamp + curTemp);
  return leftTime;
}

/**
 * 验证邮箱
 */
export function isEmail(input) {
  const reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  return reg.test(input);
}
