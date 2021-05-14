<template>
  <v-form>
    <v-row>
      <v-col cols="md-4 sm-12 offset-md-3">
        <v-select
          :items="retombees_title"
          v-model="selected_retombee"
          @change="select_items()"
          label="Retombées"
          outlined
        ></v-select>
      </v-col>

      <v-col cols="md-1 sm-2">
        <v-dialog v-model="dialog_update" width="400">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab dark color="info" v-bind="attrs" v-on="on">
              <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline"> Modifier Retombée </v-card-title>

            <v-card-text>
              <p class="font-italic">
                Il n'est pas nécessaire de changer les champs que vous ne
                souhaitez pas modifier.
              </p>
              <Date
                :initial_date="selected_date"
                v-model="selected_date"
                @change="updateDate"
              />
              <v-text-field
                label="Nouveau titre"
                v-model="updated_name"
              ></v-text-field>
              <v-text-field
                label="Nouveau CP"
                v-model="updated_code"
              ></v-text-field>
              <v-select
                :items="types_name"
                v-model="selected_type"
                label="Type"
                outlined
              ></v-select>
              <v-select
                :items="departements_num"
                v-model="selected_departement"
                label="Département"
                outlined
              ></v-select>
              <v-select
                :items="sources_name"
                v-model="selected_source"
                label="Source"
                outlined
              ></v-select>
              <v-select
                :items="themes_name"
                v-model="selected_theme"
                label="Thème"
                outlined
              ></v-select>
              <v-radio-group v-model="selected_conotation" row>
                <v-radio
                  label="Positive"
                  value="Positive"
                  color="success"
                ></v-radio>
                <v-radio
                  label="Négative"
                  value="Négative"
                  color="error"
                ></v-radio>
              </v-radio-group>
              <v-file-input
                show-size
                truncate-length="40"
                label="Document format pdf"
                accept=".PDF, .pdf"
                ref="file"
                @change="handleFileUpload"
              ></v-file-input>
              <p v-if="selected_pdf != null" class="font-italic">
                Fichier existant : {{ selected_pdf }}
              </p>
              <v-btn
                v-if="selected_pdf != null"
                color="primary"
                text
                @click="downloadFile()"
              >
                Télécharger PDF
              </v-btn>
              <v-text-field
                label="Nouveau lien"
                v-model="updated_link"
              ></v-text-field>
              <v-btn
                v-if="updated_link != null"
                color="primary"
                text
                @click="openUrl()"
              >
                Ouvrir lien
              </v-btn>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  dialog_update = false;
                  update();
                "
              >
                Valider
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col cols="md-1 sm-2">
        <v-dialog v-model="dialog_delete" persistent max-width="400">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab color="error" dark v-bind="attrs" v-on="on">
              <v-icon dark> mdi-delete-forever </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline"> Supprimer retombée </v-card-title>
            <v-card-text>
              Confirmer la suppression du communiqué
              <span class="font-italic">{{ selected_retombee }}</span> ? Cette
              opération est irréversible.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" text @click="dialog_delete = false">
                Annuler
              </v-btn>
              <v-btn
                color="error"
                text
                @click="
                  dialog_delete = false;
                  remove();
                "
              >
                Confirmer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import DepartementService from "../../services/DepartementService";
import ThemeService from "../../services/ThemeService";
import TypeService from "../../services/TypeService";
import RetombeeService from "../../services/RetombeeService";
import SourceService from "../../services/SourceService";
import ConotationService from "../../services/ConotationService";

import Date from "../inputs/Date";

export default {
  name: "Retombees",

  components: {
    Date,
  },

  data: () => ({
    dialog_update: false,
    dialog_delete: false,

    retombees_id: [],
    retombees_date: [],
    retombees_title: [],
    retombees_code: [],
    retombees_type: [],
    retombees_dep: [],
    retombees_source: [],
    retombees_theme: [],
    retombees_conotation: [],
    retombees_pdf: [],
    retombees_link: [],

    departements_num: [],
    departements_id: [],

    themes_name: [],
    themes_id: [],

    types_name: [],
    types_id: [],

    sources_name: [],
    sources_id: [],

    conotations_name: [],
    conotations_id: [],

    new_name: "",
    updated_name: "",
    updated_date: "",
    updated_code: "",
    updated_type: "",
    updated_dep: "",
    updated_theme: "",
    updated_pdf: "",
    updated_link: "",
    selected_retombee: "",
    selected_date: "",
    selected_type: "",
    selected_departement: "",
    selected_source: "",
    selected_theme: "",
    selected_conotation: "",
    selected_pdf: "",
    file: "",
  }),

  methods: {
    async refresh_retombees() {
      this.retombees_id = [];
      this.retombees_date = [];
      this.retombees_title = [];
      this.retombees_code = [];
      this.retombees_type = [];
      this.retombees_dep = [];
      this.retombees_source = [];
      this.retombees_theme = [];
      this.retombees_conotation = [];
      this.retombees_pdf = [];
      this.retombees_link = [];

      const retombees = await RetombeeService.getAll();
      retombees.forEach((e) => {
        this.retombees_id.push(e.id);
        this.retombees_title.push(e.title);
        this.retombees_code.push(e.cp_code);
        this.retombees_type.push(e.type);
        this.retombees_dep.push(e.departement);
        this.retombees_source.push(e.source);
        this.retombees_theme.push(e.theme);
        this.retombees_conotation.push(e.conotation);
        this.retombees_pdf.push(e.pdf_path);
        this.retombees_link.push(e.hyperlink);

        let formated_date = e.publi_date.substring(0, 10);
        formated_date = formated_date.split("-");
        formated_date[2]++; // The date returned by the db is one day behind for some reason ...
        formated_date = formated_date.join("-");
        this.retombees_date.push(formated_date);
      });
    },

    async update() {
      let retombee_index = this.retombees_title.indexOf(this.selected_retombee);
      let type_index = this.types_name.indexOf(this.selected_type);
      let departement_index = this.departements_num.indexOf(
        this.selected_departement
      );
      let source_index = this.sources_name.indexOf(this.selected_source);
      let theme_index = this.themes_name.indexOf(this.selected_theme);
      let conotation_index = this.conotations_name.indexOf(
        this.selected_conotation
      );

      let retombee_id = this.retombees_id[retombee_index];
      let type_id = this.types_id[type_index];
      let departement_id = this.departements_id[departement_index];
      let source_id = this.sources_id[source_index];
      let theme_id = this.themes_id[theme_index];
      let conotation_id = this.conotations_id[conotation_index];
      let date = this.selected_date.split("/").reverse().join("-");

      if (this.file) {
        let formData = new FormData();
        formData.append("pdf", this.file);
        formData.append("source", "retombee"); // Name of the subfolder where the file will be uploaded
        RetombeeService.postFile(formData);
      }

      RetombeeService.update(
        retombee_id,
        date,
        this.updated_name,
        this.updated_code,
        type_id,
        departement_id,
        source_id,
        theme_id,
        conotation_id,
        this.selected_pdf,
        this.updated_link
      );

      this.selected_retombee = this.updated_name;
      await this.refresh_retombees();
      this.select_items();
    },

    remove() {
      let index = this.retombees_title.indexOf(this.selected_retombee);
      let id = this.retombees_id[index];
      RetombeeService.delete(id);

      this.selected_retombee = "";
      this.retombees_id.splice(index, 1);
      this.retombees_date.splice(index, 1);
      this.retombees_title.splice(index, 1);
      this.retombees_code.splice(index, 1);
      this.retombees_type.splice(index, 1);
      this.retombees_dep.splice(index, 1);
      this.retombees_source.splice(index, 1);
      this.retombees_theme.splice(index, 1);
      this.retombees_conotation.splice(index, 1);
      this.retombees_pdf.splice(index, 1);
      this.retombees_link.splice(index, 1);
    },

    select_items() {
      let retombees_index = this.retombees_title.indexOf(
        this.selected_retombee
      );

      let type_index = this.retombees_type[retombees_index];
      let dep_index = this.retombees_dep[retombees_index];
      let source_index = this.retombees_source[retombees_index];
      let theme_index = this.retombees_theme[retombees_index];
      let conotation_index = this.retombees_conotation[retombees_index];

      this.updated_name = this.selected_retombee;

      this.selected_type = this.types_name[type_index - 1];
      this.selected_departement = this.departements_num[dep_index - 1];
      this.selected_source = this.sources_name[source_index - 1];
      this.selected_theme = this.themes_name[theme_index - 1];
      this.selected_conotation = this.conotations_name[conotation_index - 1];

      this.updated_code = this.retombees_code[retombees_index];
      this.updated_link = this.retombees_link[retombees_index];
      this.selected_date = this.retombees_date[retombees_index];
      this.selected_pdf = this.retombees_pdf[retombees_index];
    },

    updateDate(value) {
      this.selected_date = value;
    },

    downloadFile() {
      const filename = this.selected_pdf;
      RetombeeService.getFile(filename);
    },

    openUrl() {
      const url = "http://" + this.updated_link;
      window.open(url, "_blank");
    },

    handleFileUpload(event) {
      this.file = event;
      this.selected_pdf = event.name;
    },
  },

  async created() {
    await this.refresh_retombees();

    const departements = await DepartementService.getAll();
    const themes = await ThemeService.getAll();
    const types = await TypeService.getAll();
    const sources = await SourceService.getAll();
    const conotations = await ConotationService.getAll();

    departements.forEach((e) => {
      this.departements_num.push(e.num);
      this.departements_id.push(e.id);
    });

    themes.forEach((e) => {
      this.themes_name.push(e.name);
      this.themes_id.push(e.id);
    });

    types.forEach((e) => {
      this.types_name.push(e.name);
      this.types_id.push(e.id);
    });

    sources.forEach((e) => {
      this.sources_name.push(e.name);
      this.sources_id.push(e.id);
    });

    conotations.forEach((e) => {
      this.conotations_name.push(e.name);
      this.conotations_id.push(e.id);
    });
  },
};
</script>