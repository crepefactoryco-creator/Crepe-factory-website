import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // No-op comment to force Next.js dev reload in constrained environments.
};

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

export default withNextIntl(nextConfig);

