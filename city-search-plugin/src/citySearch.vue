<template>
  <v-sheet>
    <v-card class="pa-2 ma-2">
      <v-container>
        <VcsTextField v-model="cityName" />
        <CustomVcsButton @click="findByCityName" title="By city name" />
        <VcsTextField v-model="coordinates" />
        <CustomVcsButton @click="findByCoordinates" title="By coordinates" />
      </v-container>
    </v-card>
  </v-sheet>
</template>

<script>
import { inject } from "@vue/composition-api";
import { VcsTextField } from "@vcsuite/ui-components";
import CustomVcsButton from "./components/CustomVcsButton.vue";
import Vue from "vue";
import Buefy from "buefy";
import { ViewPoint } from '@vcmap/core';

Vue.use(Buefy);

export const windowId = "city_search_window_id";

export default {
  name: "CitySearch",
  components: {
    CustomVcsButton,
    VcsTextField,
  },
  data() {
    return {
      cityName: "",
      coordinates: "",
      app: null,
    };
  },
  inject: ["vcsApp"],
  setup() {
    return {
      closeSelf() {
        app.windowManager.remove(windowId);
      },
    };
  },
  methods: {
    console() {
      console.log("app");
    },
    async findByCityName() {
      const apiKey = "79e9950b29421c3912111222112b75f0";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${apiKey}`)
      const data = await response.json();

      const vp = new ViewPoint({
        cameraPosition: [data.coord.lon, data.coord.lat, 15000]
      });
      await this.vcsApp.maps.activeMap.gotoViewPoint(vp);

    },
    async findByCoordinates() {
      const [lon, lat] = this.coordinates.split('/').map(n => parseFloat(n));

      const vp = new ViewPoint({
        cameraPosition: [lon, lat, 15000]
      });
      await this.vcsApp.maps.activeMap.gotoViewPoint(vp);
    } 
  },
};
</script>
