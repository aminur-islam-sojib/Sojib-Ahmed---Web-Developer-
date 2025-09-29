import HeaderGenerator from '../HeaderGenerator';
import AboutCards from './AboutCards';

const About = () => {
  return (
    <div>
      <HeaderGenerator children={'About'} />

      <div>
        <div className=" text-sm text-gray-300 tracking-tight">
          I'm a passionate web developer, designer, and graphic designer with 6
          month of experience in transforming complex challenges into simple,
          beautiful, and intuitive solutions. With a strong foundation in both
          front-end and back-end development, I create responsive, user-friendly
          websites that balance aesthetics with functionality. <br /> <br /> My
          expertise in graphic design allows me to craft visually compelling
          interfaces and experiences that not only look great but are easy to
          use. From branding and visual identity to full-stack web development,
          I focus on delivering seamless digital experiences that truly engage
          users. <br />
          <br /> With a dedication to minimalist design and user-centric
          solutions, I strive to ensure that every project I work on meets the
          highest standards of creativity and efficiency.
        </div>
        <div className=" mt-10">
          <AboutCards />
        </div>
      </div>
    </div>
  );
};

export default About;
