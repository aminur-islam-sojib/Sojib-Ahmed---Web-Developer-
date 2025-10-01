import ExperienceTimeline from './ExperienceTimeLine';
import HeaderGenerator from '../HeaderGenerator';
import EducationTimeLine from './EducationTimeLine';
import TestSkills from '../../../_Test/TestSkills';

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
        <TestSkills />
      </div>
    </div>
  );
};

export default Resume;
