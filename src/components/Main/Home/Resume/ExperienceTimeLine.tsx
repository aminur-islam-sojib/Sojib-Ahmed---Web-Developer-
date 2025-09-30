import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

const experiences = [
  {
    company: 'Tenvelop',
    role: 'WordPress Developer & WHMCS Expert',
    duration: '2025 — Present',
  },
  {
    id: 3,
    company: 'DrevStudio',
    role: 'CEO & IT Manager',
    duration: '2023 — Present',
  },
  {
    id: 4,
    company: 'UnZipHost',
    role: 'Web Developer & Hosting Manager',
    duration: '2023 — 2025',
  },
  {
    id: 5,
    company: 'Ajaira Development',
    role: 'Team Member',
    duration: '2023 — 2024',
  },
];

const ExperienceTimeline = () => {
  return (
    <div className=" px-10">
      <div className="relative border-l-1 border-gray-500 pl-6  space-y-8">
        <section className="absolute -left-6">
          <div className="bgIcon w-fit p-3 rounded-xl">
            <BookOpen color="#FFDB70" />
          </div>
        </section>
        <section>
          <h1 className=" text-2xl font-medium p-3">Experience</h1>
        </section>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dot indicator */}
            <span className="dotIndicator absolute mt-1 -left-[33px] w-4 h-4 rounded-full z-10 shadow-md"></span>

            <div className=" rounded-xl pl-3">
              <h3 className="text-[15px] font-semibold text-white">
                {exp.company}
              </h3>
              <p className="text-xs text-amber-200 my-1">{exp.duration}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400">
                {exp.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
