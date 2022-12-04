import { getPlatform, Platform } from '.';
import WxMiniProgram from "./wx-mini-program";

const platform = getPlatform();

function reply2native(id, data, err) {
//   console.log('reply to native', id, data, err);
  if (platform === Platform.AndroidWebView) {
      window.jsBridgeNative.replyNativeMessage(id, data, err || '');
  } else if (platform === Platform.IOSWebView) {
      window.webkit.messageHandlers.replyNativeMessage.postMessage({ id, data, err: err || null });
  } else {
      throw new Error('invalid native platform');
  }
}


let id = 0;

const callbacks = [];

export function postMessage2Native(name, data) {
    id++;
    if (id === Infinity) {
        id = 0;
    }
    // console.log(id, name, data);
    if (platform === Platform.AndroidWebView) {
        try {  
            window.jsBridgeNative.postMessage2Native(id, name, data);
        } catch(err) {
            console.log(err);
        }
    } else if (platform === Platform.IOSWebView) {
        window.webkit.messageHandlers.postMessage2Native.postMessage({ id, name, data });
    } else if (getPlatform() === Platform.WXMiniProgram) {
        //如果当前是小程序环境
        WxMiniProgram.postMessage2Native({ id, name, data });
    }

    return new Promise((resolve, reject) => {
        function cb(data, err) {
            // console.log(data, err);
            if (typeof err === 'string') {
                reject(new Error(err));
            } else {
                resolve(data);
            }
        }
        callbacks.push({
            id,
            cb
        });
    });
}

function replyWebViewMessage(id, data, err) {
  for (let i = 0; i < callbacks.length; i += 1) {
      const item = callbacks[i];
      if (item.id === id) {
          item.cb(data, err);
          callbacks.splice(i, 1);
          break;
      }
  }
}


const handlers = {};

function postMessage2WebView(id, name ,data) {
    // console.log('n2w', id, name, data);
    if (handlers[name]) {
        handlers[name](data)
            .then(res => {
                reply2native(id, res);
            })
            .catch(err => {
                reply2native(id, null, err.message);
            });
    } else {
        // 固定值 undefined
        reply2native(id, null, 'undefined');
    }
}

export function initJSBridge() {
    window.jsBridgeWebView = {
        postMessage2WebView,
        replyWebViewMessage
    };
}


export function addJSBListener(name, h) {
  handlers[name] = h;
}

export function removeJSBListener() {
  delete handlers[name];
}
