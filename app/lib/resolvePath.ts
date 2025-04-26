import { join, normalize } from "path";
import sanitize from "sanitize-filename";

export async function resolvePath(
  basePath: string,
  path: string[]
): Promise<string> {
  const requestedPath = path.map((p) => sanitize(p)).join("/");
  const resolvedPath = normalize(join(basePath, requestedPath));

  if (!resolvedPath.startsWith(basePath)) {
    throw new Error("Unauthorized");
  }

  return resolvedPath;
}
