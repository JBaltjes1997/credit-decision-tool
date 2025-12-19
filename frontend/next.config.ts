import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. Core Config */
  reactStrictMode: true,

  /* 2. Turbopack Specifics */
  turbopack: {
    // If you use custom loaders or specific aliases:
    resolveAlias: {},
  },

  /* 3. Docker/Windows Polling Fallback */
  // While Turbopack is the default, some internal file-watching 
  // mechanisms still look at these options when inside a container.
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,          // Check for changes every second
        aggregateTimeout: 300, // Delay rebuild slightly after first change
      };
    }
    return config;
  },

  /* 4. Output configuration for K8s/Docker */
  // This is optional for dev, but vital for your K8s production build
  output: 'standalone', 
};

export default nextConfig;