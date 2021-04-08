<template>
  <div class="saisie">
    <v-tabs class="d-flex justify-center">
      <v-tab @click="select(0)">Retombée presse</v-tab>
      <v-tab @click="select(1)">Communiqué de presse</v-tab>
    </v-tabs>

    <v-form>
      <div v-if="selected == 0">
        <Retombee
          :type="types"
          :departement="departements"
          :sources="sources"
          :theme="themes"
        />
      </div>

      <div v-if="selected == 1">
        <Communique :type="types" :departement="departements" :theme="themes" />
      </div>
    </v-form>
  </div>
</template>

<script>
import Retombee from "../components/inputs/Retombee";
import Communique from "../components/inputs/Communique";
import DepartementService from "../services/DepartementService";
import SourceService from "../services/SourceService";
import ThemeService from "../services/ThemeService";
import TypeService from "../services/TypeService";

export default {
  name: "Saisie",

  components: {
    Retombee,
    Communique,
  },

  data: () => ({
    selected: 0,
    types: [],
    departements: [],
    sources: [],
    themes: [],
  }),

  methods: {
    select(tab) {
      this.selected = tab;
    },
  },

  async created() {
    this.departements = await DepartementService.getAll();
    this.sources = await SourceService.getAll(1, 1);
    this.themes = await ThemeService.getAll();
    this.types = await TypeService.getAll();
  },
};
</script>