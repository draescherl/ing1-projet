<template>
  <div class="mt-5">
    <v-row>
      <v-col cols="4">
        <Date />
      </v-col>
      <v-col cols="4">
        <v-text-field label="Référence" required></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="Titre" required></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-select
          :items="type"
          label="Type"
          v-model="selected_type"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          :items="departement"
          label="Département"
          v-model="selected_department"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-select
          :items="get_relevant_sources()"
          label="Source"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select :items="theme" label="Thème" outlined></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" class="d-flex justify-center">
        <v-radio-group row>
          <v-radio label="Positive" value="positive" color="success"></v-radio>
          <v-radio label="Négative" value="negative" color="error"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="4">
        <v-file-input
          show-size
          truncate-length="40"
          label="Document format pdf"
          accept=".PDF, .pdf"
        ></v-file-input>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-text-field label="Lien"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="success"> Valider </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Date from "./Date";

export default {
  name: "Retombee",

  components: {
    Date,
  },

  props: ["type", "departement", "sources", "theme"],

  data: () => ({
    row: null,
    selected_type: null, // Here we store the value of the type input
    selected_department: 0, // Here we store the value of the department input
  }),

  methods: {
    get_relevant_sources() {
      /**
       * In this map we store the correspondance between
       * the value of the select field and the sources
       * object given in the props.
       *
       * Key: value of the select
       * Value: name in the sources object
       */
      const correspondance_table = {
        PQR: "pqr",
        Radio: "radio",
        TV: "tv",
        Web: "web",
        "Réseaux Sociaux": "rs",
      };

      /**
       * correspondance_table[this.selected_type] translates
       * what the user see on screen to usable data.
       */
      const s_type = correspondance_table[this.selected_type];
      const s_dep = this.selected_department;

      if (typeof s_type === "undefined" || (s_dep === 0 && s_type != "rs"))
        return [];

      if (s_dep in this.sources[s_type]) return this.sources[s_type][s_dep];
      else return this.sources[s_type];
    },
  },
};
</script>