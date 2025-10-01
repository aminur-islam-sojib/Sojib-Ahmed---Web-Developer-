import { useSelector } from 'react-redux';
import AsideContactInfo from './AsideContactInfo';
import GradientBorderButton from './GradientBorderButton/GradientBorderButton';
import PersonalInfo from './PersonalInfo';
import { type RootState } from '../../store/store';
import { motion, AnimatePresence } from 'motion/react';

const AsideBar = () => {
  const selectedContact = useSelector(
    (state: RootState) => state.clickStateR.clickState
  );

  return (
    <div className="bg-[#1e1e1f] border-1 border-[#383838] rounded-2xl p-1 sm:p-5 relative">
      <motion.div
        initial={{ opacity: 0, y: -50, filter: 'blur(2px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
      >
        <PersonalInfo />
      </motion.div>
      <div className=" absolute top-0 right-0 rounded-2xl lg:hidden">
        <GradientBorderButton />
      </div>
      <AnimatePresence>
        {selectedContact && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className=" block lg:hidden"
          >
            <AsideContactInfo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AsideBar;
