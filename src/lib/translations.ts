export type Language = "en" | "ko" | "zh";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  ko: "한국어",
  zh: "中文",
};

const en = {
  // Nav
  "nav.home": "Home",
  "nav.products": "Products",
  "nav.booking": "Booking",
  "nav.about": "About",
  "nav.contact": "Contact",

  // Hero
  "hero.tagline": "LA's #1 Badminton Pro Shop",
  "hero.subtitle": "Premium rackets, expert stringing, and personalized service for every player.",
  "hero.cta.products": "Shop Products",
  "hero.cta.booking": "Book Stringing",

  // About blurb
  "home.about.title": "Why Badminton Is Life?",
  "home.about.text": "Founded by Jake Lee, a passionate badminton player and certified stringer with over 15 years of experience. We offer competitive pricing, expert gear recommendations, and the fastest stringing turnaround in LA.",

  // Store info
  "home.info.title": "Visit Us",
  "home.info.hours": "Store Hours",
  "home.info.hours.weekday": "Mon–Fri: 11:00 AM – 7:00 PM",
  "home.info.hours.weekend": "Sat–Sun: 10:00 AM – 6:00 PM",
  "home.info.address": "Address",
  "home.info.phone": "Phone",
  "home.info.email": "Email",

  // Reviews
  "home.reviews.title": "What Our Customers Say",

  // Products
  "products.title": "Rackets & Strings Catalog",
  "products.filter.category": "Category",
  "products.filter.brand": "Brand",
  "products.filter.price": "Price Range",
  "products.filter.all": "All",
  "products.category.rackets": "Rackets",
  "products.category.strings": "Strings",
  "products.price.under50": "Under $50",
  "products.price.50to150": "$50–$150",
  "products.price.150to300": "$150–$300",
  "products.price.300plus": "$300+",
  "products.contact": "Contact to Purchase",
  "products.description.placeholder": "[Product description — OWNER: Replace with actual description]",

  // Booking
  "booking.title": "Stringing Service Booking",
  "booking.intro": "We offer professional badminton and tennis racket stringing with fast turnaround. Book your appointment below.",
  "booking.name": "Name",
  "booking.phone": "Phone Number",
  "booking.date": "Preferred Date",
  "booking.service": "Type of Service",
  "booking.service.badminton": "Badminton Stringing",
  "booking.service.tennis": "Tennis Stringing",
  "booking.racket": "Racket Model (optional)",
  "booking.tension": "Preferred String Tension (optional)",
  "booking.notes": "Notes",
  "booking.submit": "Submit Booking",
  "booking.price.note": "[OWNER: Current stringing price — fill in here]",

  // About
  "about.title": "About Badminton Is Life",
  "about.story": "Badminton Is Life was founded with a simple mission: to bring world-class badminton equipment and services to Los Angeles. Owner Jake Lee (Mr. Lee) has been deeply immersed in the badminton community for over 15 years — as a competitive player, coach, and certified racket technician.",
  "about.highlights.title": "Why Choose Us",
  "about.highlight.pricing": "Competitive Pricing",
  "about.highlight.pricing.desc": "We price-match and offer the best deals on premium brands like Yonex, Victor, and Li-Ning.",
  "about.highlight.stringing": "Fast Stringing Turnaround",
  "about.highlight.stringing.desc": "Most rackets strung and ready within 24 hours — same-day service available.",
  "about.highlight.recommendations": "Personalized Recommendations",
  "about.highlight.recommendations.desc": "Mr. Lee personally helps every customer find the perfect racket and string setup for their playing style.",
  "about.team.placeholder": "[OWNER: Add team/owner photo here]",

  // Contact
  "contact.title": "Contact Us",
  "contact.info.title": "Get In Touch",
  "contact.social": "Follow Us",
  "contact.facebook": "Facebook",

  // Footer
  "footer.rights": "© 2025 Badminton Is Life. All rights reserved.",
};

const ko: Record<string, string> = {
  "nav.home": "홈",
  "nav.products": "제품",
  "nav.booking": "예약",
  "nav.about": "소개",
  "nav.contact": "연락처",

  "hero.tagline": "LA 최고의 배드민턴 전문 매장",
  "hero.subtitle": "프리미엄 라켓, 전문 스트링, 맞춤형 서비스를 모든 선수에게 제공합니다.",
  "hero.cta.products": "제품 보기",
  "hero.cta.booking": "스트링 예약",

  "home.about.title": "왜 Badminton Is Life인가?",
  "home.about.text": "15년 이상의 경력을 가진 열정적인 배드민턴 선수이자 공인 스트링거인 Jake Lee가 설립했습니다. 경쟁력 있는 가격, 전문 장비 추천, LA에서 가장 빠른 스트링 서비스를 제공합니다.",

  "home.info.title": "매장 방문",
  "home.info.hours": "영업 시간",
  "home.info.hours.weekday": "월–금: 오전 11:00 – 오후 7:00",
  "home.info.hours.weekend": "토–일: 오전 10:00 – 오후 6:00",
  "home.info.address": "주소",
  "home.info.phone": "전화",
  "home.info.email": "이메일",

  "home.reviews.title": "고객 리뷰",

  "products.title": "라켓 & 스트링 카탈로그",
  "products.filter.category": "카테고리",
  "products.filter.brand": "브랜드",
  "products.filter.price": "가격대",
  "products.filter.all": "전체",
  "products.category.rackets": "라켓",
  "products.category.strings": "스트링",
  "products.price.under50": "$50 이하",
  "products.price.50to150": "$50–$150",
  "products.price.150to300": "$150–$300",
  "products.price.300plus": "$300 이상",
  "products.contact": "구매 문의",
  "products.description.placeholder": "[제품 설명 — OWNER: 실제 설명으로 교체하세요]",

  "booking.title": "스트링 서비스 예약",
  "booking.intro": "배드민턴 및 테니스 라켓 전문 스트링 서비스를 제공합니다. 아래에서 예약하세요.",
  "booking.name": "이름",
  "booking.phone": "전화번호",
  "booking.date": "희망 날짜",
  "booking.service": "서비스 종류",
  "booking.service.badminton": "배드민턴 스트링",
  "booking.service.tennis": "테니스 스트링",
  "booking.racket": "라켓 모델 (선택)",
  "booking.tension": "희망 텐션 (선택)",
  "booking.notes": "메모",
  "booking.submit": "예약 제출",
  "booking.price.note": "[OWNER: 현재 스트링 가격을 여기에 입력하세요]",

  "about.title": "Badminton Is Life 소개",
  "about.story": "Badminton Is Life는 세계 최고 수준의 배드민턴 장비와 서비스를 로스앤젤레스에 제공하겠다는 단순한 사명으로 설립되었습니다. 오너 Jake Lee(이 선생님)는 15년 이상 배드민턴 커뮤니티에 깊이 관여해 왔습니다.",
  "about.highlights.title": "왜 저희를 선택해야 하나요",
  "about.highlight.pricing": "경쟁력 있는 가격",
  "about.highlight.pricing.desc": "Yonex, Victor, Li-Ning 등 프리미엄 브랜드를 최고의 가격으로 제공합니다.",
  "about.highlight.stringing": "빠른 스트링 서비스",
  "about.highlight.stringing.desc": "대부분의 라켓은 24시간 이내에 완료 — 당일 서비스도 가능합니다.",
  "about.highlight.recommendations": "맞춤형 추천",
  "about.highlight.recommendations.desc": "이 선생님이 모든 고객에게 플레이 스타일에 맞는 완벽한 라켓과 스트링을 추천해 드립니다.",
  "about.team.placeholder": "[OWNER: 팀/오너 사진을 여기에 추가하세요]",

  "contact.title": "연락처",
  "contact.info.title": "문의하기",
  "contact.social": "팔로우",
  "contact.facebook": "페이스북",

  "footer.rights": "© 2025 Badminton Is Life. 모든 권리 보유.",
};

const zh: Record<string, string> = {
  "nav.home": "首页",
  "nav.products": "产品",
  "nav.booking": "预约",
  "nav.about": "关于",
  "nav.contact": "联系",

  "hero.tagline": "洛杉矶第一羽毛球专业店",
  "hero.subtitle": "为每位球员提供优质球拍、专业穿线和个性化服务。",
  "hero.cta.products": "浏览产品",
  "hero.cta.booking": "预约穿线",

  "home.about.title": "为什么选择 Badminton Is Life？",
  "home.about.text": "由拥有超过15年经验的热情羽毛球选手和认证穿线师 Jake Lee 创立。我们提供有竞争力的价格、专业的装备推荐和洛杉矶最快的穿线服务。",

  "home.info.title": "来店参观",
  "home.info.hours": "营业时间",
  "home.info.hours.weekday": "周一至周五：上午11:00 – 下午7:00",
  "home.info.hours.weekend": "周六至周日：上午10:00 – 下午6:00",
  "home.info.address": "地址",
  "home.info.phone": "电话",
  "home.info.email": "邮箱",

  "home.reviews.title": "客户评价",

  "products.title": "球拍和球线目录",
  "products.filter.category": "类别",
  "products.filter.brand": "品牌",
  "products.filter.price": "价格范围",
  "products.filter.all": "全部",
  "products.category.rackets": "球拍",
  "products.category.strings": "球线",
  "products.price.under50": "$50以下",
  "products.price.50to150": "$50–$150",
  "products.price.150to300": "$150–$300",
  "products.price.300plus": "$300以上",
  "products.contact": "联系购买",
  "products.description.placeholder": "[产品描述 — OWNER: 请替换为实际描述]",

  "booking.title": "穿线服务预约",
  "booking.intro": "我们提供专业的羽毛球和网球拍穿线服务，交付迅速。请在下方预约。",
  "booking.name": "姓名",
  "booking.phone": "电话号码",
  "booking.date": "期望日期",
  "booking.service": "服务类型",
  "booking.service.badminton": "羽毛球穿线",
  "booking.service.tennis": "网球穿线",
  "booking.racket": "球拍型号（可选）",
  "booking.tension": "期望磅数（可选）",
  "booking.notes": "备注",
  "booking.submit": "提交预约",
  "booking.price.note": "[OWNER: 请在此填写当前穿线价格]",

  "about.title": "关于 Badminton Is Life",
  "about.story": "Badminton Is Life 的创立使命很简单：为洛杉矶带来世界级的羽毛球装备和服务。店主 Jake Lee（李先生）在羽毛球社区深耕超过15年——作为竞技选手、教练和认证球拍技师。",
  "about.highlights.title": "为什么选择我们",
  "about.highlight.pricing": "有竞争力的价格",
  "about.highlight.pricing.desc": "我们提供 Yonex、Victor、Li-Ning 等高端品牌的最优价格。",
  "about.highlight.stringing": "快速穿线服务",
  "about.highlight.stringing.desc": "大多数球拍24小时内完成穿线——可提供当日服务。",
  "about.highlight.recommendations": "个性化推荐",
  "about.highlight.recommendations.desc": "李先生亲自帮助每位客户找到适合其打法的完美球拍和球线搭配。",
  "about.team.placeholder": "[OWNER: 请在此添加团队/店主照片]",

  "contact.title": "联系我们",
  "contact.info.title": "联系方式",
  "contact.social": "关注我们",
  "contact.facebook": "Facebook",

  "footer.rights": "© 2025 Badminton Is Life. 保留所有权利。",
};

export type TranslationKey = keyof typeof en;

export const translations: Record<Language, Record<string, string>> = {
  en,
  ko,
  zh,
};
