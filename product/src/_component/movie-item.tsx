import { useRouter } from "next/router";
import { MovieData } from "../../type/moive";
import classes from "./movieItem.module.scss";
import Image from "next/image";

export default function MovieItem({ id, title, posterImgUrl }: MovieData) {
  const router = useRouter();

  const onClickhandler = () => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className={classes.itemWrap} onClick={onClickhandler}>
      <Image
        src={posterImgUrl}
        alt={title}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        fill
      />
    </div>
  );
}
