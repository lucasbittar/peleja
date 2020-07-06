import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import {
  Wrapper,
  Content,
  Hightlight,
  HightlightsWrapper,
  ArticlesFeedWrapper,
  SidebarWrapper,
  MainWrapper,
} from '~/components/Layout';

import ArticleImg from '~/assets/article-highlight.jpg';
import ArticleImg2 from '~/assets/article-img-2.jpg';
import ArticleImg3 from '~/assets/article-img-3.jpg';
import ArticleImg4 from '~/assets/article-img-4.jpg';

const HightlightArticles = () => {
  return (
    <HightlightsWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <Hightlight>
            <Link to="article/1">
              <figure>
                <img src={ArticleImg} alt="Article title" />
              </figure>
              <div>
                <div>
                  <small>Futebol</small>
                </div>
                <h1>
                  <span>
                    Lembra quando Felipe Melo era pit bull de verdade?
                  </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis itaque delectus assumenda recusandae cupiditate
                  culpa reprehenderit, suscipit tenetur non animi veniam quaerat
                  laudantium quos sint, earum, porro eligendi! Tenetur,
                  doloribus.
                </p>
                <div>
                  <span>
                    por <strong>Murilo Megale</strong>
                  </span>
                </div>
              </div>
            </Link>
          </Hightlight>
        </Col>
        <Col lg={8}>
          <Hightlight secondary>
            <Link to="article/2">
              <figure>
                <small>Futebol</small>
                <img
                  src={ArticleImg2}
                  alt="Esse é o real motivo de tanto nordestino torcer pra Flamengo e Corinthians"
                />
              </figure>
              <h1>
                Esse é o real motivo de tanto nordestino torcer pra Flamengo e
                Corinthians
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                voluptatum dolorum et eos maiores nemo itaque quis debitis
                tenetur eum, sint similique obcaecati.
              </p>
              <span>
                por <strong>Murilo Megale</strong>
              </span>
            </Link>
          </Hightlight>
          <Hightlight secondary small>
            <Link to="article/2">
              <figure>
                <small>Futebol</small>
                <img
                  src={ArticleImg3}
                  alt="Por que essa mão na bola antes da Copa envolveu até dinheiro"
                />
              </figure>
              <h1>
                Por que essa mão na bola antes da Copa envolveu até dinheiro
              </h1>
              <span>
                por <strong>Murilo Megale</strong>
              </span>
            </Link>
          </Hightlight>
          <Hightlight secondary small>
            <Link to="article/2">
              <figure>
                <small>NFL</small>
                <img
                  src={ArticleImg4}
                  alt="Por que esse gesto mudou a NFL pra sempre"
                />
              </figure>
              <h1>Por que esse gesto mudou a NFL pra sempre</h1>
              <span>
                por <strong>Murilo Megale</strong>
              </span>
            </Link>
          </Hightlight>
        </Col>
      </Row>
    </HightlightsWrapper>
  );
};

const ArticlesFeed = () => {
  return (
    <ArticlesFeedWrapper>
      Feed
      <div>Articles</div>
    </ArticlesFeedWrapper>
  );
};

const Sidebar = () => {
  return (
    <SidebarWrapper>
      Sidebar
      <div> Videos</div>
    </SidebarWrapper>
  );
};

const Main = () => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={18}>
          <ArticlesFeed />
        </Col>
        <Col lg={6}>
          <Sidebar />
        </Col>
      </Row>
    </MainWrapper>
  );
};

export default function Home() {
  return (
    <Wrapper>
      <Content>
        <HightlightArticles />
        <Main />
        <section />
      </Content>
    </Wrapper>
  );
}
