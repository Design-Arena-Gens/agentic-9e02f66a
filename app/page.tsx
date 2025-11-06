import { SearchClient } from "@/components/SearchClient";
import { quotes } from "@/data/quotes";

const allTags = (() => {
  const unique = new Set<string>();
  quotes.forEach((quote) => quote.tags.forEach((tag) => unique.add(tag)));
  return Array.from(unique).sort((a, b) => a.localeCompare(b));
})();

export default function HomePage() {

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-3xl border border-parchment-200 bg-white/80 p-10 text-center shadow-md backdrop-blur-sm">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-parchment-500">Ibn Abd al-Barr (368-463 H)</p>
        <h1 className="font-heading text-4xl font-bold text-parchment-900 sm:text-5xl">
          Fjalë të urta dhe këshilla nga Imam Ibn Abd al-Barr
        </h1>
        <p className="mt-6 text-lg text-parchment-800">
          Një përmbledhje e thënieve të vyera nga veprat klasike të dijes, sjellë në gjuhën shqipe me shënime orientuese.
        </p>
      </section>
      <SearchClient allTags={allTags} quotes={quotes} />
    </main>
  );
}
