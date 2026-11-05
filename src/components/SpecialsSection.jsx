import React from 'react';

export default function SpecialsSection({ onSelectCategory, onAddToCart }) {
  const jumpToCategory = (catId) => {
    onSelectCategory(catId);
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="specials-section" id="specials">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">🌟 أطباق تشد الحواس</span>
          <h2 className="section-title">كنوز أمواج الأكثر طلباً</h2>
          <p className="section-note">
            تشكيلة مختارة تجمع بين خيرات البحر وأصالة المشويات السودانية والمصرية
          </p>
        </div>

        <div className="specials-track">
          <div className="special-spotlight-card">
            <span className="special-ribbon">بحريات طازجة</span>
            <div>
              <div className="special-icon-ring">🐟</div>
              <h3>سمك فكتوريا بلطي &amp; قشر بياض</h3>
              <p>
                وجبات أسماك فكتوريا بلطي وفيليه قشر بياض مقرمش تقدم مع الأرز والبطاطس والشوربة والسلطة.
              </p>
            </div>
            <div className="special-card-footer">
              <span className="special-price">250 - 280 ج.م</span>
              <button className="add-btn" onClick={() => jumpToCategory('meals')}>
                تصفح الوجبات
              </button>
            </div>
          </div>

          <div className="special-spotlight-card">
            <span className="special-ribbon">أصالة الضاني</span>
            <div>
              <div className="special-icon-ring">🍖</div>
              <h3>شية ضاني &amp; مندي لحم</h3>
              <p>
                شية لحم ضاني مشوية على الأصول السودانية (نصف كيلو أو كيلو) ومندي لحم ضاني فاخر مع أرز المندي.
              </p>
            </div>
            <div className="special-card-footer">
              <span className="special-price">430 - 800 ج.م</span>
              <button
                className="add-btn"
                onClick={(e) => onAddToCart('meal-mandi-meat', 'مندي لحم ضاني', 550, e)}
              >
                + أضف مندي لحم
              </button>
            </div>
          </div>

          <div className="special-spotlight-card">
            <span className="special-ribbon">شاورما وفتة</span>
            <div>
              <div className="special-icon-ring">🥙</div>
              <h3>مملكة الشاورما والفتة</h3>
              <p>
                شاورما سوري وفرنساوي وكيزر، فتة شاورما، وجبات عربي، وشاورما بالوزن للعزومات حتى 1 كيلو.
              </p>
            </div>
            <div className="special-card-footer">
              <span className="special-price">تبدأ من 40 ج.م</span>
              <button className="add-btn" onClick={() => jumpToCategory('shawarma')}>
                قسم الشاورما
              </button>
            </div>
          </div>

          <div className="special-spotlight-card">
            <span className="special-ribbon">انتعاش الأمواج</span>
            <div>
              <div className="special-icon-ring">🍹</div>
              <h3>عصير صاروخ &amp; جامبو أمواج</h3>
              <p>
                عصائر فواكه طبيعية 100%، كوكتيل صاروخ وجامبو، وشاي باللبن بالجنزبيل وسحلب بالمكسرات.
              </p>
            </div>
            <div className="special-card-footer">
              <span className="special-price">30 - 120 ج.م</span>
              <button className="add-btn" onClick={() => jumpToCategory('juices')}>
                قسم العصائر
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
