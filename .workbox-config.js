module.exports = {
  importScripts: [],
  globDirectory: "./dist",
  globPatterns: [
    "**/*.{css,html,js,gif,ico,jpg,png,svg,webp,woff,woff2,ttf,otf,eot,webmanifest,manifest}"
  ],
  runtimeCaching: [
    {
      urlPattern: new RegExp("^https:\/\/firebasestorage\\.googleapis\\.com\/.*", "gi"),
      handler: "StaleWhileRevalidate",
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: "images"
      }
    }
  ]
};