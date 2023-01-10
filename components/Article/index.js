import moment from 'moment';
import Link from 'next/link';
import { Row, Col } from 'antd';
import marked from 'marked';
import { DiscussionEmbed } from 'disqus-react';

import Sidebar from '../Sidebar';

import Layout from '../../layouts/Main';

import {
  Content,
  CategoryTag,
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

  if (typeof window !== "undefined") {
    // Client-side-only code
    content = {
      ...content,
      url: window.location.href
    }
  }

  return (
    <ArticlesContentWrapper>
      <Header>
        <figure>
          <img src={content.fields.featuredImage.fields.file.url} alt={content.fields.title} />
          <figcaption>{content.fields.featuredImage.fields.description}</figcaption>
        </figure>
      </Header>
      <div dangerouslySetInnerHTML={getParsedMarkdown(content.fields.body)} />
      <DiscussionEmbed
          shortname="peleja"
          config={
              {
                  url: content.url,
                  identifier: content.sys.id,
                  title: content.fields.title,
                  language: 'pt_BR'
              }
          }
      />
    </ArticlesContentWrapper>
  );
};

const Main = ({ content, articles }) => {
  return (
    <MainWrapper>
      <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
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
  return (
    <Layout title={`${article.fields.title} | PELEJA`}>
      <Wrapper>
        <Content>
          <Header>
            <ul>
              <Link
                href="/category/[slug]"
                as={`/category/${article.fields.category.fields.slug}`}
              >
                <a>
                  <CategoryTag textColor={article.fields.category.fields.textColor} bgColor={article.fields.category.fields.backgroundColor}>{article.fields.category.fields.title}</CategoryTag>
                </a>
              </Link>
            </ul>
            <h1>{article.fields.title}</h1>
            <h2>{article.fields.shortDescription}</h2>
            <div>
              <span>
                por <strong>{article.fields.articleAuthor.fields.name}</strong> | <strong>{moment(article.sys.createdAt).format('D [de] MMMM')}</strong>
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
