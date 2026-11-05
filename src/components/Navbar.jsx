import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Navbar({ totalCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-glass">
        <a href="#" className="brand" onClick={closeMenu}>
          <div className="brand-logo" aria-label="شعار مطعم أمواج">
            <svg viewBox="0 0 64 64" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 38C18 31 26 43 34 36C42 29 48 41 54 34" stroke="#00e5ff" strokeWidth="4" strokeLinecap="round" />
              <path d="M14 47C21 41 28 49 34 44C40 39 46 47 50 42" stroke="#1de9b6" strokeWidth="3" strokeLinecap="round" />
              <path d="M22 24C27 17 37 17 44 23L51 18L49 26L51 31L43 27C36 31 27 30 22 24Z" fill="#ffb300" />
              <circle cx="27" cy="23" r="1.8" fill="#020b18" />
            </svg>
          </div>
          <div>
            <span className="brand-title">مطعم أمواج AMWAJ</span>
            <span className="brand-subtitle">SEAFOOD • GRILLS • SHAWARMA</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#specials">كنوز أمواج</a></li>
          <li><a href="#menu">المنيو التفاعلي</a></li>
          <li><a href="#original-menu">منيو PDF</a></li>
          <li><a href="#location">موقعنا على الخريطة</a></li>
        </ul>

        <div className="nav-actions">
          <button className="cart-btn" onClick={onOpenCart} aria-label="صدفة الطلب">
            <span>🐚</span>
            <span className="cart-btn-label">طلبي</span>
            <span className="cart-badge">{totalCount}</span>
          </button>

          <a href={`tel:${RESTAURANT_INFO.hotline}`} className="hotline-pill">
            <span>📞</span>
            <span>{RESTAURANT_INFO.hotline}</span>
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="القائمة"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          <a href="#specials" onClick={closeMenu}>🌟 كنوز أمواج الأكثر طلباً</a>
          <a href="#menu" onClick={closeMenu}>🐠 المنيو التفاعلي الكامل</a>
          <a href="#original-menu" onClick={closeMenu}>📄 منيو PDF الأصلي</a>
          <a href="#location" onClick={closeMenu}>📍 العنوان والخريطة (عباس العقاد)</a>
          <a href={RESTAURANT_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            🗺️ فتح في Google Maps
          </a>
        </div>
      )}
    </header>
  );
}
