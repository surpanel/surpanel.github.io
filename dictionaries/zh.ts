import type { Dict } from "../lib/i18n";

const zh: Dict = {
  meta: {
    title: "SUR VPN — 突破网络封锁，自由上网",
    description:
      "超高速V2Ray Reality、WireGuard VPN，适用于伊朗、俄罗斯、中国等地区。军事级加密。通过Telegram机器人连接。",
  },
  nav: {
    features: "功能特性",
    protocols: "协议",
    howItWorks: "使用方法",
    privacy: "隐私",
    faq: "常见问题",
    getStarted: "立即开始",
  },
  hero: {
    badge: "🌐 为所有人提供自由",
    title: "使用 SUR VPN\n突破网络审查",
    subtitle:
      "超高速VPN，支持V2Ray Reality、WireGuard及高级协议。通过Telegram机器人，几秒钟内连接到自由互联网。",
    cta1: "在Telegram上开始",
    cta2: "了解更多",
    stat1Label: "活跃用户",
    stat1Value: "5万+",
    stat2Label: "运行时间",
    stat2Value: "99.9%",
    stat3Label: "平均速度",
    stat3Value: "1 Gbps",
  },
  features: {
    title: "为什么选择 SUR VPN？",
    subtitle: "专为生活在受限地区的人设计——快速、私密、可靠。",
    items: [
      { icon: "⚡", title: "极速连接", desc: "针对速度优化的高性能服务器。流媒体、游戏和浏览无延迟。" },
      { icon: "🔒", title: "军事级加密", desc: "AES-256和ChaCha20加密保护您的数据，防止运营商和政府监控。" },
      { icon: "🤖", title: "Telegram机器人设置", desc: "几秒内获取VPN配置——无需技术知识。只需与机器人聊天即可。" },
      { icon: "🔗", title: "多协议支持", desc: "V2Ray Reality、WireGuard、VLESS、VMess和Shadowsocks——始终提供最佳路线。" },
      { icon: "💼", title: "经销商计划", desc: "创建您自己的VPN业务。提供完整支持和竞争性利润的白标方案。" },
      { icon: "💬", title: "全天候支持", desc: "通过Telegram提供真实人工支持。我们随时为您服务。" },
    ],
  },
  protocols: {
    title: "顶级协议驱动",
    subtitle: "我们支持当今最先进的反审查协议。",
    items: [
      { name: "V2Ray Reality", desc: "模拟真实HTTPS流量，几乎无法被深度包检测发现。", badge: "推荐" },
      { name: "WireGuard", desc: "现代超快VPN协议，开销极低，安全性强。", badge: "最快" },
      { name: "VLESS", desc: "轻量级高性能协议，资源消耗低。", badge: "高效" },
      { name: "VMess", desc: "多功能安全协议，具有强大的混淆能力。", badge: "可靠" },
      { name: "Shadowsocks", desc: "经过验证的代理协议，广泛用于突破网络封锁。", badge: "经典" },
    ],
  },
  howItWorks: {
    title: "三步简单连接",
    subtitle: "无需技术专长。不到一分钟即可自由浏览。",
    steps: [
      { title: "打开机器人", desc: "在Telegram上找到 @survpnbot 并按开始。" },
      { title: "选择套餐", desc: "从日常、月度或经销商套餐中选择适合您的方案。" },
      { title: "连接并浏览", desc: "将配置导入任意V2Ray或WireGuard应用，享受自由。" },
    ],
  },
  faq: {
    title: "常见问题",
    subtitle: "关于SUR VPN您需要了解的一切。",
    items: [
      {
        q: "SUR VPN 是什么？",
        a: "SUR VPN是一项高级VPN服务，专为在伊朗、俄罗斯、中国和其他受限地区突破审查而设计。我们通过Telegram机器人提供安全、快速的连接。",
      },
      {
        q: "在哪些国家可以使用？",
        a: "SUR VPN适用于伊朗、俄罗斯、中国以及任何有互联网限制的国家。我们的高级协议专为绕过最复杂的审查系统而设计。",
      },
      {
        q: "支持哪些协议？",
        a: "我们支持V2Ray Reality、WireGuard、VLESS、VMess和Shadowsocks。我们的机器人会自动为您所在地区分配最佳协议。",
      },
      {
        q: "如何设置SUR VPN？",
        a: "在Telegram上与@survpnbot开始聊天，选择套餐，接收您的配置。将其导入任何兼容的VPN客户端（V2rayNG、Clash等），即可完成。",
      },
      {
        q: "有免费试用吗？",
        a: "有！我们提供免费试用，让您在订阅前测试我们的服务。在Telegram上联系@survpnbot获取您的试用。",
      },
      {
        q: "我可以成为经销商吗？",
        a: "当然可以。我们的经销商计划为您提供具有竞争力的定价、白标配置和专属支持。在Telegram上联系我们开始合作。",
      },
    ],
  },
  encryption: {
    badge: "军事级隐私保护",
    title: "您的数据，始终加密",
    subtitle:
      "每个连接都受到端到端保护，采用全球军事和金融机构使用的最强加密标准。",
    step1: "您的设备",
    step2: "AES-256加密",
    step3: "安全隧道",
    step4: "自由互联网",
    items: [
      {
        title: "AES-256-GCM",
        desc: "黄金标准密码 — 256位密钥，暴力破解几乎不可能。与全球银行、政府和军队信任的标准相同。",
      },
      {
        title: "ChaCha20-Poly1305",
        desc: "驱动WireGuard的超快流密码 — 针对移动设备优化，在不牺牲安全性的情况下提供极速体验。",
      },
      {
        title: "严格零日志政策",
        desc: "我们从不存储IP地址、连接时间戳、DNS查询或浏览历史。没有任何数据可以被交出 — 永远。",
      },
      {
        title: "完美前向保密",
        desc: "每次会话使用全新加密密钥。即使某个密钥泄露，所有过去和未来的会话都保持完全安全。",
      },
      {
        title: "DNS泄漏保护",
        desc: "所有DNS查询通过我们的加密隧道路由。您的ISP只看到加密噪音 — 永远不知道您访问的网站。",
      },
      {
        title: "开源协议",
        desc: "V2Ray、WireGuard和Shadowsocks由全球安全社区公开审计。永远没有隐藏的后门。",
      },
    ],
  },
  footer: {
    tagline: "您通往自由开放互联网的门户。",
    telegramLabel: "Telegram机器人",
    websiteLabel: "官方网站",
    copyright: "© 2025 SUR VPN. 版权所有。",
    resellerTitle: "经销商计划",
    resellerDesc: "与我们一起盈利。在Telegram上联系。",
  },
};

export default zh;
