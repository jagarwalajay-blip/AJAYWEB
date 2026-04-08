/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
          <Navbar onOpenCart={() => setIsCartOpen(true)} />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={
                <div className="min-h-[60vh] flex items-center justify-center p-8 text-center">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl font-serif font-bold mb-6">Our Story</h1>
                    <p className="text-lg text-text-muted leading-relaxed">
                      Artisan Alley was born from a simple belief: that the objects we surround ourselves with should have a soul. 
                      We connect discerning collectors with passionate makers who preserve traditional techniques while pushing 
                      the boundaries of modern design.
                    </p>
                  </div>
                </div>
              } />
            </Routes>
          </main>

          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          
          <footer className="bg-surface border-t border-primary/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-4">Artisan Alley</h2>
                  <p className="text-text-muted max-w-sm">
                    A curated marketplace for unique handmade goods. Supporting independent makers worldwide since 2024.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Shop</h3>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li><a href="/" className="hover:text-primary transition-colors">All Products</a></li>
                    <li><a href="/category/Ceramics" className="hover:text-primary transition-colors">Ceramics</a></li>
                    <li><a href="/category/Textiles" className="hover:text-primary transition-colors">Textiles</a></li>
                    <li><a href="/category/Woodwork" className="hover:text-primary transition-colors">Woodwork</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Support</h3>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-primary/5 text-center text-xs text-text-muted">
                <p>&copy; 2026 Artisan Alley. Hand-crafted with love.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}
