import HeaderGenerator from '../HeaderGenerator';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import { useState, useEffect } from 'react'; // ✅ ADDED
import { Skeleton } from '@/components/ui/skeleton'; // ✅ ADDED
import { SkeletonCard } from '../../Skeleton/PortfolioSkeleton/SkeletonCard';

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

const Portfolio = () => {
  // ✅ ADDED: Loading state
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>(
    {}
  );

  // ✅ ADDED: Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ ADDED: Initialize image loading state
  useEffect(() => {
    if (!loading) {
      const initialLoadingState = portfolioData.reduce(
        (acc, data) => {
          if (data.id) acc[data.id] = true;
          return acc;
        },
        {} as { [key: number]: boolean }
      );
      setImageLoading(initialLoadingState);
    }
  }, [loading]);

  // ✅ ADDED: Handle image load
  const handleImageLoad = (id: number) => {
    setImageLoading((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div>
      <HeaderGenerator children={'Portfolio'} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
      >
        {/* ✅ MODIFIED: Added conditional rendering for loading state */}
        {loading
          ? // Show skeletons while initially loading
            Array.from({ length: 7 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : // Show portfolio cards with individual image loading states
            portfolioData.map((data) => (
              <>
                <div
                  key={data.id}
                  className="border-1 border-[#383838] rounded-2xl"
                >
                  <div className="relative group w-auto h-40 rounded-t-xl overflow-hidden shadow-lg">
                    {/* ✅ ADDED: Show skeleton while image is loading */}
                    {imageLoading[data.id!] && (
                      <Skeleton className="absolute inset-0 w-full h-full" />
                    )}

                    <img
                      src={data.avatar}
                      alt={data.name}
                      onLoad={() => handleImageLoad(data.id!)}
                      className={`w-full h-full object-cover transition-all group-hover:scale-110 duration-300 group-hover:brightness-50 ${
                        imageLoading[data.id!] ? 'opacity-0' : 'opacity-100'
                      }`}
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
                  <div className="p-3">
                    <h1 className="font-medium">{data.name}</h1>
                    <h2 className="text-sm text-gray-300">{data.category}</h2>
                  </div>
                </div>
              </>
            ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
