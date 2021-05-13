<template>
  <div class="results">
    <v-tabs class="d-flex justify-center mb-5">
      <v-tab
        v-for="(item, index) in tab_items"
        :key="item"
        @click="select_tab(index)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <div v-if="selected_tab(0)"><BilanDR /></div>
    <div v-if="selected_tab(1)"><BilanDep :dep="40" /></div>
    <div v-if="selected_tab(2)"><BilanDep :dep="64" /></div>
    <div v-if="selected_tab(3)"><BilanDep :dep="65" /></div>
    <div v-if="selected_tab(4)"><Month :month="1" /></div>
    <div v-if="selected_tab(5)"><Month :month="2" /></div>
    <div v-if="selected_tab(6)"><Month :month="3" /></div>
    <div v-if="selected_tab(7)"><Month :month="4" /></div>
    <div v-if="selected_tab(8)"><Month :month="5" /></div>
    <div v-if="selected_tab(9)"><Month :month="6" /></div>
    <div v-if="selected_tab(10)"><Month :month="7" /></div>
    <div v-if="selected_tab(11)"><Month :month="8" /></div>
    <div v-if="selected_tab(12)"><Month :month="9" /></div>
    <div v-if="selected_tab(13)"><Month :month="10" /></div>
    <div v-if="selected_tab(14)"><Month :month="11" /></div>
    <div v-if="selected_tab(15)"><Month :month="12" /></div>
  </div>
</template>

<script>
import BilanDR from "../components/results/BilanDR";
import BilanDep from "../components/results/BilanDep";
import Month from "../components/results/Month";

export default {
  name: "Resultats",
  components: {
    BilanDR,
    BilanDep,
    Month,
  },

  data: () => ({
    tab_items: [
      "Bilan DR",
      "Bilan Landes",
      "Bilan HP",
      "Bilan PA",
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
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