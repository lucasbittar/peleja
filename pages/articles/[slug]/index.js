import Head from 'next/head';

import api from '../../../api';

import Article from '../../../components/Article';

const ArticleDetails = ({ article, articles }) => {
  return (
    <>
      <Head>
        <meta property="og:image" content={article.fields.featuredImage.fields.file.url} />
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
