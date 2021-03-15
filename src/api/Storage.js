/**
 * Simple helper for working with localStorage.
 *
 * Goodies:
 * - Automatically adds a namespace/prefix to keys
 * - Serializes data
 *
 * Badies:
 * - property-style access to localStorage is lost. A Proxy would fix that, but it wasn't needed.
 */
export default class Storage {
  constructor(prefix) {
    this.prefix = prefix;
  }

  key(keyName) {
    return `${this.prefix}:${keyName}`;
  }

  getItem(keyName, keyDefault = "") {
    return JSON.parse(localStorage.getItem(this.key(keyName))) ?? keyDefault;
  }

  setItem(keyName, keyValue) {
    localStorage.setItem(this.key(keyName), JSON.stringify(keyValue));
  }
}
