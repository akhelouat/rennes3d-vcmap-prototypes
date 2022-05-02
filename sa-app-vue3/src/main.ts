import { MapCollection } from '@vcmap/core';
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

declare global {
  interface Window {
    CESIUM_BASE_URL: string;
    mapContext: MapCollection | null;
  }
}

window.mapContext = null;
window.CESIUM_BASE_URL = '/node_modules/@vcmap/cesium/Source/';

createApp(App).mount('#app')
