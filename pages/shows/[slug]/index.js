import Head from 'next/head';
import { useRouter } from 'next/router';

import api from '../../../api';
import { SIDEBAR_LIMIT, SITE_URL, SITE_NAME } from '../../../api/constants';

import Show from '../../../components/Show';

const ShowDetails = ({ show, episodes, articles, page, total }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${show.fields.title} | ${SITE_NAME}`} />
        <meta property="og:description" content={show.fields.showDescription} />
        <meta property="og:image" content={show.fields.showImage.fields.file.url} />
        <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Show show={show} articles={articles} episodes={episodes} page={page} total={total} />
    </>
  );
};

ShowDetails.getInitialProps = async ({ query }) => {
  /* Fetch article info */
  let props = { show: null, episodes: [], articles: [], total: null, page: query.page };

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
      limit: SIDEBAR_LIMIT
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
      order: '-fields.episodeNumber',
      limit: 12,
      skip: query.page ? query.page * 12 : 0
    });
    props = {
      ...props,
      total: episodes.total,
      episodes: episodes.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  return props;
};

export default ShowDetails;
