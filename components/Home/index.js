import moment from 'moment';
import Link from 'next/link';
import Layout from '../../layouts/Main';
import { Row, Col } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import {
  Wrapper,
  Content,
  Highlight,
  FeedTile,
  CategoryTag,
  ShowsWrapper,
  VideoTile,
  HightlightsWrapper,
  ArticlesFeedWrapper,
  SidebarWrapper,
  SectionHeader,
  MainWrapper,
} from '../Layout';

moment.locale('pt-BR');

const HighlightArticles = ({ featured, highlight }) => {
  return (
    <HightlightsWrapper>
      <Row gutter={{ lg: 32 }}>
        <Col lg={16}>
          <Highlight>
            <Link 
              href="/articles/[slug]"
              as={`/articles/${highlight.fields.slug}`}
            >
              <a>
                <figure>
                  <img src={highlight.fields.featuredImage.fields.file.url} alt={highlight.fields.title} />
                </figure>
                <div>
                  <div>
                    <CategoryTag textColor={highlight.fields.category.fields.textColor} bgColor={highlight.fields.category.fields.backgroundColor}>{highlight.fields.category.fields.title}</CategoryTag>
                  </div>
                  <h1>
                    <span>{highlight.fields.title}</span>
                  </h1>
                  <p>{highlight.fields.shortDescription}</p>
                  <div>
                    <span>
                      por <strong>{highlight.fields.articleAuthor.fields.name}</strong>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </Highlight>
        </Col>
        <Col lg={8}>
          { featured.map((a, i) => (
            <Highlight key={a.sys.id} secondary small={i !== 0}>
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
                  {i === 0 && <p>{a.fields.shortDescription}</p> }
                  <span>
                    por <strong>{a.fields.articleAuthor.fields.name}</strong>
                  </span>
                </a>
              </Link>
            </Highlight>
          ))}
          {/*
          <Hightlight secondary small>
            <Link href="article/2">
              <a>
                <figure>
                  <CategoryTag type="leia">Leia</CategoryTag>
                  <img
                    src="/assets/article-img-5.jpg"
                    alt="O dia que jogadores e torcedores caíram na porrada"
                  />
                </figure>
                <h1>O dia que jogadores e torcedores caíram na porrada</h1>
                <span>
                  por <strong>Murilo Megale</strong>
                </span>
              </a>
            </Link>
          </Hightlight>
          <Hightlight secondary small>
            <Link href="article/2">
              <a>
                <figure>
                  <CategoryTag type="ouça">Ouça</CategoryTag>
                  <img
                    src="/assets/article-img-4.jpg"
                    alt="Por que esse gesto mudou a NFL pra sempre"
                  />
                </figure>
                <h1>Por que esse gesto mudou a NFL pra sempre</h1>
                <span>
                  por <strong>Murilo Megale</strong>
                </span>
              </a>
            </Link>
          </Hightlight>
          */}
        </Col>
      </Row>
    </HightlightsWrapper>
  );
};

const ArticlesFeed = ({ articles }) => {
  return (
    <ArticlesFeedWrapper>
      <SectionHeader>
        <h1>Últimas do PELEJA</h1>
      </SectionHeader>
      <ul>
        { articles.map((a) => (
          <FeedTile key={a.sys.id}>
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
    </ArticlesFeedWrapper>
  )
};

const Sidebar = ({ videos }) => {
  return (
    <SidebarWrapper>
      <SectionHeader>
        <h1>Vídeos</h1>
        { videos.map((v) => (
          <VideoTile key={v.sys.id}>
            <Link 
              href="/articles/[slug]"
              as={`/articles/${v.fields.slug}`}
            >
              <a>
                <figure>
                  <PlayCircleOutlined />
                  <img src={v.fields.featuredImage.fields.file.url} alt={v.fields.title} />
                </figure>
                <h1>{v.fields.title}</h1>
              </a>
            </Link>
          </VideoTile>
        ))}
      </SectionHeader>
    </SidebarWrapper>
  );
};

const Shows = ({ shows }) => {
  return (
    <ShowsWrapper>
      <Content>
        <Row gutter={{ lg: 32 }}>
          <Col lg={6}>
            <h2>Escolha o programa</h2>
            <p>
              Voluptatibus nobis architecto doloribus, debitis, sapiente non.
            </p>
            <a href="/">Todos os programas</a>
          </Col>
          <Col lg={18}>
            <ul>
              { shows.map((s) => (
                <li key={s.sys.id}>
                  <Link 
                    href="/shows/[slug]"
                    as={`/shows/${s.fields.slug}`}
                  >
                    <a>
                      <img src={s.fields.showImage.fields.file.url} alt={s.fields.title} />
                    </a>
                  </Link>
                  <p>{s.fields.showDescription}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Content>
    </ShowsWrapper>
  );
};

const Main = ({ articles, sidebar }) => {
  return (
    <MainWrapper>
      <Row gutter={{ lg: 32 }}>
        <Col lg={16}>
          <ArticlesFeed articles={articles} />
        </Col>
        <Col lg={8}>
          <Sidebar videos={sidebar} />
        </Col>
      </Row>
    </MainWrapper>
  );
};

const Home = ({ articles, featured, highlight, sidebar, shows }) => {
  console.log('ARTICLES', articles);
  console.log('FEATURED', featured);
  console.log('HIGHLIGHT', highlight);
  console.log('SIDEBAR', sidebar);
  console.log('SHOWS', shows);
  return (
    <Layout title="PELEJA">
      <Wrapper>
        <Content>
          <HighlightArticles featured={featured} highlight={highlight} />
          <Shows shows={shows} />
          <Main articles={articles} sidebar={sidebar} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Home;
