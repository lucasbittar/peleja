import React from 'react';
import { Router } from 'react-router-dom';
import { Col, Row } from 'antd';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Nav from '~/components/Nav';

import Routes from './routes';
import history from './services/history';

import Logo from '~/assets/logo-white.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <Row
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <Col flex={1}>
            <img src={Logo} alt="PELEJA" />
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            PELEJA &copy; 2020 - Todos os direitos reservados
          </Col>
        </Row>
        <Row>
          <ul>
            <li>Destaques</li>
            <li>Futebol</li>
            <li>NFL</li>
            <li>NBA</li>
            <li>Podcasts</li>
          </ul>
        </Row>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router history={history}>
      <Nav />
      <Routes />
      <Footer />
      <GlobalStyle />
    </Router>
  );
}
