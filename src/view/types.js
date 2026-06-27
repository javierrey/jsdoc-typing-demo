// view/types.js (Browser)
// @ts-check

/* Core: */

/**
 * @typedef {import('./core/types.js').PlainObject} PlainObject;
 * @typedef {import('./core/types.js').ArrayObject} ArrayObject;
 * @typedef {import('./core/types.js').FunctionObject} FunctionObject;
 * @typedef {import('./core/types.js').JsonValue} JsonValue;
 * @typedef {import('./core/types.js').JsonObject} JsonObject;
 * @typedef {import('./core/types.js').JsonArray} JsonArray;
 * @typedef {import('./core/types.js').EventHandler} EventHandler;
 */

/* View: */

/**
 * A top-level browser global context — either the main thread Window or a Worker scope.
 * @typedef {typeof globalThis & Window | WorkerGlobalScope} GlobalContext
 */

/* Custom: */

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

/* * */

// export default undefined; // module
