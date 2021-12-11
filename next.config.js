module.exports = {
  images: {
    domains: ["media.giphy.com", "gfycat.com"],
  },
  env: {
    NEXT_PUBLIC_UNSPLASH_ACCESSKEY:
      "kw-U41H8Wuyauhpm3gIBtkt8syhRK_S-Z9041PdD1gM",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
