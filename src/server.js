// server.js
// @ts-check

/**
 * @typedef {import('./types.js').IncomingMessage} IncomingMessage
 * @typedef {import('./types.js').ServerResponse} ServerResponse
 * @typedef {import('./types.js').NodeBuffer} NodeBuffer
 * @typedef {import('./types.js').NodeErrnoException} NodeErrnoException
 * @typedef {import('./types.js').StringRecord} StringRecord
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIEW_DIR = path.join(__dirname, 'view');
const PORT = 3000;

/** @type {StringRecord} */
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.xml': 'text/xml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
};

/** @param {string} urlPath */
function safePathFromUrl(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const normalized = path.normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, '');
  const full = path.join(VIEW_DIR, normalized);
  if (!full.startsWith(VIEW_DIR)) return null;
  return full;
}

const server = http.createServer(
  /** @param {IncomingMessage} req @param {ServerResponse} res */
  (req, res) => {
    const url = req.url ? new URL(req.url, `http://${req.headers.host}`) : null;
    const pathname = url?.pathname ?? '/';

    const targetPath =
      pathname === '/'
        ? path.join(VIEW_DIR, 'index.html')
        : safePathFromUrl(pathname);

    if (!targetPath) {
      res.writeHead(400);
      res.end('Bad request');
      return;
    }

    fs.readFile(
      targetPath,
      /** @param {NodeErrnoException | null} err @param {NodeBuffer} data */
      (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        const ext = path.extname(targetPath);
        const contentType = contentTypes[ext] ?? 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      },
    );
  },
);

server.listen(PORT, () => {
  console.log(`jsdoc-typing-demo server running at http://localhost:${PORT}`);
});
