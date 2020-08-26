import Shows from '../../components/Shows';

import api from '../../api';
import { SIDEBAR_LIMIT } from '../../api/constants';

const ShowsList = ({ episodes, articles, total, page }) => {
  return (
    <Shows
      total={total}
      page={page}
      articles={articles}
      episodes={episodes}
    />
  );
};

ShowsList.getInitialProps = async ({ query }) => {
  let props = { articles: [], episodes: [], total: null, page: query.page };
  console.log('QUERY', query);

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

export default ShowsList;
