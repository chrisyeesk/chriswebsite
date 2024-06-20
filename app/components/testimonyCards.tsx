"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonyCards() {
  return (
    <div className="-mt-28 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Chris took ownership of the project and delivered a high-quality work. Chris consistently upskill himself and up to date with the latest technologies. I will definitely recommend Chris for any project.'",
    name: "Varshith Meesala",
    title: "Frontend Lead at Sincidium",
  },
  {
    quote:
      "Chris was rehired for his exceptional performance at Advanced Energy. He is willing to learn and demonstrated passion in his work.",
    name: "WB Ang",
    title: "Vice President at Advanced Energy Industries",
  },
  {
    quote: "Chris has exceptional scripting skills and brings a lot of value to the team. He took full ownship of his work, I highly recommend Chris to any team.",
    name: "Angelia Ng",
    title: "Manager at Intel Corporation",
  },
  {
    quote:
      "I worked with Chris during our final year Software Project at University of Melbourne. Chris knows his stuff and have been a great team player. Chris is really good at his frontend work.",
    name: "Louis Zhou",
    title: "Software Engineer at Tinyme",
  },
  {
    quote:
      "I worked with with Chris at Sincidium. Chris was always well-prepared in meetings and knows what he is doing.",
    name: "AJ",
    title: "Software Engineer at xxx",
  },
  {
    quote:
      "I worked with with Chris at Sincidium. Chris is a fast learner and a major contributor to the team.",
    name: "Benjamin Li",
    title: "Software Engineer at Heidi Health",
  }
];
