// server.js
// @ts-check

/**
 * @typedef {import('./types.js').IncomingMessage} IncomingMessage
 * @typedef {import('./types.js').ServerResponse} ServerResponse
 * @typedef {import('./types.js').NodeBuffer} NodeBuffer
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fsP = fs.promises; fs.readFile('');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIEW_DIR = String(path.join(__dirname, '../view'));
const PORT = 3000;

/** @type {Record<string, string>} */
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.xml': 'text/xml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
  '.mp3': 'audio/mp3',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.mov': 'video/mp4',
  '.vtt': 'text/vtt',
  '.dae': 'model/vnd.collada+xml',
};

/** @param {string} urlPath @param {string} viewDir */
const safePathFromUrl = (urlPath, viewDir) => {
  const decoded = decodeURIComponent(urlPath);
  const normalized = path.normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, '');
  const full = path.join(viewDir, normalized);
  if (!full.startsWith(viewDir)) return null;
  return full;
}

export const runServer = (port = PORT, view = VIEW_DIR) => {
  const server = http.createServer(
    /** @param {IncomingMessage} req @param {ServerResponse} res */
    async (req, res) => {
      const url = req.url ? new URL(req.url, `http://${req.headers.host}`) : null;
      const pathname = url?.pathname ?? '/';

      const targetPath =
        pathname === '/'
          ? path.join(view, 'index.html')
          : safePathFromUrl(pathname, view);

      if (!targetPath) {
        res.writeHead(400);
        res.end('Bad request');
        return;
      }

      try {
        const data = await fsP.readFile(targetPath);
        const ext = path.extname(targetPath);
        const contentType = contentTypes[ext] ?? 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      } catch (err) {
        res.writeHead(404);
        res.end('Not found');
      }
    },
  );

  server.listen(port, () => {
    console.log(`jsdoc-typing-demo server running at http://localhost:${port}`);
  });
};
