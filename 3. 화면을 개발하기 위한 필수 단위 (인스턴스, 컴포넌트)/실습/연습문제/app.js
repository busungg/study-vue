Vue.config.devtools = true;

Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>",
});

Vue.component("sibling-component", {
  props: ["propsdata", "anothermessage"],
  template: `<div>
                <p>{{propsdata}} {{anothermessage}}</p>
            </div>`,
});

var app = new Vue({
  el: "#app",
  data: {
    message1: "Hello Vue! 1",
    message2: "Hello Vue! 2",
  },
});
