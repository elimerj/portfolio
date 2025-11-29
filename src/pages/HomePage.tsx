import { About } from '@/components/About';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export const HomePage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
