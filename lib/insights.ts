export type InsightLang = "en" | "zh";

export type Insight = {
  slug: string;
  title: Record<InsightLang, string>;
  description: Record<InsightLang, string>;
  date: string;
  readTime: Record<InsightLang, string>;
  sections: Record<InsightLang, { heading: string; paragraphs: string[]; bullets?: string[] }[]>;
  note: Record<InsightLang, string>;
  sources?: { label: string; url: string }[];
};

export const insights: Insight[] = [
  {
    slug: "wavelength-selection-medical-beauty-device",
    title: { en: "Wavelength selection for a light-based beauty device", zh: "光类美容设备如何选择波长" },
    description: { en: "A practical framework for turning a desired use case into emitter, optical and validation requirements.", zh: "从应用目标出发，逐步形成光源、光学结构与验证要求的实用框架。" },
    date: "2026-09-29",
    readTime: { en: "8 min read", zh: "约 8 分钟" },
    sections: {
      en: [
        { heading: "Start with the use case, not a color chart", paragraphs: ["A wavelength is not a product claim. Begin with the intended use scenario, treatment area, user environment and destination market. These decisions influence the optical architecture, exposure controls, test plan and documentation route before an emitter is selected.", "For a B2B project, the useful first question is not ‘Which color is best?’ but ‘What measurable optical output must reach which area, for how long, under what thermal and safety constraints?’"] },
        { heading: "Define the optical requirement", paragraphs: ["Specify wavelength range, spectral tolerance, target irradiance, uniformity, working distance and illuminated area together. A strong peak output is not enough when coverage is uneven or the device cannot hold its target during a full session."], bullets: ["Target wavelength or wavelength combination", "Illuminated area and geometry", "Irradiance target and allowable variation", "Session time, duty cycle and control logic", "Working distance and optical losses"] },
        { heading: "Treat heat and comfort as optical design inputs", paragraphs: ["Electrical power that does not become useful light becomes heat. In a wearable product, skin contact, air gap, material choice and emitter density must therefore be reviewed with the optical target. In a professional panel, airflow, serviceability and zone control may matter more."] },
        { heading: "Plan verification before industrial design is frozen", paragraphs: ["Agree how wavelength, irradiance, uniformity, temperature rise and control timing will be measured. The measurement setup should represent the final device geometry. This turns the prototype into a reviewable engineering sample instead of a visual mock-up."] }
      ],
      zh: [
        { heading: "先从使用场景出发，而不是先看颜色表", paragraphs: ["波长本身不等于产品功效。项目应先明确预期使用场景、照射区域、用户环境和目标市场，因为这些条件会在选择光源之前影响光学架构、剂量控制、测试计划和资料路线。", "对 B2B 项目而言，更有价值的问题不是“哪种颜色最好”，而是“在怎样的热管理与安全约束下，需要让多少可测量光输出、以多长时间到达哪个区域”。"] },
        { heading: "把光学要求写完整", paragraphs: ["波长范围、光谱容差、目标辐照度、均匀性、工作距离和照射面积应当一起定义。峰值很高并不代表设备表现良好；如果覆盖不均，或完整疗程中无法稳定输出，参数就失去意义。"], bullets: ["目标波长或波长组合", "照射面积与几何形态", "辐照度目标及允许偏差", "疗程时长、占空比与控制逻辑", "工作距离与光学损耗"] },
        { heading: "把热与舒适性视为光学设计条件", paragraphs: ["没有转化为有效光输出的电功率最终会成为热量。穿戴式产品必须把皮肤接触、空气间隙、材料与光源密度和光学目标一起评审；专业面板则可能更关注风道、维护性和分区控制。"] },
        { heading: "在外观定型前规划验证", paragraphs: ["项目应提前约定波长、辐照度、均匀性、温升和控制时序的测量方式，并让测量布置尽量代表最终设备结构。这样，样机才是可评审的工程样品，而不只是外观模型。"] }
      ]
    },
    note: { en: "Final device claims and applicable approvals depend on the completed design and destination market. This article is an engineering overview, not medical or regulatory advice.", zh: "最终产品功效表述和适用认证取决于完整设计及目标市场。本文为工程概览，不构成医疗或法规建议。" }
  },
  {
    slug: "led-vcsel-light-engine-oem-odm",
    title: { en: "From LED or VCSEL chip to a manufacturable light engine", zh: "从 LED 或 VCSEL 芯片到可量产光学引擎" },
    description: { en: "Why package, optics, drive, heat and mechanical integration should be reviewed as one system.", zh: "为什么封装、光学、驱动、散热和结构必须作为一个系统评审。" },
    date: "2026-09-29",
    readTime: { en: "7 min read", zh: "约 7 分钟" },
    sections: {
      en: [
        { heading: "The chip is the start of the system", paragraphs: ["Emitter efficiency, wavelength and beam characteristics set the foundation, but users experience the assembled light engine. Package selection, optical losses, driver behavior, thermal resistance and mechanical tolerances determine whether the device can repeat its intended output."] },
        { heading: "Five interfaces to review together", paragraphs: ["A manufacturable module is created at the boundaries between disciplines. Reviewing these interfaces early reduces late redesign and makes supplier responsibility clearer."], bullets: ["Die or package to PCB and thermal path", "Emitter to lens, diffuser or light guide", "Driver current to optical output stability", "Module to housing and service access", "Specification to inspection method and traceability"] },
        { heading: "Prototype for decisions, not demonstration", paragraphs: ["Every prototype should answer agreed questions: optical distribution, temperature rise, power consumption, mechanical fit or control behavior. A staged build can begin with an optical evaluation board, then progress to an integrated engineering sample and pilot-ready assembly."] },
        { heading: "Release production with controlled evidence", paragraphs: ["The production package should connect the approved specification, drawings, bill of materials, inspection points and change-control rules. Component substitutions must be evaluated against optical and thermal performance, not only electrical compatibility."] }
      ],
      zh: [
        { heading: "芯片只是系统的起点", paragraphs: ["光源效率、波长与光束特性决定基础能力，但用户实际体验的是装配完成后的光学引擎。封装选择、光学损耗、驱动表现、热阻和结构公差共同决定设备能否重复输出预期性能。"] },
        { heading: "五个接口必须协同评审", paragraphs: ["真正可量产的模块形成于不同工程专业的交界处。越早评审这些接口，越能减少后期返工，并明确供应责任。"], bullets: ["芯片或封装到电路板及散热路径", "光源到透镜、扩散片或导光结构", "驱动电流到光输出稳定性", "模块到外壳及维护空间", "产品规格到检验方法及追溯要求"] },
        { heading: "样机应当用于做决策，而不是只用于展示", paragraphs: ["每一版样机都应回答事先约定的问题，例如光分布、温升、功耗、结构适配或控制行为。项目可从光学评估板开始，逐步推进到整合工程样机与试产组件。"] },
        { heading: "带着受控证据放行量产", paragraphs: ["量产资料应把批准规格、图纸、物料清单、检验点与变更控制规则连接起来。元器件替代不能只看电气兼容，还要评估光学和热性能。"] }
      ]
    },
    note: { en: "CECL component catalogs and supplied test reports are available in the website document center. Model-level review is still required for every project.", zh: "网站资料中心提供中能芯光产品目录及已提交检测报告；每个项目仍需进行具体型号评审。" }
  },
  {
    slug: "compliance-documents-phototherapy-device",
    title: { en: "What documents should a phototherapy-device buyer request?", zh: "采购光疗设备应索取哪些资料？" },
    description: { en: "Separate component test reports, device verification and destination-market evidence before placing an order.", zh: "在下单前区分元器件检测、整机验证及目标市场合规证据。" },
    date: "2026-09-29",
    readTime: { en: "6 min read", zh: "约 6 分钟" },
    sections: {
      en: [
        { heading: "Ask what the document actually covers", paragraphs: ["A test report, declaration or certificate should identify the applicant or manufacturer, sample or model, standard or method, date and conclusion. A component report cannot automatically establish compliance of a finished device, and a family certificate should not be assumed to cover an unlisted configuration."] },
        { heading: "Build the file in three layers", paragraphs: ["Organizing evidence by layer makes gaps easier to see and prevents marketing language from replacing engineering review."], bullets: ["Company layer: legal registration and supplier identity", "Component layer: datasheets, drawings, material or substance test reports", "Finished-device layer: risk, electrical, optical, thermal, EMC, software and market-specific evidence as applicable"] },
        { heading: "Match the evidence to the target market", paragraphs: ["Product classification, intended use, claims, power source, wireless functions and sales territory affect the documentation route. Define these before quotations are compared so that suppliers are pricing the same scope."] },
        { heading: "Use a model-level document index", paragraphs: ["Create one index for the exact quoted configuration. Record document number, revision, model coverage, issuer, date and open items. This is more useful than a page of certification logos because procurement and engineering can verify each item."] }
      ],
      zh: [
        { heading: "先问清楚资料到底覆盖什么", paragraphs: ["检测报告、声明或证书应明确申请方或制造商、样品或型号、标准或方法、日期与结论。元器件报告不能自动证明整机合规，系列证书也不应默认覆盖未列出的配置。"] },
        { heading: "按三层建立资料包", paragraphs: ["按层级组织证据更容易发现缺口，也能避免用营销口号代替工程评审。"], bullets: ["企业层：合法登记与供应商主体信息", "元器件层：数据表、图纸、材料或物质检测报告", "整机层：视产品适用的风险、电气、光学、热、EMC、软件及市场专项资料"] },
        { heading: "让证据与目标市场匹配", paragraphs: ["产品分类、预期用途、功效表述、供电方式、无线功能及销售地区都会影响资料路线。应在比较报价前定义这些条件，确保不同供应商报的是同一范围。"] },
        { heading: "为具体型号建立资料索引", paragraphs: ["针对报价中的准确配置建立一份资料清单，记录文件编号、版本、覆盖型号、签发方、日期和待补项。这比罗列一页认证标志更有价值，因为采购和工程人员可以逐项核验。"] }
      ]
    },
    note: { en: "The CECL document center states the scope of each supplied file and avoids presenting component reports as blanket finished-device certification.", zh: "中能芯光网站资料中心会说明每份已提交文件的适用范围，不把元器件报告包装成整机统一认证。" }
  },
  {
    slug: "940nm-vcsel-selection-guide",
    title: { en: "940 nm VCSEL selection guide for sensing projects", zh: "传感项目的 940 nm VCSEL 选型指南" },
    description: { en: "A buyer-focused method for comparing optical power, pulse conditions, beam, efficiency and thermal limits before requesting samples.", zh: "在索取样品前，系统比较光功率、脉冲条件、光束、效率与热限制的采购方法。" },
    date: "2026-09-29",
    readTime: { en: "9 min read", zh: "约 9 分钟" },
    sections: {
      en: [
        { heading: "Define the operating point before comparing watts", paragraphs: ["A headline optical-power value is meaningful only with its drive current, pulse width, duty cycle, temperature and measurement condition. Two arrays advertised at the same wavelength and nominal power can behave very differently in a time-of-flight or structured-light design."], bullets: ["Peak or continuous optical output", "Pulse width, repetition rate and duty cycle", "Operating and junction-temperature assumptions", "Drive-current waveform and allowed overshoot"] },
        { heading: "Translate the application into a beam requirement", paragraphs: ["The receiver field of view, working distance and illumination pattern determine whether the source needs a bare array, diffuser, lens or complete module. Ask for far-field distribution and test geometry; a single divergence number may hide asymmetric or multi-lobed behavior."] },
        { heading: "Review efficiency and heat as a system", paragraphs: ["Wall-plug efficiency, electrical resistance, driver loss, PCB thermal path and enclosure conditions jointly affect temperature rise. Evaluate the intended pulse train on a representative board instead of extrapolating from a short bench test."] },
        { heading: "Build a sample request that produces comparable evidence", paragraphs: ["Give suppliers the same target conditions and request model-level curves, dimensions, optical test conditions and traceability. Then measure every sample with the same fixture and acceptance criteria."], bullets: ["Target wavelength and tolerance", "Required output at a defined pulse condition", "Beam or field-of-illumination requirement", "Package, footprint and thermal interface", "Quantity stage and destination application"] }
      ],
      zh: [
        { heading: "比较功率前先定义工作点", paragraphs: ["光功率标称值只有与驱动电流、脉宽、占空比、温度和测量条件一起看才有意义。即使波长与标称功率相同，不同阵列在 ToF 或结构光设计中的表现也可能明显不同。"], bullets: ["峰值或连续光输出", "脉宽、重复频率与占空比", "工作温度与结温假设", "驱动电流波形及允许过冲"] },
        { heading: "把应用要求转换成光束要求", paragraphs: ["接收端视场角、工作距离和照明图案决定光源应使用裸阵列、扩散片、透镜还是完整模块。应索取远场分布及测试几何；单一发散角数字可能掩盖不对称或多峰光束。"] },
        { heading: "把效率与散热作为系统问题评审", paragraphs: ["电光转换效率、电阻、驱动损耗、电路板热路径和外壳条件共同决定温升。应在具有代表性的电路板上验证目标脉冲序列，而不是从短时台架测试简单外推。"] },
        { heading: "让样品申请形成可比较的证据", paragraphs: ["向不同供应商提供同一组目标条件，并索取具体型号的曲线、尺寸、光学测试条件与追溯信息，再用同一夹具和验收标准测量所有样品。"], bullets: ["目标波长及容差", "明确脉冲条件下的输出要求", "光束或照明视场要求", "封装、焊盘与热界面", "采购阶段、数量及目标应用"] }
      ]
    },
    note: { en: "Laser-product safety and finished-system classification require a design-specific assessment. This guide is for supplier comparison and does not replace that assessment.", zh: "激光产品安全和整机分类必须按具体设计进行评估。本文用于供应商比较，不能替代该评估。" },
    sources: [
      { label: "ams OSRAM — VCSEL product portfolio", url: "https://ams-osram.com/products/lasers/color-lasers-vcsel" },
      { label: "Lumentum — Sensing VCSEL products", url: "https://www.lumentum.com/en/products/sensing-vcsel" }
    ]
  },
  {
    slug: "compare-led-chip-specifications",
    title: { en: "How to compare LED chips beyond wavelength and price", zh: "如何超越波长与价格比较 LED 芯片" },
    description: { en: "A procurement checklist covering bins, optical output, voltage, test conditions, package interfaces and change control.", zh: "覆盖分档、光输出、电压、测试条件、封装接口与变更控制的采购清单。" },
    date: "2026-09-29",
    readTime: { en: "8 min read", zh: "约 8 分钟" },
    sections: {
      en: [
        { heading: "Compare values measured under the same conditions", paragraphs: ["Peak wavelength, dominant wavelength, radiant flux, luminous flux and forward voltage answer different questions. Before comparing suppliers, normalize test current, pulse or continuous operation, temperature, integrating-sphere setup and bin limits."] },
        { heading: "Choose the metric that matches the application", paragraphs: ["Visible indicators may be evaluated with photometric quantities, while sensing, machine vision and many light-based devices need radiometric data. The selected metric should follow the optical function rather than whichever number looks larger."], bullets: ["Spectral distribution and wavelength tolerance", "Radiant or luminous output at a stated current", "Forward-voltage range and driver headroom", "Viewing angle or radiation pattern", "Thermal resistance and maximum ratings"] },
        { heading: "Treat binning as a commercial specification", paragraphs: ["A typical value is not an incoming-inspection limit. Define which wavelength, output and voltage bins are accepted, whether bins may be mixed, how reels or lots are labeled and what happens when supply shifts to another bin."] },
        { heading: "Connect the datasheet to incoming inspection", paragraphs: ["Record the exact part, revision and measurement method used for approval. A practical control plan aligns supplier documentation, sample qualification, incoming inspection and change notification instead of relying on a generic family brochure."] }
      ],
      zh: [
        { heading: "只比较相同条件下测得的数据", paragraphs: ["峰值波长、主波长、辐射通量、光通量和正向电压回答的是不同问题。比较供应商前，应统一测试电流、脉冲或连续模式、温度、积分球设置与分档范围。"] },
        { heading: "按应用选择正确指标", paragraphs: ["可见光指示器可能使用光度学量，而传感、机器视觉和许多光类设备需要辐射度学数据。指标应服务于光学功能，而不是选择看起来更大的数字。"], bullets: ["光谱分布与波长容差", "规定电流下的辐射或光度输出", "正向电压范围与驱动余量", "视角或辐射图形", "热阻与最大额定值"] },
        { heading: "把分档写进商务规格", paragraphs: ["典型值不是来料验收限。应定义可接受的波长、输出和电压档位，是否允许混档，卷盘或批次如何标识，以及供应切换档位时如何处理。"] },
        { heading: "让数据表与来料检验连接", paragraphs: ["记录批准时使用的准确料号、版本和测量方法。有效的控制计划应把供应商资料、样品确认、来料检验与变更通知连接起来，而不是只依赖通用系列宣传册。"] }
      ]
    },
    note: { en: "Actual acceptance limits should be agreed for the selected CECL model and the customer’s measurement capability.", zh: "实际验收限应根据选定的中能芯光型号及客户的测量能力共同确认。" },
    sources: [{ label: "Lumileds — Technical documentation library", url: "https://lumileds.com/support/documentation/" }]
  },
  {
    slug: "led-face-mask-oem-engineering-checklist",
    title: { en: "LED face mask OEM/ODM engineering checklist", zh: "LED 面罩 OEM/ODM 工程核对清单" },
    description: { en: "The questions brand owners should settle across optics, thermal comfort, controls, validation and manufacturing before tooling.", zh: "品牌方在开模前应明确的光学、热舒适、控制、验证与制造问题。" },
    date: "2026-09-29",
    readTime: { en: "10 min read", zh: "约 10 分钟" },
    sections: {
      en: [
        { heading: "Freeze the intended product before freezing the housing", paragraphs: ["Target user, use environment, session concept, markets and commercial claims shape the engineering and documentation route. A cosmetic concept and a medical intended use are not interchangeable, even when the enclosure appears similar."] },
        { heading: "Specify delivered light, not only LED count", paragraphs: ["Emitter count does not define performance. Review spectral range, irradiance at the user plane, uniformity, distance to skin, optical losses, timing and output stability over a full session."], bullets: ["Wavelength combination and tolerance", "Treatment area and uniformity map", "Irradiance and session-control targets", "Eye-area design and misuse considerations", "Method and fixture for optical verification"] },
        { heading: "Validate heat, fit and control behavior together", paragraphs: ["Temperature, weight distribution, flexibility, strap geometry, battery position and user interface affect whether the designed light can be delivered consistently. Verify representative users and worst-case operating conditions before production tooling is released."] },
        { heading: "Create manufacturing gates before pilot build", paragraphs: ["An OEM/ODM plan should identify critical characteristics, golden samples, inspection fixtures, firmware revision control, component-change approval and pilot acceptance. Each gate needs an owner and a recordable output."], bullets: ["Requirements and risk review", "Optical/thermal engineering sample", "Design verification configuration", "Pilot build and process capability review", "Approved production file and change control"] }
      ],
      zh: [
        { heading: "先冻结产品定位，再冻结外壳", paragraphs: ["目标用户、使用环境、疗程概念、销售市场和宣传表述会影响工程及资料路线。即使外壳相似，美容概念和医疗预期用途也不能互换。"] },
        { heading: "定义到达用户面的光，而不仅是灯珠数量", paragraphs: ["光源数量不能直接代表性能。项目应评审光谱范围、用户面辐照度、均匀性、皮肤距离、光学损耗、时序以及完整疗程中的输出稳定性。"], bullets: ["波长组合及容差", "照射区域与均匀性图", "辐照度及疗程控制目标", "眼周设计与误用考虑", "光学验证方法与夹具"] },
        { heading: "把温升、佩戴与控制行为一起验证", paragraphs: ["温度、重量分布、柔性、绑带几何、电池位置和交互界面都会影响设计光输出能否稳定送达。生产开模前，应覆盖代表性用户和最不利工作条件。"] },
        { heading: "试产前建立制造关卡", paragraphs: ["OEM/ODM 计划应明确关键特性、黄金样品、检验夹具、固件版本控制、元器件变更批准和试产验收。每个关卡都需要负责人和可记录的输出。"], bullets: ["需求与风险评审", "光学/热工程样机", "设计验证配置", "试产与过程能力评审", "批准的量产资料及变更控制"] }
      ]
    },
    note: { en: "Product classification, claims, testing and market access depend on the final design and destination. This checklist is a project-planning aid, not medical or regulatory advice.", zh: "产品分类、功效表述、测试及市场准入取决于最终设计和销售目的地。本文为项目规划工具，不构成医疗或法规建议。" },
    sources: [
      { label: "Celluma — Professional light-therapy overview", url: "https://www.celluma.com/pages/for-professionals" },
      { label: "Omnilux — Business resources", url: "https://wholesale.omniluxled.com/pages/business-resources" }
    ]
  }
];

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}
