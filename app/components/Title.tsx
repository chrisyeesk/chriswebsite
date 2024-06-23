import React from 'react';

export default function Title({ name }: { name: string }) {
  return (
    <div
      className={`2xl:text-7xl 2xl:mt-20 2xl:mb-10 px-4 sm:px-20 md:px-40 flex justify-center lg:relative xl:justify-start font-bold text-3xl md:text-5xl mb-5`}
    >
      {name}
    </div>
  );
}
