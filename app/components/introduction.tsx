import React from 'react';
import localFont from '@next/font/local';
import { LinkPreview } from '@/components/ui/link-preview';

const playwrite = localFont({ src: './font/playwrite.woff2' });
const roboto = localFont({ src: './font/roboto.woff2' });
// const cormorant = localFont({ src: 'cormorant.woff2' });

const Introduction = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-20 lg:px-40 pb-20">
      {/* <AnimatedText
        text={"Chris'"}
        type={'paragraph'}
        classAssign={`${playwrite.className} text-8xl mt-4 mb-1`}
      /> */}
      <div className="">
        <div
          className={`${playwrite.className} text-5xl md:text-8xl mt-12 mb-1`}
        >
          Chris'
        </div>
        <div
          className={`${playwrite.className} text-5xl md:text-8xl mb-14 md:mb-12 lg:mb-20`}
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
      <div className={`text-lg md:text-4xl mb-5 leading-snug`}>
        I am a software engineer focused on building, deploying and testing
        full-stack web application. I use latest technolgies like{' '}
        <LinkPreview
          url="https://www.framer.com/motion/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Framer Motion
        </LinkPreview>
        ,{' '}<LinkPreview
          url="https://www.langchain.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Langchain
        </LinkPreview>,{' '}<LinkPreview
          url="https://openai.com/index/openai-api/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          OpenAI api
        </LinkPreview>{' '}and{' '}<LinkPreview
          url="https://nextjs.org/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Next.js
        </LinkPreview>{' '}to build stunning and responsive web
        application. I hold an AWS Certified Developer - Associate certificate.
      </div>
    </section>
  );
};

export default Introduction;