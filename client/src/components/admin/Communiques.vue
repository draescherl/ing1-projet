<template>
  <v-form>
    <v-row>
      <v-col cols="md-4 sm-12 offset-md-3">
        <v-select
          :items="communiques_title"
          v-model="selected_communique"
          @change="select_items()"
          label="Communiqué"
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
            <v-card-title class="headline"> Modifier communiqué </v-card-title>

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
                :items="themes_name"
                v-model="selected_theme"
                label="Thème"
                outlined
              ></v-select>
              <!-- pdf -->
              <v-text-field
                label="Nouveau lien"
                v-model="updated_link"
              ></v-text-field>
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
            <v-card-title class="headline"> Supprimer communiqué </v-card-title>
            <v-card-text>
              Confirmer la suppression du communiqué
              <span class="font-italic">{{ selected_communique }}</span> ? Cette
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
import CommuniqueService from "../../services/CommuniqueService";

import Date from "../inputs/Date";

export default {
  name: "Communiques",

  components: {
    Date,
  },

  data: () => ({
    dialog_update: false,
    dialog_delete: false,

    communiques_id: [],
    communiques_date: [],
    communiques_title: [],
    communiques_code: [],
    communiques_type: [],
    communiques_dep: [],
    communiques_theme: [],
    communiques_pdf: [],
    communiques_link: [],

    departements_num: [],
    departements_id: [],

    themes_name: [],
    themes_id: [],

    types_name: [],
    types_id: [],

    new_name: "",
    updated_name: "",
    updated_date: "",
    updated_code: "",
    updated_type: "",
    updated_dep: "",
    updated_theme: "",
    updated_pdf: "",
    updated_link: "",
    selected_communique: "",
    selected_departement: "",
    selected_theme: "",
    selected_type: "",
    selected_date: "",
  }),

  methods: {
    async refresh_communiques() {
      this.communiques_id = [];
      this.communiques_date = [];
      this.communiques_title = [];
      this.communiques_code = [];
      this.communiques_type = [];
      this.communiques_dep = [];
      this.communiques_theme = [];
      this.communiques_pdf = [];
      this.communiques_link = [];

      const communiques = await CommuniqueService.getAll();
      communiques.forEach((e) => {
        this.communiques_id.push(e.id);
        this.communiques_title.push(e.title);
        this.communiques_code.push(e.cp_code);
        this.communiques_type.push(e.type);
        this.communiques_dep.push(e.departement);
        this.communiques_theme.push(e.theme);
        this.communiques_pdf.push(e.pdf_path);
        this.communiques_link.push(e.hyperlink);

        let formated_date = e.publi_date.substring(0, 10);
        formated_date = formated_date.split("-");
        formated_date[2]++; // The date returned by the db is one day behind for some reason ...
        formated_date = formated_date.join("-");
        // formated_date = formated_date.reverse().join("/");
        this.communiques_date.push(formated_date);
      });
    },

    async update() {
      let communique_index = this.communiques_title.indexOf(
        this.selected_communique
      );
      let type_index = this.types_name.indexOf(this.selected_type);
      let departement_index = this.departements_num.indexOf(
        this.selected_departement
      );
      let theme_index = this.themes_name.indexOf(this.selected_theme);

      let communique_id = this.communiques_id[communique_index];
      let type_id = this.types_id[type_index];
      let departement_id = this.departements_id[departement_index];
      let theme_id = this.themes_id[theme_index];
      let date = this.selected_date.split("/").reverse().join("-");

      // A CHANGER !!!
      // let path = "path";

      CommuniqueService.update(
        communique_id,
        date,
        this.updated_name,
        this.updated_code,
        type_id,
        departement_id,
        theme_id,
        // path,
        this.updated_link
      );

      this.selected_communique = this.updated_name;
      await this.refresh_communiques();
      this.select_items();
    },

    remove() {
      let index = this.communiques_title.indexOf(this.selected_communique);
      let id = this.communiques_id[index];
      CommuniqueService.delete(id);

      this.selected_communique = "";
      this.communiques_id.splice(index, 1);
      this.communiques_date.splice(index, 1);
      this.communiques_title.splice(index, 1);
      this.communiques_code.splice(index, 1);
      this.communiques_type.splice(index, 1);
      this.communiques_dep.splice(index, 1);
      this.communiques_theme.splice(index, 1);
      this.communiques_pdf.splice(index, 1);
      this.communiques_link.splice(index, 1);
    },

    select_items() {
      let communiques_index = this.communiques_title.indexOf(
        this.selected_communique
      );
      let type_index = this.communiques_type[communiques_index];
      let dep_index = this.communiques_dep[communiques_index];
      let theme_index = this.communiques_theme[communiques_index];

      this.updated_name = this.selected_communique;
      this.selected_type = this.types_name[type_index - 1];
      this.selected_departement = this.departements_num[dep_index - 1];
      this.selected_theme = this.themes_name[theme_index - 1];
      this.updated_code = this.communiques_code[communiques_index];
      this.updated_link = this.communiques_link[communiques_index];
      this.selected_date = this.communiques_date[communiques_index];
    },

    updateDate(value) {
      this.selected_date = value;
    },
  },

  async created() {
    await this.refresh_communiques();

    const departements = await DepartementService.getAll();
    const themes = await ThemeService.getAll();
    const types = await TypeService.getAll();

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
  },
};
</script>