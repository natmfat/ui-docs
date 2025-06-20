import { zodToJsonSchema } from "zod-to-json-schema";
import { registryComponentSchema } from "../schema";

const jsonSchema = zodToJsonSchema(registryComponentSchema);

export async function GET() {
  return Response.json(jsonSchema);
}
