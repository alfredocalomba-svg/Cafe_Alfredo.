import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-amber-300 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-amber-800/50 border border-amber-600/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-amber-200 text-xs sm:text-sm font-medium">
              Torra fresca esta semana
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-amber-50 mb-4 sm:mb-6 leading-tight">
            Descubra o Sabor
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
              de Cada Grão
            </span>
          </h2>

          <p className="text-amber-200/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Selecionamos os melhores cafés de especialidade das origens mais
            prestigiadas do mundo. Torrefação artesanal, entrega cuidada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Explorar Cafés
              <ArrowDown className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-6 text-amber-300 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-100">6+</div>
                <div className="text-xs">Origens</div>
              </div>
              <div className="w-px h-8 bg-amber-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-100">100%</div>
                <div className="text-xs">Arábica</div>
              </div>
              <div className="w-px h-8 bg-amber-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-100">85+</div>
                <div className="text-xs">Pontuação</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            fill="#fffbeb"
          />
        </svg>
      </div>
    </section>
  );
}
