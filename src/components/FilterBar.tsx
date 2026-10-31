import { SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  resultCount: number;
}

export default function FilterBar({
  categories,
  selectedCategory,
  setSelectedCategory,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-950">
            Os Nossos Cafés
          </h2>
          <p className="text-amber-600 mt-1">
            {resultCount} {resultCount === 1 ? "produto encontrado" : "produtos encontrados"}
          </p>
        </div>
        <div className="flex items-center gap-2 text-amber-700">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-medium">Filtrar por tipo</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-amber-800 text-amber-50 shadow-md shadow-amber-800/20"
                : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-100 hover:border-amber-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
