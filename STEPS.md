# JSDOC types without building, demo steps

### 1. Start with function signatures (`@param`, `@returns`)
Begin by typing the simplest pieces: function inputs and outputs.

Example:

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}
```

**What you learn**
- VS Code can infer the expected types for callers and warn on incorrect usage

---

### 2. Type object shapes (`@typedef`, `@property`)
Once function params are typed, move to structured data.

Example:

```js
/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {number} age
 */
```

Then use it:

```js
/** @type {import("./types.js").User} */
const user = { id: "u1", name: "Ada", age: 36 };
```

**What you learn**
- you can define reusable “interfaces”
- IntelliSense knows which fields exist and their types

---

### 3. Add unions and nullability
TypeScript’s most important concept for JS typing is union types, including `null` and `undefined`.

Example:

```js
/**
 * @param {string | null | undefined} name
 * @returns {string}
 */
export function displayName(name) {
  return name ?? "Anonymous";
}
```

**What you learn**
- the type system forces you to handle “maybe null”
- the return type becomes more precise

---

### 4. Model optional properties
JSDoc supports optional properties via `=`, which maps nicely to TypeScript’s optional fields.

Example:

```js
/**
 * @typedef {Object} Config
 * @property {number} port
 * @property {string=} host
 */
```

**What you learn**
- your code can safely handle missing fields (`host` may be absent)

---

### 5. Introduce tuples for fixed-length arrays
Tuples are great for coordinates and other fixed-size structures.

Example:

```js
/**
 * @typedef {[number, number]} Point2D
 */
```

Then:

```js
/**
 * @param {import("./types.js").Point2D} point
 * @returns {number}
 */
export function distanceToOrigin(point) {
  const [x, y] = point;
  return Math.sqrt(x * x + y * y);
}
```

**What you learn**
- not every array is “the same”
- the editor can validate structure and length

---

### 6. Use generics with `@template`
Generics make your code reusable while keeping strong typing.

Example:

```js
/**
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function identity(value) {
  return value;
}
```

**What you learn**
- you can express “same type in, same type out”
- type inference improves dramatically

---

### 7. Add overloads (`@overload`)
Overloads let a single function have multiple call signatures.

Example concept:

```js
/**
 * @overload
 * @param {number} x
 * @returns {string}
 *
 * @overload
 * @param {string} x
 * @returns {string}
 *
 * @param {number | string} x
 * @returns {string}
 */
export function toString(x) {
  return String(x);
}
```

**What you learn**
- different input types can be modeled precisely
- VS Code can suggest correct overload behavior

---

### 8. Type async code with Promises
Type Promise return values so callers know what to `await`.

Example:

```js
/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

**What you learn**
- async functions become type-safe without TS syntax

---

### 9. Typed “Result” modeling with unions
A very practical pattern is modeling success/error results.

Example:
- `Result<T>` is a union of:
  - `{ kind: "ok", value: T }`
  - `{ kind: "error", message: string }`

Then your code can narrow based on `res.kind`.

**What you learn**
- you can model control flow with union types
- TypeScript can narrow types in `if` branches

---
