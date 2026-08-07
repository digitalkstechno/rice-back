// Supported Languages Configuration - STRICTLY ONLY THE 6 LANGUAGES FROM UI
const SUPPORTED_LANGUAGES = [
  { id: '1', code: 'en', name: 'English', nativeName: 'English' },
  { id: '2', code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { id: '3', code: 'fr', name: 'French', nativeName: 'Français' },
  { id: '4', code: 'es', name: 'Spanish', nativeName: 'Español' },
  { id: '5', code: 'zh', name: 'Chinese', nativeName: '中文' },
  { id: '6', code: 'ru', name: 'Russian', nativeName: 'Русский' }
];

// Helper to normalize language code/name input strictly for the 6 languages
const normalizeLang = (langInput) => {
  if (!langInput) return 'en';
  const str = String(langInput).trim().toLowerCase();
  
  if (str === 'ar' || str.includes('arab') || str.includes('العربية')) return 'ar';
  if (str === 'fr' || str.includes('fren') || str.includes('french') || str.includes('français')) return 'fr';
  if (str === 'es' || str.includes('span') || str.includes('español')) return 'es';
  if (str === 'zh' || str.includes('chin') || str.includes('中文')) return 'zh';
  if (str === 'ru' || str.includes('russ') || str.includes('русский') || str.includes('рус')) return 'ru';
  
  return 'en';
};

// System & Bot Flow Messages (Exclusively for en, ar, fr, es, zh, ru)
const MESSAGES = {
  welcome_intro: {
    en: "🌾 Welcome to DCS!\n\nI am Rice Bot — your sourcing agent for Indian rice requirements.\n\nBefore I share our latest prices, I need a few quick details (takes 20 seconds).",
    ar: "🌾 مرحباً بك في DCS!\n\nأنا Rice Bot — وكيل المشتريات الخاص بك لمتطلبات الأرز الهندي.\n\nقبل أن أشارك أحدث أسعارنا، أحتاج إلى بعض التفاصيل السريعة (تستغرق 20 ثانية).",
    fr: "🌾 Bienvenue chez DCS !\n\nJe suis Rice Bot — votre agent d'approvisionnement pour les exigences de riz indien.\n\nAvant de partager nos derniers prix, j'ai besoin de quelques détails rapides (cela prend 20 secondes).",
    es: "🌾 ¡Bienvenido a DCS!\n\nSoy Rice Bot, su agente de compras para sus requerimientos de arroz indio.\n\nAntes de compartir nuestros últimos precios, necesito algunos detalles rápidos (toma 20 segundos).",
    zh: "🌾 欢迎来到 DCS！\n\n我是 Rice Bot — 您的印度大米采购代理。\n\n在我为您提供最新价格之前，我需要收集一些简要信息（只需 20 秒）。",
    ru: "🌾 Добро пожаловать в DCS!\n\nЯ Rice Bot — ваш агент по закупкам индийского риса.\n\nПрежде чем я поделилюсь нашими последними ценами, мне нужны некоторые детали (это займет 20 секунд)."
  },

  welcome_with_name: {
    en: "🌾 Welcome to DCS, {name}\n\nI am Rice Bot — your sourcing agent for Indian rice requirements.\n\nPlease choose from the following options:",
    ar: "🌾 مرحباً بك في DCS، {name}\n\nأنا Rice Bot — وكيل المشتريات الخاص بك لمتطلبات الأرز الهندي.\n\nيرجى الاختيار من بين الخيارات التالية:",
    fr: "🌾 Bienvenue chez DCS, {name}\n\nJe suis Rice Bot — votre agent d'approvisionnement pour les exigences de riz indien.\n\nVeuillez choisir parmi les options suivantes :",
    es: "🌾 Bienvenido a DCS, {name}\n\nSoy Rice Bot — su agente de compras para sus requerimientos de arroz indio.\n\nPor favor elija de las siguientes opciones:",
    zh: "🌾 欢迎来到 DCS，{name}\n\n我是 Rice Bot — 您的印度大米采购代理。\n\n请选择以下选项之一：",
    ru: "🌾 Добро пожаловать в DCS، {name}\n\nЯ Rice Bot — ваш агент по закупкам индийского риса.\n\nПожалуйста, выберите один из следующих вариантов:"
  },

  select_button: {
    en: "Select",
    ar: "اختر",
    fr: "Sélectionner",
    es: "Seleccionar",
    zh: "选择",
    ru: "Выбрать"
  },

  main_options: {
    en: [
      { id: "1", name: "Rice Prices" },
      { id: "2", name: "Edible Oils" }
    ],
    ar: [
      { id: "1", name: "أسعار الأرز" },
      { id: "2", name: "الزيوت النباتية" }
    ],
    fr: [
      { id: "1", name: "Prix du riz" },
      { id: "2", name: "Huiles alimentaires" }
    ],
    es: [
      { id: "1", name: "Precios del arroz" },
      { id: "2", name: "Aceites comestibles" }
    ],
    zh: [
      { id: "1", name: "大米价格" },
      { id: "2", name: "食用油" }
    ],
    ru: [
      { id: "1", name: "Цены на рис" },
      { id: "2", name: "Пищевые масла" }
    ]
  },

  rice_prices_options: {
    en: [
      { id: "1", name: "Rice CIF Price List" },
      { id: "2", name: "Rice Std 50kg FOB List" }
    ],
    ar: [
      { id: "1", name: "قائمة أسعار CIF للأرز" },
      { id: "2", name: "قائمة أسعار FOB كيس 50 كجم" }
    ],
    fr: [
      { id: "1", name: "Liste des prix CIF du riz" },
      { id: "2", name: "Liste des prix FOB sac 50kg" }
    ],
    es: [
      { id: "1", name: "Lista de precios CIF de arroz" },
      { id: "2", name: "Lista de precios FOB bolsa 50kg" }
    ],
    zh: [
      { id: "1", name: "大米 CIF 价格表" },
      { id: "2", name: "大米 50kg 标准包 FOB 价格表" }
    ],
    ru: [
      { id: "1", name: "Прайс-лист CIF на рис" },
      { id: "2", name: "Прайс-лист FOB мешок 50кг" }
    ]
  },

  edible_oils_options: {
    en: [
      { id: "1", name: "Mustard Oil Prices" }
    ],
    ar: [
      { id: "1", name: "أسعار زيت الخردل" }
    ],
    fr: [
      { id: "1", name: "Prix de l'huile de moutarde" }
    ],
    es: [
      { id: "1", name: "Precios del aceite de mostaza" }
    ],
    zh: [
      { id: "1", name: "芥末油价格" }
    ],
    ru: [
      { id: "1", name: "Цены на горчичное масло" }
    ]
  }
};

// Dictionary for UI Labels, Groups, Categories, Forms, Packaging, Countries, Ports, Units & Varieties
const DICTIONARY = {
  "Angola": {"en":"Angola","ar":"أنغولا","fr":"Angola","es":"Angola","zh":"安哥拉","ru":"Ангола"},
  "Australia": {"en":"Australia","ar":"أستراليا","fr":"Australie","es":"Australia","zh":"澳大利亚","ru":"Австралия"},
  "Bahamas": {"en":"Bahamas","ar":"جزر البهاما","fr":"Bahamas","es":"Bahamas","zh":"巴哈马","ru":"Багамы"},
  "Bahrain": {"en":"Bahrain","ar":"البحرين","fr":"Bahreïn","es":"Baréin","zh":"巴林","ru":"Бахрейн"},
  "Bangladesh": {"en":"Bangladesh","ar":"بنغلاديش","fr":"Bangladesh","es":"Bangladés","zh":"孟加拉国","ru":"Бангладеш"},
  "Barbados": {"en":"Barbados","ar":"باربادوس","fr":"Barbade","es":"Barbados","zh":"巴巴多斯","ru":"Барбадоس"},
  "Belgium": {"en":"Belgium","ar":"بلجيكا","fr":"Belgique","es":"Bélgica","zh":"比利时","ru":"Бельгия"},
  "Brazil": {"en":"Brazil","ar":"البرازيل","fr":"Brésil","es":"Brasil","zh":"巴西","ru":"Бразилия"},
  "Brunei": {"en":"Brunei","ar":"بروناي","fr":"Brunéi","es":"Brunéi","zh":"文莱","ru":"Бруней"},
  "Burkina Faso via Tema": {"en":"Burkina Faso via Tema","ar":"بوركينا فاسو عبر تيما","fr":"Burkina Faso via Tema","es":"Burkina Faso vía Tema","zh":"布基纳法索（经特马）","ru":"Буркина-Фасо через Тема"},
  "Cambodia": {"en":"Cambodia","ar":"كمبوديا","fr":"Cambodge","es":"Camboya","zh":"柬埔寨","ru":"Камбоджа"},
  "Cameroon": {"en":"Cameroon","ar":"الكاميرون","fr":"Cameroun","es":"Camerún","zh":"喀麦隆","ru":"Камерун"},
  "Canada": {"en":"Canada","ar":"كندا","fr":"Canada","es":"Canadá","zh":"加拿大","ru":"Канада"},
  "Chad via Douala Port": {"en":"Chad via Douala Port","ar":"تشاد عبر ميناء دوالا","fr":"Tchad via Port de Douala","es":"Chad vía Puerto de Douala","zh":"乍得（经杜阿拉港）","ru":"Чад через Порт Дуала"},
  "Chile": {"en":"Chile","ar":"تشيلي","fr":"Chili","es":"Chile","zh":"智利","ru":"Чили"},
  "China": {"en":"China","ar":"الصين","fr":"Chine","es":"China","zh":"中国","ru":"Китай"},
  "Colombia": {"en":"Colombia","ar":"كولومبيا","fr":"Colombie","es":"Colombia","zh":"哥伦比亚","ru":"Колумбия"},
  "Cyprus": {"en":"Cyprus","ar":"قبرص","fr":"Chypre","es":"Chipre","zh":"塞浦路斯","ru":"Кипр"},
  "Denmark": {"en":"Denmark","ar":"الدنمارك","fr":"Danemark","es":"Dinamarca","zh":"丹麦","ru":"Дания"},
  "Djibouti Port": {"en":"Djibouti Port","ar":"ميناء جيبوتي","fr":"Port de Djibouti","es":"Puerto de Yibuti","zh":"吉布提港","ru":"Порт Джибути"},
  "Dom. Rep.": {"en":"Dominican Rep.","ar":"جمهورية الدومينيكان","fr":"Rép. Dominicaine","es":"Rep. Dominicana","zh":"多米尼加","ru":"Доминиканская Респ."},
  "Ecuador": {"en":"Ecuador","ar":"الإكوادور","fr":"Équateur","es":"Ecuador","zh":"厄瓜多尔","ru":"Эквадор"},
  "Egypt": {"en":"Egypt","ar":"مصر","fr":"Égypte","es":"Egipto","zh":"埃及","ru":"Египет"},
  "Ethiopia via Djibouti": {"en":"Ethiopia via Djibouti","ar":"إثيوبيا عبر جيبوتي","fr":"Éthiopie via Djibouti","es":"Etiopía vía Yibuti","zh":"埃塞俄比亚（经吉布提）","ru":"Эфиопия через Джибути"},
  "France": {"en":"France","ar":"فرنسا","fr":"France","es":"Francia","zh":"法国","ru":"Франция"},
  "Georgia": {"en":"Georgia","ar":"جورجيا","fr":"Géorgie","es":"Georgia","zh":"格鲁吉亚","ru":"Грузия"},
  "Germany": {"en":"Germany","ar":"ألمانيا","fr":"Allemagne","es":"Alemania","zh":"德国","ru":"Германия"},
  "Ghana": {"en":"Ghana","ar":"غانا","fr":"Ghana","es":"Ghana","zh":"加纳","ru":"Гана"},
  "Greece": {"en":"Greece","ar":"اليونان","fr":"Grèce","es":"Grecia","zh":"希腊","ru":"Греция"},
  "Guyana": {"en":"Guyana","ar":"غيانا","fr":"Guyana","es":"Guyana","zh":"圭亚那","ru":"Гайана"},
  "Haiti": {"en":"Haiti","ar":"هايتي","fr":"Haïti","es":"Haití","zh":"海地","ru":"Гаити"},
  "Iceland": {"en":"Iceland","ar":"آيسلندا","fr":"Islande","es":"Islandia","zh":"冰岛","ru":"Исландия"},
  "Indonesia": {"en":"Indonesia","ar":"إندونيسيا","fr":"Indonésie","es":"Indonesia","zh":"印度尼西亚","ru":"Индонезия"},
  "Iran": {"en":"Iran","ar":"إيران","fr":"Iran","es":"Irán","zh":"伊朗","ru":"Иран"},
  "Iraq": {"en":"Iraq","ar":"العراق","fr":"Irak","es":"Irak","zh":"伊拉克","ru":"Ирак"},
  "Ireland": {"en":"Ireland","ar":"أيرلندا","fr":"Irlande","es":"Irlanda","zh":"爱尔兰","ru":"Ирландия"},
  "Israel": {"en":"Israel","ar":"إسرائيل","fr":"Israël","es":"Israel","zh":"以色列","ru":"Израиль"},
  "Italy": {"en":"Italy","ar":"إيطاليا","fr":"Italie","es":"Italia","zh":"意大利","ru":"Италия"},
  "Ivory Coast": {"en":"Ivory Coast","ar":"ساحل العاج","fr":"Côte d'Ivoire","es":"Costa de Marfil","zh":"科特迪瓦","ru":"Кот-д'Ивуар"},
  "Jamaica": {"en":"Jamaica","ar":"جامايكا","fr":"Jamaïque","es":"Jamaica","zh":"牙买加","ru":"Ямайка"},
  "Japan": {"en":"Japan","ar":"اليابان","fr":"Japon","es":"Japón","zh":"日本","ru":"Япония"},
  "Jordan": {"en":"Jordan","ar":"الأردن","fr":"Jordanie","es":"Jordania","zh":"约旦","ru":"Иордания"},
  "Kazakhstan via Iran": {"en":"Kazakhstan via Iran","ar":"كازاخستان عبر إيران","fr":"Kazakhstan via Iran","es":"Kazajistán vía Irán","zh":"哈萨克斯坦（经伊朗）","ru":"Казахстан через Иран"},
  "Kenya": {"en":"Kenya","ar":"كينيا","fr":"Kenya","es":"Kenia","zh":"肯尼亚","ru":"Кения"},
  "Kuwait": {"en":"Kuwait","ar":"الكويت","fr":"Koweït","es":"Kuwait","zh":"科威特","ru":"Кувейت"},
  "Lebanon": {"en":"Lebanon","ar":"لبنان","fr":"Liban","es":"Líbano","zh":"黎巴嫩","ru":"Лиوان"},
  "Libya": {"en":"Libya","ar":"ليبيا","fr":"Libye","es":"Libia","zh":"利比亚","ru":"Ливия"},
  "Madagascar": {"en":"Madagascar","ar":"مدغشقر","fr":"Madagascar","es":"Madagascar","zh":"马达加斯加","ru":"Мадагаскар"},
  "Malaysia": {"en":"Malaysia","ar":"ماليزيا","fr":"Malaisie","es":"Malasia","zh":"马来西亚","ru":"Малайзия"},
  "Maldives": {"en":"Maldives","ar":"جزر المالديف","fr":"Maldives","es":"Maldivas","zh":"马尔代夫","ru":"Мальдивы"},
  "Mali via Dakar Port": {"en":"Mali via Dakar Port","ar":"مالي عبر ميناء داكار","fr":"Mali via Port de Dakar","es":"Malí vía Puerto de Dakar","zh":"马里（经达喀尔港）","ru":"Мали через Порт Дакар"},
  "Mauritius": {"en":"Mauritius","ar":"موريشيوس","fr":"Maurice","es":"Mauricio","zh":"毛里求斯","ru":"Маврикий"},
  "Mexico": {"en":"Mexico","ar":"المكسيك","fr":"Mexique","es":"México","zh":"墨西哥","ru":"Мексика"},
  "Mongolia via China": {"en":"Mongolia via China","ar":"منغوليا عبر الصين","fr":"Mongolie via Chine","es":"Mongolia vía China","zh":"蒙古（经中国）","ru":"Монголия через Китай"},
  "Morocco": {"en":"Morocco","ar":"المغرب","fr":"Maroc","es":"Marruecos","zh":"摩洛哥","ru":"Марокко"},
  "Mozambique": {"en":"Mozambique","ar":"موزمبيق","fr":"Mozambique","es":"Mozambique","zh":"莫桑比克","ru":"Мозамбик"},
  "Nepal": {"en":"Nepal","ar":"نيبال","fr":"Népal","es":"Nepal","zh":"尼泊尔","ru":"Непал"},
  "Netherlands": {"en":"Netherlands","ar":"هولندا","fr":"Pays-Bas","es":"Países Bajos","zh":"荷兰","ru":"Нидерланды"},
  "New Zealand": {"en":"New Zealand","ar":"نيوزيلندا","fr":"Nouvelle-Zélande","es":"Nueva Zelanda","zh":"新西兰","ru":"Новая Зеландия"},
  "Niger via Lagos Port": {"en":"Niger via Lagos Port","ar":"النيجر عبر ميناء لاغوس","fr":"Níger via Port de Lagos","es":"Níger vía Puerto de Lagos","zh":"尼日尔（经拉各斯港）","ru":"Нигер через Порт Лагос"},
  "Nigeria": {"en":"Nigeria","ar":"نيجيريا","fr":"Nigéria","es":"Nigeria","zh":"尼日利亚","ru":"Нигерия"},
  "Norway": {"en":"Norway","ar":"النرويج","fr":"Norvège","es":"Noruega","zh":"挪威","ru":"Норвегия"},
  "Oman": {"en":"Oman","ar":"عمان","fr":"Oman","es":"Omán","zh":"阿曼","ru":"Оман"},
  "PNG": {"en":"PNG","ar":"بابوا غينيا الجديدة","fr":"Papouasie-Nouvelle-Guinée","es":"Papúa Nueva Guinea","zh":"巴布亚新几内亚","ru":"Папуа — Новая Гвинея"},
  "Peru": {"en":"Peru","ar":"بيرو","fr":"Pérou","es":"Perú","zh":"秘鲁","ru":"Перу"},
  "Philippines": {"en":"Philippines","ar":"الفلبين","fr":"Philippines","es":"Filipinas","zh":"菲律宾","ru":"Филиппины"},
  "Poland": {"en":"Poland","ar":"بولندا","fr":"Pologne","es":"Polonia","zh":"波兰","ru":"Польша"},
  "Portugal": {"en":"Portugal","ar":"البرتغال","fr":"Portugal","es":"Portugal","zh":"葡萄牙","ru":"Португалия"},
  "Qatar": {"en":"Qatar","ar":"قطر","fr":"Qatar","es":"Catar","zh":"卡塔尔","ru":"Катар"},
  "Russia": {"en":"Russia","ar":"روسيا","fr":"Russie","es":"Rusia","zh":"俄罗斯","ru":"Россия"},
  "Rwanda via Mombasa": {"en":"Rwanda via Mombasa","ar":"رواندا عبر مومباسا","fr":"Rwanda via Mombasa","es":"Ruanda vía Mombasa","zh":"卢旺达（经蒙巴萨）","ru":"Руанда через Момбасу"},
  "Saudi Arabia": {"en":"Saudi Arabia","ar":"المملكة العربية السعودية","fr":"Arabie Saoudite","es":"Arabia Saudita","zh":"沙特阿拉伯","ru":"Саудовская Аравия"},
  "Senegal": {"en":"Senegal","ar":"السنغال","fr":"Sénégal","es":"Senegal","zh":"塞内加尔","ru":"Сенегал"},
  "Seychelles": {"en":"Seychelles","ar":"سيشل","fr":"Seychelles","es":"Seychelles","zh":"塞舌尔","ru":"Сейшелы"},
  "Singapore": {"en":"Singapore","ar":"سنغافورة","fr":"Singapour","es":"Singapur","zh":"新加坡","ru":"Сингапур"},
  "Somalia": {"en":"Somalia","ar":"الصومال","fr":"Somalie","es":"Somalia","zh":"索马里","ru":"Сомали"},
  "South Africa": {"en":"South Africa","ar":"جنوب أفريقيا","fr":"Afrique du Sud","es":"Sudáfrica","zh":"南非","ru":"Южная Африка"},
  "South Korea": {"en":"South Korea","ar":"كوريا الجنوبية","fr":"Corée du Sud","es":"Corea del Sur","zh":"韩国","ru":"Южная Корея"},
  "Spain": {"en":"Spain","ar":"إسبانيا","fr":"Espagne","es":"España","zh":"西班牙","ru":"Испания"},
  "Sri Lanka": {"en":"Sri Lanka","ar":"سريلانكا","fr":"Sri Lanka","es":"Sri Lanka","zh":"斯里兰卡","ru":"Шри-Ланка"},
  "Sudan": {"en":"Sudan","ar":"السودان","fr":"Soudan","es":"Sudán","zh":"苏丹","ru":"Судан"},
  "Suriname": {"en":"Suriname","ar":"سورينام","fr":"Suriname","es":"Surinam","zh":"苏里南","ru":"Суринам"},
  "Sweden": {"en":"Sweden","ar":"السويد","fr":"Suède","es":"Suecia","zh":"瑞典","ru":"Швеция"},
  "Switzerland via Rott.": {"en":"Switzerland via Rotterdam","ar":"سويسرا عبر روتردام","fr":"Suisse via Rotterdam","es":"Suiza vía Róterdam","zh":"瑞士（经鹿特丹）","ru":"Швейцария через Роттердам"},
  "Syria": {"en":"Syria","ar":"سوريا","fr":"Syrie","es":"Siria","zh":"叙利亚","ru":"Сирия"},
  "T&T": {"en":"Trinidad & Tobago","ar":"ترينيداد وتوباغو","fr":"Trinité-et-Tobago","es":"Trinidad y Tobago","zh":"特立尼达和多巴哥","ru":"Триниداد и Тобаго"},
  "Tajikistan via Iran": {"en":"Tajikistan via Iran","ar":"طاجيكستان عبر إيران","fr":"Tadjikistan via Iran","es":"Tayikistán vía Irán","zh":"哈萨克斯坦（经伊朗）","ru":"Таджикистан через Иран"},
  "Tanzania": {"en":"Tanzania","ar":"تنزانيا","fr":"Tanzanie","es":"Tanzania","zh":"坦桑尼亚","ru":"Танзания"},
  "Thailand": {"en":"Thailand","ar":"تايلاند","fr":"Thaïlande","es":"Tailandia","zh":"泰国","ru":"Таиланд"},
  "Tunisia": {"en":"Tunisia","ar":"تونس","fr":"Tunisie","es":"Túnez","zh":"突尼斯","ru":"Тунис"},
  "Turkey": {"en":"Turkey","ar":"تركيا","fr":"Turquie","es":"Turquía","zh":"土耳其","ru":"Турция"},
  "UAE": {"en":"UAE","ar":"الإمارات","fr":"Émirats Arabes Unis","es":"EAU","zh":"阿联酋","ru":"ОАЭ"},
  "UK": {"en":"UK","ar":"المملكة المتحدة","fr":"Royaume-Uni","es":"Reino Unido","zh":"英国","ru":"Великобритания"},
  "USA": {"en":"USA","ar":"الولايات المتحدة","fr":"États-Unis","es":"EE. UU.","zh":"美国","ru":"США"},
  "Uganda via Mombasa": {"en":"Uganda via Mombasa","ar":"أوغندا عبر مومباسا","fr":"Ouganda via Mombasa","es":"Uganda vía Mombasa","zh":"乌干达（经蒙巴萨）","ru":"Уганда через Момбасу"},
  "Vietnam": {"en":"Vietnam","ar":"فيتنام","fr":"Viêt Nam","es":"Vietnam","zh":"越南","ru":"Вьетнам"},
  "Yemen": {"en":"Yemen","ar":"اليمن","fr":"Yémen","es":"Yemen","zh":"也门","ru":"Йемен"},
  "Zimbabwe via Durban": {"en":"Zimbabwe via Durban","ar":"زيمبابوي عبر دوربان","fr":"Zimbabwe via Durban","es":"Zimbabue vía Durban","zh":"津巴布韦（经德班）","ru":"Зимбабве через Дурбан"},
  "Abidjan": {"en":"Abidjan Port","ar":"ميناء أبيدجان","fr":"Port d'Abidjan","es":"Puerto de Abiyán","zh":"阿比让港","ru":"Порт Абиджан"},
  "Auckland": {"en":"Auckland Port","ar":"ميناء أوكلاند","fr":"Port d'Auckland","es":"Puerto de Auckland","zh":"奥克兰港","ru":"Порт Окленд"},
  "Bridgetown": {"en":"Bridgetown Port","ar":"ميناء بريدجتاون","fr":"Port de Bridgetown","es":"Puerto de Bridgetown","zh":"布里奇敦港","ru":"Порт Бриджтаун"},
  "Brisbane": {"en":"Brisbane Port","ar":"ميناء بريسبان","fr":"Port de Brisbane","es":"Puerto de Brisbane","zh":"布里斯班港","ru":"Порт Брисбен"},
  "Busan": {"en":"Busan Port","ar":"ميناء بوسان","fr":"Port de Busan","es":"Puerto de Busan","zh":"釜山港","ru":"Порт Пусан"},
  "Callao": {"en":"Callao Port","ar":"ميناء كالاو","fr":"Port de Callao","es":"Puerto del Callao","zh":"卡劳港","ru":"Порт Кальяо"},
  "Cape Town": {"en":"Cape Town Port","ar":"ميناء كيب تاون","fr":"Port du Cap","es":"Puerto de Ciudad del Cabo","zh":"开普敦港","ru":"Порт Кейптаун"},
  "Cartagena": {"en":"Cartagena Port","ar":"ميناء قرطاجنة","fr":"Port de Carthagène","es":"Puerto de Cartagena","zh":"卡塔赫纳港","ru":"Порт Картахена"},
  "Caucedo": {"en":"Caucedo Port","ar":"ميناء كاوكيدو","fr":"Port de Caucedo","es":"Puerto de Caucedo","zh":"考塞多港","ru":"Порт Кауседо"},
  "Chittagong": {"en":"Chittagong Port","ar":"ميناء شيتاغونغ","fr":"Port de Chittagong","es":"Puerto de Chittagong","zh":"吉大港","ru":"Порт Читтагонг"},
  "Colombo": {"en":"Colombo Port","ar":"ميناء كولومبو","fr":"Port de Colombo","es":"Puerto de Colombo","zh":"科伦坡港","ru":"Порт Коломбо"},
  "Copenhagen": {"en":"Copenhagen Port","ar":"ميناء كوبنهاغن","fr":"Port de Copenhague","es":"Puerto de Copenhague","zh":"哥本哈根港","ru":"Порт Копенгаген"},
  "Douala": {"en":"Douala Port","ar":"ميناء دوالا","fr":"Port de Douala","es":"Puerto de Douala","zh":"杜阿拉港","ru":"Порт Дуала"},
  "Dublin": {"en":"Dublin Port","ar":"ميناء دبلن","fr":"Port de Dublin","es":"Puerto de Dublín","zh":"都柏林港","ru":"Порт Дублин"},
  "Durban": {"en":"Durban Port","ar":"ميناء دوربان","fr":"Port de Durban","es":"Puerto de Durban","zh":"德班港","ru":"Порт Дурбан"},
  "Fremantle": {"en":"Fremantle Port","ar":"ميناء فريمانتل","fr":"Port de Fremantle","es":"Puerto de Fremantle","zh":"弗里曼特尔港","ru":"Порт Фримантл"},
  "Gdansk": {"en":"Gdansk Port","ar":"ميناء غدانسك","fr":"Port de Gdańsk","es":"Puerto de Gdańsk","zh":"格丹斯克港","ru":"Порт Гданьск"},
  "Georgetown": {"en":"Georgetown Port","ar":"ميناء جورج تاون","fr":"Port de Georgetown","es":"Puerto de Georgetown","zh":"乔治敦港","ru":"Порт Джорджтаун"},
  "Gothenburg": {"en":"Gothenburg Port","ar":"ميناء غوتنبرغ","fr":"Port de Göteborg","es":"Puerto de Gotemburgo","zh":"哥德堡港","ru":"Порт Гётеборг"},
  "Guayaquil": {"en":"Guayaquil Port","ar":"ميناء غواياكيل","fr":"Port de Guayaquil","es":"Puerto de Guayaquil","zh":"瓜亚基尔港","ru":"Порт Гуаякиль"},
  "Haiphong": {"en":"Haiphong Port","ar":"ميناء هايفونغ","fr":"Port de Haïphong","es":"Puerto de Haiphong","zh":"海防港","ru":"Порт Хайфон"},
  "Istanbul": {"en":"Istanbul Port","ar":"ميناء اسطنبول","fr":"Port d'Istanbul","es":"Puerto de Estambul","zh":"伊斯坦布尔港","ru":"Порт Стамбул"},
  "Kingston": {"en":"Kingston Port","ar":"ميناء كينغستون","fr":"Port de Kingston","es":"Puerto de Kingston","zh":"金斯敦港","ru":"Порт Кингстон"},
  "Lae": {"en":"Lae Port","ar":"ميناء لاي","fr":"Port de Lae","es":"Puerto de Lae","zh":"莱城港","ru":"Порт Лаэ"},
  "Laem Chabang": {"en":"Laem Chabang Port","ar":"ميناء لايم تشابانج","fr":"Port de Laem Chabang","es":"Puerto de Laem Chabang","zh":"林查班港","ru":"Порт Лем Чабанг"},
  "Lagos Apapa": {"en":"Lagos Apapa Port","ar":"ميناء لاغوس أبابا","fr":"Port de Lagos Apapa","es":"Puerto de Lagos Apapa","zh":"拉各斯阿帕帕港","ru":"Порт Лагос Апапа"},
  "Limassol Port": {"en":"Limassol Port","ar":"ميناء ليماسول","fr":"Port de Limassol","es":"Puerto de Limassol","zh":"利马索尔港","ru":"Порт Лимасол"},
  "Lisbon": {"en":"Lisbon Port","ar":"ميناء لشبونة","fr":"Port de Lisbonne","es":"Puerto de Lisboa","zh":"里斯本港","ru":"Порт Лиссабоن"},
  "Luanda": {"en":"Luanda Port","ar":"ميناء لواندا","fr":"Port de Luanda","es":"Puerto de Luanda","zh":"罗安达港","ru":"Порт Луанда"},
  "Lázaro Cárd.": {"en":"Lázaro Cárdenas Port","ar":"ميناء لازارو كارديناس","fr":"Port de Lázaro Cárdenas","es":"Puerto de Lázaro Cárdenas","zh":"拉萨罗卡德纳斯港","ru":"Порт Ласаро-Карденас"},
  "Male Port": {"en":"Male Port","ar":"ميناء ماليه","fr":"Port de Malé","es":"Puerto de Malé","zh":"马累港","ru":"Порт Мале"},
  "Manila": {"en":"Manila Port","ar":"ميناء مانيلا","fr":"Port de Manille","es":"Puerto de Manila","zh":"马尼拉港","ru":"Порт Манила"},
  "Manzanillo": {"en":"Manzanillo Port","ar":"ميناء مانزانيلو","fr":"Port de Manzanillo","es":"Puerto de Manzanillo","zh":"曼萨尼约港","ru":"Порт Мансанильо"},
  "Maputo": {"en":"Maputo Port","ar":"ميناء مابوتو","fr":"Port de Maputo","es":"Puerto de Maputo","zh":"马普托港","ru":"Порт Мапуту"},
  "Melbourne": {"en":"Melbourne Port","ar":"ميناء ملبورن","fr":"Port de Melbourne","es":"Puerto de Melbourne","zh":"墨尔本港","ru":"Порт Мельбурن"},
  "Mersin": {"en":"Mersin Port","ar":"ميناء مرسين","fr":"Port de Mersin","es":"Puerto de Mersin","zh":"梅尔辛港","ru":"Порт Мерсин"},
  "Mogadishu": {"en":"Mogadishu Port","ar":"ميناء مقديشو","fr":"Port de Mogadiscio","es":"Puerto de Mogadiscio","zh":"摩加迪沙港","ru":"Порт Могадишо"},
  "Montreal": {"en":"Montreal Port","ar":"ميناء مونتريال","fr":"Port de Montréal","es":"Puerto de Montreal","zh":"蒙特利尔港","ru":"Порт Монреаль"},
  "Muara Port": {"en":"Muara Port","ar":"ميناء موارا","fr":"Port de Muara","es":"Puerto de Muara","zh":"摩拉港","ru":"Порт Муара"},
  "Nassau": {"en":"Nassau Port","ar":"ميناء ناساو","fr":"Port de Nassau","es":"Puerto de Nasáu","zh":"拿骚港","ru":"Порт Нассау"},
  "Oslo": {"en":"Oslo Port","ar":"ميناء أوسلو","fr":"Port d'Oslo","es":"Puerto de Oslo","zh":"奥斯陆港","ru":"Порт Осло"},
  "Paramaribo": {"en":"Paramaribo Port","ar":"ميناء باراماريبو","fr":"Port de Paramaribo","es":"Puerto de Paramaribo","zh":"帕拉马里博港","ru":"Порт Парамариبو"},
  "Piraeus": {"en":"Piraeus Port","ar":"ميناء بيرايوس","fr":"Port du Pirée","es":"Puerto del Pireo","zh":"比雷埃夫斯港","ru":"Порт Пирей"},
  "Port Klang": {"en":"Port Klang","ar":"ميناء كلانج","fr":"Port de Klang","es":"Puerto Klang","zh":"巴生港","ru":"Порт Кланг"},
  "Port Moresby": {"en":"Port Moresby","ar":"ميناء بورت مورسبي","fr":"Port Moresby","es":"Puerto Moresby","zh":"莫尔兹比港","ru":"Порт-Морсبي"},
  "Port of SG": {"en":"Singapore Port","ar":"ميناء سنغافورة","fr":"Port de Singapour","es":"Puerto de Singapur","zh":"新加坡港","ru":"Порт Сингапура"},
  "Port of Spain": {"en":"Port of Spain","ar":"ميناء بورت أوف سبين","fr":"Port-d'Espagne","es":"Puerto España","zh":"西班牙港","ru":"Порт-оф-Спейн"},
  "Port-au-Prince": {"en":"Port-au-Prince","ar":"ميناء بورت أو برانس","fr":"Port-au-Prince","es":"Puerto Príncipe","zh":"太子港","ru":"Порт-о-Пренс"},
  "Poti Port": {"en":"Poti Port","ar":"ميناء بوتي","fr":"Port de Poti","es":"Puerto de Poti","zh":"波季港","ru":"Порт Поти"},
  "Reykjavik": {"en":"Reykjavik Port","ar":"ميناء ريكيافيك","fr":"Port de Reykjavík","es":"Puerto de Reikiavik","zh":"雷克雅未克港","ru":"Порт Рейкьявик"},
  "Santos": {"en":"Santos Port","ar":"ميناء سانتوس","fr":"Port de Santos","es":"Puerto de Santos","zh":"桑托斯港","ru":"Порт Сантос"},
  "Savannah": {"en":"Savannah Port","ar":"ميناء سافانا","fr":"Port de Savannah","es":"Puerto de Savannah","zh":"萨凡纳港","ru":"Порт Саванна"},
  "Shanghai Port": {"en":"Shanghai Port","ar":"ميناء شانغهاي","fr":"Port de Shanghai","es":"Puerto de Shanghai","zh":"上海港","ru":"Порт Шанхай"},
  "Shenzhen Port": {"en":"Shenzhen Port","ar":"ميناء شينزين","fr":"Port de Shenzhen","es":"Puerto de Shenzhen","zh":"深圳港","ru":"Порт Шэньчжэнь"},
  "Sihanoukville": {"en":"Sihanoukville Port","ar":"ميناء سيهانوكفيل","fr":"Port de Sihanoukville","es":"Puerto de Sihanoukville","zh":"西哈努克港","ru":"Порт Сиануквиль"},
  "Sto Domingo": {"en":"Sto Domingo Port","ar":"ميناء سانتو دومينغو","fr":"Port de Saint-Domingue","es":"Puerto de Santo Domingo","zh":"圣多明各港","ru":"Порт Санто-Доминго"},
  "Sydney": {"en":"Sydney Port","ar":"ميناء سيدني","fr":"Port de Sydney","es":"Puerto de Sídney","zh":"悉尼港","ru":"Порт Сидней"},
  "Tangier Med": {"en":"Tangier Med Port","ar":"ميناء طنجة المتوسط","fr":"Port Tanger Med","es":"Puerto Tánger Med","zh":"丹吉尔地中海港","ru":"Порт Танжер Мед"},
  "Tauranga": {"en":"Tauranga Port","ar":"ميناء تورانغا","fr":"Port de Tauranga","es":"Puerto de Tauranga","zh":"陶朗加港","ru":"Порт Тауранга"},
  "Tj. Priok": {"en":"Tj. Priok Port","ar":"ميناء تانجونج بريوك","fr":"Port de Tanjung Priok","es":"Puerto Tanjung Priok","zh":"丹戎比告港","ru":"Порт Танджунг Приок"},
  "Toamasina": {"en":"Toamasina Port","ar":"ميناء تواماسينا","fr":"Port de Toamasina","es":"Puerto de Toamasina","zh":"图阿马西纳港","ru":"Порт Туамасина"},
  "Tripoli Port": {"en":"Tripoli Port","ar":"ميناء طرابلس","fr":"Port de Tripoli","es":"Puerto de Trípoli","zh":"的黎波里港","ru":"Порт Триполи"},
  "Tunis Port": {"en":"Tunis Port","ar":"ميناء تونس","fr":"Port de Tunis","es":"Puerto de Túnez","zh":"突尼斯港","ru":"Порт Тунис"},
  "Valencia": {"en":"Valencia Port","ar":"ميناء فالنسيا","fr":"Port de Valence","es":"Puerto de Valencia","zh":"瓦伦西亚港","ru":"Порт Валенсия"},
  "Valparaíso": {"en":"Valparaíso Port","ar":"ميناء فالبارايسو","fr":"Port de Valparaíso","es":"Puerto de Valparaíso","zh":"瓦尔帕莱索港","ru":"Порт Вальпараисо"},
  "Vancouver": {"en":"Vancouver Port","ar":"ميناء فانكوفر","fr":"Port de Vancouver","es":"Puerto de Vancouver","zh":"温哥华港","ru":"Порт Ванкувер"},
  "Veracruz": {"en":"Veracruz Port","ar":"ميناء فيراكروز","fr":"Port de Veracruz","es":"Puerto de Veracruz","zh":"韦拉克鲁斯港","ru":"Порт Веракрус"},
  "Victoria": {"en":"Victoria Port","ar":"ميناء فيكتوريا","fr":"Port de Victoria","es":"Puerto de Victoria","zh":"维多利亚港","ru":"Порт Виктория"},
  "Yokohama Port": {"en":"Yokohama Port","ar":"ميناء يوكوهاما","fr":"Port de Yokohama","es":"Puerto de Yokohama","zh":"横滨港","ru":"Порт Йокогама"},

  // Units & Measurements
  "gram": { en: "gram", ar: "جرام", fr: "gramme", es: "gramo", zh: "克", ru: "грамм" },
  "grams": { en: "grams", ar: "جرام", fr: "grammes", es: "gramos", zh: "克", ru: "граммов" },
  "gm": { en: "gm", ar: "جرام", fr: "gramme", es: "gramo", zh: "克", ru: "г" },
  "kg": { en: "kg", ar: "كجم", fr: "kilos", es: "kilos", zh: "公斤", ru: "кг" },
  "kilos": { en: "kilos", ar: "كيلو", fr: "kilos", es: "kilos", zh: "公斤", ru: "кило" },
  "kilogram": { en: "kilogram", ar: "كيلوجرام", fr: "kilogramme", es: "kilogramo", zh: "公斤", ru: "килограмм" },
  "kilograms": { en: "kilograms", ar: "كيلوجرامات", fr: "kilogrammes", es: "kilogramos", zh: "公斤", ru: "килограммов" },
  "lbs": { en: "lbs", ar: "رطل", fr: "lbs", es: "lbs", zh: "磅", ru: "фунт" },
  "ton": { en: "ton", ar: "طن", fr: "tonne", es: "tonelada", zh: "吨", ru: "тонна" },
  "tons": { en: "tons", ar: "أطنان", fr: "tonnes", es: "toneladas", zh: "吨", ru: "тонн" },
  "via": { en: "via", ar: "عبر", fr: "via", es: "vía", zh: "经", ru: "через" },

  // Groups / Headers
  "Region": { en: "Region", ar: "المنطقة", fr: "Région", es: "Región", zh: "地区", ru: "Регион" },
  "REGION": { en: "REGION", ar: "المنطقة", fr: "RÉGION", es: "REGIÓN", zh: "地区", ru: "РЕГИОН" },
  "COUNTRY SUB-REGIONS": { en: "COUNTRY SUB-REGIONS", ar: "المناطق الفرعية للدولة", fr: "SOUS-RÉGIONS PAYS", es: "SUB-REGIÓN DE PAÍSES", zh: "国家子地区", ru: "СУБREGIONY СТРАН" },
  "RETAIL / SMALL PACK": { en: "RETAIL / SMALL PACK", ar: "التجزئة / حزمة صغيرة", fr: "DÉTAIL / PETIT PAQUET", es: "VENTA AL POR MENOR / PACK PEQUEÑO", zh: "零售 / 小包装", ru: "РОЗНИЧНАЯ / МАЛАЯ УПАКОВКА" },
  "BULK / EXPORT PACK": { en: "BULK / EXPORT PACK", ar: "حزمة الجملة / التصدير", fr: "EN VRAC / PAQUET D'EXPORTATION", es: "A GRANEL / PAQUETE DE EXPORTACIÓN", zh: "大宗 / 出口包装", ru: "ОПТОВАЯ / ЭКСПОРТНАЯ УПАКОВКА" },
  "JUTE BAGS": { en: "JUTE BAGS", ar: "أكياس الخيش", fr: "SACS DE JUTE", es: "BOLSAS DE YUTE", zh: "黄麻袋", ru: "ДЖУТОВЫЕ МЕШКИ" },
  "PP / BOPP BAGS": { en: "PP / BOPP BAGS", ar: "أكياس PP / BOPP", fr: "SACS PP / BOPP", es: "BOLSAS PP / BOPP", zh: "PP / BOPP 袋", ru: "МЕШКИ PP / BOPP" },
  "2D POUCHES": { en: "2D POUCHES", ar: "أكياس 2D", fr: "POUCHES 2D", es: "BOLSAS 2D", zh: "2D 立体袋", ru: "2D ПАКЕТЫ" },
  "3D POUCHES": { en: "3D POUCHES", ar: "أكياس 3D", fr: "POUCHES 3D", es: "BOLSAS 3D", zh: "3D 立体袋", ru: "3D ПАКЕТЫ" },
  "CENTRE SEAL POUCHES": { en: "CENTRE SEAL POUCHES", ar: "أكياس الختم الأوسط", fr: "POUCHES SCELLÉES AU CENTRE", es: "BOLSAS CON SELLO CENTRAL", zh: "中封袋", ru: "ПАКЕТЫ С ЦЕНТРАЛЬНЫМ ШВОМ" },
  "BASMATI": { en: "BASMATI", ar: "بسمتي", fr: "BASMATI", es: "BASMATÍ", zh: "巴斯马蒂香米", ru: "БАСМАТИ" },
  "NON-BASMATI": { en: "NON-BASMATI", ar: "غير بسمتي", fr: "NON BASMATI", es: "NO BASMATÍ", zh: "非巴斯马蒂大米", ru: "НЕ БАСМАТИ" },
  "PROCESSING METHOD": { en: "PROCESSING METHOD", ar: "طريقة المعالجة", fr: "MÉTHODE DE TRAITEMENT", es: "MÉTODO DE PROCESAMIENTO", zh: "加工方式", ru: "МЕТОД ОБРАБОТКИ" },

  // Rice Varieties
  "1121 Basmati": { en: "1121 Basmati", ar: "بسمتي 1121", fr: "Basmati 1121", es: "Basmatí 1121", zh: "1121 巴斯马蒂香米", ru: "1121 Басмати" },
  "1401 Basmati": { en: "1401 Basmati", ar: "بسمتي 1401", fr: "Basmati 1401", es: "Basmatí 1401", zh: "1401 巴斯马蒂香米", ru: "1401 Басмати" },
  "1509 Basmati": { en: "1509 Basmati", ar: "بسمتي 1509", fr: "Basmati 1509", es: "Basmatí 1509", zh: "1509 巴斯马蒂香米", ru: "1509 Басмати" },
  "1718 Basmati": { en: "1718 Basmati", ar: "بسمتي 1718", fr: "Basmati 1718", es: "Basmatí 1718", zh: "1718 巴斯马蒂香米", ru: "1718 Басмати" },
  "1885 Basmati": { en: "1885 Basmati", ar: "بسمتي 1885", fr: "Basmati 1885", es: "Basmatí 1885", zh: "1885 巴斯马蒂香米", ru: "1885 Басмати" },
  "Taj Basmati": { en: "Taj Basmati", ar: "بسمتي تاج", fr: "Basmati Taj", es: "Basmatí Taj", zh: "泰姬巴斯马蒂香米", ru: "Тадж Басмати" },
  "Pusa Basmati": { en: "Pusa Basmati", ar: "بسمتي بوسا", fr: "Basmati Pusa", es: "Basmatí Pusa", zh: "普萨巴斯马蒂香米", ru: "Пуса Басмати" },
  "Traditional Basmati": { en: "Traditional Basmati", ar: "بسمتي تقليدي", fr: "Basmati Traditionnel", es: "Basmatí Tradicional", zh: "传统巴斯马蒂香米", ru: "Традиционный Басмати" },
  "PR 11": { en: "PR 11", ar: "أرز PR 11", fr: "Riz PR 11", es: "Arroz PR 11", zh: "PR 11 大米", ru: "Рис PR 11" },
  "PR 26": { en: "PR 26", ar: "أرز PR 26", fr: "Riz PR 26", es: "Arroz PR 26", zh: "PR 26 大米", ru: "Рис PR 26" },
  "PR 106": { en: "PR 106", ar: "أرز PR 106", fr: "Riz PR 106", es: "Arroz PR 106", zh: "PR 106 大米", ru: "Рис PR 106" },
  "Parmal": { en: "Parmal", ar: "أرز بارمال", fr: "Riz Parmal", es: "Arroz Parmal", zh: "帕尔马尔大米", ru: "Рис Пармал" },
  "RH 10": { en: "RH 10", ar: "أرز RH 10", fr: "Riz RH 10", es: "Arroz RH 10", zh: "RH 10 大米", ru: "Рис RH 10" },
  "Sharbati": { en: "Sharbati", ar: "أرز شارباتي", fr: "Riz Sharbati", es: "Arroz Sharbati", zh: "沙尔巴蒂大米", ru: "Рис Шарбати" },
  "Sugandha": { en: "Sugandha", ar: "أرز سوغاندها", fr: "Riz Sugandha", es: "Arroz Sugandha", zh: "苏甘达香米", ru: "Рис Сугандха" },
  "Sona Masoori": { en: "Sona Masoori", ar: "أرز سونا ماسوري", fr: "Riz Sona Masoori", es: "Arroz Sona Masoori", zh: "索纳马苏里大米", ru: "Рис Сона Масури" },
  "IR 64": { en: "IR 64", ar: "أرز IR 64", fr: "Riz IR 64", es: "Arroz IR 64", zh: "IR 64 大米", ru: "Рис IR 64" },
  "Swarna": { en: "Swarna", ar: "أرز سوارنا", fr: "Riz Swarna", es: "Arroz Swarna", zh: "斯瓦纳大米", ru: "Рис Сварна" },

  // Regions
  "Middle East": { en: "Middle East", ar: "الشرق الأوسط", fr: "Moyen-Orient", es: "Oriente Medio", zh: "中东", ru: "Ближний Восток" },
  "EU Europe": { en: "EU Europe", ar: "أوروبا", fr: "Europe", es: "Europa", zh: "欧洲", ru: "Европа ЕС" },
  "Africa": { en: "Africa", ar: "أفريقيا", fr: "Afrique", es: "África", zh: "非洲", ru: "Аفريقة" },
  "Asia": { en: "Asia", ar: "آسيا", fr: "Asie", es: "Asia", zh: "亚洲", ru: "Азия" },
  "Americas": { en: "Americas", ar: "الأمريكتان", fr: "Amériques", es: "Américas", zh: "美洲", ru: "Америка" },
  "AU Oceania": { en: "AU Oceania", ar: "أوقيانوسيا", fr: "Océanie", es: "Oceanía", zh: "大洋洲", ru: "Океания" },

  // Sub Regions
  "GULF": { en: "GULF", ar: "الخليج", fr: "GOLFE", es: "GOLFO", zh: "海湾国家", ru: "ПЕРСИДСКИЙ ЗАЛИВ" },
  "LEVANT & YEMEN": { en: "LEVANT & YEMEN", ar: "بلاد الشام واليمن", fr: "LEVANT ET YÉMEN", es: "LEVANTE Y YEMEN", zh: "黎凡特和也门", ru: "ЛЕВАНТ И ЙЕМЕН" },
  "NORDICS & RUSSIA": { en: "NORDICS & RUSSIA", ar: "الدول الشمالية وروسيا", fr: "PAYS NORDIQUES ET RUSSIE", es: "NÓRDICOS Y RUSIA", zh: "北欧和俄罗斯", ru: "СКАНДИНАВИЯ И РОССИЯ" },
  "EU & UK": { en: "EU & UK", ar: "الاتحاد الأوروبي والمملكة المتحدة", fr: "UE ET ROYAUME-UNI", es: "UE Y REINO UNIDO", zh: "欧盟和英国", ru: "ЕС И ВЕЛИКОБРИТАНИЯ" },
  "EAST & SOUTH AFRICA": { en: "EAST & SOUTH AFRICA", ar: "شرق وجنوب أفريقيا", fr: "AFRIQUE DE L'EST ET DU SUD", es: "ÁFRICA ORIENTAL Y DEL SUR", zh: "东非和南非", ru: "ВОСТОЧНАЯ И ЮЖНАЯ АФРИКА" },
  "WEST & NORTH AFRICA": { en: "WEST & NORTH AFRICA", ar: "أفريقيا الغربية والشمالية", fr: "AFRIQUE DE L'OUEST ET DU NORD", es: "ÁFRICA OCCIDENTAL Y DEL NORTE", zh: "西非和北非", ru: "ЗАПАДНАЯ И СЕВЕРНАЯ АФРИКА" },
  "SOUTH ASIA & TURKEY": { en: "SOUTH ASIA & TURKEY", ar: "جنوب آسيا وتركيا", fr: "ASIE DU SUD ET TURQUIE", es: "ASIA DEL SUR Y TURQUÍA", zh: "南亚和土耳其", ru: "ЮЖНАЯ АЗИЯ И ТУРЦИЯ" },
  "ASEAN & CHINA": { en: "ASEAN & CHINA", ar: "آسيان والصين", fr: "ANASE ET CHINE", es: "ASEAN Y CHINA", zh: "东盟和中国", ru: "АСЕАН И КИТАЙ" },
  "NORTH AMERICA": { en: "NORTH AMERICA", ar: "أمريكا الشمالية", fr: "AMÉRIQUE DU NORD", es: "AMÉRICA DEL NORTE", zh: "北美洲", ru: "СЕВЕРНАЯ АМЕРИКА" },
  "LATAM & CARIBBEAN": { en: "LATAM & CARIBBEAN", ar: "أمريكا اللاتينية والكاريبي", fr: "AMÉRIQUE LATINE ET CARAÏBES", es: "AMÉRICA LATINA Y EL CARIBE", zh: "拉美和加勒比", ru: "ЛАТИНСКАЯ АМЕРИКА И КАРИБЫ" },
  "OCEANIA": { en: "OCEANIA", ar: "أوقيانوسيا", fr: "OCÉANIE", es: "OCEANÍA", zh: "大洋洲", ru: "ОКЕАНИЯ" },

  // Rice Processing Forms
  "Steam": { en: "Steam", ar: "بخار", fr: "Vapeur", es: "Vapor", zh: "蒸汽", ru: "Паровой" },
  "Raw": { en: "Raw", ar: "خام", fr: "Brut", es: "Crudo", zh: "生米", ru: "Сырой" },
  "Sella": { en: "Sella", ar: "سيلا", fr: "Sella", es: "Sella", zh: "蒸煮", ru: "Селла" },
  "Parboiled": { en: "Parboiled", ar: "مسلوق", fr: "Incollable / Évuvé", es: "Parbolizado", zh: "半熟", ru: "Пропаренный" },
  "Golden Sella": { en: "Golden Sella", ar: "سيلا ذهبي", fr: "Sella Doré", es: "Sella Dorado", zh: "金黄蒸煮", ru: "Золотая Селла" },
  "White Sella": { en: "White Sella", ar: "سيلا أبيض", fr: "Sella Blanc", es: "Sella Blanco", zh: "白蒸煮", ru: "Белая Селла" },
  "Creamy Sella": { en: "Creamy Sella", ar: "سيلا كريمي", fr: "Sella Crémeux", es: "Sella Cremoso", zh: "奶油蒸煮", ru: "Кремовая Селла" },
  "Creamy": { en: "Creamy", ar: "كريمي", fr: "Crémeux", es: "Cremoso", zh: "奶油", ru: "Кремовый" },
  "Lemon Sella": { en: "Lemon Sella", ar: "سيلا ليموني", fr: "Sella Citron", es: "Sella Limón", zh: "柠檬蒸煮", ru: "Лимонная Селла" },
  "Steam Grade A": { en: "Steam Grade A", ar: "بخار نخب أول", fr: "Vapeur Grade A", es: "Vapor Grado A", zh: "特级蒸汽", ru: "Паровой Сорт A" },
  "Grade A": { en: "Grade A", ar: "نخب أول", fr: "Grade A", es: "Grado A", zh: "特级", ru: "Сорт A" },
  "Creamy / white sella": { en: "Creamy / White Sella", ar: "سيلا كريمي / أبيض", fr: "Sella Crémeux / Blanc", es: "Sella Cremoso / Blanco", zh: "奶油 / 白蒸煮", ru: "Кремовая / Белая Селла" },
  "Creamy sella/White sella": { en: "Creamy / White Sella", ar: "سيلا كريمي / أبيض", fr: "Sella Crémeux / Blanc", es: "Sella Cremoso / Blanco", zh: "奶油 / 白蒸煮", ru: "Кремовая / Белая Селла" },
  "Creamy/ White Sella": { en: "Creamy / White Sella", ar: "سيلا كريمي / أبيض", fr: "Sella Crémeux / Blanc", es: "Sella Cremoso / Blanco", zh: "奶油 / 白蒸煮", ru: "Кремовая / Белая Селла" },
  "Creamy/ White sella": { en: "Creamy / White Sella", ar: "سيلا كريمي / أبيض", fr: "Sella Crémeux / Blanc", es: "Sella Cremoso / Blanco", zh: "奶油 / 白蒸煮", ru: "Кремовая / Белая Селла" },
  "Creamy/White Sella": { en: "Creamy / White Sella", ar: "سيلا كريمي / أبيض", fr: "Sella Crémeux / Blanc", es: "Sella Cremoso / Blanco", zh: "奶油 / 白蒸煮", ru: "Кремовая / Белая Селла" },
  "Creamy/white Sella": { en: "Creamy / White Sella", ar: "سيلا كريمي / أبيض", fr: "Sella Crémeux / Blanc", es: "Sella Cremoso / Blanco", zh: "奶油 / 白蒸煮", ru: "Кремовая / Белая Селла" },
  "White/ Creamy Sella": { en: "Creamy / White Sella", ar: "سيلا كريمي / أبيض", fr: "Sella Crémeux / Blanc", es: "Sella Cremoso / Blanco", zh: "奶油 / 白蒸煮", ru: "Кремовая / Белая Селла" },
  "100% Broken": { en: "100% Broken", ar: "مكسور 100%", fr: "100% Brisures", es: "100% Partido", zh: "100% 碎米", ru: "100% Дробленый" },
  "Boiled": { en: "Boiled", ar: "مغلي", fr: "Bouilli", es: "Hervido", zh: "煮熟", ru: "Вареный" },

  // Packaging Types & Terms
  "Bag": { en: "Bag", ar: "كيس", fr: "Sac", es: "Bolsa", zh: "袋", ru: "Мешок" },
  "Bags": { en: "Bags", ar: "أكياس", fr: "Sacs", es: "Bolsas", zh: "袋", ru: "Мешки" },
  "Pouch": { en: "Pouch", ar: "كيس", fr: "Pochette", es: "Bolsa", zh: "立体袋", ru: "Пакет" },
  "Pouches": { en: "Pouches", ar: "أكياس", fr: "Pochettes", es: "Bolsas", zh: "立体袋", ru: "Пакеты" },
  "Jute Bag": { en: "Jute Bag", ar: "كيس خيش", fr: "Sac de Jute", es: "Bolsa de Yute", zh: "黄麻袋", ru: "Джутовый Мешок" },
  "PP Bag": { en: "PP Bag", ar: "كيس PP", fr: "Sac PP", es: "Bolsa PP", zh: "PP 袋", ru: "Мешок PP" },
  "BOPP Bag": { en: "BOPP Bag", ar: "كيس BOPP", fr: "Sac BOPP", es: "Bolsa BOPP", zh: "BOPP 袋", ru: "Мешок BOPP" },
  "Non Woven Bag": { en: "Non Woven Bag", ar: "كيس غير منسوج", fr: "Sac Non Tissé", es: "Bolsa No Tejida", zh: "无纺布袋", ru: "Нетканый Мешок" },
  "2D Pouch": { en: "2D Pouch", ar: "كيس 2D", fr: "Pochette 2D", es: "Bolsa 2D", zh: "2D 立体袋", ru: "2D Пакет" },
  "3D Pouch": { en: "3D Pouch", ar: "كيس 3D", fr: "Pochette 3D", es: "Bolsa 3D", zh: "3D 立体袋", ru: "3D Пакет" },
  "Centre Seal Pouch": { en: "Centre Seal Pouch", ar: "كيس الختم الأوسط", fr: "Pochette Scellée au Centre", es: "Bolsa Sello Central", zh: "中封袋", ru: "Пакет с Центральным Швом" },
  "Fabric Bag": { en: "Fabric Bag", ar: "كيس قماش", fr: "Sac en Tissu", es: "Bolsa de Tela", zh: "布袋", ru: "Тканевый Мешок" },

  // Packaging Full Product Names from DB
  "Brown Jute with PP inner": { en: "Brown Jute with PP inner", ar: "خيش بني مع بطانة PP", fr: "Jute brun avec doublure PP", es: "Yute marrón con interior de PP", zh: "棕色黄麻袋（含 PP 内袋）", ru: "Коричневый джут с внутренним PP" },
  "Brown Jute with jute inner": { en: "Brown Jute with jute inner", ar: "خيش بني مع بطانة خيش", fr: "Jute brun avec doublure en jute", es: "Yute marrón con interior de yute", zh: "棕色黄麻袋（含黄麻内袋）", ru: "Коричневый джут с внутренним джутом" },
  "White bleach Jute with PP inner": { en: "White bleach Jute with PP inner", ar: "خيش أبيض مبيض مع بطانة PP", fr: "Jute blanc blanchi avec doublure PP", es: "Yute blanco blanqueado con interior de PP", zh: "白色漂白黄麻袋（含 PP 内袋）", ru: "Белый отбеленный джут с внутренним PP" },
  "White bleach Jute with jute inner": { en: "White bleach Jute with jute inner", ar: "خيش أبيض مبيض مع بطانة خيش", fr: "Jute blanc blanchi avec doublure en jute", es: "Yute blanco blanqueado con interior de yute", zh: "白色漂白黄麻袋（含黄麻内袋）", ru: "Белый отбеленный джут с внутренним джутом" },
  "Fabric / Non woven Bags": { en: "Fabric / Non woven Bag", ar: "كيس قماش / غير منسوج", fr: "Sac en Tissu / Non tissé", es: "Bolsa de Tela / No tejida", zh: "布袋 / 无纺布袋", ru: "Тканевый / Нетканый Мешок" },
  "Fabric / Non woven Bag": { en: "Fabric / Non woven Bag", ar: "كيس قماش / غير منسوج", fr: "Sac en Tissu / Non tissé", es: "Bolsa de Tela / No tejida", zh: "布袋 / 无纺布袋", ru: "Тканевый / Нетканый Мешок" },
  "Transparent PP without label": { en: "Transparent PP without label", ar: "PP شفاف بدون ملصق", fr: "PP transparent sans étiquette", es: "PP transparente sin etiqueta", zh: "透明 PP 袋（无标签）", ru: "Прозрачный PP без этикетки" },
  "Transparent PP with label": { en: "Transparent PP with label", ar: "PP شفاف مع ملصق", fr: "PP transparent avec étiquette", es: "PP transparente con etiqueta", zh: "透明 PP 袋（含标签）", ru: "Прозрачный PP с этикеткой" },
  "White PP bag with label": { en: "White PP bag with label", ar: "كيس PP أبيض مع ملصق", fr: "Sac PP blanc avec étiquette", es: "Bolsa PP blanca con etiqueta", zh: "白色 PP 袋（含标签）", ru: "Белый PP мешок с этикеткой" },
  "White pp bag without label": { en: "White PP bag without label", ar: "كيس PP أبيض بدون ملصق", fr: "Sac PP blanc sans étiquette", es: "Bolsa PP blanca sin etiqueta", zh: "白色 PP 袋（无标签）", ru: "Белый PP мешок без этикетки" },
  "BOPP bag  without pinch bottom": { en: "BOPP bag without pinch bottom", ar: "كيس BOPP بدون قاع ملتوية", fr: "Sac BOPP sans fond pincé", es: "Bolsa BOPP sin fondo pellizcado", zh: "BOPP 袋（平口底/无平顶底）", ru: "BOPP мешок без сшитого дна" },
  "BOPP bag without pinch bottom": { en: "BOPP bag without pinch bottom", ar: "كيس BOPP بدون قاع ملتوية", fr: "Sac BOPP sans fond pincé", es: "Bolsa BOPP sin fondo pellizcado", zh: "BOPP 袋（平口底/无平顶底）", ru: "BOPP мешок без сшитого дна" },
  "BOPP bag  with pinch bottom": { en: "BOPP bag with pinch bottom", ar: "كيس BOPP مع قاع ملتوية", fr: "Sac BOPP avec fond pincé", es: "Bolsa BOPP con fondo pellizcado", zh: "BOPP 袋（含风琴底/平顶底）", ru: "BOPP мешок со сшитым дном" },
  "BOPP bag with pinch bottom": { en: "BOPP bag with pinch bottom", ar: "كيس BOPP مع قاع ملتوية", fr: "Sac BOPP avec fond pincé", es: "Bolsa BOPP con fondo pellizcado", zh: "BOPP 袋（含风琴底/平顶底）", ru: "BOPP мешок со сшитым дном" },
  "2D Pouch with box": { en: "2D Pouch with box", ar: "كيس 2D مع علبة", fr: "Pochette 2D avec boîte", es: "Bolsa 2D con caja", zh: "2D 立体袋（含外盒）", ru: "2D пакет с коробкой" },
  "2D Pouch without  box": { en: "2D Pouch without box", ar: "كيس 2D بدون علبة", fr: "Pochette 2D بدون علبة", es: "Bolsa 2D sin caja", zh: "2D 立体袋（无外盒）", ru: "2D пакет без коробки" },
  "2D Pouch without box": { en: "2D Pouch without box", ar: "كيس 2D بدون علبة", fr: "Pochette 2D sans boîte", es: "Bolsa 2D sin caja", zh: "2D 立体袋（无外盒）", ru: "2D пакет без коробки" },
  "3D Pouch with box": { en: "3D Pouch with box", ar: "كيس 3D مع علبة", fr: "Pochette 3D avec boîte", es: "Bolsa 3D con caja", zh: "3D 立体袋（含外盒）", ru: "3D пакет с коробкой" },
  "3D Pouch without  box": { en: "3D Pouch without box", ar: "كيس 3D بدون علبة", fr: "Pochette 3D sans boîte", es: "Bolsa 3D sin caja", zh: "3D 立体袋（无外盒）", ru: "3D пакет بدون коробки" },
  "3D Pouch without box": { en: "3D Pouch without box", ar: "كيس 3D بدون علبة", fr: "Pochette 3D sans boîte", es: "Bolsa 3D sin caja", zh: "3D 立体袋（无外盒）", ru: "3D пакет без коробки" },
  "Centre Seal Pouch with BOX": { en: "Centre Seal Pouch with box", ar: "كيس الختم الأوسط مع علبة", fr: "Pochette scellée au centre avec boîte", es: "Bolsa sello central con caja", zh: "中封袋（含外盒）", ru: "Пакет с центральным швом с коробкой" },
  "Centre Seal Pouch with box": { en: "Centre Seal Pouch with box", ar: "كيس الختم الأوسط مع علبة", fr: "Pochette scellée au centre avec boîte", es: "Bolsa sello central con caja", zh: "中封袋（含外盒）", ru: "Пакет с центральным швом с коробкой" },
  "Centre Seal Pouch without box": { en: "Centre Seal Pouch without box", ar: "كيس الختم الأوسط بدون علبة", fr: "Pochette scellée au centre sans boîte", es: "Bolsa sello central sin caja", zh: "中封袋（无外盒）", ru: "Пакет с центральным швом без коробки" },

  // Countries
  "UAE": { en: "UAE", ar: "الإمارات", fr: "Émirats Arabes Unis", es: "EAU", zh: "阿联酋", ru: "ОАЭ" },
  "United Arab Emirates": { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة", fr: "Émirats Arabes Unis", es: "Emiratos Árabes Unidos", zh: "阿拉伯联合酋长国", ru: "Объединенные Арабские Эмираты" },
  "Saudi Arabia": { en: "Saudi Arabia", ar: "المملكة العربية السعودية", fr: "Arabie Saoudite", es: "Arabia Saudita", zh: "沙特阿拉伯", ru: "Саудовская Аравия" },
  "Qatar": { en: "Qatar", ar: "قطر", fr: "Qatar", es: "Catar", zh: "卡塔尔", ru: "Катар" },
  "Kuwait": { en: "Kuwait", ar: "الكويت", fr: "Koweït", es: "Kuwait", zh: "科威特", ru: "Кувейت" },
  "Oman": { en: "Oman", ar: "عمان", fr: "Oman", es: "Omán", zh: "阿曼", ru: "Оمان" },
  "Bahrain": { en: "Bahrain", ar: "البحرين", fr: "Bahreïn", es: "Baréin", zh: "巴林", ru: "Бахрейн" },
  "Iraq": { en: "Iraq", ar: "العراق", fr: "Irak", es: "Irak", zh: "伊拉克", ru: "Ирак" },
  "Iran": { en: "Iran", ar: "إيران", fr: "Iran", es: "Irán", zh: "伊朗", ru: "Иран" },
  "Yemen": { en: "Yemen", ar: "اليمن", fr: "Yémen", es: "Yemen", zh: "也门", ru: "Йемен" },
  "Lebanon": { en: "Lebanon", ar: "لبنان", fr: "Liban", es: "Líbano", zh: "黎巴嫩", ru: "Лиوان" },
  "Jordan": { en: "Jordan", ar: "الأردن", fr: "Jordanie", es: "Jordania", zh: "约旦", ru: "Иордания" },
  "Israel": { en: "Israel", ar: "إسرائيل", fr: "Israël", es: "Israel", zh: "以色列", ru: "Израиль" },
  "Syria": { en: "Syria", ar: "سوريا", fr: "Syrie", es: "Siria", zh: "叙利亚", ru: "Сирия" },
  "Kazakhstan via Iran": { en: "Kazakhstan via Iran", ar: "كازاخستان عبر إيران", fr: "Kazakhstan via Iran", es: "Kazajistán vía Irán", zh: "哈萨克斯坦（经伊朗）", ru: "Казахстан через Иран" },
  "Tajikistan via Iran": { en: "Tajikistan via Iran", ar: "طاجيكستان عبر إيران", fr: "Tadjikistan via Iran", es: "Tayikistán vía Irán", zh: "塔吉克斯坦（经伊朗）", ru: "Таджикистан через Иран" },
  "Mongolia via China": { en: "Mongolia via China", ar: "منغوليا عبر الصين", fr: "Mongolie via Chine", es: "Mongolia vía China", zh: "蒙古（经中国）", ru: "Монголия через Китай" },
  "PNG": { en: "PNG", ar: "بابوا غينيا الجديدة", fr: "PNG", es: "PNG", zh: "巴布亚新几内亚", ru: "Папуа — Новая Гвинея" },
  "Georgia": { en: "Georgia", ar: "جورجيا", fr: "Géorgie", es: "Georgia", zh: "格鲁吉亚", ru: "Грузия" },
  "Mali via Dakar Port": { en: "Mali via Dakar Port", ar: "مالي عبر ميناء داكار", fr: "Mali via Port de Dakar", es: "Malí vía Puerto de Dakar", zh: "马里（经达喀尔港）", ru: "Мали через Порт Дакар" },
  "Burkina Faso via Tema": { en: "Burkina Faso via Tema", ar: "بوركينا فاسو عبر تيما", fr: "Burkina Faso via Tema", es: "Burkina Faso vía Tema", zh: "布基纳法索（经特马）", ru: "Буркина-Фасо через Тема" },
  "Niger via Lagos Port": { en: "Niger via Lagos Port", ar: "النيجر عبر ميناء لاغوس", fr: "Niger via Port de Lagos", es: "Níger vía Puerto de Lagos", zh: "尼日尔（经拉各斯港）", ru: "Нигер через Порт Лагоس" },
  "Chad via Douala Port": { en: "Chad via Douala Port", ar: "تشاد عبر ميناء دوالا", fr: "Tchad via Port de Douala", es: "Chad vía Puerto de Douala", zh: "乍得（经杜阿拉港）", ru: "Чад через Порт Дуала" },
  "Ethiopia via Djibouti": { en: "Ethiopia via Djibouti", ar: "إثيوبيا عبر جيبوتي", fr: "Éthiopie via Djibouti", es: "Etiopía vía Yibuti", zh: "埃塞俄比亚（经吉布提）", ru: "Эфиопия через Джибути" },
  "Uganda via Mombasa": { en: "Uganda via Mombasa", ar: "أوغندا عبر مومباسا", fr: "Ouganda via Mombasa", es: "Uganda vía Mombasa", zh: "乌干达（经蒙巴萨）", ru: "Уганда через Момбасу" },
  "Rwanda via Mombasa": { en: "Rwanda via Mombasa", ar: "رواندا عبر مومباسا", fr: "Rwanda via Mombasa", es: "Ruanda vía Mombasa", zh: "卢旺达（经蒙巴萨）", ru: "Руанда через Момбасу" },
  "Zimbabwe via Durban": { en: "Zimbabwe via Durban", ar: "زيمبابوي عبر دوربان", fr: "Zimbabwe via Durban", es: "Zimbabue vía Durban", zh: "津巴布韦（经德班）", ru: "Зимбабве через Дوربان" },
  "Switzerland via Rott.": { en: "Switzerland via Rotterdam", ar: "سويسرا عبر روتردام", fr: "Suisse via Rotterdam", es: "Suiza vía Róterdam", zh: "瑞士（经鹿特丹）", ru: "Швейцария через Роттердам" },
  "Dom. Rep.": { en: "Dominican Rep.", ar: "جمهورية الدومينيكان", fr: "Rép. Dominicaine", es: "Rep. Dominicana", zh: "多米尼加", ru: "Доминиканская Респ." },
  "T&T": { en: "Trinidad & Tobago", ar: "ترينيداد وتوباغو", fr: "Trinité-et-Tobago", es: "Trinidad y Tobago", zh: "特立尼达和多巴哥", ru: "Триниداد и Тобаго" },
  "Haiti": { en: "Haiti", ar: "هايتي", fr: "Haïti", es: "Haití", zh: "海地", ru: "Гаити" },
  "Barbados": { en: "Barbados", ar: "باربادوس", fr: "Barbade", es: "Barbados", zh: "巴巴多斯", ru: "Барбадоس" },
  "Bahamas": { en: "Bahamas", ar: "جزر البهاما", fr: "Bahamas", es: "Bahamas", zh: "巴哈马", ru: "Багамы" },
  "Guyana": { en: "Guyana", ar: "غيانا", fr: "Guyana", es: "Guyana", zh: "圭亚那", ru: "Гайана" },
  "Suriname": { en: "Suriname", ar: "سورينام", fr: "Suriname", es: "Surinam", zh: "苏里南", ru: "Суринам" },
  "Egypt": { en: "Egypt", ar: "مصر", fr: "Égypte", es: "Egipto", zh: "埃及", ru: "Египет" },
  "Algeria": { en: "Algeria", ar: "الجزائر", fr: "Algérie", es: "Argelia", zh: "阿尔及利亚", ru: "Алжир" },
  "Morocco": { en: "Morocco", ar: "المغرب", fr: "Maroc", es: "Marruecos", zh: "摩洛哥", ru: "Марокко" },
  "Nigeria": { en: "Nigeria", ar: "نيجيريا", fr: "Nigéria", es: "Nigeria", zh: "尼日利亚", ru: "Нигерия" },
  "Kenya": { en: "Kenya", ar: "كينيا", fr: "Kenya", es: "Kenia", zh: "肯尼亚", ru: "Кения" },
  "Tanzania": { en: "Tanzania", ar: "تنزانيا", fr: "Tanzanie", es: "Tanzania", zh: "坦桑尼亚", ru: "Танзания" },
  "South Africa": { en: "South Africa", ar: "جنوب أفريقيا", fr: "Afrique du Sud", es: "Sudáfrica", zh: "南非", ru: "Южная Африка" },
  "United Kingdom": { en: "United Kingdom", ar: "المملكة المتحدة", fr: "Royaume-Uni", es: "Reino Unido", zh: "英国", ru: "Великобритания" },
  "UK": { en: "UK", ar: "المملكة المتحدة", fr: "Royaume-Uni", es: "Reino Unido", zh: "英国", ru: "Великобритания" },
  "Germany": { en: "Germany", ar: "ألمانيا", fr: "Allemagne", es: "Alemania", zh: "德国", ru: "Германия" },
  "France": { en: "France", ar: "فرنسا", fr: "France", es: "Francia", zh: "法国", ru: "Франция" },
  "Italy": { en: "Italy", ar: "إيطاليا", fr: "Italie", es: "Italia", zh: "意大利", ru: "Италия" },
  "Spain": { en: "Spain", ar: "إسبانيا", fr: "Espagne", es: "España", zh: "西班牙", ru: "Испания" },
  "Netherlands": { en: "Netherlands", ar: "هولندا", fr: "Pays-Bas", es: "Países Bajos", zh: "荷兰", ru: "Нидерланды" },
  "Russia": { en: "Russia", ar: "روسيا", fr: "Russie", es: "Rusia", zh: "俄罗斯", ru: "Россия" },
  "USA": { en: "USA", ar: "الولايات المتحدة", fr: "États-Unis", es: "EE. UU.", zh: "美国", ru: "США" },
  "United States": { en: "United States", ar: "الولايات المتحدة", fr: "États-Unis", es: "Estados Unidos", zh: "美国", ru: "Соединенные Штаты" },
  "Canada": { en: "Canada", ar: "كندا", fr: "Canada", es: "Canadá", zh: "加拿大", ru: "Канада" },
  "Australia": { en: "Australia", ar: "أستراليا", fr: "Australie", es: "Australia", zh: "澳大利亚", ru: "Австралия" },
  "China": { en: "China", ar: "الصين", fr: "Chine", es: "China", zh: "中国", ru: "Китай" },
  "Turkey": { en: "Turkey", ar: "تركيا", fr: "Turquie", es: "Turquía", zh: "土耳其", ru: "Тورция" },
  "India": { en: "India", ar: "الهند", fr: "Inde", es: "India", zh: "印度", ru: "Индия" },

  // Ports & Port terms
  "Khorfakkan": { en: "Khorfakkan Port", ar: "ميناء خورفكان", fr: "Port de Khorfakkan", es: "Puerto de Khorfakkan", zh: "霍尔法坎港", ru: "Порт Хор-Факкан" },
  "Aden Port": { en: "Aden Port", ar: "ميناء عدن", fr: "Port d'Aden", es: "Puerto de Adén", zh: "亚丁港", ru: "Порт Аден" },
  "Aden": { en: "Aden Port", ar: "ميناء عدن", fr: "Port d'Aden", es: "Puerto de Adén", zh: "亚丁港", ru: "Порт Аден" },
  "Hodeidah": { en: "Hodeidah Port", ar: "ميناء الحديدة", fr: "Port de Hodeïda", es: "Puerto de Hodeida", zh: "荷台达港", ru: "Порт Ходейда" },
  "Bandar Abbas": { en: "Bandar Abbas Port", ar: "ميناء بندر عباس", fr: "Port de Bandar Abbas", es: "Puerto de Bandar Abbas", zh: "阿巴斯港", ru: "Порт Бендер-Аббас" },
  "Umm Qasr": { en: "Umm Qasr Port", ar: "ميناء أم قصر", fr: "Port d'Oum Qasr", es: "Puerto de Umm Qasr", zh: "乌姆盖斯尔港", ru: "Порт Умм-Каср" },
  "Ashdod": { en: "Ashdod Port", ar: "ميناء أشدود", fr: "Port d'Ashdod", es: "Puerto de Ashdod", zh: "阿什杜德港", ru: "Порт Ашдод" },
  "Haifa": { en: "Haifa Port", ar: "ميناء حيفا", fr: "Port de Haïfa", es: "Puerto de Haifa", zh: "海法港", ru: "Порт Хайфа" },
  "Latakia Port": { en: "Latakia Port", ar: "ميناء اللاذقية", fr: "Port de Lattaquié", es: "Puerto de Latakia", zh: "拉塔基亚港", ru: "Порт Латакия" },
  "Latakia": { en: "Latakia Port", ar: "ميناء اللاذقية", fr: "Port de Lattaquié", es: "Puerto de Latakia", zh: "拉塔基亚港", ru: "Порт Латакия" },
  "Khalifa B.S": { en: "Khalifa Port", ar: "ميناء خليفة", fr: "Port Khalifa", es: "Puerto Khalifa", zh: "哈利法港", ru: "Порт Халифа" },
  "Khalifa Port": { en: "Khalifa Port", ar: "ميناء خليفة", fr: "Port Khalifa", es: "Puerto Khalifa", zh: "哈利法港", ru: "Порт Халифа" },
  "Shuaiba": { en: "Shuaiba Port", ar: "ميناء الشعيبة", fr: "Port de Shuaiba", es: "Puerto de Shuaiba", zh: "舒艾巴港", ru: "Порт Шуайба" },
  "Shoaiba": { en: "Shoaiba Port", ar: "ميناء الشعيبة", fr: "Port de Shoaiba", es: "Puerto de Shoaiba", zh: "舒艾巴港", ru: "Порт Шуайبا" },
  "Shuwaikh": { en: "Shuwaikh Port", ar: "ميناء الشويخ", fr: "Port de Shuwaikh", es: "Puerto de Shuwaikh", zh: "舒韦赫港", ru: "Порт Шувейх" },
  "Salalah": { en: "Salalah Port", ar: "ميناء صلالة", fr: "Port de Salalah", es: "Puerto de Salalah", zh: "萨拉拉港", ru: "Порт Салала" },
  "Sohar Port": { en: "Sohar Port", ar: "ميناء صحار", fr: "Port de Sohar", es: "Puerto de Sohar", zh: "苏哈尔港", ru: "Порт Сохар" },
  "Sohar": { en: "Sohar Port", ar: "ميناء صحار", fr: "Port de Sohar", es: "Puerto de Sohar", zh: "苏哈尔港", ru: "Порт Сохар" },
  "Tema Port": { en: "Tema Port", ar: "ميناء تيما", fr: "Port de Tema", es: "Puerto de Tema", zh: "特马港", ru: "Порт Тема" },
  "Land Border": { en: "Land Border", ar: "الحدود البرية", fr: "Frontière terrestre", es: "Frontera terrestre", zh: "陆路边境", ru: "Сухопутная граница" },
  "Hamad": { en: "Hamad Port", ar: "ميناء حمد", fr: "Port Hamad", es: "Puerto Hamad", zh: "哈马德港", ru: "Порт Хамад" },
  "Jebel Ali": { en: "Jebel Ali Port", ar: "ميناء جبل علي", fr: "Port de Jebel Ali", es: "Puerto de Jebel Ali", zh: "杰贝阿里港", ru: "Джебель-Али" },
  "Dammam": { en: "Dammam Port", ar: "ميناء الدمام", fr: "Port de Dammam", es: "Puerto de Dammam", zh: "达曼港", ru: "Порт Даммам" },
  "Jeddah": { en: "Jeddah Port", ar: "ميناء جدة", fr: "Port de Djeddah", es: "Puerto de Yeda", zh: "吉达港", ru: "Порт Джиددا" },
  "Riyadh": { en: "Riyadh Dry Port", ar: "ميناء الرياض الجاف", fr: "Port Sec de Riyad", es: "Puerto Seco de Riad", zh: "利雅得陆港", ru: "Сухой Порт Эр-Рияд" },
  "Abu Dhabi": { en: "Abu Dhabi Port", ar: "ميناء أبو ظبي", fr: "Port d'Abou Dabi", es: "Puerto de Abu Dabi", zh: "阿布扎比港", ru: "Порт Абу-Даби" },
  "Sharjah": { en: "Sharjah Port", ar: "ميناء الشارقة", fr: "Port de Charjah", es: "Puerto de Sharjah", zh: "沙迦港", ru: "Порт Шарджа" },
  "Duqm": { en: "Duqm Port", ar: "ميناء الدقم", fr: "Port de Duqm", es: "Puerto de Duqm", zh: "杜库姆港", ru: "Порт Дукм" },
  "Aqaba Port": { en: "Aqaba Port", ar: "ميناء العقبة", fr: "Port d'Aqaba", es: "Puerto de Áqaba", zh: "阿卡巴港", ru: "Порт Акаба" },
  "Beirut Port": { en: "Beirut Port", ar: "ميناء بيروت", fr: "Port de Beyrouth", es: "Puerto de Beirut", zh: "贝鲁特港", ru: "Порт Бейрут" },
  "Port Said": { en: "Port Said", ar: "بورسعيد", fr: "Port-Saïd", es: "Puerto Saíd", zh: "塞得港", ru: "Порт-Саид" },
  "Alexandria": { en: "Alexandria Port", ar: "ميناء الإسكندرية", fr: "Port d'Alexandrie", es: "Puerto de Alejandría", zh: "亚历山大港", ru: "Порт Александрия" },
  "Sokhna Port": { en: "Sokhna Port", ar: "ميناء السخنة", fr: "Port de Sokhna", es: "Puerto Sokhna", zh: "苏赫奈港", ru: "Порт Сохна" },
  "Casablanca": { en: "Casablanca Port", ar: "ميناء الدار البيضاء", fr: "Port de Casablanca", es: "Puerto de Casablanca", zh: "卡萨布兰卡港", ru: "Порт Касабланка" },
  "Tangier Med": { en: "Tangier Med Port", ar: "ميناء طنجة المتوسط", fr: "Port Tanger Med", es: "Puerto Tánger Med", zh: "丹吉尔地中海港", ru: "Порт Танжер Мед" },
  "Dakar Port": { en: "Dakar Port", ar: "ميناء داكار", fr: "Port de Dakar", es: "Puerto de Dakar", zh: "达喀尔港", ru: "Порт Дакар" },
  "Mombasa Port": { en: "Mombasa Port", ar: "ميناء مومباسا", fr: "Port de Mombasa", es: "Puerto de Mombasa", zh: "蒙巴萨港", ru: "Порт Момбаса" },
  "Dar Es Salam": { en: "Dar Es Salaam Port", ar: "ميناء دار السلام", fr: "Port de Dar es Salam", es: "Puerto de Dar es Salaam", zh: "达累斯萨拉姆港", ru: "Порт Дар-эс-Салам" },
  "Durban": { en: "Durban Port", ar: "ميناء دوربان", fr: "Port de Durban", es: "Puerto de Durban", zh: "德班港", ru: "Порт Дурبان" },
  "Cape Town": { en: "Cape Town Port", ar: "ميناء كيب تاون", fr: "Port du Cap", es: "Puerto de Ciudad del Cabo", zh: "开普敦港", ru: "Порт Кейптаун" },
  "Port Sudan": { en: "Port Sudan", ar: "ميناء بورتسودان", fr: "Port-Soudan", es: "Puerto Sudán", zh: "苏丹港", ru: "Порт-Судан" },
  "Port Louis": { en: "Port Louis", ar: "ميناء بورت لويس", fr: "Port-Louis", es: "Puerto Luis", zh: "路易港", ru: "Порт-Луи" },
  "Novorossiysk": { en: "Novorossiysk Port", ar: "ميناء نوفوروسيسك", fr: "Port de Novorossiïsk", es: "Puerto de Novorosisk", zh: "新罗西斯克港", ru: "Порт Новороссийск" },
  "St Petersburg": { en: "St Petersburg Port", ar: "ميناء سانت بطرسبرغ", fr: "Port de Saint-Pétersbourg", es: "Puerto de San Petersburgo", zh: "圣彼得堡港", ru: "Порт Санкт-Петербург" },
  "Rotterdam": { en: "Rotterdam Port", ar: "ميناء روتردام", fr: "Port de Rotterdam", es: "Puerto de Róterdam", zh: "鹿特丹港", ru: "Порт Роттердам" },
  "Antwerp": { en: "Antwerp Port", ar: "ميناء أنتويرب", fr: "Port d'Anvers", es: "Puerto de Amberes", zh: "安特卫普港", ru: "Порт Антверпен" },
  "Hamburg": { en: "Hamburg Port", ar: "ميناء هامبورغ", fr: "Port de Hambourg", es: "Puerto de Hamburgo", zh: "汉堡港", ru: "Порт Гамбург" },
  "London Gateway": { en: "London Gateway Port", ar: "ميناء لندن جيتواي", fr: "Port de London Gateway", es: "Puerto de London Gateway", zh: "伦敦门户港", ru: "Порт Лондон Гейтвей" },
  "Felixstowe": { en: "Felixstowe Port", ar: "ميناء فيليكسستو", fr: "Port de Felixstowe", es: "Puerto de Felixstowe", zh: "费利克斯托港", ru: "Порт Феликстоу" },
  "Le Havre": { en: "Le Havre Port", ar: "ميناء لو هافر", fr: "Port du Havre", es: "Puerto de Le Havre", zh: "勒阿弗尔港", ru: "Порт Ле-Гавр" },
  "Marseille": { en: "Marseille Port", ar: "ميناء مارسيليا", fr: "Port de Marseille", es: "Puerto de Marsella", zh: "马赛港", ru: "Порт Марсель" },
  "Genoa": { en: "Genoa Port", ar: "ميناء جنوة", fr: "Port de Gênes", es: "Puerto de Génova", zh: "热那亚港", ru: "Порт Генуя" },
  "Valencia": { en: "Valencia Port", ar: "ميناء فالنسيا", fr: "Port de Valence", es: "Puerto de Valencia", zh: "瓦伦西亚港", ru: "Порт Валенсия" },
  "Los Angeles": { en: "Los Angeles Port", ar: "ميناء لوس أنجلوس", fr: "Port de Los Angeles", es: "Puerto de Los Ángeles", zh: "洛杉矶港", ru: "Порт Лос-Анджелес" },
  "New York/NJ": { en: "New York/NJ Port", ar: "ميناء نيويورك / نيوجيرسي", fr: "Port de New York/NJ", es: "Puerto de Nueva York/NJ", zh: "纽约/新泽西港", ru: "Порт Нью-Йорк/Нью-Джерси" },
  "Houston": { en: "Houston Port", ar: "ميناء هيوستن", fr: "Port de Houston", es: "Puerto de Houston", zh: "休斯敦港", ru: "Порт Хьюстон" },
  "Port": { en: "Port", ar: "ميناء", fr: "Port", es: "Puerto", zh: "港", ru: "Порт" }
};

// Reverse map for normalizing incoming translated strings back to English
const BUILD_REVERSE_DICTIONARY = () => {
  const reverseMap = new Map();
  for (const [engKey, translations] of Object.entries(DICTIONARY)) {
    const lowerKey = engKey.toLowerCase();
    reverseMap.set(lowerKey, engKey);
    for (const langCode in translations) {
      const val = translations[langCode];
      if (val) {
        reverseMap.set(val.toLowerCase(), engKey);
      }
    }
  }
  return reverseMap;
};

const REVERSE_DICTIONARY = BUILD_REVERSE_DICTIONARY();

// Helper function to normalize any translated text back to English
const normalizeToEnglish = (text) => {
  if (!text) return text;
  const str = String(text).trim();
  const lower = str.toLowerCase();
  
  if (REVERSE_DICTIONARY.has(lower)) {
    return REVERSE_DICTIONARY.get(lower);
  }

  // Check partial key matches in reverse map
  for (const [trans, eng] of REVERSE_DICTIONARY.entries()) {
    if (lower === trans || lower.includes(trans)) {
      return eng;
    }
  }

  return str;
};

// Sort dictionary keys by length descending to replace longest phrases first
const SORTED_DICT_KEYS = Object.keys(DICTIONARY).sort((a, b) => b.length - a.length);

// Translate function
const translateText = (text, langInput) => {
  if (!text) return text;
  const lang = normalizeLang(langInput);
  if (lang === 'en') return text;

  const strText = String(text).trim();

  // Direct match in dictionary
  if (DICTIONARY[strText] && DICTIONARY[strText][lang]) {
    return DICTIONARY[strText][lang];
  }

  // Case insensitive match in dictionary
  const lowerText = strText.toLowerCase();
  const dictKey = Object.keys(DICTIONARY).find(k => k.toLowerCase() === lowerText);
  if (dictKey && DICTIONARY[dictKey][lang]) {
    return DICTIONARY[dictKey][lang];
  }

  // Handle compound text e.g. "UAE — Khorfakkan" or "Yemen — Aden"
  let translatedResult = strText;

  for (const key of SORTED_DICT_KEYS) {
    const transObj = DICTIONARY[key];
    if (transObj[lang]) {
      const escaped = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const reg = new RegExp(`(?:^|\\b)${escaped}(?:\\b|$)`, 'gi');
      if (reg.test(translatedResult)) {
        translatedResult = translatedResult.replace(reg, transObj[lang]);
      }
    }
  }

  return translatedResult;
};

// Helper for welcome & bot messages
const getBotMessage = (key, langInput, params = {}) => {
  const lang = normalizeLang(langInput);
  const tObj = MESSAGES[key] || {};
  let msg = tObj[lang] || tObj['en'] || '';

  Object.keys(params).forEach(p => {
    msg = msg.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
  });

  return msg;
};

// Quote Message Generator Localized for all 6 languages
const generateQuoteMessage = (quoteDetails, langInput) => {
  const lang = normalizeLang(langInput);

  const {
    variety,
    form,
    size,
    packType,
    destName,
    hasFreight,
    isStd50kg,
    dateString,
    inrPerMtStr,
    roundedInrPerKg,
    exMillUsdPerMt,
    inlandUsdPerMt,
    customsUsdPerMt,
    packagingUsdPerMt,
    fobUsdPerMt,
    totalSeaAndCocUsdPerMt,
    cifUsdPerMt,
    containerMt,
    rate
  } = quoteDetails;

  // Chinese (zh)
  if (lang === 'zh') {
    let msg = '';
    if (isStd50kg) {
      msg += `📋 DCS 标准 50 kg PP FOB — 实时报价\n`;
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 规格: ${size} | 包装: ${packType}\n\n`;
      msg += `💵 出厂价 (Ex-Mill): $${exMillUsdPerMt} USD/吨\n`;
      msg += `🚢 FOB 价格: $${fobUsdPerMt} USD/吨\n\n`;
      msg += `FOB 成本明细 (USD/吨):\n`;
      msg += `• 出厂价: $${exMillUsdPerMt}\n`;
      msg += `• 陆运费: $${inlandUsdPerMt}\n`;
      msg += `• 报关 + THC: $${customsUsdPerMt}\n`;
      msg += `• 包装费: $${packagingUsdPerMt}\n`;
      msg += `• FOB 总价: $${fobUsdPerMt}\n\n`;
      msg += `起订量: 1 × 20' FCL\n`;
      msg += `集装箱装载量: ${containerMt} 吨\n\n`;
      msg += `⚠️ 按汇率 USD/INR ${rate} 计算。`;
    } else {
      if (hasFreight) {
        msg += `📋 DCS CIF — ${destName} — 实时报价\n`;
      } else {
        msg += `📋 DCS 出厂 / FOB — 实时报价\n`;
      }
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 规格: ${size} | 包装: ${packType}\n`;
      if (hasFreight) msg += `🌍 目的港: ${destName}\n`;
      msg += `\n`;
      msg += `💵 米厂门价:\n`;
      msg += `• ₹${inrPerMtStr} / 吨 (约 ₹${roundedInrPerKg} / 公斤)\n`;
      msg += `• $${exMillUsdPerMt} USD/吨 (参考汇率 @ USD/INR ${rate})\n\n`;
      msg += `🚢 FOB: $${fobUsdPerMt} USD/吨\n`;
      if (hasFreight) msg += `📦 CIF ${destName}: $${cifUsdPerMt} USD/吨\n`;
      msg += `\n`;
      msg += `FOB 成本明细 (USD/吨):\n`;
      msg += `• 出厂价: $${exMillUsdPerMt}\n`;
      msg += `• 陆运费: $${inlandUsdPerMt}\n`;
      msg += `• 报关 + THC: $${customsUsdPerMt}\n`;
      msg += `• 包装费: $${packagingUsdPerMt}\n`;
      msg += `• FOB 总价: $${fobUsdPerMt}\n\n`;
      if (hasFreight) {
        msg += `CIF 成本明细至 ${destName} (USD/吨):\n`;
        msg += `• FOB: $${fobUsdPerMt}\n`;
        msg += `• 海运费: $${totalSeaAndCocUsdPerMt}\n`;
        msg += `• CIF 总价: $${cifUsdPerMt}\n\n`;
      }
      msg += `起订量: 1 × 20' FCL\n`;
      msg += `集装箱装载量: ${containerMt} 吨\n\n`;
      msg += `⚠️ 按汇率 USD/INR ${rate} 计算。`;
    }
    return msg;
  }

  // Russian (ru)
  if (lang === 'ru') {
    let msg = '';
    if (isStd50kg) {
      msg += `📋 DCS Стандарт 50 кг PP FOB — Текущие цены\n`;
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 Размер: ${size} | Упаковка: ${packType}\n\n`;
      msg += `💵 С завода (Ex-Mill): $${exMillUsdPerMt} USD/Тонна\n`;
      msg += `🚢 Цена FOB: $${fobUsdPerMt} USD/Тонна\n\n`;
      msg += `Расчет цены FOB (USD/Тонна):\n`;
      msg += `• С завода: $${exMillUsdPerMt}\n`;
      msg += `• Доставка по суше: $${inlandUsdPerMt}\n`;
      msg += `• Таможня + THC: $${customsUsdPerMt}\n`;
      msg += `• Упаковка: $${packagingUsdPerMt}\n`;
      msg += `• Итого FOB: $${fobUsdPerMt}\n\n`;
      msg += `Мин. заказ: 1 × 20' FCL\n`;
      msg += `Загрузка контейнера: ${containerMt} Тонн\n\n`;
      msg += `⚠️ Рассчитано по курсу USD/INR ${rate}.`;
    } else {
      if (hasFreight) {
        msg += `📋 DCS CIF — ${destName} — Текущие цены\n`;
      } else {
        msg += `📋 DCS С завода / FOB — Текущие цены\n`;
      }
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 Размер: ${size} | Упаковка: ${packType}\n`;
      if (hasFreight) msg += `🌍 Пункт назначения: ${destName}\n`;
      msg += `\n`;
      msg += `💵 Цена с завода (Mill-Gate Price):\n`;
      msg += `• ₹${inrPerMtStr} / Тонна (≈ ₹${roundedInrPerKg} / кг)\n`;
      msg += `• $${exMillUsdPerMt} USD/Тонна (курс @ USD/INR ${rate})\n\n`;
      msg += `🚢 FOB: $${fobUsdPerMt} USD/Тонна\n`;
      if (hasFreight) msg += `📦 CIF ${destName}: $${cifUsdPerMt} USD/Тонна\n`;
      msg += `\n`;
      msg += `Расчет цены FOB (USD/Тонна):\n`;
      msg += `• С завода: $${exMillUsdPerMt}\n`;
      msg += `• Доставка по суше: $${inlandUsdPerMt}\n`;
      msg += `• Таможня + THC: $${customsUsdPerMt}\n`;
      msg += `• Упаковка: $${packagingUsdPerMt}\n`;
      msg += `• Итого FOB: $${fobUsdPerMt}\n\n`;
      if (hasFreight) {
        msg += `Расчет цены CIF до ${destName} (USD/Тонна):\n`;
        msg += `• FOB: $${fobUsdPerMt}\n`;
        msg += `• Морской фрахт (Sea Freight): $${totalSeaAndCocUsdPerMt}\n`;
        msg += `• Итого CIF: $${cifUsdPerMt}\n\n`;
      }
      msg += `Мин. заказ: 1 × 20' FCL\n`;
      msg += `Загрузка контейнера: ${containerMt} Тонн\n\n`;
      msg += `⚠️ Рассчитано по курсу USD/INR ${rate}.`;
    }
    return msg;
  }

  // Arabic (ar)
  if (lang === 'ar') {
    let msg = '';
    if (isStd50kg) {
      msg += `📋 DCS قياسي 50 كجم PP FOB - عرض سعر مباشر\n`;
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} - ${form}\n`;
      msg += `📦 الحجم: ${size} | التعبئة: ${packType}\n\n`;
      msg += `💵 من المصنع: $${exMillUsdPerMt} USD/MT\n`;
      msg += `🚢 السعر على ظهر السفينة (FOB): $${fobUsdPerMt} USD/MT\n\n`;
      msg += `تفاصيل تكلفة FOB (USD/MT):\n`;
      msg += `• من المصنع: $${exMillUsdPerMt}\n`;
      msg += `• الشحن الداخلي: $${inlandUsdPerMt}\n`;
      msg += `• الجمارك و رسوم THC: $${customsUsdPerMt}\n`;
      msg += `• تكلفة التعبئة والتغليف: $${packagingUsdPerMt}\n`;
      msg += `• إجمالي FOB: $${fobUsdPerMt}\n\n`;
      msg += `الحد أدنى للطلب: 1 × 20' FCL\n`;
      msg += `حمولة الحاوية: ${containerMt} MT\n\n`;
      msg += `⚠️ الأسعار محسوبة عند USD/INR ${rate}.`;
    } else {
      if (hasFreight) {
        msg += `📋 DCS CIF — ${destName} — عرض سعر مباشر\n`;
      } else {
        msg += `📋 DCS من المصنع / FOB — عرض سعر مباشر\n`;
      }
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 الحجم: ${size} | التعبئة: ${packType}\n`;
      if (hasFreight) msg += `🌍 الوجهة: ${destName}\n`;
      msg += `\n`;
      msg += `💵 سعر المصنع:\n`;
      msg += `• ₹${inrPerMtStr} / MT (حوالي ₹${roundedInrPerKg} / كجم)\n`;
      msg += `• $${exMillUsdPerMt} USD/MT (مرجع @ USD/INR ${rate})\n\n`;
      msg += `🚢 FOB: $${fobUsdPerMt} USD/MT\n`;
      if (hasFreight) msg += `📦 CIF ${destName}: $${cifUsdPerMt} USD/MT\n`;
      msg += `\n`;
      msg += `تفاصيل تكلفة FOB (USD/MT):\n`;
      msg += `• من المصنع: $${exMillUsdPerMt}\n`;
      msg += `• الشحن الداخلي: $${inlandUsdPerMt}\n`;
      msg += `• الجمارك و THC: $${customsUsdPerMt}\n`;
      msg += `• التعبئة: $${packagingUsdPerMt}\n`;
      msg += `• إجمالي FOB: $${fobUsdPerMt}\n\n`;
      if (hasFreight) {
        msg += `تفاصيل تكلفة CIF إلى ${destName} (USD/MT):\n`;
        msg += `• FOB: $${fobUsdPerMt}\n`;
        msg += `• الشحن البحري: $${totalSeaAndCocUsdPerMt}\n`;
        msg += `• إجمالي CIF: $${cifUsdPerMt}\n\n`;
      }
      msg += `الحد أدنى للطلب: 1 × 20' FCL\n`;
      msg += `حمولة الحاوية: ${containerMt} MT\n\n`;
      msg += `⚠️ الأسعار محسوبة عند USD/INR ${rate}.`;
    }
    return msg;
  }

  // French (fr)
  if (lang === 'fr') {
    let msg = '';
    if (isStd50kg) {
      msg += `📋 DCS Standard 50 kg PP FOB — Devis en direct\n`;
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 Taille: ${size} | Emballage: ${packType}\n\n`;
      msg += `💵 Départ usine (Ex-Mill): $${exMillUsdPerMt} USD/Tonne\n`;
      msg += `🚢 Prix FOB: $${fobUsdPerMt} USD/Tonne\n\n`;
      msg += `Détail du coût FOB (USD/Tonne):\n`;
      msg += `• Départ usine: $${exMillUsdPerMt}\n`;
      msg += `• Transport terrestre: $${inlandUsdPerMt}\n`;
      msg += `• Douane + THC: $${customsUsdPerMt}\n`;
      msg += `• Emballage: $${packagingUsdPerMt}\n`;
      msg += `• Total FOB: $${fobUsdPerMt}\n\n`;
      msg += `Commande min: 1 × 20' FCL\n`;
      msg += `Capacité du conteneur: ${containerMt} Tonnes\n\n`;
      msg += `⚠️ Prix calculés au taux USD/INR ${rate}.`;
    } else {
      if (hasFreight) {
        msg += `📋 DCS CIF — ${destName} — Devis en direct\n`;
      } else {
        msg += `📋 DCS Départ usine / FOB — Devis en direct\n`;
      }
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 Taille: ${size} | Emballage: ${packType}\n`;
      if (hasFreight) msg += `🌍 Destination: ${destName}\n`;
      msg += `\n`;
      msg += `💵 Prix Départ Usine:\n`;
      msg += `• ₹${inrPerMtStr} / Tonne (≈ ₹${roundedInrPerKg} / kg)\n`;
      msg += `• $${exMillUsdPerMt} USD/Tonne (référence @ USD/INR ${rate})\n\n`;
      msg += `🚢 FOB: $${fobUsdPerMt} USD/Tonne\n`;
      if (hasFreight) msg += `📦 CIF ${destName}: $${cifUsdPerMt} USD/Tonne\n`;
      msg += `\n`;
      msg += `Détail du coût FOB (USD/Tonne):\n`;
      msg += `• Départ usine: $${exMillUsdPerMt}\n`;
      msg += `• Transport terrestre: $${inlandUsdPerMt}\n`;
      msg += `• Douane + THC: $${customsUsdPerMt}\n`;
      msg += `• Emballage: $${packagingUsdPerMt}\n`;
      msg += `• Total FOB: $${fobUsdPerMt}\n\n`;
      if (hasFreight) {
        msg += `Détail du coût CIF jusqu'à ${destName} (USD/Tonne):\n`;
        msg += `• FOB: $${fobUsdPerMt}\n`;
        msg += `• Fret maritime: $${totalSeaAndCocUsdPerMt}\n`;
        msg += `• Total CIF: $${cifUsdPerMt}\n\n`;
      }
      msg += `Commande min: 1 × 20' FCL\n`;
      msg += `Capacité du conteneur: ${containerMt} Tonnes\n\n`;
      msg += `⚠️ Prix calculés au taux USD/INR ${rate}.`;
    }
    return msg;
  }

  // Spanish (es)
  if (lang === 'es') {
    let msg = '';
    if (isStd50kg) {
      msg += `📋 DCS Estándar 50 kg PP FOB — Cotización en vivo\n`;
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 Tamaño: ${size} | Embalaje: ${packType}\n\n`;
      msg += `💵 Ex-Mill (En molino): $${exMillUsdPerMt} USD/Tonelada\n`;
      msg += `🚢 Precio FOB: $${fobUsdPerMt} USD/Tonelada\n\n`;
      msg += `Desglose de costos FOB (USD/Tonelada):\n`;
      msg += `• En molino: $${exMillUsdPerMt}\n`;
      msg += `• Flete terrestre: $${inlandUsdPerMt}\n`;
      msg += `• Aduana + THC: $${customsUsdPerMt}\n`;
      msg += `• Embalaje: $${packagingUsdPerMt}\n`;
      msg += `• Total FOB: $${fobUsdPerMt}\n\n`;
      msg += `Pedido mín: 1 × 20' FCL\n`;
      msg += `Carga de contenedor: ${containerMt} Toneladas\n\n`;
      msg += `⚠️ Precios calculados con tasa USD/INR ${rate}.`;
    } else {
      if (hasFreight) {
        msg += `📋 DCS CIF — ${destName} — Cotización en vivo\n`;
      } else {
        msg += `📋 DCS Ex-Mill / FOB — Cotización en vivo\n`;
      }
      msg += `📅 ${dateString}\n\n`;
      msg += `🌾 ${variety} — ${form}\n`;
      msg += `📦 Tamaño: ${size} | Embalaje: ${packType}\n`;
      if (hasFreight) msg += `🌍 Destino: ${destName}\n`;
      msg += `\n`;
      msg += `💵 Precio en Molino:\n`;
      msg += `• ₹${inrPerMtStr} / Tonelada (≈ ₹${roundedInrPerKg} / kg)\n`;
      msg += `• $${exMillUsdPerMt} USD/Tonelada (referencia @ USD/INR ${rate})\n\n`;
      msg += `🚢 FOB: $${fobUsdPerMt} USD/Tonelada\n`;
      if (hasFreight) msg += `📦 CIF ${destName}: $${cifUsdPerMt} USD/Tonelada\n`;
      msg += `\n`;
      msg += `Desglose de costos FOB (USD/Tonelada):\n`;
      msg += `• En molino: $${exMillUsdPerMt}\n`;
      msg += `• Flete terrestre: $${inlandUsdPerMt}\n`;
      msg += `• Aduana + THC: $${customsUsdPerMt}\n`;
      msg += `• Embalaje: $${packagingUsdPerMt}\n`;
      msg += `• Total FOB: $${fobUsdPerMt}\n\n`;
      if (hasFreight) {
        msg += `Desglose de costos CIF hacia ${destName} (USD/Tonelada):\n`;
        msg += `• FOB: $${fobUsdPerMt}\n`;
        msg += `• Flete marítimo: $${totalSeaAndCocUsdPerMt}\n`;
        msg += `• Total CIF: $${cifUsdPerMt}\n\n`;
      }
      msg += `Pedido mín: 1 × 20' FCL\n`;
      msg += `Carga de contenedor: ${containerMt} Toneladas\n\n`;
      msg += `⚠️ Precios calculados con tasa USD/INR ${rate}.`;
    }
    return msg;
  }

  // Default English (en)
  let message = '';
  if (isStd50kg) {
    message += `📋 DCS Std 50 kg PP FOB — Live Price Quote\n`;
    message += `📅 ${dateString}\n\n`;
    message += `🌾 ${variety} — ${form}\n`;
    message += `📦 Size: ${size} | Packaging: ${packType}\n\n`;
    message += `💵 Ex-Mill: $${exMillUsdPerMt} USD/MT\n`;
    message += `🚢 FOB: $${fobUsdPerMt} USD/MT\n\n`;
    message += `FOB build-up (USD/MT):\n`;
    message += `• Ex-Mill $${exMillUsdPerMt}\n`;
    message += `• Inland Freight $${inlandUsdPerMt}\n`;
    message += `• Customs + THC $${customsUsdPerMt}\n`;
    message += `• Packaging cost $${packagingUsdPerMt}\n`;
    message += `• Total FOB $${fobUsdPerMt}\n\n`;
    message += `Min. order: 1 × 20' FCL\n`;
    message += `Container loading: ${containerMt} MT (depends on bag type)\n`;
    message += `All figures rounded to the nearest USD 5 / MT for clarity.\n\n`;
    message += `⚠️ Prices computed at USD/INR ${rate}.\n`;
    message += `Subject to FX, freight & customs fluctuation.\n`;
    message += `For binding quotes, contract terms, or counter-offers, tap Talk to Sales.`;
  } else {
    if (hasFreight) {
      message += `📋 DCS CIF — ${destName} — Live Price Quote\n`;
    } else {
      message += `📋 DCS EX MILL / FOB — Live Price Quote\n`;
    }

    message += `📅 ${dateString}\n\n`;
    message += `🌾 ${variety} — ${form}\n`;
    message += `📦 Size: ${size} | Packaging: ${packType}\n`;
    if (hasFreight) {
      message += `🌍 Destination: ${destName}\n`;
    }
    message += `\n`;

    message += `💵 Mill-Gate Price:\n`;
    message += `• ₹${inrPerMtStr} / MT (≈ ₹${roundedInrPerKg} / kg)\n`;
    message += `• $${exMillUsdPerMt} USD/MT (reference @ USD/INR ${rate})\n\n`;

    message += `🚢 FOB: $${fobUsdPerMt} USD/MT\n`;
    if (hasFreight) {
      message += `📦 CIF ${destName}: $${cifUsdPerMt} USD/MT\n`;
    }
    message += `\n`;

    message += `FOB build-up (USD/MT):\n`;
    message += `• Ex-Mill $${exMillUsdPerMt}\n`;
    message += `• Inland Freight $${inlandUsdPerMt}\n`;
    message += `• Customs + THC $${customsUsdPerMt}\n`;
    message += `• Packaging cost $${packagingUsdPerMt}\n`;
    message += `• Total FOB $${fobUsdPerMt}\n\n`;

    if (hasFreight) {
      message += `CIF build-up to ${destName} (USD/MT):\n`;
      message += `• FOB $${fobUsdPerMt}\n`;
      message += `• Sea Freight $${totalSeaAndCocUsdPerMt}\n`;
      message += `• Total CIF $${cifUsdPerMt}\n\n`;
    }

    message += `Min. order: 1 × 20' FCL\n`;
    message += `Container loading: ${containerMt} MT (depends on bag type)\n`;
    message += `All figures rounded to the nearest USD 5 / MT for clarity.\n\n`;
    message += `⚠️ Prices computed at USD/INR ${rate}`;
  }

  return message;
};

module.exports = {
  SUPPORTED_LANGUAGES,
  normalizeLang,
  translateText,
  normalizeToEnglish,
  getBotMessage,
  generateQuoteMessage
};
