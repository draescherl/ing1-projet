<template>
  <div class="saisie">
    <v-tabs class="d-flex justify-center">
      <v-tab @click="select(0)">Retombée presse</v-tab>
      <v-tab @click="select(1)">Communiqué de presse</v-tab>
    </v-tabs>

    <div v-if="selected == 0">
      <Retombee
        :type="types_name"
        :departement="departements_num"
        :sources="sources_name"
        :theme="themes_name"
        @change="updateSources"
      />
    </div>

    <div v-if="selected == 1">
      <Communique
        :type="types_name"
        :departement="departements_num"
        :theme="themes_name"
      />
    </div>
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

    types_name: [],
    types_id: [],

    departements_num: [],
    departements_id: [],

    themes_name: [],
    themes_id: [],

    sources_name: [],
    sources_id: [],
  }),

  methods: {
    select(tab) {
      this.selected = tab;
    },

    async updateSources(value) {
      let allDefined = value.every((e) => e != undefined);

      if (allDefined) {
        let type_index = this.types_name.indexOf(value[0]);
        let dep_index = this.departements_num.indexOf(value[1]);

        let type_id = this.departements_id[type_index];
        let dep_id = this.departements_id[dep_index];

        let sources = await SourceService.getAll_with_TypeDepartement(type_id, dep_id);
        this.sources_name = [];
        this.sources_id = [];

        sources.forEach((e) => {
          this.sources_name.push(e.name);
          this.sources_id.push(e.id);
        });
      }
    },
  },

  async created() {
    const departements = await DepartementService.getAll();
    const themes = await ThemeService.getAll();
    const types = await TypeService.getAll();

    /** --------------------
     * Separate id from data
     * --------------------- */

    departements.forEach((e) => {
      this.departements_num.push(e.num);
      this.departements_id.push(e.id);
    });

    types.forEach((e) => {
      this.types_name.push(e.name);
      this.types_id.push(e.id);
    });

    themes.forEach((e) => {
      this.themes_name.push(e.name);
      this.themes_id.push(e.id);
    });
  },
};
</script>