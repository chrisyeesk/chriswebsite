'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  return (
    <motion.section
      className={cn(
        'mx-auto w-full bg-indigo-800  relative rounded-lg overflow-hidden',
        containerClassName
      )}
    >
      <div
        className="relative  h-full [background-image:radial-gradient(88%_60%_at_top,rgba(80,92,111,0.5),rgba(80,92,111,0))]  sm:mx-0 sm:rounded-lg overflow-hidden"
        style={{
          boxShadow:
            '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
        }}
      >
        <motion.div
          className={cn('h-full px-6 py-10 md:py-20 sm:px-10', className)}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

