<script setup>
import { useTodoListStore } from "../stores/todoList";
import { defineProps } from "vue";

const { checked, remove } = useTodoListStore();
const props = defineProps(["item"]);

console.log(props);

const item = props.item;
const id = item.id;
const title = item.title;
const isChecked = item.checked;
</script>

<template>
  <div>
    <input
      type="checkbox"
      :checked="isChecked"
      @click="checked(id, !isChecked)"
    />
    {{ title }}
    <button @click="remove(id)">삭제</button>
  </div>
</template>

<style scoped></style>
