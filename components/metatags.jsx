import Head from 'next/head';

const Meta = ({ title, description, keywords, ogTitle, ogDescription, ogImage, ogURL, twitterCard, twitterCreator, canonicalURL }) => (
  <Head>
    <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogURL} />
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:creator" content={twitterCreator} />
        <link rel="canonical" href={canonicalURL} />
  </Head>
);

export default Meta;
