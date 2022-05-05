<template>
  <div id="plugin-containter">
    <p>debugger</p>
    <button @click="console">test</button>
  </div>
</template>

<script>
export const windowId = "debugger_plugin_window_id";

export default {
  name: "Debugger",
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
      console.log(this.VcsApp);
    }
  },
};
</script>

<style scoped>
#plugin-container {
  height: 20rem;
  width: 20rem;
  background: white;
}
</style>