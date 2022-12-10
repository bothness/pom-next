import { base } from "$app/paths";

export const locs_url = `${base}/data/places.csv`;
export const redirect_url = `${base}/data/redirects.csv`;
export const layers_url = `${base}/data/layers.json`;
export const sheets_url = `${base}/data/sheets.json`;

export const maxBounds = [[33.5, 29.0], [36.4, 33.9]];

export const statuses = {
	Remaining: {
		name: "Remaining",
		color: "#7ac943",
		selected: true,
	},
	Depopulated: {
		name: "Depopulated",
		color: "#fcee21",
		selected: true,
	},
	Appropriated: {
		name: "Depopulated & appropriated",
		color: "#f7931e",
		selected: true,
	},
	"Built over": {
		name: "Depopulated & built over",
		color: "#ff0000",
		selected: true,
	},
	Abandoned: {
		name: "Abandoned",
		color: "#0099ff",
		selected: false,
	},
	"Newly built": {
		name: "New locality",
		color: "#777777",
		selected: false,
	}
};

export const pages = [
	{
		key: "about",
		label: "About",
		icon: "info",
		id: {en: 3, ar: 7}
	},
	// {
	// 	key: "vision",
	// 	label: "Project vision",
	// 	icon: "stars",
	// 	id: {en: 5, ar: 8}
	// },
	{
		key: "get-involved",
		label: "Get involved",
		icon: "hand",
		id: {en: 6, ar: 9}
	}
];

export const texts = {
	"ar": {
		"Palestine Open Maps": "خرائط فلسطين المفتوحة",
		"Base maps": "الخرائط",
		"Overlays": "الطبقات الأخرى", 
		"Places": "البلدات",
		"Get updates": "تابعوا آخر التحديثات",
		"Download maps": "تنزيل الخرائط",
		"Home": "صفحة رئيسية",
		"About": "عن المشروع",
		"Get involved": "الانخراط",
		"Blog": "مدونة",
		"Contact": "اتصال",
		"Project vision": "رؤيتنا للمشروع",
		"Support us": "دعم المشروع",
		"Explore maps": "الخرائط",
		"Toggle split-screen": "تبديل تقسيم الشاشة",
		"Toggle 3D (experimental)": "تبديل ثلاثي الأبعاد",
		"Find a place": "ابحث عن مكان",
		"Change since 1948": "التغيير منذ 1948",
		"Population": "عدد السكان",
		"Population by group": "عدد السكان حسب المجموعة",
		"on other sites": "على مواقع أخرى",
		"Sheets from this base map": "أوراق من هذه الخريطة",
		"Sheets from other base maps": "أوراق من خرائط أخرى",
		"Palestine Remembered": "فلسطين في الذاكرة",
		"Palestine, Today": "فلسطين، اليوم",
		"Zochrot": "ذاكرات",
		"Initiated and supported by": "بدأت ودعمت من خلال",
		"No data": "لايوجد بيانات",
		"Palestinian": "فلسطيني",
		"Jewish": "يهودي",
		"Other": "آخر",
		"N/A": "غير متاح",
		"Key dates": "تواريخ مهمة",
		"Depopulated": "دمرت",
		"Remaining": "لا تزال قائمة",
		"Depopulated & appropriated": "دمرت واستولى",
		"Depopulated & built over": "دمرت وبنيت فوق",
		"Abandoned": "مهجور",
		"New locality": "مكان جديد",
		"in": "في",
		"sub-district": "قضاء",
		"Village": "قرية",
		"City": "مدينة",
		"Illegal settlement": "مستوطنة غير قانونية",
		"Mixed": "مختلطة",
		"Built over": "بنيت فوق",
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
		"Tulkarm": "طولكرم"
	}
};