/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // 이거 이제 루트경로됨
    // includePaths: [path.join(__dirname, "src/app/styles")],
    // 전역적으로 반영된거임
    prependData: `@import "src/styles/_var.scss";`,
  },
};

export default nextConfig;
