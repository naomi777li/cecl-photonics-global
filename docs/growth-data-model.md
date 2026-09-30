# 中能芯光外贸站增长数据模型

这个文件规定建站、SEO、GEO/AEO、内容和转化优化的共同决策基础。可执行数据位于 `lib/growth-model.ts`，商业页、站点地图、结构化数据与监测规则均从该模型获取信息。

## 1. 北极星指标

不以流量或关键词数量为最终目标，而是以 `qualified_project_inquiries`（有效项目询盘）为北极星指标。有效询盘应至少包含应用、项目类型、目标市场与一项技术或商务输入。

## 2. 用户画像

1. 器件采购与供应链负责人：关心型号可比性、资料范围、样品、质量和交付风险。
2. 光电或产品工程师：关心波长、光功率、封装、驱动、散热、光学与测试条件的系统协同。
3. 美容设备品牌方或产品经理：关心从产品概念到可量产设备的全流程，以及目标市场资料路线。
4. 渠道、质量或合规审核人员：关心主体真实性、原始文件、型号覆盖和证据边界。

## 3. 核心卖点

- 从器件到系统的工程协同，而不是单纯销售芯片。
- 把证据绑定到具体型号与文件范围，不使用笼统认证口号。
- OEM/ODM 按需求、架构、样机、验证、试产和量产分阶段评审。

## 4. 搜索意图与页面映射

| 主要搜索意图 | 商业页 | 主要用户 |
|---|---|---|
| LED chip manufacturer | `/solutions/led-chip-manufacturer/` | 采购、工程师 |
| VCSEL chip supplier | `/solutions/vcsel-chip-supplier/` | 工程师、采购 |
| custom optical module manufacturer | `/solutions/custom-optical-module-manufacturer/` | 工程师、项目采购 |
| medical beauty device OEM ODM | `/solutions/medical-beauty-device-oem-odm/` | 品牌方、渠道、质量 |

每个页面只服务一个核心任务。同义词和长尾词在同一页面内自然解答，不为每个变体批量建页。

## 5. SEO / GEO / AEO 执行规则

- 标题、H1、首屏与 CTA 必须对应同一搜索意图。
- 将可验证的规格、测试条件、文件范围和项目交付物放在营销语言之前。
- 文章必须为工程或采购决策提供原创信息，并与相关商业页双向链接。
- 保持英文与中文独立 URL，配置 canonical 和 hreflang。
- 结构化数据只标注页面真实可见的内容，不制造评分、价格或虚假认证。
- GEO/AEO 不依赖“秘密标记”；核心是可爬取、非同质化、可验证且容易引用的内容。

## 6. GSC + GA4 闭环

GA4 收集 `select_content`、`view_item`、`rfq_submit`、`rfq_submit_error`、`contact` 和 `view_document`；其中 `rfq_submit` 仅在邮件服务确认接受后触发，GSC 使用 query、page、country、device、search appearance 和 date 维度。

将标准化导出数据放入：

- `data/analytics/gsc.json`：`query, page, clicks, impressions, ctr, position`
- `data/analytics/ga4.json`：`pagePath, sessions, engagedSessions, leads, whatsappClicks, phoneClicks, documentViews`

执行：

```bash
node --experimental-strip-types scripts/analyze-growth-data.mjs
```

脚本会生成 `data/analytics/recommendations.md`。调整顺序是：先核对用户与意图，再补证据与内链，最后才考虑增加新页或关键词。

## 7. 待接入配置

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`：GA4 Measurement ID。
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`：Google Search Console HTML 标签验证值。

这两项为帐户级配置，不应在代码中写死或公开敏感凭据。
