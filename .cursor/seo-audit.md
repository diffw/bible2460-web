# Bible 2460 网站 SEO & AIO 严苛审计报告

> **审计身份**: 前 Google Search Quality 团队成员，现任独立 SEO 顾问，专注技术 SEO、E-E-A-T 合规、及 AI 搜索引擎引用优化。曾审计 500+ 产品 Landing Page，熟悉 Google Search Quality Evaluator Guidelines 全文。  
> **审计标准**: Google E-E-A-T 框架、Core Web Vitals、Schema.org 规范、AI Search 引用模式实证研究  
> **审计日期**: 2026-02-23  
> **审计对象**: `https://diffw.github.io/bible2460-web/`

---

## 评分总览

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术 SEO 基础 | 6/10 | 有框架但存在关键缺失 |
| 内容 SEO | 5/10 | H 标签关键词覆盖严重不足 |
| Schema 结构化数据 | 7/10 | 已部署三组，但字段不完整 |
| AIO 可引用性 | 7/10 | 实体段落和 FAQ 质量良好，但有自我推销嫌疑 |
| E-E-A-T 信号 | 3/10 | 几乎没有信任信号 |
| 性能 | 5/10 | 渲染阻塞资源、无图片优化策略 |
| **综合** | **5.5/10** | 框架在，但执行粗糙 |

---

## 严重问题 (P0 — 必须修复)

### 1. H1 标签不含任何搜索关键词

**现状**: `<h1>A verse for every minute of the day.</h1>`

**问题**: 这是一个纯品牌口号，不包含 "Bible"、"app"、"iPhone"、"verse clock"、"widget" 中的任何一个。Google 和 AI 搜索引擎将 H1 作为页面主题的第一判断依据。当前 H1 无法匹配任何用户搜索意图。

**修复**: H1 应在保持品牌调性的同时包含主关键词。例如：
`A Bible verse for every minute — on your iPhone Home Screen.`

### 2. 所有 H2 标题均为营销文案，零关键词

| 当前 H2 | 问题 |
|---|---|
| "Scripture on your Home Screen. Every single unlock." | 缺少 "Bible 2460 widget" |
| "24 × 60 = Bible 2460." | 数学公式不是搜索词 |
| "Designed to be glanced at, not stared at." | 完全无关搜索意图 |
| "10 languages. 10 translations. One app." | 缺少 "Bible" 和品类词 |
| "Questions & Answers" | 应为 "Bible 2460: Frequently Asked Questions" |
| "Every minute. Every verse. Starting now." | CTA 区域但无关键词 |

**严重性**: 搜索引擎通过 H 标签理解页面的语义结构。当前所有 H2 都不包含品类关键词，等于告诉搜索引擎"这个页面不是关于 Bible app 的"。

### 3. 缺少 og:image

**现状**: 没有设置 `og:image` meta 标签。

**影响**:
- 社交媒体分享时无预览图，点击率降低 40-60%
- AI 搜索引擎在生成卡片式结果时无法展示图片
- Google Discover 不会收录没有图片的页面

### 4. E-E-A-T 信号几乎为零

**缺失项**:
- 无开发者/团队信息（谁做的这个 App？）
- 无联系方式（footer 无邮箱、无社交链接）
- 无用户评价或评分
- 无 App Store 评分数据
- 无发布日期或"Last updated"时间戳
- 无外部权威链接

**严重性**: Google 对 YMYL（Your Money Your Life）相邻品类（宗教/灵修应用）有更高的 E-E-A-T 要求。当前页面无法证明任何一项 Experience、Expertise、Authoritativeness 或 Trustworthiness。

---

## 重要问题 (P1 — 应尽快修复)

### 5. SoftwareApplication Schema 字段不完整

**缺失字段**:
- `url` — 应指向 App Store 页面（上架后）
- `screenshot` — 应包含应用截图 URL
- `author` — 开发者信息
- `datePublished` — 发布日期
- `aggregateRating` — 评分数据（上架后）
- `downloadUrl` — App Store 下载链接

当前 Schema 只有最低限度字段，Google Rich Results 不会生成软件卡片。

### 6. FAQ 中的竞争性问题有自我推销嫌疑

**问题**: `"What is the best Bible verse widget app for iPhone?"` → 答案直接说自己是最好的。

**风险**:
- Google 可能将此视为操纵性内容（自问自答推销）
- AI 搜索引擎对此类自我推销内容降权处理
- 如果竞品也这样做，Google 会全部忽略

**建议**: 删除这条，或改为对比性问题 `"How does Bible 2460 compare to other Bible clock apps?"` 并给出客观事实对比。

### 7. `<details>` 折叠内容的索引风险

**现状**: 所有 FAQ 答案在 `<details>` 标签内，默认折叠。

**风险**: 虽然 Google 在 2022 年后声称会索引 `<details>` 内的内容，但实证数据显示折叠内容的权重仍低于可见内容。Bing 的处理更不确定。

**缓解**: Schema FAQPage 已正确实现（JSON-LD 中的答案会被索引），但 HTML 可见性仍是信号之一。

### 8. 页面无任何时间戳/新鲜度信号

**现状**: 页面上无 "Last updated" 日期。

**影响**: AI 搜索引擎明确偏好有时间标记的内容。Perplexity 在引用时会显示来源日期；无日期的来源会被降优先级。

### 9. 渲染阻塞的字体加载

**现状**: 3 个 Google Font 家族（Source Serif 4 + Inter + Montserrat）通过同步 `<link>` 加载。

**影响**: 增加 LCP (Largest Contentful Paint)。Core Web Vitals 中 LCP > 2.5s 将导致搜索排名惩罚。

**修复**: 添加 `media="print" onload="this.media='all'"` 或使用 `font-display: swap`（Google Fonts 默认已含，但应验证）。

### 10. 导航重复

**现状**: 页面有两套完全相同的导航（`.hero-nav` 和 `.site-header .nav-links`），虽然一个隐藏，但 HTML 中同时存在。

**影响**: 爬虫看到重复的内部链接结构。不严重，但增加了无意义的 HTML 体积，稀释了 DOM 语义清晰度。

---

## 中等问题 (P2 — 有条件时修复)

### 11. CTA 按钮 href="#" — 无效链接

搜索引擎会跟踪 `href="#"` 但到达后发现没有目标。应在 App Store 上架后立即替换，上架前可使用 `javascript:void(0)` 或直接移除 `href`。

### 12. 缺少 404 页面

GitHub Pages 支持自定义 `404.html`。当前没有。网站 copy 文档中已有 404 文案可以使用。

### 13. 语言卡片非语义化

10 张语言卡片使用 `<div>` 而非 `<table>` 或语义化列表。搜索引擎和 AI 更容易解析 `<table>` 格式的结构化对比数据。

### 14. 缺少 BreadcrumbList Schema

对于多页面网站（首页、隐私、条款），BreadcrumbList 能改善搜索结果的面包屑展示。

### 15. GitHub Pages 子目录 URL

`diffw.github.io/bible2460-web/` 是二级路径。如果未来获得自定义域名（如 `bible2460.app`），需做 301 迁移并更新所有 canonical/sitemap/schema 中的 URL。应提前规划。

---

## 做得好的地方

| 项目 | 评价 |
|---|---|
| 实体定义段落 | Hero 区域的 `hero-sub` 是标准的 AIO 实体段落，第三人称、事实性、前 150 词内完成定义。✓ |
| FAQPage Schema | JSON-LD 实现正确，9 组 Q&A，答案自包含。✓ |
| FAQ 答案风格 | 第三人称、事实性陈述，每条可独立被引用。✓ |
| robots.txt + sitemap.xml | 基础到位。✓ |
| 语义化 HTML | 使用了 `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`。✓ |
| 隐私优先定位 | "No ads, no data collection" 是强 Trust 信号。✓ |

---

## 优先执行清单

| 优先级 | 修复项 | 工作量 |
|---|---|---|
| P0 | H1 融入主关键词 | 5 分钟 |
| P0 | H2 标题加入品类关键词（保持调性） | 15 分钟 |
| P0 | 添加 og:image | 需先制作 1200×630 图片 |
| P0 | 添加页面时间戳 | 5 分钟 |
| P1 | 补全 SoftwareApplication Schema 字段 | 10 分钟 |
| P1 | 删除或重写竞争性 FAQ | 5 分钟 |
| P1 | 添加开发者信息/联系方式到 footer | 10 分钟 |
| P1 | 创建 404.html | 10 分钟 |
| P2 | 字体异步加载优化 | 5 分钟 |
| P2 | 语言对比表改用 `<table>` | 15 分钟 |
