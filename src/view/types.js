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
