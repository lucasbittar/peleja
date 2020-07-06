import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Nav from '~/components/Nav';

import Routes from './routes';
import history from './services/history';

export default function App() {
  return (
    <Router history={history}>
      <Nav />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
