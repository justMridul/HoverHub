export default function ComponentsSection({
  tabs,
  searchBar,
  sortBar,
  children,
  currentCategory,
}) {
  const isIconsView = currentCategory === "icons";

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">

      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Components
        </h2>
        <p className="text-zinc-500 mt-3">
          Browse interactive UI components
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-6 mb-14">
        {searchBar}

        <div className="flex flex-wrap justify-center items-center gap-4">
          {tabs}
          {sortBar}
        </div>
      </div>

      {/* Components Grid */}
      <div
        className={`grid gap-6 ${
          isIconsView
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {Array.isArray(children) && children.length > 0 ? (
          children.map((child, index) => (
            <div key={index} className="flex justify-center">
              {child}
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center text-zinc-500 py-20">
            <p className="text-lg">No components found</p>
            <p className="text-sm mt-2">Try a different search term</p>
          </div>
        )}
      </div>

    </section>
  );
}