// Navbar.tsx
import { motion } from 'motion/react';
import { type Dispatch, type SetStateAction } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navLinks = ['about', 'resume', 'portfolio', 'contact', 'download cv'];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full lg:w-auto flex justify-center lg:justify-end py-3 md:py-5 p-1 md:px-4 rounded-tr-xl rounded-tl-xl sm:rounded-tr-3xl  sm:rounded-tl-3xl lg:px-10 lg:rounded-tl-none bg-[#2b2b2cbf] backdrop-blur-[10px] border-t-[1px] lg:border-[1px] border-[#383838] lg:rounded-tr-2xl lg:rounded-bl-2xl"
    >
      <div className="flex gap-2 sm:gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap">
        {navLinks.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`relative capitalize text-[13px] lg:text-[15px] cursor-pointer font-medium transition-colors duration-300 ease-in-out whitespace-nowrap ${
              activeTab === tab
                ? 'text-amber-400'
                : 'text-white hover:text-gray-400'
            }`}
          >
            {activeTab === tab && (
              <motion.span
                layoutId="activeTab"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-amber-400"
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
                scale: activeTab === tab ? 1.05 : 1,
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
