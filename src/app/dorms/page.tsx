'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DormCard from '../components/DormCard';
import './styles/dorms.css';

const dorms = [
  {
    'title': 'Gryffindor',
    'color': '#7C201C',
  },
  {
    'title': 'Hufflepuff',
    'color': '#E8CA27',
  },
  {
    'title': 'Ravenclaw',
    'color': '#3C6985',
  },
  {
    'title': 'Slytherin',
    'color': '#376E35',
  }
];

export default function Dorm() {
  const router = useRouter();

  const handleDormClick = (dorm: string) => {
    router.push(`/dorms/${dorm.toLowerCase()}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 gap-4 flex justify-center items-center">
        {dorms.map((dorm, index) => (
          <DormCard
            key={index}
            color={dorm.color}
            type={dorm.title}
            onClick={() => handleDormClick(dorm.title)}
          />
        ))}
      </div>
    </div>
  );
}
