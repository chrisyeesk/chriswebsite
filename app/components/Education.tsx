import React from 'react';
import Image from 'next/image';
import { LinkPreview } from '@/components/ui/link-preview';

export const Education = () => {
  return (
    <>
      <div
        className={`px-4 sm:px-20 md:px-40 flex justify-center lg:relative xl:justify-start font-bold mt-20 text-3xl md:text-5xl mb-5`}
        >
        Education
      </div>
      <section className="lg:flex mb-5 items-center md:px-40">
        <div className="flex mb-3 items-center">
          <Image
            width={150}
            height={150}
            alt="university of melbourne logo"
            src="./unimelblogo.svg"
          />
          <div className="ml-3 text-2xl">
            <LinkPreview
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              url="https://www.unimelb.edu.au/"
            >
              University of Melboourne
            </LinkPreview>
            <div>Master of Information Technology</div>
          </div>
        </div>
        <div className="ml-5 flex items-center">
          <Image width={110} height={110} alt="monash logo" src="/monash.png" />
          <div className="ml-8 text-2xl">
            <LinkPreview
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              url="https://www.monash.edu/"
            >
              Monash University
            </LinkPreview>
            <div>Bachelor of Mechanical Engineering (Honours)</div>
          </div>
        </div>
      </section>
    </>
  );
};
