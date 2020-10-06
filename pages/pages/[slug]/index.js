import Head from 'next/head';
import { useRouter } from 'next/router';

import api from '../../../api';
import { SIDEBAR_LIMIT, SITE_URL, SITE_NAME, SITE_IMAGE } from '../../../api/constants';

import Page from '../../../components/Page';

const PageDetails = ({ page, articles }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${page.fields.title} | ${SITE_NAME}`} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
        <meta name="twitter:site" content={SITE_NAME} />
        <meta name="twitter:title" content={`${page.fields.title} | ${SITE_NAME}`} />
        <meta name="twitter:image" content={SITE_IMAGE} />
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <Page page={page} articles={articles} />
    </>
  );
};

PageDetails.getInitialProps = async ({ query }) => {
  /* Fetch article info */
  let props = { page: null, articles: [] };

  try {
    const pages = await api.getEntries({
      content_type: 'page',
      'fields.slug': query.slug
    });
    props = {
      ...props,
      page: pages.items[0],
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

export default PageDetails;
