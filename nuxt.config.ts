// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://127.0.0.1:8000/api",
    },
  },
  // Cấu hình cho toàn bộ ứng dụng
  app: {
    head: {
      title: "FitPhysique - Gym & Fitness",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      link: [
        // Chỉ giữ lại các link từ bên ngoài như Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@400;700&display=swap",
        },
      ],

      script: [
        {
          src: "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js",
          tagPosition: "bodyClose",
        },
      ],
    },
  },

  // Khai báo TẤT CẢ các file CSS toàn cục ở đây
  css: [
    "bootstrap/dist/css/bootstrap.min.css", // Từ node_modules
    "slick-carousel/slick/slick.css", // Từ node_modules
    "slick-carousel/slick/slick-theme.css", // Từ node_modules
    "~/assets/fonts/icomoon/icomoon.css", // Từ assets
    "~/assets/css/style.css", // Từ assets
  ],

  // Đăng ký các plugin JS
  plugins: [
    "~/plugins/bootstrap.client.ts",
    "~/plugins/jquery-slick.client.ts", // Plugin mới để quản lý jQuery và Slick
  ],
});
