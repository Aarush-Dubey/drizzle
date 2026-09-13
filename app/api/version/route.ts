import { provenance } from "../../../protected/version";
export const dynamic = "force-static";
export function GET() { return Response.json(provenance); }
