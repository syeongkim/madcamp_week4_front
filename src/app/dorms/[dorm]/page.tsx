"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import FlagImage from "../../components/FlagImage";

import "../../globals.css";
import "../styles/dorms.css";

type DormDetail = {
  points: number;
  students: string[];
};

const dormDetails: Record<string, DormDetail> = {
  gryffindor: {
    points: 150,
    students: ["Harry Potter", "Hermione Granger", "Ron Weasley"],
  },
  hufflepuff: {
    points: 120,
    students: ["Cedric Diggory", "Nymphadora Tonks", "Newt Scamander"],
  },
  ravenclaw: {
    points: 130,
    students: ["Luna Lovegood", "Cho Chang", "Filius Flitwick"],
  },
  slytherin: {
    points: 140,
    students: ["Draco Malfoy", "Severus Snape", "Bellatrix Lestrange"],
  },
};

const dormBanners: Record<string, string> = {
  gryffindor: "/images/gryffindor_banner.png",
  hufflepuff: "/images/hufflepuff_banner.png",
  ravenclaw: "/images/ravenclaw_banner.png",
  slytherin: "/images/slytherin_banner.png",
};

export default function DormDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dorm = params?.dorm as string;

  const [details, setDetails] = useState<DormDetail | null>(null);

  useEffect(() => {
    const dormLower = dorm.toLowerCase();
    if (dormLower && dormDetails[dormLower]) {
      setDetails(dormDetails[dormLower]);
    }
  }, [dorm]);

  if (!details) {
    return <div>Loading...</div>;
  }

  const dormTitle = dorm.toUpperCase();
  const dormClass = `text-shadow-${dorm.toLowerCase()}`;
  const bannerSrc = dormBanners[dorm.toLowerCase()];

  const handleGameClick = (game: string) => {
    console.log("Game clicked:", game);
    router.push(`games/${game}`);
  }

  return (
    <div className="h-screen bg-white relative">
      <Link href="/games/potion">
        <div
          className="h-1/3 w-full bg-potion-background bg-center bg-cover z-10"
          style={{ position: 'relative', pointerEvents: 'auto' }}
        ></div>
      </Link>
      <Link href="/games/magic">
        <div
          className="h-1/3 w-full -mt-1/3 bg-magic-background bg-bottom bg-cover z-10"
          style={{ position: 'relative', pointerEvents: 'auto' }}
        ></div>
      </Link>
      <Link href="/games/quidditch">
      <div
        className="h-1/3 w-full -mt-1/3 bg-quidditch-background bg-center bg-cover z-10"
        style={{ position: 'relative', pointerEvents: 'auto' }}
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
        <h1 className={clsx("text-4xl mt-8 dormtype", dormClass)}>{dormTitle}</h1>
        <div className="dorm-detail my-6 text-center">
          <div className="text-center mb-4">Points: {details.points}</div>
        </div>
      </div>
    </div>
  );
}
