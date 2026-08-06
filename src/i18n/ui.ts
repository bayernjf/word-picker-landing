export const languages = {
  zh: { label: '中文', path: '/' },
  en: { label: 'English', path: '/en' },
};

export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    nav: { features: '功能', howItWorks: '使用方法', showcase: '演示', faq: 'FAQ', download: '下载' },
    hero: {
      badge: 'Chrome / Edge / Safari',
      title: '悬停即可查词',
      subtitle: '按住修饰键，鼠标悬停单词即可弹窗查词，一键收录到云端单词本，SRS 间隔复习让记忆更高效',
      ctaPrimary: '免费下载',
      ctaSecondary: '查看演示',
      stat1: '3 浏览器',
      stat2: '0 秒延迟',
      stat3: '∞ 无限查词',
    },
    features: {
      title: '核心功能',
      subtitle: '为英语学习者打造的全方位查词工具',
      items: [
        { icon: 'hover', title: '悬停查词', desc: '按住修饰键悬停任意英文单词，即时弹出释义弹窗，无需切换应用' },
        { icon: 'cloud', title: 'WordBase 云单词本', desc: '一键收录生词到云端单词本，多设备同步，永不丢失' },
        { icon: 'srs', title: 'SRS 间隔复习', desc: '基于遗忘曲线的智能复习算法，高效巩固记忆' },
        { icon: 'ai', title: 'AI 智能释义', desc: '结合上下文生成精准释义，理解词义更深入' },
        { icon: 'fireworks', title: '烟花特效', desc: '每次收录新词都有烟花庆祝，让学习充满成就感' },
        { icon: 'offline', title: '离线词典', desc: '内置 ECDICT 离线词典，无网络也能查词' },
      ],
    },
    howItWorks: {
      title: '三步开始使用',
      subtitle: '从安装到查词，只需 30 秒',
      steps: [
        { num: '01', title: '安装扩展', desc: '从 Chrome Web Store 或 Safari 扩展商店安装 WordPicker' },
        { num: '02', title: '悬停查词', desc: '在任意网页按住修饰键，鼠标悬停英文单词即可查词' },
        { num: '03', title: '收录复习', desc: '点击收录按钮，单词自动同步到 WordBase，开启 SRS 复习' },
      ],
    },
    showcase: {
      title: '真实使用场景',
      subtitle: '看英文文档、论文、GitHub 时随时查词',
      scenarios: [
        { title: '阅读英文文档', desc: '浏览 MDN、Stack Overflow 时，悬停即可查看术语释义' },
        { title: '学术论文阅读', desc: '阅读 arXiv 论文时，快速查词不打断阅读节奏' },
        { title: 'GitHub 代码审查', desc: 'Review PR 时，悬停注释和文档中的生词' },
        { title: '新闻资讯浏览', desc: '阅读 BBC、Reuters 等英文媒体时，即时查词' },
      ],
    },
    compare: {
      title: '与同类工具对比',
      subtitle: '为什么选择 WordPicker',
      headers: ['功能', 'WordPicker', '同类查词扩展', '在线写作工具'],
      rows: [
        { feature: '悬停查词', wp: true, competitor1: true, competitor2: false },
        { feature: '云端单词本', wp: true, competitor1: false, competitor2: true },
        { feature: 'SRS 间隔复习', wp: true, competitor1: false, competitor2: false },
        { feature: 'AI 释义', wp: true, competitor1: false, competitor2: true },
        { feature: '烟花特效', wp: true, competitor1: false, competitor2: false },
        { feature: '离线词典', wp: true, competitor1: true, competitor2: false },
        { feature: 'Safari 支持', wp: true, competitor1: false, competitor2: false },
        { feature: '完全免费', wp: true, competitor1: true, competitor2: false },
      ],
    },
    faq: {
      title: '常见问题',
      subtitle: '关于 WordPicker 的疑问解答',
      items: [
        { q: 'WordPicker 是免费的吗？', a: '是的，WordPicker 完全免费，没有任何付费功能或广告。' },
        { q: '支持哪些浏览器？', a: '支持 Chrome、Edge 和 Safari 三大主流浏览器，基于 Manifest V3 开发。' },
        { q: '查词需要联网吗？', a: '不需要。WordPicker 内置 ECDICT 离线词典，无网络也能查词。联网时可使用在线翻译获取更精准的释义。' },
        { q: '我的单词数据安全吗？', a: '单词数据通过 Supabase 安全存储，支持云端同步。你也可以选择不同步，数据仅保存在本地。' },
        { q: '如何修改查词快捷键？', a: '在扩展设置页可以自定义查词快捷键，支持 Control、Command、Alt、Shift 等修饰键，Mac 和 Windows 可分别设置。' },
        { q: 'WordBase 是什么？', a: 'WordBase 是配套的云端单词管理平台，部署在 word-base.pages.dev，支持单词收录、分类、SRS 复习等功能。' },
        { q: '支持哪些语言的查词？', a: '目前支持英语查词（英译中），后续将支持更多语言对。' },
        { q: '如何报告 Bug 或建议功能？', a: '请在 GitHub 仓库提交 Issue，我们会及时处理。' },
      ],
    },
    download: {
      title: '立即下载 WordPicker',
      subtitle: '免费使用，无需注册',
      chrome: 'Chrome / Edge',
      safari: 'Safari',
      github: 'GitHub',
    },
    footer: {
      desc: '为英语学习者打造的悬停查词浏览器扩展',
      links: { product: '产品', resources: '资源', company: '公司' },
      copyright: 'WordPicker. 保留所有权利。',
    },
  },
  en: {
    nav: { features: 'Features', howItWorks: 'How It Works', showcase: 'Showcase', faq: 'FAQ', download: 'Download' },
    hero: {
      badge: 'Chrome / Edge / Safari',
      title: 'Hover to Look Up Any Word',
      subtitle: 'Hold a modifier key and hover over any English word for instant definitions. Save to cloud wordbook, review with SRS, and learn smarter.',
      ctaPrimary: 'Download Free',
      ctaSecondary: 'View Demo',
      stat1: '3 Browsers',
      stat2: '0s Latency',
      stat3: '∞ Lookups',
    },
    features: {
      title: 'Core Features',
      subtitle: 'A comprehensive word lookup tool for English learners',
      items: [
        { icon: 'hover', title: 'Hover Lookup', desc: 'Hold a modifier key and hover over any English word for instant definitions. No app switching needed.' },
        { icon: 'cloud', title: 'WordBase Cloud Wordbook', desc: 'Save new words to cloud wordbook with multi-device sync. Never lose your vocabulary.' },
        { icon: 'srs', title: 'SRS Spaced Repetition', desc: 'Smart review algorithm based on forgetting curve for efficient memorization.' },
        { icon: 'ai', title: 'AI Definitions', desc: 'Context-aware definitions powered by AI for deeper understanding.' },
        { icon: 'fireworks', title: 'Fireworks Effect', desc: 'Celebrate every new word with fireworks. Make learning rewarding.' },
        { icon: 'offline', title: 'Offline Dictionary', desc: 'Built-in ECDICT offline dictionary. Look up words without internet.' },
      ],
    },
    howItWorks: {
      title: 'Get Started in 3 Steps',
      subtitle: 'From install to lookup in 30 seconds',
      steps: [
        { num: '01', title: 'Install Extension', desc: 'Install WordPicker from Chrome Web Store or Safari Extensions' },
        { num: '02', title: 'Hover to Look Up', desc: 'Hold modifier key and hover over any English word on any webpage' },
        { num: '03', title: 'Save & Review', desc: 'Click save to sync words to WordBase and start SRS review' },
      ],
    },
    showcase: {
      title: 'Real Use Cases',
      subtitle: 'Look up words while reading docs, papers, and code',
      scenarios: [
        { title: 'Reading Documentation', desc: 'Hover over terms while browsing MDN, Stack Overflow' },
        { title: 'Academic Papers', desc: 'Quickly look up words while reading arXiv papers without breaking flow' },
        { title: 'GitHub Code Review', desc: 'Hover over unfamiliar words in comments and docs during PR review' },
        { title: 'News Reading', desc: 'Instant word lookup while reading BBC, Reuters, and more' },
      ],
    },
    compare: {
      title: 'Comparison with Alternatives',
      subtitle: 'Why choose WordPicker',
      headers: ['Feature', 'WordPicker', 'Other Lookup Extensions', 'Online Writing Tools'],
      rows: [
        { feature: 'Hover Lookup', wp: true, competitor1: true, competitor2: false },
        { feature: 'Cloud Wordbook', wp: true, competitor1: false, competitor2: true },
        { feature: 'SRS Review', wp: true, competitor1: false, competitor2: false },
        { feature: 'AI Definitions', wp: true, competitor1: false, competitor2: true },
        { feature: 'Fireworks Effect', wp: true, competitor1: false, competitor2: false },
        { feature: 'Offline Dictionary', wp: true, competitor1: true, competitor2: false },
        { feature: 'Safari Support', wp: true, competitor1: false, competitor2: false },
        { feature: 'Completely Free', wp: true, competitor1: true, competitor2: false },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Common questions about WordPicker',
      items: [
        { q: 'Is WordPicker free?', a: 'Yes, WordPicker is completely free with no paid features or ads.' },
        { q: 'Which browsers are supported?', a: 'Chrome, Edge, and Safari. Built on Manifest V3.' },
        { q: 'Does it need internet to work?', a: 'No. WordPicker includes a built-in ECDICT offline dictionary. Online translation is available for more accurate definitions when connected.' },
        { q: 'Is my word data safe?', a: 'Word data is securely stored via Supabase with cloud sync. You can also choose not to sync, keeping data local only.' },
        { q: 'How to change the lookup shortcut?', a: 'Customize the lookup key in extension settings. Supports Control, Command, Alt, Shift. Mac and Windows can be set independently.' },
        { q: 'What is WordBase?', a: 'WordBase is the companion cloud word management platform at word-base.pages.dev, supporting word collection, categorization, and SRS review.' },
        { q: 'Which languages are supported for lookup?', a: 'Currently supports English word lookup (English to Chinese). More language pairs coming soon.' },
        { q: 'How to report bugs or suggest features?', a: 'Please submit an issue on our GitHub repository.' },
      ],
    },
    download: {
      title: 'Download WordPicker Now',
      subtitle: 'Free to use, no registration required',
      chrome: 'Chrome / Edge',
      safari: 'Safari',
      github: 'GitHub',
    },
    footer: {
      desc: 'A hover-to-lookup browser extension for English learners',
      links: { product: 'Product', resources: 'Resources', company: 'Company' },
      copyright: 'WordPicker. All rights reserved.',
    },
  },
} as const;
