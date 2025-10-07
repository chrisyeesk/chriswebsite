"use client";

import React, { useEffect, useRef, useState } from "react";

interface StarsBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className = "",
}) => {
  const [stars, setStars] = useState<
    { x: number; y: number; radius: number; opacity: number; twinkleSpeed: number | null }[]
  >([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Use actual pixel dimensions
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        const starCount = Math.floor(rect.width * rect.height * starDensity);
        const newStars = Array.from({ length: starCount }, () => {
          const shouldTwinkle =
            allStarsTwinkle || Math.random() < twinkleProbability;
          return {
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            radius: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.5,
            twinkleSpeed: shouldTwinkle
              ? minTwinkleSpeed +
                Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
              : null,
          };
        });
        setStars(newStars);
      }
    };

    // Small delay to ensure canvas is mounted
    const initTimeout = setTimeout(updateStars, 100);

    const handleResize = () => {
      updateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.5 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
};
