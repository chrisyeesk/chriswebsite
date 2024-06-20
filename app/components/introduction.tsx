import React from 'react';
import localFont from '@next/font/local';

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
        <div className={`${playwrite.className} text-6xl md:text-8xl mt-12 mb-1`}>
          Chris'
        </div>
        <div className={`${playwrite.className} text-6xl md:text-8xl mb-14 md:mb-12 lg:mb-20`}>Portfolio</div>
      </div>
      {/* <div className="flex">
        <div>
          <Image height={70} width={70} alt="aws logo" src="/aws.png"></Image>
        </div>
        <div className="text-xl mb-5">AWS Certified Developer Associate</div>
      </div> */}
      <div className={`text-2xl md:text-4xl mb-5 leading-snug	`}>
        I am a software engineer focused on building, deploying and testing
        full-stack web application. I use latest technolgies like Framer Motion,
        LangChain, OpenAI api and Next.js to build stunning and snappy web
        application. AWS Certified.
      </div>
    </section>
  );
};

export default Introduction;
