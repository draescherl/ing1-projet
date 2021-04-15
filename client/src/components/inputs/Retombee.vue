<template>
  <div class="mt-5">
    <v-form>
      <v-row>
        <v-col cols="4">
          <Date v-model="selected_date" @change="updateDate" />
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Titre"
            v-model="selected_title"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Code CP associé"
            v-model="selected_code"
            required
          ></v-text-field>
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
          <v-select
            :items="sources"
            label="Source"
            v-model="selected_source"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            :items="theme"
            label="Thème"
            v-model="selected_theme"
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" class="d-flex justify-center">
          <v-radio-group v-model="selected_conotation" row>
            <v-radio
              label="Positive"
              value="Positive"
              color="success"
            ></v-radio>
            <v-radio label="Négative" value="Négative" color="error"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="4">
          <v-file-input
            show-size
            truncate-length="40"
            label="Document format pdf"
            accept=".PDF, .pdf"
            ref="file"
            @change="handleFileUpload"
          ></v-file-input>
        </v-col>
        <v-col cols="4" class="d-flex justify-center">
          <v-text-field label="Lien" v-model="selected_link"></v-text-field>
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
import RetombeeService from "../../services/RetombeeService";

export default {
  name: "Retombee",

  components: {
    Date,
  },

  props: ["type", "departement", "sources", "theme"],

  data: () => ({
    row: null,
    file: '',
    selected_date: null,
    selected_title: null,
    selected_code: null,
    selected_type: null,
    selected_department: null,
    selected_source: null,
    selected_theme: null,
    selected_conotation: null,
    selected_document: null,
    selected_link: null,
  }),

  methods: {
    update() {
      this.$emit("change", [this.selected_type, this.selected_department]);
    },

    updateDate(value) {
      this.selected_date = value;
    },

    handleFileUpload(event) {
      this.file = event;
      this.selected_document = event.name;
    },

    validate() {
      let formData = new FormData();
      formData.append('pdf', this.file);
      formData.append('source', 'retombee');  // Name of the subfolder where the file will be uploaded
      RetombeeService.postFile(formData);

      let data = {
        publi_date: this.selected_date,
        title: this.selected_title,
        cp_code: this.selected_code,
        type: this.selected_type,
        departement: this.selected_department,
        source: this.selected_source,
        theme: this.selected_theme,
        conotation: this.selected_conotation,
        pdf_path: this.selected_document,
        hyperlink: this.selected_link,
      };
      RetombeeService.post(data);
    },
  },
};
</script>