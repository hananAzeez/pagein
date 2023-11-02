import Head from 'next/head';

const Meta = ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    {/* Add more meta tags as needed */}
  </Head>
);

export default Meta;