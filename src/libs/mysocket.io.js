const EVENTS_TYPE = [
  "connect",
  "disconnect",
  "error",
  "connect_error",
  "connect_timeout",
  "connecting",
  "reconnect",
  "reconnect_attempt",
  "reconnecting",
  "reconnect_error",
  "reconnect_failed",
  "ping",
  "pong",
];
EVENTS_TYPE.init = () =>
  EVENTS_TYPE.reduce((obj, key) => ({ ...obj, [key]: [] }), {});

const TIMEOUT = 6000;
// const RECONNECTMAXTIMES = 3;

class MySocketIO {
  constructor(url) {
    this.address = url;
    this.io = null;
    this.connected = false;

    this.onevent = null;
    this.events = EVENTS_TYPE.init();
    this.onceEvents = EVENTS_TYPE.init();
    this._init();

    this.isReconnecting = false;
    this._listenerNetwork();
  }

  _init() {
    this.io = new WebSocket(this.address);
    this.io.addEventListener("open", (event) => {
      this.connected = true;
      this._runEvent("connect", event);
      this._runOnceEvent("connect", event);
      heartCheck.start(this.io);
    });
    this.io.addEventListener("message", (evt) => {
      const data = JSON.parse(evt.data || "[null]");
      this.onevent && this.onevent({ data });
      heartCheck.start(this.io);
    });

    this.io.addEventListener("error", (event) => {
      console.log("error", this.io.readyState, event);
      this._runEvent("error", event);
      this._runOnceEvent("error", event);
      this._reconnect();
      this.connected = false;
      heartCheck.reset();
    });
    this.io.addEventListener("close", (event) => {
      console.log("onclose", this.io.readyState, event);
      this._runEvent("disconnect", event);
      this._runOnceEvent("disconnect", event);
      this.connected = false;
      heartCheck.reset();

      if (event.code !== 1000) {
        this._reconnect();
      }
    });
  }

  _listenerNetwork() {
    const updateOnline = () => {
      if (navigator.onLine) {
        !this.connected && this._reconnect();
      } else {
        heartCheck.start(this.io, 1000);
      }
    };
    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOnline);
  }

  _reconnect() {
    // console.log("eeeee", this.isReconnecting, this.connected);
    if (this.isReconnecting || this.connected) return;
    this.isReconnecting = true;

    cleanTimeOut(() => {
      console.info(`自动重新连...`);
      this._init();
      this.isReconnecting = false;
    }, 1500); //这里设置重连间隔(ms)
  }

  _runOnceEvent(action, params) {
    if (!this.onceEvents[action]) return;
    this.onceEvents[action].forEach((fn) => fn(params));
    this.onceEvents[action] = [];
  }
  _runEvent(action, params) {
    if (!this.events[action]) return;
    this.events[action].forEach((fn) => fn(params));
  }

  on(action, fn) {
    if (this.events[action]) {
      this.events[action].push(fn);
    } else {
      this.events[action] = [fn];
    }
  }

  once(action, fn) {
    if (this.onceEvents[action]) {
      this.onceEvents[action].push(fn);
    } else {
      this.onceEvents[action] = [fn];
    }
  }

  off(action, fn) {
    if (this.events[action]) {
      const index = this.events[action].findIndex((item) => item === fn);
      if (index < 0) return;
      this.events[action].splice(index, 1);
    }
  }

  emit(action, params) {
    const message = params ? [action, params] : [action];
    this.io.send(JSON.stringify(message));
  }

  close() {
    this.io.close(1000, "user disconnect");
  }

  open() {
    this._init();
  }
}

const cleanTimeOut = (() => {
  let timer = null;
  let cto = (fn, timing) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      fn();
    }, timing);
  };
  cto.clear = () => {
    timer && clearTimeout(timer);
  };
  return cto;
})();

/** 心跳检测 */
export const heartCheck = {
  timer: null,
  reset: function () {
    this.timer && clearInterval(this.timer);
  },
  start: function (ws, s) {
    this.reset();
    this.timer = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send('["ping"]');
      }
    }, s || TIMEOUT);
  },
};

export default MySocketIO;

// https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/send
// https://www.ruanyifeng.com/blog/2017/05/websocket.html
