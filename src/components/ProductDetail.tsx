import { useState } from "react";
import { X, Star, ShoppingCart, Minus, Plus, MapPin, Flame, Package } from "lucide-react";
import { Product } from "../data/products";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export default function ProductDetail({
  product,
  onClose,
  onAddToCart,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-amber-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:hidden bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-amber-900" />
            </button>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-950">
                  {product.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="hidden md:flex bg-amber-100 hover:bg-amber-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-amber-700" />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-amber-100 text-amber-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-amber-700">
                {product.rating}/5
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-amber-50 rounded-xl p-3 text-center">
                <MapPin className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-amber-600">Origem</p>
                <p className="text-sm font-semibold text-amber-900">
                  {product.origin}
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-3 text-center">
                <Flame className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-amber-600">Torra</p>
                <p className="text-sm font-semibold text-amber-900">
                  {product.roast}
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-3 text-center">
                <Package className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-amber-600">Peso</p>
                <p className="text-sm font-semibold text-amber-900">
                  {product.weight}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-amber-700 text-sm leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Tasting Notes */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-amber-900 mb-2">
                Notas de Prova
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Price & Add to Cart */}
            <div className="border-t border-amber-100 pt-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-amber-900">
                    €{product.price.toFixed(2)}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-3 bg-amber-50 rounded-xl px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:bg-amber-100 transition-colors"
                  >
                    <Minus className="w-4 h-4 text-amber-700" />
                  </button>
                  <span className="w-8 text-center font-bold text-amber-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:bg-amber-100 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-amber-700" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-700 text-amber-50 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-800/20"
              >
                <ShoppingCart className="w-5 h-5" />
                Adicionar ao Carrinho — €
                {(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
