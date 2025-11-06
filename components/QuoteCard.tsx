import type { Quote } from "@/data/quotes";

export function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <article className="rounded-3xl border border-parchment-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg">
      {quote.originalArabic ? (
        <p className="mb-4 font-heading text-xl leading-relaxed text-parchment-800" dir="rtl">
          {quote.originalArabic}
        </p>
      ) : null}
      <p className="mb-3 text-lg leading-relaxed text-parchment-900">{quote.translationSq}</p>
      <p className="mb-4 text-sm text-parchment-700">{quote.translationEn}</p>
      <div className="flex flex-wrap items-center gap-2">
        {quote.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-parchment-300 bg-parchment-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-parchment-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <footer className="mt-4 text-sm text-parchment-700">
        <p className="font-semibold">{quote.source.work}</p>
        <p>{quote.source.reference}</p>
        <p className="mt-2 text-parchment-800">{quote.commentary}</p>
      </footer>
    </article>
  );
}
