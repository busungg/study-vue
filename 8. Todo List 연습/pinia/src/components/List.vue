<script setup>
import { useTodoListStore } from "../stores/todoList";
import Item from "./Item.vue";

const store = useTodoListStore();
</script>

<template>
  <div>
    <input type="text" v-model="store.text" />
    <button @click="store.add">add</button>
    <ul>
      <li v-for="item in store.list" v-bind:key="item.id">
        <!-- v-bind:key 가 없었을 때에는 re rendering이 안됬다.-->
        <Item :item="item"></Item>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
