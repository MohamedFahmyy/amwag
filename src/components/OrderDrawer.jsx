import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function OrderDrawer({
  isOpen,
  onClose,
  cart,
  totalPrice,
  onChangeQty,
  onClearCart
}) {
  return (
    <>
      <div
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`order-drawer ${isOpen ? 'open' : ''}`} aria-label="صدفة الطلب">
        <div className="drawer-header">
          <div>
            <h3>🐚 صدفة وحاسبة طلبك</h3>
            <span>جهز طلبك قبل الاتصال على {RESTAURANT_INFO.hotline}</span>
          </div>
          <button type="button" className="drawer-close" onClick={onClose} aria-label="إغلاق">
            ✕
          </button>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="drawer-empty">
              <div className="drawer-empty-icon">🐚</div>
              <p className="drawer-empty-title">صدفة طلبك فارغة حالياً</p>
              <p className="drawer-empty-sub">
                اضغط على أي صنف في المنيو لحساب إجمالي طلبك قبل الاتصال على {RESTAURANT_INFO.hotline}
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.key} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.label}</h4>
                  <span>
                    {item.price} ج.م × {item.qty} ={' '}
                    <strong className="cart-item-subtotal">{item.price * item.qty} ج.م</strong>
                  </span>
                </div>
                <div className="cart-qty-controls">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => onChangeQty(item.key, 1)}
                    aria-label="زيادة الكمية"
                  >
                    +
                  </button>
                  <span className="qty-count">{item.qty}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => onChangeQty(item.key, -1)}
                    aria-label="تقليل الكمية"
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="drawer-footer">
          <div className="drawer-total-row">
            <span>الإجمالي التقريبي:</span>
            <span>{totalPrice} ج.م</span>
          </div>
          <p className="drawer-service-note">* {RESTAURANT_INFO.dineInNote}.</p>
          <div className="drawer-actions">
            <a href={`tel:${RESTAURANT_INFO.hotline}`} className="btn btn-coral drawer-call-btn">
              <span>📞 اتصل للطلب: {RESTAURANT_INFO.hotline}</span>
            </a>
            {cart.length > 0 && (
              <button type="button" className="btn btn-glass drawer-clear-btn" onClick={onClearCart}>
                إفراغ
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
