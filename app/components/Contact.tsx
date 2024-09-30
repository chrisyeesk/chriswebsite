'use client';
import React from 'react';
import Image from 'next/image';
import { LinkPreview } from '@/components/ui/link-preview';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useSectionInView } from '@/lib/hooks';
import Title from './Title';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const refScroll = useRef<HTMLDivElement>(null);

  const scrollYProgress = useScroll({
    target: refScroll,
    offset: ['0 1', '1.1 1'],
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
      <div ref={ref}>
        <motion.div
          ref={refScroll}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          id="contact"
        >
          <Title name="Contact" />
          <section className="2xl:flex 2xl:justify-center lg:ml-20 2xl:text-2xl text-xl sm:text-2xl mx-auto text-center xl:text-left mb-20 2xl:mb-28 px-4 xl:px-40">
            <div className="2xl:mr-10">
              <a
                href="https://drive.google.com/file/d/1Umz-YJzUVZp7IW_Kvm0QDCn9B_qIDsg9/view?usp=sharing"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                My CV
              </a>
            </div>
            <div className="2xl:mr-10">
              <a
                href="https://www.linkedin.com/in/chrisysk/"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linked In
              </a>
            </div>

            <div className="2xl:mr-10">0448581566</div>
            <div className="2xl:mr-10">chrisyeesk@gmail.com</div>
          </section>
        </motion.div>
      </div>
    </>
  );
};
