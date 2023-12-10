import { defineStore } from "pinia";
import { reactive } from "vue";

const model = {
  text: "",
  list: [],
};

export const useTodoListStore = defineStore("todoList", () => {
  const tmpModel = reactive(model);

  let text = tmpModel.text;
  let list = tmpModel.list;
  function add() {
    console.log("add1", text);

    let id = 0;
    if (list.length > 0) {
      id = list[list.length - 1].id + 1;
    }

    list.push({
      id,
      title: text,
      checked: false,
    });
    text = "";

    console.log("add2", text, list);
  }

  function checked(id, checked) {
    list.forEach((item) => {
      if (item.id === id) {
        item.checked = checked;
      }
    });

    console.log("checked", id, checked, list);
  }

  function remove(id) {
    list = list.filter((item) => {
      return item.id !== id;
    });

    console.log("remove", id, list);
  }

  return {
    text,
    list,
    add,
    checked,
    remove,
  };
});
