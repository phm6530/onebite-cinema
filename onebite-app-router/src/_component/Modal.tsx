"use client";

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (ref.current) {
      ref.current.showModal();
      ref.current.scroll({ top: 0 });
    }
  }, []);

  return createPortal(
    <dialog
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      ref={ref}
      className={classes.modal}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
