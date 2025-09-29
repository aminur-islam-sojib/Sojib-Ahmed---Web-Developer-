import { Linkedin, Facebook, X, Instagram } from 'lucide-react';

interface socialLinksType {
  id: number;
  title: string;
  username: string;
  url: string;
  icon: 'Linkedin' | 'Facebook' | 'X' | 'Instagram';
}

const socialLinks: socialLinksType[] = [
  {
    id: 1,
    title: 'LinkedIn',
    username: 'Sheikh A. Sojib',
    url: 'https://www.linkedin.com/in/sheikh-a-sojib-829299367/',
    icon: 'Linkedin',
  },
  {
    id: 2,
    title: 'Facebook',
    username: 'Sheikh Sojib',
    url: 'https://www.facebook.com/profile.php?id=61575037692524',
    icon: 'Facebook',
  },
  {
    id: 3,
    title: 'X (Twitter)',
    username: 'AminurSojib',
    url: 'https://x.com/AminurSojib',
    icon: 'X',
  },
  {
    id: 4,
    title: 'Instagram',
    username: 'sheikh_sadiq_bin_solaiman',
    url: 'https://www.instagram.com/sheikh_sadiq_bin_solaiman',
    icon: 'Instagram',
  },
];
const SocialMedia = () => {
  const icons = { Linkedin, Facebook, X, Instagram };

  return (
    <div className=" flex mt-10 justify-center gap-2">
      {socialLinks.map(({ id, url, icon }) => {
        const Icon = icons[icon];

        return (
          <div key={id} className="bgGradient p-2 rounded-md">
            <a href={url} target="_blank">
              {' '}
              <Icon color="#FFDB70" size={16} />{' '}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
