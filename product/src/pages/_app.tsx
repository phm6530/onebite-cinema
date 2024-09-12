import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import GlobalLayout from "@/_component/Global-layout/global-layout";
import { ReactNode } from "react";

type AppPropsTypes = AppProps & {
  Component: { globalLayout: (page: ReactNode) => ReactNode };
};

export default function App({ Component, pageProps }: AppPropsTypes) {
  /**
   * 컴포넌트에 globalLayout 속성을 유무를 null 병합 연산자로 체킹 후에 분기처리 한다.
   */
  const globalLayout = Component.globalLayout ?? Component;

  return (
    <>
      <GlobalLayout>{globalLayout(<Component {...pageProps} />)}</GlobalLayout>
    </>
  );
}
