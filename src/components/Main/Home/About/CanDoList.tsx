import { Palette, Code2, Smartphone, Brush } from 'lucide-react';
import { motion } from 'motion/react';

const servicesData = [
  {
    id: 1,
    title: 'Web Design',
    description:
      'The most modern and high-quality design made at a professional level.',
    icon: Palette,
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'High-quality development of sites at the professional level.',
    icon: Code2,
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description:
      'Professional development of applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    id: 4,
    title: 'Graphics Design',
    description:
      'The most modern and high-quality design made at a professional level.',
    icon: Brush,
  },
];

const CanDoList = () => {
  return (
    <div>
      <h1 className=" text-xl font-semibold mb-5">What i'm doing</h1>

      <div className=" grid md:grid-cols-2 gap-5">
        {servicesData.map(({ id, title, description, icon: Icon }) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            key={id}
            className=" bgGrayGradient flex gap-4 p-8 bgGrayGradient rounded-xl relative "
          >
            <div className="bgIcon h-fit p-2 rounded-xl">
              <Icon color="#ffda6b" size={28} />
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className="text-[18px] font-medium">{title}</h1>
              <h1 className=" text-sm text-gray-300 tracking-tight">
                {description}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CanDoList;
