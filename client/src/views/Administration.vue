<template>
  <div class="administration">
    <v-tabs class="d-flex justify-center">
      <v-tab @click="select(0)">Retombées presse</v-tab>
      <v-tab @click="select(1)">Communiqués de presse</v-tab>
      <v-tab @click="select(2)">Types</v-tab>
      <v-tab @click="select(3)">Départements</v-tab>
      <v-tab @click="select(4)">Sources</v-tab>
      <v-tab @click="select(5)">Thèmes</v-tab>
    </v-tabs>

    <div v-if="selected == 0"></div>
    <div v-if="selected == 1"></div>
    <div v-if="selected == 2"></div>
    <div v-if="selected == 3"></div>
    <div v-if="selected == 4"></div>
    <div v-if="selected == 5"></div>
  </div>
</template>

<script>
export default {
  name: "Administration",
  components: {},

  data: () => ({
    selected: 0,
  }),

  methods: {
    select(tab) {
      this.selected = tab;
    }
  }
};
</script>