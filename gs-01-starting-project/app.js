//          In Vue we define the desired end result and the data we will need in our Vue app.
//          Declarative Approach
Vue.createApp({
  data() {
    //data holds a function as a value.
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    //methods hold an object as value
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');


//          Imperative Approach
// const buttonEl = document.querySelector('button'); //JS object representation of button
// const inputEl = document.querySelector('input');
// const ulEl = document.querySelector('ul');

// const addGoal = () =>{
//     const inputVal = inputEl.value;
//     const list = document.createElement('li');
//     list.innerHTML = inputVal;
//     ulEl.appendChild(list);
//     inputEl.value = '';

// }

// buttonEl.addEventListener('click', addGoal);
