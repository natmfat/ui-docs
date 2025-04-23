import { registryComponentSchema } from "../schema";
import { zodToJsonSchema } from "zod-to-json-schema";

const jsonSchema = zodToJsonSchema(registryComponentSchema);

export async function GET() {
  return Response.json(jsonSchema);
}
