import { NextRequest } from "next/server";
import { access, constants, readFile } from "fs/promises";
import { join, extname, normalize } from "path";
import mime from "mime-types";
import sanitize from "sanitize-filename";

const BASE_PATH = join(process.cwd(), "/app/registry");

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const requestedPath = (await params).path.map((p) => sanitize(p)).join("/");
  const resolvedPath = normalize(join(BASE_PATH, requestedPath));

  if (!resolvedPath.startsWith(BASE_PATH)) {
    return Response.json({ message: "Unauthorized" }, { status: 403 });
  }

  if (await fileExists(resolvedPath)) {
    return new Response(await readFile(resolvedPath, "utf-8"), {
      headers: {
        "Content-Type": lookup(resolvedPath),
      },
    });
  }

  return Response.json({ message: "Not found" }, { status: 404 });
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

function lookup(filePath: string): string {
  const ext = extname(filePath);
  switch (ext) {
    case ".ts":
    case ".tsx":
      // https://stackoverflow.com/questions/13213787/whats-the-mime-type-of-typescript
      return "text/x.typescript";
    default:
      return mime.lookup(ext) || "text/plain";
  }
}
