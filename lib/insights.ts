export type InsightLang = "en" | "zh";

export type Insight = {
  slug: string;
  title: Record<InsightLang, string>;
  description: Record<InsightLang, string>;
  date: string;
  readTime: Record<InsightLang, string>;
  sections: Record<InsightLang, { heading: string; paragraphs: string[]; bullets?: string[] }[]>;
  note: Record<InsightLang, string>;
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
  }
];

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}
