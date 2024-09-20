type MoviePageProps = {
  params: { id: string };
};

const MoviePage: React.FC<MoviePageProps> = ({ params }) => {
  return <>{params.id}</>;
};

export default MoviePage;
