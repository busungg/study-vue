Vue.config.devtools = true;

new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js",
    uid: "10",
    flag: false,
  },
  methods: {
    clickBtn(evt) {
      console.log("clickBtn", evt);
    },
    clickBtn2(evt) {
      console.log("clickBtn2", evt);
    },
  },
});
