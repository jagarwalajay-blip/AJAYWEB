import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../types';
import { useCart } from '../CartContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group relative bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block aspect-[4/5] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs font-medium text-primary/60 uppercase tracking-wider">
            {product.category}
          </p>
          <p className="font-medium text-primary">${product.price}</p>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-serif font-semibold text-text-main group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-text-muted mt-1 line-clamp-2">
          by {product.maker.name}
        </p>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-4 w-full flex items-center justify-center space-x-2 bg-primary/5 hover:bg-primary text-primary hover:text-white py-2.5 rounded-xl transition-all duration-300 font-medium text-sm"
        >
          <Plus size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}
