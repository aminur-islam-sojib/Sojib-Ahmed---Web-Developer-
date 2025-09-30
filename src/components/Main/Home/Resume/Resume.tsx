import ExperienceTimeline from './ExperienceTimeLine';
import HeaderGenerator from '../HeaderGenerator';
import EducationTimeLine from './EducationTimeLine';

const Resume = () => {
  return (
    <div>
      <HeaderGenerator children={'Resume'} />
      <div>
        <EducationTimeLine />
      </div>
      <div className=" mt-10">
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Resume;
