"use client";

import { useMemo, useState } from "react";

export type SearchBarProps = {
  tags: string[];
  onFilterChange: (query: string, tag: string | null) => void;
};

export function SearchBar({ tags, onFilterChange }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const options = useMemo(
    () => [
      { label: "Të gjitha temat", value: null },
      ...tags.map((tag) => ({ label: tag, value: tag }))
    ],
    [tags]
  );

  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-parchment-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:justify-between">
      <div className="flex-1">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-parchment-600" htmlFor="quote-search">
          Kërko në fjalë
        </label>
        <input
          id="quote-search"
          type="search"
          placeholder="Kërko sipas fjalëve kyçe..."
          className="w-full rounded-full border border-parchment-300 bg-parchment-50 px-5 py-3 text-parchment-900 shadow-inner transition focus:border-parchment-500 focus:outline-none focus:ring-2 focus:ring-parchment-200"
          value={query}
          onChange={(event) => {
            const value = event.target.value;
            setQuery(value);
            onFilterChange(value, selectedTag);
          }}
        />
      </div>
      <div className="md:w-56">
        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-parchment-600" htmlFor="tag-filter">
          Filtro sipas teme
        </label>
        <div className="relative">
          <select
            id="tag-filter"
            className="w-full appearance-none rounded-full border border-parchment-300 bg-parchment-50 px-5 py-3 text-parchment-900 shadow-inner transition focus:border-parchment-500 focus:outline-none focus:ring-2 focus:ring-parchment-200"
            value={selectedTag ?? ""}
            onChange={(event) => {
              const value = event.target.value || null;
              setSelectedTag(value);
              onFilterChange(query, value);
            }}
          >
            {options.map((option) => (
              <option key={option.label} value={option.value ?? ""}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-parchment-600">▾</span>
        </div>
      </div>
    </section>
  );
}
