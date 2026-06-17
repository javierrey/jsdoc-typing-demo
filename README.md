# jsdoc-typing-demo (Gradual JSDoc typing in JavaScript)

This project demonstrates **TypeScript-like typing for plain JavaScript** using **JSDoc**—with **no TypeScript build step**.

You can:
- run the code with `node` (runtime only)
- get type checking in **VS Code**
- optionally run CI type checks using `tsc --noEmit`

---

## Why this project?
Many projects start as JavaScript. Migrating everything to `.ts` can be slow, but you can still gain safety and editor help by gradually adding JSDoc types.

This project demonstrates **TypeScript-like typing in plain JavaScript** using **JSDoc**, and tests the typed code directly in the browser.

## What you get
- `npm start` launches a **Node.js HTTP server** on **port 3000**
- The server serves static files from `src/view/`
- The browser runs:
  - `src/view/index.html` (HTML)
  - `src/view/index.html.js` (browser JS, ES modules)
- The typed math + types live in:
  - `src/view/types.js`
  - `src/view/math.js`

---

## Install

This simple project runs without dependencies, however node types can be installed with:
```bash
npm i --save-dev @types/node
```

## Run

```bash
npm start
```

This runs the runtime code using Node (no compilation).

---

## Type checking (no emit)

```bash
npm run typecheck
```

This runs TypeScript’s checker in JS mode:
- it validates `src/**/*.js`
- it does **not** emit compiled output (`noEmit: true`)

---

## VS Code setup

1. Open the folder in VS Code
2. Ensure you enable JS checking (recommended via `tsconfig.json`)
3. You should see:
   - autocomplete based on JSDoc types
   - errors when you pass the wrong types

> Note: VS Code uses TypeScript’s language service. Even though the runtime is plain JS, VS Code will interpret JSDoc types when `checkJs` is enabled.

---

## Folder structure

```
jsdoc-typing-demo/
  package.json
  tsconfig.json
  README.md
  src/
    types.js
    server.js
    view/
      types.js
      math.js
      index.html.js
      index.html
      styles.css
```

---

## Gradual typing guide (the learning path)

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
- VS Code can infer the expected types for callers
- it can warn on incorrect usage

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

## What’s intentionally *not* included
- No `.ts` files
- No TypeScript build output
- No runtime validation libraries (everything here is focused on **editor + static checking** via JSDoc)

---
