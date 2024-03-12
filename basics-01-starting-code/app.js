//Vue is the globally available object
const app = Vue.createApp({
    // Data itself is a function = a method
    data(){
        return {
            courseGoalA: 'Finish the course!',
            courseGoalB: '<h2>Building amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    // methods takes an object which will be full of methods
    methods: {
        outputGoal(){
            //generates a random floating-point number between 0 (inclusive) and 1 (exclusive) 
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                // 'this' keyword takes all the data you return in data object and 
                //which u return in the data method & it merges it into a global Vue instance object.
                //Your methods are also available there.
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

//which part of html code is controled by Vue app.
//Every Vue app can only be connected to 1 HTML element.
app.mount('#user-goal');