"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import FlagImage from "../../components/FlagImage";
import { DormDetail, fetchDormDetails } from "../../services/DormsService";
import "../../globals.css";
import "../styles/dorms.css";

const Gryffindor: React.FC = () => {
  const [details, setDetails] = useState<DormDetail>({
    points: 0,
    students: [],
  });
  useEffect(() => {
    // Fetch the dorm details when the component mounts
    const fetchDetails = async () => {
      try {
        const data = await fetchDormDetails(1); // Call the function with the dormId
        setDetails(data);
      } catch (error) {
        console.error("Failed to fetch dorm details:", error);
      }
    };

    fetchDetails();
  }, []);

  const dormTitle = "Gryffindor";
  const dormClass = `text-shadow-gryffindor`;
  const bannerSrc =
    "https://syeongkim.github.io/madcamp_week4_front/images/gryffindor_banner.png";

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
};

export default Gryffindor;
