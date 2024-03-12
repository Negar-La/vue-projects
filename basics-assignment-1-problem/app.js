const app = Vue.createApp({
    data(){
        return {
            myName: 'Negar',
            myAge: 35,
            imageUrl: 'https://images.pexels.com/photos/20354062/pexels-photo-20354062/free-photo-of-a-man-is-standing-in-front-of-a-large-circular-object.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

        }
    },
    methods: {
        getRandom(){
            return Math.random();
        },
        calculateAge(){
            return this.myAge + 5;
        }

    }
});

app.mount('#assignment');