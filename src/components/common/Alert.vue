<template>
  <b-alert
    :show="dismissCountDown"
    :variant="variant"
    :dismissible="dismissible"
    :fade="fade"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged"
    :class="getClass()"
  >{{title}}</b-alert>
</template>
<script>
export default {
    props: {
        show: Boolean,
        variant: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        dismissible: Boolean,
        fade: Boolean,
        dismissSecs: Number,
        dismissed: {
            type: Function,
            default: () => 1
        }
    },
    data() {
        return {
            dismissCountDown: 0,
            showDismissibleAlert: false
        }
    },
    watch: {
        show(newVal) {
            // watch it
            if(newVal) this.showAlert()
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
            if(dismissCountDown === 0)   this.$emit('updatealert', false);
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
        getClass() {
            return this.variant === 'danger' ? 'error-alert' : ''
        }
    }
}
</script>
<style lang="scss">
    .error-alert {
        display: flex;
        justify-content: center;
        place-items: center;
        flex-direction: row-reverse;
        font-size: $l;

        & .close {
            background-color: transparent;
            border: none;
            padding-left: $m;
        }
    }
</style>
