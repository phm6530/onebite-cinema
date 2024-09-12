import { ReactNode } from "react";
import classes from "./Grid.module.scss";

interface GridProps extends React.FC<{ children: ReactNode }> {
  center: typeof center;
}

function center({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`${classes.globalCenter} ${className ? className : undefined}`}
    >
      {children}
    </div>
  );
}

const Grid: GridProps = ({ children }) => {
  return <>{children}</>;
};

Grid.center = center;

export default Grid;
