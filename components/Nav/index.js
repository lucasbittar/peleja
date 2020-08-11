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
            <li>Leia</li>
            <li>Assista</li>
            <li>Ouça</li>
            <li>Compre</li>
            <li>Fale</li>
            <li>
              <SearchOutlined style={{ color: '#fff', marginLeft: '1rem' }} />
            </li>
          </ul>
          <ul>
            <li>
              <InstagramOutlined />
            </li>
            <li>
              <FacebookOutlined />
            </li>
            <li>
              <YoutubeOutlined />
            </li>
            <li>
              <TwitterOutlined />
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

