<template>
  <div>
    <input type="text" v-model="viewModel.text" />
    <button @click="add">add</button>
    <ul>
      <li v-for="item in list" v-bind:key="item.id">
        <!-- v-bind:key 가 없었을 때에는 re rendering이 안됬다.-->
        <Item :item="item" @checked="checked" @remove="remove"></Item>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Item from "./Item.vue";

const viewModel = reactive({
  text: "",
  list: [],
});

const list = viewModel.list;
const add = () => {
  let id = 0;
  if (list.length > 0) {
    id = list[list.length - 1].id + 1;
  }

  list.push({
    id,
    title: viewModel.text,
    checked: false,
  });
  viewModel.text = "";

  console.log(list);
};

const checked = (id, checked) => {
  console.log("checked", id, checked);

  list.forEach((item) => {
    if (item.id === id) {
      item.checked = checked;
    }
  });
};

const remove = (id) => {
  console.log("delete", id);

  let i = 0,
    idx = 0;
  list.forEach((item) => {
    if (item.id == id) {
      idx = i;
      return;
    }

    i++;
  });
  list.splice(idx, 1);
};
</script>

<style scoped></style>
