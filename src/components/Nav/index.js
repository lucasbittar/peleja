import React from 'react';
import { Link } from 'react-router-dom';

import {
  InstagramOutlined,
  YoutubeOutlined,
  SearchOutlined,
  MenuOutlined,
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
          <ul className="nav-desktop">
            <li>Destaques</li>
            <li>Futebol</li>
            <li>NFL</li>
            <li>NBA</li>
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
          <div>
            <MenuOutlined style={{ color: '#111', fontSize: '18px' }} />
          </div>
        </aside>
      </div>
    </Wrapper>
  );
}
