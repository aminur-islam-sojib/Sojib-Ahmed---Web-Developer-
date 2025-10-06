import HeaderGenerator from '../HeaderGenerator';
import AboutCards from './AboutCards';
import CanDoList from './CanDoList';
import ClientReview from './ClientReview';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div>
      <HeaderGenerator children={'About'} />

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" text-sm text-gray-300 tracking-tight"
        >
          I'm Sojib Ahmed, a Next.js developer who's been hooked on how
          computers work since I first clicked a button as a kid. <br /> <br />{' '}
          I don't just build websites—I build systems that help businesses grow.
          Whether it's an e-commerce platform, web app, or business site, I
          focus on backend architecture that's fast, scalable, and actually
          solves problems. <br />
          <br /> I'm drawn to projects that seem impossible. The ones where
          people say "that's too complex" are exactly the ones that get me
          excited. I love turning those into "wait, you actually built that?"{' '}
          <br />
          <br /> I stay on top of new web technologies—not for the hype, but
          because better tools mean better solutions. When I'm not coding,
          you'll find me in a quiet space with headphones on, deep in the zone.{' '}
          <br /> <br />
          <span className=" font-medium">
            Currently open to projects and opportunities where I can build
            things that matter.
          </span>
        </motion.div>
        <div className=" my-10">
          <AboutCards />
        </div>
        <div>
          <CanDoList />
        </div>
        <div className="mt-5">
          <ClientReview />
        </div>
      </div>
    </div>
  );
};

export default About;
