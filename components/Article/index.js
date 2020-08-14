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

import { Header, ArticlesContentWrapper } from './styles';

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
          <figcaption>{content.fields.featuredImage.fields.description}</figcaption>
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
                    <CategoryTag textColor={a.fields.category.fields.textColor} bgColor={a.fields.category.fields.backgroundColor}>{a.fields.category.fields.title}</CategoryTag>
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

const Article = ({ article, articles }) => {
  console.log('ARTICLE', article);
  console.log('ARTICLES', articles);
  return (
    <Layout title={`${article.fields.title} | PELEJA`}>
      <Wrapper>
        <Content>
          <Header>
            <ul>
              <CategoryTag textColor={article.fields.category.fields.textColor} bgColor={article.fields.category.fields.backgroundColor}>{article.fields.category.fields.title}</CategoryTag>
            </ul>
            <h1>{article.fields.title}</h1>
            <h2>{article.fields.shortDescription}</h2>
            <div>
              <span>
                por <strong>{article.fields.articleAuthor.fields.name}</strong> | <strong>{moment(article.sys.createdAt).format('D [de] MMMM')}</strong> <em>(Atualizado em {moment(article.sys.updatedAt).format('D [de] MMMM [às] hh:mm:ss')})</em>
              </span>
            </div>
          </Header>
          <Main content={article} articles={articles} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Article;
