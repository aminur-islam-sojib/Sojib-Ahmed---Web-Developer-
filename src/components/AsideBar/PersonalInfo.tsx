import AsideContactInfo from './AsideContactInfo';
import pfp2 from '/pfp2.jpg';
import { motion } from 'motion/react';

const PersonalInfo = () => {
  return (
    <div className=" lg:mt-5 flex lg:flex-col">
      <motion.div
        initial={{ filter: 'blur(10px)' }}
        animate={{ filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
        className=" flex lg:justify-center lg:items-center p-2 relative"
      >
        <figure className=" p-2 bgGradient rounded-3xl">
          <img
            src={pfp2}
            alt=""
            className="h-[110px] w-auto rounded-2xl object-cover"
          />
        </figure>
      </motion.div>
      <div className=" flex mt-2 lg:mt-0 flex-col">
        <div>
          <h1 className=" text-2xl text-center m-3 font-medium">Sojib Ahmed</h1>
        </div>
        <div className="flex lg:justify-center lg:items-center ml-3 lg:ml-0">
          <div className=" bg-[#2b2b2c] w-fit text-[12px]  py-1 px-4 rounded-md border-r-2 border-amber-400">
            <h1> Web Developer</h1>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <AsideContactInfo />
      </div>
    </div>
  );
};

export default PersonalInfo;
