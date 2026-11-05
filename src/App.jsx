import React, { useMemo, useRef, useState } from 'react';
import OceanCanvas from './components/OceanCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import MenuSection from './components/MenuSection';
import LocationAndPdfSection from './components/LocationAndPdfSection';
import OrderDrawer from './components/OrderDrawer';
import MobileBottomBar from './components/MobileBottomBar';
import { RESTAURANT_INFO } from './data/menuData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  const burstQueueRef = useRef([]);
  const toastTimerRef = useRef(null);

  const totalCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const triggerToast = (msg) => {
    setToastMsg(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMsg(null);
    }, 2300);
  };

  const spawnClickBubbles = (x, y) => {
    for (let i = 0; i < 8; i++) {
      burstQueueRef.current.push({
        x: x + (Math.random() - 0.5) * 28,
        y: y + (Math.random() - 0.5) * 20,
        r: 3 + Math.random() * 6,
        vy: 2 + Math.random() * 3.5,
        vx: (Math.random() - 0.5) * 2,
        alpha: 0.9
      });
    }
  };

  const handleAddToCart = (id, label, price, evt) => {
    const key = `${id}-${label}`;
    setCart((prev) => {
      const existing = prev.find((c) => c.key === key);
      if (existing) {
        return prev.map((c) => (c.key === key ? { ...c, qty: c.qty + 1 } : c));
      }
      return [...prev, { key, label, price, qty: 1 }];
    });

    if (evt && evt.clientX) {
      spawnClickBubbles(evt.clientX, evt.clientY);
    }
    triggerToast(`تمت إضافة "${label}" إلى طلبك`);
  };

  const handleChangeQty = (key, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const handleClearCart = () => setCart([]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <>
      <OceanCanvas burstQueueRef={burstQueueRef} />

      <div className="page-content">
        <Navbar totalCount={totalCount} onOpenCart={() => setDrawerOpen(true)} />

        <HeroSection onAddToCart={handleAddToCart} />

        <SpecialsSection
          onSelectCategory={setActiveCategory}
          onAddToCart={handleAddToCart}
        />

        <MenuSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddToCart={handleAddToCart}
          onOpenCart={() => setDrawerOpen(true)}
          onResetFilters={handleResetFilters}
        />

        <LocationAndPdfSection />

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="brand">
                <div>
                  <span className="brand-title">مطعم أمواج للمشويات والبحريات — AMWAJ</span>
                  <span className="brand-subtitle">
                    {RESTAURANT_INFO.address} • الخط الساخن {RESTAURANT_INFO.hotline}
                  </span>
                </div>
              </div>
              <div className="footer-links">
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass footer-btn"
                >
                  📍 خريطة جوجل
                </a>
                <a
                  href={RESTAURANT_INFO.driveMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass footer-btn"
                >
                  📄 رابط المنيو على Drive
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.hotline}`}
                  className="btn btn-coral footer-btn"
                >
                  📞 {RESTAURANT_INFO.hotline}
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© مطعم أمواج للمشويات (AMWAJ). جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </div>

      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cart={cart}
        totalPrice={totalPrice}
        onChangeQty={handleChangeQty}
        onClearCart={handleClearCart}
      />

      <MobileBottomBar
        totalCount={totalCount}
        totalPrice={totalPrice}
        onOpenCart={() => setDrawerOpen(true)}
      />

      {toastMsg && (
        <div className="toast-notification" role="status" aria-live="polite">
          🫧 {toastMsg}
        </div>
      )}
    </>
  );
}
