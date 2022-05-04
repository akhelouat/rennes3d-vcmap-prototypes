<template>
  <div id="app-container">
    <AppHeader @click="toggle3d()" />
    <div id="map">
      <Sidebar :app="app"/>
      <Map :app="app"/>
    </div>
  </div>
</template>

<script>
// import start from "./services/vcmap.ts";
import MapComponent from "./components/MapComponent.vue";
import AppHeader from "./components/AppHeader.vue";
import Sidebar from './components/Sidebar.vue';
import { RennesApp } from "./services/vcmap";

export default {
  name: "App",
  components: {
    AppHeader,
    Map: MapComponent,
    Sidebar
  },
  props: {
    app: RennesApp,
  },
  data() {
    return {
      is3d: false,
      // Default Rennes
      currentViewPoint: {
        x: -1.67,
        y: 48.1147,
        z: 16000,
        pitch: -10,
      },
    };
  },
  methods: {
    async toggle3d() {
      this.is3d = !this.is3d;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.button {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
}

#app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#map {
  flex: 1;
  background: grey;
  display: flex;
  flex-direction: row;
}
</style>
