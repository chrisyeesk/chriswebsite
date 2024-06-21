import { Certificates } from './components/Certificates';
import { Education } from './components/Education';
import Experiences from './components/Experiences';
import { Projects } from './components/Projects';
import Testing from './components/Testing';
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
      <TestimonyCards />
      <Experiences />
      <Projects />
      <Certificates />
      <Education />
    </main>
  );
}
