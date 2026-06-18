// src/types.js (NodeJS)

/* Core */

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

/* NodeJS */

/**
 * Basic NodeJS types for generic data structures.
 * @typedef {import('node:http').IncomingMessage} IncomingMessage
 * @typedef {import('node:http').ServerResponse} ServerResponse
 * @typedef {import('node:buffer').Buffer} NodeBuffer
 * @typedef {import('node:stream').Readable} ReadableStream
 * @typedef {import('node:stream').Writable} WritableStream
 * @typedef {NodeJS.ErrnoException} NodeErrnoException
 * @typedef {Record<string, string>} StringRecord
 */

/* Custom */

/* Module */

export default undefined;
