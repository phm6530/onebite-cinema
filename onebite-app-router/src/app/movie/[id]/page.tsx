type MoviePageProps = {
  params: { id: string };
};

const MoviePage: React.FC<MoviePageProps> = ({ params }) => {
  if (isNaN(Number(params.id))) {
    return <>잘못된 접근 입니다.</>;
  }

  return (
    <>
      <h1>{params.id} 영화 상세페이지 </h1>
    </>
  );
};

export default MoviePage;
