<template>
  <div class="container">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Find a city
      </label>
      <input
        v-model="cityName"
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          text-gray-700
          leading-tight
          focus:outline-none focus:shadow-outline
        "
        id="cityName"
        type="text"
        placeholder="City name"
      />
    </div>
    <div class="flex items-center justify-center">
      <button
        @click="search"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
          focus:outline-none focus:shadow-outline
        "
        type="button"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { ViewPoint } from '@vcmap/core';
import { RennesApp } from "../services/vcmap";

export default {
  name: "Sidebar",
  data() {
    return {
      cityName: ""
    }
  },
  props: {
    app: {
      type: RennesApp,
      required: true,
    },
  },
  methods: {
    async search() {
      const vp = new ViewPoint({
        cameraPosition: [10.00, 10.00, 1000]
      });
      await this.app.maps.activeMap.gotoViewPoint(vp)
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
  height: 100%;
  width: 15%;
  background: white;
}
</style>