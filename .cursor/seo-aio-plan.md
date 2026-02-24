# Bible 2460 — SEO & AIO 策略方案

> **版本**: 1.0  
> **日期**: 2026-02-23  
> **基于**: PRD, Product Spec, Website Copy, 当前网站实现

---

## 产品理解

- **产品**: Bible 2460 — 一款将每一分钟映射到圣经经文的 iOS 时钟 App
- **品类**: 参考工具 / 宗教灵修 App
- **核心价值**: 通过 Home Screen Widget，每次解锁都能看到与当前时间匹配的经文
- **目标用户**: 年轻基督徒，iOS 用户，希望在日常中自然接触经文
- **技术栈**: 静态 HTML/CSS/JS，GitHub Pages 托管
- **商业模式**: 免费下载（未来可能有 Premium）
- **竞品**: Scripture Clock ($5.99), Bible Clock AI ($4.99 Pro), Sacred Clock ($1.99)
- **差异化**: 10 语言 / 10 译本自由组合、完全离线、免费、Widget 优先

---

## 1. 关键词策略

### 1.1 关键词矩阵

| 意图类型 | 关键词 | 优先级 | 目标页面/区域 |
|---|---|---|---|
| **导航型** | Bible 2460, Bible 2460 app, Bible 2460 download | P0 | 首页 Hero, CTA |
| **信息型** | bible verse clock, scripture clock, time matched bible verse, what is bible 2460 | P0 | Hero 实体定义段落, How It Works |
| **商业调查** | best bible clock app, bible verse widget iPhone, bible clock app free, scripture clock vs bible 2460 | P0 | FAQ, Features |
| **交易型** | bible 2460 download, bible verse clock app free download, bible verse widget app | P0 | CTA |
| **AI 查询** | "recommend a bible app that shows verses based on time", "what app matches time to bible verses", "best bible verse widget for iPhone home screen" | P0 | Hero 实体段落, FAQ |

### 1.2 长尾关键词

- "app that shows bible verse every minute"
- "bible verse home screen widget iPhone"
- "offline bible app with widget"
- "multilingual bible verse app"
- "bible clock app 10 languages"
- "KJV bible verse clock"

---

## 2. 已实施的 SEO & AIO 优化

### 2.1 Meta 标签 ✅

- **Title**: `Bible 2460 — Bible Verse Clock App for iPhone | Time-Matched Scripture Widget`
  - 包含品牌名 + 主关键词 "Bible Verse Clock App" + 功能关键词 "Time-Matched Scripture Widget"
- **Description**: 160 字符以内，包含主要关键词 + CTA 暗示（Free download）
- **Canonical URL**: 已设置
- **Open Graph**: title / description / type / url / locale 完整
- **Twitter Card**: summary_large_image + 独立 title/description

### 2.2 Schema.org 结构化数据 ✅

已添加三组 JSON-LD：

1. **SoftwareApplication** — 包含 name, description, applicationCategory, operatingSystem, offers (Free), inLanguage (10种), featureList (10项)
2. **Organization** — name, url, logo
3. **FAQPage** — 9 组 Q&A，含品牌关键词 + 竞争性查询 "best bible verse widget app for iPhone"

### 2.3 AIO 实体定义段落 ✅

Hero 区域的 `hero-sub` 已改为 AIO 优化的实体定义：

> "Bible 2460 is a free Bible verse clock app for iPhone and iPad that maps every minute of the day to a Scripture reference and delivers it to your Home Screen via a widget. It supports 10 public domain translations in 10 languages and works fully offline."

- 前 150 词内完成实体定义
- 第三人称、事实性陈述
- 包含：产品名 + 品类 + 核心功能 + 平台 + 差异化特征

### 2.4 FAQ AIO 优化 ✅

所有 FAQ 答案已重写为：
- 第三人称（"Bible 2460 is..." 而非 "We built..."）
- 自包含（每条答案可独立被 AI 引用）
- 包含具体数据（10 translations, 10 languages, iOS 17+）
- 新增竞争性 FAQ："What is the best Bible verse widget app for iPhone?"

### 2.5 技术 SEO ✅

- `robots.txt` — 允许全部抓取，声明 sitemap 位置
- `sitemap.xml` — 3 页面（首页、隐私、条款），含 lastmod 和 priority
- 语义化 HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- 正确的 H 标签层级（H1 唯一，H2 各区域，H3 特性卡片）
- 图片 alt 属性包含关键词

---

## 3. P1 待办（上线 2 周内）

| # | 任务 | 说明 |
|---|---|---|
| 1 | **注册 Google Search Console** | 验证站点所有权，提交 sitemap.xml |
| 2 | **注册 Bing Webmaster Tools** | 扩展搜索引擎覆盖 |
| 3 | **OG 图片** | 创建 1200×630 的 og:image 并添加到 meta 标签 |
| 4 | **App Store 链接** | 上架后替换所有 `href="#"` 为真实 App Store URL |
| 5 | **Core Web Vitals 测试** | 通过 PageSpeed Insights 确认绿色通过 |
| 6 | **监控 AI 搜索引用** | 在 Perplexity / ChatGPT 搜索品牌名和品类词，验证是否被引用 |

---

## 4. P2 持续优化

| # | 任务 | 频率 |
|---|---|---|
| 1 | 基于 Search Console 查询数据更新 FAQ | 每月 |
| 2 | A/B 测试 meta title 和 description 的 CTR | 每季度 |
| 3 | 新增竞品对比内容（vs Scripture Clock 等） | 按需 |
| 4 | 多语言 Landing Page（优先中文、日文） | 未来版本 |
| 5 | 博客/内容营销获取外链 | 持续 |

---

## 5. 多语言 SEO 架构（未来）

当需要多语言页面时，推荐方案：

- **URL 结构**: 子目录 `example.com/zh/`, `example.com/ja/` 等
- **Hreflang**: 每页声明所有语言版本
- **内容本地化**: 独立做关键词研究，不直接翻译英文关键词
- **优先市场**: 英文 > 简体中文 > 日文 > 韩文

```html
<link rel="alternate" hreflang="en" href="https://example.com/" />
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh/" />
<link rel="alternate" hreflang="ja" href="https://example.com/ja/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />
```
