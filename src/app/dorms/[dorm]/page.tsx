'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { SimplexNoise } from 'three/examples/jsm/Addons.js';

import '../../globals.css';
import '../styles/dorms.css';

type DormDetail = {
  points: number;
  students: string[];
};

const dormDetails: Record<string, DormDetail> = {
  gryffindor: {
    points: 150,
    students: ['Harry Potter', 'Hermione Granger', 'Ron Weasley'],
  },
  hufflepuff: {
    points: 120,
    students: ['Cedric Diggory', 'Nymphadora Tonks', 'Newt Scamander'],
  },
  ravenclaw: {
    points: 130,
    students: ['Luna Lovegood', 'Cho Chang', 'Filius Flitwick'],
  },
  slytherin: {
    points: 140,
    students: ['Draco Malfoy', 'Severus Snape', 'Bellatrix Lestrange'],
  },
};

const dormBanners: Record<string, string> = {
  gryffindor: '/images/gryffindor_banner.png',
  hufflepuff: '/images/hufflepuff_banner.png',
  ravenclaw: '/images/ravenclaw_banner.png',
  slytherin: '/images/slytherin_banner.png',
};

function Banner({ texturePath }: { texturePath: string }) {
  const texture = useLoader(TextureLoader, texturePath);
  const bannerRef = useRef<THREE.Mesh>(null);
  const [aspect, setAspect] = useState(1);
  const simplex = useRef(new SimplexNoise({ random: Math.random }));

  useEffect(() => {
    const img = new Image();
    img.src = texturePath;
    img.onload = () => {
      setAspect(img.width / img.height);
    };
  }, [texturePath]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (bannerRef.current) {
        const xNoise = simplex.current.noise(t * 0.1, 0);
        const yNoise = simplex.current.noise(t * 0.1, 1);
        const zNoise = simplex.current.noise(0, t * 0.1);
        bannerRef.current.rotation.x = 0.1 * xNoise;
        bannerRef.current.rotation.y = 0.1 * yNoise;
        bannerRef.current.rotation.z = 0.1 * zNoise;
    }
  });

  return (
    <mesh ref={bannerRef}>
      <planeGeometry args={[5 * aspect, 5]} />
      <meshStandardMaterial map={texture} transparent={true} />
    </mesh>
  );
}

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
    <>
      <div className="scrolling-names-container">
        <div className="scrolling-names">
          {details.students.concat(details.students).map((student, index) => (
            <span key={index}>{student}</span>
          ))}
        </div>
      </div>
      <div className="dorm-content min-h-screen flex flex-col items-center justify-center text-center relative">
        <div className="absolute top-0 right-0 w-1/4 h-3/4">
          <Canvas gl={{ alpha: true }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Banner texturePath={bannerSrc} />
          </Canvas>
        </div>
        <h1 className={clsx('text-4xl mb-6 dormtype', dormClass)}>
          {dormTitle}
        </h1>
        <div className="dorm-detail mt-6 justify-content">
          <div className="mb-4">Points: {details.points}</div>
        </div>
      </div>
    </>
  );
}
