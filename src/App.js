import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import './config/reactotron';
import store from './store';

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wrapper, Container, Content } from './styles/components'

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
      <ToastContainer autoClose={3000} />
      <Provider store={store}>
      </Provider>
    </BrowserRouter>
  </Provider>
);

export default App;
