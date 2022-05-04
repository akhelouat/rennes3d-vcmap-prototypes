import { RennesApp } from "./services/vcmap";
import { createApp, DefineComponent } from 'vue';
import { Context, VcsAppConfig } from '@vcmap/core';

/**
 * Initializing vue app with map
 * @param AppComponent 
 * @param target 
 * @param config
 */
async function init(AppComponent: DefineComponent, target: string, config: VcsAppConfig): Promise<void> {
  const app = new RennesApp();
  const context = new Context(config);
  
  await app.addContext(context);

  createApp(AppComponent, { app: app }).mount(target);
}

export default init;