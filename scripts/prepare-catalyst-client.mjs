import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(root, "dist");
const clientDir = join(root, "client");
const clientPackage = "client-package.json";

if (!existsSync(distDir)) {
  throw new Error("dist folder not found. Run npm run build first.");
}

mkdirSync(clientDir, { recursive: true });

for (const entry of readdirSync(clientDir)) {
  if (entry === clientPackage) {
    continue;
  }

  rmSync(join(clientDir, entry), { recursive: true, force: true });
}

for (const entry of readdirSync(distDir)) {
  cpSync(join(distDir, entry), join(clientDir, entry), { recursive: true });
}

console.log("Prepared Catalyst client folder from dist.");
