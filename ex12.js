Vue.config.devtools = true;

Vue.component('coupon', {
    template: `
        <input placeholder="Enter your Coupon Code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            console.log("applied !!!");
            this.$emit('applied', this.coupon);
        }
    }
});

var app = new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            console.log("Coupon applied !!!");
            this.couponApplied = true;
        }
    }
});