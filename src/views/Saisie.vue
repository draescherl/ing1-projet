<template>
  <div class="saisie">
    <v-tabs class="d-flex justify-center">
      <v-tab @click="select(0)">Retombée presse</v-tab>
      <v-tab @click="select(1)">Communiqué de presse</v-tab>
    </v-tabs>

    <v-form>
      <div v-if="selected == 0">
        <Retombee
          :type="types"
          :departement="departements"
          :sources="sources"
          :theme="themes"
        />
      </div>

      <div v-if="selected == 1">
        <Communique :type="types" :departement="departements" :theme="themes" />
      </div>
    </v-form>
  </div>
</template>

<script>
import Retombee from "../components/inputs/Retombee";
import Communique from "../components/inputs/Communique";

export default {
  name: "Saisie",

  components: {
    Retombee,
    Communique,
  },

  data: () => ({
    selected: 0,
    types: ["PQR", "Radio", "TV", "Web", "Réseaux Sociaux"],
    departements: [64, 65, 40].sort(),
    sources: {
      pqr: {
        40: ["Les annonces Landaises", "La Gazette du Midi"].sort(),
        64: [
          "La République des Pyrénées",
          "Le Journal de Saint Palais",
          "Le Miroir de la Soule",
          "Le Sillon",
          "L'Eclair des Pyrénées",
          "Mediabask",
          "Sud-Ouest Béarn",
          "Sud-Ouest Pays Basque",
        ].sort(),
        65: [
          "Bulletin Agricole des Hautes-Pyrénées",
          "La Dépêche",
          "La Nouvelle République des Pyrénées",
          "La semaine des Pyrénées",
          "L'Essor Bigourdan",
        ].sort(),
      },
      radio: {
        40: [
          "Atomic Radio 40",
          "Chérie FM 40",
          "Nostalgie 40",
          "L'Avenir Agricole & Viticole Aquitain 40",
          "Sud Ouest Landes",
          "France Bleu Gascogne",
          "Frequence Grands Lacs",
          "Radio Mont de Matsan",
          "Radio Présence",
          "Radio 100% 40",
          "RFM 40",
          "Virgin Radio 40",
        ].sort(),
        64: [
          "Atomic Radio 64",
          "Chérie FM 64",
          "Nostalgie 64",
          "CANAL VASCO",
          "France Bleu Béarn",
          "France Bleu Pays Basque",
          "RADIO Gure Iratia",
          "RADIO EITB",
          "RADIO LAPURDI",
          "RADIO MENDILLA",
          "Radio Oloron",
          "Radio voix du Béarn",
          "XIBEROKO BOTXA",
          "L'Avenir Agricole & Viticole Aquitain 64",
          "Radio Inside 64",
          "Radio 100% 64",
          "RFM 64",
          "Virgin Radio 64",
        ].sort(),
        65: [
          "Atomic Radio 65",
          "Chérie FM 65",
          "Nostalgie 65",
          "Le Petit Journal 65",
          "Radio Inside 65",
          "Radio Vallee d'Aure",
          "Radio 100% 65",
          "RFM 65",
          "Virgin Radio 65",
        ].sort(),
      },
      tv: {
        40: ["France 2 40", "France 3 40", "TV PI 40", "web tv landes"].sort(),
        64: ["France 2 64", "France 3 64", "TV PI 64"].sort(),
        65: ["France 2 65", "France 3 65"].sort(),
      },
      web: {
        40: [
          "Annonces Landaises",
          "Atomic Radio 40",
          "Radio 100% 40",
          "Sud Ouest 40",
          "Avenir Aquitaine 40",
          "HpYTV 40",
          "France bleu gascogne",
          "Frequence Grand Lac",
          "Radio mont de Marsan",
          "Radio presence",
          "Le courrier français des Landes",
          "PressLib 40",
          "Objectif Aquitaine 40",
          "Aquitainefr 40",
        ].sort(),
        64: [
          "Aquitainefr 64",
          "Atomic Radio 64",
          "Avenir Aquitaine 64",
          "France bleu Bearn",
          "France bleu pays pasque",
          "La Republique des pyrenees",
          "La semaine du Pays Basque",
          "Mediabask",
          "Le Sillon",
          "WebTV Oloron",
          "Entreprises engagées 64",
          "Sud Ouest 64",
          "PressLib 64",
          "Radio 100% 64",
          "HpYTV 64",
          "Flash-Infos Nouvelle-Aquitaine Occitanie 64",
          "objectif aquitaine 64",
        ].sort(),
        65: [
          "Aquitainefr 65",
          "Atomic Radio 65",
          "La semaine des Pyrénées",
          "Nouvelle Republique pyrenees",
          "Tarbes/Lourdes infos",
          "La Depeche",
          "Le petit journal",
          "Radio 100% 65",
          "PressLib 65",
          "HpYTV 65",
          "Flash-Infos Nouvelle-Aquitaine Occitanie 65",
        ].sort(),
      },
      rs: ["Facebook"].sort(),
    },
    themes: [
      "Partenariat",
      "Sécurité",
      "Transition Ecologique",
      "RH",
      "Crise Climatique", // The company wants these as one, check subject again later
      "Crise RH",
      "Coupure",
      "Linky",
      "RSE",
    ],
    row: null,
  }),

  methods: {
    select(tab) {
      this.selected = tab;
    },
  },
};
</script>