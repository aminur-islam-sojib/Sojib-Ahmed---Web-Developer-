import { lazy, Suspense, useState } from 'react';
import { AboutSkeleton } from './Skeleton/AboutSkeleton/AboutSkelteon';
import ResumeSkeleton from './Skeleton/ResumeSkeleton/ResumeSkeleton';

// import About from './Home/About/About';
const About = lazy(() => import('./Home/About/About'));
const Navbar = lazy(() => import('./Navbar'));
const Resume = lazy(() => import('./Home/Resume/Resume'));
const Portfolio = lazy(() => import('./Home/Portfolio/Portfolio'));
const Contact = lazy(() => import('./Home/Contact/Contact'));

const MainBar = () => {
  const [activeTab, setActiveTab] = useState<string>('about');

  return (
    <div className="bg-[#1e1e1f] border-1 border-[#383838] rounded-2xl p-5 relative ">
      {/* Add padding-bottom on mobile to prevent content being hidden behind navbar */}

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:absolute lg:top-0 lg:right-0 lg:left-auto lg:bottom-auto">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {activeTab === 'about' && (
        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>
      )}
      {activeTab === 'resume' && (
        <Suspense fallback={<ResumeSkeleton />}>
          <Resume />
        </Suspense>
      )}
      {activeTab === 'portfolio' && (
        <Suspense fallback={<div>Loading...</div>}>
          <Portfolio />
        </Suspense>
      )}
      {activeTab === 'contact' && (
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

export default MainBar;
