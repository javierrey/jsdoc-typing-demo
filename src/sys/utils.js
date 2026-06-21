// sys/utils.js
// @ts-check

import fs from 'node:fs';

/* Core: */

import {
  jsonStringify, jsonParse,
} from '../view/core/utils.js';

export * from '../view/core/utils.js';

/* System: */

/**
 * Returns 1 if a file pathname is a file, -1 if it is a directory or other type, 0 if does not exist.
 * @param {string} filename @returns {number}
 */
export const fileExists = (filename) => !fs.existsSync(filename) ? 0 : fs.statSync(filename).isFile() ? 1 : -1;

/* Custom: */



/* * */
