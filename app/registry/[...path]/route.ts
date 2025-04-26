import { NextRequest } from "next/server";
import fs from "fs/promises";
import { join, extname } from "path";
import mime from "mime-types";
import { tryCatch, isError, unwrap } from "@/app/lib/tryCatch";
import { resolvePath } from "@/app/lib/resolvePath";

const BASE_PATH = join(process.cwd(), "/app/registry");

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedPathResult = await tryCatch(
    resolvePath(BASE_PATH, (await params).path)
  );
  if (isError(resolvedPathResult)) {
    return Response.json({ message: "Unauthorized" }, { status: 403 });
  }

  const resolvedPath = unwrap(resolvedPathResult);
  const fileExists = await tryCatch(fs.access(resolvedPath, fs.constants.F_OK));
  if (isError(fileExists)) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  const fileContent = await tryCatch(fs.readFile(resolvedPath, "utf-8"));
  if (isError(fileContent)) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return new Response(unwrap(fileContent), {
    headers: {
      "Content-Type": lookup(resolvedPath),
    },
  });
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
