import Link from 'next/link';
import moment from 'moment';
import { Row, Col } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import Layout from '../../layouts/Main';

import Sidebar from '../Sidebar';

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

const EpisodesFeed = ({ episodes }) => {
  return (
    <ArticlesFeedWrapper episodes>
      <SectionHeader>
        <h1>{episodes.length} Episódios</h1>
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
                  <PlayCircleOutlined />
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
    </ArticlesFeedWrapper>
  )
};

const Main = ({ sidebar, episodes }) => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <EpisodesFeed episodes={episodes} />
        </Col>
        <Col lg={8}>
          <Sidebar articles={sidebar} />
        </Col>
      </Row>
    </MainWrapper>
  )
}

const Shows = ({ articles, episodes }) => {
  console.log('ARTICLES', articles);
  console.log('EPISODES', episodes);
  return (
    <Layout title={`Assista | PELEJA`}>
      <Wrapper>
        <Content>
          <Header>
            <h1>Assista</h1>
          </Header>
          <Main episodes={episodes} sidebar={articles} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Shows;

