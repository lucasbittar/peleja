import React from 'react';
import { Link } from 'react-router-dom';

import {
  InstagramOutlined,
  YoutubeOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import { Wrapper } from './styles';

import Logo from '~/assets/logo.png';

export default function Nav() {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <img src={Logo} alt="PELEJA" />
        </Link>
        <aside>
          <ul>
            <li>Destaques</li>
            <li>Podcasts</li>
          </ul>
          <ul>
            <li>
              <InstagramOutlined />
            </li>
            <li>
              <YoutubeOutlined />
            </li>
            <li>
              <SearchOutlined />
            </li>
          </ul>
        </aside>
      </div>
    </Wrapper>
  );
}
