To set up **TypeScript in Laragon (Windows)** and run it properly, follow this complete step-by-step guide.

Since you’re a Software Engineer working with modern JS frameworks, I’ll keep it practical and clean.

---

# ✅ Step 1: Install Node.js (If Not Installed)

TypeScript requires Node.js.

### 🔹 Check if Node is installed

Open **Laragon Terminal** or **CMD**:

```bash
node -v
npm -v
```

If not installed:

👉 Download from:
[https://nodejs.org](https://nodejs.org)
Install the **LTS version**.

Restart Laragon after installation.

---

# ✅ Step 2: Install TypeScript Globally

Open **Laragon Terminal** and run:

```bash
npm install -g typescript
```

Verify installation:

```bash
tsc -v
```

If it shows a version → ✅ Installed successfully.

---

# ✅ Step 3: Create a TypeScript Project Inside Laragon

Go to your Laragon `www` folder:

```bash
cd C:\laragon\www
```

Create a project folder:

```bash
mkdir ts-project
cd ts-project
```

---

# ✅ Step 4: Initialize Node Project

```bash
npm init -y
```

This creates `package.json`.

---

# ✅ Step 5: Initialize TypeScript Config

```bash
tsc --init
```

This creates:

```
tsconfig.json
```

---

# ✅ Step 6: Create TypeScript File

Create a file:

```
index.ts
```

Example:

```ts
function greet(name: string): string {
    return `Hello, ${name}`;
}

console.log(greet("Himel"));
```

---

# ✅ Step 7: Compile TypeScript

Run:

```bash
tsc index.ts
```

It will generate:

```
index.js
```

---

# ✅ Step 8: Run Compiled File

```bash
node index.js
```

Output:

```
Hello, Himel
```

---

# 🔥 Optional (Recommended): Auto Compile on Save

Run:

```bash
tsc --watch
```

Now every time you save `.ts` file → it auto compiles.

---

# 🚀 Better Setup (Professional Way)

Instead of global install, you can install locally per project:

```bash
npm install typescript --save-dev
```

Then run:

```bash
npx tsc
```

This is better for team projects (CI/CD friendly).

---

# 🟢 If You Want to Run TypeScript Directly (Without Manual Compile)

Install:

```bash
npm install -g ts-node
```

Then run:

```bash
ts-node index.ts
```

No need to compile manually.

---

# ⚡ Laragon Note

Laragon is mainly for:

* PHP
* Laravel
* MySQL
* Apache / Nginx

TypeScript runs via **Node.js**, not Apache.
So you don’t need to configure Laragon server for TS unless you're building:

* React
* Vue
* Next.js
* Node backend

---

If you tell me:

* 🔹 Are you using TypeScript with Laravel?
* 🔹 Or planning to use it with React / Vue / Next?
* 🔹 Or just pure Node?

I can give you a more production-ready setup guide.
