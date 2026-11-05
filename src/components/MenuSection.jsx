import React, { useMemo, useRef } from 'react';
import { MENU_CATEGORIES, RESTAURANT_INFO } from '../data/menuData';

export default function MenuSection({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onAddToCart,
  onOpenCart,
  onResetFilters
}) {
  const tabsRef = useRef(null);

  const totalItemsCount = useMemo(
    () => MENU_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MENU_CATEGORIES.filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
      .map((cat) => {
        const items = cat.items.filter((item) => {
          if (!q) return true;
          return (
            item.name.toLowerCase().includes(q) ||
            (item.desc || '').toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
          );
        });
        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [activeCategory, searchQuery]);

  const handleTabClick = (catId, e) => {
    onSelectCategory(catId);
    if (e?.currentTarget && tabsRef.current) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  return (
    <main className="menu-section" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">🐠 القائمة الكاملة التفاعلية</span>
          <h2 className="section-title">منيو مطعم أمواج (AMWAJ Menu)</h2>
          <p className="section-note">{RESTAURANT_INFO.dineInNote}</p>
        </div>

        {/* Sticky Sea-Glass Search & Swipeable Category Tabs */}
        <div className="menu-controls">
          <div className="search-bar-wrap">
            <div className="search-input-container">
              <span className="search-icon">🔍</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
                placeholder="ابحث في المنيو: سمك، جمبري، شاورما، بروست، مشوي، مندي، برجر..."
                aria-label="ابحث في المنيو"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => onSearchChange('')}
                  aria-label="مسح البحث"
                >
                  ✕
                </button>
              )}
            </div>
            <button
              type="button"
              className="btn btn-coral desktop-only-btn"
              onClick={onOpenCart}
            >
              <span>🐚 عرض صدفة الطلب</span>
            </button>
          </div>

          <div className="category-tabs" ref={tabsRef}>
            <button
              type="button"
              className={`cat-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={(e) => handleTabClick('all', e)}
            >
              <span>🌊</span>
              <span>كل المنيو ({totalItemsCount})</span>
            </button>

            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={(e) => handleTabClick(cat.id, e)}
              >
                <span>{cat.icon}</span>
                <span>
                  {cat.shortTitle} ({cat.items.length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Categories & Cards */}
        {filteredCategories.length === 0 ? (
          <div className="empty-search-box">
            <div className="empty-search-icon">🐠</div>
            <h3>لم نجد صنفاً مطابقاً لـ &ldquo;{searchQuery}&rdquo;</h3>
            <p>جرب البحث عن: سمك، جمبري، شاورما، بروست، مشوي، مندي، برجر، عصير...</p>
            <button type="button" className="btn btn-aqua" onClick={onResetFilters}>
              إظهار كل المنيو
            </button>
          </div>
        ) : (
          filteredCategories.map((cat) => (
            <div key={cat.id} className="menu-category-block" id={`cat-${cat.id}`}>
              <div className="category-banner">
                <div className="category-banner-title">
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                </div>
                <div className="category-banner-sub">{cat.subtitle}</div>
              </div>

              <div className="menu-grid">
                {cat.items.map((item) => (
                  <article key={item.id} className="menu-card">
                    <div className="menu-card-top">
                      <div className="dish-avatar">{item.icon || cat.icon || '🍽️'}</div>
                      <div className="menu-card-info">
                        <div className="menu-card-header">
                          <h3 className="menu-item-title">{item.name}</h3>
                          {item.badge && <span className="menu-item-badge">{item.badge}</span>}
                        </div>
                        {item.desc && <p className="menu-item-desc">{item.desc}</p>}
                      </div>
                    </div>

                    {item.variants && item.variants.length > 0 ? (
                      <div className="menu-variants">
                        {item.variants.map((v) => (
                          <button
                            key={v.label}
                            type="button"
                            className="variant-chip"
                            onClick={(e) =>
                              onAddToCart(
                                item.id,
                                `${item.name} (${v.label})`,
                                v.price,
                                e
                              )
                            }
                          >
                            <span className="variant-label">{v.label}</span>
                            <span className="variant-price">
                              {v.price} <small>ج.م +</small>
                            </span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="single-price-row">
                        <div className="price-tag">
                          {item.price} <span>ج.م</span>
                        </div>
                        <button
                          type="button"
                          className="add-btn"
                          onClick={(e) => onAddToCart(item.id, item.name, item.price, e)}
                        >
                          <span>🫧 أضف لطلبك</span>
                        </button>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
