import { Certificates } from '../components/portfolio/Certificates';
import Chatbot from '../components/shared/ChatBot';
import { Contact } from '../components/portfolio/Contact';
import { Education } from '../components/portfolio/Education';
import Experiences from '../components/portfolio/Experiences';
import Head from 'next/head';
import Footer from '../components/portfolio/Footer';
import { Projects } from '../components/portfolio/Projects';
import TechStack from '../components/portfolio/TechStack';
import Introduction from '../components/portfolio/introduction';
import { TestimonyCards } from '../components/portfolio/testimonyCards';
import localFont from 'next/font/local';

const manrope = localFont({
  src: '../components/font/Manrope-ExtraLight.woff2',
  display: 'swap',
});

export default function Portfolio() {
  return (
    <><Head>
      <link
        rel="preload"
        href="/components/font/Manrope-ExtraLight.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous" />
    </Head><main
      className={`${manrope.className} mx-auto justify-center flex text-GeistSans min-h-screen w-full flex-col`}
    >
        <Introduction />
        <TestimonyCards />
        <TechStack />
        <Experiences />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
        <Chatbot />
        <Footer />
      </main></>
  );
}
