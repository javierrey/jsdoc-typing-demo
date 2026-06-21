// core/types.js
// @ts-check

/* Core: */

/**
 * Basic object types for generic data structures.
 * @typedef {Record<string, any>} PlainObject
 * @typedef {Record<number | string, any>} ArrayObject
 * @typedef {{ (...args: any[]): any, [key: string]: any }} FunctionObject
 */

/**
 * A plain serialisable JSON value.
 * @typedef {string | number | boolean | null | JsonObject | JsonArray} JsonValue
 */

/**
 * A JSON object (string-keyed, JsonValue values).
 * @typedef {{ [key: string]: JsonValue }} JsonObject
 */

/**
 * A JSON array.
 * @typedef {JsonValue[]} JsonArray
 */

/**
 * A generic event-handler callback.
 * @template {Event} [E=Event]
 * @typedef {(event: E) => void} EventHandler
 */

/* Custom: */



/* * */

// export default undefined; // module
