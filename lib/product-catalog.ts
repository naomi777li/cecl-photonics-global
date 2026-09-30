export type ProductLang = "en" | "zh";

type Localized = { en: string; zh: string };

export type ProductSample = {
  model: string;
  application: Localized;
  drive: string;
  output: Localized;
  detail: Localized;
};

export type ProductFamily = {
  slug: string;
  group: "semiconductor" | "module";
  name: Localized;
  eyebrow: Localized;
  summary: Localized;
  applications: { en: string[]; zh: string[] };
  reviewItems: { en: string[]; zh: string[] };
  image: string;
  imageAlt: Localized;
  samples: ProductSample[];
  catalog?: string;
  catalogLabel?: Localized;
};

export const productFamilies: ProductFamily[] = [
  {
    slug: "red-yellow-led-chips", group: "semiconductor",
    name: { en: "AlGaInP red & yellow LED chips", zh: "AlGaInP 红黄光 LED 芯片" },
    eyebrow: { en: "VISIBLE EMITTERS", zh: "可见光发光芯片" },
    summary: { en: "Red and yellow wavelength families for indication, display, sensing and application-defined light systems.", zh: "覆盖红光、黄光波段，面向指示、显示、传感及特定光应用。" },
    applications: { en: ["Indicators and displays", "Specialty illumination", "Optical sensing"], zh: ["指示与显示", "特种照明", "光学传感"] },
    reviewItems: { en: ["Dominant wavelength and bin", "Die size and electrode orientation", "Luminous-intensity target", "Assembly and thermal conditions"], zh: ["主波长与分档", "芯片尺寸与电极方向", "发光强度目标", "装配与热条件"] },
    image: "/products/visuals/red-yellow-led-products.webp", imageAlt: { en: "Original visualization of red, orange and yellow LED dies and packages", zh: "红、橙、黄光 LED 芯片与封装原创示意图" },
    samples: [
      { model: "CE-G07CUR*U/L", application: { en: "Red LED", zh: "红光 LED" }, drive: "20 mA", output: { en: "110–230 mcd", zh: "110–230 mcd" }, detail: { en: "620–627 nm · P-UP · 6 mil", zh: "620–627 nm · P-UP · 6 mil" } },
      { model: "CE-G06CSO*U/L", application: { en: "Orange LED", zh: "橙光 LED" }, drive: "20 mA", output: { en: "110–250 mcd", zh: "110–250 mcd" }, detail: { en: "600–607 nm · P-UP · 5 mil", zh: "600–607 nm · P-UP · 5 mil" } },
      { model: "CE-F12CSY*U", application: { en: "Yellow LED", zh: "黄光 LED" }, drive: "20 mA", output: { en: "300–600 mcd", zh: "300–600 mcd" }, detail: { en: "583–595 nm · N-UP · 10 mil", zh: "583–595 nm · N-UP · 10 mil" } },
      { model: "CE-F18AUHR*U", application: { en: "Plant-lighting deep red", zh: "植物照明深红光" }, drive: "150 mA", output: { en: "80–110 mW", zh: "80–110 mW" }, detail: { en: "650–670 nm · N-UP · 18 mil", zh: "650–670 nm · N-UP · 18 mil" } },
    ], catalog: "/documents/catalogs/CECL-AlGaInP-Red-Yellow-LED-Chip-Catalog-2025Q2.pdf", catalogLabel: { en: "2025 Q2 red & yellow LED catalog", zh: "2025 Q2 红黄光 LED 产品目录" }
  },
  {
    slug: "blue-green-led-chips", group: "semiconductor",
    name: { en: "InGaN blue & green LED chips", zh: "InGaN 蓝绿光 LED 芯片" },
    eyebrow: { en: "VISIBLE EMITTERS", zh: "可见光发光芯片" },
    summary: { en: "Blue and green emitters for indication, specialty lighting and compact optical systems.", zh: "面向指示、特种照明与紧凑光学系统的蓝光、绿光芯片。" },
    applications: { en: ["Specialty illumination", "Indicators", "Compact optical systems"], zh: ["特种照明", "指示应用", "紧凑光学系统"] },
    reviewItems: { en: ["Wavelength range", "Optical-power target", "Drive-current range", "Package and heat path"], zh: ["波长范围", "光功率目标", "驱动电流范围", "封装与散热路径"] },
    image: "/products/visuals/blue-green-led-products.webp", imageAlt: { en: "Original visualization of blue and green LED dies and packages", zh: "蓝绿光 LED 芯片与封装原创示意图" },
    samples: [
      { model: "CE-10C6B*U", application: { en: "Blue display LED", zh: "蓝光数码显示" }, drive: "1–20 mA", output: { en: "38–54 mcd", zh: "38–54 mcd" }, detail: { en: "460–475 nm · 6 × 9 mil", zh: "460–475 nm · 6 × 9 mil" } },
      { model: "CE-13C6G*U", application: { en: "Green display LED", zh: "绿光数码显示" }, drive: "1–20 mA", output: { en: "240–300 mcd", zh: "240–300 mcd" }, detail: { en: "515–535 nm · 6 × 11 mil", zh: "515–535 nm · 6 × 11 mil" } },
      { model: "CE-16C2G*U", application: { en: "Green LED", zh: "绿光 LED" }, drive: "5–60 mA", output: { en: "15–25 mW", zh: "15–25 mW" }, detail: { en: "515–535 nm · 12 × 14 mil", zh: "515–535 nm · 12 × 14 mil" } },
      { model: "CE-26AW*U", application: { en: "Vertical blue LED", zh: "垂直蓝光 LED" }, drive: "100–500 mA", output: { en: "350–600 mW", zh: "350–600 mW" }, detail: { en: "445–460 nm · P-UP · 26 × 26 mil", zh: "445–460 nm · P-UP · 26 × 26 mil" } },
      { model: "CE-FL28AW*AS-CF", application: { en: "Automotive OEM LED", zh: "车载 OEM LED" }, drive: "0.2–0.7 A", output: { en: "490–505 mW", zh: "490–505 mW" }, detail: { en: "AuSn · 28 × 28 mil", zh: "AuSn · 28 × 28 mil" } },
    ], catalog: "/documents/catalogs/CECL-InGaN-Blue-Green-LED-Chip-Catalog-2025Q2.pdf", catalogLabel: { en: "2025 Q2 blue & green LED catalog", zh: "2025 Q2 蓝绿光 LED 产品目录" }
  },
  {
    slug: "infrared-led-chips", group: "semiconductor",
    name: { en: "Infrared LED chips", zh: "红外 LED 芯片" },
    eyebrow: { en: "INFRARED EMITTERS", zh: "红外发光芯片" },
    summary: { en: "Infrared emitters for sensing, illumination, machine vision and device integration.", zh: "面向传感、补光、机器视觉与设备集成的红外发光器件。" },
    applications: { en: ["Machine vision", "Infrared illumination", "Sensing and detection"], zh: ["机器视觉", "红外补光", "传感与检测"] },
    reviewItems: { en: ["Peak wavelength", "Radiant-power target", "Drive and duty cycle", "Optics and package"], zh: ["峰值波长", "辐射功率目标", "驱动与占空比", "光学与封装"] },
    image: "/products/visuals/infrared-led-products.webp", imageAlt: { en: "Original visualization of infrared LED dies and packages", zh: "红外 LED 芯片与封装原创示意图" },
    samples: [
      { model: "CE-F08AIR*U", application: { en: "850 nm compact IR LED", zh: "850 nm 紧凑红外 LED" }, drive: "50 mA", output: { en: "20–35 mW", zh: "20–35 mW" }, detail: { en: "835–865 nm · N-UP · 8 mil", zh: "835–865 nm · N-UP · 8 mil" } },
      { model: "CE-F18CIR*ZCU", application: { en: "850 nm IR LED", zh: "850 nm 红外 LED" }, drive: "250 mA", output: { en: "140–180 mW", zh: "140–180 mW" }, detail: { en: "835–865 nm · N-UP · 16 mil", zh: "835–865 nm · N-UP · 16 mil" } },
      { model: "CE-F08ANR*U", application: { en: "940 nm compact IR LED", zh: "940 nm 紧凑红外 LED" }, drive: "50 mA", output: { en: "9–15 mW", zh: "9–15 mW" }, detail: { en: "925–965 nm · N-UP · 8 mil", zh: "925–965 nm · N-UP · 8 mil" } },
      { model: "CE-F42ANR*U", application: { en: "940 nm IR LED", zh: "940 nm 红外 LED" }, drive: "350 mA", output: { en: "190–220 mW", zh: "190–220 mW" }, detail: { en: "925–965 nm · N-UP · 42 mil", zh: "925–965 nm · N-UP · 42 mil" } },
    ], catalog: "/documents/catalogs/CECL-AlGaInP-Red-Yellow-LED-Chip-Catalog-2025Q2.pdf", catalogLabel: { en: "2025 Q2 AlGaInP / IR catalog", zh: "2025 Q2 四元与红外 LED 产品目录" }
  },
  {
    slug: "vcsel-chips", group: "semiconductor",
    name: { en: "VCSEL chips", zh: "VCSEL 激光芯片" },
    eyebrow: { en: "VERTICAL-CAVITY LASER SOURCES", zh: "垂直腔面发射激光器" },
    summary: { en: "850 nm and 940 nm source families for proximity, liquid and industrial sensing applications.", zh: "覆盖 850 nm 与 940 nm 系列，面向接近、液位与工业传感。" },
    applications: { en: ["Proximity sensing", "Liquid sensing", "Industrial sensing"], zh: ["接近传感", "液位传感", "工业传感"] },
    reviewItems: { en: ["Wavelength and optical power", "Beam divergence", "Drive conditions", "Emitter, array and optics path"], zh: ["波长与光功率", "光束发散角", "驱动条件", "单管、阵列与光学路径"] },
    image: "/products/visuals/vcsel-array.webp", imageAlt: { en: "Original visualization of VCSEL dies and emitter arrays", zh: "VCSEL 芯片与发光阵列原创示意图" },
    samples: [
      { model: "850 nm family", application: { en: "Proximity sensing", zh: "接近传感" }, drive: "9 mA", output: { en: "9 mW typical", zh: "典型 9 mW" }, detail: { en: "Vf 2.0 V typical · divergence 28° typical", zh: "典型 Vf 2.0 V · 典型发散角 28°" } },
      { model: "940 nm family", application: { en: "Proximity sensing", zh: "接近传感" }, drive: "9 mA", output: { en: "5.8 mW typical", zh: "典型 5.8 mW" }, detail: { en: "Vf 1.8 V typical · divergence 24° typical", zh: "典型 Vf 1.8 V · 典型发散角 24°" } },
      { model: "668 nm family", application: { en: "Beauty-device source", zh: "美容设备光源" }, drive: "15 mA", output: { en: "8 mW typical", zh: "典型 8 mW" }, detail: { en: "665–670 nm · PCE 24% typical", zh: "665–670 nm · 典型 PCE 24%" } },
      { model: "808 nm family", application: { en: "Robot obstacle sensing", zh: "扫地机避障" }, drive: "200 mA", output: { en: "210 mW typical", zh: "典型 210 mW" }, detail: { en: "Vf 2.15 V typical · divergence 26° typical", zh: "典型 Vf 2.15 V · 典型发散角 26°" } },
      { model: "940 nm family", application: { en: "Liquid sensing", zh: "液位传感" }, drive: "30 mA", output: { en: "29 mW typical", zh: "典型 29 mW" }, detail: { en: "Vf 2.0 V typical · divergence 23° typical", zh: "典型 Vf 2.0 V · 典型发散角 23°" } },
      { model: "940 nm family", application: { en: "Smart bathroom sensing", zh: "智能卫浴传感" }, drive: "80 mA", output: { en: "80 mW typical", zh: "典型 80 mW" }, detail: { en: "Vf 2.2 V typical · PCE 45% typical", zh: "典型 Vf 2.2 V · 典型 PCE 45%" } },
      { model: "850 nm family", application: { en: "Industrial sensing", zh: "工业传感" }, drive: "185 mA", output: { en: "185 mW typical", zh: "典型 185 mW" }, detail: { en: "Vf 2.1 V typical · PCE 47% typical", zh: "典型 Vf 2.1 V · 典型 PCE 47%" } },
      { model: "940 nm family", application: { en: "Industrial sensing", zh: "工业传感" }, drive: "150 mA", output: { en: "140 mW typical", zh: "典型 140 mW" }, detail: { en: "Vf 1.9 V typical · PCE 48% typical", zh: "典型 Vf 1.9 V · 典型 PCE 48%" } },
      { model: "850 nm family", application: { en: "Optical communication", zh: "光通信" }, drive: "6 mA", output: { en: "2.5 mW typical", zh: "典型 2.5 mW" }, detail: { en: "17 GHz typical @ 7 mA · SE 0.45 W/A typical", zh: "7 mA 时典型 17 GHz · 典型 SE 0.45 W/A" } },
      { model: "680 nm family", application: { en: "Vehicle communication", zh: "车载通信" }, drive: "5 mA", output: { en: "2.0 mW typical", zh: "典型 2.0 mW" }, detail: { en: "670–690 nm · Vf 2.8 V typical", zh: "670–690 nm · 典型 Vf 2.8 V" } },
      { model: "850 nm family", application: { en: "Driver monitoring (OMS/DMS)", zh: "驾驶员监控（OMS/DMS）" }, drive: "3.5 A", output: { en: "3,000 mW typical", zh: "典型 3,000 mW" }, detail: { en: "840–860 nm · PCE 40% typical", zh: "840–860 nm · 典型 PCE 40%" } },
      { model: "760 nm family", application: { en: "Oxygen detection", zh: "氧气检测" }, drive: "2 mA", output: { en: "0.7 mW typical", zh: "典型 0.7 mW" }, detail: { en: "758–762 nm · Vf 2.3 V typical", zh: "758–762 nm · 典型 Vf 2.3 V" } },
    ], catalog: "/documents/catalogs/CECL-VCSEL-Chip-Catalog-2025Q2.pdf", catalogLabel: { en: "2025 Q2 VCSEL chip catalog", zh: "2025 Q2 VCSEL 激光芯片产品目录" }
  },
  {
    slug: "led-arrays-cob-engines", group: "module",
    name: { en: "LED arrays & COB light engines", zh: "LED 阵列与 COB 光引擎" },
    eyebrow: { en: "CUSTOM LIGHT ENGINES", zh: "定制光学引擎" },
    summary: { en: "Project-defined multi-emitter layouts engineered around coverage, thermal path and assembly requirements.", zh: "围绕覆盖范围、散热路径与装配要求定义的多光源项目平台。" },
    applications: { en: ["Specialty illumination", "Beauty-device light engines", "Application-specific arrays"], zh: ["特种照明", "美容设备光引擎", "应用定制阵列"] },
    reviewItems: { en: ["Emitter and wavelength mix", "Board architecture", "Coverage and uniformity", "Thermal interface"], zh: ["光源与波长组合", "电路板架构", "覆盖与均匀性", "热界面设计"] }, image: "/products/visuals/cob-light-engine.webp", imageAlt: { en: "Original visualization of a configurable multi-wavelength COB light engine", zh: "可配置多波长 COB 光学引擎原创示意图" }, samples: []
  },
  {
    slug: "vcsel-modules", group: "module",
    name: { en: "VCSEL modules", zh: "VCSEL 模块" },
    eyebrow: { en: "INTEGRATED OPTICAL MODULES", zh: "集成光学模块" },
    summary: { en: "Custom source, optics and drive coordination for compact sensing or illumination assemblies.", zh: "面向紧凑传感或照明组件的光源、光学与驱动协同。" },
    applications: { en: ["Compact sensing", "Structured illumination concepts", "Industrial integration"], zh: ["紧凑传感", "结构光概念", "工业集成"] },
    reviewItems: { en: ["Beam requirement", "Electrical interface", "Mechanical envelope", "Evaluation and safety inputs"], zh: ["光束要求", "电气接口", "机械包络", "评估与安全输入"] }, image: "/products/visuals/optical-sensing.webp", imageAlt: { en: "Original visualization of an integrated optical sensing module", zh: "集成光学传感模块原创示意图" }, samples: []
  },
  {
    slug: "medical-beauty-light-engines", group: "module",
    name: { en: "Medical beauty light engines", zh: "医疗美容光学引擎" },
    eyebrow: { en: "OEM / ODM PLATFORM", zh: "OEM / ODM 平台" },
    summary: { en: "Configurable optical assemblies for wearable, handheld and professional beauty-device programs.", zh: "面向穿戴式、手持式与专业美容设备项目的可配置光学组件。" },
    applications: { en: ["LED facial wearables", "Scalp and hair-care devices", "Professional treatment panels"], zh: ["LED 面部穿戴设备", "头皮与毛发护理设备", "专业护理面板"] },
    reviewItems: { en: ["Wavelength mix", "Irradiance and uniformity target", "Thermal comfort and controls", "Market and compliance plan"], zh: ["波长组合", "辐照度与均匀性目标", "热舒适与控制", "目标市场与合规规划"] }, image: "/medical-beauty/device-platform-lineup.webp", imageAlt: { en: "Original concept lineup of configurable light-based beauty devices", zh: "可配置光美容设备产品线原创概念图" }, samples: []
  },
  {
    slug: "custom-optical-modules", group: "module",
    name: { en: "Custom optical modules", zh: "定制光学模块" },
    eyebrow: { en: "APPLICATION ENGINEERING", zh: "应用工程" },
    summary: { en: "Application-specific assemblies combining emitters, optics, electronics and mechanical interfaces.", zh: "结合发光器件、光学、电子与机械接口的应用定制组件。" },
    applications: { en: ["Sensing modules", "Specialty illumination", "Device integration"], zh: ["传感模块", "特种照明", "设备集成"] },
    reviewItems: { en: ["System requirement", "Optical and electrical interfaces", "Prototype objectives", "DFM and production transfer"], zh: ["系统需求", "光学与电气接口", "样机目标", "可制造性与量产转移"] }, image: "/products/visuals/light-engine.webp", imageAlt: { en: "Original visualization of a custom optical-module assembly", zh: "定制光学模块原创示意图" }, samples: []
  }
];

export function getProductFamily(slug: string) {
  return productFamilies.find((item) => item.slug === slug);
}
