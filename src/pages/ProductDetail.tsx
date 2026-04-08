import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';
import { useCart } from '../CartContext';
import { ChevronLeft, Star, ShieldCheck, Truck, RefreshCcw, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/')}
          className="text-primary hover:underline"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md px-4 py-4 flex items-center md:hidden border-b border-primary/5">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ChevronLeft size={24} />
        </button>
        <span className="ml-2 font-serif font-bold truncate">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-surface"
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="flex space-x-4 overflow-x-auto pb-2 no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all",
                    activeImage === idx ? "border-primary shadow-md" : "border-transparent opacity-60"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded">
                  {product.category}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="ml-1 text-xs text-text-muted font-medium">(24 reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-primary mb-6">${product.price}</p>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center border-2 border-primary/10 rounded-2xl p-1 bg-surface">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-primary/5 rounded-xl transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-primary/5 rounded-xl transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <p className="text-sm text-text-muted">
                  Only <span className="text-primary font-bold">{product.stock}</span> left in stock
                </p>
              </div>

              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) addToCart(product);
                }}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-light transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-3"
              >
                <Plus size={24} />
                <span>Add to Cart — ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-2xl border border-primary/5">
                <Truck size={20} className="text-accent" />
                <span className="text-xs font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-2xl border border-primary/5">
                <ShieldCheck size={20} className="text-accent" />
                <span className="text-xs font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-surface rounded-2xl border border-primary/5">
                <RefreshCcw size={20} className="text-accent" />
                <span className="text-xs font-medium">30-Day Returns</span>
              </div>
            </div>

            {/* Maker Info */}
            <div className="bg-surface p-6 rounded-3xl border border-primary/5 mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={product.maker.avatar}
                  alt={product.maker.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">The Maker</p>
                  <h3 className="font-serif text-xl font-bold">{product.maker.name}</h3>
                </div>
              </div>
              <p className="text-sm text-text-muted italic leading-relaxed">
                "{product.maker.bio}"
              </p>
            </div>

            {/* Details List */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Product Details</h3>
              <ul className="space-y-3">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
