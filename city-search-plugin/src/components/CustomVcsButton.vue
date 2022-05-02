<template>
  <VcsButton class="custom_vcs_button">
    <span>{{ title }}<span>
  </VcsButton>
</template>

<script>
import { VcsButton } from "@vcsuite/ui-components";

export default {
  name: "customVcsButton",
  components: {
    VcsButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.custom_vcs_button:first-child > *:hover {
  background-color: blue !important;
}

.test:hover {
    background: black;
}
</style>