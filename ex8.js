Vue.config.devtools = true;

Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.desc }} - {{ task.completed }}</task>
        </div>
    `,
    
    data() {
        return {
            tasks: [
                {desc: 'Go to store', completed: true},
                {desc: 'Go to Home', completed: true},
                {desc: 'Make Food', completed: false},
                {desc: 'Eat Pizza', completed: true},
                {desc: 'Make Dinner', completed: false},
                {desc: 'Finish Work', completed: true},
                {desc: 'Clean Home', completed: false},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
});

var app = new Vue({
    el: '#root'
});