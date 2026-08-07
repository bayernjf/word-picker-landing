# Handoff — word-picker-landing

更新时间：2026-08-08

## 项目概况
WordPicker（浏览器划词翻译扩展）落地页。Astro 7 + Tailwind CSS v4 静态站点，
中英双语，部署于 Cloudflare Pages（站点：https://word-picker-landing.pages.dev）。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev）
- `c9cfa41` build: upgrade Astro to v7
- `b64737c` feat(legal): add privacy, terms and 404 pages
- `fdd5051` feat(seo): add og:image metadata and share assets
- `2d3187b` docs: add README with project overview

## 注意点
- ⚠️ OG 图目前是 SVG 占位图（public/og/og-zh.svg、og-en.svg），因当时图片生成配额耗尽临时手写。
  社交平台（Twitter/Facebook/微信等）不支持 SVG og:image，分享不会显示预览图。
  Base.astro 中 ogImage 引用的是 .svg 路径。
- robots.txt、sitemap、双语 JSON-LD（SoftwareApplication + FAQPage）已就位；构建通过；提交仅在本地。

## 下一步
1. 生成 1200×630 PNG OG 图（中英两版）放 public/og/，并把 src/layouts/Base.astro 里的
   ogImage 路径从 .svg 改为 .png。
2. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
3. 部署后验证 og:image、robots.txt、sitemap、法务页面。
