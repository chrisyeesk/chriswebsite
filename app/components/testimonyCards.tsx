'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export function TestimonyCards() {
  const { ref } = useSectionInView('Testimony');

  return (
    // <></>
    <motion.div
      ref={ref}
      id="testimony"
      className="scroll-mt-28 -mt-20 2xl:-mt-[204px] mb-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center relative overflow-hidden"
    >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </motion.div>
  );
}

const testimonials = [
  {
    quote:
      'Chris delivered the Colonial Secretary project on time with high quality. He required minimal supervision throughout his tenure at the State Library. He demonstrated passion in his work.',
    name: 'Mankit Au',
    title: 'Manager at State Library of Queensland',
  },
  {
    quote:
      'You can rely Chris on almost everything, frontend, authentication, database etc. I recommend Chris to any team who is looking for a full-stack developer.',
    name: 'Taha Ansari',
    title: 'Chief Technology Officer at Sindy.ai',
  },
  {
    quote:
      "Chris took ownership of the project and delivered a high-quality work. Chris consistently upskill himself and up to date with the latest technologies. I will definitely recommend Chris for any project.'",
    name: 'Varshith Meesala',
    title: 'Frontend Lead at Sindy.ai',
  },
  {
    quote:
      'Chris was rehired for his exceptional performance at Advanced Energy. He was willing to learn and demonstrated passion in his work.',
    name: 'WB Ang',
    title: 'Plant Manager at Advanced Energy Industries',
  },
  {
    quote:
      'Chris has exceptional programming skills and brings a lot of value to the team. Chris constantly took initatives and he took full ownership of his work, I highly recommend Chris to any team.',
    name: 'Angelia Ng',
    title: 'Manager at Intel Corporation',
  },
  {
    quote:
      'I worked with Chris during our final year Software Project at University of Melbourne. Chris knows his stuff and have been a great team player. Chris was really good at his frontend work.',
    name: 'Louis Zhou',
    title: 'Software Engineer at Tinyme',
  },
];
