import {
  category,
  categorie1,
  categorie2,
  categorie3,
  categorie4,
  categorie5,
  categorie6,
  categorie7,
  categorie8,
  categorie9,
  prodcut8,
  product12,
  product13,
  product14,
  mada,
  visaImg,
  paypal,
  bank,
  pay,
  tabby,
  visa1,
  visa2,
  lg,
  samsung,
  realme,
  infinix,
  apple,
  hwawi,
  honor,
  nokia,
  oppo,
  appleLogo,
  lenevoLogo,
  hpLogo,
  lgLogo,
  microsoftLogo,
  samsungLogo,
  sonyLogo2,
  sonyLogo,
  asusLogo,
  freebuds,
  watch,
} from "../assets/index";
import {
  ProfileIcon,
  OrderIcon,
  LocationIcon,
  WalletIcon,
  StarIcon,
  SocialIcon,
} from "../components/icons";

// START NAVBAR COMPONENT LINKS
export const navLinks = [
  {
    id: "home",
    title: "ماركات مشهورة",
    link: "/product_category/brands",
    icon: category,
    submenu: {
      brands: ["Samsung", "Apple", "Huawei", "Oppo"],
      categories: ["كل الموبايلات", "التابلت", "اكسسوارات"],
    },
  },
  {
    id: "about",
    link: "/product_category/mobile_tablet",
    title: "موبايل و تابلت",
    submenu: {
      brands: ["Samsung", "Apple", "Huawei", "Oppo"],
      categories: ["كل الموبايلات", "التابلت", "اكسسوارات"],
    },
  },
  {
    id: "services",
    link: "/product_category/smart_tv",
    title: "تلفزيونات",
    submenu: {
      brands: ["Samsung", "Apple", "Huawei", "Oppo"],
      categories: ["كل الموبايلات", "التابلت", "اكسسوارات"],
    },
  },
  {
    id: "best-doctors",
    link: "/product_category/smart_watch",
    title: "ساعات",
    submenu: {
      brands: ["Samsung", "Apple", "Huawei", "Oppo"],
      categories: ["كل الموبايلات", "التابلت", "اكسسوارات"],
    },
  },
  {
    id: "blog",
    link: "/product_category/laptop",
    title: "لاب توب",
  },
  {
    id: "contact",
    link: "/product_category/home_appliances",
    title: "مستلزمات المنزل",
  },
  {
    id: "contact",
    link: "/product_category/kitchen",
    title: " المطبخ",
  },
  {
    id: "contact",
    link: "/product_category/furniture",
    title: "الأثاث",
  },
  {
    id: "contact",
    link: "/product_category/sports_equipment",
    title: "أجهزة رياضية",
  },
];
// END NAVBAR COMPONENT LINKS

export const footerNavLinks = [
  {
    id: "info",
    title: "معلومات عنا",
  },
  {
    id: "delivery",
    title: " معلومات التوصيل",
  },
  {
    id: "services",
    title: "شروط وأحكام الشراء",
  },
  {
    id: "best-doctors",
    title: "شروط وأحكام الموقع",
  },
  {
    id: "blog",
    title: "سياسة الخصوصية",
  },
  {
    id: "contact",
    title: "الإرجاع والاستبدال",
  },
];

export const footerPayments = [
  {
    id: "mada",
    img: mada,
  },
  {
    id: "visa",
    img: visaImg,
  },
  {
    id: "paypal",
    img: paypal,
  },
  {
    id: "bank",
    img: bank,
  },
  {
    id: "pay",
    img: pay,
  },
  {
    id: "tabby",
    img: tabby,
  },
  {
    id: "visa1",
    img: visa1,
  },
  {
    id: "visa2",
    img: visa2,
  },
];

export const settingsBar = [
  {
    id: "bar1",
    icon: ProfileIcon,
    href: "/profile?tab=account",
    title: "حسابي",
  },
  {
    id: "bar2",
    icon: OrderIcon,
    href: "/profile?tab=orders",
    title: "طلباتي",
  },
  {
    id: "bar3",
    icon: LocationIcon,
    href: "/profile?tab=x",
    title: "دليل العناوين",
  },
  {
    id: "bar4",
    icon: WalletIcon,
    href: "/profile?tab=x",
    title: "بطاقات الدفع",
  },
  {
    id: "bar5",
    icon: StarIcon,
    href: "/profile?tab=x",
    title: "تقييمات المنتج الخاص بي",
  },
  {
    id: "bar6",
    icon: SocialIcon,
    href: "/profile?tab=x",
    title: "حسابات السوشيال ميديا",
  },
];

export const NewProductss = [
  {
    id: "product1",
    img: product14,
    title: "حسابي",
  },
  {
    id: "product2",
    img: prodcut8,
    title: "طلباتي",
  },
  {
    id: "product3",
    img: product13,
    title: "دليل العناوين",
  },
  {
    id: "product4",
    img: product12,
    title: "بطاقات الدفع",
  },
];

// START BRANDS LINKS
export const brandsLinks = [
  {
    id: "brand1",
    link: "/brands/lg",
    image: lg,
  },
  {
    id: "brand2",
    link: "/brands/samsung",
    image: samsung,
  },
  {
    id: "brand3",
    link: "/brands/realme",
    image: realme,
  },
  {
    id: "brand4",
    link: "/brands/infinix",
    image: infinix,
  },
  {
    id: "brand5",
    link: "/brands/apple",
    image: apple,
  },
  {
    id: "brand6",
    link: "/brands/hwawi",
    image: hwawi,
  },
  {
    id: "brand7",
    link: "/brands/honor",
    image: honor,
  },
  {
    id: "brand8",
    link: "/brands/nokia",
    image: nokia,
  },
  {
    id: "brand9",
    link: "/brands/oppo",
    image: oppo,
  },
];
// END BRANDS LINKS

// START CATEGORIES BRAND IMAGES
export const CategoriesBrands = [
  {
    id: "brand1",
    link: "/brands/lenovo",
    image: lenevoLogo,
  },
  {
    id: "brand2",
    link: "/brands/apple",
    image: appleLogo,
  },
  {
    id: "brand3",
    link: "/brands/hp",
    image: hpLogo,
  },
  {
    id: "brand4",
    link: "/brands/asus",
    image: asusLogo,
  },
  {
    id: "brand5",
    link: "/brands/lg",
    image: lgLogo,
  },
  {
    id: "brand6",
    link: "/brands/microsoft",
    image: microsoftLogo,
  },
  {
    id: "brand7",
    link: "/brands/samsung",
    image: samsungLogo,
  },
  {
    id: "brand8",
    link: "/brands/sony",
    image: sonyLogo2,
  },
  {
    id: "brand9",
    link: "/brands/sony",
    image: sonyLogo,
  },
];
// END CATEGORIES BRAND IMAGES

// START CATEGORIES DATA
export const categoriesData = [
  {
    id: "categorie1",
    link: "/product_category/best_discounts",
    img: categorie1,
    label: "الخصومات",
    size: "w-[72px] h-[72px]",
  },
  {
    id: "categorie2",
    link: "/product_category/mobile_tablet",
    img: categorie2,
    label: "موبايل و تابلت",
    size: "w-[76px] h-[76px]",
  },
  {
    id: "categorie3",
    link: "/product_category/smart_tv",
    img: categorie3,
    label: "تلفزيونات",
    size: "w-[82px] h-[54px]",
  },
  {
    id: "categorie4",
    link: "/product_category/smart_watch",
    img: categorie4,
    label: "ساعات",
    size: "w-[73px] h-[73px]",
  },
  {
    id: "categorie5",
    link: "/product_category/laptop",
    img: categorie5,
    label: "لاب توب",
    size: "w-[83px] h-[62px]",
  },
  {
    id: "categorie6",
    link: "/product_category/home_appliances",
    img: categorie6,
    label: "مستلزمات المنزل",
    size: "w-[78px] h-[78px]",
  },
  {
    id: "categorie7",
    link: "/product_category/kitchen",
    img: categorie7,
    label: "المطبخ",
    size: "w-[98px] h-[62px]",
  },
  {
    id: "categorie8",
    link: "/product_category/furniture",
    img: categorie8,
    label: "الأثاث",
    size: "w-[89px] h-[84px]",
  },
  {
    id: "categorie9",
    link: "/product_category/sports_equipment",
    img: categorie9,
    label: "اجهزة رياضية",
    size: "w-[78px] h-[77px]",
  },
];
// END CATEGORIES DATA

// START PROMOS DATA
export const Promos = [
  {
    id: "promo1",
    title: "HUAWEI FreeBuds Pro",
    img: freebuds,
    bgImg: "/images/gradient1.png",
    desc: "تقنية إلغاء الضجيج النشط الهجينة تقنية إلغاء الضجيج النشط (ANC) الديناميكية والذكية",
    link: "/product/689e5e25db89f037bc5ff006",
  },
  {
    id: "promo2",
    title: "HUAWEI WATCH Buds",
    img: watch,
    bgImg: "/images/gradient2.png",
    desc: "سماعات وساعة في آن واحد تقنية AI لإلغاء ضجيج المكالمات و إدارة احترافية للصحة",
    link: "/product/689e52de0d8ed495bdcc49f8",
  },
];
// START PROMOS DATA
