<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["item"]);
const emit = defineEmits(["remove", "checked"]);

console.log(props);

const item = props.item;
const id = item.id;
const title = item.title;
const isChecked = item.checked;

const checked = function () {
  emit("checked", id, !isChecked);
};
const remove = function () {
  emit("remove", id);
};
</script>

<template>
  <div>
    <input type="checkbox" :checked="isChecked" @click="checked" />
    {{ title }}
    <button @click="remove">삭제</button>
  </div>
</template>

<style scoped></style>
