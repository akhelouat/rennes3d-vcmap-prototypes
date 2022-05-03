import { Context } from "@vcmap/core";
import { RennesApp } from "./services/vcmap";

/**
 * 
 * @param configUrl 
 */
export default async function contextLoader(app: RennesApp, configUrl: string): Promise<void> {
  try {
    const response = await fetch(configUrl);
    const config = await response.json();

    const context = new Context(config);
    await app.addContext(context);
  }
  catch (err) {
    console.error(`Failed to load context from ${ configUrl }`, err);
  }
}