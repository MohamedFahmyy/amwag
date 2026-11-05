import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function LocationAndPdfSection() {
  return (
    <>
      {/* Original PDF Menu Section */}
      <section id="original-menu" className="container">
        <div className="glass-section-box">
          <div className="section-header">
            <span className="section-subtitle">📄 المنيو المصور الأصلي</span>
            <h2 className="section-title">تصفح أو حمّل المنيو الرسمي (PDF)</h2>
            <p className="section-note">نسخة مطابقة لمنيو المطعم المطبوع بصفحتيه الكاملتين</p>
          </div>

          <div className="pdf-action-buttons">
            <a
              href={RESTAURANT_INFO.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-aqua"
            >
              <span>📥 فتح / تحميل المنيو (PDF)</span>
            </a>
            <a
              href={RESTAURANT_INFO.driveMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
            >
              <span>🔗 فتح المنيو على Google Drive</span>
            </a>
          </div>

          <div className="pdf-embed-container desktop-pdf-preview">
            <object
              data={RESTAURANT_INFO.pdfPath}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <div className="pdf-fallback">
                <p>متصفحك لا يدعم عرض ملف PDF داخل الصفحة مباشرة.</p>
                <a
                  href={RESTAURANT_INFO.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-coral"
                >
                  اضغط هنا لتحميل أو فتح المنيو PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>

      {/* Location & Google Maps Section */}
      <section id="location" className="container">
        <div className="glass-section-box">
          <div className="section-header">
            <span className="section-subtitle">🧭 مرسى مطعم أمواج</span>
            <h2 className="section-title">موقعنا في مدينة نصر</h2>
            <p className="section-note">
              نستقبلكم يومياً في صالة مطعم أمواج المكونة من عدة أدوار بشارع عباس العقاد
            </p>
          </div>

          <div className="location-grid">
            <div>
              <h3 className="location-heading">
                مطعم أمواج للمشويات والبحريات — AMWAJ
              </h3>
              <p className="location-lead">
                المكان الأمثل للعائلات والأصدقاء للاستمتاع بالمشويات، الأسماك، البروست، الشاورما، والأكلات السودانية والمصرية الأصيلة.
              </p>

              <ul className="location-details-list">
                <li>
                  <div className="loc-badge-icon">📍</div>
                  <div>
                    <strong>العنوان</strong>
                    <span>{RESTAURANT_INFO.address}</span>
                  </div>
                </li>
                <li>
                  <div className="loc-badge-icon">📞</div>
                  <div>
                    <strong>الخط الساخن والتوصيل</strong>
                    <a href={`tel:${RESTAURANT_INFO.hotline}`} className="loc-hotline-link">
                      {RESTAURANT_INFO.hotline}
                    </a>
                  </div>
                </li>
                <li>
                  <div className="loc-badge-icon">🍲</div>
                  <div>
                    <strong>ضيافة الصالة</strong>
                    <span>{RESTAURANT_INFO.dineInNote}</span>
                  </div>
                </li>
              </ul>

              <div className="location-cta-row">
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-aqua location-map-btn"
                >
                  <span>🗺️ افتح الموقع في Google Maps</span>
                </a>
                <a href={`tel:${RESTAURANT_INFO.hotline}`} className="btn btn-coral">
                  <span>📞 اتصل {RESTAURANT_INFO.hotline}</span>
                </a>
              </div>
            </div>

            <div className="map-frame-wrapper">
              <iframe
                title="موقع مطعم أمواج للمشويات على خرائط جوجل"
                src={RESTAURANT_INFO.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
