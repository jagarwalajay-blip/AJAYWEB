import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCart } from '../CartContext';
import { ChevronLeft, CreditCard, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-4xl font-serif font-bold mb-4">Thank you for your order!</h1>
        <p className="text-text-muted max-w-md mb-8">
          Your handmade treasures are being prepared with care. We'll send you a confirmation email shortly.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-white px-12 py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-xl shadow-primary/20"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Your cart is empty</h2>
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
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-text-muted hover:text-primary mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="ml-1 font-medium">Back to Cart</span>
        </button>

        <h1 className="text-4xl font-serif font-bold mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleCheckout} className="space-y-8">
            <section>
              <h2 className="text-xl font-serif font-bold mb-6 flex items-center space-x-2">
                <Truck size={20} className="text-primary" />
                <span>Shipping Information</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">First Name</label>
                  <input required type="text" className="w-full bg-surface border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-surface border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Address</label>
                  <input required type="text" className="w-full bg-surface border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">City</label>
                  <input required type="text" className="w-full bg-surface border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Postal Code</label>
                  <input required type="text" className="w-full bg-surface border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold mb-6 flex items-center space-x-2">
                <CreditCard size={20} className="text-primary" />
                <span>Payment Method</span>
              </h2>
              <div className="space-y-4">
                <div className="bg-surface border border-primary/10 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <CreditCard size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Credit Card</p>
                      <p className="text-xs text-text-muted">Secure payment via Stripe</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Card Number</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-surface border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Expiry Date</label>
                    <input required type="text" placeholder="MM/YY" className="w-full bg-surface border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">CVV</label>
                    <input required type="text" placeholder="123" className="w-full bg-surface border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                </div>
              </div>
            </section>

            <button
              disabled={isProcessing}
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-light transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <ShieldCheck size={24} />
                  <span>Complete Purchase — ${totalPrice.toFixed(2)}</span>
                </>
              )}
            </button>
          </form>

          {/* Summary */}
          <div className="lg:sticky lg:top-32 h-fit space-y-8">
            <div className="bg-surface rounded-3xl p-8 border border-primary/5 shadow-sm">
              <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-text-muted">
                      {item.name} <span className="font-bold text-text-main">x{item.quantity}</span>
                    </span>
                    <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-6 border-t border-primary/10">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Subtotal</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4">
                  <span>Total</span>
                  <span className="text-primary">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 rounded-2xl p-6 flex items-start space-x-4">
              <ShieldCheck className="text-accent flex-shrink-0" size={24} />
              <div>
                <p className="font-bold text-sm">Artisan Guarantee</p>
                <p className="text-xs text-text-muted mt-1">
                  Every item is verified for authenticity and quality. Your purchase directly supports independent makers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
