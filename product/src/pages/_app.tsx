import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import GlobalLayout from "@/_component/Global-layout/global-layout";
import { ReactNode } from "react";
import QueryClientConfig from "@/config/queryClient";
import Head from "next/head";

type AppPropsTypes = AppProps & {
  Component: { globalLayout: (page: ReactNode) => ReactNode };
};

export default function App({ Component, pageProps }: AppPropsTypes) {
  /**
   * 컴포넌트에 globalLayout 속성을 유무를 null 병합 연산자로 체킹 후에 분기처리 한다.
   */
  const globalLayout =
    Component.globalLayout ?? ((Component: ReactNode) => Component);

  return (
    <>
      {/* 전역 메타 */}
      <Head>
        <title>한입 시네마</title>
        <meta property="og:image" content="/thumbnail.jpg" />
        <meta property="og:description" content="한입 시네마" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GlobalLayout>
        {globalLayout(
          <QueryClientConfig>
            <Component {...pageProps} />
          </QueryClientConfig>
        )}
      </GlobalLayout>
    </>
  );
}
