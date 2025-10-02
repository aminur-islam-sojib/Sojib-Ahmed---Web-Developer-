import HeaderGenerator from '../Main/Home/HeaderGenerator';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

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
    avatar: '/bed-time-story.png',
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
    name: 'Book Manager',
    webLink: 'https://book-maneger.netlify.app/',
    avatar: '/book-manager.png',
    category: 'Animation',
  },
  {
    id: 6,
    name: 'CS Service',
    webLink: 'https://cs-service-002.netlify.app/',
    avatar: '/cs-service.png',
    category: 'Web Develop',
  },
  {
    id: 7,
    name: 'Tick Tack Toe',
    webLink: 'https://game-s-ahmed.netlify.app/',
    avatar: '/tick-tac-toe.png',
    category: 'Game',
  },
];

const TestPortfolio = () => {
  return (
    <div>
      <HeaderGenerator children={'Portfolio'} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
      >
        {portfolioData.map((data) => (
          <div key={data.id} className="border-1 border-[#383838] rounded-2xl">
            <div className="relative group w-auto h-40 rounded-t-xl overflow-hidden shadow-lg">
              <img
                src={data.avatar}
                alt={data.name}
                className="w-full h-full object-cover transition-all group-hover:scale-110 duration-300 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  target="_blank"
                  href={data.webLink}
                  className="p-3 bg-[#383838] shadow-md transition rounded-xl"
                >
                  <Eye color="#FFDB70" />
                </a>
              </div>
            </div>
            <div className=" p-3">
              <h1 className=" font-medium">{data.name}</h1>
              <h2 className=" text-sm text-gray-300">{data.category}</h2>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestPortfolio;
