import fs from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

/**
 * Mirrors `next/dist/lib/find-root.js` for the workspace root Next infers when
 * multiple lockfiles exist (e.g. app + parent folder).
 *
 * - `next build`: tracing root must match that inference or prerender can throw
 *   `a[d] is not a function`.
 * - `next dev` (webpack): tracing the parent while `.next` lives in the app folder
 *   can break chunk loading (ChunkLoadError on noop-turbopack-hmr). In dev we pin
 *   tracing to this app directory when a monorepo layout is detected.
 *
 * Use `NODE_ENV === "production"` (not `argv.includes("build")`) so prerender
 * workers inherit the same tracing root as the main `next build` process—
 * workers often have different argv and would otherwise mismatch → `a[d] is not a function`.
 */
const LOCK_NAMES = [
  "pnpm-lock.yaml",
  "package-lock.json",
  "yarn.lock",
  "bun.lock",
  "bun.lockb",
] as const;

function findRootLockFileFrom(startDir: string): string | null {
  let dir = path.resolve(startDir);
  const root = path.parse(dir).root;
  while (true) {
    for (const name of LOCK_NAMES) {
      const candidate = path.join(dir, name);
      if (fs.existsSync(candidate)) return candidate;
    }
    if (dir === root) break;
    dir = path.dirname(dir);
  }
  return null;
}

function findNextInferredWorkspaceRoot(cwd: string): string {
  const lockFile = findRootLockFileFrom(cwd);
  if (!lockFile) return cwd;
  const lockFiles = [lockFile];
  while (true) {
    const lastLockFile = lockFiles[lockFiles.length - 1];
    const currentDir = path.dirname(lastLockFile);
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) break;
    const newLockFile = findRootLockFileFrom(parentDir);
    if (!newLockFile) break;
    lockFiles.push(newLockFile);
  }
  return path.dirname(lockFiles[lockFiles.length - 1]);
}

const configDir = path.resolve(__dirname);
const inferredWorkspaceRoot = findNextInferredWorkspaceRoot(configDir);
const isMonorepoLayout = inferredWorkspaceRoot !== configDir;
const useMonorepoTracingRoot =
  isMonorepoLayout && process.env.NODE_ENV === "production";
const outputFileTracingRoot = useMonorepoTracingRoot
  ? inferredWorkspaceRoot
  : configDir;

const nextConfig: NextConfig = {
  outputFileTracingRoot,
  turbopack: {
    root: outputFileTracingRoot,
  },
  async redirects() {
    return [
      { source: "/solutions", destination: "/", permanent: false },
      {
        source: "/solutions/:path*",
        destination: "/platforms/:path*",
        permanent: false,
      },
      { source: "/architecture", destination: "/platform", permanent: false },
    ];
  },
};

export default nextConfig;
