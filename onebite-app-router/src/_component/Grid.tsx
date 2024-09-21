import { ReactNode } from "react";
import classes from "./Grid.module.scss";

type Children<T> = { className?: string; children: T };

const center: React.FC<Children<ReactNode>> = ({ className, children }) => {
  return (
    <div className={`${classes.mainGrid} ${className ? className : undefined}`}>
      {children}
    </div>
  );
};

interface GridProps extends React.FC<{ children: ReactNode }> {
  center: typeof center;
}

//Composition
const Grid: GridProps = ({ children }) => {
  return <>{children}</>;
};

Grid.center = center;

export default Grid;
