<template>
  <v-text-field
    type="text"
    :label="item.label"
    :placeholder="item.placeholder"
    :hint="item.hint"
    :model-value="item.value"
    clearable
    @update:model-value="update"
  >
  </v-text-field>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["item"]);
const emits = defineEmits(["change"]);
const item = props.item;

const update = function (value) {
  console.log(value);
  emits("change", value);
};
</script>

<style></style>
