'use client';

import React from 'react';
import Image from 'next/image';
import Title from './Title';
import { LinkPreview } from '@/components/ui/link-preview'; // Assuming LinkPreview component is defined and imported correctly
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function TechStack() {
  const { ref } = useSectionInView('Stack');

  const refScroll = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    target: refScroll,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0.7, 1]
  );
  const opacityProgress = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0.8, 1]
  );
  return (
    <>
      <div className="" ref={ref}>
        <motion.div
          ref={refScroll}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          id="techstack"
          className="scroll-mt-28"
        >
          <Title name="Tech Stack" />
          <div className="px-4 text-center pb-5 2xl:ml-14 2xl:mt-20 2xl:mb-10 2xl:text-3xl">
            Preferred tech stack:{' '}
            <LinkPreview
              url="https://nextjs.org/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Next.js
            </LinkPreview>
            ,{' '}
            <LinkPreview
              url="https://www.typescriptlang.org/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Typescript
            </LinkPreview>
            ,{' '}
            <LinkPreview
              url="https://tailwindcss.com/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Tailwind CSS
            </LinkPreview>
            ,{' '}
            <LinkPreview
              url="https://nodejs.org/en"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Node.js
            </LinkPreview>{' '}
            and{' '}
            <LinkPreview
              url="https://www.mongodb.com/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              MongoDB
            </LinkPreview>
            .
          </div>
          <div className="mb-20 px-4 sm:px-20 md:px-4 xl:px-40">
            <section className="items-center justify-items-center grid gap-4 grid-cols-5 sm:grid-cols-6 md:grid-cols-9">
              <LinkPreview
                url="https://nextjs.org/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/next.png"
                  width={10}
                  height={10}
                  alt="Next.js Logo"
                  className="w-36 2xl:w-64"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://www.typescriptlang.org/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/typescript.webp"
                  width={10}
                  height={10}
                  alt="TypeScript Logo"
                  className="w-16 2xl:w-40"
                  unoptimized
                />
              </LinkPreview>
              <LinkPreview
                url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/javascript.png"
                  width={10}
                  height={10}
                  alt="JavaScript Logo"
                  className="w-16 2xl:w-40"
                  unoptimized
                />
              </LinkPreview>
              <LinkPreview
                url="https://tailwindcss.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/tailwind.png"
                  width={10}
                  height={10}
                  alt="Tailwind CSS Logo"
                  className="w-20 2xl:w-36"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://reactjs.org/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/react.webp"
                  width={10}
                  height={10}
                  alt="React Logo"
                  className="w-24 2xl:w-36"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://nodejs.org/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/node.png"
                  width={10}
                  height={10}
                  alt="Node.js Logo"
                  className="w-32 2xl:w-52"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://www.python.org/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/python.png"
                  width={10}
                  height={10}
                  alt="Python Logo"
                  className="w-16 2xl:w-36"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://www.java.com/en/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/java.webp"
                  width={10}
                  height={10}
                  alt="Java Logo"
                  className="w-24 2xl:w-44"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://developer.mozilla.org/en-US/docs/Web/HTML"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/html.png"
                  width={10}
                  height={10}
                  alt="HTML Logo"
                  className="w-10 sm:w-14 2xl:w-28"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://developer.mozilla.org/en-US/docs/Web/CSS"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/css.png"
                  width={10}
                  height={10}
                  alt="CSS Logo"
                  className="w-24 2xl:w-44"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://www.php.net/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/php.png"
                  width={10}
                  height={10}
                  alt="PHP Logo"
                  className="w-24 2xl:w-48"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://learn.microsoft.com/en-us/dotnet/visual-basic/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/vb.png"
                  width={10}
                  height={10}
                  alt="Visual Basic Logo"
                  className="w-24 2xl:w-52"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://www.mathworks.com/products/matlab.html"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/matlab.png"
                  width={10}
                  height={10}
                  alt="MATLAB Logo"
                  className="w-20 2xl:w-40"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://www.docker.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/docker.webp"
                  width={10}
                  height={10}
                  alt="Docker Logo"
                  className="w-20 2xl:w-44"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/csharp.png"
                  width={10}
                  height={10}
                  alt="C# Logo"
                  className="w-40 2xl:w-56"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://www.mongodb.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/mongodb.png"
                  width={10}
                  height={10}
                  alt="MongoDB Logo"
                  className="w-36 2xl:w-60"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://ui.shadcn.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/shadcn.png"
                  width={10}
                  height={10}
                  alt="Shadowcn Logo"
                  className="rounded-lg w-[64px] h-[63px] 2xl:w-[122px] 2xl:h-[120px]"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://ui.aceternity.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/aceternity.png"
                  width={10}
                  height={10}
                  alt="Aeternity Logo"
                  className="rounded-lg w-[66px] h-[65px] 2xl:w-[122px] 2xl:h-[124px]"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://mui.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/mui.png"
                  width={10}
                  height={10}
                  alt="Material-UI Logo"
                  className="w-20 2xl:w-40"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://aws.amazon.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/aws.png"
                  width={10}
                  height={10}
                  alt="AWS Logo"
                  className="w-32 2xl:w-52"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://firebase.google.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/firebase.png"
                  width={10}
                  height={10}
                  alt="Firebase Logo"
                  className="w-24 2xl:w-52"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://graphql.org/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/graphql.png"
                  width={10}
                  height={10}
                  alt="GraphQL Logo"
                  className="w-20 2xl:w-48"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://www.mysql.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/mysql.webp"
                  width={10}
                  height={10}
                  alt="MySQL Logo"
                  className="w-24 2xl:w-48"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://jestjs.io/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/jest.png"
                  width={10}
                  height={10}
                  alt="Jest Logo"
                  className="w-20 2xl:w-44"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://testing-library.com/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/rtl.png"
                  width={10}
                  height={10}
                  alt="React Testing Library Logo"
                  className="w-20 2xl:w-44"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://playwright.dev/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/playright.jpeg"
                  width={10}
                  height={10}
                  alt="Playwright Logo"
                  className="w-20 2xl:w-44"
                  unoptimized
                />
              </LinkPreview>

              <LinkPreview
                url="https://artillery.io/"
                className="animate-tech-stack-item"
              >
                <Image
                  src="/tech stack/artillery.png"
                  width={10}
                  height={10}
                  alt="Artillery Logo"
                  className="w-16 2xl:w-32"
                  unoptimized
                />
              </LinkPreview>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
}
