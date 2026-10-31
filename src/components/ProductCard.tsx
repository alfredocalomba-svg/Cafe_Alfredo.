import { Star, ShoppingCart, Eye } from "lucide-react";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export default function ProductCard({
  product,
  onSelect,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-amber-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-amber-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-amber-900/80 backdrop-blur-sm text-amber-100 text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Roast Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-amber-900 text-xs font-medium px-3 py-1 rounded-full">
            Torra {product.roast}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={() => onSelect(product)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur-sm text-amber-900 py-2.5 rounded-xl text-sm font-medium hover:bg-white transition-colors"
          >
            <Eye className="w-4 h-4" />
            Ver Detalhes
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center bg-amber-600 text-white p-2.5 rounded-xl hover:bg-amber-500 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-amber-950 text-lg leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium text-amber-700">
              {product.rating}
            </span>
          </div>
        </div>

        <p className="text-amber-600 text-sm mb-3">{product.origin}</p>

        {/* Tasting Notes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.notes.map((note) => (
            <span
              key={note}
              className="bg-amber-50 text-amber-700 border border-amber-200 text-xs px-2.5 py-1 rounded-full"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-amber-100">
          <div>
            <span className="text-2xl font-bold text-amber-900">
              €{product.price.toFixed(2)}
            </span>
            <span className="text-amber-500 text-sm ml-1">
              / {product.weight}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-amber-800 hover:bg-amber-700 text-amber-50 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
