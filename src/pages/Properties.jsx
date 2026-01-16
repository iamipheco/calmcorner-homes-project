import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";

/* =====================================
   CONFIG (API / CMS READY)
===================================== */

// Replace later with API call
const ALL_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "₦85,000,000",
    title: "Modern Villa in Lekki Phase 1",
    location: "Lekki, Lagos",
    beds: 4,
    baths: 3,
    size: "350 sqm",
    tag: "New",
    type: "Homes",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: "₦120,000,000",
    title: "Luxury Apartment with Ocean View",
    location: "Victoria Island, Lagos",
    beds: 3,
    baths: 2,
    size: "280 sqm",
    tag: "For Sale",
    type: "Homes",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: "₦55,000,000",
    title: "Family Home in Ajah",
    location: "Ajah, Lagos",
    beds: 5,
    baths: 4,
    size: "420 sqm",
    tag: "For Sale",
    type: "Homes",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "₦65,000,000",
    title: "Premium Land in Ibeju-Lekki",
    location: "Ibeju-Lekki, Lagos",
    size: "500 sqm",
    tag: "For Sale",
    type: "Land",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: "₦85,000,000",
    title: "Serviced Plot in Epe",
    location: "Epe, Lagos",
    size: "600 sqm",
    tag: "New",
    type: "Land",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: "₦200,000,000",
    title: "Commercial Property in Ikoyi",
    location: "Ikoyi, Lagos",
    size: "1200 sqm",
    tag: "For Sale",
    type: "Commercial",
  },
];

const FILTERS = ["All", "Homes", "Land", "Commercial"];
const PAGE_SIZE = 3;

/* =====================================
   COMPONENT
===================================== */

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  /* ---------- Debounce Search ---------- */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.toLowerCase());
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  /* ---------- Simulated API Load ---------- */
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeFilter, debouncedSearch]);

  /* ---------- Filtering Logic ---------- */
  const filteredProperties = useMemo(() => {
    return ALL_PROPERTIES.filter((property) => {
      const matchesFilter =
        activeFilter === "All" || property.type === activeFilter;

      const matchesSearch =
        property.title.toLowerCase().includes(debouncedSearch) ||
        property.location.toLowerCase().includes(debouncedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, debouncedSearch]);

  /* ---------- Pagination ---------- */
  const visibleProperties = filteredProperties.slice(
    0,
    page * PAGE_SIZE
  );

  const canLoadMore = visibleProperties.length < filteredProperties.length;

  return (
    <main className="bg-gray-100">
      {/* HERO */}
      <section className="py-20 pt-36">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs uppercase font-semibold text-lime-600 mb-2">
            Browse Listings
          </p>

          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            Our Properties
          </h1>

          <p className="text-gray-500 mb-10">
            Explore our curated selection of premium properties across Nigeria’s
            most sought-after locations.
          </p>

          {/* SEARCH + FILTERS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full sm:w-80">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by location or property name..."
                className="w-full pl-9 pr-4 py-2.5 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm border transition ${
                    activeFilter === filter
                      ? "bg-lime-500 text-white border-lime-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className=" bg-white p-16">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 mb-6">
            Showing {visibleProperties.length} of{" "}
            {filteredProperties.length} properties
          </p>

          {/* GRID */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : visibleProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <PropertyCard {...property} />
                  </motion.div>
                ))}
          </div>

          {/* LOAD MORE */}
          {!loading && canLoadMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-6 py-3 rounded-full bg-lime-500 text-white text-sm hover:bg-green-600 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* =====================================
   SKELETON LOADER
===================================== */

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden animate-pulse">
      <div className="h-56 bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="flex gap-3 pt-4">
          <div className="h-3 bg-gray-200 rounded w-16" />
          <div className="h-3 bg-gray-200 rounded w-16" />
          <div className="h-3 bg-gray-200 rounded w-16" />
        </div>
      </div>
    </div>
  );
}
