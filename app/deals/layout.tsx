import Link from "next/link";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Investment Deal Room",
  robots: { index: false, follow: false },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell py-10 sm:py-16">
      <nav
        aria-label="Deal room"
        className="mb-10 flex flex-wrap gap-5 text-sm font-semibold text-navy-950"
      >
        <Link href="/deals">Deal room</Link>
        <Link href="/deals/submit">Submit a deal</Link>
        <Link href="/deals/members">Member opportunities</Link>
        <Link href="/deals/dashboard">My account</Link>
      </nav>
      {children}
    </div>
  );
}
