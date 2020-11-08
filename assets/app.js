Vue.component("name-component", {
  template:
    "<p>HI, i am a component {{name}} <button v-on:click='changeName'>Change name</button> </p>",
  data: function () {
    return {
      name: "Karen c",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Leyla c";
    },
  },
});

var one = new Vue({
  el: "#vue-app-one",
  data: {
    name: "Karen",
    job: "Developer",
    website: "http://google.com",
    websiteTag: '<a href="http://google.com" target="_blank">Tag</a>',
    age: 20,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ["mario", "luigi", "yoshi", "bowser"],
    girls: [
      { name: "ley", age: 20 },
      { name: "yol", age: 20 },
      { name: "andy", age: 20 },
    ],
    title: "Vue app one",
  },
  methods: {
    greet: function (time) {
      return `Good ${time} ${this.name}!`;
    },
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert("Clicked!");
    },
    logName: function () {
      console.log("you have entered tour name");
    },
    logAge: function () {
      console.log("you have entered tour age");
    },
    /* addToA: function () {
      return this.age + this.a;
    },
    addToB: function () {
      return this.age + this.b;
    }, */
  },
  computed: {
    addToA: function () {
      console.log("AddToA");
      return this.age + this.a;
    },
    addToB: function () {
      console.log("AddToB");
      return this.age + this.b;
    },
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
    greetC: function () {
      return "Hello from app ONE";
    },
  },
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue app two",
    output: "Your favorite food",
  },
  methods: {
    changeTitle: function () {
      one.title = "Title changed!";
    },
    readRefs: function () {
      console.log(this.$refs);
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    },
  },
  computed: {
    greet: function () {
      return "Hello from app TWO";
    },
  },
});
two.title = "Changed from outside!";
