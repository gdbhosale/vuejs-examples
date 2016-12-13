Vue.config.devtools = true;

// window.Event = new Vue();

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
};

Vue.component('coupon', {
    template: `
        <input placeholder="Enter your Coupon Code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            console.log("applied !!!");
            Event.fire('applied', this.coupon);
        }
    }
});

var app = new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    created() {
        Event.listen('applied', function() {
            console.log("handling it !!!");
        });
    }
});