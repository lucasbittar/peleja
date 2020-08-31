import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer } from 'antd';

import SearchBar from '../SearchBar';

import {
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  CloseOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import { Wrapper } from './styles';

const NavTitle = ({ onClose }) => {
  return (
    <>
      <Link href="/">
        <a title="Home">
          <img src="/assets/logo-white.png" alt="PELEJA" />
        </a>
      </Link>
      <CloseOutlined onClick={() => onClose()} />
    </>
  );
}

const NavItems = () => {
  return (
    <>
      <ul className="nav-desktop">
        <li><Link href="/category/leia"><a>Leia</a></Link></li>
        <li><Link href="/shows"><a>Assista</a></Link></li>
        <li><Link href="/category/ouca"><a>Ouça</a></Link></li>
        <li>Fale</li>
        {/*
        <li>Compre</li>
        */}
        <li>
          <SearchBar />
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
    </>
  )
}

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Wrapper>
      <div>
        <Link href="/">
          <a title="Home">
            <img src="/assets/logo-white.png" alt="PELEJA" />
          </a>
        </Link>
        <aside>
          <NavItems />
          <div>
            <MenuOutlined onClick={showDrawer} style={{ color: '#fff', fontSize: '18px' }} />
          </div>
        </aside>
      </div>
      <Drawer
        title={<NavTitle onClose={onClose} />}
        className="nav-drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <NavItems />
      </Drawer>
    </Wrapper>
  );
}

