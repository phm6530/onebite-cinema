"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import classes from "./Skeleton-movieItem.module.scss";
import gsap from "gsap";

const SkeletonMovieItem = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { backgroundPosition: "-200%" },
          {
            backgroundPosition: "200%",
            duration: 3,
            repeat: -1,
            ease: "linear",
          }
        );
      }
    },
    { scope: ref }
  );
  return <div ref={ref} className={classes.SkeletonMovieItem}></div>;
};

export default SkeletonMovieItem;
