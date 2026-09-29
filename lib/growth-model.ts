export type GrowthLang = "en" | "zh";

type Localized = Record<GrowthLang, string>;

export type BuyerPersona = {
  id: string;
  role: Localized;
  jobs: Localized[];
  pains: Localized[];
  proofNeeded: Localized[];
  preferredCta: "specification" | "sample" | "project-review" | "documents";
};

export type CommercialPage = {
  slug: string;
  personaIds: string[];
  intent: "commercial-investigation" | "supplier-evaluation" | "project-inquiry";
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: Localized;
  description: Localized;
  eyebrow: Localized;
  h1: Localized;
  lead: Localized;
  pains: Localized[];
  capabilities: { title: Localized; body: Localized }[];
  deliverables: Localized[];
  questions: { question: Localized; answer: Localized }[];
  relatedInsights: string[];
  cta: Localized;
};

export const siteOrigin = "https://ceclphotonics.com";

export const buyerPersonas: BuyerPersona[] = [
  {
    id: "component-procurement",
    role: { en: "Component sourcing and procurement lead", zh: "器件采购与供应链负责人" },
    jobs: [
      { en: "Shortlist a credible LED or VCSEL supplier", zh: "筛选可信的 LED 或 VCSEL 供应商" },
      { en: "Compare the same specification across suppliers", zh: "在统一规格条件下比较供应商" },
      { en: "Reduce sample, quality and delivery risk", zh: "降低样品、质量和交付风险" },
    ],
    pains: [
      { en: "Catalogs use inconsistent parameters and model names", zh: "不同目录的参数和型号口径不一致" },
      { en: "Certificates are shown without clear model coverage", zh: "证书或报告没有明确覆盖型号" },
      { en: "MOQ, sample path and change control are unclear", zh: "起订量、样品流程与变更控制不清楚" },
    ],
    proofNeeded: [
      { en: "Model-level datasheet and drawing", zh: "具体型号数据表与图纸" },
      { en: "Relevant test report with scope", zh: "注明适用范围的检测报告" },
      { en: "Sample and production review path", zh: "样品与量产评审路径" },
    ],
    preferredCta: "specification",
  },
  {
    id: "optoelectronics-engineer",
    role: { en: "Optoelectronics or product engineer", zh: "光电工程师或产品研发工程师" },
    jobs: [
      { en: "Translate an application into wavelength and optical requirements", zh: "把应用需求转化为波长和光学指标" },
      { en: "Review package, optics, driver and thermal interfaces", zh: "协同评审封装、光学、驱动与散热接口" },
      { en: "Build an evaluation sample that answers engineering questions", zh: "制作能够回答工程问题的评估样品" },
    ],
    pains: [
      { en: "Peak chip data does not predict assembled-system performance", zh: "芯片峰值参数不能直接代表整机表现" },
      { en: "Optical, electrical and mechanical decisions are separated", zh: "光、电、热和结构决策相互割裂" },
      { en: "Measurement conditions are missing or not comparable", zh: "测试条件缺失或无法横向比较" },
    ],
    proofNeeded: [
      { en: "Defined test conditions and operating limits", zh: "明确的测试条件与工作范围" },
      { en: "Optical and thermal design inputs", zh: "光学与热设计输入" },
      { en: "Prototype objectives and acceptance criteria", zh: "样机目标与验收标准" },
    ],
    preferredCta: "sample",
  },
  {
    id: "beauty-brand-owner",
    role: { en: "Beauty-device brand owner or product manager", zh: "美容设备品牌方或产品经理" },
    jobs: [
      { en: "Turn a product concept into a manufacturable device", zh: "把产品概念转化为可量产设备" },
      { en: "Balance optical output, comfort, form factor and target cost", zh: "平衡光输出、舒适性、外观形态与目标成本" },
      { en: "Plan evidence for the destination market before tooling", zh: "在开模前规划目标市场证据" },
    ],
    pains: [
      { en: "OEM quotations do not define optical performance or validation scope", zh: "OEM 报价没有定义光学性能与验证范围" },
      { en: "Claims and certifications are discussed before the configuration exists", zh: "配置未定就先承诺功效和认证" },
      { en: "Design changes appear late, after industrial design or tooling", zh: "外观或开模完成后才暴露设计变更" },
    ],
    proofNeeded: [
      { en: "Application brief and optical architecture", zh: "应用简报与光学架构" },
      { en: "Prototype verification plan", zh: "样机验证计划" },
      { en: "Market-specific document gap review", zh: "目标市场资料差距评审" },
    ],
    preferredCta: "project-review",
  },
  {
    id: "quality-distributor",
    role: { en: "Distributor, quality or compliance reviewer", zh: "渠道商、质量或合规审核人员" },
    jobs: [
      { en: "Verify supplier identity and document traceability", zh: "核验供应商主体与资料追溯性" },
      { en: "Separate component evidence from finished-device evidence", zh: "区分元器件证据与整机证据" },
      { en: "Assess whether a project is ready for a target market", zh: "判断项目是否具备进入目标市场的条件" },
    ],
    pains: [
      { en: "Marketing badges replace verifiable source files", zh: "营销图标代替可核验原始文件" },
      { en: "Reports are reused outside their sample or test scope", zh: "报告被用于超出样品或测试范围的宣传" },
      { en: "Document revisions and model coverage are not indexed", zh: "资料版本与覆盖型号没有索引" },
    ],
    proofNeeded: [
      { en: "Source document, issuer, date and report number", zh: "原始文件、签发方、日期与报告编号" },
      { en: "Explicit scope and limitation statement", zh: "明确的适用范围与限制说明" },
      { en: "Model-level document index", zh: "具体型号资料索引" },
    ],
    preferredCta: "documents",
  },
];

export const valuePillars = [
  {
    id: "component-to-system",
    title: { en: "Component-to-system engineering", zh: "从器件到系统的工程协同" },
    proof: { en: "Emitter, package, optics, driver, thermal path and device interface are reviewed as one chain.", zh: "把光源、封装、光学、驱动、散热路径与设备接口作为一条链路评审。" },
  },
  {
    id: "model-specific-evidence",
    title: { en: "Model-specific evidence", zh: "证据对应具体型号" },
    proof: { en: "Catalogs and supplied reports are shown with their scope instead of being presented as blanket certification.", zh: "目录与已提供报告均标明范围，不包装成全产品或整机统一认证。" },
  },
  {
    id: "reviewable-oem",
    title: { en: "Reviewable OEM/ODM gates", zh: "可评审的 OEM/ODM 阶段" },
    proof: { en: "Brief, architecture, prototype, validation, pilot and production each produce a concrete decision.", zh: "需求、架构、样机、验证、试产和量产每一步都有明确决策输出。" },
  },
];

export const commercialPages: CommercialPage[] = [
  {
    slug: "led-chip-manufacturer",
    personaIds: ["component-procurement", "optoelectronics-engineer"],
    intent: "supplier-evaluation",
    primaryKeyword: "LED chip manufacturer",
    secondaryKeywords: ["LED chip supplier", "red LED chip", "blue green LED chip", "AlGaInP LED chip", "InGaN LED chip"],
    title: { en: "LED Chip Manufacturer for B2B Sourcing | CECL Photonics", zh: "LED 芯片制造与选型支持｜中能芯光" },
    description: { en: "Source AlGaInP red/yellow and InGaN blue/green LED chips with model-level catalog review, sample evaluation and application engineering support.", zh: "提供 AlGaInP 红黄光与 InGaN 蓝绿光 LED 芯片，并支持型号目录评审、样品验证和应用工程沟通。" },
    eyebrow: { en: "LED CHIP SOURCING", zh: "LED 芯片采购" },
    h1: { en: "LED chip sourcing built around wavelength, package and verification.", zh: "围绕波长、封装和验证开展 LED 芯片采购。" },
    lead: { en: "Compare a defined emitter requirement—not a vague catalog category. CECL supports visible and selected infrared LED sourcing from model review through sample evaluation.", zh: "用明确的发光器件要求比较供应商，而不是只比较目录大类。中能芯光支持可见光及部分红外 LED 从型号评审到样品验证。" },
    pains: [
      { en: "Wavelength and brightness bins are not compared under equivalent conditions.", zh: "波长与亮度分档没有在等效条件下比较。" },
      { en: "Package, drive and thermal constraints are discovered after sampling.", zh: "封装、驱动和散热约束在送样后才暴露。" },
      { en: "Material test reports are mistaken for finished-product certification.", zh: "材料检测报告被误认为整机认证。" },
    ],
    capabilities: [
      { title: { en: "AlGaInP families", zh: "AlGaInP 产品系列" }, body: { en: "Red, orange, yellow and yellow-green wavelength families for indication, display, sensing and application-defined light.", zh: "覆盖红、橙、黄及黄绿色波段，面向指示、显示、传感与特定光应用。" } },
      { title: { en: "InGaN families", zh: "InGaN 产品系列" }, body: { en: "Blue and green wavelength families for indicators, backlighting, specialty illumination and optical systems.", zh: "覆盖蓝光与绿光波段，面向指示、背光、特种照明与光学系统。" } },
      { title: { en: "Application review", zh: "应用评审" }, body: { en: "Align wavelength, optical output, package, operating current, heat and measurement conditions before a sample is selected.", zh: "在选定样品前对齐波长、光输出、封装、工作电流、热条件与测量条件。" } },
    ],
    deliverables: [
      { en: "Relevant 2025 Q2 catalog and candidate model list", zh: "相关 2025 Q2 产品目录与候选型号清单" },
      { en: "Model-level parameter and drawing review", zh: "具体型号参数与图纸评审" },
      { en: "Sample objective and comparison conditions", zh: "样品目标与对比测试条件" },
      { en: "Available report index with explicit scope", zh: "注明适用范围的现有报告索引" },
    ],
    questions: [
      { question: { en: "Which LED chip parameters should be fixed before requesting samples?", zh: "申请样品前应固定哪些 LED 芯片参数？" }, answer: { en: "Start with application, wavelength range, package or die requirement, electrical operating point, optical output metric, thermal condition and the measurement setup used for comparison.", zh: "至少明确应用、波长范围、芯片或封装要求、电气工作点、光输出指标、热条件以及用于比较的测量布置。" } },
      { question: { en: "Do the SGS reports certify a finished device?", zh: "SGS 报告是否等于整机认证？" }, answer: { en: "No. The published reports apply to the submitted LED chip sample and the test scope stated in each file. Finished-device evidence depends on the final configuration and destination market.", zh: "不是。本站报告仅适用于送检 LED 芯片样品及文件注明的测试范围。整机证据取决于最终配置和目标市场。" } },
    ],
    relatedInsights: ["led-vcsel-light-engine-oem-odm", "compliance-documents-phototherapy-device"],
    cta: { en: "Request LED chip specification review", zh: "申请 LED 芯片规格评审" },
  },
  {
    slug: "vcsel-chip-supplier",
    personaIds: ["optoelectronics-engineer", "component-procurement"],
    intent: "supplier-evaluation",
    primaryKeyword: "VCSEL chip supplier",
    secondaryKeywords: ["VCSEL manufacturer", "VCSEL array supplier", "940nm VCSEL", "VCSEL module", "VCSEL for proximity sensing"],
    title: { en: "VCSEL Chip Supplier & Module Development | CECL Photonics", zh: "VCSEL 芯片供应与模块开发｜中能芯光" },
    description: { en: "Evaluate VCSEL emitters, arrays and custom modules for proximity, ToF, structured illumination and industrial sensing applications.", zh: "面向接近感应、ToF、结构光和工业传感，评估 VCSEL 单管、阵列与定制模块。" },
    eyebrow: { en: "VCSEL SOURCING & INTEGRATION", zh: "VCSEL 采购与集成" },
    h1: { en: "VCSEL sources and modules for sensing-led product development.", zh: "面向传感产品开发的 VCSEL 光源与模块。" },
    lead: { en: "Move from emitter or array selection into driver, optics, thermal and module-interface review with one application brief.", zh: "通过一份应用需求，从单管或阵列选型推进到驱动、光学、散热和模块接口评审。" },
    pains: [
      { en: "Peak power is quoted without pulse, duty-cycle or thermal context.", zh: "峰值功率缺少脉冲、占空比或热条件背景。" },
      { en: "Beam and receiver requirements are not reviewed as a system.", zh: "光束与接收端要求没有按系统评审。" },
      { en: "Laser-safety inputs are postponed until the device is nearly complete.", zh: "激光安全输入被推迟到设备接近完成时。" },
    ],
    capabilities: [
      { title: { en: "Emitter and array path", zh: "单管与阵列路径" }, body: { en: "Select the source architecture around wavelength, drive mode, optical requirement and package constraints.", zh: "围绕波长、驱动模式、光学要求与封装约束选择光源架构。" } },
      { title: { en: "Module integration", zh: "模块集成" }, body: { en: "Coordinate source, optics, driver and mechanical interface for compact sensing or illumination assemblies.", zh: "协调光源、光学、驱动与机械接口，形成紧凑型传感或照明组件。" } },
      { title: { en: "Evaluation planning", zh: "评估计划" }, body: { en: "Define the operating point, beam measurement, temperature condition and acceptance criteria before prototype build.", zh: "在样机制作前定义工作点、光束测量、温度条件与验收标准。" } },
    ],
    deliverables: [
      { en: "VCSEL catalog and candidate architecture", zh: "VCSEL 目录与候选架构" },
      { en: "Optical, electrical and thermal requirement checklist", zh: "光、电、热需求检查表" },
      { en: "Evaluation sample or custom-module brief", zh: "评估样品或定制模块需求书" },
      { en: "Open-item list for safety and destination-market review", zh: "安全与目标市场评审待办清单" },
    ],
    questions: [
      { question: { en: "What should a VCSEL inquiry include?", zh: "VCSEL 询盘应包含哪些信息？" }, answer: { en: "Include application, wavelength, optical output or sensing distance, drive mode, pulse conditions, beam or field requirement, package limits, temperature range and target volume stage.", zh: "建议提供应用、波长、光输出或传感距离、驱动模式、脉冲条件、光束或视场要求、封装限制、温度范围和采购阶段。" } },
      { question: { en: "Can CECL discuss a module instead of only a bare chip?", zh: "除了芯片，中能芯光能否讨论模块？" }, answer: { en: "Yes. A project can begin at emitter or array level and progress into a module review covering optics, driver coordination, thermal path and mechanical interface.", zh: "可以。项目可从单管或阵列开始，再进入包含光学、驱动协同、散热路径与机械接口的模块评审。" } },
    ],
    relatedInsights: ["led-vcsel-light-engine-oem-odm"],
    cta: { en: "Discuss a VCSEL application", zh: "沟通 VCSEL 应用需求" },
  },
  {
    slug: "custom-optical-module-manufacturer",
    personaIds: ["optoelectronics-engineer", "component-procurement"],
    intent: "project-inquiry",
    primaryKeyword: "custom optical module manufacturer",
    secondaryKeywords: ["custom LED module", "LED light engine manufacturer", "VCSEL module supplier", "COB light engine", "optical module OEM"],
    title: { en: "Custom Optical Module & Light Engine Manufacturer | CECL", zh: "定制光学模块与光引擎制造｜中能芯光" },
    description: { en: "Develop custom LED arrays, COB light engines and VCSEL modules with coordinated optics, electronics, thermal and mechanical interfaces.", zh: "开发定制 LED 阵列、COB 光引擎与 VCSEL 模块，协同光学、电子、散热和机械接口。" },
    eyebrow: { en: "CUSTOM LIGHT ENGINES", zh: "定制光学引擎" },
    h1: { en: "Convert emitter specifications into an integration-ready optical module.", zh: "把发光器件规格转化为可集成的光学模块。" },
    lead: { en: "A light engine is defined by the interfaces between emitter, optics, drive, thermal path and housing. CECL structures those interfaces into a reviewable module brief.", zh: "光学引擎的关键在于光源、光学、驱动、散热路径与外壳之间的接口。中能芯光把这些接口整理成可评审的模块需求书。" },
    pains: [
      { en: "Components are selected before coverage and uniformity are defined.", zh: "覆盖范围与均匀性尚未定义就先选元器件。" },
      { en: "Optical and thermal targets conflict late in the enclosure design.", zh: "外壳设计后期才发现光学与热目标冲突。" },
      { en: "Prototype results cannot be translated into production inspection.", zh: "样机结果无法转化为量产检验标准。" },
    ],
    capabilities: [
      { title: { en: "LED arrays and COB", zh: "LED 阵列与 COB" }, body: { en: "Configure emitter mix, layout, board architecture and thermal interface around coverage and assembly constraints.", zh: "围绕覆盖范围和装配约束配置光源组合、布局、电路板架构与热界面。" } },
      { title: { en: "VCSEL modules", zh: "VCSEL 模块" }, body: { en: "Coordinate source, drive and optical interfaces for compact sensing or illumination modules.", zh: "面向紧凑传感或照明模块协调光源、驱动与光学接口。" } },
      { title: { en: "Production transfer", zh: "量产转移" }, body: { en: "Connect approved specification, drawings, bill of materials, inspection points and change control.", zh: "把批准规格、图纸、物料清单、检验点与变更控制连接起来。" } },
    ],
    deliverables: [
      { en: "Application and interface requirement matrix", zh: "应用与接口需求矩阵" },
      { en: "Optical/thermal architecture proposal", zh: "光学与热架构方案" },
      { en: "Prototype objective and verification plan", zh: "样机目标与验证计划" },
      { en: "Pilot-ready specification and inspection inputs", zh: "试产规格与检验输入" },
    ],
    questions: [
      { question: { en: "When should a project move from a chip to a custom module?", zh: "项目何时应从芯片进入定制模块？" }, answer: { en: "Move to a module brief when performance depends on emitter layout, optics, drive stability, heat spreading or a constrained mechanical interface that cannot be evaluated from the chip alone.", zh: "当性能取决于光源布局、光学、驱动稳定性、散热或受限机械接口，无法仅凭芯片评估时，应进入模块需求阶段。" } },
      { question: { en: "What makes a prototype production-relevant?", zh: "什么样的样机才对量产有意义？" }, answer: { en: "Its objectives, test setup, materials, interfaces and acceptance criteria must be documented so that results can become controlled production requirements.", zh: "样机目标、测试布置、材料、接口和验收标准必须可记录，才能把结果转化为受控量产要求。" } },
    ],
    relatedInsights: ["led-vcsel-light-engine-oem-odm"],
    cta: { en: "Start a custom module review", zh: "发起定制模块评审" },
  },
  {
    slug: "medical-beauty-device-oem-odm",
    personaIds: ["beauty-brand-owner", "quality-distributor"],
    intent: "project-inquiry",
    primaryKeyword: "medical beauty device OEM ODM",
    secondaryKeywords: ["LED light therapy device manufacturer", "LED face mask OEM", "red light therapy device ODM", "beauty device manufacturer China", "phototherapy device OEM"],
    title: { en: "Medical Beauty Device OEM/ODM | CECL Photonics", zh: "医疗美容设备 OEM/ODM｜中能芯光" },
    description: { en: "Develop LED light-therapy and personal-care device concepts through an optical, thermal, prototype and market-document review workflow.", zh: "通过光学、散热、样机和目标市场资料评审流程，开发 LED 光疗与个人护理设备概念。" },
    eyebrow: { en: "MEDICAL BEAUTY OEM / ODM", zh: "医疗美容 OEM / ODM" },
    h1: { en: "Build the device program around measurable light—not a marketing color list.", zh: "围绕可测量的光建立设备项目，而不是围绕营销颜色表。" },
    lead: { en: "For brand owners and distributors developing wearable, handheld or professional light-based beauty products, CECL connects emitter selection with optical uniformity, thermal comfort, controls, industrialization and document planning.", zh: "面向开发穿戴式、手持式或专业光美容产品的品牌方与渠道商，中能芯光把光源选择与光照均匀性、热舒适、控制、工业化和资料规划连接起来。" },
    pains: [
      { en: "Wavelengths are chosen from competitor claims instead of an application brief.", zh: "波长根据同行宣传选择，而不是根据应用需求。" },
      { en: "Comfort, temperature rise and optical uniformity are treated as late-stage tests.", zh: "舒适度、温升和光照均匀性被当作后期测试。" },
      { en: "Certification promises are made before intended use and target market are fixed.", zh: "预期用途和目标市场未定就先承诺认证。" },
    ],
    capabilities: [
      { title: { en: "Wearable concepts", zh: "穿戴式产品概念" }, body: { en: "Facial and scalp-care concepts reviewed around coverage, fit, eye protection, heat and session controls.", zh: "围绕覆盖范围、佩戴、眼部保护、散热与疗程控制评审面部和头皮护理概念。" } },
      { title: { en: "Handheld and professional formats", zh: "手持式与专业设备" }, body: { en: "Targeted handhelds and treatment panels structured around optical zones, serviceability and production planning.", zh: "围绕光学分区、可维护性与生产规划设计手持设备和专业护理面板。" } },
      { title: { en: "Evidence planning", zh: "证据规划" }, body: { en: "Separate component reports, device verification and destination-market evidence before commercial claims are finalized.", zh: "在确定商业宣传前区分元器件报告、整机验证与目标市场证据。" } },
    ],
    deliverables: [
      { en: "Product and destination-market brief", zh: "产品与目标市场需求书" },
      { en: "Wavelength, irradiance, uniformity and thermal target matrix", zh: "波长、辐照度、均匀性与热目标矩阵" },
      { en: "Prototype verification and acceptance plan", zh: "样机验证与验收计划" },
      { en: "Document gap list for the selected configuration", zh: "所选配置的资料差距清单" },
    ],
    questions: [
      { question: { en: "Can a component test report support finished-device claims?", zh: "元器件检测报告能否支持整机宣传？" }, answer: { en: "Not by itself. Component evidence supports only the sample and scope stated in the report. Device claims require a completed configuration, defined intended use and applicable verification for the target market.", zh: "不能单独支持。元器件证据只覆盖报告注明的样品和范围。整机宣传需要完整配置、明确预期用途以及目标市场适用验证。" } },
      { question: { en: "What is needed for an initial OEM/ODM review?", zh: "首次 OEM/ODM 评审需要什么？" }, answer: { en: "Share the product format, treatment area, desired wavelength or use case, target market, volume stage, timing, industrial-design status and any existing optical or compliance requirements.", zh: "请提供产品形态、照射区域、期望波长或使用场景、目标市场、采购阶段、时间计划、外观设计状态及现有光学或合规要求。" } },
    ],
    relatedInsights: ["wavelength-selection-medical-beauty-device", "compliance-documents-phototherapy-device"],
    cta: { en: "Request a medical beauty project review", zh: "申请医疗美容项目评审" },
  },
];

export const keywordClusters = [
  { id: "led-chip", funnel: "commercial", page: "led-chip-manufacturer", primary: "LED chip manufacturer", support: ["LED chip supplier", "AlGaInP LED chip", "InGaN LED chip", "red LED chip"] },
  { id: "vcsel", funnel: "commercial", page: "vcsel-chip-supplier", primary: "VCSEL chip supplier", support: ["VCSEL manufacturer", "940nm VCSEL", "VCSEL array", "VCSEL module"] },
  { id: "optical-module", funnel: "commercial", page: "custom-optical-module-manufacturer", primary: "custom optical module manufacturer", support: ["custom LED module", "COB light engine", "VCSEL module supplier"] },
  { id: "beauty-oem", funnel: "commercial", page: "medical-beauty-device-oem-odm", primary: "medical beauty device OEM ODM", support: ["LED face mask OEM", "red light therapy device ODM", "phototherapy device manufacturer"] },
  { id: "engineering-guides", funnel: "informational", page: "insights", primary: "photonics engineering guide", support: ["wavelength selection", "light engine design", "phototherapy compliance documents"] },
];

export const insightToCommercialPages: Record<string, string[]> = {
  "wavelength-selection-medical-beauty-device": ["medical-beauty-device-oem-odm", "led-chip-manufacturer"],
  "led-vcsel-light-engine-oem-odm": ["custom-optical-module-manufacturer", "vcsel-chip-supplier"],
  "compliance-documents-phototherapy-device": ["medical-beauty-device-oem-odm", "led-chip-manufacturer"],
};

export const contentBacklog = [
  { priority: 1, personaId: "component-procurement", intent: "comparison", targetPage: "led-chip-manufacturer", topic: "How to compare LED chip bins when suppliers use different test conditions" },
  { priority: 2, personaId: "optoelectronics-engineer", intent: "technical-evaluation", targetPage: "vcsel-chip-supplier", topic: "VCSEL inquiry checklist: pulse conditions, beam requirements and thermal limits" },
  { priority: 3, personaId: "beauty-brand-owner", intent: "project-planning", targetPage: "medical-beauty-device-oem-odm", topic: "LED face-mask OEM brief: optical, comfort, controls and evidence inputs" },
  { priority: 4, personaId: "quality-distributor", intent: "risk-review", targetPage: "medical-beauty-device-oem-odm", topic: "Component report vs finished-device evidence for light-based beauty products" },
  { priority: 5, personaId: "optoelectronics-engineer", intent: "prototype-planning", targetPage: "custom-optical-module-manufacturer", topic: "Turning an optical prototype into production inspection criteria" },
];

export const measurementModel = {
  northStar: "qualified_project_inquiries",
  ga4Events: [
    { name: "select_content", purpose: "Commercial page or insight selection", parameters: ["content_type", "content_id", "persona", "intent"] },
    { name: "view_item", purpose: "Commercial solution page view", parameters: ["items", "persona", "intent"] },
    { name: "generate_lead", purpose: "A visitor prepares a qualified inquiry", parameters: ["lead_source", "project_type", "target_market"] },
    { name: "contact", purpose: "Phone or WhatsApp contact click", parameters: ["method", "page_path", "intent"] },
    { name: "view_document", purpose: "Catalog, license or report opened", parameters: ["document_type", "document_name", "page_path"] },
  ],
  gscDimensions: ["query", "page", "country", "device", "searchAppearance", "date"],
  decisionRules: [
    "High impressions + low CTR: revise title and description to match the dominant query intent; do not change the page promise.",
    "Positions 5–20 + engaged sessions: strengthen the page with model-level evidence, internal links and a clearer answer block.",
    "Traffic + no lead action: inspect persona mismatch, proof gaps and CTA friction before adding more keywords.",
    "New query cluster repeated for 4+ weeks: map it to an existing page first; create a new page only when the user task is materially different.",
    "Commercial page ranking for informational queries: add a supporting guide and link both directions instead of bloating the sales page.",
  ],
};

export function getCommercialPage(slug: string) {
  return commercialPages.find((page) => page.slug === slug);
}
