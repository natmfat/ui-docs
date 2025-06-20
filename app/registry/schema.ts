import { z } from "zod";

export const registryComponentSchema = z
  .object({
    name: z
      .string()
      .describe(
        "The name of the item. This is used to identify the item in the registry. It should be unique for your registry.",
      ),
    description: z
      .string()
      .describe(
        "The description of the item. This is used to provide a brief overview of the item.",
      )
      .optional(),
    title: z
      .string()
      .describe(
        "The human-readable title for your registry item. Keep it short and descriptive.",
      )
      .optional(),
    author: z
      .string()
      .describe("The author of the item. Recommended format: username <url>")
      .optional(),
    docs: z.string().describe("The documentation URL for the item.").optional(),
    dependencies: z
      .array(z.string())
      .describe("An array of NPM dependencies required by the registry item.")
      .optional(),
    devDependencies: z
      .array(z.string())
      .describe(
        "An array of NPM dev dependencies required by the registry item.",
      )
      .optional(),
    registryDependencies: z
      .array(z.string())
      .describe(
        "An array of registry items that this item depends on. Use the name of the item to reference shadcn/ui components and urls to reference other registries.",
      )
      .optional(),
    files: z
      .array(
        z
          .string()
          .describe("The path to the file relative to the app directory."),
      )
      .describe(
        "The main payload of the registry item. This is an array of files that are part of the registry item.",
      )
      .optional(),
    target: z
      .string()
      .describe("The target directory or file of the registry item.")
      .optional(),
    meta: z
      .record(z.any())
      .describe(
        "Additional metadata for the registry item. This is an object with any key value pairs.",
      )
      .optional(),
  })
  .describe("Registry component schema.");
