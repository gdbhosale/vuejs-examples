Vue.config.devtools = true;

Vue.component('message', {
    props: [
        'title',
        'body'
    ],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
        <article class="message" >
            <div class="message-header">
                {{ title }}
                <button class="close" @click="hideMessage">x</button>
            </div>
            <div class="message-body" v-show="isVisible">
                {{ body }}
            </div>
        </article>
    `,
    methods: {
        hideMessage() {
            if(this.isVisible) {
                this.isVisible = false;
            } else {
                this.isVisible = true;
            }
        }
    }
});

var app = new Vue({
    el: '#root'
    
});