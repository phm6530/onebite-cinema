import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { FormEvent, ReactNode, useState } from "react";
import classes from "./Search-layout.module.scss";

export default function SearchLayout({ children }: { children: ReactNode }) {
  const q = useSearchParams();
  const [value, setValue] = useState<string>(q.get("q") || "");
  const router = useRouter();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(value !== "" ? `/search?q=${value}` : "/");
  };

  return (
    <>
      <div className={classes.searchFormWrapper}>
        <form onSubmit={submitHandler} className={classes.searchForm}>
          <input
            type="text"
            value={value}
            placeholder="검색어를 입력해주세요"
            onChange={onChangeHandler}
          />
          <button type="submit">검색</button>
        </form>
      </div>
      {children}
    </>
  );
}
