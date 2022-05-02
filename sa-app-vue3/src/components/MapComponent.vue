<template>
  <div
    :id="id" 
    class="map_container"
  />
</template>

<script lang="ts">
  export default {
    name: 'MapComponent',
    props: {
      id: {
        type: String,
        required: true,
      },
    }
  };
</script>


<style lang="scss" scoped>
  .map_container {
    position: absolute;
    overflow: hidden;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 8 8'%3E%3Cg fill='%23acacac' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
    font-family: Arial, sans-serif;
    font-size: 0.9rem;
    top: 5rem;
    left: 0;
    right: 0;
    bottom: 0;
    flex:1;
  }


  // From vcmap
  ::v-deep {
    .mapElement {
      height: 100%;
      overflow: hidden; /* Fix for iFrame content */
    }

    .cesium-widget {
      height: 100%;
      width: 100%;
      position: relative;
    }

    .cesium-widget canvas{
      overflow: hidden;
      height: 100%;
      width: 100%;
      touch-action: none;
    }
  }
</style>
