<template>
  <div>
    <div v-for="(item, index) in headers" :key="index">
      <v-data-table
        :headers="item"
        :items="bilan[index]"
        :sort-by="[]"
        :sort-desc="[false, true]"
        :hide-default-footer="true"
        sort
        class="elevation-1 mt-4"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import StatService from "../../services/StatService";

export default {
  name: "BilanDR",

  props: ["month"],

  data: () => ({
    headers: [
      [
        {
          text: "Tonalité des médias",
          value: "name",
          sortable: false,
          align: "start",
        },
        { text: "Positifs", value: "conotations_pos" },
        { text: "Négatifs", value: "conotations_neg" },
      ],
      [
        { text: "Supports", value: "name", sortable: false, align: "start" },
        { text: "Landes", value: "types_landes" },
        { text: "HP", value: "types_hp" },
        { text: "PA", value: "types_pa" },
      ],
      [
        { text: "Nombre CP", value: "name", sortable: false, align: "start" },
        { text: "", value: "cp_num" },
      ],
      [
        {
          text: "Retombées liées aux CP",
          value: "name",
          sortable: false,
          align: "start",
        },
        { text: "", value: "retombeesCP" },
      ],
      [
        {
          text: "Thèmes les plus récurrents",
          value: "name",
          sortable: false,
          align: "start",
        },
        { text: "Landes", value: "themes_landes" },
        { text: "HP", value: "themes_hp" },
        { text: "PA", value: "themes_pa" },
      ],
      [
        {
          text: "Tonalité des articles par thématique",
          value: "name",
          sortable: false,
        },
        { text: "Landes positives", value: "themes_landes_pos" },
        { text: "Landes négatives", value: "themes_landes_neg" },
        { text: "HP positives", value: "themes_hp_pos" },
        { text: "HP négatives", value: "themes_hp_neg" },
        { text: "PA positives", value: "themes_pa_pos" },
        { text: "PA négatives", value: "themes_pa_neg" },
      ],
    ],
    bilan: [],
  }),

  async created() {
    let tmp;
    let data = {};

    let array_names = ["Landes", "PA", "HP"];
    let array_types = ["PQR", "Radio", "TV", "Web"];
    let array_themes = [
      "Partenariat",
      "Sécurité",
      "Transition Ecologique",
      "RH",
      "Crise Climatique",
      "Crise RH",
      "Coupure",
      "Linky",
      "RSE",
    ];

    let array_conotation = [];
    for (let i = 1; i <= array_names.length; i++) {
      data.name = array_names[i - 1];

      (tmp = await StatService.getRetombeesConotation_byMonthAndDepartement(
        this.month,
        i,
        1
      )),
        (data.conotations_pos = tmp[0].cnt);
      (tmp = await StatService.getRetombeesConotation_byMonthAndDepartement(
        this.month,
        i,
        2
      )),
        (data.conotations_neg = tmp[0].cnt);

      array_conotation.push(data);
      data = {};
    }
    this.bilan.push(array_conotation);

    let array_supports = [];
    for (let i = 1; i <= array_types.length; i++) {
      data.name = array_types[i - 1];

      (tmp = await StatService.getRetombeesType_byMonthAndDepartement(
        this.month,
        1,
        i
      )),
        (data.types_landes = tmp[0].cnt);
      (tmp = await StatService.getRetombeesType_byMonthAndDepartement(
        this.month,
        2,
        i
      )),
        (data.types_pa = tmp[0].cnt);
      (tmp = await StatService.getRetombeesType_byMonthAndDepartement(
        this.month,
        3,
        i
      )),
        (data.types_hp = tmp[0].cnt);

      array_supports.push(data);
      data = {};
    }
    this.bilan.push(array_supports);

    let array_cp = [];
    for (let i = 1; i <= array_names.length; i++) {
      data.name = array_names[i - 1];

      (tmp = await StatService.getCP_byMonthAndDepartement(this.month, i)),
        (data.cp_num = tmp[0].cnt);

      array_cp.push(data);
      data = {};
    }
    this.bilan.push(array_cp);

    let array_retombeesCP = [];
    for (let i = 1; i <= array_names.length; i++) {
      data.name = array_names[i - 1];

      (tmp = await StatService.getRetombeesCP_byMonthAndDepartement(
        this.month,
        i
      )),
        (data.retombeesCP = tmp[0].cnt);

      array_retombeesCP.push(data);
      data = {};
    }
    this.bilan.push(array_retombeesCP);

    let array_themesRecurrents = [];
    for (let i = 1; i <= array_themes.length; i++) {
      data.name = array_themes[i - 1];

      (tmp = await StatService.getRetombeesThemes_byMonthAndDepartement(
        this.month,
        1,
        i
      )),
        (data.themes_landes = tmp[0].cnt);
      (tmp = await StatService.getRetombeesThemes_byMonthAndDepartement(
        this.month,
        2,
        i
      )),
        (data.themes_pa = tmp[0].cnt);
      (tmp = await StatService.getRetombeesThemes_byMonthAndDepartement(
        this.month,
        3,
        i
      )),
        (data.themes_hp = tmp[0].cnt);

      array_themesRecurrents.push(data);
      data = {};
    }
    this.bilan.push(array_themesRecurrents);

    let array_themesConotation = [];
    for (let i = 1; i <= array_themes.length; i++) {
      data.name = array_themes[i - 1];

      (tmp = await StatService.getRetombeesThemesConotation_byMonthAndDepartement(
        this.month,
        1,
        i,
        1
      )),
        (data.themes_landes_pos = tmp[0].cnt);
      (tmp = await StatService.getRetombeesThemesConotation_byMonthAndDepartement(
        this.month,
        1,
        i,
        2
      )),
        (data.themes_landes_neg = tmp[0].cnt);

      (tmp = await StatService.getRetombeesThemesConotation_byMonthAndDepartement(
        this.month,
        2,
        i,
        1
      )),
        (data.themes_pa_pos = tmp[0].cnt);
      (tmp = await StatService.getRetombeesThemesConotation_byMonthAndDepartement(
        this.month,
        2,
        i,
        2
      )),
        (data.themes_pa_neg = tmp[0].cnt);

      (tmp = await StatService.getRetombeesThemesConotation_byMonthAndDepartement(
        this.month,
        3,
        i,
        1
      )),
        (data.themes_hp_pos = tmp[0].cnt);
      (tmp = await StatService.getRetombeesThemesConotation_byMonthAndDepartement(
        this.month,
        3,
        i,
        2
      )),
        (data.themes_hp_neg = tmp[0].cnt);

      array_themesConotation.push(data);
      data = {};
    }
    this.bilan.push(array_themesConotation);
  },
};
</script>