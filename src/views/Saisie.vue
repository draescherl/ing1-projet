<template>
  <div class="saisie">
    <v-form v-model="valid">
      
      <Date />
      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Référence"
        required
      ></v-text-field>

      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Titre"
        required
      ></v-text-field>

      <v-select :items="source.PQR" label="Type" outlined></v-select>
      <v-select :items="source.PQR" label="Département" outlined></v-select>
      <v-select :items="source.PQR" label="Source" outlined></v-select>
      <v-select :items="source.PQR" label="Thème" outlined></v-select>
      <v-radio-group v-model="row" row>
        <v-radio label="Positive" value="positive" color="success"></v-radio>
        <v-radio label="Négative" value="negative" color="error"></v-radio>
      </v-radio-group>

      <Date />
      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Code"
        required
      ></v-text-field>

      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        label="Titre"
        required
      ></v-text-field>

      <v-select :items="source.PQR" label="Type" outlined></v-select>
      <v-select :items="source.PQR" label="Thème" outlined></v-select>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="source.PQR"
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

    </v-form>
  </div>
</template>

<script>
import Date from "../components/inputs/Date";

export default {
  name: "Saisie",

  components: {
    Date,
  },

  data: () => ({
    types: ["PQR", "Radio", "TV", "Web", "Réseaux Sociaux"],
    departements: [64, 65, 40],
    source: {
      PQR: [
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
      TV: [
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
        "Facebook",
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
      RS: [],
    },
    themes: [
      "Partenariat",
      "Sécurité",
      "Transition Ecologique",
      "RH",
      {
        crise: ["Crise Climatique", "Crise RH"],
      },
      "Coupure",
      "Linky",
      "RSE",
    ],
    row: null,
  }),
};
</script>