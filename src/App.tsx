import { useState, useMemo } from "react";
import { products, categories, Product } from "./data/products";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import FilterBar from "./components/FilterBar";
import Hero from "./components/Hero";

export interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.notes.some((note) =>
          note.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "Todos" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setOrderComplete(true);
    setIsCheckoutOpen(false);
    setCartItems([]);
    setTimeout(() => setOrderComplete(false), 4000);
  };

  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          resultCount={filteredProducts.length}
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">☕</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              Nenhum café encontrado
            </h3>
            <p className="text-amber-700">
              Tente ajustar os filtros ou a pesquisa.
            </p>
          </div>
        ) : (
          <div id="produtos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-amber-50 mb-3">
                Aroma & Grão
              </h3>
              <p className="text-amber-300 text-sm leading-relaxed">
                Café de especialidade selecionado das melhores origens do mundo.
                Torrefação artesanal com paixão e precisão.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-50 mb-3">Contacto</h4>
              <p className="text-amber-300 text-sm">
                geral@aromagrao.pt
              </p>
              <p className="text-amber-300 text-sm">+351 912 345 678</p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-50 mb-3">Horário</h4>
              <p className="text-amber-300 text-sm">Seg - Sex: 8h - 19h</p>
              <p className="text-amber-300 text-sm">Sáb: 9h - 17h</p>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-400 text-sm">
            © 2026 Aroma & Grão. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {isCartOpen && (
        <Cart
          items={cartItems}
          total={cartTotal}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}

      {isCheckoutOpen && (
        <Checkout
          items={cartItems}
          total={cartTotal}
          onClose={() => setIsCheckoutOpen(false)}
          onComplete={handleOrderComplete}
        />
      )}

      {orderComplete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl animate-bounce-in">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-amber-900 mb-2">
              Encomenda Confirmada!
            </h2>
            <p className="text-amber-700">
              Obrigado pela sua compra. O seu café será preparado com todo o
              cuidado e enviado em breve.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
