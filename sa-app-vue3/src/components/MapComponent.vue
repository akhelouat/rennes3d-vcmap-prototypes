<template>
  <div :id="this.app.id" class="map_container" />
</template>

<script lang="ts">
import { RennesApp } from "../services/vcmap";

export default {
  name: "MapComponent",
  props: {
    app: {
      type: RennesApp,
      required: true,
    },
  },
  mounted() {
    this.app.maps.setTarget(this.app.id);
  },
};
</script>


<style lang="scss" scoped>
.map_container {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 8 8'%3E%3Cg fill='%23acacac' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
  flex: 1;
  overflow: hidden;
}

// From vcmap
::v-deep {
  .mapElement {
    height: 100%;
    overflow: hidden; /* Fix for iFrame content */
  }

  .cesium-widget {
    height: 100%;
    position: relative;
  }

  .cesium-widget canvas {
    overflow: hidden;
    height: 100%;
    touch-action: none;
  }
}
</style>
