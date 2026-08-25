import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  schema?: Record<string, unknown>;
  noIndex?: boolean;
}

const DEFAULT_SITE_URL = 'https://sikar.com.et';
const DEFAULT_TITLE = 'Sikar Yosef | Software Engineer';
const DEFAULT_DESCRIPTION = 'Sikar Yosef - Software Engineer specializing in frontend (React, Next.js) and mobile (Flutter) development. Jimma University graduate building responsive, AI-powered web and mobile experiences.';
const DEFAULT_OG_IMAGE = 'https://sikar.com.et/logo.png';
const DEFAULT_OG_TYPE = 'website';

const DEFAULT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sikar Yosef',
  url: DEFAULT_SITE_URL,
  jobTitle: 'Software Engineer',
  description: DEFAULT_DESCRIPTION,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Jimma University',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'Flutter',
    'TypeScript',
    'JavaScript',
    'Full Stack Development',
    'Mobile Development',
    'Web Development',
  ],
  sameAs: [
    // Add social media links here when available
    // 'https://linkedin.com/in/sikaryosef',
    // 'https://github.com/sikaryosef',
    // 'https://twitter.com/sikaryosef',
  ],
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sikar Yosef Portfolio',
  url: DEFAULT_SITE_URL,
  description: DEFAULT_DESCRIPTION,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${DEFAULT_SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = DEFAULT_OG_TYPE,
  schema,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title.includes('Sikar Yosef') ? title : `${title} | Sikar Yosef`;
  const canonicalUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `${DEFAULT_SITE_URL}${canonical}`)
    : DEFAULT_SITE_URL;
  
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${DEFAULT_SITE_URL}${ogImage}`;

  // Combine default schemas with custom schema if provided
  const combinedSchema = schema
    ? { ...DEFAULT_SCHEMA, ...schema }
    : [DEFAULT_SCHEMA, WEBSITE_SCHEMA];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Sikar Yosef" />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow" />}
      
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="Sikar Yosef Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
}