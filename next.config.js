module.exports = {
  target: "serverless",
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component"] },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      }
    );
    return cfg;
  },
};
