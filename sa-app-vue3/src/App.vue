<template>
  <AppHeader
    @click="toggle3d()" 
  />
  <Map
    id="map-2d"
  />
</template>

<script>
import start from "./services/vcmap.ts";
import MapComponent from "./components/MapComponent.vue";
import AppHeader from "./components/AppHeader.vue";
import { RennesApp } from './services/vcmap';

export default {
  name: "App",
  components: {
    AppHeader,
    Map: MapComponent,
  },
  props: {
    app: RennesApp
  },
  async mounted() {
    console.log(this.app)
    await start(this.is3d, this.currentViewPoint);
  },
  data() {
    return {
      is3d: false,
      // Default Rennes
      currentViewPoint: {
        x: -1.67,
        y: 48.1147,
        z: 16000,
        pitch: -10
      },
    };
  },
  methods: {
    async toggle3d() {
      // console.log(window.mapContext.activeMap);
      this.is3d = !this.is3d;
      await start(this.is3d, this.currentViewPoint);
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

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
