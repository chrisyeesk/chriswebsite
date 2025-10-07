"use client";

import React, { useEffect, useState } from "react";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random();

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: 1, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: 1, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
}) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: Star = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };

      setStars((prev) => [...prev, newStar]);

      // Remove star after animation completes (1s)
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, 1000);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId = setTimeout(createStar, randomDelay);
    };

    const initialDelay = Math.random() * 1000;
    timeoutId = setTimeout(createStar, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="gradient-shooting" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x * 100 + "%"}
          y={star.y * 100 + "%"}
          width={starWidth}
          height={starHeight}
          fill="url(#gradient-shooting)"
          transform={`rotate(${star.angle}, ${star.x * 100}%, ${star.y * 100}%)`}
          className="animate-shooting-star"
        />
      ))}
    </svg>
  );
};
