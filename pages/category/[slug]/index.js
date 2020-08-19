import Head from 'next/head';

import api from '../../../api';

import Category from '../../../components/Category';

const CategoryDetails = ({ category, articles, sidebar }) => {
  return (
    <>
      <Category category={category} articles={articles} sidebar={sidebar} />
    </>
  );
};

CategoryDetails.getInitialProps = async ({ query }) => {
  /* Fetch posts with specific category */
  let props = { category: null, articles: [], sidebar: [] };

  try {
    const articles = await api.getEntries({
      content_type: 'article',
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.fields.slug[match]': query.slug,
    });
    props = {
      ...props,
      articles: articles.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  try {
    const category = await api.getEntries({
      content_type: 'category',
      'fields.slug': query.slug
    });
    props = {
      ...props,
      category: category.items[0],
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
      sidebar: articles.items,
    };
  } catch (err) {
    console.log('Something went wrong');
  }

  return props;
};

export default CategoryDetails;
