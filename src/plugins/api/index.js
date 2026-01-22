/**
 * NoteMakingApp Plugin API - Export for plugins to import
 * This file acts as the '@NoteMakingApp/plugin-api' package that plugins import
 */

import NoteMakingAppPluginAPI from './NoteMakingAppPluginAPI.js';

// Export the main Plugin API class as the default
export default NoteMakingAppPluginAPI;

// Named exports for specific components
export {
  NoteMakingAppPluginAPI as PluginAPI,
  EditorAPI,
  UIAPI,
  FilesystemAPI,
  CommandsAPI,
  NetworkAPI,
  ClipboardAPI,
  NotificationsAPI,
  DataAPI
} from './NoteMakingAppPluginAPI.js';

// This is what plugins import when they do:
// import { PluginAPI } from '@NoteMakingApp/plugin-api';