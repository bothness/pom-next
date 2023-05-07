import { c as create_ssr_component, a as subscribe, s as setContext, b as add_attribute, e as escape, v as validate_component, g as getContext } from './index3-85f631df.js';
import { w as writable } from './index2-299f7fdc.js';
import { p as page } from './stores-0d2b759c.js';
import { b as base_url } from './config-d9327a31.js';
import { i as i18n } from './utils-feed60a2.js';
import { b as base } from './paths-05fee424.js';
import { I as Icon } from './Icon-ace3e365.js';

const texts = {
  "ar": {
    "العربية": "English",
    "ع": "en",
    "Arabic": "العربية",
    "Language": "اللغة",
    "Duration": "المدة الزمنية",
    "Explore, search and download historical maps and spatial data on Palestine": "استكشِف/ي وتصفّح/ي وحمّل/ي خرائط وبيانات مَكانيّة عَن فِلسطين",
    "Welcome to<br>Palestine Open Maps": "أهلًا بكم/ن في منصّة<br>خرائط فلسطين المفتوحة",
    "Explore maps": "استكشف/ي الخرائط",
    "Read More": "اقرأ/ي المزيد",
    "Find a Place": "ابحث/ي عن موقِع",
    "Explore historical maps from the 1870s onwards": "استكشف/ي خرائط تاريخيّة منذ  عام 1870 حتى يومنا هذا",
    "View data on over 2,000 places, past and present": "تصفّح/ي بيانات عن أكثر من 2000 موقع بين الماضي والحاضر",
    "Download hundreds of historical map sheets": "حمّل/يل مئات الخرائط التّاريخية",
    "View past and present maps side-by-side": "قارن/ي خرائط من الماضي والحاضر جنبًا إلى جنب",
    "View the topography of Palestine in 3D": "استكشف/ي تضاريس فلسطين ثلاثية الأبعاد",
    "Overlay historical and present day maps": "استكشف/ي التغييرات بين الماضي والحاضر من خلال تركيب الخرائط من حقبات مختلفة",
    "Initiated and supported by": "بمُبادرة ودَعم من",
    "Home": "الصّفحة الرئيسيّة",
    "Explore maps": "استكشف/ي الخرائط",
    "About": "عن خرائط فلسطين المفتوحة",
    "Get involved": "انضم/ي لنا",
    "Blog": "المُدوّنة",
    "Contact": "تواصل/ي معنا",
    "Find a place": "ابحث/ي عن موقع",
    "Base maps": "خرائط أساسيّة",
    "Aerial imagery": "تصوير جوّي",
    "Satellite imagery": "تصوير أقمار اصطناعيّة، 2022",
    "Western Palestine, 1:63,000": "فلسطين الغربيّة، 1:63000",
    "Palestine, 1:20,000": "فلسطين: 1:20000",
    "Palestine, 1:100,000": "فلسطين: 1:100000",
    "Palestine, 1:250,000": "فلسطين: 1:250000",
    "Israel, 1:250,000": "إسرائيل: 1:250000",
    "Combined Maps": "خرائط مركّبة",
    "Aerial imagery, 1940s": "تصوير جوّي، عَقد 1940",
    "Satellite imagery, 2022": "تصوير أقمار اصطناعيّة، 2022",
    "Western Palestine, 1:63,000, 1870s": "فلسطين الغربيّة، 1:63000، عَقد 1870",
    "Palestine, 1:20,000, 1940s": "فلسطين: 1:20000، عقدَي 1940/",
    "Palestine, 1:100,000, 1940s/50s": "فلسطين: 1:100000، عقدَي 1940/50",
    "Palestine, 1:250,000, 1946": "فلسطين: 1:250000، 1946",
    "Israel, 1:250,000, 1951": "إسرائيل: 1:250000، 1951",
    "Combined Maps, 1930s/40s": "خرائط مركّبة، عقدَي 1930/40",
    "Overlays": "الطبقات",
    "Show overlays": "عَرض الطَّبَقات",
    "Vector overlay, 1940s": "طَبقات مُتّجهة، عَقد 1940",
    "Vector overlay, 2020s": "طَبقات مُتّجهة، عقد 2020",
    "Buildings": "منشآت عمرانية",
    "Roads/rail": "طُرق/سِكَك",
    "Place names": "أسماء الأماكن",
    "Places": "أماكن",
    "Show places": "عَرض الأماكن",
    "Remaining": "صامدة",
    "Depopulated": "مهجّرة",
    "Depopulated & appropriated": "مهجّرة ومُصادرة",
    "Depopulated & built over": "مهجّرة وبُني فَوقها",
    "Abandoned": "مهجورة",
    "New locality": "مَنطقة جَديدة",
    "Download maps": "تحميل الخرائط",
    "Click anywhere on the map to see sheets available to download covering that location.": "انقر/ي على أي نُقطة في الخريطة لعَرض الشّرائح المُتاحة للتّحميل حَول الموقِع",
    "Toggle split-screen": "تَفعيل الشّاشة المُزدوجة",
    "Toggle 3D (experimental)": "تفعيل الرؤية ثلاثية الأبعاد",
    "Home": "الصّفحة الرئيسيّة",
    "Explore maps": "استكشف/ي الخرائط",
    "About": "عن خرائط فلسطين المفتوحة",
    "Get involved": "انضم/ي لنا",
    "Blog": "المدوّنة",
    "Contact": "تواصل/ي معنا",
    "Get involved": "انضم/ي لنا",
    "Initiated and supported by Visualising Palestine": "بمُبادرة ودَعم من Visualising Palestine",
    "Palestine Open Maps": "خَرائط فلسطين المَفتوحة",
    "Palestine Open Maps community": "مُجتمع خَرائط فلسطين المَفتوحة",
    "Base maps": "الخرائط الأساسيّة",
    "Overlays": "طَبقات",
    "Places": "أماكن",
    "Get updates": "احصل/ي على  أخبار المشروع",
    "Download maps": "تحميل الخرائط",
    "Home": "الصّفحة الرئيسيّة",
    "About": "عن خرائط فلسطين المفتوحة",
    "Get involved": "انضم/ي لنا",
    "Blog": "المدوّنة",
    "Contact": "تَواصل/ي معنا",
    "Project vision": "رؤية المشروع",
    "Support us": "إدعم/ينا",
    "Explore maps": "استكشف/ي الخرائط",
    "Toggle split-screen": "تَفعيل الشّاشة المُزدوجة",
    "Toggle 3D (experimental)": "تفعيل الرؤية ثلاثية الأبعاد",
    "Toggle places": "عَرض الأماكن",
    "Toggle overlays": "عَرض الطّبقات",
    "Show layer information": "رؤية معلومات عن الطّبقة",
    "Find a place": "ابحث/ي عن موقع",
    "Aerial imagery, 1940s": "تصوير جوّي، عَقد 1940",
    "Satellite imagery, 2022": "تصوير أقمار اصطناعيّة، 2022",
    "Western Palestine, 1:63,000, 1870s": "فلسطين الغربيّة، 1:63000، عَقد 1870",
    "Palestine, 1:20,000, 1940s": "فلسطين: 1:20000، عَقد 1940",
    "Palestine, 1:100,000, 1940s/50s": "فلسطين: 1:100000، عقدَي 1940/50",
    "Palestine, 1:250,000, 1946": "فلسطين: 1:250000، 1946",
    "Israel, 1:250,000, 1951": "إسرائيل: 1:250000، 1951",
    "Combined Maps, 1930s/40s": "خرائط مركّبة، عقدَي 1930/40",
    "Vector overlay, 1940s": "طَبقات مُتّجهة، عَقد 1940",
    "Vector overlay, 2020s": "طَبقات مُتّجهة، عقد 2020",
    "Information": "معلومات",
    "Description": "وَصف",
    "Survey of Palestine": "خرائط مَسح فلسطين",
    "Palestine Exploration Fund": "خرائط صندوق استكشاف فلسطين",
    "Survey of Israel": "خرائط مَسح إسرائيل",
    "British military": "خرائط الجيش البريطانيّ",
    "Royal Air Force": "السلاح الجوي الملكي",
    "OpenMapTiles / OpenStreetMap Contributors": "مُساهمات من OpenMapTiles/OpenStreetMap",
    "© ERSI World Imagery": "© معهد أبحاث النظم البيئية",
    "Scale": "المِقياس",
    "Date": "التّاريخ",
    "Dates": "التّواريخ",
    "No. of map sheets": "عدد شرائح الخرائط",
    "Download": "تحميل",
    "Show places": "عرض الأماكن",
    "Show overlays": "عرض الطّبقات",
    "Buildings": "منشآت عمرانية",
    "Roads/rail": "طُرق/سِكَك",
    "Place names": "أسماء الأماكن",
    "Click anywhere on the map to see sheets available to download covering that location": "انقر/ي على أي نقطة في الخريطة لعَرض الشّرائح المُتاحة للتّحميل حول الموقِع",
    "Close downloads": "إغلاق التّحميلات",
    "Change since 1948": "التغيّير منذ 1948",
    "Population": "التعداد السّكاني",
    "Population by group": "التعداد السّكاني حسب الجماعات",
    "on other sites": "في مواقع أخرى",
    "Sheets from this base map": "شرائح من هذه الخريطة الأساسيّة",
    "Sheets from other base maps": "شرائح من خرائط أساسيّة أخرى",
    "Palestine Remembered": "مشروع فلسطين في الذّاكرة",
    "Palestine, Today": "فلسطين، اليوم",
    "Encyclopedia of the Palestine Question": "الموسوعة للقضية الفلسطينية",
    "Zochrot": "مؤسسة زوخروت",
    "Initiated and supported by Visualising Palestine": "بمُبادرة ودَعم من Visualising Palestine",
    "No data": "لا توجد بيانات",
    "Palestinian": "فلسطينيّ/ة",
    "Jewish": "يهوديّ/ة",
    "Other": "غير ذلك",
    "N/A": "لا يوجد",
    "Key dates": "تواريخ مهمة",
    "Depopulated": "مهجّرة",
    "Remaining": "باقَية",
    "Depopulated & appropriated": "مهجّرة ومُصادرة",
    "Depopulated & built over": "مهجّرة وبُني فَوقها",
    "Abandoned": "مهجورة",
    "New locality": "مَنطقة جَديدة",
    "in": "في",
    "sub-district": "قَضاء",
    "Village": "قرية",
    "City": "مدينة",
    "Illegal settlement": "مستوطنة غير شرعيّة",
    "Mixed": "مختلطة",
    "Built over": "بُني فوقها",
    "Acre": "عكا",
    "Jaffa": "يافا",
    "Beersheba": "بئر السبع",
    "Beisan": "بيسان",
    "Haifa": "حيفا",
    "Gaza": "غزة",
    "Hebron": "الخليل",
    "Jenin": "جنين",
    "Jerusalem": "القدس",
    "Nablus": "نابلس",
    "Nazareth": "الناصِرة",
    "Ramallah": "رام الله",
    "Ramle": "الرملة",
    "Safad": "صفد",
    "Tiberias": "طبريه",
    "Tulkarem": "طولكرم",
    "Welcome to Palestine Open Maps": "أهلًا بكم/ن في خَرائط فِلسطين المَفتوحة",
    "Explore, search and download historical maps and spatial data on Palestine": "استكشِف/ي وتصفّح/ي وحمّل/ي خرائط وبيانات مَكانيّة عَن فلسطين",
    "Read more": "اقرأ/ي المزيد",
    "Download hundreds of historical map sheets": "حمّل/ي المئات من الخرائط التّاريخية",
    "View data on over 2,000 places, past and present": "تصفّح/ي بيانات عن أكثر من 2000 موقع بين الماضي والحاضر",
    "Explore historical maps from the 1870s onwards": "استكشف/ي خرائط تاريخيّة منذ القَرن ١٩",
    "Overlay historical and present day maps": "ركّبي خرائط لنفس الموقع من حُقبات مختلفة",
    "View the topography of Palestine in 3D": "تجّول/ي عبر تضاريس فلسطين من خلال الرّؤية ثلاثيّة الأبعاد",
    "View past and present maps side-by-side": "قارن/ي خرائط من الماضي والحاضر جنبًا إلى جنب",
    "A high resolution basemap of satellite and aerial imagery compiled by ESRI. The imagery data comes from a variety of providers, including open data from NASA, USGS, and others. It is color-corrected and blended together into a single raster tileset.": "خريطة أساسيّة ذات دقّة عالية تحتوي على تَصوير جوي وتَصوير قمر اصطناعيّ قامت بتجميعه معهد أبحاث النظم البيئية. تم الحُصول على البيانات الصوريّة من عدّة مصادر منها: البيانات المفتوحة لدى الإدارة الوطنية للمِلاحة الجويّة والفضاء (ناسا) وهيئة المَسح الجُيولوجي الأمريكيّة وغيرها. تم تصحيح ألوان جميع الصوّر ودَمجها ضمن مجموعة نقطيّة واحدة.",
    "A layer compiled from black and white aerial photographs captured by the British military in the 1940s. It is color-corrected and merged together into a single raster tileset.": "طَبقة مُركّبة من الصّور الجويّة بالأبيض والأسود التي التقطها الجيش البريطانيّ في الأربعينيات. تم تصحيح الألوان ودمجها معًا في مجموعة نقطيّة واحدة.",
    'This series of maps was commissioned by the Palestine Exploration Fund, a British society founded and financed by a group of Biblical archaeologists and clergymen "for the purpose of investigating the Archaeology, Geography, manners, customs and culture, Geology and Natural History of the Holy Land." The maps capture much of the territory that would later fall under the British Mandate of Palestine, as well as parts of present day Lebanon, Syria and Jordan. These maps are of particular interest today, since they offer the most comprehensive record of Palestine immediately before the Zionist colonization.': 'صَدرت هذه السلسلة من الخرائط بتَكليف من صُندوق استكشاف فلسطين، وهي جمعية بريطانيّة أسسها ويُموّلها مجموعة من عُلماء الآثار ورجال الدّين التوراتيين، "لغَرض استكشاف الآثار والجغرافيا والعادات والتّقاليد والثّقافة والجيولوجيا والتّاريخ الطبيعيّ للأراضي المقدّسة". تُغطي الخَرائط جزءًا كبيرًا من الأراضي التي وَقعت تحت الانتداب البريطانيّ على فلسطين فيما بعد، وتمتدّ إلى أجزاء من لبنان وسوريا والأردن حسب الحُدود المُعترف بها اليَوم. تَحظى هذه الخرائط بأهميّة خاصة اليوم، حيث توفّر السّجل الأشمل لفلسطين قَبل الاستعمار الصّهيوني مُباشرة.',
    "This uniquely detailed series of maps captures a large portion of mandate Palestine immediately before the Nakba. As a 'topo-cadastral' series, the sheets combine cadastral information--boundaries and names/numbers of land ownership parcels--with topographic information including contours, vegetation and human geography. There are sheets in this set dated from the early 1930s with updates up until the end of the British Mandate period, and a handful with Israeli overprints up to 1950.": 'تغطّي هذه السّلسلة من الخرائط شديدة التّفصيل جزءًا كبيرًا من مساحة فلسطين الانتدابيّة ما قَبل النّكبة مُباشرة. بصفتها سلسلة "طوبو-مساحيّة" تجمع الشّرائح ما بين المعلومات المساحيّة (مثل الحدود والأسماء وتَرقيم قطع أراضي المُلكيّة) مع البيانات الطبوغرافية مِثل الخُطوط الكنتوريّة والغطاء النباتي والجغرافيا البشريّة. تحتوي هذه المجموعة على خرائط تعود إلى أوائل الثلاثينيّات مع تَحديثات حتى نهاية الانتداب البريطاني، بالإضافة إلى تَعديلات إسرائيليّة حتى عام 1950.',
    "This series of maps offers a unique record of the rapid transformation of the territory between the end of the 1940s and the end of the 1950s. The sheets were originally drawn by the Survey of Palestine in the final years of the British mandate period, and then overprinted with purple amendments by the nascent Survey of Israel a decade later, recording the destruction of hundreds of Palestinian communities (each labelled with the Hebrew word הרוס, meaning 'destroyed'), and the foundation of as many new Jewish settlements on their lands. The Israeli revisions also saw the addition of the 1949 Armistice lines (or 'green line') demarcating the West Bank and Gaza Strip.": 'توثّق هذه السلسلة بشكل فريد التّغيير السريع الّذي طرأ على المَنطقة مَع نهاية الأربعينات وحتى نهاية الخمسينات. رُسمت الخرائط الأصلية من قِبل مشروع مَسح فلسطين في السّنوات الأخيرة من الانتداب البريطاني على فلسطين. بعد عشر سنوات، أجريَت عليها تعديلات تظهر باللّون البنفسجيّ من قبل مشروع مَسح إسرائيل الّذي حلّ محل المشروع آنف الذّكر. توثّق التّعديلات الدّمار الّذي لَحِق بالقُرى الفلسطينيّة (حيث تعلو تلك القُرى كلمة הרוס بالعبريّة والّتي تعني "مدمّرة"). كما توثّق إقامة أكبر عدد ممكن من المُستوطنات اليهودية على أنقاضها. كما شملت التّعديلات الإسرائيلية على خُطوط وقف إطلاق النّار (أو الخط الأخضر) كحدود للضّفة الغربية وقطاع غزّة.',
    'This set of 3 maps captures Palestine in its entirety just two years before the end of the British mandate period and the Palestinian Nakba. It is one of the few publicly available maps that captures the southern Beersheba district of the country in any detail during this period. However, though the 1945 Village Statistics record over 40,000 mostly Palestinian Bedouin residents of the district—described in the survey itself as a "gross underestimation" of the actual population—very few of their formal or informal settlements are marked on the map.': 'تصوّر هذه المجموعة المكوّنة من 3 خرائط فلسطين كاملةً قبل عاميَن فقط من نهاية الانتداب البريطاني ووقوع النّكبة. تعدّ هذه المجموعة أحد أهم الخرائط القَليلة المُتاحة لمنطقة بئر السّبع الجنوبيّة في تلك الفترة. بينما تسجّل إحصائيات القرى عام 1945 أكثر من 40000 بدويّا فلسطينيّا مُقيما في المنطقة، يؤكد الإحصاء نفسه أن ذلك الرّقم ليس إلا "تقديرًا أقل من الواقع بكثير" – وبالتّالي يظهر عدد محدود جدًا من أماكن عيشهم الرّسمية أو غير الرّسمية على الخريطة.',
    "This set of 3 maps, titled 'Israel', was produced just 5 years after a near identical-looking British map in the same scale and format titled 'Palestine'. The physical geography is drawn from the same British surveys, but the major difference is the disappearance of hundreds of Palestinian communities and the appearance of a slew of new Jewish settlements in their place. The map was also among the first to be printed with the 1949 Armistice lines (or 'green line') demarcating the West Bank and Gaza Strip.": 'تم إنتاج هذه المجموعة المكوّنة من 3 خرائط تحت عنوان "إسرائيل" بعد 5 سنوات فقط من إنتاج خريطة بريطانيّة شبه مُطابقة بنفس المقياس والشّكل تحمِل عنوان "فلسطين". تم الاعتماد على الاستطلاعات البريطانيّة ذاتها لرسم الجغرافيا الطبيعية، إلّا أن الاختلاف الرئيسيّ كان اختفاء مئات التّجمعات الفلسطينية وظهور عَدد كبير من المُستوطنات اليهودية الجَديدة مكانها. كما تعدّ الخريطة إحدى أولى الخرائط الّتي شملت على خطوط الهُدنة لعام 1949 (أو "الخط الأخضر") كحدود للضّفة الغربية وقِطاع غزة.',
    "This map layer displays different Survey of Palestine maps, depending on the zoom level. It includes all of the 1940s maps for 1:250,000, 1:100,000 and 1:20,000 scales, and includes more detailed maps from the 1930s and 1940s for the larger cities, including Jerusalem, Haifa and Jaffa (scales vary depending on the city, from 1:10,000 up to 1:1,000).": "تعرض هذه الطبقة خرائط أخرى من خرائط مسح فلسطين بعدة مقاييس، بما في ذلك جميع خرائط الأربعينيات بمقياس 1: 25.000 و 1: 100.00 و 1: 20.000. كما تحتوي على خرائط أكثر تفصيلاً من ثلاثينيات وأربعينيات القرن العشرين في المُدن الكُبرى، بما في ذلك القدس وحيفا ويافا (تختلف المقاييس حسب المدينة، من 1: 10000 حتى 1: 1000).",
    "Present day geographic features derived from OpenStreetMap, Wikidata and Natural Earth. Vector tiles generated using OpenMapTiles tools.": "تم الاعتماد على عدة مصادر في رسم الخصائص الجغرافية المعاصرة مثل: OpenStreetMap, Wikidata, Natural Earth. وتم إعداد الرّسوم المتّجهة من خلال أداة OpenMapTiles.",
    'Crowd-sourced digitisation of "Palestine 1:20,000" Survey of Palestine map series from the 1940s. Vector tiles generated using OpenMapTiles tools.': 'تمت رقمنة خريطة "Palestine 1:20000" ضمن خرائط مَسح فلسطين لعقد 1940 بدعم من مصادر جماهيرية . تم إعداد الرّسوم المتّجهة من خلال أداة OpenMapTiles.',
    "We use Google Analytics to understand how people use Palestine Open Maps. Is this okay with you?": "نستخدم جوجل أناليتكس لفهم كيفية استخدام الناس لخرائط فلسطين المفتوحة. هل هذا مقبول بالنسبة لك؟",
    "Accept": "مقبول",
    "Reject": "مرفوض"
  }
};
const css$2 = {
  code: "div.cookie-banner.svelte-17j1a6x.svelte-17j1a6x{position:fixed;z-index:100;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center;bottom:0;left:0;right:0;background-color:rgba(255,255,255,0.9);border-top:1px solid black;padding:6px 16px 9px}.btn.svelte-17j1a6x.svelte-17j1a6x{background-color:white;color:#333;border:2px solid #333;height:40px;margin:0;padding:0 12px;font-weight:bold;text-decoration:none;white-space:nowrap}.btn.svelte-17j1a6x+.btn.svelte-17j1a6x{margin-block-start:4px}.btn-primary.svelte-17j1a6x.svelte-17j1a6x{background-color:#333;color:white}.btn.svelte-17j1a6x.svelte-17j1a6x:hover{background-color:black;border-color:black;color:white}",
  map: null
};
const AnalyticsBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_t;
  getContext("lang");
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-kcnn41_START -->${``}<!-- HEAD_svelte-kcnn41_END -->`, ""}

${``}`;
});
const css$1 = {
  code: "header.svelte-a43yuv.svelte-a43yuv{position:fixed;display:flex;flex-direction:row;left:0;right:0;top:0;height:50px;background-color:#333;z-index:2}.title.svelte-a43yuv.svelte-a43yuv{box-sizing:border-box;width:100%;display:flex;align-items:center;height:50px;padding:0 15px;font-weight:bold;font-size:1.1em}.title.svelte-a43yuv>a.svelte-a43yuv{color:white;text-decoration:none}.menu-toggle.svelte-a43yuv.svelte-a43yuv,.lang-toggle.svelte-a43yuv.svelte-a43yuv{display:inline-flex;justify-content:center;align-items:center;width:50px;min-width:50px;height:50px;background-color:#333;color:white;border:none;border-right:1px solid #777;border-radius:0;font-size:1.5em;cursor:pointer;text-decoration:none}.lang-toggle.svelte-a43yuv.svelte-a43yuv{font-size:1em;border:0}.menu-toggle.svelte-a43yuv.svelte-a43yuv:hover,.lang-toggle.svelte-a43yuv.svelte-a43yuv:hover{background-color:#444}.menu-toggle-rtl.svelte-a43yuv.svelte-a43yuv{left:auto !important;right:100%;border-right:none !important;border-left:1px solid #777}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rtl, $$unsubscribe_rtl;
  let $menu_active, $$unsubscribe_menu_active;
  let $lang, $$unsubscribe_lang;
  let $t, $$unsubscribe_t;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const menu_active = getContext("menu_active");
  $$unsubscribe_menu_active = subscribe(menu_active, (value) => $menu_active = value);
  const lang = getContext("lang");
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  const rtl = getContext("rtl");
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  const t = getContext("t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$result.css.add(css$1);
  $$unsubscribe_rtl();
  $$unsubscribe_menu_active();
  $$unsubscribe_lang();
  $$unsubscribe_t();
  $$unsubscribe_page();
  return `<header class="svelte-a43yuv"><button class="${["menu-toggle svelte-a43yuv", $rtl ? "menu-toggle-rtl" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, { type: $menu_active ? "close" : "menu" }, {}, {})}</button>
	<div class="title svelte-a43yuv"><a href="${escape(base, true) + "/" + escape($lang, true) + "/"}" class="svelte-a43yuv">${escape($t("Palestine Open Maps"))}</a></div>
	<a class="${["lang-toggle svelte-a43yuv", $rtl ? "lang-toggle-rtl" : ""].join(" ").trim()}"${add_attribute("title", $t("العربية"), 0)}${add_attribute("href", String($page.url).replace(...$lang === "en" ? ["en", "ar"] : ["ar", "en"]), 0)}>${escape($t("ع"))}</a>
</header>`;
});
const css = {
  code: "body{margin:0;padding:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lang, $$unsubscribe_lang;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $rtl, $$unsubscribe_rtl;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let lang = writable();
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  setContext("lang", lang);
  let rtl = writable();
  $$unsubscribe_rtl = subscribe(rtl, (value) => $rtl = value);
  setContext("rtl", rtl);
  let t = writable();
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  setContext("t", t);
  let menu_active = writable(false);
  setContext("menu_active", menu_active);
  $$result.css.add(css);
  {
    lang.set($page.params.lang ? $page.params.lang : "en");
  }
  {
    rtl.set($lang == "ar");
  }
  {
    t.set((key) => i18n(key, texts, $lang));
  }
  $$unsubscribe_lang();
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_rtl();
  return `${$$result.head += `<!-- HEAD_svelte-1inu9hf_START --><meta name="description"${add_attribute("content", $t("Explore, search and download historical maps and spatial data on Palestine"), 0)}><meta property="og:description"${add_attribute("content", $t("Explore, search and download historical maps and spatial data on Palestine"), 0)}><meta property="og:type" content="website"><link rel="canonical" href="${escape(base_url, true) + escape($page.url.pathname, true)}"><meta property="og:url" content="${escape(base_url, true) + escape($page.url.pathname, true)}"><meta name="twitter:card" content="summary_large_image">${$rtl ? `<style>html {
			direction: rtl;
		}
	</style>` : ``}<!-- HEAD_svelte-1inu9hf_END -->`, ""}

${validate_component(AnalyticsBanner, "AnalyticsBanner").$$render($$result, {}, {}, {})}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-40a42e3b.js.map
