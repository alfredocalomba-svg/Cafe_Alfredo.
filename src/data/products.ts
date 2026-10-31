export interface Product {
  id: number;
  name: string;
  origin: string;
  category: string;
  price: number;
  description: string;
  notes: string[];
  roast: string;
  weight: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Etiópia Yirgacheffe",
    origin: "Etiópia",
    category: "Grãos",
    price: 18.90,
    description: "Um café floral e frutado com notas de jasmim e bergamota. Cultivado nas terras altas de Yirgacheffe a mais de 1.800 metros de altitude, este café é processado pelo método lavado para preservar a sua complexidade aromática.",
    notes: ["Jasmim", "Bergamota", "Pêssego"],
    roast: "Claro",
    weight: "250g",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    rating: 4.9
  },
  {
    id: 2,
    name: "Colômbia Huila",
    origin: "Colômbia",
    category: "Grãos",
    price: 16.50,
    description: "Equilibrado e encorpado, com acidez cítrica vibrante e final de caramelo. Os grãos são cultivados na região de Huila por pequenos produtores que utilizam métodos tradicionais de cultivo sustentável.",
    notes: ["Caramelo", "Laranja", "Chocolate"],
    roast: "Médio",
    weight: "250g",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=400&h=400&fit=crop",
    rating: 4.7
  },
  {
    id: 3,
    name: "Brasil Serra do Caparaó",
    origin: "Brasil",
    category: "Grãos",
    price: 14.90,
    description: "Doce e suave com notas de avelã e chocolate ao leite. Este café é cultivado na Serra do Caparaó, entre Minas Gerais e Espírito Santo, a altitudes que variam entre 1.100 e 1.400 metros.",
    notes: ["Avelã", "Chocolate ao Leite", "Doce de Leite"],
    roast: "Médio-Escuro",
    weight: "250g",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400&h=400&fit=crop",
    rating: 4.6
  },
  {
    id: 4,
    name: "Drip Pack Guatemala",
    origin: "Guatemala",
    category: "Drip Pack",
    price: 12.90,
    description: "Conveniência sem comprometer a qualidade. Cada sachê contém 12g de café moído da região de Antigua, pronto para preparar em qualquer lugar. Embalagem individual que preserva a frescura.",
    notes: ["Cacau", "Especiarias", "Mel"],
    roast: "Médio",
    weight: "10 unidades x 12g",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=400&fit=crop",
    rating: 4.5
  },
  {
    id: 5,
    name: "Blend Espresso Notturno",
    origin: "Brasil & Etiópia",
    category: "Moído",
    price: 15.90,
    description: "Uma mistura cuidadosamente elaborada para espresso, combinando a doçura brasileira com a complexidade etíope. Moagem fina otimizada para extração em máquina de espresso.",
    notes: ["Chocolate Amargo", "Frutas Vermelhas", "Nozes"],
    roast: "Escuro",
    weight: "250g",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=400&fit=crop",
    rating: 4.8
  },
  {
    id: 6,
    name: "Quénia AA Nyeri",
    origin: "Quénia",
    category: "Grãos",
    price: 19.90,
    description: "Intenso e vibrante com acidez de groselha e corpo suculento. Cultivado nas férteis encostas do Monte Quénia, na região de Nyeri, este café SL28 e SL34 é um dos mais procurados do mundo.",
    notes: ["Groselha", "Tomate", "Caramelo Queimado"],
    roast: "Claro-Médio",
    weight: "250g",
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop",
    rating: 4.9
  }
];

export const categories = ["Todos", "Grãos", "Moído", "Drip Pack"];
