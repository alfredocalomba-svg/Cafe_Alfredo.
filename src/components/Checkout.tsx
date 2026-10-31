import { useState } from "react";
import { X, CreditCard, Truck, CheckCircle } from "lucide-react";
import { CartItem } from "../App";

interface CheckoutProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
  onComplete: () => void;
}

export default function Checkout({
  items,
  total,
  onClose,
  onComplete,
}: CheckoutProps) {
  const [step, setStep] = useState<"info" | "payment" | "processing">("info");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    // Simulate payment processing
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-100">
          <h2 className="text-xl font-bold text-amber-950">
            {step === "info"
              ? "Dados de Envio"
              : step === "payment"
              ? "Pagamento"
              : "A Processar..."}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-amber-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-amber-700" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pt-4">
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-1.5 text-xs font-medium ${
                step === "info"
                  ? "text-amber-800"
                  : "text-green-600"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step === "info"
                    ? "bg-amber-800 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {step === "info" ? "1" : <CheckCircle className="w-4 h-4" />}
              </div>
              Dados
            </div>
            <div className="flex-1 h-px bg-amber-200" />
            <div
              className={`flex items-center gap-1.5 text-xs font-medium ${
                step === "payment"
                  ? "text-amber-800"
                  : step === "processing"
                  ? "text-green-600"
                  : "text-amber-400"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step === "payment"
                    ? "bg-amber-800 text-white"
                    : step === "processing"
                    ? "bg-green-500 text-white"
                    : "bg-amber-200 text-amber-500"
                }`}
              >
                {step === "processing" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  "2"
                )}
              </div>
              Pagamento
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "info" && (
            <form onSubmit={handleSubmitInfo} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                  placeholder="João Silva"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                  placeholder="joao@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Morada
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                  placeholder="Rua do Café, 123"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">
                    Cidade
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                    placeholder="Lisboa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">
                    Código Postal
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => updateField("postalCode", e.target.value)}
                    className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                    placeholder="1000-001"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                  placeholder="+351 912 345 678"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <Truck className="w-4 h-4 text-amber-700" />
                  <span className="text-sm font-medium text-amber-800">
                    Resumo da Encomenda
                  </span>
                </div>
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-sm text-amber-700 py-1"
                  >
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span>€{(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold text-amber-900 pt-2 mt-2 border-t border-amber-200">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-700 text-amber-50 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Continuar para Pagamento
              </button>
            </form>
          )}

          {step === "payment" && (
            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-4">
                <p className="text-sm text-amber-700">
                  <span className="font-semibold">Enviar para:</span>{" "}
                  {formData.name}, {formData.address}, {formData.city}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  required
                  value={formData.cardNumber}
                  onChange={(e) => updateField("cardNumber", e.target.value)}
                  className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                  placeholder="4242 4242 4242 4242"
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">
                    Validade
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cardExpiry}
                    onChange={(e) => updateField("cardExpiry", e.target.value)}
                    className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                    placeholder="MM/AA"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cardCvc}
                    onChange={(e) => updateField("cardCvc", e.target.value)}
                    className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-3 rounded-xl border border-amber-200">
                <CreditCard className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  Este é um checkout simulado. Nenhum pagamento real será
                  processado.
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep("info")}
                  className="flex-1 bg-amber-100 hover:bg-amber-200 text-amber-800 py-3.5 rounded-xl font-semibold transition-all"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-amber-800 hover:bg-amber-700 text-amber-50 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Pagar €{total.toFixed(2)}
                </button>
              </div>
            </form>
          )}

          {step === "processing" && (
            <div className="text-center py-12">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-amber-200" />
                <div className="absolute inset-0 rounded-full border-4 border-amber-700 border-t-transparent animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                A processar o pagamento...
              </h3>
              <p className="text-amber-600 text-sm">
                Por favor, aguarde enquanto confirmamos a sua encomenda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
