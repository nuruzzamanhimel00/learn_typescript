# Learn TypeScript — Bundler Setup Guide

## Prerequisites

- [Bun](https://bun.sh/) installed (v1.1+ recommended)
- [Laragon](https://laragon.org/) or any local web server

---

## Installation

```bash
# Clone the project and navigate into it
cd learn_typescript

# Install dependencies
bun install
```

This installs **esbuild** (the bundler) and other dev dependencies.

---

## Available Scripts

### Build (one-time)

```bash
bun run build
```

Bundles `src/script.ts` (and all its imports) into a single `dist/script.js` file with a sourcemap.

### Watch (development)

```bash
bun run watch
```

Same as `build`, but **automatically rebuilds** every time you save a `.ts` file. Use this during development.

---

## How It Works

### The Problem

When using TypeScript with ES modules (`import`/`export`), the browser loads each file separately:

```
index.html → dist/script.js → dist/classes/Player.js → ...
```

Each file is a separate network request, and you need `type="module"` on the script tag. This causes issues with CORS when opening files directly (`file://` protocol).

### The Solution — Bundling with esbuild

**esbuild** takes your entry file (`src/script.ts`) and follows all `import` statements to produce a **single** output file (`dist/script.js`). The browser only needs to load one file:

```
index.html → dist/script.js (everything included)
```

No `type="module"` needed. No CORS issues. Faster loading.

---

## Project Structure

```
learn_typescript/
├── src/                  # TypeScript source files
│   ├── script.ts         # Entry point
│   └── classes/
│       └── Player.ts     # Example class module
├── dist/                 # Bundled output (generated)
│   ├── script.js         # Single bundled file
│   └── script.js.map     # Sourcemap for debugging
├── index.html            # HTML page (loads dist/script.js)
├── tsconfig.json         # TypeScript config
└── package.json          # Scripts & dependencies
```

---

## Step-by-Step: Setting Up a Bundler from Scratch

If you want to recreate this setup in a new project:

### 1. Initialize the project

```bash
mkdir my-project && cd my-project
bun init -y
```

### 2. Install esbuild

```bash
bun add -d esbuild
```

### 3. Create folder structure

```bash
mkdir -p src/classes dist
```

### 4. Add build scripts to `package.json`

```json
{
  "scripts": {
    "build": "esbuild src/script.ts --bundle --outfile=dist/script.js --sourcemap",
    "watch": "esbuild src/script.ts --bundle --outfile=dist/script.js --sourcemap --watch"
  }
}
```

### 5. Create your TypeScript files

**src/classes/Player.ts**
```ts
export class Player {
    constructor(
        public name: string,
        public age: number,
        public country: string
    ) {}

    play() {
        console.log(`${this.name} is playing. Age: ${this.age}, Country: ${this.country}`);
    }
}
```

**src/script.ts**
```ts
import { Player } from './classes/Player.js';

const player = new Player('Shakib', 35, 'Bangladesh');
player.play();
```

> **Note:** Always use `.js` extension in imports (e.g., `'./classes/Player.js'`), even though the source file is `.ts`. This is required for TypeScript module resolution.

### 6. Create `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My TypeScript App</title>
</head>
<body>
    <script src="dist/script.js"></script>
</body>
</html>
```

No `type="module"` needed — esbuild bundles everything into one regular script.

### 7. Build and run

```bash
bun run build
```

Open `index.html` via your local server (e.g., `http://localhost/my-project/`).

---

## Tips

- **Always use `bun run watch`** during development for auto-rebuilding.
- **Use `.js` in imports** even for `.ts` files (TypeScript requirement for ES modules).
- **Open via HTTP** (e.g., `http://localhost/learn_typescript/`), not by double-clicking the HTML file.
- **Sourcemaps** are generated so you can debug your original `.ts` files in the browser DevTools.
