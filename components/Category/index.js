import moment from 'moment';
import { Row, Col } from 'antd';

import Layout from '../../layouts/Main';

import FeedTile from '../FeedTile';
import Sidebar from '../Sidebar';

import {
  ArticlesFeedWrapper,
  Content,
  SectionHeader,
  MainWrapper,
  Wrapper,
} from '../Layout';

import { Header } from '../Article/styles';

moment.locale('pt-BR');

const ArticlesFeed = ({ category, articles }) => {
  return (
    <ArticlesFeedWrapper>
      <SectionHeader>
        <h1>{articles.length} Publicações em {category.fields.title}</h1>
      </SectionHeader>
      <ul>
        { articles.map((a) => (
          <FeedTile data={a} key={a.sys.id} />
        ))}
      </ul>
    </ArticlesFeedWrapper>
  )
};

const Main = ({ category, articles, sidebar }) => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <ArticlesFeed category={category} articles={articles} />
        </Col>
        <Col lg={8}>
          <Sidebar articles={sidebar} />
        </Col>
      </Row>
    </MainWrapper>
  )
}

const Category = ({ category, articles, sidebar }) => {
  console.log('CATEGORY', category);
  console.log('ARTICLES', articles);
  console.log('SIDEBAR', sidebar);
  return (
    <Layout title={`${category.fields.title} | PELEJA`}>
      <Wrapper>
        <Content>
          <Header>
            <h1>{category.fields.title}</h1>
          </Header>
          <Main category={category} articles={articles} sidebar={sidebar} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Category;
