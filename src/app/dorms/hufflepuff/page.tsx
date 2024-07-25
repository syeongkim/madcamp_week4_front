"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import FlagImage from "../../components/FlagImage";
import { DormDetail } from "../../services/DormsService";
import "../../globals.css";
import "../styles/dorms.css";

const Gryffindor: React.FC = () => {
  const [details, setDetails] = useState<DormDetail>({ points: 0, students: [] });

  useEffect(() => {
    const fetchDetails = async () => {
      // const response = await fetch(
      //   `https://hogwart.paulupa.com/api/dorms/2`
      //   ); // Replace '1' with the appropriate dormId
      // const data = await response.json();
      setDetails({
        points: 200,
        students: ["Cedric Diggory", "Nymphadora Tonks", "Newton Scamander", "Kai Park", "Brain Lee"],
      });
    };

    fetchDetails();
  }, []);

  const dormTitle = "Hufflepuff";
  const dormClass = `text-shadow-hufflepuff`;
  const bannerSrc = "https://syeongkim.github.io/madcamp_week4_front/images/hufflepuff_banner.png"

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

export default Gryffindor;