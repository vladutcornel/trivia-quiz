/* eslint-disable import/prefer-default-export */
import Storage from "../../api/Storage";

export const SAVE_SETTINGS = "SAVE_SETTINGS";
const storage = new Storage("settings");

/**
 * Synchronous action to load settings from localStorage to Redux
 * @returns {{payload, type: string}}
 */
export const loadSettingsFromStorage = () => ({
  type: SAVE_SETTINGS,
  payload: {
    ...(storage.getItem("settings", {})),
  },
});

/**
 * Update settings both in local storage and Redux
 * @param settings
 * @returns {{payload, type: string}}
 */
export const saveSettings = (settings) => {
  storage.setItem("settings", settings);
  return {
    type: SAVE_SETTINGS,
    payload: settings,
  };
};
