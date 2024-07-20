"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
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

  return (
    <div>
      <div className="scrolling-names-container">
        <div className="scrolling-names">
          {details.students.concat(details.students).map((student, index) => (
            <span key={index}>{student}</span>
          ))}
        </div>
      </div>

      <FlagImage texturePath={bannerSrc} />
      <h1 className={clsx("text-4xl mt-8 dormtype", dormClass)}>{dormTitle}</h1>
      <div className="dorm-detail my-6 justify-content">
        <div className="text-center mb-4">Points: {details.points}</div>
      </div>
    </div>
  );
}
