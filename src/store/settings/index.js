import Storage from "../../api/Storage";
import template from "./template";

const storage = new Storage("settings");

/**
 * Get the current settings from local storage, or defaults if they are not saved.
 * @returns {*}
 */
export default function getSettings() {
  return storage.getItem("settings", template);
}
