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
          <section className="text:xl sm:text-2xl mx-auto text-center xl:text-left mb-40 md:px-40">
            <a
              href="https://www.linkedin.com/in/chrisysk/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked In
            </a>
            <div>0448581566</div>
            <div>chrisyeesk@gmail.com</div>
          </section>
        </motion.div>
      </div>
    </>
  );
};
