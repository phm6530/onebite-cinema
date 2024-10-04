import Modal from "@/_component/Modal";
import MoviePage from "@/app/movie/[id]/page";

const Page = (props: any) => {
  return (
    <>
      <Modal>
        <MoviePage {...props} />
      </Modal>
    </>
  );
};
export default Page;
