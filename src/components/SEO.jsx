import { useEffect } from 'react';

/**
 * SEO Component - Dynamically update meta tags
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} keywords - SEO keywords
 * @param {string} image - OG image URL
 * @param {string} url - Canonical URL
 */
export default function SEO({ 
  title = "Sabbagh Tex - Premium Textile & Fabric Collections Since 1990 | Aleppo, Syria",
  description = "Discover premium textiles and fabrics from Sabbagh Tex in Aleppo, Syria. Quality craftsmanship since 1990 with winter, summer, premium, and decorative collections. Serving Syria and international markets.",
  keywords = "textiles, fabrics, premium fabrics, Aleppo textiles, Syrian fabrics, winter collection, summer collection, Middle Eastern textiles",
  image = "https://sabbaghtex.com/og-image.jpg",
  url = "https://sabbaghtex.com/"
}) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = {
      'description': description,
      'keywords': keywords,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };

    Object.entries(metaTags).forEach(([key, value]) => {
      // Handle Open Graph and Twitter meta tags
      const attribute = key.startsWith('og:') || key.startsWith('twitter:') 
        ? 'property' 
        : 'name';
      
      let metaTag = document.querySelector(`meta[${attribute}="${key}"]`);
      
      if (metaTag) {
        metaTag.setAttribute('content', value);
      } else {
        // Create meta tag if it doesn't exist
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attribute, key);
        metaTag.setAttribute('content', value);
        document.head.appendChild(metaTag);
      }
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }
  }, [title, description, keywords, image, url]);

  // This component doesn't render anything
  return null;
}

/**
 * Helper function to generate structured data for products
 */
export const generateProductSchema = (product) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Sabbagh Tex"
    },
    "offers": {
      "@type": "Offer",
      "url": product.url,
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Sabbagh Tex"
      }
    }
  };
};

/**
 * Helper function to generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

