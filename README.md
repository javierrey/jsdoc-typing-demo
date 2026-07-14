# JSDOC types without building

This project demonstrates **TypeScript-like typing for plain JavaScript** in the editor, using **JSDoc**—with **no TypeScript build step**.

The typical use case scenario for this template repo would be testing a Javascript feature implementation, where the runtime code is the source code, using the default type validation provided by the IDE (VSCode, Idea, etc).

## Run

```bash
npm start
```

- `npm start` launches the **Node.js runtime**, including an **HTTP server on port 3000**.

## Source content

- The system `index.js` starts the runtime and server:
  - `src/sys/index.js` (NodeJS system boot script)
  - `src/sys/server.js` (server functions)
  - `src/sys/types.js` (JSDOC types definitions in system, NODEJS)
  - `src/sys/utils.js` (general functionality)
  - `src/sys/main.js` (playground script for system/node functions)
- The server runs static files from `src/view/`, accessible from browser at `http://localhost:3000`:
  - `src/view/index.html` (HTML)
  - `src/view/main.js` (Browser JS, ES modules)
  - `src/view/types.js` (JSDOC types definitions in Browser, DOM)
  - `src/view/utils.js` (general functionality)
  - `src/view/main.js` (playground script for Browser functions)
  - `src/view/core/types.ts` (common types valid in Browser and NodeJS)
  - `src/view/core/utils.ts` (common functionality for Browser and NodeJS)

This runs the runtime code using Node (no compilation), and starting a server in `http://localhost:3000`.

## What’s intentionally *not* included
- No `.ts` files
- No TypeScript build output
- No runtime validation libraries (everything here is focused on **editor + static checking** via JSDoc)

## Demo steps

See [STEPS.md](STEPS.md).

## References

- This repo: https://github.com/javierrey/jsdoc-typing-demo
- JSDoc: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
