import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import {
  Wrapper,
  Content,
  Hightlight,
  HightlightsWrapper,
} from '~/components/Layout';

import ArticleImg from '~/assets/article-highlight.jpg';

const HightlightArticles = () => {
  return (
    <HightlightsWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" lg={16}>
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
                    LEMBRA QUANDO FELIPE MELO ERA PIT BULL DE VERDADE?
                  </span>
                </h1>
                <div>
                  <span>
                    por <strong>Murilo Megale</strong>
                  </span>
                </div>
              </div>
            </Link>
          </Hightlight>
        </Col>
        <Col className="gutter-row" lg={8}>
          <Hightlight secondary>
            <Link to="article/2">
              <small>Futebol</small>
              <h1>
                Nemo natus totam voluptatibus voluptatem eligendi inventore!
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                voluptatum dolorum et eos maiores nemo itaque quis debitis
                doloremque consequatur repellat rem inventore illum mollitia
                tenetur eum, sint similique obcaecati.
              </p>
              <span>
                por <strong>Murilo Megale</strong>
              </span>
            </Link>
            <Link to="article/2">
              <small>NFL</small>
              <h1>
                Desciunt eius facilis omnis deleniti reiciendis et officia!
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                voluptatum dolorum et eos maiores nemo itaque quis debitis
                doloremque consequatur repellat rem inventore illum mollitia
                tenetur eum, sint similique obcaecati.
              </p>
              <span>
                por <strong>Murilo Megale</strong>
              </span>
            </Link>
            <Link to="article/2">
              <small>NBA</small>
              <h1>Brro quia velit rependus.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                voluptatum dolorum et eos maiores nemo itaque quis debitis
                doloremque consequatur repellat rem inventore illum mollitia
                tenetur eum, sint similique obcaecati.
              </p>
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

export default function Home() {
  return (
    <Wrapper>
      <Content>
        <HightlightArticles />
        <section />
      </Content>
    </Wrapper>
  );
}
