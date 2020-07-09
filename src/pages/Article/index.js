import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import {
  Content,
  FeedTile,
  CategoryTag,
  SidebarWrapper,
  SectionHeader,
  MainWrapper,
  Wrapper,
} from '~/components/Layout';

import { Header, ArticlesContentWrapper } from './styles';

import ArticleImg from '~/assets/article-highlight.jpg';
import ArticleImg3 from '~/assets/article-img-3.jpg';
import ArticleImg4 from '~/assets/article-img-4.jpg';
import ArticleImg5 from '~/assets/article-img-5.jpg';

const ArticlesContent = () => {
  return (
    <ArticlesContentWrapper>
      <Header>
        <figure>
          <img src={ArticleImg} alt="Article title" />
          <figcaption>Foto: Algum fonte</figcaption>
        </figure>
      </Header>
      <p className="subhead">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        incidunt doloribus aliquam iusto deserunt modi necessitatibus quasi
        cupiditate delectus laudantium temporibus dolores, ab, laboriosam
        repellat, repellendus praesentium vero omnis vel? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Error, doloremque aliquam sint
        ducimus dolorem aliquid sapiente qui placeat deleniti totam molestiae
        eveniet? Eius blanditiis quisquam animi iste tempore voluptatum est.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quae fugiat
        excepturi possimus cum laborum quo odit, voluptatibus vel, incidunt
        deleniti architecto! Illo aspernatur optio alias architecto, ad
        asperiores quae. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Atque repellendus a ipsam id sint harum fuga optio ab enim dolore
        eligendi dicta non cumque accusantium quis alias nam, magni tempore?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ratione
        quam mollitia vitae voluptatibus eligendi tenetur. Suscipit nesciunt
        sint iste adipisci laboriosam molestias natus id, est, officia
        repellendus reprehenderit dolorum. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Totam nisi sint pariatur voluptates cumque
        perspiciatis vel atque reprehenderit obcaecati qui voluptatum, itaque
        quibusdam cum ipsa at, in veniam quidem dolorum.
      </p>
      <iframe
        title="video"
        width="100%"
        height="415"
        src="https://www.youtube.com/embed/Jzab1k3YTiI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h3>
        Modi in tempora tempore inventore veniam incidunt odio suscipit ipsum,
        fugit ea sapiente culpa quo!
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste
        natus excepturi earum, facere impedit aperiam necessitatibus praesentium
        aliquid accusamus corporis ex eveniet numquam, non expedita eligendi
        minus. Esse, soluta! Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Nam dolor in aut aliquam veritatis necessitatibus nesciunt vitae
        repellat quia molestiae vero, magnam dicta nisi reiciendis? Rem debitis
        id modi sint! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores placeat ipsa voluptatibus. Dolores vitae consectetur nam
        sequi quaerat dolorum eius odit corporis quasi officia architecto modi,
        necessitatibus, consequatur, illum aut? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Impedit dolores facilis sed, dolorum quam
        cupiditate ratione, recusandae nemo corrupti omnis sapiente veritatis
        atque ducimus! At quod corrupti ipsum culpa maiores? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dicta vel id odio, sit porro ex
        perferendis nostrum vitae? Nihil dolorem error consectetur quia
        reprehenderit impedit commodi aliquid libero illo dolorum.
      </p>
      <blockquote cite="Felipe Melo">
        Recusandae asperiores deserunt quia rerum aperiam iusto eveniet sint
        sunt ullam unde repellat?
      </blockquote>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut id porro
        dolores, tenetur nemo quod assumenda? Nulla pariatur nemo, amet qui quis
        dolorum veritatis beatae iure voluptatibus doloribus dolorem inventore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nobis, voluptates molestias sint id, enim dicta, molestiae qui explicabo
        quas esse aperiam voluptate! Possimus nostrum cupiditate voluptatem,
        velit deleniti natus. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quibusdam nostrum doloribus nihil quis dolor voluptatum eius est,
        quas dignissimos quisquam reprehenderit molestiae animi commodi a
        quaerat dolorem laudantium velit obcaecati! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Cumque facilis repudiandae maxime aliquam
        nulla quam, iure fugiat sed fuga labore facere possimus? Similique
        commodi harum blanditiis laudantium accusamus quo eius.
      </p>
    </ArticlesContentWrapper>
  );
};

const Main = () => {
  return (
    <MainWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={16}>
          <ArticlesContent />
        </Col>
        <Col lg={8}>
          <Sidebar />
        </Col>
      </Row>
    </MainWrapper>
  );
};

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SectionHeader>
        <h1>Mais Vistos</h1>
        <FeedTile highlight>
          <Link to="article/2">
            <figure>
              <CategoryTag type="assista">Assista</CategoryTag>
              <img
                src={ArticleImg3}
                alt="Por que essa mão na bola antes da Copa envolveu até dinheiro"
              />
            </figure>
            <h1>
              Por que essa mão na bola antes da Copa envolveu até dinheiro
            </h1>
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
              <CategoryTag type="ouça">Ouça</CategoryTag>
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
              <CategoryTag type="leia">Leia</CategoryTag>
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
      </SectionHeader>
    </SidebarWrapper>
  );
};

export default function Article() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <CategoryTag type="assista">Assista</CategoryTag>
          <h1>Lembra quando Felipe Melo era pit bull de verdade?</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            itaque delectus assumenda recusandae cupiditate culpa reprehenderit,
            suscipit tenetur non animi veniam quaerat laudantium quos sint,
            earum, porro eligendi! Tenetur, doloribus.
          </h2>
          <div>
            <span>
              por <strong>Murilo Megale</strong> | <strong>2 de Julho</strong>
            </span>
          </div>
        </Header>
        <Main />
      </Content>
    </Wrapper>
  );
}
