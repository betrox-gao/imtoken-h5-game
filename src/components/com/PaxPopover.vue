<template>
    <div class="pax-popover" :class="{ 'hovering': trigger === 'hover'&&!disabled }">
        <div
            :style="style"
            class="popper"
            :class="[
                placement,
                {
                    show: showPopper,
                    'h-arrow': ['top','bottom'].includes(placement),
                    'v-arrow': ['left','right'].includes(placement),
                }
            ]"
            ref="popper"
        >
            <slot name="popper"></slot>
        </div>
        <div ref="reference">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        trigger: {
            type: String,
            default: 'click'
        },
        placement: {
            type: String,
            default: 'bottom'
        },
        width: {
            type: [String, Number],
            default: 'auto'
        },
        bgColor: {
            type: String,
            default: '#000000'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clickSelfHide: {
            type: Boolean,
            default: true
        },
        outerShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showPopper: false,
            referElm: null
        };
    },
    watch: {
        outerShow(newVal) {
            if (newVal) {
                document.body.addEventListener('click', this.hide, true);
                this.$emit('showPopover', true);
                if (!this.disabled) {
                    this.showPopper = !this.showPopper;
                }
            }
        }
    },
    computed: {
        style() {
            const style = {
                '--background-color': this.bgColor
            };
            if (typeof this.width === 'number') {
                style.width = `${this.width}px`;
            } else {
                style.width = this.width;
            }
            return style;
        }
    },
    methods: {
        show(e) {
            this.$emit('showPopover', true);
            e.stopPropagation();
            if (!this.disabled) {
                this.showPopper = !this.showPopper;
            }
        },
        hide(e) {
            if (!this.clickSelfHide && this.$refs.popper) {
                if (this.$refs.popper.contains(e.target)) {
                    return;
                }
            }
            this.$emit('update:outerShow', false);
            this.$emit('showPopover', false);
            this.showPopper = false;
        }
    },
    mounted() {
        this.referElm = this.$refs.reference;
        if (this.trigger === 'click') {
            this.referElm.addEventListener('click', this.show);
        }
        document.body.addEventListener('click', this.hide, true);
    },

    beforeDestroy() {
        if (this.trigger === 'click') {
            this.referElm.removeEventListener('click', this.show);
        }
        document.removeEventListener('click', this.hide);
    }
};
</script>
<style lang="scss" scoped>
.pax-popover {
    display: inline-block;
    position: relative;

    &.hovering:hover .popper {
        visibility: visible !important;
        opacity: 1 !important;
    }

    .popper {
        padding: 5px 0;
        position: absolute;
        background-color: #000;
        background-color: var(--background-color);
        color: #ffffff;
        box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        transition: visibility 0.1s linear, opacity 0.1s linear;
        opacity: 0;
        visibility: hidden;
        z-index: 5;

        &.show {
            opacity: 1;
            visibility: visible;
        }

        &.h-arrow {
            &::before {
                display: inline-block;
                content: '';
                left: 50%;
                position: absolute;
                margin-left: -6px;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 5px solid #000;
                border-top: 5px solid var(--background-color);
                z-index: 5;
            }
            &::after {
                display: inline-block;
                content: '';
                left: 0;
                position: absolute;
                width: 100%;
                height: 5px;
            }
        }

        &.top {
            margin-bottom: 5px;
            bottom: 100%;
            left: 50%;
            transform: translate(-50%, 0px);
            &::before {
                bottom: -4px;
            }
            &:after {
                bottom: -5px;
            }
        }

        &.bottom {
            margin-top: 5px;
            top: 100%;
            left: calc(50% - 2px);
            transform: translate(-50%, 0px);
            &::before {
                top: -4px;
                transform: rotate(180deg);
            }
            &:after {
                top: -5px;
            }
        }

        &.v-arrow {
            &::before {
                display: inline-block;
                content: '';
                position: absolute;
                top: 50%;
                margin-top: -6px;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
                border-left: 5px solid var(--background-color);
                z-index: 5;
            }
            &:after {
                display: inline-block;
                content: '';
                position: absolute;
                top: 0;
                width: 5px;
                height: 100%;
            }
        }

        &.left {
            margin-right: 5px;
            right: 100%;
            top: 50%;
            transform: translate(0, -50%);
            &::before {
                right: -4px;
            }
            &:after {
                right: -5px;
            }
        }

        &.right {
            margin-left: 5px;
            left: 100%;
            top: 50%;
            transform: translate(0, -50%);
            &::before {
                left: -4px;
                transform: rotate(180deg);
            }
            &:after {
                left: -5px;
            }
        }
    }
}
</style>
