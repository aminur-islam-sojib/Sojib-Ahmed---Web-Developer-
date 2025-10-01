import ExperienceTimeline from './ExperienceTimeLine';
import HeaderGenerator from '../HeaderGenerator';
import EducationTimeLine from './EducationTimeLine';
import Skills from './Skills/Skills';

const Resume = () => {
  return (
    <div>
      <HeaderGenerator children={'Resume'} />
      <div>
        <EducationTimeLine />
      </div>
      <div className=" my-10">
        <ExperienceTimeline />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
