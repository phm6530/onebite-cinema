import Link from "next/link";

export default function movie() {
  const arr = [...Array(10)].map((_, idx) => idx + 1);

  return (
    <>
      <h1>Moive</h1>
      {arr.map((e, idx) => (
        <Link href={`/movie/${e}`} key={idx}>
          {e}
        </Link>
      ))}
    </>
  );
}
