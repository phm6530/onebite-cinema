"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function ClickComponent({
  id,
  children,
}: {
  id: number;
  children: ReactNode;
}) {
  const router = useRouter();
  return <div onClick={() => router.push(`/movie/${id}`)}>{children}</div>;
}
