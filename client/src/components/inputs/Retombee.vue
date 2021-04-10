<template>
  <div class="mt-5">
    <v-form>
      <v-row>
        <v-col cols="4">
          <Date />
        </v-col>
        <v-col cols="4">
          <v-text-field label="Titre" required></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Code CP associé" required></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-select
            :items="type"
            label="Type"
            v-model="selected_type"
            outlined
            @change="update()"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            :items="departement"
            label="Département"
            v-model="selected_department"
            outlined
            @change="update()"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-select :items="sources" label="Source" outlined></v-select>
        </v-col>
        <v-col cols="6">
          <v-select :items="theme" label="Thème" outlined></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" class="d-flex justify-center">
          <v-radio-group row>
            <v-radio
              label="Positive"
              value="positive"
              color="success"
            ></v-radio>
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
          <v-btn color="success" @click="validate"> Valider </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import Date from "./Date";
import RetombeeService from "../../services/RetombeeService"

export default {
  name: "Retombee",

  components: {
    Date,
  },

  props: ["type", "departement", "sources", "theme"],

  data: () => ({
    row: null,
    selected_date: null,
    selected_title: null,
    selected_code: null,
    selected_type: null,
    selected_department: 0,
    selected_source: null,
    selected_theme: null,
    selected_conotation: "",
    selected_document: "",
    selected_link: "",
  }),

  methods: {
    update() {
      this.$emit("change", [this.selected_type, this.selected_department]);
    },

    validate() {
      let data = {
        publi_date: "2021-02-02",
        title: "test2",
        cp_code: 1,
        type: 1,
        departement: 1,
        source: 1,
        theme: 1,
        conotation: 1
      };
      RetombeeService.post(data);
    }
  },
};
</script>