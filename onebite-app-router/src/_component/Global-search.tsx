"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import classes from "./Global-search.module.scss";

// 미리완료 했었네요.. PR을 위한 주석
const SearchBar = () => {
  const router = useRouter();
  const qs = useSearchParams();

  const [value, setValue] = useState<string>(qs.get("q") || "");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    router.push(
      value.trim() !== ""
        ? `/search?q=${encodeURIComponent(value.trim())}`
        : "/"
    );
  };

  return (
    <div className={classes.searchWrap}>
      <form onSubmit={submitHandler} className={classes.form}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="검색어를 입력하세요 ..."
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default SearchBar;
