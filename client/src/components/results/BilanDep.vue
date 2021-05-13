<template>
  <div>
    <div v-for="n in iterations" :key="n">
      <h4 class="mt-4">{{ parseInt(current_year) - n + 1 }}</h4>
      <v-data-table
        :headers="headers_dr"
        :items="bilan_dr[n - 1]"
        :sort-by="[]"
        :sort-desc="[false, true]"
        :hide-default-footer="true"
        sort
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import StatService from "../../services/StatService";

export default {
  name: "BilanDR",

  props: ["dep"],

  data: () => ({
    oldest_year: 0,
    current_year: new Date().getFullYear(),
    iterations: 0,

    headers_dr: [
      {
        text: "Trimestre",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "CP/DP/prise de parole", value: "cp" },
      { text: "Retombées CP", value: "retombees_cp" },
      { text: "Total retombées", value: "total_retombees" },
      { text: "Retombées positives", value: "retombees_positives" },
      { text: "Retombées négatives", value: "retombees_negatives" },
      { text: "PQR", value: "retombees_pqr" },
      { text: "Web", value: "retombees_web" },
      { text: "Radio", value: "retombees_radio" },
      { text: "TV", value: "retombees_tv" },
    ],
    bilan_dr: [],
  }),

  methods: {},

  async created() {
    this.oldest_year = await StatService.getOldestYear();
    this.iterations = this.current_year - this.oldest_year + 1;
    
    let departement_id = await StatService.departementToId(this.$props.dep);
    console.log("num : " + this.$props);
    console.log("id : " + departement_id);
    
    let tmp;
    let data = {};
    let tmp_array = [];
    for (let j = this.current_year; j >= this.oldest_year; j--) {
      for (let i = 0; i < 4; i++) {
        data.name = `${i + 1}T`;
        tmp = await StatService.getCP_byDepartement(
          j.toString(),
          i + 1,
          departement_id
        );
        data.cp = tmp[0].cnt;
        tmp = await StatService.getRetombeesCP_byDepartement(
          j.toString(),
          i + 1,
          departement_id
        );
        data.retombees_cp = tmp[0].cnt;
        tmp = await StatService.getRetombees_byDepartement(
          j.toString(),
          i + 1,
          departement_id
        );
        data.total_retombees = tmp[0].cnt;
        tmp = await StatService.getRetombeesConotation_byDepartement(
          j.toString(),
          i + 1,
          1,
          departement_id
        );
        data.retombees_positives = tmp[0].cnt;
        tmp = await StatService.getRetombeesConotation_byDepartement(
          j.toString(),
          i + 1,
          2,
          departement_id
        );
        data.retombees_negatives = tmp[0].cnt;
        tmp = await StatService.getRetombeesType_byDepartement(
          j.toString(),
          i + 1,
          1,
          departement_id
        );
        data.retombees_pqr = tmp[0].cnt;
        tmp = await StatService.getRetombeesType_byDepartement(
          j.toString(),
          i + 1,
          4,
          departement_id
        );
        data.retombees_web = tmp[0].cnt;
        tmp = await StatService.getRetombeesType_byDepartement(
          j.toString(),
          i + 1,
          2,
          departement_id
        );
        data.retombees_radio = tmp[0].cnt;
        tmp = await StatService.getRetombeesType_byDepartement(
          j.toString(),
          i + 1,
          3,
          departement_id
        );
        data.retombees_tv = tmp[0].cnt;
        tmp_array.push(data);
        data = {};
      }
      this.bilan_dr.push(tmp_array);
      tmp_array = [];
    }
  },
};
</script>