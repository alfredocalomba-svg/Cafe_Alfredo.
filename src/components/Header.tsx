import { Search, ShoppingBag, Coffee } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  cartCount,
  onCartClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-amber-950/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Coffee className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-amber-50 tracking-tight leading-none">
                Aroma & Grão
              </h1>
              <p className="text-[10px] sm:text-xs text-amber-400 tracking-widest uppercase">
                Café de Especialidade
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden sm:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
              <input
                type="text"
                placeholder="Pesquisar cafés, origens, notas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-amber-900/50 border border-amber-700/50 rounded-xl text-amber-100 placeholder-amber-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all"
              />
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-amber-50 px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">
              Carrinho
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
            <input
              type="text"
              placeholder="Pesquisar cafés..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-amber-900/50 border border-amber-700/50 rounded-xl text-amber-100 placeholder-amber-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
