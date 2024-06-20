// import React from 'react';
// import { motion, Variants } from 'framer-motion';

// // Define props interface
// interface AnimatedCharactersProps {
//   text: string;
//   type: 'paragraph' | 'heading1' | 'heading2';
//   classAssign: string;
// }

// // Word wrapper component
// const Wrapper: React.FC<{ children: React.ReactNode }> = (props) => {
//   return <span className="word-wrapper">{props.children}</span>;
// };

// // Map API "type" values to JSX tag names
// const tagMap: Record<string, keyof JSX.IntrinsicElements> = {
//   paragraph: 'p',
//   heading1: 'h1',
//   heading2: 'h2',
// };

// // AnimatedCharacters component
// const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({
//   text,
//   type,
//   classAssign,
// }) => {
//   // Framer Motion variant object, for controlling animation
//   const item: Variants = {
//     hidden: {
//       y: '200%',
//       color: '#0055FF',
//       transition: { ease: [0, 0.03, 0.515, 0.955], duration: 0.85 },
//     },
//     visible: {
//       y: 0,
//       color: '#FF0088',
//       transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
//     },
//   };

//   // Split each word of props.text into an array
//   const splitWords: string[] = text.split(' ');

//   // Create storage array for words
//   const words: string[][] = splitWords.map((word) => [word, '\u00A0']);

//   // Get the tag name from tagMap based on props.type
//   const Tag = tagMap[type];

//   return (
//     <Tag>
//       {words.map((word, index) => (
//         <Wrapper key={index}>
//           {word.map((element, index) => (
//             <span
//               style={{
//                 overflow: 'hidden',
//                 display: 'inline-block',
//               }}
//               key={index}
//             >
//               <motion.span
//                 className={classAssign}
//                 style={{ display: 'inline-block' }}
//                 variants={item}
//               >
//                 {element}
//               </motion.span>
//             </span>
//           ))}
//         </Wrapper>
//       ))}
//     </Tag>
//   );
// };

// export default AnimatedCharacters;
