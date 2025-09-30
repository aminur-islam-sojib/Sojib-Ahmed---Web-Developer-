import ExperienceTimeline from './ExperienceTimeLine';
import HeaderGenerator from '../HeaderGenerator';

const Resume = () => {
  return (
    <div>
      <HeaderGenerator children={'Resume'} />
      <div>
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Resume;
