import { WindowSlot, ButtonLocation, createToggleAction } from '@vcmap/ui';
import { version, name } from '../package.json';
import Debugger, { windowId } from './Debugger.vue';
/**
 * @param {VcsApp} app - the app from which this plugin is loaded.
 * @param {Object} config - the configuration of this plugin instance, passed in from the app.
 * @returns {VcsPlugin}
 */
export default function vcmdebugger(app, config) {
  return {
    get name() { return name; },
    get version() { return version; },
    initialize: async (vcsUiApp) => {

    },
    onVcsAppMounted: async (vcsUiApp) => {
      const { action, destroy } = createToggleAction(
        {
          name: 'VCMap debugger',
          icon: '$vcsCircle',
          title: 'VCMap debugger',
        },
        {
          id: windowId,
          component: Debugger,
          slot: WindowSlot.STATIC,
          state: {
            headerTitle: 'VCMap debugger',
            headerIcon: '$vcsCircle',
          },
        },
        vcsUiApp.windowManager,
        name,
      );

      vcsUiApp.navbarManager.add({
        id: windowId,
        location: ButtonLocation.TOOL,
        action}, name);
    },
    toJSON: async () => {
      console.log('Called when serializing this plugin instance');
    },
  };
}
