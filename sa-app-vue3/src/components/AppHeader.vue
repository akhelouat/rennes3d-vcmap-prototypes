<template>
  <div id="app-header">
    <h2>Vue3 VC Map Prototype</h2>
    <div class="w-5/6 text-right">
      <button class="btn btn-orange">3d</button>
    </div>
  </div>
</template>

<script >
export default {
  name: 'AppHeader'
};
</script>

<style lang="scss" scoped >
#app-header {
  height: 5rem;
  background-color: dodgerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: white;
}

.btn {
  @apply font-bold py-2 px-4 rounded;
  z-index: 2
}
.btn-orange {
  @apply bg-orange-400 text-white;
}
.btn-orange:hover {
  @apply bg-orange-700;
}
</style>