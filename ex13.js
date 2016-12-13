Vue.config.devtools = true;

window.Event = new Vue();

Vue.component('coupon', {
    template: `
        <input placeholder="Enter your Coupon Code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            console.log("applied !!!");

            Event.$emit('applied', this.coupon);

            // this.$emit('applied', this.coupon);
            // this.$on("applied", function() {
            //    
            // });
        }
    }
});

var app = new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    created() {
        Event.$on('applied', function() {
            console.log("handling it !!!");
        });
    }
});