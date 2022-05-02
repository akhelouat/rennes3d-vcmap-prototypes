import { WindowSlot } from '@vcmap/ui';
import { version, name } from '../package.json';
import CitySearch, { windowId } from './citySearch.vue';
import { ButtonLocation } from '@vcmap/ui';

/**
 * @param {VcsApp} app - the app from which this plugin is loaded.
 * @param {Object} config - the configuration of this plugin instance, passed in from the app.
 * @returns {VcsPlugin}
 */
export default function citySearch(app, config) {
  return {
    get name() { return name; },
    get version() { return version; },
    initialize: async (vcsUiApp) => {
      console.log('Called before loading the rest of the current context. Passed in the containing Vcs UI App ');
      console.log(app, config);
      console.log(vcsUiApp);
    },
    onVcsAppMounted: async (vcsUiApp) => {

      console.log('Called when the root UI component is mounted and managers are ready to accept components');
      // test();
      vcsUiApp.windowManager.add({
        id: windowId,
        component: CitySearch,
        WindowSlot: WindowSlot.DETACHED,
        position: {
          left: '40%',
          right: '40%',
        },
      }, name);

    },
    toJSON: async () => {
      console.log('Called when serializing this plugin instance');
    },
  };
}