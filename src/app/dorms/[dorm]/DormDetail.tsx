// src/app/dorms/[dorm]/DormDetail.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import FlagImage from "../../components/FlagImage";
import { DormDetail } from "../../services/DormsService";
import "../../globals.css";
import "../styles/dorms.css";

const dormBanners: Record<string, string> = {
  gryffindor: "/images/gryffindor_banner.png",
  hufflepuff: "/images/hufflepuff_banner.png",
  ravenclaw: "/images/ravenclaw_banner.png",
  slytherin: "/images/slytherin_banner.png",
};

export default function DormDetailPage({ dorm, details }: { dorm: string, details: DormDetail }) {
  useEffect(() => {
    // 로딩 상태 업데이트
  }, []);

  if (!details) {
    return <div>No details found for this dorm.</div>;
  }

  const dormTitle = dorm.toUpperCase();
  const dormClass = `text-shadow-${dorm.toLowerCase()}`;
  const bannerSrc = dormBanners[dorm.toLowerCase()];

  return (
    <div className="h-screen bg-white relative">
      <Link href="/games/potion">
        <div
          className="h-1/3 w-full bg-potion-background bg-center bg-cover z-10"
          style={{ position: "relative", pointerEvents: "auto" }}
        ></div>
      </Link>
      <Link href="/games/magic">
        <div
          className="h-1/3 w-full -mt-1/3 bg-magic-background bg-bottom bg-cover z-10"
          style={{ position: "relative", pointerEvents: "auto" }}
        ></div>
      </Link>
      <Link href="/games/quidditch">
        <div
          className="h-1/3 w-full -mt-1/3 bg-quidditch-background bg-center bg-cover z-10"
          style={{ position: "relative", pointerEvents: "auto" }}
        ></div>
      </Link>
      <div className="scrolling-names-container absolute top-0 left-0 w-full z-20">
        <div className="scrolling-names">
          {details.students.concat(details.students).map((student, index) => (
            <span key={index}>{student}</span>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-30 pointer-events-none">
        <FlagImage texturePath={bannerSrc} />
        <h1 className={clsx("text-4xl mt-8 dormtype", dormClass)}>
          {dormTitle}
        </h1>
        <div className="dorm-detail my-6 text-center">
          <div className="text-center mb-4">Points: {details.points}</div>
        </div>
      </div>
    </div>
  );
}
