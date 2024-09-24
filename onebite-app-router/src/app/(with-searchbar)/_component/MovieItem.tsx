import Image from "next/image";
import classes from "./MovieItem.module.scss";
import { MovieData } from "@/type/movie";

const MoiveItem: React.FC<MovieData> = (props) => {
  const { posterImgUrl, title } = props;
  return (
    <div className={classes.imgWrap}>
      <Image
        src={posterImgUrl}
        alt={`${title}-img`}
        fill
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
      />
    </div>
  );
};

export default MoiveItem;
