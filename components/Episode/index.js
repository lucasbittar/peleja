import moment from 'moment';
import Link from 'next/link';
import { Row, Col } from 'antd';
import marked from 'marked';

import Layout from '../../layouts/Main';

import {
  Content,
  FeedTile,
  CategoryTag,
  SidebarWrapper,
  SectionHeader,
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

const ArticlesContent = ({ content }) => {
  return (
    <ArticlesContentWrapper>
      <Header>
        <figure>
          <img src={content.fields.featuredImage.fields.file.url} alt={content.fields.title} />
        </figure>
      </Header>
      <div dangerouslySetInnerHTML={getParsedMarkdown(content.fields.body)} />
    </ArticlesContentWrapper>
  );
};

const Sidebar = ({ articles }) => {
  return (
    <SidebarWrapper>
      <SectionHeader>
        <h1>Mais Vistos</h1>
        <ul>
          { articles.map((a) => (
            <FeedTile key={a.sys.id} small>
              <Link 
                href="/articles/[slug]"
                as={`/articles/${a.fields.slug}`}
              >
                <a> 
                  <figure>
                    {a.fields.category.map((c) => (
                      <CategoryTag textColor={c.fields.textColor} bgColor={c.fields.backgroundColor} key={c.sys.id} type={c.fields.slug}>{c.fields.title}</CategoryTag>
                    ))}
                    <img src={a.fields.featuredImage.fields.file.url} alt={a.fields.title} />
                  </figure>
                  <h1>{a.fields.title}</h1>
                  <p>{a.fields.shortDescription}</p>
                  <span>
                    por <strong>{a.fields.articleAuthor.fields.name}</strong> | <strong>{moment(a.sys.createdAt).format('D [de] MMMM')}</strong>
                  </span>
                </a>
              </Link>
            </FeedTile>
          ))}
        </ul>
      </SectionHeader>
    </SidebarWrapper>
  );
};

const Main = ({ content, articles }) => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <ArticlesContent content={content} />
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
            <h1>{episode.fields.title}</h1>
            <h2>{episode.fields.shortDescription}</h2>
            <div>
              <span>
                <strong>{moment(episode.sys.createdAt).format('D [de] MMMM')}</strong> <em>(Atualizado em {moment(episode.sys.updatedAt).format('D [de] MMMM [às] hh:mm:ss')})</em>
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
