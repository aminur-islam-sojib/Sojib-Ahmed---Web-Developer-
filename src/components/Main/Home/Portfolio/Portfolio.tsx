import HeaderGenerator from '../HeaderGenerator';

interface DataProps {
  id?: number;
  name?: string;
  avatar?: string;
  webLink?: string;
  category?: string;
}

const portfolioData: DataProps[] = [
  {
    id: 1,
    name: 'Notes With Auth',
    webLink: 'https://my-notes-app-2025.netlify.app/login',
    avatar: '/firebaseAuth.png',
    category: 'Web Design',
  },
  {
    id: 2,
    name: 'Take Tree',
    webLink: 'https://pokemon-app-with-advance-2025.netlify.app/',
    avatar: '/pokemon.png',
    category: 'Frontend Development',
  },
  {
    id: 3,
    name: 'Bed Times App Stories',
    webLink: 'https://bed-time-stories-2025.netlify.app/',
    avatar: '/images/portfolio/project-3.png',
    category: 'UI/UX',
  },
  {
    id: 4,
    name: 'Green Earth',
    webLink: 'https://green-earth-app-2025.netlify.app/',
    avatar: '/green-earth.png',
    category: 'Web Development',
  },
  {
    id: 5,
    name: 'Portfolio Animation',
    webLink: 'https://codepen.io/demo/project-5',
    avatar: '/images/portfolio/project-5.png',
    category: 'Animation',
  },
  {
    id: 6,
    name: 'API Management System',
    webLink: 'https://github.io/demo/project-6',
    avatar: '/images/portfolio/project-6.png',
    category: 'Backend',
  },
  {
    id: 7,
    name: 'SaaS Dashboard',
    webLink: 'https://figma.com/community/file/123456',
    avatar: '/images/portfolio/project-7.png',
    category: 'Figma Design',
  },
  {
    id: 8,
    name: 'Blog CMS Platform',
    webLink: 'https://vercel.app/demo/project-8',
    avatar: '/images/portfolio/project-8.png',
    category: 'Full Stack',
  },
  {
    id: 9,
    name: 'Marketing Landing Page',
    webLink: 'https://example.com/project-9',
    avatar: '/images/portfolio/project-9.png',
    category: 'Landing Page',
  },
  {
    id: 10,
    name: 'Open Source UI Kit',
    webLink: 'https://github.com/example/project-10',
    avatar: '/images/portfolio/project-10.png',
    category: 'Open Source',
  },
];

const Portfolio = () => {
  return (
    <div>
      <HeaderGenerator children={'Portfolio'} />

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {portfolioData.map((data) => (
          <div className="border-1 border-[#383838] rounded-2xl">
            <figure>
              <img
                src={data.avatar}
                alt={data.name}
                className="h-50 w-100 object-cover rounded-t-2xl"
              />
            </figure>
            <div className=" p-3">
              <h1 className=" font-medium">{data.name}</h1>
              <h2 className=" text-sm text-gray-300">{data.category}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
