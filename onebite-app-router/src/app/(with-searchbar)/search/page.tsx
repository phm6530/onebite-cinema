const SearchPage = ({ searchParams }: { searchParams: { q: string } }) => {
  return <>검색어 : {searchParams.q}</>;
};

export default SearchPage;
