import Head from 'next/head';
import Home from '../components/Home';

import api from '../api';
import { SIDEBAR_LIMIT, SITE_URL, SITE_NAME, SITE_IMAGE, SITE_DESCRIPTION } from '../api/constants';

const Index = ({ articles, featured, highlight, episodes, banners }) => {
  return (
    <>
      <Head>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:site" content={SITE_NAME} />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_IMAGE} />
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <Home
        articles={articles}
        featured={featured}
        highlight={highlight}
        episodes={episodes}
        banners={banners}
      />
    </>
  );
};

Index.getInitialProps = async () => {
  let props = { articles: [], featured: [], highlight: [], episodes: [], shows: [], showsInfo: null };

  try {
    const articles = await api.getEntries({
      content_type: 'article',
      'fields.featuredArticle': false,
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.fields.slug[ne]': 'assista',
    });
    props = {
      ...props,
      articles: articles.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const articles = await api.getEntries({
      content_type: 'article',
      'fields.featuredArticle': true,
      'fields.highlightedArticle': false,
      limit: 3
    });
    props = {
      ...props,
      featured: articles.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const articles = await api.getEntries({
      content_type: 'article',
      'fields.highlightedArticle': true,
      limit: 1
    });
    props = {
      ...props,
      highlight: articles.items[0],
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const showsInfo = await api.getEntries({
      content_type: 'showsHome',
      limit: 1
    });
    props = {
      ...props,
      showsInfo: showsInfo.items[0],
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const episodes = await api.getEntries({
      content_type: 'episode',
      'fields.show.sys.contentType.sys.id': 'show',
      'fields.show.fields.slug[ne]': 'bandeja',
      limit: SIDEBAR_LIMIT
    });
    props = {
      ...props,
      episodes: episodes.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const shows = await api.getEntries({
      content_type: 'show',
      'fields.slug[ne]': 'bandeja'
    });
    props = {
      ...props,
      shows: shows.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const banners = await api.getEntries({
      content_type: 'homeBanners'
    });
    props = {
      ...props,
      banners: banners.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  return props;
};

export default Index;
