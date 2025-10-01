import './TestCss.css';

const TestSkillsBar = () => {
  return (
    <div>
      <div>
        <div className="skills-name">FrontEnd</div>
        <div className="skills-bar h-3 bg-gray-400 mt-2">
          <div
            className="skills-per h-[100%] bg-amber-400 w-[90%]"
            data-per={'90%'}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TestSkillsBar;
