export const RESTAURANT_INFO = {
  nameAr: 'مطعم أمواج للمشويات والبحريات',
  nameEn: 'AMWAJ GRILLS & SEAFOOD',
  hotline: '15036',
  address: '57 شارع عباس العقاد، مدينة نصر، القاهرة',
  mapsUrl: 'https://maps.app.goo.gl/T9a8kKAwhKvU2bHJ6',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=30.0561289,31.3379471&hl=ar&z=17&output=embed',
  driveMenuUrl: 'https://drive.google.com/file/d/1_czWOF2CI6r5EXWdvt9eGg7DrnaBR0NA/view',
  pdfPath: './amwaj-menu.pdf',
  dineInNote: 'جميع وجبات الصالة تقدم مع الشوربة والسلطة • يضاف 12% خدمة في الصالة'
};

export const HERO_TREASURES = [
  {
    id: 'meal-shrimp',
    name: 'وجبة جمبري أمواج',
    desc: '6 قطع جمبري + بطاطس أو أرز + شوربة وسلطة',
    emoji: '🍤',
    price: 380
  },
  {
    id: 'meal-fish-fillet',
    name: 'سمك فيليه قشر بياض',
    desc: '4 قطع فيليه قشر بياض + أرز أو بطاطس',
    emoji: '🐠',
    price: 280
  },
  {
    id: 'meal-mixed-amwaj',
    name: 'وجبة مشكل أمواج',
    desc: 'سمك + بروست + كفتة + شيش طاووق + أرز',
    emoji: '🌊',
    price: 250
  },
  {
    id: 'meal-mixed-grill',
    name: 'وجبة مشكل مشاوي',
    desc: 'كفتة + شيش طاووق + ريش + كباب عالفحم',
    emoji: '🔥',
    price: 450
  }
];

export const MENU_CATEGORIES = [
  {
    id: 'meals',
    shortTitle: 'الوجبات',
    title: 'الوجبات والمشويات والبحريات',
    subtitle: 'جميع وجبات الصالة تقدم مع الشوربة والسلطة',
    icon: '🐟',
    items: [
      {
        id: 'meal-fish-tilapia',
        name: 'وجبة سمك فكتوريا بلطي',
        desc: 'سمك فكتوريا بلطي طازج بتتبيلة أمواج البحرية الشهيرة',
        icon: '🐟',
        badge: 'نجم البحر',
        price: 250
      },
      {
        id: 'meal-fish-fillet',
        name: 'وجبة سمك فيليه عجل قشر بياض',
        desc: '4 قطع سمك فيليه قشر بياض مقرمش + أرز أو بطاطس',
        icon: '🐠',
        badge: 'بحريات فاخرة',
        price: 280
      },
      {
        id: 'meal-shrimp',
        name: 'وجبة جمبري أمواج',
        desc: '6 قطع جمبري جامبو بتتبيلة البحر + بطاطس أو أرز',
        icon: '🍤',
        badge: 'فسفور عالي',
        price: 380
      },
      {
        id: 'meal-mixed-amwaj',
        name: 'وجبة مشكل أمواج',
        desc: 'قطعة بروست + 1 سيخ كفتة + 1 سيخ شيش طاووق + قطعة سمك + بطاطس أو أرز',
        icon: '🌊',
        badge: 'تشكيلة أمواج',
        price: 250
      },
      {
        id: 'meal-broast-full',
        name: 'وجبة بروست',
        desc: '4 قطع دجاج بروست ذهبي مقرمش + بطاطس أو أرز',
        icon: '🍗',
        badge: 'الأكثر طلباً',
        price: 220
      },
      {
        id: 'meal-broast-quarter',
        name: 'وجبة بروست ربع',
        desc: '2 قطع دجاج بروست + بطاطس أو أرز',
        icon: '🍗',
        price: 130
      },
      {
        id: 'meal-msahab',
        name: 'مسحب',
        desc: '6 قطع صدور دجاج مسحب مقرمش + بطاطس أو أرز',
        icon: '🍖',
        price: 250
      },
      {
        id: 'meal-charcoal-chicken',
        name: 'وجبة فراخ مشوي على الفحم',
        desc: '1/2 دجاج مشوي على الفحم بتتبيلة خاصة + أرز',
        icon: '🔥',
        badge: 'مشوي عالفحم',
        price: 200
      },
      {
        id: 'meal-shish-tawook',
        name: 'وجبة شيش طاووق',
        desc: '2 سيخ شيش طاووق متبل ومشوي + بطاطس أو أرز',
        icon: '🍢',
        price: 220
      },
      {
        id: 'meal-shish-kebab',
        name: 'وجبة شيش كباب',
        desc: '2 سيخ كباب لحم مشوي عالفحم + بطاطس أو أرز',
        icon: '🥩',
        badge: 'مشويات فاخرة',
        price: 525
      },
      {
        id: 'meal-kofta-amwaj',
        name: 'وجبة كفتة أمواج',
        desc: '3 سيخ كفتة أمواج المميزة على الفحم + بطاطس أو أرز',
        icon: '🍢',
        badge: 'مميز',
        price: 525
      },
      {
        id: 'meal-mixed-grill',
        name: 'وجبة مشكل مشاوي',
        desc: 'سيخ كفتة + سيخ شيش طاووق + ريش + كباب',
        icon: '🔥',
        badge: 'وليمة مشاوي',
        price: 450
      },
      {
        id: 'meal-quail',
        name: 'وجبة سمان مشوي على الفحم',
        desc: '2 سمان مشوي على الفحم + بطاطس أو أرز',
        icon: '🐦',
        price: 270
      },
      {
        id: 'meal-mandi-meat',
        name: 'مندي لحم',
        desc: 'قطعة لحم ضاني طازج مطهو بعناية + أرز مندي',
        icon: '🍖',
        badge: 'ضاني أصلي',
        price: 550
      },
      {
        id: 'meal-mandi-chicken',
        name: 'مندي فراخ',
        desc: '1/2 دجاج مندي مدخن + أرز مندي مبهر',
        icon: '🍗',
        price: 220
      },
      {
        id: 'meal-shiya-lamb',
        name: 'شية ضاني',
        desc: 'شية لحم ضاني مشوية على الطريقة السودانية الأصيلة',
        icon: '🥩',
        badge: 'أصالة الطعم',
        variants: [
          { label: 'نصف كيلو', price: 430 },
          { label: '1 كيلو', price: 800 }
        ]
      }
    ]
  },
  {
    id: 'shawarma',
    shortTitle: 'الشاورما',
    title: 'الشاورما والفتة والشاورما بالوزن',
    subtitle: 'سندوتشات (سوري / فرنساوي / كيزر)، فتة، وجبات عربي، وشاورما بالكيلو',
    icon: '🥙',
    items: [
      {
        id: 'shawarma-chicken-sand',
        name: 'ساندوتش شاورما فراخ',
        desc: 'شاورما دجاج متبلة مع الثومية والمخلل',
        icon: '🌯',
        variants: [
          { label: 'كيزر', price: 40 },
          { label: 'فرنساوي', price: 90 },
          { label: 'سوري', price: 90 }
        ]
      },
      {
        id: 'shawarma-meat-sand',
        name: 'ساندوتش شاورما لحمة',
        desc: 'شاورما لحم بلدي متبلة مع الطحينة والبقدونس',
        icon: '🥙',
        variants: [
          { label: 'كيزر', price: 50 },
          { label: 'فرنساوي', price: 110 },
          { label: 'سوري', price: 110 }
        ]
      },
      {
        id: 'shawarma-mix-sand',
        name: 'ساندوتش شاورما ميكس',
        desc: 'ميكس شاورما فراخ ولحمة بتتبيلة أمواج',
        icon: '🌯',
        badge: 'ميكس خطير',
        variants: [
          { label: 'كيزر', price: 45 },
          { label: 'فرنساوي', price: 125 },
          { label: 'سوري', price: 125 }
        ]
      },
      {
        id: 'shawarma-fatta',
        name: 'فتة شاورما',
        desc: 'أرز بسمتي مع العيش المحمص والثومية وشرائح الشاورما',
        icon: '🍲',
        badge: 'فتة أمواج',
        variants: [
          { label: 'دجاج', price: 160 },
          { label: 'ميكس', price: 170 },
          { label: 'لحمة', price: 180 }
        ]
      },
      {
        id: 'shawarma-arabi-meal',
        name: 'وجبة شاورما عربي',
        desc: 'خبز صاج مقطع مع البطاطس والثومية والمخلل',
        icon: '🍱',
        variants: [
          { label: 'دجاج', price: 155 },
          { label: 'ميكس', price: 160 },
          { label: 'لحمة', price: 170 }
        ]
      },
      {
        id: 'shawarma-weight-chicken',
        name: 'شاورما فراخ بالوزن',
        desc: 'تقدم مع العيش والثومية والمخللات',
        icon: '⚖️',
        badge: 'عائلي',
        variants: [
          { label: 'ربع كيلو', price: 220 },
          { label: 'نصف كيلو', price: 350 },
          { label: '1 كيلو', price: 720 }
        ]
      },
      {
        id: 'shawarma-weight-meat',
        name: 'شاورما لحمة بالوزن',
        desc: 'تقدم مع العيش والطحينة والمخللات',
        icon: '⚖️',
        badge: 'عائلي',
        variants: [
          { label: 'ربع كيلو', price: 280 },
          { label: 'نصف كيلو', price: 440 },
          { label: '1 كيلو', price: 900 }
        ]
      },
      {
        id: 'shawarma-weight-mix',
        name: 'شاورما ميكس بالوزن',
        desc: 'ميكس شاورما فراخ ولحمة بالوزن مع السلطات والعيش',
        icon: '⚖️',
        badge: 'عائلي',
        variants: [
          { label: 'ربع كيلو', price: 270 },
          { label: 'نصف كيلو', price: 400 },
          { label: '1 كيلو', price: 820 }
        ]
      }
    ]
  },
  {
    id: 'burgers',
    shortTitle: 'البرجر',
    title: 'البرجر (لحم & دجاج)',
    subtitle: 'متوفر سنجل أو دبل - برجر مشوي طازج بصوصات مميزة',
    icon: '🍔',
    items: [
      {
        id: 'burger-beef-classic',
        name: 'كلاسيك برجر (لحم)',
        desc: 'برجر لحم صافي مشوي مع الخس والطماطم والصوص الكلاسيكي',
        icon: '🍔',
        variants: [
          { label: 'سنجل', price: 120 },
          { label: 'دبل', price: 150 }
        ]
      },
      {
        id: 'burger-beef-juicy',
        name: 'جوسي لوسي برجر (لحم)',
        desc: 'برجر لحم محشو بالجبنة الشيدر السائحة',
        icon: '🧀',
        badge: 'الأكثر مبيعاً',
        variants: [
          { label: 'سنجل', price: 130 },
          { label: 'دبل', price: 160 }
        ]
      },
      {
        id: 'burger-beef-honey',
        name: 'هني ماسترد برجر (لحم)',
        desc: 'برجر لحم مشوي مع صوص الهني ماسترد الغني',
        icon: '🍯',
        variants: [
          { label: 'سنجل', price: 120 },
          { label: 'دبل', price: 150 }
        ]
      },
      {
        id: 'burger-beef-mushroom',
        name: 'مشروم برجر (لحم)',
        desc: 'برجر لحم مشوي مع المشروم المكرمل والجبنة',
        icon: '🍄',
        variants: [
          { label: 'سنجل', price: 125 },
          { label: 'دبل', price: 155 }
        ]
      },
      {
        id: 'burger-chicken-classic',
        name: 'كلاسيك برجر (دجاج)',
        desc: 'برجر دجاج مقرمش مع الخس والمايونيز',
        icon: '🍔',
        variants: [
          { label: 'سنجل', price: 100 },
          { label: 'دبل', price: 130 }
        ]
      },
      {
        id: 'burger-chicken-juicy',
        name: 'جوسي لوسي برجر (دجاج)',
        desc: 'برجر دجاج غني بصوص الجبنة الشيدر',
        icon: '🧀',
        variants: [
          { label: 'سنجل', price: 110 },
          { label: 'دبل', price: 140 }
        ]
      },
      {
        id: 'burger-chicken-honey',
        name: 'هني ماسترد برجر (دجاج)',
        desc: 'برجر دجاج مع صوص الهني ماسترد الشهي',
        icon: '🍯',
        variants: [
          { label: 'سنجل', price: 100 },
          { label: 'دبل', price: 130 }
        ]
      },
      {
        id: 'burger-chicken-mushroom',
        name: 'مشروم برجر (دجاج)',
        desc: 'برجر دجاج مع صوص المشروم والجبنة',
        icon: '🍄',
        variants: [
          { label: 'سنجل', price: 110 },
          { label: 'دبل', price: 140 }
        ]
      }
    ]
  },
  {
    id: 'sandwiches',
    shortTitle: 'الساندوتشات',
    title: 'الساندوتشات والإضافات',
    subtitle: 'متوفر في عيش سوري أو فرنساوي + إضافات حسب الرغبة',
    icon: '🥖',
    items: [
      {
        id: 'sand-fish-fillet',
        name: 'ساندوتش سمك فيليه',
        desc: 'سمك فيليه مقرمش بتتبيلة أمواج البحرية',
        icon: '🐟',
        badge: 'بحريات',
        variants: [
          { label: 'سوري', price: 120 },
          { label: 'فرنساوي', price: 130 }
        ]
      },
      {
        id: 'sand-shrimp',
        name: 'ساندوتش جمبري',
        desc: 'جمبري طازج مقرمش مع الصوص والطحينة',
        icon: '🍤',
        badge: 'بحريات',
        variants: [
          { label: 'سوري', price: 120 },
          { label: 'فرنساوي', price: 130 }
        ]
      },
      {
        id: 'sand-shish',
        name: 'ساندوتش شيش طاووق',
        desc: 'قطع شيش طاووق مشوية مع الثومية والمخلل',
        icon: '🍢',
        variants: [
          { label: 'سوري', price: 100 },
          { label: 'فرنساوي', price: 110 }
        ]
      },
      {
        id: 'sand-kofta',
        name: 'ساندوتش كفتة',
        desc: 'كفتة مشوية على الفحم مع الطحينة والبقدونس',
        icon: '🥖',
        variants: [
          { label: 'سوري', price: 100 },
          { label: 'فرنساوي', price: 110 }
        ]
      },
      {
        id: 'sand-crispy',
        name: 'ساندوتش كرسبي',
        desc: 'استربس دجاج كرسبي مقرمش مع صوص الجبنة والخس',
        icon: '🍗',
        variants: [
          { label: 'سوري', price: 100 },
          { label: 'فرنساوي', price: 110 }
        ]
      },
      { id: 'extra-cheddar', name: 'إضافة جبنة شيدر', desc: 'إضافة للساندوتشات', icon: '🧀', price: 10 },
      { id: 'extra-mozzarella', name: 'إضافة جبنة موتزاريلا', desc: 'إضافة للساندوتشات', icon: '🧀', price: 10 },
      { id: 'extra-fries', name: 'إضافة بطاطس', desc: 'إضافة للساندوتشات', icon: '🍟', price: 10 },
      { id: 'extra-mushroom', name: 'إضافة مشروم', desc: 'إضافة للساندوتشات', icon: '🍄', price: 10 },
      { id: 'extra-toasted-bread', name: 'إضافة عيش محمص', desc: 'إضافة للساندوتشات', icon: '🍞', price: 5 }
    ]
  },
  {
    id: 'salads-soups',
    shortTitle: 'السلطات والشوربة',
    title: 'السلطات والشوربة والمقبلات',
    subtitle: 'سلطات طازجة، شوربات ساخنة، وأطباق جانبية',
    icon: '🥗',
    items: [
      { id: 'soup-mixed', name: 'شوربة مشكل', desc: 'شوربة ساخنة غنية', icon: '🍲', badge: 'شوربة', price: 40 },
      { id: 'soup-cream', name: 'شوربة كريمة', desc: 'شوربة كريمة غنية المذاق', icon: '🥣', badge: 'شوربة', price: 50 },
      { id: 'soup-orzo', name: 'شوربة لسان عصفور', desc: 'شوربة لسان عصفور تقليدية', icon: '🍜', badge: 'شوربة', price: 30 },
      { id: 'side-mandi-rice', name: 'أرز مندي', desc: 'طبق أرز مندي مبهر', icon: '🍚', badge: 'مقبلات', price: 30 },
      { id: 'side-fries', name: 'بطاطس مقلية', desc: 'طبق بطاطس مقرمشة', icon: '🍟', badge: 'مقبلات', price: 20 },
      { id: 'salad-coleslaw', name: 'كول سلو', desc: 'سلطة كول سلو كريمية', icon: '🥗', price: 50 },
      { id: 'salad-green', name: 'سلطة خضراء', desc: 'خضروات طازجة مشكلة', icon: '🥒', price: 25 },
      { id: 'salad-baladi', name: 'سلطة بلدي', desc: 'سلطة بلدي مصرية طازجة', icon: '🍅', price: 25 },
      { id: 'salad-tahini', name: 'سلطة طحينة', desc: 'طحينة بالخلطة المميزة', icon: '🥣', price: 30 },
      { id: 'salad-toumia', name: 'تومية', desc: 'ثومية سوري كريمية', icon: '🧄', price: 30 },
      { id: 'salad-spicy-toumia', name: 'تومية سبايسي', desc: 'ثومية حارة', icon: '🌶️', price: 35 },
      { id: 'salad-tahini-plain', name: 'طحينة', desc: 'علبة طحينة', icon: '🥣', price: 30 },
      { id: 'bread-saj', name: 'عيش صاج', desc: 'خبز صاج سوري طازج', icon: '🫓', price: 5 },
      { id: 'bread-regular', name: 'عيش', desc: 'خبز طازج', icon: '🍞', price: 5 }
    ]
  },
  {
    id: 'juices',
    shortTitle: 'العصائر',
    title: 'العصائر الطبيعية والمشروبات الباردة',
    subtitle: 'عصائر فواكه طبيعية فريش، كوكتيلات، ومشروبات غازية',
    icon: '🍹',
    items: [
      { id: 'juice-jumbo', name: 'عصير جامبو', desc: 'كوكتيل أمواج الجامبو المميز', icon: '🍹', badge: 'جامبو', price: 120 },
      { id: 'juice-rocket', name: 'عصير صاروخ', desc: 'كوكتيل صاروخ الفواكه الطبيعي', icon: '🚀', badge: 'مميز', price: 60 },
      { id: 'juice-fruit-salad', name: 'سلطة فواكه', desc: 'قطع فواكه موسمية طازجة مع العصير', icon: '🍓', price: 50 },
      { id: 'juice-mango', name: 'عصير مانجو', desc: 'مانجو طبيعي فريش', icon: '🥭', price: 30 },
      { id: 'juice-strawberry', name: 'عصير فراولة', desc: 'فراولة طبيعية فريش', icon: '🍓', price: 30 },
      { id: 'juice-guava', name: 'عصير جوافة', desc: 'جوافة طبيعية فريش', icon: '🍐', price: 30 },
      { id: 'juice-orange', name: 'عصير برتقال', desc: 'برتقال طبيعي فريش', icon: '🍊', price: 30 },
      { id: 'juice-lemon', name: 'عصير ليمون', desc: 'ليمون طبيعي منعش', icon: '🍋', price: 30 },
      { id: 'juice-lemon-mint', name: 'عصير ليمون نعناع', desc: 'ليمون فريش بالنعناع الأخضر', icon: '🌿', price: 30 },
      { id: 'juice-mixed', name: 'عصير مشكل', desc: 'كوكتيل فواكه طبيعية', icon: '🍹', price: 30 },
      { id: 'juice-apple', name: 'عصير تفاح', desc: 'تفاح فريش', icon: '🍎', price: 35 },
      { id: 'juice-cantaloupe', name: 'عصير كنتلوب (شمام)', desc: 'شمام طبيعي بارد', icon: '🍈', price: 35 },
      { id: 'juice-pineapple', name: 'عصير أناناس', desc: 'أناناس فريش منعش', icon: '🍍', price: 35 },
      { id: 'juice-kiwi', name: 'عصير كيوي', desc: 'كيوي طبيعي فريش', icon: '🥝', price: 35 },
      { id: 'juice-grape', name: 'عصير عنب', desc: 'عنب طبيعي فريش', icon: '🍇', price: 35 },
      { id: 'drink-soft', name: 'مشروبات غازية', desc: 'كانز بارد', icon: '🥤', price: 20 },
      { id: 'drink-water', name: 'مياه معدنية', desc: 'زجاجة مياه معدنية', icon: '💧', price: 10 }
    ]
  },
  {
    id: 'hot-drinks',
    shortTitle: 'مشروبات ساخنة',
    title: 'مشروبات ساخنة',
    subtitle: 'شاي، قهوة، إسبريسو، كابتشينو، وسحلب بالمكسرات',
    icon: '☕',
    items: [
      { id: 'hot-tea', name: 'شاي', desc: 'شاي أحمر مضبوط', icon: '🍵', price: 25 },
      { id: 'hot-green-tea', name: 'شاي أخضر', desc: 'شاي أخضر صحي', icon: '🍃', price: 28 },
      { id: 'hot-green-tea-mint', name: 'شاي أخضر نعناع', desc: 'شاي أخضر بالنعناع الطازج', icon: '🌿', price: 30 },
      { id: 'hot-milk-tea', name: 'شاي باللبن', desc: 'شاي بالحليب الساخن', icon: '🥛', price: 35 },
      { id: 'hot-ginger-milk-tea', name: 'شاي باللبن بالجنزبيل', desc: 'شاي بالحليب والزنجبيل على الطريقة السودانية', icon: '🫚', badge: 'مميز', price: 45 },
      { id: 'hot-anise', name: 'يانسون', desc: 'مشروب يانسون دافئ', icon: '🌼', price: 28 },
      { id: 'hot-boiled-coffee', name: 'قهوة مغلية', desc: 'قهوة محوجة على الأصول', icon: '☕', price: 30 },
      { id: 'hot-turkish-coffee', name: 'قهوة تركي سنجل', desc: 'قهوة تركي بوش غني', icon: '☕', price: 35 },
      { id: 'hot-nescafe-black', name: 'نسكافيه بلاك', desc: 'نسكافيه كلاسيك بلاك', icon: '☕', price: 45 },
      { id: 'hot-nescafe-milk', name: 'نسكافيه حليب', desc: 'نسكافيه بالحليب الغني', icon: '🥛', price: 50 },
      { id: 'hot-cappuccino', name: 'كابتشينو', desc: 'كابتشينو برغوة كريمية', icon: '☕', price: 45 },
      { id: 'hot-latte', name: 'لاتيه', desc: 'كافيه لاتيه ناعم', icon: '☕', price: 45 },
      { id: 'hot-chocolate', name: 'هوت شوكلت', desc: 'شوكولاتة ساخنة غنية', icon: '🍫', price: 45 },
      { id: 'hot-espresso-single', name: 'اسبريسو', desc: 'شوت اسبريسو مركز', icon: '☕', price: 45 },
      { id: 'hot-espresso-double', name: 'اسبريسو دبل', desc: 'دبل شوت اسبريسو', icon: '⚡', price: 55 },
      { id: 'hot-sahlab-cinnamon', name: 'سحلب قرفة', desc: 'سحلب ساخن بالقرفة', icon: '🥛', price: 50 },
      { id: 'hot-sahlab-nuts', name: 'سحلب مكسرات', desc: 'سحلب غني بالمكسرات المشكلة', icon: '🥜', badge: 'شتوي فاخر', price: 55 }
    ]
  }
];
