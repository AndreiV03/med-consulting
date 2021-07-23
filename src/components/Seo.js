import React from 'react'
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export default function Seo({ title, description, keywords }) {
  return (
    <StaticQuery
      query={metadataQuery}
      render={data => {
        const metaTitle = (title + " | MED Consulting") || data.site.siteMetadata.title;
        const metaDescription = description || data.site.siteMetadata.description;
        const metaKeywords = keywords || data.site.siteMetadata.keywords;

        return (
          <Helmet>
            <html lang="en" />
            <title>{metaTitle}</title>

            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="theme-color" content="#ffffff" />
            <meta name="canonical" content="" />
            <meta name="robots" content="noindex, nofollow" />
            <meta name="googlebot" content="noindex, nofollow" />

            <link rel="manifest" href="manifest.json" />
            <link rel="icon" href="favicon.ico" />
          </Helmet>
        )
      }}
    />
  );
}

const metadataQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;