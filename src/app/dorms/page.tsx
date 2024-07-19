'use client';

import React, { useState, useEffect } from 'react';
import DormComponent from '../components/Dorm';
import './styles/dorms.css';

const dorms = [
  {
    'title': 'Gryffindor',
    'color': 'red',
  },
  {
    'title': 'Huffllepuff',
    'color': 'yellow',
  },
  {
    'title': 'Ravenclaw',
    'color': 'blue',
  },
  {
    'title': 'Slytherin',
    'color': 'green',
  }
];

export default function Dorm() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 gap-4">
          {dorms.map((dorm, index) => (
            <DormComponent
              key={index}
              color={dorm.color}
              type={dorm.title}
            />
          ))}
        </div>
      </div>
    );
  }