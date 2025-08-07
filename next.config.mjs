const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle .html files using html-loader
    config.module.rules.push({
      test: /\.html$/,
      exclude: /node_modules/,
      use: {
        loader: "html-loader",
      },
    });

    return config;
  },

  // Allow loading images from external domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
