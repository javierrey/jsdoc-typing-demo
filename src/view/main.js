// view/main.js
// @ts-check

/**
 * @typedef {import('./types.js').Config} Config;
 * @typedef {import('./types.js').Point2D} Point2D;
 * @typedef {import('./types.js').Result<number>} ResultNumber;
 * @typedef {import('./types.js').User} User;
 */

import {
  ge, gt, qs, qa,
} from './utils.js';

/**
 * 1) Function signature typing
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

/**
 * 2) Unions + nullability
 * @param {string | null | undefined} name
 * @returns {string}
 */
export function displayName(name) {
  return name ?? 'Anonymous';
}

/**
 * 3) Optional properties via typedef
 * @param {Config} config
 * @returns {string}
 */
export function describeConfig(config) {
  const host = config.host ?? 'localhost';
  const tls = config.useTls ? 'TLS' : 'no TLS';
  return `${host}:${config.port} (${tls})`;
}

/**
 * 4) Tuple typing
 * @param {Point2D} point
 * @returns {number}
 */
export function distanceToOrigin(point) {
  const [x, y] = point;
  return Math.sqrt(x * x + y * y);
}

/**
 * 5) Generics (via template tag)
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function identity(value) {
  return value;
}

/**
 * 6) Overload-like example (JSDoc overloads supported by TS checking).
 * @overload
 * @param {number} x
 * @returns {string}
 *//**
 * @overload
 * @param {string} x
 * @returns {string}
 *//**
 * @param {number | string} x
 * @returns {string}
 */
export function toString(x) {
  return String(x);
}

/**
 * 7) Result<T> modeling with unions + narrowing
 * @param {number} n
 * @returns {ResultNumber}
 */
export function parsePositiveInt(n) {
  if (!Number.isInteger(n) || n < 0) {
    return { kind: 'error', message: 'Must be a non-negative integer' };
  }
  return { kind: 'ok', value: n };
}

/**
 * 8) Async typing with Promises
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Renders results into the page.
 */
function render() {
  /** @type {User} */
  const user = { id: 'u1', name: 'Ada', age: 36 };

  const lines = [];

  // 1) add
  lines.push(`add(user.age, 1) = ${add(user.age, 1)}`);

  // 2) displayName
  lines.push(`displayName(user.name) = ${displayName(user.name)}`);
  lines.push(`displayName(undefined) = ${displayName(undefined)}`);

  // 3) optional properties
  lines.push(
    `describeConfig({ port: 8080 }) = ${describeConfig({ port: 8080 })}`
  );
  lines.push(
    `describeConfig({ port: 8080, useTls: true }) = ${describeConfig({
      port: 8080,
      useTls: true,
    })}`
  );

  // 4) tuple
  lines.push(`distanceToOrigin([3, 4]) = ${distanceToOrigin([3, 4])}`);

  // 5) generics
  lines.push(`identity({ a: 1 }).a = ${identity({ a: 1 }).a}`);

  // 6) overload-like toString
  lines.push(`toString(123) = ${toString(123)}`);
  lines.push(`toString('abc') = ${toString('abc')}`);

  // 7) Result<T> narrowing
  const r1 = parsePositiveInt(5);
  if (r1.kind === 'ok') {
    lines.push(`parsePositiveInt(5): ok value=${r1.value}`);
  } else {
    lines.push(`parsePositiveInt(5): error message=${r1.message}`);
  }

  const r2 = parsePositiveInt(-2);
  if (r2.kind === 'ok') {
    lines.push(`parsePositiveInt(-2): ok value=${r2.value}`);
  } else {
    lines.push(`parsePositiveInt(-2): error message=${r2.message}`);
  }

  // 8) async Promises
  wait(0).then(() => {
    const outPre = ge('outPre');
    if (outPre) outPre.textContent += '\nwait(0) resolved';
  });

  // Optionally show where to create “intentional mistakes”
  lines.push('');
  lines.push('Tip: Uncomment the lines at the bottom of this script to see IDE type errors.');

  const outPre = ge('outPre');
  if (outPre) outPre.textContent = lines.join('\n');
}

/* Start client JS runtime when document is ready. */
(function ready(...args) {
  if (!document.body) return setTimeout(ready, 50, ...args);
  render();
})();

/* Uncomment to see type errors in IDE: */
// add('1', 2); // number expected
// displayName(123); // string|null|undefined expected
// describeConfig({}); // missing required port
// distanceToOrigin([1, 2, 3]); // tuple expects exactly [number, number]
// identity(123).toUpperCase(); // number doesn't have toUpperCase
// parsePositiveInt('5'); // number expected
// wait('100'); // number expected
