import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  FileStack,
  KeyRound,
} from "lucide-react";
export default function DealRoom() {
  return (
    <>
      <section className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="section-label">Southern Cities Realty · Deal room</p>
          <h1 className="section-title mt-4">
            Good opportunities deserve a complete picture.
          </h1>
          <p className="section-copy mt-6 max-w-xl">
            Submit a property. Let our team review the details and assemble the
            investment package. Explore approved opportunities with a paid
            membership.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="cta-primary" href="/deals/submit">
              Submit an opportunity <ArrowUpRight size={18} />
            </Link>
            <Link className="cta-secondary" href="/deals/members">
              Membership · $59/month
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-600">
            Free accounts for wholesalers, realtors, and owners submitting
            deals.
          </p>
        </div>
        <div className="dark-panel p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[.2em] text-orange-300">
            From lead to investment package
          </p>
          <h2 className="mt-6 font-display text-3xl text-white">
            The details, brought together.
          </h2>
          <p className="mt-5 leading-7 text-slate-200">
            Property facts, acquisition price, repair assumptions, disclosed
            fees, rent estimates, and financing scenarios in one member
            workspace.
          </p>
          <p className="mt-8 border-t border-white/20 pt-6 text-sm leading-6 text-slate-200">
            Every submission is reviewed before publication. Membership provides
            access to research and opportunities; availability, financing, and
            returns are never guaranteed.
          </p>
        </div>
      </section>
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            Icon: ClipboardCheck,
            title: "1. Submit with permission",
            copy: "Tell us what you control, disclose your role, and provide written marketing authority.",
          },
          {
            Icon: FileStack,
            title: "2. We review and package",
            copy: "Our team checks authority, asks questions, and prepares a clear opportunity summary.",
          },
          {
            Icon: KeyRound,
            title: "3. Members get access",
            copy: "Active paid members can browse published packages and request next steps with our team.",
          },
        ].map(({ Icon, title, copy }) => (
          <article className="glass-panel p-7" key={title}>
            <Icon className="text-brand-500" />
            <h2 className="mt-5 text-xl font-semibold text-navy-950">
              {title}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{copy}</p>
          </article>
        ))}
      </section>
    </>
  );
}
