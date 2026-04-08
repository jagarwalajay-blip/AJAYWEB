import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-primary/10 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-serif text-xl font-bold">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-primary/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-primary/40" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium">Your cart is empty</p>
                    <p className="text-text-muted text-sm mt-1">Start adding some handmade treasures.</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-light transition-colors"
                  >
                    Browse Shop
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif font-semibold text-text-main truncate pr-2">
                          {item.name}
                        </h3>
                        <p className="font-medium text-primary">${item.price}</p>
                      </div>
                      <p className="text-xs text-text-muted mt-1">by {item.maker.name}</p>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-primary/10 rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-primary/5 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-primary/5 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-primary/10 bg-surface">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-text-muted">Subtotal</span>
                  <span className="text-xl font-bold text-primary">${totalPrice}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="w-full bg-primary text-white flex items-center justify-center space-x-2 py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/20"
                >
                  <span>Checkout</span>
                  <ArrowRight size={20} />
                </Link>
                <p className="text-center text-[10px] text-text-muted mt-4 uppercase tracking-widest">
                  Free shipping on orders over $100
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
