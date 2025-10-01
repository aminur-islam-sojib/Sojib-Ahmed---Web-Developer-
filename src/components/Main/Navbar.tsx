// Navbar.tsx
import { motion } from 'motion/react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { setToastActive } from '../../store/ClickStateSlice';

interface NavbarProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navLinks = ['about', 'resume', 'portfolio', 'contact', 'download cv'];
  const [toast, setToast] = useState<boolean>(false);
  const dispatch = useDispatch();
  dispatch(setToastActive(toast));

  const handleTabClick = (tab: string) => {
    if (tab === 'download cv') {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = '/cv.pdf'; // Path to your file in public folder
      link.download = 'Sojib Ahmed - CV.pdf'; // Name of downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setToast(true);
    } else {
      setActiveTab(tab);
    }
    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full lg:w-auto flex justify-center lg:justify-end py-3 md:py-5 p-1 md:px-4 rounded-tr-xl rounded-tl-xl sm:rounded-tr-3xl sm:rounded-tl-3xl lg:px-10 lg:rounded-tl-none bg-[#2b2b2cbf] backdrop-blur-[5px] border-t-[1px] lg:border-[1px] border-[#383838] lg:rounded-tr-2xl lg:rounded-bl-2xl"
    >
      <div className="flex gap-2 sm:gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap">
        {navLinks.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab)}
            className={`relative capitalize text-[13px] lg:text-[15px] cursor-pointer font-medium transition-colors duration-300 ease-in-out whitespace-nowrap ${
              activeTab === tab && tab !== 'download cv'
                ? 'text-amber-400'
                : 'text-white hover:text-gray-400'
            }`}
          >
            {activeTab === tab && tab !== 'download cv' && (
              <motion.span
                layoutId="activeTab"
                className="absolute -bottom-0.5 md:-bottom-1 left-0 right-0 h-[2px] bg-amber-400"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <motion.span
              initial={false}
              animate={{
                scale: activeTab === tab && tab !== 'download cv' ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {tab}
            </motion.span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
