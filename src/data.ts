import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hand-Thrown Ceramic Mug',
    description: 'A beautiful, tactile ceramic mug with a speckled glaze. Each piece is unique and fits perfectly in your hand.',
    price: 32,
    category: 'Ceramics',
    images: [
      'https://picsum.photos/seed/ceramic1/800/1000',
      'https://picsum.photos/seed/ceramic2/800/1000'
    ],
    maker: {
      name: 'Elena Rossi',
      avatar: 'https://picsum.photos/seed/maker1/200/200',
      bio: 'Elena is a third-generation potter based in Tuscany, focusing on organic shapes and natural glazes.'
    },
    details: [
      'Capacity: 12oz',
      'Dishwasher safe',
      'Microwave safe',
      'Hand-signed by the artist'
    ],
    stock: 12
  },
  {
    id: '2',
    name: 'Hand-Woven Linen Scarf',
    description: 'Soft, breathable linen scarf woven on a traditional loom. Perfect for all seasons with its natural temperature-regulating properties.',
    price: 58,
    category: 'Textiles',
    images: [
      'https://picsum.photos/seed/linen1/800/1000',
      'https://picsum.photos/seed/linen2/800/1000'
    ],
    maker: {
      name: 'Soren Nielsen',
      avatar: 'https://picsum.photos/seed/maker2/200/200',
      bio: 'Soren works with sustainable flax to create timeless textiles in his Copenhagen studio.'
    },
    details: [
      '100% Organic Linen',
      'Dimensions: 70" x 20"',
      'Hand-wash recommended',
      'Naturally hypoallergenic'
    ],
    stock: 8
  },
  {
    id: '3',
    name: 'Hand-Carved Walnut Bowl',
    description: 'A stunning decorative bowl carved from a single piece of reclaimed walnut wood. Finished with food-safe oil.',
    price: 85,
    category: 'Woodwork',
    images: [
      'https://picsum.photos/seed/wood1/800/1000',
      'https://picsum.photos/seed/wood2/800/1000'
    ],
    maker: {
      name: 'Marcus Thorne',
      avatar: 'https://picsum.photos/seed/maker3/200/200',
      bio: 'Marcus is a woodworker who finds beauty in the natural imperfections of reclaimed timber.'
    },
    details: [
      'Diameter: 10"',
      'Food-safe finish',
      'Unique grain pattern',
      'Reclaimed walnut'
    ],
    stock: 3
  },
  {
    id: '4',
    name: 'Botanical Soy Candle',
    description: 'Small-batch soy candle infused with essential oils of cedarwood, sage, and wild lavender.',
    price: 24,
    category: 'Home',
    images: [
      'https://picsum.photos/seed/candle1/800/1000',
      'https://picsum.photos/seed/candle2/800/1000'
    ],
    maker: {
      name: 'Aria Moon',
      avatar: 'https://picsum.photos/seed/maker4/200/200',
      bio: 'Aria creates sensory experiences through scent, using only plant-based ingredients.'
    },
    details: [
      'Burn time: 45 hours',
      '100% Soy wax',
      'Cotton wick',
      'Recyclable glass jar'
    ],
    stock: 25
  },
  {
    id: '5',
    name: 'Leather Journal',
    description: 'Hand-stitched leather journal with deckle-edged recycled paper. A companion for a lifetime of thoughts.',
    price: 45,
    category: 'Paper',
    images: [
      'https://picsum.photos/seed/journal1/800/1000',
      'https://picsum.photos/seed/journal2/800/1000'
    ],
    maker: {
      name: 'Julian Vance',
      avatar: 'https://picsum.photos/seed/maker5/200/200',
      bio: 'Julian is a bookbinder who preserves traditional techniques in a modern world.'
    },
    details: [
      '120 pages',
      'Full-grain leather',
      'Recycled paper',
      'Refillable design'
    ],
    stock: 15
  },
  {
    id: '6',
    name: 'Forged Steel Bottle Opener',
    description: 'Minimalist bottle opener hand-forged from high-carbon steel. A functional piece of industrial art.',
    price: 38,
    category: 'Metalwork',
    images: [
      'https://picsum.photos/seed/steel1/800/1000',
      'https://picsum.photos/seed/steel2/800/1000'
    ],
    maker: {
      name: 'Elias Black',
      avatar: 'https://picsum.photos/seed/maker6/200/200',
      bio: 'Elias is a blacksmith who blends traditional forging with contemporary design.'
    },
    details: [
      'Hand-forged steel',
      'Beeswax finish',
      'Ergonomic grip',
      'Lifetime warranty'
    ],
    stock: 10
  }
];

export const CATEGORIES = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
