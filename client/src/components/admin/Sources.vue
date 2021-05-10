<template>
  <v-form>
    <v-row>
      <v-col cols="md-4 sm-12 offset-md-3">
        <v-select
          :items="sources_name"
          v-model="selected_source"
          @change="select_items()"
          label="Source"
          outlined
        ></v-select>
      </v-col>

      <v-col cols="md-1 sm-2">
        <v-dialog v-model="dialog_update" width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab dark color="info" v-bind="attrs" v-on="on">
              <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline"> Modifier source </v-card-title>

            <v-card-text>
              <p class="font-italic">
                Il n'est pas nécessaire de changer les champs que vous ne
                souhaitez pas modifier.
              </p>
              <v-text-field
                label="Nouveau nom"
                v-model="updated_name"
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
        <v-dialog v-model="dialog_create" width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              dark
              color="success"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline"> Nouvelle source </v-card-title>

            <v-card-text>
              <p class="font-italic">Tous les champs sont obligatoires.</p>
              <v-text-field label="Nom" v-model="new_name"></v-text-field>
              <v-select
                :items="types_name"
                v-model="selected_type_new"
                label="Type"
                outlined
              ></v-select>
              <v-select
                :items="departements_num"
                v-model="selected_departement_new"
                label="Département"
                outlined
              ></v-select>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  dialog_create = false;
                  create();
                "
              >
                Valider
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col cols="md-1 sm-2">
        <v-dialog v-model="dialog_delete" persistent max-width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab color="error" dark v-bind="attrs" v-on="on">
              <v-icon dark> mdi-delete-forever </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline"> Supprimer source </v-card-title>
            <v-card-text>
              Confirmer la suppression de la source
              <span class="font-italic">{{ selected_source }}</span> ? Cette
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
import SourceService from "../../services/SourceService";
import TypeService from "../../services/TypeService";

export default {
  name: "Sources",

  data: () => ({
    dialog_update: false,
    dialog_create: false,
    dialog_delete: false,

    types_name: [],
    types_id: [],

    departements_num: [],
    departements_id: [],

    sources_name: [],
    sources_id: [],
    sources_type: [],
    sources_departement: [],

    new_name: "",
    updated_name: "",
    selected_source: "",
    selected_type: "",
    selected_type_new: "",
    selected_departement: "",
    selected_departement_new: "",
  }),

  methods: {
    async refresh_sources() {
      this.sources_name = [];
      this.sources_id = [];
      this.sources_type = [];
      this.sources_departement = [];

      const sources = await SourceService.getAll();
      sources.forEach((e) => {
        this.sources_id.push(e.id);
        this.sources_name.push(e.name);
        this.sources_type.push(e.type);
        this.sources_departement.push(e.departement);
      });
    },

    async update() {
      let departement_index = this.departements_num.indexOf(
        this.selected_departement
      );
      let type_index = this.types_name.indexOf(this.selected_type);
      let source_index = this.sources_name.indexOf(this.selected_source);

      let departement_id = this.departements_id[departement_index];
      let type_id = this.types_id[type_index];
      let source_id = this.sources_id[source_index];

      SourceService.update(
        source_id,
        this.updated_name,
        type_id,
        departement_id
      );

      this.selected_source = this.updated_name;
      this.updated_name = "";
      this.selected_type = "";
      this.selected_departement = "";

      await this.refresh_sources();
    },

    async create() {
      let departement_index = this.departements_num.indexOf(
        this.selected_departement_new
      );
      let type_index = this.types_name.indexOf(this.selected_type_new);

      let departement_id = this.departements_id[departement_index];
      let type_id = this.types_id[type_index];

      SourceService.post(this.new_name, departement_id, type_id);
      await this.refresh_sources();
    },

    remove() {
      let index = this.sources_name.indexOf(this.selected_source);
      let id = this.sources_id[index];

      SourceService.delete(id);

      this.selected_source = "";
      this.sources_name.splice(index, 1);
      this.sources_id.splice(index, 1);
      this.sources_type.splice(index, 1);
      this.sources_departement.splice(index, 1);
    },

    select_items() {
      let source_index = this.sources_name.indexOf(this.selected_source);
      let type_index = this.sources_type[source_index];
      let departement_index = this.sources_departement[source_index];

      this.updated_name = this.selected_source;
      this.selected_type = this.types_name[type_index - 1];
      this.selected_departement = this.departements_num[departement_index - 1];
    },
  },

  async created() {
    await this.refresh_sources();

    const departements = await DepartementService.getAll();
    const types = await TypeService.getAll();

    departements.forEach((e) => {
      this.departements_num.push(e.num);
      this.departements_id.push(e.id);
    });

    types.forEach((e) => {
      this.types_name.push(e.name);
      this.types_id.push(e.id);
    });
  },
};
</script>