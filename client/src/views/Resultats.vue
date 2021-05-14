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

    <div><BilanDR v-if="selected_tab(0)"/></div>
    <div><BilanDep :dep="40" v-if="selected_tab(1)"/></div>
    <div><BilanDep :dep="64" v-if="selected_tab(2)"/></div>
    <div><BilanDep :dep="65" v-if="selected_tab(3)"/></div>
    <div><Month :month="1" v-if="selected_tab(4)"/></div>
    <div><Month :month="2" v-if="selected_tab(5)"/></div>
    <div><Month :month="3" v-if="selected_tab(6)"/></div>
    <div><Month :month="4" v-if="selected_tab(7)"/></div>
    <div><Month :month="5" v-if="selected_tab(8)"/></div>
    <div><Month :month="6" v-if="selected_tab(9)"/></div>
    <div><Month :month="7" v-if="selected_tab(10)"/></div>
    <div><Month :month="8" v-if="selected_tab(11)"/></div>
    <div><Month :month="9" v-if="selected_tab(12)"/></div>
    <div><Month :month="10" v-if="selected_tab(13)"/></div>
    <div><Month :month="11" v-if="selected_tab(14)"/></div>
    <div><Month :month="12" v-if="selected_tab(15)"/></div>
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