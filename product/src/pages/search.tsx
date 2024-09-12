import SearchLayout from "@/_component/Search-layout";
import { GetServerSidePropsContext } from "next";
import { ReactNode } from "react";

/**
 * page Router는 바로 params, searchParams 받아오기 불가함으로
 * gss 사용하거나, useSearchParams, useParams 하거나 useRouter쓰면됨
 */
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  return {
    props: { query }, // 컴포넌트에 props로 전달
  };
}

export default function SearchPage({ query }: { query: { q: string } }) {
  return <>현재 검색어 : {query.q}</>;
}

SearchPage.globalLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
