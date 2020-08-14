import Home from '../components/Home';

import api from '../api';

const Index = ({ articles, featured, highlight, sidebar, shows }) => {
  return (
    <Home
      articles={articles}
      featured={featured}
      highlight={highlight}
      sidebar={sidebar}
      shows={shows}
    />
  );
};

Index.getInitialProps = async () => {
  let props = { articles: [], featured: [], highlight: [], sidebar: [], shows: [] };

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
    const articles = await api.getEntries({
      content_type: 'article',
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.fields.slug[match]': 'assista',
    });
    props = {
      ...props,
      sidebar: articles.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const shows = await api.getEntries({
      content_type: 'show'
    });
    props = {
      ...props,
      shows: shows.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  return props;
};

export default Index;
