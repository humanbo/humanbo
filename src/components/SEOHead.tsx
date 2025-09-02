import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Humanbo - AI That Feels Human",
  description = "Intelligence Reimagined. Crafting AI experiences that enhance human potential with sophistication, empathy, and purpose.",
  keywords = "AI, artificial intelligence, human-centered AI, machine learning, chatbot, automation, productivity, technology",
  image = "https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png",
  url = "https://humanbo.com",
  type = "website",
  author = "Humanbo Team",
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes('Humanbo') ? title : `${title} | Humanbo`;
  const fullUrl = url.startsWith('http') ? url : `https://humanbo.com${url}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Humanbo" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@humanbo" />
      <meta name="twitter:creator" content="@humanbo" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3A86FF" />
      <meta name="msapplication-TileColor" content="#3A86FF" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Humanbo" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png" />
      <link rel="apple-touch-icon" href="https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Humanbo",
          "description": description,
          "url": "https://humanbo.com",
          "logo": image,
          "sameAs": [
            "https://twitter.com/humanbo",
            "https://linkedin.com/company/humanbo",
            "https://github.com/humanbo"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-HUMANBO",
            "contactType": "customer service",
            "email": "hello@humanbo.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
