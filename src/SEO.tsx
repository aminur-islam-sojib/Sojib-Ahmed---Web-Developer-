import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  socialLinks?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Sojib Ahmed | Web Developer',
  description = "Hi, I'm Sojib Ahmed — Frontend Web Developer from Bangladesh specializing in React, JavaScript, and Tailwind CSS.",
  image = 'https://sojib-ahmed.netlify.app/sojib-ahmed.dev.webp',
  url = 'https://sojib-ahmed.netlify.app',
  keywords = 'Sojib Ahmed, web developer, frontend developer, React, Tailwind, portfolio',
  socialLinks = [
    'https://facebook.com/sojibahmed.dev',
    'https://instagram.com/sojibahmed.dev',
    'https://github.com/aminur-islam-sojib',
    'https://linkedin.com/in/ahmedsojib',
  ],
}) => {
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sojib Ahmed" />

      {/* Google Search Console Verification */}
      <meta
        name="google-site-verification"
        content="5F1Gptr8XpjMHvoEdKrItuM_EP73uKTS9SHyxkocHNk"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Sojib Ahmed',
          alternateName: 'sojib-ahmed',
          url: url,
          jobTitle: 'Frontend Web Developer',
          image: image,
          description: description,
          sameAs: socialLinks,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
