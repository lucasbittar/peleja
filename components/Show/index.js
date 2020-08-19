import moment from 'moment';
import Link from 'next/link';
import { Row, Col } from 'antd';

import Sidebar from '../Sidebar';

import Layout from '../../layouts/Main';

import {
  Content,
  EpisodeTile,
  EpisodesList,
  CategoryTag,
  MainWrapper,
  Wrapper,
} from '../Layout';

import { Header, ArticlesContentWrapper } from '../Article/styles';

moment.locale('pt-BR');

const ArticlesContent = ({ content, episodes }) => {
  return (
    <ArticlesContentWrapper>
      <Header>
        <figure>
          <img src={content.fields.showImage.fields.file.url} alt={content.fields.title} />
        </figure>
      </Header>
      <p>{content.fields.showDescription}</p>
      <hr />
      <h4>Episódios</h4>
      <EpisodesList>
        {episodes.length !== 0 ? (
          <>
            { episodes.map((e) => (
              <EpisodeTile key={e.sys.id} showColor={e.fields.show.fields.bgColor}>
                <Link 
                  href="/shows/[slug]/episode/[episode]"
                  as={`/shows/${e.fields.show.fields.slug}/episode/${e.fields.slug}`}
                >
                  <a> 
                    <figure>
                      <CategoryTag textColor={e.fields.show.fields.textColor} bgColor={e.fields.show.fields.bgColor}>#{e.fields.episodeNumber}</CategoryTag>
                      <img src={e.fields.featuredImage.fields.file.url} alt={e.fields.title} />
                    </figure>
                    <h1>{e.fields.title}</h1>
                    <p>{e.fields.shortDescription}</p>
                  </a>
                </Link>
              </EpisodeTile>
            ))}
          </>
        ) : (
          <small>Nenhum episódio publicado ainda.</small>
        )}
      </EpisodesList>
    </ArticlesContentWrapper>
  );
};

const Main = ({ content, articles, episodes }) => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <ArticlesContent content={content} episodes={episodes} />
        </Col>
        <Col lg={8}>
          <Sidebar articles={articles} />
        </Col>
      </Row>
    </MainWrapper>
  )
}

const Show = ({ show, episodes, articles }) => {
  console.log('EPI', episodes);
  return (
    <Layout title={`${show.fields.title} | PELEJA`}>
      <Wrapper>
        <Content>
          <Header>
            <h1>{show.fields.title}</h1>
            <h2>{show.fields.shortDescription}</h2>
          </Header>
          <Main content={show} articles={articles} episodes={episodes} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Show;
