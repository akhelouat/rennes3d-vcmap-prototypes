<template>
  <v-sheet>
    <v-card class="pa-2 ma-2">
      <v-container>
        <VcsTextField />
        <CustomVcsButton @click="console" title="By city name"/>
        <button @click="closeSelf">test</button>
        <VcsTextField />
        <CustomVcsButton @click="console" title="By coordinates"/>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<script>
import { inject } from "@vue/composition-api";
import { VcsTextField } from "@vcsuite/ui-components";
import CustomVcsButton from './components/CustomVcsButton.vue';
import Vue from 'vue';
import Buefy from 'buefy';

Vue.use(Buefy)

export const windowId = "city_search_window_id";

export default {
  name: "CitySearch",
  components: {
    CustomVcsButton,
    VcsTextField,
  },
  setup() {
    this.app = inject("vcsApp");

    return {
      closeSelf() {
        app.windowManager.remove(windowId);
      },
      console() {
        console.log("app")
      }
    };
  },
};
</script>
