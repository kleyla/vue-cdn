new Vue({
  el: "#vue-app",
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
  },
});
