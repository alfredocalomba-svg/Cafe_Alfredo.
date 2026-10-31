import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { CartItem } from "../App";

interface CartProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  onCheckout: () => void;
}

export default function Cart({
  items,
  total,
  onClose,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}: CartProps) {
  return (
    <div
      className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-amber-50 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-200 bg-white">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-amber-800" />
            <h2 className="text-xl font-bold text-amber-950">
              Carrinho ({items.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-amber-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-amber-700" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Carrinho vazio
              </h3>
              <p className="text-amber-600 text-sm">
                Adicione cafés deliciosos ao seu carrinho.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-xl p-4 shadow-sm border border-amber-100"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-amber-950 text-sm truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-amber-600 text-xs">
                        {item.product.weight}
                      </p>
                      <p className="font-bold text-amber-800 mt-1">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemove(item.product.id)}
                      className="self-start p-1.5 hover:bg-red-50 rounded-lg transition-colors group"
                    >
                      <Trash2 className="w-4 h-4 text-amber-400 group-hover:text-red-500" />
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-amber-50">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
                      >
                        <Minus className="w-3 h-3 text-amber-700" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-amber-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
                      >
                        <Plus className="w-3 h-3 text-amber-700" />
                      </button>
                    </div>
                    <span className="text-xs text-amber-500">
                      €{item.product.price.toFixed(2)} cada
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-amber-200 bg-white p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-amber-600">
                <span>Subtotal</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-amber-600">
                <span>Envio</span>
                <span className="text-green-600 font-medium">Grátis</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-amber-950 pt-2 border-t border-amber-100">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full bg-amber-800 hover:bg-amber-700 text-amber-50 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-800/20"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
