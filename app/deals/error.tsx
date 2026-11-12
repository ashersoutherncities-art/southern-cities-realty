"use client";
export default function DealError({ reset }: { reset: () => void }) {
  return (
    <div className="glass-panel max-w-xl p-8" role="alert">
      <h2 className="text-2xl font-semibold">
        We couldn’t complete that request.
      </h2>
      <p className="my-4 leading-7 text-slate-600">
        Check your entries and try again. A review may also have changed since
        you opened it. If the issue continues, contact Southern Cities Realty.
      </p>
      <button className="cta-primary" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
