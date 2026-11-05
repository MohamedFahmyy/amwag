import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function MobileBottomBar({ totalCount, totalPrice, onOpenCart }) {
  return (
    <nav className="mobile-bottom-bar" aria-label="شريط التنقل السريع للموبايل">
      <a href="#menu" className="mobile-bar-item">
        <span className="mobile-bar-icon">🐠</span>
        <span>المنيو</span>
      </a>

      <a href="#location" className="mobile-bar-item">
        <span className="mobile-bar-icon">📍</span>
        <span>الخريطة</span>
      </a>

      <button type="button" className="mobile-bar-cart-cta" onClick={onOpenCart}>
        <span className="mobile-cart-icon-wrap">
          🐚
          {totalCount > 0 && <span className="mobile-cart-count">{totalCount}</span>}
        </span>
        <span className="mobile-cart-text">
          {totalCount > 0 ? `${totalPrice} ج.م` : 'صدفة طلبي'}
        </span>
      </button>

      <a href={RESTAURANT_INFO.pdfPath} target="_blank" rel="noopener noreferrer" className="mobile-bar-item">
        <span className="mobile-bar-icon">📄</span>
        <span>PDF</span>
      </a>

      <a href={`tel:${RESTAURANT_INFO.hotline}`} className="mobile-bar-item call-highlight">
        <span className="mobile-bar-icon">📞</span>
        <span>{RESTAURANT_INFO.hotline}</span>
      </a>
    </nav>
  );
}
