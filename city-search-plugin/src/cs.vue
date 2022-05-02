<template>
  <v-container>
    <VcsTextField />
    <VcsButton @click="console">
      <span>By city name</span>
    </VcsButton>
    <VcsTextField />
    <VcsButton @click="console">
      <span>By coordinate</span>
    </VcsButton>
  </v-container>
</template>
<script>
import { inject, ref, watch } from "@vue/composition-api";
import {
  VcsSelect,
  VcsCheckbox,
  VcsButton,
  VcsTextField,
  VcsFormattedNumber,
  VcsFormSection,
  VcsLabel,
} from "@vcsuite/ui-components";

export default {
  name: "CitySearchPlugin",
  components: {
    VcsButton,
    VcsSelect,
    VcsTextField,
    VcsCheckbox,
    VcsFormattedNumber,
    VcsFormSection,
    VcsLabel,
  },
  props: {
    windowId: {
      type: String,
      default: "",
    },
  },
  setup() {
    const app = inject("vcsApp");
    const plugin = app.plugins.getByKey("@vcmap/plugin-example");
    const newUpdate = ref(true);
    watch(plugin.state, () => {
      newUpdate.value = true;
    });

    return {
      showSection: true,
      dense: true,
      helpExample,
      // no object-destruction of reactive objects! or use toRef()
      state: plugin.state,
      // do not put the whole config here, since it would become reactive
      selectOptions: plugin.config.selectOptions,
      initialTextInput: plugin.config.initialTextInput,
      isValid: false,
      isValidText,
      conditionalTest,
      isValidEmail,
      newUpdate,
      logState() {
        // eslint-disable-next-line no-console
        console.log(plugin.getSerializedState());
        newUpdate.value = false;
      },
      alertAction() {
        alert("alert");
      },
    };
  },
  methods: {
    console() {
      
    },
  },
};
</script>
<style lang="scss" scoped>
label {
  font-size: 12px;
}
</style>
