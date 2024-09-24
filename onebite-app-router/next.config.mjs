import path from "path";
import { fileURLToPath } from "url";

// ES에서는 __dirname를 지원하지 않기때문에 __dirname을 정의
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.themoviedb.org"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/app/styles")],
    prependData: `
        @import "src/styles/_var.scss";
        @import "src/styles/_mixin.scss";
      `,
  },
};

export default nextConfig;
