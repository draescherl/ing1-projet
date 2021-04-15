<template>
  <div class="administration">
    <v-tabs class="d-flex justify-center">
      <v-tab
        v-for="(item, index) in tab_items"
        :key="item"
        @click="select_tab(index)"
        >{{ item }}</v-tab
      >
    </v-tabs>

    <div v-if="selected_tab(0)"></div>
    <div v-if="selected_tab(1)"></div>
    <div v-if="selected_tab(2)"></div>
    <div v-if="selected_tab(3)"></div>
    <div v-if="selected_tab(4)"></div>
    <div v-if="selected_tab(5)"></div>
  </div>
</template>

<script>
export default {
  name: "Administration",
  components: {},

  data: () => ({
    tab_items: [
      "Retombées presse",
      "Communiqués de presse",
      "Types",
      "Départements",
      "Sources",
      "Thèmes",
    ],

    selected: 0,
  }),

  methods: {
    select_tab(tab) {
      this.selected = tab;
    },

    selected_tab(tab) {
      return this.selected == tab;
    },
  },
};
</script>