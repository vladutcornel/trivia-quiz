import Dexie from "dexie";
import Storage from "../api/Storage";

/**
 * Creates an Dexie/IndexedDB database, automatically increasing the version if needed
 *
 * @param {String} name IndexedDB database name
 * @param {Object} schema Dexie compatible schema @see https://dexie.org/docs/Version/Version.stores()
 * @returns {Dexie}
 */
export default function createDatabase(name, schema) {
  const db = new Dexie(name);
  const storage = new Storage(`db:${name}`);
  const oldSchema = storage.getItem("schema", {});
  let version = storage.getItem("version", 0);

  let changed = false;
  Object.keys(schema).forEach((table) => {
    if (!oldSchema[table] || schema[table] !== oldSchema[table]) {
      changed = true;
    }
  });

  if (changed) {
    version += 1;
    storage.setItem("version", version);
    storage.setItem("schema", schema);
  }

  db.version(version).stores(schema);

  return db;
}
