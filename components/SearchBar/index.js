import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useDebounce } from 'use-debounce';
import { SearchOutlined } from '@ant-design/icons';

import { Wrapper } from './styles';

import api from '../../api';

/*
 * Click outside hook
 */
function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

const ResultsType = ({ item }) => {
  if (item) {
    const type = item.sys.contentType.sys.id;

    switch (type) {
      case 'article':
        return (
          <li key={item.sys.id}>
            <Link href="/articles/[slug]" as={`/articles/${item.fields.slug}`}>
              <a>
                <img src={item.fields.featuredImage.fields.file.url} alt={item.fields.title} />
                <span>
                  <strong>{item.fields.title}</strong>
                  <p>{item.fields.shortDescription}</p>
                </span>
              </a>
            </Link>
          </li>
        )
      case 'episode':
        return (
          <li key={item.sys.id}>
            <Link
              href="/shows/[slug]/episode/[episode]"
              as={`/shows/${item.fields.show.fields.slug}/episode/${item.fields.slug}`}
            >
              <a>
                <img src={item.fields.featuredImage.fields.file.url} alt={item.fields.title} />
                <span>
                  <strong>{item.fields.title}</strong>
                  <p>{item.fields.shortDescription}</p>
                </span>
              </a>
            </Link>
          </li>
        )
      case 'show':
        return (
          <li key={item.sys.id}>
            <Link
              href="/shows/[slug]"
              as={`/shows/${item.fields.slug}`}
            >
              <a>
                <img src={item.fields.showImage.fields.file.url} alt={item.fields.title} />
                <span>
                  <strong>{item.fields.title}</strong>
                  <p>{item.fields.showDescription}</p>
                </span>
              </a>
            </Link>
          </li>
      )
      default:
        return <li>Something else: {type}</li>
    }

  } else {
    return <li>No results</li>
  }
};

const SearchResults = ({ results, loading, query }) => {
  return (
    <>
      { results.length !== 0 ? (
        <ul>
          {results.map((item) => <ResultsType item={item} key={item.sys.id} />)}
        </ul>
      ) : (
        <ul>
          <li>
            { (query !== '' && !loading) && 'Nenhum resultado encontrado. Tente novamente.'}
            { (query === '' && !loading) && 'Comece a digitar o que procura...'}
            { (query !== '' && loading) && 'Procurando...'}
          </li>
        </ul>
      )}
    </>
  );
};

const SearchBar = ({ nav, drawer }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [queryInput] = useDebounce(query, 500);
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  useEffect(() => {
    async function searchQuery() {
      if (queryInput !== '') {
        setIsComponentVisible(true);
        setLoading(true);

        const response = await api.getEntries({
          limit: 10,
          query: queryInput
        });
        console.log('RESPONSE', response.items);
        setLoading(false);
        setResults(response.items);
      } else {
        setIsComponentVisible(false);
      }
    }
    searchQuery();
  }, [queryInput]);

  function handleOnFocus() {
    setIsComponentVisible(true);
  }

  return (
    <Wrapper nav={nav} drawer={drawer} ref={ref} inputFocus={isComponentVisible}>
      <div>
        <SearchOutlined />
        <input
          placeholder="Buscar..."
          onFocus={handleOnFocus}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        {isComponentVisible && <SearchResults results={results} loading={loading} query={query} />}
      </div>
    </Wrapper>
  );
};

export default SearchBar;
