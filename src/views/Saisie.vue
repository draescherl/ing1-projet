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
      pqr: [
        "Bulletin Agricole des Hautes-Pyrénées",
        "La Dépêche",
        "La Gazette du Midi",
        "La Nouvelle République des Pyrénées",
        "La République des Pyrénées",
        "La semaine des Pyrénées",
        "L'Avenir Agricole & Viticole Aquitain 40",
        "L'Avenir Agricole & Viticole Aquitain 64",
        "Le Journal de Saint Palais",
        "Le Miroir de la Soule",
        "Le Petit Journal 65",
        "Le Sillon",
        "L'Eclair des Pyrénées",
        "Les annonces Landaises",
        "L'Essor Bigourdan",
        "Mediabask",
        "Sud Ouest Landes",
        "Sud-Ouest Béarn",
        "Sud-Ouest Pays Basque",
      ],
      radio: [
        "Atomic Radio 40",
        "Atomic Radio 64",
        "Atomic Radio 65",
        "CANAL VASCO",
        "Chérie FM 40",
        "Chérie FM 64",
        "Chérie FM 65",
        "France Bleu Béarn",
        "France Bleu Gascogne",
        "France Bleu Pays Basque",
        "Frequence Grands Lacs",
        "Nostalgie 40",
        "Nostalgie 64",
        "Nostalgie 65",
        "RADIO Gure Iratia",
        "Radio 100% 40",
        "Radio 100% 64",
        "Radio 100% 65",
        "RADIO EITB",
        "Radio Inside 64",
        "Radio Inside 65",
        "RADIO LAPURDI",
        "RADIO MENDILLA",
        "Radio Mont de Matsan",
        "Radio Oloron",
        "Radio Présence",
        "Radio Vallee d'Aure",
        "Radio voix du Béarn",
        "RFM 40",
        "RFM 64",
        "RFM 65",
        "Virgin Radio 40",
        "Virgin Radio 64",
        "Virgin Radio 65",
        "XIBEROKO BOTXA",
      ],
      tv: [
        "France 2 40",
        "France 2 64",
        "France 2 65",
        "France 3 40",
        "France 3 64",
        "France 3 65",
        "TV PI 40",
        "TV PI 64",
        "web tv landes",
      ],
      web: [
        "Annonces Landaises",
        "Aquitainefr 40",
        "Aquitainefr 64",
        "Aquitainefr 65",
        "Atomic Radio 40",
        "Atomic Radio 64",
        "Atomic Radio 65",
        "Avenir Aquitaine 40",
        "Avenir Aquitaine 64",
        "Entreprises engagées 64",
        "Flash-Infos Nouvelle-Aquitaine Occitanie 64",
        "Flash-Infos Nouvelle-Aquitaine Occitanie 65",
        "France bleu Bearn",
        "France bleu gascogne",
        "France bleu pays pasque",
        "Frequence Grand Lac",
        "HpYTV 40",
        "HpYTV 64",
        "HpYTV 65",
        "La Depeche",
        "La Republique des pyrenees",
        "La semaine des Pyrénées",
        "La semaine du Pays Basque",
        "Le courrier français des Landes",
        "Le petit journal",
        "Le Sillon",
        "Mediabask",
        "Nouvelle Republique pyrenees",
        "objectif aquitaine 40",
        "objectif aquitaine 64",
        "PressLib 40",
        "PressLib 64",
        "PressLib 65",
        "Radio 100% 40",
        "Radio 100% 64",
        "Radio 100% 65",
        "Radio mont de Marsan",
        "Radio presence",
        "Sud Ouest 40",
        "Sud Ouest 64",
        "Tarbes/Lourdes infos",
        "WebTV Oloron",
      ],
      rs: ["Facebook"],
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