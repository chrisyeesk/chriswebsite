'use client';
import React from 'react';
import localFont from '@next/font/local';
import { LinkPreview } from '@/components/ui/link-preview';
import { useSectionInView } from '@/lib/hooks';

const playwrite = localFont({ src: './font/playwrite.woff2' });
// const roboto = localFont({ src: './font/roboto.woff2' });
// const cormorant = localFont({ src: 'cormorant.woff2' });

const Introduction = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen max-w-[3000px] mx-auto flex flex-col justify-center px-11 sm:px-20 lg:px-40 pb-20"
    >
      {/* <AnimatedText
        text={"Chris'"}
        type={'paragraph'}
        classAssign={`${playwrite.className} text-8xl mt-4 mb-1`}
      /> */}
      <div className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:mb-14 2xl:text-[8rem]">
        <div className={`${playwrite.className}  mt-24 2xl:mt-0 mb-1`}>
          Chris&apos;
        </div>
        <div
          className={`${playwrite.className}  mb-14 md:mb-12 lg:mb-20 2xl:mb-10`}
        >
          Portfolio
        </div>
      </div>
      {/* <div className="flex">
        <div>
          <Image height={70} width={70} alt="aws logo" src="/aws.png"></Image>
        </div>
        <div className="text-xl mb-5">AWS Certified Developer Associate</div>
      </div> */}
      <div className={`text-xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-5`}>
        I am a software engineer focused on building, deploying and testing
        full-stack web application. I use the latest technolgies, such as{' '}
        <LinkPreview
          url="https://www.framer.com/motion/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Framer Motion
        </LinkPreview>
        ,{' '}
        <LinkPreview
          url="https://nextjs.org/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Next.js
        </LinkPreview>
        ,{' '}
        <LinkPreview
          url="https://openai.com/index/openai-api/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          OpenAI api
        </LinkPreview>{' '}
        and{' '}
        <LinkPreview
          url="https://www.langchain.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Langchain
        </LinkPreview>{' '}
        to build stunning and futuristic web application. I hold an AWS
        Certified Developer - Associate certificate.
      </div>
    </section>
  );
};

export default Introduction;
