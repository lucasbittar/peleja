import Shows from '../../components/Shows';

import api from '../../api';

const ShowsList = ({ episodes, articles }) => {
  return (
    <Shows
      articles={articles}
      episodes={episodes}
    />
  );
};

ShowsList.getInitialProps = async () => {
  let props = { articles: [], episodes: [] };

  try {
    const articles = await api.getEntries({
      content_type: 'article',
      limit: 10
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
      limit: 20
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

export default ShowsList;
