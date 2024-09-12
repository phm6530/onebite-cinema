import { useRouter } from "next/router";

export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params; // URL에서 id를 추출

  return {
    props: { id }, // Page 컴포넌트에 데이터를 전달
  };
};

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;
  return <>Movie : {id}</>;
}
