Vue.config.devtools = true;

//전역 todo-footer 컴포넌트 전역등록
Vue.component("todo-footer", {
  template: "<p>This is another global child component<p>",
});

var app = new Vue({
  el: "#app",
  data: {
    message: "This is a parent component",
  },
  //지역 컴포넌트 등록
  components: {
    "todo-list": {
      template: "<p>This is another local child component<p>",
    },
  },
});
