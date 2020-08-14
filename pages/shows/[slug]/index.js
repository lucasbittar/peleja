import Head from 'next/head';

import api from '../../../api';

import Show from '../../../components/Show';

const ShowDetails = ({ show, episodes, articles }) => {
  return (
    <>
      <Head>
        <meta property="og:image" content={show.fields.showImage.fields.file.url} />
      </Head>
      <Show show={show} articles={articles} episodes={episodes} />
    </>
  );
};

ShowDetails.getInitialProps = async ({ query }) => {
  /* Fetch article info */
  let props = { show: null, episodes: [], articles: [] };

  try {
    const shows = await api.getEntries({
      content_type: 'show',
      'fields.slug': query.slug
    });
    props = {
      ...props,
      show: shows.items[0],
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const articles = await api.getEntries({
      content_type: 'article',
    });
    props = {
      ...props,
      articles: articles.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const episodes = await api.getEntries({
      content_type: 'episode',
      'fields.show.sys.contentType.sys.id': 'show',
      'fields.show.fields.slug[match]': query.slug,
      order: '-fields.episodeNumber'
    });
    props = {
      ...props,
      episodes: episodes.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  return props;
};

export default ShowDetails;
