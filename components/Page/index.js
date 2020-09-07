import moment from 'moment';
import Link from 'next/link';
import { Row, Col } from 'antd';
import marked from 'marked';

import Sidebar from '../Sidebar';

import Layout from '../../layouts/Main';

import {
  Content,
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
    <ArticlesContentWrapper>
      <Header />
      <div dangerouslySetInnerHTML={getParsedMarkdown(content.fields.body)} />
    </ArticlesContentWrapper>
  );
};

const Main = ({ content, articles }) => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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

const Page = ({ page, articles }) => {
  return (
    <Layout title={`${page.fields.title} | PELEJA`}>
      <Wrapper>
        <Content>
          <Header>
            <h1>{page.fields.title}</h1>
          </Header>
          <Main content={page} articles={articles} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Page;
