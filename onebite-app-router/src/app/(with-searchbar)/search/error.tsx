"use client";

import { CustomError } from "@/lib/fetch";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type ErrorProps = {
  error: CustomError;
  reset: () => void;
};

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  const router = useRouter();
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h1>Error</h1>
      <p>검색어 에러</p>
      <br></br>
      <button
        onClick={() => {
          router.refresh();
          reset();
        }}
        style={{ padding: "5px", borderRadius: "2px" }}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
