# AGENTS.md — word-picker-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
word-picker 落地页（Astro 静态站点，站点地址 `https://word-picker.bayjf.com`）。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro（SSG 静态输出） |
| 共享设计包 | `@bay/landing-ui` |
| 图标 | 统一走 `@bay/landing-ui/components/Icon.astro`（内联 Lucide SVG，无运行时依赖，已替换早期 emoji 图标） |
| 包管理 | npm |

## 常用命令
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 约定
- 升级共享设计包：改 `package.json` 里 `@bay/landing-ui` 的 git tag 后重新 `npm install`。
- 不要新增本地 `Icon.astro` 副本，图标一律走共享包。
- 站点 URL 在 `astro.config.mjs` 的 `site`，改域名时同步 `public/robots.txt` 的 Sitemap 行。
- 部署细节见 `docs/DEPLOYMENT.md`。

## 不要做的事
- 不要用 emoji 当图标（已全部迁移到内联 SVG）。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。
