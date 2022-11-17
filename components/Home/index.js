import moment from 'moment';
import Link from 'next/link';
import Layout from '../../layouts/Main';
import { Row, Col } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import PerfectScrollbar from 'react-perfect-scrollbar';

import FeedTile from '../FeedTile';

import {
  Wrapper,
  Content,
  Highlight,
  CategoryTag,
  HomeBannersWrapper,
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
                  <section>
                    <h1>{a.fields.title}</h1>
                    {i === 0 && <p>{a.fields.shortDescription}</p> }
                    <span>
                      por <strong>{a.fields.articleAuthor.fields.name}</strong>
                    </span>
                  </section>
                </a>
              </Link>
            </Highlight>
          ))}
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
          <FeedTile data={a} key={a.sys.id} />
        ))}
      </ul>
    </ArticlesFeedWrapper>
  )
};

const Sidebar = ({ episodes }) => {
  return (
    <SidebarWrapper>
      <SectionHeader>
        <h1>Assista</h1>
        { episodes.map((e) => (
          <VideoTile key={e.sys.id}>
            <Link
              href="/shows/[slug]/episode/[episode]"
              as={`/shows/${e.fields.show.fields.slug}/episode/${e.fields.slug}`}
            >
              <a>
                <figure>
                  <PlayCircleOutlined />
                  <img src={e.fields.featuredImage.fields.file.url} alt={e.fields.title} />
                  <CategoryTag textColor={e.fields.show.fields.textColor} bgColor={e.fields.show.fields.bgColor}>
                    {e.fields.show.fields.title}
                  </CategoryTag>
                </figure>
                <h1>#{e.fields.episodeNumber} - {e.fields.title}</h1>
              </a>
            </Link>
          </VideoTile>
        ))}
      </SectionHeader>
    </SidebarWrapper>
  );
};

const HomeBanners = ({ banners }) => {
  const numBanners = banners.length;
  const randomNumber = Math.floor(Math.random() * (numBanners - 0) + 0);
  const currentBanner = banners[randomNumber];

  return (
    <HomeBannersWrapper>
      <Row gutter={{ lg: 32 }}>
        <Col lg={32}>
          <a href={currentBanner.fields.url}>
            <img src={currentBanner.fields.bannerImage.fields.file.url} alt={currentBanner.fields.description} target="_blank" />
          </a>
        </Col>
      </Row>
    </HomeBannersWrapper>
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
          <Sidebar episodes={sidebar} />
        </Col>
      </Row>
    </MainWrapper>
  );
};

const Home = ({ articles, featured, highlight, episodes, banners }) => {
  // console.log('ARTICLES', articles);
  // console.log('FEATURED', featured);
  // console.log('HIGHLIGHT', highlight);
  // console.log('episodes', episodes);
  // console.log('BANNERS', banners);
  return (
    <Layout title="PELEJA">
      <Wrapper>
        <Content>
          <HighlightArticles featured={featured} highlight={highlight} />
          <HomeBanners banners={banners} />
          <Main articles={articles} sidebar={episodes} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Home;
