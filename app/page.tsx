import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
// import { PersonalPhoto } from './components/PersonalPhoto';
import Introduction from './components/introduction';
import { TestimonyCards } from './components/testimonyCards';
import localFont from '@next/font/local';

// const roboto = localFont({ src: './components/font/roboto.woff2' });
const manrope = localFont({
  src: './components/font/Manrope-ExtraLight.woff2',
});

export default function Home() {
  return (
    <main
      className={`${manrope.className} flex text-GeistSans min-h-screen max-w-screen-2xl flex-col`}
    >
      <Introduction />
      {/* <PersonalPhoto /> */}
      <TestimonyCards />
      <Experience />
      <Projects />
      <Certificates />
    </main>
  );
}
