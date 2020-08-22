import React from 'react';
import Link from 'next/link';

import {
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import { Wrapper } from './styles';

export default function Nav() {
  return (
    <Wrapper>
      <div>
        <Link href="/">
          <a title="Home">
            <img src="/assets/logo-white.png" alt="PELEJA" />
          </a>
        </Link>
        <aside>
          <ul className="nav-desktop">
            <li><Link href="/category/leia"><a>Leia</a></Link></li>
            <li><Link href="/shows"><a>Assista</a></Link></li>
            <li><Link href="/category/ouca"><a>Ouça</a></Link></li>
            <li>Fale</li>
            {/*
            <li>Compre</li>
            */}
            <li>
              <SearchOutlined style={{ color: '#fff', marginLeft: '1rem' }} />
            </li>
          </ul>
          <ul>
            <li>
              <a href="http://instagram.com/tudopeleja" target="_blank">
                <InstagramOutlined />
              </a>
            </li>
            <li>
              <a href="http://facebook.com/tudopeleja" target="_blank">
                <FacebookOutlined />
              </a>
            </li>
            <li>
              <a href="http://youtube.com/peleja" target="_blank">
                <YoutubeOutlined />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/tudopeleja" target="_blank">
                <TwitterOutlined />
              </a>
            </li>
          </ul>
          <div>
            <MenuOutlined style={{ color: '#fff', fontSize: '18px' }} />
          </div>
        </aside>
      </div>
    </Wrapper>
  );
}

