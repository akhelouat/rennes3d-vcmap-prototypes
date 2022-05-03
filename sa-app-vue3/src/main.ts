import { MapCollection } from '@vcmap/core';
import { createApp } from 'vue'
import App from './App.vue'
import init from './init';
import './index.css';
import config from '../map.config.json';

declare global {
  interface Window {
    CESIUM_BASE_URL: string;
    mapContext: MapCollection | null;
  }
}

window.mapContext = null;
window.CESIUM_BASE_URL = '/node_modules/@vcmap/cesium/Source/';

init(App, '#app', config);
