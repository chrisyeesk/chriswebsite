import { Certificates } from './components/Certificates';
import Chatbot from './components/ChatBot';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import { Projects } from './components/Projects';
import TechStack from './components/TechStack';
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
      <Chatbot/>
      <Footer />
    </main>
  );
}
