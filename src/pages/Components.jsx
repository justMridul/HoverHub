import { useState, useMemo } from "react";

import Navbar from "../components/layout/Navbar";
import ComponentsHero from "../components/layout/ComponentsHero";
import ComponentsSection from "../components/layout/ComponentsSection";

import ComponentCard from "../components/ui/library/ComponentCard";
import IconCard from "../components/ui/library/IconCard";

import { componentsData } from "../data/componentsData";

export default function Components() {

  const [category, setCategory] = useState("icons");
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("az");

  // Tabs
  const renderTabs = useMemo(() => {
    return ["icons", "buttons", "cards"].map((tab) => (
      <button
        key={tab}
        onClick={() => setCategory(tab)}
        className={`px-5 py-2 rounded-lg text-sm capitalize transition-colors ${
          category === tab
            ? "bg-orange-500 text-black"
            : "bg-zinc-800 text-zinc-400 hover:text-white"
        }`}
      >
        {tab}
      </button>
    ));
  }, [category]);

  // Search Input
  const searchInput = (
    <input
      type="text"
      placeholder="Search components..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-md px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
    />
  );

  // ✅ UPDATED PREFIX SEARCH LOGIC
  const filteredComponents = useMemo(() => {
    const query = search.toLowerCase();

    return componentsData.filter((item) => {
      const matchesCategory = category === item.category;

      // If search is empty → show all
      if (!query) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().startsWith(query) ||
        item.description?.toLowerCase().startsWith(query) ||
        item.category.toLowerCase().startsWith(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="relative min-h-screen bg-[#0e0e11] text-zinc-100">

      <Navbar />

      {/* Hero */}
      <ComponentsHero />

      <ComponentsSection
        tabs={renderTabs}
        searchBar={searchInput}
        currentCategory={category}
      >
        {filteredComponents.map((item) => {
          const Component = item.component;

          if (item.category === "icons") {
            return (
              <IconCard
                key={item.title}
                title={item.title}
                component={Component}
                code={item.code}
              />
            );
          }

          return (
            <ComponentCard
              key={item.title}
              title={item.title}
              description={item.description}
              code={item.code}
            >
              <Component />
            </ComponentCard>
          );
        })}
      </ComponentsSection>

    </div>
  );
}