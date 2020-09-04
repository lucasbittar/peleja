import Link from 'next/link';
import moment from 'moment';
import { Row, Col } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import Layout from '../../layouts/Main';

import Sidebar from '../Sidebar';
import Pagination from '../Pagination';

import {
  ArticlesFeedWrapper,
  CategoryTag,
  Content,
  EpisodeTile,
  EpisodesList,
  MainWrapper,
  SectionHeader,
  Wrapper,
} from '../Layout';

import { Header } from '../Article/styles';

moment.locale('pt-BR');

const EpisodesFeed = ({ episodes, page, total }) => {
  return (
    <ArticlesFeedWrapper episodes>
      <SectionHeader>
        <h1>{total} Episódios</h1>
      </SectionHeader>
      <EpisodesList>
        { episodes.map((e) => (
          <EpisodeTile key={e.sys.id} showColor={e.fields.show.fields.bgColor}>
            <Link
              href="/shows/[slug]/episode/[episode]"
              as={`/shows/${e.fields.show.fields.slug}/episode/${e.fields.slug}`}
            >
              <a>
                <figure>
                  <img src={e.fields.featuredImage.fields.file.url} alt={e.fields.title} />
                  <CategoryTag textColor={e.fields.show.fields.textColor} bgColor={e.fields.show.fields.bgColor}>
                    {e.fields.show.fields.title}
                  </CategoryTag>
                </figure>
                <h1>#{e.fields.episodeNumber} - {e.fields.title}</h1>
                <p>{e.fields.shortDescription}</p>
              </a>
            </Link>
          </EpisodeTile>
        ))}
      </EpisodesList>
      <Pagination page={page} total={total} />
    </ArticlesFeedWrapper>
  )
};

const Main = ({ sidebar, episodes, page, total }) => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <EpisodesFeed episodes={episodes} page={page} total={total} />
        </Col>
        <Col lg={8}>
          <Sidebar articles={sidebar} />
        </Col>
      </Row>
    </MainWrapper>
  )
}

const Shows = ({ articles, episodes, total, page }) => {
  console.log('ARTICLES', articles);
  console.log('EPISODES', episodes);
  console.log('PAGE', total, page);
  return (
    <Layout title={`Assista | PELEJA`}>
      <Wrapper>
        <Content>
          <Header>
            <h1>Assista</h1>
          </Header>
          <Main episodes={episodes} sidebar={articles} page={page} total={total} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Shows;

