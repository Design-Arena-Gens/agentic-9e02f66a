"use client";

import { useMemo, useState } from "react";
import type { Quote } from "@/data/quotes";
import { QuoteCard } from "@/components/QuoteCard";
import { SearchBar } from "@/components/SearchBar";

export type SearchClientProps = {
  quotes: Quote[];
  allTags: string[];
};

export function SearchClient({ quotes, allTags }: SearchClientProps) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filteredQuotes = useMemo(() => {
    return quotes.filter((quote) => {
      const matchesTag = tag ? quote.tags.includes(tag) : true;
      const normalizedQuery = query.trim().toLowerCase();
      if (!normalizedQuery) {
        return matchesTag;
      }

      const text = [
        quote.translationSq,
        quote.translationEn,
        quote.originalArabic ?? "",
        quote.commentary,
        quote.source.work,
        quote.source.reference,
        ...quote.tags
      ]
        .join(" ")
        .toLowerCase();

      return matchesTag && text.includes(normalizedQuery);
    });
  }, [query, tag, quotes]);

  return (
    <div className="flex flex-col gap-8">
      <SearchBar
        tags={allTags}
        onFilterChange={(nextQuery, nextTag) => {
          setQuery(nextQuery);
          setTag(nextTag);
        }}
      />
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </section>
      {filteredQuotes.length === 0 ? (
        <p className="rounded-3xl border border-dashed border-parchment-300 bg-white/70 p-8 text-center text-parchment-700">
          Nuk u gjetën fjalë me kriteret e zgjedhura. Provo një fjalë kyçe ose temë tjetër.
        </p>
      ) : null}
    </div>
  );
}
