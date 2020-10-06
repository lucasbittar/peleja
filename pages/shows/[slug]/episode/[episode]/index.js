import Head from 'next/head';
import { useRouter } from 'next/router';

import api from '../../../../../api';
import { SIDEBAR_LIMIT, SITE_URL, SITE_NAME } from '../../../../../api/constants';

import Episode from '../../../../../components/Episode';

const EpisodeDetails = ({ episode, articles }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${episode.fields.title} | ${episode.fields.show.fields.title}`} />
        <meta property="og:description" content={episode.fields.shortDescription} />
        <meta property="og:image" content={`https:${episode.fields.featuredImage.fields.file.url}`} />
        <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
        <meta name="twitter:site" content={SITE_NAME} />
        <meta name="twitter:title" content={`${episode.fields.title} | ${SITE_NAME}`} />
        <meta name="twitter:description" content={episode.fields.shortDescription} />
        <meta name="twitter:image" content={`https:${episode.fields.featuredImage.fields.file.url}`} />
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <Episode episode={episode} articles={articles} />
    </>
  );
};

EpisodeDetails.getInitialProps = async ({ query }) => {
  /* Fetch episode info */
  let props = { episode: null, articles: [] };

  try {
    const episodes = await api.getEntries({
      content_type: 'episode',
      'fields.slug': query.episode
    });
    props = {
      ...props,
      episode: episodes.items[0],
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const articles = await api.getEntries({
      content_type: 'article',
      limit: SIDEBAR_LIMIT
    });
    props = {
      ...props,
      articles: articles.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  return props;
};

export default EpisodeDetails;
