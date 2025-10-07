'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { useRef, useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Chat() {
  //input code
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const placeholders = [
    'What language can Chris code?',
    'What did Chris study at university?',
    "What is Chris' most recent work experience?",
  ];

  useEffect(() => {
    let interval: any;
    const startAnimation = () => {
      interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 2500);
    };
    startAnimation();
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [animating, setAnimating] = useState(false);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue('font-size'));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = '#FFF';
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue('');
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !animating) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || '';
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };
  //----------------------------

  const { messages, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
    onError: (e) => {
      console.log(e);
    },
  });
  const chatParent = useRef<HTMLUListElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(event);
    vanishAndSubmit();
  };

  return (
    <>
      <section className="container px-4 2xl:px-2 flex flex-col flex-grow gap-4 mx-auto">
        <ul
          ref={chatParent}
          className="h-[315px] 2xl:h-[400px] flex-grow rounded-lg overflow-y-auto flex flex-col gap-4"
        >
          <li className="flex justify-end">
            <div className="2xl:text-md mb-1 2xl:mb-1 2xl:py-5 2xl:px-7 rounded-xl 2xl:rounded-3xl py-3 px-5 bg-gray-600 text-sm text-white max-w-[71%] break-words">
              I am Chris&apos; AI assistant. Ask me anything about Chris&apos; educational
              background, experience, and skills.
            </div>
          </li>
          {messages.map((m, index) => (
            <div key={index}>
              {m.role === 'user' ? (
                <li key={m.id} className="flex justify-start">
                  <div className="2xl:text-md 2xl:mb-1 2xl:py-5 2xl:px-7 mb-1 rounded-xl 2xl:rounded-3xl py-3 px-5 bg-gray-800 text-sm text-white max-w-[71%] break-words">
                    {m.content}
                  </div>
                </li>
              ) : (
                <li key={m.id} className="flex justify-end">
                  <div className="2xl:text-md 2xl:mb-1 2xl:py-5 2xl:px-7 mb-1 rounded-xl 2xl:rounded-3xl py-3 px-5 bg-gray-600 text-sm text-white max-w-[71%] break-words">
                    {m.content}
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
      </section>
      <footer className="p-4 2xl:px-2 w-full mx-auto">
        <form
          onSubmit={handleFormSubmit}
          className="flex w-full  mx-auto items-center"
          ref={formRef}
        >
          <div
            className={cn(
              'w-full relative mx-auto bg-white dark:bg-zinc-700 h-12 2xl:h-12 rounded-xl overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200',
              value && 'bg-gray-50 dark:bg-zinc-300'
            )}
          >
            <canvas
              className={cn(
                'absolute pointer-events-none text-base transform scale-50 top-[20%] 2xl:left-8 2xl:top-8 left-2 sm:left-2 origin-top-left filter invert dark:invert-0 pr-20',
                !animating ? 'opacity-0' : 'opacity-100'
              )}
              ref={canvasRef}
            />
            <input
              onChange={(e) => {
                if (!animating) {
                  setValue(e.target.value);
                  handleInputChange && handleInputChange(e);
                }
              }}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              value={value}
              type="text"
              className={cn(
                'w-full relative 2xl:pl-4 xl:mt-[13px] 2xl:mt-[13px] text-sm 2xl:text-sm z-50 border-none dark:text-white bg-transparent text-black rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-4 pr-14',
                animating && 'text-transparent dark:text-transparent'
              )}
            />

            <button
              disabled={!value}
              type="submit"
              className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 2xl:h-10 2xl:w-10 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300 2xl:h-6 2xl:w-10 h-4 w-4"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <motion.path
                  d="M5 12l14 0"
                  initial={{
                    strokeDasharray: '50%',
                    strokeDashoffset: '50%',
                  }}
                  animate={{
                    strokeDashoffset: value ? 0 : '50%',
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'linear',
                  }}
                />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </motion.svg>
            </button>

            <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
              <AnimatePresence mode="wait">
                {!value && (
                  <motion.p
                    initial={{
                      y: 5,
                      opacity: 0,
                    }}
                    key={`current-placeholder-${currentPlaceholder}`}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -15,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'linear',
                    }}
                    className="dark:text-zinc-500 lg:text-sm 2xl:pl-5 text-sxl font-normal text-black pl-4 text-left w-[calc(100%-2rem)] truncate"
                  >
                    {placeholders[currentPlaceholder]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </form>
      </footer>
    </>
  );
}
