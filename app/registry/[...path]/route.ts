import { tryCatch } from "@/app/lib/tryCatch";
import mime from "mime-types";
import { NextRequest } from "next/server";
import path from "path";
import sanitize from "sanitize-filename";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const route = path.normalize(
    (await params).path.map((p) => sanitize(p)).join("/"),
  );

  // in development just read from local file system instead of github
  if (process.env.NODE_ENV === "development") {
    const fs = await import("fs/promises");
    const file = await tryCatch(
      fs.readFile(path.join(process.cwd(), "/app/registry", route), "utf-8"),
    );
    if (file.error) {
      console.error(file);
      return new Response("File not found", { status: 404 });
    }

    return new Response(file.data, {
      status: 200,
      headers: {
        "Content-Type": lookup(route),
      },
    });
  }

  // use latest version of the file from github
  const response = await tryCatch(
    fetch(
      `https://raw.githubusercontent.com/natmfat/ui-docs/refs/heads/main/app/registry/${route}`,
    ).then((res) => res.text()),
  );
  if (response.error) {
    console.error(response);
    return new Response("File not found", { status: 404 });
  }

  return new Response(response.data, {
    status: 200,
    headers: {
      "Content-Type": lookup(route),
    },
  });
}

function lookup(filePath: string): string {
  const ext = path.extname(filePath);
  switch (ext) {
    case ".ts":
    case ".tsx":
      // https://stackoverflow.com/questions/13213787/whats-the-mime-type-of-typescript
      return "text/x.typescript";
    default:
      return mime.lookup(ext) || "text/plain";
  }
}
