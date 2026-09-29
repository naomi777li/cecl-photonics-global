import Image from "next/image";
import { ArrowUpRight, BookOpen, Building2, Check, Cpu, Download, FileCheck2, Layers3, MessageCircle, Phone, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Lang = "en" | "zh";

const copy = {
  en: {
    nav: ["Products", "Solutions", "Medical Beauty", "OEM / ODM", "Quality & Documents", "Insights"],
    start: "Start a project", eyebrow: "PHOTONIC SEMICONDUCTORS · LIGHT ENGINES · OEM/ODM",
    titleA: "From chip to", titleB: "application-ready light.",
    intro: "Custom emitters, optical modules and engineering support for sensing, medical beauty and intelligent devices.",
    explore: "Explore products", discuss: "Discuss your application", integration: "Integration path",
    chips: ["Visible LED", "Infrared LED", "VCSEL", "Custom modules"],
    proof: [["Component-to-system", "One engineering conversation"], ["Application-first", "Specs shaped around the use case"], ["Model-specific", "Documents matched to the selected part"], ["Global B2B", "Samples, projects and distribution"]],
    pathways: "Choose your development path", pathIntro: "Two buyer journeys, one photonics platform. Component teams can source emitters and modules; device brands can move into a managed OEM/ODM program.",
    componentBuyer: "FOR COMPONENT BUYERS", semiTitle: "Semiconductors & optical modules", semiBody: "Build your bill of materials around wavelength, optical power, package, thermal design and application constraints.", semiLink: "Browse the product platform",
    deviceBrands: "FOR DEVICE BRANDS", beautyTitle: "Medical beauty OEM / ODM", beautyBody: "Develop light-based beauty and personal-care devices with optical, thermal, industrialization and manufacturing support.", beautyLink: "Plan an OEM/ODM project",
    platformKicker: "PRODUCT PLATFORM", platformTitle: "Specify the light source, then scale the integration.", platformBody: "The catalog is organized by buyer decision—not internal technology labels—so engineering teams can move from emitter selection to a qualified module request.",
    semiconductors: "Semiconductors", modules: "Modules & light engines", inquire: "Request specification",
    appsKicker: "APPLICATIONS", appsTitle: "One photonics core, multiple market paths.", appsBody: "The site keeps chips and medical beauty together because the value chain is continuous. Each application has its own technical entry point, evidence requirements and commercial workflow.",
    beautyKicker: "MEDICAL BEAUTY & PERSONAL CARE", beautyMain: "Turn a wavelength brief into a manufacturable device program.", beautyDesc: "A separate device pathway lets brand owners discuss form factor, optical uniformity, heat, controls, production targets and market documentation without navigating a component catalog.",
    programs: "Example program directions", programNote: "Product classification, claims and required approvals depend on the final configuration and destination market.",
    oemKicker: "OEM / ODM WORKFLOW", oemTitle: "A reviewable path from brief to production.", oemBody: "Each gate produces a concrete decision: requirements, optical architecture, prototype, validation package and manufacturing release.",
    qualityKicker: "TRUST & DOCUMENTATION", qualityTitle: "Credibility should be attached to a model—not a slogan.", qualityBody: "This site avoids unverified performance and certification claims. Buyers can review supplied business records, SGS reports and product catalogs, then request the documentation set for the exact part and target market.", requestDocs: "Open document center",
    faqKicker: "BUYER FAQ", faqTitle: "Questions procurement and engineering teams ask first.",
    contactKicker: "START A PROJECT", contactTitle: "Send a technical brief. We’ll route it to the right product path.", contactBody: "Share what is already known—application, wavelength, package or device concept, volume stage and destination market. Missing details can be resolved during engineering review.",
    fields: ["Name", "Business email", "Company", "Project type", "Target market", "Project requirements"], submit: "Prepare inquiry", success: "Your project brief is ready. Email/CRM routing will be connected before public launch.",
    beautyPlatformKicker: "DEVICE PLATFORM CONCEPTS", beautyPlatformTitle: "Four product directions, one configurable optical core.", beautyPlatformBody: "These original concept visuals show how CECL emitter and light-engine capabilities may translate into branded device programs. Final appearance, optical parameters, claims and compliance route are defined project by project.", conceptLabel: "Concept visualization · not a released product", customize: "Configurable by project", proofTitle: "What buyers can define", proofItems: ["Wavelength mix and treatment area", "Optical uniformity and irradiance target", "Thermal comfort and session controls", "Housing, interface, packaging and market plan"],
    referenceKicker: "TEMPORARY VISUAL REFERENCES", referenceTitle: "Factory and exhibition storytelling — layout placeholders.", referenceBody: "The images below come from a peer-company presentation supplied for reference. They do not show CECL facilities, employees or exhibitions. They are retained only to establish the visual structure and must be replaced with verified CECL photography before public launch.", referenceBadge: "PEER REFERENCE · NOT CECL", replaceNote: "Replace with verified CECL original", referenceCards: [["Factory exterior", "A future CECL image should establish site identity, location context and manufacturing credibility."], ["Team & operating environment", "Use verified R&D, production, quality or office photography with dates and locations."], ["Exhibition archive", "Replace with CECL booth, event name, city and year so overseas buyers can verify the record."]],
    insightKicker: "PHOTONICS KNOWLEDGE", insightTitle: "Technical answers for better sourcing decisions.", insightBody: "Original industry articles connect component selection, device engineering and market documentation. They are written for brand owners, distributors and engineering teams—not for keyword stuffing.", readArticle: "Read article", allInsights: "Industry knowledge",
    footer: "Photonics components, modules and application development for global B2B partners.", scope: "Scope notice: final specifications, commercial terms and compliance documents require model-level review."
  },
  zh: {
    nav: ["产品中心", "应用方案", "医疗美容", "OEM / ODM", "质量与资料", "行业知识"],
    start: "发起项目", eyebrow: "光电半导体 · 光学引擎 · OEM/ODM",
    titleA: "从芯片出发，", titleB: "做到可落地的光。",
    intro: "面向传感、医疗美容与智能设备，提供定制发光芯片、光学模块及应用工程支持。",
    explore: "查看产品", discuss: "沟通应用需求", integration: "集成路径",
    chips: ["可见光 LED", "红外 LED", "VCSEL", "定制模块"],
    proof: [["芯片到系统", "统一工程沟通窗口"], ["应用导向", "按使用场景定义规格"], ["型号对应", "资料与具体产品匹配"], ["全球 B2B", "样品、项目与渠道合作"]],
    pathways: "选择你的开发路径", pathIntro: "两类采购旅程，共用一套光电技术平台。器件团队采购芯片和模块，设备品牌进入完整 OEM/ODM 项目。",
    componentBuyer: "面向器件采购与研发", semiTitle: "半导体与光学模块", semiBody: "围绕波长、光功率、封装、散热设计和应用约束，建立可评估的物料方案。", semiLink: "查看产品平台",
    deviceBrands: "面向设备品牌与渠道商", beautyTitle: "医疗美容 OEM / ODM", beautyBody: "提供光学、热设计、工业化和制造支持，开发光疗美容与个护设备。", beautyLink: "规划 OEM/ODM 项目",
    platformKicker: "产品平台", platformTitle: "先选光源，再推进系统集成。", platformBody: "目录按照采购决策逻辑组织，让工程团队能够从发光器件选择，顺畅进入模块评估和定制需求。",
    semiconductors: "半导体产品", modules: "模块与光学引擎", inquire: "索取规格资料",
    appsKicker: "应用领域", appsTitle: "一套光电核心，多条市场路径。", appsBody: "芯片与医疗美容可以放在同一个外贸站，因为两者属于连续价值链；不同应用分别设置技术入口、验证资料和商务流程。",
    beautyKicker: "医疗美容与个人护理", beautyMain: "把波长需求转化为可量产的设备项目。", beautyDesc: "设备客户可直接讨论外观形态、光照均匀性、散热、控制方式、产量目标和目标市场资料，不必先研究芯片目录。",
    programs: "项目方向示例", programNote: "产品分类、宣传功效和所需认证取决于最终配置及销售目的地。",
    oemKicker: "OEM / ODM 流程", oemTitle: "从需求到量产，每一步都可评审。", oemBody: "每个阶段都有明确输出：需求定义、光学架构、样机、验证资料与生产放行。",
    qualityKicker: "可信度与技术资料", qualityTitle: "可信度应落实到具体型号，而不是口号。", qualityBody: "本站不使用未经核验的性能、认证或客户背书。采购方可查看企业提供的营业执照、SGS 检测报告和产品目录，再针对具体型号与目标市场索取对应资料。", requestDocs: "进入资料中心",
    faqKicker: "采购常见问题", faqTitle: "采购与研发团队最先关心的问题。",
    contactKicker: "发起项目", contactTitle: "提交技术需求，我们会分配到正确的产品路径。", contactBody: "请填写已知信息：应用、波长、封装或设备概念、采购阶段及目标市场。缺失信息可在工程评审中补齐。",
    fields: ["姓名", "工作邮箱", "公司", "项目类型", "目标市场", "项目需求"], submit: "生成询盘", success: "项目简报已生成；正式上线前将接入企业邮箱或 CRM。",
    beautyPlatformKicker: "设备平台概念", beautyPlatformTitle: "四类产品方向，共用可配置的光学核心。", beautyPlatformBody: "原创概念图展示中能芯光的发光器件与光学引擎能力如何延伸到品牌设备项目。最终外观、光学参数、功效表述及合规路线均按项目定义。", conceptLabel: "概念效果图 · 非已发布产品", customize: "按项目配置", proofTitle: "采购方可定义的关键项", proofItems: ["波长组合与照射区域", "光照均匀性与辐照度目标", "热舒适、时长与控制方式", "外壳、界面、包装与目标市场方案"],
    referenceKicker: "临时视觉参考", referenceTitle: "工厂与展会展示——版式占位。", referenceBody: "以下图片来自用户提供的同行企业简介，仅用于建立网站版式与叙事结构，并非中能芯光的工厂、员工或参展记录。网站正式公开前必须替换为经核验的中能芯光实拍素材。", referenceBadge: "同行参考 · 非中能芯光素材", replaceNote: "待替换为中能芯光真实原图", referenceCards: [["工厂外观", "后续应使用中能芯光实拍照片，并补充所在地与制造主体信息。"], ["团队与运营环境", "使用经核验的研发、生产、质量或办公照片，并注明时间与地点。"], ["展会记录", "替换为中能芯光展位实拍，并标注展会名称、城市和年份，方便海外客户核验。"]],
    insightKicker: "光电行业知识", insightTitle: "用技术内容帮助采购做出更好的决策。", insightBody: "原创行业文章把器件选型、设备工程与市场资料连接起来，服务品牌方、渠道商和研发团队，而不是简单堆砌关键词。", readArticle: "阅读文章", allInsights: "行业知识",
    footer: "面向全球 B2B 客户的光电芯片、模块与应用开发平台。", scope: "范围说明：最终规格、商务条款和合规文件均需按具体型号审核。"
  }
};

const productData = {
  en: {
    chips: [
      ["AlGaInP visible emitters", "Red and yellow wavelength families for indicators, displays, sensing and light-based applications.", ["Die / packaged options", "Wavelength selection", "Binning discussion"]],
      ["InGaN visible emitters", "Blue and green wavelength families for indicators, specialty lighting and optical systems.", ["Application-matched package", "Thermal review", "Sample evaluation"]],
      ["Infrared LED", "Infrared emitters for sensing, illumination, machine vision and device integration.", ["Wavelength by project", "Radiant output review", "Package & optics"]],
      ["VCSEL platform", "Vertical-cavity laser sources for proximity, time-of-flight, structured illumination and custom modules.", ["Emitter / array path", "Driver coordination", "Optical integration"]]
    ],
    modules: [
      ["LED arrays & COB engines", "Multi-emitter layouts engineered around coverage, thermal path and assembly requirements.", ["Emitter mix", "Board architecture", "Thermal interface"]],
      ["VCSEL modules", "Integrated source, optics and drive coordination for compact sensing or illumination assemblies.", ["Beam requirement", "Safety review input", "Evaluation sample"]],
      ["Beauty light engines", "Custom light-source assemblies for wearable, handheld and professional beauty-device concepts.", ["Uniformity target", "Heat & comfort", "Form-factor fit"]],
      ["Custom optical modules", "Application-specific assemblies combining emitters, optics, electronics and mechanical interfaces.", ["DFM review", "Prototype build", "Production transfer"]]
    ]
  },
  zh: {
    chips: [
      ["AlGaInP 可见光芯片", "覆盖红光、黄光波段，面向指示、显示、传感及光应用。", ["芯片/封装选择", "波长选型", "分档讨论"]],
      ["InGaN 可见光芯片", "覆盖蓝光、绿光波段，面向指示、特种照明和光学系统。", ["应用匹配封装", "散热评审", "样品验证"]],
      ["红外 LED", "面向传感、补光、机器视觉和设备集成的红外发光器件。", ["按项目选择波长", "辐射功率评估", "封装与光学"]],
      ["VCSEL 平台", "面向接近感应、ToF、结构光和定制模块的垂直腔面发射激光光源。", ["单管/阵列路径", "驱动协同", "光学集成"]]
    ],
    modules: [
      ["LED 阵列与 COB 光引擎", "根据覆盖范围、散热路径和装配要求设计多光源布局。", ["光源组合", "电路板架构", "热界面设计"]],
      ["VCSEL 模块", "协调光源、光学与驱动，为紧凑型传感或照明组件提供集成方案。", ["光束需求", "安全评审输入", "评估样品"]],
      ["美容光学引擎", "面向穿戴式、手持式和专业美容设备的定制光源组件。", ["均匀性目标", "热管理与舒适度", "结构适配"]],
      ["定制光学模块", "根据应用组合发光器件、光学、电子与机械接口。", ["可制造性评审", "样机制作", "量产转移"]]
    ]
  }
};

const apps = [
  { icon: ScanLine, en: ["Sensing & machine vision", "Emitter selection, illumination geometry and compact module integration."], zh: ["传感与机器视觉", "发光器件选型、照明几何与紧凑模块集成。"] },
  { icon: Sparkles, en: ["Medical beauty", "Light engines and device programs for photobiomodulation and beauty concepts."], zh: ["医疗美容", "面向光生物调节和美容概念的光学引擎与设备项目。"] },
  { icon: Cpu, en: ["Consumer electronics", "Compact visible and infrared sources for intelligent device features."], zh: ["消费电子", "面向智能设备功能的紧凑型可见光与红外光源。"] },
  { icon: Layers3, en: ["Specialty illumination", "Wavelength-specific platforms for industrial and application-defined lighting."], zh: ["特种照明", "面向工业和特定应用照明的波长平台。"] }
];

const programs = {
  en: [["LED facial wearables", "Uniform light delivery, comfort, controls and manufacturability."], ["Scalp & hair-care devices", "Wearable optical architecture, thermal comfort and usage design."], ["Professional treatment panels", "Coverage, serviceability, control zones and production planning."], ["Hair-removal light engines", "Source, optical path, thermal management and device integration review."]],
  zh: [["LED 面部穿戴设备", "光照均匀性、舒适度、控制方式与可制造性。"], ["头皮与毛发护理设备", "穿戴式光学架构、热舒适与使用方式设计。"], ["专业护理面板", "覆盖范围、可维护性、分区控制与生产规划。"], ["脱毛光学引擎", "光源、光路、热管理和整机集成评审。"]]
};

const workflow = {
  en: [["01", "Brief", "Application, market, volume stage and commercial target."], ["02", "Architecture", "Emitter, optics, electronics, thermal and mechanical concept."], ["03", "Prototype", "Evaluation unit or device sample for agreed test objectives."], ["04", "Validation", "Performance, reliability and market-document review plan."], ["05", "Pilot", "Process confirmation, inspection criteria and limited build."], ["06", "Production", "Approved specification, change control and supply planning."]],
  zh: [["01", "需求定义", "应用、市场、采购阶段与商务目标。"], ["02", "方案架构", "光源、光学、电子、散热和结构概念。"], ["03", "样机", "根据约定测试目标制作评估件或设备样品。"], ["04", "验证", "制定性能、可靠性和目标市场资料评审计划。"], ["05", "试产", "确认工艺、检验标准并完成小批量验证。"], ["06", "量产", "固化规格、变更控制与供应计划。"]]
};

const qualityCards = {
  en: [["Technical file", "Datasheet, drawing, operating limits and handling information for the selected model."], ["Quality evidence", "Inspection approach, reliability items and traceability scope available by product program."], ["Market documentation", "Applicable declarations, reports or planning inputs reviewed against device and destination market."]],
  zh: [["技术文件", "针对选定型号提供数据表、图纸、工作范围和操作信息。"], ["质量证据", "按产品项目提供检验方式、可靠性项目和可追溯范围。"], ["市场资料", "根据设备配置和目标市场评审适用声明、报告或规划输入。"]]
};

const documentCenter = {
  en: {
    kicker: "VERIFICATION LIBRARY",
    title: "Source documents buyers can open and review.",
    body: "Original files supplied for this website are grouped by purpose. Test results apply to the submitted LED chip sample and the scope stated in each report; they are not blanket certification for every product or finished device.",
    companyTitle: "Company registration",
    complianceTitle: "SGS test reports · LED chip",
    catalogTitle: "2025 Q2 product catalogs",
    view: "View original",
    download: "Open PDF",
    supplied: "Copy supplied by the company · verify against the official registry",
    companies: [
      ["Kunshan Xunlei Optoelectronics Co., Ltd.", "Business License", "/documents/company/kunshan-xunlei-business-license.jpg", ""],
      ["CECL (Sichuan) Technology Group Co., Ltd.", "Business License", "/documents/company/cecl-sichuan-business-license.jpg", "rotated"]
    ],
    reports: [
      ["EU RoHS", "CANEC25028451601 / 1602", "Nov 21, 2025", "Conclusion: Pass", ["English", "/documents/compliance/SGS-RoHS-EN-CANEC25028451601.pdf", "中文", "/documents/compliance/SGS-RoHS-ZH-CANEC25028451602.pdf"]],
      ["REACH SVHC screening", "CANEC25028451603", "Nov 25, 2025", "251 Candidate List SVHC and 4 potential SVHC: ≤ 0.1% (w/w)", ["English", "/documents/compliance/SGS-REACH-SVHC-EN-CANEC25028451603.pdf"]],
      ["Halogen", "CANEC25028451605 / 1606", "Nov 21, 2025", "F, Cl, Br and I reported ND at the stated method detection limits", ["English", "/documents/compliance/SGS-Halogen-EN-CANEC25028451605.pdf", "中文", "/documents/compliance/SGS-Halogen-ZH-CANEC25028451606.pdf"]],
      ["US EPA TSCA Section 6(h) · PBT", "CANEC25028451607 / 1608", "Nov 21, 2025", "Conclusion: Pass", ["English", "/documents/compliance/SGS-TSCA-PBT-EN-CANEC25028451607.pdf", "中文", "/documents/compliance/SGS-TSCA-PBT-ZH-CANEC25028451608.pdf"]]
    ],
    catalogs: [
      ["VCSEL laser chip catalog", "Proximity, medical beauty, obstacle avoidance, liquid level and industrial sensing applications.", "/documents/catalogs/CECL-VCSEL-Chip-Catalog-2025Q2.pdf"],
      ["AlGaInP red & yellow LED chip catalog", "Visible red, orange, yellow and yellow-green families, plus selected infrared series.", "/documents/catalogs/CECL-AlGaInP-Red-Yellow-LED-Chip-Catalog-2025Q2.pdf"],
      ["InGaN blue & green LED chip catalog", "Lighting, display, backlight, automotive and visible blue/green product families.", "/documents/catalogs/CECL-InGaN-Blue-Green-LED-Chip-Catalog-2025Q2.pdf"]
    ]
  },
  zh: {
    kicker: "资料核验中心",
    title: "采购方可以直接打开并核验的原始资料。",
    body: "企业提供的原始文件按用途分类。检测结果仅适用于报告所述送检 LED 芯片样品及检测范围，不应解释为所有产品或整机设备的统一认证。",
    companyTitle: "企业登记资料",
    complianceTitle: "SGS 检测报告 · LED 芯片",
    catalogTitle: "2025 年第二季度产品目录",
    view: "查看原件",
    download: "打开 PDF",
    supplied: "企业提供的证照副本 · 可通过官方企业信用信息系统核验",
    companies: [
      ["昆山迅雷光电子有限公司", "营业执照", "/documents/company/kunshan-xunlei-business-license.jpg", ""],
      ["中能芯光（四川）科技集团有限公司", "营业执照", "/documents/company/cecl-sichuan-business-license.jpg", "rotated"]
    ],
    reports: [
      ["欧盟 RoHS", "CANEC25028451601 / 1602", "2025 年 11 月 21 日", "结论：符合", ["English", "/documents/compliance/SGS-RoHS-EN-CANEC25028451601.pdf", "中文", "/documents/compliance/SGS-RoHS-ZH-CANEC25028451602.pdf"]],
      ["REACH SVHC 筛查", "CANEC25028451603", "2025 年 11 月 25 日", "251 项候选清单 SVHC 及 4 项潜在 SVHC 均 ≤ 0.1%（w/w）", ["English", "/documents/compliance/SGS-REACH-SVHC-EN-CANEC25028451603.pdf"]],
      ["卤素检测", "CANEC25028451605 / 1606", "2025 年 11 月 21 日", "氟、氯、溴、碘在报告所列方法检出限下均未检出", ["English", "/documents/compliance/SGS-Halogen-EN-CANEC25028451605.pdf", "中文", "/documents/compliance/SGS-Halogen-ZH-CANEC25028451606.pdf"]],
      ["美国 EPA TSCA 第 6(h) 节 · PBT", "CANEC25028451607 / 1608", "2025 年 11 月 21 日", "结论：符合", ["English", "/documents/compliance/SGS-TSCA-PBT-EN-CANEC25028451607.pdf", "中文", "/documents/compliance/SGS-TSCA-PBT-ZH-CANEC25028451608.pdf"]]
    ],
    catalogs: [
      ["VCSEL 激光芯片产品目录", "覆盖接近传感、医疗美容、扫地机避障、液位传感及工业感测等应用。", "/documents/catalogs/CECL-VCSEL-Chip-Catalog-2025Q2.pdf"],
      ["四元红黄 LED 芯片产品目录", "覆盖红、橙、黄、黄绿可见光系列及部分红外产品系列。", "/documents/catalogs/CECL-AlGaInP-Red-Yellow-LED-Chip-Catalog-2025Q2.pdf"],
      ["蓝绿 LED 芯片产品目录", "覆盖照明、显示、背光、车载及蓝绿可见光产品系列。", "/documents/catalogs/CECL-InGaN-Blue-Green-LED-Chip-Catalog-2025Q2.pdf"]
    ]
  }
};

const faqs = {
  en: [["Can we buy components without starting an OEM project?", "Yes. Component and module inquiries follow their own sample, specification and quotation path."], ["Can one project start at the chip level and move into a module?", "Yes. That continuity is the main reason the two businesses share one B2B website."], ["Are medical or market certifications already included?", "Certification applicability depends on the final device, claims and destination market. Evidence should be reviewed for the exact configuration."], ["What information is needed for a first review?", "Application, preferred wavelength or effect, physical constraints, estimated volume stage, target market and timeline are enough to begin."]],
  zh: [["可以只采购芯片，不做 OEM 项目吗？", "可以。芯片和模块询盘有独立的样品、规格确认与报价流程。"], ["项目可以从芯片选型继续做到模块吗？", "可以。这种连续性正是芯片与医美业务放在同一个 B2B 网站的核心原因。"], ["医疗或市场认证是否默认包含？", "认证适用性取决于最终设备、宣传功效和目标市场，必须针对具体配置核验。"], ["首次评审需要哪些信息？", "应用、期望波长或效果、结构约束、预计采购阶段、目标市场和时间计划即可启动。"]]
};

const beautyConcepts = {
  en: [
    ["Flexible facial wearables", "Multi-wavelength layouts shaped around facial coverage, eye protection, fit and thermal comfort."],
    ["Scalp-care systems", "Dense optical arrays, wearable geometry, session control and heat-management planning."],
    ["Handheld treatment devices", "Compact emitters and optics for targeted coverage, charging, controls and accessory ecosystems."],
    ["Professional light panels", "Zoned illumination, serviceable modules and scalable mechanical architecture for professional environments."]
  ],
  zh: [
    ["柔性面部穿戴设备", "围绕面部覆盖、眼部防护、佩戴贴合与热舒适规划多波长布局。"],
    ["头皮护理系统", "面向高密度光源阵列、穿戴结构、疗程控制与热管理进行系统设计。"],
    ["手持式护理设备", "以紧凑光源和光学结构支持局部覆盖、充电控制与配件生态。"],
    ["专业光疗面板", "采用分区照明、可维护模块与可扩展结构，适配专业应用环境。"]
  ]
};

const insights = {
  en: [
    ["wavelength-selection-medical-beauty-device", "Wavelength selection for a light-based beauty device", "A practical framework for turning a desired use case into emitter, optical and validation requirements.", "8 min read"],
    ["led-vcsel-light-engine-oem-odm", "From LED or VCSEL chip to a manufacturable light engine", "Why package, optics, drive, heat and mechanical integration should be reviewed as one system.", "7 min read"],
    ["compliance-documents-phototherapy-device", "What documents should a phototherapy-device buyer request?", "Separate component test reports, device verification and destination-market evidence before placing an order.", "6 min read"]
  ],
  zh: [
    ["wavelength-selection-medical-beauty-device", "光类美容设备如何选择波长", "从应用目标出发，逐步形成光源、光学结构与验证要求的实用框架。", "约 8 分钟"],
    ["led-vcsel-light-engine-oem-odm", "从 LED 或 VCSEL 芯片到可量产光学引擎", "为什么封装、光学、驱动、散热和结构必须作为一个系统评审。", "约 7 分钟"],
    ["compliance-documents-phototherapy-device", "采购光疗设备应索取哪些资料？", "在下单前区分元器件检测、整机验证及目标市场合规证据。", "约 6 分钟"]
  ]
};

function ProductGrid({ items, inquire }: { items: any; inquire: string }) {
  return <div className="product-grid">{items.map((item: [string, string, string[]], i: number) => <article className="product-card" key={item[0]}><div className="product-top"><span>0{i + 1}</span><Cpu size={20}/></div><h3>{item[0]}</h3><p>{item[1]}</p><ul>{item[2].map(x => <li key={x}><Check size={15}/>{x}</li>)}</ul><a href="#contact">{inquire}<ArrowUpRight size={16}/></a></article>)}</div>;
}

export function SiteHome({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const p = productData[lang];
  const d = documentCenter[lang];
  const formOptions = lang === "en" ? ["Select project type", "Semiconductor / chip", "Optical module / light engine", "Medical beauty OEM / ODM", "Distribution partnership"] : ["请选择项目类型", "半导体 / 芯片", "光学模块 / 光引擎", "医疗美容 OEM / ODM", "渠道合作"];

  const homeUrl = lang === "en" ? "https://cecl-photonics-global.georgia52201.chatgpt.site/" : "https://cecl-photonics-global.georgia52201.chatgpt.site/zh";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://cecl-photonics-global.georgia52201.chatgpt.site/#organization", name: lang === "en" ? "CECL Photonics" : "中能芯光", url: "https://cecl-photonics-global.georgia52201.chatgpt.site/", contactPoint: [{ "@type": "ContactPoint", name: lang === "en" ? "Li Sicheng" : "李思澄", telephone: "+86-155-9590-3230", contactType: "sales", availableLanguage: ["English", "Chinese"] }] },
      { "@type": "WebSite", "@id": "https://cecl-photonics-global.georgia52201.chatgpt.site/#website", url: "https://cecl-photonics-global.georgia52201.chatgpt.site/", name: "CECL Photonics", inLanguage: ["en", "zh-CN"], publisher: { "@id": "https://cecl-photonics-global.georgia52201.chatgpt.site/#organization" } },
      { "@type": "WebPage", "@id": `${homeUrl}#webpage`, url: homeUrl, name: lang === "en" ? "CECL Photonics | Photonic Semiconductors & Medical Beauty OEM/ODM" : "中能芯光｜光电芯片、光学引擎与医疗美容 OEM/ODM", isPartOf: { "@id": "https://cecl-photonics-global.georgia52201.chatgpt.site/#website" }, about: { "@id": "https://cecl-photonics-global.georgia52201.chatgpt.site/#organization" }, inLanguage: lang === "en" ? "en" : "zh-CN" },
      { "@type": "FAQPage", mainEntity: faqs[lang].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CECL Photonics home"><span className="brand-mark">C</span><span><strong>CECL</strong><small>PHOTONICS · 中能芯光</small></span></a>
        <nav aria-label="Primary navigation">{t.nav.map((x, i) => <a key={x} href={["#products", "#solutions", "#beauty", "#oem", "#quality", "#insights"][i]}>{x}</a>)}</nav>
        <div className="header-actions"><a className="lang" href={lang === "en" ? "/zh" : "/"}>{lang === "en" ? "中文" : "EN"}</a><a className="button compact" href="#contact">{t.start}</a></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.titleA}<br/><span>{t.titleB}</span></h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button" href="#products">{t.explore}</a><a className="text-link" href="#contact">{t.discuss}</a></div><div className="signal-row">{t.chips.map(x => <span key={x}>{x}</span>)}</div></div>
        <div className="hero-visual"><Image src="/hero-photonics.png" alt="Photonics components and a wearable light therapy concept" fill priority sizes="(max-width: 900px) 100vw, 48vw"/><div className="visual-note"><small>{t.integration}</small><strong>Die → Package → Module → Device</strong></div></div>
      </section>

      <section className="proof-strip">{t.proof.map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</section>

      <section className="section pathways-wrap"><div className="section-heading"><p className="eyebrow">B2B PATHWAYS</p><h2>{t.pathways}</h2><p>{t.pathIntro}</p></div><div className="pathways"><article className="path-card dark"><span className="index">01</span><p className="eyebrow">{t.componentBuyer}</p><h3>{t.semiTitle}</h3><p>{t.semiBody}</p><a href="#products">{t.semiLink}<ArrowUpRight size={18}/></a></article><article className="path-card light"><span className="index">02</span><p className="eyebrow">{t.deviceBrands}</p><h3>{t.beautyTitle}</h3><p>{t.beautyBody}</p><a href="#beauty">{t.beautyLink}<ArrowUpRight size={18}/></a></article></div></section>

      <section className="section product-platform" id="products"><div className="section-heading split"><div><p className="eyebrow">{t.platformKicker}</p><h2>{t.platformTitle}</h2></div><p>{t.platformBody}</p></div><div className="catalog-group"><h3>{t.semiconductors}</h3><ProductGrid items={p.chips} inquire={t.inquire}/></div><div className="catalog-group"><h3>{t.modules}</h3><ProductGrid items={p.modules} inquire={t.inquire}/></div></section>

      <section className="section applications" id="solutions"><div className="section-heading split"><div><p className="eyebrow">{t.appsKicker}</p><h2>{t.appsTitle}</h2></div><p>{t.appsBody}</p></div><div className="application-grid">{apps.map(({icon:Icon,en,zh},i) => { const x = lang === "en" ? en : zh; return <article key={x[0]}><span>0{i+1}</span><Icon size={25}/><h3>{x[0]}</h3><p>{x[1]}</p></article>})}</div></section>

      <section className="beauty" id="beauty"><div className="beauty-intro"><p className="eyebrow">{t.beautyKicker}</p><h2>{t.beautyMain}</h2><p>{t.beautyDesc}</p><div className="beauty-chain"><span>Emitter</span><i/> <span>Optics</span><i/> <span>Thermal</span><i/> <span>Controls</span><i/> <span>Device</span></div></div><div className="program-panel"><p className="eyebrow">{t.programs}</p>{programs[lang].map(([a,b]) => <article key={a}><Sparkles size={18}/><div><h3>{a}</h3><p>{b}</p></div></article>)}<small>{t.programNote}</small></div></section>

      <section className="section beauty-platform">
        <div className="section-heading split"><div><p className="eyebrow">{t.beautyPlatformKicker}</p><h2>{t.beautyPlatformTitle}</h2></div><p>{t.beautyPlatformBody}</p></div>
        <div className="beauty-platform-layout"><figure className="concept-visual"><Image src="/medical-beauty-platform.png" alt={lang === "en" ? "Original concept visualization of a medical beauty device platform" : "医疗美容设备平台原创概念效果图"} width={1536} height={1024} sizes="(max-width: 900px) 100vw, 58vw"/><figcaption>{t.conceptLabel}</figcaption></figure><div className="concept-list">{beautyConcepts[lang].map(([a,b],i) => <article key={a}><span>0{i+1}</span><div><h3>{a}</h3><p>{b}</p><small>{t.customize}</small></div></article>)}</div></div>
        <div className="definition-bar"><strong>{t.proofTitle}</strong>{t.proofItems.map((x) => <span key={x}><Check size={15}/>{x}</span>)}</div>
      </section>

      <section className="section reference-gallery" id="reference-gallery">
        <div className="section-heading split"><div><p className="eyebrow">{t.referenceKicker}</p><h2>{t.referenceTitle}</h2></div><p>{t.referenceBody}</p></div>
        <div className="reference-grid">{[
          "/reference-placeholders/peer-factory-reference.png",
          "/reference-placeholders/peer-team-environment-reference.png",
          "/reference-placeholders/peer-exhibition-reference.png"
        ].map((src,i) => { const [title,desc] = t.referenceCards[i]; return <article key={src}><div className="reference-media"><img src={src} alt={`${title} — ${t.referenceBadge}`}/><span>{t.referenceBadge}</span></div><div className="reference-copy"><p className="reference-index">0{i+1}</p><h3>{title}</h3><p>{desc}</p><small>{t.replaceNote}</small></div></article>})}</div>
      </section>

      <section className="section workflow" id="oem"><div className="section-heading split"><div><p className="eyebrow">{t.oemKicker}</p><h2>{t.oemTitle}</h2></div><p>{t.oemBody}</p></div><div className="workflow-grid">{workflow[lang].map(([n,a,b]) => <article key={n}><span>{n}</span><h3>{a}</h3><p>{b}</p></article>)}</div></section>

      <section className="section insights" id="insights"><div className="section-heading split"><div><p className="eyebrow">{t.insightKicker}</p><h2>{t.insightTitle}</h2></div><p>{t.insightBody}</p></div><div className="insight-grid">{insights[lang].map(([slug,title,desc,time],i) => <article key={slug}><div className="insight-meta"><BookOpen size={19}/><span>{time}</span></div><p className="insight-index">0{i+1}</p><h3>{title}</h3><p>{desc}</p><a href={`${lang === "zh" ? "/zh" : ""}/insights/${slug}`}>{t.readArticle}<ArrowUpRight size={16}/></a></article>)}</div></section>

      <section className="quality" id="quality"><div className="quality-copy"><p className="eyebrow">{t.qualityKicker}</p><h2>{t.qualityTitle}</h2><p>{t.qualityBody}</p><a className="button light-button" href="#documents">{t.requestDocs}</a></div><div className="quality-cards">{qualityCards[lang].map(([a,b],i) => { const Icon = [FileCheck2, ShieldCheck, ScanLine][i]; return <article key={a}><Icon size={25}/><h3>{a}</h3><p>{b}</p></article>})}</div></section>

      <section className="section document-center" id="documents">
        <div className="section-heading split"><div><p className="eyebrow">{d.kicker}</p><h2>{d.title}</h2></div><p>{d.body}</p></div>
        <div className="document-block"><h3>{d.companyTitle}</h3><div className="license-grid">{d.companies.map(([name,type,src,rotation]) => <article className="license-card" key={name}><a className={`license-media ${rotation}`} href={src} target="_blank" rel="noreferrer"><img src={src} alt={`${name} ${type}`}/></a><div><Building2 size={20}/><p className="doc-meta">{type}</p><h4>{name}</h4><small>{d.supplied}</small><a className="doc-link" href={src} target="_blank" rel="noreferrer">{d.view}<ArrowUpRight size={15}/></a></div></article>)}</div></div>
        <div className="document-block"><h3>{d.complianceTitle}</h3><div className="report-grid">{d.reports.map(([title,number,date,result,links]) => <article className="report-card" key={String(number)}><div className="report-heading"><FileCheck2 size={22}/><span>{date}</span></div><h4>{title}</h4><p className="report-number">SGS · {number}</p><p>{result}</p><div className="report-links">{(links as string[]).reduce<React.ReactNode[]>((acc,item,i,array) => { if(i % 2 === 0) acc.push(<a key={item} href={array[i+1]} target="_blank" rel="noreferrer"><Download size={14}/>{item}</a>); return acc; }, [])}</div></article>)}</div></div>
        <div className="document-block"><h3>{d.catalogTitle}</h3><div className="catalog-downloads">{d.catalogs.map(([title,desc,href]) => <article key={title}><div><p className="doc-meta">PDF · 2025 Q2</p><h4>{title}</h4><p>{desc}</p></div><a href={href} target="_blank" rel="noreferrer"><Download size={17}/>{d.download}</a></article>)}</div></div>
      </section>

      <section className="section faq"><div className="section-heading"><p className="eyebrow">{t.faqKicker}</p><h2>{t.faqTitle}</h2></div><div className="faq-list">{faqs[lang].map(([q,a],i) => <details key={q}><summary className="faq-question"><span>{String(i+1).padStart(2,"0")}</span>{q}</summary><p className="faq-answer">{a}</p></details>)}</div></section>

      <section className="contact" id="contact"><div className="contact-copy"><p className="eyebrow">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><div className="contact-details"><p><span>{lang === "en" ? "Contact" : "联系人"}</span><strong>{lang === "en" ? "Li Sicheng" : "李思澄"}</strong></p><a href="tel:+8615595903230"><Phone size={18}/><span>+86 155 9590 3230</span></a><a href="https://wa.me/2349018883632" target="_blank" rel="noreferrer"><MessageCircle size={18}/><span>WhatsApp · +234 901 888 3632</span></a></div><div className="contact-note"><Check size={17}/><span>{lang === "en" ? "No certification or performance assumption is made before model review." : "型号评审前，不预设任何认证或性能结论。"}</span></div></div><form className="rfq"><div className="field-row"><label>{t.fields[0]}<Input required name="name"/></label><label>{t.fields[1]}<Input required type="email" name="email"/></label></div><div className="field-row"><label>{t.fields[2]}<Input required name="company"/></label><label>{t.fields[3]}<NativeSelect required name="type" defaultValue="" className="form-select">{formOptions.map((x,i) => <NativeSelectOption key={x} value={i ? x : ""} disabled={!i}>{x}</NativeSelectOption>)}</NativeSelect></label></div><label>{t.fields[4]}<Input name="market" placeholder={lang === "en" ? "Country / region" : "国家 / 地区"}/></label><label>{t.fields[5]}<Textarea name="requirements" rows={5} placeholder={lang === "en" ? "Application, wavelength, package, volume stage, timeline…" : "应用、波长、封装、采购阶段、时间计划……"}/></label><button className="button submit" type="button">{t.submit}</button><p className="form-note">{t.success}</p></form></section>

      <footer><div className="brand footer-brand"><span className="brand-mark">C</span><span><strong>CECL</strong><small>PHOTONICS · 中能芯光</small></span></div><p>{t.footer}</p><p className="scope">{t.scope}</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
