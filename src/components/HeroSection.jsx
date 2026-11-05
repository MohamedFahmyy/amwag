import React from 'react';
import { HERO_TREASURES, RESTAURANT_INFO } from '../data/menuData';

export default function HeroSection({ onAddToCart }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="ocean-badge">
            <span>🌊🐠</span>
            <span>57 ش عباس العقاد، مدينة نصر • الخط الساخن {RESTAURANT_INFO.hotline}</span>
          </div>
          <h1>
            غُص في بحر النكهات مع <span className="wave-gradient">أمواج للمشويات والبحريات</span>
          </h1>
          <p className="hero-desc">
            حيث تلتقي أمواج البحر بأسماك الفكتوريا البلطي وقشر البياض والجمبري الطازج، مع لهيب المشويات على الفحم، الشاورما، البروست الذهبي، والمندي والشية الضاني الأصيلة.
          </p>

          <div className="hero-cta-group">
            <a href="#menu" className="btn btn-aqua">
              <span>🐠 استكشف المنيو والأسعار</span>
            </a>
            <a href={`tel:${RESTAURANT_INFO.hotline}`} className="btn btn-coral">
              <span>📞 اتصل الآن: {RESTAURANT_INFO.hotline}</span>
            </a>
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
            >
              <span>📍 الموقع على Google Maps</span>
            </a>
          </div>
        </div>

        <div className="hero-portal-wrap">
          <div className="ocean-portal-card">
            <div className="portal-header">
              <span className="portal-title">🐚 لآلئ منيو أمواج</span>
              <span className="portal-tag">اضغط للإضافة السريعة</span>
            </div>

            <div className="treasure-grid">
              {HERO_TREASURES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className="treasure-item"
                  onClick={(e) => onAddToCart(t.id, t.name, t.price, e)}
                >
                  <span className="emoji">{t.emoji}</span>
                  <div className="treasure-item-body">
                    <h4>{t.name}</h4>
                    <p>{t.desc}</p>
                    <span className="price-pill">{t.price} ج.م +</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="portal-hotline">
              <div>
                <div className="portal-hotline-sub">توصيل سريع من قلب الأمواج</div>
                <div className="portal-hotline-main">جميع وجبات الصالة بالشوربة والسلطة</div>
              </div>
              <a href={`tel:${RESTAURANT_INFO.hotline}`} className="big-num">
                {RESTAURANT_INFO.hotline}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
