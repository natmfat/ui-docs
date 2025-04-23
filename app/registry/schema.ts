import { z } from "zod";

const registryItem = z.enum([
  "registry:lib",
  "registry:component",
  "registry:ui",
  "registry:hook",
  "registry:theme",
  "registry:page",
  "registry:file",
  "registry:style",
]);

export const registryComponentSchema = z
  .object({
    name: z
      .string()
      .describe(
        "The name of the item. This is used to identify the item in the registry. It should be unique for your registry."
      ),
    type: registryItem.describe(
      "The type of the item. This is used to determine the type and target path of the item when resolved for a project."
    ),
    description: z
      .string()
      .describe(
        "The description of the item. This is used to provide a brief overview of the item."
      )
      .optional(),
    title: z
      .string()
      .describe(
        "The human-readable title for your registry item. Keep it short and descriptive."
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
        "An array of NPM dev dependencies required by the registry item."
      )
      .optional(),
    registryDependencies: z
      .array(z.string())
      .describe(
        "An array of registry items that this item depends on. Use the name of the item to reference shadcn/ui components and urls to reference other registries."
      )
      .optional(),
    files: z
      .array(
        z.object({
          path: z
            .string()
            .describe("The path to the file relative to the registry root.")
            .optional(),
          content: z.string().describe("The content of the file.").optional(),
          type: registryItem
            .describe(
              "The type of the file. This is used to determine the type of the file when resolved for a project."
            )
            .optional(),
          target: z
            .string()
            .describe(
              "The target path of the file. This is the path to the file in the project."
            )
            .optional(),
        })
      )
      .describe(
        "The main payload of the registry item. This is an array of files that are part of the registry item. Each file is an object with a path, content, type, and target."
      )
      .optional(),
    meta: z
      .record(z.any())
      .describe(
        "Additional metadata for the registry item. This is an object with any key value pairs."
      )
      .optional(),
  })
  .describe("Registry component schema.");
