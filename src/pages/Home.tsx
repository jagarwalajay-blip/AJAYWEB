import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS, CATEGORIES } from '../data';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

export default function Home() {
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(categoryId || 'All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/artisan-hero/1920/1080?blur=2"
            alt="Artisan at work"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight"
          >
            Crafted with Heart, <br />
            <span className="text-accent italic">Made for Life.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted font-medium"
          >
            Discover a curated collection of unique, handmade treasures from the world's finest artisans.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-surface rounded-2xl shadow-xl p-2 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "whitespace-nowrap px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300",
                selectedCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-text-muted hover:bg-primary/5 hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-text-main">
              {selectedCategory === 'All' ? 'Featured Collection' : selectedCategory}
            </h2>
            <p className="text-text-muted mt-1">{filteredProducts.length} unique pieces</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Maker Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-accent/5 rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/maker-spotlight/800/800"
              alt="Maker Spotlight"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Maker Spotlight</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main">Meet the hands behind the craft.</h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Every item in Artisan Alley tells a story. We believe in the beauty of the handmade and the connection between the maker and the owner.
            </p>
            <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
              Read Our Maker Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
