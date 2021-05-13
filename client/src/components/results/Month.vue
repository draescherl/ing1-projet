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
// import StatService from "../../services/StatService";

export default {
  name: "BilanDR",

  props: ["month"],

  data: () => ({
    headers: [
      [
        { text: "Tonalité des médias", value: "" },
        { text: "Positifs", value: "" },
        { text: "Négatifs", value: "" },
      ],
      [
        { text: "Supports", value: "" },
        { text: "Landes", value: "" },
        { text: "HP", value: "" },
        { text: "PA", value: "" },
      ],
      [
        { text: "Nombre CP", value: "" },
        { text: "", value: "" },
      ],
      [
        { text: "Retombées liées aux CP", value: "" },
        { text: "Landes", value: "" },
        { text: "HP", value: "" },
        { text: "PA", value: "" },
      ],
      [
        { text: "Thèmes les plus récurrents", value: "" },
        { text: "Landes", value: "" },
        { text: "HP", value: "" },
        { text: "PA", value: "" },
      ],
      [
        { text: "Tonalité des articles par thématique", value: "" },
        { text: "Landes positives", value: "" },
        { text: "Landes négatives", value: "" },
        { text: "HP positives", value: "" },
        { text: "HP négatives", value: "" },
        { text: "PA positives", value: "" },
        { text: "PA négatives", value: "" },
      ],

      // {
      //   text: "Trimestre",
      //   align: "start",
      //   sortable: false,
      //   value: "name",
      // },
      // { text: "CP/DP/prise de parole", value: "cp" },
      // { text: "Retombées CP", value: "retombees_cp" },
      // { text: "Total retombées", value: "total_retombees" },
      // { text: "Retombées positives", value: "retombees_positives" },
      // { text: "Retombées négatives", value: "retombees_negatives" },
      // { text: "PQR", value: "retombees_pqr" },
      // { text: "Web", value: "retombees_web" },
      // { text: "Radio", value: "retombees_radio" },
      // { text: "TV", value: "retombees_tv" },
    ],
    bilan: [],
  }),

  async created() {},
};
</script>