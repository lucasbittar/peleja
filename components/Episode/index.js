import moment from 'moment';
import Link from 'next/link';
import { Row, Col } from 'antd';
import marked from 'marked';

import Layout from '../../layouts/Main';

import Sidebar from '../Sidebar';

import {
  Content,
  CategoryTag,
  MainWrapper,
  Wrapper,
} from '../Layout';

import { Header, ArticlesContentWrapper } from '../Article/styles';

moment.locale('pt-BR');

const getParsedMarkdown = (content) => {
  return {
    __html: marked(content, {sanatize: true})
  }
}

const PageContent = ({ content }) => {
  return (
    <ArticlesContentWrapper episode>
      {/*
      <Header>
        <figure>
          <img src={content.fields.featuredImage.fields.file.url} alt={content.fields.title} />
        </figure>
      </Header>
      */}
      <div dangerouslySetInnerHTML={getParsedMarkdown(content.fields.body)} />
    </ArticlesContentWrapper>
  );
};

const Main = ({ content, articles }) => {
  return (
    <MainWrapper>
      <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <PageContent content={content} />
        </Col>
        <Col lg={8}>
          <Sidebar articles={articles} />
        </Col>
      </Row>
    </MainWrapper>
  )
}

const Episode = ({ episode, articles }) => {
  return (
    <Layout title={`${episode.fields.title} | PELEJA`}>
      <Wrapper>
        <Content>
          <Header>
            <CategoryTag textColor={episode.fields.show.fields.textColor} bgColor={episode.fields.show.fields.bgColor}>
              <Link
                href="/shows/[slug]"
                as={`/shows/${episode.fields.show.fields.slug}`}
              >
                <a>
                  {episode.fields.show.fields.title}
                </a>
              </Link>
            </CategoryTag>
            <h1>#{episode.fields.episodeNumber} - {episode.fields.title}</h1>
            <h2>{episode.fields.shortDescription}</h2>
            <div>
              <span>
                <strong>{moment(episode.sys.createdAt).format('D [de] MMMM')}</strong>
              </span>
            </div>
          </Header>
          <Main content={episode} articles={articles} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Episode;
