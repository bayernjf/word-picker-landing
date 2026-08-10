# WordPicker 落地页

WordPicker 是一款划词查词浏览器扩展(支持 Chrome / Edge / Safari):按住修饰键悬停单词即可弹出释义,一键收录到 WordBase 云单词本,并通过 SRS 间隔复习高效记忆。本仓库是该产品的官方落地页站点。

## 技术栈

- **框架**:Astro ^6.0.5(静态输出)
- **样式**:Tailwind CSS ^4.3.3(通过 `@tailwindcss/vite` ^4.3.3 Vite 插件接入)
- **SEO**:@astrojs/sitemap ^3.7.3
- **i18n**:中英双语,字典集中在 `src/i18n/ui.ts`;中文为根路径,英文使用 `/en` 前缀

## 快速开始

包管理器为 npm(仓库包含 `package-lock.json`)。

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器
npm run build      # 构建生产版本(输出到 dist/)
npm run preview    # 预览构建产物
```

## 项目结构

```text
word-picker-landing/
├── public/                  # 静态资源(favicon、llms.txt、robots.txt)
├── src/
│   ├── components/          # 落地页区块(Hero、Features、HowItWorks、Showcase、
│   │                        #   Compare、FAQ、Download、Header、Footer)
│   ├── i18n/                # 中英字典(ui.ts)
│   ├── layouts/             # Base.astro 布局
│   ├── pages/               # 路由:中文根路径 + en/ 英文镜像
│   └── styles/              # global.css(Tailwind v4)
├── astro.config.mjs         # Astro 配置(site、sitemap、Tailwind Vite 插件)
├── tsconfig.json
└── package.json
```

## 路由说明

中文页面位于根路径,英文页面位于 `/en` 前缀下:

| 中文路径 | 英文路径 | 页面 |
|---------|---------|------|
| `/` | `/en` | 首页 |
| `/privacy` | `/en/privacy` | 隐私政策 |
| `/terms` | `/en/terms` | 服务条款 |
| `/404` | — | 404 页面 |

## 部署

`astro.config.mjs` 中 `site` 配置为 `https://word-picker-landing.pages.dev`,构建产物为纯静态文件(`dist/`),可直接部署到 Cloudflare Pages 或任意静态托管。

## 共享设计包

本仓库使用共享设计包 `@bay/landing-ui`(`github:bayernjf/landing-ui#v1.1.0`):
- 图标统一走 `@bay/landing-ui/components/Icon.astro`(内联 Lucide SVG,无运行时依赖,替换了原先的 emoji 图标)
- 包版本以 git tag 管理;升级时改 `package.json` 中的 tag 后重新 `npm install`
