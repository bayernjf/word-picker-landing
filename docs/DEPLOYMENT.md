# 部署 — word-picker-landing

更新时间：2026-09-09

## 站点信息
- `astro.config.mjs` 中 `site`：`https://word-picker.bayjf.com`
- 技术栈：Astro（SSG 静态输出）+ `@bay/landing-ui`
  （图标统一走 `@bay/landing-ui/components/Icon.astro`，内联 Lucide SVG，无运行时依赖，已替换早期 emoji 图标）
- 包管理器：npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```
产物目录 `dist`（纯静态），可部署到 Cloudflare Pages 或任意静态托管。

## 升级共享设计包
`@bay/landing-ui` 以 git tag 管理版本：改 `package.json` 里的 tag 后重新 `npm install`。

## 发布后验证
1. 中英双语首页与语言切换正常。
2. `robots.txt`、`sitemap.xml` 可访问且域名一致。
3. 图标全部内联渲染，无外部图标请求。
4. OG 图（构建时截出）可访问。
