import { NextRequest } from "next/server";
import { access, constants, readFile } from "fs/promises";
import { join, extname } from "path";
import mime from "mime-types";
import { tryCatch } from "@/app/lib/tryCatch";
import { resolvePath } from "@/app/lib/resolvePath";

const BASE_PATH = join(process.cwd(), "/app/registry");

export async function GET(
  _: NextRequest,
  { params }: { params: { path: string[] } }
) {
  let [resolvedPath = "", error] = await tryCatch(
    resolvePath(BASE_PATH, (await params).path)
  );
  if (error) {
    return Response.json({ message: "Unauthorized" }, { status: 403 });
  }

  [, error] = await tryCatch(access(resolvedPath, constants.F_OK));
  if (error) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return new Response(await readFile(resolvedPath, "utf-8"), {
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
