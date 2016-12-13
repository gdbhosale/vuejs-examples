Vue.component('modal', {
    props: [
        'title',
        'body'
    ],
    data() {
        return {
            
        }
    },
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
        </div>
    `,
    methods: {
        
    }
});

var app = new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});