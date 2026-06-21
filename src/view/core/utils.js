// core/utils.js
// @ts-check

/* Core: */

/**
Safely stringifies a value to JSON, returning undefined on failure.
Replacer and indentation are optional. @param {any} v
*/
export const jsonStringify = (v, r = null, i = 0) => {
  try { return JSON.stringify(v, r, i); } catch { return undefined; }
};

/**
Safely parses a JSON string, returning undefined on failure.
Reviver is optional. @param {string} s
*/
export const jsonParse = (s, r = undefined) => {
  try { return JSON.parse(s, r); } catch { return undefined; }
};

/* Custom: */



/* * */
