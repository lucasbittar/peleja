import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import {
  Wrapper,
  Content,
  Hightlight,
  FeedTile,
  CategoryTag,
  ProgramsWrapper,
  VideoTile,
  HightlightsWrapper,
  ArticlesFeedWrapper,
  SidebarWrapper,
  SectionHeader,
  MainWrapper,
} from '~/components/Layout';

import ArticleImg from '~/assets/article-highlight.jpg';
import ArticleImg2 from '~/assets/article-img-2.jpg';
import ArticleImg3 from '~/assets/article-img-3.jpg';
import ArticleImg4 from '~/assets/article-img-4.jpg';
import ArticleImg5 from '~/assets/article-img-5.jpg';

import Program1 from '~/assets/p1.jpg';
import Program2 from '~/assets/p2.jpg';
import Program3 from '~/assets/p3.jpg';
import Program4 from '~/assets/p4.jpg';

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
                  <CategoryTag type="futebol">Futebol</CategoryTag>
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
                <CategoryTag type="futebol">Futebol</CategoryTag>
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
                <CategoryTag type="nba">NBA</CategoryTag>
                <img
                  src={ArticleImg5}
                  alt="O dia que jogadores e torcedores caíram na porrada"
                />
              </figure>
              <h1>O dia que jogadores e torcedores caíram na porrada</h1>
              <span>
                por <strong>Murilo Megale</strong>
              </span>
            </Link>
          </Hightlight>
          <Hightlight secondary small>
            <Link to="article/2">
              <figure>
                <CategoryTag type="nfl">NFL</CategoryTag>
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
      <SectionHeader>
        <h1>Últimas notícias</h1>
      </SectionHeader>
      <FeedTile highlight>
        <Link to="article/2">
          <figure>
            <CategoryTag type="futebol">Futebol</CategoryTag>
            <img
              src={ArticleImg2}
              alt="Esse é o real motivo de tanto nordestino torcer pra Flamengo e Corinthians"
            />
          </figure>
          <h1>
            Esse é o real motivo de tanto nordestino torcer pra Flamengo e
            Corinthians
          </h1>
          <span>
            por <strong>Murilo Megale</strong> | <strong>1 de Julho</strong>
          </span>
        </Link>
      </FeedTile>
      <FeedTile>
        <Link to="article/2">
          <figure>
            <CategoryTag type="futebol">Futebol</CategoryTag>
            <img
              src={ArticleImg3}
              alt="Por que essa mão na bola antes da Copa envolveu até dinheiro"
            />
          </figure>
          <h1>Por que essa mão na bola antes da Copa envolveu até dinheiro</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            voluptatum dolorum et eos maiores nemo itaque quis debitis tenetur
            eum, sint similique obcaecati.
          </p>
          <span>
            por <strong>Murilo Megale</strong> | <strong>28 de Junho</strong>
          </span>
        </Link>
      </FeedTile>
      <FeedTile>
        <Link to="article/2">
          <figure>
            <CategoryTag type="nfl">NFL</CategoryTag>
            <img
              src={ArticleImg4}
              alt="Por que esse gesto mudou a NFL pra sempre"
            />
          </figure>
          <h1>Por que esse gesto mudou a NFL pra sempre</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            voluptatum dolorum et eos maiores nemo itaque quis debitis tenetur
            eum, sint similique obcaecati.
          </p>
          <span>
            por <strong>Murilo Megale</strong> | <strong>25 de Junho</strong>
          </span>
        </Link>
      </FeedTile>
      <FeedTile>
        <Link to="article/2">
          <figure>
            <CategoryTag type="nba">NBA</CategoryTag>
            <img
              src={ArticleImg5}
              alt="O dia que jogadores e torcedores caíram na porrada"
            />
          </figure>
          <h1>O dia que jogadores e torcedores caíram na porrada</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            voluptatum dolorum et eos maiores nemo itaque quis debitis tenetur
            eum, sint similique obcaecati.
          </p>
          <span>
            por <strong>Murilo Megale</strong> | <strong>25 de Junho</strong>
          </span>
        </Link>
      </FeedTile>
      <FeedTile highlight>
        <Link to="article/2">
          <figure>
            <CategoryTag type="nfl">NFL</CategoryTag>
            <img
              src={ArticleImg4}
              alt="Por que esse gesto mudou a NFL pra sempre"
            />
          </figure>
          <h1>Por que esse gesto mudou a NFL pra sempre</h1>
          <span>
            por <strong>Murilo Megale</strong> | <strong>25 de Junho</strong>
          </span>
        </Link>
      </FeedTile>
      <FeedTile>
        <Link to="article/2">
          <figure>
            <CategoryTag type="futebol">Futebol</CategoryTag>
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
            voluptatum dolorum et eos maiores nemo itaque quis debitis tenetur
            eum, sint similique obcaecati.
          </p>
          <span>
            por <strong>Murilo Megale</strong> | <strong>1 de Julho</strong>
          </span>
        </Link>
      </FeedTile>
      <FeedTile>
        <Link to="article/2">
          <figure>
            <CategoryTag type="nba">NBA</CategoryTag>
            <img
              src={ArticleImg5}
              alt="O dia que jogadores e torcedores caíram na porrada"
            />
          </figure>
          <h1>O dia que jogadores e torcedores caíram na porrada</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            voluptatum dolorum et eos maiores nemo itaque quis debitis tenetur
            eum, sint similique obcaecati.
          </p>
          <span>
            por <strong>Murilo Megale</strong> | <strong>28 de Junho</strong>
          </span>
        </Link>
      </FeedTile>
    </ArticlesFeedWrapper>
  );
};

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SectionHeader>
        <h1>Vídeos</h1>
        <VideoTile>
          <Link to="article/2">
            <figure>
              <PlayCircleOutlined />
              <img
                src={ArticleImg3}
                alt="Por que essa mão na bola antes da Copa envolveu até dinheiro"
              />
            </figure>
            <h1>
              Por que essa mão na bola antes da Copa envolveu até dinheiro
            </h1>
          </Link>
        </VideoTile>
        <VideoTile>
          <Link to="article/2">
            <figure>
              <PlayCircleOutlined />
              <img
                src={ArticleImg4}
                alt="Por que esse gesto mudou a NFL pra sempre"
              />
            </figure>
            <h1>Por que esse gesto mudou a NFL pra sempre</h1>
          </Link>
        </VideoTile>
        <VideoTile>
          <Link to="article/2">
            <figure>
              <PlayCircleOutlined />
              <img
                src={ArticleImg3}
                alt="Por que essa mão na bola antes da Copa envolveu até dinheiro"
              />
            </figure>
            <h1>
              Por que essa mão na bola antes da Copa envolveu até dinheiro
            </h1>
          </Link>
        </VideoTile>
      </SectionHeader>
    </SidebarWrapper>
  );
};

const Programs = () => {
  return (
    <ProgramsWrapper>
      <Content>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={6}>
            <h2>Programas PELEJA</h2>
            <p>
              Voluptatibus nobis architecto doloribus, debitis, sapiente non.
            </p>
            <Link to="/">Todos os programas</Link>
          </Col>
          <Col lg={18}>
            <ul>
              <li>
                <img src={Program1} alt="Radar Peleja" />
                <p>Modi corrupti similique eos, pariatur delectus quia!</p>
              </li>
              <li>
                <img src={Program2} alt="Ponto a Ponto" />
                <p>Jerum quibusdam laudantium ea similique</p>
              </li>
              <li>
                <img src={Program3} alt="Essa Camisa" />
                <p>Kveniet autem similique suscipit minima.</p>
              </li>
              <li>
                <img src={Program4} alt="Fora do Eixo" />
                <p>Consectetur distinctio minima cumque</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Content>
    </ProgramsWrapper>
  );
};

const Main = () => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <ArticlesFeed />
        </Col>
        <Col lg={8}>
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
        <Programs />
        <Main />
        <section />
      </Content>
    </Wrapper>
  );
}
