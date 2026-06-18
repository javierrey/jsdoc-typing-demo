// view/types.js (Browser)

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

/* Browser */

/**
 * A top-level browser global context — either the main thread Window or a Worker scope.
 * @typedef {Window & typeof globalThis | WorkerGlobalScope} GlobalContext
 */

/* Custom */

/**
 * 1) Object shape typedef
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {number} age
 */

/**
 * 2) Optional properties
 * @typedef {Object} Config
 * @property {number} port
 * @property {string=} host
 * @property {boolean=} useTls
 */

/**
 * 3) Tuple types
 * @typedef {[number, number]} Point2D
 */

/**
 * 4) Union modeling: Result<T>
 * @typedef {Object} ErrorLike
 * @property {'error'} kind
 * @property {string} message
 */

/**
 * @template T
 * @typedef {Object} OkLike
 * @property {'ok'} kind
 * @property {T} value
 */

/**
 * @template T
 * @typedef {OkLike<T> | ErrorLike} Result
 */

/**
 * 5) Example: a maybe value type union
 * @typedef {string | null | undefined} MaybeString
 */

/* Module */

export default undefined;
