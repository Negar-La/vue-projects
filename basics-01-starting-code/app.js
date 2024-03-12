//Vue is the globally available object
const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Finish the course!',
            vueLink: 'https://vuejs.org/'
        };
    }
});

//which part of html code is controled by Vue app.
app.mount('#user-goal');