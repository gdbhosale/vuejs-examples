Vue.config.devtools = true;

Vue.component('task', {
    template: '<li><slot></slot></li>',
    
    data() {
        return {
            message: 'Foobar'
        }
    }
});

var app = new Vue({
    el: '#root',
    data: {
        
    },
    methods: {
        
    },
    mounted: {
        
    }
});