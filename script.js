const MENU_CATEGORIES = [
  {
    id: 'meals',
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
          { label: 'نصف كيلو (1/2 كجم)', price: 430 },
          { label: 'كيلو (1 كجم)', price: 800 }
        ]
      }
    ]
  },
  {
    id: 'shawarma',
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
          { label: 'ربع كيلو (1/4 KG)', price: 220 },
          { label: 'نصف كيلو (1/2 KG)', price: 350 },
          { label: 'كيلو (1 KG)', price: 720 }
        ]
      },
      {
        id: 'shawarma-weight-meat',
        name: 'شاورما لحمة بالوزن',
        desc: 'تقدم مع العيش والطحينة والمخللات',
        icon: '⚖️',
        badge: 'عائلي',
        variants: [
          { label: 'ربع كيلو (1/4 KG)', price: 280 },
          { label: 'نصف كيلو (1/2 KG)', price: 440 },
          { label: 'كيلو (1 KG)', price: 900 }
        ]
      },
      {
        id: 'shawarma-weight-mix',
        name: 'شاورما ميكس بالوزن',
        desc: 'ميكس شاورما فراخ ولحمة بالوزن مع السلطات والعيش',
        icon: '⚖️',
        badge: 'عائلي',
        variants: [
          { label: 'ربع كيلو (1/4 KG)', price: 270 },
          { label: 'نصف كيلو (1/2 KG)', price: 400 },
          { label: 'كيلو (1 KG)', price: 820 }
        ]
      }
    ]
  },
  {
    id: 'burgers',
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
      {
        id: 'extra-cheddar',
        name: 'إضافة جبنة شيدر',
        desc: 'إضافة للساندوتشات',
        icon: '🧀',
        price: 10
      },
      {
        id: 'extra-mozzarella',
        name: 'إضافة جبنة موتزاريلا',
        desc: 'إضافة للساندوتشات',
        icon: '🧀',
        price: 10
      },
      {
        id: 'extra-fries',
        name: 'إضافة بطاطس',
        desc: 'إضافة للساندوتشات',
        icon: '🍟',
        price: 10
      },
      {
        id: 'extra-mushroom',
        name: 'إضافة مشروم',
        desc: 'إضافة للساندوتشات',
        icon: '🍄',
        price: 10
      },
      {
        id: 'extra-toasted-bread',
        name: 'إضافة عيش محمص',
        desc: 'إضافة للساندوتشات',
        icon: '🍞',
        price: 5
      }
    ]
  },
  {
    id: 'salads-soups',
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

let activeCategory = 'all';
let searchQuery = '';
let cart = [];

// DOM Elements
const categoryTabsEl = document.getElementById('categoryTabs');
const menuContainerEl = document.getElementById('menuContainer');
const searchInputEl = document.getElementById('menuSearchInput');
const cartCountEl = document.getElementById('cartCount');
const cartDrawerEl = document.getElementById('orderDrawer');
const drawerBackdropEl = document.getElementById('drawerBackdrop');
const cartItemsContainerEl = document.getElementById('cartItemsContainer');
const cartTotalValueEl = document.getElementById('cartTotalValue');

function renderCategoryTabs() {
  const totalCount = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  let html = `
    <button class="cat-tab ${activeCategory === 'all' ? 'active' : ''}" onclick="selectCategory('all')">
      <span>🌊</span>
      <span>كل المنيو (${totalCount})</span>
    </button>
  `;

  MENU_CATEGORIES.forEach((cat) => {
    html += `
      <button class="cat-tab ${activeCategory === cat.id ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
        <span>${cat.icon}</span>
        <span>${cat.title.split(' ')[0]} (${cat.items.length})</span>
      </button>
    `;
  });

  categoryTabsEl.innerHTML = html;
}

function selectCategory(catId) {
  activeCategory = catId;
  renderCategoryTabs();
  renderMenu();
}

function renderMenu() {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  let html = '';
  let matchedAny = false;

  MENU_CATEGORIES.forEach((cat) => {
    if (activeCategory !== 'all' && activeCategory !== cat.id) return;

    const filteredItems = cat.items.filter((item) => {
      if (!normalizedQuery) return true;
      const inName = item.name.toLowerCase().includes(normalizedQuery);
      const inDesc = (item.desc || '').toLowerCase().includes(normalizedQuery);
      const inCat = cat.title.toLowerCase().includes(normalizedQuery);
      return inName || inDesc || inCat;
    });

    if (filteredItems.length === 0) return;
    matchedAny = true;

    html += `
      <div class="menu-category-block" id="cat-${cat.id}">
        <div class="category-banner">
          <div class="category-banner-title">
            <span>${cat.icon}</span>
            <span>${cat.title}</span>
          </div>
          <div class="category-banner-sub">${cat.subtitle}</div>
        </div>
        <div class="menu-grid">
          ${filteredItems.map((item) => renderMenuItemCard(item, cat.icon)).join('')}
        </div>
      </div>
    `;
  });

  if (!matchedAny) {
    html = `
      <div style="text-align:center; padding: 3.5rem 1rem; background: rgba(7,34,66,0.7); border-radius:22px; border:1px solid rgba(0,229,255,0.3);">
        <div style="font-size:2.8rem; margin-bottom:0.5rem;">🐠</div>
        <h3 style="color:#fff; margin-bottom:0.4rem;">لم نجد صنفاً مطابقاً لـ "${searchQuery}"</h3>
        <p style="color:var(--pearl-muted); margin-bottom:1.2rem;">جرب البحث عن: سمك، جمبري، شاورما، بروست، مشوي، مندي، برجر، عصير...</p>
        <button class="btn btn-aqua" onclick="resetFilters()">إظهار كل المنيو</button>
      </div>
    `;
  }

  menuContainerEl.innerHTML = html;
}

function renderMenuItemCard(item, fallbackIcon) {
  const badgeHtml = item.badge
    ? `<span class="menu-item-badge">${item.badge}</span>`
    : '';
  const icon = item.icon || fallbackIcon || '🍽️';

  let bottomHtml = '';
  if (item.variants && item.variants.length > 0) {
    bottomHtml = `
      <div class="menu-variants">
        ${item.variants
          .map(
            (v) => `
          <button class="variant-chip" onclick="addToCart('${item.id}', '${escapeQuotes(item.name)} (${escapeQuotes(v.label)})', ${v.price}, event)" title="إضافة لطلبك">
            <span class="variant-label">${v.label}</span>
            <span class="variant-price">${v.price} <small>ج.م +</small></span>
          </button>
        `
          )
          .join('')}
      </div>
    `;
  } else {
    bottomHtml = `
      <div class="single-price-row">
        <div class="price-tag">${item.price} <span>ج.م</span></div>
        <button class="add-btn" onclick="addToCart('${item.id}', '${escapeQuotes(item.name)}', ${item.price}, event)">
          <span>🫧 أضف لطلبك</span>
        </button>
      </div>
    `;
  }

  return `
    <article class="menu-card">
      <div class="menu-card-top">
        <div class="dish-avatar">${icon}</div>
        <div class="menu-card-info">
          <div class="menu-card-header">
            <h3 class="menu-item-title">${item.name}</h3>
            ${badgeHtml}
          </div>
          <p class="menu-item-desc">${item.desc || ''}</p>
        </div>
      </div>
      ${bottomHtml}
    </article>
  `;
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'");
}

function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  if (searchInputEl) searchInputEl.value = '';
  renderCategoryTabs();
  renderMenu();
}

// Cart / Order Calculator Logic
function addToCart(id, label, price, evt) {
  const key = `${id}-${label}`;
  const existing = cart.find((c) => c.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ key, label, price, qty: 1 });
  }
  updateCartUI();
  if (evt && evt.clientX) {
    spawnClickBubbles(evt.clientX, evt.clientY);
  }
  showToast(`تمت إضافة "${label}" إلى طلبك`);
}

function changeQty(key, delta) {
  const idx = cart.findIndex((c) => c.key === key);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCountEl.textContent = totalCount;

  if (cart.length === 0) {
    cartItemsContainerEl.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem; color: var(--pearl-muted);">
        <div style="font-size: 3rem; margin-bottom: 0.6rem;">🐚</div>
        <p style="font-weight:800; color:#fff;">صدفة طلبك فارغة حالياً</p>
        <p style="font-size:0.86rem; margin-top:0.35rem;">اضغط على أي صنف في المنيو لحساب إجمالي طلبك قبل الاتصال على 15036</p>
      </div>
    `;
  } else {
    cartItemsContainerEl.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.label}</h4>
          <span>${item.price} ج.م × ${item.qty} = <strong style="color:var(--coral-gold);">${item.price * item.qty} ج.م</strong></span>
        </div>
        <div class="cart-qty-controls">
          <button class="qty-btn" onclick="changeQty('${escapeQuotes(item.key)}', 1)">+</button>
          <span style="font-weight:900; min-width:20px; text-align:center; color:#fff;">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${escapeQuotes(item.key)}', -1)">-</button>
        </div>
      </div>
    `
      )
      .join('');
  }

  cartTotalValueEl.textContent = `${totalPrice} ج.م`;
}

function toggleCartDrawer(open) {
  if (open) {
    cartDrawerEl.classList.add('open');
    drawerBackdropEl.classList.add('open');
  } else {
    cartDrawerEl.classList.remove('open');
    drawerBackdropEl.classList.remove('open');
  }
}

// Toast Notification
let toastTimeout;
function showToast(msg) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: rgba(4, 24, 48, 0.95);
      backdrop-filter: blur(12px);
      color: #fff;
      border: 1.5px solid #00e5ff;
      border-right: 5px solid #ffb300;
      padding: 0.9rem 1.35rem;
      border-radius: 16px;
      box-shadow: 0 12px 35px rgba(0, 229, 255, 0.35);
      font-weight: 800;
      font-size: 0.94rem;
      z-index: 250;
      transition: opacity 0.25s ease, transform 0.25s ease;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = `🫧 ${msg}`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 2400);
}

/* =========================================================
   ANIMATED UNDERWATER OCEAN CANVAS (SWIMMING FISH & BUBBLES)
   ========================================================= */
let extraBubbles = [];

function spawnClickBubbles(x, y) {
  for (let i = 0; i < 8; i++) {
    extraBubbles.push({
      x: x + (Math.random() - 0.5) * 28,
      y: y + (Math.random() - 0.5) * 20,
      r: 3 + Math.random() * 6,
      vy: 2 + Math.random() * 3.5,
      vx: (Math.random() - 0.5) * 2,
      alpha: 0.9
    });
  }
}

function initOceanCanvas() {
  const canvas = document.getElementById('oceanCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Color Palettes for Swimming Fish
  const fishPalettes = [
    { body: '#ff8f00', fin: '#ffd54f', stripe: '#ffffff' }, // Clown/Gold Reef Fish
    { body: '#00e5ff', fin: '#1de9b6', stripe: '#0288d1' }, // Neon Aqua Tang
    { body: '#ff5252', fin: '#ffab40', stripe: '#ffd740' }, // Coral Red Snapper
    { body: '#80d8ff', fin: '#e1f5fe', stripe: '#00b0ff' }, // Silver-Blue Sea Bream
    { body: '#ffd740', fin: '#ff6d00', stripe: '#fff8e1' }  // Golden Butterflyfish
  ];

  // Create Swimming Fish School
  const fishCount = Math.min(24, Math.max(14, Math.floor(width / 80)));
  const fishes = Array.from({ length: fishCount }, (_, idx) => {
    const palette = fishPalettes[idx % fishPalettes.length];
    const dir = Math.random() > 0.5 ? 1 : -1;
    const size = 14 + Math.random() * 22;
    return {
      x: Math.random() * width,
      y: 70 + Math.random() * (height - 140),
      baseY: 70 + Math.random() * (height - 140),
      size,
      speed: (0.55 + Math.random() * 1.35) * dir,
      dir,
      palette,
      phase: Math.random() * Math.PI * 2,
      wagSpeed: 0.08 + Math.random() * 0.07,
      depthAlpha: 0.35 + (size / 36) * 0.55
    };
  });

  // Rising Ocean Bubbles
  const bubbleCount = Math.min(55, Math.floor(width / 25));
  const bubbles = Array.from({ length: bubbleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 1.8 + Math.random() * 5.5,
    speed: 0.4 + Math.random() * 1.2,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.02 + Math.random() * 0.03
  }));

  // Swaying Seaweed / Kelp Blades along bottom
  const seaweedCount = Math.floor(width / 95);
  const seaweeds = Array.from({ length: seaweedCount }, (_, i) => ({
    x: (i + 0.5) * (width / seaweedCount) + (Math.random() - 0.5) * 40,
    segments: 6,
    segLen: 16 + Math.random() * 14,
    phase: Math.random() * Math.PI * 2,
    color: i % 2 === 0 ? 'rgba(29, 233, 182, 0.16)' : 'rgba(0, 229, 255, 0.13)'
  }));

  function drawFish(f, time) {
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.scale(f.dir, 1);
    ctx.globalAlpha = f.depthAlpha;

    const wag = Math.sin(time * f.wagSpeed + f.phase);
    const s = f.size;

    // Tail Fin (wagging)
    ctx.fillStyle = f.palette.fin;
    ctx.beginPath();
    ctx.moveTo(-s * 0.85, 0);
    ctx.lineTo(-s * 1.45, -s * 0.52 + wag * 4);
    ctx.lineTo(-s * 1.22, wag * 2);
    ctx.lineTo(-s * 1.45, s * 0.52 + wag * 4);
    ctx.closePath();
    ctx.fill();

    // Dorsal & Ventral Fins
    ctx.beginPath();
    ctx.moveTo(-s * 0.2, -s * 0.35);
    ctx.quadraticCurveTo(-s * 0.55, -s * 0.78, -s * 0.7, -s * 0.25);
    ctx.closePath();
    ctx.fill();

    // Main Fish Body
    const grad = ctx.createLinearGradient(-s, -s * 0.5, s, s * 0.5);
    grad.addColorStop(0, f.palette.body);
    grad.addColorStop(1, f.palette.fin);
    ctx.fillStyle = grad;

    ctx.beginPath();
    ctx.ellipse(0, 0, s, s * 0.48, 0, 0, Math.PI * 2);
    ctx.fill();

    // Decorative Stripe
    ctx.strokeStyle = f.palette.stripe;
    ctx.lineWidth = Math.max(1.5, s * 0.1);
    ctx.globalAlpha = f.depthAlpha * 0.65;
    ctx.beginPath();
    ctx.arc(-s * 0.1, 0, s * 0.38, -0.9, 0.9);
    ctx.stroke();

    // Eye
    ctx.globalAlpha = f.depthAlpha;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(s * 0.52, -s * 0.1, s * 0.13, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#020b18';
    ctx.beginPath();
    ctx.arc(s * 0.55, -s * 0.1, s * 0.065, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawSeaweed(sw, time) {
    ctx.save();
    ctx.strokeStyle = sw.color;
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.beginPath();
    let cx = sw.x;
    let cy = height;
    ctx.moveTo(cx, cy);
    for (let i = 1; i <= sw.segments; i++) {
      const sway = Math.sin(time * 0.025 + sw.phase + i * 0.45) * (i * 3.2);
      cx = sw.x + sway;
      cy = height - i * sw.segLen;
      ctx.lineTo(cx, cy);
    }
    ctx.stroke();
    ctx.restore();
  }

  let tick = 0;
  function animate() {
    tick++;
    ctx.clearRect(0, 0, width, height);

    // 1. Swaying Seaweed at bottom
    for (const sw of seaweeds) {
      drawSeaweed(sw, tick);
    }

    // 2. Swimming Fish
    for (const f of fishes) {
      f.x += f.speed;
      f.y = f.baseY + Math.sin(tick * 0.025 + f.phase) * 14;

      if (f.dir === 1 && f.x > width + f.size * 2) {
        f.x = -f.size * 2;
        f.baseY = 60 + Math.random() * (height - 120);
      } else if (f.dir === -1 && f.x < -f.size * 2) {
        f.x = width + f.size * 2;
        f.baseY = 60 + Math.random() * (height - 120);
      }

      drawFish(f, tick);
    }

    // 3. Ambient Rising Bubbles
    for (const b of bubbles) {
      b.y -= b.speed;
      b.wobble += b.wobbleSpeed;
      const bx = b.x + Math.sin(b.wobble) * 8;

      if (b.y < -15) {
        b.y = height + 15;
        b.x = Math.random() * width;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(bx, b.y, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(180, 245, 255, 0.42)';
      ctx.fillStyle = 'rgba(0, 229, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.fill();
      ctx.stroke();

      // Bubble shine dot
      ctx.beginPath();
      ctx.arc(bx - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.fill();
      ctx.restore();
    }

    // 4. Interactive Click Bubbles
    for (let i = extraBubbles.length - 1; i >= 0; i--) {
      const eb = extraBubbles[i];
      eb.x += eb.vx;
      eb.y -= eb.vy;
      eb.alpha -= 0.022;
      if (eb.alpha <= 0) {
        extraBubbles.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = eb.alpha;
      ctx.beginPath();
      ctx.arc(eb.x, eb.y, eb.r, 0, Math.PI * 2);
      ctx.strokeStyle = '#00e5ff';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initOceanCanvas();
  renderCategoryTabs();
  renderMenu();
  updateCartUI();

  if (searchInputEl) {
    searchInputEl.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMenu();
    });
  }
});
