import FrontEnd from './SkillSection.tsx/FrontEnd';
import BackEnd from './SkillSection.tsx/BackEnd';
import DesignTools from './SkillSection.tsx/DesignTools';
import VersionControls from './SkillSection.tsx/VersionControls';

import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const datas = [
  { id: 1, components: FrontEnd },
  { id: 2, components: BackEnd },
  { id: 3, components: VersionControls },
  { id: 3, components: DesignTools },
];

const Skills = () => {
  return (
    <div className="px-3  md:px-10">
      <div className="relative border-l-1 border-gray-500 pl-6  space-y-4">
        <section className="absolute -left-6">
          <div className="bgIcon w-fit p-3 rounded-xl">
            <BookOpen color="#FFDB70" />
          </div>
        </section>
        <section>
          <h1 className=" text-2xl font-medium p-3">Skills</h1>
        </section>

        {datas.length > 0
          ? datas.map((exp, index) => {
              const Component = exp.components;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative mb-5 md:mb-10"
                >
                  {/* Dot indicator */}
                  <span className="dotIndicator absolute mt-2 -left-[33px] w-4 h-4 rounded-full z-10 shadow-md"></span>

                  <div className=" rounded-xl pl-3">
                    <Component />
                  </div>
                </motion.div>
              );
            })
          : 'not added yet'}
      </div>
    </div>
  );
};

export default Skills;
