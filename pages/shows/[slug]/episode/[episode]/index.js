import Head from 'next/head';

import api from '../../../../../api';
import { SIDEBAR_LIMIT } from '../../../../../api/constants';

import Episode from '../../../../../components/Episode';

const EpisodeDetails = ({ episode, articles }) => {
  return (
    <>
      <Head>
        <meta property="og:image" content={episode.fields.featuredImage.fields.file.url} />
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
