import { ScrollText } from 'lucide-react';
import TestSkillsSection from './TestSkillsSection';

const TestSkills = () => {
  return (
    <div className=" px-10">
      <div className="relative  pl-6  space-y-8">
        <section className="absolute -left-6">
          <div className="bgIcon w-fit p-3 rounded-xl">
            <ScrollText color="#FFDB70" />
          </div>
        </section>
        <section>
          <h1 className=" text-2xl font-medium p-3">Skills</h1>
        </section>
        <section>
          <div>
            <TestSkillsSection />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestSkills;
