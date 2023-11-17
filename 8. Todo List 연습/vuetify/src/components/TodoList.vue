<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height">
      <v-container>
        <v-row>
          <v-col>
            <Text :item="viewModel.text" @change="changeText"></Text>
          </v-col>
          <v-col cols="2">
            <v-btn rounded="sm" size="x-large" @click="add">등록</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-list lines="two">
              <ListItem
                v-for="item in viewModel.list"
                :item="item"
                :key="item.id"
                @remove="remove"
              ></ListItem>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script setup>
import Text from "./Text.vue";
import ListItem from "./ListItem.vue";

import { reactive } from "vue";

const viewModel = reactive({
  text: {
    label: "Todo",
    placeholder: "Enter todo list",
    hint: "할일을 적으세요",
    value: "",
  },
  list: [],
});

const add = () => {
  const list = viewModel.list;
  let id = 0;
  if (list.length > 0) {
    id = list[list.length - 1].id + 1;
  }

  list.push({
    id,
    value: viewModel.text.value,
    checked: false,
  });
  viewModel.text.value = "";
};

const changeText = function (value) {
  viewModel.text.value = value;
};

const remove = (id) => {
  console.log("remove", id);

  const list = viewModel.list;
  viewModel.list = list.filter((item) => {
    return item.id !== id;
  });

  console.log(viewModel);
};
</script>
