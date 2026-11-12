import { NextResponse } from "next/server";
import { configured, database, service } from "@/lib/marketplace/server";
export const dynamic = "force-dynamic";
export async function GET(_: Request, { params }: { params: { id: string } }) {
  if (!configured()) return new NextResponse("Unavailable", { status: 503 });
  const db = database();
  const {
    data: { user },
  } = await db.auth.getUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });
  // RLS checks audience, ownership, paid membership, and current publication status.
  const { data } = await db
    .from("realty_files")
    .select("path,name")
    .eq("id", params.id)
    .maybeSingle();
  if (!data) return new NextResponse("Not found", { status: 404 });
  const result = await service()
    .storage.from("realty-documents")
    .download(data.path);
  if (result.error || !result.data)
    return new NextResponse("Not found", { status: 404 });
  return new NextResponse(await result.data.arrayBuffer(), {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${data.name.replace(/["\r\n]/g, "_")}"`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
