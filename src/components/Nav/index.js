import React from 'react';
import { Link } from 'react-router-dom';

import {
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import { Wrapper } from './styles';

import Logo from '~/assets/logo-white.png';

export default function Nav() {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <img src={Logo} alt="PELEJA" />
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
