// view/utils.js
// @ts-check

/* Core: */

import {
  jsonStringify, jsonParse,
} from './core/utils.js';

export * from './core/utils.js';

/* View: */

/** Safe element selector shortcuts. */
/** @param {string} id */
export const ge = (id) => document.getElementById(id);
/** @param {string} tag */
export const gt = (tag, el = document) => el?.getElementsByTagName?.(tag);
/** @param {string} sel */
export const qs = (sel, el = document) => { try { return el?.querySelector?.(sel); } catch {} };
/** @param {string} sel */
export const qa = (sel, el = document) => { try { return el?.querySelectorAll?.(sel); } catch {} };

/* Custom: */



/* * */
