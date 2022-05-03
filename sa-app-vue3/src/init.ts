import { RennesApp } from "./services/vcmap";
import { createApp, DefineComponent } from 'vue';
import { Context, VcsAppConfig } from '@vcmap/core';

/**
 * Initializing vue app with map
 * @param AppComponent 
 * @param target 
 * @param configUrl 
 */
async function init(AppComponent: DefineComponent, target: string, config: VcsAppConfig): Promise<void> {
  const app = new RennesApp();
  const context = new Context(config);
  
  app.addContext(context);
  
  app.maps.setActiveMap('cesium');
  app.maps.setTarget("map-2d");
  context.active = true;

  createApp(AppComponent, { app: app }).mount(target);
}

export default init;