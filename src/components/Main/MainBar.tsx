// MainBar.tsx
import { useState } from 'react';
import About from './Home/About/About';
import Navbar from './Navbar';
import Resume from './Home/Resume/Resume';
import Portfolio from './Home/Portfolio/Portfolio';

const MainBar = () => {
  const [activeTab, setActiveTab] = useState<string>('about');

  return (
    <div className="bg-[#1e1e1f] border-1 border-[#383838] rounded-2xl p-5 relative ">
      {/* Add padding-bottom on mobile to prevent content being hidden behind navbar */}

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:absolute lg:top-0 lg:right-0 lg:left-auto lg:bottom-auto">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {activeTab === 'about' && <About />}
      {activeTab === 'resume' && <Resume />}
      {activeTab === 'portfolio' && <Portfolio />}
    </div>
  );
};

export default MainBar;
