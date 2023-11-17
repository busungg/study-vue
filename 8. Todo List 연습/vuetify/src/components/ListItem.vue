<template>
  <v-list-item>
    <v-list-item-title>{{ item.id }}</v-list-item-title>
    <v-list-item-subtitle>
      <v-layout>
        <v-row>
          <v-col>
            {{ item.value }}
          </v-col>
          <v-col>
            <v-btn @click="remove">삭제</v-btn>
          </v-col>
        </v-row>
      </v-layout>
    </v-list-item-subtitle>
  </v-list-item>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["item"]);
const emits = defineEmits(["remove"]);

const item = props.item;

const remove = function () {
  emits("remove", item.id);
};
</script>
