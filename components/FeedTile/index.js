import moment from 'moment';
import Link from 'next/link';

import { CategoryTag } from '../Layout';

import { FeedTileWrapper } from './styles';

moment.locale('pt-BR');

const FeedTile = ({ data, noAuthor }) => {
  return (
    <FeedTileWrapper key={data.sys.id}>
      <Link
        href="/articles/[slug]"
        as={`/articles/${data.fields.slug}`}
      >
        <div>
          <figure>
            <Link
              href="/category/[slug]"
              as={`/category/${data.fields.category.fields.slug}`}
            >
              <a>
                <CategoryTag textColor={data.fields.category.fields.textColor} bgColor={data.fields.category.fields.backgroundColor}>
                  {data.fields.category.fields.title}
                </CategoryTag>
              </a>
            </Link>
            <img src={data.fields.featuredImage.fields.file.url} alt={data.fields.title} />
          </figure>
          <section>
            <h1>{data.fields.title}</h1>
            <p>{data.fields.shortDescription}</p>
            <span>
              { noAuthor ? (
                <>
                  <strong>{moment(data.sys.createdAt).format('D [de] MMMM')}</strong>
                </>
              ) : (
                <>
                  por <strong>{data.fields.articleAuthor.fields.name}</strong> | <strong>{moment(data.sys.createdAt).format('D [de] MMMM')}</strong>
                </>
              )}
            </span>
          </section>
        </div>
      </Link>
    </FeedTileWrapper>
  )
}

export default FeedTile;
