import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Drawer } from 'antd';

import SearchBar from '../SearchBar';

import {
  InstagramOutlined,
  YoutubeOutlined,
  SearchOutlined,
  FacebookOutlined,
  TwitterOutlined,
  CloseOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import api from '../../api';

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

const NavItems = ({ navItems }) => {
  return (
    <>
      <ul className="nav-desktop">
        <li><Link href="/category/leia"><a>Leia</a></Link></li>
        <li><Link href="/shows"><a>Assista</a></Link></li>
        <li><Link href="/category/ouca"><a>Ouça</a></Link></li>
        { navItems.map((item) => (
          <li key={item.sys.id}>
            <Link 
              href="/pages/[slug]"
              as={`/pages/${item.fields.slug}`}
            >
              <a>{item.fields.title}</a>
            </Link>
          </li>
        ))}
        <li><Link href="/shows/bandeja"><a>Bandeja</a></Link></li>
        {/*
        <li>Fale</li>
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

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {

    async function fetchNavItems() {

      try {
        const navItems = await api.getEntries({
          content_type: 'page',
          'fields.isVisible': true
        });
        setNavItems(navItems.items);

      } catch (err) {
        console.log('Something went wrong');
      }
    }

    fetchNavItems();
    
  }, []);

  return (
    <Wrapper>
      <div>
        <Link href="/">
          <a title="Home">
            <img src="/assets/logo-white.png" alt="PELEJA" />
          </a>
        </Link>
        <aside>
          <NavItems navItems={navItems} />
          <div>
            <SearchOutlined onClick={showDrawer} style={{ color: '#fff', fontSize: '18px', marginRight: 15, marginLeft: -5, paddingLeft: '1rem', borderLeft: '1px solid #666' }} />
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

export default Nav;
