<template>
  <div class="mt-5">
    <v-alert
      v-if="show"
      close-text="Close Alert"
      color="success accent-4"
      dark
      dismissible
    >
      Communiqué ajouté avec succès.
    </v-alert>

    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col cols="4">
          <Date v-model="selected_date" @change="updateDate" />
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Titre"
            v-model="selected_title"
            :rules="[(v) => !!v || 'Veuillez saisir un titre']"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Code CP"
            v-model="selected_code"
            :rules="[
              (v) => !!v || 'Veuillez saisir un code',
              (v) =>
                Number.isInteger(parseInt(v)) ||
                'Le code doit être un chiffre entier.',
            ]"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-select
            :items="type"
            label="Type"
            v-model="selected_type"
            :rules="[(v) => !!v || 'Veuillez sélectionner un type']"
            outlined
            required
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-select
            :items="departement"
            label="Département"
            v-model="selected_department"
            :rules="[(v) => !!v || 'Veuillez sélectionner un département']"
            outlined
            required
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-select
            :items="theme"
            label="Thème"
            v-model="selected_theme"
            :rules="[(v) => !!v || 'Veuillez sélectionner un thème']"
            outlined
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-file-input
            show-size
            truncate-length="40"
            label="Document format pdf"
            accept=".PDF, .pdf"
            ref="file"
            @change="handleFileUpload"
          ></v-file-input>
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <v-text-field label="Lien" v-model="selected_link"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn :disabled="!valid" color="success" @click="validate">
            Valider
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import Date from "./Date";
import CommuniqueService from "../../services/CommuniqueService";

export default {
  name: "Communique",

  components: {
    Date,
  },

  props: ["type", "departement", "theme"],

  data: () => ({
    valid: false,
    show: false,
    file: "",
    selected_date: null,
    selected_title: null,
    selected_code: null,
    selected_type: null,
    selected_department: null,
    selected_theme: null,
    selected_document: null,
    selected_link: null,
  }),

  methods: {
    updateDate(value) {
      this.selected_date = value;
    },

    handleFileUpload(event) {
      this.file = event;
      this.selected_document = event.name;
    },

    validate() {
      let formData = new FormData();
      formData.append("pdf", this.file);
      formData.append("source", "communique"); // Name of the subfolder where the file will be uploaded
      CommuniqueService.postFile(formData);

      let data = {
        publi_date: this.selected_date,
        title: this.selected_title,
        cp_code: this.selected_code,
        type: this.selected_type,
        departement: this.selected_department,
        theme: this.selected_theme,
        pdf_path: this.selected_document,
        hyperlink: this.selected_link,
      };
      CommuniqueService.post(data);

      this.show = true;
      this.file = "";
      this.selected_date = null;
      this.selected_title = null;
      this.selected_code = null;
      this.selected_type = null;
      this.selected_department = null;
      this.selected_theme = null;
      this.selected_document = null;
      this.selected_link = null;

      this.$refs.form.resetValidation();
    },
  },
};
</script>