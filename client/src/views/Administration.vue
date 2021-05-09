<template>
  <div class="administration">
    <v-tabs class="d-flex justify-center mb-5">
      <v-tab
        v-for="(item, index) in tab_items"
        :key="item"
        @click="select_tab(index)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <div v-if="selected_tab(0)"><Retombees /></div>
    <div v-if="selected_tab(1)"><Communiques /></div>
    <div v-if="selected_tab(2)"><Types /></div>
    <div v-if="selected_tab(3)"><Departements /></div>
    <div v-if="selected_tab(4)"><Sources /></div>
    <div v-if="selected_tab(5)"><Themes /></div>
  </div>
</template>

<script>
import Communiques from "../components/admin/Communiques";
import Departements from "../components/admin/Departements";
import Retombees from "../components/admin/Retombees";
import Sources from "../components/admin/Sources";
import Themes from "../components/admin/Themes";
import Types from "../components/admin/Types";

export default {
  name: "Administration",
  components: {
    Communiques,
    Departements,
    Retombees,
    Sources,
    Themes,
    Types,
  },

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