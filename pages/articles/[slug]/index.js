import Head from 'next/head';
import { useRouter } from 'next/router';

import api from '../../../api';
import { SIDEBAR_LIMIT, SITE_URL, SITE_NAME } from '../../../api/constants';

import Article from '../../../components/Article';

const ArticleDetails = ({ article, articles }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${article.fields.title} | ${SITE_NAME}`} />
        <meta property="og:description" content={article.fields.shortDescription} />
        <meta property="og:image" content={article.fields.featuredImage.fields.file.url} />
        <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
        <meta name="twitter:site" content={SITE_NAME} />
        <meta name="twitter:title" content={`${article.fields.title} | ${SITE_NAME}`} />
        <meta name="twitter:description" content={article.fields.shortDescription} />
        <meta name="twitter:image" content={article.fields.featuredImage.fields.file.url} />
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <Article article={article} articles={articles} />
    </>
  );
};

ArticleDetails.getInitialProps = async ({ query }) => {
  /* Fetch article info */
  let props = { article: null, articles: [] };

  try {
    const articles = await api.getEntries({
      content_type: 'article',
      'fields.slug': query.slug
    });
    props = {
      ...props,
      article: articles.items[0],
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

export default ArticleDetails;
