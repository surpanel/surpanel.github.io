import type { Dict } from "../lib/i18n";

const es: Dict = {
  meta: {
    title: "SUR VPN — Rompe la Censura. Navega Libre.",
    description:
      "VPN ultrarrápida con V2Ray Reality y WireGuard para Irán, Rusia, China y más. Cifrado militar. Conéctate vía bot de Telegram.",
  },
  nav: {
    features: "Características",
    protocols: "Protocolos",
    howItWorks: "Cómo Funciona",
    privacy: "Privacidad",
    faq: "Preguntas Frecuentes",
    getStarted: "Comenzar",
  },
  hero: {
    badge: "🌐 Libertad para Todos",
    title: "Rompe la Censura\ncon SUR VPN",
    subtitle:
      "VPN ultrarrápida con V2Ray Reality, WireGuard y protocolos avanzados. Conéctate a un internet libre en segundos — a través de nuestro bot de Telegram.",
    cta1: "Empezar en Telegram",
    cta2: "Saber Más",
    stat1Label: "Usuarios Activos",
    stat1Value: "50K+",
    stat2Label: "Disponibilidad",
    stat2Value: "99.9%",
    stat3Label: "Velocidad Media",
    stat3Value: "1 Gbps",
  },
  features: {
    title: "¿Por qué SUR VPN?",
    subtitle: "Diseñado para personas que viven en regiones con restricciones — rápido, privado y confiable.",
    items: [
      { icon: "⚡", title: "Velocidad Extrema", desc: "Servidores de alto rendimiento optimizados para la velocidad. Streaming, juegos y navegación sin lag." },
      { icon: "🔒", title: "Cifrado Militar", desc: "El cifrado AES-256 y ChaCha20 protege tus datos de ISPs y gobiernos." },
      { icon: "🤖", title: "Configuración por Telegram", desc: "Obtén tu configuración VPN en segundos — sin conocimientos técnicos. Solo chatea con nuestro bot." },
      { icon: "🔗", title: "Multi-Protocolo", desc: "V2Ray Reality, WireGuard, VLESS, VMess y Shadowsocks — siempre la mejor ruta disponible." },
      { icon: "💼", title: "Programa de Revendedores", desc: "Inicia tu propio negocio VPN. Planes white-label con soporte completo y márgenes competitivos." },
      { icon: "💬", title: "Soporte 24/7", desc: "Soporte humano real vía Telegram. Siempre aquí cuando nos necesites." },
    ],
  },
  protocols: {
    title: "Potenciado por los Mejores Protocolos",
    subtitle: "Soportamos los protocolos anticensura más avanzados disponibles hoy.",
    items: [
      { name: "V2Ray Reality", desc: "Imita el tráfico HTTPS real, prácticamente indetectable por inspección profunda de paquetes.", badge: "Recomendado" },
      { name: "WireGuard", desc: "Protocolo VPN moderno y ultrarrápido con mínima sobrecarga y fuerte seguridad.", badge: "Más Rápido" },
      { name: "VLESS", desc: "Protocolo ligero y de alto rendimiento con bajo uso de recursos.", badge: "Eficiente" },
      { name: "VMess", desc: "Protocolo versátil y seguro con sólidas capacidades de ofuscación.", badge: "Confiable" },
      { name: "Shadowsocks", desc: "Protocolo proxy probado, ampliamente usado para evadir la censura.", badge: "Clásico" },
    ],
  },
  howItWorks: {
    title: "Conéctate en 3 Simples Pasos",
    subtitle: "Sin experiencia técnica necesaria. Navega libremente en menos de un minuto.",
    steps: [
      { title: "Abre el Bot", desc: "Encuentra @survpnbot en Telegram y presiona Iniciar." },
      { title: "Elige un Plan", desc: "Elige entre planes diarios, mensuales o de revendedor según tus necesidades." },
      { title: "Conéctate y Navega", desc: "Importa tu configuración en cualquier app V2Ray o WireGuard y disfruta la libertad." },
    ],
  },
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "Todo lo que necesitas saber sobre SUR VPN.",
    items: [
      {
        q: "¿Qué es SUR VPN?",
        a: "SUR VPN es un servicio VPN premium diseñado para evadir la censura en Irán, Rusia, China y otras regiones restringidas. Proporcionamos conexiones seguras y rápidas a través de nuestro bot de Telegram.",
      },
      {
        q: "¿En qué países funciona?",
        a: "SUR VPN funciona en Irán, Rusia, China y cualquier otro país con restricciones de internet. Nuestros protocolos avanzados están diseñados para evadir incluso los sistemas de censura más sofisticados.",
      },
      {
        q: "¿Qué protocolos soportan?",
        a: "Soportamos V2Ray Reality, WireGuard, VLESS, VMess y Shadowsocks. Nuestro bot asigna automáticamente el mejor protocolo para tu región.",
      },
      {
        q: "¿Cómo configuro SUR VPN?",
        a: "Inicia un chat con @survpnbot en Telegram, elige un plan y recibe tu configuración. Impórtala en cualquier cliente VPN compatible (V2rayNG, Clash, etc.) y listo.",
      },
      {
        q: "¿Hay una prueba gratuita?",
        a: "¡Sí! Ofrecemos una prueba gratuita para que puedas probar nuestro servicio antes de comprometerte. Contacta @survpnbot en Telegram para reclamarla.",
      },
      {
        q: "¿Puedo convertirme en revendedor?",
        a: "Por supuesto. Nuestro programa de revendedores te da acceso a precios competitivos, configuraciones white-label y soporte dedicado. Contáctanos en Telegram para comenzar.",
      },
    ],
  },
  encryption: {
    badge: "Privacidad militar",
    title: "Sus datos, siempre cifrados",
    subtitle:
      "Cada conexión está protegida de extremo a extremo con los estándares de cifrado más sólidos utilizados por instituciones militares y financieras en todo el mundo.",
    step1: "Su dispositivo",
    step2: "Cifrado AES-256",
    step3: "Túnel seguro",
    step4: "Internet libre",
    items: [
      {
        title: "AES-256-GCM",
        desc: "El estándar de oro en cifrado — claves de 256 bits imposibles de descifrar por fuerza bruta. El mismo estándar de confianza de bancos, gobiernos y militares.",
      },
      {
        title: "ChaCha20-Poly1305",
        desc: "Cifrado de flujo ultrarrápido que impulsa WireGuard — optimizado para dispositivos móviles con alta velocidad sin comprometer la seguridad.",
      },
      {
        title: "Política estricta sin registros",
        desc: "Nunca almacenamos direcciones IP, marcas de tiempo, consultas DNS ni historial de navegación. No hay datos que entregar — jamás.",
      },
      {
        title: "Secreto perfecto hacia adelante",
        desc: "Claves de cifrado nuevas para cada sesión. Si una clave se ve comprometida, todas las sesiones pasadas y futuras permanecen completamente seguras.",
      },
      {
        title: "Protección contra fugas DNS",
        desc: "Todas las consultas DNS se enrutan a través de nuestro túnel cifrado. Su ISP solo ve ruido cifrado — nunca qué sitios visita.",
      },
      {
        title: "Protocolos de código abierto",
        desc: "V2Ray, WireGuard y Shadowsocks son auditados públicamente por la comunidad global de seguridad. Sin puertas traseras ocultas — nunca.",
      },
    ],
  },
  footer: {
    tagline: "Tu puerta de entrada a un internet libre y abierto.",
    telegramLabel: "Bot de Telegram",
    websiteLabel: "Sitio Web",
    copyright: "© 2025 SUR VPN. Todos los derechos reservados.",
    resellerTitle: "Programa de Revendedores",
    resellerDesc: "Gana con nosotros. Contáctanos en Telegram.",
  },
};

export default es;
