import { NextRequest, NextResponse } from "next/server";
import { configured, database, siteURL } from "@/lib/marketplace/server";
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (configured() && code) {
    const { error } = await database().auth.exchangeCodeForSession(code);
    if (!error)
      return NextResponse.redirect(
        new URL(
          request.nextUrl.searchParams.get("reset") === "1"
            ? "/deals/account/password"
            : "/deals/dashboard",
          siteURL(),
        ),
      );
  }
  return NextResponse.redirect(
    new URL(
      "/deals/account?message=This%20link%20has%20expired.%20Please%20request%20a%20new%20one.",
      siteURL(),
    ),
  );
}
