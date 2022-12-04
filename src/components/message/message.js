import Vue from 'vue';
import main from './message.vue';

const MessageType = {
    Info: 'info',
    Warning: 'warning',
    Error: 'error',
    Success: 'success'
};

const { hasOwnProperty } = Object.prototype;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

function isVNode(node) {
    return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}

const MessageConstructor = Vue.extend(main);

let instance;
let instances = [];
let seed = 1;

const Message = function(options) {
    const id = `pax_msg_${(seed += seed)}`;
    const { onClose } = options;
    options.onClose = () => {
        Message.close(id, onClose);
    };
    instance = new MessageConstructor({
        data: options
    });
    instance.id = id;
    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = '';
    }
    instance.$mount();
    document.body.appendChild(instance.$el);
    let verticalOffset = options.offset || 20;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    instances.push(instance);
    return id;
};

[MessageType.Success, MessageType.Warning, MessageType.Info, MessageType.Error].forEach(type => {
    Message[type] = msg =>
        Message({
            type,
            message: msg
        });
});

Message.close = function(id) {
    const len = instances.length;
    let index = -1;
    let removedHeight = 0;
    for (let i = 0; i < len; i += 1) {
        if (id === instances[i]?.id) {
            removedHeight = instances[i].$el.offsetHeight;
            index = i;
            instances.splice(i, 1).forEach(item => {
                item.close();
            });
            break;
        }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1) return;
    for (let i = index; i < len - 1; i += 1) {
        const dom = instances[i].$el;
        dom.style.top = `${parseInt(dom.style.top, 10) - removedHeight - 16}px`;
    }
};

Message.closeAll = () => {
    for (let i = instances.length - 1; i >= 0; i -= 1) {
        instances[i].close();
    }
};

export default Message;
