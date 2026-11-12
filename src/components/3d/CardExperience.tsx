"use client";

import dynamic from "next/dynamic";

const CardScene = dynamic(() => import("./CardScene"), {
  ssr: false,
  loading: () => <div className="scene-loading" aria-hidden="true" />,
});

export default function CardExperience() {
  return <CardScene />;
}
